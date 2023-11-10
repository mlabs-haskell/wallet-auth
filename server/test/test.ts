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

    // wallet-specific
    test('validate works for Lode (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a401010327200621582061deebb74f0097ff860d97b55964e65eb3c692031b1d5fc902321e5ebfda71f3:845846a20127676164647265737358390180eef4758969da58ee638e4097f6bfb5da1c092159ea369daab629edcd977a75aa974e49e2b57404181968ef259cf5c950e3c926564ead62a166686173686564f4586d6164647231717871776161723433393561356b38777677387970396c6b6837366135387166793976373564356134326d7a6e6d77646a616138743235686665793739647435717376706a363830796b7730746a32737530796a76346a77343433716c653377666a0a68696969215840c1263c48fd96256f24d5354726c7c262b088221171fd367cd7643091c1f37a91c804bd54d1c8ff5046e0e141c9723f00b18b44c885bc17e83cfacb373739a409",
                "address": "addr1qxqwaar4395a5k8wvw8yp9lkh76a58qfy9v75d5a42mznmwdjaa8t25hfey79dt5qsvpj680ykw0tj2su0yjv4jw443qle3wfj",
                "data": "addr1qxqwaar4395a5k8wvw8yp9lkh76a58qfy9v75d5a42mznmwdjaa8t25hfey79dt5qsvpj680ykw0tj2su0yjv4jw443qle3wfj\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Lode (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a40101032720062158208e0aadddf7f3a6393ad2d0c0b984b72c163b49b54e111bb4e4690909edef11dc:84582aa201276761646472657373581de1cd977a75aa974e49e2b57404181968ef259cf5c950e3c926564ead62a166686173686564f458417374616b65317538786577376e3434327435756a307a6b343671677871656472686a7438383465396777386a6678326538323663737a37777879370a68696969215840ee8a2f8a146e091cb838f03ae008f97dfe361bf962126f93f8980d2f646f9def8039ac354ac88b6c8fdd3c4f970170417cd1e3f6cf80ed111fd714075bf16c08",
                "address": "stake1u8xew7n442t5uj0zk46qgxqedrhjt884e9gw8jfx2e826csz7wxy7",
                "data": "stake1u8xew7n442t5uj0zk46qgxqedrhjt884e9gw8jfx2e826csz7wxy7\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });



    test('validate works for Begin (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820f7d75f8d78e6784cc1fdd7a3ed4cac6ea9dce35cc4467e67827c2bd2a8aba668:845846a20127676164647265737358390130b2783583b96c4aa99171d029a2774fdf35bcf1ac9f5f11ff97e2c45ca9220c40808a8057773a10a55b48c2bce93d1863c20c88dfae9c7da166686173686564f4586d616464723171796374793770347377756b636a34666a3963617132647a776138613764647537786b66376863336c37743739337a75347933716373797133327139776165367a7a6a346b6a787a686e356e3678727263677867336861776e3337737861726a356b0a68696969215840c5bb6e372ee666eb7a73188a6c3a2238f48d394586b7e670bd5b077a663a4c510f3ae0d2ed2630468d5478d6d82045ff4caafa497ce3450dcc2cbed4450af50a",
                "address": "addr1qycty7p4swukcj4fj9caq2dzwa8a7ddu7xkf7hc3l7t793zu4y3qcsyq32q9wae6zzj4kjxzhn5n6xrrcgxg3hawn37sxarj5k",
                "data": "addr1qycty7p4swukcj4fj9caq2dzwa8a7ddu7xkf7hc3l7t793zu4y3qcsyq32q9wae6zzj4kjxzhn5n6xrrcgxg3hawn37sxarj5k\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Begin (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820be9b669a116341357562f1f3d26845c779d0313128778217e1064fa5c92bc503:84582aa201276761646472657373581de15ca9220c40808a8057773a10a55b48c2bce93d1863c20c88dfae9c7da166686173686564f458417374616b6531753977326a677376677a716734717a68777561707066326d667270746536666172703375797279676d376866636c677a656c686b730a6869696921584059d9affd0db0127f86fa22ee770fb80780c86cfe80c202a9c33f46e9d04f982c6cf98e509e7681c92bd3345ec71ca9df6c29bf4e0aa9cb91f7637997ecddb008",
                "address": "stake1u9w2jgsvgzqg4qzhwuappf2mfrpte6farp3uyrygm7hfclgzelhks",
                "data": "stake1u9w2jgsvgzqg4qzhwuappf2mfrpte6farp3uyrygm7hfclgzelhks\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Eternl (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820be15abcb0f4ce2c77b413336416ea65a351ca3b1364df3f9132ff67c6a750243:845846a201276761646472657373583900fb73ed59488976d5fbed1f301e4f93fa1f05f64c99f14c19c9549506ebab4dedd8081094ab96c20a33ef2c8b2ae871b89609461244a7ffafa166686173686564f45872616464725f746573743171726168386d3265667a79686434306d6135306e71386a306a3061703770306b666a766c7a6e71656539326632706874346478376d6b71677a7a323268396b7a7067653737747974397435387277796b70397270793339386c3768737773326b6d700a686969692158405cee36f09a42fa18c57133acc8be315944ece2a325f862a989f35998c6f4239bdf26998ffc27e7ed16d1f98836719fd574fd7da0086e1500a14973fd539d250d",
                "address": "addr_test1qrah8m2efzyhd40ma50nq8j0j0ap7p0kfjvlznqee92f2pht4dx7mkqgzz22h9kzpge77tyt9t58rwykp9rpy398l7hsws2kmp",
                "data": "addr_test1qrah8m2efzyhd40ma50nq8j0j0ap7p0kfjvlznqee92f2pht4dx7mkqgzz22h9kzpge77tyt9t58rwykp9rpy398l7hsws2kmp\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Eternl (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820f9ee3be7e848c247565e9cfef7d6facbbcd5db9f59e67c8f20b1569e46ac784f:84582aa201276761646472657373581de0ebab4dedd8081094ab96c20a33ef2c8b2ae871b89609461244a7ffafa166686173686564f458467374616b655f7465737431757234366b6e30646d717970703939746a6d707135766c30396a396a34367233687a74716a33736a676a6e6c6c74636e7233746c650a6869696921584018847cde2bd01fdc4c2229a4843ad437a8bec99de0ac7b5a7f74fbd5c26a681fc34ecd3779bf9ca6202e930a0d4087b735e4083032ea38972a7098dad828e60a",
                "address": "stake_test1ur46kn0dmqypp99tjmpq5vl09j9j46r3hztqj3sjgjnlltcnr3tle",
                "data": "stake_test1ur46kn0dmqypp99tjmpq5vl09j9j46r3hztqj3sjgjnlltcnr3tle\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Flint (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a40101032720062158206a9f7bfb61c4c6a2430af64dee9e3b0e1e6f60d470a0d9da3854f94a3ce956a5:845846a20127676164647265737358390195aca2463c30390d878dc52b7c16ad7bacc3199e8f7ea6b6d71b7be6a57e2edb0500af66f8dce353bafd5b4e6c6aa8bc3eefec392b0548f9a166686173686564f4586d61646472317178323665676a78387363726a72763833687a6a6b6c716b34346136657363656e3638686166346b3675646868653439306368646b70677134616e303368387232776130366b36776433343233307037616c6b726a32633966727573326e746870340a68696969215840b2f365dc1866fcf034f642eb7d07a640afd9bdf51bf41330436f986b68eab857ed59337123ca15bd2bcbea5957fdff799d2c09dc2241ad093bd0cf73e1e20105",
                "address": "addr1qx26egjx8scrjrv83hzjklqk44a6escen68haf4k6udhhe490chdkpgq4an03h8r2wa06k6wd34230p7alkrj2c9frus2nthp4",
                "data": "addr1qx26egjx8scrjrv83hzjklqk44a6escen68haf4k6udhhe490chdkpgq4an03h8r2wa06k6wd34230p7alkrj2c9frus2nthp4\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Flint (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a401010327200621582035b2232053542c089f1e18d2c5325ea367b760ebbd08c6946a5b5588c8242646:84582aa201276761646472657373581de1a57e2edb0500af66f8dce353bafd5b4e6c6aa8bc3eefec392b0548f9a166686173686564f458417374616b653175786a6875746b6d71357132376568636d6e333438776861746438786336346768736c776c6d706539767a353337677433613970650a6869696921584032f55a4956c9b4f528bb876c3f1c4c16411e14c799e66c962358c453421144e96d06a45411bd85333c76e222cca97297908dd8c9d862d9979ea0d509b5cd3407",
                "address": "stake1uxjhutkmq5q27ehcmn348whatd8xc64ghslwlmpe9vz537gt3a9pe",
                "data": "stake1uxjhutkmq5q27ehcmn348whatd8xc64ghslwlmpe9vz537gt3a9pe\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Gero (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820ab8fc2120cea78091c654993d94730c54b049aaa46926591cce3b9c2ba99f4b5:845869a30127045820ab8fc2120cea78091c654993d94730c54b049aaa46926591cce3b9c2ba99f4b567616464726573735839011085b40c9ae94bb029cd0f0c5138e506e13f91104f2767f43e22882b1ea3382362b079090a8eb28bfd943175c48a96adbe489a85c9e192f7a166686173686564f4586d616464723171796767746471766e743535687670666535387363356663753572777a3075337a70386a77656c3538633367733263373576757a78633473307979733472346a3330376567767434636a396664746437667a6467746a30706a746d73326e346663760a68696969215840c420a3cfbffe723ab213b5380eccaff091cffcdc93c3612faccb5472eda6d66c96f0c43c231a5d508dab6f675ce83ba74e8e0d639d5f03977f765d623a1af209",
                "address": "addr1qyggtdqvnt55hvpfe58sc5fcu5rwz0u3zp8jwel58c3gs2c75vuzxc4s0yys4r4j307egvt4cj9fdtd7fzdgtj0pjtms2n4fcv",
                "data": "addr1qyggtdqvnt55hvpfe58sc5fcu5rwz0u3zp8jwel58c3gs2c75vuzxc4s0yys4r4j307egvt4cj9fdtd7fzdgtj0pjtms2n4fcv\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Gero (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820c6b7c49c5c873af5c6eb054fc40221f5be5cc92400ba973140e374bc074b0733:84584da30127045820c6b7c49c5c873af5c6eb054fc40221f5be5cc92400ba973140e374bc074b07336761646472657373581de11ea3382362b079090a8eb28bfd943175c48a96adbe489a85c9e192f7a166686173686564f458417374616b65317579303278777072763263386a7a673233366567686c763578393675667a356b346b6c7933783539653873653961637832616577390a6869696921584017745f146558a52f4ce4c90cc197594c487f7e79da64a8b6a86a09f24f89814a906f55b1fdb17c62c932ab0f884938878be77d87ce69a7febe5916558c322a01",
                "address": "stake1uy02xwprv2c8jzg236eghlv5x96ufz5k4kly3x59e8se9acx2aew9",
                "data": "stake1uy02xwprv2c8jzg236eghlv5x96ufz5k4kly3x59e8se9acx2aew9\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Lace (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a5010102583901bf0acd97f922e6e35a96be29c3a9ea005aa0ea82b003f3e40192257543393cc043bf517ea2e4188609fb2f696db9f175b627a92cdfffc2eb03272006215820be4860478216b8b40ae079cca8a5b9b8b5870eddd3ecf0c72508771d266916b4:845882a3012704583901bf0acd97f922e6e35a96be29c3a9ea005aa0ea82b003f3e40192257543393cc043bf517ea2e4188609fb2f696db9f175b627a92cdfffc2eb6761646472657373583901bf0acd97f922e6e35a96be29c3a9ea005aa0ea82b003f3e40192257543393cc043bf517ea2e4188609fb2f696db9f175b627a92cdfffc2eba166686173686564f4586d616464723171786c73346e76686c793377646336366a366c7a6e73616661677139346738327332637138756c797178667a32613272387937767173616c32396c32396571637363796c6b746d66646b756c7a61646b7937356a65686c6c63743473676c783866770a686969692158405ee67a0f4357fe98fd9855ea69c25663650f318a72e394e7914dae0ace969d763165ffb814502ae5491e46164ba861898811e51b8476e00f5af06bf654408105",
                "address": "addr1qxls4nvhly3wdc66j6lznsafagq94g82s2cq8ulyqxfz2a2r8y7vqsal29l29eqcscylktmfdkulzadky75jehllct4sglx8fw",
                "data": "addr1qxls4nvhly3wdc66j6lznsafagq94g82s2cq8ulyqxfz2a2r8y7vqsal29l29eqcscylktmfdkulzadky75jehllct4sglx8fw\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Lace (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a5010102581de143393cc043bf517ea2e4188609fb2f696db9f175b627a92cdfffc2eb03272006215820a357565e4ef98c6d602359b1ad28ae078976375a06d99855819908bbee00855b:84584aa3012704581de143393cc043bf517ea2e4188609fb2f696db9f175b627a92cdfffc2eb6761646472657373581de143393cc043bf517ea2e4188609fb2f696db9f175b627a92cdfffc2eba166686173686564f458417374616b65317539706e6a30787167776c347a6c347a75737667767a306d3961356b6d773033776b6d7a303266766d6c6c7539366379616b3036710a686969692158404d100757f9ad968ccada158275238da38b98f943486e70612c01de3591055a2e048fae40a0d0fe934021ceb19c2db4302dfe3c7180eb6a7e614a0a676fd3400d",
                "address": "stake1u9pnj0xqgwl4zl4zusvgvz0m9a5kmw03wkmz02fvmllu96cyak06q",
                "data": "stake1u9pnj0xqgwl4zl4zusvgvz0m9a5kmw03wkmz02fvmllu96cyak06q\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Nami (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820911120647f7e54a04ac5d1244cdfe03adda929e0e98641f72d35560a97324d68:845846a201276761646472657373583900d4c4cd6111549287aeb1d107a5bbbad398a820c19f03a78259bae886819748aad888ecaa83f32c49cb97184c8371a7bbf33c022dabbf7d0aa166686173686564f45872616464725f746573743171723276666e74707a393266397061776b3867733066646d6874666533327071637830733866757a74786177337035706a617932346b7967616a3467387565766638396577787a767364633630776c6e3873707a6d32616c303539713861397733780a68696969215840eacfb22d94db48c176f8759faa515827b054d64511bcae5e7750e11010bf6039976cb1c12a46969cf0c530576d201e88025abefceca584f9eddb3256dec4b00e",
                "address": "addr_test1qr2vfntpz92f9pawk8gs0fdmhtfe32pqcx0s8fuztxaw3p5pjay24kygaj4g8uevf89ewxzvsdc60wln8spzm2al059q8a9w3x",
                "data": "addr_test1qr2vfntpz92f9pawk8gs0fdmhtfe32pqcx0s8fuztxaw3p5pjay24kygaj4g8uevf89ewxzvsdc60wln8spzm2al059q8a9w3x\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Nami (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a401010327200621582046b20b1f721b4b29e6e20818619fd17c324834650aea0cec03b0abe40c3236da:84582aa201276761646472657373581de0819748aad888ecaa83f32c49cb97184c8371a7bbf33c022dabbf7d0aa166686173686564f458467374616b655f7465737431757a7165776a39326d7a79776532357237766b796e6a756872707867787564386830656e6371336434776c68367a736779666179780a68696969215840743f7bd29002473e756ba302bedde515a46c595d361da60f9480e6260ab37cb161db5d231fd7e81adb41939568e11aa8f4b69a6d94284004a520c00dc5c0a10b",
                "address": "stake_test1uzqewj92mzywe25r7vkynjuhrpxgxud8h0encq3d4wlh6zsgyfayx",
                "data": "stake_test1uzqewj92mzywe25r7vkynjuhrpxgxud8h0encq3d4wlh6zsgyfayx\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for NuFi (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a40101032720062158202a12192e83427713195142de0838f8df60fbc9c615d78b416bc7174086b6cf72:845846a2012767616464726573735839018a7578d468afd848bbf87f546822dffafb744411909889fb99e31ac3110269c14f601f828ff340900fcc0e9da45f493ae9b89f547acab03aa166686173686564f4586d61646472317178393832377835647a6861736a396d6c706c346736707a6d6c61306b617a797a786766337a306d6e38333334736333716635757a6e6d71723770676c7536716a71387563723561353330356a776866687a303467376b326b71617132327333726b0a686969692158404a0e3476acb55dc859abd165dd6ac3d981e49653f0a6a82515fc1780d0c5322dc86b5b99cc9a067d2c01f4f107422e618c2f7b08a629d96a63a152ccaea3230b",
                "address": "addr1qx9827x5dzhasj9mlpl4g6pzmla0kazyzxgf3z0mn8334sc3qf5uznmqr7pglu6qjq8ucr5a5305jwhfhz04g7k2kqaq22s3rk",
                "data": "addr1qx9827x5dzhasj9mlpl4g6pzmla0kazyzxgf3z0mn8334sc3qf5uznmqr7pglu6qjq8ucr5a5305jwhfhz04g7k2kqaq22s3rk\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for NuFi (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a40101032720062158201bbb962cf4ae8fd3bba966a03617d679c84b0a058d14e057da59e263c1caa2fa:84582aa201276761646472657373581de1110269c14f601f828ff340900fcc0e9da45f493ae9b89f547acab03aa166686173686564f458417374616b65317579677379367770666173706c713530376471667172377670367736676836663874356d33383635307439747177736e38613070770a6869696921584060849823d940022d4c320365c2e1314eba5add2b2d7a749bd9f9a703ae0e33f5efbfc730cd05e6466326875acef3f1048350d2e4144c386ab8d93c8d21a15c0f",
                "address": "stake1uygsy6wpfasplq507dqfqr7vp6w6gh6f8t5m38650t9tqwsn8a0pw",
                "data": "stake1uygsy6wpfasplq507dqfqr7vp6w6gh6f8t5m38650t9tqwsn8a0pw\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Typhon (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a4010103272006215820980d72a7d872818ec3680e6763e566ce45c9ddbc44302a1c2a4a442fcce36994:845882a301270458390157ebe52dfc35a85b5733a2ba48a5fb3d788efbca375c96f3782ca1c08f307062b8fde27943607d1e3a950339cbc96bcedd57cd112eccc23c676164647265737358390157ebe52dfc35a85b5733a2ba48a5fb3d788efbca375c96f3782ca1c08f307062b8fde27943607d1e3a950339cbc96bcedd57cd112eccc23ca166686173686564f4586d616464723171397437686566646c733636736b366878773374356a39396c7637683372686d65676d346539686e30716b32727379307870637839773861756675357863726172636166327165656530796b686e6b61326c78337a746b766367377134706c776b710a68696969215840bc60e5ddb0009affe7028b1f7ef4c25234e1245a1caee8ecbf80d5afb5308b0b32f330d0965a7f5ad5967ef9a9889c0b0b7826bdef97ff7c5c95c2c2495a8b06",
                "address": "addr1q9t7hefdls66sk6hxw3t5j99lv7h3rhmegm4e9hn0qk2rsy0xpcx9w8aufu5xcrarcaf2qeee0ykhnka2lx3ztkvcg7q4plwkq",
                "data": "addr1q9t7hefdls66sk6hxw3t5j99lv7h3rhmegm4e9hn0qk2rsy0xpcx9w8aufu5xcrarcaf2qeee0ykhnka2lx3ztkvcg7q4plwkq\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Typhon (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a40101032720062158207d03158414cbcb64e0d8fca80102ecc526ad3d6a83c2fa95c7ce21b470f11b56:84584aa3012704581de18f307062b8fde27943607d1e3a950339cbc96bcedd57cd112eccc23c6761646472657373581de18f307062b8fde27943607d1e3a950339cbc96bcedd57cd112eccc23ca166686173686564f458417374616b65317578386e7175727a6872373779373272767037337577353471767575686a7474656d7734306e6733396d7876793071616a397676660a686969692158405bf1b6038c5a3992e784cecd88ede6cb3937e741ea82df8793d7da3e445d79cb2840ed4cde29d29ef82aeeea8bb23bbbea4cd8d428086dd167bb50f2a80f990f",
                "address": "stake1ux8nqurzhr77y72rvp73uw54qvuuhjttemw40ng39mxvy0qaj9vvf",
                "data": "stake1ux8nqurzhr77y72rvp73uw54qvuuhjttemw40ng39mxvy0qaj9vvf\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Yoroi (base address, mainnet)', () => {
        expect(
            validate({
                "signature": "a40101032720062158202e199a32ffc89a1d1bcc6d7b4c7b9f5d648248e9f2f6d3d5ad68da84f664ca74:845846a2012767616464726573735839010fedbd3524afdf09b6491b338c8fb8bb080bb75b6f222c0c84d66a804f4a71c7a62f92256c7aa8ce0aba2ea3e4c776ad5dc07a59b86ee93fa166686173686564f4586d6164647231717938376d306634796a6861377a646b6679646e38727930687a6173737a61687464686a79747176736e747834717a3066666375306633306a676a6b633734676563397435743472756e726864743261637061396e77727761796c736161646e78370a68696969215840e48b52ad5ee63406aca4472523b8292c6cb7b6448905b869d9de168b6b3336ea95898d3f4fa749aebddc53531e6d32788a4a5e7ddeb863f4f6b8996e2c85c90e",
                "address": "addr1qy87m0f4yjha7zdkfydn8ry0hzasszahtdhjytqvsntx4qz0ffcu0f30jgjkc74gec9t5t4runrhdt2acpa9nwrwaylsaadnx7",
                "data": "addr1qy87m0f4yjha7zdkfydn8ry0hzasszahtdhjytqvsntx4qz0ffcu0f30jgjkc74gec9t5t4runrhdt2acpa9nwrwaylsaadnx7\nhiii!",
                "method": "Cip30"
            })).toBe(true);
    });

    test('validate works for Yoroi (reward address, mainnet)', () => {
        expect(
            validate({
                "signature": "a401010327200621582056b808181aeb0a9b01afa7e3bcd6de399142b6c8d1268bafc7d9eed393050e8f:84582aa201276761646472657373581de14f4a71c7a62f92256c7aa8ce0aba2ea3e4c776ad5dc07a59b86ee93fa166686173686564f458417374616b65317539383535757738356368657966747630323576757a34363936333766336d6b3434777571376a65687068776a30636d3272306e650a6869696921584064a15b91cb8f9162d89647cf07ea924e3ebf505a2ac5e958f1255898aedc5a20b69af6d2baf1cab2a12966099ac3bb88c5cd5fd2b1e81e09aeaa98ac20775f0c",
                "address": "stake1u9855uw85cheyftv025vuz469637f3mk44wuq7jehphwj0cm2r0ne",
                "data": "stake1u9855uw85cheyftv025vuz469637f3mk44wuq7jehphwj0cm2r0ne\nhiii!",
                "method": "Cip30"
            })).toBe(true);
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
