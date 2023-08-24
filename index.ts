import { MetaMaskInpageProvider } from "@metamask/providers";

declare const window: Window &
   typeof globalThis & {
     ethereum: MetaMaskInpageProvider | undefined
   }

type Address = string;

interface AvailableWallet<T> {
    connect(): Promise<T>;
}

interface ConnectedWallet {
    // isAvailable(): Promise<boolean>;
    getAddresses(): Promise<Address[]>;
    signData(data: String): Promise<String>;
};

interface StateEventMap {
  'addressChanged': CustomEvent<{address: Address}>;
}

interface StateEventTarget extends EventTarget {
  addEventListener<K extends keyof StateEventMap>(
    type: K,
    listener: (ev: StateEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void;
}

type Cip30WalletTag = string;

class ConnectedCip30
extends (
    EventTarget as {
        new(): StateEventTarget;
        prototype: StateEventTarget
    }
)
implements ConnectedWallet {
    private cip30: any;
    constructor (cip30: any) {
        super();
        this.cip30 = cip30;
    }
    async getAddresses() {
        return [];
    }

    // @ts-ignore
    async signData(_data) {
        // TODO
    }
}

class AvailableCip30 implements AvailableWallet<ConnectedCip30> {
    public tag: string;
    constructor (tag: Cip30WalletTag) {
        if (typeof (window as any).cardano === 'object' &&
            typeof (window as any).cardano[this.tag] === 'object' &&
            typeof (window as any).cardano[this.tag].connect === 'function') {
            this.tag = tag;
        } else {
            throw "Wallet not available: " + this.tag;
        }
    }

    async connect() {
        // We assume that once available API can't disappear from `window`.
        // Is it true?
        const cip30 = await (window as any).cardano[this.tag].connect();
        return new ConnectedCip30(cip30);
    }
}

type EthereumProvider = any;

class ConnectedMetamask
extends (
    EventTarget as {
        new(): StateEventTarget;
        prototype: StateEventTarget
    }
)
implements ConnectedWallet {
    private provider: EthereumProvider;
    constructor (provider: EthereumProvider) {
        super();
        this.provider = provider;
    }

    async getAddresses() {
        return await this.provider.send('eth_requestAccounts', []);
    }

    async signData(data) {
        const signer = await this.provider.getSigner();
        return await signer.signMessage(data);
    }
}

class AvailableMetamask implements AvailableWallet<ConnectedMetamask> {
    private provider: MetaMaskInpageProvider | null;
    constructor () {
        this.provider = null;
        if (typeof window.ethereum == 'object') {
            if (window.ethereum.isMetaMask) {
                this.provider = window.ethereum;
            } else if ((window.ethereum as any).providerMap) {
                // providerMap is a hack that other wallets use to make themselves accessible
                this.provider = (window.ethereum as any).providerMap.get('MetaMask') || null;
            } else if ((window.ethereum as any).providers) {
                // providers array is a hack that other wallets use to make themselves accessible
                this.provider = (window.ethereum as any).providers.find(p => p.isMetaMask) || null;
            }
        }
        if (this.provider === null) {
            throw "Metamask is not available";
        }
    }

    async connect() {
        const res = await this.provider.request({
            method: 'eth_requestAccounts',
            params: []
        });
        return new ConnectedMetamask(this.provider);
    }
}

const av = new AvailableCip30('gero');
const connected = await av.connect();

// const s = new ConnectedCip30({});

// s.addEventListener('addressChanged', (ev) => {
//   ev.detail.address; // strongly typed event
// });
