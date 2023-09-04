import assert from 'assert';
import {describe, expect, test} from '@jest/globals';
import { validate } from '../src/index';

describe('CIP-30', () => {
    test('validate works for a fixture (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820b4bc886be7b2d0fdfe55065efa0c88c66861f7963a8d53f77d85cbc0ab6a8c35:845846a201276761646472657373583901b92056bd816d47c7d664100c0bce83cc6d64189947088bd196bbde580b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f458783031623932303536626438313664343763376436363431303063306263653833636336643634313839393437303838626431393662626465353830623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a686969692158404ab0e9ad6cfca01e6c5a638dab2ca82c7a0f727a6252378a7bf5d14627629053fc5cc26534c6520bd5a5e36a38428e52c1ea2bdb42dbd1fdd2394f5092f7e309",
                "address": "01b92056bd816d47c7d664100c0bce83cc6d64189947088bd196bbde580b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "01b92056bd816d47c7d664100c0bce83cc6d64189947088bd196bbde580b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for a fixture (base address, testnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820b4bc886be7b2d0fdfe55065efa0c88c66861f7963a8d53f77d85cbc0ab6a8c35:845846a201276761646472657373583900b92056bd816d47c7d664100c0bce83cc6d64189947088bd196bbde580b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f458783030623932303536626438313664343763376436363431303063306263653833636336643634313839393437303838626431393662626465353830623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a68696969215840af0d450114580a5ac5339217fba1bf99ddce4529a96aeee3f013aa53dace2d08502a1ea8292a403cc3c8889e20e9a10f47b23082e99e711c0095f8d5396a9907",
                "address": "00b92056bd816d47c7d664100c0bce83cc6d64189947088bd196bbde580b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "00b92056bd816d47c7d664100c0bce83cc6d64189947088bd196bbde580b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978\nhiii!",
                "method": "Cip30"
            })
        ).toBe(true);
    });

    test('validate works for a fixture (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f45840653130623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a68696969215840f400462379f6ecb91e48d46be614adc554e5f696f03ee7a582c62ebaa8ba34c1391a233680d5dcf0ad6ad7fa0d63f27c5320d4dbd07458f693fb440680478803",
                "address": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for a fixture (reward address, testnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de00b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f45840653030623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a68696969215840acd0fa0b48f7360049d5a2aad61886b73a1b2ea42d2492ff1ae6eb2f2d468d9221201b10876c2076154ea4834d40ad0b13dd583b3bb47b27071b4a196461db06",
                "address": "e00b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "e00b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate fails for a fixture without address', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f445686969692158403255069e2e81ab8f9ad8e416834492173dda4b54d4627923beab3730b428aa91d254c462cc86eb0df034fd6d1e5444451bc3770a353d4c2f7930654fa011e40b",
                "address": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "hiii!",
                "method": "Cip30"
            })).toBe(false);
    });

    test('fails for a fixture with altered data', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f45840653130623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a68696969215840f400462379f6ecb91e48d46be614adc554e5f696f03ee7a582c62ebaa8ba34c1391a233680d5dcf0ad6ad7fa0d63f27c5320d4dbd07458f693fb440680478803",
                "address": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978\nhiii!~",
                "method": "Cip30"
            })).toBe(false);
    });
});

describe('Metamask', () => {
    test('validate works for a fixture', () => {
        expect(
            validate({
                "signature": "0xcac67f4601f9a1aec7d22bd4b409315670acc1b93f900138fb2c1b5095a6a6df180469cf03e4ca80ef0f09501597833ad80a4efce015ddeb0e558750ff301f3b1b",
                "address": "0x3537ca3e9834e6b6c1634bfd30851d5d6ad5b182",
                "data": "0x3537ca3e9834e6b6c1634bfd30851d5d6ad5b182\nasd",
                "method": "Metamask"
            })
        ).toBe(true);
     })

    test('validate fails for a fixture with altered data', () => {
        expect(
            validate({
                "signature": "0xcac67f4601f9a1aec7d22bd4b409315670acc1b93f900138fb2c1b5095a6a6df180469cf03e4ca80ef0f09501597833ad80a4efce015ddeb0e558750ff301f3b1b",
                "address": "0x3537ca3e9834e6b6c1634bfd30851d5d6ad5b182",
                "data": "0x3537ca3e9834e6b6c1634bfd30851d5d6ad5b182\nasd~",
                "method": "Metamask"
            })
        ).toBe(false);
     })
});


