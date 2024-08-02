(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6644], {
        81556: function(t, e, r) {
            "use strict";
            r.d(e, {
                Sg: function() {
                    return s
                },
                zt: function() {
                    return a
                }
            });
            var n = r(2593);
            r(16441);
            var i = r(6881);
            let o = new(r(1581)).Yd("abstract-provider/5.7.0");
            class s extends i.dk {
                static isForkEvent(t) {
                    return !!(t && t._isForkEvent)
                }
            }
            class a {
                constructor() {
                    o.checkAbstract(new.target, a), (0, i.zG)(this, "_isProvider", !0)
                }
                getFeeData() {
                    var t, e, r, o;
                    return t = this, e = void 0, r = void 0, o = function*() {
                        let {
                            block: t,
                            gasPrice: e
                        } = yield(0, i.mE)({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch(t => null)
                        }), r = null, o = null, s = null;
                        return t && t.baseFeePerGas && (r = t.baseFeePerGas, s = n.O$.from("1500000000"), o = t.baseFeePerGas.mul(2).add(s)), {
                            lastBaseFeePerGas: r,
                            maxFeePerGas: o,
                            maxPriorityFeePerGas: s,
                            gasPrice: e
                        }
                    }, new(r || (r = Promise))(function(n, i) {
                        function s(t) {
                            try {
                                l(o.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(o.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? n(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(s, a)
                        }
                        l((o = o.apply(t, e || [])).next())
                    })
                }
                addListener(t, e) {
                    return this.on(t, e)
                }
                removeListener(t, e) {
                    return this.off(t, e)
                }
                static isProvider(t) {
                    return !!(t && t._isProvider)
                }
            }
        },
        48088: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return u
                },
                b: function() {
                    return c
                }
            });
            var n = r(6881),
                i = r(1581),
                o = function(t, e, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function s(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(s, a)
                        }
                        l((n = n.apply(t, e || [])).next())
                    })
                };
            let s = new i.Yd("abstract-signer/5.7.0"),
                a = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                l = [i.Yd.errors.INSUFFICIENT_FUNDS, i.Yd.errors.NONCE_EXPIRED, i.Yd.errors.REPLACEMENT_UNDERPRICED];
            class u {
                constructor() {
                    s.checkAbstract(new.target, u), (0, n.zG)(this, "_isSigner", !0)
                }
                getBalance(t) {
                    return o(this, void 0, void 0, function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                    })
                }
                getTransactionCount(t) {
                    return o(this, void 0, void 0, function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                    })
                }
                estimateGas(t) {
                    return o(this, void 0, void 0, function*() {
                        this._checkProvider("estimateGas");
                        let e = yield(0, n.mE)(this.checkTransaction(t));
                        return yield this.provider.estimateGas(e)
                    })
                }
                call(t, e) {
                    return o(this, void 0, void 0, function*() {
                        this._checkProvider("call");
                        let r = yield(0, n.mE)(this.checkTransaction(t));
                        return yield this.provider.call(r, e)
                    })
                }
                sendTransaction(t) {
                    return o(this, void 0, void 0, function*() {
                        this._checkProvider("sendTransaction");
                        let e = yield this.populateTransaction(t), r = yield this.signTransaction(e);
                        return yield this.provider.sendTransaction(r)
                    })
                }
                getChainId() {
                    return o(this, void 0, void 0, function*() {
                        return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
                    })
                }
                getGasPrice() {
                    return o(this, void 0, void 0, function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    })
                }
                getFeeData() {
                    return o(this, void 0, void 0, function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    })
                }
                resolveName(t) {
                    return o(this, void 0, void 0, function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                    })
                }
                checkTransaction(t) {
                    for (let e in t) - 1 === a.indexOf(e) && s.throwArgumentError("invalid transaction key: " + e, "transaction", t);
                    let e = (0, n.DC)(t);
                    return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(e => (e[0].toLowerCase() !== e[1].toLowerCase() && s.throwArgumentError("from address mismatch", "transaction", t), e[0])), e
                }
                populateTransaction(t) {
                    return o(this, void 0, void 0, function*() {
                        let e = yield(0, n.mE)(this.checkTransaction(t));
                        null != e.to && (e.to = Promise.resolve(e.to).then(t => o(this, void 0, void 0, function*() {
                            if (null == t) return null;
                            let e = yield this.resolveName(t);
                            return null == e && s.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                        })), e.to.catch(t => {}));
                        let r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
                        if (null != e.gasPrice && (2 === e.type || r) ? s.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t) : (0 === e.type || 1 === e.type) && r && s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t), (2 === e.type || null == e.type) && null != e.maxFeePerGas && null != e.maxPriorityFeePerGas) e.type = 2;
                        else if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice());
                        else {
                            let t = yield this.getFeeData();
                            if (null == e.type) {
                                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                                    if (e.type = 2, null != e.gasPrice) {
                                        let t = e.gasPrice;
                                        delete e.gasPrice, e.maxFeePerGas = t, e.maxPriorityFeePerGas = t
                                    } else null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                                } else null != t.gasPrice ? (r && s.throwError("network does not support EIP-1559", i.Yd.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == e.gasPrice && (e.gasPrice = t.gasPrice), e.type = 0) : s.throwError("failed to get consistent fee data", i.Yd.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                })
                            } else 2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                        }
                        return null == e.nonce && (e.nonce = this.getTransactionCount("pending")), null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch(t => {
                            if (l.indexOf(t.code) >= 0) throw t;
                            return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: t,
                                tx: e
                            })
                        })), null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(e => (0 !== e[1] && e[0] !== e[1] && s.throwArgumentError("chainId address mismatch", "transaction", t), e[0])), yield(0, n.mE)(e)
                    })
                }
                _checkProvider(t) {
                    this.provider || s.throwError("missing provider", i.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: t || "_checkProvider"
                    })
                }
                static isSigner(t) {
                    return !!(t && t._isSigner)
                }
            }
            class c extends u {
                constructor(t, e) {
                    super(), (0, n.zG)(this, "address", t), (0, n.zG)(this, "provider", e || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(t, e) {
                    return Promise.resolve().then(() => {
                        s.throwError(t, i.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: e
                        })
                    })
                }
                signMessage(t) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(t) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(t, e, r) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(t) {
                    return new c(this.address, t)
                }
            }
        },
        19485: function(t, e, r) {
            "use strict";
            r.d(e, {
                Kn: function() {
                    return h
                },
                CR: function() {
                    return f
                }
            });
            var n = r(16441),
                i = r(2593),
                o = r(38197),
                s = r(59052);
            let a = new(r(1581)).Yd("address/5.7.0");

            function l(t) {
                (0, n.A7)(t, 20) || a.throwArgumentError("invalid address", "address", t);
                let e = (t = t.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
                let i = (0, n.lE)((0, o.w)(r));
                for (let t = 0; t < 40; t += 2) i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let u = {};
            for (let t = 0; t < 10; t++) u[String(t)] = String(t);
            for (let t = 0; t < 26; t++) u[String.fromCharCode(65 + t)] = String(10 + t);
            let c = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

            function h(t) {
                let e = null;
                if ("string" != typeof t && a.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = l(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && a.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (t.substring(2, 4) !== function(t) {
                            let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => u[t]).join("");
                            for (; e.length >= c;) {
                                let t = e.substring(0, c);
                                e = parseInt(t, 10) % 97 + e.substring(t.length)
                            }
                            let r = String(98 - parseInt(e, 10) % 97);
                            for (; r.length < 2;) r = "0" + r;
                            return r
                        }(t) && a.throwArgumentError("bad icap checksum", "address", t), e = (0, i.g$)(t.substring(4)); e.length < 40;) e = "0" + e;
                    e = l("0x" + e)
                } else a.throwArgumentError("invalid address", "address", t);
                return e
            }

            function f(t) {
                let e = null;
                try {
                    e = h(t.from)
                } catch (e) {
                    a.throwArgumentError("missing from address", "transaction", t)
                }
                let r = (0, n.G1)((0, n.lE)(i.O$.from(t.nonce).toHexString()));
                return h((0, n.p3)((0, o.w)((0, s.c)([e, r])), 12))
            }
        },
        48794: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return n
                }
            });
            let n = "bignumber/5.7.0"
        },
        2593: function(t, e, r) {
            "use strict";
            r.d(e, {
                O$: function() {
                    return d
                },
                Zm: function() {
                    return h
                },
                g$: function() {
                    return v
                }
            });
            var n = r(13550),
                i = r.n(n),
                o = r(16441),
                s = r(1581),
                a = r(48794),
                l = i().BN;
            let u = new s.Yd(a.i),
                c = {};

            function h(t) {
                return null != t && (d.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || (0, o.A7)(t) || "bigint" == typeof t || (0, o._t)(t))
            }
            let f = !1;
            class d {
                constructor(t, e) {
                    t !== c && u.throwError("cannot call constructor directly; use BigNumber.from", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return g(m(this).fromTwos(t))
                }
                toTwos(t) {
                    return g(m(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return g(m(this).add(m(t)))
                }
                sub(t) {
                    return g(m(this).sub(m(t)))
                }
                div(t) {
                    return d.from(t).isZero() && y("division-by-zero", "div"), g(m(this).div(m(t)))
                }
                mul(t) {
                    return g(m(this).mul(m(t)))
                }
                mod(t) {
                    let e = m(t);
                    return e.isNeg() && y("division-by-zero", "mod"), g(m(this).umod(e))
                }
                pow(t) {
                    let e = m(t);
                    return e.isNeg() && y("negative-power", "pow"), g(m(this).pow(e))
                }
                and(t) {
                    let e = m(t);
                    return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "and"), g(m(this).and(e))
                }
                or(t) {
                    let e = m(t);
                    return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "or"), g(m(this).or(e))
                }
                xor(t) {
                    let e = m(t);
                    return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "xor"), g(m(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && y("negative-width", "mask"), g(m(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && y("negative-width", "shl"), g(m(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && y("negative-width", "shr"), g(m(this).shrn(t))
                }
                eq(t) {
                    return m(this).eq(m(t))
                }
                lt(t) {
                    return m(this).lt(m(t))
                }
                lte(t) {
                    return m(this).lte(m(t))
                }
                gt(t) {
                    return m(this).gt(m(t))
                }
                gte(t) {
                    return m(this).gte(m(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return m(this).isZero()
                }
                toNumber() {
                    try {
                        return m(this).toNumber()
                    } catch (t) {
                        y("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return u.throwError("this platform does not support BigInt", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, u.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? u.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Yd.errors.UNEXPECTED_ARGUMENT, {}) : u.throwError("BigNumber.toString does not accept parameters", s.Yd.errors.UNEXPECTED_ARGUMENT, {})), m(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof d) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new d(c, p(t)) : t.match(/^-?[0-9]+$/) ? new d(c, p(new l(t))) : u.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && y("underflow", "BigNumber.from", t), (t >= 9007199254740991 || t <= -9007199254740991) && y("overflow", "BigNumber.from", t), d.from(String(t));
                    if ("bigint" == typeof t) return d.from(t.toString());
                    if ((0, o._t)(t)) return d.from((0, o.Dv)(t));
                    if (t) {
                        if (t.toHexString) {
                            let e = t.toHexString();
                            if ("string" == typeof e) return d.from(e)
                        } else {
                            let e = t._hex;
                            if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && ((0, o.A7)(e) || "-" === e[0] && (0, o.A7)(e.substring(1)))) return d.from(e)
                        }
                    }
                    return u.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !!(t && t._isBigNumber)
                }
            }

            function p(t) {
                if ("string" != typeof t) return p(t.toString(16));
                if ("-" === t[0]) return ("-" === (t = t.substring(1))[0] && u.throwArgumentError("invalid hex", "value", t), "0x00" === (t = p(t))) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function g(t) {
                return d.from(p(t))
            }

            function m(t) {
                let e = d.from(t).toHexString();
                return "-" === e[0] ? new l("-" + e.substring(3), 16) : new l(e.substring(2), 16)
            }

            function y(t, e, r) {
                let n = {
                    fault: t,
                    operation: e
                };
                return null != r && (n.value = r), u.throwError(t, s.Yd.errors.NUMERIC_FAULT, n)
            }

            function v(t) {
                return new l(t, 36).toString(16)
            }
        },
        16441: function(t, e, r) {
            "use strict";
            r.d(e, {
                lE: function() {
                    return u
                },
                zo: function() {
                    return c
                },
                xs: function() {
                    return y
                },
                E1: function() {
                    return g
                },
                p3: function() {
                    return m
                },
                $P: function() {
                    return v
                },
                $m: function() {
                    return A
                },
                Dv: function() {
                    return p
                },
                _t: function() {
                    return l
                },
                Zq: function() {
                    return s
                },
                A7: function() {
                    return f
                },
                N: function() {
                    return b
                },
                G1: function() {
                    return h
                }
            });
            let n = new(r(1581)).Yd("bytes/5.7.0");

            function i(t) {
                return !!t.toHexString
            }

            function o(t) {
                return t.slice || (t.slice = function() {
                    let e = Array.prototype.slice.call(arguments);
                    return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function s(t) {
                return f(t) && !(t.length % 2) || l(t)
            }

            function a(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function l(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t || !a(t.length) || t.length < 0) return !1;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    if (!a(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function u(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    n.checkSafeUint53(t, "invalid arrayify value");
                    let e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), o(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), i(t) && (t = t.toHexString()), f(t)) {
                    let r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", t));
                    let i = [];
                    for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
                    return o(new Uint8Array(i))
                }
                return l(t) ? o(new Uint8Array(t)) : n.throwArgumentError("invalid arrayify value", "value", t)
            }

            function c(t) {
                let e = t.map(t => u(t)),
                    r = new Uint8Array(e.reduce((t, e) => t + e.length, 0));
                return e.reduce((t, e) => (r.set(e, t), t + e.length), 0), o(r)
            }

            function h(t) {
                let e = u(t);
                if (0 === e.length) return e;
                let r = 0;
                for (; r < e.length && 0 === e[r];) r++;
                return r && (e = e.slice(r)), e
            }

            function f(t, e) {
                return "string" == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e)
            }
            let d = "0123456789abcdef";

            function p(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    n.checkSafeUint53(t, "invalid hexlify value");
                    let e = "";
                    for (; t;) e = d[15 & t] + e, t = Math.floor(t / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), i(t)) return t.toHexString();
                if (f(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (l(t)) {
                    let e = "0x";
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        e += d[(240 & n) >> 4] + d[15 & n]
                    }
                    return e
                }
                return n.throwArgumentError("invalid hexlify value", "value", t)
            }

            function g(t) {
                if ("string" != typeof t) t = p(t);
                else if (!f(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function m(t, e, r) {
                return ("string" != typeof t ? t = p(t) : (!f(t) || t.length % 2) && n.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r) ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
            }

            function y(t) {
                let e = "0x";
                return t.forEach(t => {
                    e += p(t).substring(2)
                }), e
            }

            function v(t) {
                let e = function(t) {
                    "string" != typeof t && (t = p(t)), f(t) || n.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
                    let e = 0;
                    for (; e < t.length && "0" === t[e];) e++;
                    return "0x" + t.substring(e)
                }(p(t, {
                    hexPad: "left"
                }));
                return "0x" === e ? "0x0" : e
            }

            function A(t, e) {
                for ("string" != typeof t ? t = p(t) : f(t) || n.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function b(t) {
                let e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (s(t)) {
                    let r = u(t);
                    64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = p(r.slice(0, 32)), e.s = p(r.slice(32, 64))) : 65 === r.length ? (e.r = p(r.slice(0, 32)), e.s = p(r.slice(32, 64)), e.v = r[64]) : n.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = p(r.slice(32, 64))
                } else {
                    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                        let r = function(t, e) {
                            (t = u(t)).length > e && n.throwArgumentError("value out of range", "value", arguments[0]);
                            let r = new Uint8Array(e);
                            return r.set(t, e - t.length), o(r)
                        }(u(e._vs), 32);
                        e._vs = p(r);
                        let i = r[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = i : e.recoveryParam !== i && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                        let s = p(r);
                        null == e.s ? e.s = s : e.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == e.recoveryParam) null == e.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        let r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== r && n.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != e.r && f(e.r) ? e.r = A(e.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && f(e.s) ? e.s = A(e.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", t);
                    let r = u(e.s);
                    r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
                    let i = p(r);
                    e._vs && (f(e._vs) || n.throwArgumentError("signature invalid _vs", "signature", t), e._vs = A(e._vs, 32)), null == e._vs ? e._vs = i : e._vs !== i && n.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
            }
        },
        21046: function(t, e, r) {
            "use strict";
            r.d(e, {
                Bz: function() {
                    return a
                },
                _Y: function() {
                    return o
                },
                fh: function() {
                    return s
                },
                tL: function() {
                    return i
                }
            });
            var n = r(2593);
            let i = n.O$.from(-1),
                o = n.O$.from(0),
                s = n.O$.from(1),
                a = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        },
        77294: function(t, e, r) {
            "use strict";
            r.d(e, {
                CH: function() {
                    return tI
                }
            });
            var n = r(16441),
                i = r(2593),
                o = r(6881),
                s = r(1581);
            let a = "abi/5.7.0",
                l = new s.Yd(a);
            class u {
                constructor(t, e, r, n) {
                    this.name = t, this.type = e, this.localName = r, this.dynamic = n
                }
                _throwError(t, e) {
                    l.throwArgumentError(t, this.localName, e)
                }
            }
            class c {
                constructor(t) {
                    (0, o.zG)(this, "wordSize", t || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(t)
                }
                get data() {
                    return (0, n.xs)(this._data)
                }
                get length() {
                    return this._dataLength
                }
                _writeData(t) {
                    return this._data.push(t), this._dataLength += t.length, t.length
                }
                appendWriter(t) {
                    return this._writeData((0, n.zo)(t._data))
                }
                writeBytes(t) {
                    let e = (0, n.lE)(t),
                        r = e.length % this.wordSize;
                    return r && (e = (0, n.zo)([e, this._padding.slice(r)])), this._writeData(e)
                }
                _getValue(t) {
                    let e = (0, n.lE)(i.O$.from(t));
                    return e.length > this.wordSize && l.throwError("value out-of-bounds", s.Yd.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: e.length
                    }), e.length % this.wordSize && (e = (0, n.zo)([this._padding.slice(e.length % this.wordSize), e])), e
                }
                writeValue(t) {
                    return this._writeData(this._getValue(t))
                }
                writeUpdatableValue() {
                    let t = this._data.length;
                    return this._data.push(this._padding), this._dataLength += this.wordSize, e => {
                        this._data[t] = this._getValue(e)
                    }
                }
            }
            class h {
                constructor(t, e, r, i) {
                    (0, o.zG)(this, "_data", (0, n.lE)(t)), (0, o.zG)(this, "wordSize", e || 32), (0, o.zG)(this, "_coerceFunc", r), (0, o.zG)(this, "allowLoose", i), this._offset = 0
                }
                get data() {
                    return (0, n.Dv)(this._data)
                }
                get consumed() {
                    return this._offset
                }
                static coerce(t, e) {
                    let r = t.match("^u?int([0-9]+)$");
                    return r && 48 >= parseInt(r[1]) && (e = e.toNumber()), e
                }
                coerce(t, e) {
                    return this._coerceFunc ? this._coerceFunc(t, e) : h.coerce(t, e)
                }
                _peekBytes(t, e, r) {
                    let n = Math.ceil(e / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + e <= this._data.length ? n = e : l.throwError("data out-of-bounds", s.Yd.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })), this._data.slice(this._offset, this._offset + n)
                }
                subReader(t) {
                    return new h(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
                }
                readBytes(t, e) {
                    let r = this._peekBytes(0, t, !!e);
                    return this._offset += r.length, r.slice(0, t)
                }
                readValue() {
                    return i.O$.from(this.readBytes(this.wordSize))
                }
            }
            var f = r(19485),
                d = r(32046),
                p = r(38197);
            class g extends u {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(t, e) {
                    try {
                        e = (0, f.Kn)(e)
                    } catch (t) {
                        this._throwError(t.message, e)
                    }
                    return t.writeValue(e)
                }
                decode(t) {
                    return (0, f.Kn)((0, n.$m)(t.readValue().toHexString(), 20))
                }
            }
            class m extends u {
                constructor(t) {
                    super(t.name, t.type, void 0, t.dynamic), this.coder = t
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(t, e) {
                    return this.coder.encode(t, e)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            }
            let y = new s.Yd(a);

            function v(t, e, r) {
                let n = null;
                if (Array.isArray(r)) n = r;
                else if (r && "object" == typeof r) {
                    let t = {};
                    n = e.map(e => {
                        let n = e.localName;
                        return n || y.throwError("cannot encode object for signature with missing names", s.Yd.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: e,
                            value: r
                        }), t[n] && y.throwError("cannot encode object for signature with duplicate names", s.Yd.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: e,
                            value: r
                        }), t[n] = !0, r[n]
                    })
                } else y.throwArgumentError("invalid tuple value", "tuple", r);
                e.length !== n.length && y.throwArgumentError("types/value length mismatch", "tuple", r);
                let i = new c(t.wordSize),
                    o = new c(t.wordSize),
                    a = [];
                return e.forEach((t, e) => {
                    let r = n[e];
                    if (t.dynamic) {
                        let e = o.length;
                        t.encode(o, r);
                        let n = i.writeUpdatableValue();
                        a.push(t => {
                            n(t + e)
                        })
                    } else t.encode(i, r)
                }), a.forEach(t => {
                    t(i.length)
                }), t.appendWriter(i) + t.appendWriter(o)
            }

            function A(t, e) {
                let r = [],
                    n = t.subReader(0);
                e.forEach(e => {
                    let i = null;
                    if (e.dynamic) {
                        let r = t.readValue(),
                            o = n.subReader(r.toNumber());
                        try {
                            i = e.decode(o)
                        } catch (t) {
                            if (t.code === s.Yd.errors.BUFFER_OVERRUN) throw t;
                            (i = t).baseType = e.name, i.name = e.localName, i.type = e.type
                        }
                    } else try {
                        i = e.decode(t)
                    } catch (t) {
                        if (t.code === s.Yd.errors.BUFFER_OVERRUN) throw t;
                        (i = t).baseType = e.name, i.name = e.localName, i.type = e.type
                    }
                    void 0 != i && r.push(i)
                });
                let i = e.reduce((t, e) => {
                    let r = e.localName;
                    return r && (t[r] || (t[r] = 0), t[r]++), t
                }, {});
                e.forEach((t, e) => {
                    let n = t.localName;
                    if (!n || 1 !== i[n] || ("length" === n && (n = "_length"), null != r[n])) return;
                    let o = r[e];
                    o instanceof Error ? Object.defineProperty(r, n, {
                        enumerable: !0,
                        get: () => {
                            throw o
                        }
                    }) : r[n] = o
                });
                for (let t = 0; t < r.length; t++) {
                    let e = r[t];
                    e instanceof Error && Object.defineProperty(r, t, {
                        enumerable: !0,
                        get: () => {
                            throw e
                        }
                    })
                }
                return Object.freeze(r)
            }
            class b extends u {
                constructor(t, e, r) {
                    super("array", t.type + "[" + (e >= 0 ? e : "") + "]", r, -1 === e || t.dynamic), this.coder = t, this.length = e
                }
                defaultValue() {
                    let t = this.coder.defaultValue(),
                        e = [];
                    for (let r = 0; r < this.length; r++) e.push(t);
                    return e
                }
                encode(t, e) {
                    Array.isArray(e) || this._throwError("expected array value", e);
                    let r = this.length; - 1 === r && (r = e.length, t.writeValue(e.length)), y.checkArgumentCount(e.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
                    let n = [];
                    for (let t = 0; t < e.length; t++) n.push(this.coder);
                    return v(t, n, e)
                }
                decode(t) {
                    let e = this.length; - 1 === e && 32 * (e = t.readValue().toNumber()) > t._data.length && y.throwError("insufficient data length", s.Yd.errors.BUFFER_OVERRUN, {
                        length: t._data.length,
                        count: e
                    });
                    let r = [];
                    for (let t = 0; t < e; t++) r.push(new m(this.coder));
                    return t.coerce(this.name, A(t, r))
                }
            }
            class w extends u {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(t, e) {
                    return t.writeValue(e ? 1 : 0)
                }
                decode(t) {
                    return t.coerce(this.type, !t.readValue().isZero())
                }
            }
            class E extends u {
                constructor(t, e) {
                    super(t, t, e, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(t, e) {
                    return e = (0, n.lE)(e), t.writeValue(e.length) + t.writeBytes(e)
                }
                decode(t) {
                    return t.readBytes(t.readValue().toNumber(), !0)
                }
            }
            class _ extends E {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return t.coerce(this.name, (0, n.Dv)(super.decode(t)))
                }
            }
            class N extends u {
                constructor(t, e) {
                    let r = "bytes" + String(t);
                    super(r, r, e, !1), this.size = t
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(t, e) {
                    let r = (0, n.lE)(e);
                    return r.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(r)
                }
                decode(t) {
                    return t.coerce(this.name, (0, n.Dv)(t.readBytes(this.size)))
                }
            }
            class k extends u {
                constructor(t) {
                    super("null", "", t, !1)
                }
                defaultValue() {
                    return null
                }
                encode(t, e) {
                    return null != e && this._throwError("not null", e), t.writeBytes([])
                }
                decode(t) {
                    return t.readBytes(0), t.coerce(this.name, null)
                }
            }
            var x = r(21046);
            class P extends u {
                constructor(t, e, r) {
                    let n = (e ? "int" : "uint") + 8 * t;
                    super(n, n, r, !1), this.size = t, this.signed = e
                }
                defaultValue() {
                    return 0
                }
                encode(t, e) {
                    let r = i.O$.from(e),
                        n = x.Bz.mask(8 * t.wordSize);
                    if (this.signed) {
                        let t = n.mask(8 * this.size - 1);
                        (r.gt(t) || r.lt(t.add(x.fh).mul(x.tL))) && this._throwError("value out-of-bounds", e)
                    } else(r.lt(x._Y) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", e);
                    return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)), t.writeValue(r)
                }
                decode(t) {
                    let e = t.readValue().mask(8 * this.size);
                    return this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
                }
            }
            var I = r(29251);
            class S extends E {
                constructor(t) {
                    super("string", t)
                }
                defaultValue() {
                    return ""
                }
                encode(t, e) {
                    return super.encode(t, (0, I.Y0)(e))
                }
                decode(t) {
                    return (0, I.ZN)(super.decode(t))
                }
            }
            class R extends u {
                constructor(t, e) {
                    let r = !1,
                        n = [];
                    t.forEach(t => {
                        t.dynamic && (r = !0), n.push(t.type)
                    }), super("tuple", "tuple(" + n.join(",") + ")", e, r), this.coders = t
                }
                defaultValue() {
                    let t = [];
                    this.coders.forEach(e => {
                        t.push(e.defaultValue())
                    });
                    let e = this.coders.reduce((t, e) => {
                        let r = e.localName;
                        return r && (t[r] || (t[r] = 0), t[r]++), t
                    }, {});
                    return this.coders.forEach((r, n) => {
                        let i = r.localName;
                        i && 1 === e[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[n]))
                    }), Object.freeze(t)
                }
                encode(t, e) {
                    return v(t, this.coders, e)
                }
                decode(t) {
                    return t.coerce(this.name, A(t, this.coders))
                }
            }
            let C = new s.Yd(a),
                T = {},
                O = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                B = {
                    calldata: !0,
                    memory: !0
                };

            function D(t, e) {
                if ("bytes" === t || "string" === t) {
                    if (O[e]) return !0
                } else if ("address" === t) {
                    if ("payable" === e) return !0
                } else if ((t.indexOf("[") >= 0 || "tuple" === t) && B[e]) return !0;
                return (O[e] || "payable" === e) && C.throwArgumentError("invalid modifier", "name", e), !1
            }

            function F(t, e) {
                for (let r in e)(0, o.zG)(t, r, e[r])
            }
            let z = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                L = new RegExp(/^(.*)\[([0-9]*)\]$/);
            class U {
                constructor(t, e) {
                    t !== T && C.throwError("use fromString", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new ParamType()"
                    }), F(this, e);
                    let r = this.type.match(L);
                    r ? F(this, {
                        arrayLength: parseInt(r[2] || "-1"),
                        arrayChildren: U.fromObject({
                            type: r[1],
                            components: this.components
                        }),
                        baseType: "array"
                    }) : F(this, {
                        arrayLength: null,
                        arrayChildren: null,
                        baseType: null != this.components ? "tuple" : this.type
                    }), this._isParamType = !0, Object.freeze(this)
                }
                format(t) {
                    if (t || (t = z.sighash), z[t] || C.throwArgumentError("invalid format type", "format", t), t === z.json) {
                        let e = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" == typeof this.indexed && (e.indexed = this.indexed), this.components && (e.components = this.components.map(e => JSON.parse(e.format(t)))), JSON.stringify(e)
                    }
                    let e = "";
                    return "array" === this.baseType ? e += this.arrayChildren.format(t) + "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]" : "tuple" === this.baseType ? (t !== z.sighash && (e += this.type), e += "(" + this.components.map(e => e.format(t)).join(t === z.full ? ", " : ",") + ")") : e += this.type, t !== z.sighash && (!0 === this.indexed && (e += " indexed"), t === z.full && this.name && (e += " " + this.name)), e
                }
                static from(t, e) {
                    return "string" == typeof t ? U.fromString(t, e) : U.fromObject(t)
                }
                static fromObject(t) {
                    return U.isParamType(t) ? t : new U(T, {
                        name: t.name || null,
                        type: W(t.type),
                        indexed: null == t.indexed ? null : !!t.indexed,
                        components: t.components ? t.components.map(U.fromObject) : null
                    })
                }
                static fromString(t, e) {
                    var r;
                    return r = function(t, e) {
                        let r = t;

                        function n(e) {
                            C.throwArgumentError(`unexpected character at position ${e}`, "param", t)
                        }

                        function i(t) {
                            let r = {
                                type: "",
                                name: "",
                                parent: t,
                                state: {
                                    allowType: !0
                                }
                            };
                            return e && (r.indexed = !1), r
                        }
                        t = t.replace(/\s/g, " ");
                        let o = {
                                type: "",
                                name: "",
                                state: {
                                    allowType: !0
                                }
                            },
                            s = o;
                        for (let r = 0; r < t.length; r++) {
                            let o = t[r];
                            switch (o) {
                                case "(":
                                    s.state.allowType && "" === s.type ? s.type = "tuple" : s.state.allowParams || n(r), s.state.allowType = !1, s.type = W(s.type), s.components = [i(s)], s = s.components[0];
                                    break;
                                case ")":
                                    delete s.state, "indexed" === s.name && (e || n(r), s.indexed = !0, s.name = ""), D(s.type, s.name) && (s.name = ""), s.type = W(s.type);
                                    let a = s;
                                    (s = s.parent) || n(r), delete a.parent, s.state.allowParams = !1, s.state.allowName = !0, s.state.allowArray = !0;
                                    break;
                                case ",":
                                    delete s.state, "indexed" === s.name && (e || n(r), s.indexed = !0, s.name = ""), D(s.type, s.name) && (s.name = ""), s.type = W(s.type);
                                    let l = i(s.parent);
                                    s.parent.components.push(l), delete s.parent, s = l;
                                    break;
                                case " ":
                                    s.state.allowType && "" !== s.type && (s.type = W(s.type), delete s.state.allowType, s.state.allowName = !0, s.state.allowParams = !0), s.state.allowName && "" !== s.name && ("indexed" === s.name ? (e || n(r), s.indexed && n(r), s.indexed = !0, s.name = "") : D(s.type, s.name) ? s.name = "" : s.state.allowName = !1);
                                    break;
                                case "[":
                                    s.state.allowArray || n(r), s.type += o, s.state.allowArray = !1, s.state.allowName = !1, s.state.readArray = !0;
                                    break;
                                case "]":
                                    s.state.readArray || n(r), s.type += o, s.state.readArray = !1, s.state.allowArray = !0, s.state.allowName = !0;
                                    break;
                                default:
                                    s.state.allowType ? (s.type += o, s.state.allowParams = !0, s.state.allowArray = !0) : s.state.allowName ? (s.name += o, delete s.state.allowArray) : s.state.readArray ? s.type += o : n(r)
                            }
                        }
                        return s.parent && C.throwArgumentError("unexpected eof", "param", t), delete o.state, "indexed" === s.name ? (e || n(r.length - 7), s.indexed && n(r.length - 7), s.indexed = !0, s.name = "") : D(s.type, s.name) && (s.name = ""), o.type = W(o.type), o
                    }(t, !!e), U.fromObject({
                        name: r.name,
                        type: r.type,
                        indexed: r.indexed,
                        components: r.components
                    })
                }
                static isParamType(t) {
                    return !!(null != t && t._isParamType)
                }
            }

            function M(t, e) {
                return (function(t) {
                    t = t.trim();
                    let e = [],
                        r = "",
                        n = 0;
                    for (let i = 0; i < t.length; i++) {
                        let o = t[i];
                        "," === o && 0 === n ? (e.push(r), r = "") : (r += o, "(" === o ? n++ : ")" === o && -1 == --n && C.throwArgumentError("unbalanced parenthesis", "value", t))
                    }
                    return r && e.push(r), e
                })(t).map(t => U.fromString(t, e))
            }
            class G {
                constructor(t, e) {
                    t !== T && C.throwError("use a static from method", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new Fragment()"
                    }), F(this, e), this._isFragment = !0, Object.freeze(this)
                }
                static from(t) {
                    return G.isFragment(t) ? t : "string" == typeof t ? G.fromString(t) : G.fromObject(t)
                }
                static fromObject(t) {
                    if (G.isFragment(t)) return t;
                    switch (t.type) {
                        case "function":
                            return K.fromObject(t);
                        case "event":
                            return Y.fromObject(t);
                        case "constructor":
                            return J.fromObject(t);
                        case "error":
                            return V.fromObject(t);
                        case "fallback":
                        case "receive":
                            return null
                    }
                    return C.throwArgumentError("invalid fragment object", "value", t)
                }
                static fromString(t) {
                    return "event" === (t = (t = (t = t.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? Y.fromString(t.substring(5).trim()) : "function" === t.split(" ")[0] ? K.fromString(t.substring(8).trim()) : "constructor" === t.split("(")[0].trim() ? J.fromString(t.trim()) : "error" === t.split(" ")[0] ? V.fromString(t.substring(5).trim()) : C.throwArgumentError("unsupported fragment", "value", t)
                }
                static isFragment(t) {
                    return !!(t && t._isFragment)
                }
            }
            class Y extends G {
                format(t) {
                    if (t || (t = z.sighash), z[t] || C.throwArgumentError("invalid format type", "format", t), t === z.json) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== z.sighash && (e += "event "), e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === z.full ? ", " : ",") + ") ", t !== z.sighash && this.anonymous && (e += "anonymous "), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? Y.fromString(t) : Y.fromObject(t)
                }
                static fromObject(t) {
                    return Y.isEventFragment(t) ? t : ("event" !== t.type && C.throwArgumentError("invalid event object", "value", t), new Y(T, {
                        name: Z(t.name),
                        anonymous: t.anonymous,
                        inputs: t.inputs ? t.inputs.map(U.fromObject) : [],
                        type: "event"
                    }))
                }
                static fromString(t) {
                    let e = t.match($);
                    e || C.throwArgumentError("invalid event string", "value", t);
                    let r = !1;
                    return e[3].split(" ").forEach(t => {
                        switch (t.trim()) {
                            case "anonymous":
                                r = !0;
                                break;
                            case "":
                                break;
                            default:
                                C.warn("unknown modifier: " + t)
                        }
                    }), Y.fromObject({
                        name: e[1].trim(),
                        anonymous: r,
                        inputs: M(e[2], !0),
                        type: "event"
                    })
                }
                static isEventFragment(t) {
                    return t && t._isFragment && "event" === t.type
                }
            }

            function j(t, e) {
                e.gas = null;
                let r = t.split("@");
                return 1 !== r.length ? (r.length > 2 && C.throwArgumentError("invalid human-readable ABI signature", "value", t), r[1].match(/^[0-9]+$/) || C.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = i.O$.from(r[1]), r[0]) : t
            }

            function q(t, e) {
                e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", t.split(" ").forEach(t => {
                    switch (t.trim()) {
                        case "constant":
                            e.constant = !0;
                            break;
                        case "payable":
                            e.payable = !0, e.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            e.payable = !1, e.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            e.constant = !0, e.stateMutability = "pure";
                            break;
                        case "view":
                            e.constant = !0, e.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + t)
                    }
                })
            }

            function H(t) {
                let e = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != t.stateMutability ? (e.stateMutability = t.stateMutability, e.constant = "view" === e.stateMutability || "pure" === e.stateMutability, null != t.constant && !!t.constant !== e.constant && C.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = "payable" === e.stateMutability, null != t.payable && !!t.payable !== e.payable && C.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : null != t.payable ? (e.payable = !!t.payable, null != t.constant || e.payable || "constructor" === t.type || C.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && C.throwArgumentError("cannot have constant payable function", "value", t)) : null != t.constant ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : "constructor" !== t.type && C.throwArgumentError("unable to determine stateMutability", "value", t), e
            }
            class J extends G {
                format(t) {
                    if (t || (t = z.sighash), z[t] || C.throwArgumentError("invalid format type", "format", t), t === z.json) return JSON.stringify({
                        type: "constructor",
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    t === z.sighash && C.throwError("cannot format a constructor for sighash", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    let e = "constructor(" + this.inputs.map(e => e.format(t)).join(t === z.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (e += this.stateMutability + " "), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? J.fromString(t) : J.fromObject(t)
                }
                static fromObject(t) {
                    if (J.isConstructorFragment(t)) return t;
                    "constructor" !== t.type && C.throwArgumentError("invalid constructor object", "value", t);
                    let e = H(t);
                    return e.constant && C.throwArgumentError("constructor cannot be constant", "value", t), new J(T, {
                        name: null,
                        type: t.type,
                        inputs: t.inputs ? t.inputs.map(U.fromObject) : [],
                        payable: e.payable,
                        stateMutability: e.stateMutability,
                        gas: t.gas ? i.O$.from(t.gas) : null
                    })
                }
                static fromString(t) {
                    let e = {
                            type: "constructor"
                        },
                        r = (t = j(t, e)).match($);
                    return r && "constructor" === r[1].trim() || C.throwArgumentError("invalid constructor string", "value", t), e.inputs = M(r[2].trim(), !1), q(r[3].trim(), e), J.fromObject(e)
                }
                static isConstructorFragment(t) {
                    return t && t._isFragment && "constructor" === t.type
                }
            }
            class K extends J {
                format(t) {
                    if (t || (t = z.sighash), z[t] || C.throwArgumentError("invalid format type", "format", t), t === z.json) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t))),
                        outputs: this.outputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== z.sighash && (e += "function "), e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === z.full ? ", " : ",") + ") ", t !== z.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (e += this.stateMutability + " ") : this.constant && (e += "view "), this.outputs && this.outputs.length && (e += "returns (" + this.outputs.map(e => e.format(t)).join(", ") + ") "), null != this.gas && (e += "@" + this.gas.toString() + " ")), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? K.fromString(t) : K.fromObject(t)
                }
                static fromObject(t) {
                    if (K.isFunctionFragment(t)) return t;
                    "function" !== t.type && C.throwArgumentError("invalid function object", "value", t);
                    let e = H(t);
                    return new K(T, {
                        type: t.type,
                        name: Z(t.name),
                        constant: e.constant,
                        inputs: t.inputs ? t.inputs.map(U.fromObject) : [],
                        outputs: t.outputs ? t.outputs.map(U.fromObject) : [],
                        payable: e.payable,
                        stateMutability: e.stateMutability,
                        gas: t.gas ? i.O$.from(t.gas) : null
                    })
                }
                static fromString(t) {
                    let e = {
                            type: "function"
                        },
                        r = (t = j(t, e)).split(" returns ");
                    r.length > 2 && C.throwArgumentError("invalid function string", "value", t);
                    let n = r[0].match($);
                    if (n || C.throwArgumentError("invalid function signature", "value", t), e.name = n[1].trim(), e.name && Z(e.name), e.inputs = M(n[2], !1), q(n[3].trim(), e), r.length > 1) {
                        let n = r[1].match($);
                        ("" != n[1].trim() || "" != n[3].trim()) && C.throwArgumentError("unexpected tokens", "value", t), e.outputs = M(n[2], !1)
                    } else e.outputs = [];
                    return K.fromObject(e)
                }
                static isFunctionFragment(t) {
                    return t && t._isFragment && "function" === t.type
                }
            }

            function Q(t) {
                let e = t.format();
                return ("Error(string)" === e || "Panic(uint256)" === e) && C.throwArgumentError(`cannot specify user defined ${e} error`, "fragment", t), t
            }
            class V extends G {
                format(t) {
                    if (t || (t = z.sighash), z[t] || C.throwArgumentError("invalid format type", "format", t), t === z.json) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== z.sighash && (e += "error "), (e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === z.full ? ", " : ",") + ") ").trim()
                }
                static from(t) {
                    return "string" == typeof t ? V.fromString(t) : V.fromObject(t)
                }
                static fromObject(t) {
                    return V.isErrorFragment(t) ? t : ("error" !== t.type && C.throwArgumentError("invalid error object", "value", t), Q(new V(T, {
                        type: t.type,
                        name: Z(t.name),
                        inputs: t.inputs ? t.inputs.map(U.fromObject) : []
                    })))
                }
                static fromString(t) {
                    let e = {
                            type: "error"
                        },
                        r = t.match($);
                    return r || C.throwArgumentError("invalid error signature", "value", t), e.name = r[1].trim(), e.name && Z(e.name), e.inputs = M(r[2], !1), Q(V.fromObject(e))
                }
                static isErrorFragment(t) {
                    return t && t._isFragment && "error" === t.type
                }
            }

            function W(t) {
                return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t
            }
            let X = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

            function Z(t) {
                return t && t.match(X) || C.throwArgumentError(`invalid identifier "${t}"`, "value", t), t
            }
            let $ = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),
                tt = new s.Yd(a),
                te = new RegExp(/^bytes([0-9]*)$/),
                tr = new RegExp(/^(u?int)([0-9]*)$/);
            class tn {
                constructor(t) {
                    (0, o.zG)(this, "coerceFunc", t || null)
                }
                _getCoder(t) {
                    switch (t.baseType) {
                        case "address":
                            return new g(t.name);
                        case "bool":
                            return new w(t.name);
                        case "string":
                            return new S(t.name);
                        case "bytes":
                            return new _(t.name);
                        case "array":
                            return new b(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
                        case "tuple":
                            return new R((t.components || []).map(t => this._getCoder(t)), t.name);
                        case "":
                            return new k(t.name)
                    }
                    let e = t.type.match(tr);
                    if (e) {
                        let r = parseInt(e[2] || "256");
                        return (0 === r || r > 256 || r % 8 != 0) && tt.throwArgumentError("invalid " + e[1] + " bit length", "param", t), new P(r / 8, "int" === e[1], t.name)
                    }
                    if (e = t.type.match(te)) {
                        let r = parseInt(e[1]);
                        return (0 === r || r > 32) && tt.throwArgumentError("invalid bytes length", "param", t), new N(r, t.name)
                    }
                    return tt.throwArgumentError("invalid type", "type", t.type)
                }
                _getWordSize() {
                    return 32
                }
                _getReader(t, e) {
                    return new h(t, this._getWordSize(), this.coerceFunc, e)
                }
                _getWriter() {
                    return new c(this._getWordSize())
                }
                getDefaultValue(t) {
                    return new R(t.map(t => this._getCoder(U.from(t))), "_").defaultValue()
                }
                encode(t, e) {
                    t.length !== e.length && tt.throwError("types/values length mismatch", s.Yd.errors.INVALID_ARGUMENT, {
                        count: {
                            types: t.length,
                            values: e.length
                        },
                        value: {
                            types: t,
                            values: e
                        }
                    });
                    let r = new R(t.map(t => this._getCoder(U.from(t))), "_"),
                        n = this._getWriter();
                    return r.encode(n, e), n.data
                }
                decode(t, e, r) {
                    return new R(t.map(t => this._getCoder(U.from(t))), "_").decode(this._getReader((0, n.lE)(e), r))
                }
            }
            let ti = new tn,
                to = new s.Yd(a);
            class ts extends o.dk {}
            class ta extends o.dk {}
            class tl extends o.dk {}
            class tu extends o.dk {
                static isIndexed(t) {
                    return !!(t && t._isIndexed)
                }
            }
            let tc = {
                "0x08c379a0": {
                    signature: "Error(string)",
                    name: "Error",
                    inputs: ["string"],
                    reason: !0
                },
                "0x4e487b71": {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    inputs: ["uint256"]
                }
            };

            function th(t, e) {
                let r = Error(`deferred error during ABI decoding triggered accessing ${t}`);
                return r.error = e, r
            }
            class tf {
                constructor(t) {
                    let e = [];
                    e = "string" == typeof t ? JSON.parse(t) : t, (0, o.zG)(this, "fragments", e.map(t => G.from(t)).filter(t => null != t)), (0, o.zG)(this, "_abiCoder", (0, o.tu)(new.target, "getAbiCoder")()), (0, o.zG)(this, "functions", {}), (0, o.zG)(this, "errors", {}), (0, o.zG)(this, "events", {}), (0, o.zG)(this, "structs", {}), this.fragments.forEach(t => {
                        let e = null;
                        switch (t.type) {
                            case "constructor":
                                if (this.deploy) {
                                    to.warn("duplicate definition - constructor");
                                    return
                                }(0, o.zG)(this, "deploy", t);
                                return;
                            case "function":
                                e = this.functions;
                                break;
                            case "event":
                                e = this.events;
                                break;
                            case "error":
                                e = this.errors;
                                break;
                            default:
                                return
                        }
                        let r = t.format();
                        if (e[r]) {
                            to.warn("duplicate definition - " + r);
                            return
                        }
                        e[r] = t
                    }), this.deploy || (0, o.zG)(this, "deploy", J.from({
                        payable: !1,
                        type: "constructor"
                    })), (0, o.zG)(this, "_isInterface", !0)
                }
                format(t) {
                    t || (t = z.full), t === z.sighash && to.throwArgumentError("interface does not support formatting sighash", "format", t);
                    let e = this.fragments.map(e => e.format(t));
                    return t === z.json ? JSON.stringify(e.map(t => JSON.parse(t))) : e
                }
                static getAbiCoder() {
                    return ti
                }
                static getAddress(t) {
                    return (0, f.Kn)(t)
                }
                static getSighash(t) {
                    return (0, n.p3)((0, d.id)(t.format()), 0, 4)
                }
                static getEventTopic(t) {
                    return (0, d.id)(t.format())
                }
                getFunction(t) {
                    if ((0, n.A7)(t)) {
                        for (let e in this.functions)
                            if (t === this.getSighash(e)) return this.functions[e];
                        to.throwArgumentError("no matching function", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = t.trim(),
                            r = Object.keys(this.functions).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? to.throwArgumentError("no matching function", "name", e) : r.length > 1 && to.throwArgumentError("multiple matching functions", "name", e), this.functions[r[0]]
                    }
                    let e = this.functions[K.fromString(t).format()];
                    return e || to.throwArgumentError("no matching function", "signature", t), e
                }
                getEvent(t) {
                    if ((0, n.A7)(t)) {
                        let e = t.toLowerCase();
                        for (let t in this.events)
                            if (e === this.getEventTopic(t)) return this.events[t];
                        to.throwArgumentError("no matching event", "topichash", e)
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = t.trim(),
                            r = Object.keys(this.events).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? to.throwArgumentError("no matching event", "name", e) : r.length > 1 && to.throwArgumentError("multiple matching events", "name", e), this.events[r[0]]
                    }
                    let e = this.events[Y.fromString(t).format()];
                    return e || to.throwArgumentError("no matching event", "signature", t), e
                }
                getError(t) {
                    if ((0, n.A7)(t)) {
                        let e = (0, o.tu)(this.constructor, "getSighash");
                        for (let r in this.errors)
                            if (t === e(this.errors[r])) return this.errors[r];
                        to.throwArgumentError("no matching error", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = t.trim(),
                            r = Object.keys(this.errors).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? to.throwArgumentError("no matching error", "name", e) : r.length > 1 && to.throwArgumentError("multiple matching errors", "name", e), this.errors[r[0]]
                    }
                    let e = this.errors[K.fromString(t).format()];
                    return e || to.throwArgumentError("no matching error", "signature", t), e
                }
                getSighash(t) {
                    if ("string" == typeof t) try {
                        t = this.getFunction(t)
                    } catch (e) {
                        try {
                            t = this.getError(t)
                        } catch (t) {
                            throw e
                        }
                    }
                    return (0, o.tu)(this.constructor, "getSighash")(t)
                }
                getEventTopic(t) {
                    return "string" == typeof t && (t = this.getEvent(t)), (0, o.tu)(this.constructor, "getEventTopic")(t)
                }
                _decodeParams(t, e) {
                    return this._abiCoder.decode(t, e)
                }
                _encodeParams(t, e) {
                    return this._abiCoder.encode(t, e)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeErrorResult(t, e) {
                    "string" == typeof t && (t = this.getError(t));
                    let r = (0, n.lE)(e);
                    return (0, n.Dv)(r.slice(0, 4)) !== this.getSighash(t) && to.throwArgumentError(`data signature does not match error ${t.name}.`, "data", (0, n.Dv)(r)), this._decodeParams(t.inputs, r.slice(4))
                }
                encodeErrorResult(t, e) {
                    return "string" == typeof t && (t = this.getError(t)), (0, n.Dv)((0, n.zo)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                }
                decodeFunctionData(t, e) {
                    "string" == typeof t && (t = this.getFunction(t));
                    let r = (0, n.lE)(e);
                    return (0, n.Dv)(r.slice(0, 4)) !== this.getSighash(t) && to.throwArgumentError(`data signature does not match function ${t.name}.`, "data", (0, n.Dv)(r)), this._decodeParams(t.inputs, r.slice(4))
                }
                encodeFunctionData(t, e) {
                    return "string" == typeof t && (t = this.getFunction(t)), (0, n.Dv)((0, n.zo)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                }
                decodeFunctionResult(t, e) {
                    "string" == typeof t && (t = this.getFunction(t));
                    let r = (0, n.lE)(e),
                        i = null,
                        o = "",
                        a = null,
                        l = null,
                        u = null;
                    switch (r.length % this._abiCoder._getWordSize()) {
                        case 0:
                            try {
                                return this._abiCoder.decode(t.outputs, r)
                            } catch (t) {}
                            break;
                        case 4:
                            {
                                let t = (0, n.Dv)(r.slice(0, 4)),
                                    e = tc[t];
                                if (e) a = this._abiCoder.decode(e.inputs, r.slice(4)),
                                l = e.name,
                                u = e.signature,
                                e.reason && (i = a[0]),
                                "Error" === l ? o = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(a[0])}` : "Panic" === l && (o = `; VM Exception while processing transaction: reverted with panic code ${a[0]}`);
                                else try {
                                    let e = this.getError(t);
                                    a = this._abiCoder.decode(e.inputs, r.slice(4)), l = e.name, u = e.format()
                                } catch (t) {}
                            }
                    }
                    return to.throwError("call revert exception" + o, s.Yd.errors.CALL_EXCEPTION, {
                        method: t.format(),
                        data: (0, n.Dv)(e),
                        errorArgs: a,
                        errorName: l,
                        errorSignature: u,
                        reason: i
                    })
                }
                encodeFunctionResult(t, e) {
                    return "string" == typeof t && (t = this.getFunction(t)), (0, n.Dv)(this._abiCoder.encode(t.outputs, e || []))
                }
                encodeFilterTopics(t, e) {
                    "string" == typeof t && (t = this.getEvent(t)), e.length > t.inputs.length && to.throwError("too many arguments for " + t.format(), s.Yd.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: e
                    });
                    let r = [];
                    t.anonymous || r.push(this.getEventTopic(t));
                    let o = (t, e) => "string" === t.type ? (0, d.id)(e) : "bytes" === t.type ? (0, p.w)((0, n.Dv)(e)) : ("bool" === t.type && "boolean" == typeof e && (e = e ? "0x01" : "0x00"), t.type.match(/^u?int/) && (e = i.O$.from(e).toHexString()), "address" === t.type && this._abiCoder.encode(["address"], [e]), (0, n.$m)((0, n.Dv)(e), 32));
                    for (e.forEach((e, n) => {
                            let i = t.inputs[n];
                            if (!i.indexed) {
                                null != e && to.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, e);
                                return
                            }
                            null == e ? r.push(null) : "array" === i.baseType || "tuple" === i.baseType ? to.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, e) : Array.isArray(e) ? r.push(e.map(t => o(i, t))) : r.push(o(i, e))
                        }); r.length && null === r[r.length - 1];) r.pop();
                    return r
                }
                encodeEventLog(t, e) {
                    "string" == typeof t && (t = this.getEvent(t));
                    let r = [],
                        n = [],
                        i = [];
                    return t.anonymous || r.push(this.getEventTopic(t)), e.length !== t.inputs.length && to.throwArgumentError("event arguments/values mismatch", "values", e), t.inputs.forEach((t, o) => {
                        let s = e[o];
                        if (t.indexed) {
                            if ("string" === t.type) r.push((0, d.id)(s));
                            else if ("bytes" === t.type) r.push((0, p.w)(s));
                            else if ("tuple" === t.baseType || "array" === t.baseType) throw Error("not implemented");
                            else r.push(this._abiCoder.encode([t.type], [s]))
                        } else n.push(t), i.push(s)
                    }), {
                        data: this._abiCoder.encode(n, i),
                        topics: r
                    }
                }
                decodeEventLog(t, e, r) {
                    if ("string" == typeof t && (t = this.getEvent(t)), null != r && !t.anonymous) {
                        let e = this.getEventTopic(t);
                        (0, n.A7)(r[0], 32) && r[0].toLowerCase() === e || to.throwError("fragment/topic mismatch", s.Yd.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: e,
                            value: r[0]
                        }), r = r.slice(1)
                    }
                    let i = [],
                        o = [],
                        a = [];
                    t.inputs.forEach((t, e) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (i.push(U.fromObject({
                            type: "bytes32",
                            name: t.name
                        })), a.push(!0)) : (i.push(t), a.push(!1)) : (o.push(t), a.push(!1))
                    });
                    let l = null != r ? this._abiCoder.decode(i, (0, n.zo)(r)) : null,
                        u = this._abiCoder.decode(o, e, !0),
                        c = [],
                        h = 0,
                        f = 0;
                    t.inputs.forEach((t, e) => {
                        if (t.indexed) {
                            if (null == l) c[e] = new tu({
                                _isIndexed: !0,
                                hash: null
                            });
                            else if (a[e]) c[e] = new tu({
                                _isIndexed: !0,
                                hash: l[f++]
                            });
                            else try {
                                c[e] = l[f++]
                            } catch (t) {
                                c[e] = t
                            }
                        } else try {
                            c[e] = u[h++]
                        } catch (t) {
                            c[e] = t
                        }
                        if (t.name && null == c[t.name]) {
                            let r = c[e];
                            r instanceof Error ? Object.defineProperty(c, t.name, {
                                enumerable: !0,
                                get: () => {
                                    throw th(`property ${JSON.stringify(t.name)}`, r)
                                }
                            }) : c[t.name] = r
                        }
                    });
                    for (let t = 0; t < c.length; t++) {
                        let e = c[t];
                        e instanceof Error && Object.defineProperty(c, t, {
                            enumerable: !0,
                            get: () => {
                                throw th(`index ${t}`, e)
                            }
                        })
                    }
                    return Object.freeze(c)
                }
                parseTransaction(t) {
                    let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
                    return e ? new ta({
                        args: this._abiCoder.decode(e.inputs, "0x" + t.data.substring(10)),
                        functionFragment: e,
                        name: e.name,
                        signature: e.format(),
                        sighash: this.getSighash(e),
                        value: i.O$.from(t.value || "0")
                    }) : null
                }
                parseLog(t) {
                    let e = this.getEvent(t.topics[0]);
                    return !e || e.anonymous ? null : new ts({
                        eventFragment: e,
                        name: e.name,
                        signature: e.format(),
                        topic: this.getEventTopic(e),
                        args: this.decodeEventLog(e, t.data, t.topics)
                    })
                }
                parseError(t) {
                    let e = (0, n.Dv)(t),
                        r = this.getError(e.substring(0, 10).toLowerCase());
                    return r ? new tl({
                        args: this._abiCoder.decode(r.inputs, "0x" + e.substring(10)),
                        errorFragment: r,
                        name: r.name,
                        signature: r.format(),
                        sighash: this.getSighash(r)
                    }) : null
                }
                static isInterface(t) {
                    return !!(t && t._isInterface)
                }
            }
            var td = r(81556),
                tp = r(48088),
                tg = r(639),
                tm = function(t, e, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function s(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(s, a)
                        }
                        l((n = n.apply(t, e || [])).next())
                    })
                };
            let ty = new s.Yd("contracts/5.7.0");

            function tv(t, e) {
                return tm(this, void 0, void 0, function*() {
                    let r = yield e;
                    "string" != typeof r && ty.throwArgumentError("invalid address or ENS name", "name", r);
                    try {
                        return (0, f.Kn)(r)
                    } catch (t) {}
                    t || ty.throwError("a provider or signer is needed to resolve ENS names", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "resolveName"
                    });
                    let n = yield t.resolveName(r);
                    return null == n && ty.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n
                })
            }

            function tA(t, e, r) {
                return tm(this, void 0, void 0, function*() {
                    let a = {};
                    r.length === e.inputs.length + 1 && "object" == typeof r[r.length - 1] && (a = (0, o.DC)(r.pop())), ty.checkArgumentCount(r.length, e.inputs.length, "passed to contract"), t.signer ? a.from ? a.from = (0, o.mE)({
                        override: tv(t.signer, a.from),
                        signer: t.signer.getAddress()
                    }).then(t => tm(this, void 0, void 0, function*() {
                        return (0, f.Kn)(t.signer) !== t.override && ty.throwError("Contract with a Signer cannot override from", s.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        }), t.override
                    })) : a.from = t.signer.getAddress() : a.from && (a.from = tv(t.provider, a.from));
                    let l = yield(0, o.mE)({
                        args: function t(e, r, n) {
                            return tm(this, void 0, void 0, function*() {
                                return Array.isArray(n) ? yield Promise.all(n.map((n, i) => t(e, Array.isArray(r) ? r[i] : r[n.name], n))): "address" === n.type ? yield tv(e, r): "tuple" === n.type ? yield t(e, r, n.components): "array" === n.baseType ? Array.isArray(r) ? yield Promise.all(r.map(r => t(e, r, n.arrayChildren))): Promise.reject(ty.makeError("invalid value for array", s.Yd.errors.INVALID_ARGUMENT, {
                                    argument: "value",
                                    value: r
                                })): r
                            })
                        }(t.signer || t.provider, r, e.inputs),
                        address: t.resolvedAddress,
                        overrides: (0, o.mE)(a) || {}
                    }), u = t.interface.encodeFunctionData(e, l.args), c = {
                        data: u,
                        to: l.address
                    }, h = l.overrides;
                    if (null != h.nonce && (c.nonce = i.O$.from(h.nonce).toNumber()), null != h.gasLimit && (c.gasLimit = i.O$.from(h.gasLimit)), null != h.gasPrice && (c.gasPrice = i.O$.from(h.gasPrice)), null != h.maxFeePerGas && (c.maxFeePerGas = i.O$.from(h.maxFeePerGas)), null != h.maxPriorityFeePerGas && (c.maxPriorityFeePerGas = i.O$.from(h.maxPriorityFeePerGas)), null != h.from && (c.from = h.from), null != h.type && (c.type = h.type), null != h.accessList && (c.accessList = (0, tg.z7)(h.accessList)), null == c.gasLimit && null != e.gas) {
                        let t = 21e3,
                            r = (0, n.lE)(u);
                        for (let e = 0; e < r.length; e++) t += 4, r[e] && (t += 64);
                        c.gasLimit = i.O$.from(e.gas).add(t)
                    }
                    if (h.value) {
                        let t = i.O$.from(h.value);
                        t.isZero() || e.payable || ty.throwError("non-payable method cannot override value", s.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: a.value
                        }), c.value = t
                    }
                    h.customData && (c.customData = (0, o.DC)(h.customData)), h.ccipReadEnabled && (c.ccipReadEnabled = !!h.ccipReadEnabled), delete a.nonce, delete a.gasLimit, delete a.gasPrice, delete a.from, delete a.value, delete a.type, delete a.accessList, delete a.maxFeePerGas, delete a.maxPriorityFeePerGas, delete a.customData, delete a.ccipReadEnabled;
                    let d = Object.keys(a).filter(t => null != a[t]);
                    return d.length && ty.throwError(`cannot override ${d.map(t=>JSON.stringify(t)).join(",")}`, s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "overrides",
                        overrides: d
                    }), c
                })
            }

            function tb(t, e, r) {
                let n = t.signer || t.provider;
                return function(...i) {
                    return tm(this, void 0, void 0, function*() {
                        let a;
                        if (i.length === e.inputs.length + 1 && "object" == typeof i[i.length - 1]) {
                            let t = (0, o.DC)(i.pop());
                            null != t.blockTag && (a = yield t.blockTag), delete t.blockTag, i.push(t)
                        }
                        null != t.deployTransaction && (yield t._deployed(a));
                        let l = yield tA(t, e, i), u = yield n.call(l, a);
                        try {
                            let n = t.interface.decodeFunctionResult(e, u);
                            return r && 1 === e.outputs.length && (n = n[0]), n
                        } catch (e) {
                            throw e.code === s.Yd.errors.CALL_EXCEPTION && (e.address = t.address, e.args = i, e.transaction = l), e
                        }
                    })
                }
            }

            function tw(t, e, r) {
                return e.constant ? tb(t, e, r) : function(...r) {
                    return tm(this, void 0, void 0, function*() {
                        t.signer || ty.throwError("sending a transaction requires a signer", s.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "sendTransaction"
                        }), null != t.deployTransaction && (yield t._deployed());
                        let n = yield tA(t, e, r), i = yield t.signer.sendTransaction(n);
                        return function(t, e) {
                            let r = e.wait.bind(e);
                            e.wait = e => r(e).then(e => (e.events = e.logs.map(r => {
                                let n = (0, o.p$)(r),
                                    i = null;
                                try {
                                    i = t.interface.parseLog(r)
                                } catch (t) {}
                                return i && (n.args = i.args, n.decode = (e, r) => t.interface.decodeEventLog(i.eventFragment, e, r), n.event = i.name, n.eventSignature = i.signature), n.removeListener = () => t.provider, n.getBlock = () => t.provider.getBlock(e.blockHash), n.getTransaction = () => t.provider.getTransaction(e.transactionHash), n.getTransactionReceipt = () => Promise.resolve(e), n
                            }), e))
                        }(t, i), i
                    })
                }
            }

            function tE(t) {
                return t.address && (null == t.topics || 0 === t.topics.length) ? "*" : (t.address || "*") + "@" + (t.topics ? t.topics.map(t => Array.isArray(t) ? t.join("|") : t).join(":") : "")
            }
            class t_ {
                constructor(t, e) {
                    (0, o.zG)(this, "tag", t), (0, o.zG)(this, "filter", e), this._listeners = []
                }
                addListener(t, e) {
                    this._listeners.push({
                        listener: t,
                        once: e
                    })
                }
                removeListener(t) {
                    let e = !1;
                    this._listeners = this._listeners.filter(r => !!e || r.listener !== t || (e = !0, !1))
                }
                removeAllListeners() {
                    this._listeners = []
                }
                listeners() {
                    return this._listeners.map(t => t.listener)
                }
                listenerCount() {
                    return this._listeners.length
                }
                run(t) {
                    let e = this.listenerCount();
                    return this._listeners = this._listeners.filter(e => {
                        let r = t.slice();
                        return setTimeout(() => {
                            e.listener.apply(this, r)
                        }, 0), !e.once
                    }), e
                }
                prepareEvent(t) {}
                getEmit(t) {
                    return [t]
                }
            }
            class tN extends t_ {
                constructor() {
                    super("error", null)
                }
            }
            class tk extends t_ {
                constructor(t, e, r, n) {
                    let i = {
                            address: t
                        },
                        s = e.getEventTopic(r);
                    n ? (s !== n[0] && ty.throwArgumentError("topic mismatch", "topics", n), i.topics = n.slice()) : i.topics = [s], super(tE(i), i), (0, o.zG)(this, "address", t), (0, o.zG)(this, "interface", e), (0, o.zG)(this, "fragment", r)
                }
                prepareEvent(t) {
                    super.prepareEvent(t), t.event = this.fragment.name, t.eventSignature = this.fragment.format(), t.decode = (t, e) => this.interface.decodeEventLog(this.fragment, t, e);
                    try {
                        t.args = this.interface.decodeEventLog(this.fragment, t.data, t.topics)
                    } catch (e) {
                        t.args = null, t.decodeError = e
                    }
                }
                getEmit(t) {
                    let e = function(t) {
                        let e = [],
                            r = function(t, n) {
                                if (Array.isArray(n))
                                    for (let i in n) {
                                        let o = t.slice();
                                        o.push(i);
                                        try {
                                            r(o, n[i])
                                        } catch (t) {
                                            e.push({
                                                path: o,
                                                error: t
                                            })
                                        }
                                    }
                            };
                        return r([], t), e
                    }(t.args);
                    if (e.length) throw e[0].error;
                    let r = (t.args || []).slice();
                    return r.push(t), r
                }
            }
            class tx extends t_ {
                constructor(t, e) {
                    super("*", {
                        address: t
                    }), (0, o.zG)(this, "address", t), (0, o.zG)(this, "interface", e)
                }
                prepareEvent(t) {
                    super.prepareEvent(t);
                    try {
                        let e = this.interface.parseLog(t);
                        t.event = e.name, t.eventSignature = e.signature, t.decode = (t, r) => this.interface.decodeEventLog(e.eventFragment, t, r), t.args = e.args
                    } catch (t) {}
                }
            }
            class tP {
                constructor(t, e, r) {
                    (0, o.zG)(this, "interface", (0, o.tu)(new.target, "getInterface")(e)), null == r ? ((0, o.zG)(this, "provider", null), (0, o.zG)(this, "signer", null)) : tp.E.isSigner(r) ? ((0, o.zG)(this, "provider", r.provider || null), (0, o.zG)(this, "signer", r)) : td.zt.isProvider(r) ? ((0, o.zG)(this, "provider", r), (0, o.zG)(this, "signer", null)) : ty.throwArgumentError("invalid signer or provider", "signerOrProvider", r), (0, o.zG)(this, "callStatic", {}), (0, o.zG)(this, "estimateGas", {}), (0, o.zG)(this, "functions", {}), (0, o.zG)(this, "populateTransaction", {}), (0, o.zG)(this, "filters", {}); {
                        let t = {};
                        Object.keys(this.interface.events).forEach(e => {
                            let r = this.interface.events[e];
                            (0, o.zG)(this.filters, e, (...t) => ({
                                address: this.address,
                                topics: this.interface.encodeFilterTopics(r, t)
                            })), t[r.name] || (t[r.name] = []), t[r.name].push(e)
                        }), Object.keys(t).forEach(e => {
                            let r = t[e];
                            1 === r.length ? (0, o.zG)(this.filters, e, this.filters[r[0]]) : ty.warn(`Duplicate definition of ${e} (${r.join(", ")})`)
                        })
                    }
                    if ((0, o.zG)(this, "_runningEvents", {}), (0, o.zG)(this, "_wrappedEmits", {}), null == t && ty.throwArgumentError("invalid contract address or ENS name", "addressOrName", t), (0, o.zG)(this, "address", t), this.provider)(0, o.zG)(this, "resolvedAddress", tv(this.provider, t));
                    else try {
                        (0, o.zG)(this, "resolvedAddress", Promise.resolve((0, f.Kn)(t)))
                    } catch (t) {
                        ty.throwError("provider is required to use ENS name as contract address", s.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Contract"
                        })
                    }
                    this.resolvedAddress.catch(t => {});
                    let n = {},
                        i = {};
                    Object.keys(this.interface.functions).forEach(t => {
                        let e = this.interface.functions[t];
                        if (i[t]) {
                            ty.warn(`Duplicate ABI entry for ${JSON.stringify(t)}`);
                            return
                        }
                        i[t] = !0; {
                            let r = e.name;
                            n[`%${r}`] || (n[`%${r}`] = []), n[`%${r}`].push(t)
                        }
                        if (null == this[t] && (0, o.zG)(this, t, tw(this, e, !0)), null == this.functions[t] && (0, o.zG)(this.functions, t, tw(this, e, !1)), null == this.callStatic[t] && (0, o.zG)(this.callStatic, t, tb(this, e, !0)), null == this.populateTransaction[t]) {
                            var r;
                            (0, o.zG)(this.populateTransaction, t, (r = this, function(...t) {
                                return tA(r, e, t)
                            }))
                        }
                        null == this.estimateGas[t] && (0, o.zG)(this.estimateGas, t, function(t, e) {
                            let r = t.signer || t.provider;
                            return function(...n) {
                                return tm(this, void 0, void 0, function*() {
                                    r || ty.throwError("estimate require a provider or signer", s.Yd.errors.UNSUPPORTED_OPERATION, {
                                        operation: "estimateGas"
                                    });
                                    let i = yield tA(t, e, n);
                                    return yield r.estimateGas(i)
                                })
                            }
                        }(this, e))
                    }), Object.keys(n).forEach(t => {
                        let e = n[t];
                        if (e.length > 1) return;
                        t = t.substring(1);
                        let r = e[0];
                        try {
                            null == this[t] && (0, o.zG)(this, t, this[r])
                        } catch (t) {}
                        null == this.functions[t] && (0, o.zG)(this.functions, t, this.functions[r]), null == this.callStatic[t] && (0, o.zG)(this.callStatic, t, this.callStatic[r]), null == this.populateTransaction[t] && (0, o.zG)(this.populateTransaction, t, this.populateTransaction[r]), null == this.estimateGas[t] && (0, o.zG)(this.estimateGas, t, this.estimateGas[r])
                    })
                }
                static getContractAddress(t) {
                    return (0, f.CR)(t)
                }
                static getInterface(t) {
                    return tf.isInterface(t) ? t : new tf(t)
                }
                deployed() {
                    return this._deployed()
                }
                _deployed(t) {
                    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, t).then(t => ("0x" === t && ty.throwError("contract not deployed", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        contractAddress: this.address,
                        operation: "getDeployed"
                    }), this))), this._deployedPromise
                }
                fallback(t) {
                    this.signer || ty.throwError("sending a transactions require a signer", s.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "sendTransaction(fallback)"
                    });
                    let e = (0, o.DC)(t || {});
                    return ["from", "to"].forEach(function(t) {
                        null != e[t] && ty.throwError("cannot override " + t, s.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: t
                        })
                    }), e.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(e))
                }
                connect(t) {
                    "string" == typeof t && (t = new tp.b(t, this.provider));
                    let e = new this.constructor(this.address, this.interface, t);
                    return this.deployTransaction && (0, o.zG)(e, "deployTransaction", this.deployTransaction), e
                }
                attach(t) {
                    return new this.constructor(t, this.interface, this.signer || this.provider)
                }
                static isIndexed(t) {
                    return tu.isIndexed(t)
                }
                _normalizeRunningEvent(t) {
                    return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t
                }
                _getRunningEvent(t) {
                    if ("string" == typeof t) {
                        if ("error" === t) return this._normalizeRunningEvent(new tN);
                        if ("event" === t) return this._normalizeRunningEvent(new t_("event", null));
                        if ("*" === t) return this._normalizeRunningEvent(new tx(this.address, this.interface));
                        let e = this.interface.getEvent(t);
                        return this._normalizeRunningEvent(new tk(this.address, this.interface, e))
                    }
                    if (t.topics && t.topics.length > 0) {
                        try {
                            let e = t.topics[0];
                            if ("string" != typeof e) throw Error("invalid topic");
                            let r = this.interface.getEvent(e);
                            return this._normalizeRunningEvent(new tk(this.address, this.interface, r, t.topics))
                        } catch (t) {}
                        let e = {
                            address: this.address,
                            topics: t.topics
                        };
                        return this._normalizeRunningEvent(new t_(tE(e), e))
                    }
                    return this._normalizeRunningEvent(new tx(this.address, this.interface))
                }
                _checkRunningEvents(t) {
                    if (0 === t.listenerCount()) {
                        delete this._runningEvents[t.tag];
                        let e = this._wrappedEmits[t.tag];
                        e && t.filter && (this.provider.off(t.filter, e), delete this._wrappedEmits[t.tag])
                    }
                }
                _wrapEvent(t, e, r) {
                    let n = (0, o.p$)(e);
                    return n.removeListener = () => {
                        r && (t.removeListener(r), this._checkRunningEvents(t))
                    }, n.getBlock = () => this.provider.getBlock(e.blockHash), n.getTransaction = () => this.provider.getTransaction(e.transactionHash), n.getTransactionReceipt = () => this.provider.getTransactionReceipt(e.transactionHash), t.prepareEvent(n), n
                }
                _addEventListener(t, e, r) {
                    if (this.provider || ty.throwError("events require a provider or a signer with a provider", s.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "once"
                        }), t.addListener(e, r), this._runningEvents[t.tag] = t, !this._wrappedEmits[t.tag]) {
                        let r = r => {
                            let n = this._wrapEvent(t, r, e);
                            if (null == n.decodeError) try {
                                let e = t.getEmit(n);
                                this.emit(t.filter, ...e)
                            } catch (t) {
                                n.decodeError = t.error
                            }
                            null != t.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n)
                        };
                        this._wrappedEmits[t.tag] = r, null != t.filter && this.provider.on(t.filter, r)
                    }
                }
                queryFilter(t, e, r) {
                    let i = this._getRunningEvent(t),
                        s = (0, o.DC)(i.filter);
                    return "string" == typeof e && (0, n.A7)(e, 32) ? (null != r && ty.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), s.blockHash = e) : (s.fromBlock = null != e ? e : 0, s.toBlock = null != r ? r : "latest"), this.provider.getLogs(s).then(t => t.map(t => this._wrapEvent(i, t, null)))
                }
                on(t, e) {
                    return this._addEventListener(this._getRunningEvent(t), e, !1), this
                }
                once(t, e) {
                    return this._addEventListener(this._getRunningEvent(t), e, !0), this
                }
                emit(t, ...e) {
                    if (!this.provider) return !1;
                    let r = this._getRunningEvent(t),
                        n = r.run(e) > 0;
                    return this._checkRunningEvents(r), n
                }
                listenerCount(t) {
                    return this.provider ? null == t ? Object.keys(this._runningEvents).reduce((t, e) => t + this._runningEvents[e].listenerCount(), 0) : this._getRunningEvent(t).listenerCount() : 0
                }
                listeners(t) {
                    if (!this.provider) return [];
                    if (null == t) {
                        let t = [];
                        for (let e in this._runningEvents) this._runningEvents[e].listeners().forEach(e => {
                            t.push(e)
                        });
                        return t
                    }
                    return this._getRunningEvent(t).listeners()
                }
                removeAllListeners(t) {
                    if (!this.provider) return this;
                    if (null == t) {
                        for (let t in this._runningEvents) {
                            let e = this._runningEvents[t];
                            e.removeAllListeners(), this._checkRunningEvents(e)
                        }
                        return this
                    }
                    let e = this._getRunningEvent(t);
                    return e.removeAllListeners(), this._checkRunningEvents(e), this
                }
                off(t, e) {
                    if (!this.provider) return this;
                    let r = this._getRunningEvent(t);
                    return r.removeListener(e), this._checkRunningEvents(r), this
                }
                removeListener(t, e) {
                    return this.off(t, e)
                }
            }
            class tI extends tP {}
        },
        32046: function(t, e, r) {
            "use strict";
            r.d(e, {
                id: function() {
                    return o
                }
            });
            var n = r(38197),
                i = r(29251);

            function o(t) {
                return (0, n.w)((0, i.Y0)(t))
            }
        },
        38197: function(t, e, r) {
            "use strict";
            r.d(e, {
                w: function() {
                    return s
                }
            });
            var n = r(91094),
                i = r.n(n),
                o = r(16441);

            function s(t) {
                return "0x" + i().keccak_256((0, o.lE)(t))
            }
        },
        1581: function(t, e, r) {
            "use strict";
            var n, i, o, s;
            r.d(e, {
                Yd: function() {
                    return p
                }
            });
            let a = !1,
                l = !1,
                u = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                c = u.default,
                h = null,
                f = function() {
                    try {
                        let t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                                } catch (r) {
                                    t.push(e)
                                }
                            }), t.length) throw Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
            (o = n || (n = {})).DEBUG = "DEBUG", o.INFO = "INFO", o.WARNING = "WARNING", o.ERROR = "ERROR", o.OFF = "OFF", (s = i || (i = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", s.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", s.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", s.NETWORK_ERROR = "NETWORK_ERROR", s.SERVER_ERROR = "SERVER_ERROR", s.TIMEOUT = "TIMEOUT", s.BUFFER_OVERRUN = "BUFFER_OVERRUN", s.NUMERIC_FAULT = "NUMERIC_FAULT", s.MISSING_NEW = "MISSING_NEW", s.INVALID_ARGUMENT = "INVALID_ARGUMENT", s.MISSING_ARGUMENT = "MISSING_ARGUMENT", s.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", s.CALL_EXCEPTION = "CALL_EXCEPTION", s.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", s.NONCE_EXPIRED = "NONCE_EXPIRED", s.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", s.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", s.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", s.ACTION_REJECTED = "ACTION_REJECTED";
            let d = "0123456789abcdef";
            class p {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, e) {
                    let r = t.toLowerCase();
                    null == u[r] && this.throwArgumentError("invalid log level name", "logLevel", t), c > u[r] || console.log.apply(console, e)
                }
                debug(...t) {
                    this._log(p.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(p.levels.INFO, t)
                }
                warn(...t) {
                    this._log(p.levels.WARNING, t)
                }
                makeError(t, e, r) {
                    if (l) return this.makeError("censored error", e, {});
                    e || (e = p.errors.UNKNOWN_ERROR), r || (r = {});
                    let n = [];
                    Object.keys(r).forEach(t => {
                        let e = r[t];
                        try {
                            if (e instanceof Uint8Array) {
                                let r = "";
                                for (let t = 0; t < e.length; t++) r += d[e[t] >> 4] + d[15 & e[t]];
                                n.push(t + "=Uint8Array(0x" + r + ")")
                            } else n.push(t + "=" + JSON.stringify(e))
                        } catch (e) {
                            n.push(t + "=" + JSON.stringify(r[t].toString()))
                        }
                    }), n.push(`code=${e}`), n.push(`version=${this.version}`);
                    let o = t,
                        s = "";
                    switch (e) {
                        case i.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                let e = t;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result"
                                }
                                break
                            }
                        case i.CALL_EXCEPTION:
                        case i.INSUFFICIENT_FUNDS:
                        case i.MISSING_NEW:
                        case i.NONCE_EXPIRED:
                        case i.REPLACEMENT_UNDERPRICED:
                        case i.TRANSACTION_REPLACED:
                        case i.UNPREDICTABLE_GAS_LIMIT:
                            s = e
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    let a = Error(t);
                    return a.reason = o, a.code = e, Object.keys(r).forEach(function(t) {
                        a[t] = r[t]
                    }), a
                }
                throwError(t, e, r) {
                    throw this.makeError(t, e, r)
                }
                throwArgumentError(t, e, r) {
                    return this.throwError(t, p.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: r
                    })
                }
                assert(t, e, r, n) {
                    t || this.throwError(e, r, n)
                }
                assertArgument(t, e, r, n) {
                    t || this.throwArgumentError(e, r, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(t, e) {
                    "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(e, p.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, e, r) {
                    r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, p.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    }), t > e && this.throwError("too many arguments" + r, p.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    })
                }
                checkNew(t, e) {
                    (t === Object || null == t) && this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(t, e) {
                    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : (t === Object || null == t) && this.throwError("missing new", p.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return h || (h = new p("logger/5.7.0")), h
                }
                static setCensorship(t, e) {
                    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), a) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    l = !!t, a = !!e
                }
                static setLogLevel(t) {
                    let e = u[t.toLowerCase()];
                    if (null == e) {
                        p.globalLogger().warn("invalid log level - " + t);
                        return
                    }
                    c = e
                }
                static from(t) {
                    return new p(t)
                }
            }
            p.errors = i, p.levels = n
        },
        6881: function(t, e, r) {
            "use strict";
            r.d(e, {
                dk: function() {
                    return h
                },
                uj: function() {
                    return a
                },
                p$: function() {
                    return c
                },
                zG: function() {
                    return i
                },
                tu: function() {
                    return o
                },
                mE: function() {
                    return s
                },
                DC: function() {
                    return l
                }
            });
            let n = new(r(1581)).Yd("properties/5.7.0");

            function i(t, e, r) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }

            function o(t, e) {
                for (let r = 0; r < 32; r++) {
                    if (t[e]) return t[e];
                    if (!t.prototype || "object" != typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }

            function s(t) {
                var e, r, n, i;
                return e = this, r = void 0, n = void 0, i = function*() {
                    let e = Object.keys(t).map(e => Promise.resolve(t[e]).then(t => ({
                        key: e,
                        value: t
                    })));
                    return (yield Promise.all(e)).reduce((t, e) => (t[e.key] = e.value, t), {})
                }, new(n || (n = Promise))(function(t, o) {
                    function s(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function l(e) {
                        var r;
                        e.done ? t(e.value) : ((r = e.value) instanceof n ? r : new n(function(t) {
                            t(r)
                        })).then(s, a)
                    }
                    l((i = i.apply(e, r || [])).next())
                })
            }

            function a(t, e) {
                t && "object" == typeof t || n.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach(r => {
                    e[r] || n.throwArgumentError("invalid object key - " + r, "transaction:" + r, t)
                })
            }

            function l(t) {
                let e = {};
                for (let r in t) e[r] = t[r];
                return e
            }
            let u = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function c(t) {
                return function(t) {
                    if (function t(e) {
                            if (null == e || u[typeof e]) return !0;
                            if (Array.isArray(e) || "object" == typeof e) {
                                if (!Object.isFrozen(e)) return !1;
                                let r = Object.keys(e);
                                for (let n = 0; n < r.length; n++) {
                                    let i = null;
                                    try {
                                        i = e[r[n]]
                                    } catch (t) {
                                        continue
                                    }
                                    if (!t(i)) return !1
                                }
                                return !0
                            }
                            return n.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
                        }(t)) return t;
                    if (Array.isArray(t)) return Object.freeze(t.map(t => c(t)));
                    if ("object" == typeof t) {
                        let e = {};
                        for (let r in t) {
                            let n = t[r];
                            void 0 !== n && i(e, r, c(n))
                        }
                        return e
                    }
                    return n.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
                }(t)
            }
            class h {
                constructor(t) {
                    for (let e in t) this[e] = c(t[e])
                }
            }
        },
        27628: function(t, e, r) {
            "use strict";
            let n, i;
            r.d(e, {
                r: function() {
                    return t0
                }
            });
            var o, s = r(48088),
                a = r(2593),
                l = r(16441),
                u = r(19485),
                c = r(38197),
                h = r(6881),
                f = r(1581);
            let d = "hash/5.7.0";
            var p = r(32046);
            let g = new f.Yd(d),
                m = new Uint8Array(32);
            m.fill(0);
            let y = a.O$.from(-1),
                v = a.O$.from(0),
                A = a.O$.from(1),
                b = a.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                w = (0, l.$m)(A.toHexString(), 32),
                E = (0, l.$m)(v.toHexString(), 32),
                _ = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                N = ["name", "version", "chainId", "verifyingContract", "salt"];

            function k(t) {
                return function(e) {
                    return "string" != typeof e && g.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            let x = {
                name: k("name"),
                version: k("version"),
                chainId: function(t) {
                    try {
                        return a.O$.from(t).toString()
                    } catch (t) {}
                    return g.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
                },
                verifyingContract: function(t) {
                    try {
                        return (0, u.Kn)(t).toLowerCase()
                    } catch (t) {}
                    return g.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    try {
                        let e = (0, l.lE)(t);
                        if (32 !== e.length) throw Error("bad length");
                        return (0, l.Dv)(e)
                    } catch (t) {}
                    return g.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
                }
            };

            function P(t) {
                {
                    let e = t.match(/^(u?)int(\d*)$/);
                    if (e) {
                        let r = "" === e[1],
                            n = parseInt(e[2] || "256");
                        (n % 8 != 0 || n > 256 || e[2] && e[2] !== String(n)) && g.throwArgumentError("invalid numeric width", "type", t);
                        let i = b.mask(r ? n - 1 : n),
                            o = r ? i.add(A).mul(y) : v;
                        return function(e) {
                            let r = a.O$.from(e);
                            return (r.lt(o) || r.gt(i)) && g.throwArgumentError(`value out-of-bounds for ${t}`, "value", e), (0, l.$m)(r.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    let e = t.match(/^bytes(\d+)$/);
                    if (e) {
                        let r = parseInt(e[1]);
                        return (0 === r || r > 32 || e[1] !== String(r)) && g.throwArgumentError("invalid bytes width", "type", t),
                            function(e) {
                                return (0, l.lE)(e).length !== r && g.throwArgumentError(`invalid length for ${t}`, "value", e),
                                    function(t) {
                                        let e = (0, l.lE)(t),
                                            r = e.length % 32;
                                        return r ? (0, l.xs)([e, m.slice(r)]) : (0, l.Dv)(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return (0, l.$m)((0, u.Kn)(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? w : E
                        };
                    case "bytes":
                        return function(t) {
                            return (0, c.w)(t)
                        };
                    case "string":
                        return function(t) {
                            return (0, p.id)(t)
                        }
                }
                return null
            }

            function I(t, e) {
                return `${t}(${e.map(({name:t,type:e})=>e+" "+t).join(",")})`
            }
            class S {
                constructor(t) {
                    (0, h.zG)(this, "types", Object.freeze((0, h.p$)(t))), (0, h.zG)(this, "_encoderCache", {}), (0, h.zG)(this, "_types", {});
                    let e = {},
                        r = {},
                        n = {};
                    for (let i in Object.keys(t).forEach(t => {
                            e[t] = {}, r[t] = [], n[t] = {}
                        }), t) {
                        let n = {};
                        t[i].forEach(o => {
                            n[o.name] && g.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", t), n[o.name] = !0;
                            let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            s === i && g.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t), P(s) || (r[s] || g.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t), r[s].push(i), e[i][s] = !0)
                        })
                    }
                    let i = Object.keys(r).filter(t => 0 === r[t].length);
                    for (let o in 0 === i.length ? g.throwArgumentError("missing primary type", "types", t) : i.length > 1 && g.throwArgumentError(`ambiguous primary types or unused types: ${i.map(t=>JSON.stringify(t)).join(", ")}`, "types", t), (0, h.zG)(this, "primaryType", i[0]), ! function i(o, s) {
                            s[o] && g.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t), s[o] = !0, Object.keys(e[o]).forEach(t => {
                                r[t] && (i(t, s), Object.keys(s).forEach(e => {
                                    n[e][t] = !0
                                }))
                            }), delete s[o]
                        }(this.primaryType, {}), n) {
                        let e = Object.keys(n[o]);
                        e.sort(), this._types[o] = I(o, t[o]) + e.map(e => I(e, t[e])).join("")
                    }
                }
                getEncoder(t) {
                    let e = this._encoderCache[t];
                    return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
                }
                _getEncoder(t) {
                    {
                        let e = P(t);
                        if (e) return e
                    }
                    let e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (e) {
                        let t = e[1],
                            r = this.getEncoder(t),
                            n = parseInt(e[3]);
                        return e => {
                            n >= 0 && e.length !== n && g.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                            let i = e.map(r);
                            return this._types[t] && (i = i.map(c.w)), (0, c.w)((0, l.xs)(i))
                        }
                    }
                    let r = this.types[t];
                    if (r) {
                        let e = (0, p.id)(this._types[t]);
                        return t => {
                            let n = r.map(({
                                name: e,
                                type: r
                            }) => {
                                let n = this.getEncoder(r)(t[e]);
                                return this._types[r] ? (0, c.w)(n) : n
                            });
                            return n.unshift(e), (0, l.xs)(n)
                        }
                    }
                    return g.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                encodeType(t) {
                    let e = this._types[t];
                    return e || g.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return (0, c.w)(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, r) {
                    if (P(t)) return r(t, e);
                    let n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        let t = n[1],
                            i = parseInt(n[3]);
                        return i >= 0 && e.length !== i && g.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e), e.map(e => this._visit(t, e, r))
                    }
                    let i = this.types[t];
                    return i ? i.reduce((t, {
                        name: n,
                        type: i
                    }) => (t[n] = this._visit(i, e[n], r), t), {}) : g.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new S(t)
                }
                static getPrimaryType(t) {
                    return S.from(t).primaryType
                }
                static hashStruct(t, e, r) {
                    return S.from(e).hashStruct(t, r)
                }
                static hashDomain(t) {
                    let e = [];
                    for (let r in t) {
                        let n = _[r];
                        n || g.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                            name: r,
                            type: n
                        })
                    }
                    return e.sort((t, e) => N.indexOf(t.name) - N.indexOf(e.name)), S.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, r) {
                    return (0, l.xs)(["0x1901", S.hashDomain(t), S.from(e).hash(r)])
                }
                static hash(t, e, r) {
                    return (0, c.w)(S.encode(t, e, r))
                }
                static resolveNames(t, e, r, n) {
                    var i, o, s, a;
                    return i = this, o = void 0, s = void 0, a = function*() {
                        t = (0, h.DC)(t);
                        let i = {};
                        t.verifyingContract && !(0, l.A7)(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
                        let o = S.from(e);
                        for (let t in o.visit(r, (t, e) => ("address" !== t || (0, l.A7)(e, 20) || (i[e] = "0x"), e)), i) i[t] = yield n(t);
                        return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), r = o.visit(r, (t, e) => "address" === t && i[e] ? i[e] : e), {
                            domain: t,
                            value: r
                        }
                    }, new(s || (s = Promise))(function(t, e) {
                        function r(t) {
                            try {
                                l(a.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function n(t) {
                            try {
                                l(a.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function l(e) {
                            var i;
                            e.done ? t(e.value) : ((i = e.value) instanceof s ? i : new s(function(t) {
                                t(i)
                            })).then(r, n)
                        }
                        l((a = a.apply(i, o || [])).next())
                    })
                }
                static getPayload(t, e, r) {
                    S.hashDomain(t);
                    let n = {},
                        i = [];
                    N.forEach(e => {
                        let r = t[e];
                        null != r && (n[e] = x[e](r), i.push({
                            name: e,
                            type: _[e]
                        }))
                    });
                    let o = S.from(e),
                        s = (0, h.DC)(e);
                    return s.EIP712Domain ? g.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : s.EIP712Domain = i, o.encode(r), {
                        types: s,
                        domain: n,
                        primaryType: o.primaryType,
                        message: o.visit(r, (t, e) => {
                            if (t.match(/^bytes(\d*)/)) return (0, l.Dv)((0, l.lE)(e));
                            if (t.match(/^u?int/)) return a.O$.from(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return "string" != typeof e && g.throwArgumentError("invalid string", "value", e), e
                            }
                            return g.throwArgumentError("unsupported type", "type", t)
                        })
                    }
                }
            }
            var R = r(29251),
                C = r(639);

            function T(t) {
                t = atob(t);
                let e = [];
                for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
                return (0, l.lE)(e)
            }

            function O(t) {
                t = (0, l.lE)(t);
                let e = "";
                for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                return btoa(e)
            }
            let B = new f.Yd("web/5.7.1");

            function D(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function F(t, e) {
                if (null == t) return null;
                if ("string" == typeof t) return t;
                if ((0, l.Zq)(t)) {
                    if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim())) try {
                        return (0, R.ZN)(t)
                    } catch (t) {}
                    return (0, l.Dv)(t)
                }
                return t
            }

            function z(t, e, r) {
                let n = null;
                if (null != e) {
                    n = (0, R.Y0)(e);
                    let r = "string" == typeof t ? {
                        url: t
                    } : (0, h.DC)(t);
                    r.headers ? 0 !== Object.keys(r.headers).filter(t => "content-type" === t.toLowerCase()).length || (r.headers = (0, h.DC)(r.headers), r.headers["content-type"] = "application/json") : r.headers = {
                        "content-type": "application/json"
                    }, t = r
                }
                return function(t, e, r) {
                    let n;
                    let i = "object" == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
                    B.assertArgument(i > 0 && i % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", i);
                    let o = "object" == typeof t ? t.throttleCallback : null,
                        s = "object" == typeof t && "number" == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
                    B.assertArgument(s > 0 && s % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
                    let a = "object" == typeof t && !!t.errorPassThrough,
                        u = {},
                        c = null,
                        d = {
                            method: "GET"
                        },
                        p = !1,
                        g = 12e4;
                    if ("string" == typeof t) c = t;
                    else if ("object" == typeof t) {
                        if ((null == t || null == t.url) && B.throwArgumentError("missing URL", "connection.url", t), c = t.url, "number" == typeof t.timeout && t.timeout > 0 && (g = t.timeout), t.headers)
                            for (let e in t.headers) u[e.toLowerCase()] = {
                                key: e,
                                value: String(t.headers[e])
                            }, ["if-none-match", "if-modified-since"].indexOf(e.toLowerCase()) >= 0 && (p = !0);
                        if (d.allowGzip = !!t.allowGzip, null != t.user && null != t.password) {
                            "https:" !== c.substring(0, 6) && !0 !== t.allowInsecureAuthentication && B.throwError("basic authentication requires a secure https url", f.Yd.errors.INVALID_ARGUMENT, {
                                argument: "url",
                                url: c,
                                user: t.user,
                                password: "[REDACTED]"
                            });
                            let e = t.user + ":" + t.password;
                            u.authorization = {
                                key: "Authorization",
                                value: "Basic " + O((0, R.Y0)(e))
                            }
                        }
                        null != t.skipFetchSetup && (d.skipFetchSetup = !!t.skipFetchSetup), null != t.fetchOptions && (d.fetchOptions = (0, h.DC)(t.fetchOptions))
                    }
                    let m = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                        y = c ? c.match(m) : null;
                    if (y) try {
                        var v;
                        let t = {
                                statusCode: 200,
                                statusMessage: "OK",
                                headers: {
                                    "content-type": y[1] || "text/plain"
                                },
                                body: y[2] ? T(y[3]) : (v = y[3], (0, R.Y0)(v.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16)))))
                            },
                            e = t.body;
                        return r && (e = r(t.body, t)), Promise.resolve(e)
                    } catch (t) {
                        B.throwError("processing response error", f.Yd.errors.SERVER_ERROR, {
                            body: F(y[1], y[2]),
                            error: t,
                            requestBody: null,
                            requestMethod: "GET",
                            url: c
                        })
                    }
                    e && (d.method = "POST", d.body = e, null == u["content-type"] && (u["content-type"] = {
                        key: "Content-Type",
                        value: "application/octet-stream"
                    }), null == u["content-length"] && (u["content-length"] = {
                        key: "Content-Length",
                        value: String(e.length)
                    }));
                    let A = {};
                    Object.keys(u).forEach(t => {
                        let e = u[t];
                        A[e.key] = e.value
                    }), d.headers = A;
                    let b = (n = null, {
                            promise: new Promise(function(t, e) {
                                g && (n = setTimeout(() => {
                                    null != n && (n = null, e(B.makeError("timeout", f.Yd.errors.TIMEOUT, {
                                        requestBody: F(d.body, A["content-type"]),
                                        requestMethod: d.method,
                                        timeout: g,
                                        url: c
                                    })))
                                }, g))
                            }),
                            cancel: function() {
                                null != n && (clearTimeout(n), n = null)
                            }
                        }),
                        w = function() {
                            var t, e, n, u;
                            return t = this, e = void 0, n = void 0, u = function*() {
                                for (let t = 0; t < i; t++) {
                                    let e = null;
                                    try {
                                        if (e = yield function(t, e) {
                                                var r, n, i, o;
                                                return r = this, n = void 0, i = void 0, o = function*() {
                                                    null == e && (e = {});
                                                    let r = {
                                                        method: e.method || "GET",
                                                        headers: e.headers || {},
                                                        body: e.body || void 0
                                                    };
                                                    if (!0 !== e.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), null != e.fetchOptions) {
                                                        let t = e.fetchOptions;
                                                        t.mode && (r.mode = t.mode), t.cache && (r.cache = t.cache), t.credentials && (r.credentials = t.credentials), t.redirect && (r.redirect = t.redirect), t.referrer && (r.referrer = t.referrer)
                                                    }
                                                    let n = yield fetch(t, r), i = yield n.arrayBuffer(), o = {};
                                                    return n.headers.forEach ? n.headers.forEach((t, e) => {
                                                        o[e.toLowerCase()] = t
                                                    }) : n.headers.keys().forEach(t => {
                                                        o[t.toLowerCase()] = n.headers.get(t)
                                                    }), {
                                                        headers: o,
                                                        statusCode: n.status,
                                                        statusMessage: n.statusText,
                                                        body: (0, l.lE)(new Uint8Array(i))
                                                    }
                                                }, new(i || (i = Promise))(function(t, e) {
                                                    function s(t) {
                                                        try {
                                                            l(o.next(t))
                                                        } catch (t) {
                                                            e(t)
                                                        }
                                                    }

                                                    function a(t) {
                                                        try {
                                                            l(o.throw(t))
                                                        } catch (t) {
                                                            e(t)
                                                        }
                                                    }

                                                    function l(e) {
                                                        var r;
                                                        e.done ? t(e.value) : ((r = e.value) instanceof i ? r : new i(function(t) {
                                                            t(r)
                                                        })).then(s, a)
                                                    }
                                                    l((o = o.apply(r, n || [])).next())
                                                })
                                            }(c, d), t < i) {
                                            if (301 === e.statusCode || 302 === e.statusCode) {
                                                let t = e.headers.location || "";
                                                if ("GET" === d.method && t.match(/^https:/)) {
                                                    c = e.headers.location;
                                                    continue
                                                }
                                            } else if (429 === e.statusCode) {
                                                let r = !0;
                                                if (o && (r = yield o(t, c)), r) {
                                                    let r = 0,
                                                        n = e.headers["retry-after"];
                                                    r = "string" == typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : s * parseInt(String(Math.random() * Math.pow(2, t))), yield D(r);
                                                    continue
                                                }
                                            }
                                        }
                                    } catch (t) {
                                        null == (e = t.response) && (b.cancel(), B.throwError("missing response", f.Yd.errors.SERVER_ERROR, {
                                            requestBody: F(d.body, A["content-type"]),
                                            requestMethod: d.method,
                                            serverError: t,
                                            url: c
                                        }))
                                    }
                                    let n = e.body;
                                    if (p && 304 === e.statusCode ? n = null : !a && (e.statusCode < 200 || e.statusCode >= 300) && (b.cancel(), B.throwError("bad response", f.Yd.errors.SERVER_ERROR, {
                                            status: e.statusCode,
                                            headers: e.headers,
                                            body: F(n, e.headers ? e.headers["content-type"] : null),
                                            requestBody: F(d.body, A["content-type"]),
                                            requestMethod: d.method,
                                            url: c
                                        })), r) try {
                                        let t = yield r(n, e);
                                        return b.cancel(), t
                                    } catch (r) {
                                        if (r.throttleRetry && t < i) {
                                            let e = !0;
                                            if (o && (e = yield o(t, c)), e) {
                                                let e = s * parseInt(String(Math.random() * Math.pow(2, t)));
                                                yield D(e);
                                                continue
                                            }
                                        }
                                        b.cancel(), B.throwError("processing response error", f.Yd.errors.SERVER_ERROR, {
                                            body: F(n, e.headers ? e.headers["content-type"] : null),
                                            error: r,
                                            requestBody: F(d.body, A["content-type"]),
                                            requestMethod: d.method,
                                            url: c
                                        })
                                    }
                                    return b.cancel(), n
                                }
                                return B.throwError("failed response", f.Yd.errors.SERVER_ERROR, {
                                    requestBody: F(d.body, A["content-type"]),
                                    requestMethod: d.method,
                                    url: c
                                })
                            }, new(n || (n = Promise))(function(r, i) {
                                function o(t) {
                                    try {
                                        a(u.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function s(t) {
                                    try {
                                        a(u.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function a(t) {
                                    var e;
                                    t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                        t(e)
                                    })).then(o, s)
                                }
                                a((u = u.apply(t, e || [])).next())
                            })
                        }();
                    return Promise.race([b.promise, w])
                }(t, n, (t, e) => {
                    let n = null;
                    if (null != t) try {
                        n = JSON.parse((0, R.ZN)(t))
                    } catch (e) {
                        B.throwError("invalid JSON", f.Yd.errors.SERVER_ERROR, {
                            body: t,
                            error: e
                        })
                    }
                    return r && (n = r(n, e)), n
                })
            }

            function L(t, e) {
                return e || (e = {}), null == (e = (0, h.DC)(e)).floor && (e.floor = 0), null == e.ceiling && (e.ceiling = 1e4), null == e.interval && (e.interval = 250), new Promise(function(r, n) {
                    let i = null,
                        o = !1,
                        s = () => !o && (o = !0, i && clearTimeout(i), !0);
                    e.timeout && (i = setTimeout(() => {
                        s() && n(Error("timeout"))
                    }, e.timeout));
                    let a = e.retryLimit,
                        l = 0;
                    ! function i() {
                        return t().then(function(t) {
                            if (void 0 !== t) s() && r(t);
                            else if (e.oncePoll) e.oncePoll.once("poll", i);
                            else if (e.onceBlock) e.onceBlock.once("block", i);
                            else if (!o) {
                                if (++l > a) {
                                    s() && n(Error("retry limit reached"));
                                    return
                                }
                                let t = e.interval * parseInt(String(Math.random() * Math.pow(2, l)));
                                t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(i, t)
                            }
                            return null
                        }, function(t) {
                            s() && n(t)
                        })
                    }()
                })
            }
            let U = "providers/5.7.2";
            var M = r(81556);
            class G {
                constructor(t) {
                    (0, h.zG)(this, "alphabet", t), (0, h.zG)(this, "base", t.length), (0, h.zG)(this, "_alphabetMap", {}), (0, h.zG)(this, "_leader", t.charAt(0));
                    for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e
                }
                encode(t) {
                    let e = (0, l.lE)(t);
                    if (0 === e.length) return "";
                    let r = [0];
                    for (let t = 0; t < e.length; ++t) {
                        let n = e[t];
                        for (let t = 0; t < r.length; ++t) n += r[t] << 8, r[t] = n % this.base, n = n / this.base | 0;
                        for (; n > 0;) r.push(n % this.base), n = n / this.base | 0
                    }
                    let n = "";
                    for (let t = 0; 0 === e[t] && t < e.length - 1; ++t) n += this._leader;
                    for (let t = r.length - 1; t >= 0; --t) n += this.alphabet[r[t]];
                    return n
                }
                decode(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    let e = [];
                    if (0 === t.length) return new Uint8Array(e);
                    e.push(0);
                    for (let r = 0; r < t.length; r++) {
                        let n = this._alphabetMap[t[r]];
                        if (void 0 === n) throw Error("Non-base" + this.base + " character");
                        let i = n;
                        for (let t = 0; t < e.length; ++t) i += e[t] * this.base, e[t] = 255 & i, i >>= 8;
                        for (; i > 0;) e.push(255 & i), i >>= 8
                    }
                    for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
                    return (0, l.lE)(new Uint8Array(e.reverse()))
                }
            }
            new G("abcdefghijklmnopqrstuvwxyz234567");
            let Y = new G("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");

            function j(t, e) {
                null == e && (e = 1);
                let r = [],
                    n = r.forEach,
                    i = function(t, e) {
                        n.call(t, function(t) {
                            e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t)
                        })
                    };
                return i(t, e), r
            }

            function q(t, e) {
                let r = Array(t);
                for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
                return r
            }

            function H(t, e) {
                let r = q(t(), t),
                    n = t(),
                    i = q(n, t),
                    o = function(t, e) {
                        let r = Array(t);
                        for (let n = 0; n < t; n++) r[n] = 1 + e();
                        return r
                    }(n, t);
                for (let t = 0; t < n; t++)
                    for (let e = 0; e < o[t]; e++) r.push(i[t] + e);
                return e ? r.map(t => e[t]) : r
            }

            function J(t, e, r) {
                let n = Array(t).fill(void 0).map(() => []);
                for (let i = 0; i < e; i++)(function(t, e) {
                    let r = Array(t);
                    for (let i = 0, o = 0; i < t; i++) {
                        var n;
                        r[i] = o += 1 & (n = e()) ? ~n >> 1 : n >> 1
                    }
                    return r
                })(t, r).forEach((t, e) => n[e].push(t));
                return n
            }
            let K = (o = function(t) {
                    let e = 0;

                    function r() {
                        return t[e++] << 8 | t[e++]
                    }
                    let n = r(),
                        i = 1,
                        o = [0, 1];
                    for (let t = 1; t < n; t++) o.push(i += r());
                    let s = r(),
                        a = e;
                    e += s;
                    let l = 0,
                        u = 0;

                    function c() {
                        return 0 == l && (u = u << 8 | t[e++], l = 8), u >> --l & 1
                    }
                    let h = 0;
                    for (let t = 0; t < 31; t++) h = h << 1 | c();
                    let f = [],
                        d = 0,
                        p = 2147483648;
                    for (;;) {
                        let t = Math.floor(((h - d + 1) * i - 1) / p),
                            e = 0,
                            r = n;
                        for (; r - e > 1;) {
                            let n = e + r >>> 1;
                            t < o[n] ? r = n : e = n
                        }
                        if (0 == e) break;
                        f.push(e);
                        let s = d + Math.floor(p * o[e] / i),
                            a = d + Math.floor(p * o[e + 1] / i) - 1;
                        for (;
                            ((s ^ a) & 1073741824) == 0;) h = h << 1 & 2147483647 | c(), s = s << 1 & 2147483647, a = a << 1 & 2147483647 | 1;
                        for (; s & ~a & 536870912;) h = 1073741824 & h | h << 1 & 1073741823 | c(), s = s << 1 ^ 1073741824, a = (1073741824 ^ a) << 1 | 1073741825;
                        d = s, p = 1 + a - s
                    }
                    let g = n - 4;
                    return f.map(e => {
                        switch (e - g) {
                            case 3:
                                return g + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                            case 2:
                                return g + 256 + (t[a++] << 8 | t[a++]);
                            case 1:
                                return g + t[a++];
                            default:
                                return e - 1
                        }
                    })
                }(T("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")), i = 0, () => o[i++]),
                Q = new Set(H(K)),
                V = new Set(H(K)),
                W = function(t) {
                    let e = [];
                    for (;;) {
                        let r = t();
                        if (0 == r) break;
                        e.push(function(t, e) {
                            let r = 1 + e(),
                                n = e(),
                                i = function(t) {
                                    let e = [];
                                    for (;;) {
                                        let r = t();
                                        if (0 == r) break;
                                        e.push(r)
                                    }
                                    return e
                                }(e);
                            return j(J(i.length, 1 + t, e).map((t, e) => {
                                let o = t[0],
                                    s = t.slice(1);
                                return Array(i[e]).fill(void 0).map((t, e) => {
                                    let i = e * n;
                                    return [o + e * r, s.map(t => t + i)]
                                })
                            }))
                        }(r, t))
                    }
                    for (;;) {
                        let r = t() - 1;
                        if (r < 0) break;
                        e.push(J(1 + t(), 1 + r, t).map(t => [t[0], t.slice(1)]))
                    }
                    return function(t) {
                        let e = {};
                        for (let r = 0; r < t.length; r++) {
                            let n = t[r];
                            e[n[0]] = n[1]
                        }
                        return e
                    }(j(e))
                }(K),
                X = (n = H(K).sort((t, e) => t - e), function t() {
                    let e = [];
                    for (;;) {
                        let r = H(K, n);
                        if (0 == r.length) break;
                        e.push({
                            set: new Set(r),
                            node: t()
                        })
                    }
                    e.sort((t, e) => e.set.size - t.set.size);
                    let r = K();
                    return {
                        branches: e,
                        valid: r % 3,
                        fe0f: !!(1 & (r = r / 3 | 0)),
                        save: 1 == (r >>= 1),
                        check: 2 == r
                    }
                }());

            function Z(t) {
                return t.filter(t => 65039 != t)
            }

            function $(t) {
                for (let e of t.split(".")) {
                    let t = (0, R.XL)(e);
                    try {
                        for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
                            if (95 !== t[e]) throw Error("underscore only allowed at start");
                        if (t.length >= 4 && t.every(t => t < 128) && 45 === t[2] && 45 === t[3]) throw Error("invalid label extension")
                    } catch (t) {
                        throw Error(`Invalid label "${e}": ${t.message}`)
                    }
                }
                return t
            }
            let tt = new f.Yd(d),
                te = new Uint8Array(32);

            function tr(t) {
                if (0 === t.length) throw Error("invalid ENS name; empty component");
                return t
            }

            function tn(t) {
                let e = (0, R.Y0)($(function(t, e) {
                        let r = (0, R.XL)(t).reverse(),
                            n = [];
                        for (; r.length;) {
                            let t = function(t, e) {
                                var r;
                                let n, i;
                                let o = X,
                                    s = [],
                                    a = t.length;
                                for (; a;) {
                                    let e = t[--a];
                                    if (!(o = null === (r = o.branches.find(t => t.set.has(e))) || void 0 === r ? void 0 : r.node)) break;
                                    if (o.save) i = e;
                                    else if (o.check && e === i) break;
                                    s.push(e), o.fe0f && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--), o.valid && (n = s.slice(), 2 == o.valid && n.splice(1, 1), t.length = a)
                                }
                                return n
                            }(r);
                            if (t) {
                                n.push(...e(t));
                                continue
                            }
                            let i = r.pop();
                            if (Q.has(i)) {
                                n.push(i);
                                continue
                            }
                            if (V.has(i)) continue;
                            let o = W[i];
                            if (o) {
                                n.push(...o);
                                continue
                            }
                            throw Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`)
                        }
                        return $(String.fromCodePoint(...n).normalize("NFC"))
                    }(t, Z))),
                    r = [];
                if (0 === t.length) return r;
                let n = 0;
                for (let t = 0; t < e.length; t++) 46 === e[t] && (r.push(tr(e.slice(n, t))), n = t + 1);
                if (n >= e.length) throw Error("invalid ENS name; empty component");
                return r.push(tr(e.slice(n))), r
            }

            function ti(t) {
                "string" != typeof t && tt.throwArgumentError("invalid ENS name; not a string", "name", t);
                let e = te,
                    r = tn(t);
                for (; r.length;) e = (0, c.w)((0, l.zo)([e, (0, c.w)(r.pop())]));
                return (0, l.Dv)(e)
            }
            te.fill(0);
            let to = new f.Yd("networks/5.7.1");

            function ts(t) {
                let e = function(e, r) {
                    null == r && (r = {});
                    let n = [];
                    if (e.InfuraProvider && "-" !== r.infura) try {
                        n.push(new e.InfuraProvider(t, r.infura))
                    } catch (t) {}
                    if (e.EtherscanProvider && "-" !== r.etherscan) try {
                        n.push(new e.EtherscanProvider(t, r.etherscan))
                    } catch (t) {}
                    if (e.AlchemyProvider && "-" !== r.alchemy) try {
                        n.push(new e.AlchemyProvider(t, r.alchemy))
                    } catch (t) {}
                    if (e.PocketProvider && "-" !== r.pocket) try {
                        let i = new e.PocketProvider(t, r.pocket);
                        i.network && -1 === ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(i.network.name) && n.push(i)
                    } catch (t) {}
                    if (e.CloudflareProvider && "-" !== r.cloudflare) try {
                        n.push(new e.CloudflareProvider(t))
                    } catch (t) {}
                    if (e.AnkrProvider && "-" !== r.ankr) try {
                        let i = new e.AnkrProvider(t, r.ankr);
                        i.network && -1 === ["ropsten"].indexOf(i.network.name) && n.push(i)
                    } catch (t) {}
                    if (0 === n.length) return null;
                    if (e.FallbackProvider) {
                        let i = 1;
                        return null != r.quorum ? i = r.quorum : "homestead" === t && (i = 2), new e.FallbackProvider(n, i)
                    }
                    return n[0]
                };
                return e.renetwork = function(t) {
                    return ts(t)
                }, e
            }

            function ta(t, e) {
                let r = function(r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
                };
                return r.renetwork = function(e) {
                    return ta(t, e)
                }, r
            }
            let tl = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: ts("homestead")
                },
                tu = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: ts("ropsten")
                },
                tc = {
                    chainId: 63,
                    name: "classicMordor",
                    _defaultProvider: ta("https://www.ethercluster.com/mordor", "classicMordor")
                },
                th = {
                    unspecified: {
                        chainId: 0,
                        name: "unspecified"
                    },
                    homestead: tl,
                    mainnet: tl,
                    morden: {
                        chainId: 2,
                        name: "morden"
                    },
                    ropsten: tu,
                    testnet: tu,
                    rinkeby: {
                        chainId: 4,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "rinkeby",
                        _defaultProvider: ts("rinkeby")
                    },
                    kovan: {
                        chainId: 42,
                        name: "kovan",
                        _defaultProvider: ts("kovan")
                    },
                    goerli: {
                        chainId: 5,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "goerli",
                        _defaultProvider: ts("goerli")
                    },
                    kintsugi: {
                        chainId: 1337702,
                        name: "kintsugi"
                    },
                    sepolia: {
                        chainId: 11155111,
                        name: "sepolia",
                        _defaultProvider: ts("sepolia")
                    },
                    classic: {
                        chainId: 61,
                        name: "classic",
                        _defaultProvider: ta("https://www.ethercluster.com/etc", "classic")
                    },
                    classicMorden: {
                        chainId: 62,
                        name: "classicMorden"
                    },
                    classicMordor: tc,
                    classicTestnet: tc,
                    classicKotti: {
                        chainId: 6,
                        name: "classicKotti",
                        _defaultProvider: ta("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: {
                        chainId: 100,
                        name: "xdai"
                    },
                    matic: {
                        chainId: 137,
                        name: "matic",
                        _defaultProvider: ts("matic")
                    },
                    maticmum: {
                        chainId: 80001,
                        name: "maticmum"
                    },
                    optimism: {
                        chainId: 10,
                        name: "optimism",
                        _defaultProvider: ts("optimism")
                    },
                    "optimism-kovan": {
                        chainId: 69,
                        name: "optimism-kovan"
                    },
                    "optimism-goerli": {
                        chainId: 420,
                        name: "optimism-goerli"
                    },
                    arbitrum: {
                        chainId: 42161,
                        name: "arbitrum"
                    },
                    "arbitrum-rinkeby": {
                        chainId: 421611,
                        name: "arbitrum-rinkeby"
                    },
                    "arbitrum-goerli": {
                        chainId: 421613,
                        name: "arbitrum-goerli"
                    },
                    bnb: {
                        chainId: 56,
                        name: "bnb"
                    },
                    bnbt: {
                        chainId: 97,
                        name: "bnbt"
                    }
                };
            var tf = r(33715),
                td = r.n(tf);

            function tp(t) {
                return "0x" + td().sha256().update((0, l.lE)(t)).digest("hex")
            }
            new f.Yd("sha2/5.7.0");
            var tg = r(92882),
                tm = r.n(tg);
            let ty = new f.Yd(U);
            class tv {
                constructor() {
                    this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    let t = {},
                        e = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        n = this.blockTag.bind(this),
                        i = this.data.bind(this),
                        o = this.hash.bind(this),
                        s = this.hex.bind(this),
                        a = this.number.bind(this),
                        l = this.type.bind(this);
                    return t.transaction = {
                        hash: o,
                        type: l,
                        accessList: tv.allowNull(this.accessList.bind(this), null),
                        blockHash: tv.allowNull(o, null),
                        blockNumber: tv.allowNull(a, null),
                        transactionIndex: tv.allowNull(a, null),
                        confirmations: tv.allowNull(a, null),
                        from: e,
                        gasPrice: tv.allowNull(r),
                        maxPriorityFeePerGas: tv.allowNull(r),
                        maxFeePerGas: tv.allowNull(r),
                        gasLimit: r,
                        to: tv.allowNull(e, null),
                        value: r,
                        nonce: a,
                        data: i,
                        r: tv.allowNull(this.uint256),
                        s: tv.allowNull(this.uint256),
                        v: tv.allowNull(a),
                        creates: tv.allowNull(e, null),
                        raw: tv.allowNull(i)
                    }, t.transactionRequest = {
                        from: tv.allowNull(e),
                        nonce: tv.allowNull(a),
                        gasLimit: tv.allowNull(r),
                        gasPrice: tv.allowNull(r),
                        maxPriorityFeePerGas: tv.allowNull(r),
                        maxFeePerGas: tv.allowNull(r),
                        to: tv.allowNull(e),
                        value: tv.allowNull(r),
                        data: tv.allowNull(t => this.data(t, !0)),
                        type: tv.allowNull(a),
                        accessList: tv.allowNull(this.accessList.bind(this), null)
                    }, t.receiptLog = {
                        transactionIndex: a,
                        blockNumber: a,
                        transactionHash: o,
                        address: e,
                        topics: tv.arrayOf(o),
                        data: i,
                        logIndex: a,
                        blockHash: o
                    }, t.receipt = {
                        to: tv.allowNull(this.address, null),
                        from: tv.allowNull(this.address, null),
                        contractAddress: tv.allowNull(e, null),
                        transactionIndex: a,
                        root: tv.allowNull(s),
                        gasUsed: r,
                        logsBloom: tv.allowNull(i),
                        blockHash: o,
                        transactionHash: o,
                        logs: tv.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: a,
                        confirmations: tv.allowNull(a, null),
                        cumulativeGasUsed: r,
                        effectiveGasPrice: tv.allowNull(r),
                        status: tv.allowNull(a),
                        type: l
                    }, t.block = {
                        hash: tv.allowNull(o),
                        parentHash: o,
                        number: a,
                        timestamp: a,
                        nonce: tv.allowNull(s),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: r,
                        gasUsed: r,
                        miner: tv.allowNull(e),
                        extraData: i,
                        transactions: tv.allowNull(tv.arrayOf(o)),
                        baseFeePerGas: tv.allowNull(r)
                    }, t.blockWithTransactions = (0, h.DC)(t.block), t.blockWithTransactions.transactions = tv.allowNull(tv.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                        fromBlock: tv.allowNull(n, void 0),
                        toBlock: tv.allowNull(n, void 0),
                        blockHash: tv.allowNull(o, void 0),
                        address: tv.allowNull(e, void 0),
                        topics: tv.allowNull(this.topics.bind(this), void 0)
                    }, t.filterLog = {
                        blockNumber: tv.allowNull(a),
                        blockHash: tv.allowNull(o),
                        transactionIndex: a,
                        removed: tv.allowNull(this.boolean.bind(this)),
                        address: e,
                        data: tv.allowFalsish(i, "0x"),
                        topics: tv.arrayOf(o),
                        transactionHash: o,
                        logIndex: a
                    }, t
                }
                accessList(t) {
                    return (0, C.z7)(t || [])
                }
                number(t) {
                    return "0x" === t ? 0 : a.O$.from(t).toNumber()
                }
                type(t) {
                    return "0x" === t || null == t ? 0 : a.O$.from(t).toNumber()
                }
                bigNumber(t) {
                    return a.O$.from(t)
                }
                boolean(t) {
                    if ("boolean" == typeof t) return t;
                    if ("string" == typeof t) {
                        if ("true" === (t = t.toLowerCase())) return !0;
                        if ("false" === t) return !1
                    }
                    throw Error("invalid boolean - " + t)
                }
                hex(t, e) {
                    return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, l.A7)(t)) ? t.toLowerCase() : ty.throwArgumentError("invalid hash", "value", t)
                }
                data(t, e) {
                    let r = this.hex(t, e);
                    if (r.length % 2 != 0) throw Error("invalid data; odd-length - " + t);
                    return r
                }
                address(t) {
                    return (0, u.Kn)(t)
                }
                callAddress(t) {
                    if (!(0, l.A7)(t, 32)) return null;
                    let e = (0, u.Kn)((0, l.p3)(t, 12));
                    return "0x0000000000000000000000000000000000000000" === e ? null : e
                }
                contractAddress(t) {
                    return (0, u.CR)(t)
                }
                blockTag(t) {
                    if (null == t) return "latest";
                    if ("earliest" === t) return "0x0";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return t
                    }
                    if ("number" == typeof t || (0, l.A7)(t)) return (0, l.$P)(t);
                    throw Error("invalid blockTag")
                }
                hash(t, e) {
                    let r = this.hex(t, e);
                    return 32 !== (0, l.E1)(r) ? ty.throwArgumentError("invalid hash", "value", t) : r
                }
                difficulty(t) {
                    if (null == t) return null;
                    let e = a.O$.from(t);
                    try {
                        return e.toNumber()
                    } catch (t) {}
                    return null
                }
                uint256(t) {
                    if (!(0, l.A7)(t)) throw Error("invalid uint256");
                    return (0, l.$m)(t, 32)
                }
                _block(t, e) {
                    null != t.author && null == t.miner && (t.miner = t.author);
                    let r = null != t._difficulty ? t._difficulty : t.difficulty,
                        n = tv.check(e, t);
                    return n._difficulty = null == r ? null : a.O$.from(r), n
                }
                block(t) {
                    return this._block(t, this.formats.block)
                }
                blockWithTransactions(t) {
                    return this._block(t, this.formats.blockWithTransactions)
                }
                transactionRequest(t) {
                    return tv.check(this.formats.transactionRequest, t)
                }
                transactionResponse(t) {
                    null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && a.O$.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), (1 === t.type || 2 === t.type) && null == t.accessList && (t.accessList = []);
                    let e = tv.check(this.formats.transaction, t);
                    if (null != t.chainId) {
                        let r = t.chainId;
                        (0, l.A7)(r) && (r = a.O$.from(r).toNumber()), e.chainId = r
                    } else {
                        let r = t.networkId;
                        null == r && null == e.v && (r = t.chainId), (0, l.A7)(r) && (r = a.O$.from(r).toNumber()), "number" != typeof r && null != e.v && ((r = (e.v - 35) / 2) < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r
                    }
                    return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
                }
                transaction(t) {
                    return (0, C.Qc)(t)
                }
                receiptLog(t) {
                    return tv.check(this.formats.receiptLog, t)
                }
                receipt(t) {
                    let e = tv.check(this.formats.receipt, t);
                    if (null != e.root) {
                        if (e.root.length <= 4) {
                            let t = a.O$.from(e.root).toNumber();
                            0 === t || 1 === t ? (null != e.status && e.status !== t && ty.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: e.root,
                                status: e.status
                            }), e.status = t, delete e.root) : ty.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                        } else 66 !== e.root.length && ty.throwArgumentError("invalid root hash", "value.root", e.root)
                    }
                    return null != e.status && (e.byzantium = !0), e
                }
                topics(t) {
                    return Array.isArray(t) ? t.map(t => this.topics(t)) : null != t ? this.hash(t, !0) : null
                }
                filter(t) {
                    return tv.check(this.formats.filter, t)
                }
                filterLog(t) {
                    return tv.check(this.formats.filterLog, t)
                }
                static check(t, e) {
                    let r = {};
                    for (let n in t) try {
                        let i = t[n](e[n]);
                        void 0 !== i && (r[n] = i)
                    } catch (t) {
                        throw t.checkKey = n, t.checkValue = e[n], t
                    }
                    return r
                }
                static allowNull(t, e) {
                    return function(r) {
                        return null == r ? e : t(r)
                    }
                }
                static allowFalsish(t, e) {
                    return function(r) {
                        return r ? t(r) : e
                    }
                }
                static arrayOf(t) {
                    return function(e) {
                        if (!Array.isArray(e)) throw Error("not an array");
                        let r = [];
                        return e.forEach(function(e) {
                            r.push(t(e))
                        }), r
                    }
                }
            }
            var tA = function(t, e, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
            let tb = new f.Yd(U);

            function tw(t) {
                return null == t ? "null" : (32 !== (0, l.E1)(t) && tb.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
            }

            function tE(t) {
                for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
                return t.map(t => {
                    if (!Array.isArray(t)) return tw(t); {
                        let e = {};
                        t.forEach(t => {
                            e[tw(t)] = !0
                        });
                        let r = Object.keys(e);
                        return r.sort(), r.join("|")
                    }
                }).join("&")
            }

            function t_(t) {
                if ("string" == typeof t) {
                    if (t = t.toLowerCase(), 32 === (0, l.E1)(t)) return "tx:" + t;
                    if (-1 === t.indexOf(":")) return t
                } else if (Array.isArray(t)) return "filter:*:" + tE(t);
                else if (M.Sg.isForkEvent(t)) throw tb.warn("not implemented"), Error("not implemented");
                else if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + tE(t.topics || []);
                throw Error("invalid event - " + t)
            }

            function tN() {
                return new Date().getTime()
            }

            function tk(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }
            let tx = ["block", "network", "pending", "poll"];
            class tP {
                constructor(t, e, r) {
                    (0, h.zG)(this, "tag", t), (0, h.zG)(this, "listener", e), (0, h.zG)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    let t = this.tag.split(":");
                    return "tx" !== t[0] ? null : t[1]
                }
                get filter() {
                    var t;
                    let e = this.tag.split(":");
                    if ("filter" !== e[0]) return null;
                    let r = e[1],
                        n = "" === (t = e[2]) ? [] : t.split(/&/g).map(t => {
                            if ("" === t) return [];
                            let e = t.split("|").map(t => "null" === t ? null : t);
                            return 1 === e.length ? e[0] : e
                        }),
                        i = {};
                    return n.length > 0 && (i.topics = n), r && "*" !== r && (i.address = r), i
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || tx.indexOf(this.tag) >= 0
                }
            }
            let tI = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function tS(t) {
                return (0, l.$m)(a.O$.from(t).toHexString(), 32)
            }

            function tR(t) {
                return Y.encode((0, l.zo)([t, (0, l.p3)(tp(tp(t)), 0, 4)]))
            }
            let tC = RegExp("^(ipfs)://(.*)$", "i"),
                tT = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), tC, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function tO(t, e) {
                try {
                    return (0, R.ZN)(tB(t, e))
                } catch (t) {}
                return null
            }

            function tB(t, e) {
                if ("0x" === t) return null;
                let r = a.O$.from((0, l.p3)(t, e, e + 32)).toNumber(),
                    n = a.O$.from((0, l.p3)(t, r, r + 32)).toNumber();
                return (0, l.p3)(t, r + 32, r + 32 + n)
            }

            function tD(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : tb.throwArgumentError("unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
            }

            function tF(t) {
                let e = (0, l.lE)(t);
                if (e.length > 32) throw Error("internal; should not happen");
                let r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }

            function tz(t) {
                let e = [],
                    r = 0;
                for (let n = 0; n < t.length; n++) e.push(null), r += 32;
                for (let n = 0; n < t.length; n++) {
                    let i = (0, l.lE)(t[n]);
                    e[n] = tF(r), e.push(tF(i.length)), e.push(function(t) {
                        if (t.length % 32 == 0) return t;
                        let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                        return e.set(t), e
                    }(i)), r += 32 + 32 * Math.ceil(i.length / 32)
                }
                return (0, l.xs)(e)
            }
            class tL {
                constructor(t, e, r, n) {
                    (0, h.zG)(this, "provider", t), (0, h.zG)(this, "name", r), (0, h.zG)(this, "address", t.formatter.address(e)), (0, h.zG)(this, "_resolvedAddress", n)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then(t => a.O$.from(t).eq(1)).catch(t => {
                        if (t.code === f.Yd.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, t
                    })), this._supportsEip2544
                }
                _fetch(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        let r = {
                                to: this.address,
                                ccipReadEnabled: !0,
                                data: (0, l.xs)([t, ti(this.name), e || "0x"])
                            },
                            n = !1;
                        if (yield this.supportsWildcard()) {
                            var i;
                            n = !0, r.data = (0, l.xs)(["0x9061b923", tz([(i = this.name, (0, l.Dv)((0, l.zo)(tn(i).map(t => {
                                if (t.length > 63) throw Error("invalid DNS encoded entry; length exceeds 63 bytes");
                                let e = new Uint8Array(t.length + 1);
                                return e.set(t, 1), e[0] = e.length - 1, e
                            }))) + "00"), r.data])])
                        }
                        try {
                            let t = yield this.provider.call(r);
                            return (0, l.lE)(t).length % 32 == 4 && tb.throwError("resolver threw error", f.Yd.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: t
                            }), n && (t = tB(t, 0)), t
                        } catch (t) {
                            if (t.code === f.Yd.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                    })
                }
                _fetchBytes(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        let r = yield this._fetch(t, e);
                        return null != r ? tB(r, 0) : null
                    })
                }
                _getAddress(t, e) {
                    let r = tI[String(t)];
                    if (null == r && tb.throwError(`unsupported coin type: ${t}`, f.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(e);
                    let n = (0, l.lE)(e);
                    if (null != r.p2pkh) {
                        let t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (t) {
                            let e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return tR((0, l.zo)([
                                [r.p2pkh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        let t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (t) {
                            let e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return tR((0, l.zo)([
                                [r.p2sh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        let t = n[1],
                            e = n[0];
                        if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && n.length === 2 + t && t >= 1 && t <= 75) {
                            let t = tm().toWords(n.slice(2));
                            return t.unshift(e), tm().encode(r.prefix, t)
                        }
                    }
                    return null
                }
                getAddress(t) {
                    return tA(this, void 0, void 0, function*() {
                        if (null == t && (t = 60), 60 === t) try {
                            let t = yield this._fetch("0x3b3b57de");
                            if ("0x" === t || "0x0000000000000000000000000000000000000000000000000000000000000000" === t) return null;
                            return this.provider.formatter.callAddress(t)
                        } catch (t) {
                            if (t.code === f.Yd.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                        let e = yield this._fetchBytes("0xf1cb7e06", tS(t));
                        if (null == e || "0x" === e) return null;
                        let r = this._getAddress(t, e);
                        return null == r && tb.throwError("invalid or unsupported coin data", f.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`,
                            coinType: t,
                            data: e
                        }), r
                    })
                }
                getAvatar() {
                    return tA(this, void 0, void 0, function*() {
                        let t = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            let e = yield this.getText("avatar");
                            if (null == e) return null;
                            for (let r = 0; r < tT.length; r++) {
                                let n = e.match(tT[r]);
                                if (null == n) continue;
                                let i = n[1].toLowerCase();
                                switch (i) {
                                    case "https":
                                        return t.push({
                                            type: "url",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "data":
                                        return t.push({
                                            type: "data",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "ipfs":
                                        return t.push({
                                            type: "ipfs",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: tD(e)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";t.push({
                                                type: i,
                                                content: e
                                            });
                                            let o = this._resolvedAddress || (yield this.getAddress()),
                                                s = (n[2] || "").split("/");
                                            if (2 !== s.length) return null;
                                            let u = yield this.provider.formatter.address(s[0]), c = (0, l.$m)(a.O$.from(s[1]).toHexString(), 32);
                                            if ("erc721" === i) {
                                                let e = this.provider.formatter.callAddress((yield this.provider.call({
                                                    to: u,
                                                    data: (0, l.xs)(["0x6352211e", c])
                                                })));
                                                if (o !== e) return null;
                                                t.push({
                                                    type: "owner",
                                                    content: e
                                                })
                                            } else if ("erc1155" === i) {
                                                let e = a.O$.from((yield this.provider.call({
                                                    to: u,
                                                    data: (0, l.xs)(["0x00fdd58e", (0, l.$m)(o, 32), c])
                                                })));
                                                if (e.isZero()) return null;
                                                t.push({
                                                    type: "balance",
                                                    content: e.toString()
                                                })
                                            }
                                            let h = {
                                                    to: this.provider.formatter.address(s[0]),
                                                    data: (0, l.xs)([r, c])
                                                },
                                                f = tO((yield this.provider.call(h)), 0);
                                            if (null == f) return null;t.push({
                                                type: "metadata-url-base",
                                                content: f
                                            }),
                                            "erc1155" === i && (f = f.replace("{id}", c.substring(2)), t.push({
                                                type: "metadata-url-expanded",
                                                content: f
                                            })),
                                            f.match(/^ipfs:/i) && (f = tD(f)),
                                            t.push({
                                                type: "metadata-url",
                                                content: f
                                            });
                                            let d = yield z(f);
                                            if (!d) return null;t.push({
                                                type: "metadata",
                                                content: JSON.stringify(d)
                                            });
                                            let p = d.image;
                                            if ("string" != typeof p) return null;
                                            if (p.match(/^(https:\/\/|data:)/i));
                                            else {
                                                let e = p.match(tC);
                                                if (null == e) return null;
                                                t.push({
                                                    type: "url-ipfs",
                                                    content: p
                                                }), p = tD(p)
                                            }
                                            return t.push({
                                                type: "url",
                                                content: p
                                            }),
                                            {
                                                linkage: t,
                                                url: p
                                            }
                                        }
                                }
                            }
                        } catch (t) {}
                        return null
                    })
                }
                getContentHash() {
                    return tA(this, void 0, void 0, function*() {
                        let t = yield this._fetchBytes("0xbc1c58d1");
                        if (null == t || "0x" === t) return null;
                        let e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (e) {
                            let t = parseInt(e[3], 16);
                            if (e[4].length === 2 * t) return "ipfs://" + Y.encode("0x" + e[1])
                        }
                        let r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            let t = parseInt(r[3], 16);
                            if (r[4].length === 2 * t) return "ipns://" + Y.encode("0x" + r[1])
                        }
                        let n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        if (n && 64 === n[1].length) return "bzz://" + n[1];
                        let i = t.match(/^0x90b2c605([0-9a-f]*)$/);
                        if (i && 68 === i[1].length) {
                            let t = {
                                "=": "",
                                "+": "-",
                                "/": "_"
                            };
                            return "sia://" + O("0x" + i[1]).replace(/[=+\/]/g, e => t[e])
                        }
                        return tb.throwError("invalid or unsupported content hash data", f.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: t
                        })
                    })
                }
                getText(t) {
                    return tA(this, void 0, void 0, function*() {
                        let e = (0, R.Y0)(t);
                        (e = (0, l.zo)([tS(64), tS(e.length), e])).length % 32 != 0 && (e = (0, l.zo)([e, (0, l.$m)("0x", 32 - t.length % 32)]));
                        let r = yield this._fetchBytes("0x59d1d43c", (0, l.Dv)(e));
                        return null == r || "0x" === r ? null : (0, R.ZN)(r)
                    })
                }
            }
            let tU = null,
                tM = 1;
            class tG extends M.zt {
                constructor(t) {
                    if (super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), (0, h.zG)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch(t => {}), this._ready().catch(t => {});
                    else {
                        let e = (0, h.tu)(new.target, "getNetwork")(t);
                        e ? ((0, h.zG)(this, "_network", e), this.emit("network", e, null)) : tb.throwArgumentError("invalid network", "network", t)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return tA(this, void 0, void 0, function*() {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise) try {
                                t = yield this._networkPromise
                            } catch (t) {}
                            null == t && (t = yield this.detectNetwork()), t || tb.throwError("no network detected", f.Yd.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : (0, h.zG)(this, "_network", t), this.emit("network", t, null))
                        }
                        return this._network
                    })
                }
                get ready() {
                    return L(() => this._ready().then(t => t, t => {
                        if (t.code !== f.Yd.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                    }))
                }
                static getFormatter() {
                    return null == tU && (tU = new tv), tU
                }
                static getNetwork(t) {
                    return function(t) {
                        if (null == t) return null;
                        if ("number" == typeof t) {
                            for (let e in th) {
                                let r = th[e];
                                if (r.chainId === t) return {
                                    name: r.name,
                                    chainId: r.chainId,
                                    ensAddress: r.ensAddress || null,
                                    _defaultProvider: r._defaultProvider || null
                                }
                            }
                            return {
                                chainId: t,
                                name: "unknown"
                            }
                        }
                        if ("string" == typeof t) {
                            let e = th[t];
                            return null == e ? null : {
                                name: e.name,
                                chainId: e.chainId,
                                ensAddress: e.ensAddress,
                                _defaultProvider: e._defaultProvider || null
                            }
                        }
                        let e = th[t.name];
                        if (!e) return "number" != typeof t.chainId && to.throwArgumentError("invalid network chainId", "network", t), t;
                        0 !== t.chainId && t.chainId !== e.chainId && to.throwArgumentError("network chainId mismatch", "network", t);
                        let r = t._defaultProvider || null;
                        if (null == r && e._defaultProvider) {
                            var n;
                            r = (n = e._defaultProvider) && "function" == typeof n.renetwork ? e._defaultProvider.renetwork(t) : e._defaultProvider
                        }
                        return {
                            name: t.name,
                            chainId: e.chainId,
                            ensAddress: t.ensAddress || e.ensAddress || null,
                            _defaultProvider: r
                        }
                    }(null == t ? "homestead" : t)
                }
                ccipReadFetch(t, e, r) {
                    return tA(this, void 0, void 0, function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        let n = t.to.toLowerCase(),
                            i = e.toLowerCase(),
                            o = [];
                        for (let t = 0; t < r.length; t++) {
                            let e = r[t],
                                s = e.replace("{sender}", n).replace("{data}", i),
                                a = e.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: i,
                                    sender: n
                                }),
                                l = yield z({
                                    url: s,
                                    errorPassThrough: !0
                                }, a, (t, e) => (t.status = e.statusCode, t));
                            if (l.data) return l.data;
                            let u = l.message || "unknown error";
                            if (l.status >= 400 && l.status < 500) return tb.throwError(`response not found during CCIP fetch: ${u}`, f.Yd.errors.SERVER_ERROR, {
                                url: e,
                                errorMessage: u
                            });
                            o.push(u)
                        }
                        return tb.throwError(`error encountered during CCIP fetch: ${o.map(t=>JSON.stringify(t)).join(", ")}`, f.Yd.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: o
                        })
                    })
                }
                _getInternalBlockNumber(t) {
                    return tA(this, void 0, void 0, function*() {
                        if (yield this._ready(), t > 0)
                            for (; this._internalBlockNumber;) {
                                let e = this._internalBlockNumber;
                                try {
                                    let r = yield e;
                                    if (tN() - r.respTime <= t) return r.blockNumber;
                                    break
                                } catch (t) {
                                    if (this._internalBlockNumber === e) break
                                }
                            }
                        let e = tN(),
                            r = (0, h.mE)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then(t => null, t => t)
                            }).then(({
                                blockNumber: t,
                                networkError: n
                            }) => {
                                if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                                let i = tN();
                                return (t = a.O$.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                    blockNumber: t,
                                    reqTime: e,
                                    respTime: i
                                }
                            });
                        return this._internalBlockNumber = r, r.catch(t => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        }), (yield r).blockNumber
                    })
                }
                poll() {
                    return tA(this, void 0, void 0, function*() {
                        let t = tM++,
                            e = [],
                            r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (t) {
                            this.emit("error", t);
                            return
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", t, r), r === this._lastBlockNumber) {
                            this.emit("didPoll", t);
                            return
                        }
                        if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) tb.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", tb.makeError("network block skew detected", f.Yd.errors.NETWORK_ERROR, {
                            blockNumber: r,
                            event: "blockSkew",
                            previousBlockNumber: this._emitted.block
                        })), this.emit("block", r);
                        else
                            for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
                        this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(t => {
                            if ("block" === t) return;
                            let e = this._emitted[t];
                            "pending" !== e && r - e > 12 && delete this._emitted[t]
                        })), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(t => {
                            switch (t.type) {
                                case "tx":
                                    {
                                        let r = t.hash,
                                            n = this.getTransactionReceipt(r).then(t => (t && null != t.blockNumber && (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t)), null)).catch(t => {
                                                this.emit("error", t)
                                            });e.push(n);
                                        break
                                    }
                                case "filter":
                                    if (!t._inflight) {
                                        t._inflight = !0, -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                                        let n = t.filter;
                                        n.fromBlock = t._lastBlockNumber + 1, n.toBlock = r;
                                        let i = n.toBlock - this._maxFilterBlockRange;
                                        i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0);
                                        let o = this.getLogs(n).then(e => {
                                            t._inflight = !1, 0 !== e.length && e.forEach(e => {
                                                e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber), this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(n, e)
                                            })
                                        }).catch(e => {
                                            this.emit("error", e), t._inflight = !1
                                        });
                                        e.push(o)
                                    }
                            }
                        }), this._lastBlockNumber = r, Promise.all(e).then(() => {
                            this.emit("didPoll", t)
                        }).catch(t => {
                            this.emit("error", t)
                        })
                    })
                }
                resetEventsBlock(t) {
                    this._lastBlockNumber = t - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return tA(this, void 0, void 0, function*() {
                        return tb.throwError("provider does not support network detection", f.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    })
                }
                getNetwork() {
                    return tA(this, void 0, void 0, function*() {
                        let t = yield this._ready(), e = yield this.detectNetwork();
                        if (t.chainId !== e.chainId) {
                            if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield tk(0), this._network;
                            let r = tb.makeError("underlying network changed", f.Yd.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: t,
                                detectedNetwork: e
                            });
                            throw this.emit("error", r), r
                        }
                        return t
                    })
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(t => {
                        this._setFastBlockNumber(t)
                    }, t => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(t) {
                    t && !this._poller ? (this._poller = setInterval(() => {
                        this.poll()
                    }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
                        this.poll(), this._bootstrapPoll = setTimeout(() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }, this.pollingInterval)
                    }, 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(t) {
                    if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw Error("invalid polling interval");
                    this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
                        this.poll()
                    }, this._pollingInterval))
                }
                _getFastBlockNumber() {
                    let t = tN();
                    return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then(t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(t) {
                    (null == this._fastBlockNumber || !(t < this._fastBlockNumber)) && (this._fastQueryDate = tN(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
                }
                waitForTransaction(t, e, r) {
                    return tA(this, void 0, void 0, function*() {
                        return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                    })
                }
                _waitForTransaction(t, e, r, n) {
                    return tA(this, void 0, void 0, function*() {
                        let i = yield this.getTransactionReceipt(t);
                        return (i ? i.confirmations : 0) >= e ? i : new Promise((i, o) => {
                            let s = [],
                                a = !1,
                                l = function() {
                                    return !!a || (a = !0, s.forEach(t => {
                                        t()
                                    }), !1)
                                },
                                u = t => {
                                    t.confirmations < e || l() || i(t)
                                };
                            if (this.on(t, u), s.push(() => {
                                    this.removeListener(t, u)
                                }), n) {
                                let r = n.startBlock,
                                    i = null,
                                    u = s => tA(this, void 0, void 0, function*() {
                                        a || (yield tk(1e3), this.getTransactionCount(n.from).then(c => tA(this, void 0, void 0, function*() {
                                            if (!a) {
                                                if (c <= n.nonce) r = s;
                                                else {
                                                    {
                                                        let e = yield this.getTransaction(t);
                                                        if (e && null != e.blockNumber) return
                                                    }
                                                    for (null == i && (i = r - 3) < n.startBlock && (i = n.startBlock); i <= s;) {
                                                        if (a) return;
                                                        let r = yield this.getBlockWithTransactions(i);
                                                        for (let i = 0; i < r.transactions.length; i++) {
                                                            let s = r.transactions[i];
                                                            if (s.hash === t) return;
                                                            if (s.from === n.from && s.nonce === n.nonce) {
                                                                if (a) return;
                                                                let r = yield this.waitForTransaction(s.hash, e);
                                                                if (l()) return;
                                                                let i = "replaced";
                                                                s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"), o(tb.makeError("transaction was replaced", f.Yd.errors.TRANSACTION_REPLACED, {
                                                                    cancelled: "replaced" === i || "cancelled" === i,
                                                                    reason: i,
                                                                    replacement: this._wrapTransaction(s),
                                                                    hash: t,
                                                                    receipt: r
                                                                }));
                                                                return
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                a || this.once("block", u)
                                            }
                                        }), t => {
                                            a || this.once("block", u)
                                        }))
                                    });
                                if (a) return;
                                this.once("block", u), s.push(() => {
                                    this.removeListener("block", u)
                                })
                            }
                            if ("number" == typeof r && r > 0) {
                                let t = setTimeout(() => {
                                    l() || o(tb.makeError("timeout exceeded", f.Yd.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }, r);
                                t.unref && t.unref(), s.push(() => {
                                    clearTimeout(t)
                                })
                            }
                        })
                    })
                }
                getBlockNumber() {
                    return tA(this, void 0, void 0, function*() {
                        return this._getInternalBlockNumber(0)
                    })
                }
                getGasPrice() {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let t = yield this.perform("getGasPrice", {});
                        try {
                            return a.O$.from(t)
                        } catch (e) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: t,
                                error: e
                            })
                        }
                    })
                }
                getBalance(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, h.mE)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getBalance", r);
                        try {
                            return a.O$.from(n)
                        } catch (t) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    })
                }
                getTransactionCount(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, h.mE)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getTransactionCount", r);
                        try {
                            return a.O$.from(n).toNumber()
                        } catch (t) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    })
                }
                getCode(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, h.mE)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getCode", r);
                        try {
                            return (0, l.Dv)(n)
                        } catch (t) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    })
                }
                getStorageAt(t, e, r) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let n = yield(0, h.mE)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(e).then(t => (0, l.$P)(t))
                        }), i = yield this.perform("getStorageAt", n);
                        try {
                            return (0, l.Dv)(i)
                        } catch (t) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: n,
                                result: i,
                                error: t
                            })
                        }
                    })
                }
                _wrapTransaction(t, e, r) {
                    if (null != e && 32 !== (0, l.E1)(e)) throw Error("invalid response - sendTransaction");
                    return null != e && t.hash !== e && tb.throwError("Transaction hash mismatch from Provider.sendTransaction.", f.Yd.errors.UNKNOWN_ERROR, {
                        expectedHash: t.hash,
                        returnedHash: e
                    }), t.wait = (e, n) => tA(this, void 0, void 0, function*() {
                        let i;
                        null == e && (e = 1), null == n && (n = 0), 0 !== e && null != r && (i = {
                            data: t.data,
                            from: t.from,
                            nonce: t.nonce,
                            to: t.to,
                            value: t.value,
                            startBlock: r
                        });
                        let o = yield this._waitForTransaction(t.hash, e, n, i);
                        return null == o && 0 === e ? null : (this._emitted["t:" + t.hash] = o.blockNumber, 0 === o.status && tb.throwError("transaction failed", f.Yd.errors.CALL_EXCEPTION, {
                            transactionHash: t.hash,
                            transaction: t,
                            receipt: o
                        }), o)
                    }), t
                }
                sendTransaction(t) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield Promise.resolve(t).then(t => (0, l.Dv)(t)), r = this.formatter.transaction(t);
                        null == r.confirmations && (r.confirmations = 0);
                        let n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            let t = yield this.perform("sendTransaction", {
                                signedTransaction: e
                            });
                            return this._wrapTransaction(r, t, n)
                        } catch (t) {
                            throw t.transaction = r, t.transactionHash = r.hash, t
                        }
                    })
                }
                _getTransactionRequest(t) {
                    return tA(this, void 0, void 0, function*() {
                        let e = yield t, r = {};
                        return ["from", "to"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? this._getAddress(t) : null))
                        }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? a.O$.from(t) : null))
                        }), ["type"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => null != t ? t : null))
                        }), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? (0, l.Dv)(t) : null))
                        }), this.formatter.transactionRequest((yield(0, h.mE)(r)))
                    })
                }
                _getFilter(t) {
                    return tA(this, void 0, void 0, function*() {
                        t = yield t;
                        let e = {};
                        return null != t.address && (e.address = this._getAddress(t.address)), ["blockHash", "topics"].forEach(r => {
                            null != t[r] && (e[r] = t[r])
                        }), ["fromBlock", "toBlock"].forEach(r => {
                            null != t[r] && (e[r] = this._getBlockTag(t[r]))
                        }), this.formatter.filter((yield(0, h.mE)(e)))
                    })
                }
                _call(t, e, r) {
                    return tA(this, void 0, void 0, function*() {
                        r >= 10 && tb.throwError("CCIP read exceeded maximum redirections", f.Yd.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: t
                        });
                        let n = t.to,
                            i = yield this.perform("call", {
                                transaction: t,
                                blockTag: e
                            });
                        if (r >= 0 && "latest" === e && null != n && "0x556f1830" === i.substring(0, 10) && (0, l.E1)(i) % 32 == 4) try {
                            let o = (0, l.p3)(i, 4),
                                s = (0, l.p3)(o, 0, 32);
                            a.O$.from(s).eq(n) || tb.throwError("CCIP Read sender did not match", f.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let u = [],
                                c = a.O$.from((0, l.p3)(o, 32, 64)).toNumber(),
                                h = a.O$.from((0, l.p3)(o, c, c + 32)).toNumber(),
                                d = (0, l.p3)(o, c + 32);
                            for (let e = 0; e < h; e++) {
                                let r = tO(d, 32 * e);
                                null == r && tb.throwError("CCIP Read contained corrupt URL string", f.Yd.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: t,
                                    data: i
                                }), u.push(r)
                            }
                            let p = tB(o, 64);
                            a.O$.from((0, l.p3)(o, 100, 128)).isZero() || tb.throwError("CCIP Read callback selector included junk", f.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let g = (0, l.p3)(o, 96, 100),
                                m = tB(o, 128),
                                y = yield this.ccipReadFetch(t, p, u);
                            null == y && tb.throwError("CCIP Read disabled or provided no URLs", f.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let v = {
                                to: n,
                                data: (0, l.xs)([g, tz([y, m])])
                            };
                            return this._call(v, e, r + 1)
                        } catch (t) {
                            if (t.code === f.Yd.errors.SERVER_ERROR) throw t
                        }
                        try {
                            return (0, l.Dv)(i)
                        } catch (r) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: t,
                                    blockTag: e
                                },
                                result: i,
                                error: r
                            })
                        }
                    })
                }
                call(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, h.mE)({
                            transaction: this._getTransactionRequest(t),
                            blockTag: this._getBlockTag(e),
                            ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    })
                }
                estimateGas(t) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield(0, h.mE)({
                            transaction: this._getTransactionRequest(t)
                        }), r = yield this.perform("estimateGas", e);
                        try {
                            return a.O$.from(r)
                        } catch (t) {
                            return tb.throwError("bad result from backend", f.Yd.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: e,
                                result: r,
                                error: t
                            })
                        }
                    })
                }
                _getAddress(t) {
                    return tA(this, void 0, void 0, function*() {
                        "string" != typeof(t = yield t) && tb.throwArgumentError("invalid address or ENS name", "name", t);
                        let e = yield this.resolveName(t);
                        return null == e && tb.throwError("ENS name not configured", f.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(t)})`
                        }), e
                    })
                }
                _getBlock(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork(), t = yield t;
                        let r = -128,
                            n = {
                                includeTransactions: !!e
                            };
                        if ((0, l.A7)(t, 32)) n.blockHash = t;
                        else try {
                            n.blockTag = yield this._getBlockTag(t), (0, l.A7)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                        } catch (e) {
                            tb.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                        return L(() => tA(this, void 0, void 0, function*() {
                            let t = yield this.perform("getBlock", n);
                            if (null == t) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                            if (e) {
                                let e = null;
                                for (let r = 0; r < t.transactions.length; r++) {
                                    let n = t.transactions[r];
                                    if (null == n.blockNumber) n.confirmations = 0;
                                    else if (null == n.confirmations) {
                                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let t = e - n.blockNumber + 1;
                                        t <= 0 && (t = 1), n.confirmations = t
                                    }
                                }
                                let r = this.formatter.blockWithTransactions(t);
                                return r.transactions = r.transactions.map(t => this._wrapTransaction(t)), r
                            }
                            return this.formatter.block(t)
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getBlock(t) {
                    return this._getBlock(t, !1)
                }
                getBlockWithTransactions(t) {
                    return this._getBlock(t, !0)
                }
                getTransaction(t) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork(), t = yield t;
                        let e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return L(() => tA(this, void 0, void 0, function*() {
                            let r = yield this.perform("getTransaction", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            let n = this.formatter.transactionResponse(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                t <= 0 && (t = 1), n.confirmations = t
                            }
                            return this._wrapTransaction(n)
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getTransactionReceipt(t) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork(), t = yield t;
                        let e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return L(() => tA(this, void 0, void 0, function*() {
                            let r = yield this.perform("getTransactionReceipt", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            if (null == r.blockHash) return;
                            let n = this.formatter.receipt(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                t <= 0 && (t = 1), n.confirmations = t
                            }
                            return n
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getLogs(t) {
                    return tA(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield(0, h.mE)({
                            filter: this._getFilter(t)
                        }), r = yield this.perform("getLogs", e);
                        return r.forEach(t => {
                            null == t.removed && (t.removed = !1)
                        }), tv.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                    })
                }
                getEtherPrice() {
                    return tA(this, void 0, void 0, function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    })
                }
                _getBlockTag(t) {
                    return tA(this, void 0, void 0, function*() {
                        if ("number" == typeof(t = yield t) && t < 0) {
                            t % 1 && tb.throwArgumentError("invalid BlockTag", "blockTag", t);
                            let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return (e += t) < 0 && (e = 0), this.formatter.blockTag(e)
                        }
                        return this.formatter.blockTag(t)
                    })
                }
                getResolver(t) {
                    return tA(this, void 0, void 0, function*() {
                        let e = t;
                        for (;;) {
                            if ("" === e || "." === e || "eth" !== t && "eth" === e) return null;
                            let r = yield this._getResolver(e, "getResolver");
                            if (null != r) {
                                let n = new tL(this, r, t);
                                if (e !== t && !(yield n.supportsWildcard())) return null;
                                return n
                            }
                            e = e.split(".").slice(1).join(".")
                        }
                    })
                }
                _getResolver(t, e) {
                    return tA(this, void 0, void 0, function*() {
                        null == e && (e = "ENS");
                        let r = yield this.getNetwork();
                        r.ensAddress || tb.throwError("network does not support ENS", f.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: e,
                            network: r.name
                        });
                        try {
                            let e = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + ti(t).substring(2)
                            });
                            return this.formatter.callAddress(e)
                        } catch (t) {}
                        return null
                    })
                }
                resolveName(t) {
                    return tA(this, void 0, void 0, function*() {
                        t = yield t;
                        try {
                            return Promise.resolve(this.formatter.address(t))
                        } catch (e) {
                            if ((0, l.A7)(t)) throw e
                        }
                        "string" != typeof t && tb.throwArgumentError("invalid ENS name", "name", t);
                        let e = yield this.getResolver(t);
                        return e ? yield e.getAddress(): null
                    })
                }
                lookupAddress(t) {
                    return tA(this, void 0, void 0, function*() {
                        t = yield t;
                        let e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(e, "lookupAddress");
                        if (null == r) return null;
                        let n = tO((yield this.call({
                            to: r,
                            data: "0x691f3431" + ti(e).substring(2)
                        })), 0);
                        return (yield this.resolveName(n)) != t ? null : n
                    })
                }
                getAvatar(t) {
                    return tA(this, void 0, void 0, function*() {
                        let e = null;
                        if ((0, l.A7)(t)) {
                            let r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                                n = yield this._getResolver(r, "getAvatar");
                            if (!n) return null;
                            e = new tL(this, n, r);
                            try {
                                let t = yield e.getAvatar();
                                if (t) return t.url
                            } catch (t) {
                                if (t.code !== f.Yd.errors.CALL_EXCEPTION) throw t
                            }
                            try {
                                let t = tO((yield this.call({
                                    to: n,
                                    data: "0x691f3431" + ti(r).substring(2)
                                })), 0);
                                e = yield this.getResolver(t)
                            } catch (t) {
                                if (t.code !== f.Yd.errors.CALL_EXCEPTION) throw t;
                                return null
                            }
                        } else if (!(e = yield this.getResolver(t))) return null;
                        let r = yield e.getAvatar();
                        return null == r ? null : r.url
                    })
                }
                perform(t, e) {
                    return tb.throwError(t + " not implemented", f.Yd.errors.NOT_IMPLEMENTED, {
                        operation: t
                    })
                }
                _startEvent(t) {
                    this.polling = this._events.filter(t => t.pollable()).length > 0
                }
                _stopEvent(t) {
                    this.polling = this._events.filter(t => t.pollable()).length > 0
                }
                _addEventListener(t, e, r) {
                    let n = new tP(t_(t), e, r);
                    return this._events.push(n), this._startEvent(n), this
                }
                on(t, e) {
                    return this._addEventListener(t, e, !1)
                }
                once(t, e) {
                    return this._addEventListener(t, e, !0)
                }
                emit(t, ...e) {
                    let r = !1,
                        n = [],
                        i = t_(t);
                    return this._events = this._events.filter(t => t.tag !== i || (setTimeout(() => {
                        t.listener.apply(this, e)
                    }, 0), r = !0, !t.once || (n.push(t), !1))), n.forEach(t => {
                        this._stopEvent(t)
                    }), r
                }
                listenerCount(t) {
                    if (!t) return this._events.length;
                    let e = t_(t);
                    return this._events.filter(t => t.tag === e).length
                }
                listeners(t) {
                    if (null == t) return this._events.map(t => t.listener);
                    let e = t_(t);
                    return this._events.filter(t => t.tag === e).map(t => t.listener)
                }
                off(t, e) {
                    if (null == e) return this.removeAllListeners(t);
                    let r = [],
                        n = !1,
                        i = t_(t);
                    return this._events = this._events.filter(t => t.tag !== i || t.listener != e || !!n || (n = !0, r.push(t), !1)), r.forEach(t => {
                        this._stopEvent(t)
                    }), this
                }
                removeAllListeners(t) {
                    let e = [];
                    if (null == t) e = this._events, this._events = [];
                    else {
                        let r = t_(t);
                        this._events = this._events.filter(t => t.tag !== r || (e.push(t), !1))
                    }
                    return e.forEach(t => {
                        this._stopEvent(t)
                    }), this
                }
            }
            var tY = function(t, e, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
            let tj = new f.Yd(U),
                tq = ["call", "estimateGas"];

            function tH(t, e) {
                if (null == t) return null;
                if ("string" == typeof t.message && t.message.match("reverted")) {
                    let r = (0, l.A7)(t.data) ? t.data : null;
                    if (!e || r) return {
                        message: t.message,
                        data: r
                    }
                }
                if ("object" == typeof t) {
                    for (let r in t) {
                        let n = tH(t[r], e);
                        if (n) return n
                    }
                    return null
                }
                if ("string" == typeof t) try {
                    return tH(JSON.parse(t), e)
                } catch (t) {}
                return null
            }

            function tJ(t, e, r) {
                let n = r.transaction || r.signedTransaction;
                if ("call" === t) {
                    let t = tH(e, !0);
                    if (t) return t.data;
                    tj.throwError("missing revert data in call exception; Transaction reverted without a reason string", f.Yd.errors.CALL_EXCEPTION, {
                        data: "0x",
                        transaction: n,
                        error: e
                    })
                }
                if ("estimateGas" === t) {
                    let r = tH(e.body, !1);
                    null == r && (r = tH(e, !1)), r && tj.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", f.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                        reason: r.message,
                        method: t,
                        transaction: n,
                        error: e
                    })
                }
                let i = e.message;
                throw e.code === f.Yd.errors.SERVER_ERROR && e.error && "string" == typeof e.error.message ? i = e.error.message : "string" == typeof e.body ? i = e.body : "string" == typeof e.responseText && (i = e.responseText), (i = (i || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && tj.throwError("insufficient funds for intrinsic transaction cost", f.Yd.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: n
                }), i.match(/nonce (is )?too low/i) && tj.throwError("nonce has already been used", f.Yd.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: n
                }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && tj.throwError("replacement fee too low", f.Yd.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: n
                }), i.match(/only replay-protected/i) && tj.throwError("legacy pre-eip-155 transactions not supported", f.Yd.errors.UNSUPPORTED_OPERATION, {
                    error: e,
                    method: t,
                    transaction: n
                }), tq.indexOf(t) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && tj.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", f.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: n
                }), e
            }

            function tK(t) {
                return new Promise(function(e) {
                    setTimeout(e, t)
                })
            }

            function tQ(t) {
                if (t.error) {
                    let e = Error(t.error.message);
                    throw e.code = t.error.code, e.data = t.error.data, e
                }
                return t.result
            }

            function tV(t) {
                return t ? t.toLowerCase() : t
            }
            let tW = {};
            class tX extends s.E {
                constructor(t, e, r) {
                    if (super(), t !== tW) throw Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    (0, h.zG)(this, "provider", e), null == r && (r = 0), "string" == typeof r ? ((0, h.zG)(this, "_address", this.provider.formatter.address(r)), (0, h.zG)(this, "_index", null)) : "number" == typeof r ? ((0, h.zG)(this, "_index", r), (0, h.zG)(this, "_address", null)) : tj.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(t) {
                    return tj.throwError("cannot alter JSON-RPC Signer connection", f.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new tZ(tW, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(t => (t.length <= this._index && tj.throwError("unknown account #" + this._index, f.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(t[this._index])))
                }
                sendUncheckedTransaction(t) {
                    t = (0, h.DC)(t);
                    let e = this.getAddress().then(t => (t && (t = t.toLowerCase()), t));
                    if (null == t.gasLimit) {
                        let r = (0, h.DC)(t);
                        r.from = e, t.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != t.to && (t.to = Promise.resolve(t.to).then(t => tY(this, void 0, void 0, function*() {
                        if (null == t) return null;
                        let e = yield this.provider.resolveName(t);
                        return null == e && tj.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                    }))), (0, h.mE)({
                        tx: (0, h.mE)(t),
                        sender: e
                    }).then(({
                        tx: e,
                        sender: r
                    }) => {
                        null != e.from ? e.from.toLowerCase() !== r && tj.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
                        let n = this.provider.constructor.hexlifyTransaction(e, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [n]).then(t => t, t => ("string" == typeof t.message && t.message.match(/user denied/i) && tj.throwError("user rejected transaction", f.Yd.errors.ACTION_REJECTED, {
                            action: "sendTransaction",
                            transaction: e
                        }), tJ("sendTransaction", t, n)))
                    })
                }
                signTransaction(t) {
                    return tj.throwError("signing transactions is unsupported", f.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(t) {
                    return tY(this, void 0, void 0, function*() {
                        let e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(t);
                        try {
                            return yield L(() => tY(this, void 0, void 0, function*() {
                                let t = yield this.provider.getTransaction(r);
                                if (null !== t) return this.provider._wrapTransaction(t, r, e)
                            }), {
                                oncePoll: this.provider
                            })
                        } catch (t) {
                            throw t.transactionHash = r, t
                        }
                    })
                }
                signMessage(t) {
                    return tY(this, void 0, void 0, function*() {
                        let e = "string" == typeof t ? (0, R.Y0)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("personal_sign", [(0, l.Dv)(e), r.toLowerCase()])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && tj.throwError("user rejected signing", f.Yd.errors.ACTION_REJECTED, {
                                action: "signMessage",
                                from: r,
                                messageData: t
                            }), e
                        }
                    })
                }
                _legacySignMessage(t) {
                    return tY(this, void 0, void 0, function*() {
                        let e = "string" == typeof t ? (0, R.Y0)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, l.Dv)(e)])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && tj.throwError("user rejected signing", f.Yd.errors.ACTION_REJECTED, {
                                action: "_legacySignMessage",
                                from: r,
                                messageData: t
                            }), e
                        }
                    })
                }
                _signTypedData(t, e, r) {
                    return tY(this, void 0, void 0, function*() {
                        let n = yield S.resolveNames(t, e, r, t => this.provider.resolveName(t)), i = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(S.getPayload(n.domain, e, n.value))])
                        } catch (t) {
                            throw "string" == typeof t.message && t.message.match(/user denied/i) && tj.throwError("user rejected signing", f.Yd.errors.ACTION_REJECTED, {
                                action: "_signTypedData",
                                from: i,
                                messageData: {
                                    domain: n.domain,
                                    types: e,
                                    value: n.value
                                }
                            }), t
                        }
                    })
                }
                unlock(t) {
                    return tY(this, void 0, void 0, function*() {
                        let e = this.provider,
                            r = yield this.getAddress();
                        return e.send("personal_unlockAccount", [r.toLowerCase(), t, null])
                    })
                }
            }
            class tZ extends tX {
                sendTransaction(t) {
                    return this.sendUncheckedTransaction(t).then(t => ({
                        hash: t,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: e => this.provider.waitForTransaction(t, e)
                    }))
                }
            }
            let t$ = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            class t0 extends tG {
                constructor(t, e) {
                    let r = e;
                    null == r && (r = new Promise((t, e) => {
                        setTimeout(() => {
                            this.detectNetwork().then(e => {
                                t(e)
                            }, t => {
                                e(t)
                            })
                        }, 0)
                    })), super(r), t || (t = (0, h.tu)(this.constructor, "defaultUrl")()), "string" == typeof t ? (0, h.zG)(this, "connection", Object.freeze({
                        url: t
                    })) : (0, h.zG)(this, "connection", Object.freeze((0, h.DC)(t))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
                        this._cache.detectNetwork = null
                    }, 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return tY(this, void 0, void 0, function*() {
                        yield tK(0);
                        let t = null;
                        try {
                            t = yield this.send("eth_chainId", [])
                        } catch (e) {
                            try {
                                t = yield this.send("net_version", [])
                            } catch (t) {}
                        }
                        if (null != t) {
                            let e = (0, h.tu)(this.constructor, "getNetwork");
                            try {
                                return e(a.O$.from(t).toNumber())
                            } catch (e) {
                                return tj.throwError("could not detect network", f.Yd.errors.NETWORK_ERROR, {
                                    chainId: t,
                                    event: "invalidNetwork",
                                    serverError: e
                                })
                            }
                        }
                        return tj.throwError("could not detect network", f.Yd.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    })
                }
                getSigner(t) {
                    return new tX(tW, this, t)
                }
                getUncheckedSigner(t) {
                    return this.getSigner(t).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then(t => t.map(t => this.formatter.address(t)))
                }
                send(t, e) {
                    let r = {
                        method: t,
                        params: e,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: (0, h.p$)(r),
                        provider: this
                    });
                    let n = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
                    if (n && this._cache[t]) return this._cache[t];
                    let i = z(this.connection, JSON.stringify(r), tQ).then(t => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: t,
                        provider: this
                    }), t), t => {
                        throw this.emit("debug", {
                            action: "response",
                            error: t,
                            request: r,
                            provider: this
                        }), t
                    });
                    return n && (this._cache[t] = i, setTimeout(() => {
                        this._cache[t] = null
                    }, 0)), i
                }
                prepareRequest(t, e) {
                    switch (t) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [tV(e.address), e.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [tV(e.address), e.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [tV(e.address), e.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [tV(e.address), (0, l.$m)(e.position, 32), e.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [e.signedTransaction]];
                        case "getBlock":
                            if (e.blockTag) return ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]];
                            if (e.blockHash) return ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]];
                            break;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [e.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [e.transactionHash]];
                        case "call":
                            return ["eth_call", [(0, h.tu)(this.constructor, "hexlifyTransaction")(e.transaction, {
                                from: !0
                            }), e.blockTag]];
                        case "estimateGas":
                            return ["eth_estimateGas", [(0, h.tu)(this.constructor, "hexlifyTransaction")(e.transaction, {
                                from: !0
                            })]];
                        case "getLogs":
                            return e.filter && null != e.filter.address && (e.filter.address = tV(e.filter.address)), ["eth_getLogs", [e.filter]]
                    }
                    return null
                }
                perform(t, e) {
                    return tY(this, void 0, void 0, function*() {
                        if ("call" === t || "estimateGas" === t) {
                            let t = e.transaction;
                            if (t && null != t.type && a.O$.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                                let r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = (0, h.DC)(e)).transaction = (0, h.DC)(t), delete e.transaction.type)
                            }
                        }
                        let r = this.prepareRequest(t, e);
                        null == r && tj.throwError(t + " not implemented", f.Yd.errors.NOT_IMPLEMENTED, {
                            operation: t
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (r) {
                            return tJ(t, r, e)
                        }
                    })
                }
                _startEvent(t) {
                    "pending" === t.tag && this._startPending(), super._startEvent(t)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    let t = this,
                        e = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = e, e.then(function(r) {
                        return function n() {
                            t.send("eth_getFilterChanges", [r]).then(function(r) {
                                if (t._pendingFilter != e) return null;
                                let n = Promise.resolve();
                                return r.forEach(function(e) {
                                    t._emitted["t:" + e.toLowerCase()] = "pending", n = n.then(function() {
                                        return t.getTransaction(e).then(function(e) {
                                            return t.emit("pending", e), null
                                        })
                                    })
                                }), n.then(function() {
                                    return tK(1e3)
                                })
                            }).then(function() {
                                if (t._pendingFilter != e) {
                                    t.send("eth_uninstallFilter", [r]);
                                    return
                                }
                                return setTimeout(function() {
                                    n()
                                }, 0), null
                            }).catch(t => {})
                        }(), r
                    }).catch(t => {})
                }
                _stopEvent(t) {
                    "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t)
                }
                static hexlifyTransaction(t, e) {
                    let r = (0, h.DC)(t$);
                    if (e)
                        for (let t in e) e[t] && (r[t] = !0);
                    (0, h.uj)(t, r);
                    let n = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(e) {
                        if (null == t[e]) return;
                        let r = (0, l.$P)(a.O$.from(t[e]));
                        "gasLimit" === e && (e = "gas"), n[e] = r
                    }), ["from", "to", "data"].forEach(function(e) {
                        null != t[e] && (n[e] = (0, l.Dv)(t[e]))
                    }), t.accessList && (n.accessList = (0, C.z7)(t.accessList)), n
                }
            }
        },
        59052: function(t, e, r) {
            "use strict";
            r.d(e, {
                J: function() {
                    return h
                },
                c: function() {
                    return l
                }
            });
            var n = r(16441),
                i = r(1581);
            let o = new i.Yd("rlp/5.7.0");

            function s(t) {
                let e = [];
                for (; t;) e.unshift(255 & t), t >>= 8;
                return e
            }

            function a(t, e, r) {
                let n = 0;
                for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
                return n
            }

            function l(t) {
                return (0, n.Dv)(function t(e) {
                    if (Array.isArray(e)) {
                        let r = [];
                        if (e.forEach(function(e) {
                                r = r.concat(t(e))
                            }), r.length <= 55) return r.unshift(192 + r.length), r;
                        let n = s(r.length);
                        return n.unshift(247 + n.length), n.concat(r)
                    }(0, n.Zq)(e) || o.throwArgumentError("RLP object must be BytesLike", "object", e);
                    let r = Array.prototype.slice.call((0, n.lE)(e));
                    if (1 === r.length && r[0] <= 127) return r;
                    if (r.length <= 55) return r.unshift(128 + r.length), r;
                    let i = s(r.length);
                    return i.unshift(183 + i.length), i.concat(r)
                }(t))
            }

            function u(t, e, r, n) {
                let s = [];
                for (; r < e + 1 + n;) {
                    let a = c(t, r);
                    s.push(a.result), (r += a.consumed) > e + 1 + n && o.throwError("child data too short", i.Yd.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + n,
                    result: s
                }
            }

            function c(t, e) {
                if (0 === t.length && o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
                    let r = t[e] - 247;
                    e + 1 + r > t.length && o.throwError("data short segment too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let n = a(t, e + 1, r);
                    return e + 1 + r + n > t.length && o.throwError("data long segment too short", i.Yd.errors.BUFFER_OVERRUN, {}), u(t, e, e + 1 + r, r + n)
                }
                if (t[e] >= 192) {
                    let r = t[e] - 192;
                    return e + 1 + r > t.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {}), u(t, e, e + 1, r)
                }
                if (t[e] >= 184) {
                    let r = t[e] - 183;
                    e + 1 + r > t.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let s = a(t, e + 1, r);
                    e + 1 + r + s > t.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let l = (0, n.Dv)(t.slice(e + 1 + r, e + 1 + r + s));
                    return {
                        consumed: 1 + r + s,
                        result: l
                    }
                }
                if (t[e] >= 128) {
                    let r = t[e] - 128;
                    e + 1 + r > t.length && o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let s = (0, n.Dv)(t.slice(e + 1, e + 1 + r));
                    return {
                        consumed: 1 + r,
                        result: s
                    }
                }
                return {
                    consumed: 1,
                    result: (0, n.Dv)(t[e])
                }
            }

            function h(t) {
                let e = (0, n.lE)(t),
                    r = c(e, 0);
                return r.consumed !== e.length && o.throwArgumentError("invalid rlp data", "data", t), r.result
            }
        },
        29251: function(t, e, r) {
            "use strict";
            r.d(e, {
                Y0: function() {
                    return f
                },
                XL: function() {
                    return p
                },
                ZN: function() {
                    return d
                }
            });
            var n, i, o, s, a = r(16441);
            let l = new(r(1581)).Yd("strings/5.7.0");

            function u(t, e, r, n, i) {
                if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
                    return t
                }
                return t === s.OVERRUN ? r.length - e - 1 : 0
            }(n = o || (o = {})).current = "", n.NFC = "NFC", n.NFD = "NFD", n.NFKC = "NFKC", n.NFKD = "NFKD", (i = s || (s = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", i.BAD_PREFIX = "bad codepoint prefix", i.OVERRUN = "string overrun", i.MISSING_CONTINUE = "missing continuation byte", i.OUT_OF_RANGE = "out of UTF-8 range", i.UTF16_SURROGATE = "UTF-16 surrogate", i.OVERLONG = "overlong representation";
            let c = Object.freeze({
                error: function(t, e, r, n, i) {
                    return l.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: u,
                replace: function(t, e, r, n, i) {
                    return t === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), u(t, e, r, n, i))
                }
            });

            function h(t, e) {
                null == e && (e = c.error), t = (0, a.lE)(t);
                let r = [],
                    n = 0;
                for (; n < t.length;) {
                    let i = t[n++];
                    if (i >> 7 == 0) {
                        r.push(i);
                        continue
                    }
                    let o = null,
                        a = null;
                    if ((224 & i) == 192) o = 1, a = 127;
                    else if ((240 & i) == 224) o = 2, a = 2047;
                    else if ((248 & i) == 240) o = 3, a = 65535;
                    else {
                        (192 & i) == 128 ? n += e(s.UNEXPECTED_CONTINUE, n - 1, t, r) : n += e(s.BAD_PREFIX, n - 1, t, r);
                        continue
                    }
                    if (n - 1 + o >= t.length) {
                        n += e(s.OVERRUN, n - 1, t, r);
                        continue
                    }
                    let l = i & (1 << 8 - o - 1) - 1;
                    for (let i = 0; i < o; i++) {
                        let i = t[n];
                        if ((192 & i) != 128) {
                            n += e(s.MISSING_CONTINUE, n, t, r), l = null;
                            break
                        }
                        l = l << 6 | 63 & i, n++
                    }
                    if (null !== l) {
                        if (l > 1114111) {
                            n += e(s.OUT_OF_RANGE, n - 1 - o, t, r, l);
                            continue
                        }
                        if (l >= 55296 && l <= 57343) {
                            n += e(s.UTF16_SURROGATE, n - 1 - o, t, r, l);
                            continue
                        }
                        if (l <= a) {
                            n += e(s.OVERLONG, n - 1 - o, t, r, l);
                            continue
                        }
                        r.push(l)
                    }
                }
                return r
            }

            function f(t, e = o.current) {
                e != o.current && (l.checkNormalize(), t = t.normalize(e));
                let r = [];
                for (let e = 0; e < t.length; e++) {
                    let n = t.charCodeAt(e);
                    if (n < 128) r.push(n);
                    else if (n < 2048) r.push(n >> 6 | 192), r.push(63 & n | 128);
                    else if ((64512 & n) == 55296) {
                        e++;
                        let i = t.charCodeAt(e);
                        if (e >= t.length || (64512 & i) != 56320) throw Error("invalid utf-8 string");
                        let o = 65536 + ((1023 & n) << 10) + (1023 & i);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)
                }
                return (0, a.lE)(r)
            }

            function d(t, e) {
                return h(t, e).map(t => t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10 & 1023) + 55296, (1023 & t) + 56320)).join("")
            }

            function p(t, e = o.current) {
                return h(f(t, e))
            }
        },
        639: function(t, e, r) {
            "use strict";
            r.d(e, {
                z7: function() {
                    return ti
                },
                Qc: function() {
                    return tu
                }
            });
            var n, i, o = r(19485),
                s = r(2593),
                a = r(16441),
                l = r(21046),
                u = r(38197),
                c = r(59052),
                h = r(13550),
                f = r.n(h),
                d = r(33715),
                p = r.n(d);

            function g(t, e, r) {
                return t(r = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(t, null == e ? r.path : e)
                    }
                }, r.exports), r.exports
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
            var m = y;

            function y(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            y.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            };
            var v = g(function(t, e) {
                    function r(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function n(t) {
                        for (var e = "", n = 0; n < t.length; n++) e += r(t[n].toString(16));
                        return e
                    }
                    e.toArray = function(t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" != typeof t) {
                            for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                            return r
                        }
                        if ("hex" === e) {
                            (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                            for (var n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                        } else
                            for (var n = 0; n < t.length; n++) {
                                var i = t.charCodeAt(n),
                                    o = i >> 8,
                                    s = 255 & i;
                                o ? r.push(o, s) : r.push(s)
                            }
                        return r
                    }, e.zero2 = r, e.toHex = n, e.encode = function(t, e) {
                        return "hex" === e ? n(t) : t
                    }
                }),
                A = g(function(t, e) {
                    e.assert = m, e.toArray = v.toArray, e.zero2 = v.zero2, e.toHex = v.toHex, e.encode = v.encode, e.getNAF = function(t, e, r) {
                        var n = Array(Math.max(t.bitLength(), r) + 1);
                        n.fill(0);
                        for (var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++) {
                            var a, l = o.andln(i - 1);
                            o.isOdd() ? (a = l > (i >> 1) - 1 ? (i >> 1) - l : l, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                        }
                        return n
                    }, e.getJSF = function(t, e) {
                        var r = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone();
                        for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0;) {
                            var o, s, a, l = t.andln(3) + n & 3,
                                u = e.andln(3) + i & 3;
                            3 === l && (l = -1), 3 === u && (u = -1), s = (1 & l) == 0 ? 0 : (3 == (o = t.andln(7) + n & 7) || 5 === o) && 2 === u ? -l : l, r[0].push(s), a = (1 & u) == 0 ? 0 : (3 == (o = e.andln(7) + i & 7) || 5 === o) && 2 === l ? -u : u, r[1].push(a), 2 * n === s + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1)
                        }
                        return r
                    }, e.cachedProperty = function(t, e, r) {
                        var n = "_" + e;
                        t.prototype[e] = function() {
                            return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                        }
                    }, e.parseBytes = function(t) {
                        return "string" == typeof t ? e.toArray(t, "hex") : t
                    }, e.intFromLE = function(t) {
                        return new(f())(t, "hex", "le")
                    }
                }),
                b = A.getNAF,
                w = A.getJSF,
                E = A.assert;

            function _(t, e) {
                this.type = t, this.p = new(f())(e.p, 16), this.red = e.prime ? f().red(e.prime) : f().mont(this.p), this.zero = new(f())(0).toRed(this.red), this.one = new(f())(1).toRed(this.red), this.two = new(f())(2).toRed(this.red), this.n = e.n && new(f())(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function N(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            _.prototype.point = function() {
                throw Error("Not implemented")
            }, _.prototype.validate = function() {
                throw Error("Not implemented")
            }, _.prototype._fixedNafMul = function(t, e) {
                E(t.precomputed);
                var r, n, i = t._getDoubles(),
                    o = b(e, 1, this._bitLength),
                    s = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
                s /= 3;
                var a = [];
                for (r = 0; r < o.length; r += i.step) {
                    n = 0;
                    for (var l = r + i.step - 1; l >= r; l--) n = (n << 1) + o[l];
                    a.push(n)
                }
                for (var u = this.jpoint(null, null, null), c = this.jpoint(null, null, null), h = s; h > 0; h--) {
                    for (r = 0; r < a.length; r++)(n = a[r]) === h ? c = c.mixedAdd(i.points[r]) : n === -h && (c = c.mixedAdd(i.points[r].neg()));
                    u = u.add(c)
                }
                return u.toP()
            }, _.prototype._wnafMul = function(t, e) {
                var r = 4,
                    n = t._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, o = b(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                    for (var l = 0; a >= 0 && 0 === o[a]; a--) l++;
                    if (a >= 0 && l++, s = s.dblp(l), a < 0) break;
                    var u = o[a];
                    E(0 !== u), s = "affine" === t.type ? u > 0 ? s.mixedAdd(i[u - 1 >> 1]) : s.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? s.add(i[u - 1 >> 1]) : s.add(i[-u - 1 >> 1].neg())
                }
                return "affine" === t.type ? s.toP() : s
            }, _.prototype._wnafMulAdd = function(t, e, r, n, i) {
                var o, s, a, l = this._wnafT1,
                    u = this._wnafT2,
                    c = this._wnafT3,
                    h = 0;
                for (o = 0; o < n; o++) {
                    var f = (a = e[o])._getNAFPoints(t);
                    l[o] = f.wnd, u[o] = f.points
                }
                for (o = n - 1; o >= 1; o -= 2) {
                    var d = o - 1,
                        p = o;
                    if (1 !== l[d] || 1 !== l[p]) {
                        c[d] = b(r[d], l[d], this._bitLength), c[p] = b(r[p], l[p], this._bitLength), h = Math.max(c[d].length, h), h = Math.max(c[p].length, h);
                        continue
                    }
                    var g = [e[d], null, null, e[p]];
                    0 === e[d].y.cmp(e[p].y) ? (g[1] = e[d].add(e[p]), g[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (g[1] = e[d].toJ().mixedAdd(e[p]), g[2] = e[d].add(e[p].neg())) : (g[1] = e[d].toJ().mixedAdd(e[p]), g[2] = e[d].toJ().mixedAdd(e[p].neg()));
                    var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        y = w(r[d], r[p]);
                    for (s = 0, h = Math.max(y[0].length, h), c[d] = Array(h), c[p] = Array(h); s < h; s++) {
                        var v = 0 | y[0][s],
                            A = 0 | y[1][s];
                        c[d][s] = m[(v + 1) * 3 + (A + 1)], c[p][s] = 0, u[d] = g
                    }
                }
                var E = this.jpoint(null, null, null),
                    _ = this._wnafT4;
                for (o = h; o >= 0; o--) {
                    for (var N = 0; o >= 0;) {
                        var k = !0;
                        for (s = 0; s < n; s++) _[s] = 0 | c[s][o], 0 !== _[s] && (k = !1);
                        if (!k) break;
                        N++, o--
                    }
                    if (o >= 0 && N++, E = E.dblp(N), o < 0) break;
                    for (s = 0; s < n; s++) {
                        var x = _[s];
                        0 !== x && (x > 0 ? a = u[s][x - 1 >> 1] : x < 0 && (a = u[s][-x - 1 >> 1].neg()), E = "affine" === a.type ? E.mixedAdd(a) : E.add(a))
                    }
                }
                for (o = 0; o < n; o++) u[o] = null;
                return i ? E : E.toP()
            }, _.BasePoint = N, N.prototype.eq = function() {
                throw Error("Not implemented")
            }, N.prototype.validate = function() {
                return this.curve.validate(this)
            }, _.prototype.decodePoint = function(t, e) {
                t = A.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? E(t[t.length - 1] % 2 == 0) : 7 === t[0] && E(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw Error("Unknown point format")
            }, N.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, N.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, N.prototype.encode = function(t, e) {
                return A.encode(this._encode(e), t)
            }, N.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, N.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, N.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < e; i += t) {
                    for (var o = 0; o < t; o++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: t,
                    points: r
                }
            }, N.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                return {
                    wnd: t,
                    points: e
                }
            }, N.prototype._getBeta = function() {
                return null
            }, N.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            };
            var k = g(function(t) {
                    "function" == typeof Object.create ? t.exports = function(t, e) {
                        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(t, e) {
                        if (e) {
                            t.super_ = e;
                            var r = function() {};
                            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                        }
                    }
                }),
                x = A.assert;

            function P(t) {
                _.call(this, "short", t), this.a = new(f())(t.a, 16).toRed(this.red), this.b = new(f())(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function I(t, e, r, n) {
                _.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new(f())(e, 16), this.y = new(f())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function S(t, e, r, n) {
                _.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new(f())(0)) : (this.x = new(f())(e, 16), this.y = new(f())(r, 16), this.z = new(f())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            k(P, _), P.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    if (t.beta) e = new(f())(t.beta, 16).toRed(this.red);
                    else {
                        var e, r, n, i = this._getEndoRoots(this.p);
                        e = (e = 0 > i[0].cmp(i[1]) ? i[0] : i[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new(f())(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], x(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return n = t.basis ? t.basis.map(function(t) {
                        return {
                            a: new(f())(t.a, 16),
                            b: new(f())(t.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: e,
                        lambda: r,
                        basis: n
                    }
                }
            }, P.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : f().mont(t),
                    r = new(f())(2).toRed(e).redInvm(),
                    n = r.redNeg(),
                    i = new(f())(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
            }, P.prototype._getEndoBasis = function(t) {
                for (var e, r, n, i, o, s, a, l, u, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = t, d = this.n.clone(), p = new(f())(1), g = new(f())(0), m = new(f())(0), y = new(f())(1), v = 0; 0 !== h.cmpn(0);) {
                    var A = d.div(h);
                    l = d.sub(A.mul(h)), u = m.sub(A.mul(p));
                    var b = y.sub(A.mul(g));
                    if (!n && 0 > l.cmp(c)) e = a.neg(), r = p, n = l.neg(), i = u;
                    else if (n && 2 == ++v) break;
                    a = l, d = h, h = l, m = p, p = u, y = g, g = b
                }
                o = l.neg(), s = u;
                var w = n.sqr().add(i.sqr());
                return o.sqr().add(s.sqr()).cmp(w) >= 0 && (o = e, s = r), n.negative && (n = n.neg(), i = i.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
                    a: n,
                    b: i
                }, {
                    a: o,
                    b: s
                }]
            }, P.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    n = e[1],
                    i = n.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    s = i.mul(r.a),
                    a = o.mul(n.a),
                    l = i.mul(r.b),
                    u = o.mul(n.b);
                return {
                    k1: t.sub(s).sub(a),
                    k2: l.add(u).neg()
                }
            }, P.prototype.pointFromX = function(t, e) {
                (t = new(f())(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var i = n.fromRed().isOdd();
                return (e && !i || !e && i) && (n = n.redNeg()), this.point(t, n)
            }, P.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    n = this.a.redMul(e),
                    i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, P.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(e[o]),
                        a = t[o],
                        l = a._getBeta();
                    s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), l = l.neg(!0)), n[2 * o] = a, n[2 * o + 1] = l, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                }
                for (var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0; c < 2 * o; c++) n[c] = null, i[c] = null;
                return u
            }, k(I, _.BasePoint), P.prototype.point = function(t, e, r) {
                return new I(this, t, e, r)
            }, P.prototype.pointFromJSON = function(t, e) {
                return I.fromJSON(this, t, e)
            }, I.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            n = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(n)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(n)
                            }
                        }
                    }
                    return e
                }
            }, I.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, I.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var n = t.point(e[0], e[1], r);
                if (!e[2]) return n;

                function i(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return n.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [n].concat(o.doubles.points.map(i))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [n].concat(o.naf.points.map(i))
                    }
                }, n
            }, I.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, I.prototype.isInfinity = function() {
                return this.inf
            }, I.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    n = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, I.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    n = t.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
                    o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    s = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, I.prototype.getX = function() {
                return this.x.fromRed()
            }, I.prototype.getY = function() {
                return this.y.fromRed()
            }, I.prototype.mul = function(t) {
                return (t = new(f())(t, 16), this.isInfinity()) ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, I.prototype.mulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, I.prototype.jmulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, I.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, I.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        n = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(n)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(n)
                        }
                    }
                }
                return e
            }, I.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, k(S, _.BasePoint), P.prototype.jpoint = function(t, e, r) {
                return new S(this, t, e, r)
            }, S.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    n = this.y.redMul(e).redMul(t);
                return this.curve.point(r, n)
            }, S.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, S.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(e),
                    i = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    s = t.y.redMul(r.redMul(this.z)),
                    a = n.redSub(i),
                    l = o.redSub(s);
                if (0 === a.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = a.redSqr(),
                    c = u.redMul(a),
                    h = n.redMul(u),
                    f = l.redSqr().redIAdd(c).redISub(h).redISub(h),
                    d = l.redMul(h.redISub(f)).redISub(o.redMul(c)),
                    p = this.z.redMul(t.z).redMul(a);
                return this.curve.jpoint(f, d, p)
            }, S.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    n = t.x.redMul(e),
                    i = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    s = r.redSub(n),
                    a = i.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var l = s.redSqr(),
                    u = l.redMul(s),
                    c = r.redMul(l),
                    h = a.redSqr().redIAdd(u).redISub(c).redISub(c),
                    f = a.redMul(c.redISub(h)).redISub(i.redMul(u)),
                    d = this.z.redMul(s);
                return this.curve.jpoint(h, f, d)
            }, S.prototype.dblp = function(t) {
                if (0 === t || this.isInfinity()) return this;
                if (!t) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var e, r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    a = this.z,
                    l = a.redSqr().redSqr(),
                    u = s.redAdd(s);
                for (e = 0; e < t; e++) {
                    var c = o.redSqr(),
                        h = u.redSqr(),
                        f = h.redSqr(),
                        d = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(l)),
                        p = o.redMul(h),
                        g = d.redSqr().redISub(p.redAdd(p)),
                        m = p.redISub(g),
                        y = d.redMul(m);
                    y = y.redIAdd(y).redISub(f);
                    var v = u.redMul(a);
                    e + 1 < t && (l = l.redMul(f)), o = g, a = v, u = y
                }
                return this.curve.jpoint(o, u.redMul(i), a)
            }, S.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, S.prototype._zeroDbl = function() {
                if (this.zOne) {
                    var t, e, r, n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n),
                        l = a.redSqr().redISub(s).redISub(s),
                        u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), t = l, e = a.redMul(s.redISub(l)).redISub(u), r = this.y.redAdd(this.y)
                } else {
                    var c = this.x.redSqr(),
                        h = this.y.redSqr(),
                        f = h.redSqr(),
                        d = this.x.redAdd(h).redSqr().redISub(c).redISub(f);
                    d = d.redIAdd(d);
                    var p = c.redAdd(c).redIAdd(c),
                        g = p.redSqr(),
                        m = f.redIAdd(f);
                    m = (m = m.redIAdd(m)).redIAdd(m), t = g.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, S.prototype._threeDbl = function() {
                if (this.zOne) {
                    var t, e, r, n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        l = a.redSqr().redISub(s).redISub(s);
                    t = l;
                    var u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), e = a.redMul(s.redISub(l)).redISub(u), r = this.y.redAdd(this.y)
                } else {
                    var c = this.z.redSqr(),
                        h = this.y.redSqr(),
                        f = this.x.redMul(h),
                        d = this.x.redSub(c).redMul(this.x.redAdd(c));
                    d = d.redAdd(d).redIAdd(d);
                    var p = f.redIAdd(f),
                        g = (p = p.redIAdd(p)).redAdd(p);
                    t = d.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
                    var m = h.redSqr();
                    m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), e = d.redMul(p.redISub(t)).redISub(m)
                }
                return this.curve.jpoint(t, e, r)
            }, S.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    o = e.redSqr(),
                    s = r.redSqr(),
                    a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                    l = e.redAdd(e),
                    u = (l = l.redIAdd(l)).redMul(s),
                    c = a.redSqr().redISub(u.redAdd(u)),
                    h = u.redISub(c),
                    f = s.redSqr();
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var d = a.redMul(h).redISub(f),
                    p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(c, d, p)
            }, S.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = e.redSqr(),
                    i = t.redAdd(t).redIAdd(t),
                    o = i.redSqr(),
                    s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                    a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    l = n.redIAdd(n);
                l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(l),
                    c = e.redMul(u);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var h = this.x.redMul(a).redISub(c);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var f = this.y.redMul(u.redMul(l.redISub(u)).redISub(s.redMul(a)));
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                return this.curve.jpoint(h, f, d)
            }, S.prototype.mul = function(t, e) {
                return t = new(f())(t, e), this.curve._wnafMul(this, t)
            }, S.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var n = e.redMul(this.z),
                    i = r.redMul(t.z);
                return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
            }, S.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = t.clone(), i = this.curve.redN.redMul(e);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, S.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, S.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var R = g(function(t, e) {
                    e.base = _, e.short = P, e.mont = null, e.edwards = null
                }),
                C = g(function(t, e) {
                    var r, n = A.assert;

                    function i(t) {
                        "short" === t.type ? this.curve = new R.short(t) : "edwards" === t.type ? this.curve = new R.edwards(t) : this.curve = new R.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function o(t, r) {
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var n = new i(r);
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n
                                }), n
                            }
                        })
                    }
                    e.PresetCurve = i, o("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: p().sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), o("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: p().sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), o("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: p().sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), o("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: p().sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), o("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: p().sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), o("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: p().sha256,
                        gRed: !1,
                        g: ["9"]
                    }), o("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: p().sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch (t) {
                        r = void 0
                    }
                    o("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: p().sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                });

            function T(t) {
                if (!(this instanceof T)) return new T(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = v.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = v.toArray(t.nonce, t.nonceEnc || "hex"),
                    n = v.toArray(t.pers, t.persEnc || "hex");
                m(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
            }
            T.prototype._init = function(t, e, r) {
                var n = t.concat(e).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, T.prototype._hmac = function() {
                return new(p()).hmac(this.hash, this.K)
            }, T.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, T.prototype.reseed = function(t, e, r, n) {
                "string" != typeof e && (n = r, r = e, e = null), t = v.toArray(t, e), r = v.toArray(r, n), m(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, T.prototype.generate = function(t, e, r, n) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof e && (n = r, r = e, e = null), r && (r = v.toArray(r, n || "hex"), this._update(r));
                for (var i = []; i.length < t;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                var o = i.slice(0, t);
                return this._update(r), this._reseed++, v.encode(o, e)
            };
            var O = A.assert;

            function B(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            B.fromPublic = function(t, e, r) {
                return e instanceof B ? e : new B(t, {
                    pub: e,
                    pubEnc: r
                })
            }, B.fromPrivate = function(t, e, r) {
                return e instanceof B ? e : new B(t, {
                    priv: e,
                    privEnc: r
                })
            }, B.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, B.prototype.getPublic = function(t, e) {
                return ("string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e) ? this.pub.encode(e, t) : this.pub
            }, B.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, B.prototype._importPrivate = function(t, e) {
                this.priv = new(f())(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, B.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? O(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && O(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, B.prototype.derive = function(t) {
                return t.validate() || O(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, B.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, B.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, B.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var D = A.assert;

            function F(t, e) {
                if (t instanceof F) return t;
                this._importDER(t, e) || (D(t.r && t.s, "Signature without r or s"), this.r = new(f())(t.r, 16), this.s = new(f())(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function z() {
                this.place = 0
            }

            function L(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, s = e.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                return !(i <= 127) && (e.place = s, i)
            }

            function U(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function M(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
            F.prototype._importDER = function(t, e) {
                t = A.toArray(t, e);
                var r = new z;
                if (48 !== t[r.place++]) return !1;
                var n = L(t, r);
                if (!1 === n || n + r.place !== t.length || 2 !== t[r.place++]) return !1;
                var i = L(t, r);
                if (!1 === i) return !1;
                var o = t.slice(r.place, i + r.place);
                if (r.place += i, 2 !== t[r.place++]) return !1;
                var s = L(t, r);
                if (!1 === s || t.length !== s + r.place) return !1;
                var a = t.slice(r.place, s + r.place);
                if (0 === o[0]) {
                    if (!(128 & o[1])) return !1;
                    o = o.slice(1)
                }
                if (0 === a[0]) {
                    if (!(128 & a[1])) return !1;
                    a = a.slice(1)
                }
                return this.r = new(f())(o), this.s = new(f())(a), this.recoveryParam = null, !0
            }, F.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = U(e), r = U(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var n = [2];
                M(n, e.length), (n = n.concat(e)).push(2), M(n, r.length);
                var i = n.concat(r),
                    o = [48];
                return M(o, i.length), o = o.concat(i), A.encode(o, t)
            };
            var G = function() {
                    throw Error("unsupported")
                },
                Y = A.assert;

            function j(t) {
                if (!(this instanceof j)) return new j(t);
                "string" == typeof t && (Y(Object.prototype.hasOwnProperty.call(C, t), "Unknown curve " + t), t = C[t]), t instanceof C.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            j.prototype.keyPair = function(t) {
                return new B(this, t)
            }, j.prototype.keyFromPrivate = function(t, e) {
                return B.fromPrivate(this, t, e)
            }, j.prototype.keyFromPublic = function(t, e) {
                return B.fromPublic(this, t, e)
            }, j.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new T({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || G(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), n = this.n.sub(new(f())(2));;) {
                    var i = new(f())(e.generate(r));
                    if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i)
                }
            }, j.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return (r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0) ? t.sub(this.n) : t
            }, j.prototype.sign = function(t, e, r, n) {
                "object" == typeof r && (n = r, r = null), n || (n = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new(f())(t, 16));
                for (var i = this.n.byteLength(), o = e.getPrivate().toArray("be", i), s = t.toArray("be", i), a = new T({
                        hash: this.hash,
                        entropy: o,
                        nonce: s,
                        pers: n.pers,
                        persEnc: n.persEnc || "utf8"
                    }), l = this.n.sub(new(f())(1)), u = 0;; u++) {
                    var c = n.k ? n.k(u) : new(f())(a.generate(this.n.byteLength()));
                    if (!(0 >= (c = this._truncateToN(c, !0)).cmpn(1) || c.cmp(l) >= 0)) {
                        var h = this.g.mul(c);
                        if (!h.isInfinity()) {
                            var d = h.getX(),
                                p = d.umod(this.n);
                            if (0 !== p.cmpn(0)) {
                                var g = c.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                                    var m = (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                    return n.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), m ^= 1), new F({
                                        r: p,
                                        s: g,
                                        recoveryParam: m
                                    })
                                }
                            }
                        }
                    }
                }
            }, j.prototype.verify = function(t, e, r, n) {
                t = this._truncateToN(new(f())(t, 16)), r = this.keyFromPublic(r, n);
                var i, o = (e = new F(e, "hex")).r,
                    s = e.s;
                if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
                var a = s.invm(this.n),
                    l = a.mul(t).umod(this.n),
                    u = a.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(i = this.g.jmulAdd(l, r.getPublic(), u)).isInfinity() && i.eqXToP(o) : !(i = this.g.mulAdd(l, r.getPublic(), u)).isInfinity() && 0 === i.getX().umod(this.n).cmp(o)
            }, j.prototype.recoverPubKey = function(t, e, r, n) {
                Y((3 & r) === r, "The recovery param is more than two bits"), e = new F(e, n);
                var i = this.n,
                    o = new(f())(t),
                    s = e.r,
                    a = e.s,
                    l = 1 & r,
                    u = r >> 1;
                if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw Error("Unable to find sencond key candinate");
                s = u ? this.curve.pointFromX(s.add(this.curve.n), l) : this.curve.pointFromX(s, l);
                var c = e.r.invm(i),
                    h = i.sub(o).mul(c).umod(i),
                    d = a.mul(c).umod(i);
                return this.g.mulAdd(h, s, d)
            }, j.prototype.getKeyRecoveryParam = function(t, e, r, n) {
                if (null !== (e = new F(e, n)).recoveryParam) return e.recoveryParam;
                for (var i, o = 0; o < 4; o++) {
                    try {
                        i = this.recoverPubKey(t, e, o)
                    } catch (t) {
                        continue
                    }
                    if (i.eq(r)) return o
                }
                throw Error("Unable to find valid recovery factor")
            };
            var q = g(function(t, e) {
                    e.version = "6.5.4", e.utils = A, e.rand = function() {
                        throw Error("unsupported")
                    }, e.curve = R, e.curves = C, e.ec = j, e.eddsa = null
                }).ec,
                H = r(6881),
                J = r(1581);
            let K = new J.Yd("signing-key/5.7.0"),
                Q = null;

            function V() {
                return Q || (Q = new q("secp256k1")), Q
            }
            class W {
                constructor(t) {
                    (0, H.zG)(this, "curve", "secp256k1"), (0, H.zG)(this, "privateKey", (0, a.Dv)(t)), 32 !== (0, a.E1)(this.privateKey) && K.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    let e = V().keyFromPrivate((0, a.lE)(this.privateKey));
                    (0, H.zG)(this, "publicKey", "0x" + e.getPublic(!1, "hex")), (0, H.zG)(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), (0, H.zG)(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    let e = V().keyFromPublic((0, a.lE)(this.publicKey)),
                        r = V().keyFromPublic((0, a.lE)(t));
                    return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    let e = V().keyFromPrivate((0, a.lE)(this.privateKey)),
                        r = (0, a.lE)(t);
                    32 !== r.length && K.throwArgumentError("bad digest length", "digest", t);
                    let n = e.sign(r, {
                        canonical: !0
                    });
                    return (0, a.N)({
                        recoveryParam: n.recoveryParam,
                        r: (0, a.$m)("0x" + n.r.toString(16), 32),
                        s: (0, a.$m)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    let e = V().keyFromPrivate((0, a.lE)(this.privateKey)),
                        r = V().keyFromPublic((0, a.lE)(X(t)));
                    return (0, a.$m)("0x" + e.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !!(t && t._isSigningKey)
                }
            }

            function X(t, e) {
                let r = (0, a.lE)(t);
                if (32 === r.length) {
                    let t = new W(r);
                    return e ? "0x" + V().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === r.length ? e ? (0, a.Dv)(r) : "0x" + V().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + V().keyFromPublic(r).getPublic(!0, "hex") : (0, a.Dv)(r) : K.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            let Z = new J.Yd("transactions/5.7.0");

            function $(t) {
                return "0x" === t ? null : (0, o.Kn)(t)
            }

            function tt(t) {
                return "0x" === t ? l._Y : s.O$.from(t)
            }

            function te(t, e) {
                return function(t) {
                    let e = X(t);
                    return (0, o.Kn)((0, a.p3)((0, u.w)((0, a.p3)(e, 1)), 12))
                }(function(t, e) {
                    let r = (0, a.N)(e),
                        n = {
                            r: (0, a.lE)(r.r),
                            s: (0, a.lE)(r.s)
                        };
                    return "0x" + V().recoverPubKey((0, a.lE)(t), n, r.recoveryParam).encode("hex", !1)
                }((0, a.lE)(t), e))
            }

            function tr(t, e) {
                let r = (0, a.G1)(s.O$.from(t).toHexString());
                return r.length > 32 && Z.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r
            }

            function tn(t, e) {
                return {
                    address: (0, o.Kn)(t),
                    storageKeys: (e || []).map((e, r) => (32 !== (0, a.E1)(e) && Z.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e), e.toLowerCase()))
                }
            }

            function ti(t) {
                if (Array.isArray(t)) return t.map((t, e) => Array.isArray(t) ? (t.length > 2 && Z.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t), tn(t[0], t[1])) : tn(t.address, t.storageKeys));
                let e = Object.keys(t).map(e => {
                    let r = t[e].reduce((t, e) => (t[e] = !0, t), {});
                    return tn(e, Object.keys(r).sort())
                });
                return e.sort((t, e) => t.address.localeCompare(e.address)), e
            }

            function to(t) {
                return ti(t).map(t => [t.address, t.storageKeys])
            }

            function ts(t, e) {
                if (null != t.gasPrice) {
                    let e = s.O$.from(t.gasPrice),
                        r = s.O$.from(t.maxFeePerGas || 0);
                    e.eq(r) || Z.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: e,
                        maxFeePerGas: r
                    })
                }
                let r = [tr(t.chainId || 0, "chainId"), tr(t.nonce || 0, "nonce"), tr(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), tr(t.maxFeePerGas || 0, "maxFeePerGas"), tr(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, o.Kn)(t.to) : "0x", tr(t.value || 0, "value"), t.data || "0x", to(t.accessList || [])];
                if (e) {
                    let t = (0, a.N)(e);
                    r.push(tr(t.recoveryParam, "recoveryParam")), r.push((0, a.G1)(t.r)), r.push((0, a.G1)(t.s))
                }
                return (0, a.xs)(["0x02", c.c(r)])
            }

            function ta(t, e) {
                let r = [tr(t.chainId || 0, "chainId"), tr(t.nonce || 0, "nonce"), tr(t.gasPrice || 0, "gasPrice"), tr(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, o.Kn)(t.to) : "0x", tr(t.value || 0, "value"), t.data || "0x", to(t.accessList || [])];
                if (e) {
                    let t = (0, a.N)(e);
                    r.push(tr(t.recoveryParam, "recoveryParam")), r.push((0, a.G1)(t.r)), r.push((0, a.G1)(t.s))
                }
                return (0, a.xs)(["0x01", c.c(r)])
            }

            function tl(t, e, r) {
                try {
                    let r = tt(e[0]).toNumber();
                    if (0 !== r && 1 !== r) throw Error("bad recid");
                    t.v = r
                } catch (t) {
                    Z.throwArgumentError("invalid v for transaction type: 1", "v", e[0])
                }
                t.r = (0, a.$m)(e[1], 32), t.s = (0, a.$m)(e[2], 32);
                try {
                    let e = (0, u.w)(r(t));
                    t.from = te(e, {
                        r: t.r,
                        s: t.s,
                        recoveryParam: t.v
                    })
                } catch (t) {}
            }

            function tu(t) {
                let e = (0, a.lE)(t);
                if (e[0] > 127) return function(t) {
                    let e = c.J(t);
                    9 !== e.length && 6 !== e.length && Z.throwArgumentError("invalid raw transaction", "rawTransaction", t);
                    let r = {
                        nonce: tt(e[0]).toNumber(),
                        gasPrice: tt(e[1]),
                        gasLimit: tt(e[2]),
                        to: $(e[3]),
                        value: tt(e[4]),
                        data: e[5],
                        chainId: 0
                    };
                    if (6 === e.length) return r;
                    try {
                        r.v = s.O$.from(e[6]).toNumber()
                    } catch (t) {
                        return r
                    }
                    if (r.r = (0, a.$m)(e[7], 32), r.s = (0, a.$m)(e[8], 32), s.O$.from(r.r).isZero() && s.O$.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27,
                            i = e.slice(0, 6);
                        0 !== r.chainId && (i.push((0, a.Dv)(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
                        let o = (0, u.w)(c.c(i));
                        try {
                            r.from = te(o, {
                                r: (0, a.Dv)(r.r),
                                s: (0, a.Dv)(r.s),
                                recoveryParam: n
                            })
                        } catch (t) {}
                        r.hash = (0, u.w)(t)
                    }
                    return r.type = null, r
                }(e);
                switch (e[0]) {
                    case 1:
                        return function(t) {
                            let e = c.J(t.slice(1));
                            8 !== e.length && 11 !== e.length && Z.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, a.Dv)(t));
                            let r = {
                                type: 1,
                                chainId: tt(e[0]).toNumber(),
                                nonce: tt(e[1]).toNumber(),
                                gasPrice: tt(e[2]),
                                gasLimit: tt(e[3]),
                                to: $(e[4]),
                                value: tt(e[5]),
                                data: e[6],
                                accessList: ti(e[7])
                            };
                            return 8 === e.length || (r.hash = (0, u.w)(t), tl(r, e.slice(8), ta)), r
                        }(e);
                    case 2:
                        return function(t) {
                            let e = c.J(t.slice(1));
                            9 !== e.length && 12 !== e.length && Z.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, a.Dv)(t));
                            let r = tt(e[2]),
                                n = tt(e[3]),
                                i = {
                                    type: 2,
                                    chainId: tt(e[0]).toNumber(),
                                    nonce: tt(e[1]).toNumber(),
                                    maxPriorityFeePerGas: r,
                                    maxFeePerGas: n,
                                    gasPrice: null,
                                    gasLimit: tt(e[4]),
                                    to: $(e[5]),
                                    value: tt(e[6]),
                                    data: e[7],
                                    accessList: ti(e[8])
                                };
                            return 9 === e.length || (i.hash = (0, u.w)(t), tl(i, e.slice(9), ts)), i
                        }(e)
                }
                return Z.throwError(`unsupported transaction type: ${e[0]}`, J.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: e[0]
                })
            }(n = i || (i = {}))[n.legacy = 0] = "legacy", n[n.eip2930 = 1] = "eip2930", n[n.eip1559 = 2] = "eip1559"
        },
        35553: function(t, e, r) {
            "use strict";
            r.d(e, {
                dF: function() {
                    return _
                },
                bM: function() {
                    return E
                },
                fi: function() {
                    return N
                }
            });
            var n = r(16441),
                i = r(1581),
                o = r(48794),
                s = r(2593);
            let a = new i.Yd(o.i),
                l = {},
                u = s.O$.from(0),
                c = s.O$.from(-1);

            function h(t, e, r, n) {
                let o = {
                    fault: e,
                    operation: r
                };
                return void 0 !== n && (o.value = n), a.throwError(t, i.Yd.errors.NUMERIC_FAULT, o)
            }
            let f = "0";
            for (; f.length < 256;) f += f;

            function d(t) {
                if ("number" != typeof t) try {
                    t = s.O$.from(t).toNumber()
                } catch (t) {}
                return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + f.substring(0, t) : a.throwArgumentError("invalid decimal size", "decimals", t)
            }

            function p(t, e) {
                null == e && (e = 0);
                let r = d(e),
                    n = (t = s.O$.from(t)).lt(u);
                n && (t = t.mul(c));
                let i = t.mod(r).toString();
                for (; i.length < r.length - 1;) i = "0" + i;
                i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                let o = t.div(r).toString();
                return t = 1 === r.length ? o : o + "." + i, n && (t = "-" + t), t
            }

            function g(t, e) {
                null == e && (e = 0);
                let r = d(e);
                "string" == typeof t && t.match(/^-?[0-9.]+$/) || a.throwArgumentError("invalid decimal value", "value", t);
                let n = "-" === t.substring(0, 1);
                n && (t = t.substring(1)), "." === t && a.throwArgumentError("missing value", "value", t);
                let i = t.split(".");
                i.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
                let o = i[0],
                    l = i[1];
                for (o || (o = "0"), l || (l = "0");
                    "0" === l[l.length - 1];) l = l.substring(0, l.length - 1);
                for (l.length > r.length - 1 && h("fractional component exceeds decimals", "underflow", "parseFixed"), "" === l && (l = "0"); l.length < r.length - 1;) l += "0";
                let u = s.O$.from(o),
                    f = s.O$.from(l),
                    p = u.mul(r).add(f);
                return n && (p = p.mul(c)), p
            }
            class m {
                constructor(t, e, r, n) {
                    t !== l && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = e, this.width = r, this.decimals = n, this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = d(n), Object.freeze(this)
                }
                static from(t) {
                    if (t instanceof m) return t;
                    "number" == typeof t && (t = `fixed128x${t}`);
                    let e = !0,
                        r = 128,
                        n = 18;
                    if ("string" == typeof t) {
                        if ("fixed" === t);
                        else if ("ufixed" === t) e = !1;
                        else {
                            let i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                            i || a.throwArgumentError("invalid fixed format", "format", t), e = "u" !== i[1], r = parseInt(i[2]), n = parseInt(i[3])
                        }
                    } else if (t) {
                        let i = (e, r, n) => null == t[e] ? n : (typeof t[e] !== r && a.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]), t[e]);
                        e = i("signed", "boolean", e), r = i("width", "number", r), n = i("decimals", "number", n)
                    }
                    return r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new m(l, e, r, n)
                }
            }
            class y {
                constructor(t, e, r, n) {
                    t !== l && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = n, this._hex = e, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(t) {
                    this.format.name !== t.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
                }
                addUnsafe(t) {
                    this._checkFormat(t);
                    let e = g(this._value, this.format.decimals),
                        r = g(t._value, t.format.decimals);
                    return y.fromValue(e.add(r), this.format.decimals, this.format)
                }
                subUnsafe(t) {
                    this._checkFormat(t);
                    let e = g(this._value, this.format.decimals),
                        r = g(t._value, t.format.decimals);
                    return y.fromValue(e.sub(r), this.format.decimals, this.format)
                }
                mulUnsafe(t) {
                    this._checkFormat(t);
                    let e = g(this._value, this.format.decimals),
                        r = g(t._value, t.format.decimals);
                    return y.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(t) {
                    this._checkFormat(t);
                    let e = g(this._value, this.format.decimals),
                        r = g(t._value, t.format.decimals);
                    return y.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
                }
                floor() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = y.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return this.isNegative() && r && (e = e.subUnsafe(v.toFormat(e.format))), e
                }
                ceiling() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = y.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return !this.isNegative() && r && (e = e.addUnsafe(v.toFormat(e.format))), e
                }
                round(t) {
                    null == t && (t = 0);
                    let e = this.toString().split(".");
                    if (1 === e.length && e.push("0"), (t < 0 || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
                    let r = y.from("1" + f.substring(0, t), this.format),
                        n = A.toFormat(this.format);
                    return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value
                }
                isNegative() {
                    return "-" === this._value[0]
                }
                toString() {
                    return this._value
                }
                toHexString(t) {
                    if (null == t) return this._hex;
                    t % 8 && a.throwArgumentError("invalid byte width", "width", t);
                    let e = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
                    return (0, n.$m)(e, t / 8)
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return y.fromString(this._value, t)
                }
                static fromValue(t, e, r) {
                    return null != r || null == e || (0, s.Zm)(e) || (r = e, e = null), null == e && (e = 0), null == r && (r = "fixed"), y.fromString(p(t, e), m.from(r))
                }
                static fromString(t, e) {
                    null == e && (e = "fixed");
                    let r = m.from(e),
                        i = g(t, r.decimals);
                    !r.signed && i.lt(u) && h("unsigned value cannot be negative", "overflow", "value", t);
                    let o = null;
                    return r.signed ? o = i.toTwos(r.width).toHexString() : (o = i.toHexString(), o = (0, n.$m)(o, r.width / 8)), new y(l, o, p(i, r.decimals), r)
                }
                static fromBytes(t, e) {
                    null == e && (e = "fixed");
                    let r = m.from(e);
                    if ((0, n.lE)(t).length > r.width / 8) throw Error("overflow");
                    let i = s.O$.from(t);
                    return r.signed && (i = i.fromTwos(r.width)), new y(l, i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(), p(i, r.decimals), r)
                }
                static from(t, e) {
                    if ("string" == typeof t) return y.fromString(t, e);
                    if ((0, n._t)(t)) return y.fromBytes(t, e);
                    try {
                        return y.fromValue(t, 0, e)
                    } catch (t) {
                        if (t.code !== i.Yd.errors.INVALID_ARGUMENT) throw t
                    }
                    return a.throwArgumentError("invalid FixedNumber value", "value", t)
                }
                static isFixedNumber(t) {
                    return !!(t && t._isFixedNumber)
                }
            }
            let v = y.from(1),
                A = y.from("0.5"),
                b = new i.Yd("units/5.7.0"),
                w = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

            function E(t, e) {
                if ("string" == typeof e) {
                    let t = w.indexOf(e); - 1 !== t && (e = 3 * t)
                }
                return p(t, null != e ? e : 18)
            }

            function _(t) {
                return E(t, 18)
            }

            function N(t) {
                return function(t, e) {
                    if ("string" != typeof t && b.throwArgumentError("value must be a string", "value", t), "string" == typeof e) {
                        let t = w.indexOf(e); - 1 !== t && (e = 3 * t)
                    }
                    return g(t, null != e ? e : 18)
                }(t, 18)
            }
        },
        92882: function(t) {
            "use strict";
            for (var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < e.length; n++) {
                var i = e.charAt(n);
                if (void 0 !== r[i]) throw TypeError(i + " is ambiguous");
                r[i] = n
            }

            function o(t) {
                var e = t >> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
            }

            function s(t) {
                for (var e = 1, r = 0; r < t.length; ++r) {
                    var n = t.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
                    e = o(e) ^ n >> 5
                }
                for (r = 0, e = o(e); r < t.length; ++r) {
                    var i = t.charCodeAt(r);
                    e = o(e) ^ 31 & i
                }
                return e
            }

            function a(t, e) {
                if (e = e || 90, t.length < 8) return t + " too short";
                if (t.length > e) return "Exceeds length limit";
                var n = t.toLowerCase(),
                    i = t.toUpperCase();
                if (t !== n && t !== i) return "Mixed-case string " + t;
                var a = (t = n).lastIndexOf("1");
                if (-1 === a) return "No separator character for " + t;
                if (0 === a) return "Missing prefix for " + t;
                var l = t.slice(0, a),
                    u = t.slice(a + 1);
                if (u.length < 6) return "Data too short";
                var c = s(l);
                if ("string" == typeof c) return c;
                for (var h = [], f = 0; f < u.length; ++f) {
                    var d = u.charAt(f),
                        p = r[d];
                    if (void 0 === p) return "Unknown character " + d;
                    c = o(c) ^ p, f + 6 >= u.length || h.push(p)
                }
                return 1 !== c ? "Invalid checksum for " + t : {
                    prefix: l,
                    words: h
                }
            }

            function l(t, e, r, n) {
                for (var i = 0, o = 0, s = (1 << r) - 1, a = [], l = 0; l < t.length; ++l)
                    for (i = i << e | t[l], o += e; o >= r;) a.push(i >> (o -= r) & s);
                if (n) o > 0 && a.push(i << r - o & s);
                else {
                    if (o >= e) return "Excess padding";
                    if (i << r - o & s) return "Non-zero padding"
                }
                return a
            }
            t.exports = {
                decodeUnsafe: function() {
                    var t = a.apply(null, arguments);
                    if ("object" == typeof t) return t
                },
                decode: function(t) {
                    var e = a.apply(null, arguments);
                    if ("object" == typeof e) return e;
                    throw Error(e)
                },
                encode: function(t, r, n) {
                    if (n = n || 90, t.length + 7 + r.length > n) throw TypeError("Exceeds length limit");
                    var i = s(t = t.toLowerCase());
                    if ("string" == typeof i) throw Error(i);
                    for (var a = t + "1", l = 0; l < r.length; ++l) {
                        var u = r[l];
                        if (u >> 5 != 0) throw Error("Non 5-bit word");
                        i = o(i) ^ u, a += e.charAt(u)
                    }
                    for (l = 0; l < 6; ++l) i = o(i);
                    for (i ^= 1, l = 0; l < 6; ++l) {
                        var c = i >> (5 - l) * 5 & 31;
                        a += e.charAt(c)
                    }
                    return a
                },
                toWordsUnsafe: function(t) {
                    var e = l(t, 8, 5, !0);
                    if (Array.isArray(e)) return e
                },
                toWords: function(t) {
                    var e = l(t, 8, 5, !0);
                    if (Array.isArray(e)) return e;
                    throw Error(e)
                },
                fromWordsUnsafe: function(t) {
                    var e = l(t, 5, 8, !1);
                    if (Array.isArray(e)) return e
                },
                fromWords: function(t) {
                    var e = l(t, 5, 8, !1);
                    if (Array.isArray(e)) return e;
                    throw Error(e)
                }
            }
        },
        33715: function(t, e, r) {
            e.utils = r(26436), e.common = r(95772), e.sha = r(89041), e.ripemd = r(12949), e.hmac = r(52344), e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160
        },
        95772: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(79746);

            function o() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            e.BlockHash = o, o.prototype.update = function(t, e) {
                if (t = n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = n.join32(t, 0, t.length - r, this.endian);
                    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
                }
                return this
            }, o.prototype.digest = function(t) {
                return this.update(this._pad()), i(null === this.pending), this._digest(t)
            }, o.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    n = Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t
                } else
                    for (o = 8, n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0; o < this.padLength; o++) n[i++] = 0;
                return n
            }
        },
        52344: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(79746);

            function o(t, e, r) {
                if (!(this instanceof o)) return new o(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e, r))
            }
            t.exports = o, o.prototype._init = function(t) {
                t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (e = 0, this.inner = new this.Hash().update(t); e < t.length; e++) t[e] ^= 106;
                this.outer = new this.Hash().update(t)
            }, o.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, o.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }
        },
        12949: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(95772),
                o = n.rotl32,
                s = n.sum32,
                a = n.sum32_3,
                l = n.sum32_4,
                u = i.BlockHash;

            function c() {
                if (!(this instanceof c)) return new c;
                u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function h(t, e, r, n) {
                return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
            }
            n.inherits(c, u), e.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function(t, e) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], u = this.h[3], c = this.h[4], m = r, y = n, v = i, A = u, b = c, w = 0; w < 80; w++) {
                    var E, _, N = s(o(l(r, h(w, n, i, u), t[f[w] + e], (E = w) <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838), p[w]), c);
                    r = c, c = u, u = o(i, 10), i = n, n = N, N = s(o(l(m, h(79 - w, y, v, A), t[d[w] + e], (_ = w) <= 15 ? 1352829926 : _ <= 31 ? 1548603684 : _ <= 47 ? 1836072691 : _ <= 63 ? 2053994217 : 0), g[w]), b), m = b, b = A, A = o(v, 10), v = y, y = N
                }
                N = a(this.h[1], i, A), this.h[1] = a(this.h[2], u, b), this.h[2] = a(this.h[3], c, m), this.h[3] = a(this.h[4], r, y), this.h[4] = a(this.h[0], n, v), this.h[0] = N
            }, c.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                d = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                p = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        89041: function(t, e, r) {
            "use strict";
            e.sha1 = r(84761), e.sha224 = r(10799), e.sha256 = r(89344), e.sha384 = r(80772), e.sha512 = r(45900)
        },
        84761: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(95772),
                o = r(37038),
                s = n.rotl32,
                a = n.sum32,
                l = n.sum32_5,
                u = o.ft_1,
                c = i.BlockHash,
                h = [1518500249, 1859775393, 2400959708, 3395469782];

            function f() {
                if (!(this instanceof f)) return new f;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            n.inherits(f, c), t.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                    o = this.h[1],
                    c = this.h[2],
                    f = this.h[3],
                    d = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var p = ~~(n / 20),
                        g = l(s(i, 5), u(p, o, c, f), d, r[n], h[p]);
                    d = f, f = c, c = s(o, 30), o = i, i = g
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], c), this.h[3] = a(this.h[3], f), this.h[4] = a(this.h[4], d)
            }, f.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        10799: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(89344);

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            n.inherits(o, i), t.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        },
        89344: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(95772),
                o = r(37038),
                s = r(79746),
                a = n.sum32,
                l = n.sum32_4,
                u = n.sum32_5,
                c = o.ch32,
                h = o.maj32,
                f = o.s0_256,
                d = o.s1_256,
                p = o.g0_256,
                g = o.g1_256,
                m = i.BlockHash,
                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function v() {
                if (!(this instanceof v)) return new v;
                m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = Array(64)
            }
            n.inherits(v, m), t.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = l(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                    o = this.h[1],
                    m = this.h[2],
                    y = this.h[3],
                    v = this.h[4],
                    A = this.h[5],
                    b = this.h[6],
                    w = this.h[7];
                for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var E = u(w, d(v), c(v, A, b), this.k[n], r[n]),
                        _ = a(f(i), h(i, o, m));
                    w = b, b = A, A = v, v = a(y, E), y = m, m = o, o = i, i = a(E, _)
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], m), this.h[3] = a(this.h[3], y), this.h[4] = a(this.h[4], v), this.h[5] = a(this.h[5], A), this.h[6] = a(this.h[6], b), this.h[7] = a(this.h[7], w)
            }, v.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        80772: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(45900);

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            n.inherits(o, i), t.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        },
        45900: function(t, e, r) {
            "use strict";
            var n = r(26436),
                i = r(95772),
                o = r(79746),
                s = n.rotr64_hi,
                a = n.rotr64_lo,
                l = n.shr64_hi,
                u = n.shr64_lo,
                c = n.sum64,
                h = n.sum64_hi,
                f = n.sum64_lo,
                d = n.sum64_4_hi,
                p = n.sum64_4_lo,
                g = n.sum64_5_hi,
                m = n.sum64_5_lo,
                y = i.BlockHash,
                v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function A() {
                if (!(this instanceof A)) return new A;
                y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = v, this.W = Array(160)
            }
            n.inherits(A, y), t.exports = A, A.blockSize = 1024, A.outSize = 512, A.hmacStrength = 192, A.padLength = 128, A.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
                for (; n < r.length; n += 2) {
                    var i = function(t, e) {
                            var r = s(t, e, 19) ^ s(e, t, 29) ^ l(t, e, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 4], r[n - 3]),
                        o = function(t, e) {
                            var r = a(t, e, 19) ^ a(e, t, 29) ^ u(t, e, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 4], r[n - 3]),
                        c = r[n - 14],
                        h = r[n - 13],
                        f = function(t, e) {
                            var r = s(t, e, 1) ^ s(t, e, 8) ^ l(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 30], r[n - 29]),
                        g = function(t, e) {
                            var r = a(t, e, 1) ^ a(t, e, 8) ^ u(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 30], r[n - 29]),
                        m = r[n - 32],
                        y = r[n - 31];
                    r[n] = d(i, o, c, h, f, g, m, y), r[n + 1] = p(i, o, c, h, f, g, m, y)
                }
            }, A.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W,
                    n = this.h[0],
                    i = this.h[1],
                    l = this.h[2],
                    u = this.h[3],
                    d = this.h[4],
                    p = this.h[5],
                    y = this.h[6],
                    v = this.h[7],
                    A = this.h[8],
                    b = this.h[9],
                    w = this.h[10],
                    E = this.h[11],
                    _ = this.h[12],
                    N = this.h[13],
                    k = this.h[14],
                    x = this.h[15];
                o(this.k.length === r.length);
                for (var P = 0; P < r.length; P += 2) {
                    var I = k,
                        S = x,
                        R = function(t, e) {
                            var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
                            return r < 0 && (r += 4294967296), r
                        }(A, b),
                        C = function(t, e) {
                            var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                            return r < 0 && (r += 4294967296), r
                        }(A, b),
                        T = function(t, e, r, n, i) {
                            var o = t & r ^ ~t & i;
                            return o < 0 && (o += 4294967296), o
                        }(A, 0, w, 0, _, N),
                        O = function(t, e, r, n, i, o) {
                            var s = e & n ^ ~e & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, b, 0, E, 0, N),
                        B = this.k[P],
                        D = this.k[P + 1],
                        F = r[P],
                        z = r[P + 1],
                        L = g(I, S, R, C, T, O, B, D, F, z),
                        U = m(I, S, R, C, T, O, B, D, F, z);
                    I = function(t, e) {
                        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                        return r < 0 && (r += 4294967296), r
                    }(n, i);
                    var M = h(I, S = function(t, e) {
                            var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(n, i), R = function(t, e, r, n, i) {
                            var o = t & r ^ t & i ^ r & i;
                            return o < 0 && (o += 4294967296), o
                        }(n, 0, l, 0, d, p), C = function(t, e, r, n, i, o) {
                            var s = e & n ^ e & o ^ n & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, i, 0, u, 0, p)),
                        G = f(I, S, R, C);
                    k = _, x = N, _ = w, N = E, w = A, E = b, A = h(y, v, L, U), b = f(v, v, L, U), y = d, v = p, d = l, p = u, l = n, u = i, n = h(L, U, M, G), i = f(L, U, M, G)
                }
                c(this.h, 0, n, i), c(this.h, 2, l, u), c(this.h, 4, d, p), c(this.h, 6, y, v), c(this.h, 8, A, b), c(this.h, 10, w, E), c(this.h, 12, _, N), c(this.h, 14, k, x)
            }, A.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        37038: function(t, e, r) {
            "use strict";
            var n = r(26436).rotr32;

            function i(t, e, r) {
                return t & e ^ t & r ^ e & r
            }
            e.ft_1 = function(t, e, r, n) {
                return 0 === t ? e & r ^ ~e & n : 1 === t || 3 === t ? e ^ r ^ n : 2 === t ? i(e, r, n) : void 0
            }, e.ch32 = function(t, e, r) {
                return t & e ^ ~t & r
            }, e.maj32 = i, e.p32 = function(t, e, r) {
                return t ^ e ^ r
            }, e.s0_256 = function(t) {
                return n(t, 2) ^ n(t, 13) ^ n(t, 22)
            }, e.s1_256 = function(t) {
                return n(t, 6) ^ n(t, 11) ^ n(t, 25)
            }, e.g0_256 = function(t) {
                return n(t, 7) ^ n(t, 18) ^ t >>> 3
            }, e.g1_256 = function(t) {
                return n(t, 17) ^ n(t, 19) ^ t >>> 10
            }
        },
        26436: function(t, e, r) {
            "use strict";
            var n = r(79746),
                i = r(35717);

            function o(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function s(t) {
                return 1 === t.length ? "0" + t : t
            }

            function a(t) {
                if (7 === t.length) return "0" + t;
                if (6 === t.length) return "00" + t;
                if (5 === t.length) return "000" + t;
                if (4 === t.length) return "0000" + t;
                if (3 === t.length) return "00000" + t;
                if (2 === t.length) return "000000" + t;
                if (1 === t.length) return "0000000" + t;
                else return t
            }
            e.inherits = i, e.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t) {
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                    } else
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var o, s, a = t.charCodeAt(i);
                            a < 128 ? r[n++] = a : (a < 2048 ? r[n++] = a >> 6 | 192 : ((o = t, s = i, (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length ? 1 : (64512 & o.charCodeAt(s + 1)) != 56320) ? r[n++] = a >> 12 | 224 : (a = 65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128), r[n++] = a >> 6 & 63 | 128), r[n++] = 63 & a | 128)
                        }
                } else
                    for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
                return r
            }, e.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += s(t[r].toString(16));
                return e
            }, e.htonl = o, e.toHex32 = function(t, e) {
                for (var r = "", n = 0; n < t.length; n++) {
                    var i = t[n];
                    "little" === e && (i = o(i)), r += a(i.toString(16))
                }
                return r
            }, e.zero2 = s, e.zero8 = a, e.join32 = function(t, e, r, i) {
                var o, s = r - e;
                n(s % 4 == 0);
                for (var a = Array(s / 4), l = 0, u = e; l < a.length; l++, u += 4) o = "big" === i ? t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3] : t[u + 3] << 24 | t[u + 2] << 16 | t[u + 1] << 8 | t[u], a[l] = o >>> 0;
                return a
            }, e.split32 = function(t, e) {
                for (var r = Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                    var o = t[n];
                    "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                }
                return r
            }, e.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, e.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, e.sum32 = function(t, e) {
                return t + e >>> 0
            }, e.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, e.sum32_4 = function(t, e, r, n) {
                return t + e + r + n >>> 0
            }, e.sum32_5 = function(t, e, r, n, i) {
                return t + e + r + n + i >>> 0
            }, e.sum64 = function(t, e, r, n) {
                var i = t[e],
                    o = n + t[e + 1] >>> 0;
                t[e] = (o < n ? 1 : 0) + r + i >>> 0, t[e + 1] = o
            }, e.sum64_hi = function(t, e, r, n) {
                return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, e.sum64_lo = function(t, e, r, n) {
                return e + n >>> 0
            }, e.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
                var l, u = e;
                return t + r + i + s + (0 + ((u = u + n >>> 0) < e ? 1 : 0) + ((u = u + o >>> 0) < o ? 1 : 0) + ((u = u + a >>> 0) < a ? 1 : 0)) >>> 0
            }, e.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
                return e + n + o + a >>> 0
            }, e.sum64_5_hi = function(t, e, r, n, i, o, s, a, l, u) {
                var c, h = e;
                return t + r + i + s + l + (0 + ((h = h + n >>> 0) < e ? 1 : 0) + ((h = h + o >>> 0) < o ? 1 : 0) + ((h = h + a >>> 0) < a ? 1 : 0) + ((h = h + u >>> 0) < u ? 1 : 0)) >>> 0
            }, e.sum64_5_lo = function(t, e, r, n, i, o, s, a, l, u) {
                return e + n + o + a + u >>> 0
            }, e.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, e.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, e.shr64_hi = function(t, e, r) {
                return t >>> r
            }, e.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }
        },
        91094: function(t, e, r) {
            var n, i = r(34155);
            ! function() {
                "use strict";
                var o = "input is invalid type",
                    s = "object" == typeof window,
                    a = s ? window : {};
                a.JS_SHA3_NO_WINDOW && (s = !1);
                var l = !s && "object" == typeof self;
                !a.JS_SHA3_NO_NODE_JS && "object" == typeof i && i.versions && i.versions.node ? a = r.g : l && (a = self);
                var u = !a.JS_SHA3_NO_COMMON_JS && t.exports,
                    c = r.amdO,
                    h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    f = "0123456789abcdef".split(""),
                    d = [4, 1024, 262144, 67108864],
                    p = [0, 8, 16, 24],
                    g = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    m = [224, 256, 384, 512],
                    y = [128, 256],
                    v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    A = {
                        128: 168,
                        256: 136
                    };
                (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), h && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var b = function(t, e, r) {
                        return function(n) {
                            return new D(t, e, t).update(n)[r]()
                        }
                    }, w = function(t, e, r) {
                        return function(n, i) {
                            return new D(t, e, i).update(n)[r]()
                        }
                    }, E = function(t, e, r) {
                        return function(e, n, i, o) {
                            return P["cshake" + t].update(e, n, i, o)[r]()
                        }
                    }, _ = function(t, e, r) {
                        return function(e, n, i, o) {
                            return P["kmac" + t].update(e, n, i, o)[r]()
                        }
                    }, N = function(t, e, r, n) {
                        for (var i = 0; i < v.length; ++i) {
                            var o = v[i];
                            t[o] = e(r, n, o)
                        }
                        return t
                    }, k = function(t, e) {
                        var r = b(t, e, "hex");
                        return r.create = function() {
                            return new D(t, e, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        }, N(r, b, t, e)
                    }, x = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: m,
                        createMethod: k
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: m,
                        createMethod: k
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: y,
                        createMethod: function(t, e) {
                            var r = w(t, e, "hex");
                            return r.create = function(r) {
                                return new D(t, e, r)
                            }, r.update = function(t, e) {
                                return r.create(e).update(t)
                            }, N(r, w, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: d,
                        bits: y,
                        createMethod: function(t, e) {
                            var r = A[t],
                                n = E(t, e, "hex");
                            return n.create = function(n, i, o) {
                                return i || o ? new D(t, e, n).bytepad([i, o], r) : P["shake" + t].create(n)
                            }, n.update = function(t, e, r, i) {
                                return n.create(e, r, i).update(t)
                            }, N(n, E, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: d,
                        bits: y,
                        createMethod: function(t, e) {
                            var r = A[t],
                                n = _(t, e, "hex");
                            return n.create = function(n, i, o) {
                                return new F(t, e, i).bytepad(["KMAC", o], r).bytepad([n], r)
                            }, n.update = function(t, e, r, i) {
                                return n.create(t, r, i).update(e)
                            }, N(n, _, t, e)
                        }
                    }], P = {}, I = [], S = 0; S < x.length; ++S)
                    for (var R = x[S], C = R.bits, T = 0; T < C.length; ++T) {
                        var O = R.name + "_" + C[T];
                        if (I.push(O), P[O] = R.createMethod(C[T], R.padding), "sha3" !== R.name) {
                            var B = R.name + C[T];
                            I.push(B), P[B] = P[O]
                        }
                    }

                function D(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function F(t, e, r) {
                    D.call(this, t, e, r)
                }
                D.prototype.update = function(t) {
                    if (this.finalized) throw Error("finalize already called");
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === t) throw Error(o);
                            if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t))) throw Error(o)
                        } else throw Error(o);
                        e = !0
                    }
                    for (var n, i, s = this.blocks, a = this.byteCount, l = t.length, u = this.blockCount, c = 0, f = this.s; c < l;) {
                        if (this.reset)
                            for (n = 1, this.reset = !1, s[0] = this.block; n < u + 1; ++n) s[n] = 0;
                        if (e)
                            for (n = this.start; c < l && n < a; ++c) s[n >> 2] |= t[c] << p[3 & n++];
                        else
                            for (n = this.start; c < l && n < a; ++c)(i = t.charCodeAt(c)) < 128 ? s[n >> 2] |= i << p[3 & n++] : (i < 2048 ? s[n >> 2] |= (192 | i >> 6) << p[3 & n++] : (i < 55296 || i >= 57344 ? s[n >> 2] |= (224 | i >> 12) << p[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++c)), s[n >> 2] |= (240 | i >> 18) << p[3 & n++], s[n >> 2] |= (128 | i >> 12 & 63) << p[3 & n++]), s[n >> 2] |= (128 | i >> 6 & 63) << p[3 & n++]), s[n >> 2] |= (128 | 63 & i) << p[3 & n++]);
                        if (this.lastByteIndex = n, n >= a) {
                            for (this.start = n - a, this.block = s[u], n = 0; n < u; ++n) f[n] ^= s[n];
                            z(f), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, D.prototype.encode = function(t, e) {
                    var r = 255 & t,
                        n = 1,
                        i = [r];
                    for (t >>= 8, r = 255 & t; r > 0;) i.unshift(r), t >>= 8, r = 255 & t, ++n;
                    return e ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, D.prototype.encodeString = function(t) {
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === t) throw Error(o);
                            if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t))) throw Error(o)
                        } else throw Error(o);
                        e = !0
                    }
                    var n = 0,
                        i = t.length;
                    if (e) n = i;
                    else
                        for (var s = 0; s < t.length; ++s) {
                            var a = t.charCodeAt(s);
                            a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++s)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(t), n
                }, D.prototype.bytepad = function(t, e) {
                    for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
                    var i = e - r % e,
                        o = [];
                    return o.length = i, this.update(o), this
                }, D.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (e = 1, t[0] = t[r]; e < r + 1; ++e) t[e] = 0;
                        for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                        z(n)
                    }
                }, D.prototype.toString = D.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) a += f[(t = r[o]) >> 4 & 15] + f[15 & t] + f[t >> 12 & 15] + f[t >> 8 & 15] + f[t >> 20 & 15] + f[t >> 16 & 15] + f[t >> 28 & 15] + f[t >> 24 & 15];
                        s % e == 0 && (z(r), o = 0)
                    }
                    return i && (a += f[(t = r[o]) >> 4 & 15] + f[15 & t], i > 1 && (a += f[t >> 12 & 15] + f[t >> 8 & 15]), i > 2 && (a += f[t >> 20 & 15] + f[t >> 16 & 15])), a
                }, D.prototype.arrayBuffer = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = this.outputBits >> 3, l = new Uint32Array(t = new ArrayBuffer(i ? n + 1 << 2 : a)); s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) l[s] = r[o];
                        s % e == 0 && z(r)
                    }
                    return i && (l[o] = r[o], t = t.slice(0, a)), t
                }, D.prototype.buffer = D.prototype.arrayBuffer, D.prototype.digest = D.prototype.array = function() {
                    this.finalize();
                    for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, l = []; a < i;) {
                        for (s = 0; s < r && a < i; ++s, ++a) t = a << 2, e = n[s], l[t] = 255 & e, l[t + 1] = e >> 8 & 255, l[t + 2] = e >> 16 & 255, l[t + 3] = e >> 24 & 255;
                        a % r == 0 && z(n)
                    }
                    return o && (t = a << 2, e = n[s], l[t] = 255 & e, o > 1 && (l[t + 1] = e >> 8 & 255), o > 2 && (l[t + 2] = e >> 16 & 255)), l
                }, F.prototype = new D, F.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), D.prototype.finalize.call(this)
                };
                var z = function(t) {
                    var e, r, n, i, o, s, a, l, u, c, h, f, d, p, m, y, v, A, b, w, E, _, N, k, x, P, I, S, R, C, T, O, B, D, F, z, L, U, M, G, Y, j, q, H, J, K, Q, V, W, X, Z, $, tt, te, tr, tn, ti, to, ts, ta, tl, tu, tc;
                    for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], l = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = f ^ (s << 1 | a >>> 31), r = d ^ (a << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (l << 1 | u >>> 31), r = o ^ (u << 1 | l >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (c << 1 | h >>> 31), r = a ^ (h << 1 | c >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = l ^ (f << 1 | d >>> 31), r = u ^ (d << 1 | f >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = c ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, p = t[0], m = t[1], K = t[11] << 4 | t[10] >>> 28, Q = t[10] << 4 | t[11] >>> 28, S = t[20] << 3 | t[21] >>> 29, R = t[21] << 3 | t[20] >>> 29, ta = t[31] << 9 | t[30] >>> 23, tl = t[30] << 9 | t[31] >>> 23, j = t[40] << 18 | t[41] >>> 14, q = t[41] << 18 | t[40] >>> 14, D = t[2] << 1 | t[3] >>> 31, F = t[3] << 1 | t[2] >>> 31, y = t[13] << 12 | t[12] >>> 20, v = t[12] << 12 | t[13] >>> 20, V = t[22] << 10 | t[23] >>> 22, W = t[23] << 10 | t[22] >>> 22, C = t[33] << 13 | t[32] >>> 19, T = t[32] << 13 | t[33] >>> 19, tu = t[42] << 2 | t[43] >>> 30, tc = t[43] << 2 | t[42] >>> 30, te = t[5] << 30 | t[4] >>> 2, tr = t[4] << 30 | t[5] >>> 2, z = t[14] << 6 | t[15] >>> 26, L = t[15] << 6 | t[14] >>> 26, A = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, X = t[34] << 15 | t[35] >>> 17, Z = t[35] << 15 | t[34] >>> 17, O = t[45] << 29 | t[44] >>> 3, B = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, x = t[7] << 28 | t[6] >>> 4, tn = t[17] << 23 | t[16] >>> 9, ti = t[16] << 23 | t[17] >>> 9, U = t[26] << 25 | t[27] >>> 7, M = t[27] << 25 | t[26] >>> 7, w = t[36] << 21 | t[37] >>> 11, E = t[37] << 21 | t[36] >>> 11, $ = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, H = t[8] << 27 | t[9] >>> 5, J = t[9] << 27 | t[8] >>> 5, P = t[18] << 20 | t[19] >>> 12, I = t[19] << 20 | t[18] >>> 12, to = t[29] << 7 | t[28] >>> 25, ts = t[28] << 7 | t[29] >>> 25, G = t[38] << 8 | t[39] >>> 24, Y = t[39] << 8 | t[38] >>> 24, _ = t[48] << 14 | t[49] >>> 18, N = t[49] << 14 | t[48] >>> 18, t[0] = p ^ ~y & A, t[1] = m ^ ~v & b, t[10] = k ^ ~P & S, t[11] = x ^ ~I & R, t[20] = D ^ ~z & U, t[21] = F ^ ~L & M, t[30] = H ^ ~K & V, t[31] = J ^ ~Q & W, t[40] = te ^ ~tn & to, t[41] = tr ^ ~ti & ts, t[2] = y ^ ~A & w, t[3] = v ^ ~b & E, t[12] = P ^ ~S & C, t[13] = I ^ ~R & T, t[22] = z ^ ~U & G, t[23] = L ^ ~M & Y, t[32] = K ^ ~V & X, t[33] = Q ^ ~W & Z, t[42] = tn ^ ~to & ta, t[43] = ti ^ ~ts & tl, t[4] = A ^ ~w & _, t[5] = b ^ ~E & N, t[14] = S ^ ~C & O, t[15] = R ^ ~T & B, t[24] = U ^ ~G & j, t[25] = M ^ ~Y & q, t[34] = V ^ ~X & $, t[35] = W ^ ~Z & tt, t[44] = to ^ ~ta & tu, t[45] = ts ^ ~tl & tc, t[6] = w ^ ~_ & p, t[7] = E ^ ~N & m, t[16] = C ^ ~O & k, t[17] = T ^ ~B & x, t[26] = G ^ ~j & D, t[27] = Y ^ ~q & F, t[36] = X ^ ~$ & H, t[37] = Z ^ ~tt & J, t[46] = ta ^ ~tu & te, t[47] = tl ^ ~tc & tr, t[8] = _ ^ ~p & y, t[9] = N ^ ~m & v, t[18] = O ^ ~k & P, t[19] = B ^ ~x & I, t[28] = j ^ ~D & z, t[29] = q ^ ~F & L, t[38] = $ ^ ~H & K, t[39] = tt ^ ~J & Q, t[48] = tu ^ ~te & tn, t[49] = tc ^ ~tr & ti, t[0] ^= g[n], t[1] ^= g[n + 1]
                };
                if (u) t.exports = P;
                else {
                    for (S = 0; S < I.length; ++S) a[I[S]] = P[I[S]];
                    c && void 0 !== (n = (function() {
                        return P
                    }).call(e, r, e, t)) && (t.exports = n)
                }
            }()
        },
        79746: function(t) {
            function e(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            t.exports = e, e.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            }
        },
        26541: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return A
                }
            });
            let n = r(38754),
                i = r(61757),
                o = r(85893),
                s = i._(r(67294)),
                a = n._(r(73935)),
                l = n._(r(7828)),
                u = r(17367),
                c = r(27903),
                h = r(54938);
            r(1997);
            let f = r(9953),
                d = n._(r(56663)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function g(t, e, r, n, i, o, s) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && i(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                i = !1;
                            r.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function m(t) {
                return s.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            let y = (0, s.forwardRef)((t, e) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: a,
                    width: l,
                    decoding: u,
                    className: c,
                    style: h,
                    fetchPriority: f,
                    placeholder: d,
                    loading: p,
                    unoptimized: y,
                    fill: v,
                    onLoadRef: A,
                    onLoadingCompleteRef: b,
                    setBlurComplete: w,
                    setShowAltText: E,
                    sizesInput: _,
                    onLoad: N,
                    onError: k,
                    ...x
                } = t;
                return (0, o.jsx)("img", { ...x,
                    ...m(f),
                    loading: p,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": v ? "fill" : "1",
                    className: c,
                    style: h,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: (0, s.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (k && (t.src = t.src), t.complete && g(t, d, A, b, w, y, _))
                    }, [r, d, A, b, w, k, y, _, e]),
                    onLoad: t => {
                        g(t.currentTarget, d, A, b, w, y, _)
                    },
                    onError: t => {
                        E(!0), "empty" !== d && w(!0), k && k(t)
                    }
                })
            });

            function v(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: r
                } = t, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...m(r.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(r.src, n), null) : (0, o.jsx)(l.default, {
                    children: (0, o.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let A = (0, s.forwardRef)((t, e) => {
                let r = (0, s.useContext)(f.RouterContext),
                    n = (0, s.useContext)(h.ImageConfigContext),
                    i = (0, s.useMemo)(() => {
                        let t = p || n || c.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            r = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    g = (0, s.useRef)(a);
                (0, s.useEffect)(() => {
                    g.current = a
                }, [a]);
                let m = (0, s.useRef)(l);
                (0, s.useEffect)(() => {
                    m.current = l
                }, [l]);
                let [A, b] = (0, s.useState)(!1), [w, E] = (0, s.useState)(!1), {
                    props: _,
                    meta: N
                } = (0, u.getImgProps)(t, {
                    defaultLoader: d.default,
                    imgConf: i,
                    blurComplete: A,
                    showAltText: w
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(y, { ..._,
                        unoptimized: N.unoptimized,
                        placeholder: N.placeholder,
                        fill: N.fill,
                        onLoadRef: g,
                        onLoadingCompleteRef: m,
                        setBlurComplete: b,
                        setShowAltText: E,
                        sizesInput: t.sizes,
                        ref: e
                    }), N.priority ? (0, o.jsx)(v, {
                        isAppRouter: !r,
                        imgAttributes: _
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        17367: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), r(1997);
            let n = r(69919),
                i = r(27903);

            function o(t) {
                return void 0 !== t.default
            }

            function s(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var r;
                let a, l, u, {
                        src: c,
                        sizes: h,
                        unoptimized: f = !1,
                        priority: d = !1,
                        loading: p,
                        className: g,
                        quality: m,
                        width: y,
                        height: v,
                        fill: A = !1,
                        style: b,
                        overrideSrc: w,
                        onLoad: E,
                        onLoadingComplete: _,
                        placeholder: N = "empty",
                        blurDataURL: k,
                        fetchPriority: x,
                        layout: P,
                        objectFit: I,
                        objectPosition: S,
                        lazyBoundary: R,
                        lazyRoot: C,
                        ...T
                    } = t,
                    {
                        imgConf: O,
                        showAltText: B,
                        blurComplete: D,
                        defaultLoader: F
                    } = e,
                    z = O || i.imageConfigDefault;
                if ("allSizes" in z) a = z;
                else {
                    let t = [...z.deviceSizes, ...z.imageSizes].sort((t, e) => t - e),
                        e = z.deviceSizes.sort((t, e) => t - e);
                    a = { ...z,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === F) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let L = T.loader || F;
                delete T.loader, delete T.srcSet;
                let U = "__next_img_default" in L;
                if (U) {
                    if ("custom" === a.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = L;
                    L = e => {
                        let {
                            config: r,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (P) {
                    "fill" === P && (A = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[P];
                    t && (b = { ...b,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[P];
                    e && !h && (h = e)
                }
                let M = "",
                    G = s(y),
                    Y = s(v);
                if ("object" == typeof(r = c) && (o(r) || void 0 !== r.src)) {
                    let t = o(c) ? c.default : c;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, k = k || t.blurDataURL, M = t.src, !A) {
                        if (G || Y) {
                            if (G && !Y) {
                                let e = G / t.width;
                                Y = Math.round(t.height * e)
                            } else if (!G && Y) {
                                let e = Y / t.height;
                                G = Math.round(t.width * e)
                            }
                        } else G = t.width, Y = t.height
                    }
                }
                let j = !d && ("lazy" === p || void 0 === p);
                (!(c = "string" == typeof c ? c : M) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, j = !1), a.unoptimized && (f = !0), U && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0), d && (x = "high");
                let q = s(m),
                    H = Object.assign(A ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: I,
                        objectPosition: S
                    } : {}, B ? {} : {
                        color: "transparent"
                    }, b),
                    J = D || "empty" === N ? null : "blur" === N ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: G,
                        heightInt: Y,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: k || "",
                        objectFit: H.objectFit
                    }) + '")' : 'url("' + N + '")',
                    K = J ? {
                        backgroundSize: H.objectFit || "cover",
                        backgroundPosition: H.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: J
                    } : {},
                    Q = function(t) {
                        let {
                            config: e,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: o,
                            sizes: s,
                            loader: a
                        } = t;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, r) {
                            let {
                                deviceSizes: n,
                                allSizes: i
                            } = t;
                            if (r) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(r); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: i.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => i.find(e => e >= t) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(e, i, s), c = l.length - 1;
                        return {
                            sizes: s || "w" !== u ? s : "100vw",
                            srcSet: l.map((t, n) => a({
                                config: e,
                                src: r,
                                quality: o,
                                width: t
                            }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: r,
                                quality: o,
                                width: l[c]
                            })
                        }
                    }({
                        config: a,
                        src: c,
                        unoptimized: f,
                        width: G,
                        quality: q,
                        sizes: h,
                        loader: L
                    });
                return {
                    props: { ...T,
                        loading: j ? "lazy" : p,
                        fetchPriority: x,
                        width: G,
                        height: Y,
                        decoding: "async",
                        className: g,
                        style: { ...H,
                            ...K
                        },
                        sizes: Q.sizes,
                        srcSet: Q.srcSet,
                        src: w || Q.src
                    },
                    meta: {
                        unoptimized: f,
                        priority: d,
                        placeholder: N,
                        fill: A
                    }
                }
            }
        },
        69919: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    widthInt: e,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: s
                } = t, a = n ? 40 * n : e, l = i ? 40 * i : r, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        35666: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = r(38754),
                i = r(17367),
                o = r(26541),
                s = n._(r(56663));

            function a(t) {
                let {
                    props: e
                } = (0, i.getImgProps)(t, {
                    defaultLoader: s.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
                return {
                    props: e
                }
            }
            let l = o.Image
        },
        56663: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    config: e,
                    src: r,
                    width: n,
                    quality: i
                } = t;
                return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        25675: function(t, e, r) {
            r(35666)
        },
        81134: function(t, e, r) {
            "use strict";
            r.d(e, {
                p: function() {
                    return J
                }
            });
            var n = r(30202),
                i = r(79524),
                o = r(92106);
            async function s(t, {
                chain: e
            }) {
                let {
                    id: r,
                    name: n,
                    nativeCurrency: i,
                    rpcUrls: s,
                    blockExplorers: a
                } = e;
                await t.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: (0, o.eC)(r),
                        chainName: n,
                        nativeCurrency: i,
                        rpcUrls: s.default.http,
                        blockExplorerUrls: a ? Object.values(a).map(({
                            url: t
                        }) => t) : void 0
                    }]
                }, {
                    retryCount: 0
                })
            }
            var a = r(30286),
                l = r(14503),
                u = r(8998),
                c = r(80377);

            function h({
                chain: t,
                currentChainId: e
            }) {
                if (!t) throw new c.Bk;
                if (e !== t.id) throw new c.Yl({
                    chain: t,
                    currentChainId: e
                })
            }
            var f = r(26445),
                d = r(33639),
                p = r(87469),
                g = r(61163),
                m = r(74688),
                y = r(93714),
                v = r(47531),
                A = r(76404),
                b = r(99238);
            async function w(t, e) {
                let {
                    account: r = t.account,
                    chain: n = t.chain,
                    accessList: o,
                    blobs: s,
                    data: a,
                    gas: c,
                    gasPrice: w,
                    maxFeePerBlobGas: E,
                    maxFeePerGas: _,
                    maxPriorityFeePerGas: N,
                    nonce: k,
                    to: x,
                    value: P,
                    ...I
                } = e;
                if (!r) throw new u.o({
                    docsPath: "/docs/actions/wallet/sendTransaction"
                });
                let S = (0, l.T)(r);
                try {
                    let r;
                    if ((0, v.F)(e), null !== n && (r = await (0, y.s)(t, i.L, "getChainId")({}), h({
                            currentChainId: r,
                            chain: n
                        })), "local" === S.type) {
                        let e = await (0, y.s)(t, A.Z, "prepareTransactionRequest")({
                                account: S,
                                accessList: o,
                                blobs: s,
                                chain: n,
                                chainId: r,
                                data: a,
                                gas: c,
                                gasPrice: w,
                                maxFeePerBlobGas: E,
                                maxFeePerGas: _,
                                maxPriorityFeePerGas: N,
                                nonce: k,
                                parameters: [...A.Q, "sidecars"],
                                to: x,
                                value: P,
                                ...I
                            }),
                            i = n ? .serializers ? .transaction,
                            l = await S.signTransaction(e, {
                                serializer: i
                            });
                        return await (0, y.s)(t, b.p, "sendRawTransaction")({
                            serializedTransaction: l
                        })
                    }
                    let l = t.chain ? .formatters ? .transactionRequest ? .format,
                        u = (l || m.tG)({ ...(0, g.K)(I, {
                                format: l
                            }),
                            accessList: o,
                            blobs: s,
                            data: a,
                            from: S.address,
                            gas: c,
                            gasPrice: w,
                            maxFeePerBlobGas: E,
                            maxFeePerGas: _,
                            maxPriorityFeePerGas: N,
                            nonce: k,
                            to: x,
                            value: P
                        });
                    return await t.request({
                        method: "eth_sendTransaction",
                        params: [u]
                    }, {
                        retryCount: 0
                    })
                } catch (t) {
                    throw function(t, {
                        docsPath: e,
                        ...r
                    }) {
                        let n = (() => {
                            let e = (0, p.k)(t, r);
                            return e instanceof f.cj ? t : e
                        })();
                        return new d.mk(n, {
                            docsPath: e,
                            ...r
                        })
                    }(t, { ...e,
                        account: S,
                        chain: e.chain || void 0
                    })
                }
            }
            var E = r(45775);
            async function _(t) {
                return t.account ? .type === "local" ? [t.account.address] : (await t.request({
                    method: "eth_accounts"
                })).map(t => (0, E.x)(t))
            }
            async function N(t) {
                return await t.request({
                    method: "wallet_getPermissions"
                })
            }
            async function k(t) {
                return (await t.request({
                    method: "eth_requestAccounts"
                }, {
                    retryCount: 0
                })).map(t => (0, E.K)(t))
            }
            async function x(t, e) {
                return t.request({
                    method: "wallet_requestPermissions",
                    params: [e]
                }, {
                    retryCount: 0
                })
            }
            var P = r(22980);
            async function I(t, e) {
                let {
                    account: r = t.account,
                    chain: n = t.chain,
                    ...s
                } = e;
                if (!r) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTransaction"
                });
                let a = (0, l.T)(r);
                (0, v.F)({
                    account: a,
                    ...e
                });
                let c = await (0, y.s)(t, i.L, "getChainId")({});
                null !== n && h({
                    currentChainId: c,
                    chain: n
                });
                let f = n ? .formatters || t.chain ? .formatters,
                    d = f ? .transactionRequest ? .format || m.tG;
                return "local" === a.type ? a.signTransaction({ ...s,
                    chainId: c
                }, {
                    serializer: t.chain ? .serializers ? .transaction
                }) : await t.request({
                    method: "eth_signTransaction",
                    params: [{ ...d(s),
                        chainId: (0, o.eC)(c),
                        from: a.address
                    }]
                }, {
                    retryCount: 0
                })
            }
            var S = r(15102),
                R = r(96070),
                C = r(71352);
            async function T(t, e) {
                let {
                    account: r = t.account,
                    domain: n,
                    message: i,
                    primaryType: o
                } = e;
                if (!r) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTypedData"
                });
                let s = (0, l.T)(r),
                    a = {
                        EIP712Domain: (0, C.cj)({
                            domain: n
                        }),
                        ...e.types
                    };
                if ((0, C.iC)({
                        domain: n,
                        message: i,
                        primaryType: o,
                        types: a
                    }), "local" === s.type) return s.signTypedData({
                    domain: n,
                    message: i,
                    primaryType: o,
                    types: a
                });
                let c = (0, R.P)({
                    domain: n ? ? {},
                    message: i,
                    primaryType: o,
                    types: a
                }, (t, e) => (0, S.v)(e) ? e.toLowerCase() : e);
                return t.request({
                    method: "eth_signTypedData_v4",
                    params: [s.address, c]
                }, {
                    retryCount: 0
                })
            }
            async function O(t, {
                id: e
            }) {
                await t.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: (0, o.eC)(e)
                    }]
                }, {
                    retryCount: 0
                })
            }
            async function B(t, e) {
                return await t.request({
                    method: "wallet_watchAsset",
                    params: e
                }, {
                    retryCount: 0
                })
            }
            var D = r(55629);
            async function F(t, e) {
                let {
                    abi: r,
                    address: n,
                    args: i,
                    dataSuffix: o,
                    functionName: s,
                    ...a
                } = e, l = (0, D.R)({
                    abi: r,
                    args: i,
                    functionName: s
                });
                return (0, y.s)(t, w, "sendTransaction")({
                    data: `${l}${o?o.replace("0x",""):""}`,
                    to: n,
                    ...a
                })
            }

            function z(t) {
                return {
                    addChain: e => s(t, e),
                    deployContract: e => (function(t, e) {
                        let {
                            abi: r,
                            args: n,
                            bytecode: i,
                            ...o
                        } = e, s = (0, a.w)({
                            abi: r,
                            args: n,
                            bytecode: i
                        });
                        return w(t, { ...o,
                            data: s
                        })
                    })(t, e),
                    getAddresses: () => _(t),
                    getChainId: () => (0, i.L)(t),
                    getPermissions: () => N(t),
                    prepareTransactionRequest: e => (0, A.Z)(t, e),
                    requestAddresses: () => k(t),
                    requestPermissions: e => x(t, e),
                    sendRawTransaction: e => (0, b.p)(t, e),
                    sendTransaction: e => w(t, e),
                    signMessage: e => (0, P.l)(t, e),
                    signTransaction: e => I(t, e),
                    signTypedData: e => T(t, e),
                    switchChain: e => O(t, e),
                    watchAsset: e => B(t, e),
                    writeContract: e => F(t, e)
                }
            }
            var L = r(75230);
            async function U(t, e = {}) {
                let r = await (0, L.e)(t, e);
                return r.extend(z), r.extend(z)
            }
            var M = r(36100),
                G = r(67294),
                Y = r(82451),
                j = r(92321),
                q = r(82002),
                H = r(37122);

            function J(t = {}) {
                let {
                    query: e = {},
                    ...r
                } = t, i = (0, H.Z)(r), o = (0, n.NL)(), {
                    address: s,
                    connector: a,
                    status: l
                } = (0, j.m)({
                    config: i
                }), u = (0, q.x)({
                    config: i
                }), {
                    queryKey: c,
                    ...h
                } = function(t, e = {}) {
                    return {
                        gcTime: 0,
                        async queryFn({
                            queryKey: r
                        }) {
                            let {
                                connector: n
                            } = e, {
                                connectorUid: i,
                                scopeKey: o,
                                ...s
                            } = r[1];
                            return U(t, { ...s,
                                connector: n
                            })
                        },
                        queryKey: function(t = {}) {
                            let {
                                connector: e,
                                ...r
                            } = t;
                            return ["walletClient", { ...(0, M.OP)(r),
                                connectorUid: e ? .uid
                            }]
                        }(e)
                    }
                }(i, { ...t,
                    chainId: t.chainId ? ? u,
                    connector: t.connector ? ? a
                }), f = !!("disconnected" !== l && (e.enabled ? ? !0)), d = (0, G.useRef)(s);
                return (0, G.useEffect)(() => {
                    let t = d.current;
                    !s && t ? (o.removeQueries({
                        queryKey: c
                    }), d.current = void 0) : s !== t && (o.invalidateQueries({
                        queryKey: c
                    }), d.current = s)
                }, [s, o]), (0, Y.aM)({ ...e,
                    ...h,
                    queryKey: c,
                    enabled: f,
                    staleTime: Number.POSITIVE_INFINITY
                })
            }
        }
    }
]);