import EventEmitter from 'events';

type Address = String;

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

// const s = new ConnectedCip30({});

// s.addEventListener('addressChanged', (ev) => {
//   ev.detail.address; // strongly typed event
// });
