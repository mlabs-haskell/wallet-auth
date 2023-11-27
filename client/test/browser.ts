// this webpage attempts to trigger 3 signature popups for each wallet
import { AvailableMetamask, AvailableCip30, AvailableKeplr, AvailablePhantom } from '../src/index.js';


const cip30knownWallets : Record<string, string> = {
    lode: 'LodeWallet',
    begin: 'begin',
    eternl: 'eternl',
    flint: 'flint',
    gero: 'gerowallet',
    lace: 'lace',
    nami: 'nami',
    nufi: 'nufi', // also 'ccvault'
    typhon: 'typhoncip30',
    yoroi: 'yoroi',
 }
const textarea = document.createElement('textarea');

const mkTest = (walletName, fn) => {
    const button = document.createElement('button');
    button.textContent = "Connect and sign using " + walletName;
    document.body.appendChild(button);
    button.addEventListener('click', () => fn().then(res => {
        textarea.value = JSON.stringify(res, null, 4);
    }));
};

mkTest('Metamask', async () => {
    const av = new AvailableMetamask();
    console.log('AvailableMetamask', av);
    const connected = await av.connect();
    console.log('ConnectedMetamask', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('Metamask signature', signature);
    return signature;
});

document.body.appendChild(document.createElement('br'));

mkTest('Keplr', async () => {
    const av = new AvailableKeplr('cosmoshub-4');
    console.log('AvailableKeplr', av);
    const connected = await av.connect();
    console.log('ConnectedKeplr', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('Keplr signature', signature);
    return signature;
});

document.body.appendChild(document.createElement('br'));

mkTest('Phantom', async () => {
    const av = new AvailablePhantom();
    console.log('AvailablePhantom', av);
    const connected = await av.connect();
    console.log('ConnectedPhantom', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('Phantom signature', signature);
    return signature;
});

document.body.appendChild(document.createElement('br'));

// cip30

async function cip30handler(av: AvailableCip30) {
    console.log('AvailableCip30', av);
    const connected = await av.connect();
    console.log('ConnectedCip30', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('CIP-30 signature', signature);
    return signature;
}

for (const key in cip30knownWallets) {
    const value = cip30knownWallets[key];

    mkTest(key +', base address, mainnet', async () => {
        const av = new AvailableCip30(value);
        return cip30handler(av);
    });
    document.body.appendChild(document.createElement('br'));

    mkTest(key +', stake address, mainnet', async () => {
        const av = new AvailableCip30(value, null, true);
        return cip30handler(av);
    });
    document.body.appendChild(document.createElement('br'));

    mkTest(key +', base address, testnet', async () => {
        const av = new AvailableCip30(value, null, false, true);
        return cip30handler(av);
    });
    document.body.appendChild(document.createElement('br'));

    mkTest(key +', stake address, testnet', async () => {
        const av = new AvailableCip30(value, null, true, true);
        return cip30handler(av);
    });
    document.body.appendChild(document.createElement('br'));
}

document.body.appendChild(textarea);
