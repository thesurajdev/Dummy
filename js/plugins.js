/*!
 * ScrollTrigger 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function H(e) {
        return e
    }
    function I() {
        return "undefined" != typeof window
    }
    function J() {
        return Me || I() && (Me = window.gsap) && Me.registerPlugin && Me
    }
    function K(e) {
        return !!~i.indexOf(e)
    }
    function L(e, t) {
        return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t]
    }
    function M(t, e) {
        var r = e.s
          , n = e.sc
          , o = h.indexOf(t)
          , i = n === rt.sc ? 1 : 2;
        return ~o || (o = h.push(t) - 1),
        h[o + i] || (h[o + i] = L(t, r) || (K(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }
        ))
    }
    function N(e) {
        return L(e, "getBoundingClientRect") || (K(e) ? function() {
            return ut.width = ke.innerWidth,
            ut.height = ke.innerHeight,
            ut
        }
        : function() {
            return nt(e)
        }
        )
    }
    function Q(e, t) {
        var r = t.s
          , n = t.d2
          , o = t.d
          , i = t.a;
        return (r = "scroll" + n) && (i = L(e, r)) ? i() - N(e)()[o] : K(e) ? Math.max(_e[r], Oe[r]) - (ke["inner" + n] || _e["client" + n] || Oe["client" + n]) : e[r] - e["offset" + n]
    }
    function R(e, t) {
        for (var r = 0; r < p.length; r += 3)
            t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2])
    }
    function S(e) {
        return "string" == typeof e
    }
    function T(e) {
        return "function" == typeof e
    }
    function U(e) {
        return "number" == typeof e
    }
    function V(e) {
        return "object" == typeof e
    }
    function W(e) {
        return T(e) && e()
    }
    function X(r, n) {
        return function() {
            var e = W(r)
              , t = W(n);
            return function() {
                W(e),
                W(t)
            }
        }
    }
    function qa(e) {
        return ke.getComputedStyle(e)
    }
    function sa(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }
    function ua(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }
    function wa(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }
    function xa(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        })
    }
    function ya(e, t, r) {
        return e.removeEventListener(t, r)
    }
    function Ca(e, t) {
        if (S(e)) {
            var r = e.indexOf("=")
              , n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            n && (e.indexOf("%") > r && (n *= t / 100),
            e = e.substr(0, r - 1)),
            e = n + (e in m ? m[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }
    function Da(e, t, r, n, o, i, a) {
        var s = o.startColor
          , l = o.endColor
          , c = o.fontSize
          , u = o.indent
          , f = o.fontWeight
          , d = Pe.createElement("div")
          , p = K(r) || "fixed" === L(r, "pinType")
          , g = -1 !== e.indexOf("scroller")
          , h = p ? Oe : r
          , v = -1 !== e.indexOf("start")
          , b = v ? s : l
          , m = "border-color:" + b + ";font-size:" + c + ";color:" + b + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return m += "position:" + (g && p ? "fixed;" : "absolute;"),
        !g && p || (m += (n === rt ? x : y) + ":" + (i + parseFloat(u)) + "px;"),
        a && (m += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        d._isStart = v,
        d.setAttribute("class", "gsap-marker-" + e),
        d.style.cssText = m,
        d.innerText = t || 0 === t ? e + "-" + t : e,
        h.insertBefore(d, h.children[0]),
        d._offset = d["offset" + n.op.d2],
        w(d, 0, n, v),
        d
    }
    function Ha() {
        return l = l || s(B)
    }
    function Ia() {
        l || (l = s(B),
        De || _("scrollStart"),
        De = He())
    }
    function Ja() {
        return !Re && a.restart(!0)
    }
    function Pa(e) {
        var t, r = Me.ticker.frame, n = [], o = 0;
        if (g !== r || Be) {
            for (A(); o < P.length; o += 4)
                (t = ke.matchMedia(P[o]).matches) !== P[o + 3] && ((P[o + 3] = t) ? n.push(o) : A(1, P[o]) || T(P[o + 2]) && P[o + 2]());
            for (E(),
            o = 0; o < n.length; o++)
                t = n[o],
                We = P[t],
                P[t + 2] = P[t + 1](e);
            z(We = 0, 1),
            g = r,
            _("matchMedia")
        }
    }
    function Qa() {
        return ya(Z, "scrollEnd", Qa) || z(!0)
    }
    function ab(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var o, i = F.length, a = t.style, s = e.style; i--; )
                a[o = F[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            s[y] = s[x] = "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[Ke] = ua(e, tt) + et,
            a[je] = ua(e, rt) + et,
            a[Ze] = s[$e] = s.top = s[b] = "0",
            ct(n),
            s[Ke] = s.maxWidth = r[Ke],
            s[je] = s.maxHeight = r[je],
            s[Ze] = r[Ze],
            e.parentNode.insertBefore(t, e),
            t.appendChild(e)
        }
    }
    function db(e) {
        for (var t = D.length, r = e.style, n = [], o = 0; o < t; o++)
            n.push(D[o], r[D[o]]);
        return n.t = e,
        n
    }
    function gb(e, t, r, n, o, i, a, s, l, c, u, f) {
        if (T(e) && (e = e(s)),
        S(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ca("0" + e.substr(3), r) : 0)),
        U(e))
            a && w(a, r, n, !0);
        else {
            T(t) && (t = t(s));
            var d, p, g, h = Ee(t)[0] || Oe, v = nt(h) || {}, b = e.split(" ");
            v && (v.left || v.top) || "none" !== qa(h).display || (g = h.style.display,
            h.style.display = "block",
            v = nt(h),
            g ? h.style.display = g : h.style.removeProperty("display")),
            d = Ca(b[0], v[n.d]),
            p = Ca(b[1] || "0", r),
            e = v[n.p] - l[n.p] - c + d + o - p,
            a && w(a, p, n, r - p < 20 || a._isStart && 20 < p),
            r -= r - p
        }
        if (i) {
            var m = e + r
              , x = i._isStart;
            f = "scroll" + n.d2,
            w(i, m, n, x && 20 < m || !x && (u ? Math.max(Oe[f], _e[f]) : i.parentNode[f]) <= m + 1),
            u && (l = nt(a),
            u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + et))
        }
        return Math.round(e)
    }
    function ib(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Oe) {
                for (o in e._stOrig = a.cssText,
                i = qa(e))
                    +o || Y.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r,
                a.left = n
            } else
                a.cssText = e._stOrig;
            Me.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }
    function jb(l, e) {
        var c, u, f = M(l, e), d = "_scroll" + e.p2;
        return l[d] = f,
        function getTween(e, t, r, n, o) {
            var i = getTween.tween
              , a = t.onComplete
              , s = {};
            return i && i.kill(),
            c = Math.round(r),
            t[d] = e,
            (t.modifiers = s)[d] = function(e) {
                return (e = Math.round(f())) !== c && e !== u ? (i.kill(),
                getTween.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio,
                u = c,
                c = Math.round(e)
            }
            ,
            t.onComplete = function() {
                getTween.tween = 0,
                a && a.call(i)
            }
            ,
            i = getTween.tween = Me.to(l, t)
        }
    }
    var Me, o, ke, Pe, _e, Oe, i, a, s, l, Ee, Le, Ie, c, Re, Ae, u, ze, f, d, p, Ne, qe, We, g, Be = 1, Fe = [], h = [], He = Date.now, v = He(), De = 0, Je = 1, Qe = Math.abs, t = "scrollLeft", r = "scrollTop", b = "left", x = "right", y = "bottom", Ke = "width", je = "height", Ve = "Right", Xe = "Left", Ue = "Top", Ye = "Bottom", Ze = "padding", $e = "margin", Ge = "Width", n = "Height", et = "px", tt = {
        s: t,
        p: b,
        p2: Xe,
        os: x,
        os2: Ve,
        d: Ke,
        d2: Ge,
        a: "x",
        sc: function sc(e) {
            return arguments.length ? ke.scrollTo(e, rt.sc()) : ke.pageXOffset || Pe[t] || _e[t] || Oe[t] || 0
        }
    }, rt = {
        s: r,
        p: "top",
        p2: Ue,
        os: y,
        os2: Ye,
        d: je,
        d2: n,
        a: "y",
        op: tt,
        sc: function sc(e) {
            return arguments.length ? ke.scrollTo(tt.sc(), e) : ke.pageYOffset || Pe[r] || _e[r] || Oe[r] || 0
        }
    }, nt = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== qa(e)[u] && Me.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , n = e.getBoundingClientRect();
        return r && r.progress(0).kill(),
        n
    }, ot = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, it = {
        toggleActions: "play",
        anticipatePin: 0
    }, m = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, w = function _positionMarker(e, t, r, n) {
        var o = {
            display: "block"
        }
          , i = r[n ? "os2" : "p2"]
          , a = r[n ? "p2" : "os2"];
        e._isFlipped = n,
        o[r.a + "Percent"] = n ? -100 : 0,
        o[r.a] = n ? 1 : 0,
        o["border" + i + Ge] = 1,
        o["border" + a + Ge] = 0,
        o[r.p] = t,
        Me.set(e, o)
    }, at = [], st = {}, C = {}, k = [], P = [], _ = function _dispatch(e) {
        return C[e] && C[e].map(function(e) {
            return e()
        }) || k
    }, O = [], E = function _revertRecorded(e) {
        for (var t = 0; t < O.length; t += 4)
            e && O[t + 3] !== e || (O[t].style.cssText = O[t + 1],
            O[t + 2].uncache = 1)
    }, A = function _revertAll(e, t) {
        var r;
        for (ze = 0; ze < at.length; ze++)
            r = at[ze],
            t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()),
            r.revert()));
        E(t),
        t || _("revert")
    }, z = function _refreshAll(e, t) {
        if (!De || e) {
            var r = _("refreshInit");
            for (Ne && Z.sort(),
            t || A(),
            ze = 0; ze < at.length; ze++)
                at[ze].refresh();
            for (r.forEach(function(e) {
                return e && e.render && e.render(-1)
            }),
            ze = at.length; ze--; )
                at[ze].scroll.rec = 0;
            a.pause(),
            _("refresh")
        } else
            xa(Z, "scrollEnd", Qa)
    }, q = 0, lt = 1, B = function _updateAll() {
        var e = at.length
          , t = He()
          , r = 50 <= t - v
          , n = e && at[0].scroll();
        if (lt = n < q ? -1 : 1,
        q = n,
        r && (De && !Ae && 200 < t - De && (De = 0,
        _("scrollEnd")),
        Ie = v,
        v = t),
        lt < 0) {
            for (ze = e; ze--; )
                at[ze] && at[ze].update(0, r);
            lt = 1
        } else
            for (ze = 0; ze < e; ze++)
                at[ze] && at[ze].update(0, r);
        l = 0
    }, F = [b, "top", y, x, $e + Ye, $e + Ve, $e + Ue, $e + Xe, "display", "flexShrink", "float"], D = F.concat([Ke, je, "boxSizing", "max" + Ge, "max" + n, "position", $e, Ze, Ze + Ue, Ze + Ve, Ze + Ye, Ze + Xe]), j = /([A-Z])/g, ct = function _setState(e) {
        if (e)
            for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2)
                r = e[i + 1],
                t = e[i],
                r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase())
    }, ut = {
        left: 0,
        top: 0
    }, Y = /(?:webkit|moz|length|cssText)/i;
    tt.op = rt;
    var Z = (ScrollTrigger.prototype.init = function init(x, y) {
        if (this.progress = 0,
        this.vars && this.kill(1),
        Je) {
            var p, n, l, w, C, k, P, _, O, E, I, R, e, A, z, q, W, B, t, F, g, D, J, h, j, v, b, r, m, X, Y, o, c, Z, $, G, ee, te = (x = sa(S(x) || U(x) || x.nodeType ? {
                trigger: x
            } : x, it)).horizontal ? tt : rt, re = x.onUpdate, ne = x.toggleClass, i = x.id, oe = x.onToggle, ie = x.onRefresh, a = x.scrub, ae = x.trigger, se = x.pin, le = x.pinSpacing, ce = x.invalidateOnRefresh, ue = x.anticipatePin, s = x.onScrubComplete, u = x.onSnapComplete, fe = x.once, de = x.snap, pe = x.pinReparent, ge = !a && 0 !== a, he = Ee(x.scroller || ke)[0], f = Me.core.getCache(he), ve = K(he), be = "pinType"in x ? "fixed" === x.pinType : ve || "fixed" === L(he, "pinType"), me = [x.onEnter, x.onLeave, x.onEnterBack, x.onLeaveBack], xe = ge && x.toggleActions.split(" "), d = "markers"in x ? x.markers : it.markers, ye = ve ? 0 : parseFloat(qa(he)["border" + te.p2 + Ge]) || 0, Te = this, we = x.onRefreshInit && function() {
                return x.onRefreshInit(Te)
            }
            , Se = function _getSizeFunc(e, t, r) {
                var n = r.d
                  , o = r.d2
                  , i = r.a;
                return (i = L(e, "getBoundingClientRect")) ? function() {
                    return i()[n]
                }
                : function() {
                    return (t ? ke["inner" + o] : e["client" + o]) || 0
                }
            }(he, ve, te), Ce = function _getOffsetsFunc(e, t) {
                return !t || ~Fe.indexOf(e) ? N(e) : function() {
                    return ut
                }
            }(he, ve);
            Te.media = We,
            ue *= 45,
            at.push(Te),
            Te.scroller = he,
            Te.scroll = M(he, te),
            C = Te.scroll(),
            Te.vars = x,
            y = y || x.animation,
            "refreshPriority"in x && (Ne = 1),
            f.tweenScroll = f.tweenScroll || {
                top: jb(he, rt),
                left: jb(he, tt)
            },
            Te.tweenTo = p = f.tweenScroll[te.p],
            y && (y.vars.lazy = !1,
            y._initted || !1 !== y.vars.immediateRender && !1 !== x.immediateRender && y.render(0, !0, !0),
            Te.animation = y.pause(),
            y.scrollTrigger = Te,
            (o = U(a) && a) && (Y = Me.to(y, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                    return s && s(Te)
                }
            })),
            m = 0,
            i = i || y.vars.id),
            de && (V(de) || (de = {
                snapTo: de
            }),
            Me.set(ve ? [Oe, _e] : he, {
                scrollBehavior: "auto"
            }),
            l = T(de.snapTo) ? de.snapTo : "labels" === de.snapTo ? function _getLabels(i) {
                return function(e) {
                    var t, r = [], n = i.labels, o = i.duration();
                    for (t in n)
                        r.push(n[t] / o);
                    return Me.utils.snap(r, e)
                }
            }(y) : Me.utils.snap(de.snapTo),
            c = de.duration || {
                min: .1,
                max: 2
            },
            c = V(c) ? Le(c.min, c.max) : Le(c, c),
            Z = Me.delayedCall(de.delay || o / 2 || .1, function() {
                if (Math.abs(Te.getVelocity()) < 10 && !Ae) {
                    var e = y && !ge ? y.totalProgress() : Te.progress
                      , t = (e - X) / (He() - Ie) * 1e3 || 0
                      , r = Qe(t / 2) * t / .185
                      , n = e + r
                      , o = Le(0, 1, l(n, Te))
                      , i = Te.scroll()
                      , a = Math.round(P + o * A)
                      , s = p.tween;
                    if (i <= _ && P <= i && a !== i) {
                        if (s && !s._initted && s.data <= Math.abs(a - i))
                            return;
                        p(a, {
                            duration: c(Qe(.185 * Math.max(Qe(n - e), Qe(o - e)) / t / .05 || 0)),
                            ease: de.ease || "power3",
                            data: Math.abs(a - i),
                            onComplete: function onComplete() {
                                m = X = y && !ge ? y.totalProgress() : Te.progress,
                                u && u(Te)
                            }
                        }, i, r * A, a - i - r * A)
                    }
                } else
                    Te.isActive && Z.restart(!0)
            }).pause()),
            i && (st[i] = Te),
            ae = Te.trigger = Ee(ae || se)[0],
            se = !0 === se ? ae : Ee(se)[0],
            S(ne) && (ne = {
                targets: ae,
                className: ne
            }),
            se && (!1 === le || le === $e || (le = !(!le && "flex" === qa(se.parentNode).display) && Ze),
            Te.pin = se,
            !1 !== x.force3D && Me.set(se, {
                force3D: !0
            }),
            (n = Me.core.getCache(se)).spacer ? z = n.pinState : (n.spacer = B = Pe.createElement("div"),
            B.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")),
            n.pinState = z = db(se)),
            Te.spacer = B = n.spacer,
            r = qa(se),
            h = r[le + te.os2],
            F = Me.getProperty(se),
            g = Me.quickSetter(se, te.a, et),
            ab(se, B, r),
            W = db(se)),
            d && (e = V(d) ? sa(d, ot) : ot,
            I = Da("scroller-start", i, he, te, e, 0),
            R = Da("scroller-end", i, he, te, e, 0, I),
            t = I["offset" + te.op.d2],
            O = Da("start", i, he, te, e, t),
            E = Da("end", i, he, te, e, t),
            be || (function _makePositionable(e) {
                e.style.position = "absolute" === qa(e).position ? "absolute" : "relative"
            }(he),
            Me.set([I, R], {
                force3D: !0
            }),
            v = Me.quickSetter(I, te.a, et),
            b = Me.quickSetter(R, te.a, et))),
            Te.revert = function(e) {
                var t = !1 !== e || !Te.enabled
                  , r = Re;
                t !== w && (t && (G = Math.max(Te.scroll(), Te.scroll.rec || 0),
                $ = Te.progress,
                ee = y && y.progress()),
                O && [O, E, I, R].forEach(function(e) {
                    return e.style.display = t ? "none" : "block"
                }),
                t && (Re = 1),
                Te.update(t),
                Re = r,
                se && (t ? function _swapPinOut(e, t, r) {
                    if (ct(r),
                    e.parentNode === t) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t),
                        n.removeChild(t))
                    }
                }(se, B, z) : pe && Te.isActive || ab(se, B, qa(se), j)),
                w = t)
            }
            ,
            Te.refresh = function(e) {
                if (!Re && Te.enabled)
                    if (se && e && De)
                        xa(ScrollTrigger, "scrollEnd", Qa);
                    else {
                        Re = 1,
                        Y && Y.kill(),
                        ce && y && y.progress(0).invalidate(),
                        w || Te.revert();
                        for (var t, r, n, o, i, a, s, l, c = Se(), u = Ce(), f = Q(he, te), d = 0, p = 0, g = x.end, h = x.endTrigger || ae, v = x.start || (0 === x.start ? 0 : se || !ae ? "0 0" : "0 100%"), b = ae && Math.max(0, at.indexOf(Te)) || 0, m = b; m--; )
                            !(s = at[m].pin) || s !== ae && s !== se || at[m].revert();
                        for (P = gb(v, ae, c, te, Te.scroll(), O, I, Te, u, ye, be, f) || (se ? -.001 : 0),
                        T(g) && (g = g(Te)),
                        S(g) && !g.indexOf("+=") && (~g.indexOf(" ") ? g = (S(v) ? v.split(" ")[0] : "") + g : (d = Ca(g.substr(2), c),
                        g = S(v) ? v : P + d,
                        h = ae)),
                        _ = Math.max(P, gb(g || (h ? "100% 0" : f), h, c, te, Te.scroll() + d, E, R, Te, u, ye, be, f)) || -.001,
                        A = _ - P || (P -= .01) && .001,
                        d = 0,
                        m = b; m--; )
                            (s = (a = at[m]).pin) && a.start - a._pinPush < P && (t = a.end - a.start,
                            s === ae && (d += t),
                            s === se && (p += t));
                        if (P += d,
                        _ += d,
                        Te._pinPush = p,
                        O && d && ((t = {})[te.a] = "+=" + d,
                        Me.set([O, E], t)),
                        se)
                            t = qa(se),
                            o = te === rt,
                            n = Te.scroll(),
                            D = parseFloat(F(te.a)) + p,
                            !f && 1 < _ && ((ve ? Oe : he).style["overflow-" + te.a] = "scroll"),
                            ab(se, B, t),
                            W = db(se),
                            r = nt(se, !0),
                            l = be && M(he, o ? tt : rt)(),
                            le && ((j = [le + te.os2, A + p + et]).t = B,
                            (m = le === Ze ? ua(se, te) + A + p : 0) && j.push(te.d, m + et),
                            ct(j),
                            be && Te.scroll(G)),
                            be && ((i = {
                                top: r.top + (o ? n - P : l) + et,
                                left: r.left + (o ? l : n - P) + et,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[Ke] = i.maxWidth = Math.ceil(r.width) + et,
                            i[je] = i.maxHeight = Math.ceil(r.height) + et,
                            i[$e] = i[$e + Ue] = i[$e + Ve] = i[$e + Ye] = i[$e + Xe] = "0",
                            i[Ze] = t[Ze],
                            i[Ze + Ue] = t[Ze + Ue],
                            i[Ze + Ve] = t[Ze + Ve],
                            i[Ze + Ye] = t[Ze + Ye],
                            i[Ze + Xe] = t[Ze + Xe],
                            q = function _copyState(e, t, r) {
                                for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)
                                    n = e[a],
                                    o.push(n, n in t ? t[n] : e[a + 1]);
                                return o.t = e.t,
                                o
                            }(z, i, pe)),
                            y ? (y.progress(1, !0),
                            J = F(te.a) - D + A + p,
                            A !== J && q.splice(q.length - 2, 2),
                            y.progress(0, !0)) : J = A;
                        else if (ae && Te.scroll())
                            for (r = ae.parentNode; r && r !== Oe; )
                                r._pinOffset && (P -= r._pinOffset,
                                _ -= r._pinOffset),
                                r = r.parentNode;
                        for (m = 0; m < b; m++)
                            !(a = at[m].pin) || a !== ae && a !== se || at[m].revert(!1);
                        Te.start = P,
                        Te.end = _,
                        (C = k = Te.scroll()) < G && Te.scroll(G),
                        Te.revert(!1),
                        Re = 0,
                        ee && ge && y.progress(ee, !0),
                        $ !== Te.progress && (Y && y.totalProgress($, !0),
                        Te.progress = $,
                        Te.update()),
                        se && le && (B._pinOffset = Math.round(Te.progress * J)),
                        ie && ie(Te)
                    }
            }
            ,
            Te.getVelocity = function() {
                return (Te.scroll() - k) / (He() - Ie) * 1e3 || 0
            }
            ,
            Te.update = function(e, t) {
                var r, n, o, i, a, s = Te.scroll(), l = e ? 0 : (s - P) / A, c = l < 0 ? 0 : 1 < l ? 1 : l || 0, u = Te.progress;
                if (t && (k = C,
                C = s,
                de && (X = m,
                m = y && !ge ? y.totalProgress() : c)),
                ue && !c && se && !Re && !Be && De && P < s + (s - k) / (He() - Ie) * ue && (c = 1e-4),
                c !== u && Te.enabled) {
                    if (i = (a = (r = Te.isActive = !!c && c < 1) != (!!u && u < 1)) || !!c != !!u,
                    Te.direction = u < c ? 1 : -1,
                    Te.progress = c,
                    ge || (!Y || Re || Be ? y && y.totalProgress(c, !!Re) : (Y.vars.totalProgress = c,
                    Y.invalidate().restart())),
                    se)
                        if (e && le && (B.style[le + te.os2] = h),
                        be) {
                            if (i) {
                                if (o = !e && u < c && s < _ + 1 && s + 1 >= Q(he, te),
                                pe)
                                    if (e || !r && !o)
                                        ib(se, B);
                                    else {
                                        var f = nt(se, !0)
                                          , d = s - P;
                                        ib(se, Oe, f.top + (te === rt ? d : 0) + et, f.left + (te === rt ? 0 : d) + et)
                                    }
                                ct(r || o ? q : W),
                                J !== A && c < 1 && r || g(D + (1 !== c || o ? 0 : J))
                            }
                        } else
                            g(D + J * c);
                    !de || p.tween || Re || Be || Z.restart(!0),
                    ne && (a || fe && c && (c < 1 || !qe)) && Ee(ne.targets).forEach(function(e) {
                        return e.classList[r || fe ? "add" : "remove"](ne.className)
                    }),
                    !re || ge || e || re(Te),
                    i && !Re ? (n = c && !u ? 0 : 1 === c ? 1 : 1 === u ? 2 : 3,
                    ge && (o = !a && "none" !== xe[n + 1] && xe[n + 1] || xe[n],
                    y && ("complete" === o || "reset" === o || o in y) && ("complete" === o ? y.pause().totalProgress(1) : "reset" === o ? y.restart(!0).pause() : y[o]()),
                    re && re(Te)),
                    !a && qe || (oe && a && oe(Te),
                    me[n] && me[n](Te),
                    fe && (1 === c ? Te.kill(!1, 1) : me[n] = 0),
                    a || me[n = 1 === c ? 1 : 3] && me[n](Te))) : ge && re && !Re && re(Te)
                }
                b && (v(s + (I._isFlipped ? 1 : 0)),
                b(s))
            }
            ,
            Te.enable = function() {
                Te.enabled || (Te.enabled = !0,
                xa(he, "resize", Ja),
                xa(he, "scroll", Ia),
                we && xa(ScrollTrigger, "refreshInit", we),
                y && y.add ? Me.delayedCall(.01, function() {
                    return P || _ || Te.refresh()
                }) && (A = .01) && (P = _ = 0) : Te.refresh())
            }
            ,
            Te.disable = function(e, t) {
                if (Te.enabled && (!1 !== e && Te.revert(),
                Te.enabled = Te.isActive = !1,
                t || Y && Y.pause(),
                G = 0,
                n && (n.uncache = 1),
                we && ya(ScrollTrigger, "refreshInit", we),
                Z && (Z.pause(),
                p.tween && p.tween.kill() && (p.tween = 0)),
                !ve)) {
                    for (var r = at.length; r--; )
                        if (at[r].scroller === he && at[r] !== Te)
                            return;
                    ya(he, "resize", Ja),
                    ya(he, "scroll", Ia)
                }
            }
            ,
            Te.kill = function(e, t) {
                Te.disable(e, t),
                i && delete st[i];
                var r = at.indexOf(Te);
                at.splice(r, 1),
                r === ze && 0 < lt && ze--,
                y && (y.scrollTrigger = null,
                e && y.render(-1),
                t || y.kill()),
                O && [O, E, I, R].forEach(function(e) {
                    return e.parentNode.removeChild(e)
                }),
                n && (n.uncache = 1)
            }
            ,
            Te.enable()
        } else
            this.update = this.refresh = this.kill = H
    }
    ,
    ScrollTrigger.register = function register(e) {
        if (!o && (Me = e || J(),
        I() && window.document && (ke = window,
        Pe = document,
        _e = Pe.documentElement,
        Oe = Pe.body),
        Me && (Ee = Me.utils.toArray,
        Le = Me.utils.clamp,
        Me.core.globals("ScrollTrigger", ScrollTrigger),
        Oe))) {
            s = ke.requestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }
            ,
            xa(ke, "mousewheel", Ia),
            i = [ke, Pe, _e, Oe],
            xa(Pe, "scroll", Ia);
            var t, r = Oe.style, n = r.borderTop;
            r.borderTop = "1px solid #000",
            t = nt(Oe),
            rt.m = Math.round(t.top + rt.sc()) || 0,
            tt.m = Math.round(t.left + tt.sc()) || 0,
            n ? r.borderTop = n : r.removeProperty("border-top"),
            c = setInterval(Ha, 200),
            Me.delayedCall(.5, function() {
                return Be = 0
            }),
            xa(Pe, "touchcancel", H),
            xa(Oe, "touchstart", H),
            wa(xa, Pe, "pointerdown,touchstart,mousedown", function() {
                return Ae = 1
            }),
            wa(xa, Pe, "pointerup,touchend,mouseup", function() {
                return Ae = 0
            }),
            u = Me.utils.checkPrefix("transform"),
            D.push(u),
            o = He(),
            a = Me.delayedCall(.2, z).pause(),
            p = [Pe, "visibilitychange", function() {
                var e = ke.innerWidth
                  , t = ke.innerHeight;
                Pe.hidden ? (f = e,
                d = t) : f === e && d === t || Ja()
            }
            , Pe, "DOMContentLoaded", z, ke, "load", function() {
                return De || z()
            }
            , ke, "resize", Ja],
            R(xa)
        }
        return o
    }
    ,
    ScrollTrigger.defaults = function defaults(e) {
        for (var t in e)
            it[t] = e[t]
    }
    ,
    ScrollTrigger.kill = function kill() {
        Je = 0,
        at.slice(0).forEach(function(e) {
            return e.kill(1)
        })
    }
    ,
    ScrollTrigger.config = function config(e) {
        "limitCallbacks"in e && (qe = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(Ha, t),
        "autoRefreshEvents"in e && (R(ya) || R(xa, e.autoRefreshEvents || "none"))
    }
    ,
    ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Ee(e)[0];
        K(r) ? Fe.unshift(ke, t, Oe, t, _e, t) : Fe.unshift(r, t)
    }
    ,
    ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, o, i;
        for (r in e)
            n = P.indexOf(r),
            o = e[r],
            "all" === (We = r) ? o() : (t = ke.matchMedia(r)) && (t.matches && (i = o()),
            ~n ? (P[n + 1] = X(P[n + 1], o),
            P[n + 2] = X(P[n + 2], i)) : (n = P.length,
            P.push(r, o, i),
            t.addListener ? t.addListener(Pa) : t.addEventListener("change", Pa)),
            P[n + 3] = t.matches),
            We = 0;
        return P
    }
    ,
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (P.length = 0),
        0 <= (e = P.indexOf(e)) && P.splice(e, 4)
    }
    ,
    ScrollTrigger);
    function ScrollTrigger(e, t) {
        o || ScrollTrigger.register(Me) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, t)
    }
    Z.version = "3.5.1",
    Z.saveStyles = function(e) {
        return e ? Ee(e).forEach(function(e) {
            var t = O.indexOf(e);
            0 <= t && O.splice(t, 4),
            O.push(e, e.style.cssText, Me.core.getCache(e), We)
        }) : O
    }
    ,
    Z.revert = function(e, t) {
        return A(!e, t)
    }
    ,
    Z.create = function(e, t) {
        return new Z(e,t)
    }
    ,
    Z.refresh = function(e) {
        return e ? Ja() : z(!0)
    }
    ,
    Z.update = B,
    Z.maxScroll = function(e, t) {
        return Q(e, t ? tt : rt)
    }
    ,
    Z.getScrollFunc = function(e, t) {
        return M(Ee(e)[0], t ? tt : rt)
    }
    ,
    Z.getById = function(e) {
        return st[e]
    }
    ,
    Z.getAll = function() {
        return at.slice(0)
    }
    ,
    Z.isScrolling = function() {
        return !!De
    }
    ,
    Z.addEventListener = function(e, t) {
        var r = C[e] || (C[e] = []);
        ~r.indexOf(t) || r.push(t)
    }
    ,
    Z.removeEventListener = function(e, t) {
        var r = C[e]
          , n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }
    ,
    Z.batch = function(e, t) {
        function bi(e, t) {
            var r = []
              , n = []
              , o = Me.delayedCall(i, function() {
                t(r, n),
                r = [],
                n = []
            }).pause();
            return function(e) {
                r.length || o.restart(!0),
                r.push(e.trigger),
                n.push(e),
                a <= r.length && o.progress(1)
            }
        }
        var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
        for (r in t)
            o[r] = "on" === r.substr(0, 2) && T(t[r]) && "onRefreshInit" !== r ? bi(0, t[r]) : t[r];
        return T(a) && (a = a(),
        xa(Z, "refresh", function() {
            return a = t.batchMax()
        })),
        Ee(e).forEach(function(e) {
            var t = {};
            for (r in o)
                t[r] = o[r];
            t.trigger = e,
            n.push(Z.create(t))
        }),
        n
    }
    ,
    Z.sort = function(e) {
        return at.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    J() && Me.registerPlugin(Z),
    e.ScrollTrigger = Z,
    e.default = Z;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * DrawSVGPlugin 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function i() {
        return "undefined" != typeof window
    }
    function j() {
        return t || i() && (t = window.gsap) && t.registerPlugin && t
    }
    function m(e) {
        return Math.round(1e4 * e) / 1e4
    }
    function n(e) {
        return parseFloat(e || 0)
    }
    function o(e, t) {
        return n(e.getAttribute(t))
    }
    function q(e, t, s, r, i, o) {
        return P(Math.pow((n(s) - n(e)) * i, 2) + Math.pow((n(r) - n(t)) * o, 2))
    }
    function r(e) {
        return console.warn(e)
    }
    function s(e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect")
    }
    function v(e) {
        if (!(e = k(e)[0]))
            return 0;
        var t, n, i, a, f, h, d, l = e.tagName.toLowerCase(), u = e.style, c = 1, g = 1;
        s(e) && (g = e.getScreenCTM(),
        c = P(g.a * g.a + g.b * g.b),
        g = P(g.d * g.d + g.c * g.c));
        try {
            n = e.getBBox()
        } catch (e) {
            r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var _ = n || {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
          , p = _.x
          , x = _.y
          , y = _.width
          , m = _.height;
        if (n && (y || m) || !M[l] || (y = o(e, M[l][0]),
        m = o(e, M[l][1]),
        "rect" !== l && "line" !== l && (y *= 2,
        m *= 2),
        "line" === l && (p = o(e, "x1"),
        x = o(e, "y1"),
        y = Math.abs(y - p),
        m = Math.abs(m - x))),
        "path" === l)
            a = u.strokeDasharray,
            u.strokeDasharray = "none",
            t = e.getTotalLength() || 0,
            c !== g && r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            t *= (c + g) / 2,
            u.strokeDasharray = a;
        else if ("rect" === l)
            t = 2 * y * c + 2 * m * g;
        else if ("line" === l)
            t = q(p, x, p + y, x + m, c, g);
        else if ("polyline" === l || "polygon" === l)
            for (i = e.getAttribute("points").match(b) || [],
            "polygon" === l && i.push(i[0], i[1]),
            t = 0,
            f = 2; f < i.length; f += 2)
                t += q(i[f - 2], i[f - 1], i[f], i[f + 1], c, g) || 0;
        else
            "circle" !== l && "ellipse" !== l || (h = y / 2 * c,
            d = m / 2 * g,
            t = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d))));
        return t || 0
    }
    function w(e, t) {
        if (!(e = k(e)[0]))
            return [0, 0];
        t = t || v(e) + 1;
        var s = h.getComputedStyle(e)
          , r = s.strokeDasharray || ""
          , i = n(s.strokeDashoffset)
          , o = r.indexOf(",");
        return o < 0 && (o = r.indexOf(" ")),
        t < (r = o < 0 ? t : n(r.substr(0, o)) || 1e-5) && (r = t),
        [Math.max(0, -i), Math.max(0, r - i)]
    }
    function x() {
        i() && (h = window,
        l = t = j(),
        k = t.utils.toArray,
        d = -1 !== ((h.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    var t, k, h, d, l, b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, M = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"]
    }, P = Math.sqrt, a = {
        version: "3.5.1",
        name: "drawSVG",
        register: function register(e) {
            t = e,
            x()
        },
        init: function init(e, t) {
            if (!e.getBBox)
                return !1;
            l || x();
            var r, i, o, a, f = v(e) + 1;
            return this._style = e.style,
            this._target = e,
            t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0",
            i = function _parse(e, t, s) {
                var r, i, o = e.indexOf(" ");
                return i = o < 0 ? (r = void 0 !== s ? s + "" : e,
                e) : (r = e.substr(0, o),
                e.substr(o + 1)),
                r = ~r.indexOf("%") ? n(r) / 100 * t : n(r),
                (i = ~i.indexOf("%") ? n(i) / 100 * t : n(i)) < r ? [i, r] : [r, i]
            }(t, f, (r = w(e, f))[0]),
            this._length = m(f + 10),
            0 === r[0] && 0 === i[0] ? (o = Math.max(1e-5, i[1] - f),
            this._dash = m(f + o),
            this._offset = m(f - r[1] + o),
            this._offsetPT = this.add(this, "_offset", this._offset, m(f - i[1] + o))) : (this._dash = m(r[1] - r[0]) || 1e-6,
            this._offset = m(-r[0]),
            this._dashPT = this.add(this, "_dash", this._dash, m(i[1] - i[0]) || 1e-5),
            this._offsetPT = this.add(this, "_offset", this._offset, m(-i[0]))),
            d && (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin && (i = n(a.strokeMiterlimit),
            this.add(e.style, "strokeMiterlimit", i, i + .01)),
            this._live = s(e) || ~(t + "").indexOf("live"),
            this._props.push("drawSVG"),
            1
        },
        render: function render(e, t) {
            var n, s, r, i, o = t._pt, a = t._style;
            if (o) {
                for (t._live && (n = v(t._target) + 11) !== t._length && (s = n / t._length,
                t._length = n,
                t._offsetPT.s *= s,
                t._offsetPT.c *= s,
                t._dashPT ? (t._dashPT.s *= s,
                t._dashPT.c *= s) : t._dash *= s); o; )
                    o.r(e, o.d),
                    o = o._next;
                r = t._dash,
                i = t._offset,
                n = t._length,
                a.strokeDashoffset = t._offset,
                1 !== e && e ? a.strokeDasharray = r + "px," + n + "px" : (r - i < .001 && n - r <= 10 && (a.strokeDashoffset = i + 1),
                a.strokeDasharray = i < .001 && n - r <= 10 ? "none" : i === r ? "0px, 999999px" : r + "px," + n + "px")
            }
        },
        getLength: v,
        getPosition: w
    };
    j() && t.registerPlugin(a),
    e.DrawSVGPlugin = a,
    e.default = a;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * MotionPathPlugin 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function p(t) {
        return "string" == typeof t
    }
    function x(t, e, n, r) {
        var a = t[e]
          , o = 1 === r ? 6 : subdivideSegment(a, n, r);
        if (o && o + n + 2 < a.length)
            return t.splice(e, 0, a.slice(0, n + o + 2)),
            a.splice(0, n + o),
            1
    }
    function A(t, e) {
        var n = t.length
          , r = t[n - 1] || []
          , a = r.length;
        e[0] === r[a - 2] && e[1] === r[a - 1] && (e = r.concat(e.slice(2)),
        n--),
        t[n] = e
    }
    var M = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , R = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , L = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
      , r = /(^[#\.][a-z]|[a-y][a-z])/i
      , q = Math.PI / 180
      , s = 180 / Math.PI
      , F = Math.sin
      , H = Math.cos
      , Q = Math.abs
      , $ = Math.sqrt
      , S = Math.atan2
      , B = 1e8
      , l = function _isNumber(t) {
        return "number" == typeof t
    }
      , N = {}
      , _ = {}
      , e = 1e5
      , d = function _wrapProgress(t) {
        return Math.round((t + B) % 1 * e) / e || (t < 0 ? 0 : 1)
    }
      , C = function _round(t) {
        return Math.round(t * e) / e || 0
    }
      , I = function _copyMetaData(t, e) {
        return e.totalLength = t.totalLength,
        t.samples ? (e.samples = t.samples.slice(0),
        e.lookup = t.lookup.slice(0),
        e.minLength = t.minLength,
        e.resolution = t.resolution) : e.totalPoints = t.totalPoints,
        e
    };
    function getRawPath(t) {
        var e, n = (t = p(t) && r.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}),
        (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = stringToRawPath(t)) : t ? p(t) ? stringToRawPath(t) : l(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }
    function reverseSegment(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2)
            e = t[n],
            t[n] = t[n + 1],
            t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var E = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };
    function convertToPath(t, e) {
        var n, r, a, o, i, s, l, h, u, f, g, c, p, d, m, v, x, y, P, w, b, M, L = t.tagName.toLowerCase(), T = .552284749831;
        return "path" !== L && t.getBBox ? (s = function _createPath(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"), a = [].slice.call(t.attributes), o = a.length;
            for (e = "," + e + ","; -1 < --o; )
                n = a[o].nodeName.toLowerCase(),
                e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, a[o].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
        M = function _attrToObj(t, e) {
            for (var n = e ? e.split(",") : [], r = {}, a = n.length; -1 < --a; )
                r[n[a]] = +t.getAttribute(n[a]) || 0;
            return r
        }(t, E[L]),
        "rect" === L ? (o = M.rx,
        i = M.ry || o,
        r = M.x,
        a = M.y,
        f = M.width - 2 * o,
        g = M.height - 2 * i,
        n = o || i ? "M" + (v = (d = (p = r + o) + f) + o) + "," + (y = a + i) + " V" + (P = y + g) + " C" + [v, w = P + i * T, m = d + o * T, b = P + i, d, b, d - (d - p) / 3, b, p + (d - p) / 3, b, p, b, c = r + o * (1 - T), b, r, w, r, P, r, P - (P - y) / 3, r, y + (P - y) / 3, r, y, r, x = a + i * (1 - T), c, a, p, a, p + (d - p) / 3, a, d - (d - p) / 3, a, d, a, m, a, v, x, v, y].join(",") + "z" : "M" + (r + f) + "," + a + " v" + g + " h" + -f + " v" + -g + " h" + f + "z") : "circle" === L || "ellipse" === L ? (h = "circle" === L ? (o = i = M.r) * T : (o = M.rx,
        (i = M.ry) * T),
        n = "M" + ((r = M.cx) + o) + "," + (a = M.cy) + " C" + [r + o, a + h, r + (l = o * T), a + i, r, a + i, r - l, a + i, r - o, a + h, r - o, a, r - o, a - h, r - l, a - i, r, a - i, r + l, a - i, r + o, a - h, r + o, a].join(",") + "z") : "line" === L ? n = "M" + M.x1 + "," + M.y1 + " L" + M.x2 + "," + M.y2 : "polyline" !== L && "polygon" !== L || (n = "M" + (r = (u = (t.getAttribute("points") + "").match(R) || []).shift()) + "," + (a = u.shift()) + " L" + u.join(","),
        "polygon" === L && (n += "," + r + "," + a + "z")),
        s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(n))),
        e && t.parentNode && (t.parentNode.insertBefore(s, t),
        t.parentNode.removeChild(t)),
        s) : t
    }
    function getRotationAtBezierT(t, e, n) {
        var r, a = t[e], o = t[e + 2], i = t[e + 4];
        return a += (o - a) * n,
        a += ((o += (i - o) * n) - a) * n,
        r = o + (i + (t[e + 6] - i) * n - o) * n - a,
        a = t[e + 1],
        a += ((o = t[e + 3]) - a) * n,
        a += ((o += ((i = t[e + 5]) - o) * n) - a) * n,
        C(S(o + (i + (t[e + 7] - i) * n - o) * n - a, r) * s)
    }
    function sliceRawPath(t, e, n) {
        !function _isUndefined(t) {
            return void 0 === t
        }(n) || (n = 1);
        var r = n < (e = e || 0)
          , a = Math.max(0, ~~(Q(n - e) - 1e-8));
        if (r && (r = n,
        n = e,
        e = r,
        r = 1,
        a -= a ? 1 : 0),
        e < 0 || n < 0) {
            var o = 1 + ~~Math.min(e, n);
            e += o,
            n += o
        }
        var i, s, l, h, u, f, g, c = function copyRawPath(t) {
            for (var e = [], n = 0; n < t.length; n++)
                e[n] = I(t[n], t[n].slice(0));
            return I(t, e)
        }(t.totalLength ? t : cacheRawPathMeasurements(t)), p = 1 < n, d = getProgressData(c, e, N, !0), m = getProgressData(c, n, _), v = m.segment, y = d.segment, P = m.segIndex, w = d.segIndex, b = m.i, M = d.i, L = w === P, T = b === M && L, R = L && b < M || T && d.t > m.t;
        if (p || a) {
            if (x(c, w, M, d.t) && (i = 1,
            w++,
            T ? R ? m.t /= d.t : (m.t = (m.t - d.t) / (1 - d.t),
            P++,
            b = 0) : w <= P + 1 && !R && (P++,
            L && (b -= M))),
            m.t ? x(c, P, b, m.t) && (R && i && w++,
            r && P++) : (P--,
            r && w--),
            h = [],
            f = 1 + (u = c.length) * a,
            g = w,
            r)
                for (f += (u - (P = (P || u) - 1) + w) % u,
                l = 0; l < f; l++)
                    A(h, c[g]),
                    g = (g || u) - 1;
            else
                for (f += (u - w + P) % u,
                l = 0; l < f; l++)
                    A(h, c[g++ % u]);
            c = h
        } else if (s = 1 === m.t ? 6 : subdivideSegment(v, b, m.t),
        e !== n)
            for (i = subdivideSegment(y, M, T ? d.t / m.t : d.t),
            L && (s += i),
            v.splice(b + s + 2),
            (i || M) && y.splice(0, M + i),
            l = c.length; l--; )
                (l < w || P < l) && c.splice(l, 1);
        else
            v.angle = getRotationAtBezierT(v, b + s, 0),
            d = v[b += s],
            m = v[b + 1],
            v.length = v.totalLength = 0,
            v.totalPoints = c.totalPoints = 8,
            v.push(d, m, d, m, d, m, d, m);
        return r && function _reverseRawPath(t, e) {
            var n = t.length;
            for (e || t.reverse(); n--; )
                t[n].reversed || reverseSegment(t[n])
        }(c, p || a),
        c.totalLength = 0,
        c
    }
    function measureSegment(t, e, n) {
        e = e || 0,
        t.samples || (t.samples = [],
        t.lookup = []);
        var r, a, o, i, s, l, h, u, f, g, c, p, d, m, v, x, y, P = ~~t.resolution || 12, w = 1 / P, b = n ? e + 6 * n + 1 : t.length, M = t[e], L = t[e + 1], T = e ? e / 6 * P : 0, R = t.samples, S = t.lookup, N = (e ? t.minLength : B) || B, _ = R[T + n * P - 1], C = e ? R[T - 1] : 0;
        for (R.length = S.length = 0,
        a = e + 2; a < b; a += 6) {
            if (o = t[a + 4] - M,
            i = t[a + 2] - M,
            s = t[a] - M,
            u = t[a + 5] - L,
            f = t[a + 3] - L,
            g = t[a + 1] - L,
            l = h = c = p = 0,
            Q(o) < 1e-5 && Q(u) < 1e-5 && Q(s) + Q(g) < 1e-5)
                8 < t.length && (t.splice(a, 6),
                a -= 6,
                b -= 6);
            else
                for (r = 1; r <= P; r++)
                    l = h - (h = ((m = w * r) * m * o + 3 * (d = 1 - m) * (m * i + d * s)) * m),
                    c = p - (p = (m * m * u + 3 * d * (m * f + d * g)) * m),
                    (x = $(c * c + l * l)) < N && (N = x),
                    C += x,
                    R[T++] = C;
            M += o,
            L += u
        }
        if (_)
            for (_ -= C; T < R.length; T++)
                R[T] += _;
        if (R.length && N)
            for (t.totalLength = y = R[R.length - 1] || 0,
            t.minLength = N,
            x = v = 0,
            r = 0; r < y; r += N)
                S[x++] = R[v] < r ? ++v : v;
        else
            t.totalLength = R[0] = 0;
        return e ? C - R[e / 2 - 1] : C
    }
    function cacheRawPathMeasurements(t, e) {
        var n, r, a;
        for (a = n = r = 0; a < t.length; a++)
            t[a].resolution = ~~e || 12,
            r += t[a].length,
            n += measureSegment(t[a]);
        return t.totalPoints = r,
        t.totalLength = n,
        t
    }
    function subdivideSegment(t, e, n) {
        if (n <= 0 || 1 <= n)
            return 0;
        var r = t[e]
          , a = t[e + 1]
          , o = t[e + 2]
          , i = t[e + 3]
          , s = t[e + 4]
          , l = t[e + 5]
          , h = r + (o - r) * n
          , u = o + (s - o) * n
          , f = a + (i - a) * n
          , g = i + (l - i) * n
          , c = h + (u - h) * n
          , p = f + (g - f) * n
          , d = s + (t[e + 6] - s) * n
          , m = l + (t[e + 7] - l) * n;
        return u += (d - u) * n,
        g += (m - g) * n,
        t.splice(e + 2, 4, C(h), C(f), C(c), C(p), C(c + (u - c) * n), C(p + (g - p) * n), C(u), C(g), C(d), C(m)),
        t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0),
        6
    }
    function getProgressData(t, e, n, r) {
        n = n || {},
        t.totalLength || cacheRawPathMeasurements(t),
        (e < 0 || 1 < e) && (e = d(e));
        var a, o, i, s, l, h, u, f = 0, g = t[0];
        if (1 < t.length) {
            for (i = t.totalLength * e,
            l = h = 0; (l += t[h++].totalLength) < i; )
                f = h;
            e = (i - (s = l - (g = t[f]).totalLength)) / (l - s) || 0
        }
        return a = g.samples,
        o = g.resolution,
        i = g.totalLength * e,
        s = (h = g.lookup[~~(i / g.minLength)] || 0) ? a[h - 1] : 0,
        (l = a[h]) < i && (s = l,
        l = a[++h]),
        u = 1 / o * ((i - s) / (l - s) + h % o),
        h = 6 * ~~(h / o),
        r && 1 === u && (h + 6 < g.length ? (h += 6,
        u = 0) : f + 1 < t.length && (h = u = 0,
        g = t[++f])),
        n.t = u,
        n.i = h,
        n.path = t,
        n.segment = g,
        n.segIndex = f,
        n
    }
    function getPositionOnPath(t, e, n, r) {
        var a, o, i, s, l, h, u, f, g, c = t[0], p = r || {};
        if ((e < 0 || 1 < e) && (e = d(e)),
        1 < t.length) {
            for (i = t.totalLength * e,
            l = h = 0; (l += t[h++].totalLength) < i; )
                c = t[h];
            e = (i - (s = l - c.totalLength)) / (l - s) || 0
        }
        return a = c.samples,
        o = c.resolution,
        i = c.totalLength * e,
        s = (h = c.lookup[~~(i / c.minLength)] || 0) ? a[h - 1] : 0,
        (l = a[h]) < i && (s = l,
        l = a[++h]),
        g = 1 - (u = 1 / o * ((i - s) / (l - s) + h % o) || 0),
        f = c[h = 6 * ~~(h / o)],
        p.x = C((u * u * (c[h + 6] - f) + 3 * g * (u * (c[h + 4] - f) + g * (c[h + 2] - f))) * u + f),
        p.y = C((u * u * (c[h + 7] - (f = c[h + 1])) + 3 * g * (u * (c[h + 5] - f) + g * (c[h + 3] - f))) * u + f),
        n && (p.angle = c.totalLength ? getRotationAtBezierT(c, h, 1 <= u ? 1 - 1e-9 : u || 1e-9) : c.angle || 0),
        p
    }
    function transformRawPath(t, e, n, r, a, o, i) {
        for (var s, l, h, u, f, g = t.length; -1 < --g; )
            for (l = (s = t[g]).length,
            h = 0; h < l; h += 2)
                u = s[h],
                f = s[h + 1],
                s[h] = u * e + f * r + o,
                s[h + 1] = u * n + f * a + i;
        return t._dirty = 1,
        t
    }
    function arcToSegment(t, e, n, r, a, o, i, s, l) {
        if (t !== s || e !== l) {
            n = Q(n),
            r = Q(r);
            var h = a % 360 * q
              , u = H(h)
              , f = F(h)
              , g = Math.PI
              , c = 2 * g
              , p = (t - s) / 2
              , d = (e - l) / 2
              , m = u * p + f * d
              , v = -f * p + u * d
              , x = m * m
              , y = v * v
              , P = x / (n * n) + y / (r * r);
            1 < P && (n = $(P) * n,
            r = $(P) * r);
            var w = n * n
              , b = r * r
              , M = (w * b - w * y - b * x) / (w * y + b * x);
            M < 0 && (M = 0);
            var L = (o === i ? -1 : 1) * $(M)
              , T = n * v / r * L
              , R = -r * m / n * L
              , S = u * T - f * R + (t + s) / 2
              , N = f * T + u * R + (e + l) / 2
              , _ = (m - T) / n
              , C = (v - R) / r
              , A = (-m - T) / n
              , O = (-v - R) / r
              , B = _ * _ + C * C
              , I = (C < 0 ? -1 : 1) * Math.acos(_ / $(B))
              , E = (_ * O - C * A < 0 ? -1 : 1) * Math.acos((_ * A + C * O) / $(B * (A * A + O * O)));
            isNaN(E) && (E = g),
            !i && 0 < E ? E -= c : i && E < 0 && (E += c),
            I %= c,
            E %= c;
            var G, D = Math.ceil(Q(E) / (c / 4)), z = [], W = E / D, Y = 4 / 3 * F(W / 2) / (1 + H(W / 2)), j = u * n, k = f * n, V = f * -r, X = u * r;
            for (G = 0; G < D; G++)
                m = H(a = I + G * W),
                v = F(a),
                _ = H(a += W),
                C = F(a),
                z.push(m - Y * v, v + Y * m, _ + Y * C, C - Y * _, _, C);
            for (G = 0; G < z.length; G += 2)
                m = z[G],
                v = z[G + 1],
                z[G] = m * j + v * V + S,
                z[G + 1] = m * k + v * X + N;
            return z[G - 2] = s,
            z[G - 1] = l,
            z
        }
    }
    function stringToRawPath(t) {
        function rf(t, e, n, r) {
            u = (n - t) / 3,
            f = (r - e) / 3,
            s.push(t + u, e + f, n - u, r - f, n, r)
        }
        var e, n, r, a, o, i, s, l, h, u, f, g, c, p, d, m = (t + "").replace(L, function(t) {
            var e = +t;
            return e < 1e-4 && -1e-4 < e ? 0 : e
        }).match(M) || [], v = [], x = 0, y = 0, P = m.length, w = 0, b = "ERROR: malformed path: " + t;
        if (!t || !isNaN(m[0]) || isNaN(m[1]))
            return console.log(b),
            v;
        for (e = 0; e < P; e++)
            if (c = o,
            isNaN(m[e]) ? i = (o = m[e].toUpperCase()) !== m[e] : e--,
            r = +m[e + 1],
            a = +m[e + 2],
            i && (r += x,
            a += y),
            e || (l = r,
            h = a),
            "M" === o)
                s && (s.length < 8 ? --v.length : w += s.length),
                x = l = r,
                y = h = a,
                s = [r, a],
                v.push(s),
                e += 2,
                o = "L";
            else if ("C" === o)
                i || (x = y = 0),
                (s = s || [0, 0]).push(r, a, x + 1 * m[e + 3], y + 1 * m[e + 4], x += 1 * m[e + 5], y += 1 * m[e + 6]),
                e += 6;
            else if ("S" === o)
                u = x,
                f = y,
                "C" !== c && "S" !== c || (u += x - s[s.length - 4],
                f += y - s[s.length - 3]),
                i || (x = y = 0),
                s.push(u, f, r, a, x += 1 * m[e + 3], y += 1 * m[e + 4]),
                e += 4;
            else if ("Q" === o)
                u = x + 2 / 3 * (r - x),
                f = y + 2 / 3 * (a - y),
                i || (x = y = 0),
                x += 1 * m[e + 3],
                y += 1 * m[e + 4],
                s.push(u, f, x + 2 / 3 * (r - x), y + 2 / 3 * (a - y), x, y),
                e += 4;
            else if ("T" === o)
                u = x - s[s.length - 4],
                f = y - s[s.length - 3],
                s.push(x + u, y + f, r + 2 / 3 * (x + 1.5 * u - r), a + 2 / 3 * (y + 1.5 * f - a), x = r, y = a),
                e += 2;
            else if ("H" === o)
                rf(x, y, x = r, y),
                e += 1;
            else if ("V" === o)
                rf(x, y, x, y = r + (i ? y - x : 0)),
                e += 1;
            else if ("L" === o || "Z" === o)
                "Z" === o && (r = l,
                a = h,
                s.closed = !0),
                ("L" === o || .5 < Q(x - r) || .5 < Q(y - a)) && (rf(x, y, r, a),
                "L" === o && (e += 2)),
                x = r,
                y = a;
            else if ("A" === o) {
                if (p = m[e + 4],
                d = m[e + 5],
                u = m[e + 6],
                f = m[e + 7],
                n = 7,
                1 < p.length && (p.length < 3 ? (f = u,
                u = d,
                n--) : (f = d,
                u = p.substr(2),
                n -= 2),
                d = p.charAt(1),
                p = p.charAt(0)),
                g = arcToSegment(x, y, +m[e + 1], +m[e + 2], +m[e + 3], +p, +d, (i ? x : 0) + 1 * u, (i ? y : 0) + 1 * f),
                e += n,
                g)
                    for (n = 0; n < g.length; n++)
                        s.push(g[n]);
                x = s[s.length - 2],
                y = s[s.length - 1]
            } else
                console.log(b);
        return (e = s.length) < 6 ? (v.pop(),
        e = 0) : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0),
        v.totalPoints = w + e,
        v
    }
    function flatPointsToSegment(t, e) {
        void 0 === e && (e = 1);
        for (var n = t[0], r = 0, a = [n, r], o = 2; o < t.length; o += 2)
            a.push(n, r, t[o], r = (t[o] - n) * e / 2, n = t[o], -r);
        return a
    }
    function pointsToSegment(t, e, n) {
        var r, a, o, i, s, l, h, u, f, g, c, p, d, m, v = t.length - 2, x = +t[0], y = +t[1], P = +t[2], w = +t[3], b = [x, y, x, y], M = P - x, L = w - y, T = Math.abs(t[v] - x) < .001 && Math.abs(t[v + 1] - y) < .001;
        for (isNaN(n) && (n = Math.PI / 10),
        T && (t.push(P, w),
        P = x,
        w = y,
        x = t[v - 2],
        y = t[v - 1],
        t.unshift(x, y),
        v += 4),
        e = e || 0 === e ? +e : 1,
        s = 2; s < v; s += 2)
            r = x,
            a = y,
            x = P,
            y = w,
            p = (l = M) * l + (u = L) * u,
            d = (M = (P = +t[s + 2]) - x) * M + (L = (w = +t[s + 3]) - y) * L,
            m = (h = P - r) * h + (f = w - a) * f,
            c = (o = Math.acos((p + d - m) / $(4 * p * d))) / Math.PI * e,
            g = $(p) * c,
            c *= $(d),
            x === r && y === a || (n < o ? (i = S(f, h),
            b.push(C(x - H(i) * g), C(y - F(i) * g), C(x), C(y), C(x + H(i) * c), C(y + F(i) * c))) : (i = S(u, l),
            b.push(C(x - H(i) * g), C(y - F(i) * g)),
            i = S(L, M),
            b.push(C(x), C(y), C(x + H(i) * c), C(y + F(i) * c))));
        return b.push(C(P), C(w), C(P), C(w)),
        T && (b.splice(0, 6),
        b.length = b.length - 6),
        b
    }
    function rawPathToString(t) {
        l(t[0]) && (t = [t]);
        var e, n, r, a, o = "", i = t.length;
        for (n = 0; n < i; n++) {
            for (a = t[n],
            o += "M" + C(a[0]) + "," + C(a[1]) + " C",
            e = a.length,
            r = 2; r < e; r++)
                o += C(a[r++]) + "," + C(a[r++]) + " " + C(a[r++]) + "," + C(a[r++]) + " " + C(a[r++]) + "," + C(a[r]) + " ";
            a.closed && (o += "z")
        }
        return o
    }
    function O(t) {
        var e = t.ownerDocument || t;
        !(w in t.style) && "msTransform"in t.style && (b = (w = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode); )
            ;
        if (c = window,
        y = new D,
        e) {
            m = (g = e).documentElement,
            v = e.body;
            var n = e.createElement("div")
              , r = e.createElement("div");
            v.appendChild(n),
            n.appendChild(r),
            n.style.position = "static",
            n.style[w] = "translate3d(0,0,1px)",
            P = r.offsetParent !== n,
            v.removeChild(n)
        }
        return e
    }
    function U(t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
    }
    function W(t, e) {
        if (t.parentNode && (g || O(t))) {
            var n = U(t)
              , r = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
              , a = n ? e ? "rect" : "g" : "div"
              , o = 2 !== e ? 0 : 100
              , i = 3 === e ? 100 : 0
              , s = "position:absolute;display:block;pointer-events:none;"
              , l = g.createElementNS ? g.createElementNS(r.replace(/^https/, "http"), a) : g.createElement(a);
            return e && (n ? (f = f || W(t),
            l.setAttribute("width", .01),
            l.setAttribute("height", .01),
            l.setAttribute("transform", "translate(" + o + "," + i + ")"),
            f.appendChild(l)) : (u || ((u = W(t)).style.cssText = s),
            l.style.cssText = s + "width:0.1px;height:0.1px;top:" + i + "px;left:" + o + "px",
            u.appendChild(l))),
            l
        }
        throw "Need document and parent."
    }
    function Y(t, e) {
        var n, r, a, o, i, s = U(t), l = t === s, h = s ? T : G;
        if (t === c)
            return t;
        if (h.length || h.push(W(t, 1), W(t, 2), W(t, 3)),
        n = s ? f : u,
        s)
            a = l ? {
                x: 0,
                y: 0
            } : t.getBBox(),
            i = (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (o = (r = 1 < r.numberOfItems ? function _consolidate(t) {
                for (var e = new D, n = 0; n < t.numberOfItems; n++)
                    e.multiply(t.getItem(n).matrix);
                return e
            }(r) : r.getItem(0).matrix).a * a.x + r.c * a.y,
            r.b * a.x + r.d * a.y) : (r = y,
            o = a.x,
            a.y),
            e && "g" === t.tagName.toLowerCase() && (o = i = 0),
            n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + o) + "," + (r.f + i) + ")"),
            (l ? s : t.parentNode).appendChild(n);
        else {
            if (o = i = 0,
            P)
                for (r = t.offsetParent,
                a = t; (a = a && a.parentNode) && a !== r && a.parentNode; )
                    4 < (c.getComputedStyle(a)[w] + "").length && (o = a.offsetLeft,
                    i = a.offsetTop,
                    a = 0);
            (a = n.style).top = t.offsetTop - i + "px",
            a.left = t.offsetLeft - o + "px",
            r = c.getComputedStyle(t),
            a[w] = r[w],
            a[b] = r[b],
            a.border = r.border,
            a.borderLeftStyle = r.borderLeftStyle,
            a.borderTopStyle = r.borderTopStyle,
            a.borderLeftWidth = r.borderLeftWidth,
            a.borderTopWidth = r.borderTopWidth,
            a.position = "fixed" === r.position ? "fixed" : "absolute",
            t.parentNode.appendChild(n)
        }
        return n
    }
    function Z(t, e, n, r, a, o, i) {
        return t.a = e,
        t.b = n,
        t.c = r,
        t.d = a,
        t.e = o,
        t.f = i,
        t
    }
    var g, c, m, v, u, f, y, P, n, w = "transform", b = w + "Origin", T = [], G = [], D = ((n = Matrix2D.prototype).inverse = function inverse() {
        var t = this.a
          , e = this.b
          , n = this.c
          , r = this.d
          , a = this.e
          , o = this.f
          , i = t * r - e * n || 1e-10;
        return Z(this, r / i, -e / i, -n / i, t / i, (n * o - r * a) / i, -(t * o - e * a) / i)
    }
    ,
    n.multiply = function multiply(t) {
        var e = this.a
          , n = this.b
          , r = this.c
          , a = this.d
          , o = this.e
          , i = this.f
          , s = t.a
          , l = t.c
          , h = t.b
          , u = t.d
          , f = t.e
          , g = t.f;
        return Z(this, s * e + h * r, s * n + h * a, l * e + u * r, l * n + u * a, o + f * e + g * r, i + f * n + g * a)
    }
    ,
    n.clone = function clone() {
        return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    n.equals = function equals(t) {
        var e = this.a
          , n = this.b
          , r = this.c
          , a = this.d
          , o = this.e
          , i = this.f;
        return e === t.a && n === t.b && r === t.c && a === t.d && o === t.e && i === t.f
    }
    ,
    n.apply = function apply(t, e) {
        void 0 === e && (e = {});
        var n = t.x
          , r = t.y
          , a = this.a
          , o = this.b
          , i = this.c
          , s = this.d
          , l = this.e
          , h = this.f;
        return e.x = n * a + r * i + l || 0,
        e.y = n * o + r * s + h || 0,
        e
    }
    ,
    Matrix2D);
    function Matrix2D(t, e, n, r, a, o) {
        void 0 === t && (t = 1),
        void 0 === e && (e = 0),
        void 0 === n && (n = 0),
        void 0 === r && (r = 1),
        void 0 === a && (a = 0),
        void 0 === o && (o = 0),
        Z(this, t, e, n, r, a, o)
    }
    function getGlobalMatrix(t, e, n) {
        if (!t || !t.parentNode || (g || O(t)).documentElement === t)
            return new D;
        var r = function _forceNonZeroScale(t) {
            for (var e, n; t && t !== v; )
                (n = t._gsap) && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4,
                n.renderTransform(1, n),
                e ? e.push(n) : e = [n]),
                t = t.parentNode;
            return e
        }(t.parentNode)
          , a = U(t) ? T : G
          , o = Y(t, n)
          , i = a[0].getBoundingClientRect()
          , s = a[1].getBoundingClientRect()
          , l = a[2].getBoundingClientRect()
          , h = o.parentNode
          , u = function _isFixed(t) {
            return "fixed" === c.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0)
        }(t)
          , f = new D((s.left - i.left) / 100,(s.top - i.top) / 100,(l.left - i.left) / 100,(l.top - i.top) / 100,i.left + (u ? 0 : function _getDocScrollLeft() {
            return c.pageXOffset || g.scrollLeft || m.scrollLeft || v.scrollLeft || 0
        }()),i.top + (u ? 0 : function _getDocScrollTop() {
            return c.pageYOffset || g.scrollTop || m.scrollTop || v.scrollTop || 0
        }()));
        if (h.removeChild(o),
        r)
            for (i = r.length; i--; )
                (s = r[i]).scaleX = s.scaleY = 0,
                s.renderTransform(1, s);
        return e ? f.inverse() : f
    }
    function ha(t, e, n, r) {
        for (var a = e.length, o = 2 === r ? 0 : r, i = 0; i < a; i++)
            t[o] = parseFloat(e[i][n]),
            2 === r && (t[o + 1] = 0),
            o += 2;
        return t
    }
    function ia(t, e, n) {
        return parseFloat(t._gsap.get(t, e, n || "px")) || 0
    }
    function ja(t) {
        var e, n = t[0], r = t[1];
        for (e = 2; e < t.length; e += 2)
            n = t[e] += n,
            r = t[e + 1] += r
    }
    function ka(t, e, n, r, a, o, i) {
        return e = "cubic" === i.type ? [e] : (e.unshift(ia(n, r, i.unitX), a ? ia(n, a, i.unitY) : 0),
        i.relative && ja(e),
        [(a ? pointsToSegment : flatPointsToSegment)(e, i.curviness)]),
        e = o(tt(e, n, i)),
        et(t, n, r, e, "x", i.unitX),
        a && et(t, n, a, e, "y", i.unitY),
        cacheRawPathMeasurements(e, i.resolution || (0 === i.curviness ? 20 : 12))
    }
    function la(t) {
        return t
    }
    function na(t, e, n) {
        var r, a, o, i = getGlobalMatrix(t);
        return "svg" === (t.tagName + "").toLowerCase() ? (a = (r = t.viewBox.baseVal).x,
        o = r.y,
        r.width || (r = {
            width: +t.getAttribute("width"),
            height: +t.getAttribute("height")
        })) : (r = e && t.getBBox && t.getBBox(),
        a = o = 0),
        e && "auto" !== e && (a += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x,
        o += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y),
        n.apply(a || o ? i.apply({
            x: a,
            y: o
        }) : {
            x: i.e,
            y: i.f
        })
    }
    function oa(t, e, n, r) {
        var a, o = getGlobalMatrix(t.parentNode, !0, !0), i = o.clone().multiply(getGlobalMatrix(e)), s = na(t, n, o), l = na(e, r, o), h = l.x, u = l.y;
        return i.e = i.f = 0,
        "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (a = e.getAttribute("d").match(K) || [],
        h += (a = i.apply({
            x: +a[0],
            y: +a[1]
        })).x,
        u += a.y),
        (a || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (h -= (a = i.apply(e.getBBox())).x,
        u -= a.y),
        i.e = h - s.x,
        i.f = u - s.y,
        i
    }
    var z, j, k, V, X = ["x", "translateX", "left", "marginLeft"], J = ["y", "translateY", "top", "marginTop"], o = Math.PI / 180, K = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g, tt = function _align(t, e, n) {
        var r, a, o, i = n.align, s = n.matrix, l = n.offsetX, h = n.offsetY, u = n.alignOrigin, f = t[0][0], g = t[0][1], c = ia(e, "x"), p = ia(e, "y");
        return t && t.length ? (i && ("self" === i || (r = V(i)[0] || e) === e ? transformRawPath(t, 1, 0, 0, 1, c - f, p - g) : (u && !1 !== u[2] ? z.set(e, {
            transformOrigin: 100 * u[0] + "% " + 100 * u[1] + "%"
        }) : u = [ia(e, "xPercent") / -100, ia(e, "yPercent") / -100],
        o = (a = oa(e, r, u, "auto")).apply({
            x: f,
            y: g
        }),
        transformRawPath(t, a.a, a.b, a.c, a.d, c + a.e - (o.x - a.e), p + a.f - (o.y - a.f)))),
        s ? transformRawPath(t, s.a, s.b, s.c, s.d, s.e, s.f) : (l || h) && transformRawPath(t, 1, 0, 0, 1, l || 0, h || 0),
        t) : getRawPath("M0,0L0,0")
    }, et = function _addDimensionalPropTween(t, e, n, r, a, o) {
        var i = e._gsap
          , s = i.harness
          , l = s && s.aliases && s.aliases[n]
          , h = l && l.indexOf(",") < 0 ? l : n
          , u = t._pt = new j(t._pt,e,h,0,0,la,0,i.set(e, h, t));
        u.u = k(i.get(e, h, o)) || 0,
        u.path = r,
        u.pp = a,
        t._props.push(h)
    }, a = {
        version: "3.5.1",
        name: "motionPath",
        register: function register(t, e, n) {
            k = (z = t).utils.getUnit,
            V = z.utils.toArray,
            j = n
        },
        init: function init(t, e) {
            if (!z)
                return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),
                !1;
            "object" == typeof e && !e.style && e.path || (e = {
                path: e
            });
            var n, r, a, o, i = [], s = e.path, l = s[0], h = e.autoRotate, u = function _sliceModifier(e, n) {
                return function(t) {
                    return e || 1 !== n ? sliceRawPath(t, e, n) : t
                }
            }(e.start, "end"in e ? e.end : 1);
            if (this.rawPaths = i,
            this.target = t,
            (this.rotate = h || 0 === h) && (this.rOffset = parseFloat(h) || 0,
            this.radians = !!e.useRadians,
            this.rProp = e.rotation || "rotation",
            this.rSet = t._gsap.set(t, this.rProp, this),
            this.ru = k(t._gsap.get(t, this.rProp)) || 0),
            !Array.isArray(s) || "closed"in s || "number" == typeof l)
                cacheRawPathMeasurements(n = u(tt(getRawPath(e.path), t, e)), e.resolution),
                i.push(n),
                et(this, t, e.x || "x", n, "x", e.unitX || "px"),
                et(this, t, e.y || "y", n, "y", e.unitY || "px");
            else {
                for (r in l)
                    ~X.indexOf(r) ? a = r : ~J.indexOf(r) && (o = r);
                for (r in a && o ? i.push(ka(this, ha(ha([], s, a, 0), s, o, 1), t, e.x || a, e.y || o, u, e)) : a = o = 0,
                l)
                    r !== a && r !== o && i.push(ka(this, ha([], s, r, 2), t, r, 0, u, e))
            }
        },
        render: function render(t, e) {
            var n = e.rawPaths
              , r = n.length
              , a = e._pt;
            for (1 < t ? t = 1 : t < 0 && (t = 0); r--; )
                getPositionOnPath(n[r], t, !r && e.rotate, n[r]);
            for (; a; )
                a.set(a.t, a.p, a.path[a.pp] + a.u, a.d, t),
                a = a._next;
            e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? o : 1) + e.rOffset + e.ru, e, t)
        },
        getLength: function getLength(t) {
            return cacheRawPathMeasurements(getRawPath(t)).totalLength
        },
        sliceRawPath: sliceRawPath,
        getRawPath: getRawPath,
        pointsToSegment: pointsToSegment,
        stringToRawPath: stringToRawPath,
        rawPathToString: rawPathToString,
        transformRawPath: transformRawPath,
        getGlobalMatrix: getGlobalMatrix,
        getPositionOnPath: getPositionOnPath,
        cacheRawPathMeasurements: cacheRawPathMeasurements,
        convertToPath: function convertToPath$1(t, e) {
            return V(t).map(function(t) {
                return convertToPath(t, !1 !== e)
            })
        },
        convertCoordinates: function convertCoordinates(t, e, n) {
            var r = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
            return n ? r.apply(n) : r
        },
        getAlignMatrix: oa,
        getRelativePosition: function getRelativePosition(t, e, n, r) {
            var a = oa(t, e, n, r);
            return {
                x: a.e,
                y: a.f
            }
        },
        arrayToRawPath: function arrayToRawPath(t, e) {
            var n = ha(ha([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
            return e.relative && ja(n),
            ["cubic" === e.type ? n : pointsToSegment(n, e.curviness)]
        }
    };
    !function _getGSAP() {
        return z || "undefined" != typeof window && (z = window.gsap) && z.registerPlugin && z
    }() || z.registerPlugin(a),
    t.MotionPathPlugin = a,
    t.default = a;
    if (typeof (window) === "undefined" || window !== t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    } else {
        delete t.default
    }
});

/*!
 * ScrollToPlugin 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function k() {
        return "undefined" != typeof window
    }
    function l() {
        return e || k() && (e = window.gsap) && e.registerPlugin && e
    }
    function m(t) {
        return "string" == typeof t
    }
    function n(t, e) {
        var o = "x" === e ? "Width" : "Height"
          , n = "scroll" + o
          , r = "client" + o;
        return t === x || t === s || t === f ? Math.max(s[n], f[n]) - (x["inner" + o] || s[r] || f[r]) : t[n] - t["offset" + o]
    }
    function o(t, e) {
        var o = "scroll" + ("x" === e ? "Left" : "Top");
        return t === x && (null != t.pageXOffset ? o = "page" + e.toUpperCase() + "Offset" : t = null != s[o] ? s : f),
        function() {
            return t[o]
        }
    }
    function p(t, e) {
        var n = a(t)[0].getBoundingClientRect()
          , r = !e || e === x || e === f
          , i = r ? {
            top: s.clientTop - (x.pageYOffset || s.scrollTop || f.scrollTop || 0),
            left: s.clientLeft - (x.pageXOffset || s.scrollLeft || f.scrollLeft || 0)
        } : e.getBoundingClientRect()
          , l = {
            x: n.left - i.left,
            y: n.top - i.top
        };
        return !r && e && (l.x += o(e, "x")(),
        l.y += o(e, "y")()),
        l
    }
    function q(t, e, o, r, i) {
        return isNaN(t) || "object" == typeof t ? m(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? n(e, o) - i : Math.min(n(e, o), p(t, e)[o] - i) : parseFloat(t) - i
    }
    function r() {
        e = l(),
        k() && e && document.body && (x = window,
        f = document.body,
        s = document.documentElement,
        a = e.utils.toArray,
        e.config({
            autoKillThreshold: 7
        }),
        g = e.config(),
        u = 1)
    }
    var e, u, x, s, f, a, g, i = {
        version: "3.5.1",
        name: "scrollTo",
        rawVars: 1,
        register: function register(t) {
            e = t,
            r()
        },
        init: function init(t, e, n, i, l) {
            u || r();
            var s = this;
            s.isWin = t === x,
            s.target = t,
            s.tween = n,
            "object" != typeof e ? m((e = {
                y: e
            }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                y: e,
                x: e
            }),
            s.vars = e,
            s.autoKill = !!e.autoKill,
            s.getX = o(t, "x"),
            s.getY = o(t, "y"),
            s.x = s.xPrev = s.getX(),
            s.y = s.yPrev = s.getY(),
            null != e.x ? (s.add(s, "x", s.x, q(e.x, t, "x", s.x, e.offsetX || 0), i, l, Math.round),
            s._props.push("scrollTo_x")) : s.skipX = 1,
            null != e.y ? (s.add(s, "y", s.y, q(e.y, t, "y", s.y, e.offsetY || 0), i, l, Math.round),
            s._props.push("scrollTo_y")) : s.skipY = 1
        },
        render: function render(t, e) {
            for (var o, r, i, l, s, u = e._pt, f = e.target, p = e.tween, a = e.autoKill, c = e.xPrev, y = e.yPrev, d = e.isWin; u; )
                u.r(t, u.d),
                u = u._next;
            o = d || !e.skipX ? e.getX() : c,
            i = (r = d || !e.skipY ? e.getY() : y) - y,
            l = o - c,
            s = g.autoKillThreshold,
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            a && (!e.skipX && (s < l || l < -s) && o < n(f, "x") && (e.skipX = 1),
            !e.skipY && (s < i || i < -s) && r < n(f, "y") && (e.skipY = 1),
            e.skipX && e.skipY && (p.kill(),
            e.vars.onAutoKill && e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))),
            d ? x.scrollTo(e.skipX ? o : e.x, e.skipY ? r : e.y) : (e.skipY || (f.scrollTop = e.y),
            e.skipX || (f.scrollLeft = e.x)),
            e.xPrev = e.x,
            e.yPrev = e.y
        },
        kill: function kill(t) {
            var e = "scrollTo" === t;
            !e && "scrollTo_x" !== t || (this.skipX = 1),
            !e && "scrollTo_y" !== t || (this.skipY = 1)
        }
    };
    i.max = n,
    i.getOffset = p,
    i.buildGetter = o,
    l() && e.registerPlugin(i),
    t.ScrollToPlugin = i,
    t.default = i;
    if (typeof (window) === "undefined" || window !== t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    } else {
        delete t.default
    }
});

/*
infiniteslide.js v2
version: 2.0.1
Author: T.Morimoto

Copyright 2017, T.Morimoto
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php

https://github.com/woodroots/infiniteslidev2
*/
!function(n) {
    n(window).on("load", function() {
        window.loaded = !0
    }),
    n(function() {
        n.fn.infiniteslide = function(e) {
            var t = n.extend({
                speed: 100,
                direction: "left",
                pauseonhover: !0,
                responsive: !1,
                clone: 1
            }, e)
              , o = function(e, i) {
                if ("up" == i || "down" == i)
                    var t = (h = 0,
                    n(e).children(":not(.infiniteslide_clone)").each(function(e, i) {
                        h += n(this).outerHeight(!0)
                    }),
                    h);
                else
                    t = (w = 0,
                    n(e).children(":not(.infiniteslide_clone)").each(function(e, i) {
                        w += n(this).outerWidth(!0)
                    }),
                    w);
                return t
            }
              , a = function(n, e) {
                if ("up" == e || "down" == e)
                    var i = "0,-" + n + "px,0";
                else
                    i = "-" + n + "px,0,0";
                return i
            };
            return this.each(function(e, r) {
                var s = n(this)
                  , l = Date.now() + Math.floor(1e4 * Math.random()).toString(16);
                1 == t.pauseonhover && n(s).on("mouseenter", function() {
                    n(this).css({
                        animationPlayState: "paused"
                    })
                }).on("mouseleave", function() {
                    n(this).css({
                        animationPlayState: "running"
                    })
                });
                var d = function() {
                    !function(e, i) {
                        if (n(e).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
                            overflow: "hidden"
                        }),
                        "up" == i || "down" == i)
                            var t = "column";
                        else
                            t = "row";
                        n(e).css({
                            display: "flex",
                            flexWrap: "nowrap",
                            alignItems: "center",
                            "-ms-flex-align": "center",
                            flexDirection: t
                        }).children().css({
                            flex: "none",
                            display: "block"
                        })
                    }(s, t.direction),
                    function(e, t) {
                        var o = n(e).children().clone().addClass("infiniteslide_clone");
                        for (i = 1; i <= t; )
                            o.clone().appendTo(n(e)),
                            i++
                    }(s, t.clone),
                    function(e, i, t, r) {
                        var s = o(e, t);
                        "up" != t && "down" != t || n(e).parent(".infiniteslide_wrap").css({
                            height: s + "px"
                        });
                        var l = a(s, t);
                        n(e).attr("data-style", "infiniteslide" + i);
                        var d, c, f = "@keyframes infiniteslide" + i + "{from {transform:translate3d(0,0,0);}to {transform:translate3d(" + l + ");}}";
                        if (n("<style />").attr("id", "infiniteslide" + i + "_style").html(f).appendTo("head"),
                        "right" == t || "down" == t)
                            var u = " reverse";
                        else
                            u = "";
                        n(e).css({
                            animation: "infiniteslide" + i + " " + (d = s,
                            c = r,
                            d / c) + "s linear 0s infinite" + u
                        })
                    }(s, l, t.direction, t.speed),
                    t.responsive && n(window).on("resize", function() {
                        var e, i, r, l = (e = s,
                        i = t.direction,
                        r = o(e, i),
                        a(r, i)), d = s.attr("data-style"), c = n("#" + d + "_style").html().replace(/to {transform:translate3d\((.*?)\)/, "to {transform:translate3d(" + l + ")");
                        n("#" + d + "_style").html(c)
                    })
                };
                window.loaded ? d() : n(window).on("load", d)
            })
        }
    })
}(jQuery);

