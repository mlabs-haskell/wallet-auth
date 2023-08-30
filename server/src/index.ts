import { SignedData, SignatureMethod } from 'wallet-auth-client';
import verifyDataSignature from '@cardano-foundation/cardano-verify-datasignature';
import { utils } from 'ethers';
import { verifyADR36Amino } from '@keplr-wallet/cosmos'

export function validate(signedData: SignedData): boolean {
    switch (signedData.method) {
        case SignatureMethod.Cip30: {
            const [key, signature] = signedData.signature.split(':');
            return verifyDataSignature(signature, key, signedData.data);
        }

        case SignatureMethod.Metamask: {
            const pk = utils.recoverPublicKey(
                utils.arrayify(
                    utils.hashMessage(
                        utils.toUtf8Bytes(signedData.data))),
                signedData.signature
            );
            const address = utils.computeAddress(pk);
            if (!signedData.data.toLowerCase()
                .startsWith(address.toLowerCase() + '\n') ||
                signedData.address.toLowerCase() != address.toLowerCase()) {
                return false;
            }

            return true;
        }

        case SignatureMethod.Keplr: {
            const bech32Prefix = "cosmos";
            const [pubKeyType, pubKeyBase64, signatureBase64] =
                signedData.signature.split(':');
            const pubKey = new Uint8Array(
                Buffer.from(pubKeyBase64, 'base64')
            );
            const signature = new Uint8Array(
                Buffer.from(signatureBase64, 'base64')
            );
            return verifyADR36Amino(
                bech32Prefix,
                signedData.address,
                signedData.data,
                pubKey,
                signature
            );
        }
    }
    return false;
}
