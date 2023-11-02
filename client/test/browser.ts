// this webpage attempts to trigger 3 signature popups for each wallet
import { AvailableMetamask, AvailableCip30, AvailableKeplr, AvailablePhantom } from '../src/index.js';

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

mkTest('CIP-30 nami, base address', async () => {
    const av = new AvailableCip30('nami');
    // pass `true` as the second argument to force using
    // reward address:
    // const av = new AvailableCip30('nami', true);
    console.log('AvailableCip30', av);
    const connected = await av.connect();
    console.log('ConnectedCip30', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('CIP-30 signature', signature);
    return signature;
});

document.body.appendChild(document.createElement('br'));

mkTest('CIP-30 nami, reward address', async () => {
    const av = new AvailableCip30('nami', true);
    // pass `true` as the second argument to force using
    // reward address:
    // const av = new AvailableCip30('nami', true);
    console.log('AvailableCip30', av);
    const connected = await av.connect();
    console.log('ConnectedCip30', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('CIP-30 signature', signature);
    return signature;
});

document.body.appendChild(document.createElement('br'));

mkTest('CIP-30 typhon', async () => {
    const av = new AvailableCip30('typhoncip30');
    // pass `true` as the second argument to force using
    // reward address:
    // const av = new AvailableCip30('nami', true);
    console.log('AvailableCip30', av);
    const connected = await av.connect();
    console.log('ConnectedCip30', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('CIP-30 signature', signature);
    return signature;
});

document.body.appendChild(document.createElement('br'));

mkTest('CIP-30 yoroi', async () => {
    const av = new AvailableCip30('yoroi');
    // pass `true` as the second argument to force using
    // reward address:
    // const av = new AvailableCip30('nami', true);
    console.log('AvailableCip30', av);
    const connected = await av.connect();
    console.log('ConnectedCip30', connected, await connected.getAddresses());
    const signature = await connected.signData('hiii!');
    console.log('CIP-30 signature', signature);
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

document.body.appendChild(textarea);
