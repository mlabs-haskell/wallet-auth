# wallet-auth

Implements unified primitives for building sign-in/sign-up flows
with different kinds of wallets:

- All CIP-30 compatible wallets (Cardano)
- Metamask
- Keplr (Cosmos)
- Phantom (Solana)

Consists of two parts:

- `client` part is meant to be light-weight and usable in the browser,
it only handles data signatures by interacting with wallets.
- `server` part is used to validate signatures produced by the `client`.

# Notes

* As an additional security measure, we require that signed data always starts with the address used and a new line character.
* For Cardano wallets either a stake key or a payment key can be used
(see `AvailableCip30` constructor).
* Only mainnet addresses are allowed by default
(pass the proper option to `AvailableCip30` constructor if you want to use testnet)
* Some wallets (NuFi in particular) masquerades themselves as Eternl and Flint by means of using tha same `tag`.
If you still want to use NuFi for some reason, but want to fix that,
you can pass `name` to specify which exactly wallet you want
(see wallet discovery section down below).

## Tests

The `client` library provide a test HTML page that can be used to create `SignedData` objects
using various wallets.
You have to have wallets of your choice installed in your browser.

```bash
cd client
npm install
npm run pack
sleep1; xdg-open http://localhost:8080/index.html & miniserve .
```

There are some tests in `server` to ensure `SignedData` objects can be properly validated or rejected:

```bash
cd server
npm run build
npm run test
```

## Wallet Dsicovery

This section provides sample code to discpver wallets.

```ts
import { AvailableWallet, ConnectedWallet, AvailableMetamask, AvailableCip30, AvailableKeplr, AvailablePhantom } from 'wallet-auth-client';

/**
 *
 */
function discoverWallets(): Map<string, AvailableWallet> {

  const availableWallets: Map<string, AvailableWallet> = new Map<string, AvailableWallet>();

  function probeCip30(tuple : [string, string]): AvailableCip30 {
    let [wtag, wname] = tuple;
    try {
        availableWallets.set(wtag, new AvailableCip30(wtag, wname));
      } catch (err) {
        console.log(err);
      }
    }

  let knownCip30Wallets : [string, string][] =
    [ ["LodeWallet", "LodeWallet"]
    , ["begin", "Begin Wallet"]
    , ["eternl", "eternl"]
    , ["flint", "Flint Wallet"]
    , ["gerowallet", "GeroWallet"]
    , ["lace", "lace"]
    , ["nami", "Nami"]
    , ["nufi", "NuFi"]
    , ["typhoncip30", "Typhon Wallet"]
    , ["yoroi", "yoroi"]
    ]

  knownCip30Wallets.map(probeCip30);

  try {
    availableWallets.set("metamask", new AvailableMetamask());
  } catch (err) {
    console.log(err);
  }

  try {
    availableWallets.set("keprl", new AvailableKeplr('cosmoshub-4'));
  } catch (err) {
    console.log(err);
  }

  try {
    availableWallets.set("phantom", new AvailablePhantom());
  } catch (err) {
    console.log(err);
  }

  console.log(availableWallets);
  return(availableWallets);
}
/**
 *
 */
function discoverWallets(): Map<string, AvailableWallet> {

  const availableWallets: Map<string, AvailableWallet> = new Map<string, AvailableWallet>();

  function probeCip30(tuple : [string, string]): AvailableCip30 {
    let [wtag, wname] = tuple;
    try {
        availableWallets.set(wtag, new AvailableCip30(wtag, wname));
      } catch (err) {
        console.log(err);
      }
    }

  let knownCip30Wallets : [string, string][] =
    [ ["LodeWallet", "LodeWallet"]
    , ["begin", "Begin Wallet"]
    , ["eternl", "eternl"]
    , ["flint", "Flint Wallet"]
    , ["gerowallet", "GeroWallet"]
    , ["lace", "lace"]
    , ["nami", "Nami"]
    , ["nufi", "NuFi"]
    , ["typhoncip30", "Typhon Wallet"]
    , ["yoroi", "yoroi"]
    ]

  knownCip30Wallets.map(probeCip30);

  try {
    availableWallets.set("metamask", new AvailableMetamask());
  } catch (err) {
    console.log(err);
  }

  try {
    availableWallets.set("keprl", new AvailableKeplr('cosmoshub-4'));
  } catch (err) {
    console.log(err);
  }

  try {
    availableWallets.set("phantom", new AvailablePhantom());
  } catch (err) {
    console.log(err);
  }

  console.log(availableWallets);
  return(availableWallets);
}
```
