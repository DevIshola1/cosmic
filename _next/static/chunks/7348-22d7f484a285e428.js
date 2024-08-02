(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7348], {
        69103: function(e, t, n) {
            "use strict";
            n(85893), n(67294), n(44610)
        },
        36613: function(e, t, n) {
            "use strict";
            n(85893), n(67294), n(44610)
        },
        74533: function(e, t, n) {
            "use strict";
            n.d(t, {
                dE: function() {
                    return b
                },
                QV: function() {
                    return d
                },
                i3: function() {
                    return m
                },
                sb: function() {
                    return f
                },
                F3: function() {
                    return c
                }
            });
            var a = n(27628),
                s = n(77294),
                i = n(2593),
                o = n(35553),
                r = JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergenceyWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isClaimActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"setBalanceBulk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"updateTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"userBalance","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]'),
                u = JSON.parse('[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_verifier","type":"address"},{"internalType":"address[]","name":"uniswapAddresses","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"ExcludeFromLimits","type":"event"},{"anonymous":false,"inputs":[],"name":"LimitsStatusUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"value","type":"bool"}],"name":"excludeFromLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBot","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromLimits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setBots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                p = n(39625);
            let l = {
                    tokenContract: "0x5ffcdDCd084899e3510338465a53Bfd0F5F6b04d",
                    stakeContract: "0xb7F191Df7CD0d6BEc2977c60c7dF4e9f38d99487",
                    claimContract: "0x15421e439e436A93b77d05cE836Bf94605803A16",
                    rpc: "https://mainnet.infura.io/v3/9e75004732bc4843881c2c3a628f338a"
                },
                y = new a.r(l.rpc);
            async function d(e) {
                try {
                    let [t] = await e.getAddresses(), n = new s.CH(l.claimContract, r, y), a = await n.userBalance(t);
                    return {
                        balance: new Intl.NumberFormat("en-EN").format(parseInt((0, p.d)(a.toString()))),
                        address: t,
                        success: !0
                    }
                } catch (e) {
                    return console.log(e.message), {
                        balance: !1,
                        address: !1,
                        success: !1
                    }
                }
            }
            async function m(e, t) {
                try {
                    let [n] = await t.getAddresses(), {
                        request: a
                    } = await e.simulateContract({
                        abi: r,
                        address: l.claimContract,
                        functionName: "claimTokens",
                        args: [],
                        account: n
                    });
                    return {
                        tx: await t.writeContract(a),
                        success: !0
                    }
                } catch (e) {
                    return console.log(e.message), {
                        message: e.message,
                        success: !1
                    }
                }
            }
            async function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.O$.from("115792089237316195423570985008687907853269984665640564039457584007913129639935");
                try {
                    let n = new s.CH(l.tokenContract, u, y),
                        [a] = await e.getAddresses(),
                        i = await n.allowance(a, l.stakeContract);
                    return console.log(i.toString(), a, l.stakeContract), {
                        allowance: i.toString(),
                        approved: parseFloat(o.dF("".concat(i.toString()))) >= parseFloat(t)
                    }
                } catch (e) {
                    return console.log(e.message), {
                        allowance: "0",
                        approved: !1
                    }
                }
            }
            async function b(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "115792089237316195423570985008687907853269984665640564039457584007913129639935";
                try {
                    let [a] = await t.getAddresses(), {
                        request: s
                    } = await e.simulateContract({
                        abi: u,
                        address: l.tokenContract,
                        functionName: "approve",
                        args: [l.stakeContract, o.fi(n)],
                        account: a
                    });
                    return {
                        tx: await t.writeContract(s),
                        success: !0
                    }
                } catch (e) {
                    return console.log(e.message), {
                        message: e.message,
                        success: !1
                    }
                }
            }
            async function f(e) {
                let [t] = await e.getAddresses(), n = new s.CH(l.tokenContract, u, y), a = (await n.balanceOf(t)).toString(), i = await n.decimals();
                return o.bM(a, i)
            }
        },
        72003: function(e) {
            e.exports = {
                container: "Home_container__9OuOz",
                logoText: "Home_logoText__VvVy0",
                imgContainer: "Home_imgContainer__VCnor",
                tableContainer: "Home_tableContainer__bz1JV",
                cta: "Home_cta__8vVJ9",
                ctaUnstake: "Home_ctaUnstake__Wujfn",
                main: "Home_main__2uIek",
                mainDataContainer: "Home_mainDataContainer__ApEAP",
                mainDataContainerTable: "Home_mainDataContainerTable__kAuon",
                mainDataContainerForm: "Home_mainDataContainerForm__dBez3",
                ctaGreen: "Home_ctaGreen__Q80Gs",
                inputCus: "Home_inputCus__sn3if",
                footer: "Home_footer__wJNRn",
                title: "Home_title__YEn0u",
                description: "Home_description__zHUB6",
                grid: "Home_grid__vo_ES",
                card: "Home_card__HIlp_",
                ctaContainerStake: "Home_ctaContainerStake__vtW_4"
            }
        },
        44610: function(e) {
            e.exports = {
                stats: "stats_stats__QLNzI",
                row: "stats_row__OKpfp",
                statsMain: "stats_statsMain__qosl_"
            }
        },
        46601: function() {}
    }
]);