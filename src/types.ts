export type Address = string;

export type SignedData = {
    signature: string,
    address: Address,
    data: string,
    method: SignatureMethod
};

export enum SignatureMethod {
    Cip30 = 'Cip30',
    Metamask = 'Metamask',
    Keplr = 'Keplr',
};
