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
