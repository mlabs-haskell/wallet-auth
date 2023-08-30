import { bech32 } from 'bech32'

// Bit encodings used in this function can be found here:
// https://github.com/input-output-hk/cardano-ledger/blob/d14ff95a51e7c229cc64a07579976d9a2bdd9078/eras/alonzo/test-suite/cddl-files/alonzo.cddl#L152
export function decodeAddress(address: Uint8Array): string {

    if (!(address instanceof Uint8Array)) {
        throw "Incorrect address CBOR";
    }

    let prefix = "addr";
    const network = address[0] & 0b00001111;
    const header = (address[0] & 0b11110000) >> 4;

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

    switch (network) {
        case 0b0000:
            prefix += '_test';
            break;
        case 0b0001:
            break;
        default:
            throw "Unknown network id: " + network;
    }

    const words = bech32.toWords(address)

    return bech32.encode(prefix, words, 700);
}
