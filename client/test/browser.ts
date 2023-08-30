// this webpage attempts to trigger 3 signature popups for each wallet
import { AvailableMetamask, AvailableCip30, AvailableKeplr } from '../src/index';

document.addEventListener('DOMContentLoaded', async () => {
    setTimeout(async () => {
        const av = new AvailableMetamask();
        const connected = await av.connect();
        const signature = await connected.signData("asd");
        console.log(signature);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', async () => {
    setTimeout(async () => {
        const av = new AvailableCip30('nami');
        console.log(av);
        const connected = await av.connect();
        console.log(connected);
        const sig = await connected.signData('hiii!');
        console.log(sig);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', async () => {
    setTimeout(async () => {
        const av = new AvailableKeplr('cosmoshub-4');
        console.log(av);
        const connected = await av.connect();
        console.log(connected);
        const sig = await connected.signData('hiii!');
        console.log(sig);
    }, 1000);
});
