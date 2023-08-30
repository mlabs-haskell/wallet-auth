import assert from 'assert';
import {describe, expect, test} from '@jest/globals';
import { validate } from '../src/index';

describe('CIP-30', () => {
    test('validate works for a fixture', () => {
        expect(
            validate({
                "signature": "a4010103272006215820bcdb3c3fbcf589c625a61921501a4aeb7807c4182106d9585d509345121ccb9e:84582aa201276761646472657373581de10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978a166686173686564f45840653130623631353938663539306437373761626432313762656266366361313735346133656534643231663566653161656237393965383937380a68696969215840f400462379f6ecb91e48d46be614adc554e5f696f03ee7a582c62ebaa8ba34c1391a233680d5dcf0ad6ad7fa0d63f27c5320d4dbd07458f693fb440680478803",
                "address": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978",
                "data": "e10b61598f590d777abd217bebf6ca1754a3ee4d21f5fe1aeb799e8978\nhiii!",
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