(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else if (typeof exports !== "undefined") {
        module.exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
}
)(function($) {
    "use strict";
    var Slick = window.Slick || {};
    Slick = function() {
        var instanceUid = 0;
        function Slick(element, settings) {
            var _ = this, dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3e3,
                centerMode: false,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1)
                },
                dots: false,
                dotsClass: "slick-dots",
                draggable: true,
                easing: "linear",
                edgeFriction: .35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: false,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1e3
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = "hidden";
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data("slick") || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange"
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange"
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true)
        }
        return Slick
    }();
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ;
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof index === "boolean") {
            addBefore = index;
            index = null
        } else if (index < 0 || index >= _.slideCount) {
            return false
        }
        _.unload();
        if (typeof index === "number") {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack)
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index))
            } else {
                $(markup).insertAfter(_.$slides.eq(index))
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack)
            } else {
                $(markup).appendTo(_.$slideTrack)
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index", index)
        });
        _.$slidesCache = _.$slides;
        _.reinit()
    }
    ;
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed)
        }
    }
    ;
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {}
          , _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback)
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback)
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = "translate(" + now + "px, 0px)";
                            _.$slideTrack.css(animProps)
                        } else {
                            animProps[_.animType] = "translate(0px," + now + "px)";
                            _.$slideTrack.css(animProps)
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call()
                        }
                    }
                })
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)"
                } else {
                    animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)"
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function() {
                        _.disableTransition();
                        callback.call()
                    }, _.options.speed)
                }
            }
        }
    }
    ;
    Slick.prototype.getNavTarget = function() {
        var _ = this
          , asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider)
        }
        return asNavFor
    }
    ;
    Slick.prototype.asNavFor = function(index) {
        var _ = this
          , asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === "object") {
            asNavFor.each(function() {
                var target = $(this).slick("getSlick");
                if (!target.unslicked) {
                    target.slideHandler(index, true)
                }
            })
        }
    }
    ;
    Slick.prototype.applyTransition = function(slide) {
        var _ = this
          , transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase
        } else {
            transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition)
        } else {
            _.$slides.eq(slide).css(transition)
        }
    }
    ;
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed)
        }
    }
    ;
    Slick.prototype.autoPlayClear = function() {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer)
        }
    }
    ;
    Slick.prototype.autoPlayIterator = function() {
        var _ = this
          , slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0
                } else if (_.direction === 0) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;
                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1
                    }
                }
            }
            _.slideHandler(slideTo)
        }
    }
    ;
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
            _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows)
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows)
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
                }
            } else {
                _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                })
            }
        }
    }
    ;
    Slick.prototype.buildDots = function() {
        var _ = this, i, dot;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass("slick-dotted");
            dot = $("<ul />").addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($("<li />").append(_.options.customPaging.call(this, _, i)))
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find("li").first().addClass("slick-active")
        }
    }
    ;
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "")
        });
        _.$slider.addClass("slick-slider");
        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css("opacity", 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1
        }
        $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
        if (_.options.draggable === true) {
            _.$list.addClass("draggable")
        }
    }
    ;
    Slick.prototype.buildRows = function() {
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement("div");
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement("div");
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target))
                        }
                    }
                    slide.appendChild(row)
                }
                newSlides.appendChild(slide)
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                width: 100 / _.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ;
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this, breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === "window") {
            respondToWidth = windowWidth
        } else if (_.respondTo === "slider") {
            respondToWidth = sliderWidth
        } else if (_.respondTo === "min") {
            respondToWidth = Math.min(windowWidth, sliderWidth)
        }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint]
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint]
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                            _.unslick(targetBreakpoint)
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide
                            }
                            _.refresh(initial)
                        }
                        triggerBreakpoint = targetBreakpoint
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick(targetBreakpoint)
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide
                        }
                        _.refresh(initial)
                    }
                    triggerBreakpoint = targetBreakpoint
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint
                }
            }
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger("breakpoint", [_, triggerBreakpoint])
            }
        }
    }
    ;
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this, $target = $(event.currentTarget), indexOffset, slideOffset, unevenOffset;
        if ($target.is("a")) {
            event.preventDefault()
        }
        if (!$target.is("li")) {
            $target = $target.closest("li")
        }
        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
        case "previous":
            slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
            if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate)
            }
            break;
        case "next":
            slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
            if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate)
            }
            break;
        case "index":
            var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
            _.slideHandler(_.checkNavigable(index), false, dontAnimate);
            $target.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ;
    Slick.prototype.checkNavigable = function(index) {
        var _ = this, navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1]
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break
                }
                prevNavigable = navigables[n]
            }
        }
        return index
    }
    ;
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));
            if (_.options.accessibility === true) {
                _.$dots.off("keydown.slick", _.keyHandler)
            }
        }
        _.$slider.off("focus.slick blur.slick");
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
            _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
                _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler)
            }
        }
        _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
        _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
        _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
        _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
        _.$list.off("click.slick", _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) {
            _.$list.off("keydown.slick", _.keyHandler)
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off("click.slick", _.selectHandler)
        }
        $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
        $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
        $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
        $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition)
    }
    ;
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
        _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false))
    }
    ;
    Slick.prototype.cleanUpRows = function() {
        var _ = this, originalSlides;
        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr("style");
            _.$slider.empty().append(originalSlides)
        }
    }
    ;
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault()
        }
    }
    ;
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $(".slick-cloned", _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove()
        }
        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove()
            }
        }
        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove()
            }
        }
        if (_.$slides) {
            _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                $(this).attr("style", $(this).data("originalStyling"))
            });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides)
        }
        _.cleanUpRows();
        _.$slider.removeClass("slick-slider");
        _.$slider.removeClass("slick-initialized");
        _.$slider.removeClass("slick-dotted");
        _.unslicked = true;
        if (!refresh) {
            _.$slider.trigger("destroy", [_])
        }
    }
    ;
    Slick.prototype.disableTransition = function(slide) {
        var _ = this
          , transition = {};
        transition[_.transitionType] = "";
        if (_.options.fade === false) {
            _.$slideTrack.css(transition)
        } else {
            _.$slides.eq(slide).css(transition)
        }
    }
    ;
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback)
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
            if (callback) {
                setTimeout(function() {
                    _.disableTransition(slideIndex);
                    callback.call()
                }, _.options.speed)
            }
        }
    }
    ;
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing)
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            })
        }
    }
    ;
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit()
        }
    }
    ;
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(event) {
            var $sf = $(this);
            setTimeout(function() {
                if (_.options.pauseOnFocus) {
                    if ($sf.is(":focus")) {
                        _.focussed = true;
                        _.autoPlay()
                    }
                }
            }, 0)
        }).on("blur.slick", "*", function(event) {
            var $sf = $(this);
            if (_.options.pauseOnFocus) {
                _.focussed = false;
                _.autoPlay()
            }
        })
    }
    ;
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide
    }
    ;
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll)
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow
            }
        }
        return pagerQty - 1
    }
    ;
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this, targetLeft, verticalHeight, verticalOffset = 0, targetSlide, coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;
                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0
        }
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)
        }
        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset
        }
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex)
            } else {
                targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow)
            }
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1
                } else {
                    targetLeft = 0
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0
            }
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex)
                } else {
                    targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1)
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1
                    } else {
                        targetLeft = 0
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0
                }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2
            }
        }
        return targetLeft
    }
    ;
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;
        return _.options[option]
    }
    ;
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;
        if (_.options.infinite === false) {
            max = _.slideCount
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow
        }
        return indexes
    }
    ;
    Slick.prototype.getSlick = function() {
        return this
    }
    ;
    Slick.prototype.getSlideCount = function() {
        var _ = this, slidesTraversed, swipedSlide, swipeTarget, centerOffset;
        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = _.swipeLeft * -1 + centerOffset;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find(".slick-slide").each(function(index, slide) {
                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += slideOuterWidth / 2
                }
                slideRightBoundary = slideOffset + slideOuterWidth;
                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false
                }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
            return slidesTraversed
        } else {
            return _.options.slidesToScroll
        }
    }
    ;
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({
            data: {
                message: "index",
                index: parseInt(slide)
            }
        }, dontAnimate)
    }
    ;
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass("slick-initialized")) {
            $(_.$slider).addClass("slick-initialized");
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler()
        }
        if (creation) {
            _.$slider.trigger("init", [_])
        }
        if (_.options.accessibility === true) {
            _.initADA()
        }
        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay()
        }
    }
    ;
    Slick.prototype.initADA = function() {
        var _ = this
          , numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow)
          , tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
            return val >= 0 && val < _.slideCount
        });
        _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
                $(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + _.instanceUid + i,
                    tabindex: -1
                });
                if (slideControlIndex !== -1) {
                    var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
                    if ($("#" + ariaButtonControl).length) {
                        $(this).attr({
                            "aria-describedby": ariaButtonControl
                        })
                    }
                }
            });
            _.$dots.attr("role", "tablist").find("li").each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
                $(this).attr({
                    role: "presentation"
                });
                $(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + _.instanceUid + i,
                    "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                    "aria-label": i + 1 + " of " + numDotGroups,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(_.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end()
        }
        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({
                    tabindex: "0"
                })
            } else {
                _.$slides.eq(i).removeAttr("tabindex")
            }
        }
        _.activateADA()
    }
    ;
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, _.changeSlide);
            _.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow.on("keydown.slick", _.keyHandler);
                _.$nextArrow.on("keydown.slick", _.keyHandler)
            }
        }
    }
    ;
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $("li", _.$dots).on("click.slick", {
                message: "index"
            }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$dots.on("keydown.slick", _.keyHandler)
            }
        }
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
            $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false))
        }
    }
    ;
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
            _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false))
        }
    }
    ;
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, _.swipeHandler);
        _.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, _.swipeHandler);
        _.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, _.swipeHandler);
        _.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, _.swipeHandler);
        _.$list.on("click.slick", _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) {
            _.$list.on("keydown.slick", _.keyHandler)
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on("click.slick", _.selectHandler)
        }
        $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
        $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
        $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
        $(_.setPosition)
    }
    ;
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show()
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show()
        }
    }
    ;
    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? "next" : "previous"
                    }
                })
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? "previous" : "next"
                    }
                })
            }
        }
    }
    ;
    Slick.prototype.lazyLoad = function() {
        var _ = this, loadRange, cloneRange, rangeStart, rangeEnd;
        function loadImages(imagesScope) {
            $("img[data-lazy]", imagesScope).each(function() {
                var image = $(this)
                  , imageSource = $(this).attr("data-lazy")
                  , imageSrcSet = $(this).attr("data-srcset")
                  , imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes")
                  , imageToLoad = document.createElement("img");
                imageToLoad.onload = function() {
                    image.animate({
                        opacity: 0
                    }, 100, function() {
                        if (imageSrcSet) {
                            image.attr("srcset", imageSrcSet);
                            if (imageSizes) {
                                image.attr("sizes", imageSizes)
                            }
                        }
                        image.attr("src", imageSource).animate({
                            opacity: 1
                        }, 200, function() {
                            image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        });
                        _.$slider.trigger("lazyLoaded", [_, image, imageSource])
                    })
                }
                ;
                imageToLoad.onerror = function() {
                    image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    _.$slider.trigger("lazyLoadError", [_, image, imageSource])
                }
                ;
                imageToLoad.src = imageSource
            })
        }
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0)
                    rangeStart--;
                if (rangeEnd <= _.slideCount)
                    rangeEnd++
            }
        }
        loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
        if (_.options.lazyLoad === "anticipated") {
            var prevSlide = rangeStart - 1
              , nextSlide = rangeEnd
              , $slides = _.$slider.find(".slick-slide");
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0)
                    prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++
            }
        }
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-slide");
            loadImages(cloneRange)
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
            loadImages(cloneRange)
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
            loadImages(cloneRange)
        }
    }
    ;
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({
            opacity: 1
        });
        _.$slider.removeClass("slick-loading");
        _.initUI();
        if (_.options.lazyLoad === "progressive") {
            _.progressiveLazyLoad()
        }
    }
    ;
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ;
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition()
    }
    ;
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = true
    }
    ;
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false
    }
    ;
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger("afterChange", [_, index]);
            _.animating = false;
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition()
            }
            _.swipeLeft = null;
            if (_.options.autoplay) {
                _.autoPlay()
            }
            if (_.options.accessibility === true) {
                _.initADA();
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr("tabindex", 0).focus()
                }
            }
        }
    }
    ;
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ;
    Slick.prototype.preventDefault = function(event) {
        event.preventDefault()
    }
    ;
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var _ = this, $imgsToLoad = $("img[data-lazy]", _.$slider), image, imageSource, imageSrcSet, imageSizes, imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr("data-lazy");
            imageSrcSet = image.attr("data-srcset");
            imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
            imageToLoad = document.createElement("img");
            imageToLoad.onload = function() {
                if (imageSrcSet) {
                    image.attr("srcset", imageSrcSet);
                    if (imageSizes) {
                        image.attr("sizes", imageSizes)
                    }
                }
                image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                if (_.options.adaptiveHeight === true) {
                    _.setPosition()
                }
                _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
                _.progressiveLazyLoad()
            }
            ;
            imageToLoad.onerror = function() {
                if (tryCount < 3) {
                    setTimeout(function() {
                        _.progressiveLazyLoad(tryCount + 1)
                    }, 500)
                } else {
                    image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
                    _.progressiveLazyLoad()
                }
            }
            ;
            imageToLoad.src = imageSource
        } else {
            _.$slider.trigger("allImagesLoaded", [_])
        }
    }
    ;
    Slick.prototype.refresh = function(initializing) {
        var _ = this, currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0
        }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, {
            currentSlide: currentSlide
        });
        _.init();
        if (!initializing) {
            _.changeSlide({
                data: {
                    message: "index",
                    index: currentSlide
                }
            }, false)
        }
    }
    ;
    Slick.prototype.registerBreakpoints = function() {
        var _ = this, breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || "window";
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1)
                        }
                        l--
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings
                }
            }
            _.breakpoints.sort(function(a, b) {
                return _.options.mobileFirst ? a - b : b - a
            })
        }
    }
    ;
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on("click.slick", _.selectHandler)
        }
        _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger("reInit", [_])
    }
    ;
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition()
                }
            }, 50)
        }
    }
    ;
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof index === "boolean") {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1
        } else {
            index = removeBefore === true ? --index : index
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove()
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove()
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit()
    }
    ;
    Slick.prototype.setCSS = function(position) {
        var _ = this, positionProps = {}, x, y;
        if (_.options.rtl === true) {
            position = -position
        }
        x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
        y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps)
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = "translate(" + x + ", " + y + ")";
                _.$slideTrack.css(positionProps)
            } else {
                positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
                _.$slideTrack.css(positionProps)
            }
        }
    }
    ;
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: "0px " + _.options.centerPadding
                })
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + " 0px"
                })
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length))
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5e3 * _.slideCount)
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length))
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false)
            _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset)
    }
    ;
    Slick.prototype.setFade = function() {
        var _ = this, targetLeft;
        _.$slides.each(function(index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: "relative",
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                })
            } else {
                $(element).css({
                    position: "relative",
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                })
            }
        });
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        })
    }
    ;
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css("height", targetHeight)
        }
    }
    ;
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        var _ = this, l, item, option, value, refresh = false, type;
        if ($.type(arguments[0]) === "object") {
            option = arguments[0];
            refresh = arguments[1];
            type = "multiple"
        } else if ($.type(arguments[0]) === "string") {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
                type = "responsive"
            } else if (typeof arguments[1] !== "undefined") {
                type = "single"
            }
        }
        if (type === "single") {
            _.options[option] = value
        } else if (type === "multiple") {
            $.each(option, function(opt, val) {
                _.options[opt] = val
            })
        } else if (type === "responsive") {
            for (item in value) {
                if ($.type(_.options.responsive) !== "array") {
                    _.options.responsive = [value[item]]
                } else {
                    l = _.options.responsive.length - 1;
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                            _.options.responsive.splice(l, 1)
                        }
                        l--
                    }
                    _.options.responsive.push(value[item])
                }
            }
        }
        if (refresh) {
            _.unload();
            _.reinit()
        }
    }
    ;
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide))
        } else {
            _.setFade()
        }
        _.$slider.trigger("setPosition", [_])
    }
    ;
    Slick.prototype.setProps = function() {
        var _ = this
          , bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? "top" : "left";
        if (_.positionProp === "top") {
            _.$slider.addClass("slick-vertical")
        } else {
            _.$slider.removeClass("slick-vertical")
        }
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true
            }
        }
        if (_.options.fade) {
            if (typeof _.options.zIndex === "number") {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3
                }
            } else {
                _.options.zIndex = _.defaults.zIndex
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = "OTransform";
            _.transformType = "-o-transform";
            _.transitionType = "OTransition";
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined)
                _.animType = false
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = "MozTransform";
            _.transformType = "-moz-transform";
            _.transitionType = "MozTransition";
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined)
                _.animType = false
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = "webkitTransform";
            _.transformType = "-webkit-transform";
            _.transitionType = "webkitTransition";
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined)
                _.animType = false
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = "msTransform";
            _.transformType = "-ms-transform";
            _.transitionType = "msTransition";
            if (bodyStyle.msTransform === undefined)
                _.animType = false
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = "transform";
            _.transformType = "transform";
            _.transitionType = "transition"
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false)
    }
    ;
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this, centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        _.$slides.eq(index).addClass("slick-current");
        if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                    _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false")
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false")
                }
                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center")
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass("slick-center")
                }
            }
            _.$slides.eq(index).addClass("slick-center")
        } else {
            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass("slick-active").attr("aria-hidden", "false")
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false")
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
                }
            }
        }
        if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
            _.lazyLoad()
        }
    }
    ;
    Slick.prototype.setupInfinite = function() {
        var _ = this, i, slideIndex, infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1
                } else {
                    infiniteCount = _.options.slidesToShow
                }
                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned")
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned")
                }
                _.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    $(this).attr("id", "")
                })
            }
        }
    }
    ;
    Slick.prototype.interrupt = function(toggle) {
        var _ = this;
        if (!toggle) {
            _.autoPlay()
        }
        _.interrupted = toggle
    }
    ;
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
        var index = parseInt(targetElement.attr("data-slick-index"));
        if (!index)
            index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return
        }
        _.slideHandler(index)
    }
    ;
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null, _ = this, navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return
        }
        if (sync === false) {
            _.asNavFor(index)
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide)
                    })
                } else {
                    _.postSlide(targetSlide)
                }
            }
            return
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide)
                    })
                } else {
                    _.postSlide(targetSlide)
                }
            }
            return
        }
        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer)
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll
            } else {
                animSlide = _.slideCount + targetSlide
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0
            } else {
                animSlide = targetSlide - _.slideCount
            }
        } else {
            animSlide = targetSlide
        }
        _.animating = true;
        _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick("getSlick");
            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide)
            }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide)
                })
            } else {
                _.postSlide(animSlide)
            }
            _.animateHeight();
            return
        }
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide)
            })
        } else {
            _.postSlide(animSlide)
        }
    }
    ;
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide()
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide()
        }
        _.$slider.addClass("slick-loading")
    }
    ;
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle)
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? "left" : "right"
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? "left" : "right"
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? "right" : "left"
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return "down"
            } else {
                return "up"
            }
        }
        return "vertical"
    }
    ;
    Slick.prototype.swipeEnd = function(event) {
        var _ = this, slideCount, direction;
        _.dragging = false;
        _.swiping = false;
        if (_.scrolling) {
            _.scrolling = false;
            return false
        }
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
        if (_.touchObject.curX === undefined) {
            return false
        }
        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [_, _.swipeDirection()])
        }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
            case "left":
            case "down":
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                _.currentDirection = 0;
                break;
            case "right":
            case "up":
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                _.currentDirection = 1;
                break;
            default:
            }
            if (direction != "vertical") {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger("swipe", [_, direction])
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {}
            }
        }
    }
    ;
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if (_.options.swipe === false || "ontouchend"in document && _.options.swipe === false) {
            return
        } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
            return
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold
        }
        switch (event.data.action) {
        case "start":
            _.swipeStart(event);
            break;
        case "move":
            _.swipeMove(event);
            break;
        case "end":
            _.swipeEnd(event);
            break
        }
    }
    ;
    Slick.prototype.swipeMove = function(event) {
        var _ = this, edgeWasHit = false, curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false
        }
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength
        }
        swipeDirection = _.swipeDirection();
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault()
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false
        }
        _.setCSS(_.swipeLeft)
    }
    ;
    Slick.prototype.swipeStart = function(event) {
        var _ = this, touches;
        _.interrupted = true;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0]
        }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true
    }
    ;
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit()
        }
    }
    ;
    Slick.prototype.unload = function() {
        var _ = this;
        $(".slick-cloned", _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove()
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove()
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove()
        }
        _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ;
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger("unslick", [_, fromBreakpoint]);
        _.destroy()
    }
    ;
    Slick.prototype.updateArrows = function() {
        var _ = this, centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
            }
        }
    }
    ;
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find("li").removeClass("slick-active").end();
            _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active")
        }
    }
    ;
    Slick.prototype.visibility = function() {
        var _ = this;
        if (_.options.autoplay) {
            if (document[_.hidden]) {
                _.interrupted = true
            } else {
                _.interrupted = false
            }
        }
    }
    ;
    $.fn.slick = function() {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i, ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == "object" || typeof opt == "undefined")
                _[i].slick = new Slick(_[i],opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != "undefined")
                return ret
        }
        return _
    }
});

