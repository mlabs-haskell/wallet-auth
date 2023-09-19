import { MetaMaskInpageProvider } from "@metamask/providers";
import { toHexString } from './utils.js';
import { Address, SignedData, SignatureMethod } from './types.js';
export { Address, SignedData, SignatureMethod } from './types.js';
import { Window as KeplrWindow } from "@keplr-wallet/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

declare const window: Window &
   typeof globalThis & {
     ethereum: MetaMaskInpageProvider | undefined
   }

export interface AvailableWallet<T> {
    connect(): Promise<T>;
}

export interface ConnectedWallet {
    getAddresses(): Promise<Address[]>;
    signData(data: string): Promise<SignedData>;
};

interface StateEventMap {
  'addressChanged': CustomEvent<{address: Address}>;
}

type Cip30WalletTag = string;

export class ConnectedCip30
implements ConnectedWallet {
    private cip30: any;
    private name: string;
    public useRewardAddress: boolean;
    constructor (cip30: any, name: string, useRewardAddress: boolean) {
        this.cip30 = cip30;
        this.name = name;
        this.useRewardAddress = useRewardAddress;
    }

    async getAddresses() {
        return await (
            this.useRewardAddress ?
                this.cip30.getRewardAddresses() :
                this.cip30.getUsedAddresses()
        );
    }

    async signData(data) {
        const addresses = await this.getAddresses();
        if (addresses.length == 0) {
            throw "No addresses available!";
        }

        const address = addresses[0];

        data = address + '\n' + data;

        const result = await this.cip30.signData(
            address,
            toHexString(new TextEncoder().encode(data)));

        return {
            signature: result.key + ':' + result.signature,
            address: address,
            data,
            method: SignatureMethod.Cip30
        };
    }
}

export class AvailableCip30 implements AvailableWallet<ConnectedCip30> {
    public tag: string;
    public useRewardAddress: boolean;
    constructor (tag: Cip30WalletTag, useRewardAddress?: boolean) {
        this.useRewardAddress = useRewardAddress || false;

        if (typeof (window as any).cardano === 'object' &&
            typeof (window as any).cardano[tag] === 'object' &&
            typeof (window as any).cardano[tag].enable === 'function') {
            this.tag = tag;
        } else {
            setTimeout(() => {
                if (typeof (window as any).cardano === 'object' &&
                    typeof (window as any).cardano[tag] === 'object' &&
                    typeof (window as any).cardano[tag].enable === 'function') {
                    console.error(
                        "Wallet " + tag +
                            " has not yet been initialized at call time, but is " +
                            "available now. Consider initializing with a " +
                            "delay for the extension to have time to inject" +
                            " the API entry point into the browser window."
                    );
                }
            }, 100);
            throw "Wallet not available: " + tag;
        }
    }

    async connect() {
        // We assume that once available API can't disappear from `window`.
        // Is it true?
        const cip30 = await (window as any).cardano[this.tag].enable();
        return new ConnectedCip30(cip30, this.tag, this.useRewardAddress);
    }
}

export class ConnectedMetamask
implements ConnectedWallet {
    private provider: MetaMaskInpageProvider;
    constructor (provider: MetaMaskInpageProvider) {
        this.provider = provider;
    }

    async getAddresses() {
        const response = await this.provider.request({ method: 'eth_requestAccounts', params: [] });
        const success = response as string[];
        if (success.length) {
            return success
        } else {
            throw "No addresses available!";
        }
    }

    async signData(data: string) {
        const addresses = await this.getAddresses();
        if (addresses.length == 0) {
            throw "No addresses found!";
        }
        const address = addresses[0];
        data = address + '\n' + data;
        const signature = await this.provider.request({method: 'personal_sign', params: [data, address]});
        return {
            signature: signature as unknown as string,
            address,
            data,
            method: SignatureMethod.Metamask
        };
    }
}

export class AvailableMetamask implements AvailableWallet<ConnectedMetamask> {
    private provider: MetaMaskInpageProvider | null;
    constructor () {
        this.provider = null;
        if (typeof window.ethereum == 'object') {
            if (window.ethereum.isMetaMask) {
                this.provider = window.ethereum;
            } else if ((window.ethereum as any).providerMap) {
                // providerMap is a hack that other wallets use to make
                // themselves accessible even when MetaMask is present
                // (by default MetaMask occupies the whole `window.ethereum`
                // object).
                this.provider = (window.ethereum as any).providerMap.get('MetaMask') || null;
            } else if ((window.ethereum as any).providers) {
                // another way some wallets do this is by pushing MetaMask to
                // `window.ethereum.providers`.
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

export class AvailableKeplr implements AvailableWallet<ConnectedKeplr> {
    private chainId: string;

    constructor(chainId: string) {
        if (!window.keplr) {
            throw "Keplr is not available";
        }
        this.chainId  = chainId;
    }

    async connect() {
        await window.keplr.enable(this.chainId);
        return new ConnectedKeplr(this.chainId);
    }
}

export class ConnectedKeplr implements ConnectedWallet {
    private chainId: string;

    constructor (chainId: string) {
        this.chainId = chainId;
    }

    async getAddresses() {
        const { bech32Address } = await window.keplr.getKey(this.chainId);
        return [bech32Address];
    }

    async signData(data: string) {
        const address = (await this.getAddresses())[0];
        data = address + '\n' + data;
        const response = await window.keplr.signArbitrary(this.chainId, address, data);
        return {
            signature: response.pub_key.type + ':' +
                response.pub_key.value + ':' +
                response.signature,
            address,
            data,
            method: SignatureMethod.Keplr
        };
    }
}

export class AvailablePhantom implements AvailableWallet<ConnectedPhantom> {
    private provider: any;
    constructor() {

        const isPhantomInstalled: boolean = (
            // @ts-ignore
            !!window.phantom?.solana?.isPhantom
        );
        if (!isPhantomInstalled) {
            throw "Phantom wallet is not available!";
        }

        // @ts-ignore
        this.provider = window.phantom.solana;
    }

    async connect() {
        // can throw
        const resp = await this.provider.request({ method: "connect" });
        return new ConnectedPhantom(this.provider);
    }
}

export class ConnectedPhantom implements ConnectedWallet {
    private provider: any;

    constructor (provider: any) {
        this.provider = provider;
    }

    async getAddresses() {
        return [ this.provider.publicKey.toString() ];
    }

    async signData(data: string) {
        data = (await this.getAddresses())[0] + '\n' + data;
        const encodedMessage = new TextEncoder().encode(data);
        const response = await this.provider.signMessage(encodedMessage, "utf8");
        // public key is address in Phantom, so there is no need to include
        // address in the message
        return {
            signature: toHexString(response.signature),
            address: response.publicKey.toString(),
            data,
            method: SignatureMethod.Phantom
        };
    }
}
