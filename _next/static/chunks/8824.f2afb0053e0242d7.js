(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8824], {
        98099: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(97117);

            function n(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t
            }

            function s(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t
            }

            function o(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function a(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function c(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function u(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function h(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t
            }

            function l(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t
            }

            function f(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), h(e / 4294967296 >>> 0, t, r), h(e >>> 0, t, r + 4), t
            }

            function p(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e >>> 0, t, r), l(e / 4294967296 >>> 0, t, r + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = n, t.writeInt16BE = n, t.writeUint16LE = s, t.writeInt16LE = s, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = u, t.writeUint32BE = h, t.writeInt32BE = h, t.writeUint32LE = l, t.writeInt32LE = l, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var r = o(e, t),
                    i = o(e, t + 4);
                return 4294967296 * r + i - (i >> 31) * 4294967296
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = c(e, t);
                return 4294967296 * c(e, t + 4) + r - (r >> 31) * 4294967296
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = u(e, t);
                return 4294967296 * u(e, t + 4) + r
            }, t.writeUint64BE = f, t.writeInt64BE = f, t.writeUint64LE = p, t.writeInt64LE = p, t.readUintBE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintBE: array is too short for the given bitLength");
                for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--) i += t[s] * n, n *= 256;
                return i
            }, t.readUintLE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintLE: array is too short for the given bitLength");
                for (var i = 0, n = 1, s = r; s < r + e / 8; s++) i += t[s] * n, n *= 256;
                return i
            }, t.writeUintBE = function(e, t, r, n) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintBE value must be an integer");
                for (var s = 1, o = e / 8 + n - 1; o >= n; o--) r[o] = t / s & 255, s *= 256;
                return r
            }, t.writeUintLE = function(e, t, r, n) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintLE value must be an integer");
                for (var s = 1, o = n; o < n + e / 8; o++) r[o] = t / s & 255, s *= 256;
                return r
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t
            }, t.writeFloat32LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t
            }, t.writeFloat64BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t
            }, t.writeFloat64LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t
            }
        },
        25439: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(98099),
                n = r(17309);

            function s(e, t, r, s, o) {
                if (void 0 === o && (o = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (s.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === o) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    c = (a = new Uint8Array(16)).length - t.length, a.set(t, c)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    a = t, c = o
                }
                for (var a, c, u = new Uint8Array(64), h = 0; h < r.length; h += 64) {
                    ! function(e, t, r) {
                        for (var n = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], s = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], o = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], c = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], u = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], h = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], l = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], d = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], g = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], y = 1634760805, v = 857760878, m = 2036477234, b = 1797285236, w = n, _ = s, E = o, D = a, I = c, S = u, P = h, C = l, O = f, x = p, A = d, R = g, T = 0; T < 20; T += 2) O ^= y = y + w | 0, w ^= I = I + (O = O >>> 16 | O << 16) | 0, w = w >>> 20 | w << 12, x ^= v = v + _ | 0, _ ^= S = S + (x = x >>> 16 | x << 16) | 0, _ = _ >>> 20 | _ << 12, A ^= m = m + E | 0, E ^= P = P + (A = A >>> 16 | A << 16) | 0, E = E >>> 20 | E << 12, R ^= b = b + D | 0, D ^= C = C + (R = R >>> 16 | R << 16) | 0, D = D >>> 20 | D << 12, A ^= m = m + E | 0, E ^= P = P + (A = A >>> 24 | A << 8) | 0, E = E >>> 25 | E << 7, R ^= b = b + D | 0, D ^= C = C + (R = R >>> 24 | R << 8) | 0, D = D >>> 25 | D << 7, x ^= v = v + _ | 0, _ ^= S = S + (x = x >>> 24 | x << 8) | 0, _ = _ >>> 25 | _ << 7, O ^= y = y + w | 0, w ^= I = I + (O = O >>> 24 | O << 8) | 0, w = w >>> 25 | w << 7, R ^= y = y + _ | 0, _ ^= P = P + (R = R >>> 16 | R << 16) | 0, _ = _ >>> 20 | _ << 12, O ^= v = v + E | 0, E ^= C = C + (O = O >>> 16 | O << 16) | 0, E = E >>> 20 | E << 12, x ^= m = m + D | 0, D ^= I = I + (x = x >>> 16 | x << 16) | 0, D = D >>> 20 | D << 12, A ^= b = b + w | 0, w ^= S = S + (A = A >>> 16 | A << 16) | 0, w = w >>> 20 | w << 12, x ^= m = m + D | 0, D ^= I = I + (x = x >>> 24 | x << 8) | 0, D = D >>> 25 | D << 7, A ^= b = b + w | 0, w ^= S = S + (A = A >>> 24 | A << 8) | 0, w = w >>> 25 | w << 7, O ^= v = v + E | 0, E ^= C = C + (O = O >>> 24 | O << 8) | 0, E = E >>> 25 | E << 7, R ^= y = y + _ | 0, _ ^= P = P + (R = R >>> 24 | R << 8) | 0, _ = _ >>> 25 | _ << 7;
                        i.writeUint32LE(y + 1634760805 | 0, e, 0), i.writeUint32LE(v + 857760878 | 0, e, 4), i.writeUint32LE(m + 2036477234 | 0, e, 8), i.writeUint32LE(b + 1797285236 | 0, e, 12), i.writeUint32LE(w + n | 0, e, 16), i.writeUint32LE(_ + s | 0, e, 20), i.writeUint32LE(E + o | 0, e, 24), i.writeUint32LE(D + a | 0, e, 28), i.writeUint32LE(I + c | 0, e, 32), i.writeUint32LE(S + u | 0, e, 36), i.writeUint32LE(P + h | 0, e, 40), i.writeUint32LE(C + l | 0, e, 44), i.writeUint32LE(O + f | 0, e, 48), i.writeUint32LE(x + p | 0, e, 52), i.writeUint32LE(A + d | 0, e, 56), i.writeUint32LE(R + g | 0, e, 60)
                    }(u, a, e);
                    for (var l = h; l < h + 64 && l < r.length; l++) s[l] = r[l] ^ u[l - h];
                    ! function(e, t, r) {
                        for (var i = 1; r--;) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
                        if (i > 0) throw Error("ChaCha: counter overflow")
                    }(a, 0, c)
                }
                return n.wipe(u), 0 === o && n.wipe(a), s
            }
            t.streamXOR = s, t.stream = function(e, t, r, i) {
                return void 0 === i && (i = 0), n.wipe(r), s(e, t, r, r, i)
            }
        },
        15501: function(e, t, r) {
            "use strict";
            var i = r(25439),
                n = r(63027),
                s = r(17309),
                o = r(98099),
                a = r(4153);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var c = new Uint8Array(16),
                u = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var o, a = new Uint8Array(16);
                        a.set(e, a.length - e.length);
                        var c = new Uint8Array(32);
                        i.stream(this._key, a, c, 4);
                        var u = t.length + this.tagLength;
                        if (n) {
                            if (n.length !== u) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = n
                        } else o = new Uint8Array(u);
                        return i.streamXOR(this._key, a, t, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), c, o.subarray(0, o.length - this.tagLength), r), s.wipe(a), o
                    }, e.prototype.open = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o, c = new Uint8Array(16);
                        c.set(e, c.length - e.length);
                        var u = new Uint8Array(32);
                        i.stream(this._key, c, u, 4);
                        var h = new Uint8Array(this.tagLength);
                        if (this._authenticate(h, u, t.subarray(0, t.length - this.tagLength), r), !a.equal(h, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var l = t.length - this.tagLength;
                        if (n) {
                            if (n.length !== l) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = n
                        } else o = new Uint8Array(l);
                        return i.streamXOR(this._key, c, t.subarray(0, t.length - this.tagLength), o, 4), s.wipe(c), o
                    }, e.prototype.clean = function() {
                        return s.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, i) {
                        var a = new n.Poly1305(t);
                        i && (a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                        var u = new Uint8Array(8);
                        i && o.writeUint64LE(i.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
                        for (var h = a.digest(), l = 0; l < h.length; l++) e[l] = h[l];
                        a.clean(), s.wipe(h), s.wipe(u)
                    }, e
                }();
            t.OK = u
        },
        4153: function(e, t) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        31050: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(31416);
            let i = r(93350);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(17309), t.jQ = 64, t.KS = 64, t.aP = 32, new Uint8Array(32)[0] = 9;
            let s = n(),
                o = n([1]),
                a = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                c = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                u = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function h(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function l(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function f(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function p(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                l(i), l(i), l(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, f(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function y(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    b = 0,
                    w = 0,
                    _ = 0,
                    E = 0,
                    D = 0,
                    I = 0,
                    S = 0,
                    P = 0,
                    C = 0,
                    O = 0,
                    x = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    N = 0,
                    k = 0,
                    j = 0,
                    M = r[0],
                    L = r[1],
                    U = r[2],
                    q = r[3],
                    z = r[4],
                    $ = r[5],
                    B = r[6],
                    F = r[7],
                    H = r[8],
                    V = r[9],
                    K = r[10],
                    W = r[11],
                    G = r[12],
                    Y = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * M, o += i * L, a += i * U, c += i * q, u += i * z, h += i * $, l += i * B, f += i * F, p += i * H, d += i * V, g += i * K, y += i * W, v += i * G, m += i * Y, b += i * J, w += i * Q, o += (i = t[1]) * M, a += i * L, c += i * U, u += i * q, h += i * z, l += i * $, f += i * B, p += i * F, d += i * H, g += i * V, y += i * K, v += i * W, m += i * G, b += i * Y, w += i * J, _ += i * Q, a += (i = t[2]) * M, c += i * L, u += i * U, h += i * q, l += i * z, f += i * $, p += i * B, d += i * F, g += i * H, y += i * V, v += i * K, m += i * W, b += i * G, w += i * Y, _ += i * J, E += i * Q, c += (i = t[3]) * M, u += i * L, h += i * U, l += i * q, f += i * z, p += i * $, d += i * B, g += i * F, y += i * H, v += i * V, m += i * K, b += i * W, w += i * G, _ += i * Y, E += i * J, D += i * Q, u += (i = t[4]) * M, h += i * L, l += i * U, f += i * q, p += i * z, d += i * $, g += i * B, y += i * F, v += i * H, m += i * V, b += i * K, w += i * W, _ += i * G, E += i * Y, D += i * J, I += i * Q, h += (i = t[5]) * M, l += i * L, f += i * U, p += i * q, d += i * z, g += i * $, y += i * B, v += i * F, m += i * H, b += i * V, w += i * K, _ += i * W, E += i * G, D += i * Y, I += i * J, S += i * Q, l += (i = t[6]) * M, f += i * L, p += i * U, d += i * q, g += i * z, y += i * $, v += i * B, m += i * F, b += i * H, w += i * V, _ += i * K, E += i * W, D += i * G, I += i * Y, S += i * J, P += i * Q, f += (i = t[7]) * M, p += i * L, d += i * U, g += i * q, y += i * z, v += i * $, m += i * B, b += i * F, w += i * H, _ += i * V, E += i * K, D += i * W, I += i * G, S += i * Y, P += i * J, C += i * Q, p += (i = t[8]) * M, d += i * L, g += i * U, y += i * q, v += i * z, m += i * $, b += i * B, w += i * F, _ += i * H, E += i * V, D += i * K, I += i * W, S += i * G, P += i * Y, C += i * J, O += i * Q, d += (i = t[9]) * M, g += i * L, y += i * U, v += i * q, m += i * z, b += i * $, w += i * B, _ += i * F, E += i * H, D += i * V, I += i * K, S += i * W, P += i * G, C += i * Y, O += i * J, x += i * Q, g += (i = t[10]) * M, y += i * L, v += i * U, m += i * q, b += i * z, w += i * $, _ += i * B, E += i * F, D += i * H, I += i * V, S += i * K, P += i * W, C += i * G, O += i * Y, x += i * J, A += i * Q, y += (i = t[11]) * M, v += i * L, m += i * U, b += i * q, w += i * z, _ += i * $, E += i * B, D += i * F, I += i * H, S += i * V, P += i * K, C += i * W, O += i * G, x += i * Y, A += i * J, R += i * Q, v += (i = t[12]) * M, m += i * L, b += i * U, w += i * q, _ += i * z, E += i * $, D += i * B, I += i * F, S += i * H, P += i * V, C += i * K, O += i * W, x += i * G, A += i * Y, R += i * J, T += i * Q, m += (i = t[13]) * M, b += i * L, w += i * U, _ += i * q, E += i * z, D += i * $, I += i * B, S += i * F, P += i * H, C += i * V, O += i * K, x += i * W, A += i * G, R += i * Y, T += i * J, N += i * Q, b += (i = t[14]) * M, w += i * L, _ += i * U, E += i * q, D += i * z, I += i * $, S += i * B, P += i * F, C += i * H, O += i * V, x += i * K, A += i * W, R += i * G, T += i * Y, N += i * J, k += i * Q, w += (i = t[15]) * M, _ += i * L, E += i * U, D += i * q, I += i * z, S += i * $, P += i * B, C += i * F, O += i * H, x += i * V, A += i * K, R += i * W, T += i * G, N += i * Y, k += i * J, j += i * Q, s += 38 * _, o += 38 * E, a += 38 * D, c += 38 * I, u += 38 * S, h += 38 * P, l += 38 * C, f += 38 * O, p += 38 * x, d += 38 * A, g += 38 * R, y += 38 * T, v += 38 * N, m += 38 * k, b += 38 * j, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = h, e[6] = l, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = w
            }

            function v(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    c = n(),
                    u = n(),
                    h = n(),
                    l = n(),
                    f = n();
                g(r, e[1], e[0]), g(f, t[1], t[0]), y(r, r, f), d(i, e[0], e[1]), d(f, t[0], t[1]), y(i, i, f), y(s, e[3], t[3]), y(s, s, a), y(o, e[2], t[2]), d(o, o, o), g(c, i, r), g(u, o, s), d(h, o, s), d(l, i, r), y(e[0], c, u), y(e[1], l, h), y(e[2], h, u), y(e[3], c, l)
            }

            function m(e, t, r) {
                for (let i = 0; i < 4; i++) f(e[i], t[i], r)
            }

            function b(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), y(r, t[0], s), y(i, t[1], s), p(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return p(t, e), 1 & t[0]
                }(r) << 7
            }

            function w(e, t) {
                let r = [n(), n(), n(), n()];
                h(r[0], c), h(r[1], u), h(r[2], o), y(r[3], c, u),
                    function(e, t, r) {
                        h(e[0], s), h(e[1], o), h(e[2], o), h(e[3], s);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            m(e, t, n), v(t, e), v(e, e), m(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                w(o, r), b(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let _ = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function E(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * _[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * _[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * _[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function D(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                E(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), D(u), w(s, u), b(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let h = c.digest();
                D(h);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += h[e] * o[t];
                return E(a.subarray(32), r), a
            }
        },
        79984: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        512: function(e, t, r) {
            "use strict";
            var i = r(25629),
                n = r(17309),
                s = function() {
                    function e(e, t, r, n) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
                        var s = i.hmac(this._hash, r, t);
                        this._hmac = new i.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = s
        },
        25629: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(79984),
                n = r(4153),
                s = r(17309),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var n = 0; n < r.length; n++) r[n] ^= 54;
                        this._inner.update(r);
                        for (var n = 0; n < r.length; n++) r[n] ^= 106;
                        this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? this._outer.finish(e) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0), this
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, r) {
                var i = new o(e, t);
                i.update(r);
                var n = i.digest();
                return i.clean(), n
            }, t.equal = n.equal
        },
        97117: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var r = 65535 & e,
                    i = 65535 & t;
                return r * i + ((e >>> 16 & 65535) * i + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        63027: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(4153),
                n = r(17309);
            t.DIGEST_LENGTH = 16;
            var s = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var i = e[2] | e[3] << 8;
                    this._r[1] = (r >>> 13 | i << 3) & 8191;
                    var n = e[4] | e[5] << 8;
                    this._r[2] = (i >>> 10 | n << 6) & 7939;
                    var s = e[6] | e[7] << 8;
                    this._r[3] = (n >>> 7 | s << 9) & 8191;
                    var o = e[8] | e[9] << 8;
                    this._r[4] = (s >>> 4 | o << 12) & 255, this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = (o >>> 14 | a << 2) & 8191;
                    var c = e[12] | e[13] << 8;
                    this._r[7] = (a >>> 11 | c << 5) & 8065;
                    var u = e[14] | e[15] << 8;
                    this._r[8] = (c >>> 8 | u << 8) & 8191, this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var i = this._fin ? 0 : 2048, n = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], h = this._h[6], l = this._h[7], f = this._h[8], p = this._h[9], d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], m = this._r[4], b = this._r[5], w = this._r[6], _ = this._r[7], E = this._r[8], D = this._r[9]; r >= 16;) {
                        var I, S = e[t + 0] | e[t + 1] << 8;
                        n += 8191 & S;
                        var P = e[t + 2] | e[t + 3] << 8;
                        s += (S >>> 13 | P << 3) & 8191;
                        var C = e[t + 4] | e[t + 5] << 8;
                        o += (P >>> 10 | C << 6) & 8191;
                        var O = e[t + 6] | e[t + 7] << 8;
                        a += (C >>> 7 | O << 9) & 8191;
                        var x = e[t + 8] | e[t + 9] << 8;
                        c += (O >>> 4 | x << 12) & 8191, u += x >>> 1 & 8191;
                        var A = e[t + 10] | e[t + 11] << 8;
                        h += (x >>> 14 | A << 2) & 8191;
                        var R = e[t + 12] | e[t + 13] << 8;
                        l += (A >>> 11 | R << 5) & 8191;
                        var T = e[t + 14] | e[t + 15] << 8;
                        f += (R >>> 8 | T << 8) & 8191, p += T >>> 5 | i;
                        var N = 0;
                        N = (I = 0 + n * d + 5 * D * s + 5 * E * o + 5 * _ * a + 5 * w * c) >>> 13, I &= 8191, I += 5 * b * u + 5 * m * h + 5 * v * l + 5 * y * f + 5 * g * p, N += I >>> 13, I &= 8191;
                        var k = N;
                        k += n * g + s * d + 5 * D * o + 5 * E * a + 5 * _ * c, N = k >>> 13, k &= 8191, k += 5 * w * u + 5 * b * h + 5 * m * l + 5 * v * f + 5 * y * p, N += k >>> 13, k &= 8191;
                        var j = N;
                        j += n * y + s * g + o * d + 5 * D * a + 5 * E * c, N = j >>> 13, j &= 8191, j += 5 * _ * u + 5 * w * h + 5 * b * l + 5 * m * f + 5 * v * p, N += j >>> 13, j &= 8191;
                        var M = N;
                        M += n * v + s * y + o * g + a * d + 5 * D * c, N = M >>> 13, M &= 8191, M += 5 * E * u + 5 * _ * h + 5 * w * l + 5 * b * f + 5 * m * p, N += M >>> 13, M &= 8191;
                        var L = N;
                        L += n * m + s * v + o * y + a * g + c * d, N = L >>> 13, L &= 8191, L += 5 * D * u + 5 * E * h + 5 * _ * l + 5 * w * f + 5 * b * p, N += L >>> 13, L &= 8191;
                        var U = N;
                        U += n * b + s * m + o * v + a * y + c * g, N = U >>> 13, U &= 8191, U += u * d + 5 * D * h + 5 * E * l + 5 * _ * f + 5 * w * p, N += U >>> 13, U &= 8191;
                        var q = N;
                        q += n * w + s * b + o * m + a * v + c * y, N = q >>> 13, q &= 8191, q += u * g + h * d + 5 * D * l + 5 * E * f + 5 * _ * p, N += q >>> 13, q &= 8191;
                        var z = N;
                        z += n * _ + s * w + o * b + a * m + c * v, N = z >>> 13, z &= 8191, z += u * y + h * g + l * d + 5 * D * f + 5 * E * p, N += z >>> 13, z &= 8191;
                        var $ = N;
                        $ += n * E + s * _ + o * w + a * b + c * m, N = $ >>> 13, $ &= 8191, $ += u * v + h * y + l * g + f * d + 5 * D * p, N += $ >>> 13, $ &= 8191;
                        var B = N;
                        B += n * D + s * E + o * _ + a * w + c * b, N = B >>> 13, B &= 8191, B += u * m + h * v + l * y + f * g + p * d, N += B >>> 13, B &= 8191, I = 8191 & (N = (N = (N << 2) + N | 0) + I | 0), N >>>= 13, k += N, n = I, s = k, o = j, a = M, c = L, u = U, h = q, l = z, f = $, p = B, t += 16, r -= 16
                    }
                    this._h[0] = n, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = h, this._h[7] = l, this._h[8] = f, this._h[9] = p
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, i, n, s, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, o[s] &= 8191;
                    for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
                    for (s = 0, i = ~i; s < 10; s++) this._h[s] = this._h[s] & i | o[s];
                    for (s = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, n = this._h[0] + this._pad[0], this._h[0] = 65535 & n; s < 8; s++) n = (this._h[s] + this._pad[s] | 0) + (n >>> 16) | 0, this._h[s] = 65535 & n;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        i = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > i && (t = i);
                        for (var n = 0; n < t; n++) this._buffer[this._leftover + n] = e[r + n];
                        if (i -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (i >= 16 && (t = i - i % 16, this._blocks(e, r, t), r += t, i -= t), i) {
                        for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = e[r + n];
                        this._leftover += i
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
                var r = new s(e);
                r.update(t);
                var i = r.digest();
                return r.clean(), i
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r)
            }
        },
        31416: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            let i = r(46008),
                n = r(98099),
                s = r(17309);

            function o(e, r = t.defaultRandomSource) {
                return r.randomBytes(e)
            }
            t.defaultRandomSource = new i.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function(e = t.defaultRandomSource) {
                let r = o(4, e),
                    i = (0, n.readUint32LE)(r);
                return (0, s.wipe)(r), i
            };
            let a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function c(e, r = a, i = t.defaultRandomSource) {
                if (r.length < 2) throw Error("randomString charset is too short");
                if (r.length > 256) throw Error("randomString charset is too long");
                let n = "",
                    c = r.length,
                    u = 256 - 256 % c;
                for (; e > 0;) {
                    let t = o(Math.ceil(256 * e / u), i);
                    for (let i = 0; i < t.length && e > 0; i++) {
                        let s = t[i];
                        s < u && (n += r.charAt(s % c), e--)
                    }(0, s.wipe)(t)
                }
                return n
            }
            t.randomString = c, t.randomStringForEntropy = function(e, r = a, i = t.defaultRandomSource) {
                return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i)
            }
        },
        75455: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0;
            class r {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let t = new Uint8Array(e);
                    for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
                    return t
                }
            }
            t.BrowserRandomSource = r
        },
        58871: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            let i = r(17309);
            class n {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let e = r(35883);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let r = new Uint8Array(e);
                    for (let e = 0; e < r.length; e++) r[e] = t[e];
                    return (0, i.wipe)(t), r
                }
            }
            t.NodeRandomSource = n
        },
        46008: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            let i = r(75455),
                n = r(58871);
            class s {
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new n.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
            t.SystemRandomSource = s
        },
        73294: function(e, t, r) {
            "use strict";
            var i = r(98099),
                n = r(17309);
            t.k = 32, t.cn = 64;
            var s = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._temp, this._state, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 4; s++) i.writeUint32BE(this._state[s], e, 4 * s);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.state), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = s;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, r, n, s) {
                for (; s >= 64;) {
                    for (var a = t[0], c = t[1], u = t[2], h = t[3], l = t[4], f = t[5], p = t[6], d = t[7], g = 0; g < 16; g++) {
                        var y = n + 4 * g;
                        e[g] = i.readUint32BE(r, y)
                    }
                    for (var g = 16; g < 64; g++) {
                        var v = e[g - 2],
                            m = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10,
                            b = ((v = e[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
                        e[g] = (m + e[g - 7] | 0) + (b + e[g - 16] | 0)
                    }
                    for (var g = 0; g < 64; g++) {
                        var m = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & f ^ ~l & p) | 0) + (d + (o[g] + e[g] | 0) | 0) | 0,
                            b = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
                        d = p, p = f, f = l, l = h + m | 0, h = u, u = c, c = a, a = m + b | 0
                    }
                    t[0] += a, t[1] += c, t[2] += u, t[3] += h, t[4] += l, t[5] += f, t[6] += p, t[7] += d, n += 64, s -= 64
                }
                return n
            }
            t.vp = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        93350: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(98099),
                n = r(17309);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var u, h, l, f, p, d, g, y, v = r[0], m = r[1], b = r[2], w = r[3], _ = r[4], E = r[5], D = r[6], I = r[7], S = n[0], P = n[1], C = n[2], O = n[3], x = n[4], A = n[5], R = n[6], T = n[7]; c >= 128;) {
                    for (var N = 0; N < 16; N++) {
                        var k = 8 * N + a;
                        e[N] = i.readUint32BE(s, k), t[N] = i.readUint32BE(s, k + 4)
                    }
                    for (var N = 0; N < 80; N++) {
                        var j = v,
                            M = m,
                            L = b,
                            U = w,
                            q = _,
                            z = E,
                            $ = D,
                            B = I,
                            F = S,
                            H = P,
                            V = C,
                            K = O,
                            W = x,
                            G = A,
                            Y = R,
                            J = T;
                        if (u = I, p = 65535 & (h = T), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = (_ >>> 14 | x << 18) ^ (_ >>> 18 | x << 14) ^ (x >>> 9 | _ << 23), p += 65535 & (h = (x >>> 14 | _ << 18) ^ (x >>> 18 | _ << 14) ^ (_ >>> 9 | x << 23)), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = _ & E ^ ~_ & D, p += 65535 & (h = x & A ^ ~x & R), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * N], p += 65535 & (h = o[2 * N + 1]), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = e[N % 16], p += 65535 & (h = t[N % 16]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, l = 65535 & g | y << 16, f = 65535 & p | d << 16, u = l, p = 65535 & (h = f), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25), p += 65535 & (h = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = v & m ^ v & b ^ m & b, p += 65535 & (h = S & P ^ S & C ^ P & C), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, B = 65535 & g | y << 16, J = 65535 & p | d << 16, u = U, p = 65535 & (h = K), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = l, p += 65535 & (h = f), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, U = 65535 & g | y << 16, K = 65535 & p | d << 16, m = j, b = M, w = L, _ = U, E = q, D = z, I = $, v = B, P = F, C = H, O = V, x = K, A = W, R = G, T = Y, S = J, N % 16 == 15)
                            for (var k = 0; k < 16; k++) u = e[k], p = 65535 & (h = t[k]), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = e[(k + 9) % 16], p += 65535 & (h = t[(k + 9) % 16]), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = ((l = e[(k + 1) % 16]) >>> 1 | (f = t[(k + 1) % 16]) << 31) ^ (l >>> 8 | f << 24) ^ l >>> 7, p += 65535 & (h = (f >>> 1 | l << 31) ^ (f >>> 8 | l << 24) ^ (f >>> 7 | l << 25)), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = ((l = e[(k + 14) % 16]) >>> 19 | (f = t[(k + 14) % 16]) << 13) ^ (f >>> 29 | l << 3) ^ l >>> 6, p += 65535 & (h = (f >>> 19 | l << 13) ^ (l >>> 29 | f << 3) ^ (f >>> 6 | l << 26)), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, e[k] = 65535 & g | y << 16, t[k] = 65535 & p | d << 16
                    }
                    u = v, p = 65535 & (h = S), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], p += 65535 & (h = n[0]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & p | d << 16, u = m, p = 65535 & (h = P), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], p += 65535 & (h = n[1]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = P = 65535 & p | d << 16, u = b, p = 65535 & (h = C), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], p += 65535 & (h = n[2]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[2] = b = 65535 & g | y << 16, n[2] = C = 65535 & p | d << 16, u = w, p = 65535 & (h = O), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], p += 65535 & (h = n[3]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[3] = w = 65535 & g | y << 16, n[3] = O = 65535 & p | d << 16, u = _, p = 65535 & (h = x), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], p += 65535 & (h = n[4]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[4] = _ = 65535 & g | y << 16, n[4] = x = 65535 & p | d << 16, u = E, p = 65535 & (h = A), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], p += 65535 & (h = n[5]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, n[5] = A = 65535 & p | d << 16, u = D, p = 65535 & (h = R), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], p += 65535 & (h = n[6]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[6] = D = 65535 & g | y << 16, n[6] = R = 65535 & p | d << 16, u = I, p = 65535 & (h = T), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], p += 65535 & (h = n[7]), d += h >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[7] = I = 65535 & g | y << 16, n[7] = T = 65535 & p | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        17309: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        57664: function(e, t, r) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let i = r(31416),
                n = r(17309);

            function s(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.kz = 32, t.KS = 32;
            let o = new Uint8Array(32);
            o[0] = 9;
            let a = s([56129, 1]);

            function c(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function u(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function h(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function l(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function f(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    b = 0,
                    w = 0,
                    _ = 0,
                    E = 0,
                    D = 0,
                    I = 0,
                    S = 0,
                    P = 0,
                    C = 0,
                    O = 0,
                    x = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    N = 0,
                    k = 0,
                    j = 0,
                    M = r[0],
                    L = r[1],
                    U = r[2],
                    q = r[3],
                    z = r[4],
                    $ = r[5],
                    B = r[6],
                    F = r[7],
                    H = r[8],
                    V = r[9],
                    K = r[10],
                    W = r[11],
                    G = r[12],
                    Y = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * M, o += i * L, a += i * U, c += i * q, u += i * z, h += i * $, l += i * B, f += i * F, p += i * H, d += i * V, g += i * K, y += i * W, v += i * G, m += i * Y, b += i * J, w += i * Q, o += (i = t[1]) * M, a += i * L, c += i * U, u += i * q, h += i * z, l += i * $, f += i * B, p += i * F, d += i * H, g += i * V, y += i * K, v += i * W, m += i * G, b += i * Y, w += i * J, _ += i * Q, a += (i = t[2]) * M, c += i * L, u += i * U, h += i * q, l += i * z, f += i * $, p += i * B, d += i * F, g += i * H, y += i * V, v += i * K, m += i * W, b += i * G, w += i * Y, _ += i * J, E += i * Q, c += (i = t[3]) * M, u += i * L, h += i * U, l += i * q, f += i * z, p += i * $, d += i * B, g += i * F, y += i * H, v += i * V, m += i * K, b += i * W, w += i * G, _ += i * Y, E += i * J, D += i * Q, u += (i = t[4]) * M, h += i * L, l += i * U, f += i * q, p += i * z, d += i * $, g += i * B, y += i * F, v += i * H, m += i * V, b += i * K, w += i * W, _ += i * G, E += i * Y, D += i * J, I += i * Q, h += (i = t[5]) * M, l += i * L, f += i * U, p += i * q, d += i * z, g += i * $, y += i * B, v += i * F, m += i * H, b += i * V, w += i * K, _ += i * W, E += i * G, D += i * Y, I += i * J, S += i * Q, l += (i = t[6]) * M, f += i * L, p += i * U, d += i * q, g += i * z, y += i * $, v += i * B, m += i * F, b += i * H, w += i * V, _ += i * K, E += i * W, D += i * G, I += i * Y, S += i * J, P += i * Q, f += (i = t[7]) * M, p += i * L, d += i * U, g += i * q, y += i * z, v += i * $, m += i * B, b += i * F, w += i * H, _ += i * V, E += i * K, D += i * W, I += i * G, S += i * Y, P += i * J, C += i * Q, p += (i = t[8]) * M, d += i * L, g += i * U, y += i * q, v += i * z, m += i * $, b += i * B, w += i * F, _ += i * H, E += i * V, D += i * K, I += i * W, S += i * G, P += i * Y, C += i * J, O += i * Q, d += (i = t[9]) * M, g += i * L, y += i * U, v += i * q, m += i * z, b += i * $, w += i * B, _ += i * F, E += i * H, D += i * V, I += i * K, S += i * W, P += i * G, C += i * Y, O += i * J, x += i * Q, g += (i = t[10]) * M, y += i * L, v += i * U, m += i * q, b += i * z, w += i * $, _ += i * B, E += i * F, D += i * H, I += i * V, S += i * K, P += i * W, C += i * G, O += i * Y, x += i * J, A += i * Q, y += (i = t[11]) * M, v += i * L, m += i * U, b += i * q, w += i * z, _ += i * $, E += i * B, D += i * F, I += i * H, S += i * V, P += i * K, C += i * W, O += i * G, x += i * Y, A += i * J, R += i * Q, v += (i = t[12]) * M, m += i * L, b += i * U, w += i * q, _ += i * z, E += i * $, D += i * B, I += i * F, S += i * H, P += i * V, C += i * K, O += i * W, x += i * G, A += i * Y, R += i * J, T += i * Q, m += (i = t[13]) * M, b += i * L, w += i * U, _ += i * q, E += i * z, D += i * $, I += i * B, S += i * F, P += i * H, C += i * V, O += i * K, x += i * W, A += i * G, R += i * Y, T += i * J, N += i * Q, b += (i = t[14]) * M, w += i * L, _ += i * U, E += i * q, D += i * z, I += i * $, S += i * B, P += i * F, C += i * H, O += i * V, x += i * K, A += i * W, R += i * G, T += i * Y, N += i * J, k += i * Q, w += (i = t[15]) * M, _ += i * L, E += i * U, D += i * q, I += i * z, S += i * $, P += i * B, C += i * F, O += i * H, x += i * V, A += i * K, R += i * W, T += i * G, N += i * Y, k += i * J, j += i * Q, s += 38 * _, o += 38 * E, a += 38 * D, c += 38 * I, u += 38 * S, h += 38 * P, l += 38 * C, f += 38 * O, p += 38 * x, d += 38 * A, g += 38 * R, y += 38 * T, v += 38 * N, m += 38 * k, b += 38 * j, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = h, e[6] = l, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = w
            }

            function p(e, t) {
                let r = new Uint8Array(32),
                    i = new Float64Array(80),
                    n = s(),
                    o = s(),
                    p = s(),
                    d = s(),
                    g = s(),
                    y = s();
                for (let t = 0; t < 31; t++) r[t] = e[t];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(i, t);
                for (let e = 0; e < 16; e++) o[e] = i[e];
                n[0] = d[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = r[e >>> 3] >>> (7 & e) & 1;
                    u(n, o, t), u(p, d, t), h(g, n, p), l(n, n, p), h(p, o, d), l(o, o, d), f(d, g, g), f(y, n, n), f(n, p, n), f(p, o, g), h(g, n, p), l(n, n, p), f(o, n, n), l(p, d, y), f(n, p, a), h(n, n, d), f(p, p, n), f(n, d, y), f(d, o, i), f(o, g, g), u(n, o, t), u(p, d, t)
                }
                for (let e = 0; e < 16; e++) i[e + 16] = n[e], i[e + 32] = p[e], i[e + 48] = o[e], i[e + 64] = d[e];
                let v = i.subarray(32),
                    m = i.subarray(16);
                ! function(e, t) {
                    let r = s();
                    for (let e = 0; e < 16; e++) r[e] = t[e];
                    for (let e = 253; e >= 0; e--) f(r, r, r), 2 !== e && 4 !== e && f(r, r, t);
                    for (let t = 0; t < 16; t++) e[t] = r[t]
                }(v, v), f(m, m, v);
                let b = new Uint8Array(32);
                return ! function(e, t) {
                    let r = s(),
                        i = s();
                    for (let e = 0; e < 16; e++) i[e] = t[e];
                    c(i), c(i), c(i);
                    for (let e = 0; e < 2; e++) {
                        r[0] = i[0] - 65517;
                        for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                        let e = r[15] >> 16 & 1;
                        r[14] &= 65535, u(i, r, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
                }(b, m), b
            }
            t.Au = function(e) {
                let r = (0, i.randomBytes)(32, e),
                    s = function(e) {
                        if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
                        let r = new Uint8Array(e);
                        return {
                            publicKey: p(r, o),
                            secretKey: r
                        }
                    }(r);
                return (0, n.wipe)(r), s
            }, t.gi = function(e, r, i = !1) {
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== t.kz) throw Error("X25519: incorrect public key length");
                let n = p(e, r);
                if (i) {
                    let e = 0;
                    for (let t = 0; t < n.length; t++) e |= n[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return n
            }
        },
        40926: function(e, t, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                let e = i();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        88618: function(e, t, r) {
            "use strict";
            var i = r(34155);

            function n() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = s, t.isBrowser = function() {
                return !n() && !s()
            }
        },
        1468: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(34308);
            i.__exportStar(r(40926), t), i.__exportStar(r(88618), t)
        },
        34308: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return h
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return P
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return I
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function h(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function l(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (e) {
                        h(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function h(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function _(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function P(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        39410: function(e, t, r) {
            "use strict";
            let i;
            r.d(t, {
                EthereumProvider: function() {
                    return nj
                }
            });
            var n = r(17187),
                s = r.n(n),
                o = r(22123);
            let a = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                c = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                u = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function h(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
                    return
                }
                return t
            }

            function l(e, t = {}) {
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && e.endsWith('"') && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!u.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (a.test(e) || c.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, h)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var f = r(48764).Buffer;

            function p(e, ...t) {
                try {
                    var r;
                    return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function d(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return d(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let g = "base64:";

            function y(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function v(e) {
                return (e = y(e)) ? e + ":" : ""
            }
            let m = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem: t => e.get(t) ? ? null,
                    getItemRaw: t => e.get(t) ? ? null,
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function b(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function w(e) {
                "function" == typeof e.dispose && await p(e.dispose)
            }

            function _(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function E(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = _(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function D() {
                return i || (i = E("keyval-store", "keyval")), i
            }

            function I(e, t = D()) {
                return t("readonly", t => _(t.get(e)))
            }
            let S = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                P = e => JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3'), (e, t) => "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t);

            function C(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return P(e)
                } catch (t) {
                    return e
                }
            }

            function O(e) {
                return "string" == typeof e ? e : S(e) || ""
            }
            var x = (e = {}) => {
                let t;
                let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
                    i = e => r + e;
                return e.dbName && e.storeName && (t = E(e.dbName, e.storeName)), {
                    name: "idb-keyval",
                    options: e,
                    hasItem: async e => !(typeof await I(i(e), t) > "u"),
                    getItem: async e => await I(i(e), t) ? ? null,
                    setItem: (e, r) => (function(e, t, r = D()) {
                        return r("readwrite", r => (r.put(t, e), _(r.transaction)))
                    })(i(e), r, t),
                    removeItem: e => (function(e, t = D()) {
                        return t("readwrite", t => (t.delete(e), _(t.transaction)))
                    })(i(e), t),
                    getKeys: () => (function(e = D()) {
                        return e("readonly", e => {
                            var t;
                            if (e.getAllKeys) return _(e.getAllKeys());
                            let r = [];
                            return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                this.result && (t(this.result), this.result.continue())
                            }, _(e.transaction)).then(() => r)
                        })
                    })(t),
                    clear: () => (function(e = D()) {
                        return e("readwrite", e => (e.clear(), _(e.transaction)))
                    })(t)
                }
            };
            class A {
                constructor() {
                    this.indexedDb = function(e = {}) {
                        let t = {
                                mounts: {
                                    "": e.driver || m()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            n = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = y(r), t.watchListeners)) i(e, r)
                            },
                            s = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await b(t.mounts[e], n, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let n = new Map,
                                    s = e => {
                                        let t = n.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, n.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        n = y(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(n);
                                    s(c).items.push({
                                        key: n,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...n.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e));
                                    return p(n.hasItem, i, t)
                                },
                                getItem(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e));
                                    return p(n.getItem, i, t).then(e => l(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? p(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function(...e) {
                                        return y(e.join(":"))
                                    }(e.base, t.key),
                                    value: l(t.value)
                                }))) : Promise.all(e.items.map(t => p(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: l(e)
                                }))))),
                                getItemRaw(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e));
                                    return n.getItemRaw ? p(n.getItemRaw, i, t) : p(n.getItem, i, t).then(e => "string" == typeof e && e.startsWith(g) ? f.from(e.slice(g.length), "base64") : e)
                                },
                                async setItem(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e = y(e));
                                    o.setItem && (await p(o.setItem, s, d(t), i), o.watch || n("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        if (e.driver.setItems) return p(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: d(e.value),
                                            options: e.options
                                        })), t);
                                        e.driver.setItem && await Promise.all(e.items.map(t => p(e.driver.setItem, t.relativeKey, d(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e, i);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e = y(e));
                                    if (o.setItemRaw) await p(o.setItemRaw, s, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await p(o.setItem, s, "string" == typeof t ? t : g + f.from(t).toString("base64"), i)
                                    }
                                    o.watch || n("update", e)
                                },
                                async removeItem(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e = y(e));
                                    s.removeItem && (await p(s.removeItem, i, t), (t.removeMeta || t.removeMata) && await p(s.removeItem, i + "$", t), s.watch || n("remove", e))
                                },
                                async getMeta(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e)), s = Object.create(null);
                                    if (n.getMeta && Object.assign(s, await p(n.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await p(n.getItem, i + "$", t).then(e => l(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                                    }
                                    return s
                                },
                                setMeta(e, t, r = {}) {
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e, t = {}) {
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e, t = {}) {
                                    let r = i(e = v(e), !0),
                                        n = [],
                                        s = [];
                                    for (let e of r) {
                                        let r = (await p(e.driver.getKeys, e.relativeBase, t)).map(t => e.mountpoint + y(t)).filter(e => !n.some(t => e.startsWith(t)));
                                        s.push(...r), n = [e.mountpoint, ...n.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? s.filter(t => t.startsWith(e) && !t.endsWith("$")) : s.filter(e => !e.endsWith("$"))
                                },
                                async clear(e, t = {}) {
                                    e = v(e), await Promise.all(i(e, !1).map(async e => e.driver.clear ? p(e.driver.clear, e.relativeBase, t) : e.driver.removeItem ? Promise.all((await e.driver.getKeys(e.relativeBase || "", t)).map(r => e.driver.removeItem(r, t))) : void 0))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => w(e)))
                                },
                                watch: async e => (await s(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = v(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(b(r, n, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e, r = !0) {
                                    (e = v(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await w(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount(e = "") {
                                    let t = r(e = y(e) + ":");
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts: (e = "", t = {}) => i(e = y(e), t.parents).map(e => ({
                                    driver: e.driver,
                                    base: e.mountpoint
                                }))
                            };
                        return c
                    }({
                        driver: x({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, O(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var R = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                T = {
                    exports: {}
                };

            function N(e) {
                var t;
                return [e[0], C(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof R && R.localStorage ? T.exports = R.localStorage : "u" > typeof window && window.localStorage ? T.exports = window.localStorage : T.exports = new e
            }();
            class k {
                constructor() {
                    this.localStorage = T.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(N)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return C(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, O(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            let j = async (e, t, r) => {
                    let i = "wc_storage_version",
                        n = await t.getItem(i);
                    if (n && n >= 1) {
                        r(t);
                        return
                    }
                    let s = await e.getKeys();
                    if (!s.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; s.length;) {
                        let r = s.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), M(e, o)
                },
                M = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class L {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new k;
                    this.storage = e;
                    try {
                        let t = new A;
                        j(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
            }
            var U = r(66736);
            class q {}
            class z extends q {
                constructor(e) {
                    super()
                }
            }
            let $ = U.FIVE_SECONDS,
                B = "heartbeat_pulse";
            class F extends z {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = $, this.interval = e ? .interval || $
                }
                static async init(e) {
                    let t = new F(e);
                    return await t.init(), t
                }
                async init() {
                    await this.initialize()
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async initialize() {
                    this.intervalRef = setInterval(() => this.pulse(), (0, U.toMiliseconds)(this.interval))
                }
                pulse() {
                    this.events.emit(B)
                }
            }
            var H = r(36559),
                V = r.n(H);
            let K = {
                    level: "info"
                },
                W = "custom_context";
            class G {
                constructor(e) {
                    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null
                }
                get value() {
                    return this.nodeValue
                }
                get size() {
                    return this.sizeInBytes
                }
            }
            class Y {
                constructor(e) {
                    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0
                }
                append(e) {
                    let t = new G(e);
                    if (t.size > this.maxSizeInBytes) throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
                    for (; this.size + t.size > this.maxSizeInBytes;) this.shift();
                    this.head ? this.tail && (this.tail.next = t) : this.head = t, this.tail = t, this.lengthInNodes++, this.sizeInBytes += t.size
                }
                shift() {
                    if (!this.head) return;
                    let e = this.head;
                    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size
                }
                toArray() {
                    let e = [],
                        t = this.head;
                    for (; null !== t;) e.push(t.value), t = t.next;
                    return e
                }
                get length() {
                    return this.lengthInNodes
                }
                get size() {
                    return this.sizeInBytes
                }
                toOrderedArray() {
                    return Array.from(this)
                }[Symbol.iterator]() {
                    let e = this.head;
                    return {
                        next: () => {
                            if (!e) return {
                                done: !0,
                                value: null
                            };
                            let t = e.value;
                            return e = e.next, {
                                done: !1,
                                value: t
                            }
                        }
                    }
                }
            }
            class J {
                constructor(e, t = 1024e3) {
                    this.level = e ? ? "error", this.levelValue = H.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new Y(this.MAX_LOG_SIZE_IN_BYTES)
                }
                forwardToConsole(e, t) {
                    t === H.levels.values.error ? console.error(e) : t === H.levels.values.warn ? console.warn(e) : t === H.levels.values.debug ? console.debug(e) : t === H.levels.values.trace ? console.trace(e) : console.log(e)
                }
                appendToLogs(e) {
                    this.logs.append(O({
                        timestamp: new Date().toISOString(),
                        log: e
                    }));
                    let t = "string" == typeof e ? JSON.parse(e).level : e.level;
                    t >= this.levelValue && this.forwardToConsole(e, t)
                }
                getLogs() {
                    return this.logs
                }
                clearLogs() {
                    this.logs = new Y(this.MAX_LOG_SIZE_IN_BYTES)
                }
                getLogArray() {
                    return Array.from(this.logs)
                }
                logsToBlob(e) {
                    let t = this.getLogArray();
                    return t.push(O({
                        extraMetadata: e
                    })), new Blob(t, {
                        type: "application/json"
                    })
                }
            }
            class Q {
                constructor(e, t = 1024e3) {
                    this.baseChunkLogger = new J(e, t)
                }
                write(e) {
                    this.baseChunkLogger.appendToLogs(e)
                }
                getLogs() {
                    return this.baseChunkLogger.getLogs()
                }
                clearLogs() {
                    this.baseChunkLogger.clearLogs()
                }
                getLogArray() {
                    return this.baseChunkLogger.getLogArray()
                }
                logsToBlob(e) {
                    return this.baseChunkLogger.logsToBlob(e)
                }
                downloadLogsBlobInBrowser(e) {
                    let t = URL.createObjectURL(this.logsToBlob(e)),
                        r = document.createElement("a");
                    r.href = t, r.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(t)
                }
            }
            class X {
                constructor(e, t = 1024e3) {
                    this.baseChunkLogger = new J(e, t)
                }
                write(e) {
                    this.baseChunkLogger.appendToLogs(e)
                }
                getLogs() {
                    return this.baseChunkLogger.getLogs()
                }
                clearLogs() {
                    this.baseChunkLogger.clearLogs()
                }
                getLogArray() {
                    return this.baseChunkLogger.getLogArray()
                }
                logsToBlob(e) {
                    return this.baseChunkLogger.logsToBlob(e)
                }
            }
            var Z = Object.defineProperty,
                ee = Object.defineProperties,
                et = Object.getOwnPropertyDescriptors,
                er = Object.getOwnPropertySymbols,
                ei = Object.prototype.hasOwnProperty,
                en = Object.prototype.propertyIsEnumerable,
                es = (e, t, r) => t in e ? Z(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eo = (e, t) => {
                    for (var r in t || (t = {})) ei.call(t, r) && es(e, r, t[r]);
                    if (er)
                        for (var r of er(t)) en.call(t, r) && es(e, r, t[r]);
                    return e
                },
                ea = (e, t) => ee(e, et(t));

            function ec(e) {
                return ea(eo({}, e), {
                    level: e ? .level || K.level
                })
            }

            function eu(e, t = W) {
                return typeof e.bindings > "u" ? function(e, t = W) {
                    return e[t] || ""
                }(e, t) : e.bindings().context || ""
            }

            function eh(e, t, r = W) {
                let i = function(e, t, r = W) {
                    let i = eu(e, r);
                    return i.trim() ? `${i}/${t}` : t
                }(e, t, r);
                return function(e, t, r = W) {
                    return e[r] = t, e
                }(e.child({
                    context: i
                }), i, r)
            }
            class el extends q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class ef extends q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class ep {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class ed extends q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class eg extends q {
                constructor(e) {
                    super()
                }
            }
            class ey {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class ev extends q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class em extends q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class eb {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class ew {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class e_ {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class eE {
                constructor(e) {
                    this.client = e
                }
            }
            var eD = r(31050),
                eI = r(31416);
            let eS = "base64url",
                eP = "base58btc";

            function eC(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function eO(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? eC(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }
            var ex = r(91835);

            function eA(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            let eR = eA("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                eT = eA("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = eO((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                eN = {
                    utf8: eR,
                    "utf-8": eR,
                    hex: ex.gh.base16,
                    latin1: eT,
                    ascii: eT,
                    binary: eT,
                    ...ex.gh
                };

            function ek(e, t = "utf8") {
                let r = eN[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }

            function ej(e, t = "utf8") {
                let r = eN[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? eC(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
            }

            function eM(e) {
                return ek(ej(O(e), "utf8"), eS)
            }

            function eL(e) {
                return ["did", "key", "z" + ek(function(e, t) {
                    t || (t = e.reduce((e, t) => e + t.length, 0));
                    let r = eO(t),
                        i = 0;
                    for (let t of e) r.set(t, i), i += t.length;
                    return eC(r)
                }([ej("K36", eP), e]), eP)].join(":")
            }

            function eU(e = (0, eI.randomBytes)(32)) {
                return eD._w(e)
            }
            async function eq(e, t, r, i, n = (0, U.fromMiliseconds)(Date.now())) {
                var s, o;
                let a = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    c = {
                        iss: eL(i.publicKey),
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    u = ej([eM((s = {
                        header: a,
                        payload: c
                    }).header), eM(s.payload)].join("."), "utf8");
                return [eM((o = {
                    header: a,
                    payload: c,
                    signature: eD.Xx(i.secretKey, u)
                }).header), eM(o.payload), ek(o.signature, eS)].join(".")
            }
            r(43014);
            var ez = r(94622);
            let e$ = "INTERNAL_ERROR",
                eB = "SERVER_ERROR",
                eF = [-32700, -32600, -32601, -32602, -32603],
                eH = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [e$]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [eB]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function eV(e) {
                return Object.keys(eH).includes(e) ? eH[e] : eH[eB]
            }

            function eK(e, t, r) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${t}`) : e
            }
            var eW = r(1468);

            function eG(e = 3) {
                return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
            }

            function eY(e = 6) {
                return BigInt(eG(e))
            }

            function eJ(e, t, r) {
                return {
                    id: r || eG(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function eQ(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function eX(e, t, r) {
                var i, n, s;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (i = t) ? eV(e$) : ("string" == typeof i && (i = Object.assign(Object.assign({}, eV(eB)), {
                        message: i
                    })), void 0 !== r && (i.data = r), n = i.code, eF.includes(n) && (s = i.code, i = Object.values(eH).find(e => e.code === s) || eH[eB]), i)
                }
            }
            class eZ {}
            class e0 extends eZ {
                constructor() {
                    super()
                }
            }
            class e1 extends e0 {
                constructor(e) {
                    super()
                }
            }

            function e5(e, t) {
                let r = function(e) {
                    let t = e.match(RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return void 0 !== r && new RegExp(t).test(r)
            }

            function e3(e) {
                return e5(e, "^https?:")
            }

            function e6(e) {
                return e5(e, "^wss?:")
            }

            function e2(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function e8(e) {
                return e2(e) && "method" in e
            }

            function e4(e) {
                return e2(e) && (e9(e) || e7(e))
            }

            function e9(e) {
                return "result" in e
            }

            function e7(e) {
                return "error" in e
            }
            class te extends e1 {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict(eJ(e.method, e.params || [], e.id || eY().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            i(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            e7(e) ? i(e.error) : r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            i(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), e4(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            let tt = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                tr = e => e.split("?")[0],
                ti = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(72030);
            class tn {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !e6(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send(O(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!e6(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            n = (0, eW.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !RegExp("wss?://localhost(:d{2,5})?").test(e)
                            },
                            s = new ti(e, [], n);
                        tt() ? s.onerror = e => {
                            r(this.emitError(e.error))
                        } : s.on("error", e => {
                            r(this.emitError(e))
                        }), s.onopen = () => {
                            this.onOpen(s), t(s)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? C(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = eX(e, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return eK(e, tr(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${tr(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var ts = r(72307),
                to = r.n(ts),
                ta = r(63144),
                tc = r.n(ta),
                tu = r(34155),
                th = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        h = Math.log(256) / Math.log(a);

                    function l(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var h = r[e.charCodeAt(t)];
                                if (255 === h) return;
                                for (var l = 0, f = s - 1;
                                    (0 !== h || l < n) && -1 !== f; f--, l++) h += a * o[f] >>> 0, o[f] = h % 256 >>> 0, h = h / 256 >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                n = l, t++
                            }
                            if (" " !== e[t]) {
                                for (var p = s - n; p !== s && 0 === o[p];) p++;
                                for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * h + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                                for (var l = t[n], f = 0, p = o - 1;
                                    (0 !== l || f < i) && -1 !== p; p--, f++) l += 256 * u[p] >>> 0, u[p] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                i = f, n++
                            }
                            for (var d = o - i; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function(e) {
                            var r = l(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let tl = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                tf = e => new TextEncoder().encode(e),
                tp = e => new TextDecoder().decode(e);
            class td {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class tg {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return tv(this, e)
                }
            }
            class ty {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return tv(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let tv = (e, t) => new ty({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class tm {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new td(e, t, r), this.decoder = new tg(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let tb = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new tm(e, t, r, i),
                tw = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = th(r, t);
                    return tb({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => tl(n(e))
                    })
                },
                t_ = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                tE = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                tD = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => tb({
                    prefix: t,
                    name: e,
                    encode: e => tE(e, i, r),
                    decode: t => t_(t, i, r, e)
                });
            var tI = Object.freeze({
                    __proto__: null,
                    identity: tb({
                        prefix: "\0",
                        name: "identity",
                        encode: e => tp(e),
                        decode: e => tf(e)
                    })
                }),
                tS = Object.freeze({
                    __proto__: null,
                    base2: tD({
                        prefix: "0",
                        name: "base2",
                        alphabet: "01",
                        bitsPerChar: 1
                    })
                }),
                tP = Object.freeze({
                    __proto__: null,
                    base8: tD({
                        prefix: "7",
                        name: "base8",
                        alphabet: "01234567",
                        bitsPerChar: 3
                    })
                }),
                tC = Object.freeze({
                    __proto__: null,
                    base10: tw({
                        prefix: "9",
                        name: "base10",
                        alphabet: "0123456789"
                    })
                }),
                tO = Object.freeze({
                    __proto__: null,
                    base16: tD({
                        prefix: "f",
                        name: "base16",
                        alphabet: "0123456789abcdef",
                        bitsPerChar: 4
                    }),
                    base16upper: tD({
                        prefix: "F",
                        name: "base16upper",
                        alphabet: "0123456789ABCDEF",
                        bitsPerChar: 4
                    })
                });
            let tx = tD({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                tA = tD({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                tR = tD({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                tT = tD({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                tN = tD({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                tk = tD({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                });
            var tj = Object.freeze({
                    __proto__: null,
                    base32: tx,
                    base32upper: tA,
                    base32pad: tR,
                    base32padupper: tT,
                    base32hex: tN,
                    base32hexupper: tk,
                    base32hexpad: tD({
                        prefix: "t",
                        name: "base32hexpad",
                        alphabet: "0123456789abcdefghijklmnopqrstuv=",
                        bitsPerChar: 5
                    }),
                    base32hexpadupper: tD({
                        prefix: "T",
                        name: "base32hexpadupper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                        bitsPerChar: 5
                    }),
                    base32z: tD({
                        prefix: "h",
                        name: "base32z",
                        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                        bitsPerChar: 5
                    })
                }),
                tM = Object.freeze({
                    __proto__: null,
                    base36: tw({
                        prefix: "k",
                        name: "base36",
                        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                    }),
                    base36upper: tw({
                        prefix: "K",
                        name: "base36upper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    })
                }),
                tL = Object.freeze({
                    __proto__: null,
                    base58btc: tw({
                        name: "base58btc",
                        prefix: "z",
                        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                    }),
                    base58flickr: tw({
                        name: "base58flickr",
                        prefix: "Z",
                        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                    })
                });
            let tU = tD({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            });
            var tq = Object.freeze({
                __proto__: null,
                base64: tU,
                base64pad: tD({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                base64url: tD({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                base64urlpad: tD({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                })
            });
            let tz = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                t$ = tz.reduce((e, t, r) => (e[r] = t, e), []),
                tB = tz.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
            var tF = Object.freeze({
                __proto__: null,
                base256emoji: tb({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += t$[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = tB[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                })
            });

            function tH(e, t) {
                var r, i = 0,
                    t = t || 0,
                    n = 0,
                    s = t,
                    o = e.length;
                do {
                    if (s >= o) throw tH.bytes = 0, RangeError("Could not decode varint");
                    r = e[s++], i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n), n += 7
                } while (r >= 128);
                return tH.bytes = s - t, i
            }
            var tV = function e(t, r, i) {
                r = r || [], i = i || 0;
                for (var n = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                return r[i] = 0 | t, e.bytes = i - n + 1, r
            };
            let tK = (e, t, r = 0) => (tV(e, t, r), t),
                tW = e => e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10,
                tG = (e, t) => {
                    let r = t.byteLength,
                        i = tW(e),
                        n = i + tW(r),
                        s = new Uint8Array(n + r);
                    return tK(e, s, 0), tK(r, s, i), s.set(t, n), new tY(e, r, t, s)
                };
            class tY {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let tJ = ({
                name: e,
                code: t,
                encode: r
            }) => new tQ(e, t, r);
            class tQ {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? tG(this.code, t) : t.then(e => tG(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let tX = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
            var tZ = Object.freeze({
                    __proto__: null,
                    sha256: tJ({
                        name: "sha2-256",
                        code: 18,
                        encode: tX("SHA-256")
                    }),
                    sha512: tJ({
                        name: "sha2-512",
                        code: 19,
                        encode: tX("SHA-512")
                    })
                }),
                t0 = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: tl,
                        digest: e => tG(0, tl(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let t1 = { ...tI,
                ...tS,
                ...tP,
                ...tC,
                ...tO,
                ...tj,
                ...tM,
                ...tL,
                ...tq,
                ...tF
            };

            function t5(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...tZ,
                ...t0
            });
            let t3 = t5("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                t6 = t5("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                t2 = {
                    utf8: t3,
                    "utf-8": t3,
                    hex: t1.base16,
                    latin1: t6,
                    ascii: t6,
                    binary: t6,
                    ...t1
                },
                t8 = "core",
                t4 = `wc@2:${t8}:`,
                t9 = {
                    logger: "error"
                },
                t7 = {
                    database: ":memory:"
                },
                re = "client_ed25519_seed",
                rt = U.ONE_DAY,
                rr = U.SIX_HOURS,
                ri = "wss://relay.walletconnect.com",
                rn = "wss://relay.walletconnect.org",
                rs = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                ro = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                ra = U.ONE_SECOND,
                rc = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                ru = 1e3 * U.FIVE_SECONDS,
                rh = {
                    wc_pairingDelete: {
                        req: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: U.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: U.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                rl = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                rf = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                rp = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                rd = "verify-api",
                rg = "https://verify.walletconnect.com",
                ry = "https://verify.walletconnect.org",
                rv = [rg, ry];
            class rm {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = t4, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = eh(t, this.name)
                }
                get context() {
                    return eu(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KCv)(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IPd)(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rb {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => (this.isInitialized(), eL(eU(await this.getClientSeed()).publicKey)), this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = (0, o.Au2)();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = eU(await this.getClientSeed()),
                            r = (0, o.jdp)();
                        return await eq(r, e, rt, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            n = (0, o.m$A)(i, t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || (0, o.YmJ)(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.ENt)(r),
                            n = O(t);
                        if ((0, o.Q8x)(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, o.HIp)({
                            type: a,
                            symKey: s,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.Llj)(t, r);
                        if ((0, o.Q8x)(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = (0, o.peR)({
                                    symKey: r,
                                    encoded: t
                                });
                            return C(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = (0, o.vBi)(e);
                        return (0, o.WGe)(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = (0, o.vBi)(e);
                        return t.senderPublicKey ? (0, ez.BB)(t.senderPublicKey, o.AWt) : void 0
                    }, this.core = e, this.logger = eh(t, this.name), this.keychain = r || new rm(this.core, this.logger)
                }
                get context() {
                    return eu(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(re)
                    } catch {
                        e = (0, o.jdp)(), await this.keychain.set(re, e)
                    }
                    return function(e, t = "utf8") {
                        let r = t2[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rw extends ep {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = t4, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = (0, o.rjm)(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[(0, o.rjm)(t)]), this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = eh(e, this.name), this.core = t
                }
                get context() {
                    return eu(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KCv)(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IPd)(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class r_ extends ed {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, U.toMiliseconds)(U.ONE_MINUTE), this.failedPublishTimeout = (0, U.toMiliseconds)(U.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        let n = r ? .ttl || rr,
                            s = (0, o._HE)(r),
                            a = r ? .prompt || !1,
                            c = r ? .tag || 0,
                            u = r ? .id || eY().toString(),
                            h = {
                                topic: e,
                                message: t,
                                opts: {
                                    ttl: n,
                                    relay: s,
                                    prompt: a,
                                    tag: c,
                                    id: u
                                }
                            },
                            l = `Failed to publish payload, please try again. id:${u} tag:${c}`,
                            f = Date.now(),
                            p, d = 1;
                        try {
                            for (; void 0 === p;) {
                                if (Date.now() - f > this.publishTimeout) throw Error(l);
                                this.logger.trace({
                                    id: u,
                                    attempts: d
                                }, `publisher.publish - attempt ${d}`), p = await await (0, o.hFY)(this.rpcPublish(e, t, n, s, a, c, u).catch(e => this.logger.warn(e)), this.publishTimeout, l), d++, p || await new Promise(e => setTimeout(e, this.failedPublishTimeout))
                            }
                            this.relayer.events.emit(rs.publish, h), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    id: u,
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            if (this.logger.debug("Failed to Publish Payload"), this.logger.error(e), null != (i = r ? .internal) && i.throwOnFailedPublish) throw e;
                            this.queue.set(u, h)
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = eh(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return eu(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, a) {
                    var c, u, h, l;
                    let f = {
                        method: (0, o.cOS)(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: a
                    };
                    return (0, o.o8e)(null == (c = f.params) ? void 0 : c.prompt) && (null == (u = f.params) || delete u.prompt), (0, o.o8e)(null == (h = f.params) ? void 0 : h.tag) && (null == (l = f.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: f
                    }), this.relayer.request(f)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(B, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(rs.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(rs.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class rE {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var rD = Object.defineProperty,
                rI = Object.defineProperties,
                rS = Object.getOwnPropertyDescriptors,
                rP = Object.getOwnPropertySymbols,
                rC = Object.prototype.hasOwnProperty,
                rO = Object.prototype.propertyIsEnumerable,
                rx = (e, t, r) => t in e ? rD(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rA = (e, t) => {
                    for (var r in t || (t = {})) rC.call(t, r) && rx(e, r, t[r]);
                    if (rP)
                        for (var r of rP(t)) rO.call(t, r) && rx(e, r, t[r]);
                    return e
                },
                rR = (e, t) => rI(e, rS(t));
            class rT extends ev {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new rE, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = t4, this.subscribeTimeout = (0, U.toMiliseconds)(U.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = (0, o._HE)(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return "string" == typeof n && (this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            })), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => {
                        if (this.topics.includes(e)) return !0;
                        let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
                        return await new Promise((r, i) => {
                            let n = new U.Watch;
                            n.start(t);
                            let s = setInterval(() => {
                                !this.pending.has(e) && this.topics.includes(e) && (clearInterval(s), n.stop(t), r(!0)), n.elapsed(t) >= ru && (clearInterval(s), n.stop(t), i(Error("Subscription resolution timeout")))
                            }, this.pollingInterval)
                        }).catch(() => !1)
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.start = async () => {
                        await this.onConnect()
                    }, this.stop = async () => {
                        await this.onDisconnect()
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = eh(t, this.name), this.clientId = ""
                }
                get context() {
                    return eu(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = (0, o._HE)(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = (0, o.D6H)("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: (0, o.cOS)(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, o.hFY)(this.relayer.request(r).catch(e => this.logger.warn(e)), this.subscribeTimeout) ? (0, o.rjm)(e + this.clientId) : null
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(rs.connection_stalled)
                    }
                    return null
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: (0, o.cOS)(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, o.hFY)(this.relayer.request(r).catch(e => this.logger.warn(e)), this.subscribeTimeout)
                    } catch {
                        this.relayer.events.emit(rs.connection_stalled)
                    }
                }
                async rpcBatchFetchMessages(e) {
                    let t;
                    if (!e.length) return;
                    let r = e[0].relay,
                        i = {
                            method: (0, o.cOS)(r.protocol).batchFetchMessages,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    });
                    try {
                        t = await await (0, o.hFY)(this.relayer.request(i).catch(e => this.logger.warn(e)), this.subscribeTimeout)
                    } catch {
                        this.relayer.events.emit(rs.connection_stalled)
                    }
                    return t
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: (0, o.cOS)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, rR(rA({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, rA({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t)
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, rA({}, t)), this.topicMap.set(t.topic, e), this.events.emit(rc.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(rc.deleted, rR(rA({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(rc.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchFetchMessages(e), await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(rc.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    (0, o.qt8)(t) && this.onBatchSubscribe(t.map((t, r) => rR(rA({}, e[r]), {
                        id: t
                    })))
                }
                async batchFetchMessages(e) {
                    if (!e.length) return;
                    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
                    let t = await this.rpcBatchFetchMessages(e);
                    t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages))
                }
                async onConnect() {
                    await this.restart(), this.onEnable()
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || !this.relayer.connected) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = [])
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(B, async () => {
                        await this.checkPending()
                    }), this.events.on(rc.created, async e => {
                        let t = rc.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(rc.deleted, async e => {
                        let t = rc.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var rN = Object.defineProperty,
                rk = Object.getOwnPropertySymbols,
                rj = Object.prototype.hasOwnProperty,
                rM = Object.prototype.propertyIsEnumerable,
                rL = (e, t, r) => t in e ? rN(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rU = (e, t) => {
                    for (var r in t || (t = {})) rj.call(t, r) && rL(e, r, t[r]);
                    if (rk)
                        for (var r of rk(t)) rM.call(t, r) && rL(e, r, t[r]);
                    return e
                };
            class rq extends eg {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = (0, U.toMiliseconds)(U.THIRTY_SECONDS + U.ONE_SECOND), this.request = async e => {
                        var t, r;
                        this.logger.debug("Publishing Request Payload");
                        let i = e.id || eY().toString();
                        await this.toEstablishConnection();
                        try {
                            let n = this.provider.request(e);
                            this.requestsInFlight.set(i, {
                                promise: n,
                                request: e
                            }), this.logger.trace({
                                id: i,
                                method: e.method,
                                topic: null == (t = e.params) ? void 0 : t.topic
                            }, "relayer.request - attempt to publish...");
                            let s = await new Promise(async (e, t) => {
                                let r = () => {
                                    t(Error(`relayer.request - publish interrupted, id: ${i}`))
                                };
                                this.provider.on(ro.disconnect, r);
                                let s = await n;
                                this.provider.off(ro.disconnect, r), e(s)
                            });
                            return this.logger.trace({
                                id: i,
                                method: e.method,
                                topic: null == (r = e.params) ? void 0 : r.topic
                            }, "relayer.request - published"), s
                        } catch (e) {
                            throw this.logger.debug(`Failed to Publish Request: ${i}`), e
                        } finally {
                            this.requestsInFlight.delete(i)
                        }
                    }, this.resetPingTimeout = () => {
                        if ((0, o.UGU)()) try {
                            clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
                                var e, t, r;
                                null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) || r.terminate()
                            }, this.heartBeatTimeout)
                        } catch (e) {
                            this.logger.warn(e)
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e), this.resetPingTimeout()
                    }, this.onConnectHandler = () => {
                        this.startPingTimeout(), this.events.emit(rs.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(rs.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(ro.payload, this.onPayloadHandler), this.provider.on(ro.connect, this.onConnectHandler), this.provider.on(ro.disconnect, this.onDisconnectHandler), this.provider.on(ro.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? eh(e.logger, this.name) : V()(ec({
                        level: e.logger || "error"
                    })), this.messages = new rw(this.logger, e.core), this.subscriber = new rT(this, this.logger), this.publisher = new r_(this, this.logger), this.relayUrl = e ? .relayUrl || ri, this.projectId = e.projectId, this.bundleId = (0, o.X_B)(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${rn}...`), await this.restartTransport(rn)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && 0 === this.subscriber.pending.size && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return eu(this.logger)
                }
                get connected() {
                    var e, t, r;
                    return (null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.readyState) === 1
                }
                get connecting() {
                    var e, t, r;
                    return (null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.readyState) === 0
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    this.isInitialized();
                    let i = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "",
                        n, s = t => {
                            t.topic === e && (this.subscriber.off(rc.created, s), n())
                        };
                    return await Promise.all([new Promise(e => {
                        n = e, this.subscriber.on(rc.created, s)
                    }), new Promise(async r => {
                        i = await this.subscriber.subscribe(e, t) || i, r()
                    })]), i
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportDisconnect() {
                    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
                        await Promise.all(Array.from(this.requestsInFlight.values()).map(e => e.promise))
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    this.hasExperiencedNetworkDisruption || this.connected ? await (0, o.hFY)(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect()
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, await this.transportDisconnect()
                }
                async transportOpen(e) {
                    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
                    try {
                        await new Promise(async (e, t) => {
                            let r = () => {
                                this.provider.off(ro.disconnect, r), t(Error("Connection interrupted while trying to subscribe"))
                            };
                            this.provider.on(ro.disconnect, r), await (0, o.hFY)(this.provider.connect(), (0, U.toMiliseconds)(U.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch(e => {
                                t(e)
                            }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, e()
                        })
                    } catch (e) {
                        if (this.logger.error(e), this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(e.message)) throw e
                    } finally {
                        this.connectionAttemptInProgress = !1
                    }
                }
                async restartTransport(e) {
                    this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, o.Ggh)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                async handleBatchMessageEvents(e) {
                    if (e ? .length === 0) {
                        this.logger.trace("Batch message events is empty. Ignoring...");
                        return
                    }
                    let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
                    for (let e of (this.logger.trace(`Batch of ${t.length} message events sorted`), t)) try {
                        await this.onMessageEvent(e)
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    this.logger.trace(`Batch of ${t.length} message events processed`)
                }
                startPingTimeout() {
                    var e, t, r, i, n;
                    if ((0, o.UGU)()) try {
                        null != (t = null == (e = this.provider) ? void 0 : e.connection) && t.socket && (null == (n = null == (i = null == (r = this.provider) ? void 0 : r.connection) ? void 0 : i.socket) || n.once("ping", () => {
                            this.resetPingTimeout()
                        })), this.resetPingTimeout()
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new te(new tn((0, o.$0m)({
                        sdkVersion: "2.13.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), e8(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(rU({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else e4(e) && this.events.emit(rs.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(rs.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = eQ(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(ro.payload, this.onPayloadHandler), this.provider.off(ro.connect, this.onConnectHandler), this.provider.off(ro.disconnect, this.onDisconnectHandler), this.provider.off(ro.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout)
                }
                async registerEventListeners() {
                    let e = await (0, o.Ggh)();
                    (0, o.uwg)(async t => {
                        e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
                    })
                }
                async onProviderDisconnect() {
                    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(rs.disconnect), this.connectionAttemptInProgress = !1, this.transportExplicitlyClosed || setTimeout(async () => {
                        await this.transportOpen().catch(e => this.logger.error(e))
                    }, (0, U.toMiliseconds)(ra))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    await this.confirmOnlineStateOrThrow(), this.connected || (this.connectionAttemptInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.connected && (clearInterval(t), e())
                        }, this.connectionStatusPollingInterval)
                    }), await this.transportOpen())
                }
            }
            var rz = Object.defineProperty,
                r$ = Object.getOwnPropertySymbols,
                rB = Object.prototype.hasOwnProperty,
                rF = Object.prototype.propertyIsEnumerable,
                rH = (e, t, r) => t in e ? rz(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rV = (e, t) => {
                    for (var r in t || (t = {})) rB.call(t, r) && rH(e, r, t[r]);
                    if (r$)
                        for (var r of r$(t)) rF.call(t, r) && rH(e, r, t[r]);
                    return e
                };
            class rK extends ey {
                constructor(e, t, r, i = t4, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = t4, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            this.getKey && null !== e && !(0, o.o8e)(e) ? this.map.set(this.getKey(e), e) : (0, o.xWS)(e) ? this.map.set(e.id, e) : (0, o.h1R)(e) && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => to()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = rV(rV({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), this.addToRecentlyDeleted(e), await this.persist())
                    }, this.logger = eh(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return eu(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                addToRecentlyDeleted(e) {
                    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        if (this.recentlyDeleted.includes(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                            throw this.logger.error(t), Error(t)
                        }
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rW {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(s()), this.initialized = !1, this.storagePrefix = t4, this.ignoredPayloadTypes = [o.rVF], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async e => {
                        this.isInitialized();
                        let t = (0, o.jdp)(),
                            r = await this.core.crypto.setSymKey(t),
                            i = (0, o.gn4)(U.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            s = (0, o.Bvr)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: r,
                                symKey: t,
                                relay: n,
                                expiryTimestamp: i,
                                methods: e ? .methods
                            });
                        return this.core.expirer.set(r, i), await this.pairings.set(r, {
                            topic: r,
                            expiry: i,
                            relay: n,
                            active: !1
                        }), await this.core.relayer.subscribe(r), {
                            topic: r,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i,
                            expiryTimestamp: n,
                            methods: s
                        } = (0, o.heJ)(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        let a = n || (0, o.gn4)(U.FIVE_MINUTES),
                            c = {
                                topic: t,
                                relay: i,
                                expiry: a,
                                active: !1,
                                methods: s
                            };
                        return this.core.expirer.set(t, a), await this.pairings.set(t, c), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(rl.create, c), this.core.crypto.keychain.has(t) || await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        }), c
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = (0, o.gn4)(U.THIRTY_DAYS);
                        this.core.expirer.set(e, t), await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        })
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, o.H1S)();
                            this.events.once((0, o.E0T)("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, o.D6H)("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = eJ(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = rh[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = eQ(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = rh[(await this.core.history.get(t, e)).request.method].res;
                        await this.core.relayer.publish(t, n, s), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = eX(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = rh[s.request.method] ? rh[s.request.method].res : rh.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, o.D6H)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => (0, o.BwD)(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(rl.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            e9(t) ? this.events.emit((0, o.E0T)("pairing_ping", r), {}) : e7(t) && this.events.emit((0, o.E0T)("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(rl.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = (0, o.D6H)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error((0, o.D6H)("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (!(0, o.jvJ)(e.uri)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                        let r = (0, o.heJ)(e.uri);
                        if (!(null != (t = r ? .relay) && t.protocol)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                        if (null != r && r.expiryTimestamp && (0, U.toMiliseconds)(r ? .expiryTimestamp) < Date.now()) {
                            let {
                                message: e
                            } = (0, o.kCb)("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!(0, o.M_r)(e, !1)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if ((0, o.BwD)(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = (0, o.kCb)("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = eh(t, this.name), this.pairings = new rK(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return eu(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(rs.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            e8(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : e4(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(rp.expired, async e => {
                        let {
                            topic: t
                        } = (0, o.iPz)(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(rl.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class rG extends ef {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = t4, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: (0, o.gn4)(U.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.persist(), this.events.emit(rf.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = e7(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.persist(), this.events.emit(rf.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(rf.deleted, r))
                        }), this.persist()
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = eh(t, this.name)
                }
                get context() {
                    return eu(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: eJ(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(rf.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(rf.created, e => {
                        let t = rf.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        })
                    }), this.events.on(rf.updated, e => {
                        let t = rf.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        })
                    }), this.events.on(rf.deleted, e => {
                        let t = rf.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        })
                    }), this.core.heartbeat.on(B, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.isInitialized();
                        let e = !1;
                        this.records.forEach(t => {
                            (0, U.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(rf.deleted, t, !1), e = !0)
                        }), e && this.persist()
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rY extends em {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = t4, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(rp.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(rp.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = eh(t, this.name)
                }
                get context() {
                    return eu(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, o.Z42)(e);
                    if ("number" == typeof e) return (0, o.GqV)(e);
                    let {
                        message: t
                    } = (0, o.kCb)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(rp.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.warn(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, U.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(rp.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(B, () => this.checkExpirations()), this.events.on(rp.created, e => {
                        let t = rp.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(rp.expired, e => {
                        let t = rp.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(rp.deleted, e => {
                        let t = rp.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rJ extends eb {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = rd, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || (0, o.b$m)() || !(0, o.jUY)()) return;
                        let t = this.getVerifyUrl(e ? .verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = ry;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(e ? .verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, ry)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * U.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.onInit(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            let i = document.getElementById(rd);
                            if (i) return this.iframe = i, this.onInit(), r();
                            window.addEventListener("message", t);
                            let n = document.createElement("iframe");
                            n.id = rd, n.src = `${this.verifyUrl}/${this.projectId}`, n.style.display = "none", document.body.append(n), this.iframe = n, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, U.toMiliseconds)(U.FIVE_SECONDS)))])
                    }, this.onInit = () => {
                        this.initialized = !0, this.processQueue()
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || rg;
                        return rv.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${rg}`), t = rg), t
                    }, this.logger = eh(t, this.name), this.verifyUrl = rg, this.abortController = new AbortController, this.isDevEnv = (0, o.UGU)() && tu.env.IS_VITEST
                }
                get context() {
                    return eu(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, U.toMiliseconds)(e))
                }
            }
            class rQ extends ew {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = async e => {
                        let {
                            clientId: t,
                            token: r,
                            notificationType: i,
                            enableEncrypted: n = !1
                        } = e, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                        await tc()(s, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: t,
                                type: i,
                                token: r,
                                always_raw: n
                            })
                        })
                    }, this.logger = eh(t, this.context)
                }
            }
            var rX = Object.defineProperty,
                rZ = Object.getOwnPropertySymbols,
                r0 = Object.prototype.hasOwnProperty,
                r1 = Object.prototype.propertyIsEnumerable,
                r5 = (e, t, r) => t in e ? rX(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                r3 = (e, t) => {
                    for (var r in t || (t = {})) r0.call(t, r) && r5(e, r, t[r]);
                    if (rZ)
                        for (var r of rZ(t)) r1.call(t, r) && r5(e, r, t[r]);
                    return e
                };
            class r6 extends el {
                constructor(e) {
                    var t, r;
                    super(e), this.protocol = "wc", this.version = 2, this.name = t8, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || ri, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let {
                        logger: i,
                        chunkLoggerController: s
                    } = "u" > typeof(r = {
                        opts: ec({
                            level: "string" == typeof e ? .logger && e.logger ? e.logger : t9.logger
                        }),
                        maxSizeInBytes: e ? .maxLogBlobSizeInBytes,
                        loggerOverride: e ? .logger
                    }).loggerOverride && "string" != typeof r.loggerOverride ? {
                        logger: r.loggerOverride,
                        chunkLoggerController: null
                    } : "u" > typeof window ? function(e) {
                        var t, r;
                        let i = new Q(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                        return {
                            logger: V()(ea(eo({}, e.opts), {
                                level: "trace",
                                browser: ea(eo({}, null == (r = e.opts) ? void 0 : r.browser), {
                                    write: e => i.write(e)
                                })
                            })),
                            chunkLoggerController: i
                        }
                    }(r) : function(e) {
                        var t;
                        let r = new X(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                        return {
                            logger: V()(ea(eo({}, e.opts), {
                                level: "trace"
                            }), r),
                            chunkLoggerController: r
                        }
                    }(r);
                    this.logChunkController = s, null != (t = this.logChunkController) && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
                        var e, t;
                        null != (e = this.logChunkController) && e.downloadLogsBlobInBrowser && (null == (t = this.logChunkController) || t.downloadLogsBlobInBrowser({
                            clientId: await this.crypto.getClientId()
                        }))
                    }), this.logger = eh(i, this.name), this.heartbeat = new F, this.crypto = new rb(this, this.logger, e ? .keychain), this.history = new rG(this, this.logger), this.expirer = new rY(this, this.logger), this.storage = null != e && e.storage ? e.storage : new L(r3(r3({}, t7), e ? .storageOptions)), this.relayer = new rq({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new rW(this, this.logger), this.verify = new rJ(this.projectId || "", this.logger), this.echoClient = new rQ(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new r6(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return eu(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async getLogsBlob() {
                    var e;
                    return null == (e = this.logChunkController) ? void 0 : e.logsToBlob({
                        clientId: await this.crypto.getClientId()
                    })
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let r2 = "client",
                r8 = `wc@2:${r2}:`,
                r4 = {
                    name: r2,
                    logger: "error"
                },
                r9 = "WALLETCONNECT_DEEPLINK_CHOICE",
                r7 = "Proposal expired",
                ie = U.SEVEN_DAYS,
                it = {
                    wc_sessionPropose: {
                        req: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: U.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: U.ONE_DAY,
                            prompt: !1,
                            tag: 1115
                        }
                    },
                    wc_sessionAuthenticate: {
                        req: {
                            ttl: U.ONE_HOUR,
                            prompt: !0,
                            tag: 1116
                        },
                        res: {
                            ttl: U.ONE_HOUR,
                            prompt: !1,
                            tag: 1117
                        }
                    }
                },
                ir = {
                    min: U.FIVE_MINUTES,
                    max: U.SEVEN_DAYS
                },
                ii = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                is = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
                io = "wc@1.5:auth:",
                ia = `${io}:PUB_KEY`;
            var ic = Object.defineProperty,
                iu = Object.defineProperties,
                ih = Object.getOwnPropertyDescriptors,
                il = Object.getOwnPropertySymbols,
                ip = Object.prototype.hasOwnProperty,
                id = Object.prototype.propertyIsEnumerable,
                ig = (e, t, r) => t in e ? ic(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iy = (e, t) => {
                    for (var r in t || (t = {})) ip.call(t, r) && ig(e, r, t[r]);
                    if (il)
                        for (var r of il(t)) id.call(t, r) && ig(e, r, t[r]);
                    return e
                },
                iv = (e, t) => iu(e, ih(t));
            class im extends eE {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(s()), this.initialized = !1, this.requestQueue = {
                        state: ii.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: ii.idle,
                        queue: []
                    }, this.requestQueueDelay = U.ONE_SECOND, this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(it)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, U.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = iv(iy({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: a
                        } = t, c = r, u, h = !1;
                        try {
                            c && (h = this.client.core.pairing.pairings.get(c).active)
                        } catch (e) {
                            throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`), e
                        }
                        if (!c || !h) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, u = t
                        }
                        if (!c) {
                            let {
                                message: e
                            } = (0, o.kCb)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw Error(e)
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            f = it.wc_sessionPropose.req.ttl || U.FIVE_MINUTES,
                            p = (0, o.gn4)(f),
                            d = iy({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: p
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: g,
                                resolve: y,
                                done: v
                            } = (0, o.H1S)(f, r7);
                        this.events.once((0, o.E0T)("session_connect"), async ({
                            error: e,
                            session: t
                        }) => {
                            if (e) g(e);
                            else if (t) {
                                t.self.publicKey = l;
                                let e = iv(iy({}, t), {
                                    requiredNamespaces: d.requiredNamespaces,
                                    optionalNamespaces: d.optionalNamespaces
                                });
                                await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                                    topic: c,
                                    metadata: t.peer.metadata
                                }), y(e)
                            }
                        });
                        let m = await this.sendRequest({
                            topic: c,
                            method: "wc_sessionPropose",
                            params: d,
                            throwOnFailedPublish: !0
                        });
                        return await this.setProposal(m, iy({
                            id: m
                        }, d)), {
                            uri: u,
                            approval: v
                        }
                    }, this.pair = async e => {
                        await this.isInitialized();
                        try {
                            return await this.client.core.pairing.pair(e)
                        } catch (e) {
                            throw this.client.logger.error("pair() failed"), e
                        }
                    }, this.approve = async e => {
                        let t;
                        await this.isInitialized();
                        try {
                            await this.isValidApprove(e)
                        } catch (e) {
                            throw this.client.logger.error("approve() -> isValidApprove() failed"), e
                        }
                        let {
                            id: r,
                            relayProtocol: i,
                            namespaces: n,
                            sessionProperties: s,
                            sessionConfig: a
                        } = e;
                        try {
                            t = this.client.proposal.get(r)
                        } catch (e) {
                            throw this.client.logger.error(`approve() -> proposal.get(${r}) failed`), e
                        }
                        let {
                            pairingTopic: c,
                            proposer: u,
                            requiredNamespaces: h,
                            optionalNamespaces: l
                        } = t;
                        c = c || "";
                        let f = await this.client.core.crypto.generateKeyPair(),
                            p = u.publicKey,
                            d = await this.client.core.crypto.generateSharedKey(f, p),
                            g = iy(iy({
                                relay: {
                                    protocol: i ? ? "irn"
                                },
                                namespaces: n,
                                pairingTopic: c,
                                controller: {
                                    publicKey: f,
                                    metadata: this.client.metadata
                                },
                                expiry: (0, o.gn4)(ie)
                            }, s && {
                                sessionProperties: s
                            }), a && {
                                sessionConfig: a
                            });
                        await this.client.core.relayer.subscribe(d);
                        let y = iv(iy({}, g), {
                            topic: d,
                            requiredNamespaces: h,
                            optionalNamespaces: l,
                            pairingTopic: c,
                            acknowledged: !1,
                            self: g.controller,
                            peer: {
                                publicKey: u.publicKey,
                                metadata: u.metadata
                            },
                            controller: f
                        });
                        await this.client.session.set(d, y);
                        try {
                            await this.sendResult({
                                id: r,
                                topic: c,
                                result: {
                                    relay: {
                                        protocol: i ? ? "irn"
                                    },
                                    responderPublicKey: f
                                },
                                throwOnFailedPublish: !0
                            }), await this.sendRequest({
                                topic: d,
                                method: "wc_sessionSettle",
                                params: g,
                                throwOnFailedPublish: !0
                            })
                        } catch (e) {
                            throw this.client.logger.error(e), this.client.session.delete(d, (0, o.D6H)("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(d), e
                        }
                        return await this.client.core.pairing.updateMetadata({
                            topic: c,
                            metadata: u.metadata
                        }), await this.client.proposal.delete(r, (0, o.D6H)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: c
                        }), await this.setExpiry(d, (0, o.gn4)(ie)), {
                            topic: d,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(d)), 500))
                        }
                    }, this.reject = async e => {
                        let t;
                        await this.isInitialized();
                        try {
                            await this.isValidReject(e)
                        } catch (e) {
                            throw this.client.logger.error("reject() -> isValidReject() failed"), e
                        }
                        let {
                            id: r,
                            reason: i
                        } = e;
                        try {
                            t = this.client.proposal.get(r).pairingTopic
                        } catch (e) {
                            throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`), e
                        }
                        t && (await this.sendError({
                            id: r,
                            topic: t,
                            error: i
                        }), await this.client.proposal.delete(r, (0, o.D6H)("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidUpdate(e)
                        } catch (e) {
                            throw this.client.logger.error("update() -> isValidUpdate() failed"), e
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e, {
                            done: i,
                            resolve: n,
                            reject: s
                        } = (0, o.H1S)(), a = eG(), c = eY().toString(), u = this.client.session.get(t).namespaces;
                        return this.events.once((0, o.E0T)("session_update", a), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            },
                            throwOnFailedPublish: !0,
                            clientRpcId: a,
                            relayRpcId: c
                        }).catch(e => {
                            this.client.logger.error(e), this.client.session.update(t, {
                                namespaces: u
                            }), s(e)
                        }), {
                            acknowledged: i
                        }
                    }, this.extend = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidExtend(e)
                        } catch (e) {
                            throw this.client.logger.error("extend() -> isValidExtend() failed"), e
                        }
                        let {
                            topic: t
                        } = e, r = eG(), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = (0, o.H1S)();
                        return this.events.once((0, o.E0T)("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, (0, o.gn4)(ie)), this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {},
                            clientRpcId: r,
                            throwOnFailedPublish: !0
                        }).catch(e => {
                            s(e)
                        }), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidRequest(e)
                        } catch (e) {
                            throw this.client.logger.error("request() -> isValidRequest() failed"), e
                        }
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n = it.wc_sessionRequest.req.ttl
                        } = e, s = this.client.session.get(i), a = eG(), c = eY().toString(), {
                            done: u,
                            resolve: h,
                            reject: l
                        } = (0, o.H1S)(n, "Request expired. Please try again.");
                        return this.events.once((0, o.E0T)("session_request", a), ({
                            error: e,
                            result: t
                        }) => {
                            e ? l(e) : h(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: a,
                                relayRpcId: c,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: iv(iy({}, r), {
                                        expiryTimestamp: (0, o.gn4)(n)
                                    }),
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => l(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: a
                            }), e()
                        }), new Promise(async e => {
                            var t;
                            if (!(null != (t = s.sessionConfig) && t.disableDeepLink)) {
                                let e = await (0, o.bW6)(this.client.core.storage, r9);
                                (0, o.HhN)({
                                    id: a,
                                    topic: i,
                                    wcDeepLink: e
                                })
                            }
                            e()
                        }), u()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        e9(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }) : e7(r) && await this.sendError({
                            id: i,
                            topic: t,
                            error: r.error
                        }), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidPing(e)
                        } catch (e) {
                            throw this.client.logger.error("ping() -> isValidPing() failed"), e
                        }
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = eG(),
                                r = eY().toString(),
                                {
                                    done: i,
                                    resolve: n,
                                    reject: s
                                } = (0, o.H1S)();
                            this.events.once((0, o.E0T)("session_ping", e), ({
                                error: e
                            }) => {
                                e ? s(e) : n()
                            }), await Promise.all([this.sendRequest({
                                topic: t,
                                method: "wc_sessionPing",
                                params: {},
                                throwOnFailedPublish: !0,
                                clientRpcId: e,
                                relayRpcId: r
                            }), i()])
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e, n = eY().toString();
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            },
                            throwOnFailedPublish: !0,
                            relayRpcId: n
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: (0, o.D6H)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession({
                            topic: t,
                            emitEvent: !1
                        });
                        else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({
                            topic: t
                        });
                        else {
                            let {
                                message: e
                            } = (0, o.kCb)("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
                            throw Error(e)
                        }
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, o.Ih8)(t, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async e => {
                        this.isInitialized(), this.isValidAuthenticate(e);
                        let {
                            chains: t,
                            statement: r = "",
                            uri: i,
                            domain: n,
                            nonce: s,
                            type: a,
                            exp: c,
                            nbf: u,
                            methods: h = [],
                            expiry: l
                        } = e, f = [...e.resources || []], {
                            topic: p,
                            uri: d
                        } = await this.client.core.pairing.create({
                            methods: ["wc_sessionAuthenticate"]
                        });
                        this.client.logger.info({
                            message: "Generated new pairing",
                            pairing: {
                                topic: p,
                                uri: d
                            }
                        });
                        let g = await this.client.core.crypto.generateKeyPair(),
                            y = (0, o.YmJ)(g);
                        if (await Promise.all([this.client.auth.authKeys.set(ia, {
                                responseTopic: y,
                                publicKey: g
                            }), this.client.auth.pairingTopics.set(y, {
                                topic: y,
                                pairingTopic: p
                            })]), await this.client.core.relayer.subscribe(y), this.client.logger.info(`sending request to new pairing topic: ${p}`), h.length > 0) {
                            let {
                                namespace: e
                            } = (0, o.DQe)(t[0]), r = (0, o.IkP)(e, "request", h);
                            (0, o.hA9)(f) && (r = (0, o.qJM)(r, f.pop())), f.push(r)
                        }
                        let v = l && l > it.wc_sessionAuthenticate.req.ttl ? l : it.wc_sessionAuthenticate.req.ttl,
                            m = {
                                authPayload: {
                                    type: a ? ? "caip122",
                                    chains: t,
                                    statement: r,
                                    aud: i,
                                    domain: n,
                                    version: "1",
                                    nonce: s,
                                    iat: new Date().toISOString(),
                                    exp: c,
                                    nbf: u,
                                    resources: f
                                },
                                requester: {
                                    publicKey: g,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: (0, o.gn4)(v)
                            },
                            b = {
                                requiredNamespaces: {},
                                optionalNamespaces: {
                                    eip155: {
                                        chains: t,
                                        methods: [...new Set(["personal_sign", ...h])],
                                        events: ["chainChanged", "accountsChanged"]
                                    }
                                },
                                relays: [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: g,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: (0, o.gn4)(it.wc_sessionPropose.req.ttl)
                            },
                            {
                                done: w,
                                resolve: _,
                                reject: E
                            } = (0, o.H1S)(v, "Request expired"),
                            D = async ({
                                error: e,
                                session: t
                            }) => {
                                if (this.events.off((0, o.E0T)("session_request", S), I), e) E(e);
                                else if (t) {
                                    t.self.publicKey = g, await this.client.session.set(t.topic, t), await this.setExpiry(t.topic, t.expiry), p && await this.client.core.pairing.updateMetadata({
                                        topic: p,
                                        metadata: t.peer.metadata
                                    });
                                    let e = this.client.session.get(t.topic);
                                    await this.deleteProposal(P), _({
                                        session: e
                                    })
                                }
                            },
                            I = async e => {
                                let t;
                                if (await this.deletePendingAuthRequest(S, {
                                        message: "fulfilled",
                                        code: 0
                                    }), e.error) {
                                    let t = (0, o.D6H)("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                                    return e.error.code === t.code ? void 0 : (this.events.off((0, o.E0T)("session_connect"), D), E(e.error.message))
                                }
                                await this.deleteProposal(P), this.events.off((0, o.E0T)("session_connect"), D);
                                let {
                                    cacaos: r,
                                    responder: i
                                } = e.result, n = [], s = [];
                                for (let e of r) {
                                    await (0, o.c4l)({
                                        cacao: e,
                                        projectId: this.client.core.projectId
                                    }) || (this.client.logger.error(e, "Signature verification failed"), E((0, o.D6H)("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                                    let {
                                        p: t
                                    } = e, r = (0, o.hA9)(t.resources), i = [(0, o.DJo)(t.iss)], a = (0, o.NmC)(t.iss);
                                    if (r) {
                                        let e = (0, o.Y31)(r),
                                            t = (0, o.ouN)(r);
                                        n.push(...e), i.push(...t)
                                    }
                                    for (let e of i) s.push(`${e}:${a}`)
                                }
                                let a = await this.client.core.crypto.generateSharedKey(g, i.publicKey);
                                n.length > 0 && (t = {
                                    topic: a,
                                    acknowledged: !0,
                                    self: {
                                        publicKey: g,
                                        metadata: this.client.metadata
                                    },
                                    peer: i,
                                    controller: i.publicKey,
                                    expiry: (0, o.gn4)(ie),
                                    requiredNamespaces: {},
                                    optionalNamespaces: {},
                                    relay: {
                                        protocol: "irn"
                                    },
                                    pairingTopic: p,
                                    namespaces: (0, o.E12)([...new Set(n)], [...new Set(s)])
                                }, await this.client.core.relayer.subscribe(a), await this.client.session.set(a, t), t = this.client.session.get(a)), _({
                                    auths: r,
                                    session: t
                                })
                            },
                            S = eG(),
                            P = eG();
                        this.events.once((0, o.E0T)("session_connect"), D), this.events.once((0, o.E0T)("session_request", S), I);
                        try {
                            await Promise.all([this.sendRequest({
                                topic: p,
                                method: "wc_sessionAuthenticate",
                                params: m,
                                expiry: e.expiry,
                                throwOnFailedPublish: !0,
                                clientRpcId: S
                            }), this.sendRequest({
                                topic: p,
                                method: "wc_sessionPropose",
                                params: b,
                                expiry: it.wc_sessionPropose.req.ttl,
                                throwOnFailedPublish: !0,
                                clientRpcId: P
                            })])
                        } catch (e) {
                            throw this.events.off((0, o.E0T)("session_connect"), D), this.events.off((0, o.E0T)("session_request", S), I), e
                        }
                        return await this.setProposal(P, iy({
                            id: P
                        }, b)), await this.setAuthRequest(S, {
                            request: iv(iy({}, m), {
                                verifyContext: {}
                            }),
                            pairingTopic: p
                        }), {
                            uri: d,
                            response: w
                        }
                    }, this.approveSessionAuthenticate = async e => {
                        let t;
                        this.isInitialized();
                        let {
                            id: r,
                            auths: i
                        } = e, n = this.getPendingAuthRequest(r);
                        if (!n) throw Error(`Could not find pending auth request with id ${r}`);
                        let s = n.requester.publicKey,
                            a = await this.client.core.crypto.generateKeyPair(),
                            c = (0, o.YmJ)(s),
                            u = {
                                type: o.rVF,
                                receiverPublicKey: s,
                                senderPublicKey: a
                            },
                            h = [],
                            l = [];
                        for (let e of i) {
                            if (!await (0, o.c4l)({
                                    cacao: e,
                                    projectId: this.client.core.projectId
                                })) {
                                let e = (0, o.D6H)("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                                throw await this.sendError({
                                    id: r,
                                    topic: c,
                                    error: e,
                                    encodeOpts: u
                                }), Error(e.message)
                            }
                            let {
                                p: t
                            } = e, i = (0, o.hA9)(t.resources), n = [(0, o.DJo)(t.iss)], s = (0, o.NmC)(t.iss);
                            if (i) {
                                let e = (0, o.Y31)(i),
                                    t = (0, o.ouN)(i);
                                h.push(...e), n.push(...t)
                            }
                            for (let e of n) l.push(`${e}:${s}`)
                        }
                        let f = await this.client.core.crypto.generateSharedKey(a, s);
                        return h ? .length > 0 && (t = {
                            topic: f,
                            acknowledged: !0,
                            self: {
                                publicKey: a,
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: s,
                                metadata: n.requester.metadata
                            },
                            controller: s,
                            expiry: (0, o.gn4)(ie),
                            authentication: i,
                            requiredNamespaces: {},
                            optionalNamespaces: {},
                            relay: {
                                protocol: "irn"
                            },
                            pairingTopic: "",
                            namespaces: (0, o.E12)([...new Set(h)], [...new Set(l)])
                        }, await this.client.core.relayer.subscribe(f), await this.client.session.set(f, t)), await this.sendResult({
                            topic: c,
                            id: r,
                            result: {
                                cacaos: i,
                                responder: {
                                    publicKey: a,
                                    metadata: this.client.metadata
                                }
                            },
                            encodeOpts: u,
                            throwOnFailedPublish: !0
                        }), await this.client.auth.requests.delete(r, {
                            message: "fullfilled",
                            code: 0
                        }), await this.client.core.pairing.activate({
                            topic: n.pairingTopic
                        }), {
                            session: t
                        }
                    }, this.rejectSessionAuthenticate = async e => {
                        await this.isInitialized();
                        let {
                            id: t,
                            reason: r
                        } = e, i = this.getPendingAuthRequest(t);
                        if (!i) throw Error(`Could not find pending auth request with id ${t}`);
                        let n = i.requester.publicKey,
                            s = await this.client.core.crypto.generateKeyPair(),
                            a = (0, o.YmJ)(n),
                            c = {
                                type: o.rVF,
                                receiverPublicKey: n,
                                senderPublicKey: s
                            };
                        await this.sendError({
                            id: t,
                            topic: a,
                            error: r,
                            encodeOpts: c
                        }), await this.client.auth.requests.delete(t, {
                            message: "rejected",
                            code: 0
                        }), await this.client.proposal.delete(t, (0, o.D6H)("USER_DISCONNECTED"))
                    }, this.formatAuthMessage = e => {
                        this.isInitialized();
                        let {
                            request: t,
                            iss: r
                        } = e;
                        return (0, o.wvx)(t, r)
                    }, this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async e => {
                        let {
                            topic: t,
                            expirerHasDeleted: r = !1,
                            emitEvent: i = !0,
                            id: n = 0
                        } = e, {
                            self: s
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), await this.client.session.delete(t, (0, o.D6H)("USER_DISCONNECTED")), this.addToRecentlyDeleted(t, "session"), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), r || this.client.core.expirer.del(t), this.client.core.storage.removeItem(r9).catch(e => this.client.logger.warn(e)), this.getPendingSessionRequests().forEach(e => {
                            e.topic === t && this.deletePendingSessionRequest(e.id, (0, o.D6H)("USER_DISCONNECTED"))
                        }), i && this.client.events.emit("session_delete", {
                            id: n,
                            topic: t
                        })
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, (0, o.D6H)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal")
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = ii.idle, this.client.events.emit("session_request_expire", {
                            id: e
                        }))
                    }, this.deletePendingAuthRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.auth.requests.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, {
                            expiry: t
                        }))
                    }, this.setProposal = async (e, t) => {
                        this.client.core.expirer.set(e, (0, o.gn4)(it.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t)
                    }, this.setAuthRequest = async (e, t) => {
                        let {
                            request: r,
                            pairingTopic: i
                        } = t;
                        this.client.core.expirer.set(e, r.expiryTimestamp), await this.client.auth.requests.set(e, {
                            authPayload: r.authPayload,
                            requester: r.requester,
                            expiryTimestamp: r.expiryTimestamp,
                            id: e,
                            pairingTopic: i,
                            verifyContext: r.verifyContext
                        })
                    }, this.setPendingSessionRequest = async e => {
                        let {
                            id: t,
                            topic: r,
                            params: i,
                            verifyContext: n
                        } = e, s = i.request.expiryTimestamp || (0, o.gn4)(it.wc_sessionRequest.req.ttl);
                        this.client.core.expirer.set(t, s), await this.client.pendingRequest.set(t, {
                            id: t,
                            topic: r,
                            params: i,
                            verifyContext: n
                        })
                    }, this.sendRequest = async e => {
                        let t;
                        let {
                            topic: r,
                            method: i,
                            params: n,
                            expiry: s,
                            relayRpcId: a,
                            clientRpcId: c,
                            throwOnFailedPublish: u
                        } = e, h = eJ(i, n, c);
                        if ((0, o.jUY)() && is.includes(i)) {
                            let e = (0, o.rjm)(JSON.stringify(h));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        try {
                            t = await this.client.core.crypto.encode(r, h)
                        } catch (e) {
                            throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${r} failed`), e
                        }
                        let l = it[i].req;
                        return s && (l.ttl = s), a && (l.id = a), this.client.core.history.set(r, h), u ? (l.internal = iv(iy({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, t, l)) : this.client.core.relayer.publish(r, t, l).catch(e => this.client.logger.error(e)), h.id
                    }, this.sendResult = async e => {
                        let t, r;
                        let {
                            id: i,
                            topic: n,
                            result: s,
                            throwOnFailedPublish: o,
                            encodeOpts: a
                        } = e, c = eQ(i, s);
                        try {
                            t = await this.client.core.crypto.encode(n, c, a)
                        } catch (e) {
                            throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${n} failed`), e
                        }
                        try {
                            r = await this.client.core.history.get(n, i)
                        } catch (e) {
                            throw this.client.logger.error(`sendResult() -> history.get(${n}, ${i}) failed`), e
                        }
                        let u = it[r.request.method].res;
                        o ? (u.internal = iv(iy({}, u.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(n, t, u)) : this.client.core.relayer.publish(n, t, u).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(c)
                    }, this.sendError = async e => {
                        let t, r;
                        let {
                            id: i,
                            topic: n,
                            error: s,
                            encodeOpts: o
                        } = e, a = eX(i, s);
                        try {
                            t = await this.client.core.crypto.encode(n, a, o)
                        } catch (e) {
                            throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${n} failed`), e
                        }
                        try {
                            r = await this.client.core.history.get(n, i)
                        } catch (e) {
                            throw this.client.logger.error(`sendError() -> history.get(${n}, ${i}) failed`), e
                        }
                        let c = it[r.request.method].res;
                        this.client.core.relayer.publish(n, t, c), await this.client.core.history.resolve(a)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            let r = !1;
                            (0, o.BwD)(t.expiry) && (r = !0), this.client.core.crypto.keychain.has(t.topic) || (r = !0), r && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            (0, o.BwD)(e.expiryTimestamp) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession({
                            topic: e
                        })), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === ii.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = ii.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = ii.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        if (!this.shouldIgnorePairingRequest({
                                topic: t,
                                requestMethod: i
                            })) switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            case "wc_sessionAuthenticate":
                                return this.onSessionAuthenticateRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            case "wc_sessionAuthenticate":
                                return this.onSessionAuthenticateResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = (0, o.kCb)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.shouldIgnorePairingRequest = e => {
                        let {
                            topic: t,
                            requestMethod: r
                        } = e, i = this.expectedPairingMethodMap.get(t);
                        return !(!i || i.includes(r)) && !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(iy({}, t.params));
                            let n = r.expiryTimestamp || (0, o.gn4)(it.wc_sessionPropose.req.ttl),
                                s = iy({
                                    id: i,
                                    pairingTopic: e,
                                    expiryTimestamp: n
                                }, r);
                            await this.setProposal(i, s);
                            let a = (0, o.rjm)(JSON.stringify(t)),
                                c = await this.getVerifyContext(a, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: c
                            })
                        } catch (t) {
                            await this.sendError({
                                id: i,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if (e9(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else if (e7(t)) {
                            await this.client.proposal.delete(r, (0, o.D6H)("USER_DISCONNECTED"));
                            let e = (0, o.E0T)("session_connect");
                            if (0 === this.events.listenerCount(e)) throw Error(`emitting ${e} without any listeners, 954`);
                            this.events.emit((0, o.E0T)("session_connect"), {
                                error: t.error
                            })
                        }
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: a,
                                sessionProperties: c,
                                pairingTopic: u,
                                sessionConfig: h
                            } = t.params, l = iy(iy({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: u,
                                requiredNamespaces: {},
                                optionalNamespaces: {},
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, c && {
                                sessionProperties: c
                            }), h && {
                                sessionConfig: h
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            });
                            let f = (0, o.E0T)("session_connect");
                            if (0 === this.events.listenerCount(f)) throw Error(`emitting ${f} without any listeners 997`);
                            this.events.emit((0, o.E0T)("session_connect"), {
                                session: l
                            }), this.cleanupDuplicatePairings(l)
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        e9(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit((0, o.E0T)("session_approve", r), {})) : e7(t) && (await this.client.session.delete(e, (0, o.D6H)("USER_DISCONNECTED")), this.events.emit((0, o.E0T)("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = o.O6B.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`), this.sendError({
                                    id: i,
                                    topic: e,
                                    error: (0, o.D6H)("INVALID_UPDATE_REQUEST")
                                });
                                return
                            }
                            this.isValidUpdate(iy({
                                topic: e
                            }, r));
                            try {
                                o.O6B.set(t, i), await this.client.session.update(e, {
                                    namespaces: r.namespaces
                                }), await this.sendResult({
                                    id: i,
                                    topic: e,
                                    result: !0,
                                    throwOnFailedPublish: !0
                                })
                            } catch (e) {
                                throw o.O6B.delete(t), e
                            }
                            this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            })
                        } catch (t) {
                            await this.sendError({
                                id: i,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_update", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        e9(t) ? this.events.emit((0, o.E0T)("session_update", r), {}) : e7(t) && this.events.emit((0, o.E0T)("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, (0, o.gn4)(ie)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_extend", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        e9(t) ? this.events.emit((0, o.E0T)("session_extend", r), {}) : e7(t) && this.events.emit((0, o.E0T)("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_ping", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        setTimeout(() => {
                            e9(t) ? this.events.emit((0, o.E0T)("session_ping", r), {}) : e7(t) && this.events.emit((0, o.E0T)("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(rs.publish, async () => {
                                    t(await this.deleteSession({
                                        topic: e,
                                        id: r
                                    }))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            }), this.cleanupPendingSentRequestsForTopic({
                                topic: e,
                                error: (0, o.D6H)("USER_DISCONNECTED")
                            })])
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        var r;
                        let {
                            id: i,
                            params: n
                        } = t;
                        try {
                            await this.isValidRequest(iy({
                                topic: e
                            }, n));
                            let t = (0, o.rjm)(JSON.stringify(eJ("wc_sessionRequest", n, i))),
                                s = this.client.session.get(e),
                                a = await this.getVerifyContext(t, s.peer.metadata),
                                c = {
                                    id: i,
                                    topic: e,
                                    params: n,
                                    verifyContext: a
                                };
                            await this.setPendingSessionRequest(c), null != (r = this.client.signConfig) && r.disableRequestQueue ? this.emitSessionRequest(c) : (this.addSessionRequestToSessionRequestQueue(c), this.processSessionRequestQueue())
                        } catch (t) {
                            await this.sendError({
                                id: i,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_request", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        e9(t) ? this.events.emit((0, o.E0T)("session_request", r), {
                            result: t.result
                        }) : e7(t) && this.events.emit((0, o.E0T)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = o.O6B.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(iy({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), o.O6B.set(t, r)
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionAuthenticateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionAuthenticateResponse",
                            topic: e,
                            payload: t
                        }), e9(t) ? this.events.emit((0, o.E0T)("session_request", r), {
                            result: t.result
                        }) : e7(t) && this.events.emit((0, o.E0T)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionAuthenticateRequest = async (e, t) => {
                        let {
                            requester: r,
                            authPayload: i,
                            expiryTimestamp: n
                        } = t.params, s = (0, o.rjm)(JSON.stringify(t)), a = await this.getVerifyContext(s, this.client.metadata), c = {
                            requester: r,
                            pairingTopic: e,
                            id: t.id,
                            authPayload: i,
                            verifyContext: a,
                            expiryTimestamp: n
                        };
                        await this.setAuthRequest(t.id, {
                            request: c,
                            pairingTopic: e
                        }), this.client.events.emit("session_authenticate", {
                            topic: e,
                            params: t.params,
                            id: t.id
                        })
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = ii.idle, this.processSessionRequestQueue()
                        }, (0, U.toMiliseconds)(this.requestQueueDelay))
                    }, this.cleanupPendingSentRequestsForTopic = ({
                        topic: e,
                        error: t
                    }) => {
                        let r = this.client.core.history.pending;
                        r.length > 0 && r.filter(t => t.topic === e && "wc_sessionRequest" === t.request.method).forEach(e => {
                            let r = e.request.id,
                                i = (0, o.E0T)("session_request", r);
                            if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                            this.events.emit((0, o.E0T)("session_request", e.request.id), {
                                error: t
                            })
                        })
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === ii.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = ii.active, this.emitSessionRequest(e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.emitSessionRequest = e => {
                        this.client.events.emit("session_request", e)
                    }, this.onPairingCreated = e => {
                        if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, eJ("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: s
                        } = e;
                        if ((0, o.o8e)(t) || await this.isValidPairingTopic(t), !(0, o.PMr)(s, !0)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `connect() relays: ${s}`);
                            throw Error(e)
                        }(0, o.o8e)(r) || 0 === (0, o.L5o)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, o.o8e)(i) || 0 === (0, o.L5o)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, o.o8e)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = (0, o.naP)(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!(0, o.EJd)(e)) throw Error((0, o.kCb)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            a = (0, o.ing)(r, "approve()");
                        if (a) throw Error(a.message);
                        let c = (0, o.rFo)(s.requiredNamespaces, r, "approve()");
                        if (c) throw Error(c.message);
                        if (!(0, o.M_r)(i, !0)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }(0, o.o8e)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !(0, o.H4H)(r)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: t,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = e;
                        if (!(0, o.Z26)(t)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let s = (0, o.DdM)(r, "onSessionSettleRequest()");
                        if (s) throw Error(s.message);
                        let a = (0, o.ing)(i, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if ((0, o.BwD)(n)) {
                            let {
                                message: e
                            } = (0, o.kCb)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = (0, o.ing)(r, "update()");
                        if (n) throw Error(n.message);
                        let s = (0, o.rFo)(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                        let {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!(0, o.p8o)(s, i)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.hHR)(r)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.alS)(s, i, r.method)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw Error(e)
                        }
                        if (n && !(0, o.ONw)(n, ir)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${ir.min} and ${ir.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        var t;
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            response: i
                        } = e;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (r) {
                            throw null != (t = e ? .response) && t.id && this.cleanupAfterResponse(e), r
                        }
                        if (!(0, o.JTI)(i)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!(0, o.p8o)(n, i)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.nfW)(r)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.B95)(n, i, r.name)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidAuthenticate = e => {
                        let {
                            chains: t,
                            uri: r,
                            domain: i,
                            nonce: n
                        } = e;
                        if (!Array.isArray(t) || 0 === t.length) throw Error("chains is required and must be a non-empty array");
                        if (!(0, o.M_r)(r, !1)) throw Error("uri is required parameter");
                        if (!(0, o.M_r)(i, !1)) throw Error("domain is required parameter");
                        if (!(0, o.M_r)(n, !1)) throw Error("nonce is required parameter");
                        if ([...new Set(t.map(e => (0, o.DQe)(e).namespace))].length > 1) throw Error("Multi-namespace requests are not supported. Please request single namespace only.");
                        let {
                            namespace: s
                        } = (0, o.DQe)(t[0]);
                        if ("eip155" !== s) throw Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || rg,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!(0, o.M_r)(e, !1)) {
                                let {
                                    message: r
                                } = (0, o.kCb)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }, this.getPendingAuthRequest = e => {
                        let t = this.client.auth.requests.get(e);
                        return "object" == typeof t ? t : void 0
                    }, this.addToRecentlyDeleted = (e, t) => {
                        if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                            let e = 0,
                                t = this.recentlyDeletedLimit / 2;
                            for (let r of this.recentlyDeletedMap.keys()) {
                                if (e++ >= t) break;
                                this.recentlyDeletedMap.delete(r)
                            }
                        }
                    }, this.checkRecentlyDeleted = e => {
                        let t = this.recentlyDeletedMap.get(e);
                        if (t) {
                            let {
                                message: r
                            } = (0, o.kCb)("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
                            throw Error(r)
                        }
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(rs.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e, {
                            publicKey: i
                        } = this.client.auth.authKeys.keys.includes(ia) ? this.client.auth.authKeys.get(ia) : {
                            responseTopic: void 0,
                            publicKey: void 0
                        }, n = await this.client.core.crypto.decode(t, r, {
                            receiverPublicKey: i
                        });
                        try {
                            e8(n) ? (this.client.core.history.set(t, n), this.onRelayEventRequest({
                                topic: t,
                                payload: n
                            })) : e4(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                                topic: t,
                                payload: n
                            }), this.client.core.history.delete(t, n.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: n
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(rp.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = (0, o.iPz)(e.target);
                        return r && this.client.pendingRequest.keys.includes(r) ? await this.deletePendingSessionRequest(r, (0, o.kCb)("EXPIRED"), !0) : r && this.client.auth.requests.keys.includes(r) ? await this.deletePendingAuthRequest(r, (0, o.kCb)("EXPIRED"), !0) : void(t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                            topic: t,
                            expirerHasDeleted: !0
                        }), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        })))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(rl.create, e => this.onPairingCreated(e)), this.client.core.pairing.events.on(rl.delete, e => {
                        this.addToRecentlyDeleted(e.topic, "pairing")
                    })
                }
                isValidPairingTopic(e) {
                    if (!(0, o.M_r)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.BwD)(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = (0, o.kCb)("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!(0, o.M_r)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.BwD)(this.client.session.get(e).expiry)) {
                        await this.deleteSession({
                            topic: e
                        });
                        let {
                            message: t
                        } = (0, o.kCb)("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.crypto.keychain.has(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
                        throw await this.deleteSession({
                            topic: e
                        }), Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if ((0, o.M_r)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if (!(0, o.Q01)(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.BwD)(this.client.proposal.get(e).expiryTimestamp)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = (0, o.kCb)("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class ib extends rK {
                constructor(e, t) {
                    super(e, t, "proposal", r8), this.core = e, this.logger = t
                }
            }
            class iw extends rK {
                constructor(e, t) {
                    super(e, t, "session", r8), this.core = e, this.logger = t
                }
            }
            class i_ extends rK {
                constructor(e, t) {
                    super(e, t, "request", r8, e => e.id), this.core = e, this.logger = t
                }
            }
            class iE extends rK {
                constructor(e, t) {
                    super(e, t, "authKeys", io, () => ia), this.core = e, this.logger = t
                }
            }
            class iD extends rK {
                constructor(e, t) {
                    super(e, t, "pairingTopics", io), this.core = e, this.logger = t
                }
            }
            class iI extends rK {
                constructor(e, t) {
                    super(e, t, "requests", io, e => e.id), this.core = e, this.logger = t
                }
            }
            class iS {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.authKeys = new iE(this.core, this.logger), this.pairingTopics = new iD(this.core, this.logger), this.requests = new iI(this.core, this.logger)
                }
                async init() {
                    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init()
                }
            }
            class iP extends e_ {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = r4.name, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.authenticate = async e => {
                        try {
                            return await this.engine.authenticate(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.formatAuthMessage = e => {
                        try {
                            return this.engine.formatAuthMessage(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approveSessionAuthenticate = async e => {
                        try {
                            return await this.engine.approveSessionAuthenticate(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.rejectSessionAuthenticate = async e => {
                        try {
                            return await this.engine.rejectSessionAuthenticate(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || r4.name, this.metadata = e ? .metadata || (0, o.DaH)(), this.signConfig = e ? .signConfig;
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : V()(ec({
                        level: e ? .logger || r4.logger
                    }));
                    this.core = e ? .core || new r6(e), this.logger = eh(t, this.name), this.session = new iw(this.core, this.logger), this.proposal = new ib(this.core, this.logger), this.pendingRequest = new i_(this.core, this.logger), this.engine = new im(this), this.auth = new iS(this.core, this.logger)
                }
                static async init(e) {
                    let t = new iP(e);
                    return await t.initialize(), t
                }
                get context() {
                    return eu(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var iC = r(80699),
                iO = r.n(iC),
                ix = Object.defineProperty,
                iA = Object.defineProperties,
                iR = Object.getOwnPropertyDescriptors,
                iT = Object.getOwnPropertySymbols,
                iN = Object.prototype.hasOwnProperty,
                ik = Object.prototype.propertyIsEnumerable,
                ij = (e, t, r) => t in e ? ix(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iM = (e, t) => {
                    for (var r in t || (t = {})) iN.call(t, r) && ij(e, r, t[r]);
                    if (iT)
                        for (var r of iT(t)) ik.call(t, r) && ij(e, r, t[r]);
                    return e
                },
                iL = (e, t) => iA(e, iR(t));
            let iU = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class iq {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new n.EventEmitter, this.isAvailable = !1, this.registering = !1, !e3(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e) {
                    this.isAvailable || await this.register();
                    try {
                        let t = O(e),
                            r = await (await iO()(this.url, iL(iM({}, iU), {
                                body: t
                            }))).json();
                        this.onPayload({
                            data: r
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!e3(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.isAvailable > "u") return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = O({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await iO()(e, iL(iM({}, iU), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? C(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = eX(e, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return eK(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            let iz = "error",
                i$ = "wc@2:universal_provider:",
                iB = "default_chain_changed";
            var iF = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                iH = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        u = "[object Arguments]",
                        h = "[object Array]",
                        l = "[object Boolean]",
                        f = "[object Date]",
                        p = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        b = "[object Promise]",
                        w = "[object RegExp]",
                        _ = "[object Set]",
                        E = "[object String]",
                        D = "[object Symbol]",
                        I = "[object WeakMap]",
                        S = "[object ArrayBuffer]",
                        P = "[object DataView]",
                        C = "[object Float32Array]",
                        O = "[object Float64Array]",
                        x = "[object Int8Array]",
                        A = "[object Int16Array]",
                        R = "[object Int32Array]",
                        T = "[object Uint8Array]",
                        N = "[object Uint8ClampedArray]",
                        k = "[object Uint16Array]",
                        j = "[object Uint32Array]",
                        M = /\b__p \+= '';/g,
                        L = /\b(__p \+=) '' \+/g,
                        U = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        q = /&(?:amp|lt|gt|quot|#39);/g,
                        z = /[&<>"']/g,
                        $ = RegExp(q.source),
                        B = RegExp(z.source),
                        F = /<%-([\s\S]+?)%>/g,
                        H = /<%([\s\S]+?)%>/g,
                        V = /<%=([\s\S]+?)%>/g,
                        K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Y = /[\\^$.*+?()[\]{}|]/g,
                        J = RegExp(Y.source),
                        Q = /^\s+/,
                        X = /\s/,
                        Z = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eu = /^\[object .+?Constructor\]$/,
                        eh = /^0o[0-7]+$/i,
                        el = /^(?:0|[1-9]\d*)$/,
                        ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ep = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        eb = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        ew = "\\ufe0e\\ufe0f",
                        e_ = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eD = "[" + e_ + "]",
                        eI = "[" + ey + "]",
                        eS = "[" + em + "]",
                        eP = "[^" + eg + e_ + "\\d+" + ev + em + eb + "]",
                        eC = "\ud83c[\udffb-\udfff]",
                        eO = "[^" + eg + "]",
                        ex = "(?:\ud83c[\udde6-\uddff]){2}",
                        eA = "[\ud800-\udbff][\udc00-\udfff]",
                        eR = "[" + eb + "]",
                        eT = "\\u200d",
                        eN = "(?:" + eS + "|" + eP + ")",
                        ek = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        ej = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        eM = "(?:" + eI + "|" + eC + ")?",
                        eL = "[" + ew + "]?",
                        eU = "(?:" + eT + "(?:" + [eO, ex, eA].join("|") + ")" + eL + eM + ")*",
                        eq = eL + eM + eU,
                        ez = "(?:" + ["[" + ev + "]", ex, eA].join("|") + ")" + eq,
                        e$ = "(?:" + [eO + eI + "?", eI, ex, eA, "[" + eg + "]"].join("|") + ")",
                        eB = RegExp(eE, "g"),
                        eF = RegExp(eI, "g"),
                        eH = RegExp(eC + "(?=" + eC + ")|" + e$ + eq, "g"),
                        eV = RegExp([eR + "?" + eS + "+" + ek + "(?=" + [eD, eR, "$"].join("|") + ")", "(?:" + eR + "|" + eP + ")+" + ej + "(?=" + [eD, eR + eN, "$"].join("|") + ")", eR + "?" + eN + "+" + ek, eR + "+" + ej, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ez].join("|"), "g"),
                        eK = RegExp("[" + eT + eg + ey + ew + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eG = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eY = -1,
                        eJ = {};
                    eJ[C] = eJ[O] = eJ[x] = eJ[A] = eJ[R] = eJ[T] = eJ[N] = eJ[k] = eJ[j] = !0, eJ[u] = eJ[h] = eJ[S] = eJ[l] = eJ[P] = eJ[f] = eJ[p] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[w] = eJ[_] = eJ[E] = eJ[I] = !1;
                    var eQ = {};
                    eQ[u] = eQ[h] = eQ[S] = eQ[P] = eQ[l] = eQ[f] = eQ[C] = eQ[O] = eQ[x] = eQ[A] = eQ[R] = eQ[y] = eQ[v] = eQ[m] = eQ[w] = eQ[_] = eQ[E] = eQ[D] = eQ[T] = eQ[N] = eQ[k] = eQ[j] = !0, eQ[p] = eQ[d] = eQ[I] = !1;
                    var eX = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eZ = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof iF && iF && iF.Object === Object && iF,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e3 = e1 || e5 || Function("return this")(),
                        e6 = t && !t.nodeType && t,
                        e2 = e6 && e && !e.nodeType && e,
                        e8 = e2 && e2.exports === e6,
                        e4 = e8 && e1.process,
                        e9 = function() {
                            try {
                                return e2 && e2.require && e2.require("util").types || e4 && e4.binding && e4.binding("util")
                            } catch {}
                        }(),
                        e7 = e9 && e9.isArrayBuffer,
                        te = e9 && e9.isDate,
                        tt = e9 && e9.isMap,
                        tr = e9 && e9.isRegExp,
                        ti = e9 && e9.isSet,
                        tn = e9 && e9.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function th(e, t) {
                        return !!(null == e ? 0 : e.length) && tw(e, t, 0) > -1
                    }

                    function tl(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tf(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tp(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tI("length");

                    function tm(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function tb(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tw(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : tb(e, tE, r)
                    }

                    function t_(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tD(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tC(e, t) / r : a
                    }

                    function tI(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tS(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tP(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tC(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tO(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tx(e) {
                        return e && e.slice(0, tV(e) + 1).replace(Q, "")
                    }

                    function tA(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tR(e, t) {
                        return tf(t, function(t) {
                            return e[t]
                        })
                    }

                    function tT(e, t) {
                        return e.has(t)
                    }

                    function tN(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tw(t, e[r], 0) > -1;);
                        return r
                    }

                    function tk(e, t) {
                        for (var r = e.length; r-- && tw(t, e[r], 0) > -1;);
                        return r
                    }
                    var tj = tS({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tM = tS({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tL(e) {
                        return "\\" + eX[e]
                    }

                    function tU(e) {
                        return eK.test(e)
                    }

                    function tq(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function tz(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function t$(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tB(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tF(e) {
                        return tU(e) ? function(e) {
                            for (var t = eH.lastIndex = 0; eH.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tH(e) {
                        return tU(e) ? e.match(eH) || [] : e.split("")
                    }

                    function tV(e) {
                        for (var t = e.length; t-- && X.test(e.charAt(t)););
                        return t
                    }
                    var tK = tS({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tW = function e(t) {
                            var X, eg, ey, ev, em = (t = null == t ? e3 : tW.defaults(e3.Object(), t, tW.pick(e3, eG))).Array,
                                eb = t.Date,
                                ew = t.Error,
                                e_ = t.Function,
                                eE = t.Math,
                                eD = t.Object,
                                eI = t.RegExp,
                                eS = t.String,
                                eP = t.TypeError,
                                eC = em.prototype,
                                eO = e_.prototype,
                                ex = eD.prototype,
                                eA = t["__core-js_shared__"],
                                eR = eO.toString,
                                eT = ex.hasOwnProperty,
                                eN = 0,
                                ek = (X = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "",
                                ej = ex.toString,
                                eM = eR.call(eD),
                                eL = e3._,
                                eU = eI("^" + eR.call(eT).replace(Y, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                eq = e8 ? t.Buffer : r,
                                ez = t.Symbol,
                                e$ = t.Uint8Array,
                                eH = eq ? eq.allocUnsafe : r,
                                eK = tz(eD.getPrototypeOf, eD),
                                eX = eD.create,
                                e1 = ex.propertyIsEnumerable,
                                e5 = eC.splice,
                                e6 = ez ? ez.isConcatSpreadable : r,
                                e2 = ez ? ez.iterator : r,
                                e4 = ez ? ez.toStringTag : r,
                                e9 = function() {
                                    try {
                                        var e = nd(eD, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                                tS = eb && eb.now !== e3.Date.now && eb.now,
                                tG = t.setTimeout !== e3.setTimeout && t.setTimeout,
                                tY = eE.ceil,
                                tJ = eE.floor,
                                tQ = eD.getOwnPropertySymbols,
                                tX = eq ? eq.isBuffer : r,
                                tZ = t.isFinite,
                                t0 = eC.join,
                                t1 = tz(eD.keys, eD),
                                t5 = eE.max,
                                t3 = eE.min,
                                t6 = eb.now,
                                t2 = t.parseInt,
                                t8 = eE.random,
                                t4 = eC.reverse,
                                t9 = nd(t, "DataView"),
                                t7 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eD, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = nq(t9),
                                ra = nq(t7),
                                rc = nq(re),
                                ru = nq(rt),
                                rh = nq(rr),
                                rl = ez ? ez.prototype : r,
                                rf = rl ? rl.valueOf : r,
                                rp = rl ? rl.toString : r;

                            function rd(e) {
                                if (sK(e) && !sj(e) && !(e instanceof rm)) {
                                    if (e instanceof rv) return e;
                                    if (eT.call(e, "__wrapped__")) return nz(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sV(t)) return {};
                                    if (eX) return eX(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function rm(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function r_(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new r_; ++t < r;) this.add(e[t])
                            }

                            function rD(e) {
                                var t = this.__data__ = new rw(e);
                                this.size = t.size
                            }

                            function rI(e, t) {
                                var r = sj(e),
                                    i = !r && sk(e),
                                    n = !r && !i && sq(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tO(e.length, eS) : [],
                                    c = a.length;
                                for (var u in e)(t || eT.call(e, u)) && !(o && ("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || n_(u, c))) && a.push(u);
                                return a
                            }

                            function rS(e) {
                                var t = e.length;
                                return t ? e[ih(0, t - 1)] : r
                            }

                            function rP(e, t, i) {
                                (i === r || sR(e[t], i)) && (i !== r || t in e) || rR(e, t, i)
                            }

                            function rC(e, t, i) {
                                var n = e[t];
                                eT.call(e, t) && sR(n, i) && (i !== r || t in e) || rR(e, t, i)
                            }

                            function rO(e, t) {
                                for (var r = e.length; r--;)
                                    if (sR(e[r][0], t)) return r;
                                return -1
                            }

                            function rx(e, t, r, i) {
                                return rU(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rA(e, t) {
                                return e && iF(t, of (t), e)
                            }

                            function rR(e, t, r) {
                                "__proto__" == t && e9 ? e9(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rT(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rN(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rk(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    h = 2 & t,
                                    p = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sV(e)) return e;
                                var b = sj(e);
                                if (b) {
                                    if (I = e.length, M = new e.constructor(I), I && "string" == typeof e[0] && eT.call(e, "index") && (M.index = e.index, M.input = e.input), a = M, !c) return iB(e, a)
                                } else {
                                    var I, M, L, U, q, z = nv(e),
                                        $ = z == d || z == g;
                                    if (sq(e)) return iM(e, c);
                                    if (z == m || z == u || $ && !s) {
                                        if (a = h || $ ? {} : nb(e), !c) return h ? (L = (q = a) && iF(e, op(e), q), iF(e, ny(e), L)) : (U = rA(a, e), iF(e, ng(e), U))
                                    } else {
                                        if (!eQ[z]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case S:
                                                    return iL(e);
                                                case l:
                                                case f:
                                                    return new s(+e);
                                                case P:
                                                    return i = r ? iL(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case C:
                                                case O:
                                                case x:
                                                case A:
                                                case R:
                                                case T:
                                                case N:
                                                case k:
                                                case j:
                                                    return iU(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case w:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case _:
                                                    return new s;
                                                case D:
                                                    return rf ? eD(rf.call(e)) : {}
                                            }
                                        }(e, z, c)
                                    }
                                }
                                o || (o = new rD);
                                var B = o.get(e);
                                if (B) return B;
                                o.set(e, a), sQ(e) ? e.forEach(function(r) {
                                    a.add(rk(r, t, i, r, e, o))
                                }) : sW(e) && e.forEach(function(r, n) {
                                    a.set(n, rk(r, t, i, n, e, o))
                                });
                                var F = p ? h ? na : no : h ? op : of ,
                                    H = b ? r : F(e);
                                return ta(H || e, function(r, n) {
                                    H && (r = e[n = r]), rC(a, n, rk(r, t, i, n, e, o))
                                }), a
                            }

                            function rj(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eD(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rM(e, t, n) {
                                if ("function" != typeof e) throw new eP(i);
                                return nT(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rL(e, t, r, i) {
                                var n = -1,
                                    s = th,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    u = t.length;
                                if (!a) return c;
                                r && (t = tf(t, tA(r))), i ? (s = tl, o = !1) : t.length >= 200 && (s = tT, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var h = e[n],
                                        l = null == r ? h : r(h);
                                    if (h = i || 0 !== h ? h : 0, o && l == l) {
                                        for (var f = u; f--;)
                                            if (t[f] === l) continue e;
                                        c.push(h)
                                    } else s(t, l, i) || c.push(h)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: F,
                                evaluate: H,
                                interpolate: V,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, rm.prototype = rg(ry.prototype), rm.prototype.constructor = rm, rb.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return eT.call(t, e) ? t[e] : r
                            }, rb.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : eT.call(t, e)
                            }, rb.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, rw.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rw.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rO(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rw.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rO(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rw.prototype.has = function(e) {
                                return rO(this.__data__, e) > -1
                            }, rw.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rO(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, r_.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rb,
                                    map: new(t7 || rw),
                                    string: new rb
                                }
                            }, r_.prototype.delete = function(e) {
                                var t = nf(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, r_.prototype.get = function(e) {
                                return nf(this, e).get(e)
                            }, r_.prototype.has = function(e) {
                                return nf(this, e).has(e)
                            }, r_.prototype.set = function(e, t) {
                                var r = nf(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rD.prototype.clear = function() {
                                this.__data__ = new rw, this.size = 0
                            }, rD.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rD.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rD.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rD.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rw) {
                                    var i = r.__data__;
                                    if (!t7 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new r_(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rU = iK(rK),
                                rq = iK(rW, !0);

                            function rz(e, t) {
                                var r = !0;
                                return rU(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function r$(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sZ(a) : i(a, c))) var c = a,
                                        u = o
                                }
                                return u
                            }

                            function rB(e, t) {
                                var r = [];
                                return rU(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rF(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nw), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rF(a, t - 1, r, i, n) : tp(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rH = iW(),
                                rV = iW(!0);

                            function rK(e, t) {
                                return e && rH(e, t, of )
                            }

                            function rW(e, t) {
                                return e && rV(e, t, of )
                            }

                            function rG(e, t) {
                                return tu(t, function(t) {
                                    return sB(e[t])
                                })
                            }

                            function rY(e, t) {
                                t = iN(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nU(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rJ(e, t, r) {
                                var i = t(e);
                                return sj(e) ? i : tp(i, r(e))
                            }

                            function rQ(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e4 && e4 in eD(e) ? function(e) {
                                    var t = eT.call(e, e4),
                                        i = e[e4];
                                    try {
                                        e[e4] = r;
                                        var n = !0
                                    } catch {}
                                    var s = ej.call(e);
                                    return n && (t ? e[e4] = i : delete e[e4]), s
                                }(e) : ej.call(e)
                            }

                            function rX(e, t) {
                                return e > t
                            }

                            function rZ(e, t) {
                                return null != e && eT.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eD(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? tl : th, s = e[0].length, o = e.length, a = o, c = em(o), u = 1 / 0, h = []; a--;) {
                                    var l = e[a];
                                    a && t && (l = tf(l, tA(t))), u = t3(l.length, u), c[a] = !i && (t || s >= 120 && l.length >= 120) ? new rE(a && l) : r
                                }
                                l = e[0];
                                var f = -1,
                                    p = c[0];
                                e: for (; ++f < s && h.length < u;) {
                                    var d = l[f],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(p ? tT(p, g) : n(h, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tT(y, g) : n(e[a], g, i))) continue e
                                        }
                                        p && p.push(g), h.push(d)
                                    }
                                }
                                return h
                            }

                            function r5(e, t, i) {
                                t = iN(t, e);
                                var n = null == (e = nx(e, t)) ? e : e[nU(nQ(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r3(e) {
                                return sK(e) && rQ(e) == u
                            }

                            function r6(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sK(e) || sK(t)) ? function(e, t, i, n, s, o) {
                                    var a = sj(e),
                                        c = sj(t),
                                        d = a ? h : nv(e),
                                        g = c ? h : nv(t);
                                    d = d == u ? m : d, g = g == u ? m : g;
                                    var b = d == m,
                                        I = g == m,
                                        C = d == g;
                                    if (C && sq(e)) {
                                        if (!sq(t)) return !1;
                                        a = !0, b = !1
                                    }
                                    if (C && !b) return o || (o = new rD), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case P:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case S:
                                                return !(e.byteLength != t.byteLength || !s(new e$(e), new e$(t)));
                                            case l:
                                            case f:
                                            case v:
                                                return sR(+e, +t);
                                            case p:
                                                return e.name == t.name && e.message == t.message;
                                            case w:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = tq;
                                            case _:
                                                var c = 1 & i;
                                                if (a || (a = tB), e.size != t.size && !c) break;
                                                var u = o.get(e);
                                                if (u) return u == t;
                                                i |= 2, o.set(e, t);
                                                var h = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), h;
                                            case D:
                                                if (rf) return rf.call(e) == rf.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var O = b && eT.call(e, "__wrapped__"),
                                            x = I && eT.call(t, "__wrapped__");
                                        if (O || x) {
                                            var A = O ? e.value() : e,
                                                R = x ? t.value() : t;
                                            return o || (o = new rD), s(A, R, i, n, o)
                                        }
                                    }
                                    return !!C && (o || (o = new rD), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            u = c.length;
                                        if (u != no(t).length && !a) return !1;
                                        for (var h = u; h--;) {
                                            var l = c[h];
                                            if (!(a ? l in t : eT.call(t, l))) return !1
                                        }
                                        var f = o.get(e),
                                            p = o.get(t);
                                        if (f && p) return f == t && p == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++h < u;) {
                                            var y = e[l = c[h]],
                                                v = t[l];
                                            if (n) var m = a ? n(v, y, l, t, e, o) : n(y, v, l, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == l)
                                        }
                                        if (d && !g) {
                                            var b = e.constructor,
                                                w = t.constructor;
                                            b != w && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r6, s) : e != e && t != t)
                            }

                            function r2(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eD(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var u = (c = i[s])[0],
                                        h = e[u],
                                        l = c[1];
                                    if (a && c[2]) {
                                        if (h === r && !(u in e)) return !1
                                    } else {
                                        var f = new rD;
                                        if (n) var p = n(h, l, u, e, t, f);
                                        if (!(p === r ? r6(l, h, 3, n, f) : p)) return !1
                                    }
                                }
                                return !0
                            }

                            function r8(e) {
                                return !(!sV(e) || ek && ek in e) && (sB(e) ? eU : eu).test(nq(e))
                            }

                            function r4(e) {
                                return "function" == typeof e ? e : null == e ? oU : "object" == typeof e ? sj(e) ? ir(e[0], e[1]) : it(e) : oW(e)
                            }

                            function r9(e) {
                                if (!nP(e)) return t1(e);
                                var t = [];
                                for (var r in eD(e)) eT.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r7(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sL(e) ? em(e.length) : [];
                                return rU(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = np(e);
                                return 1 == t.length && t[0][2] ? nC(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r2(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nD(e) && (i = t) == i && !sV(i) ? nC(nU(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r6(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rH(t, function(o, a) {
                                    if (s || (s = new rD), sV(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nA(e, i),
                                            u = nA(t, i),
                                            h = a.get(u);
                                        if (h) {
                                            rP(e, i, h);
                                            return
                                        }
                                        var l = o ? o(c, u, i + "", e, t, a) : r,
                                            f = l === r;
                                        if (f) {
                                            var p = sj(u),
                                                d = !p && sq(u),
                                                g = !p && !d && s0(u);
                                            l = u, p || d || g ? sj(c) ? l = c : sU(c) ? l = iB(c) : d ? (f = !1, l = iM(u, !0)) : g ? (f = !1, l = iU(u, !0)) : l = [] : sY(u) || sk(u) ? (l = c, sk(c) ? l = s9(c) : (!sV(c) || sB(c)) && (l = nb(u))) : f = !1
                                        }
                                        f && (a.set(u, l), s(l, u, n, o, a), a.delete(u)), rP(e, i, l)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nA(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rP(e, a, c)
                                    }
                                }, op)
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return n_(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tf(t, function(e) {
                                    return sj(e) ? function(t) {
                                        return rY(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oU];
                                var i = -1;
                                return t = tf(t, tA(nl())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tf(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = iq(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rY(e, o);
                                    r(a, o) && id(s, iN(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? t_ : tw,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iB(t)), r && (a = tf(e, tA(r))); ++s < o;)
                                    for (var c = 0, u = t[s], h = r ? r(u) : u;
                                        (c = n(a, h, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function iu(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        n_(n) ? e5.call(e, n, 1) : iS(e, n)
                                    }
                                }
                                return e
                            }

                            function ih(e, t) {
                                return e + tJ(t8() * (t - e + 1))
                            }

                            function il(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tJ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nN(nO(e, t, oU), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sV(e)) return e;
                                t = iN(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var u = nU(t[s]),
                                        h = i;
                                    if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
                                    if (s != a) {
                                        var l = c[u];
                                        (h = n ? n(l, u, c) : r) === r && (h = sV(l) ? l : n_(t[s + 1]) ? [] : {})
                                    }
                                    rC(c, u, h), c = c[u]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : oU,
                                iy = e9 ? function(e, t) {
                                    return e9(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oj(t),
                                        writable: !0
                                    })
                                } : oU;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function im(e, t) {
                                var r;
                                return rU(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function ib(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sZ(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return iw(e, t, oU, r)
                            }

                            function iw(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, u = sZ(t), h = t === r; s < o;) {
                                    var l = tJ((s + o) / 2),
                                        f = i(e[l]),
                                        p = f !== r,
                                        d = null === f,
                                        g = f == f,
                                        y = sZ(f);
                                    if (a) var v = n || g;
                                    else v = h ? g && (n || p) : c ? g && p && (n || !d) : u ? g && p && !d && (n || !y) : !d && !y && (n ? f <= t : f < t);
                                    v ? s = l + 1 : o = l
                                }
                                return t3(o, 4294967294)
                            }

                            function i_(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sR(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iE(e) {
                                return "number" == typeof e ? e : sZ(e) ? a : +e
                            }

                            function iD(e) {
                                if ("string" == typeof e) return e;
                                if (sj(e)) return tf(e, iD) + "";
                                if (sZ(e)) return rp ? rp.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iI(e, t, r) {
                                var i = -1,
                                    n = th,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = tl;
                                else if (s >= 200) {
                                    var u = t ? null : i9(e);
                                    if (u) return tB(u);
                                    o = !1, n = tT, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var h = e[i],
                                        l = t ? t(h) : h;
                                    if (h = r || 0 !== h ? h : 0, o && l == l) {
                                        for (var f = c.length; f--;)
                                            if (c[f] === l) continue e;
                                        t && c.push(l), a.push(h)
                                    } else n(c, l, r) || (c !== a && c.push(l), a.push(h))
                                }
                                return a
                            }

                            function iS(e, t) {
                                return t = iN(t, e), null == (e = nx(e, t)) || delete e[nU(nQ(t))]
                            }

                            function iP(e, t, r, i) {
                                return id(e, t, r(rY(e, t)), i)
                            }

                            function iC(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iO(e, t) {
                                var r = e;
                                return r instanceof rm && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tp([e], t.args))
                                }, r)
                            }

                            function ix(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iI(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rL(s[n] || o, e[a], t, r));
                                return iI(rF(s, 1), t, r)
                            }

                            function iA(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iR(e) {
                                return sU(e) ? e : []
                            }

                            function iT(e) {
                                return "function" == typeof e ? e : oU
                            }

                            function iN(e, t) {
                                return sj(e) ? e : nD(e, t) ? [e] : nL(s7(e))
                            }

                            function ik(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var ij = tv || function(e) {
                                return e3.clearTimeout(e)
                            };

                            function iM(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eH ? eH(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iL(e) {
                                var t = new e.constructor(e.byteLength);
                                return new e$(t).set(new e$(e)), t
                            }

                            function iU(e, t) {
                                var r = t ? iL(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function iq(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sZ(e),
                                        a = t !== r,
                                        c = null === t,
                                        u = t == t,
                                        h = sZ(t);
                                    if (!c && !h && !o && e > t || o && a && u && !c && !h || n && a && u || !i && u || !s) return 1;
                                    if (!n && !o && !h && e < t || h && i && s && !n && !o || c && i && s || !a && s || !u) return -1
                                }
                                return 0
                            }

                            function iz(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t5(s - o, 0), h = em(c + u), l = !i; ++a < c;) h[a] = t[a];
                                for (; ++n < o;)(l || n < s) && (h[r[n]] = e[n]);
                                for (; u--;) h[a++] = e[n++];
                                return h
                            }

                            function i$(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, h = t5(s - a, 0), l = em(h + u), f = !i; ++n < h;) l[n] = e[n];
                                for (var p = n; ++c < u;) l[p + c] = t[c];
                                for (; ++o < a;)(f || n < s) && (l[p + r[o]] = e[n++]);
                                return l
                            }

                            function iB(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iF(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        u = n ? n(i[c], e[c], c, i, e) : r;
                                    u === r && (u = e[c]), s ? rR(i, c, u) : rC(i, c, u)
                                }
                                return i
                            }

                            function iH(e, t) {
                                return function(r, i) {
                                    var n = sj(r) ? to : rx,
                                        s = t ? t() : {};
                                    return n(r, e, nl(i, 2), s)
                                }
                            }

                            function iV(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nE(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eD(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iK(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sL(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eD(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iW(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eD(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iG(e) {
                                return function(t) {
                                    var i = tU(t = s7(t)) ? tH(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? ik(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iY(e) {
                                return function(t) {
                                    return td(oT(oI(t).replace(eB, "")), e, "")
                                }
                            }

                            function iJ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sV(i) ? i : r
                                }
                            }

                            function iQ(e) {
                                return function(t, i, n) {
                                    var s = eD(t);
                                    if (!sL(t)) {
                                        var o = nl(i, 3);
                                        t = of (t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iX(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eP(i);
                                        if (o && !c && "wrapper" == nu(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var u = nu(a = t[s]),
                                            h = "wrapper" == u ? nc(a) : r;
                                        c = h && nI(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[nu(h[0])].apply(c, h[3]) : 1 == a.length && nI(a) ? c[u]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sj(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iZ(e, t, i, n, s, o, a, c, u, h) {
                                var l = 128 & t,
                                    f = 1 & t,
                                    p = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = p ? r : iJ(e);
                                return function v() {
                                    for (var m = arguments.length, b = em(m), w = m; w--;) b[w] = arguments[w];
                                    if (d) var _ = nh(v),
                                        E = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(b, _);
                                    if (n && (b = iz(b, n, s, d)), o && (b = i$(b, o, a, d)), m -= E, d && m < h) {
                                        var D = t$(b, _);
                                        return i8(e, t, iZ, v.placeholder, i, b, D, c, u, h - m)
                                    }
                                    var I = f ? i : this,
                                        S = p ? I[e] : e;
                                    return m = b.length, c ? b = function(e, t) {
                                        for (var i = e.length, n = t3(t.length, i), s = iB(e); n--;) {
                                            var o = t[n];
                                            e[n] = n_(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(b, c) : g && m > 1 && b.reverse(), l && u < m && (b.length = u), this && this !== e3 && this instanceof v && (S = y || iJ(S)), S.apply(I, b)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rK(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iD(i), n = iD(n)) : (i = iE(i), n = iE(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tf(t, tA(nl())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i3(e, t) {
                                var i = (t = t === r ? " " : iD(t)).length;
                                if (i < 2) return i ? il(t, e) : t;
                                var n = il(t, tY(e / tF(t)));
                                return tU(t) ? ik(tH(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i6(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nE(t, i, n) && (i = n = r), t = s6(t), i === r ? (i = t, t = 0) : i = s6(i), n = n === r ? t < i ? 1 : -1 : s6(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tY((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i2(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s4(t), r = s4(r)), e(t, r)
                                }
                            }

                            function i8(e, t, i, n, s, o, a, c, u, h) {
                                var l = 8 & t,
                                    f = l ? a : r,
                                    p = l ? r : a,
                                    d = l ? o : r,
                                    g = l ? r : o;
                                t |= l ? 32 : 64, 4 & (t &= ~(l ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, f, g, p, c, u, h],
                                    v = i.apply(r, y);
                                return nI(e) && nR(v, y), v.placeholder = n, nk(v, e, t)
                            }

                            function i4(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = s4(e), (r = null == r ? 0 : t3(s2(r), 292)) && tZ(e)) {
                                        var i = (s7(e) + "e").split("e");
                                        return +((i = (s7(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i9 = rt && 1 / tB(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oF;

                            function i7(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? tq(t) : n == _ ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tf(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, u, h) {
                                var l = 2 & t;
                                if (!l && "function" != typeof e) throw new eP(i);
                                var f = o ? o.length : 0;
                                if (f || (t &= -97, o = a = r), u = u === r ? u : t5(s2(u), 0), h = h === r ? h : s2(h), f -= a ? a.length : 0, 64 & t) {
                                    var p = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = l ? r : nc(e),
                                    y = [e, t, n, o, a, p, d, c, u, h];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var u = e[3];
                                                e[3] = u ? iz(u, c, t[4]) : c, e[4] = u ? t$(e[3], s) : t[4]
                                            }(c = t[5]) && (u = e[5], e[5] = u ? i$(u, c, t[6]) : c, e[6] = u ? t$(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (h = y[9] = y[9] === r ? l ? 0 : e.length : t5(y[9] - f, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, b = h, w = iJ(v), T = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = nh(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : t$(i, s);
                                    return (t -= o.length) < b ? i8(v, m, iZ, e.placeholder, r, i, o, r, r, b - t) : ts(this && this !== e3 && this instanceof e ? w : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? T = iZ.apply(r, y) : (_ = e, E = t, D = n, I = o, S = 1 & E, P = iJ(_), T = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = I.length, s = em(n + r), o = this && this !== e3 && this instanceof e ? P : _; ++i < n;) s[i] = I[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, S ? D : this, s)
                                });
                                else var v, m, b, w, _, E, D, I, S, P, C, O, x, A, R, T = (C = e, O = t, x = n, A = 1 & O, R = iJ(C), function e() {
                                    return (this && this !== e3 && this instanceof e ? R : C).apply(A ? x : this, arguments)
                                });
                                return nk((g ? ig : nR)(T, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sR(e, ex[i]) && !eT.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sV(e) && sV(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sY(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    u = t.length;
                                if (c != u && !(a && u > c)) return !1;
                                var h = o.get(e),
                                    l = o.get(t);
                                if (h && l) return h == t && l == e;
                                var f = -1,
                                    p = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++f < c;) {
                                    var g = e[f],
                                        y = t[f];
                                    if (n) var v = a ? n(y, g, f, t, e, o) : n(g, y, f, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        p = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tT(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            p = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        p = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), p
                            }

                            function ns(e) {
                                return nN(nO(e, r, nK), e + "")
                            }

                            function no(e) {
                                return rJ(e, of , ng)
                            }

                            function na(e) {
                                return rJ(e, op, ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oF;

                            function nu(e) {
                                for (var t = e.name + "", r = rs[t], i = eT.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nh(e) {
                                return (eT.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nl() {
                                var e = rd.iteratee || oq;
                                return e = e === oq ? r4 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function nf(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function np(e) {
                                for (var t = of (e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sV(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r8(i) ? i : r
                            }
                            var ng = tQ ? function(e) {
                                    return null == e ? [] : tu(tQ(e = eD(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oJ,
                                ny = tQ ? function(e) {
                                    for (var t = []; e;) tp(t, ng(e)), e = eK(e);
                                    return t
                                } : oJ,
                                nv = rQ;

                            function nm(e, t, r) {
                                t = iN(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nU(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sH(n) && n_(o, n) && (sj(e) || sk(e))
                            }

                            function nb(e) {
                                return "function" != typeof e.constructor || nP(e) ? {} : rg(eK(e))
                            }

                            function nw(e) {
                                return sj(e) || sk(e) || !!(e6 && e && e[e6])
                            }

                            function n_(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && el.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nE(e, t, r) {
                                if (!sV(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sL(r) && n_(t, r.length)) : "string" == i && t in r) && sR(r[t], e)
                            }

                            function nD(e, t) {
                                if (sj(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sZ(e)) || W.test(e) || !K.test(e) || null != t && e in eD(t)
                            }

                            function nI(e) {
                                var t = nu(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t9 && nv(new t9(new ArrayBuffer(1))) != P || t7 && nv(new t7) != y || re && nv(re.resolve()) != b || rt && nv(new rt) != _ || rr && nv(new rr) != I) && (nv = function(e) {
                                var t = rQ(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? nq(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return P;
                                    case ra:
                                        return y;
                                    case rc:
                                        return b;
                                    case ru:
                                        return _;
                                    case rh:
                                        return I
                                }
                                return t
                            });
                            var nS = eA ? sB : oQ;

                            function nP(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || ex)
                            }

                            function nC(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eD(i))
                                }
                            }

                            function nO(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nx(e, t) {
                                return t.length < 2 ? e : rY(e, iv(t, 0, -1))
                            }

                            function nA(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nR = nj(ig),
                                nT = tG || function(e, t) {
                                    return e3.setTimeout(e, t)
                                },
                                nN = nj(iy);

                            function nk(e, t, r) {
                                var i, n, s = t + "";
                                return nN(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(Z, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !th(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nj(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t6(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nM(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = ih(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nL = (ey = (eg = sS(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(G, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nU(e) {
                                if ("string" == typeof e || sZ(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nq(e) {
                                if (null != e) {
                                    try {
                                        return eR.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function nz(e) {
                                if (e instanceof rm) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iB(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var n$ = ip(function(e, t) {
                                    return sU(e) ? rL(e, rF(t, 1, sU, !0)) : []
                                }),
                                nB = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sU(i) && (i = r), sU(e) ? rL(e, rF(t, 1, sU, !0), nl(i, 2)) : []
                                }),
                                nF = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sU(i) && (i = r), sU(e) ? rL(e, rF(t, 1, sU, !0), r, i) : []
                                });

                            function nH(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tb(e, nl(t, 3), n)
                            }

                            function nV(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s2(i), s = i < 0 ? t5(n + s, 0) : t3(s, n - 1)), tb(e, nl(t, 3), s, !0)
                            }

                            function nK(e) {
                                return (null == e ? 0 : e.length) ? rF(e, 1) : []
                            }

                            function nW(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nG = ip(function(e) {
                                    var t = tf(e, iR);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nY = ip(function(e) {
                                    var t = nQ(e),
                                        i = tf(e, iR);
                                    return t === nQ(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nl(t, 2)) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nQ(e),
                                        i = tf(e, iR);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nQ(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nX = ip(nZ);

                            function nZ(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rT(e, t);
                                return iu(e, tf(t, function(e) {
                                    return n_(e, r) ? +e : e
                                }).sort(iq)), i
                            });

                            function n1(e) {
                                return null == e ? e : t4.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iI(rF(e, 1, sU, !0))
                                }),
                                n3 = ip(function(e) {
                                    var t = nQ(e);
                                    return sU(t) && (t = r), iI(rF(e, 1, sU, !0), nl(t, 2))
                                }),
                                n6 = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, iI(rF(e, 1, sU, !0), r, t)
                                });

                            function n2(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tu(e, function(e) {
                                    if (sU(e)) return t = t5(e.length, t), !0
                                }), tO(t, function(t) {
                                    return tf(e, tI(t))
                                })
                            }

                            function n8(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n2(e);
                                return null == t ? i : tf(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n4 = ip(function(e, t) {
                                    return sU(e) ? rL(e, t) : []
                                }),
                                n9 = ip(function(e) {
                                    return ix(tu(e, sU))
                                }),
                                n7 = ip(function(e) {
                                    var t = nQ(e);
                                    return sU(t) && (t = r), ix(tu(e, sU), nl(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, ix(tu(e, sU), r, t)
                                }),
                                st = ip(n2),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n8(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rT(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof rm && n_(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iH(function(e, t, r) {
                                    eT.call(e, r) ? ++e[r] : rR(e, r, 1)
                                }),
                                sa = iQ(nH),
                                sc = iQ(nV);

                            function su(e, t) {
                                return (sj(e) ? ta : rU)(e, nl(t, 3))
                            }

                            function sh(e, t) {
                                return (sj(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : rq)(e, nl(t, 3))
                            }
                            var sl = iH(function(e, t, r) {
                                    eT.call(e, r) ? e[r].push(t) : rR(e, r, [t])
                                }),
                                sf = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sL(e) ? em(e.length) : [];
                                    return rU(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sp = iH(function(e, t, r) {
                                    rR(e, r, t)
                                });

                            function sd(e, t) {
                                return (sj(e) ? tf : ie)(e, nl(t, 3))
                            }
                            var sg = iH(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nE(e, t[0], t[1]) ? t = [] : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rF(t, 1), [])
                                }),
                                sv = tS || function() {
                                    return e3.Date.now()
                                };

                            function sm(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function sb(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eP(i);
                                return e = s2(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sw = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = t$(r, nh(sw));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                s_ = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = t$(r, nh(s_));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sE(e, t, n) {
                                var s, o, a, c, u, h, l = 0,
                                    f = !1,
                                    p = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eP(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, l = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - h,
                                        n = e - l;
                                    return h === r || i >= t || i < 0 || p && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return m(n);
                                    u = nT(v, (e = n - h, r = n - l, i = t - e, p ? t3(i, a - r) : i))
                                }

                                function m(e) {
                                    return u = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function b() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, h = i, n) {
                                        if (u === r) return l = e = h, u = nT(v, t), f ? g(e) : c;
                                        if (p) return ij(u), u = nT(v, t), g(h)
                                    }
                                    return u === r && (u = nT(v, t)), c
                                }
                                return t = s4(t) || 0, sV(n) && (f = !!n.leading, a = (p = "maxWait" in n) ? t5(s4(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), b.cancel = function() {
                                    u !== r && ij(u), l = 0, s = h = o = u = r
                                }, b.flush = function() {
                                    return u === r ? c : m(sv())
                                }, b
                            }
                            var sD = ip(function(e, t) {
                                    return rM(e, 1, t)
                                }),
                                sI = ip(function(e, t, r) {
                                    return rM(e, s4(t) || 0, r)
                                });

                            function sS(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eP(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sS.Cache || r_), r
                            }

                            function sP(e) {
                                if ("function" != typeof e) throw new eP(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sS.Cache = r_;
                            var sC = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sj(t[0]) ? tf(t[0], tA(nl())) : tf(rF(t, 1), tA(nl()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t3(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sO = ip(function(e, t) {
                                    var i = t$(t, nh(sO));
                                    return ne(e, 32, r, t, i)
                                }),
                                sx = ip(function(e, t) {
                                    var i = t$(t, nh(sx));
                                    return ne(e, 64, r, t, i)
                                }),
                                sA = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sR(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sT = i2(rX),
                                sN = i2(function(e, t) {
                                    return e >= t
                                }),
                                sk = r3(function() {
                                    return arguments
                                }()) ? r3 : function(e) {
                                    return sK(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sj = em.isArray,
                                sM = e7 ? tA(e7) : function(e) {
                                    return sK(e) && rQ(e) == S
                                };

                            function sL(e) {
                                return null != e && sH(e.length) && !sB(e)
                            }

                            function sU(e) {
                                return sK(e) && sL(e)
                            }
                            var sq = tX || oQ,
                                sz = te ? tA(te) : function(e) {
                                    return sK(e) && rQ(e) == f
                                };

                            function s$(e) {
                                if (!sK(e)) return !1;
                                var t = rQ(e);
                                return t == p || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sY(e)
                            }

                            function sB(e) {
                                if (!sV(e)) return !1;
                                var t = rQ(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sF(e) {
                                return "number" == typeof e && e == s2(e)
                            }

                            function sH(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sV(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sK(e) {
                                return null != e && "object" == typeof e
                            }
                            var sW = tt ? tA(tt) : function(e) {
                                return sK(e) && nv(e) == y
                            };

                            function sG(e) {
                                return "number" == typeof e || sK(e) && rQ(e) == v
                            }

                            function sY(e) {
                                if (!sK(e) || rQ(e) != m) return !1;
                                var t = eK(e);
                                if (null === t) return !0;
                                var r = eT.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eR.call(r) == eM
                            }
                            var sJ = tr ? tA(tr) : function(e) {
                                    return sK(e) && rQ(e) == w
                                },
                                sQ = ti ? tA(ti) : function(e) {
                                    return sK(e) && nv(e) == _
                                };

                            function sX(e) {
                                return "string" == typeof e || !sj(e) && sK(e) && rQ(e) == E
                            }

                            function sZ(e) {
                                return "symbol" == typeof e || sK(e) && rQ(e) == D
                            }
                            var s0 = tn ? tA(tn) : function(e) {
                                    return sK(e) && sH(e.length) && !!eJ[rQ(e)]
                                },
                                s1 = i2(r7),
                                s5 = i2(function(e, t) {
                                    return e <= t
                                });

                            function s3(e) {
                                if (!e) return [];
                                if (sL(e)) return sX(e) ? tH(e) : iB(e);
                                if (e2 && e[e2]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e2]());
                                var t = nv(e);
                                return (t == y ? tq : t == _ ? tB : o_)(e)
                            }

                            function s6(e) {
                                return e ? (e = s4(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s2(e) {
                                var t = s6(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s8(e) {
                                return e ? rN(s2(e), 0, 4294967295) : 0
                            }

                            function s4(e) {
                                if ("number" == typeof e) return e;
                                if (sZ(e)) return a;
                                if (sV(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sV(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tx(e);
                                var r = ec.test(e);
                                return r || eh.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s9(e) {
                                return iF(e, op(e))
                            }

                            function s7(e) {
                                return null == e ? "" : iD(e)
                            }
                            var oe = iV(function(e, t) {
                                    if (nP(t) || sL(t)) {
                                        iF(t, of (t), e);
                                        return
                                    }
                                    for (var r in t) eT.call(t, r) && rC(e, r, t[r])
                                }),
                                ot = iV(function(e, t) {
                                    iF(t, op(t), e)
                                }),
                                or = iV(function(e, t, r, i) {
                                    iF(t, op(t), e, i)
                                }),
                                oi = iV(function(e, t, r, i) {
                                    iF(t, of (t), e, i)
                                }),
                                on = ns(rT),
                                os = ip(function(e, t) {
                                    e = eD(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nE(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = op(o), c = -1, u = a.length; ++c < u;) {
                                            var h = a[c],
                                                l = e[h];
                                            (l === r || sR(l, ex[h]) && !eT.call(e, h)) && (e[h] = o[h])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rY(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && nm(e, t, r0)
                            }
                            var ou = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = ej.call(t)), e[t] = r
                                }, oj(oU)),
                                oh = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = ej.call(t)), eT.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nl),
                                ol = ip(r5);

                            function of (e) {
                                return sL(e) ? rI(e) : r9(e)
                            }

                            function op(e) {
                                return sL(e) ? rI(e, !0) : function(e) {
                                    if (!sV(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eD(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nP(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !eT.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iV(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iV(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tf(t, function(t) {
                                        return t = iN(t, e), i || (i = t.length > 1), t
                                    }), iF(e, na(e), r), i && (r = rk(r, 7, ni));
                                    for (var n = t.length; n--;) iS(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function om(e, t) {
                                if (null == e) return {};
                                var r = tf(na(e), function(e) {
                                    return [e]
                                });
                                return t = nl(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var ob = i7( of ),
                                ow = i7(op);

                            function o_(e) {
                                return null == e ? [] : tR(e, of (e))
                            }
                            var oE = iY(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oD(t) : t)
                            });

                            function oD(e) {
                                return oR(s7(e).toLowerCase())
                            }

                            function oI(e) {
                                return (e = s7(e)) && e.replace(ef, tj).replace(eF, "")
                            }
                            var oS = iY(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oP = iY(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                oC = iG("toLowerCase"),
                                oO = iY(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                ox = iY(function(e, t, r) {
                                    return e + (r ? " " : "") + oR(t)
                                }),
                                oA = iY(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oR = iG("toUpperCase");

                            function oT(e, t, i) {
                                var n;
                                return e = s7(e), (t = i ? r : t) === r ? (n = e, eW.test(n)) ? e.match(eV) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oN = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return s$(e) ? e : new ew(e)
                                    }
                                }),
                                ok = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rR(e, t = nU(t), sw(e[t], e))
                                    }), e
                                });

                            function oj(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oM = iX(),
                                oL = iX(!0);

                            function oU(e) {
                                return e
                            }

                            function oq(e) {
                                return r4("function" == typeof e ? e : rk(e, 1))
                            }
                            var oz = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                o$ = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oB(e, t, r) {
                                var i = of (t),
                                    n = rG(t, i);
                                null != r || sV(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rG(t, of (t)));
                                var s = !(sV(r) && "chain" in r) || !!r.chain,
                                    o = sB(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iB(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tp([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oF() {}
                            var oH = i5(tf),
                                oV = i5(tc),
                                oK = i5(ty);

                            function oW(e) {
                                return nD(e) ? tI(nU(e)) : function(t) {
                                    return rY(t, e)
                                }
                            }
                            var oG = i6(),
                                oY = i6(!0);

                            function oJ() {
                                return []
                            }

                            function oQ() {
                                return !1
                            }
                            var oX = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oZ = i4("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i4("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o3 = i4("round"),
                                o6 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eP(i);
                                return e = s2(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = sm, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = sb, rd.bind = sw, rd.bindAll = ok, rd.bindKey = s_, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sj(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s2(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tY(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tp(sj(r) ? iB(r) : [r], rF(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nl();
                                return e = t ? tf(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eP(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = of (t = rk(e, 1)),
                                    function(e) {
                                        return rj(e, t, r)
                                    }
                            }, rd.constant = oj, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rA(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sE, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sD, rd.delay = sI, rd.difference = n$, rd.differenceBy = nB, rd.differenceWith = nF, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? iC(e, nl(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? iC(e, nl(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nE(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s2(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s2(n)) < 0 && (n += s), n = i > n ? 0 : s8(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sj(e) ? tu : rB)(e, nl(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rF(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rF(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s2(i), rF(sd(e, t), i)
                            }, rd.flatten = nK, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rF(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rF(e, t = t === r ? 1 : s2(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = oM, rd.flowRight = oL, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rG(e, of (e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rG(e, op(e))
                            }, rd.groupBy = sl, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nG, rd.intersectionBy = nY, rd.intersectionWith = nJ, rd.invert = ou, rd.invertBy = oh, rd.invokeMap = sf, rd.iteratee = oq, rd.keyBy = sp, rd.keys = of , rd.keysIn = op, rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nl(t, 3), rK(e, function(e, i, n) {
                                    rR(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nl(t, 3), rK(e, function(e, i, n) {
                                    rR(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rk(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rk(t, 1))
                            }, rd.memoize = sS, rd.merge = od, rd.mergeWith = og, rd.method = oz, rd.methodOf = o$, rd.mixin = oB, rd.negate = sP, rd.nthArg = function(e) {
                                return e = s2(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return om(e, sP(nl(t)))
                            }, rd.once = function(e) {
                                return sb(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sj(t) || (t = null == t ? [] : [t]), sj(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oH, rd.overArgs = sC, rd.overEvery = oV, rd.overSome = oK, rd.partial = sO, rd.partialRight = sx, rd.partition = sg, rd.pick = ov, rd.pickBy = om, rd.property = oW, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rY(e, t)
                                }
                            }, rd.pull = nX, rd.pullAll = nZ, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nl(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oG, rd.rangeRight = oY, rd.rearg = sA, rd.reject = function(e, t) {
                                return (sj(e) ? tu : rB)(e, sP(nl(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nl(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return iu(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eP(i);
                                return ip(e, t = t === r ? t : s2(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), (sj(e) ? function(e, t) {
                                    return nM(iB(e), rN(t, 0, e.length))
                                } : function(e, t) {
                                    var r = o_(e);
                                    return nM(r, rN(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sj(e) ? function(e) {
                                    return nM(iB(e))
                                } : function(e) {
                                    return nM(o_(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nE(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s2(t), i = i === r ? n : s2(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? i_(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? i_(e, nl(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nE(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s7(e)) && ("string" == typeof t || null != t && !sJ(t)) && !(t = iD(t)) && tU(e) ? ik(tH(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eP(i);
                                return t = null == t ? 0 : t5(s2(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = ik(r, 0, t);
                                    return i && tp(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? iC(e, nl(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? iC(e, nl(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eP(i);
                                return sV(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sE(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s3, rd.toPairs = ob, rd.toPairsIn = ow, rd.toPath = function(e) {
                                return sj(e) ? tf(e, nU) : sZ(e) ? [e] : iB(nL(s7(e)))
                            }, rd.toPlainObject = s9, rd.transform = function(e, t, r) {
                                var i = sj(e),
                                    n = i || sq(e) || s0(e);
                                if (t = nl(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sV(e) && sB(s) ? rg(eK(e)) : {}
                                }
                                return (n ? ta : rK)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return sm(e, 1)
                            }, rd.union = n5, rd.unionBy = n3, rd.unionWith = n6, rd.uniq = function(e) {
                                return e && e.length ? iI(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iI(e, nl(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iI(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iS(e, t)
                            }, rd.unzip = n2, rd.unzipWith = n8, rd.update = function(e, t, r) {
                                return null == e ? e : iP(e, t, iT(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iP(e, t, iT(i), n)
                            }, rd.values = o_, rd.valuesIn = function(e) {
                                return null == e ? [] : tR(e, op(e))
                            }, rd.without = n4, rd.words = oT, rd.wrap = function(e, t) {
                                return sO(iT(t), e)
                            }, rd.xor = n9, rd.xorBy = n7, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return iA(e || [], t || [], rC)
                            }, rd.zipObjectDeep = function(e, t) {
                                return iA(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = ob, rd.entriesIn = ow, rd.extend = ot, rd.extendWith = or, oB(rd, rd), rd.add = oX, rd.attempt = oN, rd.camelCase = oE, rd.capitalize = oD, rd.ceil = oZ, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s4(i)) == i ? i : 0), t !== r && (t = (t = s4(t)) == t ? t : 0), rN(s4(e), t, i)
                            }, rd.clone = function(e) {
                                return rk(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rk(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rk(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rk(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rj(e, t, of (t))
                            }, rd.deburr = oI, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s7(e), t = iD(t);
                                var n = e.length,
                                    s = i = i === r ? n : rN(s2(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sR, rd.escape = function(e) {
                                return (e = s7(e)) && B.test(e) ? e.replace(z, tM) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s7(e)) && J.test(e) ? e.replace(Y, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sj(e) ? tc : rz;
                                return i && nE(e, t, i) && (t = r), n(e, nl(t, 3))
                            }, rd.find = sa, rd.findIndex = nH, rd.findKey = function(e, t) {
                                return tm(e, nl(t, 3), rK)
                            }, rd.findLast = sc, rd.findLastIndex = nV, rd.findLastKey = function(e, t) {
                                return tm(e, nl(t, 3), rW)
                            }, rd.floor = o1, rd.forEach = su, rd.forEachRight = sh, rd.forIn = function(e, t) {
                                return null == e ? e : rH(e, nl(t, 3), op)
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rV(e, nl(t, 3), op)
                            }, rd.forOwn = function(e, t) {
                                return e && rK(e, nl(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rW(e, nl(t, 3))
                            }, rd.get = oa, rd.gt = sT, rd.gte = sN, rd.has = function(e, t) {
                                return null != e && nm(e, t, rZ)
                            }, rd.hasIn = oc, rd.head = nW, rd.identity = oU, rd.includes = function(e, t, r, i) {
                                e = sL(e) ? e : o_(e), r = r && !i ? s2(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sX(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tw(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tw(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s6(t), i === r ? (i = t, t = 0) : i = s6(i), (n = e = s4(e)) >= t3(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = ol, rd.isArguments = sk, rd.isArray = sj, rd.isArrayBuffer = sM, rd.isArrayLike = sL, rd.isArrayLikeObject = sU, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sK(e) && rQ(e) == l
                            }, rd.isBuffer = sq, rd.isDate = sz, rd.isElement = function(e) {
                                return sK(e) && 1 === e.nodeType && !sY(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sL(e) && (sj(e) || "string" == typeof e || "function" == typeof e.splice || sq(e) || s0(e) || sk(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == _) return !e.size;
                                if (nP(e)) return !r9(e).length;
                                for (var r in e)
                                    if (eT.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r6(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r6(e, t, r, i) : !!n
                            }, rd.isError = s$, rd.isFinite = function(e) {
                                return "number" == typeof e && tZ(e)
                            }, rd.isFunction = sB, rd.isInteger = sF, rd.isLength = sH, rd.isMap = sW, rd.isMatch = function(e, t) {
                                return e === t || r2(e, t, np(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r2(e, t, np(t), i)
                            }, rd.isNaN = function(e) {
                                return sG(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nS(e)) throw new ew("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r8(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sG, rd.isObject = sV, rd.isObjectLike = sK, rd.isPlainObject = sY, rd.isRegExp = sJ, rd.isSafeInteger = function(e) {
                                return sF(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sQ, rd.isString = sX, rd.isSymbol = sZ, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sK(e) && nv(e) == I
                            }, rd.isWeakSet = function(e) {
                                return sK(e) && "[object WeakSet]" == rQ(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oS, rd.last = nQ, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s2(i)) < 0 ? t5(n + s, 0) : t3(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : tb(e, tE, s, !0)
                            }, rd.lowerCase = oP, rd.lowerFirst = oC, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? r$(e, oU, rX) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? r$(e, nl(t, 2), rX) : r
                            }, rd.mean = function(e) {
                                return tD(e, oU)
                            }, rd.meanBy = function(e, t) {
                                return tD(e, nl(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? r$(e, oU, r7) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? r$(e, nl(t, 2), r7) : r
                            }, rd.stubArray = oJ, rd.stubFalse = oQ, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s2(t)) : r
                            }, rd.noConflict = function() {
                                return e3._ === this && (e3._ = eL), this
                            }, rd.noop = oF, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i3(tJ(n), r) + e + i3(tY(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                return t && i < t ? e + i3(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                return t && i < t ? i3(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t2(s7(e).replace(Q, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s6(e), t === r ? (t = e, e = 0) : t = s6(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t8();
                                    return t3(e + s * (t - e + eZ("1e-" + ((s + "").length - 1))), t)
                                }
                                return ih(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sj(e) ? td : tP,
                                    n = arguments.length < 3;
                                return i(e, nl(t, 4), r, n, rU)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sj(e) ? tg : tP,
                                    n = arguments.length < 3;
                                return i(e, nl(t, 4), r, n, rq)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), il(s7(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s7(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iN(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nU(t[n])];
                                    o === r && (n = s, o = i), e = sB(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o3, rd.runInContext = e, rd.sample = function(e) {
                                return (sj(e) ? rS : function(e) {
                                    return rS(o_(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sL(e)) return sX(e) ? tF(e) : e.length;
                                var t = nv(e);
                                return t == y || t == _ ? e.size : r9(e).length
                            }, rd.snakeCase = oO, rd.some = function(e, t, i) {
                                var n = sj(e) ? ty : im;
                                return i && nE(e, t, i) && (t = r), n(e, nl(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return ib(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return iw(e, t, nl(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = ib(e, t);
                                    if (i < r && sR(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return ib(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return iw(e, t, nl(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = ib(e, t, !0) - 1;
                                    if (sR(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = ox, rd.startsWith = function(e, t, r) {
                                return e = s7(e), r = null == r ? 0 : rN(s2(r), 0, e.length), t = iD(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o6, rd.sum = function(e) {
                                return e && e.length ? tC(e, oU) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tC(e, nl(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nE(e, t, i) && (t = r), e = s7(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = of (a),
                                    u = tR(a, c),
                                    h = 0,
                                    l = t.interpolate || ep,
                                    f = "__p += '",
                                    p = eI((t.escape || ep).source + "|" + l.source + "|" + (l === V ? es : ep).source + "|" + (t.evaluate || ep).source + "|$", "g"),
                                    d = "//# sourceURL=" + (eT.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eY + "]") + `
`;
                                e.replace(p, function(t, r, i, n, a, c) {
                                    return i || (i = n), f += e.slice(h, c).replace(ed, tL), r && (s = !0, f += `' +
__e(` + r + `) +
'`), a && (o = !0, f += `';
` + a + `;
__p += '`), i && (f += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), h = c + t.length, t
                                }), f += `';
`;
                                var g = eT.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new ew("Invalid `variable` option passed into `_.template`")
                                } else f = `with (obj) {
` + f + `
}
`;
                                f = (o ? f.replace(M, "") : f).replace(L, "$1").replace(U, "$1;"), f = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
                                var y = oN(function() {
                                    return e_(c, d + "return " + f).apply(r, u)
                                });
                                if (y.source = f, s$(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s2(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t3(e, 4294967295);
                                t = nl(t), e -= 4294967295;
                                for (var n = tO(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s6, rd.toInteger = s2, rd.toLength = s8, rd.toLower = function(e) {
                                return s7(e).toLowerCase()
                            }, rd.toNumber = s4, rd.toSafeInteger = function(e) {
                                return e ? rN(s2(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s7, rd.toUpper = function(e) {
                                return s7(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return tx(e);
                                if (!e || !(t = iD(t))) return e;
                                var n = tH(e),
                                    s = tH(t),
                                    o = tN(n, s),
                                    a = tk(n, s) + 1;
                                return ik(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.slice(0, tV(e) + 1);
                                if (!e || !(t = iD(t))) return e;
                                var n = tH(e),
                                    s = tk(n, tH(t)) + 1;
                                return ik(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.replace(Q, "");
                                if (!e || !(t = iD(t))) return e;
                                var n = tH(e),
                                    s = tN(n, tH(t));
                                return ik(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sV(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s2(t.length) : i, n = "omission" in t ? iD(t.omission) : n
                                }
                                var o = (e = s7(e)).length;
                                if (tU(e)) {
                                    var a = tH(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tF(n);
                                if (c < 1) return n;
                                var u = a ? ik(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return u + n;
                                if (a && (c += u.length - c), sJ(s)) {
                                    if (e.slice(c).search(s)) {
                                        var h, l = u;
                                        for (s.global || (s = eI(s.source, s7(eo.exec(s)) + "g")), s.lastIndex = 0; h = s.exec(l);) var f = h.index;
                                        u = u.slice(0, f === r ? c : f)
                                    }
                                } else if (e.indexOf(iD(s), c) != c) {
                                    var p = u.lastIndexOf(s);
                                    p > -1 && (u = u.slice(0, p))
                                }
                                return u + n
                            }, rd.unescape = function(e) {
                                return (e = s7(e)) && $.test(e) ? e.replace(q, tK) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eN;
                                return s7(e) + t
                            }, rd.upperCase = oA, rd.upperFirst = oR, rd.each = su, rd.eachRight = sh, rd.first = nW, oB(rd, (ev = {}, rK(rd, function(e, t) {
                                eT.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                rm.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s2(i), 0);
                                    var n = this.__filtered__ && !t ? new rm(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t3(i, n.__takeCount__) : n.__views__.push({
                                        size: t3(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, rm.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                rm.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nl(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                rm.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                rm.prototype[e] = function() {
                                    return this.__filtered__ ? new rm(this) : this[r](1)
                                }
                            }), rm.prototype.compact = function() {
                                return this.filter(oU)
                            }, rm.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, rm.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, rm.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new rm(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), rm.prototype.reject = function(e) {
                                return this.filter(sP(nl(e)))
                            }, rm.prototype.slice = function(e, t) {
                                e = s2(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new rm(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s2(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, rm.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, rm.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rK(rm.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof rm,
                                        u = a[0],
                                        h = c || sj(t),
                                        l = function(e) {
                                            var t = s.apply(rd, tp([e], a));
                                            return n && f ? t[0] : t
                                        };
                                    h && i && "function" == typeof u && 1 != u.length && (c = h = !1);
                                    var f = this.__chain__,
                                        p = !!this.__actions__.length,
                                        d = o && !f,
                                        g = c && !p;
                                    if (!o && h) {
                                        t = g ? t : new rm(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [l],
                                            thisArg: r
                                        }), new rv(y, f)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(l), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = eC[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sj(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sj(r) ? r : [], e)
                                    })
                                }
                            }), rK(rm.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    eT.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iZ(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], rm.prototype.clone = function() {
                                var e = new rm(this.__wrapped__);
                                return e.__actions__ = iB(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iB(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iB(this.__views__), e
                            }, rm.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new rm(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, rm.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sj(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t3(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = i ? a : o - 1,
                                    h = this.__iteratees__,
                                    l = h.length,
                                    f = 0,
                                    p = t3(c, this.__takeCount__);
                                if (!r || !i && n == c && p == c) return iO(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && f < p;) {
                                    u += t;
                                    for (var g = -1, y = e[u]; ++g < l;) {
                                        var v = h[g],
                                            m = v.iteratee,
                                            b = v.type,
                                            w = m(y);
                                        if (2 == b) y = w;
                                        else if (!w) {
                                            if (1 == b) continue e;
                                            break e
                                        }
                                    }
                                    d[f++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s3(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = nz(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof rm) {
                                    var t = e;
                                    return this.__actions__.length && (t = new rm(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iO(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e2 && (rd.prototype[e2] = function() {
                                return this
                            }), rd
                        }();
                    e2 ? ((e2.exports = tW)._ = tW, e6._ = tW) : e3._ = tW
                }).call(iF)
            }(iH, iH.exports);
            var iV = Object.defineProperty,
                iK = Object.defineProperties,
                iW = Object.getOwnPropertyDescriptors,
                iG = Object.getOwnPropertySymbols,
                iY = Object.prototype.hasOwnProperty,
                iJ = Object.prototype.propertyIsEnumerable,
                iQ = (e, t, r) => t in e ? iV(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iX = (e, t) => {
                    for (var r in t || (t = {})) iY.call(t, r) && iQ(e, r, t[r]);
                    if (iG)
                        for (var r of iG(t)) iJ.call(t, r) && iQ(e, r, t[r]);
                    return e
                },
                iZ = (e, t) => iK(e, iW(t));

            function i0(e, t, r) {
                var i;
                let n = (0, o.DQe)(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function i1(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function i5(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function i3(e = {}, t = {}) {
                let r = i6(e),
                    i = i6(t);
                return iH.exports.merge(r, i)
            }

            function i6(e) {
                var t, r, i, n;
                let s = {};
                if (!(0, o.L5o)(e)) return s;
                for (let [a, c] of Object.entries(e)) {
                    let e = (0, o.gpE)(a) ? [a] : c.chains,
                        u = c.methods || [],
                        h = c.events || [],
                        l = c.rpcMap || {},
                        f = (0, o.Maj)(a);
                    s[f] = iZ(iX(iX({}, s[f]), c), {
                        chains: (0, o.eGA)(e, null == (t = s[f]) ? void 0 : t.chains),
                        methods: (0, o.eGA)(u, null == (r = s[f]) ? void 0 : r.methods),
                        events: (0, o.eGA)(h, null == (i = s[f]) ? void 0 : i.events),
                        rpcMap: iX(iX({}, l), null == (n = s[f]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function i2(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function i8(e) {
                let t = {};
                for (let [r, i] of Object.entries(e)) {
                    let e = i.methods || [],
                        n = i.events || [],
                        s = i.accounts || [],
                        a = (0, o.gpE)(r) ? [r] : i.chains ? i.chains : i5(i.accounts);
                    t[r] = {
                        chains: a,
                        methods: e,
                        events: n,
                        accounts: s
                    }
                }
                return t
            }

            function i4(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : isNaN(Number(e = e.includes(":") ? e.split(":")[1] : e)) ? e : Number(e)
            }
            let i9 = {},
                i7 = e => i9[e],
                ne = (e, t) => {
                    i9[e] = t
                };
            class nt {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(iB, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = i1(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || i0(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
            }
            class nr {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(iB, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || i0(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(i1(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0",
                        n = parseInt(i = i.startsWith("0x") ? i : `0x${i}`, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class ni {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(iB, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = i1(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || i0(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
            }
            class nn {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(iB, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = i1(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || i0(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
            }
            class ns {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(iB, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = i1(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
            }
            class no {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(iB, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = i1(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || i0(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
            }
            class na {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(iB, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = i1(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || i0(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new te(new iq(r, i7("disableProviderPing")))
                }
            }
            class nc {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = i7("events"), this.client = i7("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || i0(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(iB, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || i0(e, this.namespace);
                    return typeof r > "u" ? void 0 : new te(new iq(r, i7("disableProviderPing")))
                }
            }
            var nu = Object.defineProperty,
                nh = Object.defineProperties,
                nl = Object.getOwnPropertyDescriptors,
                nf = Object.getOwnPropertySymbols,
                np = Object.prototype.hasOwnProperty,
                nd = Object.prototype.propertyIsEnumerable,
                ng = (e, t, r) => t in e ? nu(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ny = (e, t) => {
                    for (var r in t || (t = {})) np.call(t, r) && ng(e, r, t[r]);
                    if (nf)
                        for (var r of nf(t)) nd.call(t, r) && ng(e, r, t[r]);
                    return e
                },
                nv = (e, t) => nh(e, nl(t));
            class nm {
                constructor(e) {
                    this.events = new(s()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : V()(ec({
                        level: e ? .logger || iz
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new nm(e);
                    return await t.initialize(), t
                }
                async request(e, t, r) {
                    let [i, n] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(i).request({
                        request: ny({}, e),
                        chainId: `${i}:${n}`,
                        topic: this.session.topic,
                        expiry: r
                    })
                }
                sendAsync(e, t, r, i) {
                    let n = new Date().getTime();
                    this.request(e, r, i).then(e => t(null, eQ(n, e))).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: (0, o.D6H)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                async authenticate(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    this.setNamespaces(e), await this.cleanupPendingPairings();
                    let {
                        uri: t,
                        response: r
                    } = await this.client.authenticate(e);
                    t && (this.uri = t, this.events.emit("display_uri", t));
                    let i = await r();
                    if (this.session = i.session, this.session) {
                        let e = i8(this.session.namespaces);
                        this.namespaces = i3(this.namespaces, e), this.persist("namespaces", this.namespaces), this.onConnect()
                    }
                    return i
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e;
                            let t = i8(e.namespaces);
                            this.namespaces = i3(this.namespaces, t), this.persist("namespaces", this.namespaces)
                        }).catch(e => {
                            if (e.message !== r7) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if ((0, o.qt8)(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await iP.init({
                        logger: this.providerOpts.logger || iz,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => (0, o.Maj)(e)))];
                    ne("client", this.client), ne("events", this.events), ne("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = i5(t),
                            i = nv(ny({}, i3(this.namespaces, this.optionalNamespaces)[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new nr({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new ni({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new nn({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new nt({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new ns({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new no({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new na({
                                    namespace: i
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new nc({
                                    namespace: i
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && (0, o.qt8)(e) && this.events.emit("accountsChanged", e.map(i2))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = (0, o.Maj)(e),
                                n = i4(e) !== i4(r) ? `${i}:${i4(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = nv(ny({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", nv(ny({}, (0, o.D6H)("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(iB, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => (0, o.Maj)(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = (0, o.Maj)(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    if (!this.namespaces) return;
                    let [r, i] = this.validateChain(e);
                    i && (t || this.getProvider(r).setDefaultChain(i), this.namespaces[r] ? this.namespaces[r].defaultChain = i : this.namespaces[`${r}:${i}`] ? this.namespaces[`${r}:${i}`].defaultChain = i : this.namespaces[`${r}:${i}`] = {
                        defaultChain: i
                    }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i))
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${i$}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${i$}/${e}`)
                }
            }
            let nb = ["eth_sendTransaction", "personal_sign"],
                nw = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"],
                n_ = ["chainChanged", "accountsChanged"],
                nE = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var nD = Object.defineProperty,
                nI = Object.defineProperties,
                nS = Object.getOwnPropertyDescriptors,
                nP = Object.getOwnPropertySymbols,
                nC = Object.prototype.hasOwnProperty,
                nO = Object.prototype.propertyIsEnumerable,
                nx = (e, t, r) => t in e ? nD(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nA = (e, t) => {
                    for (var r in t || (t = {})) nC.call(t, r) && nx(e, r, t[r]);
                    if (nP)
                        for (var r of nP(t)) nO.call(t, r) && nx(e, r, t[r]);
                    return e
                },
                nR = (e, t) => nI(e, nS(t));

            function nT(e) {
                return Number(e[0].split(":")[1])
            }

            function nN(e) {
                return `0x${e.toString(16)}`
            }
            class nk {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new nk;
                    return await t.initialize(e), t
                }
                async request(e, t) {
                    return await this.signer.request(e, this.formatChainId(this.chainId), t)
                }
                sendAsync(e, t, r) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r)
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: a,
                            rpcMap: c
                        } = e;
                        if (!(0, o.qt8)(t)) throw Error("Invalid chains");
                        let u = {
                                chains: t,
                                methods: i || nb,
                                events: s || n_,
                                rpcMap: nA({}, t.length ? {
                                    [nT(t)]: c[nT(t)]
                                } : {})
                            },
                            h = s ? .filter(e => !n_.includes(e)),
                            l = i ? .filter(e => !nb.includes(e));
                        if (!r && !a && !n && !(null != h && h.length) && !(null != l && l.length)) return {
                            required: t.length ? u : void 0
                        };
                        let f = {
                            chains: [...new Set(h ? .length && l ? .length || !r ? u.chains.concat(r || []) : r)],
                            methods: [...new Set(u.methods.concat(null != n && n.length ? n : nw))],
                            events: [...new Set(u.events.concat(null != a && a.length ? a : nE))],
                            rpcMap: c
                        };
                        return {
                            required: t.length ? u : void 0,
                            optional: r.length ? f : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(nR(nA({
                                namespaces: nA({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = (0, o.guN)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: nN(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async authenticate(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts({
                        chains: e ? .chains
                    });
                    try {
                        let t = await new Promise(async (t, r) => {
                                var i;
                                this.rpc.showQrModal && (null == (i = this.modal) || i.subscribeModal(e => {
                                    e.open || this.signer.session || (this.signer.abortPairingAttempt(), r(Error("Connection request reset. Please try again.")))
                                })), await this.signer.authenticate(nR(nA({}, e), {
                                    chains: this.rpc.chains
                                })).then(e => {
                                    t(e)
                                }).catch(e => {
                                    r(Error(e.message))
                                })
                            }),
                            r = t.session;
                        if (r) {
                            let e = (0, o.guN)(r.namespaces, [this.namespace]);
                            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e), this.setAccounts(e), this.events.emit("connect", {
                                chainId: nN(this.chainId)
                            })
                        }
                        return t
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", nN(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", nR(nA({}, (0, o.D6H)("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", nN(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || nb : [],
                        a = i.length ? e ? .events || n_ : [],
                        c = e ? .optionalMethods || [],
                        u = e ? .optionalEvents || [],
                        h = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        l = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: h,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: l,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? nT(this.rpc.chains) : nT(this.rpc.optionalChains), this.signer = await nm.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(9343).then(r.bind(r, 59343));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(nA({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && (0, o.qt8)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && (0, o.qt8)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (this.session) try {
                        let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                            t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                        this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                    } catch (e) {
                        this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch(e => this.signer.logger.warn(e))
                    }
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let nj = nk
        },
        80699: function(e, t) {
            var r = "undefined" != typeof self ? self : this,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            (function(e) {
                var t = {
                    searchParams: "URLSearchParams" in i,
                    iterable: "Symbol" in i && "iterator" in Symbol,
                    blob: "FileReader" in i && "Blob" in i && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in i,
                    arrayBuffer: "ArrayBuffer" in i
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    n = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function s(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function o(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function a(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function c(e) {
                    this.map = {}, e instanceof c ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function u(e) {
                    if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function h(e) {
                    return new Promise(function(t, r) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            r(e.error)
                        }
                    })
                }

                function l(e) {
                    var t = new FileReader,
                        r = h(t);
                    return t.readAsArrayBuffer(e), r
                }

                function f(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function p() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var r;
                                t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || n(e)) ? this._bodyArrayBuffer = f(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = u(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
                    }), this.text = function() {
                        var e, t, r, i = u(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, r = h(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, t.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                c.prototype.append = function(e, t) {
                    e = s(e), t = o(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, c.prototype.delete = function(e) {
                    delete this.map[s(e)]
                }, c.prototype.get = function(e) {
                    return e = s(e), this.has(e) ? this.map[e] : null
                }, c.prototype.has = function(e) {
                    return this.map.hasOwnProperty(s(e))
                }, c.prototype.set = function(e, t) {
                    this.map[s(e)] = o(t)
                }, c.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, c.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), a(e)
                }, c.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), a(e)
                }, c.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), a(e)
                }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function g(e, t) {
                    var r, i, n = (t = t || {}).body;
                    if (e instanceof g) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new c(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), d.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }

                function y(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                i = r.shift().replace(/\+/g, " "),
                                n = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(n))
                        }
                    }), t
                }

                function v(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
                }
                g.prototype.clone = function() {
                    return new g(this, {
                        body: this._bodyInit
                    })
                }, p.call(g.prototype), p.call(v.prototype), v.prototype.clone = function() {
                    return new v(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new c(this.headers),
                        url: this.url
                    })
                }, v.error = function() {
                    var e = new v(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var m = [301, 302, 303, 307, 308];
                v.redirect = function(e, t) {
                    if (-1 === m.indexOf(t)) throw RangeError("Invalid status code");
                    return new v(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = i.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function b(r, i) {
                    return new Promise(function(n, s) {
                        var o = new g(r, i);
                        if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function u() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        i = r.shift().trim();
                                    if (i) {
                                        var n = r.join(":").trim();
                                        t.append(i, n)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"), n(new v("response" in a ? a.response : a.responseText, r))
                        }, a.onerror = function() {
                            s(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            s(new e.DOMException("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), o.signal && (o.signal.addEventListener("abort", u), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", u)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                b.polyfill = !0, i.fetch || (i.fetch = b, i.Headers = c, i.Request = g, i.Response = v), e.Headers = c, e.Request = g, e.Response = v, e.fetch = b, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        72030: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        37968: function(e, t, r) {
            "use strict";
            r.d(t, {
                iO: function() {
                    return i
                }
            });
            let i = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe",
                    batchFetchMessages: "waku_batchFetchMessages"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe",
                    batchFetchMessages: "irn_batchFetchMessages"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe",
                    batchFetchMessages: "iridium_batchFetchMessages"
                }
            }
        },
        43014: function() {},
        36900: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(30004);
            i.__exportStar(r(46869), t), i.__exportStar(r(88033), t)
        },
        46869: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        88033: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        66736: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(30004);
            i.__exportStar(r(44273), t), i.__exportStar(r(47001), t), i.__exportStar(r(52939), t), i.__exportStar(r(36900), t)
        },
        52939: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(30004).__exportStar(r(88766), t)
        },
        88766: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            class r {}
            t.IWatch = r
        },
        83207: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let i = r(36900);
            t.toMiliseconds = function(e) {
                return e * i.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / i.ONE_THOUSAND)
            }
        },
        83873: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        44273: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(30004);
            i.__exportStar(r(83873), t), i.__exportStar(r(83207), t)
        },
        47001: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
                    let r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    let t = this.get(e);
                    return t.elapsed || Date.now() - t.started
                }
            }
            t.Watch = r, t.default = r
        },
        30004: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return h
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return P
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return I
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function h(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function l(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (e) {
                        h(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function h(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function _(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function P(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        62873: function(e, t) {
            "use strict";

            function r(e) {
                let t;
                return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
            }

            function i(e) {
                let t = r(e);
                if (!t) throw Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
                return i("document")
            }, t.getDocument = function() {
                return r("document")
            }, t.getNavigatorOrThrow = function() {
                return i("navigator")
            }, t.getNavigator = function() {
                return r("navigator")
            }, t.getLocationOrThrow = function() {
                return i("location")
            }, t.getLocation = function() {
                return r("location")
            }, t.getCryptoOrThrow = function() {
                return i("crypto")
            }, t.getCrypto = function() {
                return r("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return i("localStorage")
            }, t.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        65755: function(e, t, r) {
            "use strict";
            t.D = void 0;
            let i = r(62873);
            t.D = function() {
                let e, t, r;
                try {
                    e = i.getDocumentOrThrow(), t = i.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function n(...t) {
                    let r = e.getElementsByTagName("meta");
                    for (let e = 0; e < r.length; e++) {
                        let i = r[e],
                            n = ["itemprop", "property", "name"].map(e => i.getAttribute(e)).filter(e => !!e && t.includes(e));
                        if (n.length && n) {
                            let e = i.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let s = ((r = n("name", "og:site_name", "og:title", "twitter:title")) || (r = e.title), r),
                    o = n("description", "og:description", "twitter:description", "keywords");
                return {
                    description: o,
                    url: t.origin,
                    icons: function() {
                        let r = e.getElementsByTagName("link"),
                            i = [];
                        for (let e = 0; e < r.length; e++) {
                            let n = r[e],
                                s = n.getAttribute("rel");
                            if (s && s.toLowerCase().indexOf("icon") > -1) {
                                let e = n.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let r = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) r += e;
                                        else {
                                            let i = t.pathname.split("/");
                                            i.pop(), r += i.join("/") + "/" + e
                                        }
                                        i.push(r)
                                    } else if (0 === e.indexOf("//")) {
                                        let r = t.protocol + e;
                                        i.push(r)
                                    } else i.push(e)
                                }
                            }
                        }
                        return i
                    }(),
                    name: s
                }
            }
        },
        44020: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = RegExp("(" + t + ")|([^%]+?)", "gi"),
                i = RegExp("(" + t + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = i.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var s = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (n) {
                                        for (var t = e.match(r) || [], i = 1; i < t.length; i++) t = (e = (function e(t, r) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            r = r || 1;
                                            var i = t.slice(0, r),
                                                n = t.slice(r);
                                            return Array.prototype.concat.call([], e(i), e(n))
                                        })(t, i).join("")).match(r) || [];
                                        return e
                                    }
                                }(n[0]);
                                s !== n[0] && (t[n[0]] = s)
                            }
                            n = i.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                            var c = o[a];
                            e = e.replace(RegExp(c, "g"), t[c])
                        }
                        return e
                    }(e)
                }
            }
        },
        43631: function(e, t, r) {
            "use strict";
            r.d(t, {
                qY: function() {
                    return p
                }
            });
            var i = r(34155),
                n = function(e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t))
                },
                s = function(e, t, r) {
                    this.name = e, this.version = t, this.os = r, this.type = "browser"
                },
                o = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = i.platform
                },
                a = function(e, t, r, i) {
                    this.name = e, this.version = t, this.os = r, this.bot = i, this.type = "bot-device"
                },
                c = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                u = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                h = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                l = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                f = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function p(e) {
                return e ? d(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new u : "undefined" != typeof navigator ? d(navigator.userAgent) : void 0 !== i && i.version ? new o(i.version.slice(1)) : null
            }

            function d(e) {
                var t = "" !== e && l.reduce(function(t, r) {
                    var i = r[0],
                        n = r[1];
                    if (t) return t;
                    var s = n.exec(e);
                    return !!s && [i, s]
                }, !1);
                if (!t) return null;
                var r = t[0],
                    i = t[1];
                if ("searchbot" === r) return new c;
                var o = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
                o ? o.length < 3 && (o = n(n([], o, !0), function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push("0");
                    return t
                }(3 - o.length), !0)) : o = [];
                var u = o.join("."),
                    p = function(e) {
                        for (var t = 0, r = f.length; t < r; t++) {
                            var i = f[t],
                                n = i[0];
                            if (i[1].exec(e)) return n
                        }
                        return null
                    }(e),
                    d = h.exec(e);
                return d && d[1] ? new a(r, u, p, d[1]) : new s(r, u, p)
            }
        },
        92806: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
                    var o = i[s],
                        a = e[o];
                    (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
                }
                return r
            }
        },
        72307: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                h = "[object Date]",
                l = "[object Error]",
                f = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                b = "[object String]",
                w = "[object WeakMap]",
                _ = "[object ArrayBuffer]",
                E = "[object DataView]",
                D = /^\[object .+?Constructor\]$/,
                I = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[_] = S[u] = S[E] = S[h] = S[l] = S[f] = S[p] = S[d] = S[g] = S[v] = S[m] = S[b] = S[w] = !1;
            var P = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                C = "object" == typeof self && self && self.Object === Object && self,
                O = P || C || Function("return this")(),
                x = t && !t.nodeType && t,
                A = x && e && !e.nodeType && e,
                R = A && A.exports === x,
                T = R && P.process,
                N = function() {
                    try {
                        return T && T.binding && T.binding("util")
                    } catch (e) {}
                }(),
                k = N && N.isTypedArray;

            function j(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function M(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var L = Array.prototype,
                U = Function.prototype,
                q = Object.prototype,
                z = O["__core-js_shared__"],
                $ = U.toString,
                B = q.hasOwnProperty,
                F = (i = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                H = q.toString,
                V = RegExp("^" + $.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                K = R ? O.Buffer : void 0,
                W = O.Symbol,
                G = O.Uint8Array,
                Y = q.propertyIsEnumerable,
                J = L.splice,
                Q = W ? W.toStringTag : void 0,
                X = Object.getOwnPropertySymbols,
                Z = K ? K.isBuffer : void 0,
                ee = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                et = eS(O, "DataView"),
                er = eS(O, "Map"),
                ei = eS(O, "Promise"),
                en = eS(O, "Set"),
                es = eS(O, "WeakMap"),
                eo = eS(Object, "create"),
                ea = eO(et),
                ec = eO(er),
                eu = eO(ei),
                eh = eO(en),
                el = eO(es),
                ef = W ? W.prototype : void 0,
                ep = ef ? ef.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function em(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function eb(e, t) {
                for (var r = e.length; r--;)
                    if (ex(e[r][0], t)) return r;
                return -1
            }

            function ew(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Q && Q in Object(e) ? function(e) {
                    var t = B.call(e, Q),
                        r = e[Q];
                    try {
                        e[Q] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = H.call(e);
                    return i && (t ? e[Q] = r : delete e[Q]), n
                }(e) : H.call(e)
            }

            function e_(e) {
                return eM(e) && ew(e) == a
            }

            function eE(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(e);
                if (u && s.get(t)) return u == t;
                var h = -1,
                    l = !0,
                    f = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++h < a;) {
                    var p = e[h],
                        d = t[h];
                    if (i) var g = o ? i(d, p, h, t, e, s) : i(p, d, h, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        l = !1;
                        break
                    }
                    if (f) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!f.has(t) && (p === e || n(p, e, r, i, s))) return f.push(t)
                            })) {
                            l = !1;
                            break
                        }
                    } else if (!(p === d || n(p, d, r, i, s))) {
                        l = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), l
            }

            function eD(e) {
                var t;
                return t = function(e) {
                    return null != e && ek(e.length) && !eN(e) ? function(e, t) {
                        var r, i = eR(e),
                            n = !i && eA(e),
                            s = !i && !n && eT(e),
                            o = !i && !n && !s && eL(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = c.length;
                        for (var h in e) B.call(e, h) && !(a && ("length" == h || s && ("offset" == h || "parent" == h) || o && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || (r = null == (r = u) ? 9007199254740991 : r) && ("number" == typeof h || I.test(h)) && h > -1 && h % 1 == 0 && h < r)) && c.push(h);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || q)) return ee(e);
                        var t, r = [];
                        for (var i in Object(e)) B.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eR(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eP(e))
            }

            function eI(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eS(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!ej(r) || F && F in r) && (eN(r) ? V : D).test(eO(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return B.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : B.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = eb(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : J.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = eb(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return eb(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = eb(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eI(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eI(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eI(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eI(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, em.prototype.get = function(e) {
                return this.__data__.get(e)
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eP = X ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(X(e = Object(e)), function(t) {
                        return Y.call(e, t)
                    })
                } : function() {
                    return []
                },
                eC = ew;

            function eO(e) {
                if (null != e) {
                    try {
                        return $.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function ex(e, t) {
                return e === t || e != e && t != t
            }(et && eC(new et(new ArrayBuffer(1))) != E || er && eC(new er) != p || ei && eC(ei.resolve()) != y || en && eC(new en) != m || es && eC(new es) != w) && (eC = function(e) {
                var t = ew(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eO(r) : "";
                if (i) switch (i) {
                    case ea:
                        return E;
                    case ec:
                        return p;
                    case eu:
                        return y;
                    case eh:
                        return m;
                    case el:
                        return w
                }
                return t
            });
            var eA = e_(function() {
                    return arguments
                }()) ? e_ : function(e) {
                    return eM(e) && B.call(e, "callee") && !Y.call(e, "callee")
                },
                eR = Array.isArray,
                eT = Z || function() {
                    return !1
                };

            function eN(e) {
                if (!ej(e)) return !1;
                var t = ew(e);
                return t == f || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function ek(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function ej(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eM(e) {
                return null != e && "object" == typeof e
            }
            var eL = k ? function(e) {
                return k(e)
            } : function(e) {
                return eM(e) && ek(e.length) && !!S[ew(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (eM(t) || eM(r)) ? function(e, t, r, i, n, s) {
                        var o = eR(e),
                            f = eR(t),
                            y = o ? c : eC(e),
                            w = f ? c : eC(t);
                        y = y == a ? g : y, w = w == a ? g : w;
                        var D = y == g,
                            I = w == g,
                            S = y == w;
                        if (S && eT(e)) {
                            if (!eT(t)) return !1;
                            o = !0, D = !1
                        }
                        if (S && !D) return s || (s = new em), o || eL(e) ? eE(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case _:
                                    if (e.byteLength != t.byteLength || !s(new G(e), new G(t))) break;
                                    return !0;
                                case u:
                                case h:
                                case d:
                                    return ex(+e, +t);
                                case l:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case b:
                                    return e == t + "";
                                case p:
                                    var a = j;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = M), e.size != t.size && !c) break;
                                    var f = o.get(e);
                                    if (f) return f == t;
                                    i |= 2, o.set(e, t);
                                    var g = eE(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ep) return ep.call(e) == ep.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var P = D && B.call(e, "__wrapped__"),
                                C = I && B.call(t, "__wrapped__");
                            if (P || C) {
                                var O = P ? e.value() : e,
                                    x = C ? t.value() : t;
                                return s || (s = new em), n(O, x, r, i, s)
                            }
                        }
                        return !!S && (s || (s = new em), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = eD(e),
                                c = a.length;
                            if (c != eD(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var h = a[u];
                                if (!(o ? h in t : B.call(t, h))) return !1
                            }
                            var l = s.get(e);
                            if (l && s.get(t)) return l == t;
                            var f = !0;
                            s.set(e, t), s.set(t, e);
                            for (var p = o; ++u < c;) {
                                var d = e[h = a[u]],
                                    g = t[h];
                                if (i) var y = o ? i(g, d, h, t, e, s) : i(d, g, h, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    f = !1;
                                    break
                                }
                                p || (p = "constructor" == h)
                            }
                            if (f && !p) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (f = !1)
                            }
                            return s.delete(e), s.delete(t), f
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        63144: function(e) {
            "use strict";
            let t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        17563: function(e, t, r) {
            "use strict";
            let i = r(70610),
                n = r(44020),
                s = r(80500),
                o = r(92806),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function h(e, t) {
                return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
            }

            function l(e, t) {
                return t.decode ? n(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                let t = (e = f(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, i) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, i) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, i) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, i) => {
                                    let n = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" == typeof r && !n && l(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? l(r, e) : r;
                                    let o = n || s ? r.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === r ? r : l(r, e);
                                    i[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, i) => {
                                    let n = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !n) {
                                        i[t] = r ? l(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => l(t, e));
                                    if (void 0 === i[t]) {
                                        i[t] = s;
                                        return
                                    }
                                    i[t] = [].concat(i[t], s)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    i = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return i;
                for (let n of e.split("&")) {
                    if ("" === n) continue;
                    let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : l(o, t), r(l(e, t), o, i)
                }
                for (let e of Object.keys(i)) {
                    let r = i[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else i[e] = d(r, t)
                }
                return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
                    let r = i[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, i) => {
                                    let n = r.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [h(t, e), "[", n, "]"].join("")] : [...r, [h(t, e), "[", h(n, e), "]=", h(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [h(t, e), "[]"].join("")] : [...r, [h(t, e), "[]=", h(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [h(t, e), ":list="].join("")] : [...r, [h(t, e), ":list=", h(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length) ? [
                                        [h(r, e), t, h(n, e)].join("")
                                    ] : [
                                        [i, h(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, h(t, e)] : [...r, [h(t, e), "=", h(i, e)].join("")]
                        }
                    }(t),
                    n = {};
                for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
                let s = Object.keys(n);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let n = e[r];
                    return void 0 === n ? "" : null === n ? h(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? h(r, t) + "[]" : n.reduce(i(r), []).join("&") : h(r, t) + "=" + h(n, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, i] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && i ? {
                    fragmentIdentifier: l(i, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let i = f(e.url).split("?")[0] || "",
                    n = t.extract(e.url),
                    s = Object.assign(t.parse(n, {
                        sort: !1
                    }), e.query),
                    o = t.stringify(s, r);
                o && (o = `?${o}`);
                let a = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (a = `#${r[c]?h(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${i}${o}${a}`
            }, t.pick = (e, r, i) => {
                i = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, i);
                let {
                    url: n,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, i);
                return t.stringifyUrl({
                    url: n,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, i)
            }, t.exclude = (e, r, i) => {
                let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, n, i)
            }
        },
        85346: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", h = 0, l = -1, f = e && e.length || 0, p = 0; p < f;) {
                    if (37 === e.charCodeAt(p) && p + 1 < f) {
                        switch (l = l > -1 ? l : 0, e.charCodeAt(p + 1)) {
                            case 100:
                            case 102:
                                if (h >= c || null == r[h]) break;
                                l < p && (u += e.slice(l, p)), u += Number(r[h]), l = p + 2, p++;
                                break;
                            case 105:
                                if (h >= c || null == r[h]) break;
                                l < p && (u += e.slice(l, p)), u += Math.floor(Number(r[h])), l = p + 2, p++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (h >= c || void 0 === r[h]) break;
                                l < p && (u += e.slice(l, p));
                                var d = typeof r[h];
                                if ("string" === d) {
                                    u += "'" + r[h] + "'", l = p + 2, p++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[h].name || "<anonymous>", l = p + 2, p++;
                                    break
                                }
                                u += n(r[h]), l = p + 2, p++;
                                break;
                            case 115:
                                if (h >= c) break;
                                l < p && (u += e.slice(l, p)), u += String(r[h]), l = p + 2, p++;
                                break;
                            case 37:
                                l < p && (u += e.slice(l, p)), u += "%", l = p + 2, p++, h--
                        }++h
                    }++p
                }
                return -1 === l ? e : (l < f && (u += e.slice(l)), u)
            }
        },
        80500: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                let r = e.indexOf(t);
                return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
            }
        },
        70610: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        36559: function(e, t, r) {
            "use strict";
            let i = r(85346);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t, r;
                (e = e || {}).browser = e.browser || {};
                let i = e.browser.transmit;
                if (i && "function" != typeof i.send) throw Error("pino: transmit option must have a send function");
                let h = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let l = e.serializers || {},
                    g = Array.isArray(t = e.browser.serialize) ? t.filter(function(e) {
                        return "!stdSerializers.err" !== e
                    }) : !0 === t && Object.keys(l),
                    y = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (y = !1), "function" == typeof h && (h.error = h.fatal = h.warn = h.info = h.debug = h.trace = h), !1 === e.enabled && (e.level = "silent");
                let v = e.level || "info",
                    m = Object.create(h);
                m.log || (m.log = f), Object.defineProperty(m, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(m, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(b, m, "error", "log"), o(b, m, "fatal", "error"), o(b, m, "warn", "error"), o(b, m, "info", "log"), o(b, m, "debug", "log"), o(b, m, "trace", "log")
                    }
                });
                let b = {
                    transmit: i,
                    serialize: g,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(r = e).timestamp ? r.timestamp : !1 === r.timestamp ? p : d
                };
                return m.levels = s.levels, m.level = v, m.setMaxListeners = m.getMaxListeners = m.emit = m.addListener = m.on = m.prependListener = m.once = m.prependOnceListener = m.removeListener = m.removeAllListeners = m.listeners = m.listenerCount = m.eventNames = m.write = m.flush = f, m.serializers = l, m._serialize = g, m._stdErrSerialize = y, m.child = function(t, r) {
                    if (!t) throw Error("missing bindings for child Pino");
                    r = r || {}, g && t.serializers && (r.serializers = t.serializers);
                    let n = r.serializers;
                    if (g && n) {
                        var s = Object.assign({}, l, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : g;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function h(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), i && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return h.prototype = this, new h(this)
                }, i && (m._logEvent = u()), m
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? f : c[r] ? c[r] : n[r] || n[o] || f,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== f) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    h = Array(arguments.length),
                                    l = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var f = 0; f < h.length; f++) h[f] = arguments[f];
                                if (e.serialize && !e.asObject && a(h, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(l, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        n && (u.time = n), u.level = s.levels.values[t];
                                        let h = (0 | e._childLevel) + 1;
                                        if (h < 1 && (h = 1), null !== c && "object" == typeof c) {
                                            for (; h-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, h, c)) : o.apply(l, h), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            h = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === h.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = u(h)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, h)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function h() {
                return {}
            }

            function l(e) {
                return e
            }

            function f() {}

            function p() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: h,
                mapHttpResponse: h,
                wrapRequestSerializer: l,
                wrapResponseSerializer: l,
                wrapErrorSerializer: l,
                req: h,
                res: h,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        },
        91835: function(e, t, r) {
            "use strict";
            r.d(t, {
                gh: function() {
                    return eB
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                identity: function() {
                    return T
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                base2: function() {
                    return N
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base8: function() {
                    return k
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base10: function() {
                    return j
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return M
                },
                base16upper: function() {
                    return L
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base32: function() {
                    return U
                },
                base32hex: function() {
                    return B
                },
                base32hexpad: function() {
                    return H
                },
                base32hexpadupper: function() {
                    return V
                },
                base32hexupper: function() {
                    return F
                },
                base32pad: function() {
                    return z
                },
                base32padupper: function() {
                    return $
                },
                base32upper: function() {
                    return q
                },
                base32z: function() {
                    return K
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base36: function() {
                    return W
                },
                base36upper: function() {
                    return G
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base58btc: function() {
                    return Y
                },
                base58flickr: function() {
                    return J
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base64: function() {
                    return Q
                },
                base64pad: function() {
                    return X
                },
                base64url: function() {
                    return Z
                },
                base64urlpad: function() {
                    return ee
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                base256emoji: function() {
                    return en
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                sha256: function() {
                    return ev
                },
                sha512: function() {
                    return em
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                identity: function() {
                    return eb
                }
            });
            var g = {};
            r.r(g), r.d(g, {
                code: function() {
                    return e_
                },
                decode: function() {
                    return eD
                },
                encode: function() {
                    return eE
                },
                name: function() {
                    return ew
                }
            });
            var y = {};
            r.r(y), r.d(y, {
                code: function() {
                    return eC
                },
                decode: function() {
                    return ex
                },
                encode: function() {
                    return eO
                },
                name: function() {
                    return eP
                }
            });
            var v = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                for (var n = 0; n < e.length; n++) {
                    var s = e.charAt(n),
                        o = s.charCodeAt(0);
                    if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                    r[o] = n
                }
                var a = e.length,
                    c = e.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    h = Math.log(256) / Math.log(a);

                function l(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var i = 0, n = 0; e[t] === c;) i++, t++;
                        for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                            var h = r[e.charCodeAt(t)];
                            if (255 === h) return;
                            for (var l = 0, f = s - 1;
                                (0 !== h || l < n) && -1 !== f; f--, l++) h += a * o[f] >>> 0, o[f] = h % 256 >>> 0, h = h / 256 >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            n = l, t++
                        }
                        if (" " !== e[t]) {
                            for (var p = s - n; p !== s && 0 === o[p];) p++;
                            for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                            return d
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                        for (var o = (s - n) * h + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                            for (var l = t[n], f = 0, p = o - 1;
                                (0 !== l || f < i) && -1 !== p; p--, f++) l += 256 * u[p] >>> 0, u[p] = l % a >>> 0, l = l / a >>> 0;
                            if (0 !== l) throw Error("Non-zero carry");
                            i = f, n++
                        }
                        for (var d = o - i; d !== o && 0 === u[d];) d++;
                        for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                        return g
                    },
                    decodeUnsafe: l,
                    decode: function(e) {
                        var r = l(e);
                        if (r) return r;
                        throw Error(`Non-${t} character`)
                    }
                }
            };
            new Uint8Array(0);
            let m = (e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let r = 0; r < e.byteLength; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                },
                b = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                w = e => new TextEncoder().encode(e),
                _ = e => new TextDecoder().decode(e);
            class E {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class D {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return S(this, e)
                }
            }
            class I {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return S(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let S = (e, t) => new I({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class P {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new E(e, t, r), this.decoder = new D(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let C = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new P(e, t, r, i),
                O = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = v(r, t);
                    return C({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => b(n(e))
                    })
                },
                x = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                A = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                R = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => C({
                    prefix: t,
                    name: e,
                    encode: e => A(e, i, r),
                    decode: t => x(t, i, r, e)
                }),
                T = C({
                    prefix: "\0",
                    name: "identity",
                    encode: e => _(e),
                    decode: e => w(e)
                }),
                N = R({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                k = R({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                j = O({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                M = R({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                L = R({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                U = R({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                q = R({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                z = R({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                $ = R({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                B = R({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                F = R({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                H = R({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                V = R({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                K = R({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                W = O({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                G = O({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                Y = O({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                J = O({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                Q = R({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                X = R({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Z = R({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ee = R({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                et = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                er = et.reduce((e, t, r) => (e[r] = t, e), []),
                ei = et.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                en = C({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += er[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = ei[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var es = function e(t, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                    return r[i] = 0 | t, e.bytes = i - n + 1, r
                },
                eo = function e(t, r) {
                    var i, n = 0,
                        r = r || 0,
                        s = 0,
                        o = r,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                        i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                    } while (i >= 128);
                    return e.bytes = o - r, n
                };
            let ea = (e, t = 0) => [eo(e, t), eo.bytes],
                ec = (e, t, r = 0) => (es(e, t, r), t),
                eu = e => e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10,
                eh = (e, t) => {
                    let r = t.byteLength,
                        i = eu(e),
                        n = i + eu(r),
                        s = new Uint8Array(n + r);
                    return ec(e, s, 0), ec(r, s, i), s.set(t, n), new ep(e, r, t, s)
                },
                el = e => {
                    let t = b(e),
                        [r, i] = ea(t),
                        [n, s] = ea(t.subarray(i)),
                        o = t.subarray(i + s);
                    if (o.byteLength !== n) throw Error("Incorrect length");
                    return new ep(r, n, o, t)
                },
                ef = (e, t) => e === t || e.code === t.code && e.size === t.size && m(e.bytes, t.bytes);
            class ep {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let ed = ({
                name: e,
                code: t,
                encode: r
            }) => new eg(e, t, r);
            class eg {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? eh(this.code, t) : t.then(e => eh(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let ey = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                ev = ed({
                    name: "sha2-256",
                    code: 18,
                    encode: ey("SHA-256")
                }),
                em = ed({
                    name: "sha2-512",
                    code: 19,
                    encode: ey("SHA-512")
                }),
                eb = {
                    code: 0,
                    name: "identity",
                    encode: b,
                    digest: e => eh(0, b(e))
                },
                ew = "raw",
                e_ = 85,
                eE = e => b(e),
                eD = e => b(e),
                eI = new TextEncoder,
                eS = new TextDecoder,
                eP = "json",
                eC = 512,
                eO = e => eI.encode(JSON.stringify(e)),
                ex = e => JSON.parse(eS.decode(e));
            class eA {
                constructor(e, t, r, i) {
                    this.code = t, this.version = e, this.multihash = r, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: eq,
                        byteLength: eq,
                        code: eU,
                        version: eU,
                        multihash: eU,
                        bytes: eU,
                        _baseCache: eq,
                        asCID: eq
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== ek) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== ej) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return eA.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                r = eh(e, t);
                                return eA.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && ef(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: r,
                        _baseCache: i
                    } = this;
                    return 0 === r ? eT(t, i, e || Y.encoder) : eN(t, i, e || U.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return ez(/^0\.0/, e$), !!(e && (e[eL] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof eA) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: r,
                            multihash: i,
                            bytes: n
                        } = e;
                        return new eA(t, r, i, n || eM(t, r, i.bytes))
                    }
                    if (null == e || !0 !== e[eL]) return null; {
                        let {
                            version: t,
                            multihash: r,
                            code: i
                        } = e, n = el(r);
                        return eA.create(t, i, n)
                    }
                }
                static create(e, t, r) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === ek) return new eA(e, t, r, r.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${ek}) block encoding`);
                        case 1:
                            {
                                let i = eM(e, t, r.bytes);
                                return new eA(e, t, r, i)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return eA.create(0, ek, e)
                }
                static createV1(e, t) {
                    return eA.create(1, e, t)
                }
                static decode(e) {
                    let [t, r] = eA.decodeFirst(e);
                    if (r.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = eA.inspectBytes(e),
                        r = t.size - t.multihashSize,
                        i = b(e.subarray(r, r + t.multihashSize));
                    if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let n = i.subarray(t.multihashSize - t.digestSize),
                        s = new ep(t.multihashCode, t.digestSize, n, i);
                    return [0 === t.version ? eA.createV0(s) : eA.createV1(t.codec, s), e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        r = () => {
                            let [r, i] = ea(e.subarray(t));
                            return t += i, r
                        },
                        i = r(),
                        n = ek;
                    if (18 === i ? (i = 0, t = 0) : 1 === i && (n = r()), 0 !== i && 1 !== i) throw RangeError(`Invalid CID version ${i}`);
                    let s = t,
                        o = r(),
                        a = r(),
                        c = t + a;
                    return {
                        version: i,
                        codec: n,
                        multihashCode: o,
                        digestSize: a,
                        multihashSize: c - s,
                        size: c
                    }
                }
                static parse(e, t) {
                    let [r, i] = eR(e, t), n = eA.decode(i);
                    return n._baseCache.set(r, e), n
                }
            }
            let eR = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            return [Y.prefix, (t || Y).decode(`${Y.prefix}${e}`)];
                        case Y.prefix:
                            return [Y.prefix, (t || Y).decode(e)];
                        case U.prefix:
                            return [U.prefix, (t || U).decode(e)];
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                eT = (e, t, r) => {
                    let {
                        prefix: i
                    } = r;
                    if (i !== Y.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    let n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e).slice(1);
                        return t.set(i, n), n
                    }
                },
                eN = (e, t, r) => {
                    let {
                        prefix: i
                    } = r, n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e);
                        return t.set(i, n), n
                    }
                },
                ek = 112,
                ej = 18,
                eM = (e, t, r) => {
                    let i = eu(e),
                        n = i + eu(t),
                        s = new Uint8Array(n + r.byteLength);
                    return ec(e, s, 0), ec(t, s, i), s.set(r, n), s
                },
                eL = Symbol.for("@ipld/js-cid/CID"),
                eU = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                eq = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                ez = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                e$ = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
                eB = { ...i,
                    ...n,
                    ...s,
                    ...o,
                    ...a,
                    ...c,
                    ...u,
                    ...h,
                    ...l,
                    ...f
                };
            ({ ...p,
                ...d
            })
        },
        94622: function(e, t, r) {
            "use strict";

            function i(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
            }

            function n(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let r = i(t),
                    n = 0;
                for (let t of e) r.set(t, n), n += t.length;
                return r
            }
            r.d(t, {
                zo: function() {
                    return n
                },
                mL: function() {
                    return h
                },
                BB: function() {
                    return l
                }
            });
            var s = r(91835);

            function o(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            let a = o("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                c = o("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = i((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                u = {
                    utf8: a,
                    "utf-8": a,
                    hex: s.gh.base16,
                    latin1: c,
                    ascii: c,
                    binary: c,
                    ...s.gh
                };

            function h(e, t = "utf8") {
                let r = u[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
            }

            function l(e, t = "utf8") {
                let r = u[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }
        }
    }
]);