/*! modernizr 3.6.0 (Custom Build) | MIT *
* https://modernizr.com/download/?-webp-setclasses !*/
!function(e, n, A) {
    function o(e, n) {
        return typeof e === n
    }
    function t() {
        var e, n, A, t, a, i, l;
        for (var f in r)
            if (r.hasOwnProperty(f)) {
                if (e = [],
                n = r[f],
                n.name && (e.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
                    for (A = 0; A < n.options.aliases.length; A++)
                        e.push(n.options.aliases[A].toLowerCase());
                for (t = o(n.fn, "function") ? n.fn() : n.fn,
                a = 0; a < e.length; a++)
                    i = e[a],
                    l = i.split("."),
                    1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]]instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                    Modernizr[l[0]][l[1]] = t),
                    s.push((t ? "" : "no-") + l.join("-"))
            }
    }
    function a(e) {
        var n = u.className
          , A = Modernizr._config.classPrefix || "";
        if (c && (n = n.baseVal),
        Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
            n = n.replace(o, "$1" + A + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A),
        c ? u.className.baseVal = n : u.className = n)
    }
    function i(e, n) {
        if ("object" == typeof e)
            for (var A in e)
                f(e, A) && i(A, e[A]);
        else {
            e = e.toLowerCase();
            var o = e.split(".")
              , t = Modernizr[o[0]];
            if (2 == o.length && (t = t[o[1]]),
            "undefined" != typeof t)
                return Modernizr;
            n = "function" == typeof n ? n() : n,
            1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]]instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            Modernizr[o[0]][o[1]] = n),
            a([(n && 0 != n ? "" : "no-") + o.join("-")]),
            Modernizr._trigger(e, n)
        }
        return Modernizr
    }
    var s = []
      , r = []
      , l = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var A = this;
            setTimeout(function() {
                n(A[e])
            }, 0)
        },
        addTest: function(e, n, A) {
            r.push({
                name: e,
                fn: n,
                options: A
            })
        },
        addAsyncTest: function(e) {
            r.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = l,
    Modernizr = new Modernizr;
    var f, u = n.documentElement, c = "svg" === u.nodeName.toLowerCase();
    !function() {
        var e = {}.hasOwnProperty;
        f = o(e, "undefined") || o(e.call, "undefined") ? function(e, n) {
            return n in e && o(e.constructor.prototype[n], "undefined")
        }
        : function(n, A) {
            return e.call(n, A)
        }
    }(),
    l._l = {},
    l.on = function(e, n) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    l._trigger = function(e, n) {
        if (this._l[e]) {
            var A = this._l[e];
            setTimeout(function() {
                var e, o;
                for (e = 0; e < A.length; e++)
                    (o = A[e])(n)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        l.addTest = i
    }),
    Modernizr.addAsyncTest(function() {
        function e(e, n, A) {
            function o(n) {
                var o = n && "load" === n.type ? 1 == t.width : !1
                  , a = "webp" === e;
                i(e, a && o ? new Boolean(o) : o),
                A && A(n)
            }
            var t = new Image;
            t.onerror = o,
            t.onload = o,
            t.src = n
        }
        var n = [{
            uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp"
        }, {
            uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha"
        }, {
            uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation"
        }, {
            uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless"
        }]
          , A = n.shift();
        e(A.name, A.uri, function(A) {
            if (A && "load" === A.type)
                for (var o = 0; o < n.length; o++)
                    e(n[o].name, n[o].uri)
        })
    }),
    t(),
    a(s),
    delete l.addTest,
    delete l.addAsyncTest;
    for (var p = 0; p < Modernizr._q.length; p++)
        Modernizr._q[p]();
    e.Modernizr = Modernizr
}(window, document);