describe('Keplr', () => {
    test('validate works for a fixture', () => {
        expect(
            validate({
                "signature": "tendermint/PubKeySecp256k1:A45Xo1FxFOWSYcAUdH58jNAhnmKiKpje0rzlxYdR0Am7:3D+T+R6IyHVZDS6/gM76QNcqoQ73hhIc26gUgceGIK9l4jSoW2JWnFJ/FLa7pG40/4RgTLn7Ms+SvDVz0EJzNQ==",
                "address": "cosmos14v639xlw3wpu6zfum8wj7p5rjshcz5h8mkfpey",
                "data": "cosmos14v639xlw3wpu6zfum8wj7p5rjshcz5h8mkfpey\nhiii!",
                "method": "Keplr"
            })).toBe(true);
    });

    test('validate fails for a fixture without address in data', () => {
        expect(
            validate({
                "signature": "tendermint/PubKeySecp256k1:A45Xo1FxFOWSYcAUdH58jNAhnmKiKpje0rzlxYdR0Am7:c9FqKWUUA1Azbanph8cEqNL+Hq1xZcmeMHSSnRbXPddoSvDyG+OVYWOkZlw1QqshkFYR/19CMzrCmUWkOy1g4w==",
                "address": "cosmos14v639xlw3wpu6zfum8wj7p5rjshcz5h8mkfpey",
                "data": "hiii!",
                "method": "Keplr"
            })).toBe(false);
    });
    test('validate fails for a fixture with altered data', () => {
        expect(
            validate({
                "signature": "tendermint/PubKeySecp256k1:A45Xo1FxFOWSYcAUdH58jNAhnmKiKpje0rzlxYdR0Am7:3D+T+R6IyHVZDS6/gM76QNcqoQ73hhIc26gUgceGIK9l4jSoW2JWnFJ/FLa7pG40/4RgTLn7Ms+SvDVz0EJzNQ==",
                "address": "cosmos14v639xlw3wpu6zfum8wj7p5rjshcz5h8mkfpey",
                "data": "cosmos14v639xlw3wpu6zfum8wj7p5rjshcz5h8mkfpey\nhiii!~",
                "method": "Keplr"
            })).toBe(false);
    });
});


describe('Phantom', () => {
    test('validate works for a fixture', () => {
        expect(validate({
            "signature": "785baead02b74c34df8320058be428ea82fdb29c271e55b5bfbc7fbdfeecb8fa37ebd3c10cf805c2e96ef2c65fc9d0060c82091fffefed2ee773d65270c98904",
            "address": "3SoP3sycHnJnhG6J4p32qNs6KYQ5Gzitfc1hBun7JTav",
            "data": "3SoP3sycHnJnhG6J4p32qNs6KYQ5Gzitfc1hBun7JTav\nhiii!",
            "method": "Phantom"
        })).toBe(true);
    });
    test('validate fails for a bad fixture', () => {
        expect(validate({
            "signature": "785baead02b74c34df8320058be428ea82fdb29c271e55b5bfbc7fbdfeecb8fa37ebd3c10cf805c2e96ef2c65fc9d0060c82091fffefed2ee773d65270c98904",
            "address": "3SoP3sycHnJnhG6J4p32qNs6KYQ5Gzitfc1hBun7JTav",
            "data": "3SoP3sycHnJnhG6J4p32qNs6KYQ5Gzitfc1hBun7JTav\nhiii!~",
            "method": "Phantom"
        })).toBe(false);
    });

    test('validate fails for a fixture without address', () => {
        expect(
            validate({
                "signature": "a83007d668183a66419c0d8f73112acc61fbacac1cd29eb1872e1fba5fbf7e0c0326930bcb23e9c840225e57cb59d75d8a1f363391c82ff21dbd09bee1282704",
                "address": "3SoP3sycHnJnhG6J4p32qNs6KYQ5Gzitfc1hBun7JTav",
                "data": "hiii!",
                "method": "Phantom"
            })).toBe(false);
    });
});
