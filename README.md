# wallet-auth

Implements sign-in-with-wallet authorization flow for 3 kinds of wallets:

- Metamask
- CIP-30 (Cardano)
- Keplr (Cosmos)

Consists of two parts:

- client part is meant to be light-weight and usable in the browser, it only handles data signatures by interacting with wallets
- server part is used for validation
