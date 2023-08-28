import { bech32 } from 'bech32'

type CBOR = Uint8Array;

export function decodeAddress(address: CBOR): string {

    if (!(address instanceof Uint8Array)) {
        throw "Incorrect address CBOR";
    }

    let prefix = "addr";
    const network = address[0] & 0b11110000;
    const header = address[0] & 0b00001111;

    switch (header) {
        case 0b0111:
            // reward, kh
            prefix = "stake";
            break;
        case 0b1111:
            // reward, sh
            prefix = "stake";
            break;
    }

    const words = bech32.toWords(address)

    if (!network) {
        prefix += "_test";
    }

    return bech32.encode(prefix, words, 700);
}
