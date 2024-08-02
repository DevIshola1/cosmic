(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5835], {
        73481: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/claim", function() {
                return n(72591)
            }])
        },
        72591: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n(85893);
            n(72003), n(25675), n(86501), n(36613), n(69103);
            var c = n(67294),
                i = n(1561);
            n(74005);
            var l = n(81134),
                r = n(6323),
                a = n(74533);
            n(95946), n(51973), n(23147), n(61376), n(81946), n(22900);
            var o = () => {
                    let [e, t] = (0, c.useState)(0), [n, o] = (0, c.useState)(), {
                        data: d
                    } = (0, l.p)();
                    (0, r.t)(), (0, c.useEffect)(() => {
                        h()
                    }, [d]);
                    let u = e => e ? e.slice(0, 6) + "..." + e.slice(-4) : "-",
                        h = async () => {
                            let {
                                balance: e,
                                address: n,
                                success: s
                            } = await (0, a.QV)(d);
                            s && (t(e), o(n), console.log(e, n))
                        };
                    return (0, s.jsxs)("div", {
                        className: "main-dashboard d-flex flex-column align-items-center justify-content-center vh-100",
                        children: [(0, s.jsx)(i.NL, {}), (0, s.jsx)("div", {
                            className: "row pt-4 px-4 w-100 justify-content-center",
                            children: (0, s.jsxs)("div", {
                                className: "col-xxl-9 col-lg-9 text-center",
                                children: [(0, s.jsx)("div", {
                                    children: (0, s.jsx)("img", {
                                        src: "/imgs/cosmic_white 1.svg",
                                        alt: "cosmic_white"
                                    })
                                }), e && parseInt(e) > 0 ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsxs)("div", {
                                        style: {
                                            color: "white",
                                            marginTop: 10
                                        },
                                        children: ["Wallet ", u(n), " have ", e, " $Cosmic to claim"]
                                    })
                                }) : (0, s.jsx)("div", {
                                    style: {
                                        color: "white",
                                        marginTop: 5
                                    },
                                    children: n ? (0, s.jsxs)("p", {
                                        children: ["There are no tokens to claim for wallet", " ", u(n)]
                                    }) : (0, s.jsx)("p", {
                                        children: "Connect your wallet"
                                    })
                                })]
                            })
                        })]
                    })
                },
                d = () => (0, s.jsx)(o, {})
        }
    },
    function(e) {
        e.O(0, [7121, 6644, 7348, 2888, 9774, 179], function() {
            return e(e.s = 73481)
        }), _N_E = e.O()
    }
]);