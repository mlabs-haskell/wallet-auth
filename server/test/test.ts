import {describe, expect, test} from '@jest/globals';
import { validate } from '../src/index.js';

describe('CIP-30', () => {
    test('validate works for a fixture (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820911120647f7e54a04ac5d1244cdfe03adda929e0e98641f72d35560a97324d68:845846a201276761646472657373583901d4c4cd6111549287aeb1d107a5bbbad398a820c19f03a78259bae886819748aad888ecaa83f32c49cb97184c8371a7bbf33c022dabbf7d0aa166686173686564f4586d616464723171383276666e74707a393266397061776b3867733066646d6874666533327071637830733866757a74786177337035706a617932346b7967616a3467387565766638396577787a767364633630776c6e3873707a6d32616c303539717974637761650a686969692158405de955c40c240dcf46eef3e2697b2480e218ff73bd2afe2df8facab3e449a986bd6931f5f8e111e130b1b26490d621a327e7fc5ccd8edb9c6c792c5f8ab1410f",
                "address": "addr1q82vfntpz92f9pawk8gs0fdmhtfe32pqcx0s8fuztxaw3p5pjay24kygaj4g8uevf89ewxzvsdc60wln8spzm2al059qytcwae",
                "data": "addr1q82vfntpz92f9pawk8gs0fdmhtfe32pqcx0s8fuztxaw3p5pjay24kygaj4g8uevf89ewxzvsdc60wln8spzm2al059qytcwae\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for a fixture (base address, testnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820911120647f7e54a04ac5d1244cdfe03adda929e0e98641f72d35560a97324d68:845846a201276761646472657373583900d4c4cd6111549287aeb1d107a5bbbad398a820c19f03a78259bae886819748aad888ecaa83f32c49cb97184c8371a7bbf33c022dabbf7d0aa166686173686564f45872616464725f746573743171723276666e74707a393266397061776b3867733066646d6874666533327071637830733866757a74786177337035706a617932346b7967616a3467387565766638396577787a767364633630776c6e3873707a6d32616c303539713861397733780a68696969215840eacfb22d94db48c176f8759faa515827b054d64511bcae5e7750e11010bf6039976cb1c12a46969cf0c530576d201e88025abefceca584f9eddb3256dec4b00e",
                "address": "addr_test1qr2vfntpz92f9pawk8gs0fdmhtfe32pqcx0s8fuztxaw3p5pjay24kygaj4g8uevf89ewxzvsdc60wln8spzm2al059q8a9w3x",
                "data": "addr_test1qr2vfntpz92f9pawk8gs0fdmhtfe32pqcx0s8fuztxaw3p5pjay24kygaj4g8uevf89ewxzvsdc60wln8spzm2al059q8a9w3x\nhiii!",
                "method": "Cip30"
            })
        ).toBe(true);
    });

    test('validate works for a fixture (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a401010327200621582046b20b1f721b4b29e6e20818619fd17c324834650aea0cec03b0abe40c3236da:84582aa201276761646472657373581de1819748aad888ecaa83f32c49cb97184c8371a7bbf33c022dabbf7d0aa166686173686564f458417374616b653175787165776a39326d7a79776532357237766b796e6a756872707867787564386830656e6371336434776c68367a733077726c716d0a68696969215840c5f068479ea3384ef3f9d15b5981b531e18d91b3b47d5cc48dd53d42df39b790dd9528438ca3f8fa4742da808d8a5b574b025b6e05a3582219914007d2984a02",
                "address": "stake1uxqewj92mzywe25r7vkynjuhrpxgxud8h0encq3d4wlh6zs0wrlqm",
                "data": "stake1uxqewj92mzywe25r7vkynjuhrpxgxud8h0encq3d4wlh6zs0wrlqm\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for a fixture (reward address, testnet)', () => {
        expect(
            validate({
                "signature": "a401010327200621582046b20b1f721b4b29e6e20818619fd17c324834650aea0cec03b0abe40c3236da:84582aa201276761646472657373581de0819748aad888ecaa83f32c49cb97184c8371a7bbf33c022dabbf7d0aa166686173686564f458467374616b655f7465737431757a7165776a39326d7a79776532357237766b796e6a756872707867787564386830656e6371336434776c68367a736779666179780a68696969215840743f7bd29002473e756ba302bedde515a46c595d361da60f9480e6260ab37cb161db5d231fd7e81adb41939568e11aa8f4b69a6d94284004a520c00dc5c0a10b",
                "address": "stake_test1uzqewj92mzywe25r7vkynjuhrpxgxud8h0encq3d4wlh6zsgyfayx",
                "data": "stake_test1uzqewj92mzywe25r7vkynjuhrpxgxud8h0encq3d4wlh6zsgyfayx\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate fails for a fixture without address', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f445686969692158403255069e2e81ab8f9ad8e416834492173dda4b54d4627923beab3730b428aa91d254c462cc86eb0df034fd6d1e5444451bc3770a353d4c2f7930654fa011e40b",
                "address": "addr1uy9kzkv0tyxhw74ay9a7hak2za228mjdy86luxht0x0gj7q2rk96u",
                "data": "hiii!",
                "method": "Cip30"
            })).toBe(false);
    });

    test('fails for a fixture with altered data', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f45840653130623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a68696969215840f400462379f6ecb91e48d46be614adc554e5f696f03ee7a582c62ebaa8ba34c1391a233680d5dcf0ad6ad7fa0d63f27c5320d4dbd07458f693fb440680478803",
                "address": "addr1uy9kzkv0tyxhw74ay9a7hak2za228mjdy86luxht0x0gj7q2rk96u",
                "data": "addr1uy9kzkv0tyxhw74ay9a7hak2za228mjdy86luxht0x0gj7q2rk96u\nhiii!~",
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
