!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 22));
})([
  function (e, t, n) {
    var r, i, o;
    /*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ (i =
      "undefined" != typeof window ? window : this),
      (o = function (i, o) {
        var a = [],
          s = a.slice,
          l = a.concat,
          c = a.push,
          u = a.indexOf,
          d = {},
          p = d.toString,
          f = d.hasOwnProperty,
          h = "".trim,
          g = {},
          v = "1.11.0",
          m = function (e, t) {
            return new m.fn.init(e, t);
          },
          y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          x = /^-ms-/,
          b = /-([\da-z])/gi,
          w = function (e, t) {
            return t.toUpperCase();
          };
        function k(e) {
          var t = e.length,
            n = m.type(e);
          return (
            "function" !== n &&
            !m.isWindow(e) &&
            (!(1 !== e.nodeType || !t) ||
              "array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (m.fn = m.prototype =
          {
            jquery: v,
            constructor: m,
            selector: "",
            length: 0,
            toArray: function () {
              return s.call(this);
            },
            get: function (e) {
              return null != e
                ? 0 > e
                  ? this[e + this.length]
                  : this[e]
                : s.call(this);
            },
            pushStack: function (e) {
              var t = m.merge(this.constructor(), e);
              return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function (e, t) {
              return m.each(this, e, t);
            },
            map: function (e) {
              return this.pushStack(
                m.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (0 > e ? t : 0);
              return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor(null);
            },
            push: c,
            sort: a.sort,
            splice: a.splice,
          }),
          (m.extend = m.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
              for (
                "boolean" == typeof a &&
                  ((c = a), (a = arguments[s] || {}), s++),
                  "object" == typeof a || m.isFunction(a) || (a = {}),
                  s === l && ((a = this), s--);
                l > s;
                s++
              )
                if (null != (i = arguments[s]))
                  for (r in i)
                    (e = a[r]),
                      a !== (n = i[r]) &&
                        (c && n && (m.isPlainObject(n) || (t = m.isArray(n)))
                          ? (t
                              ? ((t = !1), (o = e && m.isArray(e) ? e : []))
                              : (o = e && m.isPlainObject(e) ? e : {}),
                            (a[r] = m.extend(c, o, n)))
                          : void 0 !== n && (a[r] = n));
              return a;
            }),
          m.extend({
            expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
              return "function" === m.type(e);
            },
            isArray:
              Array.isArray ||
              function (e) {
                return "array" === m.type(e);
              },
            isWindow: function (e) {
              return null != e && e == e.window;
            },
            isNumeric: function (e) {
              return e - parseFloat(e) >= 0;
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            isPlainObject: function (e) {
              var t;
              if (!e || "object" !== m.type(e) || e.nodeType || m.isWindow(e))
                return !1;
              try {
                if (
                  e.constructor &&
                  !f.call(e, "constructor") &&
                  !f.call(e.constructor.prototype, "isPrototypeOf")
                )
                  return !1;
              } catch (e) {
                return !1;
              }
              if (g.ownLast) for (t in e) return f.call(e, t);
              for (t in e);
              return void 0 === t || f.call(e, t);
            },
            type: function (e) {
              return null == e
                ? e + ""
                : "object" == typeof e || "function" == typeof e
                ? d[p.call(e)] || "object"
                : typeof e;
            },
            globalEval: function (e) {
              e &&
                m.trim(e) &&
                (
                  i.execScript ||
                  function (e) {
                    i.eval.call(i, e);
                  }
                )(e);
            },
            camelCase: function (e) {
              return e.replace(x, "ms-").replace(b, w);
            },
            nodeName: function (e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t, n) {
              var r = 0,
                i = e.length,
                o = k(e);
              if (n) {
                if (o) for (; i > r && !1 !== t.apply(e[r], n); r++);
                else for (r in e) if (!1 === t.apply(e[r], n)) break;
              } else if (o) for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            trim:
              h && !h.call("\ufeff ")
                ? function (e) {
                    return null == e ? "" : h.call(e);
                  }
                : function (e) {
                    return null == e ? "" : (e + "").replace(y, "");
                  },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (k(Object(e))
                    ? m.merge(n, "string" == typeof e ? [e] : e)
                    : c.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              var r;
              if (t) {
                if (u) return u.call(t, e, n);
                for (
                  r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
                  r > n;
                  n++
                )
                  if (n in t && t[n] === e) return n;
              }
              return -1;
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; n > r; )
                e[i++] = t[r++];
              if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)
                !t(e[i], i) !== a && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i = 0,
                o = e.length,
                a = [];
              if (k(e))
                for (; o > i; i++) null != (r = t(e[i], i, n)) && a.push(r);
              else for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
              return l.apply([], a);
            },
            guid: 1,
            proxy: function (e, t) {
              var n, r, i;
              return (
                "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
                m.isFunction(e)
                  ? ((n = s.call(arguments, 2)),
                    ((r = function () {
                      return e.apply(t || this, n.concat(s.call(arguments)));
                    }).guid = e.guid =
                      e.guid || m.guid++),
                    r)
                  : void 0
              );
            },
            now: function () {
              return +new Date();
            },
            support: g,
          }),
          m.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var T = (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v,
            m,
            y = "sizzle" + -new Date(),
            x = e.document,
            b = 0,
            w = 0,
            k = re(),
            T = re(),
            C = re(),
            E = function (e, t) {
              return e === t && (c = !0), 0;
            },
            A = "undefined",
            N = 1 << 31,
            P = {}.hasOwnProperty,
            D = [],
            S = D.pop,
            _ = D.push,
            j = D.push,
            I = D.slice,
            L =
              D.indexOf ||
              function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                  if (this[t] === e) return t;
                return -1;
              },
            M =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = O.replace("w", "w#"),
            B =
              "\\[" +
              H +
              "*(" +
              O +
              ")" +
              H +
              "*(?:([*^$|!~]?=)" +
              H +
              "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
              R +
              ")|)|)" +
              H +
              "*\\]",
            F =
              ":(" +
              O +
              ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
              B.replace(3, 8) +
              ")*)|.*)\\)|)",
            q = new RegExp(
              "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
              "g"
            ),
            z = new RegExp("^" + H + "*," + H + "*"),
            $ = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            W = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            U = new RegExp(F),
            X = new RegExp("^" + R + "$"),
            G = {
              ID: new RegExp("^#(" + O + ")"),
              CLASS: new RegExp("^\\.(" + O + ")"),
              TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + B),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  H +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  H +
                  "*(?:([+-]|)" +
                  H +
                  "*(\\d+)|))" +
                  H +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + M + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  H +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  H +
                  "*((?:-\\d)?\\d*)" +
                  H +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            V = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = /'|\\/g,
            ee = new RegExp(
              "\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)",
              "ig"
            ),
            te = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : 0 > r
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            };
          try {
            j.apply((D = I.call(x.childNodes)), x.childNodes),
              D[x.childNodes.length].nodeType;
          } catch (e) {
            j = {
              apply: D.length
                ? function (e, t) {
                    _.apply(e, I.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ne(e, t, r, i) {
            var o, a, s, l, c, p, g, v, b, w;
            if (
              ((t ? t.ownerDocument || t : x) !== d && u(t),
              (t = t || d),
              (r = r || []),
              !e || "string" != typeof e)
            )
              return r;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (f && !i) {
              if ((o = Q.exec(e)))
                if ((s = o[1])) {
                  if (9 === l) {
                    if (!(a = t.getElementById(s)) || !a.parentNode) return r;
                    if (a.id === s) return r.push(a), r;
                  } else if (
                    t.ownerDocument &&
                    (a = t.ownerDocument.getElementById(s)) &&
                    m(t, a) &&
                    a.id === s
                  )
                    return r.push(a), r;
                } else {
                  if (o[2]) return j.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (s = o[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return j.apply(r, t.getElementsByClassName(s)), r;
                }
              if (n.qsa && (!h || !h.test(e))) {
                if (
                  ((v = g = y),
                  (b = t),
                  (w = 9 === l && e),
                  1 === l && "object" !== t.nodeName.toLowerCase())
                ) {
                  for (
                    p = fe(e),
                      (g = t.getAttribute("id"))
                        ? (v = g.replace(Z, "\\$&"))
                        : t.setAttribute("id", v),
                      v = "[id='" + v + "'] ",
                      c = p.length;
                    c--;

                  )
                    p[c] = v + he(p[c]);
                  (b = (K.test(e) && de(t.parentNode)) || t), (w = p.join(","));
                }
                if (w)
                  try {
                    return j.apply(r, b.querySelectorAll(w)), r;
                  } catch (e) {
                  } finally {
                    g || t.removeAttribute("id");
                  }
              }
            }
            return we(e.replace(q, "$1"), t, r, i);
          }
          function re() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function ie(e) {
            return (e[y] = !0), e;
          }
          function oe(e) {
            var t = d.createElement("div");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ae(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function se(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || N) - (~e.sourceIndex || N);
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function le(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function ce(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ue(e) {
            return ie(function (t) {
              return (
                (t = +t),
                ie(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function de(e) {
            return e && typeof e.getElementsByTagName !== A && e;
          }
          for (t in ((n = ne.support = {}),
          (o = ne.isXML =
            function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName;
            }),
          (u = ne.setDocument =
            function (e) {
              var t,
                i = e ? e.ownerDocument || e : x,
                a = i.defaultView;
              return i !== d && 9 === i.nodeType && i.documentElement
                ? ((d = i),
                  (p = i.documentElement),
                  (f = !o(i)),
                  a &&
                    a !== a.top &&
                    (a.addEventListener
                      ? a.addEventListener(
                          "unload",
                          function () {
                            u();
                          },
                          !1
                        )
                      : a.attachEvent &&
                        a.attachEvent("onunload", function () {
                          u();
                        })),
                  (n.attributes = oe(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = oe(function (e) {
                    return (
                      e.appendChild(i.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName =
                    Y.test(i.getElementsByClassName) &&
                    oe(function (e) {
                      return (
                        (e.innerHTML =
                          "<div class='a'></div><div class='a i'></div>"),
                        (e.firstChild.className = "i"),
                        2 === e.getElementsByClassName("i").length
                      );
                    })),
                  (n.getById = oe(function (e) {
                    return (
                      (p.appendChild(e).id = y),
                      !i.getElementsByName || !i.getElementsByName(y).length
                    );
                  })),
                  n.getById
                    ? ((r.find.ID = function (e, t) {
                        if (typeof t.getElementById !== A && f) {
                          var n = t.getElementById(e);
                          return n && n.parentNode ? [n] : [];
                        }
                      }),
                      (r.filter.ID = function (e) {
                        var t = e.replace(ee, te);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }))
                    : (delete r.find.ID,
                      (r.filter.ID = function (e) {
                        var t = e.replace(ee, te);
                        return function (e) {
                          var n =
                            typeof e.getAttributeNode !== A &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return typeof t.getElementsByTagName !== A
                          ? t.getElementsByTagName(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      return typeof t.getElementsByClassName !== A && f
                        ? t.getElementsByClassName(e)
                        : void 0;
                    }),
                  (g = []),
                  (h = []),
                  (n.qsa = Y.test(i.querySelectorAll)) &&
                    (oe(function (e) {
                      (e.innerHTML =
                        "<select t=''><option selected=''></option></select>"),
                        e.querySelectorAll("[t^='']").length &&
                          h.push("[*^$]=" + H + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          h.push("\\[" + H + "*(?:value|" + M + ")"),
                        e.querySelectorAll(":checked").length ||
                          h.push(":checked");
                    }),
                    oe(function (e) {
                      var t = i.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          h.push("name" + H + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length ||
                          h.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        h.push(",.*:");
                    })),
                  (n.matchesSelector = Y.test(
                    (v =
                      p.webkitMatchesSelector ||
                      p.mozMatchesSelector ||
                      p.oMatchesSelector ||
                      p.msMatchesSelector)
                  )) &&
                    oe(function (e) {
                      (n.disconnectedMatch = v.call(e, "div")),
                        v.call(e, "[s!='']:x"),
                        g.push("!=", F);
                    }),
                  (h = h.length && new RegExp(h.join("|"))),
                  (g = g.length && new RegExp(g.join("|"))),
                  (t = Y.test(p.compareDocumentPosition)),
                  (m =
                    t || Y.test(p.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (E = t
                    ? function (e, t) {
                        if (e === t) return (c = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === i || (e.ownerDocument === x && m(x, e))
                              ? -1
                              : t === i || (t.ownerDocument === x && m(x, t))
                              ? 1
                              : l
                              ? L.call(l, e) - L.call(l, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (c = !0), 0;
                        var n,
                          r = 0,
                          o = e.parentNode,
                          a = t.parentNode,
                          s = [e],
                          u = [t];
                        if (!o || !a)
                          return e === i
                            ? -1
                            : t === i
                            ? 1
                            : o
                            ? -1
                            : a
                            ? 1
                            : l
                            ? L.call(l, e) - L.call(l, t)
                            : 0;
                        if (o === a) return se(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) u.unshift(n);
                        for (; s[r] === u[r]; ) r++;
                        return r
                          ? se(s[r], u[r])
                          : s[r] === x
                          ? -1
                          : u[r] === x
                          ? 1
                          : 0;
                      }),
                  i)
                : d;
            }),
          (ne.matches = function (e, t) {
            return ne(e, null, null, t);
          }),
          (ne.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== d && u(e),
              (t = t.replace(W, "='$1']")),
              !(
                !n.matchesSelector ||
                !f ||
                (g && g.test(t)) ||
                (h && h.test(t))
              ))
            )
              try {
                var r = v.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {}
            return ne(t, d, null, [e]).length > 0;
          }),
          (ne.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && u(e), m(e, t);
          }),
          (ne.attr = function (e, t) {
            (e.ownerDocument || e) !== d && u(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && P.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !f)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !f
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (ne.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ne.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((c = !n.detectDuplicates),
              (l = !n.sortStable && e.slice(0)),
              e.sort(E),
              c)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (l = null), e;
          }),
          (i = ne.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          ((r = ne.selectors =
            {
              cacheLength: 50,
              createPseudo: ie,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(ee, te)),
                    (e[3] = (e[4] || e[5] || "").replace(ee, te)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ne.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ne.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[5] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3] && void 0 !== e[4]
                        ? (e[2] = e[4])
                        : n &&
                          U.test(n) &&
                          (t = fe(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(ee, te).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = k[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                      k(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (typeof e.getAttribute !== A &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ne.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          u,
                          d,
                          p,
                          f,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          x = !l && !s;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (d = t; (d = d[g]); )
                                if (
                                  s
                                    ? d.nodeName.toLowerCase() === m
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && x)
                          ) {
                            for (
                              f =
                                (c = (u = v[y] || (v[y] = {}))[e] || [])[0] ===
                                  b && c[1],
                                p = c[0] === b && c[2],
                                d = f && v.childNodes[f];
                              (d =
                                (++f && d && d[g]) || (p = f = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++p && d === t) {
                                u[e] = [b, f, p];
                                break;
                              }
                          } else if (
                            x &&
                            (c = (t[y] || (t[y] = {}))[e]) &&
                            c[0] === b
                          )
                            p = c[1];
                          else
                            for (
                              ;
                              (d =
                                (++f && d && d[g]) || (p = f = 0) || h.pop()) &&
                              ((s
                                ? d.nodeName.toLowerCase() !== m
                                : 1 !== d.nodeType) ||
                                !++p ||
                                (x && ((d[y] || (d[y] = {}))[e] = [b, p]),
                                d !== t));

                            );
                          return (p -= i) === r || (p % r == 0 && p / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ne.error("unsupported pseudo: " + e);
                  return i[y]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ie(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              e[(r = L.call(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: ie(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(q, "$1"));
                  return r[y]
                    ? ie(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (t[0] = e), r(t, null, o, n), !n.pop();
                      };
                }),
                has: ie(function (e) {
                  return function (t) {
                    return ne(e, t).length > 0;
                  };
                }),
                contains: ie(function (e) {
                  return function (t) {
                    return (
                      (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    );
                  };
                }),
                lang: ie(function (e) {
                  return (
                    X.test(e || "") || ne.error("unsupported lang: " + e),
                    (e = e.replace(ee, te).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = f
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === p;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: function (e) {
                  return !1 === e.disabled;
                },
                disabled: function (e) {
                  return !0 === e.disabled;
                },
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return V.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ue(function () {
                  return [0];
                }),
                last: ue(function (e, t) {
                  return [t - 1];
                }),
                eq: ue(function (e, t, n) {
                  return [0 > n ? n + t : n];
                }),
                even: ue(function (e, t) {
                  for (var n = 0; t > n; n += 2) e.push(n);
                  return e;
                }),
                odd: ue(function (e, t) {
                  for (var n = 1; t > n; n += 2) e.push(n);
                  return e;
                }),
                lt: ue(function (e, t, n) {
                  for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: ue(function (e, t, n) {
                  for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = le(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = ce(t);
          function pe() {}
          function fe(e, t) {
            var n,
              i,
              o,
              a,
              s,
              l,
              c,
              u = T[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = r.preFilter; s; ) {
              for (a in ((!n || (i = z.exec(s))) &&
                (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
              (n = !1),
              (i = $.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(q, " ") }),
                (s = s.slice(n.length))),
              r.filter))
                !(i = G[a].exec(s)) ||
                  (c[a] && !(i = c[a](i))) ||
                  ((n = i.shift()),
                  o.push({ value: n, type: a, matches: i }),
                  (s = s.slice(n.length)));
              if (!n) break;
            }
            return t ? s.length : s ? ne.error(e) : T(e, l).slice(0);
          }
          function he(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
          }
          function ge(e, t, n) {
            var r = t.dir,
              i = n && "parentNode" === r,
              o = w++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || i) return e(t, n, o);
                }
              : function (t, n, a) {
                  var s,
                    l,
                    c = [b, o];
                  if (a) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || i) {
                        if (
                          (s = (l = t[y] || (t[y] = {}))[r]) &&
                          s[0] === b &&
                          s[1] === o
                        )
                          return (c[2] = s[2]);
                        if (((l[r] = c), (c[2] = e(t, n, a)))) return !0;
                      }
                };
          }
          function ve(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function me(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
              (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
            return a;
          }
          function ye(e, t, n, r, i, o) {
            return (
              r && !r[y] && (r = ye(r)),
              i && !i[y] && (i = ye(i, o)),
              ie(function (o, a, s, l) {
                var c,
                  u,
                  d,
                  p = [],
                  f = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; i > r; r++) ne(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : me(g, p, e, s, l),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, l), r))
                  for (c = me(m, f), r(c, [], s, l), u = c.length; u--; )
                    (d = c[u]) && (m[f[u]] = !(v[f[u]] = d));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (c = [], u = m.length; u--; )
                        (d = m[u]) && c.push((v[u] = d));
                      i(null, (m = []), c, l);
                    }
                    for (u = m.length; u--; )
                      (d = m[u]) &&
                        (c = i ? L.call(o, d) : p[u]) > -1 &&
                        (o[c] = !(a[c] = d));
                  }
                } else (m = me(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, l) : j.apply(a, m);
              })
            );
          }
          function xe(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                l = a || r.relative[" "],
                c = a ? 1 : 0,
                u = ge(
                  function (e) {
                    return e === t;
                  },
                  l,
                  !0
                ),
                d = ge(
                  function (e) {
                    return L.call(t, e) > -1;
                  },
                  l,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    return (
                      (!a && (r || n !== s)) ||
                      ((t = n).nodeType ? u(e, n, r) : d(e, n, r))
                    );
                  },
                ];
              o > c;
              c++
            )
              if ((n = r.relative[e[c].type])) p = [ge(ve(p), n)];
              else {
                if ((n = r.filter[e[c].type].apply(null, e[c].matches))[y]) {
                  for (i = ++c; o > i && !r.relative[e[i].type]; i++);
                  return ye(
                    c > 1 && ve(p),
                    c > 1 &&
                      he(
                        e
                          .slice(0, c - 1)
                          .concat({ value: " " === e[c - 2].type ? "*" : "" })
                      ).replace(q, "$1"),
                    n,
                    i > c && xe(e.slice(c, i)),
                    o > i && xe((e = e.slice(i))),
                    o > i && he(e)
                  );
                }
                p.push(n);
              }
            return ve(p);
          }
          function be(e, t) {
            var n = t.length > 0,
              i = e.length > 0,
              o = function (o, a, l, c, u) {
                var p,
                  f,
                  h,
                  g = 0,
                  v = "0",
                  m = o && [],
                  y = [],
                  x = s,
                  w = o || (i && r.find.TAG("*", u)),
                  k = (b += null == x ? 1 : Math.random() || 0.1),
                  T = w.length;
                for (
                  u && (s = a !== d && a);
                  v !== T && null != (p = w[v]);
                  v++
                ) {
                  if (i && p) {
                    for (f = 0; (h = e[f++]); )
                      if (h(p, a, l)) {
                        c.push(p);
                        break;
                      }
                    u && (b = k);
                  }
                  n && ((p = !h && p) && g--, o && m.push(p));
                }
                if (((g += v), n && v !== g)) {
                  for (f = 0; (h = t[f++]); ) h(m, y, a, l);
                  if (o) {
                    if (g > 0) for (; v--; ) m[v] || y[v] || (y[v] = S.call(c));
                    y = me(y);
                  }
                  j.apply(c, y),
                    u &&
                      !o &&
                      y.length > 0 &&
                      g + t.length > 1 &&
                      ne.uniqueSort(c);
                }
                return u && ((b = k), (s = x)), m;
              };
            return n ? ie(o) : o;
          }
          function we(e, t, i, o) {
            var s,
              l,
              c,
              u,
              d,
              p = fe(e);
            if (!o && 1 === p.length) {
              if (
                (l = p[0] = p[0].slice(0)).length > 2 &&
                "ID" === (c = l[0]).type &&
                n.getById &&
                9 === t.nodeType &&
                f &&
                r.relative[l[1].type]
              ) {
                if (
                  !(t = (r.find.ID(c.matches[0].replace(ee, te), t) || [])[0])
                )
                  return i;
                e = e.slice(l.shift().value.length);
              }
              for (
                s = G.needsContext.test(e) ? 0 : l.length;
                s-- && ((c = l[s]), !r.relative[(u = c.type)]);

              )
                if (
                  (d = r.find[u]) &&
                  (o = d(
                    c.matches[0].replace(ee, te),
                    (K.test(l[0].type) && de(t.parentNode)) || t
                  ))
                ) {
                  if ((l.splice(s, 1), !(e = o.length && he(l))))
                    return j.apply(i, o), i;
                  break;
                }
            }
            return (
              a(e, p)(o, t, !f, i, (K.test(e) && de(t.parentNode)) || t), i
            );
          }
          return (
            (pe.prototype = r.filters = r.pseudos),
            (r.setFilters = new pe()),
            (a = ne.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  o = C[e + " "];
                if (!o) {
                  for (t || (t = fe(e)), n = t.length; n--; )
                    (o = xe(t[n]))[y] ? r.push(o) : i.push(o);
                  o = C(e, be(i, r));
                }
                return o;
              }),
            (n.sortStable = y.split("").sort(E).join("") === y),
            (n.detectDuplicates = !!c),
            u(),
            (n.sortDetached = oe(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("div"));
            })),
            oe(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ae("type|href|height|width", function (e, t, n) {
                return n
                  ? void 0
                  : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              oe(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ae("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase()
                  ? void 0
                  : e.defaultValue;
              }),
            oe(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              ae(M, function (e, t, n) {
                var r;
                return n
                  ? void 0
                  : !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
              }),
            ne
          );
        })(i);
        (m.find = T),
          (m.expr = T.selectors),
          (m.expr[":"] = m.expr.pseudos),
          (m.unique = T.uniqueSort),
          (m.text = T.getText),
          (m.isXMLDoc = T.isXML),
          (m.contains = T.contains);
        var C = m.expr.match.needsContext,
          E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          A = /^.[^:#\[\.,]*$/;
        function N(e, t, n) {
          if (m.isFunction(t))
            return m.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            });
          if (t.nodeType)
            return m.grep(e, function (e) {
              return (e === t) !== n;
            });
          if ("string" == typeof t) {
            if (A.test(t)) return m.filter(t, e, n);
            t = m.filter(t, e);
          }
          return m.grep(e, function (e) {
            return m.inArray(e, t) >= 0 !== n;
          });
        }
        (m.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? m.find.matchesSelector(r, e)
                ? [r]
                : []
              : m.find.matches(
                  e,
                  m.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          m.fn.extend({
            find: function (e) {
              var t,
                n = [],
                r = this,
                i = r.length;
              if ("string" != typeof e)
                return this.pushStack(
                  m(e).filter(function () {
                    for (t = 0; i > t; t++)
                      if (m.contains(r[t], this)) return !0;
                  })
                );
              for (t = 0; i > t; t++) m.find(e, r[t], n);
              return (
                ((n = this.pushStack(i > 1 ? m.unique(n) : n)).selector = this
                  .selector
                  ? this.selector + " " + e
                  : e),
                n
              );
            },
            filter: function (e) {
              return this.pushStack(N(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(N(this, e || [], !0));
            },
            is: function (e) {
              return !!N(
                this,
                "string" == typeof e && C.test(e) ? m(e) : e || [],
                !1
              ).length;
            },
          });
        var P,
          D = i.document,
          S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        ((m.fn.init = function (e, t) {
          var n, r;
          if (!e) return this;
          if ("string" == typeof e) {
            if (
              !(n =
                "<" === e.charAt(0) &&
                ">" === e.charAt(e.length - 1) &&
                e.length >= 3
                  ? [null, e, null]
                  : S.exec(e)) ||
              (!n[1] && t)
            )
              return !t || t.jquery
                ? (t || P).find(e)
                : this.constructor(t).find(e);
            if (n[1]) {
              if (
                ((t = t instanceof m ? t[0] : t),
                m.merge(
                  this,
                  m.parseHTML(
                    n[1],
                    t && t.nodeType ? t.ownerDocument || t : D,
                    !0
                  )
                ),
                E.test(n[1]) && m.isPlainObject(t))
              )
                for (n in t)
                  m.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
              return this;
            }
            if ((r = D.getElementById(n[2])) && r.parentNode) {
              if (r.id !== n[2]) return P.find(e);
              (this.length = 1), (this[0] = r);
            }
            return (this.context = D), (this.selector = e), this;
          }
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : m.isFunction(e)
            ? void 0 !== P.ready
              ? P.ready(e)
              : e(m)
            : (void 0 !== e.selector &&
                ((this.selector = e.selector), (this.context = e.context)),
              m.makeArray(e, this));
        }).prototype = m.fn),
          (P = m(D));
        var _ = /^(?:parents|prev(?:Until|All))/,
          j = { children: !0, contents: !0, next: !0, prev: !0 };
        function I(e, t) {
          do {
            e = e[t];
          } while (e && 1 !== e.nodeType);
          return e;
        }
        m.extend({
          dir: function (e, t, n) {
            for (
              var r = [], i = e[t];
              i &&
              9 !== i.nodeType &&
              (void 0 === n || 1 !== i.nodeType || !m(i).is(n));

            )
              1 === i.nodeType && r.push(i), (i = i[t]);
            return r;
          },
          sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
        }),
          m.fn.extend({
            has: function (e) {
              var t,
                n = m(e, this),
                r = n.length;
              return this.filter(function () {
                for (t = 0; r > t; t++) if (m.contains(this, n[t])) return !0;
              });
            },
            closest: function (e, t) {
              for (
                var n,
                  r = 0,
                  i = this.length,
                  o = [],
                  a =
                    C.test(e) || "string" != typeof e
                      ? m(e, t || this.context)
                      : 0;
                i > r;
                r++
              )
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && m.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
              return this.pushStack(o.length > 1 ? m.unique(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? m.inArray(this[0], m(e))
                  : m.inArray(e.jquery ? e[0] : e, this)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(m.unique(m.merge(this.get(), m(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
          m.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return m.dir(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return m.dir(e, "parentNode", n);
              },
              next: function (e) {
                return I(e, "nextSibling");
              },
              prev: function (e) {
                return I(e, "previousSibling");
              },
              nextAll: function (e) {
                return m.dir(e, "nextSibling");
              },
              prevAll: function (e) {
                return m.dir(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return m.dir(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return m.dir(e, "previousSibling", n);
              },
              siblings: function (e) {
                return m.sibling((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return m.sibling(e.firstChild);
              },
              contents: function (e) {
                return m.nodeName(e, "iframe")
                  ? e.contentDocument || e.contentWindow.document
                  : m.merge([], e.childNodes);
              },
            },
            function (e, t) {
              m.fn[e] = function (n, r) {
                var i = m.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = m.filter(r, i)),
                  this.length > 1 &&
                    (j[e] || (i = m.unique(i)), _.test(e) && (i = i.reverse())),
                  this.pushStack(i)
                );
              };
            }
          );
        var L,
          M = /\S+/g,
          H = {};
        function O() {
          D.addEventListener
            ? (D.removeEventListener("DOMContentLoaded", R, !1),
              i.removeEventListener("load", R, !1))
            : (D.detachEvent("onreadystatechange", R),
              i.detachEvent("onload", R));
        }
        function R() {
          (D.addEventListener ||
            "load" === event.type ||
            "complete" === D.readyState) &&
            (O(), m.ready());
        }
        (m.Callbacks = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = [],
            l =
              !(e =
                "string" == typeof e
                  ? H[e] ||
                    (function (e) {
                      var t = (H[e] = {});
                      return (
                        m.each(e.match(M) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : m.extend({}, e)).once && [],
            c = function (d) {
              for (
                n = e.memory && d,
                  r = !0,
                  o = a || 0,
                  a = 0,
                  i = s.length,
                  t = !0;
                s && i > o;
                o++
              )
                if (!1 === s[o].apply(d[0], d[1]) && e.stopOnFalse) {
                  n = !1;
                  break;
                }
              (t = !1),
                s &&
                  (l ? l.length && c(l.shift()) : n ? (s = []) : u.disable());
            },
            u = {
              add: function () {
                if (s) {
                  var r = s.length;
                  !(function t(n) {
                    m.each(n, function (n, r) {
                      var i = m.type(r);
                      "function" === i
                        ? (e.unique && u.has(r)) || s.push(r)
                        : r && r.length && "string" !== i && t(r);
                    });
                  })(arguments),
                    t ? (i = s.length) : n && ((a = r), c(n));
                }
                return this;
              },
              remove: function () {
                return (
                  s &&
                    m.each(arguments, function (e, n) {
                      for (var r; (r = m.inArray(n, s, r)) > -1; )
                        s.splice(r, 1), t && (i >= r && i--, o >= r && o--);
                    }),
                  this
                );
              },
              has: function (e) {
                return e ? m.inArray(e, s) > -1 : !(!s || !s.length);
              },
              empty: function () {
                return (s = []), (i = 0), this;
              },
              disable: function () {
                return (s = l = n = void 0), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (l = void 0), n || u.disable(), this;
              },
              locked: function () {
                return !l;
              },
              fireWith: function (e, n) {
                return (
                  !s ||
                    (r && !l) ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    t ? l.push(n) : c(n)),
                  this
                );
              },
              fire: function () {
                return u.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return u;
        }),
          m.extend({
            Deferred: function (e) {
              var t = [
                  ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", m.Callbacks("memory")],
                ],
                n = "pending",
                r = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return i.done(arguments).fail(arguments), this;
                  },
                  then: function () {
                    var e = arguments;
                    return m
                      .Deferred(function (n) {
                        m.each(t, function (t, o) {
                          var a = m.isFunction(e[t]) && e[t];
                          i[o[1]](function () {
                            var e = a && a.apply(this, arguments);
                            e && m.isFunction(e.promise)
                              ? e
                                  .promise()
                                  .done(n.resolve)
                                  .fail(n.reject)
                                  .progress(n.notify)
                              : n[o[0] + "With"](
                                  this === r ? n.promise() : this,
                                  a ? [e] : arguments
                                );
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  promise: function (e) {
                    return null != e ? m.extend(e, r) : r;
                  },
                },
                i = {};
              return (
                (r.pipe = r.then),
                m.each(t, function (e, o) {
                  var a = o[2],
                    s = o[3];
                  (r[o[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          n = s;
                        },
                        t[1 ^ e][2].disable,
                        t[2][2].lock
                      ),
                    (i[o[0]] = function () {
                      return (
                        i[o[0] + "With"](this === i ? r : this, arguments), this
                      );
                    }),
                    (i[o[0] + "With"] = a.fireWith);
                }),
                r.promise(i),
                e && e.call(i, i),
                i
              );
            },
            when: function (e) {
              var t,
                n,
                r,
                i = 0,
                o = s.call(arguments),
                a = o.length,
                l = 1 !== a || (e && m.isFunction(e.promise)) ? a : 0,
                c = 1 === l ? e : m.Deferred(),
                u = function (e, n, r) {
                  return function (i) {
                    (n[e] = this),
                      (r[e] = arguments.length > 1 ? s.call(arguments) : i),
                      r === t ? c.notifyWith(n, r) : --l || c.resolveWith(n, r);
                  };
                };
              if (a > 1)
                for (
                  t = new Array(a), n = new Array(a), r = new Array(a);
                  a > i;
                  i++
                )
                  o[i] && m.isFunction(o[i].promise)
                    ? o[i]
                        .promise()
                        .done(u(i, r, o))
                        .fail(c.reject)
                        .progress(u(i, n, t))
                    : --l;
              return l || c.resolveWith(r, o), c.promise();
            },
          }),
          (m.fn.ready = function (e) {
            return m.ready.promise().done(e), this;
          }),
          m.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
              e ? m.readyWait++ : m.ready(!0);
            },
            ready: function (e) {
              if (!0 === e ? !--m.readyWait : !m.isReady) {
                if (!D.body) return setTimeout(m.ready);
                (m.isReady = !0),
                  (!0 !== e && --m.readyWait > 0) ||
                    (L.resolveWith(D, [m]),
                    m.fn.trigger && m(D).trigger("ready").off("ready"));
              }
            },
          }),
          (m.ready.promise = function (e) {
            if (!L)
              if (((L = m.Deferred()), "complete" === D.readyState))
                setTimeout(m.ready);
              else if (D.addEventListener)
                D.addEventListener("DOMContentLoaded", R, !1),
                  i.addEventListener("load", R, !1);
              else {
                D.attachEvent("onreadystatechange", R),
                  i.attachEvent("onload", R);
                var t = !1;
                try {
                  t = null == i.frameElement && D.documentElement;
                } catch (e) {}
                t &&
                  t.doScroll &&
                  (function e() {
                    if (!m.isReady) {
                      try {
                        t.doScroll("left");
                      } catch (t) {
                        return setTimeout(e, 50);
                      }
                      O(), m.ready();
                    }
                  })();
              }
            return L.promise(e);
          });
        var B,
          F = "undefined";
        for (B in m(g)) break;
        (g.ownLast = "0" !== B),
          (g.inlineBlockNeedsLayout = !1),
          m(function () {
            var e,
              t,
              n = D.getElementsByTagName("body")[0];
            n &&
              (((e = D.createElement("div")).style.cssText =
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
              (t = D.createElement("div")),
              n.appendChild(e).appendChild(t),
              typeof t.style.zoom !== F &&
                ((t.style.cssText =
                  "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1"),
                (g.inlineBlockNeedsLayout = 3 === t.offsetWidth) &&
                  (n.style.zoom = 1)),
              n.removeChild(e),
              (e = t = null));
          }),
          (function () {
            var e = D.createElement("div");
            if (null == g.deleteExpando) {
              g.deleteExpando = !0;
              try {
                delete e.test;
              } catch (e) {
                g.deleteExpando = !1;
              }
            }
            e = null;
          })(),
          (m.acceptData = function (e) {
            var t = m.noData[(e.nodeName + " ").toLowerCase()],
              n = +e.nodeType || 1;
            return (
              (1 === n || 9 === n) &&
              (!t || (!0 !== t && e.getAttribute("classid") === t))
            );
          });
        var q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          z = /([A-Z])/g;
        function $(e, t, n) {
          if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(z, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
              try {
                n =
                  "true" === n ||
                  ("false" !== n &&
                    ("null" === n
                      ? null
                      : +n + "" === n
                      ? +n
                      : q.test(n)
                      ? m.parseJSON(n)
                      : n));
              } catch (e) {}
              m.data(e, t, n);
            } else n = void 0;
          }
          return n;
        }
        function W(e) {
          var t;
          for (t in e)
            if (("data" !== t || !m.isEmptyObject(e[t])) && "toJSON" !== t)
              return !1;
          return !0;
        }
        function U(e, t, n, r) {
          if (m.acceptData(e)) {
            var i,
              o,
              s = m.expando,
              l = e.nodeType,
              c = l ? m.cache : e,
              u = l ? e[s] : e[s] && s;
            if (
              (u && c[u] && (r || c[u].data)) ||
              void 0 !== n ||
              "string" != typeof t
            )
              return (
                u || (u = l ? (e[s] = a.pop() || m.guid++) : s),
                c[u] || (c[u] = l ? {} : { toJSON: m.noop }),
                ("object" == typeof t || "function" == typeof t) &&
                  (r
                    ? (c[u] = m.extend(c[u], t))
                    : (c[u].data = m.extend(c[u].data, t))),
                (o = c[u]),
                r || (o.data || (o.data = {}), (o = o.data)),
                void 0 !== n && (o[m.camelCase(t)] = n),
                "string" == typeof t
                  ? null == (i = o[t]) && (i = o[m.camelCase(t)])
                  : (i = o),
                i
              );
          }
        }
        function X(e, t, n) {
          if (m.acceptData(e)) {
            var r,
              i,
              o = e.nodeType,
              a = o ? m.cache : e,
              s = o ? e[m.expando] : m.expando;
            if (a[s]) {
              if (t && (r = n ? a[s] : a[s].data)) {
                i = (t = m.isArray(t)
                  ? t.concat(m.map(t, m.camelCase))
                  : t in r
                  ? [t]
                  : (t = m.camelCase(t)) in r
                  ? [t]
                  : t.split(" ")).length;
                for (; i--; ) delete r[t[i]];
                if (n ? !W(r) : !m.isEmptyObject(r)) return;
              }
              (n || (delete a[s].data, W(a[s]))) &&
                (o
                  ? m.cleanData([e], !0)
                  : g.deleteExpando || a != a.window
                  ? delete a[s]
                  : (a[s] = null));
            }
          }
        }
        m.extend({
          cache: {},
          noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
          },
          hasData: function (e) {
            return (
              !!(e = e.nodeType ? m.cache[e[m.expando]] : e[m.expando]) && !W(e)
            );
          },
          data: function (e, t, n) {
            return U(e, t, n);
          },
          removeData: function (e, t) {
            return X(e, t);
          },
          _data: function (e, t, n) {
            return U(e, t, n, !0);
          },
          _removeData: function (e, t) {
            return X(e, t, !0);
          },
        }),
          m.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = m.data(o)),
                  1 === o.nodeType && !m._data(o, "parsedAttrs"))
                ) {
                  for (n = a.length; n--; )
                    0 === (r = a[n].name).indexOf("data-") &&
                      $(o, (r = m.camelCase(r.slice(5))), i[r]);
                  m._data(o, "parsedAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                    m.data(this, e);
                  })
                : arguments.length > 1
                ? this.each(function () {
                    m.data(this, e, t);
                  })
                : o
                ? $(o, e, m.data(o, e))
                : void 0;
            },
            removeData: function (e) {
              return this.each(function () {
                m.removeData(this, e);
              });
            },
          }),
          m.extend({
            queue: function (e, t, n) {
              var r;
              return e
                ? ((t = (t || "fx") + "queue"),
                  (r = m._data(e, t)),
                  n &&
                    (!r || m.isArray(n)
                      ? (r = m._data(e, t, m.makeArray(n)))
                      : r.push(n)),
                  r || [])
                : void 0;
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = m.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = m._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      m.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                m._data(e, n) ||
                m._data(e, n, {
                  empty: m.Callbacks("once memory").add(function () {
                    m._removeData(e, t + "queue"), m._removeData(e, n);
                  }),
                })
              );
            },
          }),
          m.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? m.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = m.queue(this, e, t);
                      m._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          m.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                m.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = m.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                a--;

              )
                (n = m._data(o[a], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(s));
              return s(), i.promise(t);
            },
          });
        var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          V = ["Top", "Right", "Bottom", "Left"],
          J = function (e, t) {
            return (
              (e = t || e),
              "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e)
            );
          },
          Y = (m.access = function (e, t, n, r, i, o, a) {
            var s = 0,
              l = e.length,
              c = null == n;
            if ("object" === m.type(n))
              for (s in ((i = !0), n)) m.access(e, t, s, n[s], !0, o, a);
            else if (
              void 0 !== r &&
              ((i = !0),
              m.isFunction(r) || (a = !0),
              c &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((c = t),
                    (t = function (e, t, n) {
                      return c.call(m(e), n);
                    }))),
              t)
            )
              for (; l > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
          }),
          Q = /^(?:checkbox|radio)$/i;
        !(function () {
          var e = D.createDocumentFragment(),
            t = D.createElement("div"),
            n = D.createElement("input");
          if (
            (t.setAttribute("className", "t"),
            (t.innerHTML = "  <link/><table></table><a href='/a'>a</a>"),
            (g.leadingWhitespace = 3 === t.firstChild.nodeType),
            (g.tbody = !t.getElementsByTagName("tbody").length),
            (g.htmlSerialize = !!t.getElementsByTagName("link").length),
            (g.html5Clone =
              "<:nav></:nav>" !==
              D.createElement("nav").cloneNode(!0).outerHTML),
            (n.type = "checkbox"),
            (n.checked = !0),
            e.appendChild(n),
            (g.appendChecked = n.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            e.appendChild(t),
            (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
            (g.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (g.noCloneEvent = !0),
            t.attachEvent &&
              (t.attachEvent("onclick", function () {
                g.noCloneEvent = !1;
              }),
              t.cloneNode(!0).click()),
            null == g.deleteExpando)
          ) {
            g.deleteExpando = !0;
            try {
              delete t.test;
            } catch (e) {
              g.deleteExpando = !1;
            }
          }
          e = t = n = null;
        })(),
          (function () {
            var e,
              t,
              n = D.createElement("div");
            for (e in { submit: !0, change: !0, focusin: !0 })
              (t = "on" + e),
                (g[e + "Bubbles"] = t in i) ||
                  (n.setAttribute(t, "t"),
                  (g[e + "Bubbles"] = !1 === n.attributes[t].expando));
            n = null;
          })();
        var K = /^(?:input|select|textarea)$/i,
          Z = /^key/,
          ee = /^(?:mouse|contextmenu)|click/,
          te = /^(?:focusinfocus|focusoutblur)$/,
          ne = /^([^.]*)(?:\.(.+)|)$/;
        function re() {
          return !0;
        }
        function ie() {
          return !1;
        }
        function oe() {
          try {
            return D.activeElement;
          } catch (e) {}
        }
        function ae(e) {
          var t = se.split("|"),
            n = e.createDocumentFragment();
          if (n.createElement) for (; t.length; ) n.createElement(t.pop());
          return n;
        }
        (m.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              a,
              s,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              g,
              v = m._data(e);
            if (v) {
              for (
                n.handler && ((n = (l = n).handler), (i = l.selector)),
                  n.guid || (n.guid = m.guid++),
                  (a = v.events) || (a = v.events = {}),
                  (u = v.handle) ||
                    ((u = v.handle =
                      function (e) {
                        return typeof m === F ||
                          (e && m.event.triggered === e.type)
                          ? void 0
                          : m.event.dispatch.apply(u.elem, arguments);
                      }).elem = e),
                  s = (t = (t || "").match(M) || [""]).length;
                s--;

              )
                (f = g = (o = ne.exec(t[s]) || [])[1]),
                  (h = (o[2] || "").split(".").sort()),
                  f &&
                    ((c = m.event.special[f] || {}),
                    (f = (i ? c.delegateType : c.bindType) || f),
                    (c = m.event.special[f] || {}),
                    (d = m.extend(
                      {
                        type: f,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && m.expr.match.needsContext.test(i),
                        namespace: h.join("."),
                      },
                      l
                    )),
                    (p = a[f]) ||
                      (((p = a[f] = []).delegateCount = 0),
                      (c.setup && !1 !== c.setup.call(e, r, h, u)) ||
                        (e.addEventListener
                          ? e.addEventListener(f, u, !1)
                          : e.attachEvent && e.attachEvent("on" + f, u))),
                    c.add &&
                      (c.add.call(e, d),
                      d.handler.guid || (d.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    (m.event.global[f] = !0));
              e = null;
            }
          },
          remove: function (e, t, n, r, i) {
            var o,
              a,
              s,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              g,
              v = m.hasData(e) && m._data(e);
            if (v && (u = v.events)) {
              for (c = (t = (t || "").match(M) || [""]).length; c--; )
                if (
                  ((f = g = (s = ne.exec(t[c]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  f)
                ) {
                  for (
                    d = m.event.special[f] || {},
                      p = u[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                      s =
                        s[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      l = o = p.length;
                    o--;

                  )
                    (a = p[o]),
                      (!i && g !== a.origType) ||
                        (n && n.guid !== a.guid) ||
                        (s && !s.test(a.namespace)) ||
                        (r &&
                          r !== a.selector &&
                          ("**" !== r || !a.selector)) ||
                        (p.splice(o, 1),
                        a.selector && p.delegateCount--,
                        d.remove && d.remove.call(e, a));
                  l &&
                    !p.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                      m.removeEvent(e, f, v.handle),
                    delete u[f]);
                } else for (f in u) m.event.remove(e, f + t[c], n, r, !0);
              m.isEmptyObject(u) &&
                (delete v.handle, m._removeData(e, "events"));
            }
          },
          trigger: function (e, t, n, r) {
            var o,
              a,
              s,
              l,
              c,
              u,
              d,
              p = [n || D],
              h = f.call(e, "type") ? e.type : e,
              g = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = u = n = n || D),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !te.test(h + m.event.triggered) &&
                (h.indexOf(".") >= 0 &&
                  ((h = (g = h.split(".")).shift()), g.sort()),
                (a = h.indexOf(":") < 0 && "on" + h),
                ((e = e[m.expando]
                  ? e
                  : new m.Event(h, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
                (e.namespace = g.join(".")),
                (e.namespace_re = e.namespace
                  ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : m.makeArray(t, [e])),
                (c = m.event.special[h] || {}),
                r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
              if (!r && !c.noBubble && !m.isWindow(n)) {
                for (
                  l = c.delegateType || h, te.test(l + h) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  p.push(s), (u = s);
                u === (n.ownerDocument || D) &&
                  p.push(u.defaultView || u.parentWindow || i);
              }
              for (d = 0; (s = p[d++]) && !e.isPropagationStopped(); )
                (e.type = d > 1 ? l : c.bindType || h),
                  (o =
                    (m._data(s, "events") || {})[e.type] &&
                    m._data(s, "handle")) && o.apply(s, t),
                  (o = a && s[a]) &&
                    o.apply &&
                    m.acceptData(s) &&
                    ((e.result = o.apply(s, t)),
                    !1 === e.result && e.preventDefault());
              if (
                ((e.type = h),
                !r &&
                  !e.isDefaultPrevented() &&
                  (!c._default || !1 === c._default.apply(p.pop(), t)) &&
                  m.acceptData(n) &&
                  a &&
                  n[h] &&
                  !m.isWindow(n))
              ) {
                (u = n[a]) && (n[a] = null), (m.event.triggered = h);
                try {
                  n[h]();
                } catch (e) {}
                (m.event.triggered = void 0), u && (n[a] = u);
              }
              return e.result;
            }
          },
          dispatch: function (e) {
            e = m.event.fix(e);
            var t,
              n,
              r,
              i,
              o,
              a = [],
              l = s.call(arguments),
              c = (m._data(this, "events") || {})[e.type] || [],
              u = m.event.special[e.type] || {};
            if (
              ((l[0] = e),
              (e.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, e))
            ) {
              for (
                a = m.event.handlers.call(this, e, c), t = 0;
                (i = a[t++]) && !e.isPropagationStopped();

              )
                for (
                  e.currentTarget = i.elem, o = 0;
                  (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();

                )
                  (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
                    ((e.handleObj = r),
                    (e.data = r.data),
                    void 0 !==
                      (n = (
                        (m.event.special[r.origType] || {}).handle || r.handler
                      ).apply(i.elem, l)) &&
                      !1 === (e.result = n) &&
                      (e.preventDefault(), e.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              a = [],
              s = t.delegateCount,
              l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
              for (; l != this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  (!0 !== l.disabled || "click" !== e.type)
                ) {
                  for (i = [], o = 0; s > o; o++)
                    void 0 === i[(n = (r = t[o]).selector + " ")] &&
                      (i[n] = r.needsContext
                        ? m(n, this).index(l) >= 0
                        : m.find(n, this, null, [l]).length),
                      i[n] && i.push(r);
                  i.length && a.push({ elem: l, handlers: i });
                }
            return (
              s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
            );
          },
          fix: function (e) {
            if (e[m.expando]) return e;
            var t,
              n,
              r,
              i = e.type,
              o = e,
              a = this.fixHooks[i];
            for (
              a ||
                (this.fixHooks[i] = a =
                  ee.test(i)
                    ? this.mouseHooks
                    : Z.test(i)
                    ? this.keyHooks
                    : {}),
                r = a.props ? this.props.concat(a.props) : this.props,
                e = new m.Event(o),
                t = r.length;
              t--;

            )
              e[(n = r[t])] = o[n];
            return (
              e.target || (e.target = o.srcElement || D),
              3 === e.target.nodeType && (e.target = e.target.parentNode),
              (e.metaKey = !!e.metaKey),
              a.filter ? a.filter(e, o) : e
            );
          },
          props:
            "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
              " "
            ),
          fixHooks: {},
          keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
              return (
                null == e.which &&
                  (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
              );
            },
          },
          mouseHooks: {
            props:
              "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
              ),
            filter: function (e, t) {
              var n,
                r,
                i,
                o = t.button,
                a = t.fromElement;
              return (
                null == e.pageX &&
                  null != t.clientX &&
                  ((i = (r = e.target.ownerDocument || D).documentElement),
                  (n = r.body),
                  (e.pageX =
                    t.clientX +
                    ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
                    ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
                  (e.pageY =
                    t.clientY +
                    ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
                    ((i && i.clientTop) || (n && n.clientTop) || 0))),
                !e.relatedTarget &&
                  a &&
                  (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which ||
                  void 0 === o ||
                  (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
              );
            },
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function () {
                if (this !== oe() && this.focus)
                  try {
                    return this.focus(), !1;
                  } catch (e) {}
              },
              delegateType: "focusin",
            },
            blur: {
              trigger: function () {
                return this === oe() && this.blur ? (this.blur(), !1) : void 0;
              },
              delegateType: "focusout",
            },
            click: {
              trigger: function () {
                return m.nodeName(this, "input") &&
                  "checkbox" === this.type &&
                  this.click
                  ? (this.click(), !1)
                  : void 0;
              },
              _default: function (e) {
                return m.nodeName(e.target, "a");
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && (e.originalEvent.returnValue = e.result);
              },
            },
          },
          simulate: function (e, t, n, r) {
            var i = m.extend(new m.Event(), n, {
              type: e,
              isSimulated: !0,
              originalEvent: {},
            });
            r ? m.event.trigger(i, null, t) : m.event.dispatch.call(t, i),
              i.isDefaultPrevented() && n.preventDefault();
          },
        }),
          (m.removeEvent = D.removeEventListener
            ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent &&
                  (typeof e[r] === F && (e[r] = null), e.detachEvent(r, n));
              }),
          (m.Event = function (e, t) {
            return this instanceof m.Event
              ? (e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented &&
                        (!1 === e.returnValue ||
                          (e.getPreventDefault && e.getPreventDefault())))
                        ? re
                        : ie))
                  : (this.type = e),
                t && m.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || m.now()),
                void (this[m.expando] = !0))
              : new m.Event(e, t);
          }),
          (m.Event.prototype = {
            isDefaultPrevented: ie,
            isPropagationStopped: ie,
            isImmediatePropagationStopped: ie,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = re),
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1));
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = re),
                e &&
                  (e.stopPropagation && e.stopPropagation(),
                  (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
              (this.isImmediatePropagationStopped = re), this.stopPropagation();
            },
          }),
          m.each(
            { mouseenter: "mouseover", mouseleave: "mouseout" },
            function (e, t) {
              m.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (!r || (r !== this && !m.contains(this, r))) &&
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          g.submitBubbles ||
            (m.event.special.submit = {
              setup: function () {
                return (
                  !m.nodeName(this, "form") &&
                  void m.event.add(
                    this,
                    "click._submit keypress._submit",
                    function (e) {
                      var t = e.target,
                        n =
                          m.nodeName(t, "input") || m.nodeName(t, "button")
                            ? t.form
                            : void 0;
                      n &&
                        !m._data(n, "submitBubbles") &&
                        (m.event.add(n, "submit._submit", function (e) {
                          e._submit_bubble = !0;
                        }),
                        m._data(n, "submitBubbles", !0));
                    }
                  )
                );
              },
              postDispatch: function (e) {
                e._submit_bubble &&
                  (delete e._submit_bubble,
                  this.parentNode &&
                    !e.isTrigger &&
                    m.event.simulate("submit", this.parentNode, e, !0));
              },
              teardown: function () {
                return (
                  !m.nodeName(this, "form") &&
                  void m.event.remove(this, "._submit")
                );
              },
            }),
          g.changeBubbles ||
            (m.event.special.change = {
              setup: function () {
                return K.test(this.nodeName)
                  ? (("checkbox" === this.type || "radio" === this.type) &&
                      (m.event.add(
                        this,
                        "propertychange._change",
                        function (e) {
                          "checked" === e.originalEvent.propertyName &&
                            (this._just_changed = !0);
                        }
                      ),
                      m.event.add(this, "click._change", function (e) {
                        this._just_changed &&
                          !e.isTrigger &&
                          (this._just_changed = !1),
                          m.event.simulate("change", this, e, !0);
                      })),
                    !1)
                  : void m.event.add(
                      this,
                      "beforeactivate._change",
                      function (e) {
                        var t = e.target;
                        K.test(t.nodeName) &&
                          !m._data(t, "changeBubbles") &&
                          (m.event.add(t, "change._change", function (e) {
                            !this.parentNode ||
                              e.isSimulated ||
                              e.isTrigger ||
                              m.event.simulate(
                                "change",
                                this.parentNode,
                                e,
                                !0
                              );
                          }),
                          m._data(t, "changeBubbles", !0));
                      }
                    );
              },
              handle: function (e) {
                var t = e.target;
                return this !== t ||
                  e.isSimulated ||
                  e.isTrigger ||
                  ("radio" !== t.type && "checkbox" !== t.type)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
              teardown: function () {
                return m.event.remove(this, "._change"), !K.test(this.nodeName);
              },
            }),
          g.focusinBubbles ||
            m.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                m.event.simulate(t, e.target, m.event.fix(e), !0);
              };
              m.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this,
                    i = m._data(r, t);
                  i || r.addEventListener(e, n, !0),
                    m._data(r, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this,
                    i = m._data(r, t) - 1;
                  i
                    ? m._data(r, t, i)
                    : (r.removeEventListener(e, n, !0), m._removeData(r, t));
                },
              };
            }),
          m.fn.extend({
            on: function (e, t, n, r, i) {
              var o, a;
              if ("object" == typeof e) {
                for (o in ("string" != typeof t && ((n = n || t), (t = void 0)),
                e))
                  this.on(o, t, n, e[o], i);
                return this;
              }
              if (
                (null == n && null == r
                  ? ((r = t), (n = t = void 0))
                  : null == r &&
                    ("string" == typeof t
                      ? ((r = n), (n = void 0))
                      : ((r = n), (n = t), (t = void 0))),
                !1 === r)
              )
                r = ie;
              else if (!r) return this;
              return (
                1 === i &&
                  ((a = r),
                  ((r = function (e) {
                    return m().off(e), a.apply(this, arguments);
                  }).guid = a.guid || (a.guid = m.guid++))),
                this.each(function () {
                  m.event.add(this, e, r, n, t);
                })
              );
            },
            one: function (e, t, n, r) {
              return this.on(e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  m(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
                !1 === n && (n = ie),
                this.each(function () {
                  m.event.remove(this, e, n, t);
                })
              );
            },
            trigger: function (e, t) {
              return this.each(function () {
                m.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              return n ? m.event.trigger(e, t, n, !0) : void 0;
            },
          });
        var se =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
          le = / jQuery\d+="(?:null|\d+)"/g,
          ce = new RegExp("<(?:" + se + ")[\\s/>]", "i"),
          ue = /^\s+/,
          de =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          pe = /<([\w:]+)/,
          fe = /<tbody/i,
          he = /<|&#?\w+;/,
          ge = /<(?:script|style|link)/i,
          ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
          me = /^$|\/(?:java|ecma)script/i,
          ye = /^true\/(.*)/,
          xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
          be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: g.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
          },
          we = ae(D).appendChild(D.createElement("div"));
        function ke(e, t) {
          var n,
            r,
            i = 0,
            o =
              typeof e.getElementsByTagName !== F
                ? e.getElementsByTagName(t || "*")
                : typeof e.querySelectorAll !== F
                ? e.querySelectorAll(t || "*")
                : void 0;
          if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
              !t || m.nodeName(r, t) ? o.push(r) : m.merge(o, ke(r, t));
          return void 0 === t || (t && m.nodeName(e, t)) ? m.merge([e], o) : o;
        }
        function Te(e) {
          Q.test(e.type) && (e.defaultChecked = e.checked);
        }
        function Ce(e, t) {
          return m.nodeName(e, "table") &&
            m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
                e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
        }
        function Ee(e) {
          return (e.type = (null !== m.find.attr(e, "type")) + "/" + e.type), e;
        }
        function Ae(e) {
          var t = ye.exec(e.type);
          return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
        }
        function Ne(e, t) {
          for (var n, r = 0; null != (n = e[r]); r++)
            m._data(n, "globalEval", !t || m._data(t[r], "globalEval"));
        }
        function Pe(e, t) {
          if (1 === t.nodeType && m.hasData(e)) {
            var n,
              r,
              i,
              o = m._data(e),
              a = m._data(t, o),
              s = o.events;
            if (s)
              for (n in (delete a.handle, (a.events = {}), s))
                for (r = 0, i = s[n].length; i > r; r++)
                  m.event.add(t, n, s[n][r]);
            a.data && (a.data = m.extend({}, a.data));
          }
        }
        function De(e, t) {
          var n, r, i;
          if (1 === t.nodeType) {
            if (
              ((n = t.nodeName.toLowerCase()), !g.noCloneEvent && t[m.expando])
            ) {
              for (r in (i = m._data(t)).events) m.removeEvent(t, r, i.handle);
              t.removeAttribute(m.expando);
            }
            "script" === n && t.text !== e.text
              ? ((Ee(t).text = e.text), Ae(t))
              : "object" === n
              ? (t.parentNode && (t.outerHTML = e.outerHTML),
                g.html5Clone &&
                  e.innerHTML &&
                  !m.trim(t.innerHTML) &&
                  (t.innerHTML = e.innerHTML))
              : "input" === n && Q.test(e.type)
              ? ((t.defaultChecked = t.checked = e.checked),
                t.value !== e.value && (t.value = e.value))
              : "option" === n
              ? (t.defaultSelected = t.selected = e.defaultSelected)
              : ("input" === n || "textarea" === n) &&
                (t.defaultValue = e.defaultValue);
          }
        }
        (be.optgroup = be.option),
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
          (be.th = be.td),
          m.extend({
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                l = m.contains(e.ownerDocument, e);
              if (
                (g.html5Clone ||
                m.isXMLDoc(e) ||
                !ce.test("<" + e.nodeName + ">")
                  ? (o = e.cloneNode(!0))
                  : ((we.innerHTML = e.outerHTML),
                    we.removeChild((o = we.firstChild))),
                !(
                  (g.noCloneEvent && g.noCloneChecked) ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  m.isXMLDoc(e)
                ))
              )
                for (r = ke(o), s = ke(e), a = 0; null != (i = s[a]); ++a)
                  r[a] && De(i, r[a]);
              if (t)
                if (n)
                  for (
                    s = s || ke(e), r = r || ke(o), a = 0;
                    null != (i = s[a]);
                    a++
                  )
                    Pe(i, r[a]);
                else Pe(e, o);
              return (
                (r = ke(o, "script")).length > 0 &&
                  Ne(r, !l && ke(e, "script")),
                (r = s = i = null),
                o
              );
            },
            buildFragment: function (e, t, n, r) {
              for (
                var i, o, a, s, l, c, u, d = e.length, p = ae(t), f = [], h = 0;
                d > h;
                h++
              )
                if ((o = e[h]) || 0 === o)
                  if ("object" === m.type(o)) m.merge(f, o.nodeType ? [o] : o);
                  else if (he.test(o)) {
                    for (
                      s = s || p.appendChild(t.createElement("div")),
                        l = (pe.exec(o) || ["", ""])[1].toLowerCase(),
                        u = be[l] || be._default,
                        s.innerHTML = u[1] + o.replace(de, "<$1></$2>") + u[2],
                        i = u[0];
                      i--;

                    )
                      s = s.lastChild;
                    if (
                      (!g.leadingWhitespace &&
                        ue.test(o) &&
                        f.push(t.createTextNode(ue.exec(o)[0])),
                      !g.tbody)
                    )
                      for (
                        i =
                          (o =
                            "table" !== l || fe.test(o)
                              ? "<table>" !== u[1] || fe.test(o)
                                ? 0
                                : s
                              : s.firstChild) && o.childNodes.length;
                        i--;

                      )
                        m.nodeName((c = o.childNodes[i]), "tbody") &&
                          !c.childNodes.length &&
                          o.removeChild(c);
                    for (
                      m.merge(f, s.childNodes), s.textContent = "";
                      s.firstChild;

                    )
                      s.removeChild(s.firstChild);
                    s = p.lastChild;
                  } else f.push(t.createTextNode(o));
              for (
                s && p.removeChild(s),
                  g.appendChecked || m.grep(ke(f, "input"), Te),
                  h = 0;
                (o = f[h++]);

              )
                if (
                  (!r || -1 === m.inArray(o, r)) &&
                  ((a = m.contains(o.ownerDocument, o)),
                  (s = ke(p.appendChild(o), "script")),
                  a && Ne(s),
                  n)
                )
                  for (i = 0; (o = s[i++]); )
                    me.test(o.type || "") && n.push(o);
              return (s = null), p;
            },
            cleanData: function (e, t) {
              for (
                var n,
                  r,
                  i,
                  o,
                  s = 0,
                  l = m.expando,
                  c = m.cache,
                  u = g.deleteExpando,
                  d = m.event.special;
                null != (n = e[s]);
                s++
              )
                if ((t || m.acceptData(n)) && (o = (i = n[l]) && c[i])) {
                  if (o.events)
                    for (r in o.events)
                      d[r]
                        ? m.event.remove(n, r)
                        : m.removeEvent(n, r, o.handle);
                  c[i] &&
                    (delete c[i],
                    u
                      ? delete n[l]
                      : typeof n.removeAttribute !== F
                      ? n.removeAttribute(l)
                      : (n[l] = null),
                    a.push(i));
                }
            },
          }),
          m.fn.extend({
            text: function (e) {
              return Y(
                this,
                function (e) {
                  return void 0 === e
                    ? m.text(this)
                    : this.empty().append(
                        (
                          (this[0] && this[0].ownerDocument) ||
                          D
                        ).createTextNode(e)
                      );
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return this.domManip(arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Ce(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return this.domManip(arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Ce(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return this.domManip(arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            remove: function (e, t) {
              for (
                var n, r = e ? m.filter(e, this) : this, i = 0;
                null != (n = r[i]);
                i++
              )
                t || 1 !== n.nodeType || m.cleanData(ke(n)),
                  n.parentNode &&
                    (t && m.contains(n.ownerDocument, n) && Ne(ke(n, "script")),
                    n.parentNode.removeChild(n));
              return this;
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && m.cleanData(ke(e, !1)); e.firstChild; )
                  e.removeChild(e.firstChild);
                e.options && m.nodeName(e, "select") && (e.options.length = 0);
              }
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return m.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return Y(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e)
                    return 1 === t.nodeType
                      ? t.innerHTML.replace(le, "")
                      : void 0;
                  if (
                    !(
                      "string" != typeof e ||
                      ge.test(e) ||
                      (!g.htmlSerialize && ce.test(e)) ||
                      (!g.leadingWhitespace && ue.test(e)) ||
                      be[(pe.exec(e) || ["", ""])[1].toLowerCase()]
                    )
                  ) {
                    e = e.replace(de, "<$1></$2>");
                    try {
                      for (; r > n; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (m.cleanData(ke(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = arguments[0];
              return (
                this.domManip(arguments, function (t) {
                  (e = this.parentNode),
                    m.cleanData(ke(this)),
                    e && e.replaceChild(t, this);
                }),
                e && (e.length || e.nodeType) ? this : this.remove()
              );
            },
            detach: function (e) {
              return this.remove(e, !0);
            },
            domManip: function (e, t) {
              e = l.apply([], e);
              var n,
                r,
                i,
                o,
                a,
                s,
                c = 0,
                u = this.length,
                d = this,
                p = u - 1,
                f = e[0],
                h = m.isFunction(f);
              if (
                h ||
                (u > 1 && "string" == typeof f && !g.checkClone && ve.test(f))
              )
                return this.each(function (n) {
                  var r = d.eq(n);
                  h && (e[0] = f.call(this, n, r.html())), r.domManip(e, t);
                });
              if (
                u &&
                ((n = (s = m.buildFragment(e, this[0].ownerDocument, !1, this))
                  .firstChild),
                1 === s.childNodes.length && (s = n),
                n)
              ) {
                for (i = (o = m.map(ke(s, "script"), Ee)).length; u > c; c++)
                  (r = s),
                    c !== p &&
                      ((r = m.clone(r, !0, !0)),
                      i && m.merge(o, ke(r, "script"))),
                    t.call(this[c], r, c);
                if (i)
                  for (
                    a = o[o.length - 1].ownerDocument, m.map(o, Ae), c = 0;
                    i > c;
                    c++
                  )
                    (r = o[c]),
                      me.test(r.type || "") &&
                        !m._data(r, "globalEval") &&
                        m.contains(a, r) &&
                        (r.src
                          ? m._evalUrl && m._evalUrl(r.src)
                          : m.globalEval(
                              (
                                r.text ||
                                r.textContent ||
                                r.innerHTML ||
                                ""
                              ).replace(xe, "")
                            ));
                s = n = null;
              }
              return this;
            },
          }),
          m.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              m.fn[e] = function (e) {
                for (
                  var n, r = 0, i = [], o = m(e), a = o.length - 1;
                  a >= r;
                  r++
                )
                  (n = r === a ? this : this.clone(!0)),
                    m(o[r])[t](n),
                    c.apply(i, n.get());
                return this.pushStack(i);
              };
            }
          );
        var Se,
          _e = {};
        function je(e, t) {
          var n = m(t.createElement(e)).appendTo(t.body),
            r = i.getDefaultComputedStyle
              ? i.getDefaultComputedStyle(n[0]).display
              : m.css(n[0], "display");
          return n.detach(), r;
        }
        function Ie(e) {
          var t = D,
            n = _e[e];
          return (
            n ||
              (("none" !== (n = je(e, t)) && n) ||
                ((t = (
                  (Se = (
                    Se || m("<iframe frameborder='0' width='0' height='0'/>")
                  ).appendTo(t.documentElement))[0].contentWindow ||
                  Se[0].contentDocument
                ).document).write(),
                t.close(),
                (n = je(e, t)),
                Se.detach()),
              (_e[e] = n)),
            n
          );
        }
        !(function () {
          var e,
            t,
            n = D.createElement("div");
          (n.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            ((e = n.getElementsByTagName("a")[0]).style.cssText =
              "float:left;opacity:.5"),
            (g.opacity = /^0.5/.test(e.style.opacity)),
            (g.cssFloat = !!e.style.cssFloat),
            (n.style.backgroundClip = "content-box"),
            (n.cloneNode(!0).style.backgroundClip = ""),
            (g.clearCloneStyle = "content-box" === n.style.backgroundClip),
            (e = n = null),
            (g.shrinkWrapBlocks = function () {
              var e, n, r;
              if (null == t) {
                if (!(e = D.getElementsByTagName("body")[0])) return;
                (n = D.createElement("div")),
                  (r = D.createElement("div")),
                  e.appendChild(n).appendChild(r),
                  (t = !1),
                  typeof r.style.zoom !== F &&
                    ((r.style.cssText =
                      "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1"),
                    (r.innerHTML = "<div></div>"),
                    (r.firstChild.style.width = "5px"),
                    (t = 3 !== r.offsetWidth)),
                  e.removeChild(n),
                  (e = n = r = null);
              }
              return t;
            });
        })();
        var Le,
          Me,
          He = /^margin/,
          Oe = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
          Re = /^(top|right|bottom|left)$/;
        function Be(e, t) {
          return {
            get: function () {
              var n = e();
              if (null != n)
                return n
                  ? void delete this.get
                  : (this.get = t).apply(this, arguments);
            },
          };
        }
        i.getComputedStyle
          ? ((Le = function (e) {
              return e.ownerDocument.defaultView.getComputedStyle(e, null);
            }),
            (Me = function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.style;
              return (
                (a = (n = n || Le(e)) ? n.getPropertyValue(t) || n[t] : void 0),
                n &&
                  ("" !== a ||
                    m.contains(e.ownerDocument, e) ||
                    (a = m.style(e, t)),
                  Oe.test(a) &&
                    He.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
                void 0 === a ? a : a + ""
              );
            }))
          : D.documentElement.currentStyle &&
            ((Le = function (e) {
              return e.currentStyle;
            }),
            (Me = function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.style;
              return (
                null == (a = (n = n || Le(e)) ? n[t] : void 0) &&
                  s &&
                  s[t] &&
                  (a = s[t]),
                Oe.test(a) &&
                  !Re.test(t) &&
                  ((r = s.left),
                  (o = (i = e.runtimeStyle) && i.left) &&
                    (i.left = e.currentStyle.left),
                  (s.left = "fontSize" === t ? "1em" : a),
                  (a = s.pixelLeft + "px"),
                  (s.left = r),
                  o && (i.left = o)),
                void 0 === a ? a : a + "" || "auto"
              );
            })),
          (function () {
            var e,
              t,
              n,
              r,
              o,
              a,
              s = D.createElement("div"),
              l =
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
            function c() {
              var e,
                t,
                s = D.getElementsByTagName("body")[0];
              s &&
                ((e = D.createElement("div")),
                (t = D.createElement("div")),
                (e.style.cssText = l),
                s.appendChild(e).appendChild(t),
                (t.style.cssText =
                  "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%"),
                m.swap(s, null != s.style.zoom ? { zoom: 1 } : {}, function () {
                  n = 4 === t.offsetWidth;
                }),
                (r = !0),
                (o = !1),
                (a = !0),
                i.getComputedStyle &&
                  ((o = "1%" !== (i.getComputedStyle(t, null) || {}).top),
                  (r =
                    "4px" ===
                    (i.getComputedStyle(t, null) || { width: "4px" }).width)),
                s.removeChild(e),
                (t = s = null));
            }
            (s.innerHTML =
              "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
              ((e = s.getElementsByTagName("a")[0]).style.cssText =
                "float:left;opacity:.5"),
              (g.opacity = /^0.5/.test(e.style.opacity)),
              (g.cssFloat = !!e.style.cssFloat),
              (s.style.backgroundClip = "content-box"),
              (s.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === s.style.backgroundClip),
              (e = s = null),
              m.extend(g, {
                reliableHiddenOffsets: function () {
                  if (null != t) return t;
                  var e,
                    n,
                    r,
                    i = D.createElement("div"),
                    o = D.getElementsByTagName("body")[0];
                  return o
                    ? (i.setAttribute("className", "t"),
                      (i.innerHTML =
                        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                      ((e = D.createElement("div")).style.cssText = l),
                      o.appendChild(e).appendChild(i),
                      (i.innerHTML =
                        "<table><tr><td></td><td>t</td></tr></table>"),
                      ((n = i.getElementsByTagName("td"))[0].style.cssText =
                        "padding:0;margin:0;border:0;display:none"),
                      (r = 0 === n[0].offsetHeight),
                      (n[0].style.display = ""),
                      (n[1].style.display = "none"),
                      (t = r && 0 === n[0].offsetHeight),
                      o.removeChild(e),
                      (i = o = null),
                      t)
                    : void 0;
                },
                boxSizing: function () {
                  return null == n && c(), n;
                },
                boxSizingReliable: function () {
                  return null == r && c(), r;
                },
                pixelPosition: function () {
                  return null == o && c(), o;
                },
                reliableMarginRight: function () {
                  var e, t, n, r;
                  if (null == a && i.getComputedStyle) {
                    if (!(e = D.getElementsByTagName("body")[0])) return;
                    (t = D.createElement("div")),
                      (n = D.createElement("div")),
                      (t.style.cssText = l),
                      e.appendChild(t).appendChild(n),
                      ((r = n.appendChild(
                        D.createElement("div")
                      )).style.cssText = n.style.cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"),
                      (r.style.marginRight = r.style.width = "0"),
                      (n.style.width = "1px"),
                      (a = !parseFloat(
                        (i.getComputedStyle(r, null) || {}).marginRight
                      )),
                      e.removeChild(t);
                  }
                  return a;
                },
              });
          })(),
          (m.swap = function (e, t, n, r) {
            var i,
              o,
              a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
          });
        var Fe = /alpha\([^)]*\)/i,
          qe = /opacity\s*=\s*([^)]*)/,
          ze = /^(none|table(?!-c[ea]).+)/,
          $e = new RegExp("^(" + G + ")(.*)$", "i"),
          We = new RegExp("^([+-])=(" + G + ")", "i"),
          Ue = { position: "absolute", visibility: "hidden", display: "block" },
          Xe = { letterSpacing: 0, fontWeight: 400 },
          Ge = ["Webkit", "O", "Moz", "ms"];
        function Ve(e, t) {
          if (t in e) return t;
          for (
            var n = t.charAt(0).toUpperCase() + t.slice(1),
              r = t,
              i = Ge.length;
            i--;

          )
            if ((t = Ge[i] + n) in e) return t;
          return r;
        }
        function Je(e, t) {
          for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            (r = e[a]).style &&
              ((o[a] = m._data(r, "olddisplay")),
              (n = r.style.display),
              t
                ? (o[a] || "none" !== n || (r.style.display = ""),
                  "" === r.style.display &&
                    J(r) &&
                    (o[a] = m._data(r, "olddisplay", Ie(r.nodeName))))
                : o[a] ||
                  ((i = J(r)),
                  ((n && "none" !== n) || !i) &&
                    m._data(r, "olddisplay", i ? n : m.css(r, "display"))));
          for (a = 0; s > a; a++)
            (r = e[a]).style &&
              ((t && "none" !== r.style.display && "" !== r.style.display) ||
                (r.style.display = t ? o[a] || "" : "none"));
          return e;
        }
        function Ye(e, t, n) {
          var r = $e.exec(t);
          return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
        }
        function Qe(e, t, n, r, i) {
          for (
            var o =
                n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
              a = 0;
            4 > o;
            o += 2
          )
            "margin" === n && (a += m.css(e, n + V[o], !0, i)),
              r
                ? ("content" === n && (a -= m.css(e, "padding" + V[o], !0, i)),
                  "margin" !== n &&
                    (a -= m.css(e, "border" + V[o] + "Width", !0, i)))
                : ((a += m.css(e, "padding" + V[o], !0, i)),
                  "padding" !== n &&
                    (a += m.css(e, "border" + V[o] + "Width", !0, i)));
          return a;
        }
        function Ke(e, t, n) {
          var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Le(e),
            a = g.boxSizing() && "border-box" === m.css(e, "boxSizing", !1, o);
          if (0 >= i || null == i) {
            if (
              ((0 > (i = Me(e, t, o)) || null == i) && (i = e.style[t]),
              Oe.test(i))
            )
              return i;
            (r = a && (g.boxSizingReliable() || i === e.style[t])),
              (i = parseFloat(i) || 0);
          }
          return i + Qe(e, t, n || (a ? "border" : "content"), r, o) + "px";
        }
        function Ze(e, t, n, r, i) {
          return new Ze.prototype.init(e, t, n, r, i);
        }
        m.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Me(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: { float: g.cssFloat ? "cssFloat" : "styleFloat" },
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                a,
                s = m.camelCase(t),
                l = e.style;
              if (
                ((t = m.cssProps[s] || (m.cssProps[s] = Ve(l, s))),
                (a = m.cssHooks[t] || m.cssHooks[s]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                  ? i
                  : l[t];
              if (
                ("string" == (o = typeof n) &&
                  (i = We.exec(n)) &&
                  ((n = (i[1] + 1) * i[2] + parseFloat(m.css(e, t))),
                  (o = "number")),
                null != n &&
                  n == n &&
                  ("number" !== o || m.cssNumber[s] || (n += "px"),
                  g.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
              )
                try {
                  (l[t] = ""), (l[t] = n);
                } catch (e) {}
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              a,
              s = m.camelCase(t);
            return (
              (t = m.cssProps[s] || (m.cssProps[s] = Ve(e.style, s))),
              (a = m.cssHooks[t] || m.cssHooks[s]) &&
                "get" in a &&
                (o = a.get(e, !0, n)),
              void 0 === o && (o = Me(e, t, r)),
              "normal" === o && t in Xe && (o = Xe[t]),
              "" === n || n
                ? ((i = parseFloat(o)), !0 === n || m.isNumeric(i) ? i || 0 : o)
                : o
            );
          },
        }),
          m.each(["height", "width"], function (e, t) {
            m.cssHooks[t] = {
              get: function (e, n, r) {
                return n
                  ? 0 === e.offsetWidth && ze.test(m.css(e, "display"))
                    ? m.swap(e, Ue, function () {
                        return Ke(e, t, r);
                      })
                    : Ke(e, t, r)
                  : void 0;
              },
              set: function (e, n, r) {
                var i = r && Le(e);
                return Ye(
                  0,
                  n,
                  r
                    ? Qe(
                        e,
                        t,
                        r,
                        g.boxSizing() &&
                          "border-box" === m.css(e, "boxSizing", !1, i),
                        i
                      )
                    : 0
                );
              },
            };
          }),
          g.opacity ||
            (m.cssHooks.opacity = {
              get: function (e, t) {
                return qe.test(
                  (t && e.currentStyle
                    ? e.currentStyle.filter
                    : e.style.filter) || ""
                )
                  ? 0.01 * parseFloat(RegExp.$1) + ""
                  : t
                  ? "1"
                  : "";
              },
              set: function (e, t) {
                var n = e.style,
                  r = e.currentStyle,
                  i = m.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                  o = (r && r.filter) || n.filter || "";
                (n.zoom = 1),
                  ((t >= 1 || "" === t) &&
                    "" === m.trim(o.replace(Fe, "")) &&
                    n.removeAttribute &&
                    (n.removeAttribute("filter"),
                    "" === t || (r && !r.filter))) ||
                    (n.filter = Fe.test(o) ? o.replace(Fe, i) : o + " " + i);
              },
            }),
          (m.cssHooks.marginRight = Be(g.reliableMarginRight, function (e, t) {
            return t
              ? m.swap(e, { display: "inline-block" }, Me, [e, "marginRight"])
              : void 0;
          })),
          m.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (m.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  4 > r;
                  r++
                )
                  i[e + V[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              },
            }),
              He.test(e) || (m.cssHooks[e + t].set = Ye);
          }),
          m.fn.extend({
            css: function (e, t) {
              return Y(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    a = 0;
                  if (m.isArray(t)) {
                    for (r = Le(e), i = t.length; i > a; a++)
                      o[t[a]] = m.css(e, t[a], !1, r);
                    return o;
                  }
                  return void 0 !== n ? m.style(e, t, n) : m.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
            show: function () {
              return Je(this, !0);
            },
            hide: function () {
              return Je(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    J(this) ? m(this).show() : m(this).hide();
                  });
            },
          }),
          (m.Tween = Ze),
          (Ze.prototype = {
            constructor: Ze,
            init: function (e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || "swing"),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (m.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = Ze.propHooks[this.prop];
              return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = Ze.propHooks[this.prop];
              return (
                (this.pos = t =
                  this.options.duration
                    ? m.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      )
                    : e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
                this
              );
            },
          }),
          (Ze.prototype.init.prototype = Ze.prototype),
          (Ze.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return null == e.elem[e.prop] ||
                  (e.elem.style && null != e.elem.style[e.prop])
                  ? (t = m.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0
                  : e.elem[e.prop];
              },
              set: function (e) {
                m.fx.step[e.prop]
                  ? m.fx.step[e.prop](e)
                  : e.elem.style &&
                    (null != e.elem.style[m.cssProps[e.prop]] ||
                      m.cssHooks[e.prop])
                  ? m.style(e.elem, e.prop, e.now + e.unit)
                  : (e.elem[e.prop] = e.now);
              },
            },
          }),
          (Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (m.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
          }),
          (m.fx = Ze.prototype.init),
          (m.fx.step = {});
        var et,
          tt,
          nt = /^(?:toggle|show|hide)$/,
          rt = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
          it = /queueHooks$/,
          ot = [
            function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                l,
                c,
                u,
                d = this,
                p = {},
                f = e.style,
                h = e.nodeType && J(e),
                v = m._data(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = m._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (l = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || l();
                  })),
                s.unqueued++,
                d.always(function () {
                  d.always(function () {
                    s.unqueued--, m.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              1 === e.nodeType &&
                ("height" in t || "width" in t) &&
                ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                (c = m.css(e, "display")),
                (u = Ie(e.nodeName)),
                "none" === c && (c = u),
                "inline" === c &&
                  "none" === m.css(e, "float") &&
                  (g.inlineBlockNeedsLayout && "inline" !== u
                    ? (f.zoom = 1)
                    : (f.display = "inline-block"))),
              n.overflow &&
                ((f.overflow = "hidden"),
                g.shrinkWrapBlocks() ||
                  d.always(function () {
                    (f.overflow = n.overflow[0]),
                      (f.overflowX = n.overflow[1]),
                      (f.overflowY = n.overflow[2]);
                  })),
              t))
                if (((i = t[r]), nt.exec(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (h ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    h = !0;
                  }
                  p[r] = (v && v[r]) || m.style(e, r);
                }
              if (!m.isEmptyObject(p))
                for (r in (v
                  ? "hidden" in v && (h = v.hidden)
                  : (v = m._data(e, "fxshow", {})),
                o && (v.hidden = !h),
                h
                  ? m(e).show()
                  : d.done(function () {
                      m(e).hide();
                    }),
                d.done(function () {
                  var t;
                  for (t in (m._removeData(e, "fxshow"), p))
                    m.style(e, t, p[t]);
                }),
                p))
                  (a = ct(h ? v[r] : 0, r, d)),
                    r in v ||
                      ((v[r] = a.start),
                      h &&
                        ((a.end = a.start),
                        (a.start = "width" === r || "height" === r ? 1 : 0)));
            },
          ],
          at = {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t),
                  r = n.cur(),
                  i = rt.exec(t),
                  o = (i && i[3]) || (m.cssNumber[e] ? "" : "px"),
                  a =
                    (m.cssNumber[e] || ("px" !== o && +r)) &&
                    rt.exec(m.css(n.elem, e)),
                  s = 1,
                  l = 20;
                if (a && a[3] !== o) {
                  (o = o || a[3]), (i = i || []), (a = +r || 1);
                  do {
                    (a /= s = s || ".5"), m.style(n.elem, e, a + o);
                  } while (s !== (s = n.cur() / r) && 1 !== s && --l);
                }
                return (
                  i &&
                    ((a = n.start = +a || +r || 0),
                    (n.unit = o),
                    (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
                  n
                );
              },
            ],
          };
        function st() {
          return (
            setTimeout(function () {
              et = void 0;
            }),
            (et = m.now())
          );
        }
        function lt(e, t) {
          var n,
            r = { height: e },
            i = 0;
          for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            r["margin" + (n = V[i])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r;
        }
        function ct(e, t, n) {
          for (
            var r, i = (at[t] || []).concat(at["*"]), o = 0, a = i.length;
            a > o;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function ut(e, t, n) {
          var r,
            i,
            o = 0,
            a = ot.length,
            s = m.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (i) return !1;
              for (
                var t = et || st(),
                  n = Math.max(0, c.startTime + c.duration - t),
                  r = 1 - (n / c.duration || 0),
                  o = 0,
                  a = c.tweens.length;
                a > o;
                o++
              )
                c.tweens[o].run(r);
              return (
                s.notifyWith(e, [c, r, n]),
                1 > r && a ? n : (s.resolveWith(e, [c]), !1)
              );
            },
            c = s.promise({
              elem: e,
              props: m.extend({}, t),
              opts: m.extend(!0, { specialEasing: {} }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: et || st(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = m.Tween(
                  e,
                  c.opts,
                  t,
                  n,
                  c.opts.specialEasing[t] || c.opts.easing
                );
                return c.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) c.tweens[n].run(1);
                return (
                  t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                );
              },
            }),
            u = c.props;
          for (
            (function (e, t) {
              var n, r, i, o, a;
              for (n in e)
                if (
                  ((i = t[(r = m.camelCase(n))]),
                  (o = e[n]),
                  m.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (a = m.cssHooks[r]) && ("expand" in a))
                )
                  for (n in ((o = a.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(u, c.opts.specialEasing);
            a > o;
            o++
          )
            if ((r = ot[o].call(c, e, u, c.opts))) return r;
          return (
            m.map(u, ct, c),
            m.isFunction(c.opts.start) && c.opts.start.call(e, c),
            m.fx.timer(m.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always)
          );
        }
        (m.Animation = m.extend(ut, {
          tweener: function (e, t) {
            m.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
            for (var n, r = 0, i = e.length; i > r; r++)
              (n = e[r]), (at[n] = at[n] || []), at[n].unshift(t);
          },
          prefilter: function (e, t) {
            t ? ot.unshift(e) : ot.push(e);
          },
        })),
          (m.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? m.extend({}, e)
                : {
                    complete: n || (!n && t) || (m.isFunction(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !m.isFunction(t) && t),
                  };
            return (
              (r.duration = m.fx.off
                ? 0
                : "number" == typeof r.duration
                ? r.duration
                : r.duration in m.fx.speeds
                ? m.fx.speeds[r.duration]
                : m.fx.speeds._default),
              (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                m.isFunction(r.old) && r.old.call(this),
                  r.queue && m.dequeue(this, r.queue);
              }),
              r
            );
          }),
          m.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(J)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = m.isEmptyObject(e),
                o = m.speed(t, n, r),
                a = function () {
                  var t = ut(this, m.extend({}, e), o);
                  (i || m._data(this, "finish")) && t.stop(!0);
                };
              return (
                (a.finish = a),
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = m.timers,
                    a = m._data(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (t || !n) && m.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = m._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = m.timers,
                    a = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      m.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          m.each(["toggle", "show", "hide"], function (e, t) {
            var n = m.fn[t];
            m.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(lt(t, !0), e, r, i);
            };
          }),
          m.each(
            {
              slideDown: lt("show"),
              slideUp: lt("hide"),
              slideToggle: lt("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              m.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (m.timers = []),
          (m.fx.tick = function () {
            var e,
              t = m.timers,
              n = 0;
            for (et = m.now(); n < t.length; n++)
              (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || m.fx.stop(), (et = void 0);
          }),
          (m.fx.timer = function (e) {
            m.timers.push(e), e() ? m.fx.start() : m.timers.pop();
          }),
          (m.fx.interval = 13),
          (m.fx.start = function () {
            tt || (tt = setInterval(m.fx.tick, m.fx.interval));
          }),
          (m.fx.stop = function () {
            clearInterval(tt), (tt = null);
          }),
          (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (m.fn.delay = function (e, t) {
            return (
              (e = (m.fx && m.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                  clearTimeout(r);
                };
              })
            );
          }),
          (function () {
            var e,
              t,
              n,
              r,
              i = D.createElement("div");
            i.setAttribute("className", "t"),
              (i.innerHTML =
                "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
              (e = i.getElementsByTagName("a")[0]),
              (r = (n = D.createElement("select")).appendChild(
                D.createElement("option")
              )),
              (t = i.getElementsByTagName("input")[0]),
              (e.style.cssText = "top:1px"),
              (g.getSetAttribute = "t" !== i.className),
              (g.style = /top/.test(e.getAttribute("style"))),
              (g.hrefNormalized = "/a" === e.getAttribute("href")),
              (g.checkOn = !!t.value),
              (g.optSelected = r.selected),
              (g.enctype = !!D.createElement("form").enctype),
              (n.disabled = !0),
              (g.optDisabled = !r.disabled),
              (t = D.createElement("input")).setAttribute("value", ""),
              (g.input = "" === t.getAttribute("value")),
              (t.value = "t"),
              t.setAttribute("type", "radio"),
              (g.radioValue = "t" === t.value),
              (e = t = n = r = i = null);
          })();
        var dt = /\r/g;
        m.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = m.isFunction(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, m(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : m.isArray(i) &&
                        (i = m.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      m.valHooks[this.type] ||
                      m.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(dt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          m.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = m.find.attr(e, "value");
                  return null != t ? t : m.text(e);
                },
              },
              select: {
                get: function (e) {
                  for (
                    var t,
                      n,
                      r = e.options,
                      i = e.selectedIndex,
                      o = "select-one" === e.type || 0 > i,
                      a = o ? null : [],
                      s = o ? i + 1 : r.length,
                      l = 0 > i ? s : o ? i : 0;
                    s > l;
                    l++
                  )
                    if (
                      !(
                        (!(n = r[l]).selected && l !== i) ||
                        (g.optDisabled
                          ? n.disabled
                          : null !== n.getAttribute("disabled")) ||
                        (n.parentNode.disabled &&
                          m.nodeName(n.parentNode, "optgroup"))
                      )
                    ) {
                      if (((t = m(n).val()), o)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, o = m.makeArray(t), a = i.length;
                    a--;

                  )
                    if (
                      ((r = i[a]), m.inArray(m.valHooks.option.get(r), o) >= 0)
                    )
                      try {
                        r.selected = n = !0;
                      } catch (e) {
                        r.scrollHeight;
                      }
                    else r.selected = !1;
                  return n || (e.selectedIndex = -1), i;
                },
              },
            },
          }),
          m.each(["radio", "checkbox"], function () {
            (m.valHooks[this] = {
              set: function (e, t) {
                return m.isArray(t)
                  ? (e.checked = m.inArray(m(e).val(), t) >= 0)
                  : void 0;
              },
            }),
              g.checkOn ||
                (m.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          });
        var pt,
          ft,
          ht = m.expr.attrHandle,
          gt = /^(?:checked|selected)$/i,
          vt = g.getSetAttribute,
          mt = g.input;
        m.fn.extend({
          attr: function (e, t) {
            return Y(this, m.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              m.removeAttr(this, e);
            });
          },
        }),
          m.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === F
                  ? m.prop(e, t, n)
                  : ((1 === o && m.isXMLDoc(e)) ||
                      ((t = t.toLowerCase()),
                      (r =
                        m.attrHooks[t] ||
                        (m.expr.match.bool.test(t) ? ft : pt))),
                    void 0 === n
                      ? r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = m.find.attr(e, t))
                        ? void 0
                        : i
                      : null !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                      : void m.removeAttr(e, t));
            },
            removeAttr: function (e, t) {
              var n,
                r,
                i = 0,
                o = t && t.match(M);
              if (o && 1 === e.nodeType)
                for (; (n = o[i++]); )
                  (r = m.propFix[n] || n),
                    m.expr.match.bool.test(n)
                      ? (mt && vt) || !gt.test(n)
                        ? (e[r] = !1)
                        : (e[m.camelCase("default-" + n)] = e[r] = !1)
                      : m.attr(e, n, ""),
                    e.removeAttribute(vt ? n : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (
                    !g.radioValue &&
                    "radio" === t &&
                    m.nodeName(e, "input")
                  ) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
          }),
          (ft = {
            set: function (e, t, n) {
              return (
                !1 === t
                  ? m.removeAttr(e, n)
                  : (mt && vt) || !gt.test(n)
                  ? e.setAttribute((!vt && m.propFix[n]) || n, n)
                  : (e[m.camelCase("default-" + n)] = e[n] = !0),
                n
              );
            },
          }),
          m.each(m.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || m.find.attr;
            ht[t] =
              (mt && vt) || !gt.test(t)
                ? function (e, t, r) {
                    var i, o;
                    return (
                      r ||
                        ((o = ht[t]),
                        (ht[t] = i),
                        (i = null != n(e, t, r) ? t.toLowerCase() : null),
                        (ht[t] = o)),
                      i
                    );
                  }
                : function (e, t, n) {
                    return n
                      ? void 0
                      : e[m.camelCase("default-" + t)]
                      ? t.toLowerCase()
                      : null;
                  };
          }),
          (mt && vt) ||
            (m.attrHooks.value = {
              set: function (e, t, n) {
                return m.nodeName(e, "input")
                  ? void (e.defaultValue = t)
                  : pt && pt.set(e, t, n);
              },
            }),
          vt ||
            ((pt = {
              set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                return (
                  r ||
                    e.setAttributeNode(
                      (r = e.ownerDocument.createAttribute(n))
                    ),
                  (r.value = t += ""),
                  "value" === n || t === e.getAttribute(n) ? t : void 0
                );
              },
            }),
            (ht.id =
              ht.name =
              ht.coords =
                function (e, t, n) {
                  var r;
                  return n
                    ? void 0
                    : (r = e.getAttributeNode(t)) && "" !== r.value
                    ? r.value
                    : null;
                }),
            (m.valHooks.button = {
              get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0;
              },
              set: pt.set,
            }),
            (m.attrHooks.contenteditable = {
              set: function (e, t, n) {
                pt.set(e, "" !== t && t, n);
              },
            }),
            m.each(["width", "height"], function (e, t) {
              m.attrHooks[t] = {
                set: function (e, n) {
                  return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
                },
              };
            })),
          g.style ||
            (m.attrHooks.style = {
              get: function (e) {
                return e.style.cssText || void 0;
              },
              set: function (e, t) {
                return (e.style.cssText = t + "");
              },
            });
        var yt = /^(?:input|select|textarea|button|object)$/i,
          xt = /^(?:a|area)$/i;
        m.fn.extend({
          prop: function (e, t) {
            return Y(this, m.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return (
              (e = m.propFix[e] || e),
              this.each(function () {
                try {
                  (this[e] = void 0), delete this[e];
                } catch (e) {}
              })
            );
          },
        }),
          m.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (e && 3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 !== o || !m.isXMLDoc(e)) &&
                    ((t = m.propFix[t] || t), (i = m.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = m.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : yt.test(e.nodeName) || (xt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
          }),
          g.hrefNormalized ||
            m.each(["href", "src"], function (e, t) {
              m.propHooks[t] = {
                get: function (e) {
                  return e.getAttribute(t, 4);
                },
              };
            }),
          g.optSelected ||
            (m.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return (
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                  null
                );
              },
            }),
          m.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              m.propFix[this.toLowerCase()] = this;
            }
          ),
          g.enctype || (m.propFix.enctype = "encoding");
        var bt = /[\t\r\n\f]/g;
        m.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = 0,
              l = this.length,
              c = "string" == typeof e && e;
            if (m.isFunction(e))
              return this.each(function (t) {
                m(this).addClass(e.call(this, t, this.className));
              });
            if (c)
              for (t = (e || "").match(M) || []; l > s; s++)
                if (
                  (r =
                    1 === (n = this[s]).nodeType &&
                    (n.className
                      ? (" " + n.className + " ").replace(bt, " ")
                      : " "))
                ) {
                  for (o = 0; (i = t[o++]); )
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  (a = m.trim(r)), n.className !== a && (n.className = a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = 0,
              l = this.length,
              c = 0 === arguments.length || ("string" == typeof e && e);
            if (m.isFunction(e))
              return this.each(function (t) {
                m(this).removeClass(e.call(this, t, this.className));
              });
            if (c)
              for (t = (e || "").match(M) || []; l > s; s++)
                if (
                  (r =
                    1 === (n = this[s]).nodeType &&
                    (n.className
                      ? (" " + n.className + " ").replace(bt, " ")
                      : ""))
                ) {
                  for (o = 0; (i = t[o++]); )
                    for (; r.indexOf(" " + i + " ") >= 0; )
                      r = r.replace(" " + i + " ", " ");
                  (a = e ? m.trim(r) : ""),
                    n.className !== a && (n.className = a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : this.each(
                  m.isFunction(e)
                    ? function (n) {
                        m(this).toggleClass(
                          e.call(this, n, this.className, t),
                          t
                        );
                      }
                    : function () {
                        if ("string" === n)
                          for (
                            var t, r = 0, i = m(this), o = e.match(M) || [];
                            (t = o[r++]);

                          )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                          (n === F || "boolean" === n) &&
                            (this.className &&
                              m._data(this, "__className__", this.className),
                            (this.className =
                              this.className || !1 === e
                                ? ""
                                : m._data(this, "__className__") || ""));
                      }
                );
          },
          hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
              if (
                1 === this[n].nodeType &&
                (" " + this[n].className + " ").replace(bt, " ").indexOf(t) >= 0
              )
                return !0;
            return !1;
          },
        }),
          m.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
              " "
            ),
            function (e, t) {
              m.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          ),
          m.fn.extend({
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
          });
        var wt = m.now(),
          kt = /\?/,
          Tt =
            /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        (m.parseJSON = function (e) {
          if (i.JSON && i.JSON.parse) return i.JSON.parse(e + "");
          var t,
            n = null,
            r = m.trim(e + "");
          return r &&
            !m.trim(
              r.replace(Tt, function (e, r, i, o) {
                return (
                  t && r && (n = 0),
                  0 === n ? e : ((t = i || r), (n += !o - !i), "")
                );
              })
            )
            ? Function("return " + r)()
            : m.error("Invalid JSON: " + e);
        }),
          (m.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              i.DOMParser
                ? (t = new DOMParser().parseFromString(e, "text/xml"))
                : (((t = new ActiveXObject("Microsoft.XMLDOM")).async =
                    "false"),
                  t.loadXML(e));
            } catch (e) {
              t = void 0;
            }
            return (
              (t &&
                t.documentElement &&
                !t.getElementsByTagName("parsererror").length) ||
                m.error("Invalid XML: " + e),
              t
            );
          });
        var Ct,
          Et,
          At = /#.*$/,
          Nt = /([?&])_=[^&]*/,
          Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
          Dt = /^(?:GET|HEAD)$/,
          St = /^\/\//,
          _t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
          jt = {},
          It = {},
          Lt = "*/".concat("*");
        try {
          Et = location.href;
        } catch (e) {
          ((Et = D.createElement("a")).href = ""), (Et = Et.href);
        }
        function Mt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(M) || [];
            if (m.isFunction(n))
              for (; (r = o[i++]); )
                "+" === r.charAt(0)
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function Ht(e, t, n, r) {
          var i = {},
            o = e === It;
          function a(s) {
            var l;
            return (
              (i[s] = !0),
              m.each(e[s] || [], function (e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || o || i[c]
                  ? o
                    ? !(l = c)
                    : void 0
                  : (t.dataTypes.unshift(c), a(c), !1);
              }),
              l
            );
          }
          return a(t.dataTypes[0]) || (!i["*"] && a("*"));
        }
        function Ot(e, t) {
          var n,
            r,
            i = m.ajaxSettings.flatOptions || {};
          for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
          return n && m.extend(!0, e, n), e;
        }
        (Ct = _t.exec(Et.toLowerCase()) || []),
          m.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Et,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Ct[1]
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /xml/, html: /html/, json: /json/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Ot(Ot(e, m.ajaxSettings), t) : Ot(m.ajaxSettings, e);
            },
            ajaxPrefilter: Mt(jt),
            ajaxTransport: Mt(It),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                r,
                i,
                o,
                a,
                s,
                l,
                c,
                u = m.ajaxSetup({}, t),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? m(d) : m.event,
                f = m.Deferred(),
                h = m.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                      if (!c)
                        for (c = {}; (t = Pt.exec(o)); )
                          c[t[1].toLowerCase()] = t[2];
                      t = c[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                  },
                  getAllResponseHeaders: function () {
                    return 2 === x ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || ((e = y[n] = y[n] || e), (v[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                    return x || (u.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (2 > x) for (t in e) g[t] = [g[t], e[t]];
                      else w.always(e[w.status]);
                    return this;
                  },
                  abort: function (e) {
                    var t = e || b;
                    return l && l.abort(t), k(0, t), this;
                  },
                };
              if (
                ((f.promise(w).complete = h.add),
                (w.success = w.done),
                (w.error = w.fail),
                (u.url = ((e || u.url || Et) + "")
                  .replace(At, "")
                  .replace(St, Ct[1] + "//")),
                (u.type = t.method || t.type || u.method || u.type),
                (u.dataTypes = m
                  .trim(u.dataType || "*")
                  .toLowerCase()
                  .match(M) || [""]),
                null == u.crossDomain &&
                  ((n = _t.exec(u.url.toLowerCase())),
                  (u.crossDomain = !(
                    !n ||
                    (n[1] === Ct[1] &&
                      n[2] === Ct[2] &&
                      (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                        (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))
                  ))),
                u.data &&
                  u.processData &&
                  "string" != typeof u.data &&
                  (u.data = m.param(u.data, u.traditional)),
                Ht(jt, u, t, w),
                2 === x)
              )
                return w;
              for (r in ((s = u.global) &&
                0 == m.active++ &&
                m.event.trigger("ajaxStart"),
              (u.type = u.type.toUpperCase()),
              (u.hasContent = !Dt.test(u.type)),
              (i = u.url),
              u.hasContent ||
                (u.data &&
                  ((i = u.url += (kt.test(i) ? "&" : "?") + u.data),
                  delete u.data),
                !1 === u.cache &&
                  (u.url = Nt.test(i)
                    ? i.replace(Nt, "$1_=" + wt++)
                    : i + (kt.test(i) ? "&" : "?") + "_=" + wt++)),
              u.ifModified &&
                (m.lastModified[i] &&
                  w.setRequestHeader("If-Modified-Since", m.lastModified[i]),
                m.etag[i] && w.setRequestHeader("If-None-Match", m.etag[i])),
              ((u.data && u.hasContent && !1 !== u.contentType) ||
                t.contentType) &&
                w.setRequestHeader("Content-Type", u.contentType),
              w.setRequestHeader(
                "Accept",
                u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                  ? u.accepts[u.dataTypes[0]] +
                      ("*" !== u.dataTypes[0] ? ", " + Lt + "; q=0.01" : "")
                  : u.accepts["*"]
              ),
              u.headers))
                w.setRequestHeader(r, u.headers[r]);
              if (
                u.beforeSend &&
                (!1 === u.beforeSend.call(d, w, u) || 2 === x)
              )
                return w.abort();
              for (r in ((b = "abort"), { success: 1, error: 1, complete: 1 }))
                w[r](u[r]);
              if ((l = Ht(It, u, t, w))) {
                (w.readyState = 1),
                  s && p.trigger("ajaxSend", [w, u]),
                  u.async &&
                    u.timeout > 0 &&
                    (a = setTimeout(function () {
                      w.abort("timeout");
                    }, u.timeout));
                try {
                  (x = 1), l.send(v, k);
                } catch (e) {
                  if (!(2 > x)) throw e;
                  k(-1, e);
                }
              } else k(-1, "No Transport");
              function k(e, t, n, r) {
                var c,
                  v,
                  y,
                  b,
                  k,
                  T = t;
                2 !== x &&
                  ((x = 2),
                  a && clearTimeout(a),
                  (l = void 0),
                  (o = r || ""),
                  (w.readyState = e > 0 ? 4 : 0),
                  (c = (e >= 200 && 300 > e) || 304 === e),
                  n &&
                    (b = (function (e, t, n) {
                      for (
                        var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];

                      )
                        l.shift(),
                          void 0 === i &&
                            (i =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (i)
                        for (a in s)
                          if (s[a] && s[a].test(i)) {
                            l.unshift(a);
                            break;
                          }
                      if (l[0] in n) o = l[0];
                      else {
                        for (a in n) {
                          if (!l[0] || e.converters[a + " " + l[0]]) {
                            o = a;
                            break;
                          }
                          r || (r = a);
                        }
                        o = o || r;
                      }
                      return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
                    })(u, w, n)),
                  (b = (function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      l,
                      c = {},
                      u = e.dataTypes.slice();
                    if (u[1])
                      for (a in e.converters)
                        c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (l = o),
                        (o = u.shift()))
                      )
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                          if (!(a = c[l + " " + o] || c["* " + o]))
                            for (i in c)
                              if (
                                (s = i.split(" "))[1] === o &&
                                (a = c[l + " " + s[0]] || c["* " + s[0]])
                              ) {
                                !0 === a
                                  ? (a = c[i])
                                  : !0 !== c[i] &&
                                    ((o = s[0]), u.unshift(s[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else
                              try {
                                t = a(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: a
                                    ? e
                                    : "No conversion from " + l + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(u, b, w, c)),
                  c
                    ? (u.ifModified &&
                        ((k = w.getResponseHeader("Last-Modified")) &&
                          (m.lastModified[i] = k),
                        (k = w.getResponseHeader("etag")) && (m.etag[i] = k)),
                      204 === e || "HEAD" === u.type
                        ? (T = "nocontent")
                        : 304 === e
                        ? (T = "notmodified")
                        : ((T = b.state), (v = b.data), (c = !(y = b.error))))
                    : ((y = T), (e || !T) && ((T = "error"), 0 > e && (e = 0))),
                  (w.status = e),
                  (w.statusText = (t || T) + ""),
                  c ? f.resolveWith(d, [v, T, w]) : f.rejectWith(d, [w, T, y]),
                  w.statusCode(g),
                  (g = void 0),
                  s &&
                    p.trigger(c ? "ajaxSuccess" : "ajaxError", [
                      w,
                      u,
                      c ? v : y,
                    ]),
                  h.fireWith(d, [w, T]),
                  s &&
                    (p.trigger("ajaxComplete", [w, u]),
                    --m.active || m.event.trigger("ajaxStop")));
              }
              return w;
            },
            getJSON: function (e, t, n) {
              return m.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return m.get(e, void 0, t, "script");
            },
          }),
          m.each(["get", "post"], function (e, t) {
            m[t] = function (e, n, r, i) {
              return (
                m.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
                m.ajax({ url: e, type: t, dataType: i, data: n, success: r })
              );
            };
          }),
          m.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              m.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          (m._evalUrl = function (e) {
            return m.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              throws: !0,
            });
          }),
          m.fn.extend({
            wrapAll: function (e) {
              if (m.isFunction(e))
                return this.each(function (t) {
                  m(this).wrapAll(e.call(this, t));
                });
              if (this[0]) {
                var t = m(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (
                        var e = this;
                        e.firstChild && 1 === e.firstChild.nodeType;

                      )
                        e = e.firstChild;
                      return e;
                    })
                    .append(this);
              }
              return this;
            },
            wrapInner: function (e) {
              return this.each(
                m.isFunction(e)
                  ? function (t) {
                      m(this).wrapInner(e.call(this, t));
                    }
                  : function () {
                      var t = m(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    }
              );
            },
            wrap: function (e) {
              var t = m.isFunction(e);
              return this.each(function (n) {
                m(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function () {
              return this.parent()
                .each(function () {
                  m.nodeName(this, "body") ||
                    m(this).replaceWith(this.childNodes);
                })
                .end();
            },
          }),
          (m.expr.filters.hidden = function (e) {
            return (
              (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
              (!g.reliableHiddenOffsets() &&
                "none" ===
                  ((e.style && e.style.display) || m.css(e, "display")))
            );
          }),
          (m.expr.filters.visible = function (e) {
            return !m.expr.filters.hidden(e);
          });
        var Rt = /%20/g,
          Bt = /\[\]$/,
          Ft = /\r?\n/g,
          qt = /^(?:submit|button|image|reset|file)$/i,
          zt = /^(?:input|select|textarea|keygen)/i;
        function $t(e, t, n, r) {
          var i;
          if (m.isArray(t))
            m.each(t, function (t, i) {
              n || Bt.test(e)
                ? r(e, i)
                : $t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
            });
          else if (n || "object" !== m.type(t)) r(e, t);
          else for (i in t) $t(e + "[" + i + "]", t[i], n, r);
        }
        (m.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              (t = m.isFunction(t) ? t() : null == t ? "" : t),
                (r[r.length] =
                  encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
          if (
            (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional),
            m.isArray(e) || (e.jquery && !m.isPlainObject(e)))
          )
            m.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) $t(n, e[n], t, i);
          return r.join("&").replace(Rt, "+");
        }),
          m.fn.extend({
            serialize: function () {
              return m.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = m.prop(this, "elements");
                return e ? m.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !m(this).is(":disabled") &&
                    zt.test(this.nodeName) &&
                    !qt.test(e) &&
                    (this.checked || !Q.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = m(this).val();
                  return null == n
                    ? null
                    : m.isArray(n)
                    ? m.map(n, function (e) {
                        return { name: t.name, value: e.replace(Ft, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Ft, "\r\n") };
                })
                .get();
            },
          }),
          (m.ajaxSettings.xhr =
            void 0 !== i.ActiveXObject
              ? function () {
                  return (
                    (!this.isLocal &&
                      /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                      Gt()) ||
                    (function () {
                      try {
                        return new i.ActiveXObject("Microsoft.XMLHTTP");
                      } catch (e) {}
                    })()
                  );
                }
              : Gt);
        var Wt = 0,
          Ut = {},
          Xt = m.ajaxSettings.xhr();
        function Gt() {
          try {
            return new i.XMLHttpRequest();
          } catch (e) {}
        }
        i.ActiveXObject &&
          m(i).on("unload", function () {
            for (var e in Ut) Ut[e](void 0, !0);
          }),
          (g.cors = !!Xt && "withCredentials" in Xt),
          (Xt = g.ajax = !!Xt) &&
            m.ajaxTransport(function (e) {
              var t;
              if (!e.crossDomain || g.cors)
                return {
                  send: function (n, r) {
                    var i,
                      o = e.xhr(),
                      a = ++Wt;
                    if (
                      (o.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    for (i in (e.mimeType &&
                      o.overrideMimeType &&
                      o.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      n["X-Requested-With"] ||
                      (n["X-Requested-With"] = "XMLHttpRequest"),
                    n))
                      void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send((e.hasContent && e.data) || null),
                      (t = function (n, i) {
                        var s, l, c;
                        if (t && (i || 4 === o.readyState))
                          if (
                            (delete Ut[a],
                            (t = void 0),
                            (o.onreadystatechange = m.noop),
                            i)
                          )
                            4 !== o.readyState && o.abort();
                          else {
                            (c = {}),
                              (s = o.status),
                              "string" == typeof o.responseText &&
                                (c.text = o.responseText);
                            try {
                              l = o.statusText;
                            } catch (e) {
                              l = "";
                            }
                            s || !e.isLocal || e.crossDomain
                              ? 1223 === s && (s = 204)
                              : (s = c.text ? 200 : 404);
                          }
                        c && r(s, l, c, o.getAllResponseHeaders());
                      }),
                      e.async
                        ? 4 === o.readyState
                          ? setTimeout(t)
                          : (o.onreadystatechange = Ut[a] = t)
                        : t();
                  },
                  abort: function () {
                    t && t(void 0, !0);
                  },
                };
            }),
          m.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
              "text script": function (e) {
                return m.globalEval(e), e;
              },
            },
          }),
          m.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && ((e.type = "GET"), (e.global = !1));
          }),
          m.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
              var t,
                n = D.head || m("head")[0] || D.documentElement;
              return {
                send: function (r, i) {
                  ((t = D.createElement("script")).async = !0),
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    (t.src = e.url),
                    (t.onload = t.onreadystatechange =
                      function (e, n) {
                        (n ||
                          !t.readyState ||
                          /loaded|complete/.test(t.readyState)) &&
                          ((t.onload = t.onreadystatechange = null),
                          t.parentNode && t.parentNode.removeChild(t),
                          (t = null),
                          n || i(200, "success"));
                      }),
                    n.insertBefore(t, n.firstChild);
                },
                abort: function () {
                  t && t.onload(void 0, !0);
                },
              };
            }
          });
        var Vt = [],
          Jt = /(=)\?(?=&|$)|\?\?/;
        m.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Vt.pop() || m.expando + "_" + wt++;
            return (this[e] = !0), e;
          },
        }),
          m.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
              o,
              a,
              s =
                !1 !== e.jsonp &&
                (Jt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    !(e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                    Jt.test(e.data) &&
                    "data");
            return s || "jsonp" === e.dataTypes[0]
              ? ((r = e.jsonpCallback =
                  m.isFunction(e.jsonpCallback)
                    ? e.jsonpCallback()
                    : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(Jt, "$1" + r))
                  : !1 !== e.jsonp &&
                    (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function () {
                  return a || m.error(r + " was not called"), a[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = i[r]),
                (i[r] = function () {
                  a = arguments;
                }),
                n.always(function () {
                  (i[r] = o),
                    e[r] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(r)),
                    a && m.isFunction(o) && o(a[0]),
                    (a = o = void 0);
                }),
                "script")
              : void 0;
          }),
          (m.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || D);
            var r = E.exec(e),
              i = !n && [];
            return r
              ? [t.createElement(r[1])]
              : ((r = m.buildFragment([e], t, i)),
                i && i.length && m(i).remove(),
                m.merge([], r.childNodes));
          });
        var Yt = m.fn.load;
        (m.fn.load = function (e, t, n) {
          if ("string" != typeof e && Yt) return Yt.apply(this, arguments);
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s >= 0 && ((r = e.slice(s, e.length)), (e = e.slice(0, s))),
            m.isFunction(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
              m
                .ajax({ url: e, type: o, dataType: "html", data: t })
                .done(function (e) {
                  (i = arguments),
                    a.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e);
                })
                .complete(
                  n &&
                    function (e, t) {
                      a.each(n, i || [e.responseText, t, e]);
                    }
                ),
            this
          );
        }),
          (m.expr.filters.animated = function (e) {
            return m.grep(m.timers, function (t) {
              return e === t.elem;
            }).length;
          });
        var Qt = i.document.documentElement;
        function Kt(e) {
          return m.isWindow(e)
            ? e
            : 9 === e.nodeType && (e.defaultView || e.parentWindow);
        }
        (m.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              c = m.css(e, "position"),
              u = m(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (s = u.offset()),
              (o = m.css(e, "top")),
              (l = m.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              m.inArray("auto", [o, l]) > -1
                ? ((a = (r = u.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              m.isFunction(t) && (t = t.call(e, n, s)),
              null != t.top && (d.top = t.top - s.top + a),
              null != t.left && (d.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, d) : u.css(d);
          },
        }),
          m.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      m.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = { top: 0, left: 0 },
                i = this[0],
                o = i && i.ownerDocument;
              return o
                ? ((t = o.documentElement),
                  m.contains(t, i)
                    ? (typeof i.getBoundingClientRect !== F &&
                        (r = i.getBoundingClientRect()),
                      (n = Kt(o)),
                      {
                        top:
                          r.top +
                          (n.pageYOffset || t.scrollTop) -
                          (t.clientTop || 0),
                        left:
                          r.left +
                          (n.pageXOffset || t.scrollLeft) -
                          (t.clientLeft || 0),
                      })
                    : r)
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n = { top: 0, left: 0 },
                  r = this[0];
                return (
                  "fixed" === m.css(r, "position")
                    ? (t = r.getBoundingClientRect())
                    : ((e = this.offsetParent()),
                      (t = this.offset()),
                      m.nodeName(e[0], "html") || (n = e.offset()),
                      (n.top += m.css(e[0], "borderTopWidth", !0)),
                      (n.left += m.css(e[0], "borderLeftWidth", !0))),
                  {
                    top: t.top - n.top - m.css(r, "marginTop", !0),
                    left: t.left - n.left - m.css(r, "marginLeft", !0),
                  }
                );
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent || Qt;
                  e &&
                  !m.nodeName(e, "html") &&
                  "static" === m.css(e, "position");

                )
                  e = e.offsetParent;
                return e || Qt;
              });
            },
          }),
          m.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = /Y/.test(t);
              m.fn[e] = function (r) {
                return Y(
                  this,
                  function (e, r, i) {
                    var o = Kt(e);
                    return void 0 === i
                      ? o
                        ? t in o
                          ? o[t]
                          : o.document.documentElement[r]
                        : e[r]
                      : void (o
                          ? o.scrollTo(
                              n ? m(o).scrollLeft() : i,
                              n ? i : m(o).scrollTop()
                            )
                          : (e[r] = i));
                  },
                  e,
                  r,
                  arguments.length,
                  null
                );
              };
            }
          ),
          m.each(["top", "left"], function (e, t) {
            m.cssHooks[t] = Be(g.pixelPosition, function (e, n) {
              return n
                ? ((n = Me(e, t)), Oe.test(n) ? m(e).position()[t] + "px" : n)
                : void 0;
            });
          }),
          m.each({ Height: "height", Width: "width" }, function (e, t) {
            m.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                m.fn[r] = function (r, i) {
                  var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                  return Y(
                    this,
                    function (t, n, r) {
                      var i;
                      return m.isWindow(t)
                        ? t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            i["scroll" + e],
                            t.body["offset" + e],
                            i["offset" + e],
                            i["client" + e]
                          ))
                        : void 0 === r
                        ? m.css(t, n, a)
                        : m.style(t, n, r, a);
                    },
                    t,
                    o ? r : void 0,
                    o,
                    null
                  );
                };
              }
            );
          }),
          (m.fn.size = function () {
            return this.length;
          }),
          (m.fn.andSelf = m.fn.addBack),
          n(13) &&
            (void 0 ===
              (r = function () {
                return m;
              }.apply(t, [])) ||
              (e.exports = r));
        var Zt = i.jQuery,
          en = i.$;
        return (
          (m.noConflict = function (e) {
            return (
              i.$ === m && (i.$ = en), e && i.jQuery === m && (i.jQuery = Zt), m
            );
          }),
          typeof o === F && (i.jQuery = i.$ = m),
          m
        );
      }),
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = i.document
            ? o(i, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return o(e);
              })
        : o(i);
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  ,
  ,
  function (e, t, n) {
    (function (e) {
      (org.ekstep.service.extcontent =
        new (org.ekstep.service.mainService.extend({
          init: function () {},
          initialize: function () {},
          api: {
            extContentMetaPath: "/v1/url/fetchmeta",
            getExtUrlMetaAPI: function () {
              return this.extContentMetaPath;
            },
          },
          getExtUrlMeta: function (e) {
            var t = this;
            return new Promise(function (n, r) {
              data = JSON.stringify({ request: { url: e } });
              var i = t.api.getExtUrlMetaAPI();
              org.ekstep.service.renderer.callApi(
                i,
                "POST",
                {},
                data,
                function (e) {
                  e.error
                    ? console.info("err getExtUrlMeta() : ", e.error)
                    : n(e);
                }
              );
            });
          },
        }))()),
        (org.ekstep.service.exturlrenderer = org.ekstep.service.extcontent),
        org.ekstep.pluginframework.pluginManager.registerPlugin(
          {
            id: "org.ekstep.extcontentpreview",
            ver: "1.0",
            shortId: "org.eskstep.extcontentpreview",
            author: "Revathi P",
            description: "",
            publishedDate: "",
            renderer: {
              main: "renderer/plugin.js",
              dependencies: [
                { type: "js", src: "renderer/exturlservice.js" },
                { type: "css", src: "renderer/style.css" },
              ],
            },
          },
          org.ekstep.contentrenderer.baseLauncher.extend({
            _constants: {
              mimeType: ["text/x-url"],
              events: { launchEvent: "renderer:launch:extcontent" },
            },
            initLauncher: function () {
              EkstepRendererAPI.addEventListener(
                this._constants.events.launchEvent,
                this.start,
                this
              );
            },
            start: function () {
              var t = this,
                n =
                  (this._super(),
                  (windowContent = window.content),
                  this.reset(),
                  e(this.manifest.id).remove(),
                  document.createElement("div"));
              this.getPreviewFromURL(
                windowContent.artifactUrl,
                function (r, i) {
                  (n.innerHTML = i),
                    e(n).click(function (e) {
                      (urlArray = window.parent.location.pathname.split("/")),
                        setTimeout(function () {
                          var e = window.open(
                            window.location.origin + "/learn/redirect",
                            "_blank"
                          );
                          5 < urlArray.length &&
                          "learn" === urlArray[1] &&
                          "course" === urlArray[2]
                            ? (e.redirectUrl =
                                windowContent.artifactUrl +
                                "#&courseId=" +
                                urlArray[3] +
                                "#&batchId=" +
                                urlArray[4] +
                                "#&contentId=" +
                                windowContent.identifier)
                            : (e.redirectUrl =
                                windowContent.artifactUrl +
                                "#&contentId=" +
                                windowContent.identifier),
                            (e.timetobethere = 500);
                        }, 200);
                    }),
                    EkstepRendererAPI.dispatchEvent("renderer:splash:hide"),
                    t.addToGameArea(n);
                }
              );
            },
            getPreviewFromURL: function (e, t) {
              var n = this;
              org.ekstep.service.exturlrenderer
                .getExtUrlMeta(e)
                .then(function (e) {
                  e && e.result
                    ? t(null, n.generatePreview(e.result))
                    : t(null, n.generatePreview({}));
                })
                .catch(function (e) {
                  console.error("Failed: getExtUrlMeta()", e);
                });
            },
            generatePreview: function (e) {
              var t =
                "<div class='no-preview'><p> No Preview available </p></div>";
              return (
                e &&
                  e["og:title"] &&
                  e["og:description"] &&
                  ((image = e["og:image"]
                    ? "<img src='" + e["og:image"] + "' />"
                    : ""),
                  (t =
                    "<div class='item preview-link-content'><div class='left-content'><h2 class='grey-text'>" +
                    e["og:site_name"] +
                    "</h2><a class='calm'><span class='header'>" +
                    e["og:title"] +
                    "</span></a><p align='left'>" +
                    e["og:description"] +
                    "</p></div><div class='right-content'>" +
                    image +
                    "</div></div>")),
                t
              );
            },
            reset: function () {
              (this.currentIndex = 50), (this.totalIndex = 100);
            },
          })
        );
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e) {
      org.ekstep.pluginframework.pluginManager.registerPlugin(
        {
          id: "org.ekstep.htmlrenderer",
          ver: "1.0",
          shortId: "org.eskstep.htmlrenderer",
          author: "Manjunath Davanam",
          description: "",
          publishedDate: "",
          renderer: { main: "renderer/plugin.js" },
          dependencies: [],
        },
        org.ekstep.contentrenderer.baseLauncher.extend({
          s3_folders: {
            "application/vnd.ekstep.html-archive": "html/",
            "application/vnd.ekstep.h5p-archive": "h5p/",
          },
          heartBeatData: {},
          currentIndex: 50,
          totalIndex: 100,
          enableHeartBeatEvent: !0,
          _constants: {
            mimeType: [
              "application/vnd.ekstep.html-archive",
              "application/vnd.ekstep.h5p-archive",
            ],
            events: { launchEvent: "renderer:launch:html" },
          },
          initLauncher: function () {
            EkstepRendererAPI.addEventListener(
              this._constants.events.launchEvent,
              this.start,
              this
            );
          },
          start: function () {
            this._super(), (data = content), this.reset();
            var t = { env: window.cordova ? "app" : "portal", envpath: "dev" },
              n = EkstepRendererAPI.getGlobalConfig();
            (n =
              (isbrowserpreview ? this.getAsseturl(data) : n.basepath) +
              "/index.html?contentId=" +
              data.identifier +
              "&launchData=" +
              JSON.stringify(t) +
              "&appInfo=" +
              JSON.stringify(GlobalContext.config.appInfo)),
              ((isbrowserpreview && (n += "&flavor=t=" + getTime()),
              e(this.manifest.id).remove(),
              (t = document.createElement("iframe"))).src = n),
              this.validateSrc(n, t),
              EkstepRendererAPI.dispatchEvent("renderer:navigation:load", {
                tempName: "",
              }),
              setTimeout(function () {
                e("custom-previous-navigation").hide(),
                  e("custom-next-navigation").hide();
              }, 100);
          },
          validateSrc: function (e, t) {
            var n = this;
            org.ekstep.pluginframework.resourceManager.loadResource(
              e,
              "TEXT",
              function (e, r) {
                e
                  ? (showToaster(
                      "error",
                      "Sorry!!.. Unable to open the Game!",
                      { timeOut: 2e5 }
                    ),
                    EkstepRendererAPI.logErrorEvent(
                      "index.html file not found.",
                      { type: "content", action: "play", severity: "fatal" }
                    ))
                  : (EkstepRendererAPI.dispatchEvent("renderer:splash:hide"),
                    n.configOverlay(),
                    n.addToGameArea(t));
              }
            );
          },
          configOverlay: function () {
            setTimeout(function () {
              EkstepRendererAPI.dispatchEvent("renderer:overlay:show"),
                EkstepRendererAPI.dispatchEvent("renderer:stagereload:hide"),
                EkstepRendererAPI.dispatchEvent("renderer:next:hide"),
                EkstepRendererAPI.dispatchEvent("renderer:previous:hide");
            }, 100);
          },
          getAsseturl: function (e) {
            var t;
            return (
              (t =
                (t = EkstepRendererAPI.getGlobalConfig()).host +
                t.s3ContentHost +
                this.s3_folders[e.mimeType]) +
              ("Live" == e.status
                ? e.identifier + "-latest"
                : e.identifier + "-snapshot")
            );
          },
          end: function () {
            (this.currentIndex = 100), (this.totalIndex = 100), this._super();
          },
          contentProgress: function () {
            return this.progres(this.currentIndex, this.totalIndex);
          },
          reset: function () {
            (this.currentIndex = 50), (this.totalIndex = 100);
          },
          cleanUp: function () {
            this._super(),
              EkstepRendererAPI.dispatchEvent("renderer:next:show"),
              EkstepRendererAPI.dispatchEvent("renderer:previous:show");
          },
        })
      );
    }.call(this, n(0)));
  },
  function (e, t) {
    org.ekstep.pluginframework.pluginManager.registerPlugin(
      {
        id: "org.ekstep.genie",
        ver: "1.0",
        shortId: "org.eskstep.genie",
        author: "Manjunath Davanam",
        description: "",
        publishedDate: "",
        renderer: { main: "renderer/plugin.js" },
      },
      Plugin.extend({
        initialize: function () {
          app.compileProvider.directive("genie", [
            "$rootScope",
            function (e) {
              return {
                restrict: "E",
                template:
                  '<div ng-class="enableGenie ? \'genie-home\' : \'icon-opacity genie-home\'" role="button" aria-label="{{AppLables.exit}}" tabindex="0" aria-disabled="true" ng-click="goToGenie()"><img ng-src="{{imageBasePath}}icn_home.png"/><span> {{AppLables.exit}} </span></div>',
                link: function (e) {
                  (e.AppLables = AppLables),
                    (e.enableGenie = "undefined" != typeof cordova),
                    e.enableGenie &&
                      (e.goToGenie = function () {
                        EkstepRendererAPI.dispatchEvent(
                          "renderer:telemetry:end"
                        );
                        var e = _.isUndefined(Renderer)
                          ? " "
                          : Renderer.theme._currentStage;
                        TelemetryService.interact(
                          "TOUCH",
                          "gc_genie",
                          "TOUCH",
                          { stageId: e }
                        ),
                          exitApp();
                      });
                },
              };
            },
          ]);
        },
      })
    );
  },
  function (e, t, n) {
    (function (e) {
      org.ekstep.pluginframework.pluginManager.registerPlugin(
        {
          id: "org.ekstep.previousnavigation",
          ver: "1.0",
          shortId: "org.eskstep.previousnavigation",
          author: "Akash Gupta",
          description: "",
          publishedDate: "",
          renderer: { main: "renderer/plugin.js" },
        },
        Plugin.extend({
          _type: "navigation",
          initialize: function () {
            var t = this;
            app.compileProvider.directive("previousNavigation", [
              "$rootScope",
              "$compile",
              function (n, r) {
                return {
                  restrict: "E",
                  template: '<div id="nav-previous"></div>',
                  link: function (i, o) {
                    var a =
                        org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                          t._manifest.id,
                          t._manifest.ver,
                          "renderer/templates/default.html"
                        ),
                      s =
                        org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                          t._manifest.id,
                          t._manifest.ver,
                          "renderer/templates/top.html"
                        );
                    (i.changeNavigation = function (t) {
                      var n = "";
                      "navigationTop" === t.target.tempName
                        ? (n = s)
                        : ((n = a),
                          setTimeout(function () {
                            e("custom-previous-navigation").show();
                          }, 100)),
                        o.html("<div ng-include=\"'" + n + "'\"></div>").show(),
                        r(o.contents())(i);
                    }),
                      (i.changeValue = function (e) {
                        var t,
                          r,
                          o = EkstepRendererAPI.getGlobalConfig().overlay
                            .showPrevious
                            ? "on"
                            : "off";
                        switch (e.type) {
                          case "overlayPrevious":
                            t = e.target || o;
                            break;
                          case "renderer:previous:show":
                            t = "on";
                            break;
                          case "renderer:previous:hide":
                            t = "off";
                        }
                        "on" === t &&
                          ((r = EkstepRendererAPI.getStageParam("previous")),
                          (_.isUndefined(r) &&
                            ((t = "disable"),
                            !EkstepRendererAPI.isItemScene() ||
                              !EkstepRendererAPI.getCurrentController().hasPrevious())) ||
                            (t = "enable")),
                          (i.showOverlayPrevious = t),
                          n.safeApply();
                      }),
                      _.each(
                        [
                          "overlayPrevious",
                          "renderer:previous:show",
                          "renderer:previous:hide",
                        ],
                        function (e) {
                          EkstepRendererAPI.addEventListener(
                            e,
                            i.changeValue,
                            i
                          );
                        }
                      ),
                      EkstepRendererAPI.addEventListener(
                        "renderer:navigation:load",
                        i.changeNavigation,
                        i
                      );
                  },
                };
              },
            ]);
          },
        })
      );
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e) {
      org.ekstep.pluginframework.pluginManager.registerPlugin(
        {
          id: "org.ekstep.nextnavigation",
          ver: "1.0",
          shortId: "org.eskstep.nextnavigation",
          author: "Akash Gupta",
          description: "",
          publishedDate: "",
          renderer: { main: "renderer/plugin.js" },
        },
        Plugin.extend({
          _type: "nextNavigation",
          initialize: function () {
            var t = this;
            app.compileProvider.directive("nextNavigation", [
              "$rootScope",
              "$compile",
              function (n, r) {
                return {
                  restrict: "E",
                  template: '<div id="nav-next"></div>',
                  link: function (i, o) {
                    var a =
                        org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                          t._manifest.id,
                          t._manifest.ver,
                          "renderer/templates/default.html"
                        ),
                      s =
                        org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                          t._manifest.id,
                          t._manifest.ver,
                          "renderer/templates/top.html"
                        );
                    (i.changeNavigation = function (t) {
                      var n = "";
                      "navigationTop" === t.target.tempName
                        ? (n = s)
                        : ((n = a),
                          setTimeout(function () {
                            e("custom-next-navigation").show();
                          }, 100)),
                        o.html("<div ng-include=\"'" + n + "'\"></div>").show(),
                        r(o.contents())(i);
                    }),
                      (i.toggleNav = function (e) {
                        var t,
                          r = EkstepRendererAPI.getGlobalConfig().overlay
                            .showNext
                            ? "on"
                            : "off";
                        switch (e.type) {
                          case "renderer:next:show":
                            t = "on";
                            break;
                          case "renderer:next:hide":
                            t = "off";
                            break;
                          case "overlayNext":
                            t = e.target || r;
                        }
                        (i.showOverlayNext = t), n.safeApply();
                      }),
                      _.each(
                        [
                          "overlayNext",
                          "renderer:next:show",
                          "renderer:next:hide",
                        ],
                        function (e) {
                          EkstepRendererAPI.addEventListener(e, i.toggleNav, i);
                        }
                      ),
                      EkstepRendererAPI.addEventListener(
                        "renderer:navigation:load",
                        i.changeNavigation,
                        i
                      );
                  },
                };
              },
            ]);
          },
        })
      );
    }.call(this, n(0)));
  },
  function (e, t) {
    var n =
      n ||
      (function (e, t) {
        var n = {},
          r = (n.lib = {}),
          i = function () {},
          o = (r.Base = {
            extend: function (e) {
              i.prototype = this;
              var t = new i();
              return (
                e && t.mixIn(e),
                t.hasOwnProperty("init") ||
                  (t.init = function () {
                    t.$super.init.apply(this, arguments);
                  }),
                (t.init.prototype = t),
                (t.$super = this),
                t
              );
            },
            create: function () {
              var e = this.extend();
              return e.init.apply(e, arguments), e;
            },
            init: function () {},
            mixIn: function (e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
              e.hasOwnProperty("toString") && (this.toString = e.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            },
          }),
          a = (r.WordArray = o.extend({
            init: function (e, t) {
              (e = this.words = e || []),
                (this.sigBytes = void 0 != t ? t : 4 * e.length);
            },
            toString: function (e) {
              return (e || l).stringify(this);
            },
            concat: function (e) {
              var t = this.words,
                n = e.words,
                r = this.sigBytes;
              if (((e = e.sigBytes), this.clamp(), r % 4))
                for (var i = 0; i < e; i++)
                  t[(r + i) >>> 2] |=
                    ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                    (24 - ((r + i) % 4) * 8);
              else if (65535 < n.length)
                for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
              else t.push.apply(t, n);
              return (this.sigBytes += e), this;
            },
            clamp: function () {
              var t = this.words,
                n = this.sigBytes;
              (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                (t.length = e.ceil(n / 4));
            },
            clone: function () {
              var e = o.clone.call(this);
              return (e.words = this.words.slice(0)), e;
            },
            random: function (t) {
              for (var n = [], r = 0; r < t; r += 4)
                n.push((4294967296 * e.random()) | 0);
              return new a.init(n, t);
            },
          })),
          s = (n.enc = {}),
          l = (s.Hex = {
            stringify: function (e) {
              var t = e.words;
              e = e.sigBytes;
              for (var n = [], r = 0; r < e; r++) {
                var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
              }
              return n.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], r = 0; r < t; r += 2)
                n[r >>> 3] |=
                  parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
              return new a.init(n, t / 2);
            },
          }),
          c = (s.Latin1 = {
            stringify: function (e) {
              var t = e.words;
              e = e.sigBytes;
              for (var n = [], r = 0; r < e; r++)
                n.push(
                  String.fromCharCode((t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255)
                );
              return n.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], r = 0; r < t; r++)
                n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
              return new a.init(n, t);
            },
          }),
          u = (s.Utf8 = {
            stringify: function (e) {
              try {
                return decodeURIComponent(escape(c.stringify(e)));
              } catch (e) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (e) {
              return c.parse(unescape(encodeURIComponent(e)));
            },
          }),
          d = (r.BufferedBlockAlgorithm = o.extend({
            reset: function () {
              (this._data = new a.init()), (this._nDataBytes = 0);
            },
            _append: function (e) {
              "string" == typeof e && (e = u.parse(e)),
                this._data.concat(e),
                (this._nDataBytes += e.sigBytes);
            },
            _process: function (t) {
              var n = this._data,
                r = n.words,
                i = n.sigBytes,
                o = this.blockSize,
                s = i / (4 * o);
              if (
                ((t =
                  (s = t
                    ? e.ceil(s)
                    : e.max((0 | s) - this._minBufferSize, 0)) * o),
                (i = e.min(4 * t, i)),
                t)
              ) {
                for (var l = 0; l < t; l += o) this._doProcessBlock(r, l);
                (l = r.splice(0, t)), (n.sigBytes -= i);
              }
              return new a.init(l, i);
            },
            clone: function () {
              var e = o.clone.call(this);
              return (e._data = this._data.clone()), e;
            },
            _minBufferSize: 0,
          }));
        r.Hasher = d.extend({
          cfg: o.extend(),
          init: function (e) {
            (this.cfg = this.cfg.extend(e)), this.reset();
          },
          reset: function () {
            d.reset.call(this), this._doReset();
          },
          update: function (e) {
            return this._append(e), this._process(), this;
          },
          finalize: function (e) {
            return e && this._append(e), this._doFinalize();
          },
          blockSize: 16,
          _createHelper: function (e) {
            return function (t, n) {
              return new e.init(n).finalize(t);
            };
          },
          _createHmacHelper: function (e) {
            return function (t, n) {
              return new p.HMAC.init(e, n).finalize(t);
            };
          },
        });
        var p = (n.algo = {});
        return n;
      })(Math);
    !(function (e) {
      function t(e, t, n, r, i, o, a) {
        return (
          (((e = e + ((t & n) | (~t & r)) + i + a) << o) | (e >>> (32 - o))) + t
        );
      }
      function r(e, t, n, r, i, o, a) {
        return (
          (((e = e + ((t & r) | (n & ~r)) + i + a) << o) | (e >>> (32 - o))) + t
        );
      }
      function i(e, t, n, r, i, o, a) {
        return (((e = e + (t ^ n ^ r) + i + a) << o) | (e >>> (32 - o))) + t;
      }
      function o(e, t, n, r, i, o, a) {
        return (((e = e + (n ^ (t | ~r)) + i + a) << o) | (e >>> (32 - o))) + t;
      }
      for (
        var a = n,
          s = (c = a.lib).WordArray,
          l = c.Hasher,
          c = a.algo,
          u = [],
          d = 0;
        64 > d;
        d++
      )
        u[d] = (4294967296 * e.abs(e.sin(d + 1))) | 0;
      (c = c.MD5 =
        l.extend({
          _doReset: function () {
            this._hash = new s.init([
              1732584193, 4023233417, 2562383102, 271733878,
            ]);
          },
          _doProcessBlock: function (e, n) {
            for (var a = 0; 16 > a; a++) {
              var s = e[(d = n + a)];
              e[d] =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8)));
            }
            a = this._hash.words;
            var l,
              c,
              d = e[n + 0],
              p = ((s = e[n + 1]), e[n + 2]),
              f = e[n + 3],
              h = e[n + 4],
              g = e[n + 5],
              v = e[n + 6],
              m = e[n + 7],
              y = e[n + 8],
              x = e[n + 9],
              b = e[n + 10],
              w = e[n + 11],
              k = e[n + 12],
              T = e[n + 13],
              C = e[n + 14],
              E = e[n + 15],
              A = a[0],
              N = o(
                (N = o(
                  (N = o(
                    (N = o(
                      (N = i(
                        (N = i(
                          (N = i(
                            (N = i(
                              (N = r(
                                (N = r(
                                  (N = r(
                                    (N = r(
                                      (N = t(
                                        (N = t(
                                          (N = t(
                                            (N = t(
                                              (N = a[1]),
                                              (c = t(
                                                (c = a[2]),
                                                (l = t(
                                                  (l = a[3]),
                                                  (A = t(
                                                    A,
                                                    N,
                                                    c,
                                                    l,
                                                    d,
                                                    7,
                                                    u[0]
                                                  )),
                                                  N,
                                                  c,
                                                  s,
                                                  12,
                                                  u[1]
                                                )),
                                                A,
                                                N,
                                                p,
                                                17,
                                                u[2]
                                              )),
                                              l,
                                              A,
                                              f,
                                              22,
                                              u[3]
                                            )),
                                            (c = t(
                                              c,
                                              (l = t(
                                                l,
                                                (A = t(A, N, c, l, h, 7, u[4])),
                                                N,
                                                c,
                                                g,
                                                12,
                                                u[5]
                                              )),
                                              A,
                                              N,
                                              v,
                                              17,
                                              u[6]
                                            )),
                                            l,
                                            A,
                                            m,
                                            22,
                                            u[7]
                                          )),
                                          (c = t(
                                            c,
                                            (l = t(
                                              l,
                                              (A = t(A, N, c, l, y, 7, u[8])),
                                              N,
                                              c,
                                              x,
                                              12,
                                              u[9]
                                            )),
                                            A,
                                            N,
                                            b,
                                            17,
                                            u[10]
                                          )),
                                          l,
                                          A,
                                          w,
                                          22,
                                          u[11]
                                        )),
                                        (c = t(
                                          c,
                                          (l = t(
                                            l,
                                            (A = t(A, N, c, l, k, 7, u[12])),
                                            N,
                                            c,
                                            T,
                                            12,
                                            u[13]
                                          )),
                                          A,
                                          N,
                                          C,
                                          17,
                                          u[14]
                                        )),
                                        l,
                                        A,
                                        E,
                                        22,
                                        u[15]
                                      )),
                                      (c = r(
                                        c,
                                        (l = r(
                                          l,
                                          (A = r(A, N, c, l, s, 5, u[16])),
                                          N,
                                          c,
                                          v,
                                          9,
                                          u[17]
                                        )),
                                        A,
                                        N,
                                        w,
                                        14,
                                        u[18]
                                      )),
                                      l,
                                      A,
                                      d,
                                      20,
                                      u[19]
                                    )),
                                    (c = r(
                                      c,
                                      (l = r(
                                        l,
                                        (A = r(A, N, c, l, g, 5, u[20])),
                                        N,
                                        c,
                                        b,
                                        9,
                                        u[21]
                                      )),
                                      A,
                                      N,
                                      E,
                                      14,
                                      u[22]
                                    )),
                                    l,
                                    A,
                                    h,
                                    20,
                                    u[23]
                                  )),
                                  (c = r(
                                    c,
                                    (l = r(
                                      l,
                                      (A = r(A, N, c, l, x, 5, u[24])),
                                      N,
                                      c,
                                      C,
                                      9,
                                      u[25]
                                    )),
                                    A,
                                    N,
                                    f,
                                    14,
                                    u[26]
                                  )),
                                  l,
                                  A,
                                  y,
                                  20,
                                  u[27]
                                )),
                                (c = r(
                                  c,
                                  (l = r(
                                    l,
                                    (A = r(A, N, c, l, T, 5, u[28])),
                                    N,
                                    c,
                                    p,
                                    9,
                                    u[29]
                                  )),
                                  A,
                                  N,
                                  m,
                                  14,
                                  u[30]
                                )),
                                l,
                                A,
                                k,
                                20,
                                u[31]
                              )),
                              (c = i(
                                c,
                                (l = i(
                                  l,
                                  (A = i(A, N, c, l, g, 4, u[32])),
                                  N,
                                  c,
                                  y,
                                  11,
                                  u[33]
                                )),
                                A,
                                N,
                                w,
                                16,
                                u[34]
                              )),
                              l,
                              A,
                              C,
                              23,
                              u[35]
                            )),
                            (c = i(
                              c,
                              (l = i(
                                l,
                                (A = i(A, N, c, l, s, 4, u[36])),
                                N,
                                c,
                                h,
                                11,
                                u[37]
                              )),
                              A,
                              N,
                              m,
                              16,
                              u[38]
                            )),
                            l,
                            A,
                            b,
                            23,
                            u[39]
                          )),
                          (c = i(
                            c,
                            (l = i(
                              l,
                              (A = i(A, N, c, l, T, 4, u[40])),
                              N,
                              c,
                              d,
                              11,
                              u[41]
                            )),
                            A,
                            N,
                            f,
                            16,
                            u[42]
                          )),
                          l,
                          A,
                          v,
                          23,
                          u[43]
                        )),
                        (c = i(
                          c,
                          (l = i(
                            l,
                            (A = i(A, N, c, l, x, 4, u[44])),
                            N,
                            c,
                            k,
                            11,
                            u[45]
                          )),
                          A,
                          N,
                          E,
                          16,
                          u[46]
                        )),
                        l,
                        A,
                        p,
                        23,
                        u[47]
                      )),
                      (c = o(
                        c,
                        (l = o(
                          l,
                          (A = o(A, N, c, l, d, 6, u[48])),
                          N,
                          c,
                          m,
                          10,
                          u[49]
                        )),
                        A,
                        N,
                        C,
                        15,
                        u[50]
                      )),
                      l,
                      A,
                      g,
                      21,
                      u[51]
                    )),
                    (c = o(
                      c,
                      (l = o(
                        l,
                        (A = o(A, N, c, l, k, 6, u[52])),
                        N,
                        c,
                        f,
                        10,
                        u[53]
                      )),
                      A,
                      N,
                      b,
                      15,
                      u[54]
                    )),
                    l,
                    A,
                    s,
                    21,
                    u[55]
                  )),
                  (c = o(
                    c,
                    (l = o(
                      l,
                      (A = o(A, N, c, l, y, 6, u[56])),
                      N,
                      c,
                      E,
                      10,
                      u[57]
                    )),
                    A,
                    N,
                    v,
                    15,
                    u[58]
                  )),
                  l,
                  A,
                  T,
                  21,
                  u[59]
                )),
                (c = o(
                  c,
                  (l = o(
                    l,
                    (A = o(A, N, c, l, h, 6, u[60])),
                    N,
                    c,
                    w,
                    10,
                    u[61]
                  )),
                  A,
                  N,
                  p,
                  15,
                  u[62]
                )),
                l,
                A,
                x,
                21,
                u[63]
              );
            (a[0] = (a[0] + A) | 0),
              (a[1] = (a[1] + N) | 0),
              (a[2] = (a[2] + c) | 0),
              (a[3] = (a[3] + l) | 0);
          },
          _doFinalize: function () {
            var t = this._data,
              n = t.words,
              r = 8 * this._nDataBytes,
              i = 8 * t.sigBytes;
            n[i >>> 5] |= 128 << (24 - (i % 32));
            var o = e.floor(r / 4294967296);
            for (
              n[15 + (((i + 64) >>> 9) << 4)] =
                (16711935 & ((o << 8) | (o >>> 24))) |
                (4278255360 & ((o << 24) | (o >>> 8))),
                n[14 + (((i + 64) >>> 9) << 4)] =
                  (16711935 & ((r << 8) | (r >>> 24))) |
                  (4278255360 & ((r << 24) | (r >>> 8))),
                t.sigBytes = 4 * (n.length + 1),
                this._process(),
                n = (t = this._hash).words,
                r = 0;
              4 > r;
              r++
            )
              (i = n[r]),
                (n[r] =
                  (16711935 & ((i << 8) | (i >>> 24))) |
                  (4278255360 & ((i << 24) | (i >>> 8))));
            return t;
          },
          clone: function () {
            var e = l.clone.call(this);
            return (e._hash = this._hash.clone()), e;
          },
        })),
        (a.MD5 = l._createHelper(c)),
        (a.HmacMD5 = l._createHmacHelper(c));
    })(Math),
      (window.CryptoJS = n),
      org.ekstep.pluginframework.pluginManager.registerPlugin(
        {
          id: "org.ekstep.telemetrysync",
          ver: "1.0",
          shortId: "org.ekstep.telemetrysync",
          author: "Krushanu",
          description: "",
          publishedDate: "",
          renderer: {
            main: "renderer/plugin.js",
            dependencies: [
              { type: "js", src: "renderer/libs/detectClient.js" },
              { type: "js", src: "renderer/libs/md5.js" },
            ],
          },
        },
        Plugin.extend({
          _type: "telemetry",
          _isContainer: !1,
          _render: !0,
          _teleData: [],
          _maxTeleInstance: 10,
          _requiredFields: {},
          initPlugin: function (e) {
            console.log("Telemetry plugin init done !!!");
          },
          initialize: function () {
            EkstepRendererAPI.addEventListener(
              "telemetryPlugin:intialize",
              this.initializeTelemetryPlugin,
              this
            );
          },
          initializeTelemetryPlugin: function () {
            var e, t, r, i, o, a, s;
            "undefined" == typeof cordova &&
              (this.listenTelementryEvent(),
              (o = navigator.userAgent),
              (a = navigator.appName),
              (s = "" + parseFloat(navigator.appVersion)),
              -1 != (r = o.indexOf("Opera"))
                ? ((a = "opera"),
                  (s = o.substring(r + 6)),
                  -1 != (r = o.indexOf("Version")) && (s = o.substring(r + 8)))
                : -1 != (r = o.indexOf("MSIE"))
                ? ((a = "IE"), (s = o.substring(r + 5)))
                : -1 != (r = o.indexOf("Chrome"))
                ? ((a = "chrome"), (s = o.substring(r + 7)))
                : -1 != (r = o.indexOf("Safari"))
                ? ((a = "safari"),
                  (s = o.substring(r + 7)),
                  -1 != (r = o.indexOf("Version")) && (s = o.substring(r + 8)))
                : -1 != (r = o.indexOf("Firefox")) &&
                  ((a = "firefox"), (s = o.substring(r + 8))),
              -1 != (i = s.indexOf(";")) && (s = s.substring(0, i)),
              -1 != (i = s.indexOf(" ")) && (s = s.substring(0, i)),
              (e = { browser: a, browserver: s, os: navigator.platform }),
              (this._requiredFields = {}),
              (t = EkstepRendererAPI.getGlobalConfig()),
              (this._requiredFields.uid = t.context.uid || t.uid),
              (this._requiredFields.sid =
                t.context.sid || n.MD5(Math.random().toString()).toString()),
              (this._requiredFields.did =
                t.context.did || n.MD5(JSON.stringify(e)).toString()));
          },
          listenTelementryEvent: function () {
            var e = this;
            EventBus.addEventListener("telemetryEvent", function (t) {
              (t = _.isObject(t.target) ? t.target : JSON.parse(t.target)),
                3 <= parseInt(t.ver) &&
                  ((t = e.appendRequiredFields(t)), e.addToQueue(t));
            });
          },
          appendRequiredFields: function (e) {
            return (
              (e.actor.id = e.actor.id || this._requiredFields.uid),
              (e.context.did = e.context.did || this._requiredFields.did),
              (e.context.sid = e.context.sid || this._requiredFields.sid),
              e
            );
          },
          sendTelemetry: function (e) {
            var t = new Date().getTime(),
              n =
                ((t = {
                  id: "ekstep.telemetry",
                  ver: TelemetryService._version,
                  ets: t,
                  events: e,
                }),
                (e = EkstepRendererAPI.getGlobalConfig()),
                {});
            _.isUndefined(e.context.authToken) ||
              (n.Authorization = "Bearer " + e.context.authToken),
              org.ekstep.service.renderer
                .sendTelemetry(t, n)
                .then(function (e) {
                  console.log("Telemetry API success", e);
                });
          },
          addToQueue: function (e) {
            this._teleData.push(e),
              ("END" == e.eid.toUpperCase() ||
                this._teleData.length >= this._maxTeleInstance) &&
                ((e = _.clone(this._teleData)),
                (this._teleData = []),
                this.sendTelemetry(e));
          },
        })
      );
  },
  function (e, t) {
    app.compileProvider.directive("alert", [
      "$rootScope",
      "$compile",
      function (e, t) {
        return {
          restrict: "E",
          template: "<div ng-include='getAlertPluginTemplate()' ></div>",
          link: function (e, t, n, r) {
            var i = EkstepRendererAPI.resolvePluginResource(
                "org.ekstep.alert",
                "1.0",
                "assets/up.png"
              ),
              o = EkstepRendererAPI.resolvePluginResource(
                "org.ekstep.alert",
                "1.0",
                "assets/down.png"
              );
            (e.title = ""),
              (e.text = ""),
              (e.type = null),
              (e.showCancelButton = !0),
              (e.detailBtnText = "Details"),
              (e.okBtnText = "Exit"),
              (e.copyAnswer = "Copy"),
              (e.callback = function () {}),
              (e.showDetailsPopUp = !1),
              (e.rendererVersion =
                EkstepRendererAPI.getGlobalConfig().canvasVersion),
              (e.detailsIcon = o),
              (e.init = function () {
                EkstepRendererAPI.addEventListener(
                  "renderer:alert:show",
                  e.showAlert
                ),
                  EkstepRendererAPI.addEventListener(
                    "renderer:alert:hide",
                    e.hidePopup
                  );
              }),
              (e.showAlert = function (t, n) {
                (e.text = n.text),
                  (e.details = n.data),
                  (e.showPopup = !0),
                  (e.okBtnText = n.okBtnText ? n.okBtnText : e.okBtnText),
                  (e.callback = n.callback ? n.callback : e.callback),
                  e.safeApply();
              }),
              (e.hidePopup = function () {
                e.callback(),
                  (e.showPopup = !1),
                  "undefined" != typeof cordova && exitApp(),
                  e.safeApply();
              }),
              (e.showDetails = function () {
                e.showDetailsPopUp
                  ? ((e.showDetailsPopUp = !1),
                    (e.copyAnswer = "Copy"),
                    (e.detailsIcon = o))
                  : ((e.showDetailsPopUp = !0), (e.detailsIcon = i)),
                  e.safeApply();
              }),
              (e.hideDetails = function () {
                (e.showDetailsPopUp = !1), e.safeApply();
              }),
              (e.getUrlLink = function () {
                $("#copyTarget").select();
                try {
                  var t = document.execCommand("copy");
                  e.copyAnswer = t ? "Copied" : "Unable to copy!";
                } catch (t) {
                  e.copyAnswer = "Unsupported Browser!";
                }
              }),
              (e.getAlertPluginTemplate = function () {
                return EkstepRendererAPI.getPluginObjs("org.ekstep.alert")
                  ._templatePath;
              });
          },
        };
      },
    ]);
  },
  function (e, t) {
    e.exports =
      "\x3c!-- The Modal --\x3e\n<ng-template id=org.ekstep.alert>\n    <style>.container{margin:20px auto;width:380px}.container .notif{margin:10px 0}.notif{position:relative;padding:25px 30px 25px 100px;min-height:50px;line-height:22px;background:#eeeeef;border-radius:10px}.notif:before{content:'';position:absolute;top:30px;left:34px;width:40px;height:40px;border:5px solid;border-radius:25px}.notif p{font-size:11px;color:#666}.notif-title{margin:0 0 5px;font-size:14px;font-weight:700;color:#333}.notif-title:after,.notif-title:before{content:'';position:absolute;background:#fff;border-radius:2px}.notif-notice:before{background:#a7d155;border-color:#8fb14f}.notif-notice .notif-title:after,.notif-notice .notif-title:before{top:44px;left:55px;width:4px;height:12px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.notif-notice .notif-title:after{top:50px;left:48px;width:8px;height:4px}.notif-alert:before{background:#e34f4f;border-color:#c14343}.notif-alert .notif-title:after,.notif-alert .notif-title:before{top:43px;left:53px;width:4px;height:14px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.notif-alert .notif-title:after{top:48px;left:48px;width:14px;height:4px}.notif-warn:before{background:#f1e472;border-color:#cec260}.notif-warn .notif-title:after,.notif-warn .notif-title:before{top:42px;left:53px;width:4px;height:11px;background:#5c562b}.notif-warn .notif-title:after{top:54px;height:4px}.notif-controls{position:absolute;top:0;right:0;height:16px;padding:4px 3px 5px;border-width:0 0 1px 1px;border-radius:0 2px}.notif-controls>a{position:relative;float:left;margin:0 1px;width:16px;height:16px;font:0/0 serif;text-shadow:none;color:transparent}.notif-minimize:before{content:'';position:absolute;top:11px;left:4px;width:7px;height:2px;background:#bbb}.notif-minimize:hover:before{background:#888}.notif-zoom:before{content:'';position:absolute;top:6px;left:3px;width:5px;height:3px;border:2px solid #bbb}.notif-zoom:hover:before{border-color:#888}.notif-close:after,.notif-close:before{content:'';position:absolute;top:4px;left:7px;width:2px;height:10px;background:#bbb;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.notif-close:after{top:8px;left:3px;width:10px;height:2px}.notif-close:hover:after,.notif-close:hover:before{background:#888}.lt-ie9 .notif-notice .notif-title:before{content:'\\2714';display:block;top:25px;left:30px;width:50px;font:bold 18px/50px \"Arial Unicode MS\";color:#fff;text-align:center;background:0 0}.lt-ie9 .notif-notice .notif-title:after{display:none}.lt-ie9 .notif-alert .notif-title:before{content:'\\2716';display:block;top:25px;left:30px;width:50px;font:bold 17px/50px \"Arial Unicode MS\";color:#fff;text-align:center;background:0 0}.lt-ie9 .notif-alert .notif-title:after{display:none}.lt-ie9 .notif-close:before{content:'\\2716';display:block;top:0;left:0;width:16px;font:11px/19px 'Arial Unicode MS';color:#bbb;text-align:center;background:0 0}.lt-ie9 .notif-close:after{display:none}.lt-ie9 .notif-close:hover:before{color:#999}.error-showContent{overflow:auto;height:110px}.z-index-100001{z-index:100001!important}.error-action-buttons button{width:100%;margin-left:15%}.error-details-image{width:152%;float:left;margin-left:-88%}.error-showContent textarea{height:100%;width:100%}.error-details-button .left{padding-right:12%;margin-left:-27%}</style>\n\n    <div id=alertModal class=\"popup z-index-100001\" ng-init=init() ng-show=showPopup>\n        <div class=popup-overlay ng-click=hidePopup()>\n        </div>\n        <div class=popup-full-body>\n            <div class=container>\n                <section class=\"notif notif-notice\" ng-show=false>\n                    <h6 class=notif-title>Congratulations!</h6>\n                    <p>{{text}}</p>\n                    <div class=notif-controls>\n                        <a href=# class=notif-close>Close</a>\n                    </div>\n                </section>\n                <section class=\"notif notif-alert\" ng-show=true>\n                    <h6 class=notif-title>Error!</h6>\n                    <p>{{text}}</p>\n                    <div class=notif-controls>\n                        <a href=# ng-click=hidePopup(); class=notif-close>Close</a>\n                    </div>\n                    <div class=\"row row-center error-action-buttons\">\n                        <div class=\"col col-10\">\n                            <image class=error-details-image ng-click=showDetails(); ng-src={{detailsIcon}}></image>\n                        </div>\n                        <div class=\"col error-details-button\">\n                            <a ng-click=showDetails(); class=left>Details</a>\n                        </div>\n                        <div class=col>\n                            <button ng-show=showDetailsPopUp id=copyButton ng-click=getUrlLink();>{{copyAnswer}}</button>\n                        </div>\n                        <div class=col>\n                            <button ng-click=hidePopup();>{{okBtnText}}</button>\n                        </div>\n                    </div>\n                    <div id=popup-details-container ng-if=showDetailsPopUp>\n                        <p class=error-showContent><textarea readonly=readonly id=copyTarget>Renderer Version: {{rendererVersion}}&#13;&#10;{{details}}</textarea>\n                    </p></div>\n                </section>\n                <section class=\"notif notif-warn\" ng-show=false>\n                    <h6 class=notif-title>Warning!</h6>\n                    <p>{{text}}</p>\n                    <div class=notif-controls>\n                        <a href=# class=notif-close>Close</a>\n                    </div>\n                </section>\n            </div>\n        </div>\n    </div>\n</ng-template>";
  },
  function (e, t, n) {
    org.ekstep.pluginframework.pluginManager.registerPlugin(
      {
        id: "org.ekstep.alert",
        ver: "1.0",
        shortId: "org.ekstep.alert",
        author: "Gourav More",
        description: "",
        publishedDate: "",
        renderer: {
          main: "renderer/plugin.js",
          views: [
            {
              template: "./templates/alert-popup.html",
              controller: "./controller/alert.js",
            },
          ],
        },
      },
      Plugin.extend({
        _templatePath: void 0,
        _type: "alert",
        initialize: function () {
          (this._templatePath =
            org.ekstep.pluginframework.pluginManager.resolvePluginResource(
              this._manifest.id,
              this._manifest.ver,
              "renderer/templates/alert-popup.html"
            )),
            (this.controllerPath =
              org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                this._manifest.id,
                this._manifest.ver,
                "renderer/controller/alert.js"
              )),
            org.ekstep.service.controller.loadNgModules(n(11), n(10), !0);
        },
      })
    );
  },
  function (e, t) {
    (function (t) {
      e.exports = t;
    }.call(this, {}));
  },
  function (e, t, n) {
    var r, i;
    n(1),
      (r = [n(0)]),
      void 0 ===
        (i = function (e) {
          return (function () {
            function t(t, n) {
              return (
                t || (t = a()),
                (l = e("#" + t.containerId)).length
                  ? l
                  : (n &&
                      (l = (function (t) {
                        return (
                          (l = e("<div/>")
                            .attr("id", t.containerId)
                            .addClass(t.positionClass)
                            .attr("aria-live", "polite")
                            .attr("role", "alert")).appendTo(e(t.target)),
                          l
                        );
                      })(t)),
                    l)
              );
            }
            function n(t) {
              for (var n = l.children(), i = n.length - 1; i >= 0; i--)
                r(e(n[i]), t);
            }
            function r(t, n, r) {
              var i = !(!r || !r.force) && r.force;
              return !(
                !t ||
                (!i && 0 !== e(":focus", t).length) ||
                (t[n.hideMethod]({
                  duration: n.hideDuration,
                  easing: n.hideEasing,
                  complete: function () {
                    s(t);
                  },
                }),
                0)
              );
            }
            function i(e) {
              c && c(e);
            }
            function o(n) {
              function r(e) {
                return (
                  null == e && (e = ""),
                  new String(e)
                    .replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                );
              }
              function o(t) {
                var n =
                    t && !1 !== c.closeMethod ? c.closeMethod : c.hideMethod,
                  r =
                    t && !1 !== c.closeDuration
                      ? c.closeDuration
                      : c.hideDuration,
                  o = t && !1 !== c.closeEasing ? c.closeEasing : c.hideEasing;
                return !e(":focus", h).length || t
                  ? (clearTimeout(x.intervalId),
                    h[n]({
                      duration: r,
                      easing: o,
                      complete: function () {
                        s(h),
                          c.onHidden && "hidden" !== b.state && c.onHidden(),
                          (b.state = "hidden"),
                          (b.endTime = new Date()),
                          i(b);
                      },
                    }))
                  : void 0;
              }
              var c = a(),
                p = n.iconClass || c.iconClass;
              if (
                (void 0 !== n.optionsOverride &&
                  ((c = e.extend(c, n.optionsOverride)),
                  (p = n.optionsOverride.iconClass || p)),
                !(function (e, t) {
                  if (c.preventDuplicates) {
                    if (t.message === u) return !0;
                    u = t.message;
                  }
                  return !1;
                })(0, n))
              ) {
                d++, (l = t(c, !0));
                var f = null,
                  h = e("<div/>"),
                  g = e("<div/>"),
                  v = e("<div/>"),
                  m = e("<div/>"),
                  y = e(c.closeHtml),
                  x = { intervalId: null, hideEta: null, maxHideTime: null },
                  b = {
                    toastId: d,
                    state: "visible",
                    startTime: new Date(),
                    options: c,
                    map: n,
                  };
                return (
                  n.iconClass && h.addClass(c.toastClass).addClass(p),
                  n.title &&
                    (g
                      .append(c.escapeHtml ? r(n.title) : n.title)
                      .addClass(c.titleClass),
                    h.append(g)),
                  n.message &&
                    (v
                      .append(c.escapeHtml ? r(n.message) : n.message)
                      .addClass(c.messageClass),
                    h.append(v)),
                  c.closeButton &&
                    (y.addClass("toast-close-button").attr("role", "button"),
                    h.prepend(y)),
                  c.progressBar && (m.addClass("toast-progress"), h.prepend(m)),
                  c.newestOnTop ? l.prepend(h) : l.append(h),
                  h.hide(),
                  h[c.showMethod]({
                    duration: c.showDuration,
                    easing: c.showEasing,
                    complete: c.onShown,
                  }),
                  c.timeOut > 0 &&
                    ((f = setTimeout(o, c.timeOut)),
                    (x.maxHideTime = parseFloat(c.timeOut)),
                    (x.hideEta = new Date().getTime() + x.maxHideTime),
                    c.progressBar &&
                      (x.intervalId = setInterval(function () {
                        var e =
                          ((x.hideEta - new Date().getTime()) / x.maxHideTime) *
                          100;
                        m.width(e + "%");
                      }, 10))),
                  h.hover(
                    function () {
                      clearTimeout(f),
                        (x.hideEta = 0),
                        h.stop(!0, !0)[c.showMethod]({
                          duration: c.showDuration,
                          easing: c.showEasing,
                        });
                    },
                    function () {
                      (c.timeOut > 0 || c.extendedTimeOut > 0) &&
                        ((f = setTimeout(o, c.extendedTimeOut)),
                        (x.maxHideTime = parseFloat(c.extendedTimeOut)),
                        (x.hideEta = new Date().getTime() + x.maxHideTime));
                    }
                  ),
                  !c.onclick && c.tapToDismiss && h.click(o),
                  c.closeButton &&
                    y &&
                    y.click(function (e) {
                      e.stopPropagation
                        ? e.stopPropagation()
                        : void 0 !== e.cancelBubble &&
                          !0 !== e.cancelBubble &&
                          (e.cancelBubble = !0),
                        o(!0);
                    }),
                  c.onclick &&
                    h.click(function (e) {
                      c.onclick(e), o();
                    }),
                  i(b),
                  c.debug && console && console.log(b),
                  h
                );
              }
            }
            function a() {
              return e.extend(
                {},
                {
                  tapToDismiss: !0,
                  toastClass: "toast",
                  containerId: "toast-container",
                  debug: !1,
                  showMethod: "fadeIn",
                  showDuration: 300,
                  showEasing: "swing",
                  onShown: void 0,
                  hideMethod: "fadeOut",
                  hideDuration: 1e3,
                  hideEasing: "swing",
                  onHidden: void 0,
                  closeMethod: !1,
                  closeDuration: !1,
                  closeEasing: !1,
                  extendedTimeOut: 1e3,
                  iconClasses: {
                    error: "toast-error",
                    info: "toast-info",
                    success: "toast-success",
                    warning: "toast-warning",
                  },
                  iconClass: "toast-info",
                  positionClass: "toast-top-right",
                  timeOut: 5e3,
                  titleClass: "toast-title",
                  messageClass: "toast-message",
                  escapeHtml: !1,
                  target: "body",
                  closeHtml: '<button type="button">&times;</button>',
                  newestOnTop: !0,
                  preventDuplicates: !1,
                  progressBar: !1,
                },
                v.options
              );
            }
            function s(e) {
              l || (l = t()),
                e.is(":visible") ||
                  (e.remove(),
                  (e = null),
                  0 === l.children().length && (l.remove(), (u = void 0)));
            }
            var l,
              c,
              u,
              d = 0,
              p = "error",
              f = "info",
              h = "success",
              g = "warning",
              v = {
                clear: function (e, i) {
                  var o = a();
                  l || t(o), r(e, o, i) || n(o);
                },
                remove: function (n) {
                  var r = a();
                  return (
                    l || t(r),
                    n && 0 === e(":focus", n).length
                      ? void s(n)
                      : void (l.children().length && l.remove())
                  );
                },
                error: function (e, t, n) {
                  return o({
                    type: p,
                    iconClass: a().iconClasses.error,
                    message: e,
                    optionsOverride: n,
                    title: t,
                  });
                },
                getContainer: t,
                info: function (e, t, n) {
                  return o({
                    type: f,
                    iconClass: a().iconClasses.info,
                    message: e,
                    optionsOverride: n,
                    title: t,
                  });
                },
                options: {},
                subscribe: function (e) {
                  c = e;
                },
                success: function (e, t, n) {
                  return o({
                    type: h,
                    iconClass: a().iconClasses.success,
                    message: e,
                    optionsOverride: n,
                    title: t,
                  });
                },
                version: "2.1.2",
                warning: function (e, t, n) {
                  return o({
                    type: g,
                    iconClass: a().iconClasses.warning,
                    message: e,
                    optionsOverride: n,
                    title: t,
                  });
                },
              };
            return v;
          })();
        }.apply(t, r)) || (e.exports = i);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      e.exports = t.toastr = n(14);
    }.call(this, n(15)));
  },
  function (e, t, n) {
    (function (r) {
      var i, o;
      n(1),
        (i = [n(0)]),
        void 0 ===
          (o = function (e) {
            return (function () {
              function t(t, n) {
                return (
                  t || (t = a()),
                  (l = e("#" + t.containerId)).length
                    ? l
                    : (n &&
                        (l = (function (t) {
                          return (
                            (l = e("<div/>")
                              .attr("id", t.containerId)
                              .addClass(t.positionClass)
                              .attr("aria-live", "polite")
                              .attr("role", "alert")).appendTo(e(t.target)),
                            l
                          );
                        })(t)),
                      l)
                );
              }
              function n(t) {
                for (var n = l.children(), i = n.length - 1; i >= 0; i--)
                  r(e(n[i]), t);
              }
              function r(t, n, r) {
                var i = !(!r || !r.force) && r.force;
                return !(
                  !t ||
                  (!i && 0 !== e(":focus", t).length) ||
                  (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function () {
                      s(t);
                    },
                  }),
                  0)
                );
              }
              function i(e) {
                c && c(e);
              }
              function o(n) {
                function r(e) {
                  return (
                    null == e && (e = ""),
                    new String(e)
                      .replace(/&/g, "&amp;")
                      .replace(/"/g, "&quot;")
                      .replace(/'/g, "&#39;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                  );
                }
                function o(t) {
                  var n =
                      t && !1 !== c.closeMethod ? c.closeMethod : c.hideMethod,
                    r =
                      t && !1 !== c.closeDuration
                        ? c.closeDuration
                        : c.hideDuration,
                    o =
                      t && !1 !== c.closeEasing ? c.closeEasing : c.hideEasing;
                  return !e(":focus", h).length || t
                    ? (clearTimeout(x.intervalId),
                      h[n]({
                        duration: r,
                        easing: o,
                        complete: function () {
                          s(h),
                            c.onHidden && "hidden" !== b.state && c.onHidden(),
                            (b.state = "hidden"),
                            (b.endTime = new Date()),
                            i(b);
                        },
                      }))
                    : void 0;
                }
                var c = a(),
                  p = n.iconClass || c.iconClass;
                if (
                  (void 0 !== n.optionsOverride &&
                    ((c = e.extend(c, n.optionsOverride)),
                    (p = n.optionsOverride.iconClass || p)),
                  !(function (e, t) {
                    if (c.preventDuplicates) {
                      if (t.message === u) return !0;
                      u = t.message;
                    }
                    return !1;
                  })(0, n))
                ) {
                  d++, (l = t(c, !0));
                  var f = null,
                    h = e("<div/>"),
                    g = e("<div/>"),
                    v = e("<div/>"),
                    m = e("<div/>"),
                    y = e(c.closeHtml),
                    x = { intervalId: null, hideEta: null, maxHideTime: null },
                    b = {
                      toastId: d,
                      state: "visible",
                      startTime: new Date(),
                      options: c,
                      map: n,
                    };
                  return (
                    n.iconClass && h.addClass(c.toastClass).addClass(p),
                    n.title &&
                      (g
                        .append(c.escapeHtml ? r(n.title) : n.title)
                        .addClass(c.titleClass),
                      h.append(g)),
                    n.message &&
                      (v
                        .append(c.escapeHtml ? r(n.message) : n.message)
                        .addClass(c.messageClass),
                      h.append(v)),
                    c.closeButton &&
                      (y.addClass("toast-close-button").attr("role", "button"),
                      h.prepend(y)),
                    c.progressBar &&
                      (m.addClass("toast-progress"), h.prepend(m)),
                    c.newestOnTop ? l.prepend(h) : l.append(h),
                    h.hide(),
                    h[c.showMethod]({
                      duration: c.showDuration,
                      easing: c.showEasing,
                      complete: c.onShown,
                    }),
                    c.timeOut > 0 &&
                      ((f = setTimeout(o, c.timeOut)),
                      (x.maxHideTime = parseFloat(c.timeOut)),
                      (x.hideEta = new Date().getTime() + x.maxHideTime),
                      c.progressBar &&
                        (x.intervalId = setInterval(function () {
                          var e =
                            ((x.hideEta - new Date().getTime()) /
                              x.maxHideTime) *
                            100;
                          m.width(e + "%");
                        }, 10))),
                    h.hover(
                      function () {
                        clearTimeout(f),
                          (x.hideEta = 0),
                          h.stop(!0, !0)[c.showMethod]({
                            duration: c.showDuration,
                            easing: c.showEasing,
                          });
                      },
                      function () {
                        (c.timeOut > 0 || c.extendedTimeOut > 0) &&
                          ((f = setTimeout(o, c.extendedTimeOut)),
                          (x.maxHideTime = parseFloat(c.extendedTimeOut)),
                          (x.hideEta = new Date().getTime() + x.maxHideTime));
                      }
                    ),
                    !c.onclick && c.tapToDismiss && h.click(o),
                    c.closeButton &&
                      y &&
                      y.click(function (e) {
                        e.stopPropagation
                          ? e.stopPropagation()
                          : void 0 !== e.cancelBubble &&
                            !0 !== e.cancelBubble &&
                            (e.cancelBubble = !0),
                          o(!0);
                      }),
                    c.onclick &&
                      h.click(function (e) {
                        c.onclick(e), o();
                      }),
                    i(b),
                    c.debug && console && console.log(b),
                    h
                  );
                }
              }
              function a() {
                return e.extend(
                  {},
                  {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                      error: "toast-error",
                      info: "toast-info",
                      success: "toast-success",
                      warning: "toast-warning",
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                  },
                  v.options
                );
              }
              function s(e) {
                l || (l = t()),
                  e.is(":visible") ||
                    (e.remove(),
                    (e = null),
                    0 === l.children().length && (l.remove(), (u = void 0)));
              }
              var l,
                c,
                u,
                d = 0,
                p = "error",
                f = "info",
                h = "success",
                g = "warning",
                v = {
                  clear: function (e, i) {
                    var o = a();
                    l || t(o), r(e, o, i) || n(o);
                  },
                  remove: function (n) {
                    var r = a();
                    return (
                      l || t(r),
                      n && 0 === e(":focus", n).length
                        ? void s(n)
                        : void (l.children().length && l.remove())
                    );
                  },
                  error: function (e, t, n) {
                    return o({
                      type: p,
                      iconClass: a().iconClasses.error,
                      message: e,
                      optionsOverride: n,
                      title: t,
                    });
                  },
                  getContainer: t,
                  info: function (e, t, n) {
                    return o({
                      type: f,
                      iconClass: a().iconClasses.info,
                      message: e,
                      optionsOverride: n,
                      title: t,
                    });
                  },
                  options: {},
                  subscribe: function (e) {
                    c = e;
                  },
                  success: function (e, t, n) {
                    return o({
                      type: h,
                      iconClass: a().iconClasses.success,
                      message: e,
                      optionsOverride: n,
                      title: t,
                    });
                  },
                  version: "2.1.2",
                  warning: function (e, t, n) {
                    return o({
                      type: g,
                      iconClass: a().iconClasses.warning,
                      message: e,
                      optionsOverride: n,
                      title: t,
                    });
                  },
                };
              return v;
            })();
          }.apply(t, i)) || (e.exports = o),
        org.ekstep.pluginframework.pluginManager.registerPlugin(
          {
            id: "org.ekstep.toaster",
            ver: "1.0",
            shortId: "org.eskstep.toaster",
            author: "Manjunath Davanam",
            description: "",
            publishedDate: "",
            renderer: {
              main: "renderer/plugin.js",
              dependencies: [
                { type: "js", src: "renderer/libs/toastr.min.js" },
              ],
            },
          },
          Plugin.extend({
            initialize: function () {
              console.info("Toaster init is done"),
                EkstepRendererAPI.addEventListener(
                  "renderer:toast:show",
                  this.customize,
                  this
                );
            },
            customize: function (e, t) {
              try {
                t.custom || (t.custom = {}),
                  (r.options = _.extend(
                    {
                      positionClass: "toast-top-right",
                      preventDuplicates: !0,
                      tapToDismiss: !0,
                      hideDuration: "1000",
                      timeOut: "4000",
                    },
                    t.custom
                  )),
                  t.type
                    ? ("WARNING" === t.type.toUpperCase() &&
                        r.warning(t.message),
                      "ERROR" === t.type.toUpperCase() &&
                        (r.error(t.message),
                        t.errorInfo &&
                          EkstepRendererAPI.logErrorEvent(
                            t.errorInfo.errorStack,
                            t.errorInfo.data
                          )),
                      "INFO" === t.type.toUpperCase() && r.info(t.message))
                    : console.warn("Toast Type is Needed");
              } catch (e) {
                console.warn("Unable customize your TOAST", e);
              }
            },
          })
        );
    }.call(this, n(16)));
  },
  function (e, t) {
    org.ekstep.pluginframework.pluginManager.registerPlugin(
      {
        id: "org.ekstep.repo",
        ver: "1.0",
        shortId: "org.ekstep.repo",
        author: "Manjunath Davanam",
        description: "",
        publishedDate: "",
        renderer: { main: "renderer/plugin.js" },
      },
      Plugin.extend({
        initialize: function () {
          EkstepRendererAPI.addEventListener(
            "renderer:repo:create",
            this.start,
            this
          );
        },
        start: function (e, t) {
          var n = this;
          t &&
            (_.isArray(t)
              ? _.each(t, function (e, t) {
                  n.isAvailable(e, function (r) {
                    r || n.createInstance(e, t);
                  });
                })
              : n.isAvailable(t.path, function (e) {
                  e || n.createInstance(t.path, t.position);
                }));
        },
        initPlugin: function () {
          console.info("Repo plugin init");
        },
        createInstance: function (e, t) {
          (e = new (org.ekstep.pluginframework.iRepo.extend({
            id: Math.random() + "ekstepPluginRepo_" + new Date().getTime(),
            basePath: e,
            discoverManifest: function (e, t, n, r) {
              var i = this;
              org.ekstep.pluginframework.resourceManager.loadResource(
                this.resolveResource(e, t, "manifest.json"),
                "json",
                function (e, t) {
                  n(void 0, { manifest: t, repo: i });
                },
                r
              );
            },
            resolveResource: function (e, t, n) {
              return this.basePath + "/" + e + "-" + t + "/" + n;
            },
          }))()),
            this.addInstance(e, t);
        },
        addInstance: function (e, t) {
          org.ekstep.pluginframework.resourceManager.addRepo(e, t);
        },
        isAvailable: function (e, t) {
          var n;
          org.ekstep.pluginframework.resourceManager.registeredRepos &&
            ((n = _.filter(
              org.ekstep.pluginframework.resourceManager.registeredRepos,
              function (t) {
                return t.basePath !== e;
              }
            )),
            (org.ekstep.pluginframework.resourceManager.registeredRepos = n)),
            t(!1);
        },
      })
    );
  },
  function (e, t, n) {
    "use strict";
    app.controllerProvider.register("ContentCtrl", [
      "$scope",
      "$rootScope",
      "$state",
      "$stateParams",
      function (e, t, n, r) {
        (t.pageId = "ContentApp-Renderer"),
          (e.showPlayer = !1),
          (e.isInitialized = !1),
          (e.canvas = !1),
          (e.init = function () {
            e.isInitialized ||
              (_.isUndefined(t.content)
                ? _.isUndefined(content.metadata)
                  ? console.info("Content Metadata is not present")
                  : ((t.content = content.metadata), e.renderContent())
                : e.renderContent());
          }),
          (e.callStartTelemetry = function (e, t) {
            var n = EkstepRendererAPI.getGlobalConfig(),
              r = n.contentId,
              i =
                _.isUndefined(n.metadata) ||
                _.isUndefined(n.metadata.pkgVersion)
                  ? null
                  : n.metadata.pkgVersion.toString();
            startTelemetry(r, i, t);
          }),
          (e.renderContent = function () {
            t.content
              ? ((e.isInitialized = !0),
                (t.pageTitle = t.content.name),
                (e.canvas =
                  "application/vnd.ekstep.ecml-archive" == t.content.mimeType),
                (GlobalContext.currentContentId = _.isUndefined(
                  GlobalContext.currentContentId
                )
                  ? t.content.identifier
                  : GlobalContext.currentContentId),
                e.callStartTelemetry(t.content, function () {
                  (e.item = t.content),
                    (t.content.body = isbrowserpreview ? content.body : void 0),
                    EkstepRendererAPI.dispatchEvent(
                      "renderer:launcher:load",
                      void 0,
                      t.content
                    );
                }))
              : (alert("Name or Launch URL not found."), exitApp());
          }),
          (e.reloadStage = function () {
            reloadStage();
          }),
          (e.initializePlayer = function () {
            EkstepRendererAPI.dispatchEvent("renderer:player:show"), e.init();
          }),
          (e.hideCanvasPlayer = function () {
            (e.showPlayer = !1), e.safeApply();
          }),
          (e.showCanvasPlayer = function () {
            (e.showPlayer = !0), e.safeApply();
          }),
          EkstepRendererAPI.addEventListener(
            "renderer:player:init",
            e.initializePlayer
          ),
          EkstepRendererAPI.addEventListener(
            "renderer:player:hide",
            e.hideCanvasPlayer
          ),
          EkstepRendererAPI.addEventListener(
            "renderer:player:show",
            e.showCanvasPlayer
          ),
          EkstepRendererAPI.addEventListener(
            "renderer:content:replay",
            function () {
              org.ekstep.service.content.clearTelemetryEvents(),
                t.$broadcast("renderer:overlay:unmute"),
                e.showCanvasPlayer();
            }
          ),
          EkstepRendererAPI.addEventListener("telemetryEvent", function (e) {
            (e = _.isObject(e.target) ? e.target : JSON.parse(e.target)),
              org.ekstep.service.content.cacheTelemetryEvents(e);
          });
      },
    ]);
  },
  function (e, t) {
    e.exports =
      '<ng-template id=over.html>\n    <div id=gameArea tabindex=0 ng-controller=ContentCtrl ng-show=showPlayer>\n        \x3c!-- HTML plugin elements(dynamically adding here) --\x3e\n        \x3c!-- Canvas elment(used by CreateJS) --\x3e\n        <canvas id=gameCanvas width=1366 height=768 ng-show=canvas></canvas>\n    </div>\n\n    \x3c!-- <div id="errorDiv" style="z-index: 9999;" ng-show="showMessage" ng-click="showMessage = !showMessage">\n    <div ng-bind-html="message" class="bar bar-energized bookshelf_message"></div>\n</div> --\x3e\n    <iframe id=htmlFrame ng-src={{currentProjectUrl}} width=1366 height=768 scrolling=auto style=display:none></iframe>\n    <alert></alert>\n</ng-template>';
  },
  function (e, t, n) {
    org.ekstep.pluginframework.pluginManager.registerPlugin(
      {
        id: "org.ekstep.launcher",
        ver: "1.0",
        shortId: "org.ekstep.launcher",
        author: "Manjunath Davanam",
        description: "",
        publishedDate: "",
        renderer: {
          main: "renderer/plugin.js",
          views: [
            {
              template: "./templates/renderer.html",
              controller: "./js/rendererApp.js",
            },
          ],
        },
      },
      Plugin.extend({
        templatePath: void 0,
        controllerPath: void 0,
        _ngScopeVar: "playerContent",
        _injectTemplateFn: void 0,
        rendererMap: {},
        initialize: function () {
          EkstepRendererAPI.addEventListener(
            "renderer:launcher:load",
            this.start,
            this
          ),
            EkstepRendererAPI.addEventListener(
              "renderer:launcher:register",
              this.registerLauncher,
              this
            ),
            EkstepRendererAPI.addEventListener(
              "renderer:launcher:loadRendererPlugins",
              this.loadLauncherPlugins,
              this
            ),
            (this.templatePath = EkstepRendererAPI.resolvePluginResource(
              this._manifest.id,
              this._manifest.ver,
              "renderer/templates/renderer.html"
            )),
            (this.controllerPath = EkstepRendererAPI.resolvePluginResource(
              this._manifest.id,
              this._manifest.ver,
              "renderer/js/rendererApp.js"
            )),
            org.ekstep.service.controller.loadNgModules(n(20), n(19), !0);
        },
        registerLauncher: function (e) {
          var t = this,
            n = e.target;
          try {
            n._constants.mimeType.forEach(function (e) {
              t.rendererMap[e] = {
                event: n._constants.events.launchEvent,
                pluginId: n.manifest.id,
              };
            });
          } catch (e) {
            console.error("Plugin mimetype is not defined ", e);
          }
        },
        start: function (e, t) {
          var n;
          (content = t),
            (t = this.rendererMap[content.mimeType]),
            _.isUndefined(t) ||
              ((n = EkstepRendererAPI.getPluginObjs(t.pluginId)),
              EkstepRendererAPI.dispatchEvent("renderer:launcher:clean"),
              n
                ? (EkstepRendererAPI.dispatchEvent("telemetryPlugin:intialize"),
                  EkstepRendererAPI.dispatchEvent(t.event))
                : (EkstepRendererAPI.logErrorEvent(
                    {
                      stack:
                        "No plugin available to handle '" +
                        content.mimeType +
                        "' Mimetype in launch manager",
                    },
                    { severity: "fatal", type: "content", action: "play" }
                  ),
                  EkstepRendererAPI.dispatchEvent(
                    "renderer:alert:show",
                    void 0,
                    {
                      title: "Error",
                      text: "Plugin not available",
                      type: "error",
                      data: {
                        text: "Plugin not available",
                        data:
                          "No plugin available to handle '" +
                          content.mimeType +
                          "' Mimetype",
                      },
                    }
                  )),
              EkstepRendererAPI.dispatchEvent("renderer:player:show"));
        },
        loadLauncherPlugins: function (e) {
          console.log("Loading launchers");
          var t = EkstepRendererAPI.getGlobalConfig(),
            n = t.contentLaunchers;
          EkstepRendererAPI.dispatchEvent("renderer:repo:create", void 0, {
            path: t.corePluginspath,
            position: 0,
          }),
            GlobalContext.config.showEndPage &&
              n.push({ id: "org.ekstep.endpage", ver: "1.0", type: "plugin" }),
            GlobalContext.config.overlay.showOverlay &&
              n.push({ id: "org.ekstep.overlay", ver: "1.0", type: "plugin" }),
            org.ekstep.contentrenderer.loadPlugins(n, [], function () {
              e && "function" == typeof e.target && e.target();
            });
        },
      })
    );
  },
  function (e, t, n) {
    n(21),
      n(18),
      n(17),
      n(12),
      n(9),
      n(8),
      n(7),
      n(6),
      n(5),
      (e.exports = n(4));
  },
]);
org.ekstep.pluginframework.pluginManager.registerPlugin(
  {
    id: "org.ekstep.overlay",
    ver: "1.0",
    shortId: "org.ekstep.overlay",
    author: "Vinu Kumar V S",
    description: "",
    publishedDate: "",
    renderer: { main: "renderer/plugin.js" },
    dependencies: [
      { plugin: "org.ekstep.genie", ver: "1.0", scope: "renderer" },
      { plugin: "org.ekstep.nextnavigation", ver: "1.0", scope: "renderer" },
      {
        plugin: "org.ekstep.previousnavigation",
        ver: "1.0",
        scope: "renderer",
      },
      { plugin: "org.ekstep.userswitcher", ver: "1.0", scope: "renderer" },
    ],
  },
  eval(
    'Plugin.extend({_templatePath:void 0,_userSwitcherTP:void 0,_menuTP:void 0,_type:"overlay",_ngScopeVar:"overlay",_config:{},overlayVisible:!1,initialize:function(){console.info("overlay plugin is doing initialize....");var e=this,t=EkstepRendererAPI.getGlobalConfig();e._config=_.extend(e._config,t.overlay),this._templatePath=org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id,this._manifest.ver,"renderer/templates/overlay.html"),this.controllerPath=org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id,this._manifest.ver,"renderer/controller/overlay.js"),org.ekstep.service.controller.loadNgModules(this._templatePath,this.controllerPath),this._menuTP=org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id,this._manifest.ver,"renderer/templates/menu.html"),EkstepRendererAPI.addEventListener("render:overlay:applyStyles",e.updateRendererStyles,e),EkstepRendererAPI.addEventListener("renderer:overlay:show",e.showOrHideOverlay,e),EkstepRendererAPI.addEventListener("renderer:content:start",e.showOrHideOverlay,e)},showOrHideOverlay:function(){this.overlayVisible=!0},updateRendererStyles:function(e,t){setTimeout(function(){var e=document.getElementById("overlay"),t=16/9,n=window.innerWidth>window.innerHeight?window.innerWidth:window.innerHeight,i=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;t<n/i?(n=i*t,e.style.height=i+"px",e.style.width=n+"px"):(i=n/t,e.style.width=n+"px",e.style.height=i+"px"),e.style.left="50%",e.style.top="50%",e.style.marginTop=-i/2+"px",e.style.marginLeft=-n/2+"px"},0)},applyStyles:function(e,t,n){e.style[t]=n;document.getElementById(Renderer.divIds.contentArea)}});'
  )
);
org.ekstep.pluginframework.pluginManager.registerPlugin(
  {
    id: "org.sunbird.player.userswitcher",
    ver: "1.0",
    shortId: "org.sunbird.player.userswitcher",
    author: "Gourav More, Akash Gupta",
    description: "",
    publishedDate: "",
    renderer: {
      main: "renderer/plugin.js",
      views: [
        {
          template: "./templates/sunbird-user-switch-popup.html",
          controller: "./controller/sunbirdUserSwitcher.js",
        },
      ],
    },
  },
  eval(
    'Plugin.extend({_templatePath:void 0,_type:"userswitcher",initialize:function(){console.info("user switch plugin is doing initialize....");this._templatePath=org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id,this._manifest.ver,"renderer/templates/sunbird-user-switch-popup.html"),this.controllerPath=org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id,this._manifest.ver,"renderer/controller/sunbirdUserSwitcher.js"),org.ekstep.service.controller.loadNgModules(this._templatePath,this.controllerPath)}});'
  )
);
/*!
 * @license CreateJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
(this.createjs = this.createjs || {}),
  (createjs.extend = function (a, b) {
    "use strict";
    function c() {
      this.constructor = a;
    }
    return (c.prototype = b.prototype), (a.prototype = new c());
  }),
  (this.createjs = this.createjs || {}),
  (createjs.promote = function (a, b) {
    "use strict";
    var c = a.prototype,
      d = (Object.getPrototypeOf && Object.getPrototypeOf(c)) || c.__proto__;
    if (d) {
      c[(b += "_") + "constructor"] = d.constructor;
      for (var e in d)
        c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
    return a;
  }),
  (this.createjs = this.createjs || {}),
  (createjs.indexOf = function (a, b) {
    "use strict";
    for (var c = 0, d = a.length; d > c; c++) if (b === a[c]) return c;
    return -1;
  }),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      (this.type = a),
        (this.target = null),
        (this.currentTarget = null),
        (this.eventPhase = 0),
        (this.bubbles = !!b),
        (this.cancelable = !!c),
        (this.timeStamp = new Date().getTime()),
        (this.defaultPrevented = !1),
        (this.propagationStopped = !1),
        (this.immediatePropagationStopped = !1),
        (this.removed = !1);
    }
    var b = a.prototype;
    (b.preventDefault = function () {
      this.defaultPrevented = this.cancelable && !0;
    }),
      (b.stopPropagation = function () {
        this.propagationStopped = !0;
      }),
      (b.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      }),
      (b.remove = function () {
        this.removed = !0;
      }),
      (b.clone = function () {
        return new a(this.type, this.bubbles, this.cancelable);
      }),
      (b.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this;
      }),
      (b.toString = function () {
        return "[Event (type=" + this.type + ")]";
      }),
      (createjs.Event = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      (this._listeners = null), (this._captureListeners = null);
    }
    var b = a.prototype;
    (a.initialize = function (a) {
      (a.addEventListener = b.addEventListener),
        (a.on = b.on),
        (a.removeEventListener = a.off = b.removeEventListener),
        (a.removeAllEventListeners = b.removeAllEventListeners),
        (a.hasEventListener = b.hasEventListener),
        (a.dispatchEvent = b.dispatchEvent),
        (a._dispatchEvent = b._dispatchEvent),
        (a.willTrigger = b.willTrigger);
    }),
      (b.addEventListener = function (a, b, c) {
        var d;
        d = c
          ? (this._captureListeners = this._captureListeners || {})
          : (this._listeners = this._listeners || {});
        var e = d[a];
        return (
          e && this.removeEventListener(a, b, c),
          (e = d[a]),
          e ? e.push(b) : (d[a] = [b]),
          b
        );
      }),
      (b.on = function (a, b, c, d, e, f) {
        return (
          b.handleEvent && ((c = c || b), (b = b.handleEvent)),
          (c = c || this),
          this.addEventListener(
            a,
            function (a) {
              b.call(c, a, e), d && a.remove();
            },
            f
          )
        );
      }),
      (b.removeEventListener = function (a, b, c) {
        var d = c ? this._captureListeners : this._listeners;
        if (d) {
          var e = d[a];
          if (e)
            for (var f = 0, g = e.length; g > f; f++)
              if (e[f] == b) {
                1 == g ? delete d[a] : e.splice(f, 1);
                break;
              }
        }
      }),
      (b.off = b.removeEventListener),
      (b.removeAllEventListeners = function (a) {
        a
          ? (this._listeners && delete this._listeners[a],
            this._captureListeners && delete this._captureListeners[a])
          : (this._listeners = this._captureListeners = null);
      }),
      (b.dispatchEvent = function (a, b, c) {
        if ("string" == typeof a) {
          var d = this._listeners;
          if (!(b || (d && d[a]))) return !0;
          a = new createjs.Event(a, b, c);
        } else a.target && a.clone && (a = a.clone());
        try {
          a.target = this;
        } catch (e) {}
        if (a.bubbles && this.parent) {
          for (var f = this, g = [f]; f.parent; ) g.push((f = f.parent));
          var h,
            i = g.length;
          for (h = i - 1; h >= 0 && !a.propagationStopped; h--)
            g[h]._dispatchEvent(a, 1 + (0 == h));
          for (h = 1; i > h && !a.propagationStopped; h++)
            g[h]._dispatchEvent(a, 3);
        } else this._dispatchEvent(a, 2);
        return !a.defaultPrevented;
      }),
      (b.hasEventListener = function (a) {
        var b = this._listeners,
          c = this._captureListeners;
        return !!((b && b[a]) || (c && c[a]));
      }),
      (b.willTrigger = function (a) {
        for (var b = this; b; ) {
          if (b.hasEventListener(a)) return !0;
          b = b.parent;
        }
        return !1;
      }),
      (b.toString = function () {
        return "[EventDispatcher]";
      }),
      (b._dispatchEvent = function (a, b) {
        var c,
          d = 1 == b ? this._captureListeners : this._listeners;
        if (a && d) {
          var e = d[a.type];
          if (!e || !(c = e.length)) return;
          try {
            a.currentTarget = this;
          } catch (f) {}
          try {
            a.eventPhase = b;
          } catch (f) {}
          (a.removed = !1), (e = e.slice());
          for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
            var h = e[g];
            h.handleEvent ? h.handleEvent(a) : h(a),
              a.removed && (this.off(a.type, h, 1 == b), (a.removed = !1));
          }
        }
      }),
      (createjs.EventDispatcher = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "Ticker cannot be instantiated.";
    }
    (a.RAF_SYNCHED = "synched"),
      (a.RAF = "raf"),
      (a.TIMEOUT = "timeout"),
      (a.useRAF = !1),
      (a.timingMode = null),
      (a.maxDelta = 0),
      (a.paused = !1),
      (a.removeEventListener = null),
      (a.removeAllEventListeners = null),
      (a.dispatchEvent = null),
      (a.hasEventListener = null),
      (a._listeners = null),
      createjs.EventDispatcher.initialize(a),
      (a._addEventListener = a.addEventListener),
      (a.addEventListener = function () {
        return !a._inited && a.init(), a._addEventListener.apply(a, arguments);
      }),
      (a._inited = !1),
      (a._startTime = 0),
      (a._pausedTime = 0),
      (a._ticks = 0),
      (a._pausedTicks = 0),
      (a._interval = 50),
      (a._lastTime = 0),
      (a._times = null),
      (a._tickTimes = null),
      (a._timerId = null),
      (a._raf = !0),
      (a.setInterval = function (b) {
        (a._interval = b), a._inited && a._setupTick();
      }),
      (a.getInterval = function () {
        return a._interval;
      }),
      (a.setFPS = function (b) {
        a.setInterval(1e3 / b);
      }),
      (a.getFPS = function () {
        return 1e3 / a._interval;
      });
    try {
      Object.defineProperties(a, {
        interval: { get: a.getInterval, set: a.setInterval },
        framerate: { get: a.getFPS, set: a.setFPS },
      });
    } catch (b) {
      console.log(b);
    }
    (a.init = function () {
      a._inited ||
        ((a._inited = !0),
        (a._times = []),
        (a._tickTimes = []),
        (a._startTime = a._getTime()),
        a._times.push((a._lastTime = 0)),
        (a.interval = a._interval));
    }),
      (a.reset = function () {
        if (a._raf) {
          var b =
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame;
          b && b(a._timerId);
        } else clearTimeout(a._timerId);
        a.removeAllEventListeners("tick"),
          (a._timerId = a._times = a._tickTimes = null),
          (a._startTime = a._lastTime = a._ticks = 0),
          (a._inited = !1);
      }),
      (a.getMeasuredTickTime = function (b) {
        var c = 0,
          d = a._tickTimes;
        if (!d || d.length < 1) return -1;
        b = Math.min(d.length, b || 0 | a.getFPS());
        for (var e = 0; b > e; e++) c += d[e];
        return c / b;
      }),
      (a.getMeasuredFPS = function (b) {
        var c = a._times;
        return !c || c.length < 2
          ? -1
          : ((b = Math.min(c.length - 1, b || 0 | a.getFPS())),
            1e3 / ((c[0] - c[b]) / b));
      }),
      (a.setPaused = function (b) {
        a.paused = b;
      }),
      (a.getPaused = function () {
        return a.paused;
      }),
      (a.getTime = function (b) {
        return a._startTime ? a._getTime() - (b ? a._pausedTime : 0) : -1;
      }),
      (a.getEventTime = function (b) {
        return a._startTime
          ? (a._lastTime || a._startTime) - (b ? a._pausedTime : 0)
          : -1;
      }),
      (a.getTicks = function (b) {
        return a._ticks - (b ? a._pausedTicks : 0);
      }),
      (a._handleSynch = function () {
        (a._timerId = null),
          a._setupTick(),
          a._getTime() - a._lastTime >= 0.97 * (a._interval - 1) && a._tick();
      }),
      (a._handleRAF = function () {
        (a._timerId = null), a._setupTick(), a._tick();
      }),
      (a._handleTimeout = function () {
        (a._timerId = null), a._setupTick(), a._tick();
      }),
      (a._setupTick = function () {
        if (null == a._timerId) {
          var b = a.timingMode || (a.useRAF && a.RAF_SYNCHED);
          if (b == a.RAF_SYNCHED || b == a.RAF) {
            var c =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame;
            if (c)
              return (
                (a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch)),
                void (a._raf = !0)
              );
          }
          (a._raf = !1),
            (a._timerId = setTimeout(a._handleTimeout, a._interval));
        }
      }),
      (a._tick = function () {
        var b = a.paused,
          c = a._getTime(),
          d = c - a._lastTime;
        if (
          ((a._lastTime = c),
          a._ticks++,
          b && (a._pausedTicks++, (a._pausedTime += d)),
          a.hasEventListener("tick"))
        ) {
          var e = new createjs.Event("tick"),
            f = a.maxDelta;
          (e.delta = f && d > f ? f : d),
            (e.paused = b),
            (e.time = c),
            (e.runTime = c - a._pausedTime),
            a.dispatchEvent(e);
        }
        for (
          a._tickTimes.unshift(a._getTime() - c);
          a._tickTimes.length > 100;

        )
          a._tickTimes.pop();
        for (a._times.unshift(c); a._times.length > 100; ) a._times.pop();
      });
    var c =
      window.performance &&
      (performance.now ||
        performance.mozNow ||
        performance.msNow ||
        performance.oNow ||
        performance.webkitNow);
    (a._getTime = function () {
      return (
        ((c && c.call(performance)) || new Date().getTime()) - a._startTime
      );
    }),
      (createjs.Ticker = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "UID cannot be instantiated";
    }
    (a._nextID = 0),
      (a.get = function () {
        return a._nextID++;
      }),
      (createjs.UID = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d, e, f, g, h, i, j, k) {
      this.Event_constructor(a, b, c),
        (this.stageX = d),
        (this.stageY = e),
        (this.rawX = null == i ? d : i),
        (this.rawY = null == j ? e : j),
        (this.nativeEvent = f),
        (this.pointerID = g),
        (this.primary = !!h),
        (this.relatedTarget = k);
    }
    var b = createjs.extend(a, createjs.Event);
    (b._get_localX = function () {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
    }),
      (b._get_localY = function () {
        return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
      }),
      (b._get_isTouch = function () {
        return -1 !== this.pointerID;
      });
    try {
      Object.defineProperties(b, {
        localX: { get: b._get_localX },
        localY: { get: b._get_localY },
        isTouch: { get: b._get_isTouch },
      });
    } catch (c) {}
    (b.clone = function () {
      return new a(
        this.type,
        this.bubbles,
        this.cancelable,
        this.stageX,
        this.stageY,
        this.nativeEvent,
        this.pointerID,
        this.primary,
        this.rawX,
        this.rawY
      );
    }),
      (b.toString = function () {
        return (
          "[MouseEvent (type=" +
          this.type +
          " stageX=" +
          this.stageX +
          " stageY=" +
          this.stageY +
          ")]"
        );
      }),
      (createjs.MouseEvent = createjs.promote(a, "Event"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d, e, f) {
      this.setValues(a, b, c, d, e, f);
    }
    var b = a.prototype;
    (a.DEG_TO_RAD = Math.PI / 180),
      (a.identity = null),
      (b.setValues = function (a, b, c, d, e, f) {
        return (
          (this.a = null == a ? 1 : a),
          (this.b = b || 0),
          (this.c = c || 0),
          (this.d = null == d ? 1 : d),
          (this.tx = e || 0),
          (this.ty = f || 0),
          this
        );
      }),
      (b.append = function (a, b, c, d, e, f) {
        var g = this.a,
          h = this.b,
          i = this.c,
          j = this.d;
        return (
          (1 != a || 0 != b || 0 != c || 1 != d) &&
            ((this.a = g * a + i * b),
            (this.b = h * a + j * b),
            (this.c = g * c + i * d),
            (this.d = h * c + j * d)),
          (this.tx = g * e + i * f + this.tx),
          (this.ty = h * e + j * f + this.ty),
          this
        );
      }),
      (b.prepend = function (a, b, c, d, e, f) {
        var g = this.a,
          h = this.c,
          i = this.tx;
        return (
          (this.a = a * g + c * this.b),
          (this.b = b * g + d * this.b),
          (this.c = a * h + c * this.d),
          (this.d = b * h + d * this.d),
          (this.tx = a * i + c * this.ty + e),
          (this.ty = b * i + d * this.ty + f),
          this
        );
      }),
      (b.appendMatrix = function (a) {
        return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty);
      }),
      (b.prependMatrix = function (a) {
        return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty);
      }),
      (b.appendTransform = function (b, c, d, e, f, g, h, i, j) {
        if (f % 360)
          var k = f * a.DEG_TO_RAD,
            l = Math.cos(k),
            m = Math.sin(k);
        else (l = 1), (m = 0);
        return (
          g || h
            ? ((g *= a.DEG_TO_RAD),
              (h *= a.DEG_TO_RAD),
              this.append(
                Math.cos(h),
                Math.sin(h),
                -Math.sin(g),
                Math.cos(g),
                b,
                c
              ),
              this.append(l * d, m * d, -m * e, l * e, 0, 0))
            : this.append(l * d, m * d, -m * e, l * e, b, c),
          (i || j) &&
            ((this.tx -= i * this.a + j * this.c),
            (this.ty -= i * this.b + j * this.d)),
          this
        );
      }),
      (b.prependTransform = function (b, c, d, e, f, g, h, i, j) {
        if (f % 360)
          var k = f * a.DEG_TO_RAD,
            l = Math.cos(k),
            m = Math.sin(k);
        else (l = 1), (m = 0);
        return (
          (i || j) && ((this.tx -= i), (this.ty -= j)),
          g || h
            ? ((g *= a.DEG_TO_RAD),
              (h *= a.DEG_TO_RAD),
              this.prepend(l * d, m * d, -m * e, l * e, 0, 0),
              this.prepend(
                Math.cos(h),
                Math.sin(h),
                -Math.sin(g),
                Math.cos(g),
                b,
                c
              ))
            : this.prepend(l * d, m * d, -m * e, l * e, b, c),
          this
        );
      }),
      (b.rotate = function (b) {
        b *= a.DEG_TO_RAD;
        var c = Math.cos(b),
          d = Math.sin(b),
          e = this.a,
          f = this.b;
        return (
          (this.a = e * c + this.c * d),
          (this.b = f * c + this.d * d),
          (this.c = -e * d + this.c * c),
          (this.d = -f * d + this.d * c),
          this
        );
      }),
      (b.skew = function (b, c) {
        return (
          (b *= a.DEG_TO_RAD),
          (c *= a.DEG_TO_RAD),
          this.append(
            Math.cos(c),
            Math.sin(c),
            -Math.sin(b),
            Math.cos(b),
            0,
            0
          ),
          this
        );
      }),
      (b.scale = function (a, b) {
        return (this.a *= a), (this.b *= a), (this.c *= b), (this.d *= b), this;
      }),
      (b.translate = function (a, b) {
        return (
          (this.tx += this.a * a + this.c * b),
          (this.ty += this.b * a + this.d * b),
          this
        );
      }),
      (b.identity = function () {
        return (
          (this.a = this.d = 1), (this.b = this.c = this.tx = this.ty = 0), this
        );
      }),
      (b.invert = function () {
        var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.tx,
          f = a * d - b * c;
        return (
          (this.a = d / f),
          (this.b = -b / f),
          (this.c = -c / f),
          (this.d = a / f),
          (this.tx = (c * this.ty - d * e) / f),
          (this.ty = -(a * this.ty - b * e) / f),
          this
        );
      }),
      (b.isIdentity = function () {
        return (
          0 === this.tx &&
          0 === this.ty &&
          1 === this.a &&
          0 === this.b &&
          0 === this.c &&
          1 === this.d
        );
      }),
      (b.equals = function (a) {
        return (
          this.tx === a.tx &&
          this.ty === a.ty &&
          this.a === a.a &&
          this.b === a.b &&
          this.c === a.c &&
          this.d === a.d
        );
      }),
      (b.transformPoint = function (a, b, c) {
        return (
          (c = c || {}),
          (c.x = a * this.a + b * this.c + this.tx),
          (c.y = a * this.b + b * this.d + this.ty),
          c
        );
      }),
      (b.decompose = function (b) {
        null == b && (b = {}),
          (b.x = this.tx),
          (b.y = this.ty),
          (b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b)),
          (b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d));
        var c = Math.atan2(-this.c, this.d),
          d = Math.atan2(this.b, this.a),
          e = Math.abs(1 - c / d);
        return (
          1e-5 > e
            ? ((b.rotation = d / a.DEG_TO_RAD),
              this.a < 0 &&
                this.d >= 0 &&
                (b.rotation += b.rotation <= 0 ? 180 : -180),
              (b.skewX = b.skewY = 0))
            : ((b.skewX = c / a.DEG_TO_RAD), (b.skewY = d / a.DEG_TO_RAD)),
          b
        );
      }),
      (b.copy = function (a) {
        return this.setValues(a.a, a.b, a.c, a.d, a.tx, a.ty);
      }),
      (b.clone = function () {
        return new a(this.a, this.b, this.c, this.d, this.tx, this.ty);
      }),
      (b.toString = function () {
        return (
          "[Matrix2D (a=" +
          this.a +
          " b=" +
          this.b +
          " c=" +
          this.c +
          " d=" +
          this.d +
          " tx=" +
          this.tx +
          " ty=" +
          this.ty +
          ")]"
        );
      }),
      (a.identity = new a()),
      (createjs.Matrix2D = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d, e) {
      this.setValues(a, b, c, d, e);
    }
    var b = a.prototype;
    (b.setValues = function (a, b, c, d, e) {
      return (
        (this.visible = null == a ? !0 : !!a),
        (this.alpha = null == b ? 1 : b),
        (this.shadow = c),
        (this.compositeOperation = d),
        (this.matrix =
          e ||
          (this.matrix && this.matrix.identity()) ||
          new createjs.Matrix2D()),
        this
      );
    }),
      (b.append = function (a, b, c, d, e) {
        return (
          (this.alpha *= b),
          (this.shadow = c || this.shadow),
          (this.compositeOperation = d || this.compositeOperation),
          (this.visible = this.visible && a),
          e && this.matrix.appendMatrix(e),
          this
        );
      }),
      (b.prepend = function (a, b, c, d, e) {
        return (
          (this.alpha *= b),
          (this.shadow = this.shadow || c),
          (this.compositeOperation = this.compositeOperation || d),
          (this.visible = this.visible && a),
          e && this.matrix.prependMatrix(e),
          this
        );
      }),
      (b.identity = function () {
        return (
          (this.visible = !0),
          (this.alpha = 1),
          (this.shadow = this.compositeOperation = null),
          this.matrix.identity(),
          this
        );
      }),
      (b.clone = function () {
        return new a(
          this.alpha,
          this.shadow,
          this.compositeOperation,
          this.visible,
          this.matrix.clone()
        );
      }),
      (createjs.DisplayProps = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.setValues(a, b);
    }
    var b = a.prototype;
    (b.setValues = function (a, b) {
      return (this.x = a || 0), (this.y = b || 0), this;
    }),
      (b.copy = function (a) {
        return (this.x = a.x), (this.y = a.y), this;
      }),
      (b.clone = function () {
        return new a(this.x, this.y);
      }),
      (b.toString = function () {
        return "[Point (x=" + this.x + " y=" + this.y + ")]";
      }),
      (createjs.Point = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d) {
      this.setValues(a, b, c, d);
    }
    var b = a.prototype;
    (b.setValues = function (a, b, c, d) {
      return (
        (this.x = a || 0),
        (this.y = b || 0),
        (this.width = c || 0),
        (this.height = d || 0),
        this
      );
    }),
      (b.extend = function (a, b, c, d) {
        return (
          (c = c || 0),
          (d = d || 0),
          a + c > this.x + this.width && (this.width = a + c - this.x),
          b + d > this.y + this.height && (this.height = b + d - this.y),
          a < this.x && ((this.width += this.x - a), (this.x = a)),
          b < this.y && ((this.height += this.y - b), (this.y = b)),
          this
        );
      }),
      (b.pad = function (a, b, c, d) {
        return (
          (this.x -= b),
          (this.y -= a),
          (this.width += b + d),
          (this.height += a + c),
          this
        );
      }),
      (b.copy = function (a) {
        return this.setValues(a.x, a.y, a.width, a.height);
      }),
      (b.contains = function (a, b, c, d) {
        return (
          (c = c || 0),
          (d = d || 0),
          a >= this.x &&
            a + c <= this.x + this.width &&
            b >= this.y &&
            b + d <= this.y + this.height
        );
      }),
      (b.union = function (a) {
        return this.clone().extend(a.x, a.y, a.width, a.height);
      }),
      (b.intersection = function (b) {
        var c = b.x,
          d = b.y,
          e = c + b.width,
          f = d + b.height;
        return (
          this.x > c && (c = this.x),
          this.y > d && (d = this.y),
          this.x + this.width < e && (e = this.x + this.width),
          this.y + this.height < f && (f = this.y + this.height),
          c >= e || d >= f ? null : new a(c, d, e - c, f - d)
        );
      }),
      (b.intersects = function (a) {
        return (
          a.x <= this.x + this.width &&
          this.x <= a.x + a.width &&
          a.y <= this.y + this.height &&
          this.y <= a.y + a.height
        );
      }),
      (b.isEmpty = function () {
        return this.width <= 0 || this.height <= 0;
      }),
      (b.clone = function () {
        return new a(this.x, this.y, this.width, this.height);
      }),
      (b.toString = function () {
        return (
          "[Rectangle (x=" +
          this.x +
          " y=" +
          this.y +
          " width=" +
          this.width +
          " height=" +
          this.height +
          ")]"
        );
      }),
      (createjs.Rectangle = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d, e, f, g) {
      a.addEventListener &&
        ((this.target = a),
        (this.overLabel = null == c ? "over" : c),
        (this.outLabel = null == b ? "out" : b),
        (this.downLabel = null == d ? "down" : d),
        (this.play = e),
        (this._isPressed = !1),
        (this._isOver = !1),
        (this._enabled = !1),
        (a.mouseChildren = !1),
        (this.enabled = !0),
        this.handleEvent({}),
        f &&
          (g && ((f.actionsEnabled = !1), f.gotoAndStop && f.gotoAndStop(g)),
          (a.hitArea = f)));
    }
    var b = a.prototype;
    (b.setEnabled = function (a) {
      if (a != this._enabled) {
        var b = this.target;
        (this._enabled = a),
          a
            ? ((b.cursor = "pointer"),
              b.addEventListener("rollover", this),
              b.addEventListener("rollout", this),
              b.addEventListener("mousedown", this),
              b.addEventListener("pressup", this),
              b._reset && ((b.__reset = b._reset), (b._reset = this._reset)))
            : ((b.cursor = null),
              b.removeEventListener("rollover", this),
              b.removeEventListener("rollout", this),
              b.removeEventListener("mousedown", this),
              b.removeEventListener("pressup", this),
              b.__reset && ((b._reset = b.__reset), delete b.__reset));
      }
    }),
      (b.getEnabled = function () {
        return this._enabled;
      });
    try {
      Object.defineProperties(b, {
        enabled: { get: b.getEnabled, set: b.setEnabled },
      });
    } catch (c) {}
    (b.toString = function () {
      return "[ButtonHelper]";
    }),
      (b.handleEvent = function (a) {
        var b,
          c = this.target,
          d = a.type;
        "mousedown" == d
          ? ((this._isPressed = !0), (b = this.downLabel))
          : "pressup" == d
          ? ((this._isPressed = !1),
            (b = this._isOver ? this.overLabel : this.outLabel))
          : "rollover" == d
          ? ((this._isOver = !0),
            (b = this._isPressed ? this.downLabel : this.overLabel))
          : ((this._isOver = !1),
            (b = this._isPressed ? this.overLabel : this.outLabel)),
          this.play
            ? c.gotoAndPlay && c.gotoAndPlay(b)
            : c.gotoAndStop && c.gotoAndStop(b);
      }),
      (b._reset = function () {
        var a = this.paused;
        this.__reset(), (this.paused = a);
      }),
      (createjs.ButtonHelper = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d) {
      (this.color = a || "black"),
        (this.offsetX = b || 0),
        (this.offsetY = c || 0),
        (this.blur = d || 0);
    }
    var b = a.prototype;
    (a.identity = new a("transparent", 0, 0, 0)),
      (b.toString = function () {
        return "[Shadow]";
      }),
      (b.clone = function () {
        return new a(this.color, this.offsetX, this.offsetY, this.blur);
      }),
      (createjs.Shadow = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.EventDispatcher_constructor(),
        (this.complete = !0),
        (this.framerate = 0),
        (this._animations = null),
        (this._frames = null),
        (this._images = null),
        (this._data = null),
        (this._loadCount = 0),
        (this._frameHeight = 0),
        (this._frameWidth = 0),
        (this._numFrames = 0),
        (this._regX = 0),
        (this._regY = 0),
        (this._spacing = 0),
        (this._margin = 0),
        this._parseData(a);
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    b.getAnimations = function () {
      return this._animations.slice();
    };
    try {
      Object.defineProperties(b, { animations: { get: b.getAnimations } });
    } catch (c) {}
    (b.getNumFrames = function (a) {
      if (null == a)
        return this._frames ? this._frames.length : this._numFrames || 0;
      var b = this._data[a];
      return null == b ? 0 : b.frames.length;
    }),
      (b.getAnimation = function (a) {
        return this._data[a];
      }),
      (b.getFrame = function (a) {
        var b;
        return this._frames && (b = this._frames[a]) ? b : null;
      }),
      (b.getFrameBounds = function (a, b) {
        var c = this.getFrame(a);
        return c
          ? (b || new createjs.Rectangle()).setValues(
              -c.regX,
              -c.regY,
              c.rect.width,
              c.rect.height
            )
          : null;
      }),
      (b.toString = function () {
        return "[SpriteSheet]";
      }),
      (b.clone = function () {
        throw "SpriteSheet cannot be cloned.";
      }),
      (b._parseData = function (a) {
        var b, c, d, e;
        if (null != a) {
          if (
            ((this.framerate = a.framerate || 0),
            a.images && (c = a.images.length) > 0)
          )
            for (e = this._images = [], b = 0; c > b; b++) {
              var f = a.images[b];
              if ("string" == typeof f) {
                var g = f;
                (f = document.createElement("img")), (f.src = g);
              }
              e.push(f),
                f.getContext ||
                  f.naturalWidth ||
                  (this._loadCount++,
                  (this.complete = !1),
                  (function (a, b) {
                    f.onload = function () {
                      a._handleImageLoad(b);
                    };
                  })(this, g),
                  (function (a, b) {
                    f.onerror = function () {
                      a._handleImageError(b);
                    };
                  })(this, g));
            }
          if (null == a.frames);
          else if (Array.isArray(a.frames))
            for (
              this._frames = [], e = a.frames, b = 0, c = e.length;
              c > b;
              b++
            ) {
              var h = e[b];
              this._frames.push({
                image: this._images[h[4] ? h[4] : 0],
                rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]),
                regX: h[5] || 0,
                regY: h[6] || 0,
              });
            }
          else
            (d = a.frames),
              (this._frameWidth = d.width),
              (this._frameHeight = d.height),
              (this._regX = d.regX || 0),
              (this._regY = d.regY || 0),
              (this._spacing = d.spacing || 0),
              (this._margin = d.margin || 0),
              (this._numFrames = d.count),
              0 == this._loadCount && this._calculateFrames();
          if (((this._animations = []), null != (d = a.animations))) {
            this._data = {};
            var i;
            for (i in d) {
              var j = { name: i },
                k = d[i];
              if ("number" == typeof k) e = j.frames = [k];
              else if (Array.isArray(k))
                if (1 == k.length) j.frames = [k[0]];
                else
                  for (
                    j.speed = k[3], j.next = k[2], e = j.frames = [], b = k[0];
                    b <= k[1];
                    b++
                  )
                    e.push(b);
              else {
                (j.speed = k.speed), (j.next = k.next);
                var l = k.frames;
                e = j.frames = "number" == typeof l ? [l] : l.slice(0);
              }
              (j.next === !0 || void 0 === j.next) && (j.next = i),
                (j.next === !1 || (e.length < 2 && j.next == i)) &&
                  (j.next = null),
                j.speed || (j.speed = 1),
                this._animations.push(i),
                (this._data[i] = j);
            }
          }
        }
      }),
      (b._handleImageLoad = function (a) {
        0 == --this._loadCount &&
          (this._calculateFrames(),
          (this.complete = !0),
          this.dispatchEvent("complete"));
      }),
      (b._handleImageError = function (a) {
        var b = new createjs.Event("error");
        (b.src = a),
          this.dispatchEvent(b),
          0 == --this._loadCount && this.dispatchEvent("complete");
      }),
      (b._calculateFrames = function () {
        if (!this._frames && 0 != this._frameWidth) {
          this._frames = [];
          var a = this._numFrames || 1e5,
            b = 0,
            c = this._frameWidth,
            d = this._frameHeight,
            e = this._spacing,
            f = this._margin;
          a: for (var g = 0, h = this._images; g < h.length; g++)
            for (
              var i = h[g], j = i.width, k = i.height, l = f;
              k - f - d >= l;

            ) {
              for (var m = f; j - f - c >= m; ) {
                if (b >= a) break a;
                b++,
                  this._frames.push({
                    image: i,
                    rect: new createjs.Rectangle(m, l, c, d),
                    regX: this._regX,
                    regY: this._regY,
                  }),
                  (m += c + e);
              }
              l += d + e;
            }
          this._numFrames = b;
        }
      }),
      (createjs.SpriteSheet = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      (this.command = null),
        (this._stroke = null),
        (this._strokeStyle = null),
        (this._oldStrokeStyle = null),
        (this._strokeDash = null),
        (this._oldStrokeDash = null),
        (this._strokeIgnoreScale = !1),
        (this._fill = null),
        (this._instructions = []),
        (this._commitIndex = 0),
        (this._activeInstructions = []),
        (this._dirty = !1),
        (this._storeIndex = 0),
        this.clear();
    }
    var b = a.prototype,
      c = a;
    (a.getRGB = function (a, b, c, d) {
      return (
        null != a &&
          null == c &&
          ((d = b), (c = 255 & a), (b = (a >> 8) & 255), (a = (a >> 16) & 255)),
        null == d
          ? "rgb(" + a + "," + b + "," + c + ")"
          : "rgba(" + a + "," + b + "," + c + "," + d + ")"
      );
    }),
      (a.getHSL = function (a, b, c, d) {
        return null == d
          ? "hsl(" + (a % 360) + "," + b + "%," + c + "%)"
          : "hsla(" + (a % 360) + "," + b + "%," + c + "%," + d + ")";
      }),
      (a.BASE_64 = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25,
        a: 26,
        b: 27,
        c: 28,
        d: 29,
        e: 30,
        f: 31,
        g: 32,
        h: 33,
        i: 34,
        j: 35,
        k: 36,
        l: 37,
        m: 38,
        n: 39,
        o: 40,
        p: 41,
        q: 42,
        r: 43,
        s: 44,
        t: 45,
        u: 46,
        v: 47,
        w: 48,
        x: 49,
        y: 50,
        z: 51,
        0: 52,
        1: 53,
        2: 54,
        3: 55,
        4: 56,
        5: 57,
        6: 58,
        7: 59,
        8: 60,
        9: 61,
        "+": 62,
        "/": 63,
      }),
      (a.STROKE_CAPS_MAP = ["butt", "round", "square"]),
      (a.STROKE_JOINTS_MAP = ["miter", "round", "bevel"]);
    var d = createjs.createCanvas
      ? createjs.createCanvas()
      : document.createElement("canvas");
    d.getContext && ((a._ctx = d.getContext("2d")), (d.width = d.height = 1)),
      (b.getInstructions = function () {
        return this._updateInstructions(), this._instructions;
      });
    try {
      Object.defineProperties(b, { instructions: { get: b.getInstructions } });
    } catch (e) {}
    (b.isEmpty = function () {
      return !(this._instructions.length || this._activeInstructions.length);
    }),
      (b.draw = function (a, b) {
        this._updateInstructions();
        for (
          var c = this._instructions, d = this._storeIndex, e = c.length;
          e > d;
          d++
        )
          c[d].exec(a, b);
      }),
      (b.drawAsPath = function (a) {
        this._updateInstructions();
        for (
          var b, c = this._instructions, d = this._storeIndex, e = c.length;
          e > d;
          d++
        )
          (b = c[d]).path !== !1 && b.exec(a);
      }),
      (b.moveTo = function (a, b) {
        return this.append(new c.MoveTo(a, b), !0);
      }),
      (b.lineTo = function (a, b) {
        return this.append(new c.LineTo(a, b));
      }),
      (b.arcTo = function (a, b, d, e, f) {
        return this.append(new c.ArcTo(a, b, d, e, f));
      }),
      (b.arc = function (a, b, d, e, f, g) {
        return this.append(new c.Arc(a, b, d, e, f, g));
      }),
      (b.quadraticCurveTo = function (a, b, d, e) {
        return this.append(new c.QuadraticCurveTo(a, b, d, e));
      }),
      (b.bezierCurveTo = function (a, b, d, e, f, g) {
        return this.append(new c.BezierCurveTo(a, b, d, e, f, g));
      }),
      (b.rect = function (a, b, d, e) {
        return this.append(new c.Rect(a, b, d, e));
      }),
      (b.closePath = function () {
        return this._activeInstructions.length
          ? this.append(new c.ClosePath())
          : this;
      }),
      (b.clear = function () {
        return (
          (this._instructions.length =
            this._activeInstructions.length =
            this._commitIndex =
              0),
          (this._strokeStyle =
            this._oldStrokeStyle =
            this._stroke =
            this._fill =
            this._strokeDash =
            this._oldStrokeDash =
              null),
          (this._dirty = this._strokeIgnoreScale = !1),
          this
        );
      }),
      (b.beginFill = function (a) {
        return this._setFill(a ? new c.Fill(a) : null);
      }),
      (b.beginLinearGradientFill = function (a, b, d, e, f, g) {
        return this._setFill(new c.Fill().linearGradient(a, b, d, e, f, g));
      }),
      (b.beginRadialGradientFill = function (a, b, d, e, f, g, h, i) {
        return this._setFill(
          new c.Fill().radialGradient(a, b, d, e, f, g, h, i)
        );
      }),
      (b.beginBitmapFill = function (a, b, d) {
        return this._setFill(new c.Fill(null, d).bitmap(a, b));
      }),
      (b.endFill = function () {
        return this.beginFill();
      }),
      (b.setStrokeStyle = function (a, b, d, e, f) {
        return (
          this._updateInstructions(!0),
          (this._strokeStyle = this.command = new c.StrokeStyle(a, b, d, e, f)),
          this._stroke && (this._stroke.ignoreScale = f),
          (this._strokeIgnoreScale = f),
          this
        );
      }),
      (b.setStrokeDash = function (a, b) {
        return (
          this._updateInstructions(!0),
          (this._strokeDash = this.command = new c.StrokeDash(a, b)),
          this
        );
      }),
      (b.beginStroke = function (a) {
        return this._setStroke(a ? new c.Stroke(a) : null);
      }),
      (b.beginLinearGradientStroke = function (a, b, d, e, f, g) {
        return this._setStroke(new c.Stroke().linearGradient(a, b, d, e, f, g));
      }),
      (b.beginRadialGradientStroke = function (a, b, d, e, f, g, h, i) {
        return this._setStroke(
          new c.Stroke().radialGradient(a, b, d, e, f, g, h, i)
        );
      }),
      (b.beginBitmapStroke = function (a, b) {
        return this._setStroke(new c.Stroke().bitmap(a, b));
      }),
      (b.endStroke = function () {
        return this.beginStroke();
      }),
      (b.curveTo = b.quadraticCurveTo),
      (b.drawRect = b.rect),
      (b.drawRoundRect = function (a, b, c, d, e) {
        return this.drawRoundRectComplex(a, b, c, d, e, e, e, e);
      }),
      (b.drawRoundRectComplex = function (a, b, d, e, f, g, h, i) {
        return this.append(new c.RoundRect(a, b, d, e, f, g, h, i));
      }),
      (b.drawCircle = function (a, b, d) {
        return this.append(new c.Circle(a, b, d));
      }),
      (b.drawEllipse = function (a, b, d, e) {
        return this.append(new c.Ellipse(a, b, d, e));
      }),
      (b.drawPolyStar = function (a, b, d, e, f, g) {
        return this.append(new c.PolyStar(a, b, d, e, f, g));
      }),
      (b.append = function (a, b) {
        return (
          this._activeInstructions.push(a),
          (this.command = a),
          b || (this._dirty = !0),
          this
        );
      }),
      (b.decodePath = function (b) {
        for (
          var c = [
              this.moveTo,
              this.lineTo,
              this.quadraticCurveTo,
              this.bezierCurveTo,
              this.closePath,
            ],
            d = [2, 2, 4, 6, 0],
            e = 0,
            f = b.length,
            g = [],
            h = 0,
            i = 0,
            j = a.BASE_64;
          f > e;

        ) {
          var k = b.charAt(e),
            l = j[k],
            m = l >> 3,
            n = c[m];
          if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;
          var o = d[m];
          m || (h = i = 0), (g.length = 0), e++;
          for (var p = ((l >> 2) & 1) + 2, q = 0; o > q; q++) {
            var r = j[b.charAt(e)],
              s = r >> 5 ? -1 : 1;
            (r = ((31 & r) << 6) | j[b.charAt(e + 1)]),
              3 == p && (r = (r << 6) | j[b.charAt(e + 2)]),
              (r = (s * r) / 10),
              q % 2 ? (h = r += h) : (i = r += i),
              (g[q] = r),
              (e += p);
          }
          n.apply(this, g);
        }
        return this;
      }),
      (b.store = function () {
        return (
          this._updateInstructions(!0),
          (this._storeIndex = this._instructions.length),
          this
        );
      }),
      (b.unstore = function () {
        return (this._storeIndex = 0), this;
      }),
      (b.clone = function () {
        var b = new a();
        return (
          (b.command = this.command),
          (b._stroke = this._stroke),
          (b._strokeStyle = this._strokeStyle),
          (b._strokeDash = this._strokeDash),
          (b._strokeIgnoreScale = this._strokeIgnoreScale),
          (b._fill = this._fill),
          (b._instructions = this._instructions.slice()),
          (b._commitIndex = this._commitIndex),
          (b._activeInstructions = this._activeInstructions.slice()),
          (b._dirty = this._dirty),
          (b._storeIndex = this._storeIndex),
          b
        );
      }),
      (b.toString = function () {
        return "[Graphics]";
      }),
      (b.mt = b.moveTo),
      (b.lt = b.lineTo),
      (b.at = b.arcTo),
      (b.bt = b.bezierCurveTo),
      (b.qt = b.quadraticCurveTo),
      (b.a = b.arc),
      (b.r = b.rect),
      (b.cp = b.closePath),
      (b.c = b.clear),
      (b.f = b.beginFill),
      (b.lf = b.beginLinearGradientFill),
      (b.rf = b.beginRadialGradientFill),
      (b.bf = b.beginBitmapFill),
      (b.ef = b.endFill),
      (b.ss = b.setStrokeStyle),
      (b.sd = b.setStrokeDash),
      (b.s = b.beginStroke),
      (b.ls = b.beginLinearGradientStroke),
      (b.rs = b.beginRadialGradientStroke),
      (b.bs = b.beginBitmapStroke),
      (b.es = b.endStroke),
      (b.dr = b.drawRect),
      (b.rr = b.drawRoundRect),
      (b.rc = b.drawRoundRectComplex),
      (b.dc = b.drawCircle),
      (b.de = b.drawEllipse),
      (b.dp = b.drawPolyStar),
      (b.p = b.decodePath),
      (b._updateInstructions = function (b) {
        var c = this._instructions,
          d = this._activeInstructions,
          e = this._commitIndex;
        if (this._dirty && d.length) {
          (c.length = e), c.push(a.beginCmd);
          var f = d.length,
            g = c.length;
          c.length = g + f;
          for (var h = 0; f > h; h++) c[h + g] = d[h];
          this._fill && c.push(this._fill),
            this._stroke &&
              (this._strokeDash !== this._oldStrokeDash &&
                ((this._oldStrokeDash = this._strokeDash),
                c.push(this._strokeDash)),
              this._strokeStyle !== this._oldStrokeStyle &&
                ((this._oldStrokeStyle = this._strokeStyle),
                c.push(this._strokeStyle)),
              c.push(this._stroke)),
            (this._dirty = !1);
        }
        b && ((d.length = 0), (this._commitIndex = c.length));
      }),
      (b._setFill = function (a) {
        return (
          this._updateInstructions(!0), (this.command = this._fill = a), this
        );
      }),
      (b._setStroke = function (a) {
        return (
          this._updateInstructions(!0),
          (this.command = this._stroke = a) &&
            (a.ignoreScale = this._strokeIgnoreScale),
          this
        );
      }),
      ((c.LineTo = function (a, b) {
        (this.x = a), (this.y = b);
      }).prototype.exec = function (a) {
        a.lineTo(this.x, this.y);
      }),
      ((c.MoveTo = function (a, b) {
        (this.x = a), (this.y = b);
      }).prototype.exec = function (a) {
        a.moveTo(this.x, this.y);
      }),
      ((c.ArcTo = function (a, b, c, d, e) {
        (this.x1 = a),
          (this.y1 = b),
          (this.x2 = c),
          (this.y2 = d),
          (this.radius = e);
      }).prototype.exec = function (a) {
        a.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
      }),
      ((c.Arc = function (a, b, c, d, e, f) {
        (this.x = a),
          (this.y = b),
          (this.radius = c),
          (this.startAngle = d),
          (this.endAngle = e),
          (this.anticlockwise = !!f);
      }).prototype.exec = function (a) {
        a.arc(
          this.x,
          this.y,
          this.radius,
          this.startAngle,
          this.endAngle,
          this.anticlockwise
        );
      }),
      ((c.QuadraticCurveTo = function (a, b, c, d) {
        (this.cpx = a), (this.cpy = b), (this.x = c), (this.y = d);
      }).prototype.exec = function (a) {
        a.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
      }),
      ((c.BezierCurveTo = function (a, b, c, d, e, f) {
        (this.cp1x = a),
          (this.cp1y = b),
          (this.cp2x = c),
          (this.cp2y = d),
          (this.x = e),
          (this.y = f);
      }).prototype.exec = function (a) {
        a.bezierCurveTo(
          this.cp1x,
          this.cp1y,
          this.cp2x,
          this.cp2y,
          this.x,
          this.y
        );
      }),
      ((c.Rect = function (a, b, c, d) {
        (this.x = a), (this.y = b), (this.w = c), (this.h = d);
      }).prototype.exec = function (a) {
        a.rect(this.x, this.y, this.w, this.h);
      }),
      ((c.ClosePath = function () {}).prototype.exec = function (a) {
        a.closePath();
      }),
      ((c.BeginPath = function () {}).prototype.exec = function (a) {
        a.beginPath();
      }),
      (b = (c.Fill = function (a, b) {
        (this.style = a), (this.matrix = b);
      }).prototype),
      (b.exec = function (a) {
        if (this.style) {
          a.fillStyle = this.style;
          var b = this.matrix;
          b && (a.save(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)),
            a.fill(),
            b && a.restore();
        }
      }),
      (b.linearGradient = function (b, c, d, e, f, g) {
        for (
          var h = (this.style = a._ctx.createLinearGradient(d, e, f, g)),
            i = 0,
            j = b.length;
          j > i;
          i++
        )
          h.addColorStop(c[i], b[i]);
        return (
          (h.props = {
            colors: b,
            ratios: c,
            x0: d,
            y0: e,
            x1: f,
            y1: g,
            type: "linear",
          }),
          this
        );
      }),
      (b.radialGradient = function (b, c, d, e, f, g, h, i) {
        for (
          var j = (this.style = a._ctx.createRadialGradient(d, e, f, g, h, i)),
            k = 0,
            l = b.length;
          l > k;
          k++
        )
          j.addColorStop(c[k], b[k]);
        return (
          (j.props = {
            colors: b,
            ratios: c,
            x0: d,
            y0: e,
            r0: f,
            x1: g,
            y1: h,
            r1: i,
            type: "radial",
          }),
          this
        );
      }),
      (b.bitmap = function (b, c) {
        if (b.naturalWidth || b.getContext || b.readyState >= 2) {
          var d = (this.style = a._ctx.createPattern(b, c || ""));
          d.props = { image: b, repetition: c, type: "bitmap" };
        }
        return this;
      }),
      (b.path = !1),
      (b = (c.Stroke = function (a, b) {
        (this.style = a), (this.ignoreScale = b);
      }).prototype),
      (b.exec = function (a) {
        this.style &&
          ((a.strokeStyle = this.style),
          this.ignoreScale && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0)),
          a.stroke(),
          this.ignoreScale && a.restore());
      }),
      (b.linearGradient = c.Fill.prototype.linearGradient),
      (b.radialGradient = c.Fill.prototype.radialGradient),
      (b.bitmap = c.Fill.prototype.bitmap),
      (b.path = !1),
      (b = (c.StrokeStyle = function (a, b, c, d, e) {
        (this.width = a),
          (this.caps = b),
          (this.joints = c),
          (this.miterLimit = d),
          (this.ignoreScale = e);
      }).prototype),
      (b.exec = function (b) {
        (b.lineWidth = null == this.width ? "1" : this.width),
          (b.lineCap =
            null == this.caps
              ? "butt"
              : isNaN(this.caps)
              ? this.caps
              : a.STROKE_CAPS_MAP[this.caps]),
          (b.lineJoin =
            null == this.joints
              ? "miter"
              : isNaN(this.joints)
              ? this.joints
              : a.STROKE_JOINTS_MAP[this.joints]),
          (b.miterLimit = null == this.miterLimit ? "10" : this.miterLimit),
          (b.ignoreScale = null == this.ignoreScale ? !1 : this.ignoreScale);
      }),
      (b.path = !1),
      ((c.StrokeDash = function (a, b) {
        (this.segments = a), (this.offset = b || 0);
      }).prototype.exec = function (a) {
        a.setLineDash &&
          (a.setLineDash(this.segments || c.StrokeDash.EMPTY_SEGMENTS),
          (a.lineDashOffset = this.offset || 0));
      }),
      (c.StrokeDash.EMPTY_SEGMENTS = []),
      ((c.RoundRect = function (a, b, c, d, e, f, g, h) {
        (this.x = a),
          (this.y = b),
          (this.w = c),
          (this.h = d),
          (this.radiusTL = e),
          (this.radiusTR = f),
          (this.radiusBR = g),
          (this.radiusBL = h);
      }).prototype.exec = function (a) {
        var b = (j > i ? i : j) / 2,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = this.x,
          h = this.y,
          i = this.w,
          j = this.h,
          k = this.radiusTL,
          l = this.radiusTR,
          m = this.radiusBR,
          n = this.radiusBL;
        0 > k && (k *= c = -1),
          k > b && (k = b),
          0 > l && (l *= d = -1),
          l > b && (l = b),
          0 > m && (m *= e = -1),
          m > b && (m = b),
          0 > n && (n *= f = -1),
          n > b && (n = b),
          a.moveTo(g + i - l, h),
          a.arcTo(g + i + l * d, h - l * d, g + i, h + l, l),
          a.lineTo(g + i, h + j - m),
          a.arcTo(g + i + m * e, h + j + m * e, g + i - m, h + j, m),
          a.lineTo(g + n, h + j),
          a.arcTo(g - n * f, h + j + n * f, g, h + j - n, n),
          a.lineTo(g, h + k),
          a.arcTo(g - k * c, h - k * c, g + k, h, k),
          a.closePath();
      }),
      ((c.Circle = function (a, b, c) {
        (this.x = a), (this.y = b), (this.radius = c);
      }).prototype.exec = function (a) {
        a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      }),
      ((c.Ellipse = function (a, b, c, d) {
        (this.x = a), (this.y = b), (this.w = c), (this.h = d);
      }).prototype.exec = function (a) {
        var b = this.x,
          c = this.y,
          d = this.w,
          e = this.h,
          f = 0.5522848,
          g = (d / 2) * f,
          h = (e / 2) * f,
          i = b + d,
          j = c + e,
          k = b + d / 2,
          l = c + e / 2;
        a.moveTo(b, l),
          a.bezierCurveTo(b, l - h, k - g, c, k, c),
          a.bezierCurveTo(k + g, c, i, l - h, i, l),
          a.bezierCurveTo(i, l + h, k + g, j, k, j),
          a.bezierCurveTo(k - g, j, b, l + h, b, l);
      }),
      ((c.PolyStar = function (a, b, c, d, e, f) {
        (this.x = a),
          (this.y = b),
          (this.radius = c),
          (this.sides = d),
          (this.pointSize = e),
          (this.angle = f);
      }).prototype.exec = function (a) {
        var b = this.x,
          c = this.y,
          d = this.radius,
          e = ((this.angle || 0) / 180) * Math.PI,
          f = this.sides,
          g = 1 - (this.pointSize || 0),
          h = Math.PI / f;
        a.moveTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
        for (var i = 0; f > i; i++)
          (e += h),
            1 != g &&
              a.lineTo(b + Math.cos(e) * d * g, c + Math.sin(e) * d * g),
            (e += h),
            a.lineTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
        a.closePath();
      }),
      (a.beginCmd = new c.BeginPath()),
      (createjs.Graphics = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      this.EventDispatcher_constructor(),
        (this.alpha = 1),
        (this.cacheCanvas = null),
        (this.cacheID = 0),
        (this.id = createjs.UID.get()),
        (this.mouseEnabled = !0),
        (this.tickEnabled = !0),
        (this.name = null),
        (this.parent = null),
        (this.regX = 0),
        (this.regY = 0),
        (this.rotation = 0),
        (this.scaleX = 1),
        (this.scaleY = 1),
        (this.skewX = 0),
        (this.skewY = 0),
        (this.shadow = null),
        (this.visible = !0),
        (this.x = 0),
        (this.y = 0),
        (this.transformMatrix = null),
        (this.compositeOperation = null),
        (this.snapToPixel = !0),
        (this.filters = null),
        (this.mask = null),
        (this.hitArea = null),
        (this.cursor = null),
        (this._cacheOffsetX = 0),
        (this._cacheOffsetY = 0),
        (this._filterOffsetX = 0),
        (this._filterOffsetY = 0),
        (this._cacheScale = 1),
        (this._cacheDataURLID = 0),
        (this._cacheDataURL = null),
        (this._props = new createjs.DisplayProps()),
        (this._rectangle = new createjs.Rectangle()),
        (this._bounds = null);
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    (a._MOUSE_EVENTS = [
      "click",
      "dblclick",
      "mousedown",
      "mouseout",
      "mouseover",
      "pressmove",
      "pressup",
      "rollout",
      "rollover",
    ]),
      (a.suppressCrossDomainErrors = !1),
      (a._snapToPixelEnabled = !1);
    var c = createjs.createCanvas
      ? createjs.createCanvas()
      : document.createElement("canvas");
    c.getContext &&
      ((a._hitTestCanvas = c),
      (a._hitTestContext = c.getContext("2d")),
      (c.width = c.height = 1)),
      (a._nextCacheID = 1),
      (b.getStage = function () {
        for (var a = this, b = createjs.Stage; a.parent; ) a = a.parent;
        return a instanceof b ? a : null;
      });
    try {
      Object.defineProperties(b, { stage: { get: b.getStage } });
    } catch (d) {}
    (b.isVisible = function () {
      return !!(
        this.visible &&
        this.alpha > 0 &&
        0 != this.scaleX &&
        0 != this.scaleY
      );
    }),
      (b.draw = function (a, b) {
        var c = this.cacheCanvas;
        if (b || !c) return !1;
        var d = this._cacheScale;
        return (
          a.drawImage(
            c,
            this._cacheOffsetX + this._filterOffsetX,
            this._cacheOffsetY + this._filterOffsetY,
            c.width / d,
            c.height / d
          ),
          !0
        );
      }),
      (b.updateContext = function (b) {
        var c = this,
          d = c.mask,
          e = c._props.matrix;
        d &&
          d.graphics &&
          !d.graphics.isEmpty() &&
          (d.getMatrix(e),
          b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty),
          d.graphics.drawAsPath(b),
          b.clip(),
          e.invert(),
          b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)),
          this.getMatrix(e);
        var f = e.tx,
          g = e.ty;
        a._snapToPixelEnabled &&
          c.snapToPixel &&
          ((f = (f + (0 > f ? -0.5 : 0.5)) | 0),
          (g = (g + (0 > g ? -0.5 : 0.5)) | 0)),
          b.transform(e.a, e.b, e.c, e.d, f, g),
          (b.globalAlpha *= c.alpha),
          c.compositeOperation &&
            (b.globalCompositeOperation = c.compositeOperation),
          c.shadow && this._applyShadow(b, c.shadow);
      }),
      (b.cache = function (a, b, c, d, e) {
        (e = e || 1),
          this.cacheCanvas ||
            (this.cacheCanvas = createjs.createCanvas
              ? createjs.createCanvas()
              : document.createElement("canvas")),
          (this._cacheWidth = c),
          (this._cacheHeight = d),
          (this._cacheOffsetX = a),
          (this._cacheOffsetY = b),
          (this._cacheScale = e),
          this.updateCache();
      }),
      (b.updateCache = function (b) {
        var c = this.cacheCanvas;
        if (!c) throw "cache() must be called before updateCache()";
        var d = this._cacheScale,
          e = this._cacheOffsetX * d,
          f = this._cacheOffsetY * d,
          g = this._cacheWidth,
          h = this._cacheHeight,
          i = c.getContext("2d"),
          j = this._getFilterBounds();
        (e += this._filterOffsetX = j.x),
          (f += this._filterOffsetY = j.y),
          (g = Math.ceil(g * d) + j.width),
          (h = Math.ceil(h * d) + j.height),
          g != c.width || h != c.height
            ? ((c.width = g), (c.height = h))
            : b || i.clearRect(0, 0, g + 1, h + 1),
          i.save(),
          (i.globalCompositeOperation = b),
          i.setTransform(d, 0, 0, d, -e, -f),
          this.draw(i, !0),
          this._applyFilters(),
          i.restore(),
          (this.cacheID = a._nextCacheID++);
      }),
      (b.uncache = function () {
        (this._cacheDataURL = this.cacheCanvas = null),
          (this.cacheID =
            this._cacheOffsetX =
            this._cacheOffsetY =
            this._filterOffsetX =
            this._filterOffsetY =
              0),
          (this._cacheScale = 1);
      }),
      (b.getCacheDataURL = function () {
        return this.cacheCanvas
          ? (this.cacheID != this._cacheDataURLID &&
              (this._cacheDataURL = this.cacheCanvas.toDataURL()),
            this._cacheDataURL)
          : null;
      }),
      (b.localToGlobal = function (a, b, c) {
        return this.getConcatenatedMatrix(this._props.matrix).transformPoint(
          a,
          b,
          c || new createjs.Point()
        );
      }),
      (b.globalToLocal = function (a, b, c) {
        return this.getConcatenatedMatrix(this._props.matrix)
          .invert()
          .transformPoint(a, b, c || new createjs.Point());
      }),
      (b.localToLocal = function (a, b, c, d) {
        return (d = this.localToGlobal(a, b, d)), c.globalToLocal(d.x, d.y, d);
      }),
      (b.setTransform = function (a, b, c, d, e, f, g, h, i) {
        return (
          (this.x = a || 0),
          (this.y = b || 0),
          (this.scaleX = null == c ? 1 : c),
          (this.scaleY = null == d ? 1 : d),
          (this.rotation = e || 0),
          (this.skewX = f || 0),
          (this.skewY = g || 0),
          (this.regX = h || 0),
          (this.regY = i || 0),
          this
        );
      }),
      (b.getMatrix = function (a) {
        var b = this,
          c = (a && a.identity()) || new createjs.Matrix2D();
        return b.transformMatrix
          ? c.copy(b.transformMatrix)
          : c.appendTransform(
              b.x,
              b.y,
              b.scaleX,
              b.scaleY,
              b.rotation,
              b.skewX,
              b.skewY,
              b.regX,
              b.regY
            );
      }),
      (b.getConcatenatedMatrix = function (a) {
        for (var b = this, c = this.getMatrix(a); (b = b.parent); )
          c.prependMatrix(b.getMatrix(b._props.matrix));
        return c;
      }),
      (b.getConcatenatedDisplayProps = function (a) {
        a = a ? a.identity() : new createjs.DisplayProps();
        var b = this,
          c = b.getMatrix(a.matrix);
        do
          a.prepend(b.visible, b.alpha, b.shadow, b.compositeOperation),
            b != this && c.prependMatrix(b.getMatrix(b._props.matrix));
        while ((b = b.parent));
        return a;
      }),
      (b.hitTest = function (b, c) {
        var d = a._hitTestContext;
        d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d);
        var e = this._testHit(d);
        return d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e;
      }),
      (b.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this;
      }),
      (b.getBounds = function () {
        if (this._bounds) return this._rectangle.copy(this._bounds);
        var a = this.cacheCanvas;
        if (a) {
          var b = this._cacheScale;
          return this._rectangle.setValues(
            this._cacheOffsetX,
            this._cacheOffsetY,
            a.width / b,
            a.height / b
          );
        }
        return null;
      }),
      (b.getTransformedBounds = function () {
        return this._getBounds();
      }),
      (b.setBounds = function (a, b, c, d) {
        null == a && (this._bounds = a),
          (this._bounds = (this._bounds || new createjs.Rectangle()).setValues(
            a,
            b,
            c,
            d
          ));
      }),
      (b.clone = function () {
        return this._cloneProps(new a());
      }),
      (b.toString = function () {
        return "[DisplayObject (name=" + this.name + ")]";
      }),
      (b._cloneProps = function (a) {
        return (
          (a.alpha = this.alpha),
          (a.mouseEnabled = this.mouseEnabled),
          (a.tickEnabled = this.tickEnabled),
          (a.name = this.name),
          (a.regX = this.regX),
          (a.regY = this.regY),
          (a.rotation = this.rotation),
          (a.scaleX = this.scaleX),
          (a.scaleY = this.scaleY),
          (a.shadow = this.shadow),
          (a.skewX = this.skewX),
          (a.skewY = this.skewY),
          (a.visible = this.visible),
          (a.x = this.x),
          (a.y = this.y),
          (a.compositeOperation = this.compositeOperation),
          (a.snapToPixel = this.snapToPixel),
          (a.filters = null == this.filters ? null : this.filters.slice(0)),
          (a.mask = this.mask),
          (a.hitArea = this.hitArea),
          (a.cursor = this.cursor),
          (a._bounds = this._bounds),
          a
        );
      }),
      (b._applyShadow = function (a, b) {
        (b = b || Shadow.identity),
          (a.shadowColor = b.color),
          (a.shadowOffsetX = b.offsetX),
          (a.shadowOffsetY = b.offsetY),
          (a.shadowBlur = b.blur);
      }),
      (b._tick = function (a) {
        var b = this._listeners;
        b &&
          b.tick &&
          ((a.target = null),
          (a.propagationStopped = a.immediatePropagationStopped = !1),
          this.dispatchEvent(a));
      }),
      (b._testHit = function (b) {
        try {
          var c = b.getImageData(0, 0, 1, 1).data[3] > 1;
        } catch (d) {
          if (!a.suppressCrossDomainErrors)
            throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
        }
        return c;
      }),
      (b._applyFilters = function () {
        if (this.filters && 0 != this.filters.length && this.cacheCanvas)
          for (
            var a = this.filters.length,
              b = this.cacheCanvas.getContext("2d"),
              c = this.cacheCanvas.width,
              d = this.cacheCanvas.height,
              e = 0;
            a > e;
            e++
          )
            this.filters[e].applyFilter(b, 0, 0, c, d);
      }),
      (b._getFilterBounds = function (a) {
        var b,
          c = this.filters,
          d = this._rectangle.setValues(0, 0, 0, 0);
        if (!c || !(b = c.length)) return d;
        for (var e = 0; b > e; e++) {
          var f = this.filters[e];
          f.getBounds && f.getBounds(d);
        }
        return d;
      }),
      (b._getBounds = function (a, b) {
        return this._transformBounds(this.getBounds(), a, b);
      }),
      (b._transformBounds = function (a, b, c) {
        if (!a) return a;
        var d = a.x,
          e = a.y,
          f = a.width,
          g = a.height,
          h = this._props.matrix;
        (h = c ? h.identity() : this.getMatrix(h)),
          (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e),
          b && h.prependMatrix(b);
        var i = f * h.a,
          j = f * h.b,
          k = g * h.c,
          l = g * h.d,
          m = h.tx,
          n = h.ty,
          o = m,
          p = m,
          q = n,
          r = n;
        return (
          (d = i + m) < o ? (o = d) : d > p && (p = d),
          (d = i + k + m) < o ? (o = d) : d > p && (p = d),
          (d = k + m) < o ? (o = d) : d > p && (p = d),
          (e = j + n) < q ? (q = e) : e > r && (r = e),
          (e = j + l + n) < q ? (q = e) : e > r && (r = e),
          (e = l + n) < q ? (q = e) : e > r && (r = e),
          a.setValues(o, q, p - o, r - q)
        );
      }),
      (b._hasMouseEventListener = function () {
        for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; d > c; c++)
          if (this.hasEventListener(b[c])) return !0;
        return !!this.cursor;
      }),
      (createjs.DisplayObject = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      this.DisplayObject_constructor(),
        (this.children = []),
        (this.mouseChildren = !0),
        (this.tickChildren = !0);
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    b.getNumChildren = function () {
      return this.children.length;
    };
    try {
      Object.defineProperties(b, { numChildren: { get: b.getNumChildren } });
    } catch (c) {}
    (b.initialize = a),
      (b.isVisible = function () {
        var a = this.cacheCanvas || this.children.length;
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY &&
          a
        );
      }),
      (b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b)) return !0;
        for (var c = this.children.slice(), d = 0, e = c.length; e > d; d++) {
          var f = c[d];
          f.isVisible() &&
            (a.save(), f.updateContext(a), f.draw(a), a.restore());
        }
        return !0;
      }),
      (b.addChild = function (a) {
        if (null == a) return a;
        var b = arguments.length;
        if (b > 1) {
          for (var c = 0; b > c; c++) this.addChild(arguments[c]);
          return arguments[b - 1];
        }
        return (
          a.parent && a.parent.removeChild(a),
          (a.parent = this),
          this.children.push(a),
          a.dispatchEvent("added"),
          a
        );
      }),
      (b.addChildAt = function (a, b) {
        var c = arguments.length,
          d = arguments[c - 1];
        if (0 > d || d > this.children.length) return arguments[c - 2];
        if (c > 2) {
          for (var e = 0; c - 1 > e; e++) this.addChildAt(arguments[e], d + e);
          return arguments[c - 2];
        }
        return (
          a.parent && a.parent.removeChild(a),
          (a.parent = this),
          this.children.splice(b, 0, a),
          a.dispatchEvent("added"),
          a
        );
      }),
      (b.removeChild = function (a) {
        var b = arguments.length;
        if (b > 1) {
          for (var c = !0, d = 0; b > d; d++)
            c = c && this.removeChild(arguments[d]);
          return c;
        }
        return this.removeChildAt(createjs.indexOf(this.children, a));
      }),
      (b.removeChildAt = function (a) {
        var b = arguments.length;
        if (b > 1) {
          for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
          c.sort(function (a, b) {
            return b - a;
          });
          for (var e = !0, d = 0; b > d; d++) e = e && this.removeChildAt(c[d]);
          return e;
        }
        if (0 > a || a > this.children.length - 1) return !1;
        var f = this.children[a];
        return (
          f && (f.parent = null),
          this.children.splice(a, 1),
          f.dispatchEvent("removed"),
          !0
        );
      }),
      (b.removeAllChildren = function () {
        for (var a = this.children; a.length; ) this.removeChildAt(0);
      }),
      (b.getChildAt = function (a) {
        return this.children[a];
      }),
      (b.getChildByName = function (a) {
        for (var b = this.children, c = 0, d = b.length; d > c; c++)
          if (b[c].name == a) return b[c];
        return null;
      }),
      (b.sortChildren = function (a) {
        this.children.sort(a);
      }),
      (b.getChildIndex = function (a) {
        return createjs.indexOf(this.children, a);
      }),
      (b.swapChildrenAt = function (a, b) {
        var c = this.children,
          d = c[a],
          e = c[b];
        d && e && ((c[a] = e), (c[b] = d));
      }),
      (b.swapChildren = function (a, b) {
        for (
          var c, d, e = this.children, f = 0, g = e.length;
          g > f &&
          (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d);
          f++
        );
        f != g && ((e[c] = b), (e[d] = a));
      }),
      (b.setChildIndex = function (a, b) {
        var c = this.children,
          d = c.length;
        if (!(a.parent != this || 0 > b || b >= d)) {
          for (var e = 0; d > e && c[e] != a; e++);
          e != d && e != b && (c.splice(e, 1), c.splice(b, 0, a));
        }
      }),
      (b.contains = function (a) {
        for (; a; ) {
          if (a == this) return !0;
          a = a.parent;
        }
        return !1;
      }),
      (b.hitTest = function (a, b) {
        return null != this.getObjectUnderPoint(a, b);
      }),
      (b.getObjectsUnderPoint = function (a, b, c) {
        var d = [],
          e = this.localToGlobal(a, b);
        return this._getObjectsUnderPoint(e.x, e.y, d, c > 0, 1 == c), d;
      }),
      (b.getObjectUnderPoint = function (a, b, c) {
        var d = this.localToGlobal(a, b);
        return this._getObjectsUnderPoint(d.x, d.y, null, c > 0, 1 == c);
      }),
      (b.getBounds = function () {
        return this._getBounds(null, !0);
      }),
      (b.getTransformedBounds = function () {
        return this._getBounds();
      }),
      (b.clone = function (b) {
        var c = this._cloneProps(new a());
        return b && this._cloneChildren(c), c;
      }),
      (b.toString = function () {
        return "[Container (name=" + this.name + ")]";
      }),
      (b._tick = function (a) {
        if (this.tickChildren)
          for (var b = this.children.length - 1; b >= 0; b--) {
            var c = this.children[b];
            c.tickEnabled && c._tick && c._tick(a);
          }
        this.DisplayObject__tick(a);
      }),
      (b._cloneChildren = function (a) {
        a.children.length && a.removeAllChildren();
        for (var b = a.children, c = 0, d = this.children.length; d > c; c++) {
          var e = this.children[c].clone(!0);
          (e.parent = a), b.push(e);
        }
      }),
      (b._getObjectsUnderPoint = function (b, c, d, e, f, g) {
        if (((g = g || 0), !g && !this._testMask(this, b, c))) return null;
        var h,
          i = createjs.DisplayObject._hitTestContext;
        f = f || (e && this._hasMouseEventListener());
        for (var j = this.children, k = j.length, l = k - 1; l >= 0; l--) {
          var m = j[l],
            n = m.hitArea;
          if (
            m.visible &&
            (n || m.isVisible()) &&
            (!e || m.mouseEnabled) &&
            (n || this._testMask(m, b, c))
          )
            if (!n && m instanceof a) {
              var o = m._getObjectsUnderPoint(b, c, d, e, f, g + 1);
              if (!d && o) return e && !this.mouseChildren ? this : o;
            } else {
              if (e && !f && !m._hasMouseEventListener()) continue;
              var p = m.getConcatenatedDisplayProps(m._props);
              if (
                ((h = p.matrix),
                n &&
                  (h.appendMatrix(n.getMatrix(n._props.matrix)),
                  (p.alpha = n.alpha)),
                (i.globalAlpha = p.alpha),
                i.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c),
                (n || m).draw(i),
                !this._testHit(i))
              )
                continue;
              if (
                (i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), !d)
              )
                return e && !this.mouseChildren ? this : m;
              d.push(m);
            }
        }
        return null;
      }),
      (b._testMask = function (a, b, c) {
        var d = a.mask;
        if (!d || !d.graphics || d.graphics.isEmpty()) return !0;
        var e = this._props.matrix,
          f = a.parent;
        (e = f ? f.getConcatenatedMatrix(e) : e.identity()),
          (e = d.getMatrix(d._props.matrix).prependMatrix(e));
        var g = createjs.DisplayObject._hitTestContext;
        return (
          g.setTransform(e.a, e.b, e.c, e.d, e.tx - b, e.ty - c),
          d.graphics.drawAsPath(g),
          (g.fillStyle = "#000"),
          g.fill(),
          this._testHit(g)
            ? (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !0)
            : !1
        );
      }),
      (b._getBounds = function (a, b) {
        var c = this.DisplayObject_getBounds();
        if (c) return this._transformBounds(c, a, b);
        var d = this._props.matrix;
        (d = b ? d.identity() : this.getMatrix(d)), a && d.prependMatrix(a);
        for (var e = this.children.length, f = null, g = 0; e > g; g++) {
          var h = this.children[g];
          h.visible &&
            (c = h._getBounds(d)) &&
            (f ? f.extend(c.x, c.y, c.width, c.height) : (f = c.clone()));
        }
        return f;
      }),
      (createjs.Container = createjs.promote(a, "DisplayObject"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.Container_constructor(),
        (this.autoClear = !0),
        (this.canvas = "string" == typeof a ? document.getElementById(a) : a),
        (this.mouseX = 0),
        (this.mouseY = 0),
        (this.drawRect = null),
        (this.snapToPixelEnabled = !1),
        (this.mouseInBounds = !1),
        (this.tickOnUpdate = !0),
        (this.mouseMoveOutside = !1),
        (this.preventSelection = !0),
        (this._pointerData = {}),
        (this._pointerCount = 0),
        (this._primaryPointerID = null),
        (this._mouseOverIntervalID = null),
        (this._nextStage = null),
        (this._prevStage = null),
        this.enableDOMEvents(!0);
    }
    var b = createjs.extend(a, createjs.Container);
    (b._get_nextStage = function () {
      return this._nextStage;
    }),
      (b._set_nextStage = function (a) {
        this._nextStage && (this._nextStage._prevStage = null),
          a && (a._prevStage = this),
          (this._nextStage = a);
      });
    try {
      Object.defineProperties(b, {
        nextStage: { get: b._get_nextStage, set: b._set_nextStage },
      });
    } catch (c) {}
    (b.update = function (a) {
      if (
        this.canvas &&
        (this.tickOnUpdate && this.tick(a),
        this.dispatchEvent("drawstart", !1, !0) !== !1)
      ) {
        createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
        var b = this.drawRect,
          c = this.canvas.getContext("2d");
        c.setTransform(1, 0, 0, 1, 0, 0),
          this.autoClear &&
            (b
              ? c.clearRect(b.x, b.y, b.width, b.height)
              : c.clearRect(
                  0,
                  0,
                  this.canvas.width + 1,
                  this.canvas.height + 1
                )),
          c.save(),
          this.drawRect &&
            (c.beginPath(), c.rect(b.x, b.y, b.width, b.height), c.clip()),
          this.updateContext(c),
          this.draw(c, !1),
          c.restore(),
          this.dispatchEvent("drawend");
      }
    }),
      (b.tick = function (a) {
        if (
          this.tickEnabled &&
          this.dispatchEvent("tickstart", !1, !0) !== !1
        ) {
          var b = new createjs.Event("tick");
          if (a) for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
          this._tick(b), this.dispatchEvent("tickend");
        }
      }),
      (b.handleEvent = function (a) {
        "tick" == a.type && this.update(a);
      }),
      (b.clear = function () {
        if (this.canvas) {
          var a = this.canvas.getContext("2d");
          a.setTransform(1, 0, 0, 1, 0, 0),
            a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
        }
      }),
      (b.toDataURL = function (a, b) {
        var c,
          d = this.canvas.getContext("2d"),
          e = this.canvas.width,
          f = this.canvas.height;
        if (a) {
          c = d.getImageData(0, 0, e, f);
          var g = d.globalCompositeOperation;
          (d.globalCompositeOperation = "destination-over"),
            (d.fillStyle = a),
            d.fillRect(0, 0, e, f);
        }
        var h = this.canvas.toDataURL(b || "image/png");
        return (
          a && (d.putImageData(c, 0, 0), (d.globalCompositeOperation = g)), h
        );
      }),
      (b.enableMouseOver = function (a) {
        if (
          (this._mouseOverIntervalID &&
            (clearInterval(this._mouseOverIntervalID),
            (this._mouseOverIntervalID = null),
            0 == a && this._testMouseOver(!0)),
          null == a)
        )
          a = 20;
        else if (0 >= a) return;
        var b = this;
        this._mouseOverIntervalID = setInterval(function () {
          b._testMouseOver();
        }, 1e3 / Math.min(50, a));
      }),
      (b.enableDOMEvents = function (a) {
        null == a && (a = !0);
        var b,
          c,
          d = this._eventListeners;
        if (!a && d) {
          for (b in d) (c = d[b]), c.t.removeEventListener(b, c.f, !1);
          this._eventListeners = null;
        } else if (a && !d && this.canvas) {
          var e = window.addEventListener ? window : document,
            f = this;
          (d = this._eventListeners = {}),
            (d.mouseup = {
              t: e,
              f: function (a) {
                f._handleMouseUp(a);
              },
            }),
            (d.mousemove = {
              t: e,
              f: function (a) {
                f._handleMouseMove(a);
              },
            }),
            (d.dblclick = {
              t: this.canvas,
              f: function (a) {
                f._handleDoubleClick(a);
              },
            }),
            (d.mousedown = {
              t: this.canvas,
              f: function (a) {
                f._handleMouseDown(a);
              },
            });
          for (b in d) (c = d[b]), c.t.addEventListener(b, c.f, !1);
        }
      }),
      (b.clone = function () {
        throw "Stage cannot be cloned.";
      }),
      (b.toString = function () {
        return "[Stage (name=" + this.name + ")]";
      }),
      (b._getElementRect = function (a) {
        var b;
        try {
          b = a.getBoundingClientRect();
        } catch (c) {
          b = {
            top: a.offsetTop,
            left: a.offsetLeft,
            width: a.offsetWidth,
            height: a.offsetHeight,
          };
        }
        var d =
            (window.pageXOffset || document.scrollLeft || 0) -
            (document.clientLeft || document.body.clientLeft || 0),
          e =
            (window.pageYOffset || document.scrollTop || 0) -
            (document.clientTop || document.body.clientTop || 0),
          f = window.getComputedStyle
            ? getComputedStyle(a, null)
            : a.currentStyle,
          g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth),
          h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth),
          i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth),
          j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);
        return {
          left: b.left + d + g,
          right: b.right + d - i,
          top: b.top + e + h,
          bottom: b.bottom + e - j,
        };
      }),
      (b._getPointerData = function (a) {
        var b = this._pointerData[a];
        return b || (b = this._pointerData[a] = { x: 0, y: 0 }), b;
      }),
      (b._handleMouseMove = function (a) {
        a || (a = window.event),
          this._handlePointerMove(-1, a, a.pageX, a.pageY);
      }),
      (b._handlePointerMove = function (a, b, c, d, e) {
        if ((!this._prevStage || void 0 !== e) && this.canvas) {
          var f = this._nextStage,
            g = this._getPointerData(a),
            h = g.inBounds;
          this._updatePointerPosition(a, b, c, d),
            (h || g.inBounds || this.mouseMoveOutside) &&
              (-1 === a &&
                g.inBounds == !h &&
                this._dispatchMouseEvent(
                  this,
                  h ? "mouseleave" : "mouseenter",
                  !1,
                  a,
                  g,
                  b
                ),
              this._dispatchMouseEvent(this, "stagemousemove", !1, a, g, b),
              this._dispatchMouseEvent(g.target, "pressmove", !0, a, g, b)),
            f && f._handlePointerMove(a, b, c, d, null);
        }
      }),
      (b._updatePointerPosition = function (a, b, c, d) {
        var e = this._getElementRect(this.canvas);
        (c -= e.left), (d -= e.top);
        var f = this.canvas.width,
          g = this.canvas.height;
        (c /= (e.right - e.left) / f), (d /= (e.bottom - e.top) / g);
        var h = this._getPointerData(a);
        (h.inBounds = c >= 0 && d >= 0 && f - 1 >= c && g - 1 >= d)
          ? ((h.x = c), (h.y = d))
          : this.mouseMoveOutside &&
            ((h.x = 0 > c ? 0 : c > f - 1 ? f - 1 : c),
            (h.y = 0 > d ? 0 : d > g - 1 ? g - 1 : d)),
          (h.posEvtObj = b),
          (h.rawX = c),
          (h.rawY = d),
          (a === this._primaryPointerID || -1 === a) &&
            ((this.mouseX = h.x),
            (this.mouseY = h.y),
            (this.mouseInBounds = h.inBounds));
      }),
      (b._handleMouseUp = function (a) {
        this._handlePointerUp(-1, a, !1);
      }),
      (b._handlePointerUp = function (a, b, c, d) {
        var e = this._nextStage,
          f = this._getPointerData(a);
        if (!this._prevStage || void 0 !== d) {
          var g = null,
            h = f.target;
          d ||
            (!h && !e) ||
            (g = this._getObjectsUnderPoint(f.x, f.y, null, !0)),
            f.down &&
              (this._dispatchMouseEvent(this, "stagemouseup", !1, a, f, b, g),
              (f.down = !1)),
            g == h && this._dispatchMouseEvent(h, "click", !0, a, f, b),
            this._dispatchMouseEvent(h, "pressup", !0, a, f, b),
            c
              ? (a == this._primaryPointerID && (this._primaryPointerID = null),
                delete this._pointerData[a])
              : (f.target = null),
            e && e._handlePointerUp(a, b, c, d || (g && this));
        }
      }),
      (b._handleMouseDown = function (a) {
        this._handlePointerDown(-1, a, a.pageX, a.pageY);
      }),
      (b._handlePointerDown = function (a, b, c, d, e) {
        this.preventSelection && b.preventDefault(),
          (null == this._primaryPointerID || -1 === a) &&
            (this._primaryPointerID = a),
          null != d && this._updatePointerPosition(a, b, c, d);
        var f = null,
          g = this._nextStage,
          h = this._getPointerData(a);
        e || (f = h.target = this._getObjectsUnderPoint(h.x, h.y, null, !0)),
          h.inBounds &&
            (this._dispatchMouseEvent(this, "stagemousedown", !1, a, h, b, f),
            (h.down = !0)),
          this._dispatchMouseEvent(f, "mousedown", !0, a, h, b),
          g && g._handlePointerDown(a, b, c, d, e || (f && this));
      }),
      (b._testMouseOver = function (a, b, c) {
        if (!this._prevStage || void 0 !== b) {
          var d = this._nextStage;
          if (!this._mouseOverIntervalID)
            return void (d && d._testMouseOver(a, b, c));
          var e = this._getPointerData(-1);
          if (
            e &&
            (a ||
              this.mouseX != this._mouseOverX ||
              this.mouseY != this._mouseOverY ||
              !this.mouseInBounds)
          ) {
            var f,
              g,
              h,
              i = e.posEvtObj,
              j = c || (i && i.target == this.canvas),
              k = null,
              l = -1,
              m = "";
            !b &&
              (a || (this.mouseInBounds && j)) &&
              ((k = this._getObjectsUnderPoint(
                this.mouseX,
                this.mouseY,
                null,
                !0
              )),
              (this._mouseOverX = this.mouseX),
              (this._mouseOverY = this.mouseY));
            var n = this._mouseOverTarget || [],
              o = n[n.length - 1],
              p = (this._mouseOverTarget = []);
            for (f = k; f; ) p.unshift(f), m || (m = f.cursor), (f = f.parent);
            for (
              this.canvas.style.cursor = m,
                !b && c && (c.canvas.style.cursor = m),
                g = 0,
                h = p.length;
              h > g && p[g] == n[g];
              g++
            )
              l = g;
            for (
              o != k &&
                this._dispatchMouseEvent(o, "mouseout", !0, -1, e, i, k),
                g = n.length - 1;
              g > l;
              g--
            )
              this._dispatchMouseEvent(n[g], "rollout", !1, -1, e, i, k);
            for (g = p.length - 1; g > l; g--)
              this._dispatchMouseEvent(p[g], "rollover", !1, -1, e, i, o);
            o != k && this._dispatchMouseEvent(k, "mouseover", !0, -1, e, i, o),
              d && d._testMouseOver(a, b || (k && this), c || (j && this));
          }
        }
      }),
      (b._handleDoubleClick = function (a, b) {
        var c = null,
          d = this._nextStage,
          e = this._getPointerData(-1);
        b ||
          ((c = this._getObjectsUnderPoint(e.x, e.y, null, !0)),
          this._dispatchMouseEvent(c, "dblclick", !0, -1, e, a)),
          d && d._handleDoubleClick(a, b || (c && this));
      }),
      (b._dispatchMouseEvent = function (a, b, c, d, e, f, g) {
        if (a && (c || a.hasEventListener(b))) {
          var h = new createjs.MouseEvent(
            b,
            c,
            !1,
            e.x,
            e.y,
            f,
            d,
            d === this._primaryPointerID || -1 === d,
            e.rawX,
            e.rawY,
            g
          );
          a.dispatchEvent(h);
        }
      }),
      (createjs.Stage = createjs.promote(a, "Container"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    function a(a) {
      this.DisplayObject_constructor(),
        "string" == typeof a
          ? ((this.image = document.createElement("img")), (this.image.src = a))
          : (this.image = a),
        (this.sourceRect = null);
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    (b.initialize = a),
      (b.isVisible = function () {
        var a = this.image,
          b =
            this.cacheCanvas ||
            (a && (a.naturalWidth || a.getContext || a.readyState >= 2));
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY &&
          b
        );
      }),
      (b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b) || !this.image) return !0;
        var c = this.image,
          d = this.sourceRect;
        if (d) {
          var e = d.x,
            f = d.y,
            g = e + d.width,
            h = f + d.height,
            i = 0,
            j = 0,
            k = c.width,
            l = c.height;
          0 > e && ((i -= e), (e = 0)),
            g > k && (g = k),
            0 > f && ((j -= f), (f = 0)),
            h > l && (h = l),
            a.drawImage(c, e, f, g - e, h - f, i, j, g - e, h - f);
        } else a.drawImage(c, 0, 0);
        return !0;
      }),
      (b.getBounds = function () {
        var a = this.DisplayObject_getBounds();
        if (a) return a;
        var b = this.image,
          c = this.sourceRect || b,
          d = b && (b.naturalWidth || b.getContext || b.readyState >= 2);
        return d ? this._rectangle.setValues(0, 0, c.width, c.height) : null;
      }),
      (b.clone = function () {
        var b = new a(this.image);
        return (
          this.sourceRect && (b.sourceRect = this.sourceRect.clone()),
          this._cloneProps(b),
          b
        );
      }),
      (b.toString = function () {
        return "[Bitmap (name=" + this.name + ")]";
      }),
      (createjs.Bitmap = createjs.promote(a, "DisplayObject"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.DisplayObject_constructor(),
        (this.currentFrame = 0),
        (this.currentAnimation = null),
        (this.paused = !0),
        (this.spriteSheet = a),
        (this.currentAnimationFrame = 0),
        (this.framerate = 0),
        (this._animation = null),
        (this._currentFrame = null),
        (this._skipAdvance = !1),
        null != b && this.gotoAndPlay(b);
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    (b.initialize = a),
      (b.isVisible = function () {
        var a = this.cacheCanvas || this.spriteSheet.complete;
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY &&
          a
        );
      }),
      (b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b)) return !0;
        this._normalizeFrame();
        var c = this.spriteSheet.getFrame(0 | this._currentFrame);
        if (!c) return !1;
        var d = c.rect;
        return (
          d.width &&
            d.height &&
            a.drawImage(
              c.image,
              d.x,
              d.y,
              d.width,
              d.height,
              -c.regX,
              -c.regY,
              d.width,
              d.height
            ),
          !0
        );
      }),
      (b.play = function () {
        this.paused = !1;
      }),
      (b.stop = function () {
        this.paused = !0;
      }),
      (b.gotoAndPlay = function (a) {
        (this.paused = !1), (this._skipAdvance = !0), this._goto(a);
      }),
      (b.gotoAndStop = function (a) {
        (this.paused = !0), this._goto(a);
      }),
      (b.advance = function (a) {
        var b = this.framerate || this.spriteSheet.framerate,
          c = b && null != a ? a / (1e3 / b) : 1;
        this._normalizeFrame(c);
      }),
      (b.getBounds = function () {
        return (
          this.DisplayObject_getBounds() ||
          this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        );
      }),
      (b.clone = function () {
        return this._cloneProps(new a(this.spriteSheet));
      }),
      (b.toString = function () {
        return "[Sprite (name=" + this.name + ")]";
      }),
      (b._cloneProps = function (a) {
        return (
          this.DisplayObject__cloneProps(a),
          (a.currentFrame = this.currentFrame),
          (a.currentAnimation = this.currentAnimation),
          (a.paused = this.paused),
          (a.currentAnimationFrame = this.currentAnimationFrame),
          (a.framerate = this.framerate),
          (a._animation = this._animation),
          (a._currentFrame = this._currentFrame),
          (a._skipAdvance = this._skipAdvance),
          a
        );
      }),
      (b._tick = function (a) {
        this.paused ||
          (this._skipAdvance || this.advance(a && a.delta),
          (this._skipAdvance = !1)),
          this.DisplayObject__tick(a);
      }),
      (b._normalizeFrame = function (a) {
        a = a || 0;
        var b,
          c = this._animation,
          d = this.paused,
          e = this._currentFrame;
        if (c) {
          var f = c.speed || 1,
            g = this.currentAnimationFrame;
          if (((b = c.frames.length), g + a * f >= b)) {
            var h = c.next;
            if (this._dispatchAnimationEnd(c, e, d, h, b - 1)) return;
            if (h) return this._goto(h, a - (b - g) / f);
            (this.paused = !0), (g = c.frames.length - 1);
          } else g += a * f;
          (this.currentAnimationFrame = g),
            (this._currentFrame = c.frames[0 | g]);
        } else if (
          ((e = this._currentFrame += a),
          (b = this.spriteSheet.getNumFrames()),
          e >= b &&
            b > 0 &&
            !this._dispatchAnimationEnd(c, e, d, b - 1) &&
            (this._currentFrame -= b) >= b)
        )
          return this._normalizeFrame();
        (e = 0 | this._currentFrame),
          this.currentFrame != e &&
            ((this.currentFrame = e), this.dispatchEvent("change"));
      }),
      (b._dispatchAnimationEnd = function (a, b, c, d, e) {
        var f = a ? a.name : null;
        if (this.hasEventListener("animationend")) {
          var g = new createjs.Event("animationend");
          (g.name = f), (g.next = d), this.dispatchEvent(g);
        }
        var h = this._animation != a || this._currentFrame != b;
        return (
          h ||
            c ||
            !this.paused ||
            ((this.currentAnimationFrame = e), (h = !0)),
          h
        );
      }),
      (b._goto = function (a, b) {
        if (((this.currentAnimationFrame = 0), isNaN(a))) {
          var c = this.spriteSheet.getAnimation(a);
          c &&
            ((this._animation = c),
            (this.currentAnimation = a),
            this._normalizeFrame(b));
        } else
          (this.currentAnimation = this._animation = null),
            (this._currentFrame = a),
            this._normalizeFrame();
      }),
      (createjs.Sprite = createjs.promote(a, "DisplayObject"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.DisplayObject_constructor(),
        (this.graphics = a ? a : new createjs.Graphics());
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    (b.isVisible = function () {
      var a = this.cacheCanvas || (this.graphics && !this.graphics.isEmpty());
      return !!(
        this.visible &&
        this.alpha > 0 &&
        0 != this.scaleX &&
        0 != this.scaleY &&
        a
      );
    }),
      (b.draw = function (a, b) {
        return this.DisplayObject_draw(a, b)
          ? !0
          : (this.graphics.draw(a, this), !0);
      }),
      (b.clone = function (b) {
        var c = b && this.graphics ? this.graphics.clone() : this.graphics;
        return this._cloneProps(new a(c));
      }),
      (b.toString = function () {
        return "[Shape (name=" + this.name + ")]";
      }),
      (createjs.Shape = createjs.promote(a, "DisplayObject"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.DisplayObject_constructor(),
        (this.text = a),
        (this.font = b),
        (this.color = c),
        (this.textAlign = "left"),
        (this.textBaseline = "top"),
        (this.maxWidth = null),
        (this.outline = 0),
        (this.lineHeight = 0),
        (this.lineWidth = null);
    }
    var b = createjs.extend(a, createjs.DisplayObject),
      c = createjs.createCanvas
        ? createjs.createCanvas()
        : document.createElement("canvas");
    c.getContext &&
      ((a._workingContext = c.getContext("2d")), (c.width = c.height = 1)),
      (a.H_OFFSETS = { start: 0, left: 0, center: -0.5, end: -1, right: -1 }),
      (a.V_OFFSETS = {
        top: 0,
        hanging: -0.01,
        middle: -0.4,
        alphabetic: -0.8,
        ideographic: -0.85,
        bottom: -1,
      }),
      (b.isVisible = function () {
        var a = this.cacheCanvas || (null != this.text && "" !== this.text);
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY &&
          a
        );
      }),
      (b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b)) return !0;
        var c = this.color || "#000";
        return (
          this.outline
            ? ((a.strokeStyle = c), (a.lineWidth = 1 * this.outline))
            : (a.fillStyle = c),
          this._drawText(this._prepContext(a)),
          !0
        );
      }),
      (b.getMeasuredWidth = function () {
        return this._getMeasuredWidth(this.text);
      }),
      (b.getMeasuredLineHeight = function () {
        return 1.2 * this._getMeasuredWidth("M");
      }),
      (b.getMeasuredHeight = function () {
        return this._drawText(null, {}).height;
      }),
      (b.getBounds = function () {
        var b = this.DisplayObject_getBounds();
        if (b) return b;
        if (null == this.text || "" === this.text) return null;
        var c = this._drawText(null, {}),
          d =
            this.maxWidth && this.maxWidth < c.width ? this.maxWidth : c.width,
          e = d * a.H_OFFSETS[this.textAlign || "left"],
          f = this.lineHeight || this.getMeasuredLineHeight(),
          g = f * a.V_OFFSETS[this.textBaseline || "top"];
        return this._rectangle.setValues(e, g, d, c.height);
      }),
      (b.getMetrics = function () {
        var b = { lines: [] };
        return (
          (b.lineHeight = this.lineHeight || this.getMeasuredLineHeight()),
          (b.vOffset = b.lineHeight * a.V_OFFSETS[this.textBaseline || "top"]),
          this._drawText(null, b, b.lines)
        );
      }),
      (b.clone = function () {
        return this._cloneProps(new a(this.text, this.font, this.color));
      }),
      (b.toString = function () {
        return (
          "[Text (text=" +
          (this.text.length > 20
            ? this.text.substr(0, 17) + "..."
            : this.text) +
          ")]"
        );
      }),
      (b._cloneProps = function (a) {
        return (
          this.DisplayObject__cloneProps(a),
          (a.textAlign = this.textAlign),
          (a.textBaseline = this.textBaseline),
          (a.maxWidth = this.maxWidth),
          (a.outline = this.outline),
          (a.lineHeight = this.lineHeight),
          (a.lineWidth = this.lineWidth),
          a
        );
      }),
      (b._prepContext = function (a) {
        return (
          (a.font = this.font || "10px sans-serif"),
          (a.textAlign = this.textAlign || "left"),
          (a.textBaseline = this.textBaseline || "top"),
          a
        );
      }),
      (b._drawText = function (b, c, d) {
        var e = !!b;
        e || ((b = a._workingContext), b.save(), this._prepContext(b));
        for (
          var f = this.lineHeight || this.getMeasuredLineHeight(),
            g = 0,
            h = 0,
            i = String(this.text).split(/(?:\r\n|\r|\n)/),
            j = 0,
            k = i.length;
          k > j;
          j++
        ) {
          var l = i[j],
            m = null;
          if (
            null != this.lineWidth &&
            (m = b.measureText(l).width) > this.lineWidth
          ) {
            var n = l.split(/(\s)/);
            (l = n[0]), (m = b.measureText(l).width);
            for (var o = 1, p = n.length; p > o; o += 2) {
              var q = b.measureText(n[o] + n[o + 1]).width;
              m + q > this.lineWidth
                ? (e && this._drawTextLine(b, l, h * f),
                  d && d.push(l),
                  m > g && (g = m),
                  (l = n[o + 1]),
                  (m = b.measureText(l).width),
                  h++)
                : ((l += n[o] + n[o + 1]), (m += q));
            }
          }
          e && this._drawTextLine(b, l, h * f),
            d && d.push(l),
            c && null == m && (m = b.measureText(l).width),
            m > g && (g = m),
            h++;
        }
        return c && ((c.width = g), (c.height = h * f)), e || b.restore(), c;
      }),
      (b._drawTextLine = function (a, b, c) {
        this.outline
          ? a.strokeText(b, 0, c, this.maxWidth || 65535)
          : a.fillText(b, 0, c, this.maxWidth || 65535);
      }),
      (b._getMeasuredWidth = function (b) {
        var c = a._workingContext;
        c.save();
        var d = this._prepContext(c).measureText(b).width;
        return c.restore(), d;
      }),
      (createjs.Text = createjs.promote(a, "DisplayObject"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.Container_constructor(),
        (this.text = a || ""),
        (this.spriteSheet = b),
        (this.lineHeight = 0),
        (this.letterSpacing = 0),
        (this.spaceWidth = 0),
        (this._oldProps = {
          text: 0,
          spriteSheet: 0,
          lineHeight: 0,
          letterSpacing: 0,
          spaceWidth: 0,
        });
    }
    var b = createjs.extend(a, createjs.Container);
    (a.maxPoolSize = 100),
      (a._spritePool = []),
      (b.draw = function (a, b) {
        this.DisplayObject_draw(a, b) ||
          (this._updateText(), this.Container_draw(a, b));
      }),
      (b.getBounds = function () {
        return this._updateText(), this.Container_getBounds();
      }),
      (b.isVisible = function () {
        var a =
          this.cacheCanvas ||
          (this.spriteSheet && this.spriteSheet.complete && this.text);
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 !== this.scaleX &&
          0 !== this.scaleY &&
          a
        );
      }),
      (b.clone = function () {
        return this._cloneProps(new a(this.text, this.spriteSheet));
      }),
      (b.addChild =
        b.addChildAt =
        b.removeChild =
        b.removeChildAt =
        b.removeAllChildren =
          function () {}),
      (b._cloneProps = function (a) {
        return (
          this.Container__cloneProps(a),
          (a.lineHeight = this.lineHeight),
          (a.letterSpacing = this.letterSpacing),
          (a.spaceWidth = this.spaceWidth),
          a
        );
      }),
      (b._getFrameIndex = function (a, b) {
        var c,
          d = b.getAnimation(a);
        return (
          d ||
            (a != (c = a.toUpperCase()) ||
              a != (c = a.toLowerCase()) ||
              (c = null),
            c && (d = b.getAnimation(c))),
          d && d.frames[0]
        );
      }),
      (b._getFrame = function (a, b) {
        var c = this._getFrameIndex(a, b);
        return null == c ? c : b.getFrame(c);
      }),
      (b._getLineHeight = function (a) {
        var b =
          this._getFrame("1", a) ||
          this._getFrame("T", a) ||
          this._getFrame("L", a) ||
          a.getFrame(0);
        return b ? b.rect.height : 1;
      }),
      (b._getSpaceWidth = function (a) {
        var b =
          this._getFrame("1", a) ||
          this._getFrame("l", a) ||
          this._getFrame("e", a) ||
          this._getFrame("a", a) ||
          a.getFrame(0);
        return b ? b.rect.width : 1;
      }),
      (b._updateText = function () {
        var b,
          c = 0,
          d = 0,
          e = this._oldProps,
          f = !1,
          g = this.spaceWidth,
          h = this.lineHeight,
          i = this.spriteSheet,
          j = a._spritePool,
          k = this.children,
          l = 0,
          m = k.length;
        for (var n in e) e[n] != this[n] && ((e[n] = this[n]), (f = !0));
        if (f) {
          var o = !!this._getFrame(" ", i);
          o || g || (g = this._getSpaceWidth(i)),
            h || (h = this._getLineHeight(i));
          for (var p = 0, q = this.text.length; q > p; p++) {
            var r = this.text.charAt(p);
            if (" " != r || o)
              if ("\n" != r && "\r" != r) {
                var s = this._getFrameIndex(r, i);
                null != s &&
                  (m > l
                    ? (b = k[l])
                    : (k.push((b = j.length ? j.pop() : new createjs.Sprite())),
                      (b.parent = this),
                      m++),
                  (b.spriteSheet = i),
                  b.gotoAndStop(s),
                  (b.x = c),
                  (b.y = d),
                  l++,
                  (c += b.getBounds().width + this.letterSpacing));
              } else
                "\r" == r && "\n" == this.text.charAt(p + 1) && p++,
                  (c = 0),
                  (d += h);
            else c += g;
          }
          for (; m > l; ) j.push((b = k.pop())), (b.parent = null), m--;
          j.length > a.maxPoolSize && (j.length = a.maxPoolSize);
        }
      }),
      (createjs.BitmapText = createjs.promote(a, "Container"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(b, c, d, e) {
      this.Container_constructor(),
        !a.inited && a.init(),
        (this.mode = b || a.INDEPENDENT),
        (this.startPosition = c || 0),
        (this.loop = d),
        (this.currentFrame = 0),
        (this.timeline = new createjs.Timeline(null, e, {
          paused: !0,
          position: c,
          useTicks: !0,
        })),
        (this.paused = !1),
        (this.actionsEnabled = !0),
        (this.autoReset = !0),
        (this.frameBounds = this.frameBounds || null),
        (this.framerate = null),
        (this._synchOffset = 0),
        (this._prevPos = -1),
        (this._prevPosition = 0),
        (this._t = 0),
        (this._managed = {});
    }
    function b() {
      throw "MovieClipPlugin cannot be instantiated.";
    }
    var c = createjs.extend(a, createjs.Container);
    (a.INDEPENDENT = "independent"),
      (a.SINGLE_FRAME = "single"),
      (a.SYNCHED = "synched"),
      (a.inited = !1),
      (a.init = function () {
        a.inited || (b.install(), (a.inited = !0));
      }),
      (c.getLabels = function () {
        return this.timeline.getLabels();
      }),
      (c.getCurrentLabel = function () {
        return this._updateTimeline(), this.timeline.getCurrentLabel();
      }),
      (c.getDuration = function () {
        return this.timeline.duration;
      });
    try {
      Object.defineProperties(c, {
        labels: { get: c.getLabels },
        currentLabel: { get: c.getCurrentLabel },
        totalFrames: { get: c.getDuration },
        duration: { get: c.getDuration },
      });
    } catch (d) {}
    (c.initialize = a),
      (c.isVisible = function () {
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY
        );
      }),
      (c.draw = function (a, b) {
        return this.DisplayObject_draw(a, b)
          ? !0
          : (this._updateTimeline(), this.Container_draw(a, b), !0);
      }),
      (c.play = function () {
        this.paused = !1;
      }),
      (c.stop = function () {
        this.paused = !0;
      }),
      (c.gotoAndPlay = function (a) {
        (this.paused = !1), this._goto(a);
      }),
      (c.gotoAndStop = function (a) {
        (this.paused = !0), this._goto(a);
      }),
      (c.advance = function (b) {
        var c = a.INDEPENDENT;
        if (this.mode == c) {
          for (var d = this, e = d.framerate; (d = d.parent) && null == e; )
            d.mode == c && (e = d._framerate);
          this._framerate = e;
          var f =
              null != e && -1 != e && null != b ? b / (1e3 / e) + this._t : 1,
            g = 0 | f;
          for (this._t = f - g; !this.paused && g--; )
            (this._prevPosition =
              this._prevPos < 0 ? 0 : this._prevPosition + 1),
              this._updateTimeline();
        }
      }),
      (c.clone = function () {
        throw "MovieClip cannot be cloned.";
      }),
      (c.toString = function () {
        return "[MovieClip (name=" + this.name + ")]";
      }),
      (c._tick = function (a) {
        this.advance(a && a.delta), this.Container__tick(a);
      }),
      (c._goto = function (a) {
        var b = this.timeline.resolve(a);
        null != b &&
          (-1 == this._prevPos && (this._prevPos = NaN),
          (this._prevPosition = b),
          (this._t = 0),
          this._updateTimeline());
      }),
      (c._reset = function () {
        (this._prevPos = -1),
          (this._t = this.currentFrame = 0),
          (this.paused = !1);
      }),
      (c._updateTimeline = function () {
        var b = this.timeline,
          c = this.mode != a.INDEPENDENT;
        b.loop = null == this.loop ? !0 : this.loop;
        var d = c
            ? this.startPosition +
              (this.mode == a.SINGLE_FRAME ? 0 : this._synchOffset)
            : this._prevPos < 0
            ? 0
            : this._prevPosition,
          e = c || !this.actionsEnabled ? createjs.Tween.NONE : null;
        if (
          ((this.currentFrame = b._calcPosition(d)),
          b.setPosition(d, e),
          (this._prevPosition = b._prevPosition),
          this._prevPos != b._prevPos)
        ) {
          this.currentFrame = this._prevPos = b._prevPos;
          for (var f in this._managed) this._managed[f] = 1;
          for (var g = b._tweens, h = 0, i = g.length; i > h; h++) {
            var j = g[h],
              k = j._target;
            if (k != this && !j.passive) {
              var l = j._stepPosition;
              k instanceof createjs.DisplayObject
                ? this._addManagedChild(k, l)
                : this._setState(k.state, l);
            }
          }
          var m = this.children;
          for (h = m.length - 1; h >= 0; h--) {
            var n = m[h].id;
            1 == this._managed[n] &&
              (this.removeChildAt(h), delete this._managed[n]);
          }
        }
      }),
      (c._setState = function (a, b) {
        if (a)
          for (var c = a.length - 1; c >= 0; c--) {
            var d = a[c],
              e = d.t,
              f = d.p;
            for (var g in f) e[g] = f[g];
            this._addManagedChild(e, b);
          }
      }),
      (c._addManagedChild = function (b, c) {
        b._off ||
          (this.addChildAt(b, 0),
          b instanceof a &&
            ((b._synchOffset = c),
            b.mode == a.INDEPENDENT &&
              b.autoReset &&
              !this._managed[b.id] &&
              b._reset()),
          (this._managed[b.id] = 2));
      }),
      (c._getBounds = function (a, b) {
        var c = this.DisplayObject_getBounds();
        return (
          c ||
            (this._updateTimeline(),
            this.frameBounds &&
              (c = this._rectangle.copy(this.frameBounds[this.currentFrame]))),
          c ? this._transformBounds(c, a, b) : this.Container__getBounds(a, b)
        );
      }),
      (createjs.MovieClip = createjs.promote(a, "Container")),
      (b.priority = 100),
      (b.install = function () {
        createjs.Tween.installPlugin(b, ["startPosition"]);
      }),
      (b.init = function (a, b, c) {
        return c;
      }),
      (b.step = function () {}),
      (b.tween = function (b, c, d, e, f, g, h, i) {
        return b.target instanceof a ? (1 == g ? f[c] : e[c]) : d;
      });
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "SpriteSheetUtils cannot be instantiated";
    }
    var b = createjs.createCanvas
      ? createjs.createCanvas()
      : document.createElement("canvas");
    b.getContext &&
      ((a._workingCanvas = b),
      (a._workingContext = b.getContext("2d")),
      (b.width = b.height = 1)),
      (a.addFlippedFrames = function (b, c, d, e) {
        if (c || d || e) {
          var f = 0;
          c && a._flip(b, ++f, !0, !1),
            d && a._flip(b, ++f, !1, !0),
            e && a._flip(b, ++f, !0, !0);
        }
      }),
      (a.extractFrame = function (b, c) {
        isNaN(c) && (c = b.getAnimation(c).frames[0]);
        var d = b.getFrame(c);
        if (!d) return null;
        var e = d.rect,
          f = a._workingCanvas;
        (f.width = e.width),
          (f.height = e.height),
          a._workingContext.drawImage(
            d.image,
            e.x,
            e.y,
            e.width,
            e.height,
            0,
            0,
            e.width,
            e.height
          );
        var g = document.createElement("img");
        return (g.src = f.toDataURL("image/png")), g;
      }),
      (a.mergeAlpha = function (a, b, c) {
        c ||
          (c = createjs.createCanvas
            ? createjs.createCanvas()
            : document.createElement("canvas")),
          (c.width = Math.max(b.width, a.width)),
          (c.height = Math.max(b.height, a.height));
        var d = c.getContext("2d");
        return (
          d.save(),
          d.drawImage(a, 0, 0),
          (d.globalCompositeOperation = "destination-in"),
          d.drawImage(b, 0, 0),
          d.restore(),
          c
        );
      }),
      (a._flip = function (b, c, d, e) {
        for (
          var f = b._images,
            g = a._workingCanvas,
            h = a._workingContext,
            i = f.length / c,
            j = 0;
          i > j;
          j++
        ) {
          var k = f[j];
          (k.__tmp = j),
            h.setTransform(1, 0, 0, 1, 0, 0),
            h.clearRect(0, 0, g.width + 1, g.height + 1),
            (g.width = k.width),
            (g.height = k.height),
            h.setTransform(
              d ? -1 : 1,
              0,
              0,
              e ? -1 : 1,
              d ? k.width : 0,
              e ? k.height : 0
            ),
            h.drawImage(k, 0, 0);
          var l = document.createElement("img");
          (l.src = g.toDataURL("image/png")),
            (l.width = k.width),
            (l.height = k.height),
            f.push(l);
        }
        var m = b._frames,
          n = m.length / c;
        for (j = 0; n > j; j++) {
          k = m[j];
          var o = k.rect.clone();
          l = f[k.image.__tmp + i * c];
          var p = { image: l, rect: o, regX: k.regX, regY: k.regY };
          d && ((o.x = l.width - o.x - o.width), (p.regX = o.width - k.regX)),
            e &&
              ((o.y = l.height - o.y - o.height), (p.regY = o.height - k.regY)),
            m.push(p);
        }
        var q = "_" + (d ? "h" : "") + (e ? "v" : ""),
          r = b._animations,
          s = b._data,
          t = r.length / c;
        for (j = 0; t > j; j++) {
          var u = r[j];
          k = s[u];
          var v = { name: u + q, speed: k.speed, next: k.next, frames: [] };
          k.next && (v.next += q), (m = k.frames);
          for (var w = 0, x = m.length; x > w; w++) v.frames.push(m[w] + n * c);
          (s[v.name] = v), r.push(v.name);
        }
      }),
      (createjs.SpriteSheetUtils = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.EventDispatcher_constructor(),
        (this.maxWidth = 2048),
        (this.maxHeight = 2048),
        (this.spriteSheet = null),
        (this.scale = 1),
        (this.padding = 1),
        (this.timeSlice = 0.3),
        (this.progress = -1),
        (this.framerate = a || 0),
        (this._frames = []),
        (this._animations = {}),
        (this._data = null),
        (this._nextFrameIndex = 0),
        (this._index = 0),
        (this._timerID = null),
        (this._scale = 1);
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    (a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions"),
      (a.ERR_RUNNING = "a build is already running"),
      (b.addFrame = function (b, c, d, e, f) {
        if (this._data) throw a.ERR_RUNNING;
        var g = c || b.bounds || b.nominalBounds;
        return (
          !g && b.getBounds && (g = b.getBounds()),
          g
            ? ((d = d || 1),
              this._frames.push({
                source: b,
                sourceRect: g,
                scale: d,
                funct: e,
                data: f,
                index: this._frames.length,
                height: g.height * d,
              }) - 1)
            : null
        );
      }),
      (b.addAnimation = function (b, c, d, e) {
        if (this._data) throw a.ERR_RUNNING;
        this._animations[b] = { frames: c, next: d, speed: e };
      }),
      (b.addMovieClip = function (b, c, d, e, f, g) {
        if (this._data) throw a.ERR_RUNNING;
        var h = b.frameBounds,
          i = c || b.bounds || b.nominalBounds;
        if ((!i && b.getBounds && (i = b.getBounds()), i || h)) {
          var j,
            k,
            l = this._frames.length,
            m = b.timeline.duration;
          for (j = 0; m > j; j++) {
            var n = h && h[j] ? h[j] : i;
            this.addFrame(b, n, d, this._setupMovieClipFrame, {
              i: j,
              f: e,
              d: f,
            });
          }
          var o = b.timeline._labels,
            p = [];
          for (var q in o) p.push({ index: o[q], label: q });
          if (p.length)
            for (
              p.sort(function (a, b) {
                return a.index - b.index;
              }),
                j = 0,
                k = p.length;
              k > j;
              j++
            ) {
              for (
                var r = p[j].label,
                  s = l + p[j].index,
                  t = l + (j == k - 1 ? m : p[j + 1].index),
                  u = [],
                  v = s;
                t > v;
                v++
              )
                u.push(v);
              (!g || (r = g(r, b, s, t))) && this.addAnimation(r, u, !0);
            }
        }
      }),
      (b.build = function () {
        if (this._data) throw a.ERR_RUNNING;
        for (this._startBuild(); this._drawNext(); );
        return this._endBuild(), this.spriteSheet;
      }),
      (b.buildAsync = function (b) {
        if (this._data) throw a.ERR_RUNNING;
        (this.timeSlice = b), this._startBuild();
        var c = this;
        this._timerID = setTimeout(function () {
          c._run();
        }, 50 - 50 * Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)));
      }),
      (b.stopAsync = function () {
        clearTimeout(this._timerID), (this._data = null);
      }),
      (b.clone = function () {
        throw "SpriteSheetBuilder cannot be cloned.";
      }),
      (b.toString = function () {
        return "[SpriteSheetBuilder]";
      }),
      (b._startBuild = function () {
        var b = this.padding || 0;
        (this.progress = 0),
          (this.spriteSheet = null),
          (this._index = 0),
          (this._scale = this.scale);
        var c = [];
        this._data = {
          images: [],
          frames: c,
          framerate: this.framerate,
          animations: this._animations,
        };
        var d = this._frames.slice();
        if (
          (d.sort(function (a, b) {
            return a.height <= b.height ? -1 : 1;
          }),
          d[d.length - 1].height + 2 * b > this.maxHeight)
        )
          throw a.ERR_DIMENSIONS;
        for (var e = 0, f = 0, g = 0; d.length; ) {
          var h = this._fillRow(d, e, g, c, b);
          if ((h.w > f && (f = h.w), (e += h.h), !h.h || !d.length)) {
            var i = createjs.createCanvas
              ? createjs.createCanvas()
              : document.createElement("canvas");
            (i.width = this._getSize(f, this.maxWidth)),
              (i.height = this._getSize(e, this.maxHeight)),
              (this._data.images[g] = i),
              h.h || ((f = e = 0), g++);
          }
        }
      }),
      (b._setupMovieClipFrame = function (a, b) {
        var c = a.actionsEnabled;
        (a.actionsEnabled = !1),
          a.gotoAndStop(b.i),
          (a.actionsEnabled = c),
          b.f && b.f(a, b.d, b.i);
      }),
      (b._getSize = function (a, b) {
        for (var c = 4; Math.pow(2, ++c) < a; );
        return Math.min(b, Math.pow(2, c));
      }),
      (b._fillRow = function (b, c, d, e, f) {
        var g = this.maxWidth,
          h = this.maxHeight;
        c += f;
        for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
          var m = b[l],
            n = this._scale * m.scale,
            o = m.sourceRect,
            p = m.source,
            q = Math.floor(n * o.x - f),
            r = Math.floor(n * o.y - f),
            s = Math.ceil(n * o.height + 2 * f),
            t = Math.ceil(n * o.width + 2 * f);
          if (t > g) throw a.ERR_DIMENSIONS;
          s > i ||
            j + t > g ||
            ((m.img = d),
            (m.rect = new createjs.Rectangle(j, c, t, s)),
            (k = k || s),
            b.splice(l, 1),
            (e[m.index] = [
              j,
              c,
              t,
              s,
              d,
              Math.round(-q + n * p.regX - f),
              Math.round(-r + n * p.regY - f),
            ]),
            (j += t));
        }
        return { w: j, h: k };
      }),
      (b._endBuild = function () {
        (this.spriteSheet = new createjs.SpriteSheet(this._data)),
          (this._data = null),
          (this.progress = 1),
          this.dispatchEvent("complete");
      }),
      (b._run = function () {
        for (
          var a = 50 * Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)),
            b = new Date().getTime() + a,
            c = !1;
          b > new Date().getTime();

        )
          if (!this._drawNext()) {
            c = !0;
            break;
          }
        if (c) this._endBuild();
        else {
          var d = this;
          this._timerID = setTimeout(function () {
            d._run();
          }, 50 - a);
        }
        var e = (this.progress = this._index / this._frames.length);
        if (this.hasEventListener("progress")) {
          var f = new createjs.Event("progress");
          (f.progress = e), this.dispatchEvent(f);
        }
      }),
      (b._drawNext = function () {
        var a = this._frames[this._index],
          b = a.scale * this._scale,
          c = a.rect,
          d = a.sourceRect,
          e = this._data.images[a.img],
          f = e.getContext("2d");
        return (
          a.funct && a.funct(a.source, a.data),
          f.save(),
          f.beginPath(),
          f.rect(c.x, c.y, c.width, c.height),
          f.clip(),
          f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)),
          f.scale(b, b),
          a.source.draw(f),
          f.restore(),
          ++this._index < this._frames.length
        );
      }),
      (createjs.SpriteSheetBuilder = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.DisplayObject_constructor(),
        "string" == typeof a && (a = document.getElementById(a)),
        (this.mouseEnabled = !1);
      var b = a.style;
      (b.position = "absolute"),
        (b.transformOrigin =
          b.WebkitTransformOrigin =
          b.msTransformOrigin =
          b.MozTransformOrigin =
          b.OTransformOrigin =
            "0% 0%"),
        (this.htmlElement = a),
        (this._oldProps = null);
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    (b.isVisible = function () {
      return null != this.htmlElement;
    }),
      (b.draw = function (a, b) {
        return !0;
      }),
      (b.cache = function () {}),
      (b.uncache = function () {}),
      (b.updateCache = function () {}),
      (b.hitTest = function () {}),
      (b.localToGlobal = function () {}),
      (b.globalToLocal = function () {}),
      (b.localToLocal = function () {}),
      (b.clone = function () {
        throw "DOMElement cannot be cloned.";
      }),
      (b.toString = function () {
        return "[DOMElement (name=" + this.name + ")]";
      }),
      (b._tick = function (a) {
        var b = this.getStage();
        b && b.on("drawend", this._handleDrawEnd, this, !0),
          this.DisplayObject__tick(a);
      }),
      (b._handleDrawEnd = function (a) {
        var b = this.htmlElement;
        if (b) {
          var c = b.style,
            d = this.getConcatenatedDisplayProps(this._props),
            e = d.matrix,
            f = d.visible ? "visible" : "hidden";
          if ((f != c.visibility && (c.visibility = f), d.visible)) {
            var g = this._oldProps,
              h = g && g.matrix,
              i = 1e4;
            if (!h || !h.equals(e)) {
              var j =
                "matrix(" +
                ((e.a * i) | 0) / i +
                "," +
                ((e.b * i) | 0) / i +
                "," +
                ((e.c * i) | 0) / i +
                "," +
                ((e.d * i) | 0) / i +
                "," +
                ((e.tx + 0.5) | 0);
              (c.transform =
                c.WebkitTransform =
                c.OTransform =
                c.msTransform =
                  j + "," + ((e.ty + 0.5) | 0) + ")"),
                (c.MozTransform = j + "px," + ((e.ty + 0.5) | 0) + "px)"),
                g || (g = this._oldProps = new createjs.DisplayProps(!0, NaN)),
                g.matrix.copy(e);
            }
            g.alpha != d.alpha &&
              ((c.opacity = "" + ((d.alpha * i) | 0) / i), (g.alpha = d.alpha));
          }
        }
      }),
      (createjs.DOMElement = createjs.promote(a, "DisplayObject"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {}
    var b = a.prototype;
    (b.getBounds = function (a) {
      return a;
    }),
      (b.applyFilter = function (a, b, c, d, e, f, g, h) {
        (f = f || a), null == g && (g = b), null == h && (h = c);
        try {
          var i = a.getImageData(b, c, d, e);
        } catch (j) {
          return !1;
        }
        return this._applyFilter(i) ? (f.putImageData(i, g, h), !0) : !1;
      }),
      (b.toString = function () {
        return "[Filter]";
      }),
      (b.clone = function () {
        return new a();
      }),
      (b._applyFilter = function (a) {
        return !0;
      }),
      (createjs.Filter = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      (isNaN(a) || 0 > a) && (a = 0),
        (isNaN(b) || 0 > b) && (b = 0),
        (isNaN(c) || 1 > c) && (c = 1),
        (this.blurX = 0 | a),
        (this.blurY = 0 | b),
        (this.quality = 0 | c);
    }
    var b = createjs.extend(a, createjs.Filter);
    (a.MUL_TABLE = [
      1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265,
      497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269,
      261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361,
      353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271,
      267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435,
      429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363,
      359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77,
      305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67,
      133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477,
      237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215,
      427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49,
      389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179,
      89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329,
      327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153,
      305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143,
      285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269,
      267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1,
    ]),
      (a.SHG_TABLE = [
        0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14,
        14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15,
        15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15,
        12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14,
        16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16,
        16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16,
        14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16,
        15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16,
        17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16,
        17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15,
        16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17,
        17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17,
        16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14,
        17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16,
        17, 16, 17, 9,
      ]),
      (b.getBounds = function (a) {
        var b = 0 | this.blurX,
          c = 0 | this.blurY;
        if (0 >= b && 0 >= c) return a;
        var d = Math.pow(this.quality, 0.2);
        return (a || new createjs.Rectangle()).pad(
          b * d + 1,
          c * d + 1,
          b * d + 1,
          c * d + 1
        );
      }),
      (b.clone = function () {
        return new a(this.blurX, this.blurY, this.quality);
      }),
      (b.toString = function () {
        return "[BlurFilter]";
      }),
      (b._applyFilter = function (b) {
        var c = this.blurX >> 1;
        if (isNaN(c) || 0 > c) return !1;
        var d = this.blurY >> 1;
        if (isNaN(d) || 0 > d) return !1;
        if (0 == c && 0 == d) return !1;
        var e = this.quality;
        (isNaN(e) || 1 > e) && (e = 1),
          (e |= 0),
          e > 3 && (e = 3),
          1 > e && (e = 1);
        var f = b.data,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = (c + c + 1) | 0,
          w = (d + d + 1) | 0,
          x = 0 | b.width,
          y = 0 | b.height,
          z = (x - 1) | 0,
          A = (y - 1) | 0,
          B = (c + 1) | 0,
          C = (d + 1) | 0,
          D = { r: 0, b: 0, g: 0, a: 0 },
          E = D;
        for (i = 1; v > i; i++) E = E.n = { r: 0, b: 0, g: 0, a: 0 };
        E.n = D;
        var F = { r: 0, b: 0, g: 0, a: 0 },
          G = F;
        for (i = 1; w > i; i++) G = G.n = { r: 0, b: 0, g: 0, a: 0 };
        G.n = F;
        for (
          var H = null,
            I = 0 | a.MUL_TABLE[c],
            J = 0 | a.SHG_TABLE[c],
            K = 0 | a.MUL_TABLE[d],
            L = 0 | a.SHG_TABLE[d];
          e-- > 0;

        ) {
          m = l = 0;
          var M = I,
            N = J;
          for (h = y; --h > -1; ) {
            for (
              n = B * (r = f[0 | l]),
                o = B * (s = f[(l + 1) | 0]),
                p = B * (t = f[(l + 2) | 0]),
                q = B * (u = f[(l + 3) | 0]),
                E = D,
                i = B;
              --i > -1;

            )
              (E.r = r), (E.g = s), (E.b = t), (E.a = u), (E = E.n);
            for (i = 1; B > i; i++)
              (j = (l + ((i > z ? z : i) << 2)) | 0),
                (n += E.r = f[j]),
                (o += E.g = f[j + 1]),
                (p += E.b = f[j + 2]),
                (q += E.a = f[j + 3]),
                (E = E.n);
            for (H = D, g = 0; x > g; g++)
              (f[l++] = (n * M) >>> N),
                (f[l++] = (o * M) >>> N),
                (f[l++] = (p * M) >>> N),
                (f[l++] = (q * M) >>> N),
                (j = (m + ((j = g + c + 1) < z ? j : z)) << 2),
                (n -= H.r - (H.r = f[j])),
                (o -= H.g - (H.g = f[j + 1])),
                (p -= H.b - (H.b = f[j + 2])),
                (q -= H.a - (H.a = f[j + 3])),
                (H = H.n);
            m += x;
          }
          for (M = K, N = L, g = 0; x > g; g++) {
            for (
              l = (g << 2) | 0,
                n = (C * (r = f[l])) | 0,
                o = (C * (s = f[(l + 1) | 0])) | 0,
                p = (C * (t = f[(l + 2) | 0])) | 0,
                q = (C * (u = f[(l + 3) | 0])) | 0,
                G = F,
                i = 0;
              C > i;
              i++
            )
              (G.r = r), (G.g = s), (G.b = t), (G.a = u), (G = G.n);
            for (k = x, i = 1; d >= i; i++)
              (l = (k + g) << 2),
                (n += G.r = f[l]),
                (o += G.g = f[l + 1]),
                (p += G.b = f[l + 2]),
                (q += G.a = f[l + 3]),
                (G = G.n),
                A > i && (k += x);
            if (((l = g), (H = F), e > 0))
              for (h = 0; y > h; h++)
                (j = l << 2),
                  (f[j + 3] = u = (q * M) >>> N),
                  u > 0
                    ? ((f[j] = (n * M) >>> N),
                      (f[j + 1] = (o * M) >>> N),
                      (f[j + 2] = (p * M) >>> N))
                    : (f[j] = f[j + 1] = f[j + 2] = 0),
                  (j = (g + ((j = h + C) < A ? j : A) * x) << 2),
                  (n -= H.r - (H.r = f[j])),
                  (o -= H.g - (H.g = f[j + 1])),
                  (p -= H.b - (H.b = f[j + 2])),
                  (q -= H.a - (H.a = f[j + 3])),
                  (H = H.n),
                  (l += x);
            else
              for (h = 0; y > h; h++)
                (j = l << 2),
                  (f[j + 3] = u = (q * M) >>> N),
                  u > 0
                    ? ((u = 255 / u),
                      (f[j] = ((n * M) >>> N) * u),
                      (f[j + 1] = ((o * M) >>> N) * u),
                      (f[j + 2] = ((p * M) >>> N) * u))
                    : (f[j] = f[j + 1] = f[j + 2] = 0),
                  (j = (g + ((j = h + C) < A ? j : A) * x) << 2),
                  (n -= H.r - (H.r = f[j])),
                  (o -= H.g - (H.g = f[j + 1])),
                  (p -= H.b - (H.b = f[j + 2])),
                  (q -= H.a - (H.a = f[j + 3])),
                  (H = H.n),
                  (l += x);
          }
        }
        return !0;
      }),
      (createjs.BlurFilter = createjs.promote(a, "Filter"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      (this.alphaMap = a), (this._alphaMap = null), (this._mapData = null);
    }
    var b = createjs.extend(a, createjs.Filter);
    (b.clone = function () {
      var b = new a(this.alphaMap);
      return (b._alphaMap = this._alphaMap), (b._mapData = this._mapData), b;
    }),
      (b.toString = function () {
        return "[AlphaMapFilter]";
      }),
      (b._applyFilter = function (a) {
        if (!this.alphaMap) return !0;
        if (!this._prepAlphaMap()) return !1;
        for (
          var b = a.data, c = this._mapData, d = 0, e = b.length;
          e > d;
          d += 4
        )
          b[d + 3] = c[d] || 0;
        return !0;
      }),
      (b._prepAlphaMap = function () {
        if (!this.alphaMap) return !1;
        if (this.alphaMap == this._alphaMap && this._mapData) return !0;
        this._mapData = null;
        var a,
          b = (this._alphaMap = this.alphaMap),
          c = b;
        b instanceof HTMLCanvasElement
          ? (a = c.getContext("2d"))
          : ((c = createjs.createCanvas
              ? createjs.createCanvas()
              : document.createElement("canvas")),
            (c.width = b.width),
            (c.height = b.height),
            (a = c.getContext("2d")),
            a.drawImage(b, 0, 0));
        try {
          var d = a.getImageData(0, 0, b.width, b.height);
        } catch (e) {
          return !1;
        }
        return (this._mapData = d.data), !0;
      }),
      (createjs.AlphaMapFilter = createjs.promote(a, "Filter"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.mask = a;
    }
    var b = createjs.extend(a, createjs.Filter);
    (b.applyFilter = function (a, b, c, d, e, f, g, h) {
      return this.mask
        ? ((f = f || a),
          null == g && (g = b),
          null == h && (h = c),
          f.save(),
          a != f
            ? !1
            : ((f.globalCompositeOperation = "destination-in"),
              f.drawImage(this.mask, g, h),
              f.restore(),
              !0))
        : !0;
    }),
      (b.clone = function () {
        return new a(this.mask);
      }),
      (b.toString = function () {
        return "[AlphaMaskFilter]";
      }),
      (createjs.AlphaMaskFilter = createjs.promote(a, "Filter"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d, e, f, g, h) {
      (this.redMultiplier = null != a ? a : 1),
        (this.greenMultiplier = null != b ? b : 1),
        (this.blueMultiplier = null != c ? c : 1),
        (this.alphaMultiplier = null != d ? d : 1),
        (this.redOffset = e || 0),
        (this.greenOffset = f || 0),
        (this.blueOffset = g || 0),
        (this.alphaOffset = h || 0);
    }
    var b = createjs.extend(a, createjs.Filter);
    (b.toString = function () {
      return "[ColorFilter]";
    }),
      (b.clone = function () {
        return new a(
          this.redMultiplier,
          this.greenMultiplier,
          this.blueMultiplier,
          this.alphaMultiplier,
          this.redOffset,
          this.greenOffset,
          this.blueOffset,
          this.alphaOffset
        );
      }),
      (b._applyFilter = function (a) {
        for (var b = a.data, c = b.length, d = 0; c > d; d += 4)
          (b[d] = b[d] * this.redMultiplier + this.redOffset),
            (b[d + 1] = b[d + 1] * this.greenMultiplier + this.greenOffset),
            (b[d + 2] = b[d + 2] * this.blueMultiplier + this.blueOffset),
            (b[d + 3] = b[d + 3] * this.alphaMultiplier + this.alphaOffset);
        return !0;
      }),
      (createjs.ColorFilter = createjs.promote(a, "Filter"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d) {
      this.setColor(a, b, c, d);
    }
    var b = a.prototype;
    (a.DELTA_INDEX = [
      0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11, 0.12, 0.14, 0.15,
      0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.28, 0.3, 0.32,
      0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59,
      0.62, 0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92, 0.95,
      0.98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66,
      1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87,
      3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5,
      7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10,
    ]),
      (a.IDENTITY_MATRIX = [
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
        1,
      ]),
      (a.LENGTH = a.IDENTITY_MATRIX.length),
      (b.setColor = function (a, b, c, d) {
        return this.reset().adjustColor(a, b, c, d);
      }),
      (b.reset = function () {
        return this.copy(a.IDENTITY_MATRIX);
      }),
      (b.adjustColor = function (a, b, c, d) {
        return (
          this.adjustHue(d),
          this.adjustContrast(b),
          this.adjustBrightness(a),
          this.adjustSaturation(c)
        );
      }),
      (b.adjustBrightness = function (a) {
        return 0 == a || isNaN(a)
          ? this
          : ((a = this._cleanValue(a, 255)),
            this._multiplyMatrix([
              1,
              0,
              0,
              0,
              a,
              0,
              1,
              0,
              0,
              a,
              0,
              0,
              1,
              0,
              a,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ]),
            this);
      }),
      (b.adjustContrast = function (b) {
        if (0 == b || isNaN(b)) return this;
        b = this._cleanValue(b, 100);
        var c;
        return (
          0 > b
            ? (c = 127 + (b / 100) * 127)
            : ((c = b % 1),
              (c =
                0 == c
                  ? a.DELTA_INDEX[b]
                  : a.DELTA_INDEX[b << 0] * (1 - c) +
                    a.DELTA_INDEX[(b << 0) + 1] * c),
              (c = 127 * c + 127)),
          this._multiplyMatrix([
            c / 127,
            0,
            0,
            0,
            0.5 * (127 - c),
            0,
            c / 127,
            0,
            0,
            0.5 * (127 - c),
            0,
            0,
            c / 127,
            0,
            0.5 * (127 - c),
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
          ]),
          this
        );
      }),
      (b.adjustSaturation = function (a) {
        if (0 == a || isNaN(a)) return this;
        a = this._cleanValue(a, 100);
        var b = 1 + (a > 0 ? (3 * a) / 100 : a / 100),
          c = 0.3086,
          d = 0.6094,
          e = 0.082;
        return (
          this._multiplyMatrix([
            c * (1 - b) + b,
            d * (1 - b),
            e * (1 - b),
            0,
            0,
            c * (1 - b),
            d * (1 - b) + b,
            e * (1 - b),
            0,
            0,
            c * (1 - b),
            d * (1 - b),
            e * (1 - b) + b,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
          ]),
          this
        );
      }),
      (b.adjustHue = function (a) {
        if (0 == a || isNaN(a)) return this;
        a = (this._cleanValue(a, 180) / 180) * Math.PI;
        var b = Math.cos(a),
          c = Math.sin(a),
          d = 0.213,
          e = 0.715,
          f = 0.072;
        return (
          this._multiplyMatrix([
            d + b * (1 - d) + c * -d,
            e + b * -e + c * -e,
            f + b * -f + c * (1 - f),
            0,
            0,
            d + b * -d + 0.143 * c,
            e + b * (1 - e) + 0.14 * c,
            f + b * -f + c * -0.283,
            0,
            0,
            d + b * -d + c * -(1 - d),
            e + b * -e + c * e,
            f + b * (1 - f) + c * f,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
          ]),
          this
        );
      }),
      (b.concat = function (b) {
        return (
          (b = this._fixMatrix(b)),
          b.length != a.LENGTH ? this : (this._multiplyMatrix(b), this)
        );
      }),
      (b.clone = function () {
        return new a().copy(this);
      }),
      (b.toArray = function () {
        for (var b = [], c = 0, d = a.LENGTH; d > c; c++) b[c] = this[c];
        return b;
      }),
      (b.copy = function (b) {
        for (var c = a.LENGTH, d = 0; c > d; d++) this[d] = b[d];
        return this;
      }),
      (b.toString = function () {
        return "[ColorMatrix]";
      }),
      (b._multiplyMatrix = function (a) {
        var b,
          c,
          d,
          e = [];
        for (b = 0; 5 > b; b++) {
          for (c = 0; 5 > c; c++) e[c] = this[c + 5 * b];
          for (c = 0; 5 > c; c++) {
            var f = 0;
            for (d = 0; 5 > d; d++) f += a[c + 5 * d] * e[d];
            this[c + 5 * b] = f;
          }
        }
      }),
      (b._cleanValue = function (a, b) {
        return Math.min(b, Math.max(-b, a));
      }),
      (b._fixMatrix = function (b) {
        return (
          b instanceof a && (b = b.toArray()),
          b.length < a.LENGTH
            ? (b = b
                .slice(0, b.length)
                .concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)))
            : b.length > a.LENGTH && (b = b.slice(0, a.LENGTH)),
          b
        );
      }),
      (createjs.ColorMatrix = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.matrix = a;
    }
    var b = createjs.extend(a, createjs.Filter);
    (b.toString = function () {
      return "[ColorMatrixFilter]";
    }),
      (b.clone = function () {
        return new a(this.matrix);
      }),
      (b._applyFilter = function (a) {
        for (
          var b,
            c,
            d,
            e,
            f = a.data,
            g = f.length,
            h = this.matrix,
            i = h[0],
            j = h[1],
            k = h[2],
            l = h[3],
            m = h[4],
            n = h[5],
            o = h[6],
            p = h[7],
            q = h[8],
            r = h[9],
            s = h[10],
            t = h[11],
            u = h[12],
            v = h[13],
            w = h[14],
            x = h[15],
            y = h[16],
            z = h[17],
            A = h[18],
            B = h[19],
            C = 0;
          g > C;
          C += 4
        )
          (b = f[C]),
            (c = f[C + 1]),
            (d = f[C + 2]),
            (e = f[C + 3]),
            (f[C] = b * i + c * j + d * k + e * l + m),
            (f[C + 1] = b * n + c * o + d * p + e * q + r),
            (f[C + 2] = b * s + c * t + d * u + e * v + w),
            (f[C + 3] = b * x + c * y + d * z + e * A + B);
        return !0;
      }),
      (createjs.ColorMatrixFilter = createjs.promote(a, "Filter"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "Touch cannot be instantiated";
    }
    (a.isSupported = function () {
      return !!(
        "ontouchstart" in window ||
        (window.navigator.msPointerEnabled &&
          window.navigator.msMaxTouchPoints > 0) ||
        (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
      );
    }),
      (a.enable = function (b, c, d) {
        return b && b.canvas && a.isSupported()
          ? b.__touch
            ? !0
            : ((b.__touch = {
                pointers: {},
                multitouch: !c,
                preventDefault: !d,
                count: 0,
              }),
              "ontouchstart" in window
                ? a._IOS_enable(b)
                : (window.navigator.msPointerEnabled ||
                    window.navigator.pointerEnabled) &&
                  a._IE_enable(b),
              !0)
          : !1;
      }),
      (a.disable = function (b) {
        b &&
          ("ontouchstart" in window
            ? a._IOS_disable(b)
            : (window.navigator.msPointerEnabled ||
                window.navigator.pointerEnabled) &&
              a._IE_disable(b),
          delete b.__touch);
      }),
      (a._IOS_enable = function (b) {
        var c = b.canvas,
          d = (b.__touch.f = function (c) {
            a._IOS_handleEvent(b, c);
          });
        c.addEventListener("touchstart", d, !1),
          c.addEventListener("touchmove", d, !1),
          c.addEventListener("touchend", d, !1),
          c.addEventListener("touchcancel", d, !1);
      }),
      (a._IOS_disable = function (a) {
        var b = a.canvas;
        if (b) {
          var c = a.__touch.f;
          b.removeEventListener("touchstart", c, !1),
            b.removeEventListener("touchmove", c, !1),
            b.removeEventListener("touchend", c, !1),
            b.removeEventListener("touchcancel", c, !1);
        }
      }),
      (a._IOS_handleEvent = function (a, b) {
        if (a) {
          a.__touch.preventDefault && b.preventDefault && b.preventDefault();
          for (
            var c = b.changedTouches, d = b.type, e = 0, f = c.length;
            f > e;
            e++
          ) {
            var g = c[e],
              h = g.identifier;
            g.target == a.canvas &&
              ("touchstart" == d
                ? this._handleStart(a, h, b, g.pageX, g.pageY)
                : "touchmove" == d
                ? this._handleMove(a, h, b, g.pageX, g.pageY)
                : ("touchend" == d || "touchcancel" == d) &&
                  this._handleEnd(a, h, b));
          }
        }
      }),
      (a._IE_enable = function (b) {
        var c = b.canvas,
          d = (b.__touch.f = function (c) {
            a._IE_handleEvent(b, c);
          });
        void 0 === window.navigator.pointerEnabled
          ? (c.addEventListener("MSPointerDown", d, !1),
            window.addEventListener("MSPointerMove", d, !1),
            window.addEventListener("MSPointerUp", d, !1),
            window.addEventListener("MSPointerCancel", d, !1),
            b.__touch.preventDefault && (c.style.msTouchAction = "none"))
          : (c.addEventListener("pointerdown", d, !1),
            window.addEventListener("pointermove", d, !1),
            window.addEventListener("pointerup", d, !1),
            window.addEventListener("pointercancel", d, !1),
            b.__touch.preventDefault && (c.style.touchAction = "none")),
          (b.__touch.activeIDs = {});
      }),
      (a._IE_disable = function (a) {
        var b = a.__touch.f;
        void 0 === window.navigator.pointerEnabled
          ? (window.removeEventListener("MSPointerMove", b, !1),
            window.removeEventListener("MSPointerUp", b, !1),
            window.removeEventListener("MSPointerCancel", b, !1),
            a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1))
          : (window.removeEventListener("pointermove", b, !1),
            window.removeEventListener("pointerup", b, !1),
            window.removeEventListener("pointercancel", b, !1),
            a.canvas && a.canvas.removeEventListener("pointerdown", b, !1));
      }),
      (a._IE_handleEvent = function (a, b) {
        if (a) {
          a.__touch.preventDefault && b.preventDefault && b.preventDefault();
          var c = b.type,
            d = b.pointerId,
            e = a.__touch.activeIDs;
          if ("MSPointerDown" == c || "pointerdown" == c) {
            if (b.srcElement != a.canvas) return;
            (e[d] = !0), this._handleStart(a, d, b, b.pageX, b.pageY);
          } else
            e[d] &&
              ("MSPointerMove" == c || "pointermove" == c
                ? this._handleMove(a, d, b, b.pageX, b.pageY)
                : ("MSPointerUp" == c ||
                    "MSPointerCancel" == c ||
                    "pointerup" == c ||
                    "pointercancel" == c) &&
                  (delete e[d], this._handleEnd(a, d, b)));
        }
      }),
      (a._handleStart = function (a, b, c, d, e) {
        var f = a.__touch;
        if (f.multitouch || !f.count) {
          var g = f.pointers;
          g[b] || ((g[b] = !0), f.count++, a._handlePointerDown(b, c, d, e));
        }
      }),
      (a._handleMove = function (a, b, c, d, e) {
        a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e);
      }),
      (a._handleEnd = function (a, b, c) {
        var d = a.__touch,
          e = d.pointers;
        e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b]);
      }),
      (createjs.Touch = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = (createjs.EaselJS = createjs.EaselJS || {});
    (a.version = "0.8.2"), (a.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT");
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = (createjs.PreloadJS = createjs.PreloadJS || {});
    (a.version = "0.6.2"), (a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT");
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    createjs.proxy = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return function () {
        return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
      };
    };
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.Event_constructor("error"),
        (this.title = a),
        (this.message = b),
        (this.data = c);
    }
    var b = createjs.extend(a, createjs.Event);
    (b.clone = function () {
      return new createjs.ErrorEvent(this.title, this.message, this.data);
    }),
      (createjs.ErrorEvent = createjs.promote(a, "Event"));
  })(),
  (this.createjs = this.createjs || {}),
  (function (a) {
    "use strict";
    function b(a, b) {
      this.Event_constructor("progress"),
        (this.loaded = a),
        (this.total = null == b ? 1 : b),
        (this.progress = 0 == b ? 0 : this.loaded / this.total);
    }
    var c = createjs.extend(b, createjs.Event);
    (c.clone = function () {
      return new createjs.ProgressEvent(this.loaded, this.total);
    }),
      (createjs.ProgressEvent = createjs.promote(b, "Event"));
  })(window),
  function () {
    function a(b, d) {
      function f(a) {
        if (f[a] !== q) return f[a];
        var b;
        if ("bug-string-char-index" == a) b = "a" != "a"[0];
        else if ("json" == a) b = f("json-stringify") && f("json-parse");
        else {
          var c,
            e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          if ("json-stringify" == a) {
            var i = d.stringify,
              k = "function" == typeof i && t;
            if (k) {
              (c = function () {
                return 1;
              }).toJSON = c;
              try {
                k =
                  "0" === i(0) &&
                  "0" === i(new g()) &&
                  '""' == i(new h()) &&
                  i(s) === q &&
                  i(q) === q &&
                  i() === q &&
                  "1" === i(c) &&
                  "[1]" == i([c]) &&
                  "[null]" == i([q]) &&
                  "null" == i(null) &&
                  "[null,null,null]" == i([q, s, null]) &&
                  i({ a: [c, !0, !1, null, "\x00\b\n\f\r	"] }) == e &&
                  "1" === i(null, c) &&
                  "[\n 1,\n 2\n]" == i([1, 2], null, 1) &&
                  '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) &&
                  '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) &&
                  '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) &&
                  '"1969-12-31T23:59:59.999Z"' == i(new j(-1));
              } catch (l) {
                k = !1;
              }
            }
            b = k;
          }
          if ("json-parse" == a) {
            var m = d.parse;
            if ("function" == typeof m)
              try {
                if (0 === m("0") && !m(!1)) {
                  c = m(e);
                  var n = 5 == c.a.length && 1 === c.a[0];
                  if (n) {
                    try {
                      n = !m('"	"');
                    } catch (l) {}
                    if (n)
                      try {
                        n = 1 !== m("01");
                      } catch (l) {}
                    if (n)
                      try {
                        n = 1 !== m("1.");
                      } catch (l) {}
                  }
                }
              } catch (l) {
                n = !1;
              }
            b = n;
          }
        }
        return (f[a] = !!b);
      }
      b || (b = e.Object()), d || (d = e.Object());
      var g = b.Number || e.Number,
        h = b.String || e.String,
        i = b.Object || e.Object,
        j = b.Date || e.Date,
        k = b.SyntaxError || e.SyntaxError,
        l = b.TypeError || e.TypeError,
        m = b.Math || e.Math,
        n = b.JSON || e.JSON;
      "object" == typeof n &&
        n &&
        ((d.stringify = n.stringify), (d.parse = n.parse));
      var o,
        p,
        q,
        r = i.prototype,
        s = r.toString,
        t = new j(-0xc782b5b800cec);
      try {
        t =
          -109252 == t.getUTCFullYear() &&
          0 === t.getUTCMonth() &&
          1 === t.getUTCDate() &&
          10 == t.getUTCHours() &&
          37 == t.getUTCMinutes() &&
          6 == t.getUTCSeconds() &&
          708 == t.getUTCMilliseconds();
      } catch (u) {}
      if (!f("json")) {
        var v = "[object Function]",
          w = "[object Date]",
          x = "[object Number]",
          y = "[object String]",
          z = "[object Array]",
          A = "[object Boolean]",
          B = f("bug-string-char-index");
        if (!t)
          var C = m.floor,
            D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            E = function (a, b) {
              return (
                D[b] +
                365 * (a - 1970) +
                C((a - 1969 + (b = +(b > 1))) / 4) -
                C((a - 1901 + b) / 100) +
                C((a - 1601 + b) / 400)
              );
            };
        if (
          ((o = r.hasOwnProperty) ||
            (o = function (a) {
              var b,
                c = {};
              return (
                ((c.__proto__ = null), (c.__proto__ = { toString: 1 }), c)
                  .toString != s
                  ? (o = function (a) {
                      var b = this.__proto__,
                        c = a in ((this.__proto__ = null), this);
                      return (this.__proto__ = b), c;
                    })
                  : ((b = c.constructor),
                    (o = function (a) {
                      var c = (this.constructor || b).prototype;
                      return a in this && !(a in c && this[a] === c[a]);
                    })),
                (c = null),
                o.call(this, a)
              );
            }),
          (p = function (a, b) {
            var d,
              e,
              f,
              g = 0;
            ((d = function () {
              this.valueOf = 0;
            }).prototype.valueOf = 0),
              (e = new d());
            for (f in e) o.call(e, f) && g++;
            return (
              (d = e = null),
              g
                ? (p =
                    2 == g
                      ? function (a, b) {
                          var c,
                            d = {},
                            e = s.call(a) == v;
                          for (c in a)
                            (e && "prototype" == c) ||
                              o.call(d, c) ||
                              !(d[c] = 1) ||
                              !o.call(a, c) ||
                              b(c);
                        }
                      : function (a, b) {
                          var c,
                            d,
                            e = s.call(a) == v;
                          for (c in a)
                            (e && "prototype" == c) ||
                              !o.call(a, c) ||
                              (d = "constructor" === c) ||
                              b(c);
                          (d || o.call(a, (c = "constructor"))) && b(c);
                        })
                : ((e = [
                    "valueOf",
                    "toString",
                    "toLocaleString",
                    "propertyIsEnumerable",
                    "isPrototypeOf",
                    "hasOwnProperty",
                    "constructor",
                  ]),
                  (p = function (a, b) {
                    var d,
                      f,
                      g = s.call(a) == v,
                      h =
                        (!g &&
                          "function" != typeof a.constructor &&
                          c[typeof a.hasOwnProperty] &&
                          a.hasOwnProperty) ||
                        o;
                    for (d in a)
                      (g && "prototype" == d) || !h.call(a, d) || b(d);
                    for (f = e.length; (d = e[--f]); h.call(a, d) && b(d));
                  })),
              p(a, b)
            );
          }),
          !f("json-stringify"))
        ) {
          var F = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t",
            },
            G = "000000",
            H = function (a, b) {
              return (G + (b || 0)).slice(-a);
            },
            I = "\\u00",
            J = function (a) {
              for (
                var b = '"',
                  c = 0,
                  d = a.length,
                  e = !B || d > 10,
                  f = e && (B ? a.split("") : a);
                d > c;
                c++
              ) {
                var g = a.charCodeAt(c);
                switch (g) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    b += F[g];
                    break;
                  default:
                    if (32 > g) {
                      b += I + H(2, g.toString(16));
                      break;
                    }
                    b += e ? f[c] : a.charAt(c);
                }
              }
              return b + '"';
            },
            K = function (a, b, c, d, e, f, g) {
              var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
              try {
                h = b[a];
              } catch (M) {}
              if ("object" == typeof h && h)
                if (((i = s.call(h)), i != w || o.call(h, "toJSON")))
                  "function" == typeof h.toJSON &&
                    ((i != x && i != y && i != z) || o.call(h, "toJSON")) &&
                    (h = h.toJSON(a));
                else if (h > -1 / 0 && 1 / 0 > h) {
                  if (E) {
                    for (
                      m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1;
                      E(j + 1, 0) <= m;
                      j++
                    );
                    for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                    (m = 1 + m - E(j, k)),
                      (n = ((h % 864e5) + 864e5) % 864e5),
                      (r = C(n / 36e5) % 24),
                      (t = C(n / 6e4) % 60),
                      (u = C(n / 1e3) % 60),
                      (v = n % 1e3);
                  } else
                    (j = h.getUTCFullYear()),
                      (k = h.getUTCMonth()),
                      (m = h.getUTCDate()),
                      (r = h.getUTCHours()),
                      (t = h.getUTCMinutes()),
                      (u = h.getUTCSeconds()),
                      (v = h.getUTCMilliseconds());
                  h =
                    (0 >= j || j >= 1e4
                      ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j)
                      : H(4, j)) +
                    "-" +
                    H(2, k + 1) +
                    "-" +
                    H(2, m) +
                    "T" +
                    H(2, r) +
                    ":" +
                    H(2, t) +
                    ":" +
                    H(2, u) +
                    "." +
                    H(3, v) +
                    "Z";
                } else h = null;
              if ((c && (h = c.call(b, a, h)), null === h)) return "null";
              if (((i = s.call(h)), i == A)) return "" + h;
              if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
              if (i == y) return J("" + h);
              if ("object" == typeof h) {
                for (G = g.length; G--; ) if (g[G] === h) throw l();
                if ((g.push(h), (B = []), (I = f), (f += e), i == z)) {
                  for (F = 0, G = h.length; G > F; F++)
                    (D = K(F, h, c, d, e, f, g)), B.push(D === q ? "null" : D);
                  L = B.length
                    ? e
                      ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]"
                      : "[" + B.join(",") + "]"
                    : "[]";
                } else
                  p(d || h, function (a) {
                    var b = K(a, h, c, d, e, f, g);
                    b !== q && B.push(J(a) + ":" + (e ? " " : "") + b);
                  }),
                    (L = B.length
                      ? e
                        ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}"
                        : "{" + B.join(",") + "}"
                      : "{}");
                return g.pop(), L;
              }
            };
          d.stringify = function (a, b, d) {
            var e, f, g, h;
            if (c[typeof b] && b)
              if ((h = s.call(b)) == v) f = b;
              else if (h == z) {
                g = {};
                for (
                  var i, j = 0, k = b.length;
                  k > j;
                  i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1)
                );
              }
            if (d)
              if ((h = s.call(d)) == x) {
                if ((d -= d % 1) > 0)
                  for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
              } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
            return K("", ((i = {}), (i[""] = a), i), f, g, e, "", []);
          };
        }
        if (!f("json-parse")) {
          var L,
            M,
            N = h.fromCharCode,
            O = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "	",
              110: "\n",
              102: "\f",
              114: "\r",
            },
            P = function () {
              throw ((L = M = null), k());
            },
            Q = function () {
              for (var a, b, c, d, e, f = M, g = f.length; g > L; )
                switch ((e = f.charCodeAt(L))) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    L++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    return (a = B ? f.charAt(L) : f[L]), L++, a;
                  case 34:
                    for (a = "@", L++; g > L; )
                      if (((e = f.charCodeAt(L)), 32 > e)) P();
                      else if (92 == e)
                        switch ((e = f.charCodeAt(++L))) {
                          case 92:
                          case 34:
                          case 47:
                          case 98:
                          case 116:
                          case 110:
                          case 102:
                          case 114:
                            (a += O[e]), L++;
                            break;
                          case 117:
                            for (b = ++L, c = L + 4; c > L; L++)
                              (e = f.charCodeAt(L)),
                                (e >= 48 && 57 >= e) ||
                                  (e >= 97 && 102 >= e) ||
                                  (e >= 65 && 70 >= e) ||
                                  P();
                            a += N("0x" + f.slice(b, L));
                            break;
                          default:
                            P();
                        }
                      else {
                        if (34 == e) break;
                        for (
                          e = f.charCodeAt(L), b = L;
                          e >= 32 && 92 != e && 34 != e;

                        )
                          e = f.charCodeAt(++L);
                        a += f.slice(b, L);
                      }
                    if (34 == f.charCodeAt(L)) return L++, a;
                    P();
                  default:
                    if (
                      ((b = L),
                      45 == e && ((d = !0), (e = f.charCodeAt(++L))),
                      e >= 48 && 57 >= e)
                    ) {
                      for (
                        48 == e &&
                          ((e = f.charCodeAt(L + 1)), e >= 48 && 57 >= e) &&
                          P(),
                          d = !1;
                        g > L && ((e = f.charCodeAt(L)), e >= 48 && 57 >= e);
                        L++
                      );
                      if (46 == f.charCodeAt(L)) {
                        for (
                          c = ++L;
                          g > c && ((e = f.charCodeAt(c)), e >= 48 && 57 >= e);
                          c++
                        );
                        c == L && P(), (L = c);
                      }
                      if (((e = f.charCodeAt(L)), 101 == e || 69 == e)) {
                        for (
                          e = f.charCodeAt(++L),
                            (43 == e || 45 == e) && L++,
                            c = L;
                          g > c && ((e = f.charCodeAt(c)), e >= 48 && 57 >= e);
                          c++
                        );
                        c == L && P(), (L = c);
                      }
                      return +f.slice(b, L);
                    }
                    if ((d && P(), "true" == f.slice(L, L + 4)))
                      return (L += 4), !0;
                    if ("false" == f.slice(L, L + 5)) return (L += 5), !1;
                    if ("null" == f.slice(L, L + 4)) return (L += 4), null;
                    P();
                }
              return "$";
            },
            R = function (a) {
              var b, c;
              if (("$" == a && P(), "string" == typeof a)) {
                if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);
                if ("[" == a) {
                  for (b = []; (a = Q()), "]" != a; c || (c = !0))
                    c && ("," == a ? ((a = Q()), "]" == a && P()) : P()),
                      "," == a && P(),
                      b.push(R(a));
                  return b;
                }
                if ("{" == a) {
                  for (b = {}; (a = Q()), "}" != a; c || (c = !0))
                    c && ("," == a ? ((a = Q()), "}" == a && P()) : P()),
                      ("," == a ||
                        "string" != typeof a ||
                        "@" != (B ? a.charAt(0) : a[0]) ||
                        ":" != Q()) &&
                        P(),
                      (b[a.slice(1)] = R(Q()));
                  return b;
                }
                P();
              }
              return a;
            },
            S = function (a, b, c) {
              var d = T(a, b, c);
              d === q ? delete a[b] : (a[b] = d);
            },
            T = function (a, b, c) {
              var d,
                e = a[b];
              if ("object" == typeof e && e)
                if (s.call(e) == z) for (d = e.length; d--; ) S(e, d, c);
                else
                  p(e, function (a) {
                    S(e, a, c);
                  });
              return c.call(a, b, e);
            };
          d.parse = function (a, b) {
            var c, d;
            return (
              (L = 0),
              (M = "" + a),
              (c = R(Q())),
              "$" != Q() && P(),
              (L = M = null),
              b && s.call(b) == v ? T(((d = {}), (d[""] = c), d), "", b) : c
            );
          };
        }
      }
      return (d.runInContext = a), d;
    }
    var b = "function" == typeof define && define.amd,
      c = { function: !0, object: !0 },
      d = c[typeof exports] && exports && !exports.nodeType && exports,
      e = (c[typeof window] && window) || this,
      f =
        d &&
        c[typeof module] &&
        module &&
        !module.nodeType &&
        "object" == typeof global &&
        global;
    if (
      (!f || (f.global !== f && f.window !== f && f.self !== f) || (e = f),
      d && !b)
    )
      a(e, d);
    else {
      var g = e.JSON,
        h = e.JSON3,
        i = !1,
        j = a(
          e,
          (e.JSON3 = {
            noConflict: function () {
              return (
                i || ((i = !0), (e.JSON = g), (e.JSON3 = h), (g = h = null)), j
              );
            },
          })
        );
      e.JSON = { parse: j.parse, stringify: j.stringify };
    }
    b &&
      define(function () {
        return j;
      });
  }.call(this),
  (function () {
    var a = {};
    (a.appendToHead = function (b) {
      a.getHead().appendChild(b);
    }),
      (a.getHead = function () {
        return document.head || document.getElementsByTagName("head")[0];
      }),
      (a.getBody = function () {
        return document.body || document.getElementsByTagName("body")[0];
      }),
      (createjs.DomUtils = a);
  })(),
  (function () {
    var a = {};
    (a.parseXML = function (a, b) {
      var c = null;
      try {
        if (window.DOMParser) {
          var d = new DOMParser();
          c = d.parseFromString(a, b);
        }
      } catch (e) {}
      if (!c)
        try {
          (c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = !1),
            c.loadXML(a);
        } catch (e) {
          c = null;
        }
      return c;
    }),
      (a.parseJSON = function (a) {
        if (null == a) return null;
        try {
          return JSON.parse(a);
        } catch (b) {
          throw b;
        }
      }),
      (createjs.DataUtils = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      (this.src = null),
        (this.type = null),
        (this.id = null),
        (this.maintainOrder = !1),
        (this.callback = null),
        (this.data = null),
        (this.method = createjs.LoadItem.GET),
        (this.values = null),
        (this.headers = null),
        (this.withCredentials = !1),
        (this.mimeType = null),
        (this.crossOrigin = null),
        (this.loadTimeout = c.LOAD_TIMEOUT_DEFAULT);
    }
    var b = (a.prototype = {}),
      c = a;
    (c.LOAD_TIMEOUT_DEFAULT = 8e3),
      (c.create = function (b) {
        if ("string" == typeof b) {
          var d = new a();
          return (d.src = b), d;
        }
        if (b instanceof c) return b;
        if (b instanceof Object && b.src)
          return (
            null == b.loadTimeout && (b.loadTimeout = c.LOAD_TIMEOUT_DEFAULT), b
          );
        throw new Error("Type not recognized.");
      }),
      (b.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this;
      }),
      (createjs.LoadItem = c);
  })(),
  (function () {
    var a = {};
    (a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i),
      (a.RELATIVE_PATT = /^[.\/]*?\//i),
      (a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i),
      (a.parseURI = function (b) {
        var c = { absolute: !1, relative: !1 };
        if (null == b) return c;
        var d = b.indexOf("?");
        d > -1 && (b = b.substr(0, d));
        var e;
        return (
          a.ABSOLUTE_PATT.test(b)
            ? (c.absolute = !0)
            : a.RELATIVE_PATT.test(b) && (c.relative = !0),
          (e = b.match(a.EXTENSION_PATT)) && (c.extension = e[1].toLowerCase()),
          c
        );
      }),
      (a.formatQueryString = function (a, b) {
        if (null == a) throw new Error("You must specify data.");
        var c = [];
        for (var d in a) c.push(d + "=" + escape(a[d]));
        return b && (c = c.concat(b)), c.join("&");
      }),
      (a.buildPath = function (a, b) {
        if (null == b) return a;
        var c = [],
          d = a.indexOf("?");
        if (-1 != d) {
          var e = a.slice(d + 1);
          c = c.concat(e.split("&"));
        }
        return -1 != d
          ? a.slice(0, d) + "?" + this.formatQueryString(b, c)
          : a + "?" + this.formatQueryString(b, c);
      }),
      (a.isCrossDomain = function (a) {
        var b = document.createElement("a");
        b.href = a.src;
        var c = document.createElement("a");
        c.href = location.href;
        var d =
          "" != b.hostname &&
          (b.port != c.port ||
            b.protocol != c.protocol ||
            b.hostname != c.hostname);
        return d;
      }),
      (a.isLocal = function (a) {
        var b = document.createElement("a");
        return (b.href = a.src), "" == b.hostname && "file:" == b.protocol;
      }),
      (a.isBinary = function (a) {
        switch (a) {
          case createjs.AbstractLoader.IMAGE:
          case createjs.AbstractLoader.BINARY:
            return !0;
          default:
            return !1;
        }
      }),
      (a.isImageTag = function (a) {
        return a instanceof HTMLImageElement;
      }),
      (a.isAudioTag = function (a) {
        return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1;
      }),
      (a.isVideoTag = function (a) {
        return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1;
      }),
      (a.isText = function (a) {
        switch (a) {
          case createjs.AbstractLoader.TEXT:
          case createjs.AbstractLoader.JSON:
          case createjs.AbstractLoader.MANIFEST:
          case createjs.AbstractLoader.XML:
          case createjs.AbstractLoader.CSS:
          case createjs.AbstractLoader.SVG:
          case createjs.AbstractLoader.JAVASCRIPT:
          case createjs.AbstractLoader.SPRITESHEET:
            return !0;
          default:
            return !1;
        }
      }),
      (a.getTypeByExtension = function (a) {
        if (null == a) return createjs.AbstractLoader.TEXT;
        switch (a.toLowerCase()) {
          case "jpeg":
          case "jpg":
          case "gif":
          case "png":
          case "webp":
          case "bmp":
            return createjs.AbstractLoader.IMAGE;
          case "ogg":
          case "mp3":
          case "webm":
            return createjs.AbstractLoader.SOUND;
          case "mp4":
          case "webm":
          case "ts":
            return createjs.AbstractLoader.VIDEO;
          case "json":
            return createjs.AbstractLoader.JSON;
          case "xml":
            return createjs.AbstractLoader.XML;
          case "css":
            return createjs.AbstractLoader.CSS;
          case "js":
            return createjs.AbstractLoader.JAVASCRIPT;
          case "svg":
            return createjs.AbstractLoader.SVG;
          default:
            return createjs.AbstractLoader.TEXT;
        }
      }),
      (createjs.RequestUtils = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.EventDispatcher_constructor(),
        (this.loaded = !1),
        (this.canceled = !1),
        (this.progress = 0),
        (this.type = c),
        (this.resultFormatter = null),
        a ? (this._item = createjs.LoadItem.create(a)) : (this._item = null),
        (this._preferXHR = b),
        (this._result = null),
        (this._rawResult = null),
        (this._loadedItems = null),
        (this._tagSrcAttribute = null),
        (this._tag = null);
    }
    var b = createjs.extend(a, createjs.EventDispatcher),
      c = a;
    (c.POST = "POST"),
      (c.GET = "GET"),
      (c.BINARY = "binary"),
      (c.CSS = "css"),
      (c.IMAGE = "image"),
      (c.JAVASCRIPT = "javascript"),
      (c.JSON = "json"),
      (c.JSONP = "jsonp"),
      (c.MANIFEST = "manifest"),
      (c.SOUND = "sound"),
      (c.VIDEO = "video"),
      (c.SPRITESHEET = "spritesheet"),
      (c.SVG = "svg"),
      (c.TEXT = "text"),
      (c.XML = "xml"),
      (b.getItem = function () {
        return this._item;
      }),
      (b.getResult = function (a) {
        return a ? this._rawResult : this._result;
      }),
      (b.getTag = function () {
        return this._tag;
      }),
      (b.setTag = function (a) {
        this._tag = a;
      }),
      (b.load = function () {
        this._createRequest(),
          this._request.on("complete", this, this),
          this._request.on("progress", this, this),
          this._request.on("loadStart", this, this),
          this._request.on("abort", this, this),
          this._request.on("timeout", this, this),
          this._request.on("error", this, this);
        var a = new createjs.Event("initialize");
        (a.loader = this._request), this.dispatchEvent(a), this._request.load();
      }),
      (b.cancel = function () {
        (this.canceled = !0), this.destroy();
      }),
      (b.destroy = function () {
        this._request &&
          (this._request.removeAllEventListeners(), this._request.destroy()),
          (this._request = null),
          (this._item = null),
          (this._rawResult = null),
          (this._result = null),
          (this._loadItems = null),
          this.removeAllEventListeners();
      }),
      (b.getLoadedItems = function () {
        return this._loadedItems;
      }),
      (b._createRequest = function () {
        this._preferXHR
          ? (this._request = new createjs.XHRRequest(this._item))
          : (this._request = new createjs.TagRequest(
              this._item,
              this._tag || this._createTag(),
              this._tagSrcAttribute
            ));
      }),
      (b._createTag = function (a) {
        return null;
      }),
      (b._sendLoadStart = function () {
        this._isCanceled() || this.dispatchEvent("loadstart");
      }),
      (b._sendProgress = function (a) {
        if (!this._isCanceled()) {
          var b = null;
          "number" == typeof a
            ? ((this.progress = a),
              (b = new createjs.ProgressEvent(this.progress)))
            : ((b = a),
              (this.progress = a.loaded / a.total),
              (b.progress = this.progress),
              (isNaN(this.progress) || this.progress == 1 / 0) &&
                (this.progress = 0)),
            this.hasEventListener("progress") && this.dispatchEvent(b);
        }
      }),
      (b._sendComplete = function () {
        if (!this._isCanceled()) {
          this.loaded = !0;
          var a = new createjs.Event("complete");
          (a.rawResult = this._rawResult),
            null != this._result && (a.result = this._result),
            this.dispatchEvent(a);
        }
      }),
      (b._sendError = function (a) {
        !this._isCanceled() &&
          this.hasEventListener("error") &&
          (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),
          this.dispatchEvent(a));
      }),
      (b._isCanceled = function () {
        return null == window.createjs || this.canceled ? !0 : !1;
      }),
      (b.resultFormatter = null),
      (b.handleEvent = function (a) {
        switch (a.type) {
          case "complete":
            this._rawResult = a.target._response;
            var b = this.resultFormatter && this.resultFormatter(this);
            b instanceof Function
              ? b.call(
                  this,
                  createjs.proxy(this._resultFormatSuccess, this),
                  createjs.proxy(this._resultFormatFailed, this)
                )
              : ((this._result = b || this._rawResult), this._sendComplete());
            break;
          case "progress":
            this._sendProgress(a);
            break;
          case "error":
            this._sendError(a);
            break;
          case "loadstart":
            this._sendLoadStart();
            break;
          case "abort":
          case "timeout":
            this._isCanceled() ||
              this.dispatchEvent(
                new createjs.ErrorEvent(
                  "PRELOAD_" + a.type.toUpperCase() + "_ERROR"
                )
              );
        }
      }),
      (b._resultFormatSuccess = function (a) {
        (this._result = a), this._sendComplete();
      }),
      (b._resultFormatFailed = function (a) {
        this._sendError(a);
      }),
      (b.buildPath = function (a, b) {
        return createjs.RequestUtils.buildPath(a, b);
      }),
      (b.toString = function () {
        return "[PreloadJS AbstractLoader]";
      }),
      (createjs.AbstractLoader = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.AbstractLoader_constructor(a, b, c),
        (this.resultFormatter = this._formatResult),
        (this._tagSrcAttribute = "src"),
        this.on("initialize", this._updateXHR, this);
    }
    var b = createjs.extend(a, createjs.AbstractLoader);
    (b.load = function () {
      this._tag || (this._tag = this._createTag(this._item.src)),
        (this._tag.preload = "auto"),
        this._tag.load(),
        this.AbstractLoader_load();
    }),
      (b._createTag = function () {}),
      (b._createRequest = function () {
        this._preferXHR
          ? (this._request = new createjs.XHRRequest(this._item))
          : (this._request = new createjs.MediaTagRequest(
              this._item,
              this._tag || this._createTag(),
              this._tagSrcAttribute
            ));
      }),
      (b._updateXHR = function (a) {
        a.loader.setResponseType && a.loader.setResponseType("blob");
      }),
      (b._formatResult = function (a) {
        if (
          (this._tag.removeEventListener &&
            this._tag.removeEventListener(
              "canplaythrough",
              this._loadedHandler
            ),
          (this._tag.onstalled = null),
          this._preferXHR)
        ) {
          var b = window.URL || window.webkitURL,
            c = a.getResult(!0);
          a.getTag().src = b.createObjectURL(c);
        }
        return a.getTag();
      }),
      (createjs.AbstractMediaLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = function (a) {
        this._item = a;
      },
      b = createjs.extend(a, createjs.EventDispatcher);
    (b.load = function () {}),
      (b.destroy = function () {}),
      (b.cancel = function () {}),
      (createjs.AbstractRequest = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.AbstractRequest_constructor(a),
        (this._tag = b),
        (this._tagSrcAttribute = c),
        (this._loadedHandler = createjs.proxy(this._handleTagComplete, this)),
        (this._addedToDOM = !1),
        (this._startTagVisibility = null);
    }
    var b = createjs.extend(a, createjs.AbstractRequest);
    (b.load = function () {
      (this._tag.onload = createjs.proxy(this._handleTagComplete, this)),
        (this._tag.onreadystatechange = createjs.proxy(
          this._handleReadyStateChange,
          this
        )),
        (this._tag.onerror = createjs.proxy(this._handleError, this));
      var a = new createjs.Event("initialize");
      (a.loader = this._tag),
        this.dispatchEvent(a),
        this._hideTag(),
        (this._loadTimeout = setTimeout(
          createjs.proxy(this._handleTimeout, this),
          this._item.loadTimeout
        )),
        (this._tag[this._tagSrcAttribute] = this._item.src),
        null == this._tag.parentNode &&
          (window.document.body.appendChild(this._tag),
          (this._addedToDOM = !0));
    }),
      (b.destroy = function () {
        this._clean(), (this._tag = null), this.AbstractRequest_destroy();
      }),
      (b._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var a = this._tag;
        ("loaded" == a.readyState || "complete" == a.readyState) &&
          this._handleTagComplete();
      }),
      (b._handleError = function () {
        this._clean(), this.dispatchEvent("error");
      }),
      (b._handleTagComplete = function () {
        (this._rawResult = this._tag),
          (this._result =
            (this.resultFormatter && this.resultFormatter(this)) ||
            this._rawResult),
          this._clean(),
          this._showTag(),
          this.dispatchEvent("complete");
      }),
      (b._handleTimeout = function () {
        this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
      }),
      (b._clean = function () {
        (this._tag.onload = null),
          (this._tag.onreadystatechange = null),
          (this._tag.onerror = null),
          this._addedToDOM &&
            null != this._tag.parentNode &&
            this._tag.parentNode.removeChild(this._tag),
          clearTimeout(this._loadTimeout);
      }),
      (b._hideTag = function () {
        (this._startTagVisibility = this._tag.style.visibility),
          (this._tag.style.visibility = "hidden");
      }),
      (b._showTag = function () {
        this._tag.style.visibility = this._startTagVisibility;
      }),
      (b._handleStalled = function () {}),
      (createjs.TagRequest = createjs.promote(a, "AbstractRequest"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.AbstractRequest_constructor(a),
        (this._tag = b),
        (this._tagSrcAttribute = c),
        (this._loadedHandler = createjs.proxy(this._handleTagComplete, this));
    }
    var b = createjs.extend(a, createjs.TagRequest);
    (b.load = function () {
      var a = createjs.proxy(this._handleStalled, this);
      this._stalledCallback = a;
      var b = createjs.proxy(this._handleProgress, this);
      (this._handleProgress = b),
        this._tag.addEventListener("stalled", a),
        this._tag.addEventListener("progress", b),
        this._tag.addEventListener &&
          this._tag.addEventListener("canplaythrough", this._loadedHandler, !1),
        this.TagRequest_load();
    }),
      (b._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var a = this._tag;
        ("loaded" == a.readyState || "complete" == a.readyState) &&
          this._handleTagComplete();
      }),
      (b._handleStalled = function () {}),
      (b._handleProgress = function (a) {
        if (a && !(a.loaded > 0 && 0 == a.total)) {
          var b = new createjs.ProgressEvent(a.loaded, a.total);
          this.dispatchEvent(b);
        }
      }),
      (b._clean = function () {
        this._tag.removeEventListener &&
          this._tag.removeEventListener("canplaythrough", this._loadedHandler),
          this._tag.removeEventListener("stalled", this._stalledCallback),
          this._tag.removeEventListener("progress", this._progressCallback),
          this.TagRequest__clean();
      }),
      (createjs.MediaTagRequest = createjs.promote(a, "TagRequest"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractRequest_constructor(a),
        (this._request = null),
        (this._loadTimeout = null),
        (this._xhrLevel = 1),
        (this._response = null),
        (this._rawResponse = null),
        (this._canceled = !1),
        (this._handleLoadStartProxy = createjs.proxy(
          this._handleLoadStart,
          this
        )),
        (this._handleProgressProxy = createjs.proxy(
          this._handleProgress,
          this
        )),
        (this._handleAbortProxy = createjs.proxy(this._handleAbort, this)),
        (this._handleErrorProxy = createjs.proxy(this._handleError, this)),
        (this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this)),
        (this._handleLoadProxy = createjs.proxy(this._handleLoad, this)),
        (this._handleReadyStateChangeProxy = createjs.proxy(
          this._handleReadyStateChange,
          this
        )),
        !this._createXHR(a);
    }
    var b = createjs.extend(a, createjs.AbstractRequest);
    (a.ACTIVEX_VERSIONS = [
      "Msxml2.XMLHTTP.6.0",
      "Msxml2.XMLHTTP.5.0",
      "Msxml2.XMLHTTP.4.0",
      "MSXML2.XMLHTTP.3.0",
      "MSXML2.XMLHTTP",
      "Microsoft.XMLHTTP",
    ]),
      (b.getResult = function (a) {
        return a && this._rawResponse ? this._rawResponse : this._response;
      }),
      (b.cancel = function () {
        (this.canceled = !0), this._clean(), this._request.abort();
      }),
      (b.load = function () {
        if (null == this._request) return void this._handleError();
        null != this._request.addEventListener
          ? (this._request.addEventListener(
              "loadstart",
              this._handleLoadStartProxy,
              !1
            ),
            this._request.addEventListener(
              "progress",
              this._handleProgressProxy,
              !1
            ),
            this._request.addEventListener("abort", this._handleAbortProxy, !1),
            this._request.addEventListener("error", this._handleErrorProxy, !1),
            this._request.addEventListener(
              "timeout",
              this._handleTimeoutProxy,
              !1
            ),
            this._request.addEventListener("load", this._handleLoadProxy, !1),
            this._request.addEventListener(
              "readystatechange",
              this._handleReadyStateChangeProxy,
              !1
            ))
          : ((this._request.onloadstart = this._handleLoadStartProxy),
            (this._request.onprogress = this._handleProgressProxy),
            (this._request.onabort = this._handleAbortProxy),
            (this._request.onerror = this._handleErrorProxy),
            (this._request.ontimeout = this._handleTimeoutProxy),
            (this._request.onload = this._handleLoadProxy),
            (this._request.onreadystatechange =
              this._handleReadyStateChangeProxy)),
          1 == this._xhrLevel &&
            (this._loadTimeout = setTimeout(
              createjs.proxy(this._handleTimeout, this),
              this._item.loadTimeout
            ));
        try {
          this._item.values && this._item.method != createjs.AbstractLoader.GET
            ? this._item.method == createjs.AbstractLoader.POST &&
              this._request.send(
                createjs.RequestUtils.formatQueryString(this._item.values)
              )
            : this._request.send();
        } catch (a) {
          this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a));
        }
      }),
      (b.setResponseType = function (a) {
        "blob" === a &&
          ((a = window.URL ? "blob" : "arraybuffer"), (this._responseType = a)),
          (this._request.responseType = a);
      }),
      (b.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders instanceof Function
          ? this._request.getAllResponseHeaders()
          : null;
      }),
      (b.getResponseHeader = function (a) {
        return this._request.getResponseHeader instanceof Function
          ? this._request.getResponseHeader(a)
          : null;
      }),
      (b._handleProgress = function (a) {
        if (a && !(a.loaded > 0 && 0 == a.total)) {
          var b = new createjs.ProgressEvent(a.loaded, a.total);
          this.dispatchEvent(b);
        }
      }),
      (b._handleLoadStart = function (a) {
        clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
      }),
      (b._handleAbort = function (a) {
        this._clean(),
          this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a));
      }),
      (b._handleError = function (a) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message));
      }),
      (b._handleReadyStateChange = function (a) {
        4 == this._request.readyState && this._handleLoad();
      }),
      (b._handleLoad = function (a) {
        if (!this.loaded) {
          this.loaded = !0;
          var b = this._checkError();
          if (b) return void this._handleError(b);
          if (
            ((this._response = this._getResponse()),
            "arraybuffer" === this._responseType)
          )
            try {
              this._response = new Blob([this._response]);
            } catch (c) {
              if (
                ((window.BlobBuilder =
                  window.BlobBuilder ||
                  window.WebKitBlobBuilder ||
                  window.MozBlobBuilder ||
                  window.MSBlobBuilder),
                "TypeError" === c.name && window.BlobBuilder)
              ) {
                var d = new BlobBuilder();
                d.append(this._response), (this._response = d.getBlob());
              }
            }
          this._clean(), this.dispatchEvent(new createjs.Event("complete"));
        }
      }),
      (b._handleTimeout = function (a) {
        this._clean(),
          this.dispatchEvent(
            new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a)
          );
      }),
      (b._checkError = function () {
        var a = parseInt(this._request.status);
        switch (a) {
          case 404:
          case 0:
            return new Error(a);
        }
        return null;
      }),
      (b._getResponse = function () {
        if (null != this._response) return this._response;
        if (null != this._request.response) return this._request.response;
        try {
          if (null != this._request.responseText)
            return this._request.responseText;
        } catch (a) {}
        try {
          if (null != this._request.responseXML)
            return this._request.responseXML;
        } catch (a) {}
        return null;
      }),
      (b._createXHR = function (a) {
        var b = createjs.RequestUtils.isCrossDomain(a),
          c = {},
          d = null;
        if (window.XMLHttpRequest)
          (d = new XMLHttpRequest()),
            b &&
              void 0 === d.withCredentials &&
              window.XDomainRequest &&
              (d = new XDomainRequest());
        else {
          for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
            var g = s.ACTIVEX_VERSIONS[e];
            try {
              d = new ActiveXObject(g);
              break;
            } catch (h) {}
          }
          if (null == d) return !1;
        }
        null == a.mimeType &&
          createjs.RequestUtils.isText(a.type) &&
          (a.mimeType = "text/plain; charset=utf-8"),
          a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType),
          (this._xhrLevel = "string" == typeof d.responseType ? 2 : 1);
        var i = null;
        if (
          ((i =
            a.method == createjs.AbstractLoader.GET
              ? createjs.RequestUtils.buildPath(a.src, a.values)
              : a.src),
          d.open(a.method || createjs.AbstractLoader.GET, i, !0),
          b &&
            d instanceof XMLHttpRequest &&
            1 == this._xhrLevel &&
            (c.Origin = location.origin),
          a.values &&
            a.method == createjs.AbstractLoader.POST &&
            (c["Content-Type"] = "application/x-www-form-urlencoded"),
          b ||
            c["X-Requested-With"] ||
            (c["X-Requested-With"] = "XMLHttpRequest"),
          a.headers)
        )
          for (var j in a.headers) c[j] = a.headers[j];
        for (j in c) d.setRequestHeader(j, c[j]);
        return (
          d instanceof XMLHttpRequest &&
            void 0 !== a.withCredentials &&
            (d.withCredentials = a.withCredentials),
          (this._request = d),
          !0
        );
      }),
      (b._clean = function () {
        clearTimeout(this._loadTimeout),
          null != this._request.removeEventListener
            ? (this._request.removeEventListener(
                "loadstart",
                this._handleLoadStartProxy
              ),
              this._request.removeEventListener(
                "progress",
                this._handleProgressProxy
              ),
              this._request.removeEventListener(
                "abort",
                this._handleAbortProxy
              ),
              this._request.removeEventListener(
                "error",
                this._handleErrorProxy
              ),
              this._request.removeEventListener(
                "timeout",
                this._handleTimeoutProxy
              ),
              this._request.removeEventListener("load", this._handleLoadProxy),
              this._request.removeEventListener(
                "readystatechange",
                this._handleReadyStateChangeProxy
              ))
            : ((this._request.onloadstart = null),
              (this._request.onprogress = null),
              (this._request.onabort = null),
              (this._request.onerror = null),
              (this._request.ontimeout = null),
              (this._request.onload = null),
              (this._request.onreadystatechange = null));
      }),
      (b.toString = function () {
        return "[PreloadJS XHRRequest]";
      }),
      (createjs.XHRRequest = createjs.promote(a, "AbstractRequest"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.AbstractLoader_constructor(),
        (this._plugins = []),
        (this._typeCallbacks = {}),
        (this._extensionCallbacks = {}),
        (this.next = null),
        (this.maintainScriptOrder = !0),
        (this.stopOnError = !1),
        (this._maxConnections = 1),
        (this._availableLoaders = [
          createjs.ImageLoader,
          createjs.JavaScriptLoader,
          createjs.CSSLoader,
          createjs.JSONLoader,
          createjs.JSONPLoader,
          createjs.SoundLoader,
          createjs.ManifestLoader,
          createjs.SpriteSheetLoader,
          createjs.XMLLoader,
          createjs.SVGLoader,
          createjs.BinaryLoader,
          createjs.VideoLoader,
          createjs.TextLoader,
        ]),
        (this._defaultLoaderLength = this._availableLoaders.length),
        this.init(a, b, c);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (b.init = function (a, b, c) {
      (this.useXHR = !0),
        (this.preferXHR = !0),
        (this._preferXHR = !0),
        this.setPreferXHR(a),
        (this._paused = !1),
        (this._basePath = b),
        (this._crossOrigin = c),
        (this._loadStartWasDispatched = !1),
        (this._currentlyLoadingScript = null),
        (this._currentLoads = []),
        (this._loadQueue = []),
        (this._loadQueueBackup = []),
        (this._loadItemsById = {}),
        (this._loadItemsBySrc = {}),
        (this._loadedResults = {}),
        (this._loadedRawResults = {}),
        (this._numItems = 0),
        (this._numItemsLoaded = 0),
        (this._scriptOrder = []),
        (this._loadedScripts = []),
        (this._lastProgress = NaN);
    }),
      (c.loadTimeout = 8e3),
      (c.LOAD_TIMEOUT = 0),
      (c.BINARY = createjs.AbstractLoader.BINARY),
      (c.CSS = createjs.AbstractLoader.CSS),
      (c.IMAGE = createjs.AbstractLoader.IMAGE),
      (c.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT),
      (c.JSON = createjs.AbstractLoader.JSON),
      (c.JSONP = createjs.AbstractLoader.JSONP),
      (c.MANIFEST = createjs.AbstractLoader.MANIFEST),
      (c.SOUND = createjs.AbstractLoader.SOUND),
      (c.VIDEO = createjs.AbstractLoader.VIDEO),
      (c.SVG = createjs.AbstractLoader.SVG),
      (c.TEXT = createjs.AbstractLoader.TEXT),
      (c.XML = createjs.AbstractLoader.XML),
      (c.POST = createjs.AbstractLoader.POST),
      (c.GET = createjs.AbstractLoader.GET),
      (b.registerLoader = function (a) {
        if (!a || !a.canLoadItem)
          throw new Error("loader is of an incorrect type.");
        if (-1 != this._availableLoaders.indexOf(a))
          throw new Error("loader already exists.");
        this._availableLoaders.unshift(a);
      }),
      (b.unregisterLoader = function (a) {
        var b = this._availableLoaders.indexOf(a);
        -1 != b &&
          b < this._defaultLoaderLength - 1 &&
          this._availableLoaders.splice(b, 1);
      }),
      (b.setUseXHR = function (a) {
        return this.setPreferXHR(a);
      }),
      (b.setPreferXHR = function (a) {
        return (
          (this.preferXHR = 0 != a && null != window.XMLHttpRequest),
          this.preferXHR
        );
      }),
      (b.removeAll = function () {
        this.remove();
      }),
      (b.remove = function (a) {
        var b = null;
        if (a && !Array.isArray(a)) b = [a];
        else if (a) b = a;
        else if (arguments.length > 0) return;
        var c = !1;
        if (b) {
          for (; b.length; ) {
            var d = b.pop(),
              e = this.getResult(d);
            for (f = this._loadQueue.length - 1; f >= 0; f--)
              if (
                ((g = this._loadQueue[f].getItem()), g.id == d || g.src == d)
              ) {
                this._loadQueue.splice(f, 1)[0].cancel();
                break;
              }
            for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
              if (
                ((g = this._loadQueueBackup[f].getItem()),
                g.id == d || g.src == d)
              ) {
                this._loadQueueBackup.splice(f, 1)[0].cancel();
                break;
              }
            if (e) this._disposeItem(this.getItem(d));
            else
              for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                var g = this._currentLoads[f].getItem();
                if (g.id == d || g.src == d) {
                  this._currentLoads.splice(f, 1)[0].cancel(), (c = !0);
                  break;
                }
              }
          }
          c && this._loadNext();
        } else {
          this.close();
          for (var h in this._loadItemsById)
            this._disposeItem(this._loadItemsById[h]);
          this.init(this.preferXHR, this._basePath);
        }
      }),
      (b.reset = function () {
        this.close();
        for (var a in this._loadItemsById)
          this._disposeItem(this._loadItemsById[a]);
        for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++)
          b.push(this._loadQueueBackup[c].getItem());
        this.loadManifest(b, !1);
      }),
      (b.installPlugin = function (a) {
        if (null != a && null != a.getPreloadHandlers) {
          this._plugins.push(a);
          var b = a.getPreloadHandlers();
          if (((b.scope = a), null != b.types))
            for (var c = 0, d = b.types.length; d > c; c++)
              this._typeCallbacks[b.types[c]] = b;
          if (null != b.extensions)
            for (c = 0, d = b.extensions.length; d > c; c++)
              this._extensionCallbacks[b.extensions[c]] = b;
        }
      }),
      (b.setMaxConnections = function (a) {
        (this._maxConnections = a),
          !this._paused && this._loadQueue.length > 0 && this._loadNext();
      }),
      (b.loadFile = function (a, b, c) {
        if (null == a) {
          var d = new createjs.ErrorEvent("PRELOAD_NO_FILE");
          return void this._sendError(d);
        }
        this._addItem(a, null, c),
          b !== !1 ? this.setPaused(!1) : this.setPaused(!0);
      }),
      (b.loadManifest = function (a, b, d) {
        var e = null,
          f = null;
        if (Array.isArray(a)) {
          if (0 == a.length) {
            var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
            return void this._sendError(g);
          }
          e = a;
        } else if ("string" == typeof a) e = [{ src: a, type: c.MANIFEST }];
        else {
          if ("object" != typeof a) {
            var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
            return void this._sendError(g);
          }
          if (void 0 !== a.src) {
            if (null == a.type) a.type = c.MANIFEST;
            else if (a.type != c.MANIFEST) {
              var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
              this._sendError(g);
            }
            e = [a];
          } else void 0 !== a.manifest && ((e = a.manifest), (f = a.path));
        }
        for (var h = 0, i = e.length; i > h; h++) this._addItem(e[h], f, d);
        b !== !1 ? this.setPaused(!1) : this.setPaused(!0);
      }),
      (b.load = function () {
        this.setPaused(!1);
      }),
      (b.getItem = function (a) {
        return this._loadItemsById[a] || this._loadItemsBySrc[a];
      }),
      (b.getResult = function (a, b) {
        var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
        if (null == c) return null;
        var d = c.id;
        return b && this._loadedRawResults[d]
          ? this._loadedRawResults[d]
          : this._loadedResults[d];
      }),
      (b.getItems = function (a) {
        var b = [];
        for (var c in this._loadItemsById) {
          var d = this._loadItemsById[c],
            e = this.getResult(c);
          (a !== !0 || null != e) &&
            b.push({ item: d, result: e, rawResult: this.getResult(c, !0) });
        }
        return b;
      }),
      (b.setPaused = function (a) {
        (this._paused = a), this._paused || this._loadNext();
      }),
      (b.close = function () {
        for (; this._currentLoads.length; ) this._currentLoads.pop().cancel();
        (this._scriptOrder.length = 0),
          (this._loadedScripts.length = 0),
          (this.loadStartWasDispatched = !1),
          (this._itemCount = 0),
          (this._lastProgress = NaN);
      }),
      (b._addItem = function (a, b, c) {
        var d = this._createLoadItem(a, b, c);
        if (null != d) {
          var e = this._createLoader(d);
          null != e &&
            ("plugins" in e && (e.plugins = this._plugins),
            (d._loader = e),
            this._loadQueue.push(e),
            this._loadQueueBackup.push(e),
            this._numItems++,
            this._updateProgress(),
            ((this.maintainScriptOrder &&
              d.type == createjs.LoadQueue.JAVASCRIPT) ||
              d.maintainOrder === !0) &&
              (this._scriptOrder.push(d), this._loadedScripts.push(null)));
        }
      }),
      (b._createLoadItem = function (a, b, c) {
        var d = createjs.LoadItem.create(a);
        if (null == d) return null;
        var e = "",
          f = c || this._basePath;
        if (d.src instanceof Object) {
          if (!d.type) return null;
          if (b) {
            e = b;
            var g = createjs.RequestUtils.parseURI(b);
            null == f || g.absolute || g.relative || (e = f + e);
          } else null != f && (e = f);
        } else {
          var h = createjs.RequestUtils.parseURI(d.src);
          h.extension && (d.ext = h.extension),
            null == d.type &&
              (d.type = createjs.RequestUtils.getTypeByExtension(d.ext));
          var i = d.src;
          if (!h.absolute && !h.relative)
            if (b) {
              e = b;
              var g = createjs.RequestUtils.parseURI(b);
              (i = b + i), null == f || g.absolute || g.relative || (e = f + e);
            } else null != f && (e = f);
          d.src = e + d.src;
        }
        (d.path = e),
          (void 0 === d.id || null === d.id || "" === d.id) && (d.id = i);
        var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
        if (j) {
          var k = j.callback.call(j.scope, d, this);
          if (k === !1) return null;
          k === !0 || (null != k && (d._loader = k)),
            (h = createjs.RequestUtils.parseURI(d.src)),
            null != h.extension && (d.ext = h.extension);
        }
        return (
          (this._loadItemsById[d.id] = d),
          (this._loadItemsBySrc[d.src] = d),
          null == d.crossOrigin && (d.crossOrigin = this._crossOrigin),
          d
        );
      }),
      (b._createLoader = function (a) {
        if (null != a._loader) return a._loader;
        for (
          var b = this.preferXHR, c = 0;
          c < this._availableLoaders.length;
          c++
        ) {
          var d = this._availableLoaders[c];
          if (d && d.canLoadItem(a)) return new d(a, b);
        }
        return null;
      }),
      (b._loadNext = function () {
        if (!this._paused) {
          this._loadStartWasDispatched ||
            (this._sendLoadStart(), (this._loadStartWasDispatched = !0)),
            this._numItems == this._numItemsLoaded
              ? ((this.loaded = !0),
                this._sendComplete(),
                this.next && this.next.load && this.next.load())
              : (this.loaded = !1);
          for (
            var a = 0;
            a < this._loadQueue.length &&
            !(this._currentLoads.length >= this._maxConnections);
            a++
          ) {
            var b = this._loadQueue[a];
            this._canStartLoad(b) &&
              (this._loadQueue.splice(a, 1), a--, this._loadItem(b));
          }
        }
      }),
      (b._loadItem = function (a) {
        a.on("fileload", this._handleFileLoad, this),
          a.on("progress", this._handleProgress, this),
          a.on("complete", this._handleFileComplete, this),
          a.on("error", this._handleError, this),
          a.on("fileerror", this._handleFileError, this),
          this._currentLoads.push(a),
          this._sendFileStart(a.getItem()),
          a.load();
      }),
      (b._handleFileLoad = function (a) {
        (a.target = null), this.dispatchEvent(a);
      }),
      (b._handleFileError = function (a) {
        var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);
        this._sendError(b);
      }),
      (b._handleError = function (a) {
        var b = a.target;
        this._numItemsLoaded++,
          this._finishOrderedItem(b, !0),
          this._updateProgress();
        var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, b.getItem());
        this._sendError(c),
          this.stopOnError
            ? this.setPaused(!0)
            : (this._removeLoadItem(b),
              this._cleanLoadItem(b),
              this._loadNext());
      }),
      (b._handleFileComplete = function (a) {
        var b = a.target,
          c = b.getItem(),
          d = b.getResult();
        this._loadedResults[c.id] = d;
        var e = b.getResult(!0);
        null != e && e !== d && (this._loadedRawResults[c.id] = e),
          this._saveLoadedItems(b),
          this._removeLoadItem(b),
          this._finishOrderedItem(b) || this._processFinishedLoad(c, b),
          this._cleanLoadItem(b);
      }),
      (b._saveLoadedItems = function (a) {
        var b = a.getLoadedItems();
        if (null !== b)
          for (var c = 0; c < b.length; c++) {
            var d = b[c].item;
            (this._loadItemsBySrc[d.src] = d),
              (this._loadItemsById[d.id] = d),
              (this._loadedResults[d.id] = b[c].result),
              (this._loadedRawResults[d.id] = b[c].rawResult);
          }
      }),
      (b._finishOrderedItem = function (a, b) {
        var c = a.getItem();
        if (
          (this.maintainScriptOrder &&
            c.type == createjs.LoadQueue.JAVASCRIPT) ||
          c.maintainOrder
        ) {
          a instanceof createjs.JavaScriptLoader &&
            (this._currentlyLoadingScript = !1);
          var d = createjs.indexOf(this._scriptOrder, c);
          return -1 == d
            ? !1
            : ((this._loadedScripts[d] = b === !0 ? !0 : c),
              this._checkScriptLoadOrder(),
              !0);
        }
        return !1;
      }),
      (b._checkScriptLoadOrder = function () {
        for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
          var c = this._loadedScripts[b];
          if (null === c) break;
          if (c !== !0) {
            var d = this._loadedResults[c.id];
            c.type == createjs.LoadQueue.JAVASCRIPT &&
              createjs.DomUtils.appendToHead(d);
            var e = c._loader;
            this._processFinishedLoad(c, e), (this._loadedScripts[b] = !0);
          }
        }
      }),
      (b._processFinishedLoad = function (a, b) {
        if (
          (this._numItemsLoaded++,
          !this.maintainScriptOrder && a.type == createjs.LoadQueue.JAVASCRIPT)
        ) {
          var c = b.getTag();
          createjs.DomUtils.appendToHead(c);
        }
        this._updateProgress(), this._sendFileComplete(a, b), this._loadNext();
      }),
      (b._canStartLoad = function (a) {
        if (!this.maintainScriptOrder || a.preferXHR) return !0;
        var b = a.getItem();
        if (b.type != createjs.LoadQueue.JAVASCRIPT) return !0;
        if (this._currentlyLoadingScript) return !1;
        for (var c = this._scriptOrder.indexOf(b), d = 0; c > d; ) {
          var e = this._loadedScripts[d];
          if (null == e) return !1;
          d++;
        }
        return (this._currentlyLoadingScript = !0), !0;
      }),
      (b._removeLoadItem = function (a) {
        for (var b = this._currentLoads.length, c = 0; b > c; c++)
          if (this._currentLoads[c] == a) {
            this._currentLoads.splice(c, 1);
            break;
          }
      }),
      (b._cleanLoadItem = function (a) {
        var b = a.getItem();
        b && delete b._loader;
      }),
      (b._handleProgress = function (a) {
        var b = a.target;
        this._sendFileProgress(b.getItem(), b.progress), this._updateProgress();
      }),
      (b._updateProgress = function () {
        var a = this._numItemsLoaded / this._numItems,
          b = this._numItems - this._numItemsLoaded;
        if (b > 0) {
          for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++)
            c += this._currentLoads[d].progress;
          a += (c / b) * (b / this._numItems);
        }
        this._lastProgress != a &&
          (this._sendProgress(a), (this._lastProgress = a));
      }),
      (b._disposeItem = function (a) {
        delete this._loadedResults[a.id],
          delete this._loadedRawResults[a.id],
          delete this._loadItemsById[a.id],
          delete this._loadItemsBySrc[a.src];
      }),
      (b._sendFileProgress = function (a, b) {
        if (
          !this._isCanceled() &&
          !this._paused &&
          this.hasEventListener("fileprogress")
        ) {
          var c = new createjs.Event("fileprogress");
          (c.progress = b),
            (c.loaded = b),
            (c.total = 1),
            (c.item = a),
            this.dispatchEvent(c);
        }
      }),
      (b._sendFileComplete = function (a, b) {
        if (!this._isCanceled() && !this._paused) {
          var c = new createjs.Event("fileload");
          (c.loader = b),
            (c.item = a),
            (c.result = this._loadedResults[a.id]),
            (c.rawResult = this._loadedRawResults[a.id]),
            a.completeHandler && a.completeHandler(c),
            this.hasEventListener("fileload") && this.dispatchEvent(c);
        }
      }),
      (b._sendFileStart = function (a) {
        var b = new createjs.Event("filestart");
        (b.item = a),
          this.hasEventListener("filestart") && this.dispatchEvent(b);
      }),
      (b.toString = function () {
        return "[PreloadJS LoadQueue]";
      }),
      (createjs.LoadQueue = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.TEXT);
    }
    var b = (createjs.extend(a, createjs.AbstractLoader), a);
    (b.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.TEXT;
    }),
      (createjs.TextLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.BINARY),
        this.on("initialize", this._updateXHR, this);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.BINARY;
    }),
      (b._updateXHR = function (a) {
        a.loader.setResponseType("arraybuffer");
      }),
      (createjs.BinaryLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.CSS),
        (this.resultFormatter = this._formatResult),
        (this._tagSrcAttribute = "href"),
        b
          ? (this._tag = document.createElement("style"))
          : (this._tag = document.createElement("link")),
        (this._tag.rel = "stylesheet"),
        (this._tag.type = "text/css");
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.CSS;
    }),
      (b._formatResult = function (a) {
        if (this._preferXHR) {
          var b = a.getTag();
          if (b.styleSheet) b.styleSheet.cssText = a.getResult(!0);
          else {
            var c = document.createTextNode(a.getResult(!0));
            b.appendChild(c);
          }
        } else b = this._tag;
        return createjs.DomUtils.appendToHead(b), b;
      }),
      (createjs.CSSLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.IMAGE),
        (this.resultFormatter = this._formatResult),
        (this._tagSrcAttribute = "src"),
        createjs.RequestUtils.isImageTag(a)
          ? (this._tag = a)
          : createjs.RequestUtils.isImageTag(a.src)
          ? (this._tag = a.src)
          : createjs.RequestUtils.isImageTag(a.tag) && (this._tag = a.tag),
        null != this._tag
          ? (this._preferXHR = !1)
          : (this._tag = document.createElement("img")),
        this.on("initialize", this._updateXHR, this);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.IMAGE;
    }),
      (b.load = function () {
        if ("" != this._tag.src && this._tag.complete)
          return void this._sendComplete();
        var a = this._item.crossOrigin;
        1 == a && (a = "Anonymous"),
          null == a ||
            createjs.RequestUtils.isLocal(this._item.src) ||
            (this._tag.crossOrigin = a),
          this.AbstractLoader_load();
      }),
      (b._updateXHR = function (a) {
        (a.loader.mimeType = "text/plain; charset=x-user-defined-binary"),
          a.loader.setResponseType && a.loader.setResponseType("blob");
      }),
      (b._formatResult = function (a) {
        return this._formatImage;
      }),
      (b._formatImage = function (a, b) {
        var c = this._tag,
          d = window.URL || window.webkitURL;
        if (this._preferXHR)
          if (d) {
            var e = d.createObjectURL(this.getResult(!0));
            (c.src = e),
              c.addEventListener("load", this._cleanUpURL, !1),
              c.addEventListener("error", this._cleanUpURL, !1);
          } else c.src = this._item.src;
        else;
        c.complete
          ? a(c)
          : ((c.onload = createjs.proxy(function () {
              a(this._tag);
            }, this)),
            (c.onerror = createjs.proxy(function () {
              b(this._tag);
            }, this)));
      }),
      (b._cleanUpURL = function (a) {
        var b = window.URL || window.webkitURL;
        b.revokeObjectURL(a.target.src);
      }),
      (createjs.ImageLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.JAVASCRIPT),
        (this.resultFormatter = this._formatResult),
        (this._tagSrcAttribute = "src"),
        this.setTag(document.createElement("script"));
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.JAVASCRIPT;
    }),
      (b._formatResult = function (a) {
        var b = a.getTag();
        return this._preferXHR && (b.text = a.getResult(!0)), b;
      }),
      (createjs.JavaScriptLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.JSON),
        (this.resultFormatter = this._formatResult);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.JSON;
    }),
      (b._formatResult = function (a) {
        var b = null;
        try {
          b = createjs.DataUtils.parseJSON(a.getResult(!0));
        } catch (c) {
          var d = new createjs.ErrorEvent("JSON_FORMAT", null, c);
          return this._sendError(d), c;
        }
        return b;
      }),
      (createjs.JSONLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !1, createjs.AbstractLoader.JSONP),
        this.setTag(document.createElement("script")),
        (this.getTag().type = "text/javascript");
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.JSONP;
    }),
      (b.cancel = function () {
        this.AbstractLoader_cancel(), this._dispose();
      }),
      (b.load = function () {
        if (null == this._item.callback)
          throw new Error("callback is required for loading JSONP requests.");
        if (null != window[this._item.callback])
          throw new Error(
            "JSONP callback '" +
              this._item.callback +
              "' already exists on window. You need to specify a different callback or re-name the current one."
          );
        (window[this._item.callback] = createjs.proxy(this._handleLoad, this)),
          window.document.body.appendChild(this._tag),
          (this._loadTimeout = setTimeout(
            createjs.proxy(this._handleTimeout, this),
            this._item.loadTimeout
          )),
          (this._tag.src = this._item.src);
      }),
      (b._handleLoad = function (a) {
        (this._result = this._rawResult = a),
          this._sendComplete(),
          this._dispose();
      }),
      (b._handleTimeout = function () {
        this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"));
      }),
      (b._dispose = function () {
        window.document.body.removeChild(this._tag),
          delete window[this._item.callback],
          clearTimeout(this._loadTimeout);
      }),
      (createjs.JSONPLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(
        a,
        null,
        createjs.AbstractLoader.MANIFEST
      ),
        (this.plugins = null),
        (this._manifestQueue = null);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.MANIFEST_PROGRESS = 0.25),
      (c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.MANIFEST;
      }),
      (b.load = function () {
        this.AbstractLoader_load();
      }),
      (b._createRequest = function () {
        var a = this._item.callback;
        null != a
          ? (this._request = new createjs.JSONPLoader(this._item))
          : (this._request = new createjs.JSONLoader(this._item));
      }),
      (b.handleEvent = function (a) {
        switch (a.type) {
          case "complete":
            return (
              (this._rawResult = a.target.getResult(!0)),
              (this._result = a.target.getResult()),
              this._sendProgress(c.MANIFEST_PROGRESS),
              void this._loadManifest(this._result)
            );
          case "progress":
            return (
              (a.loaded *= c.MANIFEST_PROGRESS),
              (this.progress = a.loaded / a.total),
              (isNaN(this.progress) || this.progress == 1 / 0) &&
                (this.progress = 0),
              void this._sendProgress(a)
            );
        }
        this.AbstractLoader_handleEvent(a);
      }),
      (b.destroy = function () {
        this.AbstractLoader_destroy(), this._manifestQueue.close();
      }),
      (b._loadManifest = function (a) {
        if (a && a.manifest) {
          var b = (this._manifestQueue = new createjs.LoadQueue());
          b.on("fileload", this._handleManifestFileLoad, this),
            b.on("progress", this._handleManifestProgress, this),
            b.on("complete", this._handleManifestComplete, this, !0),
            b.on("error", this._handleManifestError, this, !0);
          for (var c = 0, d = this.plugins.length; d > c; c++)
            b.installPlugin(this.plugins[c]);
          b.loadManifest(a);
        } else this._sendComplete();
      }),
      (b._handleManifestFileLoad = function (a) {
        (a.target = null), this.dispatchEvent(a);
      }),
      (b._handleManifestComplete = function (a) {
        (this._loadedItems = this._manifestQueue.getItems(!0)),
          this._sendComplete();
      }),
      (b._handleManifestProgress = function (a) {
        (this.progress =
          a.progress * (1 - c.MANIFEST_PROGRESS) + c.MANIFEST_PROGRESS),
          this._sendProgress(this.progress);
      }),
      (b._handleManifestError = function (a) {
        var b = new createjs.Event("fileerror");
        (b.item = a.data), this.dispatchEvent(b);
      }),
      (createjs.ManifestLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.SOUND),
        createjs.RequestUtils.isAudioTag(a)
          ? (this._tag = a)
          : createjs.RequestUtils.isAudioTag(a.src)
          ? (this._tag = a)
          : createjs.RequestUtils.isAudioTag(a.tag) &&
            (this._tag = createjs.RequestUtils.isAudioTag(a) ? a : a.src),
        null != this._tag && (this._preferXHR = !1);
    }
    var b = createjs.extend(a, createjs.AbstractMediaLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.SOUND;
    }),
      (b._createTag = function (a) {
        var b = document.createElement("audio");
        return (b.autoplay = !1), (b.preload = "none"), (b.src = a), b;
      }),
      (createjs.SoundLoader = createjs.promote(a, "AbstractMediaLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.VIDEO),
        createjs.RequestUtils.isVideoTag(a) ||
        createjs.RequestUtils.isVideoTag(a.src)
          ? (this.setTag(createjs.RequestUtils.isVideoTag(a) ? a : a.src),
            (this._preferXHR = !1))
          : this.setTag(this._createTag());
    }
    var b = createjs.extend(a, createjs.AbstractMediaLoader),
      c = a;
    (b._createTag = function () {
      return document.createElement("video");
    }),
      (c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.VIDEO;
      }),
      (createjs.VideoLoader = createjs.promote(a, "AbstractMediaLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractLoader_constructor(
        a,
        b,
        createjs.AbstractLoader.SPRITESHEET
      ),
        (this._manifestQueue = null);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.SPRITESHEET_PROGRESS = 0.25),
      (c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.SPRITESHEET;
      }),
      (b.destroy = function () {
        this.AbstractLoader_destroy, this._manifestQueue.close();
      }),
      (b._createRequest = function () {
        var a = this._item.callback;
        null != a
          ? (this._request = new createjs.JSONPLoader(this._item))
          : (this._request = new createjs.JSONLoader(this._item));
      }),
      (b.handleEvent = function (a) {
        switch (a.type) {
          case "complete":
            return (
              (this._rawResult = a.target.getResult(!0)),
              (this._result = a.target.getResult()),
              this._sendProgress(c.SPRITESHEET_PROGRESS),
              void this._loadManifest(this._result)
            );
          case "progress":
            return (
              (a.loaded *= c.SPRITESHEET_PROGRESS),
              (this.progress = a.loaded / a.total),
              (isNaN(this.progress) || this.progress == 1 / 0) &&
                (this.progress = 0),
              void this._sendProgress(a)
            );
        }
        this.AbstractLoader_handleEvent(a);
      }),
      (b._loadManifest = function (a) {
        if (a && a.images) {
          var b = (this._manifestQueue = new createjs.LoadQueue(
            this._preferXHR,
            this._item.path,
            this._item.crossOrigin
          ));
          b.on("complete", this._handleManifestComplete, this, !0),
            b.on("fileload", this._handleManifestFileLoad, this),
            b.on("progress", this._handleManifestProgress, this),
            b.on("error", this._handleManifestError, this, !0),
            b.loadManifest(a.images);
        }
      }),
      (b._handleManifestFileLoad = function (a) {
        var b = a.result;
        if (null != b) {
          var c = this.getResult().images,
            d = c.indexOf(a.item.src);
          c[d] = b;
        }
      }),
      (b._handleManifestComplete = function (a) {
        (this._result = new createjs.SpriteSheet(this._result)),
          (this._loadedItems = this._manifestQueue.getItems(!0)),
          this._sendComplete();
      }),
      (b._handleManifestProgress = function (a) {
        (this.progress =
          a.progress * (1 - c.SPRITESHEET_PROGRESS) + c.SPRITESHEET_PROGRESS),
          this._sendProgress(this.progress);
      }),
      (b._handleManifestError = function (a) {
        var b = new createjs.Event("fileerror");
        (b.item = a.data), this.dispatchEvent(b);
      }),
      (createjs.SpriteSheetLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.SVG),
        (this.resultFormatter = this._formatResult),
        (this._tagSrcAttribute = "data"),
        b
          ? this.setTag(document.createElement("svg"))
          : (this.setTag(document.createElement("object")),
            (this.getTag().type = "image/svg+xml"));
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.SVG;
    }),
      (b._formatResult = function (a) {
        var b = createjs.DataUtils.parseXML(a.getResult(!0), "text/xml"),
          c = a.getTag();
        return (
          !this._preferXHR &&
            document.body.contains(c) &&
            document.body.removeChild(c),
          null != b.documentElement
            ? (c.appendChild(b.documentElement),
              (c.style.visibility = "visible"),
              c)
            : b
        );
      }),
      (createjs.SVGLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.XML),
        (this.resultFormatter = this._formatResult);
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    (c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.XML;
    }),
      (b._formatResult = function (a) {
        return createjs.DataUtils.parseXML(a.getResult(!0), "text/xml");
      }),
      (createjs.XMLLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    var a = (createjs.SoundJS = createjs.SoundJS || {});
    (a.version = "0.6.2"), (a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT");
  })(),
  (this.createjs = this.createjs || {}),
  (createjs.indexOf = function (a, b) {
    "use strict";
    for (var c = 0, d = a.length; d > c; c++) if (b === a[c]) return c;
    return -1;
  }),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    createjs.proxy = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return function () {
        return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
      };
    };
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "BrowserDetect cannot be instantiated";
    }
    var b = (a.agent = window.navigator.userAgent);
    (a.isWindowPhone =
      b.indexOf("IEMobile") > -1 || b.indexOf("Windows Phone") > -1),
      (a.isFirefox = b.indexOf("Firefox") > -1),
      (a.isOpera = null != window.opera),
      (a.isChrome = b.indexOf("Chrome") > -1),
      (a.isIOS =
        (b.indexOf("iPod") > -1 ||
          b.indexOf("iPhone") > -1 ||
          b.indexOf("iPad") > -1) &&
        !a.isWindowPhone),
      (a.isAndroid = b.indexOf("Android") > -1 && !a.isWindowPhone),
      (a.isBlackberry = b.indexOf("Blackberry") > -1),
      (createjs.BrowserDetect = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = function () {
        (this.interrupt = null),
          (this.delay = null),
          (this.offset = null),
          (this.loop = null),
          (this.volume = null),
          (this.pan = null),
          (this.startTime = null),
          (this.duration = null);
      },
      b = (a.prototype = {}),
      c = a;
    (c.create = function (a) {
      if (a instanceof c || a instanceof Object) {
        var b = new createjs.PlayPropsConfig();
        return b.set(a), b;
      }
      throw new Error("Type not recognized.");
    }),
      (b.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this;
      }),
      (b.toString = function () {
        return "[PlayPropsConfig]";
      }),
      (createjs.PlayPropsConfig = c);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "Sound cannot be instantiated";
    }
    function b(a, b) {
      this.init(a, b);
    }
    var c = a;
    (c.INTERRUPT_ANY = "any"),
      (c.INTERRUPT_EARLY = "early"),
      (c.INTERRUPT_LATE = "late"),
      (c.INTERRUPT_NONE = "none"),
      (c.PLAY_INITED = "playInited"),
      (c.PLAY_SUCCEEDED = "playSucceeded"),
      (c.PLAY_INTERRUPTED = "playInterrupted"),
      (c.PLAY_FINISHED = "playFinished"),
      (c.PLAY_FAILED = "playFailed"),
      (c.SUPPORTED_EXTENSIONS = [
        "mp3",
        "ogg",
        "opus",
        "mpeg",
        "wav",
        "m4a",
        "mp4",
        "aiff",
        "wma",
        "mid",
      ]),
      (c.EXTENSION_MAP = { m4a: "mp4" }),
      (c.FILE_PATTERN =
        /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/),
      (c.defaultInterruptBehavior = c.INTERRUPT_NONE),
      (c.alternateExtensions = []),
      (c.activePlugin = null),
      (c._masterVolume = 1),
      Object.defineProperty(c, "volume", {
        get: function () {
          return this._masterVolume;
        },
        set: function (a) {
          if (null == Number(a)) return !1;
          if (
            ((a = Math.max(0, Math.min(1, a))),
            (c._masterVolume = a),
            !this.activePlugin ||
              !this.activePlugin.setVolume ||
              !this.activePlugin.setVolume(a))
          )
            for (var b = this._instances, d = 0, e = b.length; e > d; d++)
              b[d].setMasterVolume(a);
        },
      }),
      (c._masterMute = !1),
      Object.defineProperty(c, "muted", {
        get: function () {
          return this._masterMute;
        },
        set: function (a) {
          if (null == a) return !1;
          if (
            ((this._masterMute = a),
            !this.activePlugin ||
              !this.activePlugin.setMute ||
              !this.activePlugin.setMute(a))
          )
            for (var b = this._instances, c = 0, d = b.length; d > c; c++)
              b[c].setMasterMute(a);
          return !0;
        },
      }),
      Object.defineProperty(c, "capabilities", {
        get: function () {
          return null == c.activePlugin ? null : c.activePlugin._capabilities;
        },
        set: function (a) {
          return !1;
        },
      }),
      (c._pluginsRegistered = !1),
      (c._lastID = 0),
      (c._instances = []),
      (c._idHash = {}),
      (c._preloadHash = {}),
      (c._defaultPlayPropsHash = {}),
      (c.addEventListener = null),
      (c.removeEventListener = null),
      (c.removeAllEventListeners = null),
      (c.dispatchEvent = null),
      (c.hasEventListener = null),
      (c._listeners = null),
      createjs.EventDispatcher.initialize(c),
      (c.getPreloadHandlers = function () {
        return {
          callback: createjs.proxy(c.initLoad, c),
          types: ["sound"],
          extensions: c.SUPPORTED_EXTENSIONS,
        };
      }),
      (c._handleLoadComplete = function (a) {
        var b = a.target.getItem().src;
        if (c._preloadHash[b])
          for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
            var f = c._preloadHash[b][d];
            if (((c._preloadHash[b][d] = !0), c.hasEventListener("fileload"))) {
              var a = new createjs.Event("fileload");
              (a.src = f.src),
                (a.id = f.id),
                (a.data = f.data),
                (a.sprite = f.sprite),
                c.dispatchEvent(a);
            }
          }
      }),
      (c._handleLoadError = function (a) {
        var b = a.target.getItem().src;
        if (c._preloadHash[b])
          for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
            var f = c._preloadHash[b][d];
            if (
              ((c._preloadHash[b][d] = !1), c.hasEventListener("fileerror"))
            ) {
              var a = new createjs.Event("fileerror");
              (a.src = f.src),
                (a.id = f.id),
                (a.data = f.data),
                (a.sprite = f.sprite),
                c.dispatchEvent(a);
            }
          }
      }),
      (c._registerPlugin = function (a) {
        return a.isSupported() ? ((c.activePlugin = new a()), !0) : !1;
      }),
      (c.registerPlugins = function (a) {
        c._pluginsRegistered = !0;
        for (var b = 0, d = a.length; d > b; b++)
          if (c._registerPlugin(a[b])) return !0;
        return !1;
      }),
      (c.initializeDefaultPlugins = function () {
        return null != c.activePlugin
          ? !0
          : c._pluginsRegistered
          ? !1
          : c.registerPlugins([
              createjs.WebAudioPlugin,
              createjs.HTMLAudioPlugin,
            ])
          ? !0
          : !1;
      }),
      (c.isReady = function () {
        return null != c.activePlugin;
      }),
      (c.getCapabilities = function () {
        return null == c.activePlugin ? null : c.activePlugin._capabilities;
      }),
      (c.getCapability = function (a) {
        return null == c.activePlugin ? null : c.activePlugin._capabilities[a];
      }),
      (c.initLoad = function (a) {
        return c._registerSound(a);
      }),
      (c._registerSound = function (a) {
        if (!c.initializeDefaultPlugins()) return !1;
        var d;
        if (
          (a.src instanceof Object
            ? ((d = c._parseSrc(a.src)), (d.src = a.path + d.src))
            : (d = c._parsePath(a.src)),
          null == d)
        )
          return !1;
        (a.src = d.src), (a.type = "sound");
        var e = a.data,
          f = null;
        if (
          null != e &&
          (isNaN(e.channels)
            ? isNaN(e) || (f = parseInt(e))
            : (f = parseInt(e.channels)),
          e.audioSprite)
        )
          for (var g, h = e.audioSprite.length; h--; )
            (g = e.audioSprite[h]),
              (c._idHash[g.id] = {
                src: a.src,
                startTime: parseInt(g.startTime),
                duration: parseInt(g.duration),
              }),
              g.defaultPlayProps &&
                (c._defaultPlayPropsHash[g.id] =
                  createjs.PlayPropsConfig.create(g.defaultPlayProps));
        null != a.id && (c._idHash[a.id] = { src: a.src });
        var i = c.activePlugin.register(a);
        return (
          b.create(a.src, f),
          null != e && isNaN(e)
            ? (a.data.channels = f || b.maxPerChannel())
            : (a.data = f || b.maxPerChannel()),
          i.type && (a.type = i.type),
          a.defaultPlayProps &&
            (c._defaultPlayPropsHash[a.src] = createjs.PlayPropsConfig.create(
              a.defaultPlayProps
            )),
          i
        );
      }),
      (c.registerSound = function (a, b, d, e, f) {
        var g = { src: a, id: b, data: d, defaultPlayProps: f };
        a instanceof Object && a.src && ((e = b), (g = a)),
          (g = createjs.LoadItem.create(g)),
          (g.path = e),
          null == e || g.src instanceof Object || (g.src = e + a);
        var h = c._registerSound(g);
        if (!h) return !1;
        if (
          (c._preloadHash[g.src] || (c._preloadHash[g.src] = []),
          c._preloadHash[g.src].push(g),
          1 == c._preloadHash[g.src].length)
        )
          h.on("complete", createjs.proxy(this._handleLoadComplete, this)),
            h.on("error", createjs.proxy(this._handleLoadError, this)),
            c.activePlugin.preload(h);
        else if (1 == c._preloadHash[g.src][0]) return !0;
        return g;
      }),
      (c.registerSounds = function (a, b) {
        var c = [];
        a.path && (b ? (b += a.path) : (b = a.path), (a = a.manifest));
        for (var d = 0, e = a.length; e > d; d++)
          c[d] = createjs.Sound.registerSound(
            a[d].src,
            a[d].id,
            a[d].data,
            b,
            a[d].defaultPlayProps
          );
        return c;
      }),
      (c.removeSound = function (a, d) {
        if (null == c.activePlugin) return !1;
        a instanceof Object && a.src && (a = a.src);
        var e;
        if (
          (a instanceof Object
            ? (e = c._parseSrc(a))
            : ((a = c._getSrcById(a).src), (e = c._parsePath(a))),
          null == e)
        )
          return !1;
        (a = e.src), null != d && (a = d + a);
        for (var f in c._idHash) c._idHash[f].src == a && delete c._idHash[f];
        return (
          b.removeSrc(a),
          delete c._preloadHash[a],
          c.activePlugin.removeSound(a),
          !0
        );
      }),
      (c.removeSounds = function (a, b) {
        var c = [];
        a.path && (b ? (b += a.path) : (b = a.path), (a = a.manifest));
        for (var d = 0, e = a.length; e > d; d++)
          c[d] = createjs.Sound.removeSound(a[d].src, b);
        return c;
      }),
      (c.removeAllSounds = function () {
        (c._idHash = {}),
          (c._preloadHash = {}),
          b.removeAll(),
          c.activePlugin && c.activePlugin.removeAllSounds();
      }),
      (c.loadComplete = function (a) {
        if (!c.isReady()) return !1;
        var b = c._parsePath(a);
        return (
          (a = b ? c._getSrcById(b.src).src : c._getSrcById(a).src),
          void 0 == c._preloadHash[a] ? !1 : 1 == c._preloadHash[a][0]
        );
      }),
      (c._parsePath = function (a) {
        "string" != typeof a && (a = a.toString());
        var b = a.match(c.FILE_PATTERN);
        if (null == b) return !1;
        for (var d = b[4], e = b[5], f = c.capabilities, g = 0; !f[e]; )
          if (
            ((e = c.alternateExtensions[g++]), g > c.alternateExtensions.length)
          )
            return null;
        a = a.replace("." + b[5], "." + e);
        var h = { name: d, src: a, extension: e };
        return h;
      }),
      (c._parseSrc = function (a) {
        var b = { name: void 0, src: void 0, extension: void 0 },
          d = c.capabilities;
        for (var e in a)
          if (a.hasOwnProperty(e) && d[e]) {
            (b.src = a[e]), (b.extension = e);
            break;
          }
        if (!b.src) return !1;
        var f = b.src.lastIndexOf("/");
        return -1 != f ? (b.name = b.src.slice(f + 1)) : (b.name = b.src), b;
      }),
      (c.play = function (a, b, d, e, f, g, h, i, j) {
        var k;
        k =
          b instanceof Object || b instanceof createjs.PlayPropsConfig
            ? createjs.PlayPropsConfig.create(b)
            : createjs.PlayPropsConfig.create({
                interrupt: b,
                delay: d,
                offset: e,
                loop: f,
                volume: g,
                pan: h,
                startTime: i,
                duration: j,
              });
        var l = c.createInstance(a, k.startTime, k.duration),
          m = c._playInstance(l, k);
        return m || l._playFailed(), l;
      }),
      (c.createInstance = function (a, d, e) {
        if (!c.initializeDefaultPlugins())
          return new createjs.DefaultSoundInstance(a, d, e);
        var f = c._defaultPlayPropsHash[a];
        a = c._getSrcById(a);
        var g = c._parsePath(a.src),
          h = null;
        return (
          null != g && null != g.src
            ? (b.create(g.src),
              null == d && (d = a.startTime),
              (h = c.activePlugin.create(g.src, d, e || a.duration)),
              (f = f || c._defaultPlayPropsHash[g.src]),
              f && h.applyPlayProps(f))
            : (h = new createjs.DefaultSoundInstance(a, d, e)),
          (h.uniqueId = c._lastID++),
          h
        );
      }),
      (c.stop = function () {
        for (var a = this._instances, b = a.length; b--; ) a[b].stop();
      }),
      (c.setVolume = function (a) {
        if (null == Number(a)) return !1;
        if (
          ((a = Math.max(0, Math.min(1, a))),
          (c._masterVolume = a),
          !this.activePlugin ||
            !this.activePlugin.setVolume ||
            !this.activePlugin.setVolume(a))
        )
          for (var b = this._instances, d = 0, e = b.length; e > d; d++)
            b[d].setMasterVolume(a);
      }),
      (c.getVolume = function () {
        return this._masterVolume;
      }),
      (c.setMute = function (a) {
        if (null == a) return !1;
        if (
          ((this._masterMute = a),
          !this.activePlugin ||
            !this.activePlugin.setMute ||
            !this.activePlugin.setMute(a))
        )
          for (var b = this._instances, c = 0, d = b.length; d > c; c++)
            b[c].setMasterMute(a);
        return !0;
      }),
      (c.getMute = function () {
        return this._masterMute;
      }),
      (c.setDefaultPlayProps = function (a, b) {
        (a = c._getSrcById(a)),
          (c._defaultPlayPropsHash[c._parsePath(a.src).src] =
            createjs.PlayPropsConfig.create(b));
      }),
      (c.getDefaultPlayProps = function (a) {
        return (
          (a = c._getSrcById(a)),
          c._defaultPlayPropsHash[c._parsePath(a.src).src]
        );
      }),
      (c._playInstance = function (a, b) {
        var d = c._defaultPlayPropsHash[a.src] || {};
        if (
          (null == b.interrupt &&
            (b.interrupt = d.interrupt || c.defaultInterruptBehavior),
          null == b.delay && (b.delay = d.delay || 0),
          null == b.offset && (b.offset = a.getPosition()),
          null == b.loop && (b.loop = a.loop),
          null == b.volume && (b.volume = a.volume),
          null == b.pan && (b.pan = a.pan),
          0 == b.delay)
        ) {
          var e = c._beginPlaying(a, b);
          if (!e) return !1;
        } else {
          var f = setTimeout(function () {
            c._beginPlaying(a, b);
          }, b.delay);
          a.delayTimeoutId = f;
        }
        return this._instances.push(a), !0;
      }),
      (c._beginPlaying = function (a, c) {
        if (!b.add(a, c.interrupt)) return !1;
        var d = a._beginPlaying(c);
        if (!d) {
          var e = createjs.indexOf(this._instances, a);
          return e > -1 && this._instances.splice(e, 1), !1;
        }
        return !0;
      }),
      (c._getSrcById = function (a) {
        return c._idHash[a] || { src: a };
      }),
      (c._playFinished = function (a) {
        b.remove(a);
        var c = createjs.indexOf(this._instances, a);
        c > -1 && this._instances.splice(c, 1);
      }),
      (createjs.Sound = a),
      (b.channels = {}),
      (b.create = function (a, c) {
        var d = b.get(a);
        return null == d ? ((b.channels[a] = new b(a, c)), !0) : !1;
      }),
      (b.removeSrc = function (a) {
        var c = b.get(a);
        return null == c ? !1 : (c._removeAll(), delete b.channels[a], !0);
      }),
      (b.removeAll = function () {
        for (var a in b.channels) b.channels[a]._removeAll();
        b.channels = {};
      }),
      (b.add = function (a, c) {
        var d = b.get(a.src);
        return null == d ? !1 : d._add(a, c);
      }),
      (b.remove = function (a) {
        var c = b.get(a.src);
        return null == c ? !1 : (c._remove(a), !0);
      }),
      (b.maxPerChannel = function () {
        return d.maxDefault;
      }),
      (b.get = function (a) {
        return b.channels[a];
      });
    var d = b.prototype;
    (d.constructor = b),
      (d.src = null),
      (d.max = null),
      (d.maxDefault = 100),
      (d.length = 0),
      (d.init = function (a, b) {
        (this.src = a),
          (this.max = b || this.maxDefault),
          -1 == this.max && (this.max = this.maxDefault),
          (this._instances = []);
      }),
      (d._get = function (a) {
        return this._instances[a];
      }),
      (d._add = function (a, b) {
        return this._getSlot(b, a)
          ? (this._instances.push(a), this.length++, !0)
          : !1;
      }),
      (d._remove = function (a) {
        var b = createjs.indexOf(this._instances, a);
        return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0);
      }),
      (d._removeAll = function () {
        for (var a = this.length - 1; a >= 0; a--) this._instances[a].stop();
      }),
      (d._getSlot = function (b, c) {
        var d, e;
        if (b != a.INTERRUPT_NONE && ((e = this._get(0)), null == e)) return !0;
        for (var f = 0, g = this.max; g > f; f++) {
          if (((d = this._get(f)), null == d)) return !0;
          if (
            d.playState == a.PLAY_FINISHED ||
            d.playState == a.PLAY_INTERRUPTED ||
            d.playState == a.PLAY_FAILED
          ) {
            e = d;
            break;
          }
          b != a.INTERRUPT_NONE &&
            ((b == a.INTERRUPT_EARLY && d.getPosition() < e.getPosition()) ||
              (b == a.INTERRUPT_LATE && d.getPosition() > e.getPosition())) &&
            (e = d);
        }
        return null != e ? (e._interrupt(), this._remove(e), !0) : !1;
      }),
      (d.toString = function () {
        return "[Sound SoundChannel]";
      });
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = function (a, b, c, d) {
        this.EventDispatcher_constructor(),
          (this.src = a),
          (this.uniqueId = -1),
          (this.playState = null),
          (this.delayTimeoutId = null),
          (this._volume = 1),
          Object.defineProperty(this, "volume", {
            get: this.getVolume,
            set: this.setVolume,
          }),
          (this._pan = 0),
          Object.defineProperty(this, "pan", {
            get: this.getPan,
            set: this.setPan,
          }),
          (this._startTime = Math.max(0, b || 0)),
          Object.defineProperty(this, "startTime", {
            get: this.getStartTime,
            set: this.setStartTime,
          }),
          (this._duration = Math.max(0, c || 0)),
          Object.defineProperty(this, "duration", {
            get: this.getDuration,
            set: this.setDuration,
          }),
          (this._playbackResource = null),
          Object.defineProperty(this, "playbackResource", {
            get: this.getPlaybackResource,
            set: this.setPlaybackResource,
          }),
          d !== !1 && d !== !0 && this.setPlaybackResource(d),
          (this._position = 0),
          Object.defineProperty(this, "position", {
            get: this.getPosition,
            set: this.setPosition,
          }),
          (this._loop = 0),
          Object.defineProperty(this, "loop", {
            get: this.getLoop,
            set: this.setLoop,
          }),
          (this._muted = !1),
          Object.defineProperty(this, "muted", {
            get: this.getMuted,
            set: this.setMuted,
          }),
          (this._paused = !1),
          Object.defineProperty(this, "paused", {
            get: this.getPaused,
            set: this.setPaused,
          });
      },
      b = createjs.extend(a, createjs.EventDispatcher);
    (b.play = function (a, b, c, d, e, f) {
      var g;
      return (
        (g =
          a instanceof Object || a instanceof createjs.PlayPropsConfig
            ? createjs.PlayPropsConfig.create(a)
            : createjs.PlayPropsConfig.create({
                interrupt: a,
                delay: b,
                offset: c,
                loop: d,
                volume: e,
                pan: f,
              })),
        this.playState == createjs.Sound.PLAY_SUCCEEDED
          ? (this.applyPlayProps(g), void (this._paused && this.setPaused(!1)))
          : (this._cleanUp(), createjs.Sound._playInstance(this, g), this)
      );
    }),
      (b.stop = function () {
        return (
          (this._position = 0),
          (this._paused = !1),
          this._handleStop(),
          this._cleanUp(),
          (this.playState = createjs.Sound.PLAY_FINISHED),
          this
        );
      }),
      (b.destroy = function () {
        this._cleanUp(),
          (this.src = null),
          (this.playbackResource = null),
          this.removeAllEventListeners();
      }),
      (b.applyPlayProps = function (a) {
        return (
          null != a.offset && this.setPosition(a.offset),
          null != a.loop && this.setLoop(a.loop),
          null != a.volume && this.setVolume(a.volume),
          null != a.pan && this.setPan(a.pan),
          null != a.startTime &&
            (this.setStartTime(a.startTime), this.setDuration(a.duration)),
          this
        );
      }),
      (b.toString = function () {
        return "[AbstractSoundInstance]";
      }),
      (b.getPaused = function () {
        return this._paused;
      }),
      (b.setPaused = function (a) {
        return (a !== !0 && a !== !1) ||
          this._paused == a ||
          (1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED)
          ? void 0
          : ((this._paused = a),
            a ? this._pause() : this._resume(),
            clearTimeout(this.delayTimeoutId),
            this);
      }),
      (b.setVolume = function (a) {
        return a == this._volume
          ? this
          : ((this._volume = Math.max(0, Math.min(1, a))),
            this._muted || this._updateVolume(),
            this);
      }),
      (b.getVolume = function () {
        return this._volume;
      }),
      (b.setMuted = function (a) {
        return a === !0 || a === !1
          ? ((this._muted = a), this._updateVolume(), this)
          : void 0;
      }),
      (b.getMuted = function () {
        return this._muted;
      }),
      (b.setPan = function (a) {
        return a == this._pan
          ? this
          : ((this._pan = Math.max(-1, Math.min(1, a))),
            this._updatePan(),
            this);
      }),
      (b.getPan = function () {
        return this._pan;
      }),
      (b.getPosition = function () {
        return (
          this._paused ||
            this.playState != createjs.Sound.PLAY_SUCCEEDED ||
            (this._position = this._calculateCurrentPosition()),
          this._position
        );
      }),
      (b.setPosition = function (a) {
        return (
          (this._position = Math.max(0, a)),
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
            this._updatePosition(),
          this
        );
      }),
      (b.getStartTime = function () {
        return this._startTime;
      }),
      (b.setStartTime = function (a) {
        return a == this._startTime
          ? this
          : ((this._startTime = Math.max(0, a || 0)),
            this._updateStartTime(),
            this);
      }),
      (b.getDuration = function () {
        return this._duration;
      }),
      (b.setDuration = function (a) {
        return a == this._duration
          ? this
          : ((this._duration = Math.max(0, a || 0)),
            this._updateDuration(),
            this);
      }),
      (b.setPlaybackResource = function (a) {
        return (
          (this._playbackResource = a),
          0 == this._duration && this._setDurationFromSource(),
          this
        );
      }),
      (b.getPlaybackResource = function () {
        return this._playbackResource;
      }),
      (b.getLoop = function () {
        return this._loop;
      }),
      (b.setLoop = function (a) {
        null != this._playbackResource &&
          (0 != this._loop && 0 == a
            ? this._removeLooping(a)
            : 0 == this._loop && 0 != a && this._addLooping(a)),
          (this._loop = a);
      }),
      (b._sendEvent = function (a) {
        var b = new createjs.Event(a);
        this.dispatchEvent(b);
      }),
      (b._cleanUp = function () {
        clearTimeout(this.delayTimeoutId),
          this._handleCleanUp(),
          (this._paused = !1),
          createjs.Sound._playFinished(this);
      }),
      (b._interrupt = function () {
        this._cleanUp(),
          (this.playState = createjs.Sound.PLAY_INTERRUPTED),
          this._sendEvent("interrupted");
      }),
      (b._beginPlaying = function (a) {
        return (
          this.setPosition(a.offset),
          this.setLoop(a.loop),
          this.setVolume(a.volume),
          this.setPan(a.pan),
          null != a.startTime &&
            (this.setStartTime(a.startTime), this.setDuration(a.duration)),
          null != this._playbackResource && this._position < this._duration
            ? ((this._paused = !1),
              this._handleSoundReady(),
              (this.playState = createjs.Sound.PLAY_SUCCEEDED),
              this._sendEvent("succeeded"),
              !0)
            : (this._playFailed(), !1)
        );
      }),
      (b._playFailed = function () {
        this._cleanUp(),
          (this.playState = createjs.Sound.PLAY_FAILED),
          this._sendEvent("failed");
      }),
      (b._handleSoundComplete = function (a) {
        return (
          (this._position = 0),
          0 != this._loop
            ? (this._loop--, this._handleLoop(), void this._sendEvent("loop"))
            : (this._cleanUp(),
              (this.playState = createjs.Sound.PLAY_FINISHED),
              void this._sendEvent("complete"))
        );
      }),
      (b._handleSoundReady = function () {}),
      (b._updateVolume = function () {}),
      (b._updatePan = function () {}),
      (b._updateStartTime = function () {}),
      (b._updateDuration = function () {}),
      (b._setDurationFromSource = function () {}),
      (b._calculateCurrentPosition = function () {}),
      (b._updatePosition = function () {}),
      (b._removeLooping = function (a) {}),
      (b._addLooping = function (a) {}),
      (b._pause = function () {}),
      (b._resume = function () {}),
      (b._handleStop = function () {}),
      (b._handleCleanUp = function () {}),
      (b._handleLoop = function () {}),
      (createjs.AbstractSoundInstance = createjs.promote(a, "EventDispatcher")),
      (createjs.DefaultSoundInstance = createjs.AbstractSoundInstance);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = function () {
        (this._capabilities = null),
          (this._loaders = {}),
          (this._audioSources = {}),
          (this._soundInstances = {}),
          (this._volume = 1),
          this._loaderClass,
          this._soundInstanceClass;
      },
      b = a.prototype;
    (a._capabilities = null),
      (a.isSupported = function () {
        return !0;
      }),
      (b.register = function (a) {
        var b = this._loaders[a.src];
        return b && !b.canceled
          ? this._loaders[a.src]
          : ((this._audioSources[a.src] = !0),
            (this._soundInstances[a.src] = []),
            (b = new this._loaderClass(a)),
            b.on("complete", this._handlePreloadComplete, this),
            (this._loaders[a.src] = b),
            b);
      }),
      (b.preload = function (a) {
        a.on("error", this._handlePreloadError, this), a.load();
      }),
      (b.isPreloadStarted = function (a) {
        return null != this._audioSources[a];
      }),
      (b.isPreloadComplete = function (a) {
        return !(null == this._audioSources[a] || 1 == this._audioSources[a]);
      }),
      (b.removeSound = function (a) {
        if (this._soundInstances[a]) {
          for (var b = this._soundInstances[a].length; b--; ) {
            var c = this._soundInstances[a][b];
            c.destroy();
          }
          delete this._soundInstances[a],
            delete this._audioSources[a],
            this._loaders[a] && this._loaders[a].destroy(),
            delete this._loaders[a];
        }
      }),
      (b.removeAllSounds = function () {
        for (var a in this._audioSources) this.removeSound(a);
      }),
      (b.create = function (a, b, c) {
        this.isPreloadStarted(a) || this.preload(this.register(a));
        var d = new this._soundInstanceClass(a, b, c, this._audioSources[a]);
        return this._soundInstances[a].push(d), d;
      }),
      (b.setVolume = function (a) {
        return (this._volume = a), this._updateVolume(), !0;
      }),
      (b.getVolume = function () {
        return this._volume;
      }),
      (b.setMute = function (a) {
        return this._updateVolume(), !0;
      }),
      (b.toString = function () {
        return "[AbstractPlugin]";
      }),
      (b._handlePreloadComplete = function (a) {
        var b = a.target.getItem().src;
        this._audioSources[b] = a.result;
        for (var c = 0, d = this._soundInstances[b].length; d > c; c++) {
          var e = this._soundInstances[b][c];
          e.setPlaybackResource(this._audioSources[b]);
        }
      }),
      (b._handlePreloadError = function (a) {}),
      (b._updateVolume = function () {}),
      (createjs.AbstractPlugin = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.SOUND);
    }
    var b = createjs.extend(a, createjs.AbstractLoader);
    (a.context = null),
      (b.toString = function () {
        return "[WebAudioLoader]";
      }),
      (b._createRequest = function () {
        (this._request = new createjs.XHRRequest(this._item, !1)),
          this._request.setResponseType("arraybuffer");
      }),
      (b._sendComplete = function (b) {
        a.context.decodeAudioData(
          this._rawResult,
          createjs.proxy(this._handleAudioDecoded, this),
          createjs.proxy(this._sendError, this)
        );
      }),
      (b._handleAudioDecoded = function (a) {
        (this._result = a), this.AbstractLoader__sendComplete();
      }),
      (createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, d, e) {
      this.AbstractSoundInstance_constructor(a, b, d, e),
        (this.gainNode = c.context.createGain()),
        (this.panNode = c.context.createPanner()),
        (this.panNode.panningModel = c._panningModel),
        this.panNode.connect(this.gainNode),
        this._updatePan(),
        (this.sourceNode = null),
        (this._soundCompleteTimeout = null),
        (this._sourceNodeNext = null),
        (this._playbackStartTime = 0),
        (this._endedHandler = createjs.proxy(this._handleSoundComplete, this));
    }
    var b = createjs.extend(a, createjs.AbstractSoundInstance),
      c = a;
    (c.context = null),
      (c._scratchBuffer = null),
      (c.destinationNode = null),
      (c._panningModel = "equalpower"),
      (b.destroy = function () {
        this.AbstractSoundInstance_destroy(),
          this.panNode.disconnect(0),
          (this.panNode = null),
          this.gainNode.disconnect(0),
          (this.gainNode = null);
      }),
      (b.toString = function () {
        return "[WebAudioSoundInstance]";
      }),
      (b._updatePan = function () {
        this.panNode.setPosition(this._pan, 0, -0.5);
      }),
      (b._removeLooping = function (a) {
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
      }),
      (b._addLooping = function (a) {
        this.playState == createjs.Sound.PLAY_SUCCEEDED &&
          (this._sourceNodeNext = this._createAndPlayAudioNode(
            this._playbackStartTime,
            0
          ));
      }),
      (b._setDurationFromSource = function () {
        this._duration = 1e3 * this.playbackResource.duration;
      }),
      (b._handleCleanUp = function () {
        this.sourceNode &&
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
          ((this.sourceNode = this._cleanUpAudioNode(this.sourceNode)),
          (this._sourceNodeNext = this._cleanUpAudioNode(
            this._sourceNodeNext
          ))),
          0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0),
          clearTimeout(this._soundCompleteTimeout),
          (this._playbackStartTime = 0);
      }),
      (b._cleanUpAudioNode = function (a) {
        if (a) {
          a.stop(0), a.disconnect(0);
          try {
            a.buffer = c._scratchBuffer;
          } catch (b) {}
          a = null;
        }
        return a;
      }),
      (b._handleSoundReady = function (a) {
        this.gainNode.connect(c.destinationNode);
        var b = 0.001 * this._duration,
          d = 0.001 * this._position;
        d > b && (d = b),
          (this.sourceNode = this._createAndPlayAudioNode(
            c.context.currentTime - b,
            d
          )),
          (this._playbackStartTime = this.sourceNode.startTime - d),
          (this._soundCompleteTimeout = setTimeout(
            this._endedHandler,
            1e3 * (b - d)
          )),
          0 != this._loop &&
            (this._sourceNodeNext = this._createAndPlayAudioNode(
              this._playbackStartTime,
              0
            ));
      }),
      (b._createAndPlayAudioNode = function (a, b) {
        var d = c.context.createBufferSource();
        (d.buffer = this.playbackResource), d.connect(this.panNode);
        var e = 0.001 * this._duration;
        return (
          (d.startTime = a + e),
          d.start(d.startTime, b + 0.001 * this._startTime, e - b),
          d
        );
      }),
      (b._pause = function () {
        (this._position =
          1e3 * (c.context.currentTime - this._playbackStartTime)),
          (this.sourceNode = this._cleanUpAudioNode(this.sourceNode)),
          (this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)),
          0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0),
          clearTimeout(this._soundCompleteTimeout);
      }),
      (b._resume = function () {
        this._handleSoundReady();
      }),
      (b._updateVolume = function () {
        var a = this._muted ? 0 : this._volume;
        a != this.gainNode.gain.value && (this.gainNode.gain.value = a);
      }),
      (b._calculateCurrentPosition = function () {
        return 1e3 * (c.context.currentTime - this._playbackStartTime);
      }),
      (b._updatePosition = function () {
        (this.sourceNode = this._cleanUpAudioNode(this.sourceNode)),
          (this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)),
          clearTimeout(this._soundCompleteTimeout),
          this._paused || this._handleSoundReady();
      }),
      (b._handleLoop = function () {
        this._cleanUpAudioNode(this.sourceNode),
          (this.sourceNode = this._sourceNodeNext),
          (this._playbackStartTime = this.sourceNode.startTime),
          (this._sourceNodeNext = this._createAndPlayAudioNode(
            this._playbackStartTime,
            0
          )),
          (this._soundCompleteTimeout = setTimeout(
            this._endedHandler,
            this._duration
          ));
      }),
      (b._updateDuration = function () {
        this.playState == createjs.Sound.PLAY_SUCCEEDED &&
          (this._pause(), this._resume());
      }),
      (createjs.WebAudioSoundInstance = createjs.promote(
        a,
        "AbstractSoundInstance"
      ));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      this.AbstractPlugin_constructor(),
        (this._panningModel = c._panningModel),
        (this.context = c.context),
        (this.dynamicsCompressorNode = this.context.createDynamicsCompressor()),
        this.dynamicsCompressorNode.connect(this.context.destination),
        (this.gainNode = this.context.createGain()),
        this.gainNode.connect(this.dynamicsCompressorNode),
        (createjs.WebAudioSoundInstance.destinationNode = this.gainNode),
        (this._capabilities = c._capabilities),
        (this._loaderClass = createjs.WebAudioLoader),
        (this._soundInstanceClass = createjs.WebAudioSoundInstance),
        this._addPropsToClasses();
    }
    var b = createjs.extend(a, createjs.AbstractPlugin),
      c = a;
    (c._capabilities = null),
      (c._panningModel = "equalpower"),
      (c.context = null),
      (c._scratchBuffer = null),
      (c._unlocked = !1),
      (c.isSupported = function () {
        var a =
          createjs.BrowserDetect.isIOS ||
          createjs.BrowserDetect.isAndroid ||
          createjs.BrowserDetect.isBlackberry;
        return "file:" != location.protocol || a || this._isFileXHRSupported()
          ? (c._generateCapabilities(), null == c.context ? !1 : !0)
          : !1;
      }),
      (c.playEmptySound = function () {
        if (null != c.context) {
          var a = c.context.createBufferSource();
          (a.buffer = c._scratchBuffer),
            a.connect(c.context.destination),
            a.start(0, 0, 0);
        }
      }),
      (c._isFileXHRSupported = function () {
        var a = !0,
          b = new XMLHttpRequest();
        try {
          b.open("GET", "WebAudioPluginTest.fail", !1);
        } catch (c) {
          return (a = !1);
        }
        (b.onerror = function () {
          a = !1;
        }),
          (b.onload = function () {
            a =
              404 == this.status ||
              200 == this.status ||
              (0 == this.status && "" != this.response);
          });
        try {
          b.send();
        } catch (c) {
          a = !1;
        }
        return a;
      }),
      (c._generateCapabilities = function () {
        if (null == c._capabilities) {
          var a = document.createElement("audio");
          if (null == a.canPlayType) return null;
          if (null == c.context)
            if (window.AudioContext) c.context = new AudioContext();
            else {
              if (!window.webkitAudioContext) return null;
              c.context = new webkitAudioContext();
            }
          null == c._scratchBuffer &&
            (c._scratchBuffer = c.context.createBuffer(1, 1, 22050)),
            c._compatibilitySetUp(),
            "ontouchstart" in window &&
              "running" != c.context.state &&
              (c._unlock(),
              document.addEventListener("mousedown", c._unlock, !0),
              document.addEventListener("touchend", c._unlock, !0)),
            (c._capabilities = { panning: !0, volume: !0, tracks: -1 });
          for (
            var b = createjs.Sound.SUPPORTED_EXTENSIONS,
              d = createjs.Sound.EXTENSION_MAP,
              e = 0,
              f = b.length;
            f > e;
            e++
          ) {
            var g = b[e],
              h = d[g] || g;
            c._capabilities[g] =
              ("no" != a.canPlayType("audio/" + g) &&
                "" != a.canPlayType("audio/" + g)) ||
              ("no" != a.canPlayType("audio/" + h) &&
                "" != a.canPlayType("audio/" + h));
          }
          c.context.destination.numberOfChannels < 2 &&
            (c._capabilities.panning = !1);
        }
      }),
      (c._compatibilitySetUp = function () {
        if (((c._panningModel = "equalpower"), !c.context.createGain)) {
          c.context.createGain = c.context.createGainNode;
          var a = c.context.createBufferSource();
          (a.__proto__.start = a.__proto__.noteGrainOn),
            (a.__proto__.stop = a.__proto__.noteOff),
            (c._panningModel = 0);
        }
      }),
      (c._unlock = function () {
        c._unlocked ||
          (c.playEmptySound(),
          "running" == c.context.state &&
            (document.removeEventListener("mousedown", c._unlock, !0),
            document.removeEventListener("touchend", c._unlock, !0),
            (c._unlocked = !0)));
      }),
      (b.toString = function () {
        return "[WebAudioPlugin]";
      }),
      (b._addPropsToClasses = function () {
        var a = this._soundInstanceClass;
        (a.context = this.context),
          (a._scratchBuffer = c._scratchBuffer),
          (a.destinationNode = this.gainNode),
          (a._panningModel = this._panningModel),
          (this._loaderClass.context = this.context);
      }),
      (b._updateVolume = function () {
        var a = createjs.Sound._masterMute ? 0 : this._volume;
        a != this.gainNode.gain.value && (this.gainNode.gain.value = a);
      }),
      (createjs.WebAudioPlugin = createjs.promote(a, "AbstractPlugin"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "HTMLAudioTagPool cannot be instantiated";
    }
    function b(a) {
      this._tags = [];
    }
    var c = a;
    (c._tags = {}),
      (c._tagPool = new b()),
      (c._tagUsed = {}),
      (c.get = function (a) {
        var b = c._tags[a];
        return (
          null == b
            ? ((b = c._tags[a] = c._tagPool.get()), (b.src = a))
            : c._tagUsed[a]
            ? ((b = c._tagPool.get()), (b.src = a))
            : (c._tagUsed[a] = !0),
          b
        );
      }),
      (c.set = function (a, b) {
        b == c._tags[a] ? (c._tagUsed[a] = !1) : c._tagPool.set(b);
      }),
      (c.remove = function (a) {
        var b = c._tags[a];
        return null == b
          ? !1
          : (c._tagPool.set(b), delete c._tags[a], delete c._tagUsed[a], !0);
      }),
      (c.getDuration = function (a) {
        var b = c._tags[a];
        return null != b && b.duration ? 1e3 * b.duration : 0;
      }),
      (createjs.HTMLAudioTagPool = a);
    var d = b.prototype;
    (d.constructor = b),
      (d.get = function () {
        var a;
        return (
          (a = 0 == this._tags.length ? this._createTag() : this._tags.pop()),
          null == a.parentNode && document.body.appendChild(a),
          a
        );
      }),
      (d.set = function (a) {
        var b = createjs.indexOf(this._tags, a);
        -1 == b && ((this._tags.src = null), this._tags.push(a));
      }),
      (d.toString = function () {
        return "[TagPool]";
      }),
      (d._createTag = function () {
        var a = document.createElement("audio");
        return (a.autoplay = !1), (a.preload = "none"), a;
      });
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c, d) {
      this.AbstractSoundInstance_constructor(a, b, c, d),
        (this._audioSpriteStopTime = null),
        (this._delayTimeoutId = null),
        (this._endedHandler = createjs.proxy(this._handleSoundComplete, this)),
        (this._readyHandler = createjs.proxy(this._handleTagReady, this)),
        (this._stalledHandler = createjs.proxy(this._playFailed, this)),
        (this._audioSpriteEndHandler = createjs.proxy(
          this._handleAudioSpriteLoop,
          this
        )),
        (this._loopHandler = createjs.proxy(this._handleSoundComplete, this)),
        c
          ? (this._audioSpriteStopTime = 0.001 * (b + c))
          : (this._duration = createjs.HTMLAudioTagPool.getDuration(this.src));
    }
    var b = createjs.extend(a, createjs.AbstractSoundInstance);
    (b.setMasterVolume = function (a) {
      this._updateVolume();
    }),
      (b.setMasterMute = function (a) {
        this._updateVolume();
      }),
      (b.toString = function () {
        return "[HTMLAudioSoundInstance]";
      }),
      (b._removeLooping = function () {
        null != this._playbackResource &&
          ((this._playbackResource.loop = !1),
          this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ));
      }),
      (b._addLooping = function () {
        null == this._playbackResource ||
          this._audioSpriteStopTime ||
          (this._playbackResource.addEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ),
          (this._playbackResource.loop = !0));
      }),
      (b._handleCleanUp = function () {
        var a = this._playbackResource;
        if (null != a) {
          a.pause(),
            (a.loop = !1),
            a.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_ENDED,
              this._endedHandler,
              !1
            ),
            a.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_READY,
              this._readyHandler,
              !1
            ),
            a.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_STALLED,
              this._stalledHandler,
              !1
            ),
            a.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_SEEKED,
              this._loopHandler,
              !1
            ),
            a.removeEventListener(
              createjs.HTMLAudioPlugin._TIME_UPDATE,
              this._audioSpriteEndHandler,
              !1
            );
          try {
            a.currentTime = this._startTime;
          } catch (b) {}
          createjs.HTMLAudioTagPool.set(this.src, a),
            (this._playbackResource = null);
        }
      }),
      (b._beginPlaying = function (a) {
        return (
          (this._playbackResource = createjs.HTMLAudioTagPool.get(this.src)),
          this.AbstractSoundInstance__beginPlaying(a)
        );
      }),
      (b._handleSoundReady = function (a) {
        if (4 !== this._playbackResource.readyState) {
          var b = this._playbackResource;
          return (
            b.addEventListener(
              createjs.HTMLAudioPlugin._AUDIO_READY,
              this._readyHandler,
              !1
            ),
            b.addEventListener(
              createjs.HTMLAudioPlugin._AUDIO_STALLED,
              this._stalledHandler,
              !1
            ),
            (b.preload = "auto"),
            void b.load()
          );
        }
        this._updateVolume(),
          (this._playbackResource.currentTime =
            0.001 * (this._startTime + this._position)),
          this._audioSpriteStopTime
            ? this._playbackResource.addEventListener(
                createjs.HTMLAudioPlugin._TIME_UPDATE,
                this._audioSpriteEndHandler,
                !1
              )
            : (this._playbackResource.addEventListener(
                createjs.HTMLAudioPlugin._AUDIO_ENDED,
                this._endedHandler,
                !1
              ),
              0 != this._loop &&
                (this._playbackResource.addEventListener(
                  createjs.HTMLAudioPlugin._AUDIO_SEEKED,
                  this._loopHandler,
                  !1
                ),
                (this._playbackResource.loop = !0))),
          this._playbackResource.play();
      }),
      (b._handleTagReady = function (a) {
        this._playbackResource.removeEventListener(
          createjs.HTMLAudioPlugin._AUDIO_READY,
          this._readyHandler,
          !1
        ),
          this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_STALLED,
            this._stalledHandler,
            !1
          ),
          this._handleSoundReady();
      }),
      (b._pause = function () {
        this._playbackResource.pause();
      }),
      (b._resume = function () {
        this._playbackResource.play();
      }),
      (b._updateVolume = function () {
        if (null != this._playbackResource) {
          var a =
            this._muted || createjs.Sound._masterMute
              ? 0
              : this._volume * createjs.Sound._masterVolume;
          a != this._playbackResource.volume &&
            (this._playbackResource.volume = a);
        }
      }),
      (b._calculateCurrentPosition = function () {
        return 1e3 * this._playbackResource.currentTime - this._startTime;
      }),
      (b._updatePosition = function () {
        this._playbackResource.removeEventListener(
          createjs.HTMLAudioPlugin._AUDIO_SEEKED,
          this._loopHandler,
          !1
        ),
          this._playbackResource.addEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._handleSetPositionSeek,
            !1
          );
        try {
          this._playbackResource.currentTime =
            0.001 * (this._position + this._startTime);
        } catch (a) {
          this._handleSetPositionSeek(null);
        }
      }),
      (b._handleSetPositionSeek = function (a) {
        null != this._playbackResource &&
          (this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._handleSetPositionSeek,
            !1
          ),
          this._playbackResource.addEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ));
      }),
      (b._handleAudioSpriteLoop = function (a) {
        this._playbackResource.currentTime <= this._audioSpriteStopTime ||
          (this._playbackResource.pause(),
          0 == this._loop
            ? this._handleSoundComplete(null)
            : ((this._position = 0),
              this._loop--,
              (this._playbackResource.currentTime = 0.001 * this._startTime),
              this._paused || this._playbackResource.play(),
              this._sendEvent("loop")));
      }),
      (b._handleLoop = function (a) {
        0 == this._loop &&
          ((this._playbackResource.loop = !1),
          this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ));
      }),
      (b._updateStartTime = function () {
        (this._audioSpriteStopTime =
          0.001 * (this._startTime + this._duration)),
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
            (this._playbackResource.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_ENDED,
              this._endedHandler,
              !1
            ),
            this._playbackResource.addEventListener(
              createjs.HTMLAudioPlugin._TIME_UPDATE,
              this._audioSpriteEndHandler,
              !1
            ));
      }),
      (b._updateDuration = function () {
        (this._audioSpriteStopTime =
          0.001 * (this._startTime + this._duration)),
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
            (this._playbackResource.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_ENDED,
              this._endedHandler,
              !1
            ),
            this._playbackResource.addEventListener(
              createjs.HTMLAudioPlugin._TIME_UPDATE,
              this._audioSpriteEndHandler,
              !1
            ));
      }),
      (b._setDurationFromSource = function () {
        (this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)),
          (this._playbackResource = null);
      }),
      (createjs.HTMLAudioSoundInstance = createjs.promote(
        a,
        "AbstractSoundInstance"
      ));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      this.AbstractPlugin_constructor(),
        (this.defaultNumChannels = 2),
        (this._capabilities = c._capabilities),
        (this._loaderClass = createjs.SoundLoader),
        (this._soundInstanceClass = createjs.HTMLAudioSoundInstance);
    }
    var b = createjs.extend(a, createjs.AbstractPlugin),
      c = a;
    (c.MAX_INSTANCES = 30),
      (c._AUDIO_READY = "canplaythrough"),
      (c._AUDIO_ENDED = "ended"),
      (c._AUDIO_SEEKED = "seeked"),
      (c._AUDIO_STALLED = "stalled"),
      (c._TIME_UPDATE = "timeupdate"),
      (c._capabilities = null),
      (c.isSupported = function () {
        return c._generateCapabilities(), null != c._capabilities;
      }),
      (c._generateCapabilities = function () {
        if (null == c._capabilities) {
          var a = document.createElement("audio");
          if (null == a.canPlayType) return null;
          c._capabilities = { panning: !1, volume: !0, tracks: -1 };
          for (
            var b = createjs.Sound.SUPPORTED_EXTENSIONS,
              d = createjs.Sound.EXTENSION_MAP,
              e = 0,
              f = b.length;
            f > e;
            e++
          ) {
            var g = b[e],
              h = d[g] || g;
            c._capabilities[g] =
              ("no" != a.canPlayType("audio/" + g) &&
                "" != a.canPlayType("audio/" + g)) ||
              ("no" != a.canPlayType("audio/" + h) &&
                "" != a.canPlayType("audio/" + h));
          }
        }
      }),
      (b.register = function (a) {
        var b = createjs.HTMLAudioTagPool.get(a.src),
          c = this.AbstractPlugin_register(a);
        return c.setTag(b), c;
      }),
      (b.removeSound = function (a) {
        this.AbstractPlugin_removeSound(a), createjs.HTMLAudioTagPool.remove(a);
      }),
      (b.create = function (a, b, c) {
        var d = this.AbstractPlugin_create(a, b, c);
        return d.setPlaybackResource(null), d;
      }),
      (b.toString = function () {
        return "[HTMLAudioPlugin]";
      }),
      (b.setVolume = b.getVolume = b.setMute = null),
      (createjs.HTMLAudioPlugin = createjs.promote(a, "AbstractPlugin"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(b, c, d) {
      (this.ignoreGlobalPause = !1),
        (this.loop = !1),
        (this.duration = 0),
        (this.pluginData = d || {}),
        (this.target = b),
        (this.position = null),
        (this.passive = !1),
        (this._paused = !1),
        (this._curQueueProps = {}),
        (this._initQueueProps = {}),
        (this._steps = []),
        (this._actions = []),
        (this._prevPosition = 0),
        (this._stepPosition = 0),
        (this._prevPos = -1),
        (this._target = b),
        (this._useTicks = !1),
        (this._inited = !1),
        (this._registered = !1),
        c &&
          ((this._useTicks = c.useTicks),
          (this.ignoreGlobalPause = c.ignoreGlobalPause),
          (this.loop = c.loop),
          c.onChange && this.addEventListener("change", c.onChange),
          c.override && a.removeTweens(b)),
        c && c.paused
          ? (this._paused = !0)
          : createjs.Tween._register(this, !0),
        c && null != c.position && this.setPosition(c.position, a.NONE);
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    (a.NONE = 0),
      (a.LOOP = 1),
      (a.REVERSE = 2),
      (a.IGNORE = {}),
      (a._tweens = []),
      (a._plugins = {}),
      (a.get = function (b, c, d, e) {
        return e && a.removeTweens(b), new a(b, c, d);
      }),
      (a.tick = function (b, c) {
        for (var d = a._tweens.slice(), e = d.length - 1; e >= 0; e--) {
          var f = d[e];
          (c && !f.ignoreGlobalPause) ||
            f._paused ||
            f.tick(f._useTicks ? 1 : b);
        }
      }),
      (a.handleEvent = function (a) {
        "tick" == a.type && this.tick(a.delta, a.paused);
      }),
      (a.removeTweens = function (b) {
        if (b.tweenjs_count) {
          for (var c = a._tweens, d = c.length - 1; d >= 0; d--) {
            var e = c[d];
            e._target == b && ((e._paused = !0), c.splice(d, 1));
          }
          b.tweenjs_count = 0;
        }
      }),
      (a.removeAllTweens = function () {
        for (var b = a._tweens, c = 0, d = b.length; d > c; c++) {
          var e = b[c];
          (e._paused = !0), e.target && (e.target.tweenjs_count = 0);
        }
        b.length = 0;
      }),
      (a.hasActiveTweens = function (b) {
        return b
          ? null != b.tweenjs_count && !!b.tweenjs_count
          : a._tweens && !!a._tweens.length;
      }),
      (a.installPlugin = function (b, c) {
        var d = b.priority;
        null == d && (b.priority = d = 0);
        for (var e = 0, f = c.length, g = a._plugins; f > e; e++) {
          var h = c[e];
          if (g[h]) {
            for (
              var i = g[h], j = 0, k = i.length;
              k > j && !(d < i[j].priority);
              j++
            );
            g[h].splice(j, 0, b);
          } else g[h] = [b];
        }
      }),
      (a._register = function (b, c) {
        var d = b._target,
          e = a._tweens;
        if (c && !b._registered)
          d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1),
            e.push(b),
            !a._inited &&
              createjs.Ticker &&
              (createjs.Ticker.addEventListener("tick", a), (a._inited = !0));
        else if (!c && b._registered) {
          d && d.tweenjs_count--;
          for (var f = e.length; f--; )
            if (e[f] == b) {
              e.splice(f, 1);
              break;
            }
        }
        b._registered = c;
      }),
      (b.wait = function (a, b) {
        if (null == a || 0 >= a) return this;
        var c = this._cloneProps(this._curQueueProps);
        return this._addStep({ d: a, p0: c, e: this._linearEase, p1: c, v: b });
      }),
      (b.to = function (a, b, c) {
        return (
          (isNaN(b) || 0 > b) && (b = 0),
          this._addStep({
            d: b || 0,
            p0: this._cloneProps(this._curQueueProps),
            e: c,
            p1: this._cloneProps(this._appendQueueProps(a)),
          })
        );
      }),
      (b.call = function (a, b, c) {
        return this._addAction({
          f: a,
          p: b ? b : [this],
          o: c ? c : this._target,
        });
      }),
      (b.set = function (a, b) {
        return this._addAction({
          f: this._set,
          o: this,
          p: [a, b ? b : this._target],
        });
      }),
      (b.play = function (a) {
        return a || (a = this), this.call(a.setPaused, [!1], a);
      }),
      (b.pause = function (a) {
        return a || (a = this), this.call(a.setPaused, [!0], a);
      }),
      (b.setPosition = function (a, b) {
        0 > a && (a = 0), null == b && (b = 1);
        var c = a,
          d = !1;
        if (
          (c >= this.duration &&
            (this.loop
              ? (c %= this.duration)
              : ((c = this.duration), (d = !0))),
          c == this._prevPos)
        )
          return d;
        var e = this._prevPos;
        if (
          ((this.position = this._prevPos = c),
          (this._prevPosition = a),
          this._target)
        )
          if (d) this._updateTargetProps(null, 1);
          else if (this._steps.length > 0) {
            for (
              var f = 0, g = this._steps.length;
              g > f && !(this._steps[f].t > c);
              f++
            );
            var h = this._steps[f - 1];
            this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d);
          }
        return (
          0 != b &&
            this._actions.length > 0 &&
            (this._useTicks
              ? this._runActions(c, c)
              : 1 == b && e > c
              ? (e != this.duration && this._runActions(e, this.duration),
                this._runActions(0, c, !0))
              : this._runActions(e, c)),
          d && this.setPaused(!0),
          this.dispatchEvent("change"),
          d
        );
      }),
      (b.tick = function (a) {
        this._paused || this.setPosition(this._prevPosition + a);
      }),
      (b.setPaused = function (b) {
        return this._paused === !!b
          ? this
          : ((this._paused = !!b), a._register(this, !b), this);
      }),
      (b.w = b.wait),
      (b.t = b.to),
      (b.c = b.call),
      (b.s = b.set),
      (b.toString = function () {
        return "[Tween]";
      }),
      (b.clone = function () {
        throw "Tween can not be cloned.";
      }),
      (b._updateTargetProps = function (b, c) {
        var d, e, f, g, h, i;
        if (b || 1 != c) {
          if (((this.passive = !!b.v), this.passive)) return;
          b.e && (c = b.e(c, 0, 1, 1)), (d = b.p0), (e = b.p1);
        } else (this.passive = !1), (d = e = this._curQueueProps);
        for (var j in this._initQueueProps) {
          null == (g = d[j]) && (d[j] = g = this._initQueueProps[j]),
            null == (h = e[j]) && (e[j] = h = g),
            (f =
              g == h || 0 == c || 1 == c || "number" != typeof g
                ? 1 == c
                  ? h
                  : g
                : g + (h - g) * c);
          var k = !1;
          if ((i = a._plugins[j]))
            for (var l = 0, m = i.length; m > l; l++) {
              var n = i[l].tween(this, j, f, d, e, c, !!b && d == e, !b);
              n == a.IGNORE ? (k = !0) : (f = n);
            }
          k || (this._target[j] = f);
        }
      }),
      (b._runActions = function (a, b, c) {
        var d = a,
          e = b,
          f = -1,
          g = this._actions.length,
          h = 1;
        for (
          a > b && ((d = b), (e = a), (f = g), (g = h = -1));
          (f += h) != g;

        ) {
          var i = this._actions[f],
            j = i.t;
          (j == e || (j > d && e > j) || (c && j == a)) && i.f.apply(i.o, i.p);
        }
      }),
      (b._appendQueueProps = function (b) {
        var c, d, e, f, g;
        for (var h in b)
          if (void 0 === this._initQueueProps[h]) {
            if (((d = this._target[h]), (c = a._plugins[h])))
              for (e = 0, f = c.length; f > e; e++) d = c[e].init(this, h, d);
            this._initQueueProps[h] = this._curQueueProps[h] =
              void 0 === d ? null : d;
          } else d = this._curQueueProps[h];
        for (var h in b) {
          if (((d = this._curQueueProps[h]), (c = a._plugins[h])))
            for (g = g || {}, e = 0, f = c.length; f > e; e++)
              c[e].step && c[e].step(this, h, d, b[h], g);
          this._curQueueProps[h] = b[h];
        }
        return g && this._appendQueueProps(g), this._curQueueProps;
      }),
      (b._cloneProps = function (a) {
        var b = {};
        for (var c in a) b[c] = a[c];
        return b;
      }),
      (b._addStep = function (a) {
        return (
          a.d > 0 &&
            (this._steps.push(a),
            (a.t = this.duration),
            (this.duration += a.d)),
          this
        );
      }),
      (b._addAction = function (a) {
        return (a.t = this.duration), this._actions.push(a), this;
      }),
      (b._set = function (a, b) {
        for (var c in a) b[c] = a[c];
      }),
      (createjs.Tween = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a, b, c) {
      this.EventDispatcher_constructor(),
        (this.ignoreGlobalPause = !1),
        (this.duration = 0),
        (this.loop = !1),
        (this.position = null),
        (this._paused = !1),
        (this._tweens = []),
        (this._labels = null),
        (this._labelList = null),
        (this._prevPosition = 0),
        (this._prevPos = -1),
        (this._useTicks = !1),
        (this._registered = !1),
        c &&
          ((this._useTicks = c.useTicks),
          (this.loop = c.loop),
          (this.ignoreGlobalPause = c.ignoreGlobalPause),
          c.onChange && this.addEventListener("change", c.onChange)),
        a && this.addTween.apply(this, a),
        this.setLabels(b),
        c && c.paused
          ? (this._paused = !0)
          : createjs.Tween._register(this, !0),
        c &&
          null != c.position &&
          this.setPosition(c.position, createjs.Tween.NONE);
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    (b.addTween = function (a) {
      var b = arguments.length;
      if (b > 1) {
        for (var c = 0; b > c; c++) this.addTween(arguments[c]);
        return arguments[0];
      }
      return 0 == b
        ? null
        : (this.removeTween(a),
          this._tweens.push(a),
          a.setPaused(!0),
          (a._paused = !1),
          (a._useTicks = this._useTicks),
          a.duration > this.duration && (this.duration = a.duration),
          this._prevPos >= 0 &&
            a.setPosition(this._prevPos, createjs.Tween.NONE),
          a);
    }),
      (b.removeTween = function (a) {
        var b = arguments.length;
        if (b > 1) {
          for (var c = !0, d = 0; b > d; d++)
            c = c && this.removeTween(arguments[d]);
          return c;
        }
        if (0 == b) return !1;
        for (var e = this._tweens, d = e.length; d--; )
          if (e[d] == a)
            return (
              e.splice(d, 1),
              a.duration >= this.duration && this.updateDuration(),
              !0
            );
        return !1;
      }),
      (b.addLabel = function (a, b) {
        this._labels[a] = b;
        var c = this._labelList;
        if (c) {
          for (var d = 0, e = c.length; e > d && !(b < c[d].position); d++);
          c.splice(d, 0, { label: a, position: b });
        }
      }),
      (b.setLabels = function (a) {
        this._labels = a ? a : {};
      }),
      (b.getLabels = function () {
        var a = this._labelList;
        if (!a) {
          a = this._labelList = [];
          var b = this._labels;
          for (var c in b) a.push({ label: c, position: b[c] });
          a.sort(function (a, b) {
            return a.position - b.position;
          });
        }
        return a;
      }),
      (b.getCurrentLabel = function () {
        var a = this.getLabels(),
          b = this.position,
          c = a.length;
        if (c) {
          for (var d = 0; c > d && !(b < a[d].position); d++);
          return 0 == d ? null : a[d - 1].label;
        }
        return null;
      }),
      (b.gotoAndPlay = function (a) {
        this.setPaused(!1), this._goto(a);
      }),
      (b.gotoAndStop = function (a) {
        this.setPaused(!0), this._goto(a);
      }),
      (b.setPosition = function (a, b) {
        var c = this._calcPosition(a),
          d = !this.loop && a >= this.duration;
        if (c == this._prevPos) return d;
        (this._prevPosition = a), (this.position = this._prevPos = c);
        for (var e = 0, f = this._tweens.length; f > e; e++)
          if ((this._tweens[e].setPosition(c, b), c != this._prevPos))
            return !1;
        return d && this.setPaused(!0), this.dispatchEvent("change"), d;
      }),
      (b.setPaused = function (a) {
        (this._paused = !!a), createjs.Tween._register(this, !a);
      }),
      (b.updateDuration = function () {
        this.duration = 0;
        for (var a = 0, b = this._tweens.length; b > a; a++) {
          var c = this._tweens[a];
          c.duration > this.duration && (this.duration = c.duration);
        }
      }),
      (b.tick = function (a) {
        this.setPosition(this._prevPosition + a);
      }),
      (b.resolve = function (a) {
        var b = Number(a);
        return isNaN(b) && (b = this._labels[a]), b;
      }),
      (b.toString = function () {
        return "[Timeline]";
      }),
      (b.clone = function () {
        throw "Timeline can not be cloned.";
      }),
      (b._goto = function (a) {
        var b = this.resolve(a);
        null != b && this.setPosition(b);
      }),
      (b._calcPosition = function (a) {
        return 0 > a
          ? 0
          : a < this.duration
          ? a
          : this.loop
          ? a % this.duration
          : this.duration;
      }),
      (createjs.Timeline = createjs.promote(a, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "Ease cannot be instantiated.";
    }
    (a.linear = function (a) {
      return a;
    }),
      (a.none = a.linear),
      (a.get = function (a) {
        return (
          -1 > a && (a = -1),
          a > 1 && (a = 1),
          function (b) {
            return 0 == a
              ? b
              : 0 > a
              ? b * (b * -a + 1 + a)
              : b * ((2 - b) * a + (1 - a));
          }
        );
      }),
      (a.getPowIn = function (a) {
        return function (b) {
          return Math.pow(b, a);
        };
      }),
      (a.getPowOut = function (a) {
        return function (b) {
          return 1 - Math.pow(1 - b, a);
        };
      }),
      (a.getPowInOut = function (a) {
        return function (b) {
          return (b *= 2) < 1
            ? 0.5 * Math.pow(b, a)
            : 1 - 0.5 * Math.abs(Math.pow(2 - b, a));
        };
      }),
      (a.quadIn = a.getPowIn(2)),
      (a.quadOut = a.getPowOut(2)),
      (a.quadInOut = a.getPowInOut(2)),
      (a.cubicIn = a.getPowIn(3)),
      (a.cubicOut = a.getPowOut(3)),
      (a.cubicInOut = a.getPowInOut(3)),
      (a.quartIn = a.getPowIn(4)),
      (a.quartOut = a.getPowOut(4)),
      (a.quartInOut = a.getPowInOut(4)),
      (a.quintIn = a.getPowIn(5)),
      (a.quintOut = a.getPowOut(5)),
      (a.quintInOut = a.getPowInOut(5)),
      (a.sineIn = function (a) {
        return 1 - Math.cos((a * Math.PI) / 2);
      }),
      (a.sineOut = function (a) {
        return Math.sin((a * Math.PI) / 2);
      }),
      (a.sineInOut = function (a) {
        return -0.5 * (Math.cos(Math.PI * a) - 1);
      }),
      (a.getBackIn = function (a) {
        return function (b) {
          return b * b * ((a + 1) * b - a);
        };
      }),
      (a.backIn = a.getBackIn(1.7)),
      (a.getBackOut = function (a) {
        return function (b) {
          return --b * b * ((a + 1) * b + a) + 1;
        };
      }),
      (a.backOut = a.getBackOut(1.7)),
      (a.getBackInOut = function (a) {
        return (
          (a *= 1.525),
          function (b) {
            return (b *= 2) < 1
              ? 0.5 * (b * b * ((a + 1) * b - a))
              : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2);
          }
        );
      }),
      (a.backInOut = a.getBackInOut(1.7)),
      (a.circIn = function (a) {
        return -(Math.sqrt(1 - a * a) - 1);
      }),
      (a.circOut = function (a) {
        return Math.sqrt(1 - --a * a);
      }),
      (a.circInOut = function (a) {
        return (a *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - a * a) - 1)
          : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
      }),
      (a.bounceIn = function (b) {
        return 1 - a.bounceOut(1 - b);
      }),
      (a.bounceOut = function (a) {
        return 1 / 2.75 > a
          ? 7.5625 * a * a
          : 2 / 2.75 > a
          ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
          : 2.5 / 2.75 > a
          ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
          : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
      }),
      (a.bounceInOut = function (b) {
        return 0.5 > b
          ? 0.5 * a.bounceIn(2 * b)
          : 0.5 * a.bounceOut(2 * b - 1) + 0.5;
      }),
      (a.getElasticIn = function (a, b) {
        var c = 2 * Math.PI;
        return function (d) {
          if (0 == d || 1 == d) return d;
          var e = (b / c) * Math.asin(1 / a);
          return -(
            a *
            Math.pow(2, 10 * (d -= 1)) *
            Math.sin(((d - e) * c) / b)
          );
        };
      }),
      (a.elasticIn = a.getElasticIn(1, 0.3)),
      (a.getElasticOut = function (a, b) {
        var c = 2 * Math.PI;
        return function (d) {
          if (0 == d || 1 == d) return d;
          var e = (b / c) * Math.asin(1 / a);
          return a * Math.pow(2, -10 * d) * Math.sin(((d - e) * c) / b) + 1;
        };
      }),
      (a.elasticOut = a.getElasticOut(1, 0.3)),
      (a.getElasticInOut = function (a, b) {
        var c = 2 * Math.PI;
        return function (d) {
          var e = (b / c) * Math.asin(1 / a);
          return (d *= 2) < 1
            ? -0.5 *
                (a * Math.pow(2, 10 * (d -= 1)) * Math.sin(((d - e) * c) / b))
            : a *
                Math.pow(2, -10 * (d -= 1)) *
                Math.sin(((d - e) * c) / b) *
                0.5 +
                1;
        };
      }),
      (a.elasticInOut = a.getElasticInOut(1, 0.3 * 1.5)),
      (createjs.Ease = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a() {
      throw "MotionGuidePlugin cannot be instantiated.";
    }
    (a.priority = 0),
      a._rotOffS,
      a._rotOffE,
      a._rotNormS,
      a._rotNormE,
      (a.install = function () {
        return (
          createjs.Tween.installPlugin(a, ["guide", "x", "y", "rotation"]),
          createjs.Tween.IGNORE
        );
      }),
      (a.init = function (a, b, c) {
        var d = a.target;
        return (
          d.hasOwnProperty("x") || (d.x = 0),
          d.hasOwnProperty("y") || (d.y = 0),
          d.hasOwnProperty("rotation") || (d.rotation = 0),
          "rotation" == b && (a.__needsRot = !0),
          "guide" == b ? null : c
        );
      }),
      (a.step = function (b, c, d, e, f) {
        if (
          ("rotation" == c &&
            ((b.__rotGlobalS = d), (b.__rotGlobalE = e), a.testRotData(b, f)),
          "guide" != c)
        )
          return e;
        var g,
          h = e;
        h.hasOwnProperty("path") || (h.path = []);
        var i = h.path;
        if (
          (h.hasOwnProperty("end") || (h.end = 1),
          h.hasOwnProperty("start") ||
            (h.start =
              d && d.hasOwnProperty("end") && d.path === i ? d.end : 0),
          h.hasOwnProperty("_segments") && h._length)
        )
          return e;
        var j = i.length,
          k = 10;
        if (!(j >= 6 && (j - 2) % 4 == 0))
          throw "invalid 'path' data, please see documentation for valid paths";
        (h._segments = []), (h._length = 0);
        for (var l = 2; j > l; l += 4) {
          for (
            var m,
              n,
              o = i[l - 2],
              p = i[l - 1],
              q = i[l + 0],
              r = i[l + 1],
              s = i[l + 2],
              t = i[l + 3],
              u = o,
              v = p,
              w = 0,
              x = [],
              y = 1;
            k >= y;
            y++
          ) {
            var z = y / k,
              A = 1 - z;
            (m = A * A * o + 2 * A * z * q + z * z * s),
              (n = A * A * p + 2 * A * z * r + z * z * t),
              (w +=
                x[x.push(Math.sqrt((g = m - u) * g + (g = n - v) * g)) - 1]),
              (u = m),
              (v = n);
          }
          h._segments.push(w), h._segments.push(x), (h._length += w);
        }
        (g = h.orient), (h.orient = !0);
        var B = {};
        return (
          a.calc(h, h.start, B),
          (b.__rotPathS = Number(B.rotation.toFixed(5))),
          a.calc(h, h.end, B),
          (b.__rotPathE = Number(B.rotation.toFixed(5))),
          (h.orient = !1),
          a.calc(h, h.end, f),
          (h.orient = g),
          h.orient ? ((b.__guideData = h), a.testRotData(b, f), e) : e
        );
      }),
      (a.testRotData = function (a, b) {
        if (void 0 === a.__rotGlobalS || void 0 === a.__rotGlobalE) {
          if (a.__needsRot) return;
          void 0 !== a._curQueueProps.rotation
            ? (a.__rotGlobalS = a.__rotGlobalE = a._curQueueProps.rotation)
            : (a.__rotGlobalS =
                a.__rotGlobalE =
                b.rotation =
                  a.target.rotation || 0);
        }
        if (void 0 !== a.__guideData) {
          var c = a.__guideData,
            d = a.__rotGlobalE - a.__rotGlobalS,
            e = a.__rotPathE - a.__rotPathS,
            f = d - e;
          if ("auto" == c.orient) f > 180 ? (f -= 360) : -180 > f && (f += 360);
          else if ("cw" == c.orient) {
            for (; 0 > f; ) f += 360;
            0 == f && d > 0 && 180 != d && (f += 360);
          } else if ("ccw" == c.orient) {
            for (f = d - (e > 180 ? 360 - e : e); f > 0; ) f -= 360;
            0 == f && 0 > d && -180 != d && (f -= 360);
          }
          (c.rotDelta = f),
            (c.rotOffS = a.__rotGlobalS - a.__rotPathS),
            (a.__rotGlobalS =
              a.__rotGlobalE =
              a.__guideData =
              a.__needsRot =
                void 0);
        }
      }),
      (a.tween = function (b, c, d, e, f, g, h, i) {
        var j = f.guide;
        if (void 0 == j || j === e.guide) return d;
        if (j.lastRatio != g) {
          var k = (j.end - j.start) * (h ? j.end : g) + j.start;
          switch ((a.calc(j, k, b.target), j.orient)) {
            case "cw":
            case "ccw":
            case "auto":
              b.target.rotation += j.rotOffS + j.rotDelta * g;
              break;
            case "fixed":
            default:
              b.target.rotation += j.rotOffS;
          }
          j.lastRatio = g;
        }
        return "rotation" != c || (j.orient && "false" != j.orient)
          ? b.target[c]
          : d;
      }),
      (a.calc = function (a, b, c) {
        if (void 0 == a._segments)
          throw "Missing critical pre-calculated information, please file a bug";
        void 0 == c && (c = { x: 0, y: 0, rotation: 0 });
        for (
          var d = a._segments,
            e = a.path,
            f = a._length * b,
            g = d.length - 2,
            h = 0;
          f > d[h] && g > h;

        )
          (f -= d[h]), (h += 2);
        var i = d[h + 1],
          j = 0;
        for (g = i.length - 1; f > i[j] && g > j; ) (f -= i[j]), j++;
        var k = j / ++g + f / (g * i[j]);
        h = 2 * h + 2;
        var l = 1 - k;
        return (
          (c.x = l * l * e[h - 2] + 2 * l * k * e[h + 0] + k * k * e[h + 2]),
          (c.y = l * l * e[h - 1] + 2 * l * k * e[h + 1] + k * k * e[h + 3]),
          a.orient &&
            (c.rotation =
              57.2957795 *
              Math.atan2(
                (e[h + 1] - e[h - 1]) * l + (e[h + 3] - e[h + 1]) * k,
                (e[h + 0] - e[h - 2]) * l + (e[h + 2] - e[h + 0]) * k
              )),
          c
        );
      }),
      (createjs.MotionGuidePlugin = a);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = (createjs.TweenJS = createjs.TweenJS || {});
    (a.version = "0.6.2"), (a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT");
  })();
/*!
 * @license Creatine
 *
 * Copyright (c) 2014 Renato de Pontes Pereira.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
var tweenOnChange = function () {
  if (Renderer) Renderer.update = true;
};
(this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    (creatine.version = "0.1"),
      (creatine.buildDate = "Tue, 15 Jul 2014 13:26:15 GMT"),
      (creatine.LEFT = 1),
      (creatine.RIGHT = 2),
      (creatine.TOP = 3),
      (creatine.BOTTOM = 4),
      (creatine.TOP_LEFT = 5),
      (creatine.TOP_RIGHT = 6),
      (creatine.CENTER = 7),
      (creatine.BOTTOM_LEFT = 8),
      (creatine.BOTTOM_RIGHT = 9),
      (creatine.HORIZONTAL = 10),
      (creatine.VERTICAL = 11),
      (creatine.LEFT_TO_RIGHT = 12),
      (creatine.RIGHT_TO_LEFT = 13),
      (creatine.TOP_TO_BOTTOM = 14),
      (creatine.BOTTOM_TO_TOP = 15),
      (creatine.STRETCH = 16),
      (creatine.FIT = 17),
      (creatine.FILL = 18),
      (creatine.NOSCALE = 19);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    (creatine.merge = function () {
      for (
        var a, b, c, d = arguments[0] || {}, e = 1, f = arguments.length;
        f > e;
        e++
      )
        if (null != (a = arguments[e]))
          for (b in a) (c = a[b]), d !== c && void 0 !== c && (d[b] = c);
      return d;
    }),
      (creatine.clip = function (a, b, c) {
        return Math.max(Math.min(a, c), b);
      });
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a) {
        this.initialize(a);
      },
      b = a.prototype;
    (b.stage = null),
      (b.scene = null),
      (b.nextScene = null),
      (b.sceneStack = null),
      (b.inTransition = !1),
      (b.initialize = function (a) {
        (this.stage = a),
          (this.scene = null),
          (this.nextScene = null),
          (this.sceneStack = []),
          (this.inTransition = null);
      }),
      (b.push = function (a, b) {
        if (this.scene) {
          this.scene.dispatchEvent("scenepause"),
            this.sceneStack.push(this.scene);
          var c = this.stage.getChildIndex(this.scene);
          this.stage.addChildAt(a, c + 1);
        } else this.stage.addChild(a);
        this.nextScene = a;
        var d = this,
          e = function () {
            (d.scene = d.nextScene),
              (d.nextScene = null),
              (d.inTransition = !1),
              d.scene.dispatchEvent("sceneenter");
          };
        b
          ? ((this.inTransition = !0),
            b.run(this, this.scene || {}, this.nextScene, e))
          : e();
      }),
      (b.pop = function (a) {
        if (0 != this.sceneStack.length) {
          var b = this.sceneStack.pop();
          (this.nextScene = b),
            this.scene && this.scene.dispatchEvent("scenepause");
          var c = this,
            d = function () {
              (c.inTransition = !1),
                c.scene &&
                  (c.scene.dispatchEvent("sceneexit"),
                  c.stage.removeChild(c.scene)),
                (c.scene = c.nextScene),
                c.scene.dispatchEvent("sceneresume"),
                (c.nextScene = null);
            };
          a
            ? ((this.inTransition = !0),
              a.run(this, this.scene || {}, this.nextScene, d))
            : d();
        }
      }),
      (b.replace = function (a, b) {
        if (this.scene) {
          this.scene.dispatchEvent("scenepause");
          var c = this.stage.getChildIndex(this.scene);
          this.stage.addChildAt(a, c + 1);
        } else this.stage.addChild(a);
        this.nextScene = a;
        var d = this,
          e = function () {
            (d.inTransition = !1),
              d.scene &&
                (d.scene.dispatchEvent("sceneexit"),
                d.stage.removeChild(d.scene)),
              (d.scene = d.nextScene),
              d.scene.dispatchEvent("sceneenter"),
              (d.nextScene = null);
          };
        b
          ? ((this.inTransition = !0),
            b.run(this, this.scene || {}, this.nextScene, e))
          : e();
      }),
      (b.swapScenes = function () {
        this.stage.swapChildrenAt(
          this.stage.getChildIndex(this.scene),
          this.stage.getChildIndex(this.nextScene)
        );
      }),
      (b.clearStack = function () {
        for (var a = 0; a < this.sceneStack.length; a++)
          this.sceneStack[a].dispatchEvent("sceneexit"),
            this.stage.removeChild(this.sceneStack[a]);
        this.sceneStack = [];
      }),
      (creatine.Director = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    {
      var a = function () {
        this.initialize();
      };
      a.prototype = new createjs.Container();
    }
    creatine.Scene = a;
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a) {
        this.initialize(a);
      },
      b = a.prototype;
    (b._canvas = null),
      (b.desktop = !1),
      (b.iOS = !1),
      (b.android = !1),
      (b.chromeOS = !1),
      (b.linux = !1),
      (b.macOS = !1),
      (b.windows = !1),
      (b.windowsPhone = !1),
      (b.canvas = !1),
      (b.file = !1),
      (b.fileSystem = !1),
      (b.localStorage = !1),
      (b.webGL = !1),
      (b.worker = !1),
      (b.touch = !1),
      (b.mspointer = !1),
      (b.css3D = !1),
      (b.pointerLock = !1),
      (b.typedArray = !1),
      (b.vibration = !1),
      (b.getUserMedia = !1),
      (b.quirksMode = !1),
      (b.ejecta = !1),
      (b.cocoonJS = !1),
      (b.webApp = !1),
      (b.arora = !1),
      (b.chrome = !1),
      (b.epiphany = !1),
      (b.firefox = !1),
      (b.ie = !1),
      (b.ieVersion = 0),
      (b.trident = !1),
      (b.tridentVersion = 0),
      (b.mobileSafari = !1),
      (b.midori = !1),
      (b.opera = !1),
      (b.safari = !1),
      (b.silk = !1),
      (b.audioData = !1),
      (b.webAudio = !1),
      (b.ogg = !1),
      (b.opus = !1),
      (b.mp3 = !1),
      (b.wav = !1),
      (b.m4a = !1),
      (b.webm = !1),
      (b.iPhone = !1),
      (b.iPhone4 = !1),
      (b.iPad = !1),
      (b.pixelRatio = 0),
      (b.littleEndian = !1),
      (b.fullscreen = !1),
      (b.initialize = function (a) {
        (this._canvas = a),
          this._checkAudio(),
          this._checkBrowser(),
          this._checkCSS3D(),
          this._checkDevice(),
          this._checkFeatures(),
          this._checkOS(),
          this._checkFullscreen();
      }),
      (b._checkOS = function () {
        var a = navigator.userAgent;
        /Android/.test(a)
          ? (this.android = !0)
          : /CrOS/.test(a)
          ? (this.chromeOS = !0)
          : /iP[ao]d|iPhone/i.test(a)
          ? (this.iOS = !0)
          : /Linux/.test(a)
          ? (this.linux = !0)
          : /Mac OS/.test(a)
          ? (this.macOS = !0)
          : /Windows/.test(a) &&
            ((this.windows = !0),
            /Windows Phone/i.test(a) && (this.windowsPhone = !0)),
          (this.windows || this.macOS || (this.linux && this.silk === !1)) &&
            (this.desktop = !0),
          (this.windowsPhone || (/Windows NT/i.test(a) && /Touch/i.test(a))) &&
            (this.desktop = !1);
      }),
      (b._checkFeatures = function () {
        try {
          this.localStorage = !!localStorage.getItem;
        } catch (a) {
          this.localStorage = !1;
        }
        (this.file = !!(
          window.File &&
          window.FileReader &&
          window.FileList &&
          window.Blob
        )),
          (this.fileSystem = !!window.requestFileSystem),
          (this.webGL = (function () {
            try {
              var a = document.createElement("canvas");
              return (
                !!window.WebGLRenderingContext &&
                (a.getContext("webgl") || a.getContext("experimental-webgl"))
              );
            } catch (b) {
              return !1;
            }
          })()),
          (this.webGL = null === this.webGL || this.webGL === !1 ? !1 : !0),
          (this.worker = !!window.Worker),
          ("ontouchstart" in document.documentElement ||
            (window.navigator.maxTouchPoints &&
              window.navigator.maxTouchPoints > 1)) &&
            (this.touch = !0),
          (window.navigator.msPointerEnabled ||
            window.navigator.pointerEnabled) &&
            (this.mspointer = !0),
          (this.pointerLock =
            "pointerLockElement" in document ||
            "mozPointerLockElement" in document ||
            "webkitPointerLockElement" in document),
          (this.quirksMode = "CSS1Compat" === document.compatMode ? !1 : !0),
          (this.getUserMedia = !!(
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
          ));
      }),
      (b._checkBrowser = function () {
        var a = navigator.userAgent;
        /Arora/.test(a)
          ? (this.arora = !0)
          : /Chrome/.test(a)
          ? (this.chrome = !0)
          : /Epiphany/.test(a)
          ? (this.epiphany = !0)
          : /Firefox/.test(a)
          ? (this.firefox = !0)
          : /Mobile Safari/.test(a)
          ? (this.mobileSafari = !0)
          : /MSIE (\d+\.\d+);/.test(a)
          ? ((this.ie = !0), (this.ieVersion = parseInt(RegExp.$1, 10)))
          : /Midori/.test(a)
          ? (this.midori = !0)
          : /Opera/.test(a)
          ? (this.opera = !0)
          : /Safari/.test(a)
          ? (this.safari = !0)
          : /Silk/.test(a)
          ? (this.silk = !0)
          : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(a) &&
            ((this.ie = !0),
            (this.trident = !0),
            (this.tridentVersion = parseInt(RegExp.$1, 10)),
            (this.ieVersion = parseInt(RegExp.$3, 10))),
          navigator.standalone && (this.webApp = !0),
          navigator.isCocoonJS && (this.cocoonJS = !0),
          "undefined" != typeof window.ejecta && (this.ejecta = !0);
      }),
      (b._checkAudio = function () {
        (this.audioData = !!window.Audio),
          (this.webAudio = !(
            !window.webkitAudioContext && !window.AudioContext
          ));
        var a = document.createElement("audio"),
          b = !1;
        try {
          (b = !!a.canPlayType) &&
            (a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") &&
              (this.ogg = !0),
            a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") &&
              (this.opus = !0),
            a.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0),
            a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") &&
              (this.wav = !0),
            (a.canPlayType("audio/x-m4a;") ||
              a.canPlayType("audio/aac;").replace(/^no$/, "")) &&
              (this.m4a = !0),
            a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") &&
              (this.webm = !0));
        } catch (c) {}
      }),
      (b._checkDevice = function () {
        (this.pixelRatio = window.devicePixelRatio || 1),
          (this.iPhone =
            -1 != navigator.userAgent.toLowerCase().indexOf("iphone")),
          (this.iPhone4 = 2 == this.pixelRatio && this.iPhone),
          (this.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad")),
          "undefined" != typeof Int8Array
            ? ((this.littleEndian =
                new Int8Array(new Int16Array([1]).buffer)[0] > 0),
              (this.typedArray = !0))
            : ((this.littleEndian = !1), (this.typedArray = !1)),
          (navigator.vibrate =
            navigator.vibrate ||
            navigator.webkitVibrate ||
            navigator.mozVibrate ||
            navigator.msVibrate),
          navigator.vibrate && (this.vibration = !0);
      }),
      (b._checkCSS3D = function () {
        var a,
          b = document.createElement("p"),
          c = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform",
          };
        document.body.insertBefore(b, null);
        for (var d in c)
          void 0 !== b.style[d] &&
            ((b.style[d] = "translate3d(1px,1px,1px)"),
            (a = window.getComputedStyle(b).getPropertyValue(c[d])));
        document.body.removeChild(b),
          (this.css3D = void 0 !== a && a.length > 0 && "none" !== a);
      }),
      (b._checkFullscreen = function () {
        for (
          var a = [
              "requestFullscreen",
              "webkitRequestFullscreen",
              "msRequestFullscreen",
              "mozRequestFullScreen",
            ],
            b = 0;
          b < a.length;
          b++
        )
          if (this._canvas[a[b]]) {
            this.fullscreen = !0;
            break;
          }
        window.Element &&
          Element.ALLOW_KEYBOARD_INPUT &&
          (this.fullscreenKeyboard = !0);
      }),
      (b.canPlayAudio = function (a) {
        return "mp3" == a && this.mp3
          ? !0
          : "ogg" === a && (this.ogg || this.opus)
          ? !0
          : "m4a" === a && this.m4a
          ? !0
          : "wav" === a && this.wav
          ? !0
          : "webm" === a && this.webm
          ? !0
          : !1;
      }),
      (creatine.Device = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a) {
        this.initialize(a);
      },
      b = (a.prototype = new createjs.EventDispatcher());
    (b.canvas = null),
      (b.width = null),
      (b.height = null),
      (b.sourceWidth = null),
      (b.sourceHeight = null),
      (b.minWidth = null),
      (b.minHeight = null),
      (b.maxWidth = null),
      (b.maxHeight = null),
      (b.scaleMode = null),
      (b.orientation = null),
      (b.scaleUsingCSS = !1),
      (b.fullscreenScaleMode = null),
      (b._fullscreenRequest = null),
      (b._width = null),
      (b._height = null),
      (b.EventDispatcher_initialize = b.initialize),
      (b.initialize = function (a) {
        this.EventDispatcher_initialize(),
          (this.canvas = a),
          (this.width = a.width),
          (this.height = a.height),
          (this.sourceWidth = a.width),
          (this.sourceHeight = a.height),
          (this.scaleMode = creatine.NOSCALE),
          (this.orientation = 0),
          (this.scaleUsingCSS = !1),
          (this.fullscreenScaleMode = creatine.FIT),
          window.orientation
            ? (this.orientation = window.orientation)
            : window.outerWidth > window.outerHeight && (this.orientation = 90);
        for (
          var b = [
              "requestFullscreen",
              "webkitRequestFullscreen",
              "msRequestFullscreen",
              "mozRequestFullScreen",
            ],
            c = 0;
          c < b.length;
          c++
        )
          if (this.canvas[b[c]]) {
            this._fullscreenRequest = b[c];
            break;
          }
        var d = this;
        window.addEventListener(
          "resize",
          function (a) {
            return d._onResize(a);
          },
          !1
        ),
          window.addEventListener(
            "orientationchange",
            function (a) {
              return d._onOrientation(a);
            },
            !1
          ),
          document.addEventListener(
            "webkitfullscreenchange",
            function (a) {
              return d._onFullscreen(a);
            },
            !1
          ),
          document.addEventListener(
            "mozfullscreenchange",
            function (a) {
              return d._onFullscreen(a);
            },
            !1
          ),
          document.addEventListener(
            "fullscreenchange",
            function (a) {
              return d._onFullscreen(a);
            },
            !1
          );
      }),
      (b.refresh = function () {
        var a = this.scaleMode;
        this.isFullscreen() && (a = this.fullscreenScaleMode),
          this.scaleMode === creatine.STRETCH
            ? this.resizeStretch()
            : this.scaleMode === creatine.FIT && this.resizeFit();
      }),
      (b.setSmoothingEnabled = function (a) {
        var b = this.canvas.getContext("2d");
        (b.imageSmoothingEnabled = a),
          (b.mozImageSmoothingEnabled = a),
          (b.oImageSmoothingEnabled = a),
          (b.webkitImageSmoothingEnabled = a),
          (b.msImageSmoothingEnabled = a);
      }),
      (b.setImageRenderingCrisp = function () {
        var a = this.canvas;
        (a.style["image-rendering"] = "optimizeSpeed"),
          (a.style["image-rendering"] = "crisp-edges"),
          (a.style["image-rendering"] = "-moz-crisp-edges"),
          (a.style["image-rendering"] = "-webkit-optimize-contrast"),
          (a.style["image-rendering"] = "optimize-contrast"),
          (a.style.msInterpolationMode = "nearest-neighbor");
      }),
      (b.setImageRenderingBicubic = function () {
        var a = this.canvas;
        (a.style["image-rendering"] = "auto"),
          (a.style.msInterpolationMode = "bicubic");
      }),
      (b.setUserSelect = function (a) {
        var b = this.canvas;
        (a = a || "none"),
          (b.style["-webkit-touch-callout"] = a),
          (b.style["-webkit-user-select"] = a),
          (b.style["-khtml-user-select"] = a),
          (b.style["-moz-user-select"] = a),
          (b.style["-ms-user-select"] = a),
          (b.style["user-select"] = a),
          (b.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)");
      }),
      (b.setTouchAction = function (a) {
        var b = this.canvas;
        (a = a || "none"),
          (b.style.msTouchAction = a),
          (b.style["ms-touch-action"] = a),
          (b.style["touch-action"] = a);
      }),
      (b.setBackgroundColor = function (a) {
        (a = a || "rgb(0,0,0)"), (canvas.style.backgroundColor = a);
      }),
      (b.setBackgroundImage = function (a) {
        (a = a || "none"), (canvas.style.backgroundImage = a);
      }),
      (b._setSize = function (a, b) {
        (this.width = a),
          (this.height = b),
          this.scaleUsingCSS
            ? ((this.canvas.style.width = a + "px"),
              (this.canvas.style.height = b + "px"))
            : ((this.canvas.width = a), (this.canvas.height = b));
      }),
      (b._clipWidth = function (a) {
        return (
          this.minWidth && this.minWidth < a && (a = this.minWidth),
          this.maxWidth && this.maxWidth > a && (a = this.maxWidth),
          a
        );
      }),
      (b._clipHeight = function (a) {
        return (
          this.minHeight && this.minHeight < a && (a = this.minHeight),
          this.maxHeight && this.maxHeight > a && (a = this.maxHeight),
          a
        );
      }),
      (b.resizeCustom = function (a, b) {
        (this.sourceHeight = b), (this.sourceWidth = a), this._setSize(a, b);
      }),
      (b.resizeStretch = function () {
        var a = this._clipWidth(window.innerWidth),
          b = this._clipHeight(window.innerHeight);
        this._setSize(a, b);
      }),
      (b.resizeFit = function () {
        var a = Math.min(
            this._clipHeight(window.innerHeight) / this.sourceHeight,
            this._clipWidth(window.innerWidth) / this.sourceWidth
          ),
          b = Math.round(this.sourceWidth * a),
          c = Math.round(this.sourceHeight * a);
        this._setSize(b, c);
      }),
      (b.resizeOriginal = function () {
        (width = this.sourceWidth),
          (height = this.sourceHeight),
          this._setSize(width, height);
      }),
      (b.isPortrait = function () {
        return 0 === this.orientation || 180 == this.orientation;
      }),
      (b.isLandscape = function () {
        return 90 === this.orientation || -90 === this.orientation;
      }),
      (b.isFullscreen = function () {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement
        );
      }),
      (b.startFullscreen = function () {
        this._fullscreenRequest &&
          !this.isFullscreen() &&
          ((this._width = this.width),
          (this._height = this.height),
          window.Element && Element.ALLOW_KEYBOARD_INPUT
            ? this.canvas[this._fullscreenRequest](Element.ALLOW_KEYBOARD_INPUT)
            : this.canvas[this._fullscreenRequest]());
      }),
      (b.stopFullscreen = function () {
        this.isFullscreen() &&
          (document.cancelFullScreen
            ? document.cancelFullScreen()
            : document.exitFullscreen
            ? document.exitFullscreen()
            : document.webkitCancelFullScreen
            ? document.webkitCancelFullScreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.msCancelFullScreen
            ? document.msCancelFullScreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.mozExitFullscreen && document.mozExitFullscreen());
      }),
      (b._onResize = function () {
        this.scaleMode !== creatine.NOSCALE && this.refresh(),
          this.dispatchEvent("resize");
      }),
      (b._onOrientation = function () {
        (this.orientation = window.orientation),
          this.dispatchEvent("orientation"),
          this.dispatchEvent(
            this.isPortrait() ? "enterportrait" : "enterlandscape"
          );
      }),
      (b._onFullscreen = function () {
        this.isFullscreen()
          ? (this.refresh(), this.dispatchEvent("enterfullscreen"))
          : ((this.width = this._width),
            (this.height = this._height),
            (this.canvas.width = this._width),
            (this.canvas.height = this._height),
            this.refresh(),
            this.dispatchEvent("exitfullscreen"));
      }),
      (creatine.Display = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.orientation = null),
      (b.children = null),
      (b.area = null),
      (b.initialize = function (a, b) {
        (this.orientation = a), (this.children = []), (this.area = b);
      }),
      (b.add = function (a, b, c, d) {
        (d = d || creatine.TOP_LEFT),
          (b = b || 0),
          (c = c || 0),
          this.children.push([a, b, d, c]);
      }),
      (b.layout = function (a) {
        a && (this.area = a);
        for (
          var b = 0, c = 0, d = 0, e = 0, f = 0;
          f < this.children.length;
          f++
        ) {
          var g = this.children[f][0],
            h = this.children[f][1],
            i = this.children[f][2],
            j = this.children[f][3];
          if (((b += 2 * j), h > 0)) c += h;
          else {
            var k = g.getBounds();
            (d += k.width), (e += k.height);
          }
        }
        for (
          var l,
            m,
            n,
            o,
            p = this.area.width - b - d,
            q = this.area.height - b - e,
            r = this.area.x,
            s = this.area.y,
            t = 0,
            f = 0;
          f < this.children.length;
          f++
        ) {
          var g = this.children[f][0],
            h = this.children[f][1],
            i = this.children[f][2],
            j = this.children[f][3];
          if (
            ((l = r + j), (m = s + j), this.orientation == creatine.VERTICAL)
          ) {
            if (0 == h) {
              var k = g.getBounds();
              (n = k.width), (o = k.height);
            } else (t = h / c), (n = this.area.width - 2 * j), (o = t * q);
            s += o + 2 * j;
          } else if (this.orientation == creatine.HORIZONTAL) {
            if (0 == h) {
              var k = g.getBounds();
              (n = k.width), (o = k.height);
            } else (t = h / c), (n = t * p), (o = this.area.height - 2 * j);
            r += n + 2 * j;
          }
          this._resize_child(
            g,
            {
              x: l,
              y: m,
              width: n,
              height: o,
            },
            i
          );
        }
      }),
      (b._resize_child = function (a, b, c) {
        if ((a.layout && a.layout(b), a.getBounds)) var d = a.getBounds();
        if (d)
          var e = d.width,
            f = d.height;
        else
          var e = 0,
            f = 0;
        switch (c) {
          case creatine.TOP:
          case creatine.TOP_LEFT:
          case creatine.TOP_RIGHT:
            a.y = b.y;
            break;
          case creatine.LEFT:
          case creatine.CENTER:
          case creatine.RIGHT:
            a.y = b.y + b.height / 2 - f / 2;
            break;
          case creatine.BOTTOM:
          case creatine.BOTTOM_LEFT:
          case creatine.BOTTOM_RIGHT:
            a.y = b.y + b.height - f;
        }
        switch (c) {
          case creatine.LEFT:
          case creatine.TOP_LEFT:
          case creatine.BOTTOM_LEFT:
            a.x = b.x;
            break;
          case creatine.TOP:
          case creatine.CENTER:
          case creatine.BOTTOM:
            a.x = b.x + b.width / 2 - e / 2;
            break;
          case creatine.RIGHT:
          case creatine.TOP_RIGHT:
          case creatine.BOTTOM_RIGHT:
            a.x = b.x + b.width - e;
        }
      }),
      (creatine.BoxSizer = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a, b, c) {
        this.initialize(a, b, c);
      },
      b = a.prototype;
    (b.rows = null),
      (b.cols = null),
      (b.children = null),
      (b.area = null),
      (b.initialize = function (a, b, c) {
        (this.rows = a), (this.cols = b), (this.children = []), (this.area = c);
      }),
      (b.add = function (a, b, c) {
        (c = c || creatine.TOP_LEFT),
          (b = b || 0),
          this.children.push([a, c, b]);
      }),
      (b.layout = function (a) {
        a && (this.area = a);
        for (
          var b = this.area.width / this.cols,
            c = this.area.height / this.rows,
            d = 0;
          d < this.children.length;
          d++
        ) {
          var e = this.children[d][0],
            f = this.children[d][1],
            g = this.children[d][2],
            h = this.area.x + b * Math.floor(d % this.cols) + g,
            i = this.area.y + c * Math.floor(d / this.cols) + g,
            j = b - 2 * g,
            k = c - 2 * g;
          this._resize_child(
            e,
            {
              x: h,
              y: i,
              width: j,
              height: k,
            },
            f
          );
        }
      }),
      (b._resize_child = function (a, b, c) {
        if ((a.layout && a.layout(b), a.getBounds)) var d = a.getBounds();
        if (d)
          var e = d.width,
            f = d.height;
        else
          var e = 0,
            f = 0;
        switch (c) {
          case creatine.TOP:
          case creatine.TOP_LEFT:
          case creatine.TOP_RIGHT:
            a.y = b.y;
            break;
          case creatine.LEFT:
          case creatine.CENTER:
          case creatine.RIGHT:
            a.y = b.y + b.height / 2 - f / 2;
            break;
          case creatine.BOTTOM:
          case creatine.BOTTOM_LEFT:
          case creatine.BOTTOM_RIGHT:
            a.y = b.y + b.height - f;
        }
        switch (c) {
          case creatine.LEFT:
          case creatine.TOP_LEFT:
          case creatine.BOTTOM_LEFT:
            a.x = b.x;
            break;
          case creatine.TOP:
          case creatine.CENTER:
          case creatine.BOTTOM:
            a.x = b.x + b.width / 2 - e / 2;
            break;
          case creatine.RIGHT:
          case creatine.TOP_RIGHT:
          case creatine.BOTTOM_RIGHT:
            a.x = b.x + b.width - e;
        }
      }),
      (creatine.GridSizer = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a, b, c, d, e, f, g) {
        a && this.initialize(a, b, c, d, e, f, g);
      },
      b = (a.prototype = new createjs.Shape());
    (b.type = null),
      (b.direction = null),
      (b.image = null),
      (b.gradientColors = null),
      (b.fillColor = null),
      (b.backgroundColor = null),
      (b.value = null),
      (b.min = null),
      (b.max = null),
      (b.width = null),
      (b.height = null),
      (b.Shape_initialize = b.initialize),
      (b.initialize = function (a, b, c, d, e, f, g) {
        this.Shape_initialize(),
          a instanceof Array
            ? ((this.type = "gradient"), (this.gradientColors = a))
            : "string" == typeof a
            ? ((this.type = "color"), (this.fillColor = a))
            : ((this.type = "image"),
              (this.image = a),
              this.image.image && (this.image = this.image.image)),
          null == b && (b = null),
          null == c && (c = creatine.LEFT_TO_RIGHT),
          null == d && (d = 100),
          null == e && (e = 10),
          null == f && (f = 0),
          null == g && (g = 100),
          (this.backgroundColor = b),
          (this.direction = c),
          (this.width = d),
          (this.height = e),
          (this.min = f),
          (this.max = g),
          (this.value = 0);
      }),
      (b.isVisible = function () {
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY
        );
      }),
      (b.layout = function (a) {
        (this.width = a.width), (this.height = a.height);
      }),
      (b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b)) return !0;
        var c = 0,
          d = 0,
          e = this.width,
          f = this.height,
          g = creatine.clip(
            (e * (this.value - this.min)) / (this.max - this.min),
            0,
            e
          ),
          h = f,
          i = [e, 0];
        if (this.direction === creatine.TOP_TO_BOTTOM) {
          var i = [0, e],
            j = e;
          (e = f), (f = j), (j = g), (g = h), (h = j);
        } else if (this.direction === creatine.BOTTOM_TO_TOP) {
          var i = [0, -e],
            j = e;
          (e = f), (f = -j), (j = g), (g = h), (h = -j);
        } else if (this.direction === creatine.RIGHT_TO_LEFT) {
          var i = [-e, 0];
          (e = -e), (g = -g);
        }
        if (
          (this.graphics.clear(),
          this.backgroundColor &&
            (this.graphics.beginFill(this.backgroundColor),
            this.graphics.drawRect(c, d, e, f)),
          "color" === this.type)
        )
          this.graphics.beginFill(this.fillColor),
            this.graphics.drawRect(c, d, g, h);
        else if ("gradient" === this.type) {
          for (var k = [], l = 0; l < this.gradientColors.length; l++)
            k.push(l / (this.gradientColors.length - 1));
          this.graphics.beginLinearGradientFill(
            this.gradientColors,
            k,
            0,
            0,
            i[0],
            i[1]
          ),
            this.graphics.drawRect(c, d, g, h);
        } else
          "image" === this.type &&
            (this.graphics.beginBitmapFill(this.image),
            this.graphics.drawRect(c, d, g, h));
        return this.graphics.draw(a), !0;
      }),
      (creatine.ProgressBar = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a, b, c) {
        this.initialize(a, b, c);
      },
      b = (a.prototype = new createjs.Container());
    (b.direction = null),
      (b.image = null),
      (b.spacing = null),
      (b.value = null),
      (b.Container_initialize = b.initialize),
      (b.initialize = function (a, b, c) {
        this.Container_initialize(),
          (this.image = a.image ? a.image : a),
          (this.spacing = b || 0),
          (this.direction = c || creatine.LEFT_TO_RIGHT),
          (this.value = 0);
      }),
      (b.isVisible = function () {
        var a = this.value > 0 || this.cacheCanvas;
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY &&
          a
        );
      }),
      (b.Container_draw = b.draw),
      (b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b)) return !0;
        var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = this.image.width,
          h = this.image.height;
        this.direction === creatine.LEFT_TO_RIGHT
          ? (c = 1)
          : this.direction === creatine.RIGHT_TO_LEFT
          ? ((c = -1), (e = -g))
          : this.direction === creatine.TOP_TO_BOTTOM
          ? (d = 1)
          : this.direction === creatine.BOTTOM_TO_TOP && ((d = -1), (f = -h)),
          this.removeAllChildren();
        for (var i = 0; i < this.value; i++) {
          var j = new createjs.Bitmap(this.image);
          (j.x = e),
            (j.y = f),
            this.addChild(j),
            (e += this.spacing * c + g * c),
            (f += this.spacing * d + h * d);
        }
        return this.Container_draw(a, b);
      }),
      (creatine.DiscreteBar = a);
  })(),
  (this.creatine = this.creatine || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = (a.prototype = new createjs.Bitmap());
    (b.scaleMode = null),
      (b.Bitmap_initialize = b.initialize),
      (b.initialize = function (a, b) {
        this.Bitmap_initialize(a), (this.scaleMode = b || creatine.NOSCALE);
      }),
      (b.layout = function (a) {
        var b,
          c,
          d = this.image.width,
          e = this.image.height;
        this.scaleMode === creatine.FIT
          ? (b = c = Math.min(a.height / e, a.width / d))
          : this.scaleMode === creatine.FILL
          ? (b = c = Math.max(a.height / e, a.width / d))
          : this.scaleMode === creatine.STRETCH
          ? ((b = a.width / d), (c = a.height / e))
          : (b = c = 1),
          (this.scaleX = b),
          (this.scaleY = c);
      }),
      (b.getBounds = function () {
        var a = this.image.width * this.scaleX,
          b = this.image.height * this.scaleY;
        return this._rectangle.initialize(0, 0, a, b);
      }),
      (creatine.FlexBitmap = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b, c) {
        this.initialize(a, b, c);
      },
      b = a.prototype;
    (b.direction = null),
      (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b, c) {
        (this.direction = a || creatine.LEFT),
          (this.ease = b || createjs.Ease.linear),
          (this.time = c || 400);
      }),
      (b.run = function (a, b, c, d) {
        a.swapScenes();
        var e = a.stage.canvas.width,
          f = a.stage.canvas.height,
          g = {};
        switch (this.direction) {
          case creatine.LEFT:
            g.x = -e;
            break;
          case creatine.RIGHT:
            g.x = e;
            break;
          case creatine.TOP:
            g.y = -f;
            break;
          case creatine.BOTTOM:
            g.y = f;
            break;
          case creatine.TOP_LEFT:
            (g.x = -e), (g.y = -f);
            break;
          case creatine.TOP_RIGHT:
            (g.x = e), (g.y = -f);
            break;
          case creatine.BOTTOM_LEFT:
            (g.x = -e), (g.y = f);
            break;
          case creatine.BOTTOM_RIGHT:
            (g.x = e), (g.y = f);
        }
        var h = createjs.Tween.get(b);
        h.to(g, this.time, this.ease).addEventListener("change", tweenOnChange),
          d && h.call(d);
      }),
      (creatine.transitions.MoveOut = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b, c) {
        this.initialize(a, b, c);
      },
      b = a.prototype;
    (b.direction = null),
      (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b, c) {
        (this.direction = a || creatine.LEFT),
          (this.ease = b || createjs.Ease.linear),
          (this.time = c || 400);
      }),
      (b.run = function (a, b, c, d) {
        var e = a.stage.canvas.width,
          f = a.stage.canvas.height,
          g = {};
        switch (this.direction) {
          case creatine.LEFT:
            (c.x = -e), (g.x = 0);
            break;
          case creatine.RIGHT:
            (c.x = e), (g.x = 0);
            break;
          case creatine.TOP:
            (c.y = -f), (g.y = 0);
            break;
          case creatine.BOTTOM:
            (c.y = f), (g.y = 0);
            break;
          case creatine.TOP_LEFT:
            (c.x = -e), (c.y = -f), (g.x = 0), (g.y = 0);
            break;
          case creatine.TOP_RIGHT:
            (c.x = e), (c.y = -f), (g.x = 0), (g.y = 0);
            break;
          case creatine.BOTTOM_LEFT:
            (c.x = -e), (c.y = f), (g.x = 0), (g.y = 0);
            break;
          case creatine.BOTTOM_RIGHT:
            (c.x = e), (c.y = f), (g.x = 0), (g.y = 0);
        }
        var h = createjs.Tween.get(c);
        h.to(g, this.time, this.ease).addEventListener("change", tweenOnChange),
          d && h.call(d);
      }),
      (creatine.transitions.MoveIn = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b, c) {
        this.initialize(a, b, c);
      },
      b = a.prototype;
    (b.direction = null),
      (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b, c) {
        (this.direction = a || creatine.LEFT),
          (this.ease = b || createjs.Ease.linear),
          (this.time = c || 400);
      }),
      (b.run = function (a, b, c, d) {
        a.swapScenes();
        var e = a.stage.canvas.width,
          f = a.stage.canvas.height,
          g = {},
          h = {};
        switch (this.direction) {
          case creatine.LEFT:
            (c.x = e), (h.x = 0), (g.x = -e);
            break;
          case creatine.RIGHT:
            (c.x = -e), (h.x = 0), (g.x = e);
            break;
          case creatine.TOP:
            (c.y = f), (h.y = 0), (g.y = -f);
            break;
          case creatine.BOTTOM:
            (c.y = -f), (h.y = 0), (g.y = f);
        }
        var i = createjs.Tween.get(c);
        i.to(h, this.time, this.ease).addEventListener("change", tweenOnChange),
          d && i.call(d),
          (i = createjs.Tween.get(b)),
          i
            .to(g, this.time, this.ease)
            .addEventListener("change", tweenOnChange);
      }),
      (creatine.transitions.Scroll = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b) {
        (this.ease = a || createjs.Ease.linear), (this.time = b || 400);
      }),
      (b.run = function (a, b, c, d) {
        c.alpha = 0;
        var e = createjs.Tween.get(c);
        e
          .to(
            {
              alpha: 1,
            },
            this.time,
            this.ease
          )
          .addEventListener("change", tweenOnChange),
          d && e.call(d);
      }),
      (creatine.transitions.FadeIn = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b) {
        (this.ease = a || createjs.Ease.linear), (this.time = b || 400);
      }),
      (b.run = function (a, b, c, d) {
        a.swapScenes();
        var e = createjs.Tween.get(b);
        e
          .to(
            {
              alpha: 0,
            },
            this.time,
            this.ease
          )
          .addEventListener("change", tweenOnChange),
          d && e.call(d);
      }),
      (creatine.transitions.FadeOut = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b) {
        (this.ease = a || createjs.Ease.linear), (this.time = b || 1e3);
      }),
      (b.run = function (a, b, c, d) {
        var e = this.time / 2;
        a.swapScenes(), (c.alpha = 0);
        var f = createjs.Tween.get(c)
          .wait(e)
          .to(
            {
              alpha: 1,
            },
            e,
            this.ease
          )
          .addEventListener("change", tweenOnChange);
        createjs.Tween.get(b)
          .to(
            {
              alpha: 0,
            },
            e,
            this.ease
          )
          .addEventListener("change", tweenOnChange),
          d && f.call(d);
      }),
      (creatine.transitions.FadeInOut = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b, c) {
        (this.ease = b || createjs.Ease.linear), (this.time = c || 400);
      }),
      (b.run = function (a, b, c, d) {
        var e = a.stage.canvas.width,
          f = a.stage.canvas.height,
          g = {};
        (c.scaleX = 0),
          (c.scaleY = 0),
          (c.x = e / 2),
          (c.y = f / 2),
          (g.scaleX = 1),
          (g.scaleY = 1),
          (g.x = 0),
          (g.y = 0);
        var h = createjs.Tween.get(c);
        h.to(g, this.time, this.ease).addEventListener("change", tweenOnChange),
          d && h.call(d);
      }),
      (creatine.transitions.ScaleIn = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b, c) {
        (this.ease = b || createjs.Ease.linear), (this.time = c || 400);
      }),
      (b.run = function (a, b, c, d) {
        a.swapScenes();
        var e = a.stage.canvas.width,
          f = a.stage.canvas.height,
          g = {};
        (c.x = 0),
          (c.y = 0),
          (g.scaleX = 0),
          (g.scaleY = 0),
          (g.x = e / 2),
          (g.y = f / 2);
        var h = createjs.Tween.get(b);
        h.to(g, this.time, this.ease).addEventListener("change", tweenOnChange),
          d && h.call(d);
      }),
      (creatine.transitions.ScaleOut = a);
  })(),
  (this.creatine = this.creatine || {}),
  (this.creatine.transitions = this.creatine.transitions || {}),
  (function () {
    "use strict";
    var a = function (a, b) {
        this.initialize(a, b);
      },
      b = a.prototype;
    (b.ease = null),
      (b.time = null),
      (b.initialize = function (a, b, c) {
        (this.ease = b || createjs.Ease.linear), (this.time = c || 1e3);
      }),
      (b.run = function (a, b, c, d) {
        var e = this.time / 2,
          f = a.stage.canvas.width,
          g = a.stage.canvas.height,
          h = {},
          i = {};
        (c.x = f / 2),
          (c.y = g / 2),
          (c.scaleX = 0),
          (c.scaleY = 0),
          (h.x = 0),
          (h.y = 0),
          (h.scaleX = 1),
          (h.scaleY = 1),
          (i.x = f / 2),
          (i.y = g / 2),
          (i.scaleX = 0),
          (i.scaleY = 0),
          createjs.Tween.get(b)
            .to(i, e, this.ease)
            .addEventListener("change", tweenOnChange);
        var j = createjs.Tween.get(c)
          .wait(e)
          .to(h, e, this.ease)
          .addEventListener("change", tweenOnChange);
        d && j.call(d);
      }),
      (creatine.transitions.ScaleInOut = a);
  })();
/*!
 * @license SoundJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

/**!
 * SoundJS FlashAudioPlugin also includes swfobject (http://code.google.com/p/swfobject/)
 */

(this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.SOUND),
        (this._media = null),
        (this._loadTime = 0),
        (this._TIMER_FREQUENCY = 100);
    }
    var b = createjs.extend(a, createjs.AbstractLoader);
    (b.load = function () {
      (this._media = new Media(
        this._item.src,
        null,
        createjs.proxy(this._mediaErrorHandler, this)
      )),
        this._media.seekTo(0),
        this._getMediaDuration();
    }),
      (b.toString = function () {
        return "[CordovaAudioLoader]";
      }),
      (b._mediaErrorHandler = function () {
        this._media.release(), this._sendError();
      }),
      (b._getMediaDuration = function () {
        (this._result = 1e3 * this._media.getDuration()),
          this._result < 0
            ? ((this._loadTime += this._TIMER_FREQUENCY),
              this._loadTime > this._item.loadTimeout
                ? this.handleEvent({ type: "timeout" })
                : setTimeout(
                    createjs.proxy(this._getMediaDuration, this),
                    this._TIMER_FREQUENCY
                  ))
            : (this._media.release(), this._sendComplete());
      }),
      (createjs.CordovaAudioLoader = createjs.promote(a, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function CordovaAudioSoundInstance(a, b, c, d) {
      this.AbstractSoundInstance_constructor(a, b, c, d),
        (this.playWhenScreenLocked = null),
        (this._playStartTime = null),
        (this._audioSpriteTimeout = null),
        (this._audioSprite = !1),
        (this._audioSpriteEndHandler = createjs.proxy(
          this._handleAudioSpriteComplete,
          this
        )),
        (this._mediaPlayFinishedHandler = createjs.proxy(
          this._handleSoundComplete,
          this
        )),
        (this._mediaErrorHandler = createjs.proxy(
          this._handleMediaError,
          this
        )),
        (this._mediaProgressHandler = createjs.proxy(
          this._handleMediaProgress,
          this
        )),
        (this._playbackResource = new Media(
          a,
          this._mediaPlayFinishedHandler,
          this._mediaErrorHandler,
          this._mediaProgressHandler
        )),
        c ? (this._audioSprite = !0) : this._setDurationFromSource();
    }
    var a = createjs.extend(
      CordovaAudioSoundInstance,
      createjs.AbstractSoundInstance
    );
    (a.setMasterVolume = function () {
      this._updateVolume();
    }),
      (a.setMasterMute = function () {
        this._updateVolume();
      }),
      (a.destroy = function () {
        this._playbackResource.pause(),
          this._playbackResource.release(),
          this.AbstractSoundInstance_destroy();
      }),
      (a.getCurrentPosition = function (a, b) {
        this._playbackResource.getCurrentPosition(a, b);
      }),
      (a.toString = function () {
        return "[CordovaAudioSoundInstance]";
      }),
      (a._handleMediaError = function () {
        clearTimeout(this.delayTimeoutId),
          (this.playState = createjs.Sound.PLAY_FAILED),
          this._sendEvent("failed");
      }),
      (a._handleMediaProgress = function () {}),
      (a._handleAudioSpriteComplete = function () {
        this._playbackResource.pause(), this._handleSoundComplete();
      }),
      (a._handleCleanUp = function () {
        clearTimeout(this._audioSpriteTimeout);
      }),
      (a._handleSoundReady = function () {
        this._playbackResource.seekTo(this._startTime + this._position),
          this._audioSprite &&
            (this._audioSpriteTimeout = setTimeout(
              this._audioSpriteEndHandler,
              this._duration - this._position
            )),
          this._playbackResource.play({
            playAudioWhenScreenIsLocked: this.playWhenScreenLocked,
          }),
          (this._playStartTime = Date.now());
      }),
      (a._pause = function () {
        clearTimeout(this._audioSpriteTimeout),
          this._playbackResource.pause(),
          this._playStartTime &&
            ((this._position = Date.now() - this._playStartTime),
            (this._playStartTime = null)),
          this._playbackResource.getCurrentPosition(
            createjs.proxy(this._updatePausePos, this)
          );
      }),
      (a._updatePausePos = function (a) {
        (this._position = 1e3 * a - this._startTime),
          this._playStartTime && (this._playStartTime = Date.now());
      }),
      (a._resume = function () {
        this._audioSprite &&
          (this._audioSpriteTimeout = setTimeout(
            this._audioSpriteEndHandler,
            this._duration - this._position
          )),
          this._playbackResource.play({
            playAudioWhenScreenIsLocked: this.playWhenScreenLocked,
          }),
          (this._playStartTime = Date.now());
      }),
      (a._handleStop = function () {
        clearTimeout(this._audioSpriteTimeout),
          this._playbackResource.pause(),
          this._playbackResource.seekTo(this._startTime),
          this._playStartTime &&
            ((this._position = 0), (this._playStartTime = null));
      }),
      (a._updateVolume = function () {
        var a =
          this._muted || createjs.Sound._masterMute
            ? 0
            : this._volume * createjs.Sound._masterVolume;
        this._playbackResource.setVolume(a);
      }),
      (a._calculateCurrentPosition = function () {
        return (
          this._playStartTime &&
            ((this._position =
              Date.now() - this._playStartTime + this._position),
            (this._playStartTime = Date.now())),
          this._position
        );
      }),
      (a._updatePosition = function () {
        this._playbackResource.seekTo(this._startTime + this._position),
          (this._playStartTime = Date.now()),
          this._audioSprite &&
            (clearTimeout(this._audioSpriteTimeout),
            (this._audioSpriteTimeout = setTimeout(
              this._audioSpriteEndHandler,
              this._duration - this._position
            )));
      }),
      (a._handleLoop = function () {
        this._handleSoundReady();
      }),
      (a._updateStartTime = function () {
        (this._audioSprite = !0),
          this.playState == createjs.Sound.PLAY_SUCCEEDED;
      }),
      (a._updateDuration = function () {
        this._audioSprite,
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
            (clearTimeout(this._audioSpriteTimeout),
            (this._audioSpriteTimeout = setTimeout(
              this._audioSpriteEndHandler,
              this._duration - this.position
            )));
      }),
      (a._setDurationFromSource = function () {
        this._duration = createjs.Sound.activePlugin.getSrcDuration(this.src);
      }),
      (createjs.CordovaAudioSoundInstance = createjs.promote(
        CordovaAudioSoundInstance,
        "AbstractSoundInstance"
      ));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function CordovaAudioPlugin() {
      this.AbstractPlugin_constructor(),
        (this._capabilities = b._capabilities),
        (this._loaderClass = createjs.CordovaAudioLoader),
        (this._soundInstanceClass = createjs.CordovaAudioSoundInstance),
        (this._srcDurationHash = {});
    }
    var a = createjs.extend(CordovaAudioPlugin, createjs.AbstractPlugin),
      b = CordovaAudioPlugin;
    (b.playWhenScreenLocked = !1),
      (b._capabilities = null),
      (b.isSupported = function () {
        return b._generateCapabilities(), null != b._capabilities;
      }),
      (b._generateCapabilities = function () {
        if (
          null == b._capabilities &&
          (window.cordova || window.PhoneGap || window.phonegap) &&
          window.Media
        ) {
          var a = document.createElement("audio");
          if (null == a.canPlayType) return null;
          b._capabilities = { panning: !1, volume: !0, tracks: -1 };
          for (
            var c = createjs.Sound.SUPPORTED_EXTENSIONS,
              d = createjs.Sound.EXTENSION_MAP,
              e = 0,
              f = c.length;
            f > e;
            e++
          ) {
            var g = c[e],
              h = d[g] || g;
            b._capabilities[g] =
              ("no" != a.canPlayType("audio/" + g) &&
                "" != a.canPlayType("audio/" + g)) ||
              ("no" != a.canPlayType("audio/" + h) &&
                "" != a.canPlayType("audio/" + h));
          }
        }
      }),
      (a.create = function (a, b, c) {
        var d = this.AbstractPlugin_create(a, b, c);
        return (d.playWhenScreenLocked = this.playWhenScreenLocked), d;
      }),
      (a.toString = function () {
        return "[CordovaAudioPlugin]";
      }),
      (a.setVolume = a.getVolume = a.setMute = null),
      (a.getSrcDuration = function (a) {
        return this._srcDurationHash[a];
      }),
      (a._handlePreloadComplete = function (a) {
        var b = a.target.getItem().src;
        (this._srcDurationHash[b] = a.result),
          (this._audioSources[b] = a.result);
      }),
      (a.removeSound = function (a) {
        delete this._srcDurationHash[a], this.AbstractPlugin_removeSound(a);
      }),
      (createjs.CordovaAudioPlugin = createjs.promote(
        CordovaAudioPlugin,
        "AbstractPlugin"
      ));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    var a = (createjs.CordovaAudioPlugin = createjs.CordovaAudioPlugin || {});
    (a.version = "0.6.1"), (a.buildDate = "Thu, 21 May 2015 16:17:37 GMT");
  })();
function X2JS(t) {
  "use strict";
  function e() {
    void 0 === t.escapeMode && (t.escapeMode = !0),
      (t.attributePrefix = t.attributePrefix || "_"),
      "none" === t.attributePrefix && (t.attributePrefix = ""),
      (t.arrayAccessForm = t.arrayAccessForm || "none"),
      (t.emptyNodeForm = t.emptyNodeForm || "text"),
      void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0),
      (t.arrayAccessFormPaths = t.arrayAccessFormPaths || []),
      void 0 === t.skipEmptyTextNodesForObj &&
        (t.skipEmptyTextNodesForObj = !0),
      void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0),
      (t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || []),
      void 0 === t.coerce && (t.coerce = !0);
  }
  function r() {
    function t(t) {
      var e = String(t);
      return 1 === e.length && (e = "0" + e), e;
    }
    "function" != typeof String.prototype.trim &&
      (String.prototype.trim = function () {
        return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "");
      }),
      "function" != typeof Date.prototype.toISOString &&
        (Date.prototype.toISOString = function () {
          return (
            this.getUTCFullYear() +
            "-" +
            t(this.getUTCMonth() + 1) +
            "-" +
            t(this.getUTCDate()) +
            "T" +
            t(this.getUTCHours()) +
            ":" +
            t(this.getUTCMinutes()) +
            ":" +
            t(this.getUTCSeconds()) +
            "." +
            String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) +
            "Z"
          );
        });
  }
  function n(t) {
    var e = t.localName;
    return (
      null == e && (e = t.baseName),
      (null == e || "" == e) && (e = t.nodeName),
      e
    );
  }
  function i(t) {
    return t.prefix;
  }
  function a(t) {
    return "string" == typeof t
      ? t
          .replace(/&/g, "&")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;")
          .replace(/\//g, "&#x2F;")
      : t;
  }
  function s(t) {
    return t
      .toString()
      .replace(/&/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, "/");
  }
  function o(e, r, n) {
    switch (t.arrayAccessForm) {
      case "property":
        e[r + "_asArray"] = e[r] instanceof Array ? e[r] : [e[r]];
    }
    if (!(e[r] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
      for (var i = 0; i < t.arrayAccessFormPaths.length; i++) {
        var a = t.arrayAccessFormPaths[i];
        if ("string" == typeof a) {
          if (a == n) break;
        } else if (a instanceof RegExp) {
          if (a.test(n)) break;
        } else if ("function" == typeof a && a(e, r, n)) break;
      }
      i != t.arrayAccessFormPaths.length && (e[r] = [e[r]]);
    }
  }
  function c(t) {
    var e = t.split(/[-T:+Z]/g),
      r = new Date(e[0], e[1] - 1, e[2]),
      n = e[5].split(".");
    if (
      (r.setHours(e[3], e[4], n[0]),
      n.length > 1 && r.setMilliseconds(n[1]),
      e[6] && e[7])
    ) {
      var i = 60 * e[6] + Number(e[7]);
      (i = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(t) ? "-" : "+") ? -1 * i : i)),
        r.setMinutes(r.getMinutes() - i - r.getTimezoneOffset());
    } else
      -1 !== t.indexOf("Z", t.length - 1) &&
        (r = new Date(
          Date.UTC(
            r.getFullYear(),
            r.getMonth(),
            r.getDate(),
            r.getHours(),
            r.getMinutes(),
            r.getSeconds(),
            r.getMilliseconds()
          )
        ));
    return r;
  }
  function l(e, r, n) {
    if (t.datetimeAccessFormPaths.length > 0) {
      for (
        var i = n.split(".#")[0], a = 0;
        a < t.datetimeAccessFormPaths.length;
        a++
      ) {
        var s = t.datetimeAccessFormPaths[a];
        if ("string" == typeof s) {
          if (s == i) break;
        } else if (s instanceof RegExp) {
          if (s.test(i)) break;
        } else if ("function" == typeof s && s(obj, r, i)) break;
      }
      return a != t.datetimeAccessFormPaths.length ? c(e) : e;
    }
    return e;
  }
  function u(e, r) {
    if (e.nodeType == A.DOCUMENT_NODE) {
      for (var a = new Object(), c = e.childNodes, _ = 0; _ < c.length; _++) {
        var p = c.item(_);
        if (p.nodeType == A.ELEMENT_NODE) {
          var g = n(p);
          a[g] = u(p, g);
        }
      }
      return a;
    }
    if (e.nodeType == A.ELEMENT_NODE) {
      var a = new Object();
      a.__cnt = 0;
      for (var c = e.childNodes, _ = 0; _ < c.length; _++) {
        var p = c.item(_),
          g = n(p);
        p.nodeType != A.COMMENT_NODE &&
          (a.__cnt++,
          null == a[g]
            ? ((a[g] = u(p, r + "." + g)), o(a, g, r + "." + g))
            : (null != a[g] &&
                (a[g] instanceof Array ||
                  ((a[g] = [a[g]]), o(a, g, r + "." + g))),
              (a[g][a[g].length] = u(p, r + "." + g))));
      }
      for (var d = 0; d < e.attributes.length; d++) {
        var x = e.attributes.item(d);
        a.__cnt++, (a[t.attributePrefix + x.name] = f(x.value));
      }
      var h = i(e);
      return (
        null != h && "" != h && (a.__cnt++, (a.__prefix = h)),
        null != a["#text"] &&
          ((a.__text = a["#text"]),
          a.__text instanceof Array && (a.__text = a.__text.join("\n")),
          t.escapeMode && (a.__text = s(a.__text)),
          t.stripWhitespaces && (a.__text = a.__text.trim()),
          delete a["#text"],
          "property" == t.arrayAccessForm && delete a["#text_asArray"],
          (a.__text = l(a.__text, g, r + "." + g))),
        null != a["#cdata-section"] &&
          ((a.__cdata = a["#cdata-section"]),
          delete a["#cdata-section"],
          "property" == t.arrayAccessForm &&
            delete a["#cdata-section_asArray"]),
        1 == a.__cnt && null != a.__text
          ? (a = a.__text)
          : 0 == a.__cnt && "text" == t.emptyNodeForm
          ? (a = "")
          : a.__cnt > 1 &&
            null != a.__text &&
            t.skipEmptyTextNodesForObj &&
            ((t.stripWhitespaces && "" == a.__text) || "" == a.__text.trim()) &&
            delete a.__text,
        delete a.__cnt,
        !t.enableToStringFunc ||
          (null == a.__text && null == a.__cdata) ||
          (a.toString = function () {
            return (
              (null != this.__text ? this.__text : "") +
              (null != this.__cdata ? this.__cdata : "")
            );
          }),
        a
      );
    }
    return e.nodeType == A.TEXT_NODE || e.nodeType == A.CDATA_SECTION_NODE
      ? f(e.nodeValue)
      : void 0;
  }
  function f(e) {
    if (!t.coerce || "" === e.trim()) return e;
    var r = Number(e);
    if (!isNaN(r)) return r;
    var n = e.toLowerCase();
    return "true" == n || ("false" != n && e);
  }
  function _(e, r, n, i) {
    var s = "<" + (null != e && null != e.__prefix ? e.__prefix + ":" : "") + r;
    if (null != n)
      for (var o = 0; o < n.length; o++) {
        var c = n[o],
          l = e[c];
        t.escapeMode && (l = a(l)),
          (s += " " + c.substr(t.attributePrefix.length) + "='" + l + "'");
      }
    return (s += i ? "/>" : ">");
  }
  function p(t, e) {
    return "</" + (null != t.__prefix ? t.__prefix + ":" : "") + e + ">";
  }
  function g(t, e) {
    return -1 !== t.indexOf(e, t.length - e.length);
  }
  function d(e, r) {
    return !!(
      ("property" == t.arrayAccessForm && g(r.toString(), "_asArray")) ||
      0 == r.toString().indexOf(t.attributePrefix) ||
      0 == r.toString().indexOf("__") ||
      e[r] instanceof Function
    );
  }
  function x(t) {
    var e = 0;
    if (t instanceof Object) for (var r in t) d(t, r) || e++;
    return e;
  }
  function h(e) {
    var r = [];
    if (e instanceof Object)
      for (var n in e)
        -1 == n.toString().indexOf("__") &&
          0 == n.toString().indexOf(t.attributePrefix) &&
          r.push(n);
    return r;
  }
  function m(e) {
    var r = "";
    return (
      null != e.__cdata && (r += "<![CDATA[" + e.__cdata + "]]>"),
      null != e.__text && (r += t.escapeMode ? a(e.__text) : e.__text),
      r
    );
  }
  function y(e) {
    var r = "";
    return (
      e instanceof Object
        ? (r += m(e))
        : null != e && (r += t.escapeMode ? a(e) : e),
      r
    );
  }
  function v(t, e, r) {
    var n = "";
    if (0 == t.length) n += _(t, e, r, !0);
    else
      for (var i = 0; i < t.length; i++)
        (n += _(t[i], e, h(t[i]), !1)), (n += O(t[i])), (n += p(t[i], e));
    return n;
  }
  function O(t) {
    var e = "";
    if (x(t) > 0)
      for (var n in t)
        if (!d(t, n)) {
          var i = t[n],
            a = h(i);
          if (null == i || void 0 == i) e += _(i, n, a, !0);
          else if (i instanceof Object)
            if (i instanceof Array) e += v(i, n, a);
            else if (i instanceof Date)
              (e += _(i, n, a, !1)), (e += i.toISOString()), (e += p(i, n));
            else {
              var s = x(i);
              s > 0 || null != i.__text || null != i.__cdata
                ? ((e += _(i, n, a, !1)), (e += O(i)), (e += p(i, n)))
                : (e += _(i, n, a, !0));
            }
          else (e += _(i, n, a, !1)), (e += y(i)), (e += p(i, n));
        }
    return (e += y(t));
  }
  var T = "1.1.5";
  (t = t || {}), e(), r();
  var A = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
  };
  (this.parseXmlString = function (t) {
    var e = window.ActiveXObject || "ActiveXObject" in window;
    if (void 0 === t) return null;
    var r;
    if (window.DOMParser) {
      var n = new window.DOMParser(),
        i = null;
      if (!e)
        try {
          i = n.parseFromString("INVALID", "text/xml").childNodes[0]
            .namespaceURI;
        } catch (a) {
          i = null;
        }
      try {
        (r = n.parseFromString(t, "text/xml")),
          null != i &&
            r.getElementsByTagNameNS(i, "parsererror").length > 0 &&
            (r = null);
      } catch (a) {
        r = null;
      }
    } else
      0 == t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)),
        (r = new ActiveXObject("Microsoft.XMLDOM")),
        (r.async = "false"),
        r.loadXML(t);
    return r;
  }),
    (this.asArray = function (t) {
      return t instanceof Array ? t : [t];
    }),
    (this.toXmlDateTime = function (t) {
      return t instanceof Date
        ? t.toISOString()
        : "number" == typeof t
        ? new Date(t).toISOString()
        : null;
    }),
    (this.asDateTime = function (t) {
      return "string" == typeof t ? c(t) : t;
    }),
    (this.xml2json = function (t) {
      return u(t);
    }),
    (this.xml_str2json = function (t) {
      var e = this.parseXmlString(t);
      return null != e ? this.xml2json(e) : null;
    }),
    (this.json2xml_str = function (t) {
      return O(t);
    }),
    (this.json2xml = function (t) {
      var e = this.json2xml_str(t);
      return this.parseXmlString(e);
    }),
    (this.getVersion = function () {
      return T;
    });
}
(PluginManager = {
  defaultResWidth: 1920,
  defaultResHeight: 1200,
  pluginMap: {},
  pluginObjMap: {},
  registerPlugin: function (id, plugin) {
    org.ekstep.pluginframework.pluginManager._registerPlugin(
      id,
      void 0,
      plugin
    ),
      "undefined" != typeof createjs &&
        createjs.EventDispatcher.initialize(plugin.prototype);
  },
  isPlugin: function (id) {
    return org.ekstep.pluginframework.pluginManager.isPluginDefined(id);
  },
  invoke: function (id, data, parent, stage, theme) {
    return org.ekstep.pluginframework.pluginManager.invokeRenderer(
      id,
      data,
      parent,
      stage,
      theme
    );
  },
  registerPluginObject: function (pluginObj) {
    (PluginManager.pluginObjMap[pluginObj.id] = pluginObj),
      org.ekstep.pluginframework.pluginManager.addPluginInstance(pluginObj);
  },
  getPluginObject: function (id) {
    return org.ekstep.pluginframework.pluginManager.getPluginInstance(id);
  },
  addError: function (error) {
    org.ekstep.pluginframework.pluginManager.addError(error);
  },
  getErrors: function () {
    return org.ekstep.pluginframework.pluginManager.getErrors();
  },
  cleanUp: function () {
    org.ekstep.pluginframework.pluginManager.cleanUp();
  },
  getPlugins: function () {
    return org.ekstep.pluginframework.pluginManager.getPlugins();
  },
}),
  (window.PluginManager = PluginManager),
  (ControllerManager = {
    controllerMap: {},
    instanceMap: {},
    errors: [],
    reset: function () {
      ControllerManager.instanceMap = {};
    },
    registerController: function (type, controller) {
      ControllerManager.controllerMap[type] = controller;
    },
    isController: function (type) {
      return !!ControllerManager.controllerMap[type];
    },
    get: function (c, baseDir) {
      var d,
        controllerMap = ControllerManager.controllerMap;
      if (c.type && c.id)
        if (controllerMap[c.type]) {
          var controllerId = c.type + "." + c.id;
          (d = ControllerManager.getControllerInstance(controllerId)),
            d || (d = new controllerMap[c.type](c, baseDir));
        } else
          ControllerManager.addError("No Controller found for - " + c.type);
      return d;
    },
    registerControllerInstance: function (id, instance) {
      ControllerManager.instanceMap[id] = instance;
    },
    getControllerInstance: function (id) {
      return ControllerManager.instanceMap[id];
    },
    addError: function (error) {
      ControllerManager.errors.push(error);
    },
    getErrors: function () {
      return ControllerManager.errors;
    },
  }),
  (AudioManager = {
    instances: {},
    MAX_INSTANCES: 10,
    muted: !1,
    uniqueId: function (action) {
      return action.stageId + ":" + action.asset;
    },
    play: function (action, instance) {
      return "string" !=
        typeof AssetManager.getAsset(
          Renderer.theme._currentStage,
          action.asset
        ) &&
        void 0 !== action &&
        void 0 !== action.asset &&
        null != action.asset
        ? ((instance =
            instance ||
            AudioManager.instances[AudioManager.uniqueId(action)] ||
            {}),
          instance.object
            ? ((instance.object.volume = 1),
              instance.object.paused
                ? (instance.object.paused = !1)
                : -1 !==
                    [
                      createjs.Sound.PLAY_FINISHED,
                      createjs.Sound.PLAY_INTERRUPTED,
                      createjs.Sound.PLAY_FAILED,
                    ].indexOf(instance.object.playState) &&
                  instance.object.play(),
              (instance.object.muted = this.muted))
            : (AudioManager.reclaim(),
              action.asset == RecorderManager.recordedAsset &&
                RecorderManager.switchToCordova(),
              (instance.object = createjs.Sound.play(action.asset, {
                interrupt: createjs.Sound.INTERRUPT_ANY,
              })),
              action.asset == RecorderManager.recordedAsset &&
                RecorderManager.switchBackToDefault(),
              (instance.object.muted = this.muted),
              (instance._data = { id: AudioManager.uniqueId(action) }),
              (AudioManager.instances[AudioManager.uniqueId(action)] =
                instance),
              AssetManager.addStageAudio(
                Renderer.theme._currentStage,
                action.asset
              )),
          createjs.Sound.PLAY_FAILED != instance.object.playState
            ? (EventManager.processAppTelemetry(action, "LISTEN", instance, {
                subtype: "PLAY",
              }),
              instance.object.on(
                "complete",
                function () {
                  void 0 !== action.cb && action.cb({ status: "success" });
                },
                action
              ))
            : (delete AudioManager.instances[AudioManager.uniqueId(action)],
              console.info(
                "Audio with 'id :" + action.asset + "' is not found.."
              )),
          instance)
        : (console.warn("Asset is not given to play.", action), {});
    },
    togglePlay: function (action) {
      if (
        void 0 !== action &&
        void 0 !== action.asset &&
        null != action.asset
      ) {
        var instance =
          AudioManager.instances[AudioManager.uniqueId(action)] || {};
        instance && instance.object
          ? instance.object.playState === createjs.Sound.PLAY_FINISHED ||
            instance.object.paused
            ? AudioManager.play(action, instance)
            : instance.object.paused || AudioManager.pause(action, instance)
          : AudioManager.play(action, instance);
      } else console.warn("Asset is not given to toggle play.", action);
    },
    pause: function (action, instance) {
      void 0 !== action && void 0 !== action.asset && null != action.asset
        ? (instance =
            instance ||
            AudioManager.instances[AudioManager.uniqueId(action)]) &&
          instance.object &&
          instance.object.playState === createjs.Sound.PLAY_SUCCEEDED &&
          ((instance.object.paused = !0),
          EventManager.processAppTelemetry(action, "LISTEN", instance, {
            subtype: "PAUSE",
          }))
        : console.warn("Asset is not given to toggle pause.", action);
    },
    stop: function (action) {
      var instance =
        AudioManager.instances[AudioManager.uniqueId(action)] || {};
      instance &&
        instance.object &&
        instance.object.playState !== createjs.Sound.PLAY_FINISHED &&
        ((instance.object.volume = 0),
        instance.object.stop(),
        EventManager.processAppTelemetry(action, "LISTEN", instance, {
          subtype: "STOP",
        }));
    },
    stopAll: function (action) {
      for (var data in AudioManager.instances)
        AudioManager.instances[data].object.volume = 0;
      createjs.Sound.stop(),
        action &&
          EventManager.processAppTelemetry(action, "LISTEN", "", {
            subtype: "STOP_ALL",
          });
    },
    reclaim: function () {
      var keys = _.keys(AudioManager.instances);
      if (keys.length > AudioManager.MAX_INSTANCES)
        for (index in keys) {
          var key = keys[index],
            instance = AudioManager.instances[key];
          if (
            instance &&
            instance.object.playState != createjs.Sound.PLAY_INITED &&
            instance.object.playState != createjs.Sound.PLAY_SUCCEEDED
          ) {
            AudioManager.destroyObject(instance, key);
            break;
          }
        }
    },
    destroy: function (stageId, assetId) {
      var soundId = AudioManager.uniqueId({ stageId: stageId, asset: assetId }),
        instance = AudioManager.instances[soundId] || {};
      AudioManager.destroyObject(instance, soundId);
    },
    destroyObject: function (instance, soundId) {
      if (instance.object) {
        try {
          instance.object.destroy();
        } catch (err) {
          console.log("Error", err);
        }
        (instance.object = void 0),
          (instance.state = void 0),
          delete AudioManager.instances[soundId];
      }
    },
    cleanUp: function () {
      AudioManager.instances = {};
    },
    mute: function () {
      (this.muted = !0),
        _.isEmpty(AudioManager.instances) ||
          _.map(
            _.pluck(_.values(AudioManager.instances), "object"),
            function (obj) {
              return (obj.muted = !0), obj;
            }
          );
    },
    unmute: function () {
      (this.muted = !1),
        _.isEmpty(AudioManager.instances) ||
          _.map(
            _.pluck(_.values(AudioManager.instances), "object"),
            function (obj) {
              return (obj.muted = !1), obj;
            }
          );
    },
  });
var Controller = Class.extend({
    _id: "",
    _data: void 0,
    _type: void 0,
    _model: void 0,
    _repeat: 0,
    _index: -1,
    _loaded: !1,
    _error: !1,
    init: function (c, baseDir) {
      (this._type = c.type),
        (this._id = c.type + "." + c.id),
        this.initController(c, baseDir);
    },
    initController: function (c, baseDir) {
      ControllerManager.addError(
        "Subclasses of Controller should implement initController()"
      );
    },
    onLoad: function (data, model) {
      ControllerManager.addError(
        "Subclasses of Controller should implement onLoad()"
      );
    },
    reset: function () {
      this._index = -1;
    },
    setIndex: function (idx) {
      this._loaded &&
        (idx && (this._index = idx),
        this._index < -1 && (this._index = -1),
        this._index >= this._repeat && (this._index = this._repeat - 1));
    },
    incrIndex: function (incr) {
      this._loaded &&
        (incr || (incr = 1),
        (this._index = this._index + incr),
        this._index >= this._repeat && (this._index = this._repeat - 1));
    },
    decrIndex: function (decr) {
      this._loaded &&
        (decr || (decr = 1),
        (this._index = this._index - decr),
        this._index < -1 && (this._index = -1));
    },
    getModel: function () {
      var m;
      if (_.isArray(this._model)) {
        var index = this._index;
        index < 0 && (index = 0), (m = this._model[index]);
      } else m = this._model;
      return m;
    },
    getTemplate: function () {
      var t;
      if (this._model) {
        var m = this.getModel();
        m && m.template && (t = m.template);
      }
      return t;
    },
    getModelValue: function (param) {
      var val;
      if (this._model && param) {
        var m = this.getModel();
        if (m) {
          try {
            val = eval("m." + param);
          } catch (e) {}
          if (!val && m.model) {
            m = m.model;
            try {
              val = eval("m." + param);
            } catch (e) {}
          }
        }
      } else this._model && (val = this.getModel());
      return val;
    },
    setModelValue: function (name, val, param) {
      if (name) {
        var m = this.getModel();
        if (m) {
          var o = eval("m." + name);
          !o && m.model && (m = m.model);
          var expr = "m." + name;
          param && (expr += "." + param), (expr += " = " + JSON.stringify(val));
          try {
            eval(expr);
          } catch (e) {}
        }
      }
    },
    getCount: function () {
      return this._repeat;
    },
    hasNext: function () {
      return !!this._loaded && this._index < this._repeat - 1;
    },
    hasPrevious: function () {
      return !!this._loaded && this._index > 0;
    },
    next: function () {
      var d;
      return (
        this.hasNext() &&
          ((this._index += 1), (d = this._getCurrentModelItem())),
        d
      );
    },
    previous: function () {
      var d;
      return (
        this.hasPrevious() &&
          ((this._index -= 1), (d = this._getCurrentModelItem())),
        d
      );
    },
    current: function () {
      var d;
      return (
        this._loaded &&
          this._index >= 0 &&
          this._index <= this._repeat - 1 &&
          (d = this._getCurrentModelItem()),
        d
      );
    },
    evalItem: function () {
      ControllerManager.addError(
        "evalItem() is not supported by this Controller"
      );
    },
    feedback: function () {
      ControllerManager.addError(
        "feedback() is not supported by this Controller"
      );
    },
    _getCurrentModelItem: function () {
      var item;
      return (
        (item = _.isArray(this._model)
          ? this._model[this._index]
          : this._model),
        item && item.model && (item = item.model),
        item
      );
    },
  }),
  DataController = Controller.extend({
    initController: function (dc, baseDir) {
      if (dc.__cdata) {
        var data = _.isString(dc.__cdata) ? JSON.parse(dc.__cdata) : dc.__cdata;
        this.onLoad(data);
      } else DataGenerator.loadData(baseDir, dc.type, dc.id, this);
    },
    onLoad: function (data) {
      data
        ? (ControllerManager.registerControllerInstance(this._id, this),
          (this._data = data),
          (this._loaded = !0),
          data.model ? (this._model = data.model) : (this._model = data),
          _.isArray(this._model)
            ? (this._repeat = this._model.length)
            : (this._repeat = 1))
        : (this._error = !0);
    },
  });
ControllerManager.registerController("data", DataController);
var ItemController = Controller.extend({
  assessStartEvent: void 0,
  initController: function (ic, baseDir) {
    if (ic.__cdata) {
      var data = _.isString(ic.__cdata) ? JSON.parse(ic.__cdata) : ic.__cdata;
      ItemDataGenerator._onLoad(data, this);
    } else ItemDataGenerator.loadData(baseDir, ic.type, ic.id, this);
  },
  onLoad: function (data, model) {
    _.isObject(data) && _.isArray(model)
      ? (ControllerManager.registerControllerInstance(this._id, this),
        (this._data = data),
        (this._loaded = !0),
        (this._model = model),
        (this._repeat = this._model.length))
      : (this._error = !0);
  },
  next: function () {
    var d;
    try {
      if (this.hasNext()) {
        this._index += 1;
        var item = this._model[this._index];
        if (item) {
          this.resetItem(item),
            (void 0 !== item.model && null != item.model) || (item.model = {}),
            (d = item.model),
            (item.qid =
              _.isString(item.qid) && !_.isEmpty(item.qid) ? item.qid : "na");
          try {
            this.assessStartEvent = TelemetryService.assess(
              _.isString(item.identifier) && !_.isEmpty(item.identifier)
                ? item.identifier
                : item.qid.trim(),
              this._data.subject,
              item.qlevel,
              { maxscore: item.max_score }
            ).start();
          } catch (e) {
            EkstepRendererAPI.logErrorEvent(e, {
              type: "content",
              severity: "fatal",
              action: "transitionTo",
              objectId: item.identifier,
              objectType: "question",
            }),
              ControllerManager.addError(
                "ItemController.next() - OE_ASSESS_START error: " + e
              );
          }
        }
      } else this.resetItem(this._model[this._index]);
      return d;
    } catch (e) {
      EkstepRendererAPI.logErrorEvent(e, {
        type: "content",
        severity: "fatal",
        action: "transitionTo",
      }),
        showToaster("error", "Invalid questions"),
        console.warn("Item controller have some issue due to", e);
    }
  },
  resetItem: function (item) {
    item &&
      ("ftb" == item.type.toLowerCase()
        ? FTBEvaluator.reset(item)
        : "mcq" == item.type.toLowerCase() || "mmcq" == item.type.toLowerCase()
        ? MCQEvaluator.reset(item)
        : "mtf" == item.type.toLowerCase() && MTFEvaluator.reset(item));
  },
  evalItem: function () {
    try {
      var result,
        instance = this,
        item = this.getModel();
      if (GlobalContext.registerEval[item.type.toLowerCase()]) {
        result =
          GlobalContext.registerEval[item.type.toLowerCase()].evaluate(item);
      } else
        "ftb" == item.type.toLowerCase()
          ? (result = FTBEvaluator.evaluate(item))
          : "mcq" == item.type.toLowerCase() ||
            "mmcq" == item.type.toLowerCase()
          ? (result = MCQEvaluator.evaluate(item))
          : "mtf" == item.type.toLowerCase() &&
            (result = MTFEvaluator.evaluate(item));
      if (
        (result && (result.pass, (item.score = result.score)),
        !_.isUndefined(item.concepts))
      )
        var concepts =
          _.isArray(item.concepts) && _.isObject(item.concepts)
            ? item.concepts
            : JSON.parse(item.concepts);
      var data = {
        pass: result.pass,
        score: item.score,
        res: result.res,
        mmc: instance.getMMC(item, result),
        qindex: item.qindex,
        mc: _.without(_.pluck(concepts, "identifier"), void 0),
        qtitle: item.title || item.name,
        qdesc: item.description ? item.description : "",
      };
      EkstepRendererAPI.dispatchEvent(
        "renderer:assesment:eval",
        this.assessStartEvent
      ),
        TelemetryService.assessEnd(this.assessStartEvent, data);
    } catch (e) {
      console.warn("Item controller failed due to", e),
        EkstepRendererAPI.logErrorEvent(e, {
          type: "content",
          severity: "error",
          action: "eval",
          objectId: item.identifier,
          objectType: "question",
        }),
        showToaster("error", "Evaluation Fails"),
        ControllerManager.addError(
          "ItemController.evalItem() - OE_ASSESS_END error: " + e
        );
    }
    return console.info("Item Eval result:", result), result;
  },
  getMMC: function (item, result) {
    try {
      var mmc = [],
        obj = {};
      return (
        _.each(result.res, function (each) {
          Object.assign(obj, each);
        }),
        "string" == typeof item.responses &&
          (item.responses = JSON.parse(item.responses)),
        _.each(item.responses, function (each) {
          compareObject(obj, each.values) && (mmc = each.mmc);
        }),
        mmc
      );
    } catch (e) {
      console.warn("Item controller failed due to", e),
        EkstepRendererAPI.logErrorEvent(e, {
          type: "content",
          severity: "error",
          action: "eval",
          objectId: item.identifier,
          objectType: "question",
        }),
        showToaster("error", "Evaluation Fails"),
        ControllerManager.addError(
          "ItemController.evalItem() - OE_ASSESS_END error: " + e
        );
    }
  },
  feedback: function () {
    var message,
      feedback = this._data.feedback;
    if (feedback) {
      var score = 0;
      this._model &&
        (_.isArray(this._model)
          ? this._model.forEach(function (item) {
              item.score && (score += item.score);
            })
          : this._model.score && (score = this._model.score));
      var percent = parseInt((score / this._data.max_score) * 100);
      feedback.forEach(function (range) {
        var min = 0,
          max = 100;
        range.range &&
          (range.range.min && (min = range.range.min),
          range.range.max && (max = range.range.max)),
          percent >= min && percent <= max && (message = range.message);
      });
    }
    return message;
  },
});
ControllerManager.registerController("items", ItemController),
  (MCQEvaluator = {
    evaluate: function (item) {
      var result = {},
        pass = !0,
        score = 0,
        res = [];
      if (item) {
        var options = item.options;
        if (_.isArray(options)) {
          var isMCQ = !1,
            answersCount = 0;
          if (
            (options.forEach(function (opt) {
              1 == opt.answer && answersCount++;
            }),
            answersCount > 1)
          )
            isMCQ = !1;
          else {
            if (1 != answersCount)
              return void console.warn("Its not MCQ and MMCQ");
            isMCQ = !0;
          }
          options.forEach(function (opt) {
            if (opt.selected) {
              var tuple = {};
              (tuple[opt.value.resvalue] = "true"), res.push(tuple);
            }
            !0 === opt.answer
              ? opt.selected
                ? (score += _.isNumber(opt.score) ? opt.score : 1)
                : (pass = !1)
              : !0 === opt.selected &&
                ((pass = !1), 1 == isMCQ && delete opt.selected);
          });
        }
        pass ||
          ((result.feedback = item.feedback),
          item.partial_scoring || (score = 0));
      }
      return (
        (result.pass = pass), (result.score = score), (result.res = res), result
      );
    },
    reset: function (item) {
      if (item) {
        var options = item.options;
        _.isArray(options) &&
          options.forEach(function (opt) {
            opt.selected = void 0;
          });
      }
    },
  }),
  (FTBEvaluator = {
    evaluate: function (item) {
      var result = {},
        pass = !0,
        score = 0,
        res = [];
      if (item) {
        var answer = item.answer,
          passCount = 0,
          model = item.model || {};
        for (var ans in answer) {
          if (model[ans]) {
            var obj = {};
            (obj[ans] = model[ans]), res.push(obj);
          }
          if (
            void 0 !== model[ans] &&
            void 0 !== answer[ans] &&
            void 0 !== answer[ans].value
          ) {
            var isCorrect = this._isCorrectAnswer(
              answer[ans].value,
              model[ans]
            );
            if ((console.info(isCorrect, "isCorrect"), isCorrect)) {
              var s = answer[ans].score;
              (score += _.isNumber(s) ? s : 1), passCount++;
            } else passCount--;
            pass = passCount == res.length;
          } else console.warn("Answer is undefined", answer), (pass = !1);
        }
        pass ||
          ((result.feedback = item.feedback),
          item.partial_scoring || (score = 0));
      }
      return (
        (result.pass = pass), (result.score = score), (result.res = res), result
      );
    },
    _isCorrectAnswer: function (actual, given) {
      var isCorrect = !1;
      if (
        ((actual = _.isString(actual) ? actual.toLowerCase() : actual),
        (given = _.isString(given) ? given.toLowerCase() : given),
        _.isString(actual))
      )
        if (-1 < actual.indexOf(",")) {
          var actualList = actual.split(",");
          for (var index in actualList)
            if (actualList[index] == given) {
              isCorrect = !0;
              break;
            }
        } else isCorrect = actual == given;
      else isCorrect = actual == given;
      return isCorrect;
    },
    reset: function (item) {
      if (item) {
        var answer = item.answer,
          model = item.model || {};
        for (var ans in answer) model[ans] && (model[ans] = "");
      }
    },
  }),
  (MTFEvaluator = {
    evaluate: function (item) {
      var result = {},
        pass = !0,
        score = 0,
        res = [];
      if (item) {
        var options = item.rhs_options,
          selectedOptions = [];
        if (
          (_.isArray(options) &&
            _.each(options, function (opt) {
              if (void 0 !== opt.selected) {
                var obj = {};
                (obj[opt.value.resvalue] = opt.value.mapped),
                  res.push(obj),
                  selectedOptions.push(opt);
              }
              void 0 !== opt.answer
                ? opt.answer == opt.selected &&
                  (score += _.isNumber(opt.score) ? opt.score : 1)
                : void 0 !== opt.selected && (pass = !1);
            }),
          pass)
        ) {
          var ansMatched =
            (_.isEqual(
              _.pluck(selectedOptions, "selected"),
              _.pluck(selectedOptions, "answer")
            ) &&
              item.lhs_options.length == selectedOptions.length) ||
            !1;
          pass = ansMatched;
        }
        pass ||
          ((result.feedback = item.feedback),
          item.partial_scoring || (score = 0));
      }
      return (
        (result.pass = pass), (result.score = score), (result.res = res), result
      );
    },
    reset: function (item) {
      if (item) {
        var options = item.rhs_options;
        _.isArray(options) &&
          options.forEach(function (opt) {
            (opt.selected = void 0), delete opt.value.mapped;
          });
      }
    },
  }),
  (AnimationManager = {
    animationsCache: {},
    pluginMap: {},
    pluginObjMap: {},
    handle: function (action) {
      var instance;
      if (action && action.asset) {
        (instance = PluginManager.getPluginObject(action.asset)),
          !0 === action.parent &&
            instance._parent &&
            (instance = instance._parent);
        for (k in action)
          if (AnimationManager.isPlugin(k)) {
            var data = action[k],
              pluginObj = void 0;
            data.id && (pluginObj = AnimationManager.getPluginObject(data.id)),
              void 0 === pluginObj
                ? (pluginObj = AnimationManager.invokePlugin(
                    k,
                    action[k],
                    instance
                  ))
                : console.info("Playing from cache..."),
              pluginObj.animate(instance, action.cb);
          }
      }
    },
    widthHandler: function (event, plugin) {
      var sb = plugin.getBounds();
      (plugin.scaleY = plugin.height / sb.height),
        (plugin.scaleX = plugin.width / sb.width);
    },
    isPlugin: function (id) {
      return !!AnimationManager.pluginMap[id];
    },
    registerPlugin: function (id, plugin) {
      (AnimationManager.pluginMap[id] = plugin),
        createjs.EventDispatcher.initialize(plugin.prototype);
    },
    invokePlugin: function (id, data, plugin) {
      var p,
        pluginMap = AnimationManager.pluginMap;
      return (
        pluginMap[id]
          ? _.isArray(data)
            ? data.forEach(function (d) {
                new pluginMap[id](d, plugin);
              })
            : (p = new pluginMap[id](data, plugin))
          : AnimationManager.addError("No plugin found for - " + id),
        p
      );
    },
    registerPluginObject: function (pluginObj) {
      AnimationManager.pluginObjMap[pluginObj._id] = pluginObj;
    },
    getPluginObject: function (id) {
      return AnimationManager.pluginObjMap[id];
    },
    cleanUp: function () {
      AnimationManager.pluginObjMap = {};
    },
  }),
  (AssetManager = {
    strategy: void 0,
    stageAudios: {},
    init: function (themeData, basePath) {
      AssetManager.strategy = new LoadByStageStrategy(themeData, basePath);
    },
    getAsset: function (stageId, assetId) {
      return AssetManager.strategy.getAsset(stageId, assetId);
    },
    initStage: function (stageId, nextStageId, prevStageId, cb) {
      nextStageId && AssetManager.stopStageAudio(nextStageId),
        prevStageId && AssetManager.stopStageAudio(prevStageId),
        AssetManager.strategy.initStage(stageId, nextStageId, prevStageId, cb);
    },
    destroy: function () {
      _.isUndefined(AssetManager.strategy) ||
        (AssetManager.strategy.destroy(), (AssetManager.strategy = void 0)),
        (AssetManager.stageAudios = {});
    },
    stopStageAudio: function (stageId) {
      AssetManager.stageAudios[stageId] &&
        AssetManager.stageAudios[stageId].length > 0 &&
        AssetManager.stageAudios[stageId].forEach(function (audioAsset) {
          AudioManager.stop({
            stageId: stageId,
            asset: audioAsset,
            disableTelemetry: !0,
          });
        });
    },
    addStageAudio: function (stageId, audioId) {
      AssetManager.stageAudios[stageId] &&
        AssetManager.stageAudios[stageId].push(audioId);
    },
    loadAsset: function (stageId, assetId, path) {
      AssetManager.strategy
        ? AssetManager.strategy.loadAsset(stageId, assetId, path)
        : console.info(
            "asset not loaded because AssetManager not initialised or failed to initialize."
          );
    },
    getManifest: function (content) {
      var manifest = {};
      return (
        (manifest.media = []),
        _.each(content.stage, function (stage) {
          _.isUndefined(stage.manifest) ||
            _.isUndefined(stage.manifest.media) ||
            (_.isArray(stage.manifest.media) ||
              (stage.manifest.media = [stage.manifest.media]),
            _.each(stage.manifest.media, function (media) {
              manifest.media.push(media);
            }));
        }),
        manifest
      );
    },
  }),
  (CommandManager = {
    commandMap: {},
    registerCommand: function (id, command) {
      CommandManager.commandMap[id] = command;
    },
    handle: function (action) {
      try {
        if (
          ((action.stageInstanceId = _.clone(
            Renderer.theme._currentScene._stageInstanceId
          )),
          action.delay)
        )
          TimerManager.start(action);
        else {
          var cId = "";
          if (this._canHandle(action)) {
            this._setAnimationAsCommand(action),
              this._setActionAsset(action),
              _.isString(action.command) &&
                (cId = action.command.toUpperCase());
            var command = CommandManager.commandMap[cId];
            command
              ? new command(action)
              : console.warn("No command registered with name: ", cId);
          } else console.info("action ev-if failed. So, it is not called.");
        }
      } catch (e) {
        EkstepRendererAPI.logErrorEvent(e, {
          type: "asset",
          action: action.command,
          asset: action.asset,
          objectId: action.id,
        }),
          _.isUndefined(action)
            ? showToaster("error", "Command failed")
            : showToaster("error", action.command + ": Command failed"),
          console.warn(action + "Failed due to", e);
      }
    },
    _setAnimationAsCommand: function (action) {
      "animation" === action.type &&
        ((action.type = "command"), (action.command = "ANIMATE"));
    },
    _setDataAttributes: function (action) {
      var dataAttributes = {};
      _.keys(action).forEach(function (key) {
        var lowerKey = key.toLowerCase();
        "data-" == lowerKey.substring(0, 5) &&
          (dataAttributes[lowerKey.replace("data-", "")] = action[key]);
      }),
        (action.dataAttributes = dataAttributes),
        (action.stageId = Renderer.theme._currentStage);
    },
    _setActionAsset: function (action) {
      var plugin = PluginManager.getPluginObject(action.pluginId),
        stage = plugin._stage;
      (stage && null != stage) || (stage = plugin),
        stage &&
          "stage" === stage._type &&
          (action.param && (action.value = stage.getParam(action.param) || ""),
          action.asset || action.asset_param || action.asset_model
            ? action.asset_param
              ? (action.asset = stage.getParam(action.asset_param) || "")
              : action.asset_model &&
                (action.asset = stage.getModelValue(action.asset_model) || "")
            : (action.asset = plugin._id));
    },
    _canHandle: function (action) {
      var handle = !0,
        plugin = PluginManager.getPluginObject(action.pluginId);
      if (action["ev-if"]) {
        var expr = action["ev-if"].trim();
        "${" != expr.substring(0, 2) && (expr = "${" + expr),
          "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}"),
          (handle = plugin.evaluateExpr(expr));
      }
      return handle;
    },
    displayAllHtmlElements: function (visibility) {
      jQuery("#" + Renderer.divIds.gameArea)
        .children()
        .each(function () {
          jQuery(this).is("canvas") ||
            (visibility ? jQuery(this).show() : jQuery(this).hide());
        });
    },
  }),
  (EventManager = {
    registerEvents: function (plugin, data) {
      try {
        var events = void 0;
        data.events
          ? _.isArray(data.events)
            ? ((events = []),
              data.events.forEach(function (e) {
                events.push.apply(events, e.event);
              }))
            : (events = data.events.event)
          : (events = data.event),
          _.isArray(events)
            ? events.forEach(function (e) {
                EventManager.registerEvent(e, plugin);
              })
            : events && EventManager.registerEvent(events, plugin);
      } catch (e) {
        showToaster("error", "Event fails to register"),
          console.warn("Event fails to register due to", e);
      }
    },
    registerEvent: function (evt, plugin) {
      var register = !0;
      if (evt["ev-if"]) {
        var expr = evt["ev-if"].trim(),
          modelExpr = (expr = plugin.replaceExpressions(expr));
        "${" != expr.substring(0, 2) && (expr = "${" + expr),
          "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}"),
          (register = plugin.evaluateExpr(expr)),
          void 0 === register &&
            plugin._stage &&
            (register = plugin._stage.getModelValue(modelExpr));
      }
      if (register)
        if (
          (plugin.events.push(evt.type),
          _.contains(createjs.DisplayObject._MOUSE_EVENTS, evt.type))
        ) {
          var element = plugin._self;
          element &&
            (plugin instanceof HTMLPlugin || plugin._div
              ? ((element = plugin._self.htmlElement),
                (element.style.cursor = "pointer"))
              : (element.cursor = "pointer"),
            element.addEventListener(evt.type, function (event) {
              EventManager.processMouseTelemetry(evt, event, plugin),
                EventManager.handleActions(evt, plugin);
            }));
        } else
          plugin.on(evt.type, function () {
            EventManager.handleActions(evt, plugin);
          });
    },
    dispatchEvent: function (id, event) {
      var plugin = PluginManager.getPluginObject(id);
      _.contains(createjs.DisplayObject._MOUSE_EVENTS, event)
        ? plugin._self.dispatchEvent(event)
        : plugin.dispatchEvent(event);
    },
    handleActions: function (evt, plugin) {
      try {
        var disableTelemetry = !1;
        EventManager._setPluginId(evt.action, plugin._id);
        var unmuteActions = _.clone(evt.action);
        if (
          ((evt.action = EventManager._chainActions(evt.action, unmuteActions)),
          "click" !== evt.type && (disableTelemetry = !0),
          _.isArray(evt.action))
        ) {
          var data = JSON.parse(JSON.stringify(evt.action));
          delete evt.action,
            (evt.action = data),
            evt.action.forEach(function (a) {
              a.disableTelemetry = disableTelemetry;
              var action = _.clone(a);
              (action.pluginId = plugin._id), CommandManager.handle(action);
            });
        } else if (evt.action) {
          evt.action.disableTelemetry = disableTelemetry;
          var action = _.clone(evt.action);
          (action.pluginId = plugin._id), CommandManager.handle(action);
        }
      } catch (e) {
        _.isUndefined(evt)
          ? showToaster("error", "Event failed")
          : showToaster("error", evt.type + ": Event failed"),
          EkstepRendererAPI.logErrorEvent(e, {
            type: "asset",
            objectId: evt.action.id,
            asset: evt.action.asset,
            action: evt.action ? evt.action.command : "",
          }),
          console.warn("Event fails to handle due to", e);
      }
    },
    _setPluginId: function (actions, pluginId) {
      _.isArray(actions)
        ? actions.forEach(function (action) {
            action.pluginId = pluginId;
          })
        : actions && (actions.pluginId = pluginId);
    },
    _chainActions: function (actions, unmuteActions) {
      if (_.isArray(actions)) {
        var filter = _.filter(actions, function (action) {
          return action.with || action.after;
        });
        if (filter.length > 0) {
          var action = filter[0],
            parentId = action.after || action.with,
            p = _.findWhere(unmuteActions, { id: parentId });
          return (
            p
              ? (action.after &&
                  (p.children || (p.children = []), p.children.push(action)),
                action.with &&
                  (p.siblings || (p.siblings = []), p.siblings.push(action)),
                (actions = _.without(actions, action)))
              : console.warn("Didn't find action with id:", parentId),
            delete action.after,
            delete action.with,
            EventManager._chainActions(actions, unmuteActions)
          );
        }
        return actions;
      }
      return actions;
    },
    processMouseTelemetry: function (action, event, plugin) {
      var data = { type: event.type, x: event.stageX, y: event.stageY },
        type = TelemetryService.getMouseEventMapping()[action.type];
      EventManager.processAppTelemetry(action, type, plugin, data);
    },
    processAppTelemetry: function (action, type, plugin, data) {
      if (
        (plugin || (plugin = { _data: { id: "", asset: "" } }),
        action || (action = { disableTelemetry: !0 }),
        !0 !== action.disableTelemetry && type)
      ) {
        var id = plugin._data.id || plugin._data.asset;
        if ((id || (id = action.asset), !id)) {
          var actionObj = action.action;
          _.isArray(actionObj) &&
            actionObj.length >= 1 &&
            (actionObj = actionObj[0]),
            actionObj && (id = actionObj.asset);
        }
        if ((id || (id = plugin._type || "none"), id)) {
          var stageId = Renderer.theme ? Renderer.theme._currentStage : "";
          data && (data.stageId = stageId),
            TelemetryService.interact(
              type,
              id,
              type,
              data || { stageId: stageId }
            );
        }
      }
    },
  }),
  (OverlayManager = {
    _constants: {
      overlayNext: "overlayNext",
      overlayPrevious: "overlayPrevious",
      overlaySubmit: "overlaySubmit",
      overlayMenu: "overlayMenu",
      overlayReload: "overlayReload",
      overlayGoodJob: "overlayGoodJob",
      overlayTryAgain: "overlayTryAgain",
    },
    _eventsArray: [],
    _reloadInProgress: !1,
    _contentConfig: {},
    _stageConfig: {},
    init: function () {
      this.clean(),
        (this._reloadInProgress = !1),
        (this._eventsArray = [
          this._constants.overlayNext,
          this._constants.overlayPrevious,
          this._constants.overlaySubmit,
          this._constants.overlayMenu,
          this._constants.overlayReload,
          this._constants.overlayGoodJob,
          this._constants.overlayTryAgain,
        ]),
        this.setContentConfig(),
        EventBus.addEventListener(
          "actionNavigateSkip",
          this.skipAndNavigateNext,
          this
        ),
        EventBus.addEventListener(
          "actionNavigateNext",
          this.navigateNext,
          this
        ),
        EventBus.addEventListener(
          "actionNavigatePrevious",
          this.navigatePrevious,
          this
        ),
        EventBus.addEventListener(
          "actionDefaultSubmit",
          this.defaultSubmit,
          this
        ),
        EventBus.addEventListener("actionReload", this.actionReload, this),
        (_.isUndefined(EventBus.listeners.actionReplay) ||
          (_.isArray(EventBus.listeners.actionReplay) &&
            0 == EventBus.listeners.actionReplay.length)) &&
          EventBus.addEventListener("actionReplay", this.actionReplay, this);
    },
    setStageData: function () {
      _.isUndefined(Renderer.theme) ||
        EventBus.dispatch("sceneEnter", Renderer.theme._currentScene);
    },
    setContentConfig: function () {
      var evtLenth = this._eventsArray.length;
      for (i = 0; i < evtLenth; i++) {
        var val,
          eventName = this._eventsArray[i];
        _.isUndefined(Renderer.theme) ||
          _.isUndefined(Renderer.theme._currentScene) ||
          (val = Renderer.theme.getParam(eventName)),
          _.isUndefined(val) || (this._contentConfig[eventName] = val);
      }
      this.setStageConfig();
    },
    setStageConfig: function () {
      this._stageConfig = _.clone(this._contentConfig);
      var evtLenth = this._eventsArray.length;
      for (i = 0; i < evtLenth; i++) {
        var val,
          eventName = this._eventsArray[i];
        _.isUndefined(Renderer.theme) ||
          _.isUndefined(Renderer.theme._currentScene) ||
          (val = Renderer.theme._currentScene.getParam(eventName)),
          _.isUndefined(val) &&
            (_.isUndefined(this._contentConfig[eventName]) ||
              (val = this._contentConfig[eventName])),
          _.isUndefined(val) || (this._stageConfig[eventName] = val);
      }
      this.setStageData(),
        this.handleNext(),
        this.handlePrevious(),
        this.handleSubmit();
    },
    handleNext: function () {
      var eventName = this._constants.overlayNext,
        val = this._stageConfig[eventName];
      EventBus.dispatch(eventName, val),
        this.handleEcmlElements(eventName, val);
    },
    handlePrevious: function () {
      if (!_.isUndefined(Renderer.theme._currentScene)) {
        var eventName = this._constants.overlayPrevious,
          val = this._stageConfig[eventName],
          navigateToStage = this.getNavigateTo("previous");
        "on" == val &&
          (_.isUndefined(navigateToStage)
            ? ((val = "disable"),
              Renderer.theme._currentScene.isItemScene() &&
                Renderer.theme._currentScene._stageController.hasPrevious() &&
                (val = "enable"))
            : (val = "enable")),
          EventBus.dispatch(eventName, val),
          this.handleEcmlElements(eventName, val);
      }
    },
    handleSubmit: function () {
      var eventName = this._constants.overlaySubmit,
        val = this._stageConfig[eventName];
      if (
        !_.isUndefined(Renderer.theme) &&
        _.isUndefined(Renderer.theme.getParam(eventName)) &&
        _.isUndefined(Renderer.theme._currentScene.getParam(eventName))
      ) {
        val = EkstepRendererAPI.getGlobalConfig().overlay.showSubmit
          ? "on"
          : "off";
      }
      if (
        _.isUndefined(Renderer.theme) ||
        _.isUndefined(Renderer.theme._currentScene) ||
        !Renderer.theme._currentScene.isItemScene()
      )
        EventBus.dispatch(eventName, "off");
      else {
        if ("on" == val) {
          val =
            !0 === Renderer.theme._currentScene.isReadyToEvaluate()
              ? "enable"
              : "disable";
        }
        EventBus.dispatch(eventName, val),
          this.handleEcmlElements(eventName, val);
      }
    },
    showFeeback: function (showOverlayGoodJob) {
      var returnVal = !0;
      return (
        showOverlayGoodJob
          ? ((returnVal = "off" != this._stageConfig.overlayGoodJob),
            this.showGoodJobFb(returnVal))
          : ((returnVal = "off" != this._stageConfig.overlayTryAgain),
            this.showTryAgainFb(returnVal)),
        returnVal
      );
    },
    showGoodJobFb: function (value) {
      1 == value
        ? (AudioManager.play({
            stageId: Renderer.theme._currentStage,
            asset: "goodjob_sound",
          }),
          EventBus.dispatch(this._constants.overlayGoodJob, "on"))
        : EventBus.dispatch(this._constants.overlayGoodJob, "off");
    },
    showTryAgainFb: function (value) {
      1 == value
        ? (AudioManager.play({
            stageId: Renderer.theme._currentStage,
            asset: "tryagain_sound",
          }),
          EventBus.dispatch(this._constants.overlayTryAgain, "on"))
        : EventBus.dispatch(this._constants.overlayTryAgain, "off");
    },
    navigateNext: function () {
      try {
        if (
          _.isUndefined(Renderer.theme) ||
          _.isUndefined(Renderer.theme._currentScene)
        )
          return;
        this.logNavigationTelInteract("next");
        if (Renderer.theme._currentScene.isItemScene())
          return void this.defaultSubmit();
        this.skipAndNavigateNext({ target: "next" });
      } catch (e) {
        showToaster("error", "Current scene having some issue"),
          EkstepRendererAPI.logErrorEvent(e, {
            severity: "fatal",
            type: "content",
            action: "transitionTo",
          }),
          console.warn("Fails to navigate to next due to", e);
      }
    },
    skipAndNavigateNext: function (param) {
      try {
        var actionType = param ? param.target : "skip";
        this.clean();
        var navigateTo = this.getNavigateTo("next");
        if (void 0 === navigateTo) {
          if (_.isUndefined(Renderer.theme._currentScene)) return;
          Renderer.theme._currentScene.isItemScene() &&
          !_.isUndefined(Renderer.theme._currentScene._stageController) &&
          Renderer.theme._currentScene._stageController.hasNext()
            ? this.defaultNavigation(actionType, navigateTo)
            : this.moveToEndPage();
        } else this.defaultNavigation(actionType, navigateTo);
      } catch (e) {
        showToaster("error", "Current scene having some issue"),
          EkstepRendererAPI.logErrorEvent(e, {
            severity: "fatal",
            type: "content",
            action: "transitionTo",
          }),
          console.warn("Fails to skip and navigate due to", e);
      }
    },
    moveToEndPage: function () {
      console.info("redirecting to endpage."),
        (Renderer.theme._currentStage = void 0),
        EkstepRendererAPI.dispatchEvent("renderer:content:end"),
        EkstepRendererAPI.dispatchEvent("renderer:telemetry:end");
      var stage = Renderer.theme._currentScene;
      Renderer.theme.setParam(stage.getStagestateKey(), stage._currentState),
        EkstepRendererAPI.removeHtmlElements(),
        AudioManager.stopAll();
    },
    clean: function () {
      EventBus.removeEventListener(
        "actionNavigateSkip",
        this.skipAndNavigateNext,
        this
      ),
        EventBus.removeEventListener(
          "actionNavigateNext",
          this.navigateNext,
          this
        ),
        EventBus.removeEventListener(
          "actionNavigatePrevious",
          this.navigatePrevious,
          this
        ),
        EventBus.removeEventListener(
          "actionDefaultSubmit",
          this.defaultSubmit,
          this
        );
    },
    reset: function () {
      this.clean(), (this._contentConfig = {}), (this._stageConfig = {});
    },
    navigatePrevious: function () {
      try {
        if (
          _.isUndefined(Renderer.theme) ||
          _.isUndefined(Renderer.theme._currentScene)
        )
          return;
        var navigateToStage = this.getNavigateTo("previous");
        if (
          (this.logNavigationTelInteract("previous"),
          _.isUndefined(navigateToStage) &&
            (!Renderer.theme._currentScene.isItemScene() ||
              !Renderer.theme._currentScene._stageController.hasPrevious()))
        ) {
          var rendererData = EkstepRendererAPI.getContentData(),
            currentStage = getCurrentStageId();
          return void (
            rendererData.startStage === currentStage && contentExitCall()
          );
        }
        var navigateTo = this.getNavigateTo("previous");
        if (_.isUndefined(Renderer.theme._currentScene)) return;
        this.defaultNavigation("previous", navigateTo);
      } catch (e) {
        EkstepRendererAPI.logErrorEvent(e, {
          severity: "fatal",
          type: "content",
          action: "transitionTo",
        }),
          showToaster("error", "Stage having some issue"),
          console.warn("Fails to navigate to previous due to", e);
      }
    },
    logNavigationTelInteract: function (navType) {
      if (Renderer.theme._currentScene) {
        var navToStageId,
          data = { stageId: Renderer.theme._currentScene.id };
        if (
          (!_.isUndefined(Renderer.theme._currentScene.params) &&
            Renderer.theme._currentScene.params[navType] &&
            (navToStageId = Renderer.theme._currentScene.params[navType]),
          navToStageId)
        ) {
          var stageLoader = AssetManager.strategy.loaders[navToStageId],
            perLoaded = stageLoader
              ? Math.round(100 * stageLoader.progress)
              : "100";
          data.extra = {
            stageProgress: {
              id: navToStageId,
              progress: perLoaded > 100 ? "100%" : perLoaded + "%",
            },
          };
        } else
          data.extra = {
            stageProgress: {
              id: "next" == navType ? "ContentApp-EndScreen" : "blank",
              progress: "100%",
            },
          };
        TelemetryService.interact("TOUCH", navType, "TOUCH", data),
          (window.PLAYER_STAGE_START_TIME = Date.now() / 1e3);
      }
    },
    showOrHideEcmlElement: function (id, showEle) {
      var plugin = PluginManager.getPluginObject(id);
      plugin && ("off" == showEle ? plugin.show() : plugin.hide());
    },
    handleEcmlElements: function (eventName, val) {
      if (
        !_.isUndefined(Renderer.theme) &&
        !_.isUndefined(Renderer.theme._currentScene)
      ) {
        var stage_data = Renderer.theme.getStagesToPreLoad(
          Renderer.theme._currentScene._data
        );
        stage_data.next, stage_data.prev;
      }
      switch (eventName) {
        case "overlayNext":
          this.showOrHideEcmlElement("next", val),
            this.showOrHideEcmlElement("nextContainer", val);
          break;
        case "overlayPrevious":
          this.showOrHideEcmlElement("previous", val),
            this.showOrHideEcmlElement("previousContainer", val);
          break;
        case "overlaySubmit":
          this.showOrHideEcmlElement("validate", val);
          break;
        case "overlayMenu":
        case "overlayReload":
        case "overlayGoodJob":
        case "overlayTryAGain":
          break;
        default:
          console.log("Default case got called..");
      }
    },
    getNavigateTo: function (navType) {
      var stageParams = [],
        stageId = void 0;
      if (
        !_.isUndefined(Renderer.theme) &&
        !_.isUndefined(Renderer.theme._currentScene) &&
        !_.isEmpty(Renderer.theme._currentScene._data.param)
      ) {
        stageParams = _.isArray(Renderer.theme._currentScene._data.param)
          ? Renderer.theme._currentScene._data.param
          : [Renderer.theme._currentScene._data.param];
        var navParam = _.findWhere(stageParams, { name: navType });
        navParam && (stageId = navParam.value);
      }
      return stageId;
    },
    defaultSubmit: function () {
      var action = {
        type: "command",
        command: "eval",
        asset: Renderer.theme._currentStage,
        pluginId: Renderer.theme._currentStage,
      };
      (action.success = "correct_answer"),
        (action.failure = "wrong_answer"),
        CommandManager.handle(action);
    },
    defaultNavigation: function (navType, navigateTo) {
      var action = {
        asset: Renderer.theme._id,
        command: "transitionTo",
        duration: "100",
        ease: "linear",
        effect: "fadeIn",
        type: "command",
        pluginId: Renderer.theme._id,
        value: navigateTo,
      };
      (navType = "skip" === navType ? "next" : navType),
        (action.transitionType = navType),
        (window.PLAYER_STAGE_START_TIME = Date.now() / 1e3),
        CommandManager.handle(action);
    },
    actionReload: function () {
      if (!this._reloadInProgress) {
        var plugin,
          currentStage = Renderer.theme._currentStage;
        (this._reloadInProgress = !0),
          setTimeout(function () {
            (plugin = PluginManager.getPluginObject(currentStage)) &&
              plugin.reload({
                type: "command",
                command: "reload",
                duration: "100",
                ease: "linear",
                effect: "fadeIn",
                asset: currentStage,
              });
          }, 500),
          TelemetryService.interact("TOUCH", "gc_reload", "TOUCH", {
            stageId: currentStage,
          });
      }
    },
    actionReplay: function (data) {
      var version = TelemetryService.getGameVer();
      GlobalContext.currentContentId &&
        version &&
        startTelemetry(GlobalContext.currentContentId, version),
        EkstepRendererAPI.removeHtmlElements(),
        Renderer.theme.reRender();
    },
  }),
  (LoadByStageStrategy = Class.extend({
    MAX_CONNECTIONS: 50,
    assetMap: {},
    spriteSheetMap: {},
    commonAssets: [],
    templateAssets: [],
    loaders: {},
    commonLoader: void 0,
    templateLoader: void 0,
    stageManifests: {},
    init: function (themeData, basePath) {
      var instance = this;
      createjs.Sound.registerPlugins([
        createjs.WebAudioPlugin,
        createjs.CordovaAudioPlugin,
        createjs.HTMLAudioPlugin,
      ]),
        (createjs.Sound.alternateExtensions = ["mp3"]),
        this.destroy(),
        this.loadAppAssets(),
        _.isUndefined(themeData.manifest) ||
        _.isUndefined(themeData.manifest.media)
          ? console.log("==== manifest media not defined ====")
          : (_.isArray(themeData.manifest.media) ||
              (themeData.manifest.media = [themeData.manifest.media]),
            themeData.manifest.media.forEach(function (media) {
              if (media && media.src) {
                if ("http" != media.src.substring(0, 4))
                  if (isbrowserpreview) {
                    var globalConfig = EkstepRendererAPI.getGlobalConfig();
                    media.src = globalConfig.host + media.src;
                  } else media.src = basePath + media.src;
                if ("json" == media.type)
                  instance.commonAssets.push(_.clone(media));
                else if ("spritesheet" == media.type) {
                  var imgId = media.id + "_image";
                  instance.commonAssets.push({
                    id: imgId,
                    src: media.src,
                    type: "image",
                  }),
                    (media.images = []);
                  var animations = {};
                  if (media.animations)
                    for (k in media.animations)
                      animations[k] = JSON.parse(media.animations[k]);
                  (media.animations = animations),
                    (instance.spriteSheetMap[media.id] = media);
                } else
                  "audiosprite" == media.type &&
                    (_.isArray(media.data.audioSprite) ||
                      (media.data.audioSprite = [media.data.audioSprite])),
                    ("true" !== media.preload && !0 !== media.preload) ||
                      instance.commonAssets.push(_.clone(media)),
                    (instance.assetMap[media.id] = media);
              }
            }));
      var stages = themeData.stage;
      _.isArray(stages) || (stages = [stages]),
        stages.forEach(function (stage) {
          (instance.stageManifests[stage.id] = []),
            (AssetManager.stageAudios[stage.id] = []),
            instance.populateAssets(
              stage,
              stage.id,
              stage.preload,
              themeData.startStage
            );
        }),
        instance.loadCommonAssets();
      var templates = themeData.template;
      _.isArray(templates) || (templates = [templates]),
        templates.forEach(function (template) {
          instance.populateTemplateAssets(template);
        }),
        instance.loadTemplateAssets();
    },
    loadAppAssets: function () {
      var localPath =
        "undefined" == typeof cordova ? "" : "file:///android_asset/www/";
      this.commonAssets.push({
        id: "goodjob_sound",
        src: localPath + "assets/sounds/goodjob.mp3",
      }),
        this.commonAssets.push({
          id: "tryagain_sound",
          src: localPath + "assets/sounds/letstryagain.mp3",
        });
    },
    populateAssets: function (data, stageId, preload, startStageId) {
      var instance = this;
      for (k in data) {
        var plugins = data[k];
        _.isArray(plugins) || (plugins = [plugins]),
          (PluginManager.isPlugin(k) && "g" == k) || "manifest" == k
            ? plugins.forEach(function (plugin) {
                instance.populateAssets(plugin, stageId, preload, startStageId);
              })
            : plugins.forEach(function (plugin) {
                if (!_.isNull(plugin)) {
                  var assetId = plugin.asset || plugin.audio || plugin.assetId;
                  if (assetId) {
                    var asset = instance.assetMap[assetId];
                    asset &&
                      (!0 === preload &&
                        stageId !== startStageId &&
                        instance.commonAssets.push(_.clone(asset)),
                      instance.stageManifests[stageId].push(_.clone(asset)));
                  }
                }
              });
      }
    },
    populateTemplateAssets: function (data) {
      var instance = this;
      for (k in data) {
        var plugins = data[k];
        _.isArray(plugins) || (plugins = [plugins]),
          PluginManager.isPlugin(k) && "g" == k
            ? plugins.forEach(function (plugin) {
                instance.populateTemplateAssets(plugin);
              })
            : plugins.forEach(function (plugin) {
                if (plugin && plugin.asset) {
                  var asset = instance.assetMap[plugin.asset];
                  asset && instance.templateAssets.push(_.clone(asset));
                }
              });
      }
    },
    getAsset: function (stageId, assetId) {
      var asset = void 0;
      if (
        (this.loaders[stageId] &&
          (asset = this.loaders[stageId].getResult(assetId)),
        asset || (asset = this.commonLoader.getResult(assetId)),
        asset || (asset = this.templateLoader.getResult(assetId)),
        asset || (asset = this.spriteSheetMap[assetId]),
        !asset)
      ) {
        if (this.assetMap[assetId])
          return (
            console.error(
              "Asset not found. Returning - " + this.assetMap[assetId].src
            ),
            this.assetMap[assetId].src
          );
        console.error(
          '"' + assetId + '" Asset not found. Please check index.ecml.'
        ),
          EkstepRendererAPI.logErrorEvent(
            { message: "Asset not found. Please check index.ecml" },
            {
              type: "content",
              severity: "error",
              action: "play",
              asset: assetId,
              objectId: assetId,
            }
          );
      }
      return asset;
    },
    initStage: function (stageId, nextStageId, prevStageId, cb) {
      var instance = this;
      this.loadStage(stageId, cb);
      var deleteStages = _.difference(_.keys(instance.loaders), [
        stageId,
        nextStageId,
        prevStageId,
      ]);
      deleteStages.length > 0 &&
        deleteStages.forEach(function (stageId) {
          instance.destroyStage(stageId);
        }),
        nextStageId && instance.loadStage(nextStageId),
        prevStageId && instance.loadStage(prevStageId),
        (instance.loaders = _.pick(
          instance.loaders,
          stageId,
          nextStageId,
          prevStageId
        ));
    },
    loadStage: function (stageId, callback) {
      var instance = this,
        currentStageId = Renderer.theme._currentStage;
      if (
        (console.log("curentStageID", currentStageId),
        instance.loaders[stageId])
      ) {
        var stgLoader = instance.loaders[stageId];
        instance.loaderWithPercentage(stageId, stgLoader);
      } else {
        var mediaList = JSON.parse(
          JSON.stringify(instance.stageManifests[stageId])
        );
        if (
          ((mediaList = _.uniq(mediaList, function (media) {
            return media.assetId || media.id;
          })),
          (mediaList = instance.filterMedia(mediaList, "video")),
          _.isArray(mediaList) && mediaList.length > 0)
        ) {
          var loader = this._createLoader();
          instance.loaderWithPercentage(stageId, loader),
            (loader.stageLoaded = !1),
            loader.on(
              "complete",
              function () {
                loader.stageLoaded = !0;
              },
              null,
              !0
            ),
            loader.on("error", function (evt) {
              console.error("StageLoader Asset preload error", evt);
            }),
            loader.setMaxConnections(instance.MAX_CONNECTIONS),
            loader.installPlugin(createjs.Sound),
            loader.loadManifest(mediaList, !0),
            (instance.loaders[stageId] = loader);
        }
      }
      this.handleStageCallback(stageId, callback);
    },
    handleStageCallback: function (stageId, cb) {
      var instance = this;
      if (cb)
        if (
          _.isUndefined(this.loaders[stageId]) ||
          this.loaders[stageId].stageLoaded
        ) {
          var data =
            Renderer.theme && Renderer.theme._currentStage
              ? Renderer.theme._currentStage
              : stageId;
          stageId == data && (EventBus.dispatch(data + "_assetsLoaded"), cb());
        } else
          this.loaders[stageId].on(
            "complete",
            function () {
              instance.loaders[stageId].stageLoaded = !0;
              var data =
                Renderer.theme && Renderer.theme._currentStage
                  ? Renderer.theme._currentStage
                  : stageId;
              stageId == data &&
                (EventBus.dispatch(data + "_assetsLoaded"), cb());
            },
            null,
            !0
          );
    },
    filterMedia: function (list, mediaType) {
      return (list = _.filter(list, function (obj) {
        return obj.type != mediaType;
      }));
    },
    loadCommonAssets: function () {
      var loader = this._createLoader();
      loader.setMaxConnections(this.MAX_CONNECTIONS),
        loader.installPlugin(createjs.Sound),
        (this.commonAssets = this.filterMedia(this.commonAssets, "video")),
        loader.loadManifest(this.commonAssets, !0),
        loader.on("error", function (evt) {
          console.error("CommonLoader - asset preload error", evt);
        }),
        (this.commonLoader = loader);
    },
    loadTemplateAssets: function () {
      var loader = this._createLoader();
      loader.setMaxConnections(this.MAX_CONNECTIONS),
        (this.templateAssets = this.filterMedia(this.templateAssets, "video")),
        loader.installPlugin(createjs.Sound),
        loader.loadManifest(this.templateAssets, !0),
        loader.on("error", function (evt) {
          console.error("TemplateLoader - asset preload error", evt);
        }),
        (this.templateLoader = loader);
    },
    loadAsset: function (stageId, assetId, path, cb) {
      if (_.isUndefined(assetId) || _.isUndefined(path))
        return void console.warn(
          "Asset can't be loaded: AssetId - " + assetId + ",  Path - " + path
        );
      var loader = this.loaders[stageId];
      if (loader)
        loader.installPlugin(createjs.Sound),
          loader.on(
            "complete",
            function () {
              (loader.stageLoaded = !0), cb && cb();
            },
            this
          ),
          loader.loadFile({ id: assetId, src: path }),
          (loader.stageLoaded = !1);
      else {
        loader = this._createLoader();
        var instance = this;
        loader.on(
          "complete",
          function (event) {
            _.isUndefined(instance.loaders) && (instance.loaders = {}),
              (instance.loaders[stageId] = event.target),
              (instance.loaders[stageId].stageLoaded = !0),
              cb && cb();
          },
          this
        ),
          loader.on("error", function (evt) {
            console.error("AssetLoader - asset preload error", evt);
          }),
          loader.loadFile({ id: assetId, src: path }),
          (loader.stageLoaded = !1);
      }
    },
    destroy: function () {
      var instance = this;
      for (k in instance.loaders) instance.destroyStage(k);
      (instance.commonAssets = []),
        (instance.assetMap = {}),
        (instance.loaders = {}),
        (instance.stageManifests = {});
      try {
        createjs.Sound.removeAllSounds();
      } catch (err) {}
    },
    destroyStage: function (stageId) {
      this.loaders[stageId] &&
        (this.loaders[stageId].destroy(),
        AssetManager.stageAudios[stageId].forEach(function (audioAsset) {
          AudioManager.destroy(stageId, audioAsset);
        }));
    },
    _createLoader: function () {
      var regex = new RegExp("^(http|https)://", "i"),
        globalConfig = EkstepRendererAPI.getGlobalConfig();
      return regex.test(globalConfig.basepath)
        ? new createjs.LoadQueue(!0, null, !0)
        : new createjs.LoadQueue(!1);
    },
    isStageAssetsLoaded: function (stageId) {
      JSON.parse(JSON.stringify(this.stageManifests[stageId]));
      return (
        !(
          _.isUndefined(this.loaders[stageId]) ||
          !this.loaders[stageId].stageLoaded
        ) || !!_.isUndefined(this.loaders[stageId])
      );
    },
    loaderWithPercentage: function (currentStageId, loader) {
      if (Renderer.theme._currentStage == currentStageId) {
        $("svg", ".preloader-wrapper-area").remove(),
          $("div", ".preloader-wrapper-area").remove();
        var bar = new ProgressBar.Circle(".preloader-wrapper-area", {
          color: "#aaa",
          strokeWidth: 8,
          trailWidth: 4,
          easing: "easeInOut",
          text: { autoStyleContainer: !1 },
          from: { color: "#aaa", width: 2 },
          to: { color: "#0789d8", width: 6 },
          step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color),
              circle.path.setAttribute("stroke-width", state.width);
            var value = Math.round(100 * circle.value());
            0 === value ? circle.setText("") : circle.setText(value + "%");
          },
        });
        (bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'),
          (bar.text.style.fontSize = "1rem"),
          (bar.text.style.color = "black"),
          currentStageId &&
            loader.on("progress", function () {
              if (
                (loader.stageLoaded || !loader.stageLoaded) &&
                currentStageId === Renderer.theme._currentStage
              ) {
                loader.getItems(loader.stageLoaded);
              }
              (progressPercent = loader.progress),
                progressPercent < 1 &&
                  document.body.contains(bar.path) &&
                  bar.animate(loader.progress);
            });
      }
    },
  })),
  (RecorderManager = {
    recordedAsset: "current_rec",
    mediaInstance: void 0,
    recording: !1,
    appDataDirectory: void 0,
    mediaFiles: [],
    _autostop: {
      default_success: "rec_stopped",
      default_failure: "rec_stop_failed",
      method: void 0,
      action: void 0,
    },
    _root: void 0,
    init: function () {
      document.addEventListener("deviceready", function () {
        window.requestFileSystem(
          LocalFileSystem.PERSISTENT,
          0,
          function (fileSystem) {
            RecorderManager._root = fileSystem.root;
          },
          function (e) {
            console.log(
              "[ERROR] Problem setting up root filesystem for running! Error to follow."
            ),
              console.log(JSON.stringify(e));
          }
        ),
          (RecorderManager.appDataDirectory =
            cordova.file.externalDataDirectory || cordova.file.dataDirectory);
      });
    },
    startRecording: function (action) {
      AudioManager.stopAll();
      var plugin = PluginManager.getPluginObject(action.asset),
        stagePlugin = plugin._stage || plugin,
        stageId = stagePlugin._id,
        path = RecorderManager._getFilePath(stageId);
      RecorderManager.recording ||
        (speech.startRecording(path, function (response) {
          "success" == response.status && action.success
            ? stagePlugin.dispatchEvent(action.success)
            : "error" == response.status &&
              action.failure &&
              stagePlugin.dispatchEvent(action.failure);
        }),
        RecorderManager._setAutostopAction(action),
        (RecorderManager._autostop.method = setTimeout(
          function () {
            RecorderManager.stopRecording(RecorderManager._autostop.action);
          },
          action.timeout ? action.timeout : 1e4
        ))),
        (RecorderManager.recording = !0);
    },
    stopRecording: function (action) {
      1 == RecorderManager.recording &&
        speech.stopRecording(function (response) {
          if (
            ((RecorderManager.recording = !1),
            "success" == response.status && RecorderManager._cleanRecording(),
            void 0 !== action && action.asset)
          ) {
            var plugin = PluginManager.getPluginObject(action.asset),
              stagePlugin = plugin._stage || plugin,
              stageId = stagePlugin._id;
            if ("success" == response.status) {
              var currentRecId = RecorderManager.recordedAsset;
              RecorderManager.switchToCordova();
              try {
                AssetManager.loadAsset(
                  stageId,
                  currentRecId,
                  response.filePath
                ),
                  AudioManager.destroy(stageId, currentRecId),
                  action.success && stagePlugin.dispatchEvent(action.success);
              } catch (err) {
                console.log(
                  "Error Occurred while trying to load to recorded audio"
                );
              }
              RecorderManager.switchBackToDefault();
            } else
              "error" == response.status &&
                action.failure &&
                stagePlugin.dispatchEvent(action.failure);
          }
        });
    },
    switchToCordova: function () {
      return (
        createjs.Sound.activePlugin instanceof createjs.CordovaAudioPlugin ==
          0 &&
        (void 0 == createjs.Sound.activePlugin_Cordova &&
          (createjs.Sound.activePlugin_Cordova =
            new createjs.CordovaAudioPlugin()),
        (createjs.Sound.activePlugin_Default = createjs.Sound.activePlugin),
        (createjs.Sound.activePlugin = createjs.Sound.activePlugin_Cordova),
        !0)
      );
    },
    switchBackToDefault: function () {
      return (
        !!createjs.Sound.activePlugin_Default &&
        ((createjs.Sound.activePlugin = createjs.Sound.activePlugin_Default),
        !0)
      );
    },
    processRecording: function (action) {
      var plugin = PluginManager.getPluginObject(action.asset),
        stagePlugin = plugin._stage || plugin,
        lineindex = stagePlugin.evaluateExpr(action.dataAttributes.lineindex);
      speech.processRecording(lineindex, null, function (response) {
        "success" == response.status && response.result
          ? (console.info(
              "Processed recording result:",
              JSON.stringify(response)
            ),
            1 == response.result.totalScore
              ? action.success && stagePlugin.dispatchEvent(action.success)
              : action.failure && stagePlugin.dispatchEvent(action.failure))
          : (console.info(
              "Error while processing audio:",
              JSON.stringify(response)
            ),
            action.failure && stagePlugin.dispatchEvent(action.failure));
      });
    },
    _getFilePath: function (stageId) {
      var currentDate = new Date(),
        path = "";
      return (
        RecorderManager.appDataDirectory &&
          (path += RecorderManager.appDataDirectory),
        GlobalContext &&
          GlobalContext.user &&
          GlobalContext.user.uid &&
          (path = path + GlobalContext.user.uid + "_"),
        TelemetryService &&
          TelemetryService._gameData &&
          TelemetryService._gameData.id &&
          (path = path + TelemetryService._gameData.id + "_"),
        (path = path + stageId + "_" + currentDate.getTime() + ".wav"),
        RecorderManager.mediaFiles.push(path),
        path
      );
    },
    _getTimeoutEventName: function (status, action) {
      var eventName = "";
      return (
        void 0 !== action["timeout-" + status]
          ? (eventName = action["timeout-" + status])
          : Renderer.theme._currentScene.appEvents.indexOf(
              RecorderManager._autostop["default_" + status]
            ) > -1
          ? (eventName = RecorderManager._autostop["default_" + status])
          : console.error(
              "Invalid stopRecord events for timeout:",
              Renderer.theme._currentScene.appEvents
            ),
        eventName
      );
    },
    _setAutostopAction: function (startAction) {
      var stopAction = _.clone(startAction);
      (stopAction.success = RecorderManager._getTimeoutEventName(
        "success",
        stopAction
      )),
        (stopAction.failure = RecorderManager._getTimeoutEventName(
          "failure",
          stopAction
        )),
        (RecorderManager._autostop.action = stopAction);
    },
    _cleanRecording: function () {
      clearTimeout(RecorderManager._autostop.method),
        (RecorderManager._autostop.method = void 0),
        (RecorderManager._autostop.action = void 0);
    },
  }),
  (TimerManager = {
    instances: {},
    start: function (action) {
      var delay = action.delay || 0,
        stageId = Renderer.theme._currentStage,
        instance = setTimeout(function () {
          stageId == Renderer.theme._currentStage &&
            CommandManager.handle(_.omit(action, "delay"));
        }, delay);
      console.info(
        "action: " +
          (action.command || action.type) +
          " delayed by " +
          action.delay +
          "ms."
      ),
        TimerManager.instances[stageId]
          ? TimerManager.instances[stageId].push({
              timeout: instance,
              action: action,
            })
          : (TimerManager.instances[stageId] = [
              { timeout: instance, action: action },
            ]);
    },
    stop: function () {},
    pause: function () {},
    resume: function () {},
    stopAll: function (stageId) {
      var timoutInsts = TimerManager.instances[stageId];
      timoutInsts &&
        _.isArray(timoutInsts) &&
        (timoutInsts.forEach(function (inst) {
          clearTimeout(inst.timeout);
        }),
        delete TimerManager.instances[stageId]);
    },
    destroy: function () {
      var instances = TimerManager.instances;
      for (stageId in instances) TimerManager.stopAll(stageId);
      TimerManager.instances = {};
    },
  });
var DataGenerator = {
    _loaderMap: {},
    loadData: function (baseDir, type, id, controller, dataType) {
      var folder = type;
      dataType = dataType ? dataType.toLowerCase() : "json";
      var filename = id + "." + dataType,
        fullPath = baseDir + "/" + folder + "/" + filename;
      jQuery
        .getJSON(fullPath, function (data) {
          DataGenerator._onLoad(data, controller);
        })
        .fail(function () {
          console.error("error while fetching json: " + fullPath);
        });
    },
    _onLoad: function (data, controller) {
      controller.onLoad(data);
    },
  },
  ItemDataGenerator = {
    _loaderMap: {},
    loadData: function (baseDir, type, id, controller) {
      var folder = type,
        filename = id + ".json",
        fullPath = baseDir + "/" + folder + "/" + filename;
      jQuery
        .getJSON(fullPath, function (data) {
          ItemDataGenerator._onLoad(data, controller);
        })
        .fail(function () {
          console.error("error while fetching json: " + fullPath);
        });
    },
    _onLoad: function (data, controller) {
      var model = ItemDataGenerator._getItems(data);
      (data = _.omit(data, "items")), controller.onLoad(data, model);
    },
    _getItems: function (data) {
      var list = [];
      if (_.isObject(data)) {
        var total_items = data.total_items,
          item_sets = data.item_sets,
          items = data.items,
          shuffle = !0,
          optionShuffle = !0;
        if (
          (void 0 !== data.shuffle && (shuffle = data.shuffle),
          void 0 !== data.optionShuffle && (optionShuffle = data.optionShuffle),
          item_sets && items)
        ) {
          var cumulativeIndex = 0;
          item_sets.forEach(function (map, setidx) {
            items[map.id] &&
              ((list = ItemDataGenerator._addItems(
                map.id,
                map.count,
                items,
                list,
                shuffle,
                optionShuffle,
                cumulativeIndex
              )),
              (cumulativeIndex += items[map.id].length));
          }),
            total_items &&
              list.length > total_items &&
              (list = _.first(list, total_items));
        }
      }
      return list;
    },
    _addItems: function (
      id,
      count,
      items,
      list,
      shuffle,
      optionShuffle,
      cumulativeIndex
    ) {
      var set = items[id];
      if (_.isArray(set)) {
        for (var indexArr = [], i = 0; i < set.length; i++) indexArr[i] = i;
        set.length < count && (count = set.length);
        for (var pick = [], qindex = 0, i = 0; i < count; i++) {
          if (shuffle) {
            var randNum = _.random(0, indexArr.length - 1);
            (pick[i] = set[indexArr[randNum]]),
              (qindex = indexArr[randNum]),
              (indexArr[randNum] = indexArr[indexArr.length - 1]),
              indexArr.splice(indexArr.length - 1, 1);
          } else (pick[i] = set[indexArr[i]]), (qindex = i);
          var item = pick[i];
          "mcq" == item.type.toLowerCase() || "mmcq" == item.type.toLowerCase()
            ? (optionShuffle && (item.options = _.shuffle(item.options)),
              ItemDataGenerator._registerResValues(item.options))
            : "mtf" == item.type.toLowerCase() &&
              (optionShuffle &&
                (item.rhs_options = _.shuffle(item.rhs_options)),
              ItemDataGenerator._registerResValues(item.lhs_options),
              ItemDataGenerator._registerResValues(item.rhs_options)),
            (pick[i].qindex = cumulativeIndex + qindex + 1);
        }
        list = _.union(list, pick);
      }
      return list;
    },
    _registerResValues: function (options) {
      _.each(options, function (option, index) {
        void 0 === option.value.resvalue &&
          (option.value.resvalue =
            option.value.asset ||
            option.value.text ||
            option.value.image ||
            option.value.count ||
            option.value.audio ||
            "option" + index),
          (option.value.resindex = index);
      });
    },
  },
  Command = Class.extend({
    _name: void 0,
    _methodName: void 0,
    _action: void 0,
    _isPluginAction: !0,
    _isAsync: !1,
    init: function (action) {
      (this._action = action),
        CommandManager._setDataAttributes(action),
        (this._action.cb = this._callBack.bind(this)),
        this.invoke(this._action),
        this._invokeRelatedActions("siblings"),
        this._isAsync || this._action.cb({ status: "success" });
    },
    getPluginObject: function () {
      var plugin = PluginManager.getPluginObject(this._action.asset);
      return (
        !0 === this._action.parent &&
          plugin &&
          plugin._parent &&
          (plugin = plugin._parent),
        plugin || (plugin = this._action.pluginObj),
        plugin
      );
    },
    invoke: function (action) {
      this.getPluginObject()[this._methodName](action);
    },
    _invokeRelatedActions: function (relation) {
      (_.isUndefined(this._action.stageInstanceId) ||
        this._action.stageInstanceId ==
          Renderer.theme._currentScene._stageInstanceId) &&
        this._action[relation] &&
        this._action[relation].length > 0 &&
        _.each(this._action[relation], function (action) {
          CommandManager.handle(action);
        });
    },
    _callBack: function (response) {
      _(Renderer.theme).isUndefined() ||
        (void 0 !== response &&
          "success" == response.status &&
          this._invokeRelatedActions("children"));
    },
  }),
  AnimateCommand = Command.extend({
    _name: "ANIMATE",
    _isAsync: !0,
    invoke: function (action) {
      AnimationManager.handle(action);
    },
  });
CommandManager.registerCommand("ANIMATE", AnimateCommand);
var BlurCommand = Command.extend({ _name: "BLUR", _methodName: "blur" });
CommandManager.registerCommand("BLUR", BlurCommand);
var CustomCommand = Command.extend({
  _name: "CUSTOM",
  _isPluginAction: !1,
  invoke: function (action) {
    var plugin = this.getPluginObject();
    plugin && action.invoke && plugin[action.invoke](action);
  },
});
CommandManager.registerCommand("CUSTOM", CustomCommand);
var DefaultNextCommand = Command.extend({
  _name: "DEFAULTNEXT",
  _methodName: "defaultNext",
  invoke: function (action) {
    console.log("Theme : action", action),
      EventBus.dispatch("actionNavigateNext", action);
  },
});
CommandManager.registerCommand("DEFAULTNEXT", DefaultNextCommand);
var EraseCommand = Command.extend({
  _name: "ERASE",
  _methodName: "clear",
  initCommand: function (action) {},
});
CommandManager.registerCommand("ERASE", EraseCommand);
var EvalCommand = Command.extend({
  _name: "EVAL",
  _methodName: "evaluate",
  invoke: function (action) {
    this.getPluginObject().evaluate(action);
  },
});
CommandManager.registerCommand("EVAL", EvalCommand);
var EventCommand = Command.extend({
  _name: "EVENT",
  _isPluginAction: !1,
  initCommand: function (action) {},
  invoke: function (action) {
    EventManager.dispatchEvent(action.asset, action.value);
  },
});
CommandManager.registerCommand("EVENT", EventCommand);
var ExternalCommand = Command.extend({
  _name: "EXTERNAL",
  _isPluginAction: !1,
  invoke: function (action) {
    action.href ? window.open(action.href, "_system") : startApp(action.app);
  },
});
CommandManager.registerCommand("EXTERNAL", ExternalCommand);
var HideCommand = Command.extend({
  _name: "HIDE",
  _methodName: "hide",
  initCommand: function (action) {},
});
CommandManager.registerCommand("HIDE", HideCommand);
var HideHTMLElementsCommand = Command.extend({
  _name: "HIDEHTMLELEMENTS",
  _isPluginAction: !1,
  invoke: function (action) {
    CommandManager.displayAllHtmlElements(!1);
  },
});
CommandManager.registerCommand("HIDEHTMLELEMENTS", HideHTMLElementsCommand);
var PauseCommand = Command.extend({
  _name: "PAUSE",
  _methodName: "pause",
  invoke: function (action) {
    var plugin = this.getPluginObject();
    void 0 === plugin && (plugin = AudioManager),
      plugin[this._methodName](action);
  },
});
CommandManager.registerCommand("PAUSE", PauseCommand);
var PlayCommand = Command.extend({
  _name: "PLAY",
  _methodName: "play",
  _isAsync: !0,
  invoke: function (action) {
    var plugin = this.getPluginObject();
    void 0 === plugin && (plugin = AudioManager),
      plugin[this._methodName](action);
  },
});
CommandManager.registerCommand("PLAY", PlayCommand);
var ProcessRecordCommand = Command.extend({
  _name: "PROCESSRECORD",
  _isPluginAction: !1,
  invoke: function (action) {
    RecorderManager.processRecording(action);
  },
});
CommandManager.registerCommand("PROCESSRECORD", ProcessRecordCommand);
var RefreshCommand = Command.extend({
  _name: "REFRESH",
  _methodName: "refresh",
  initCommand: function (action) {},
});
CommandManager.registerCommand("REFRESH", RefreshCommand);
var ReloadCommand = Command.extend({
  _name: "RELOAD",
  _methodName: "reload",
  initCommand: function (action) {},
});
CommandManager.registerCommand("RELOAD", ReloadCommand);
var ResetCommand = Command.extend({
  _name: "RESET",
  _isPluginAction: !1,
  invoke: function (action) {
    var c =
      ControllerManager.instanceMap[action.cType + "." + action.controller];
    void 0 !== c
      ? c.reset()
      : console.warn("No controller find with id:", action.controller);
  },
});
CommandManager.registerCommand("RESET", ResetCommand);
var RestartCommand = Command.extend({
  _name: "RESTART",
  _methodName: "restart",
  initCommand: function (action) {},
});
CommandManager.registerCommand("RESTART", RestartCommand);
var SetCommand = Command.extend({
  _name: "SET",
  invoke: function (action) {
    var plugin = this.getPluginObject();
    plugin && "set" == plugin._type
      ? plugin.setParamValue(action)
      : plugin && plugin.setPluginParamValue(action);
  },
});
CommandManager.registerCommand("SET", SetCommand);
var ShowCommand = Command.extend({
  _name: "SHOW",
  _methodName: "show",
  initCommand: function (action) {},
});
CommandManager.registerCommand("SHOW", ShowCommand);
var ShowHTMLElementsCommand = Command.extend({
  _name: "SHOWHTMLELEMENTS",
  _isPluginAction: !1,
  invoke: function (action) {
    CommandManager.displayAllHtmlElements(!0);
  },
});
CommandManager.registerCommand("SHOWHTMLELEMENTS", ShowHTMLElementsCommand);
var StartGenieCommand = Command.extend({
  _name: "STARTGENIE",
  _isPluginAction: !1,
  invoke: function (action) {
    TelemetryService._gameData.id != packageName &&
    TelemetryService._gameData.id != packageNameDelhi
      ? (TelemetryService.end(TelemetryService._gameData.id),
        setTimeout(function () {
          exitApp();
        }, 500))
      : exitApp();
  },
});
CommandManager.registerCommand("STARTGENIE", StartGenieCommand);
var StartRecordCommand = Command.extend({
  _name: "STARTRECORD",
  _isPluginAction: !1,
  invoke: function (action) {
    RecorderManager.startRecording(action);
  },
});
CommandManager.registerCommand("STARTRECORD", StartRecordCommand);
var StopCommand = Command.extend({
  _name: "STOP",
  _stopMethod: "stop",
  _stopAllMethod: "stopAll",
  invoke: function (action) {
    var plugin = this.getPluginObject();
    void 0 === plugin && (plugin = AudioManager),
      !0 === action.sound
        ? AudioManager[this._stopAllMethod](action)
        : plugin[this._stopMethod](action);
  },
});
CommandManager.registerCommand("STOP", StopCommand);
var StopRecordCommand = Command.extend({
  _name: "STOPRECORD",
  _isPluginAction: !1,
  invoke: function (action) {
    RecorderManager.stopRecording(action);
  },
});
CommandManager.registerCommand("STOPRECORD", StopRecordCommand);
var TogglePlayCommand = Command.extend({
  _name: "TOGGLEPLAY",
  _methodName: "togglePlay",
  _isAsync: !0,
  invoke: function (action) {
    var plugin = this.getPluginObject();
    void 0 === plugin && (plugin = AudioManager),
      plugin[this._methodName](action);
  },
});
CommandManager.registerCommand("TOGGLEPLAY", TogglePlayCommand);
var ToggleShadowCommand = Command.extend({
  _name: "TOGGLESHADOW",
  _methodName: "toggleShadow",
  initCommand: function (action) {},
});
CommandManager.registerCommand("TOGGLESHADOW", ToggleShadowCommand);
var ToggleShowCommand = Command.extend({
  _name: "TOGGLESHOW",
  _methodName: "toggleShow",
  initCommand: function (action) {},
});
CommandManager.registerCommand("TOGGLESHOW", ToggleShowCommand);
var TransitionToCommand = Command.extend({
  _name: "TRANSITIONTO",
  _methodName: "transitionTo",
  initCommand: function (action) {},
});
CommandManager.registerCommand("TRANSITIONTO", TransitionToCommand);
var UnblurCommand = Command.extend({
  _name: "UNBLUR",
  _methodName: "unblur",
  initCommand: function (action) {},
});
CommandManager.registerCommand("UNBLUR", UnblurCommand);
var WindowEventCommand = Command.extend({
  _name: "WINDOWEVENT",
  _isPluginAction: !1,
  invoke: function (action) {
    var mimeType = GlobalContext.previousContentMimeType
      ? GlobalContext.previousContentMimeType
      : GlobalContext.currentContentMimeType;
    GlobalContext.previousContentMimeType || COLLECTION_MIMETYPE == mimeType
      ? (window.location.hash =
          "#/content/list/" + GlobalContext.previousContentId)
      : CONTENT_MIMETYPES.indexOf(mimeType) > -1
      ? (window.location.hash =
          "#/show/content/" + GlobalContext.currentContentId)
      : console.warn("Invalid mimeType to handle WINDOWEVENT:", mimeType);
  },
});
CommandManager.registerCommand("WINDOWEVENT", WindowEventCommand);
var HTMLPlugin = Plugin.extend({ _div: void 0, _isContainer: !1, _render: !0 });
AnimationPlugin = Class.extend({
  _data: void 0,
  init: function (data, plugin) {
    (this._data = data),
      (this._id = data.id || _.uniqueId("animation")),
      this.initPlugin(data, plugin),
      AnimationManager.registerPluginObject(this);
  },
  initPlugin: function (data, plugin) {
    PluginManager.addError(
      "Subclasses of AnimationPlugin should implement this function"
    );
  },
  animate: function (plugin) {
    PluginManager.addError(
      "Subclasses of AnimationPlugin should implement play()"
    );
  },
});
var LayoutPlugin = Plugin.extend({
    _isContainer: !0,
    _render: !0,
    _cells: [],
    _cellsCount: 0,
    _iterateModel: void 0,
    initPlugin: function (data) {
      (this._cells = []),
        (this._cellsCount = 0),
        (this._self = new createjs.Container());
      var dims = this.relativeDims();
      if (
        ((this._self.x = dims.x),
        (this._self.y = dims.y),
        _.isUndefined(data.iterate) && _.isUndefined(data.count))
      )
        return void console.warn("LayoutPlugin require iterate or count", data);
      void 0 !== data.count && (this._cellsCount = data.count);
      var model = data.iterate;
      model = this._iterateModel = this.replaceExpressions(model);
      var dataObjs = this._stage.getModelValue(model);
      if (dataObjs) {
        var length = dataObjs.length;
        this._cellsCount =
          length < this._cellsCount || 0 == this._cellsCount
            ? length
            : this._cellsCount;
      }
      this.generateLayout(), this.renderLayout(), (this._enableEvents = !1);
    },
    generateLayout: function () {
      PluginManager.addError(
        "Subclasses of layout plugin should implement generateLayout()"
      );
    },
    renderLayout: function () {
      var instance = this,
        index = 0;
      this._cells.forEach(function (data) {
        var cellECML = instance.getInnerECML(),
          cellEvents = instance.getCellEvents();
        (instance._stage._templateVars[instance._data.var] =
          instance._iterateModel + "[" + index + "]"),
          instance._addCellAttributes(data),
          Object.assign && Object.assign(data, cellECML);
        var resolvedEvents = instance.resolveActionModelValues(cellEvents);
        Object.assign && Object.assign(data, resolvedEvents),
          PluginManager.invoke(
            "g",
            data,
            instance,
            instance._stage,
            instance._theme
          ),
          index++;
      });
    },
    _addCellAttributes: function (data) {
      (data.padX = this._data.padX || 0),
        (data.padY = this._data.padY || 0),
        (data.snapX = this._data.snapX),
        (data.snapY = this._data.snapY),
        (data.stroke = this._data.stroke),
        (data["stroke-width"] = this._data["stroke-width"]),
        (data.events = this._data.events),
        (data.event = this._data.event),
        this._data.shadow && (data.shadowColor = this._data.shadow),
        this._data.highlight && (data.highlight = this._data._highlight),
        _.isFinite(this._data.blur) && (data.blur = this._data.blur),
        _.isFinite(this._data.offsetX) && (data.offsetX = this._data.offsetX),
        _.isFinite(this._data.offsetY) && (data.offsetY = this._data.offsetY),
        this._data.opacity && (data.opacity = this._data.opacity);
    },
    getCellEvents: function () {
      var events = void 0,
        instance = this;
      return (
        instance._data.events
          ? _.isArray(instance._data.events)
            ? ((events = []),
              instance._data.events.forEach(function (e) {
                events.push.apply(events, e.event);
              }))
            : (events = instance._data.events.event)
          : (events = instance._data.event),
        events
      );
    },
    resolveActionModelValues: function (events) {
      var returnEvents = void 0,
        instance = this,
        updateAction = function (tempAction) {
          var action = _.clone(tempAction);
          if (action.asset_model) {
            var model = action.asset_model,
              val = instance._stage.getModelValue(model);
            (action.asset = val), delete action.asset_model;
          }
          if (action["ev-model"]) {
            var model = action["ev-model"],
              val = instance._stage.getModelValue(model);
            (action.value = val),
              (action["param-value"] = val),
              delete action["ev-model"];
          }
          return action;
        },
        updateEvent = function (evt) {
          var returnEvent = { type: evt.type };
          return (
            _.isArray(evt.action)
              ? ((returnEvent.action = []),
                evt.action.forEach(function (action) {
                  returnEvent.action.push(updateAction(action));
                }))
              : evt.action && (returnEvent.action = updateAction(evt.action)),
            returnEvent
          );
        };
      return (
        _.isArray(events)
          ? ((returnEvents = { events: [], hitArea: !0 }),
            events.forEach(function (e) {
              returnEvents.events.push(updateEvent(e));
            }))
          : events &&
            ((returnEvents = { hitArea: !0 }),
            (returnEvents.event = updateEvent(events))),
        returnEvents
      );
    },
  }),
  ShapePlugin = Plugin.extend({
    _type: "shape",
    _isContainer: !1,
    _render: !0,
    initPlugin: function (data) {
      this._self = new createjs.Shape();
      var graphics = this._self.graphics,
        dims = this.relativeDims();
      data.fill && graphics.beginFill(data.fill),
        data.stroke && graphics.beginStroke(data.stroke),
        data.strokeWidth && (data["stroke-width"] = data.strokeWidth),
        data["stroke-width"] && graphics.setStrokeStyle(data["stroke-width"]);
      var radius = data.radius || 10;
      switch (
        ((data.type = data.type ? data.type.toLowerCase() : "rect"), data.type)
      ) {
        case "rect":
          if ((graphics.dr(0, 0, dims.w, dims.h), data.hitArea)) {
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h),
              (this._self.hitArea = hit);
          }
          break;
        case "roundrect":
          if (
            (graphics.drawRoundRect(0, 0, dims.w, dims.h, radius), data.hitArea)
          ) {
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h),
              (this._self.hitArea = hit);
          }
          break;
        case "circle":
          if ((graphics.dc(0, 0, dims.r || dims.w), data.hitArea)) {
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").dc(0, 0, dims.w),
              (this._self.hitArea = hit);
          }
          break;
        case "ellipse":
          if ((graphics.de(0, 0, dims.w, dims.h), data.hitArea)) {
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").de(0, 0, dims.w, dims.h),
              (this._self.hitArea = hit);
          }
          break;
        default:
          this.drawPolygon(data, dims, graphics);
      }
      graphics.cp(),
        (this._self.x = dims.x),
        (this._self.y = dims.y),
        _.isUndefined(data.opacity) || (this._self.alpha = data.opacity);
    },
    drawBorder: function () {},
    drawPolygon: function (data, dims, graphics) {
      var points = this.getPoints(data);
      if (!points) return void console.log("Unsupported shape");
      var end = points[points.length - 1],
        x = (dims.w * (end.x || 0)) / 100,
        y = (dims.h * (end.y || 0)) / 100;
      graphics.moveTo(x, y),
        points.forEach(function (point) {
          (x = (dims.w * (point.x || 0)) / 100),
            (y = (dims.h * (point.y || 0)) / 100),
            graphics.lineTo(x, y);
        });
    },
    getPoints: function (data) {
      var shape = data.type,
        sides = data.sides,
        corners = data.corners;
      "trapezium" != shape &&
        (sides
          ? (shape = sides + "polygon")
          : corners && (shape = corners + "star"));
      var points;
      if (this.shapes.hasOwnProperty(shape)) points = this.shapes[shape];
      else if (data.config.__cdata)
        try {
          var config = JSON.parse(data.config.__cdata);
          points = config.points;
        } catch (err) {
          console.log("Points array not available");
        }
      return points;
    },
    shapes: {
      "4star": [
        { x: 100, y: 50 },
        { x: 62.7, y: 62.7 },
        { x: 50, y: 100 },
        { x: 37.3, y: 62.7 },
        { x: 0, y: 50 },
        { x: 37.3, y: 37.3 },
        { x: 50, y: 0 },
        { x: 62.7, y: 37.3 },
      ],
      "5star": [
        { x: 50, y: 0 },
        { x: 60.9, y: 35 },
        { x: 100, y: 35 },
        { x: 67.6, y: 60 },
        { x: 79.4, y: 100 },
        { x: 50, y: 72 },
        { x: 20.6, y: 100 },
        { x: 32.4, y: 60 },
        { x: 0, y: 35 },
        { x: 39.1, y: 35 },
      ],
      "6star": [
        { x: 50, y: 100 },
        { x: 35, y: 76 },
        { x: 0, y: 75 },
        { x: 20, y: 50 },
        { x: 0, y: 25 },
        { x: 35, y: 24 },
        { x: 50, y: 0 },
        { x: 65, y: 24 },
        { x: 100, y: 25 },
        { x: 80, y: 50 },
        { x: 100, y: 75 },
        { x: 65, y: 76 },
      ],
      "7star": [
        { x: 100, y: 59.8 },
        { x: 74, y: 68 },
        { x: 72.9, y: 100 },
        { x: 50.8, y: 80 },
        { x: 29.6, y: 100 },
        { x: 27.1, y: 69.4 },
        { x: 0, y: 62.5 },
        { x: 20.6, y: 44.1 },
        { x: 10, y: 19.9 },
        { x: 36.2, y: 23.3 },
        { x: 48.6, y: 0 },
        { x: 62.3, y: 22.6 },
        { x: 88.2, y: 17.7 },
        { x: 79, y: 42.5 },
      ],
      "8star": [
        { x: 100, y: 50 },
        { x: 82.3, y: 63.4 },
        { x: 85.4, y: 85.4 },
        { x: 63.4, y: 82.3 },
        { x: 50, y: 100 },
        { x: 36.6, y: 82.3 },
        { x: 14.6, y: 85.4 },
        { x: 17.7, y: 63.4 },
        { x: 0, y: 50 },
        { x: 17.7, y: 36.6 },
        { x: 14.6, y: 14.6 },
        { x: 36.6, y: 17.7 },
        { x: 50, y: 0 },
        { x: 63.4, y: 17.7 },
        { x: 85.4, y: 14.6 },
        { x: 82.3, y: 36.6 },
      ],
      "9star": [
        { x: 100, y: 40.2 },
        { x: 84.6, y: 55.3 },
        { x: 93.8, y: 74 },
        { x: 73.1, y: 76.3 },
        { x: 68.1, y: 100 },
        { x: 50.8, y: 85 },
        { x: 33.9, y: 100 },
        { x: 28.1, y: 77.3 },
        { x: 7.3, y: 75.9 },
        { x: 15.7, y: 56.8 },
        { x: 0, y: 42.4 },
        { x: 19.3, y: 33.2 },
        { x: 17, y: 12.4 },
        { x: 37.3, y: 17.4 },
        { x: 48.9, y: 0 },
        { x: 61.3, y: 16.9 },
        { x: 81.3, y: 11 },
        { x: 79.9, y: 31.8 },
      ],
      "10star": [
        { x: 100, y: 65.5 },
        { x: 78.3, y: 70.6 },
        { x: 79.4, y: 90.5 },
        { x: 60.8, y: 83.3 },
        { x: 50, y: 100 },
        { x: 39.2, y: 83.3 },
        { x: 20.6, y: 90.5 },
        { x: 21.7, y: 70.6 },
        { x: 0, y: 65.5 },
        { x: 15, y: 50 },
        { x: 0, y: 34.5 },
        { x: 21.7, y: 29.4 },
        { x: 20.6, y: 9.5 },
        { x: 39.2, y: 16.7 },
        { x: 50, y: 0 },
        { x: 60.8, y: 16.7 },
        { x: 79.4, y: 9.5 },
        { x: 78.3, y: 29.4 },
        { x: 100, y: 34.5 },
        { x: 85, y: 50 },
      ],
      "3polygon": [
        { x: 50, y: 0 },
        { x: 100, y: 100 },
        { x: 0, y: 100 },
      ],
      "4polygon": [
        { x: 50, y: 0 },
        { x: 100, y: 50 },
        { x: 50, y: 100 },
        { x: 0, y: 50 },
      ],
      "5polygon": [
        { x: 50, y: 0 },
        { x: 100, y: 34.5 },
        { x: 79.4, y: 100 },
        { x: 20.6, y: 100 },
        { x: 0, y: 34.5 },
      ],
      "6polygon": [
        { x: 100, y: 50 },
        { x: 75, y: 100 },
        { x: 25, y: 100 },
        { x: 0, y: 50 },
        { x: 25, y: 0 },
        { x: 75, y: 0 },
      ],
      "7polygon": [
        { x: 50, y: 0 },
        { x: 89.1, y: 18.8 },
        { x: 100, y: 61.1 },
        { x: 71.7, y: 100 },
        { x: 28.3, y: 100 },
        { x: 0, y: 61.1 },
        { x: 10.9, y: 18.8 },
      ],
      "8polygon": [
        { x: 100, y: 69.1 },
        { x: 69.1, y: 100 },
        { x: 30.9, y: 100 },
        { x: 0, y: 69.1 },
        { x: 0, y: 30.9 },
        { x: 30.9, y: 0 },
        { x: 69.1, y: 0 },
        { x: 100, y: 30.9 },
      ],
      "9polygon": [
        { x: 50, y: 0 },
        { x: 82.1, y: 11.7 },
        { x: 100, y: 41.3 },
        { x: 93.3, y: 75 },
        { x: 67.1, y: 100 },
        { x: 32.9, y: 100 },
        { x: 6.7, y: 75 },
        { x: 0, y: 41.3 },
        { x: 17.9, y: 11.7 },
      ],
      "10polygon": [
        { x: 100, y: 50 },
        { x: 90.5, y: 79.4 },
        { x: 65.5, y: 100 },
        { x: 34.5, y: 100 },
        { x: 9.5, y: 79.4 },
        { x: 0, y: 50 },
        { x: 9.5, y: 20.6 },
        { x: 34.5, y: 0 },
        { x: 65.5, y: 0 },
        { x: 90.5, y: 20.6 },
      ],
      trapezium: [
        { x: 25, y: 0 },
        { x: 75, y: 0 },
        { x: 100, y: 100 },
        { x: 0, y: 100 },
      ],
    },
  });
PluginManager.registerPlugin("shape", ShapePlugin);
var AudioPlugin = Plugin.extend({
  _type: "audio",
  _isContainer: !1,
  _id: void 0,
  _state: "stop",
  _render: !1,
  initPlugin: function (data) {
    this._id = data.asset;
  },
  play: function (action) {
    AudioManager.play(action);
  },
  togglePlay: function (action) {
    AudioManager.togglePlay(action);
  },
  pause: function (action) {
    AudioManager.pause(action);
  },
  stop: function (action) {
    !0 === action.sound
      ? AudioManager.stopAll(action)
      : AudioManager.stop(action);
  },
  stopAll: function (action) {
    AudioManager.stopAll(action);
  },
});
PluginManager.registerPlugin("audio", AudioPlugin);
var ContainerPlugin = Plugin.extend({
  _type: "g",
  _isContainer: !0,
  _render: !0,
  initPlugin: function (data) {
    this._self = new createjs.Container();
    var dims = this.relativeDims();
    if (((this._self.x = dims.x), (this._self.y = dims.y), data.hitArea)) {
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h),
        (this._self.hitArea = hit);
    }
    data.rotate && this.rotation(data),
      this.invokeChildren(data, this, this._stage, this._theme);
  },
  refresh: function () {
    if (_.isArray(this._childIds))
      for (var i = 0; i < this._childIds.length; i++) {
        var childPlugin = PluginManager.getPluginObject(this._childIds[i]);
        childPlugin && childPlugin.refresh();
      }
  },
});
PluginManager.registerPlugin("g", ContainerPlugin);
var DivPlugin = HTMLPlugin.extend({
  _type: "div",
  initPlugin: function (data) {
    this._input = void 0;
    var dims = this.relativeDims(),
      div = document.getElementById(data.id);
    div && jQuery("#" + data.id).remove(),
      (div = document.createElement("div")),
      data.style && div.setAttribute("style", data.style),
      (div.id = data.id),
      (div.style.width = dims.w + "px"),
      (div.style.height = dims.h + "px"),
      (div.style.position = "absolute");
    var parentDiv = document.getElementById(Renderer.divIds.gameArea);
    parentDiv.insertBefore(div, parentDiv.childNodes[0]);
    var textStr = "";
    data.$t || data.__text
      ? (textStr = data.$t || data.__text)
      : data.model
      ? (textStr = this._stage.getModelValue(data.model) || "")
      : data.param && (textStr = this.getParam(data.param.trim()) || "");
    data.__cdata;
    jQuery("#" + data.id).append(data.__cdata),
      (this._div = div),
      (this._self = new createjs.DOMElement(div)),
      (this._self.x = dims.x),
      (this._self.y = dims.y),
      this.registerEvents(data.id);
  },
  registerEvents: function (id) {
    var instance = this;
    jQuery("#" + id)
      .children()
      .each(function () {
        var data = jQuery(this).data();
        data &&
          data.event &&
          jQuery(this).click(function (event) {
            event.preventDefault(),
              instance._triggerEvent(data.event),
              console.info("Triggered event ", data.event);
          });
      });
  },
  _triggerEvent: function (event) {
    var plugin = PluginManager.getPluginObject(Renderer.theme._currentStage);
    (event = new createjs.Event(event)), plugin && plugin.dispatchEvent(event);
  },
});
PluginManager.registerPlugin("div", DivPlugin);
var EmbedPlugin = Plugin.extend({
  _type: "embed",
  _isContainer: !1,
  _render: !0,
  initPlugin: function (data) {
    if (data.template || data["template-name"]) {
      var templateId = data["template-name"]
          ? data["template-name"]
          : this._stage.getTemplate(data.template),
        template = this._theme._templateMap[templateId];
      if (template) {
        for (var k in data)
          if ("template" !== k && "template-name" !== k)
            if ("var-" == k.substring(0, 4))
              this._stage._templateVars[k.substring(4)] = data[k];
            else if ("ev-" == k.substring(0, 3)) {
              var expr = this.replaceExpressions(data[k]);
              this._stage._templateVars[k.substring(3)] = expr;
            } else this._stage._templateVars[k] = data[k];
        (this._self = new createjs.Container()),
          (data.w = data.w || 100),
          (data.h = data.h || 100);
        var dims = this.relativeDims();
        (this._self.x = dims.x),
          (this._self.y = dims.y),
          this.invokeChildren(template, this, this._stage, this._theme);
      }
    }
  },
  refresh: function () {
    if (_.isArray(this._childIds))
      for (var i = 0; i < this._childIds.length; i++) {
        var childPlugin = PluginManager.getPluginObject(this._childIds[i]);
        childPlugin && childPlugin.refresh();
      }
  },
  replaceExpressions: function (model) {
    for (
      var arr = [],
        idx = 0,
        nextIdx = model.indexOf("${", idx),
        endIdx = model.indexOf("}", idx + 1);
      -1 != nextIdx && -1 != endIdx;

    ) {
      var expr = model.substring(nextIdx, endIdx + 1);
      arr.push(expr),
        (idx = endIdx),
        (nextIdx = model.indexOf("${", idx)),
        (endIdx = model.indexOf("}", idx + 1));
    }
    if (arr.length > 0)
      for (var i = 0; i < arr.length; i++) {
        var val = this.evaluateExpr(arr[i]);
        model = model.replace(arr[i], val);
      }
    return model;
  },
});
PluginManager.registerPlugin("embed", EmbedPlugin);
var HotspotPlugin = ShapePlugin.extend({
  _type: "hotspot",
  _isContainer: !1,
  _render: !0,
  initPlugin: function (data) {
    (data.fill = void 0), (data.hitArea = !0), this._super(data);
  },
});
PluginManager.registerPlugin("hotspot", HotspotPlugin);
var ImagePlugin = Plugin.extend({
  _type: "image",
  _isContainer: !1,
  _render: !0,
  initPlugin: function (data) {
    var instance = this,
      asset = "";
    if (
      (data.asset
        ? (("validate" !== data.asset &&
            "next" !== data.asset &&
            "previous" !== data.asset) ||
            (data.visible = !1),
          (asset = data.asset))
        : data.model
        ? (asset = this._stage.getModelValue(data.model))
        : data.param && (asset = this.getParam(data.param)),
      _.isEmpty(asset))
    )
      (this._render = !1), console.warn("ImagePlugin: Asset not found", data);
    else {
      var img,
        assetSrc = this._theme.getAsset(asset);
      _.isString(assetSrc)
        ? ((img = new Image()),
          (img.crossOrigin = "Anonymous"),
          (img.src = assetSrc))
        : (img = assetSrc);
      var s = new createjs.Bitmap(img);
      this._self = s;
      var dims = this.relativeDims();
      if (_.isString(assetSrc))
        (this._self.visible = !1),
          AssetManager.strategy.loadAsset(
            this._stage._data.id,
            asset,
            assetSrc,
            function () {
              (Renderer.update = !0),
                setTimeout(function () {
                  s.getBounds() && instance.setScale(),
                    (dims = instance.alignDims()),
                    (s.x = dims.x),
                    (s.y = dims.y),
                    (instance._self.visible =
                      !!_.isUndefined(instance._data.visible) ||
                      instance._data.visible),
                    (Renderer.update = !0);
                }, 100);
            }
          );
      else {
        s.getBounds() && this.setScale();
      }
      (dims = this.alignDims()),
        (s.x = dims.x),
        (s.y = dims.y),
        (Renderer.update = !0);
    }
  },
  alignDims: function () {
    var parentDims = this._parent.dimensions(),
      dims = this._dimensions,
      align = this._data.align ? this._data.align.toLowerCase() : "",
      valign = this._data.valign ? this._data.valign.toLowerCase() : "";
    return (
      "left" == align
        ? (dims.x = 0)
        : "right" == align
        ? (dims.x = parentDims.w - dims.w)
        : "center" == align && (dims.x = (parentDims.w - dims.w) / 2),
      "top" == valign
        ? (dims.y = 0)
        : "bottom" == valign
        ? (dims.y = parentDims.h - dims.h)
        : "middle" == valign && (dims.y = (parentDims.h - dims.h) / 2),
      this._dimensions
    );
  },
  refresh: function () {
    var asset = "";
    if (
      (asset = this._data.model
        ? this._stage.getModelValue(this._data.model)
        : this._data.param
        ? this.getParam(this._data.param)
        : this._data.asset) &&
      this._theme &&
      this._self
    ) {
      var image = this._theme.getAsset(asset);
      (this._self.image = image), (Renderer.update = !0);
    }
  },
});
PluginManager.registerPlugin("image", ImagePlugin);
var InputPlugin = HTMLPlugin.extend({
  _type: "input",
  _input: void 0,
  initPlugin: function (data) {
    this._input = void 0;
    var controller = this._stage._stageController,
      identifier = controller.getModelValue("identifier");
    _.isUndefined(controller)
      ? console.warn("there is no FTB item")
      : ((plugindata = this.getState(
          controller._model[controller._index].type
        )),
        _.isUndefined(plugindata) ||
          (controller._model[controller._index].model = _.isEmpty(plugindata)
            ? controller._model[controller._index].model
            : plugindata));
    var fontsize = data.fontsize || "1.6em",
      fontweight = data.weight || "normal",
      color = data.color || "#000000",
      background = data.fill || "white",
      font = data.font || "Arial",
      border = data.stroke || "#000000";
    data.stroke = "";
    var dims = this.relativeDims(),
      input = document.getElementById(data.id);
    input && jQuery("#" + data.id).remove(),
      (input = document.createElement("input")),
      (input.id = data.id),
      (input.type = data.type),
      (input.style.top = "-1000px"),
      (input.style.width = dims.w + "px"),
      (input.style.height = dims.h + "px"),
      (input.style.minWidth = dims.w + "px"),
      (input.style.minHeight = dims.h + "px"),
      input.style.setProperty("font-size", fontsize, "important"),
      input.style.setProperty("font-weight", fontweight, "important"),
      input.style.setProperty("font-family", font, "important"),
      input.style.setProperty("color", color, "important"),
      input.style.setProperty("background-color", background, "important"),
      input.style.setProperty("border-color", border, "important"),
      (input.className = data.class),
      (input.style.display = "none");
    var val,
      instance = this;
    if (data.model) {
      var model = data.model;
      val = this._stage.getModelValue(model);
    } else data.param && (val = this._stage.params[data.param.trim()]);
    input.value = val || "";
    var div = document.getElementById("gameArea");
    div.insertBefore(input, div.childNodes[0]),
      (this._input = input),
      (this._self = new createjs.DOMElement(input)),
      (this._self.x = dims.x),
      (this._self.y = dims.y + 1e3),
      this._theme.inputs.push(data.id),
      this._stage._inputs.push(this);
    var instance = this;
    $("#" + data.id).on("change", function () {
      instance.updateState(!0);
    }),
      $("#" + data.id).on("click", function (event) {
        var telemetryEdata = {
          type: event.type,
          x: event.pageX,
          y: event.pageY,
          itemId: identifier,
          optionTag: "FTB",
        };
        EventManager.processAppTelemetry({}, "TOUCH", instance, telemetryEdata);
      }),
      instance.updateState(!1);
  },
  setModelValue: function () {
    if (this._data.model) {
      var model = this._data.model;
      this._stage.setModelValue(model, this._input.value);
    }
  },
  updateState: function (isStateChanged) {
    this.setModelValue();
    var controller = this._stage._stageController;
    if (_.isUndefined(controller))
      console.warn("There is no ctrl in this stage"),
        this.setState(this._data.id, this._input.value, isStateChanged);
    else {
      var cModel = controller._model[controller._index];
      this.setState(cModel.type, cModel.model, isStateChanged);
    }
  },
});
PluginManager.registerPlugin("input", InputPlugin);
var MCQPlugin = Plugin.extend({
  _type: "mcq",
  _isContainer: !0,
  _render: !0,
  _multi_select: !1,
  _options: [],
  _controller: void 0,
  _shadow: "#0470D8",
  _blur: 30,
  _offsetX: 0,
  _offsetY: 0,
  _highlight: "#E89241",
  initPlugin: function (data) {
    (this._multi_select = !1),
      (this._options = []),
      (this._shadow = "#0470D8"),
      (this._blur = 30),
      (this._offsetX = 0),
      (this._offsetY = 0);
    var model = data.model;
    if (model) {
      var controller = this._stage.getController(model),
        plugindata = this.getState(this._type);
      if (
        (_.isUndefined(plugindata) ||
          (controller._model[controller._index].options = _.isEmpty(plugindata)
            ? controller._model[controller._index].options
            : plugindata),
        controller)
      ) {
        this.updateState(controller, !1),
          (this._controller = controller),
          (this._multi_select = data.multi_select),
          (void 0 !== this._multi_select && null != this._multi_select) ||
            (this._multi_select = !1),
          (this._data.x = this._parent._data.x),
          (this._data.y = this._parent._data.y),
          (this._data.w = this._parent._data.w),
          (this._data.h = this._parent._data.h),
          (this._self = new createjs.Container());
        var dims = this.relativeDims();
        (this._self.x = dims.x),
          (this._self.y = dims.y),
          data.shadow && ((this._shadow = data.shadow), (data.shadow = void 0)),
          data.highlight && (this._highlight = data.highlight),
          _.isFinite(data.blur) && (this._blur = data.blur),
          _.isFinite(data.offsetX) && (this._offsetX = data.offsetX),
          _.isFinite(data.offsetY) && (this._offsetY = data.offsetY),
          (this._multi_select = this.isMultiSelect()),
          this.invokeChildren(data, this, this._stage, this._theme);
      }
    }
  },
  isMultiSelect: function () {
    var ansLength = 0,
      options = this._controller
        ? this._controller.getModelValue("options")
        : void 0;
    return (
      options &&
        (ansLength = _.filter(options, function (option) {
          return 1 == option.answer;
        }).length),
      ansLength > 1
    );
  },
  selectOption: function (option) {
    var controller = this._controller;
    this._multi_select ||
      this._options.forEach(function (o) {
        o._index != option._index &&
          o.hasShadow() &&
          (o.removeShadow(),
          controller.setModelValue(o._model, !1, "selected"));
      });
    var val = void 0;
    return (
      option &&
        ((val = option.toggleShadow()),
        controller.setModelValue(option._model, val, "selected")),
      this.updateState(controller, !0),
      (Renderer.update = !0),
      val
    );
  },
  updateState: function (controller, isStateChanged) {
    if (!_.isUndefined(controller._model)) {
      var model = controller._model[controller._index];
      this.setState(model.type, model.options, isStateChanged);
    }
  },
});
PluginManager.registerPlugin("mcq", MCQPlugin);
var MTFPlugin = Plugin.extend({
  _type: "mtf",
  _isContainer: !0,
  _render: !0,
  _lhs_options: [],
  _rhs_options: [],
  _force: !1,
  _controller: void 0,
  initPlugin: function (data) {
    (this._lhs_options = []), (this._rhs_options = []), (this._force = !1);
    var model = data.model;
    if (model) {
      var controller = this._stage.getController(model),
        plugindata = this.getState(this._type);
      if (
        (_.isUndefined(plugindata) ||
          (controller._model[controller._index].rhs_options = _.isEmpty(
            plugindata
          )
            ? controller._model[controller._index].rhs_options
            : plugindata),
        controller)
      ) {
        this.updateState(controller, !1),
          (this._controller = controller),
          (this._force = data.force),
          (void 0 !== this._force && null != this._force) || (this._force = !1),
          (this._data.x = this._parent._data.x),
          (this._data.y = this._parent._data.y),
          (this._data.w = this._parent._data.w),
          (this._data.h = this._parent._data.h),
          (this._self = new createjs.Container());
        var dims = this.relativeDims();
        (this._self.x = dims.x),
          (this._self.y = dims.y),
          this.invokeChildren(data, this, this._stage, this._theme);
      }
    }
  },
  getLhsOption: function (index) {
    var option;
    return (
      this._lhs_options.forEach(function (opt) {
        opt._index == index && (option = opt);
      }),
      option
    );
  },
  setAnswer: function (rhsOption, lhsIndex) {
    this._controller.setModelValue(rhsOption._model, lhsIndex, "selected");
  },
  setAnswerMapping: function (rhsOption, lhsOption) {
    _.isUndefined(lhsOption)
      ? (delete rhsOption._value.mapped,
        this._controller.setModelValue(rhsOption._model, void 0, "selected"))
      : ((rhsOption._value.mapped = lhsOption._value.resvalue),
        this._controller.setModelValue(
          rhsOption._model,
          lhsOption._index,
          "selected"
        )),
      this.updateState(this._controller, !0);
  },
  removeAnswer: function (rhsOption, lhsIndex) {
    this._controller.setModelValue(rhsOption._model, lhsIndex, "");
  },
  updateState: function (controller, isStateChanged) {
    if (!_.isUndefined(controller._model)) {
      var model = controller._model[controller._index];
      this.setState(model.type, model.rhs_options, isStateChanged);
    }
  },
});
PluginManager.registerPlugin("mtf", MTFPlugin);
var OptionPlugin = Plugin.extend({
  _type: "option",
  _isContainer: !1,
  _render: !1,
  _index: -1,
  _model: void 0,
  _value: void 0,
  _answer: void 0,
  _multiple: !1,
  _mapedTo: void 0,
  _uniqueId: void 0,
  _modelValue: void 0,
  initPlugin: function (data) {
    (this._model = void 0),
      (this._value = void 0),
      (this._answer = void 0),
      (this._index = -1),
      (this._uniqueId = _.uniqueId("opt_"));
    var model = data.option,
      value = void 0;
    if (
      (data.multiple && (this._multiple = data.multiple),
      this._parent._controller && model)
    ) {
      this._model = model;
      (value = this._parent._controller.getModelValue(model)),
        (this._index = parseInt(
          model.substring(model.indexOf("[") + 1, model.length - 1)
        ));
      var varName = this._data.var ? this._data.var : "option";
      (this._stage._templateVars[varName] =
        this._parent._data.model + "." + model),
        (this._modelValue = this._stage.getModelValue(
          this._parent._data.model + "." + model
        ));
    }
    if (value && _.isFinite(this._index) && this._index > -1) {
      this._self = new createjs.Container();
      var dims = this.relativeDims();
      (this._self.x = dims.x),
        (this._self.y = dims.y),
        (this._self.origX = dims.x),
        (this._self.origY = dims.y),
        (this._self.width = dims.w),
        (this._self.height = dims.h);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h),
        (this._self.hitArea = hit),
        (this._value = value.value),
        this.setOptionIndex(data),
        this.initShadow(data);
      var innerECML = this.getInnerECML();
      _.isEmpty(innerECML)
        ? "image" == value.value.type
          ? this.renderImage(value.value)
          : "text" == value.value.type && this.renderText(value.value)
        : this.renderInnerECML(),
        "mcq" == this._parent._type
          ? this.renderMCQOption()
          : "mtf" == this._parent._type && this.renderMTFOption(value),
        this.resolveModelValue(this._data),
        (this._render = !0);
    }
  },
  renderMCQOption: function () {
    var controller = this._parent._controller,
      itemId = controller.getModelValue("identifier");
    this._parent._options.push(this), (this._self.cursor = "pointer");
    var instance = this;
    !0 === this._modelValue.selected && this.addShadow(),
      this._self.on("click", function (event) {
        var val = instance._parent.selectOption(instance);
        OverlayManager.handleSubmit();
        var data = {
          type: event.type,
          x: event.stageX,
          y: event.stageY,
          choice_id: instance._value.resindex,
          itemId: itemId,
          res: [{ option: instance._value.resvalue }],
          state: val ? "SELECTED" : "UNSELECTED",
          optionTag: "MCQ",
        };
        EventBus.dispatch("optionSelected", instance._value),
          EventManager.processAppTelemetry({}, "CHOOSE", instance, data);
      });
  },
  renderMTFOption: function (value) {
    var enableDrag = !1,
      dragPos = {},
      dragItem = {},
      controller = this._parent._controller,
      instance = this,
      itemId = controller.getModelValue("identifier");
    if (
      (_.isFinite(value.index)
        ? ((this._index = value.index), this._parent._lhs_options.push(this))
        : (this._parent._rhs_options.push(this), (enableDrag = !0)),
      void 0 != value.selected)
    ) {
      var snapTo;
      snapTo = instance._parent._lhs_options;
      var plugin = snapTo[value.selected],
        dims = plugin._dimensions;
      _.isUndefined(plugin._data.snapX) ||
        (this._self.x = dims.x + (dims.w * plugin._data.snapX) / 100),
        _.isUndefined(plugin._data.snapY) ||
          (this._self.y = dims.y + dims.h * (plugin._data.snapY / 100));
    }
    if (enableDrag) {
      var instance = this,
        asset = this._self;
      (asset.cursor = "pointer"),
        asset.on("mousedown", function (evt) {
          this.parent.addChild(this),
            (this.offset = { x: this.x - evt.stageX, y: this.y - evt.stageY }),
            (dragItem = instance._value.resvalue),
            (dragPos = { x: evt.stageX, y: evt.stageY });
          var data = {
            type: evt.type,
            x: evt.stageX,
            y: evt.stageY,
            drag_id: instance._value.resvalue,
            itemId: itemId,
          };
          EventBus.dispatch("optionDrag", instance._value),
            EventManager.processAppTelemetry({}, "DRAG", instance, data);
        }),
        asset.on("pressmove", function (evt) {
          (this.x = evt.stageX + this.offset.x),
            (this.y = evt.stageY + this.offset.y),
            instance.addShadow(),
            (Renderer.update = !0);
        }),
        asset.on("pressup", function (evt) {
          var snapTo;
          snapTo =
            !0 === instance._parent._force
              ? instance._parent.getLhsOption(value.answer)
              : instance._parent._lhs_options;
          var plugin,
            dims,
            snapSuccess = !1;
          if (_.isArray(snapTo))
            for (var i = 0; i < snapTo.length && !snapSuccess; i++) {
              (plugin = snapTo[i]), (dims = plugin._dimensions);
              var xFactor = parseFloat(0.5 * this.width),
                yFactor = parseFloat(0.5 * this.height),
                x = dims.x - xFactor,
                y = dims.y - yFactor,
                maxX = dims.x + dims.w + xFactor,
                maxY = dims.y + dims.h + yFactor;
              this.x >= x &&
                this.x + this.width <= maxX &&
                this.y >= y &&
                this.y + this.height <= maxY &&
                ((this._mapedTo = snapTo[i]), (snapSuccess = !0));
            }
          else if (snapTo) {
            (plugin = snapTo), (dims = plugin._dimensions);
            var xFactor = parseFloat(0.5 * this.width),
              yFactor = parseFloat(0.5 * this.height),
              x = dims.x - xFactor,
              y = dims.y - yFactor,
              maxX = dims.x + dims.w + xFactor,
              maxY = dims.y + dims.h + yFactor;
            this.x >= x &&
              this.x + this.width <= maxX &&
              this.y >= y &&
              this.y + this.height <= maxY &&
              (snapSuccess = !0);
          }
          var drop_id = snapSuccess ? plugin._id : "",
            drop_idx = snapSuccess ? plugin._index : "",
            drop_rsv = snapSuccess ? plugin._value.resvalue : "",
            drag_rsv = instance._value.resvalue;
          if (snapSuccess) {
            var flag = !0;
            if ((plugin._multiple && (flag = !1), plugin._answer && flag)) {
              var existing = plugin._answer;
              existing._parent.setAnswerMapping(existing, void 0),
                (existing._self.x = existing._self.origX),
                (existing._self.y = existing._self.origY);
            }
            if (
              (_.isUndefined(plugin._data.snapX) ||
                (this.x = dims.x + (dims.w * plugin._data.snapX) / 100),
              _.isUndefined(plugin._data.snapY) ||
                (this.y = dims.y + dims.h * (plugin._data.snapY / 100)),
              instance._parent.setAnswerMapping(instance, plugin),
              _.isArray(snapTo))
            )
              for (var i = 0; i < snapTo.length; i++) {
                var rhsOption = snapTo[i];
                rhsOption._answer == instance && (rhsOption._answer = void 0);
              }
            else
              snapTo && snapTo._answer == instance && (snapTo._answer = void 0);
            plugin._answer = instance;
          } else if (
            ((this.x = this.origX), (this.y = this.origY), _.isArray(snapTo))
          )
            for (var i = 0; i < snapTo.length; i++) {
              var lhsQues = snapTo[i];
              if (
                lhsQues._answer &&
                lhsQues._answer._uniqueId == instance._uniqueId
              ) {
                (lhsQues._answer = void 0),
                  instance._parent.setAnswerMapping(instance, void 0);
                break;
              }
            }
          OverlayManager.handleSubmit(),
            (void 0 !== drop_idx && "" !== drop_idx) ||
              instance._parent.setAnswerMapping(instance, void 0),
            instance.removeShadow();
          var data = {
            type: evt.type,
            x: evt.stageX,
            y: evt.stageY,
            choice_id: instance._value.resindex,
            itemId: itemId,
            drop_id: drop_id,
            drop_idx: drop_idx,
            pos: [{ x: evt.stageX, y: evt.stageY }, dragPos],
            res: [{ rhs: drag_rsv }, { lhs: drop_rsv }],
            state:
              void 0 !== drop_idx && "" !== drop_idx
                ? "SELECTED"
                : "UNSELECTED",
            optionTag: "MTF",
          };
          EventBus.dispatch("optionDrop", instance._value),
            EventManager.processAppTelemetry({}, "DROP", instance, data),
            (Renderer.update = !0);
        });
    }
  },
  renderImage: function (value) {
    var data = {};
    data.asset = value.asset;
    var padx = this._data.padX || 0,
      pady = this._data.padY || 0;
    (data.x = padx),
      (data.y = pady),
      (data.w = 100 - 2 * padx),
      (data.h = 100 - 2 * pady),
      value.count
        ? ((data.count = value.count),
          (data.type = "gridLayout"),
          PluginManager.invoke(
            "placeholder",
            data,
            this,
            this._stage,
            this._theme
          ))
        : PluginManager.invoke("image", data, this, this._stage, this._theme),
      (this._data.asset = value.asset);
  },
  renderText: function (data) {
    data.$t = data.asset;
    var padx = this._data.padX || 0,
      pady = this._data.padY || 0;
    (data.x = padx),
      (data.y = pady),
      (data.w = 100 - 2 * padx),
      (data.h = 100 - 2 * pady),
      (data.fontsize = data.fontsize ? data.fontsize : 200);
    var align = this._data.align ? this._data.align.toLowerCase() : "center",
      valign = this._data.valign ? this._data.valign.toLowerCase() : "middle";
    (data.align = align),
      (data.valign = valign),
      PluginManager.invoke("text", data, this, this._stage, this._theme),
      (this._data.asset = data.asset);
  },
  initShadow: function (data) {
    var highlightColor = this._data.highlight || "#E89241",
      shadowColor = this._data.shadowColor || "#cccccc",
      shadowData = {
        x: 0,
        y: 0,
        w: 100,
        h: 100,
        type: "roundrect",
        fill: highlightColor,
        visible: !1,
        opacity: this._data.opacity || 1,
      };
    this._self.shadow = PluginManager.invoke(
      "shape",
      shadowData,
      this,
      this._stage,
      this._theme
    );
    var offsetX = this._data.offsetX || 0,
      offsetY = this._data.offsetY || 0,
      blur = this._data.blur || 2;
    this._self.shadow._self.shadow = new createjs.Shadow(
      shadowColor,
      offsetX,
      offsetY,
      blur
    );
  },
  setOptionIndex: function (data) {
    (data = JSON.stringify(data)),
      (data = data.replace(new RegExp("\\$current", "g"), this._index)),
      (data = JSON.parse(data)),
      (this._data = data);
  },
  renderInnerECML: function () {
    var innerECML = this.getInnerECML();
    if (!_.isEmpty(innerECML)) {
      var data = {},
        padx = this._data.padX || 0,
        pady = this._data.padY || 0;
      (data.x = padx),
        (data.y = pady),
        (data.w = 100 - 2 * padx),
        (data.h = 100 - 2 * pady),
        Object.assign(data, innerECML),
        PluginManager.invoke("g", data, this, this._stage, this._theme);
    }
  },
  resolveModelValue: function (data) {
    var instance = this,
      updateAction = function (action) {
        if (action.asset_model) {
          var model = action.asset_model,
            val = instance._stage.getModelValue(model);
          (action.asset = val), delete action.asset_model;
        }
      },
      updateEvent = function (evt) {
        _.isArray(evt.action)
          ? evt.action.forEach(function (action) {
              updateAction(action);
            })
          : evt.action && updateAction(evt.action);
      },
      events = void 0;
    data.events
      ? _.isArray(data.events)
        ? ((events = []),
          data.events.forEach(function (e) {
            events.push.apply(events, e.event);
          }))
        : (events = data.events.event)
      : (events = data.event),
      _.isArray(events)
        ? events.forEach(function (e) {
            updateEvent(e);
          })
        : events && updateEvent(events);
  },
});
PluginManager.registerPlugin("option", OptionPlugin);
var OptionsPlugin = Plugin.extend({
  _type: "options",
  _isContainer: !1,
  _render: !1,
  initPlugin: function (data) {
    var model = data.options,
      value = void 0;
    this._parent._controller &&
      model &&
      (value = this._parent._controller.getModelValue(model));
    var layout = data.layout;
    value &&
      _.isArray(value) &&
      value.length > 0 &&
      "table" === layout &&
      (_.isFinite(data.cols) || _.isFinite(data.rows)) &&
      this.renderTableLayout(value);
  },
  renderTableLayout: function (value) {
    var cols = void 0,
      rows = void 0,
      count = value.length;
    this._data.cols
      ? ((cols = Math.min(count, this._data.cols)),
        (rows = Math.ceil(count / cols)))
      : this._data.rows
      ? ((rows = Math.min(count, this._data.rows)),
        (cols = Math.ceil(count / rows)))
      : ((rows = 1), (cols = Math.min(count, this._data.cols)));
    var instance = this,
      marginX = 0;
    _.isFinite(this._data.marginX) && (marginX = this._data.marginX);
    var marginY = 0;
    _.isFinite(this._data.marginY) && (marginY = this._data.marginY);
    for (
      var padX = this._data.padX || 0,
        padY = this._data.padY || 0,
        cw = (this._data.w - (cols - 1) * marginX) / cols,
        ch = (this._data.h - (rows - 1) * marginY) / rows,
        index = 0,
        r = 0;
      r < rows;
      r++
    )
      for (var c = 0; c < cols; c++)
        if (c * r < count) {
          var data = {};
          (data.x = instance._data.x + c * (cw + marginX)),
            (data.y = instance._data.y + r * (ch + marginY)),
            (data.w = cw),
            (data.h = ch),
            (data.padX = padX),
            (data.padY = padY),
            (data.snapX = instance._data.snapX),
            (data.snapY = instance._data.snapY),
            (data.stroke = instance._data.stroke),
            (data["stroke-width"] = instance._data["stroke-width"]),
            (data.events = instance._data.events),
            (data.event = instance._data.event),
            this._parent._shadow && (data.shadowColor = this._parent._shadow),
            this._parent._highlight &&
              (data.highlight = this._parent._highlight),
            _.isFinite(this._parent._blur) && (data.blur = this._parent._blur),
            _.isFinite(this._parent._offsetX) &&
              (data.offsetX = this._parent._offsetX),
            _.isFinite(this._parent._offsetY) &&
              (data.offsetY = this._parent.offsetY),
            this._data.multiple && (data.multiple = !0),
            this._data.opacity && (data.opacity = this._data.opacity),
            (data.option = instance._data.options + "[" + index + "]");
          var innerECML = this.getInnerECML();
          _.isEmpty(innerECML) ||
            ("function" != typeof Object.assign && objectAssign(),
            Object.assign(data, innerECML)),
            (index += 1),
            PluginManager.invoke(
              "option",
              data,
              instance._parent,
              instance._stage,
              instance._theme
            );
        }
  },
});
PluginManager.registerPlugin("options", OptionsPlugin);
var PlaceHolderPlugin = Plugin.extend({
  _type: "placeholder",
  _isContainer: !0,
  _render: !0,
  initPlugin: function (data) {
    this._self = new createjs.Container();
    var dims = this.relativeDims();
    (this._self.x = dims.x), (this._self.y = dims.y);
    var instance = this;
    this.renderPlaceHolder(instance);
  },
  renderPlaceHolder: function (instance) {
    var data = instance._data;
    if (data.model) instance.param = instance._stage.getModelValue(data.model);
    else if (data.param)
      instance.param = instance._stage.params[data.param.trim()];
    else {
      var type = data.type;
      void 0 === type &&
        (data["param-type"]
          ? (type = instance.evaluateExpr(data["param-type"].trim()))
          : data["model-type"] &&
            (type = instance._stage.getModelValue(data["model-type"].trim())));
      var count = data.count;
      void 0 === count &&
        (data["param-count"]
          ? (count = instance.evaluateExpr(data["param-count"].trim()))
          : data["model-count"] &&
            (count = instance._stage.getModelValue(
              data["model-count"].trim()
            ))),
        (void 0 !== count && "" !== count) || (count = 1);
      var asset = data.asset;
      void 0 === asset &&
        (data["param-asset"]
          ? (asset = instance.evaluateExpr(data["param-asset"].trim()))
          : data["model-asset"] &&
            (asset = instance._stage.getModelValue(
              data["model-asset"].trim()
            ))),
        (instance.param = { type: type, asset: asset, count: count });
    }
    instance.param &&
      instance.param.asset &&
      ("gridLayout" == instance.param.type
        ? instance.renderGridLayout(instance, instance, data)
        : "image" == instance.param.type
        ? instance.renderImage(instance)
        : "text" == instance.param.type && instance.renderText(instance));
  },
  renderText: function (instance) {
    var param = instance.param,
      data = instance._data;
    (data.$t = param.asset),
      PluginManager.invoke(
        "text",
        data,
        instance._parent,
        instance._stage,
        instance._theme
      );
  },
  renderImage: function (instance) {
    var param = instance.param,
      data = instance._data;
    (data.asset = param.asset),
      PluginManager.invoke(
        "image",
        data,
        instance._parent,
        instance._stage,
        instance._theme
      );
  },
  getAssetBound: function (img, pad) {
    var imgBounds = img.getBounds(),
      imgW = imgBounds.width,
      imgH = imgBounds.height;
    (img.x = parseFloat(pad / 2)), (img.y = parseFloat(pad / 2));
    var imgCont = new createjs.Container();
    return (
      imgCont.addChild(img),
      imgCont.cache(0, 0, imgW + pad, imgH + pad),
      imgCont
    );
  },
  computePixel: function (area, repeat) {
    return Math.floor(Math.sqrt(parseFloat(area / repeat)));
  },
  renderGridLayout: function (parent, instance, data) {
    var assetId = instance.param.asset,
      assetSrc = instance._theme.getAsset(assetId),
      img = new createjs.Bitmap(assetSrc),
      getImage = function (cb) {
        if (_.isUndefined(assetSrc))
          return void console.error(
            '"' + assetId + '" Asset not found. Please check index.ecml.'
          );
        AssetManager.strategy.loadAsset(
          instance._stage._data.id,
          assetId,
          assetSrc,
          function () {
            (assetSrc = instance._theme.getAsset(assetId)),
              (img = new createjs.Bitmap(assetSrc)),
              _.isNull(img.getBounds())
                ? console.warn(
                    "Unable to find the Bounds value for " +
                      assetId +
                      ",  Source - " +
                      assetSrc
                  )
                : cb();
          }
        );
      },
      enableDrag = function (asset, snapTo) {
        (asset.cursor = "pointer"),
          asset.on("mousedown", function (evt) {
            this.parent.addChild(this),
              (this.offset = {
                x: this.x - evt.stageX,
                y: this.y - evt.stageY,
              });
          }),
          asset.on("pressmove", function (evt) {
            (this.x = evt.stageX + this.offset.x),
              (this.y = evt.stageY + this.offset.y),
              (Renderer.update = !0);
          }),
          snapTo &&
            asset.on("pressup", function (evt) {
              var plugin = PluginManager.getPluginObject(data.snapTo),
                dims = plugin._dimensions,
                x = dims.x,
                y = dims.y,
                maxX = dims.x + dims.w,
                maxY = dims.y + dims.h,
                snapSuccess = !1;
              this.x >= x &&
                this.x <= maxX &&
                this.y >= y &&
                this.y <= maxY &&
                (snapSuccess = !0),
                snapSuccess || ((this.x = this.origX), (this.y = this.origY));
            });
      },
      renderGridImages = function () {
        var x = 0,
          y = 0,
          pad =
            (instance.dimensions().w,
            instance.dimensions().h,
            instance.dimensions().pad || 0),
          n = instance.param.count,
          rectHeight = instance.dimensions().h,
          rectWidth = instance.dimensions().w,
          imgCountRow = Math.ceil(Math.sqrt((n * rectHeight) / rectWidth));
        if (
          Math.floor((imgCountRow * rectWidth) / rectHeight) * imgCountRow <
          n
        )
          var pixelPerImgX =
            rectWidth / Math.ceil((imgCountRow * rectWidth) / rectHeight);
        else pixelPerImgX = rectHeight / imgCountRow;
        var imgCountCol = Math.ceil(Math.sqrt((n * rectWidth) / rectHeight));
        if (
          Math.floor((imgCountCol * rectHeight) / rectWidth) * imgCountCol <
          n
        )
          var pixelPerImgY =
            rectHeight / Math.ceil((rectHeight * imgCountCol) / rectWidth);
        else pixelPerImgY = rectWidth / imgCountCol;
        var pixelPerImg =
            pixelPerImgX > pixelPerImgY ? pixelPerImgX : pixelPerImgY,
          param = instance.param,
          paddedImg = instance.getAssetBound(img, pad),
          assetBounds = paddedImg.getBounds(),
          assetW = assetBounds.width,
          assetH = assetBounds.height;
        (paddedImg.scaleY = parseFloat(pixelPerImg / assetH)),
          (paddedImg.scaleX = parseFloat(pixelPerImg / assetW)),
          (paddedImg.x = x + pad),
          (paddedImg.y = y + pad);
        for (
          var instanceBoundary = 0 + instance.dimensions().w, i = 0;
          i < param.count;
          i++
        ) {
          var clonedAsset = paddedImg.clone(!0);
          x + pixelPerImg > instanceBoundary &&
            ((x = 0), (y += pixelPerImg + pad)),
            (clonedAsset.x = x + pad),
            (clonedAsset.y = y + pad),
            (clonedAsset.origX = x + pad),
            (clonedAsset.origY = y + pad),
            (x += pixelPerImg),
            instance._data.enabledrag && enableDrag(clonedAsset, data.snapTo),
            (Renderer.update = !0),
            parent.addChild(clonedAsset);
        }
      };
    _.isNull(img.getBounds()) ? getImage(renderGridImages) : renderGridImages();
  },
  refresh: function () {
    this._self.removeAllChildren(),
      (this._currIndex = 0),
      this.renderPlaceHolder(this),
      (Renderer.update = !0);
  },
});
PluginManager.registerPlugin("placeholder", PlaceHolderPlugin);
var SetPlugin = Plugin.extend({
  _type: "set",
  _isContainer: !1,
  _modelName: void 0,
  _model: void 0,
  _index: 0,
  _render: !1,
  initPlugin: function (data) {
    (this._modelName = void 0), (this._model = void 0), (this._index = 0);
    var value = data.value;
    if (data["ev-value"])
      (this._modelName = data.param),
        (this._model = this.evaluateExpr(data["ev-value"])),
        (value = _.isArray(this._model) ? this._model[0] : this._model);
    else if (data.model)
      this._stage && (value = this._stage.getModelValue(data.model));
    else if (data["ev-model"] && this._stage) {
      var model = this.replaceExpressions(data["ev-model"]);
      (this._modelName = data.param),
        (this._model = this._stage.getModelValue(model)),
        (value = _.isArray(this._model) ? this._model[0] : this._model);
    }
    this.setParam(data.param, value, void 0, data.scope);
  },
  replaceExpressions: function (model) {
    for (
      var arr = [],
        idx = 0,
        nextIdx = model.indexOf("${", idx),
        endIdx = model.indexOf("}", idx + 1);
      -1 != nextIdx && -1 != endIdx;

    ) {
      var expr = model.substring(nextIdx, endIdx + 1);
      arr.push(expr),
        (idx = endIdx),
        (nextIdx = model.indexOf("${", idx)),
        (endIdx = model.indexOf("}", idx + 1));
    }
    if (arr.length > 0)
      for (var i = 0; i < arr.length; i++) {
        var val = this.evaluateExpr(arr[i]);
        model = model.replace(arr[i], val);
      }
    return model;
  },
  setParamValue: function (action) {
    var val,
      scope = action.scope,
      param = action.param,
      paramIdx = action["param-index"],
      paramKey = action["param-key"],
      paramExpr = action["ev-value"],
      paramModel = action["ev-model"];
    if (paramIdx)
      "previous" == paramIdx
        ? _.isArray(this._model) && this._model.length > 0
          ? (this._index > 0
              ? (this._index = this._index - 1)
              : (this._index = this._model.length - 1),
            (val = this._model[this._index]))
          : (val = this._model)
        : _.isArray(this._model)
        ? (this._index < this._model.length - 1
            ? (this._index = this._index + 1)
            : (this._index = 0),
          (val = this._model[this._index]))
        : (val = this._model);
    else if (paramKey)
      val =
        _.isObject(this._model) && this.model[paramKey]
          ? this.model[paramKey]
          : "";
    else if (paramExpr)
      (this._model = this.evaluateExpr(paramExpr)),
        (val = _.isArray(this._model) ? this._model[0] : this._model);
    else if (paramModel) {
      if (this._stage) {
        var model = this.replaceExpressions(paramModel);
        (this._model = this._stage.getModelValue(model)),
          (val = _.isArray(this._model) ? this._model[0] : this._model);
      }
    } else val = action["param-value"];
    var max = void 0;
    action["param-max"] &&
      ((max = this.evaluateExpr(action["param-max"])),
      val >= max && (val = action["param-incr"] = 0)),
      this.setParam(param, val, action["param-incr"], scope, max);
  },
  setParam: function (param, value, incr, scope, max) {
    scope && "app" == scope.toLowerCase()
      ? GlobalContext.setParam(param, value, incr, max)
      : scope && "stage" == scope.toLowerCase()
      ? this._stage.setParam(param, value, incr, max)
      : scope && "parent" == scope.toLowerCase()
      ? this._parent.setPluginParam(param, value, incr, max)
      : this._theme && this._theme.setParam(param, value, incr, max);
  },
  getParam: function (param) {
    var value = GlobalContext.getParam(param);
    return (
      value ||
        _.isUndefined(this._theme) ||
        (value = this._theme.getParam(param)),
      value || (value = this._stage.getParam(param)),
      value ||
        _.isUndefined(this._theme) ||
        (value = this._parent.getPluginParam(param)),
      value
    );
  },
});
PluginManager.registerPlugin("set", SetPlugin);
var SpritePlugin = Plugin.extend({
  _type: "sprite",
  _isContainer: !1,
  _render: !0,
  initPlugin: function (data) {
    var dims = this.relativeDims(),
      spriteJSON = this._theme.getAsset(data.asset),
      spriteImage = this._theme.getAsset(data.asset + "_image");
    if (spriteJSON && spriteImage) {
      spriteJSON.images.push(spriteImage);
      var spritesheet = new createjs.SpriteSheet(spriteJSON),
        grant = new createjs.Sprite(spritesheet);
      data.start && grant.gotoAndPlay(data.start),
        (grant.x = dims.x),
        (grant.y = dims.y),
        (this._self = grant),
        (this._self.scaleX = dims.w / spriteJSON.frames.width),
        (this._self.scaleY = dims.h / spriteJSON.frames.height),
        grant.addEventListener("change", function () {
          Renderer.update = !0;
        });
    } else console.error("Sprite sheet definition or image not found.");
  },
  play: function (action) {
    this._self.visible || (this._self.visible = !0),
      this._self.gotoAndPlay(action.animation);
  },
  togglePlay: function (action) {
    this._self.paused
      ? this._self.gotoAndPlay(action.animation)
      : (this._self.paused = !0);
  },
  pause: function () {
    this._self.paused = !0;
  },
  stop: function () {
    this._self.stop();
  },
});
PluginManager.registerPlugin("sprite", SpritePlugin);
var StagePlugin = Plugin.extend({
  _type: "stage",
  _isContainer: !0,
  _render: !0,
  params: {},
  _stageParams: {},
  _stageController: void 0,
  _stageControllerName: void 0,
  _templateVars: {},
  _controllerMap: {},
  _inputs: [],
  _startDrag: void 0,
  _doDrag: void 0,
  _stageInstanceId: void 0,
  _currentState: {},
  isStageStateChanged: void 0,
  maxTimeToLoad: 5e3,
  timeInstance: {},
  initPlugin: function (data) {
    var instance = this;
    this.destroyTimeInstance(data),
      (this._inputs = []),
      (this.params = {}),
      (this._self = new creatine.Scene());
    var dims = this.relativeDims();
    if (
      ((this._self.x = dims.x),
      (this._self.y = dims.y),
      (this._stageInstanceId =
        this._theme._currentStage +
        "__" +
        Math.random().toString(36).substr(2, 9)),
      data.iterate && data.var)
    ) {
      var controllerName = data.var.trim(),
        stageController = this._theme._controllerMap[data.iterate.trim()];
      stageController &&
        ((this._stageControllerName = controllerName),
        (this._stageController = stageController),
        this._stageController.next());
    }
    for (k in data)
      if ("param" === k)
        if (_.isArray(data[k])) {
          var instance = this;
          data[k].forEach(function (param) {
            instance.setParamValue(param);
          });
        } else this.setParamValue(data[k]);
      else
        "controller" === k &&
          (_.isArray(data[k])
            ? data[k].forEach(function (p) {
                this.addController(p);
              })
            : this.addController(data[k]));
    (this._startDrag = this.startDrag.bind(this)),
      (this._doDrag = this.doDrag.bind(this)),
      window.addEventListener(
        "native.keyboardshow",
        this.keyboardShowHandler.bind(this),
        !0
      ),
      window.addEventListener(
        "native.keyboardhide",
        this.keyboardHideHandler.bind(this),
        !0
      );
    var stageKey = this.getStagestateKey();
    "function" == typeof this._theme.getParam &&
      ((this._currentState = this._theme.getParam(stageKey)),
      _.isUndefined(this._currentState) &&
        this.setParam(this._type, {
          id: Renderer.theme._currentStage,
          stateId: stageKey,
        }));
    var isStageLoaded;
    if (
      (_.isUndefined(AssetManager.strategy) ||
        (isStageLoaded = AssetManager.strategy.isStageAssetsLoaded(data.id)),
      0 == isStageLoaded)
    ) {
      var timeInst;
      return (
        EventBus.addEventListener(
          data.id + "_assetsLoaded",
          instance.invokeRenderElements,
          this
        ),
        (timeInst = setTimeout(function () {
          (isStageLoaded = AssetManager.strategy.isStageAssetsLoaded(
            data.id
          )) ||
            instance._theme._currentStage != data.id ||
            (instance.showHideLoader("block"),
            (timeInst = setTimeout(function () {
              "block" == jQuery("#loaderArea").css("display") &&
                instance._theme._currentStage == instance._data.id &&
                instance.invokeRenderElements();
            }, instance.maxTimeToLoad)),
            (instance.timeInstance[data.id] = timeInst));
        }, 500)),
        void (this.timeInstance[data.id] = timeInst)
      );
    }
    this.invokeChildren(data, this, this, this._theme),
      this.logImpressionEvent();
  },
  logImpressionEvent: function () {
    _.isUndefined(Renderer.theme._previousStage) ||
      Renderer.theme._previousStage == Renderer.theme._currentStage ||
      TelemetryService.navigate(
        Renderer.theme._previousStage,
        Renderer.theme._currentStage,
        { duration: Date.now() / 1e3 - window.PLAYER_STAGE_START_TIME }
      );
  },
  destroyTimeInstance: function (data) {
    if (Renderer.theme && Renderer.theme.getStagesToPreLoad) {
      var stages = Renderer.theme.getStagesToPreLoad(data);
      !_.isUndefined(stages.next) &&
        this.timeInstance[stages.next] &&
        (clearTimeout(this.timeInstance[stages.next]),
        delete this.timeInstance[stages.next]),
        !_.isUndefined(stages.prev) &&
          this.timeInstance[stages.prev] &&
          (clearTimeout(this.timeInstance[stages.prev]),
          delete this.timeInstance[stages.prev]);
    }
  },
  invokeRenderElements: function () {
    this.invokeChildren(this._data, this, this, this._theme),
      this.logImpressionEvent(),
      (Renderer.update = !0),
      this.showHideLoader("none"),
      _.isUndefined(Renderer.theme) ||
        _.isUndefined(Renderer.theme._currentScene) ||
        Renderer.theme._currentScene.dispatchEvent("enter"),
      EventBus.removeEventListener(
        this._data.id + "_assetsLoaded",
        this.invokeRenderElements,
        this
      );
  },
  keyboardShowHandler: function (e) {
    if (((this._self.y = -e.keyboardHeight), !this._self.hitArea)) {
      var hit = new createjs.Shape();
      hit.graphics
        .beginFill("#000")
        .drawRect(0, 0, this._self.width, this._self.height),
        (this._self.hitArea = hit),
        console.info("HitArea added to the stage.");
    }
    (Renderer.update = !0),
      (this.keyboardH = e.keyboardHeight),
      this._self.addEventListener("mousedown", this._startDrag),
      (this.offset = new createjs.Point());
  },
  startDrag: function () {
    (this.offset.x = Renderer.theme._self.mouseX - this._self.x),
      (this.offset.y = Renderer.theme._self.mouseY - this._self.y),
      this._self.addEventListener("pressmove", this._doDrag);
  },
  doDrag: function (event) {
    (this._self.y >= this.keyboardH || this._self.y >= -this.keyboardH) &&
      ((this._self.y = event.stageY - this.offset.y),
      this._self.y < -this.keyboardH && (this._self.y = 1 - this.keyboardH),
      this._self.y > 0 && (this._self.y = 0),
      (Renderer.update = !0));
  },
  keyboardHideHandler: function (e) {
    (this._self.y = 0),
      this._self.removeEventListener("mousedown", this._startDrag),
      this._self.removeEventListener("pressmove", this._doDrag),
      (Renderer.update = !0);
  },
  setParamValue: function (p) {
    p.value
      ? (this.params[p.name] = p.value)
      : p.model && (this.params[p.name] = this.getModelValue(p.model));
  },
  addController: function (p) {
    var add = !0;
    if (p["ev-if"]) {
      var expr = p["ev-if"].trim();
      "${" != expr.substring(0, 2) && (expr = "${" + expr),
        "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}"),
        (add = this.evaluateExpr(expr));
    }
    if (add) {
      var controller = ControllerManager.get(p, this._theme.baseDir);
      controller && (this._controllerMap[p.name] = controller);
    }
  },
  getController: function (name) {
    var c;
    return (
      this._templateVars[name] && (name = this._templateVars[name]),
      this._stageControllerName === name
        ? (c = this._stageController)
        : this._controllerMap[name]
        ? (c = this._controllerMap[name])
        : this._theme._controllerMap[name] &&
          (c = this._theme._controllerMap[name]),
      c
    );
  },
  getTemplate: function (controller) {
    var t,
      c = this.getController(controller);
    return c && (t = c.getTemplate()), t;
  },
  getModelValue: function (param) {
    var val;
    if (param) {
      var tokens = param.split(".");
      if (tokens.length >= 2) {
        var name = tokens[0].trim(),
          idx = param.indexOf("."),
          paramName = param.substring(idx + 1);
        this._templateVars[name] &&
          ((name = this._templateVars[name]),
          name.indexOf(".") > 0 &&
            ((paramName =
              name.substring(name.indexOf(".") + 1) + "." + paramName),
            (name = name.substring(0, name.indexOf(".")))));
        var controller = this.getController(name);
        controller && (val = controller.getModelValue(paramName));
      } else {
        var controller = this.getController(param);
        controller && (val = controller.getModelValue());
      }
    }
    return val;
  },
  setModelValue: function (param, val) {
    if (param) {
      var tokens = param.split(".");
      if (tokens.length >= 2) {
        var name = tokens[0].trim(),
          idx = param.indexOf("."),
          paramName = param.substring(idx + 1),
          controller = this.getController(name);
        controller && (val = controller.setModelValue(paramName, val));
      }
    }
  },
  isStageStateChanged: function (isChanged) {
    (this._isStageStateChanged = isChanged),
      isChanged && (this._currentState.isEvaluated = !1);
  },
  evaluate: function (action) {
    var isEvaluated =
      !_.isUndefined(this._currentState) && this._currentState.isEvaluated;
    if (!1 !== this._isStageStateChanged || !isEvaluated) {
      var valid = !1,
        showImmediateFeedback = !0;
      if (this._stageController) {
        _.isUndefined(this._stageController._data.showImmediateFeedback) ||
          (showImmediateFeedback =
            this._stageController._data.showImmediateFeedback),
          this._inputs.forEach(function (input) {
            input.setModelValue();
          });
        var result = this._stageController.evalItem();
        if (
          (result && (valid = result.pass),
          (this._currentState.isEvaluated = !0),
          EventBus.dispatch("evaluated", result),
          this.isStageStateChanged(!1),
          showImmediateFeedback)
        ) {
          if (1 == valid) {
            OverlayManager.showFeeback(valid) ||
              this.dispatchEvent(action.success);
          } else {
            OverlayManager.showFeeback(valid) ||
              this.dispatchEvent(action.failure);
          }
          return;
        }
      }
    }
    OverlayManager.skipAndNavigateNext();
  },
  reload: function (action) {
    this._stageController && this._stageController.decrIndex(1),
      this._theme.replaceStage(this._data.id, action);
  },
  getStagestateKey: function () {
    return _.isUndefined(this._stageController)
      ? Renderer.theme._currentStage
      : Renderer.theme._currentStage +
          "_" +
          this._stageController._id +
          "_" +
          this._stageController._index;
  },
  setParam: function (param, value, incr, max) {
    var instance = this,
      fval = instance.params[param];
    incr ? (fval || (fval = 0), (fval += incr)) : (fval = value),
      0 > fval && (fval = 0),
      void 0 !== max && fval >= max && (fval = 0),
      (instance.params[param] = fval),
      this.stateConfig &&
        ((instance._currentState = $.extend(
          {},
          instance._currentState,
          instance.params
        )),
        (instance._currentState = JSON.parse(
          JSON.stringify(instance._currentState)
        )));
  },
  stateConfig: function () {
    return (
      !!_.isUndefined(this._stageController) ||
      void 0 == this._stageController._data.saveState ||
      1 == this._stageController._data.saveState
    );
  },
  getParam: function (param) {
    var instance = this,
      params = instance.params,
      expr = "params." + param;
    return eval(expr);
  },
  isItemScene: function () {
    var stageCtrl = this._stageController;
    return (
      !_.isUndefined(stageCtrl) &&
      !_.isUndefined(stageCtrl._model) &&
      "items" == stageCtrl._type
    );
  },
  isReadyToEvaluate: function () {
    var enableEval = !1,
      stageCtrl = this._stageController;
    if (
      !_.isUndefined(stageCtrl) &&
      "items" == stageCtrl._type &&
      !_.isUndefined(stageCtrl._model)
    ) {
      var modelItem = stageCtrl._model[stageCtrl._index];
      modelItem && "ftb" == modelItem.type.toLowerCase()
        ? (enableEval = !0)
        : _.isUndefined(this._currentState) ||
          _.isUndefined(this._currentState.isEvaluated) ||
          (enableEval = !this._currentState.isEvaluated);
    }
    return enableEval;
  },
  showHideLoader: function (val) {
    var elem = document.getElementById("loaderArea");
    _.isNull(elem) || (elem.style.display = val);
  },
});
PluginManager.registerPlugin("stage", StagePlugin);
var SummaryPlugin = Plugin.extend({
  _type: "summary",
  _isContainer: !1,
  _render: !1,
  initPlugin: function (data) {
    if (data.controller) {
      var message,
        controller = data.controller;
      this._theme._controllerMap[controller]
        ? (message = this._theme._controllerMap[controller].feedback())
        : this._stage._stageControllerName === controller
        ? (message = this._stage._stageController.feedback())
        : this._stage._controllerMap[controller] &&
          (message = this._stage._controllerMap[controller].feedback()),
        message &&
          "text" == message.type &&
          this.renderTextSummary(message.asset, data);
    }
  },
  renderTextSummary: function (text, data) {
    (data.$t = text),
      PluginManager.invoke(
        "text",
        data,
        this._parent,
        this._stage,
        this._theme
      );
  },
});
PluginManager.registerPlugin("summary", SummaryPlugin);
var TextPlugin = Plugin.extend({
  _type: "text",
  _isContainer: !1,
  _render: !0,
  lineHeightMagicNumber: 1.13,
  initPlugin: function (data) {
    var fontsize = data.fontsize || 20,
      dims = this.relativeDims(),
      lineHeight = data.lineHeight ? data.lineHeight : 0,
      outline = data.outline ? data.outline : 0;
    if (_.isFinite(fontsize) && data.w) {
      var exp = parseFloat((PluginManager.defaultResWidth * data.w) / 100),
        cw = this._parent.dimensions().w,
        width = parseFloat((cw * data.w) / 100),
        scale = parseFloat(width / exp);
      (fontsize = parseFloat(fontsize * scale)), (fontsize += "px");
    }
    var font = fontsize + " " + data.font;
    data.weight && (font = data.weight + " " + font);
    var textStr = "";
    data.$t || data.__text
      ? (textStr = data.$t || data.__text)
      : data.model
      ? (textStr = this._stage.getModelValue(data.model) || "")
      : data.param && (textStr = this.getParam(data.param.trim()) || "");
    var text = new createjs.Text(textStr, font, data.color || "#000000");
    (text.lineWidth = dims.w),
      (text.x = dims.x),
      (text.y = dims.y),
      (text.lineHeight = lineHeight * text.getMeasuredLineHeight()),
      (text.outline = outline);
    var align = data.align ? data.align.toLowerCase() : "left",
      valign = data.valign ? data.valign.toLowerCase() : "top";
    "left" == align
      ? (text.x = dims.x)
      : "right" == align
      ? (text.regX = -dims.w)
      : "center" == align && ((text.x = dims.x), (text.regX = -dims.w / 2)),
      "top" == valign
        ? ((text.y = dims.y), (text.textBaseline = "hanging"))
        : "bottom" == valign
        ? ((text.y = dims.y + dims.h - text.getMeasuredHeight()),
          (text.textBaseline = "hanging"))
        : "middle" == valign &&
          ((text.y = dims.y + dims.h / 2 - text.getMeasuredHeight() / 2),
          data.textBaseline
            ? (text.textBaseline = "top")
            : (text.textBaseline = "hanging")),
      data.textBaseline && (text.textBaseline = data.textBaseline),
      "V2" === data.version &&
        ((text.y = text.y + data.offsetY * parseFloat(fontsize)),
        (lineHeight =
          this.lineHeightMagicNumber * data.lineHeight * parseFloat(fontsize)),
        (text.lineHeight = lineHeight)),
      (text.textAlign = align),
      (text.valign = valign),
      (this._self = text);
  },
  refresh: function () {
    var instance = this,
      textStr = "";
    instance._data.$t || instance._data.__text
      ? (textStr = instance._data.$t || instance._data.__text)
      : instance._data.model
      ? (textStr = this._stage.getModelValue(instance._data.model) || "")
      : instance._data.param &&
        (textStr = this.getParam(instance._data.param.trim()) || ""),
      textStr &&
        "" != textStr &&
        ((this._self.text = textStr), (Renderer.update = !0));
  },
});
PluginManager.registerPlugin("text", TextPlugin);
var ThemePlugin = Plugin.extend({
  _type: "theme",
  _render: !1,
  update: !1,
  baseDir: "",
  loader: void 0,
  _director: !1,
  _currentScene: void 0,
  _currentStage: void 0,
  _previousStage: void 0,
  _canvasId: void 0,
  inputs: [],
  htmlElements: [],
  _animationEffect: { effect: "moveOut" },
  _themeData: void 0,
  _controllerMap: {},
  _isContainer: !1,
  _templateMap: {},
  _contentParams: {},
  _isSceneChanging: !1,
  _saveState: !0,
  _basePath: void 0,
  initPlugin: function (data) {
    this.addLoaderElement(),
      (this._controllerMap = {}),
      (this._canvasId = data.canvasId),
      (this._self = new createjs.Stage(data.canvasId)),
      (this._director = new creatine.Director(this._self)),
      (this._dimensions = {
        x: 0,
        y: 0,
        w: this._self.canvas.width,
        h: this._self.canvas.height,
      }),
      createjs.Touch.enable(this._self),
      this._self.enableMouseOver(10),
      (this._self.mouseMoveOutside = !0),
      (this._contentParams = {}),
      _.isUndefined(data.saveState) || (this._saveState = data.saveState);
  },
  mousePoint: function () {
    return { x: this._self.mouseX, y: this._self.mouseY };
  },
  updateCanvas: function (w, h) {
    (this._self.canvas.width = w),
      (this._self.canvas.height = h),
      (this._dimensions = {
        x: 0,
        y: 0,
        w: this._self.canvas.width,
        h: this._self.canvas.height,
      });
  },
  start: function (basePath) {
    try {
      var instance = this;
      if (
        ((instance._basePath = basePath),
        RecorderManager.init(),
        _.isArray(this._data.stage))
      )
        var startStage = _.find(this._data.stage, function (stage) {
          return stage.id == instance._data.startStage;
        });
      else if (this._data.stage.id == instance._data.startStage)
        var startStage = this._data.stage.id;
      if (_.isUndefined(startStage)) {
        var firstStage = _.find(this._data.stage, function (stage) {
          if (stage.param && _.isUndefined(firstStage)) return stage;
        });
        _.isUndefined(firstStage)
          ? checkStage("showAlert")
          : (_.isUndefined(this._data.startStage)
              ? console.warn("No start stage is defined, loading first stage")
              : console.warn(
                  "Startstage is not available, loading first stage"
                ),
            (this._data.startStage = firstStage.id));
      }
      AssetManager.init(this._data, basePath),
        AssetManager.initStage(this._data.startStage, null, null, function () {
          instance.render();
        });
    } catch (e) {
      showToaster("error", "Content fails to start"),
        EkstepRendererAPI.logErrorEvent(e, {
          severity: "fatal",
          type: "content",
          action: "play",
        }),
        console.warn("Theme start is failed due to", e);
    }
  },
  render: function () {
    var instance = this;
    ControllerManager.reset(),
      OverlayManager.reset(),
      EkstepRendererAPI.dispatchEvent("renderer:content:reset"),
      this._data.controller &&
        (_.isArray(this._data.controller)
          ? this._data.controller.forEach(function (p) {
              instance.addController(p);
            })
          : instance.addController(this._data.controller)),
      this._data.template &&
        (_.isArray(this._data.template)
          ? this._data.template.forEach(function (t) {
              instance._templateMap[t.id] = t;
            })
          : (instance._templateMap[this._data.template.id] =
              this._data.template)),
      _.isArray(this._data.stage) || (this._data.stage = [this._data.stage]),
      this._data.stage &&
        (this._data.stage.forEach(function (s) {
          instance.initStageControllers(s);
        }),
        this.invokeStage(this._data.startStage)),
      this.update(),
      console.log("ECML RENDERER - Content rendering started"),
      EkstepRendererAPI.dispatchEvent("renderer:content:start"),
      TelemetryService.navigate(
        EkstepRendererAPI.getCurrentStageId(),
        EkstepRendererAPI.getCurrentStageId(),
        { duration: Date.now() / 1e3 - window.PLAYER_STAGE_START_TIME }
      );
  },
  addController: function (p) {
    var controller = ControllerManager.get(p, this.baseDir);
    controller && (this._controllerMap[p.name] = controller);
  },
  initStageControllers: function (stage) {
    stage.controller &&
      (_.isArray(stage.controller)
        ? stage.controller.forEach(function (p) {
            ControllerManager.get(p, this.baseDir);
          })
        : ControllerManager.get(stage.controller, this.baseDir));
  },
  reRender: function () {
    var controller;
    for (k in this._controllerMap)
      (controller = this._controllerMap[k]), controller.reset();
    (this._contentParams = {}),
      this._self.clear(),
      this._self.removeAllChildren(),
      this.render();
  },
  update: function () {
    this._self.update();
  },
  tick: function () {
    this._self.tick();
  },
  restart: function () {
    var gameId = TelemetryService.getGameId(),
      version = TelemetryService.getGameVer(),
      instance = this,
      telemetryEndData = {};
    (telemetryEndData.stageid = getCurrentStageId()),
      (telemetryEndData.progress = logContentProgress()),
      TelemetryService.end(telemetryEndData),
      AssetManager.initStage(this._data.startStage, null, null, function () {
        gameId && version && TelemetryService.start(gameId, version),
          instance.render();
      });
  },
  getAsset: function (aid) {
    return AssetManager.getAsset(this._currentStage, aid);
  },
  getMedia: function (aid) {
    return _.find(this._data.manifest.media, function (item) {
      return item.id == aid;
    });
  },
  addChild: function (child, childPlugin) {
    var instance = this;
    child.on("sceneenter", function () {
      instance.enableInputs(),
        (instance._isSceneChanging = !1),
        instance.preloadStages(),
        childPlugin.uncache(),
        OverlayManager.init(),
        (Renderer.update = !0);
    });
    var nextIdx = this._currIndex++;
    this._currentScene
      ? (this._currentScene.dispatchEvent("exit"),
        (this._currentScene = childPlugin),
        this._director.replace(
          child,
          this.getTransitionEffect(this._animationEffect)
        ))
      : ((this._currentScene = childPlugin), this._director.replace(child)),
      document.fonts.ready.then(function () {
        Renderer.update = !0;
      }),
      childPlugin.setIndex(nextIdx);
  },
  replaceStage: function (stageId, effect) {
    AudioManager.stopAll(),
      RecorderManager.stopRecording(),
      this.disableInputs(),
      (this.inputs = []),
      this.removeHtmlElements(),
      (this.htmlElements = []),
      (this._animationEffect = effect),
      TimerManager.destroy(),
      _.isUndefined(this._currentScene) ||
        EventBus.removeEventListener(
          this._currentScene._id + "_assetsLoaded",
          this._currentScene.invokeRenderElements,
          this
        ),
      stageId ? this.invokeStage(stageId) : OverlayManager.moveToEndPage();
  },
  invokeStage: function (stageId) {
    var stage = _.clone(_.findWhere(this._data.stage, { id: stageId }));
    stage &&
      stage.extends &&
      ((baseStage = _.findWhere(this._data.stage, { id: stage.extends })),
      (stage = this.mergeStages(stage, baseStage))),
      (this._previousStage = this._currentStage),
      (this._currentStage = stageId),
      PluginManager.invoke("stage", stage, this, null, this);
  },
  preloadStages: function () {
    var stagesToLoad = this.getStagesToPreLoad(this._currentScene._data),
      instance = this;
    AssetManager.initStage(
      stagesToLoad.stage,
      stagesToLoad.next,
      stagesToLoad.prev,
      function () {
        instance._currentScene.dispatchEvent("enter");
      }
    );
  },
  mergeStages: function (stage1, stage2) {
    for (k in stage2)
      if ("id" !== k) {
        var attr = stage2[k];
        stage1[k]
          ? (_.isArray(stage1[k]) || (stage1[k] = [stage1[k]]),
            _.isArray(attr)
              ? stage1[k].push.apply(stage1[k], attr)
              : stage1[k].push(attr))
          : (stage1[k] = attr);
      }
    return stage1;
  },
  isStageChanging: function () {
    return this._isSceneChanging;
  },
  transitionTo: function (action) {
    if (!this._isSceneChanging) {
      var stage = this._currentScene;
      this.setParam(stage.getStagestateKey(), stage._currentState),
        RecorderManager.stopRecording(),
        AudioManager.stopAll(),
        TimerManager.stopAll(this._currentStage),
        action.transitionType || (action.transitionType = action.param),
        "skip" === action.transitionType
          ? this.jumpToStage(action)
          : ((this._isSceneChanging = !0),
            "previous" === action.transitionType
              ? stage._stageController && stage._stageController.hasPrevious()
                ? (stage._stageController.decrIndex(2),
                  this.replaceStage(stage._data.id, action))
                : (stage._stageController &&
                    (stage._stageController.setIndex(-1),
                    1 == action.reset && stage._stageController.reset()),
                  this.replaceStage(action.value, action))
              : "next" === action.transitionType &&
                stage._stageController &&
                stage._stageController.hasNext()
              ? this.replaceStage(stage._data.id, action)
              : this.jumpToStage(action));
    }
  },
  jumpToStage: function (action) {
    stage._stageController && action.reset && stage._stageController.reset(),
      this.replaceStage(action.value, action);
  },
  removeHtmlElements: function () {
    var gameAreaEle = jQuery("#" + Renderer.divIds.gameArea),
      chilElemtns = gameAreaEle.children();
    jQuery(chilElemtns).each(function () {
      "overlay" !== this.id &&
        "gameCanvas" !== this.id &&
        jQuery(this).remove();
    });
  },
  disableInputs: function () {
    this.inputs.forEach(function (inputId) {
      var element = document.getElementById(inputId);
      _.isNull(element) || (element.style.display = "none");
    });
  },
  enableInputs: function () {
    this.inputs.forEach(function (inputId) {
      var element = document.getElementById(inputId);
      _.isNull(element) || (element.style.display = "block");
    });
  },
  getTransitionEffect: function (animation) {
    var d = this.getDirection(animation.direction),
      e = this.getEase(animation.ease),
      t = animation.duration;
    animation.effect = animation.effect || "scroll";
    var effect;
    switch (animation.effect.toUpperCase()) {
      case "SCALEIN":
        effect = new creatine.transitions.ScaleIn(e, t);
        break;
      case "SCALEOUT":
        effect = new creatine.transitions.ScaleOut(e, t);
        break;
      case "SCALEINOUT":
        effect = new creatine.transitions.ScaleInOut(e, t);
        break;
      case "MOVEIN":
        effect = new creatine.transitions.MoveIn(d, e, t);
        break;
      case "SCROLL":
        effect = new creatine.transitions.Scroll(d, e, t);
        break;
      case "FADEIN":
        effect = new creatine.transitions.FadeIn(e, t);
        break;
      case "FADEOUT":
        effect = new creatine.transitions.FadeOut(e, t);
        break;
      case "FADEINOUT":
        effect = new creatine.transitions.FadeInOut(e, t);
        break;
      default:
        effect = new creatine.transitions.MoveOut(d, e, t);
    }
    return effect;
  },
  getDirection: function (d) {
    return void 0 === d ? d : eval("creatine." + d.toUpperCase());
  },
  getEase: function (e) {
    return void 0 === e ? e : eval("createjs.Ease." + e);
  },
  getStagesToPreLoad: function (stageData) {
    var params = stageData.param;
    params || (params = []), _.isArray(params) || (params = [params]);
    var next = _.findWhere(params, { name: "next" }),
      prev = _.findWhere(params, { name: "previous" }),
      nextStageId = void 0,
      prevStageId = void 0;
    return (
      next && (nextStageId = next.value),
      prev && (prevStageId = prev.value),
      { stage: stageData.id, next: nextStageId, prev: prevStageId }
    );
  },
  cleanUp: function () {
    createjs.Touch.disable(this._self);
  },
  pause: function () {
    this._currentStage && AssetManager.stopStageAudio(this._currentStage);
  },
  resume: function () {},
  setParam: function (param, value, incr, max) {
    var instance = this,
      fval = instance._contentParams[param];
    incr ? (void 0 === fval && (fval = 0), (fval += incr)) : (fval = value),
      0 > fval && (fval = 0),
      void 0 !== max && fval >= max && (fval = 0),
      (instance._contentParams[param] = fval);
  },
  getParam: function (param) {
    var instance = this,
      params;
    if (instance._saveState) return instance._contentParams[param];
    var params = instance._contentParams,
      expr = "params." + param;
    return eval(expr);
  },
  addLoaderElement: function () {
    var gameArea = document.getElementById(Renderer.divIds.gameArea),
      loaderArea = document.createElement("div");
    (loaderArea.id = "loaderArea"),
      (loaderArea.innerHTML =
        '<div class="loader-popup"><div class="preloader-wrapper-area"></div><div class="preloader-wrapper-area-text">Please Wait.. We are getting things ready for you</div></div>'),
      gameArea.parentElement.appendChild(loaderArea);
  },
  getStageDataById: function (stageId) {
    var stageData = void 0;
    return (
      this._data.stage.forEach(function (element, index) {
        element.id === stageId && (stageData = element);
      }),
      stageData
    );
  },
  clearStage: function () {
    this._self.clear();
  },
});
PluginManager.registerPlugin("theme", ThemePlugin);
var TweenPlugin = AnimationPlugin.extend({
  _animateFn: void 0,
  initPlugin: function (data, plugin) {
    var to = data.to,
      loop = data.loop;
    _.isArray(to) || (to = [to]);
    var loopStr = "";
    loop && (loopStr = ", loop:true");
    var fn = "(function() {return function(plugin, cb){";
    (fn += "createjs.Tween.get(plugin, {override:true " + loopStr + "})"),
      to.forEach(function (to) {
        var data = _.isString(to.__cdata) ? JSON.parse(to.__cdata) : to.__cdata,
          relDims = plugin.getRelativeDims(data);
        (data.x = relDims.x),
          (data.y = relDims.y),
          (data.width = relDims.w),
          (data.height = relDims.h),
          (data.scaleX = plugin._self.scaleX * data.scaleX),
          (data.scaleY = plugin._self.scaleY * data.scaleY),
          (fn +=
            ".to(" +
            JSON.stringify(data) +
            "," +
            to.duration +
            ", createjs.Ease." +
            to.ease +
            ")");
      }),
      (fn += '.call(function() {cb({status: "success"})})'),
      (fn +=
        '.addEventListener("change", function(event) {Renderer.update = true;'),
      data.widthChangeEvent &&
        (fn += "AnimationManager.widthHandler(event, plugin);"),
      (fn += "})}})()"),
      (this._animateFn = fn);
  },
  animate: function (plugin, cb) {
    cb ||
      (cb = function (resp) {
        console.info("Tween execution completed.");
      });
    var fn = this._animateFn.replace("COMPLETE_CALLBACK", cb.toString()),
      animationFn = eval(fn);
    animationFn.apply(null, [plugin._self, cb]);
  },
});
AnimationManager.registerPlugin("tween", TweenPlugin);
var ScribblePlugin = Plugin.extend({
  _type: "scribble",
  _render: !0,
  _isContainer: !0,
  _data: void 0,
  _oldPt: void 0,
  _oldMidPt: void 0,
  _startPoint: void 0,
  _endPoint: void 0,
  initPlugin: function (data) {
    this._data = data;
    var dims = (data.color, data.fill, this.relativeDims());
    (this._self = new createjs.Container()),
      (this._self.x = dims.x),
      (this._self.y = dims.y),
      this._self.on("mousedown", this.handleMouseDown.bind(this), !0),
      createjs.Ticker.setFPS(50),
      (data.opacity = "0" == data.opacity ? "0.01" : data.opacity);
    var shapeData = { shape: { type: "rect", x: 0, y: 0, w: 100, h: 100 } };
    data.fill && (shapeData.shape.fill = data.fill),
      data.stroke && (shapeData.shape.stroke = data.stroke),
      _.isUndefined(data.opacity) || (shapeData.shape.opacity = data.opacity),
      data["stroke-width"] &&
        (shapeData.shape["stroke-width"] = data["stroke-width"]),
      data.rotate && (shapeData.shape.rotate = data.rotate),
      this.invokeChildren(shapeData, this, this._stage, this._theme),
      (this.paintBrush = new createjs.Shape()),
      (this.paintBrush.x = 0),
      (this.paintBrush.y = 0),
      this._self.addChild(this.paintBrush);
  },
  setBounderies: function () {
    if (!this._startPoint || !this._endPoint) {
      var dims = this.relativeDims(),
        startPoint = this._self.localToGlobal(0, 0);
      this._startPoint = new createjs.Point(startPoint.x + 5, startPoint.y + 5);
      var x = startPoint.x + dims.w - 5,
        y = startPoint.y + dims.h - 5;
      this._endPoint = new createjs.Point(x, y);
    }
  },
  handleMouseDown: function (event) {
    this.setBounderies();
    var mousePoint = { x: event.stageX, y: event.stageY };
    (mousePoint = this._self.globalToLocal(mousePoint.x, mousePoint.y)),
      (this._oldPt = new createjs.Point(mousePoint.x, mousePoint.y)),
      this._self.on("pressmove", this.handleMouseMove.bind(this), !0),
      this._self.on("pressup", this.handleMouseUp.bind(this), !0);
  },
  handleMouseMove: function (event) {
    var mousePoint = { x: event.stageX, y: event.stageY },
      thickness = this.isInt(this._data.thickness) ? this._data.thickness : 3;
    mousePoint.x > this._startPoint.x &&
      mousePoint.x < this._endPoint.x &&
      mousePoint.y > this._startPoint.y &&
      mousePoint.y < this._endPoint.y &&
      ((mousePoint = this._self.globalToLocal(mousePoint.x, mousePoint.y)),
      this.paintBrush.graphics
        .setStrokeStyle(thickness, "round")
        .beginStroke(this._data.color || "#000"),
      this.paintBrush.graphics
        .mt(this._oldPt.x, this._oldPt.y)
        .lineTo(mousePoint.x, mousePoint.y),
      (this._oldPt = new createjs.Point(mousePoint.x, mousePoint.y)),
      (Renderer.update = !0));
  },
  handleMouseUp: function (event) {
    this._self.off("pressmove", this.handleMouseMove),
      this._self.off("pressup", this.handleMouseUp);
  },
  clear: function (action) {
    this.paintBrush.graphics.clear(), (Renderer.update = !0);
  },
  isInt: function (value) {
    var x = parseFloat(value);
    return !isNaN(value) && (0 | x) === x;
  },
  show: function () {
    (this._self.visible = this._self.parent.visible = !0),
      (Renderer.update = !0);
  },
  hide: function () {
    (this._self.visible = this._self.parent.visible = !1),
      (Renderer.update = !0);
  },
  toggleShow: function () {
    (this._self.visible = this._self.parent.visible = !this._self.visible),
      (Renderer.update = !0);
  },
  drawBorder: function () {},
});
PluginManager.registerPlugin("scribble", ScribblePlugin);
var VideoPlugin = Plugin.extend({
  _type: "video",
  _render: !0,
  _data: void 0,
  _instance: void 0,
  _defaultStart: 50,
  _replayIcon: "assets/icons/video_replay.png",
  isStreaming: !1,
  initPlugin: function (data) {
    (this._data = data),
      (this._data.muted = !!AudioManager.muted || this._data.muted),
      this._data &&
        (_.isUndefined(this._data.autoplay) && (this._data.autoplay = !0),
        _.isUndefined(this._data.controls) && (this._data.controls = !1)),
      (_instance = this),
      _instance.loadVideo(data);
  },
  loadVideo: function (data) {
    if (!data.asset) return !1;
    var lItem = this.createVideoElement(),
      videoEle = this.getVideo();
    this.isStreaming || videoEle.load(),
      this.registerEvents(),
      (this._self = new createjs.Bitmap(lItem)),
      1 == data.autoplay && this.play();
  },
  registerEvents: function () {
    var videoEle = this.getVideo();
    jQuery(videoEle).bind("play", this.handleTelemetryLog),
      jQuery(videoEle).bind("pause", this.handleTelemetryLog),
      jQuery(videoEle).bind("error", this.logConsole),
      jQuery(videoEle).bind("abort", this.logConsole),
      jQuery(videoEle).bind("loadeddata", this.onLoadData),
      jQuery(videoEle).bind("ended", this.showReplay),
      EkstepRendererAPI.addEventListener(
        "renderer:overlay:mute",
        this.muteAll,
        this
      ),
      EkstepRendererAPI.addEventListener(
        "renderer:overlay:unmute",
        this.unmuteAll,
        this
      );
  },
  handleTelemetryLog: function (event) {
    var action = {},
      videoEle = event.target;
    (action.asset = videoEle.id),
      (action.stageId = Renderer.theme._currentStage),
      "pause" === event.type &&
        ((event.type = videoEle.currentTime > 0 ? "pause" : "stop"),
        videoEle.ended || _instance.sendTelemeteryData(action, event.type)),
      "play" === event.type &&
        (videoEle.autoplay || _instance.sendTelemeteryData(action, event.type),
        (videoEle.autoplay = void 0));
  },
  onLoadData: function () {
    1 == _instance.autoplay && _instance.play();
  },
  logConsole: function (e) {
    console.warn("This video has", e);
  },
  sendTelemeteryData: function (action, subType) {
    action &&
      EventManager.processAppTelemetry(action, "OTHER", this._instance, {
        subtype: subType.toUpperCase(),
      });
  },
  play: function (action) {
    var videoEle = this.getVideo(action);
    videoEle.paused && videoEle.readyState > 2
      ? this.start(videoEle)
      : console.warn("Video is not ready to play", videoEle.readyState);
  },
  pause: function (action) {
    var videoEle = this.getVideo(action);
    _.isUndefined(videoEle)
      ? console.info("video pause failed")
      : videoEle.pause();
  },
  stop: function (action) {
    var videoEle = this.getVideo(action);
    videoEle.pause(), (videoEle.currentTime = 0);
  },
  replay: function () {
    (this.getVideo().currentTime = 0), this.play();
  },
  start: function (videoEle) {
    var delay = _.isUndefined(this._data.delay)
      ? this._defaultStart
      : this._data.delay;
    (this._data.delay = this._defaultStart),
      setTimeout(function () {
        videoEle.play();
      }, delay);
  },
  getVideo: function (action) {
    return _.isUndefined(action)
      ? document.getElementById(this._data.asset)
      : document.getElementById(action.asset);
  },
  setVideoStyle: function (jqVideoEle) {
    var dims = this.relativeDims();
    jQuery(jqVideoEle)
      .attr("id", this._data.asset)
      .prop({
        autoplay: this._data.autoplay,
        muted: this._data.muted,
        controls: this._data.controls,
        width: dims.w,
        height: dims.h,
      })
      .css({
        position: "absolute",
        left: dims.x + "px",
        top: dims.y + "px",
        display: "block",
      });
  },
  addVideoElement: function (jqVideoEle) {
    this._theme.htmlElements.push(jQuery(jqVideoEle).attr("id"));
    var videoEle = this.getVideo(),
      div = document.getElementById("gameArea");
    div.insertBefore(videoEle, div.childNodes[0]);
  },
  createVideoElement: function () {
    videojs.getComponent("Component").prototype.emitTapEvents = function () {};
    var videoAsset;
    videoAsset = this._theme.getAsset(this._data.asset);
    var asset;
    if (
      (_.isUndefined(window.content.assetsMap) ||
        ((asset = _.findWhere(window.content.assetsMap, {
          identifier: this._data.asset,
        })) &&
          asset.streamingUrl &&
          ((videoAsset = asset.streamingUrl), (this.isStreaming = !0))),
      this.isStreaming)
    ) {
      var dims = this.relativeDims(),
        src = videoAsset;
      (videoAsset = document.createElement("video")),
        (videoAsset.style.width = dims.w + "px"),
        (videoAsset.style.height = dims.h + "px"),
        (videoAsset.style.position = "absolute"),
        (videoAsset.style.left = dims.x + "px"),
        (videoAsset.style.top = dims.y + "px"),
        (videoAsset.controls = this._data.controls),
        (videoAsset.autoplay = this._data.autoplay),
        (videoAsset.muted = this._data.muted),
        (videoAsset.className = "video-js vjs-default-skin"),
        (videoAsset.id = this._data.asset),
        jQuery(videoAsset).insertBefore("#gameArea");
      var source = document.createElement("source");
      (source.src = src),
        (source.type = "application/x-mpegURL"),
        videoAsset.appendChild(source),
        videojs.getPlayers()[this._data.asset] &&
          delete videojs.getPlayers()[this._data.asset];
      var videoPlayer = videojs(this._data.asset, {
        controls: this._data.controls,
        autoplay: this._data.autoplay,
        preload: "auto",
        inactivityTimeout: 0,
      });
      return (
        videojs(videoAsset.id).ready(function () {
          var videoItem = document.getElementById(videoAsset.id);
          (videoItem.style.width = "100%"),
            (videoItem.style.height = "100%"),
            (videoItem.style.top = 0),
            (videoItem.style.left = 0);
        }),
        this.addVideoElement(videoPlayer),
        videoPlayer
      );
    }
    if (videoAsset instanceof HTMLElement == 0) {
      var src = videoAsset;
      (videoAsset = document.createElement("video")),
        (videoAsset.src = src),
        videoAsset.addEventListener(
          "timeupdate",
          function () {
            videoAsset.setAttribute("controls", "controls");
          },
          !1
        );
    }
    var jqVideoEle = jQuery(videoAsset).insertBefore("#gameArea");
    _.isUndefined(this._data.type)
      ? console.warn("Video type is not defined")
      : jQuery(jqVideoEle).attr("type", this._data.type),
      this.setVideoStyle(jqVideoEle),
      this.addVideoElement(jqVideoEle);
    var videoEle = this.getVideo();
    return new createjs.Bitmap(videoEle);
  },
  showReplay: function (event) {
    try {
      var img =
          (_instance.getRelativeDims(
            org.ekstep.pluginframework.pluginManager.pluginInstances[
              event.target.id
            ]._data
          ),
          document.createElement("img")),
        replay_id = "replay_" + event.target.id;
      jQuery(img).attr({ src: _instance._replayIcon, id: replay_id }),
        _instance.disableBackground(event.target.id, !0),
        _.isNull(document.getElementById(replay_id)) &&
          jQuery(img).insertAfter("#" + _instance.id),
        window.screenTop || window.screenY
          ? _instance.onNormalScreen(event)
          : _instance.onFullScreen(event),
        jQuery("#" + replay_id).bind("click", _instance.hideReplay);
    } catch (e) {
      console.warn("video fails to show the poster", e);
    }
  },
  setReplayIconStyle: function (elementId, CustomStyleObj) {
    jQuery("#" + elementId).css(CustomStyleObj);
  },
  hideReplay: function (event) {
    var vidoeId = event.target.id.replace("replay_", "");
    _instance.disableBackground(vidoeId, !1),
      document.getElementById(vidoeId).play(),
      jQuery("#" + event.target.id).css("display", "none");
  },
  disableBackground: function (id, flag) {
    flag
      ? jQuery("#" + id).css({ opacity: "0.4", "pointer-events": "none" })
      : jQuery("#" + id).css({ opacity: "1", "pointer-events": " " });
  },
  onFullScreen: function (event) {
    var replay_id = "replay_" + event.target.id,
      element = document.getElementById(event.target.id),
      positionInfo = element.getBoundingClientRect();
    _instance.setReplayIconStyle(replay_id, {
      width: "100px",
      height: "100px",
      "z-index": "55555555555",
      position: "absolute",
      top: positionInfo.height / 2,
      left: positionInfo.width / 2,
      display: "block",
    });
  },
  onNormalScreen: function (event) {
    var replay_id = "replay_" + event.target.id,
      dims = _instance.getRelativeDims(
        org.ekstep.pluginframework.pluginManager.pluginInstances[
          event.target.id
        ]._data
      ),
      top = dims.y + (dims.h / 2 - 40) + "px",
      left = dims.x + (dims.w / 2 - 30) + "px";
    _instance.setReplayIconStyle(replay_id, {
      width: "50px",
      height: "50px",
      "z-index": "1",
      position: "absolute",
      top: top,
      left: left,
      display: "block",
    });
  },
  muteAll: function () {
    var videoElements = document.querySelectorAll("video");
    videoElements.length > 0 &&
      _.each(videoElements, function (videoElem) {
        videoElem.muted = !0;
      });
  },
  unmuteAll: function () {
    var videoElements = document.querySelectorAll("video");
    videoElements.length > 0 &&
      _.each(videoElements, function (videoElem) {
        videoElem.muted = !1;
      });
  },
});
PluginManager.registerPlugin("video", VideoPlugin);
var GridlayoutPlugin = LayoutPlugin.extend({
  _type: "grid",
  generateLayout: function () {
    var tableProps = this.getTableProperties(),
      marginX = 0;
    _.isFinite(this._data.marginX) && (marginX = this._data.marginX);
    var marginY = 0;
    _.isFinite(this._data.marginY) && (marginY = this._data.marginY);
    for (
      var cw = (100 - (tableProps.cols - 1) * marginX) / tableProps.cols,
        ch = (100 - (tableProps.rows - 1) * marginY) / tableProps.rows,
        r = 0;
      r < tableProps.rows;
      r++
    )
      for (var c = 0; c < tableProps.cols; c++)
        if (this._cells.length < this._cellsCount) {
          var data = {};
          (data.x = c * (cw + marginX)),
            (data.y = r * (ch + marginY)),
            (data.w = cw),
            (data.h = ch),
            this._cells.push(data);
        }
  },
  getTableProperties: function () {
    var cols = void 0,
      rows = void 0,
      count = this._cellsCount;
    return (
      this._data.rows && this._data.cols
        ? ((cols = this._data.cols), (rows = Math.ceil(count / cols)))
        : (this._data.rows && (rows = this._data.rows),
          this._data.cols && (cols = this._data.cols),
          this._data.rows
            ? (cols = Math.ceil(count / rows))
            : (rows = Math.ceil(count / cols))),
      { cols: cols, rows: rows }
    );
  },
});
PluginManager.registerPlugin("grid", GridlayoutPlugin);
var HighlightTextPlugin = HTMLPlugin.extend({
  _type: "htext",
  _wordIds: [],
  _timings: [],
  _isPlaying: !1,
  _isPaused: !1,
  _wordClass: "gc-ht-word",
  _listener: void 0,
  _audioInstance: void 0,
  _position: { previous: 0, current: 0, pause: 0 },
  _time: 0,
  initPlugin: function (data) {
    this._cleanupHighlight();
    var font,
      dims = this.relativeDims();
    data.id || (data.id = this._data.id = _.uniqueId("plugin")),
      data.highlight || (data.highlight = this._data.highlight = "#DDDDDD");
    var div = document.createElement("div");
    (div.id = data.id),
      (div.style.width = dims.w + "px"),
      (div.style.height = dims.h + "px"),
      (div.style.top = "-1000px"),
      (div.style.position = "relative");
    var fontsize = "1.2em";
    if (
      (data.fontsize && (fontsize = data.fontsize),
      isFinite(fontsize) && data.w)
    ) {
      var exp = parseFloat((PluginManager.defaultResWidth * data.w) / 100),
        cw = this._parent.dimensions().w,
        width = parseFloat((cw * data.w) / 100),
        scale = parseFloat(width / exp);
      (fontsize = parseFloat(fontsize * scale)), (fontsize += "px");
    }
    var h_offset = data.offsetX ? data.offsetX : 0,
      v_offset = data.offsetY ? data.offsetY : 0,
      Blur = data.blur ? data.blur : 1,
      shadow_color = data.shadow ? data.shadow : "#ccc",
      shadow =
        h_offset + "px " + v_offset + "px " + Blur + "px " + shadow_color;
    1 == /\d/.test(data.font)
      ? ((font = data.font), (div.style.font = data.font))
      : ((font = fontsize + " " + data.font),
        (div.style["font-family"] = data.font),
        (div.style["font-size"] = fontsize)),
      data.weight && (div.style.font = data.weight + " " + font),
      (div.style.outline = data.outline ? data.outline : 0),
      (div.style["line-height"] = data.lineHeight ? data.lineHeight : "1.2em"),
      (div.style["text-align"] = data.align ? data.align : "left"),
      (div.style["vertical-align"] = data.valign ? data.valign : "top"),
      (div.style.color = data.color ? data.color : "black"),
      (div.style.textShadow = shadow);
    var parentDiv = document.getElementById(Renderer.divIds.gameArea);
    parentDiv.insertBefore(div, parentDiv.childNodes[0]),
      data.timings &&
        (this._timings = _.map(data.timings.split(","), function (time) {
          return Number(Number(time).toFixed(0));
        }));
    var text = this._getText(),
      htmlText = this._tokenize(text);
    jQuery("#" + data.id).append(htmlText),
      (this._div = div),
      (this._self = new createjs.DOMElement(div)),
      (this._self.x = dims.x),
      (this._self.y = dims.y + 1e3),
      this._registerEvents(data.id);
  },
  getWordId: function (index) {
    return this._stage._data.id + "-text-" + this._data.id + "-word-" + index;
  },
  play: function (action) {
    var instance = this,
      audio = action.audio || this._data.audio;
    if (this._timings.length > 0)
      if (this._isPaused) instance._resume(action);
      else {
        this._isPlaying = !0;
        if (audio) {
          var soundInstance = this._playAudio(audio);
          soundInstance.on("complete", function () {
            instance._cleanupHighlight(),
              void 0 !== action.cb && action.cb({ status: "success" });
          }),
            (this._listener = function () {
              if (
                (_.isUndefined(instance._audioInstance) ||
                  _.isUndefined(instance._audioInstance.object)) &&
                instance._listener
              )
                return void createjs.Ticker.removeEventListener(
                  "tick",
                  instance._listener
                );
              (instance._position.current = Number(
                instance._audioInstance.object.position.toFixed(0)
              )),
                instance._highlight(),
                (instance._position.previous = instance._position.current);
            });
        } else
          (this._time = Date.now()),
            (this._listener = function () {
              instance._isPaused ||
                ((instance._position.current =
                  Date.now() - instance._time + instance._position.pause),
                instance._highlight(),
                instance._position.previous >
                  instance._timings[instance._timings.length - 1] + 500 &&
                  (instance._cleanupHighlight(),
                  void 0 !== action.cb && action.cb({ status: "success" })),
                (instance._position.previous = instance._position.current));
            });
        createjs.Ticker.addEventListener("tick", instance._listener);
      }
    else console.info("No timing data to play highlight text:", this._id);
  },
  pause: function (action) {
    if (this._isPlaying) {
      var instance = this,
        audio = action.audio || this._data.audio;
      this._timings.length > 0
        ? ((instance._isPaused = !0),
          audio
            ? AudioManager.pause({ asset: audio }, instance._audioInstance)
            : (instance._position.pause = instance._position.current))
        : console.info("No timing data:", this._id);
    } else console.info("highlight is not playing to pause:", this._id);
  },
  togglePlay: function (action) {
    this._isPlaying && !this._isPaused
      ? (this.pause(action),
        void 0 !== action.cb && action.cb({ status: "success" }))
      : this.play(action);
  },
  _resume: function (action) {
    var instance = this,
      audio = action.audio || this._data.audio;
    this._timings.length > 0
      ? ((instance._isPaused = !1),
        audio
          ? AudioManager.play(
              { asset: audio, stageId: instance._stage._id },
              instance._audioInstance
            )
          : (instance._time = Date.now()))
      : console.info("No timing data:", this._id);
  },
  stop: function (action) {
    var instance = this,
      audio = action.audio || this._data.audio;
    this._timings.length > 0
      ? (audio &&
          AudioManager.stop({ asset: audio, stageId: instance._stage._id }),
        instance._cleanupHighlight())
      : console.info("No timing data:", this._id);
  },
  _playAudio: function (audio) {
    var instance = this;
    return (
      (instance._data.audio = audio),
      (instance._audioInstance = AudioManager.play({
        asset: audio,
        stageId: this._stage._id,
      })),
      instance._audioInstance.object
    );
  },
  _highlight: function () {
    var instance = this;
    if (instance._position.current && instance._isPlaying) {
      var matches = _.filter(instance._timings, function (time) {
        return (
          time >= instance._position.previous &&
          time < instance._position.current
        );
      });
      matches.length > 0 &&
        _.each(matches, function (match) {
          var index = instance._timings.indexOf(match),
            wordId = instance.getWordId(index);
          instance._removeHighlight(), instance._addHighlight(wordId);
        });
    }
  },
  _cleanupHighlight: function () {
    (this._isPlaying = !1),
      this._removeHighlight(),
      this._listener &&
        createjs.Ticker.removeEventListener("tick", this._listener),
      this._audioInstance && (this._audioInstance = void 0),
      (this._time = 0),
      (this._position = { previous: 0, current: 0, pause: 0 });
  },
  _removeHighlight: function () {
    jQuery("." + this._wordClass).css({
      "background-color": "none",
      padding: "0px",
    });
  },
  _addHighlight: function (id) {
    jQuery("#" + id).css({ background: this._data.highlight });
  },
  _tokenize: function (text) {
    var htmlText = "";
    Replaced_text = text.replace(/(\r\n|\n|\r)/gm, " </br> ");
    var words = Replaced_text.split(" ");
    this._wordIds = [];
    var index = 0;
    for (i = 0; i < words.length; i++)
      if ("" === words[i])
        htmlText += '<span class="gc-ht-word">&nbsp;</span> ';
      else if ("</br>" === words[i])
        htmlText += '<span class="gc-ht-word"></br></span> ';
      else {
        var wordId = this.getWordId(index);
        this._wordIds.push(wordId),
          (htmlText +=
            '<span id="' +
            wordId +
            '" class="gc-ht-word">' +
            words[i] +
            "</span> "),
          index++;
      }
    return htmlText;
  },
  _getText: function () {
    var textStr = "";
    return (
      this._data.$t || this._data.__text
        ? (textStr = this._data.$t || this._data.__text)
        : this._data.model
        ? (textStr = this._stage.getModelValue(this._data.model) || "")
        : this._data.param &&
          (textStr = this.getParam(this._data.param.trim()) || ""),
      textStr
    );
  },
  _registerEvents: function (id) {
    var instance = this;
    jQuery("#" + id)
      .children()
      .each(function () {
        var data = jQuery(this).data();
        data &&
          data.event &&
          jQuery(this).click(function (event) {
            event.preventDefault(),
              instance._triggerEvent(data.event),
              console.info("Triggered event ", data.event);
          });
      });
  },
  _triggerEvent: function (event) {
    var plugin = PluginManager.getPluginObject(Renderer.theme._currentStage);
    (event = new createjs.Event(event)), plugin.dispatchEvent(event);
  },
});
PluginManager.registerPlugin("htext", HighlightTextPlugin);
var android = android || {};
(android.recorder = {
  start: function (path) {
    return new Promise(function (resolve, reject) {
      var result = {};
      if ("undefined" != typeof Media) {
        var media = new Media(
          path,
          function () {
            console.info("Audio recording successfull.");
          },
          function (err) {
            console.error("Error Audio recording: " + err.code);
          }
        );
        media.startRecord(),
          (result.media = media),
          (result.status = "success");
      } else (result.status = "success"), (result.errMessage = "Media is not available."), console.info("AndroidRecorder.startRecording called.");
      resolve(result);
    });
  },
  stop: function (instance) {
    return new Promise(function (resolve, reject) {
      var result = {};
      "undefined" != typeof Media
        ? instance && instance.media
          ? (instance.media.stopRecord(),
            instance.media.release(),
            (result = { status: "success" }))
          : (result = {
              status: "ERROR",
              errMessage: "Error recording not started.",
            })
        : (console.info("AndroidRecorder.stopRecording called."),
          (result = {
            status: "success",
            errMessage: "Media is not available.",
          })),
        resolve(result);
    });
  },
  process: function (path, lineIndex) {
    return new Promise(function (resolve, reject) {
      resolve({
        status: "success",
        result: { totalScore: 1 },
        errMessage: "Process recording for android is not integrated.",
      });
    });
  },
}),
  (speech = {
    mediaInstance: void 0,
    recording: !1,
    recorder:
      "undefined" != typeof AppConfig && AppConfig.recorder
        ? AppConfig.recorder
        : "android",
    recordingInstances: {},
    _root: void 0,
    getRecorder: function () {
      return "sensibol" == speech.recorder
        ? sensibol.recorder
        : android.recorder;
    },
    startRecording: function (path, cb) {
      (speech.recording = !1),
        speech
          .getRecorder()
          .start(path)
          .then(function (mediaInstance) {
            (speech.mediaInstance = mediaInstance),
              speech.mediaInstance &&
                "success" == speech.mediaInstance.status &&
                ((speech.recording = !0),
                (speech.mediaInstance.filePath = path)),
              cb(mediaInstance);
          })
          .catch(function (err) {
            console.error("Error start recording audio:", err),
              cb({ status: "error", error: err });
          });
    },
    stopRecording: function (cb) {
      speech.recording && speech.mediaInstance
        ? speech
            .getRecorder()
            .stop(speech.mediaInstance)
            .then(function (response) {
              "success" == response.status
                ? ((speech.recording = !1),
                  console.info(
                    "Audio file saved at ",
                    speech.mediaInstance.filePath
                  ),
                  cb(speech.mediaInstance))
                : cb(response);
            })
            .catch(function (err) {
              console.error("Error stop recording audio:", err),
                cb({ status: "error", error: err });
            })
        : cb({ status: "error", error: "no recording instance available." });
    },
    processRecording: function (lineindex, filePath, cb) {
      (filePath =
        filePath ||
        (speech.mediaInstance ? speech.mediaInstance.filePath : "")) &&
        lineindex &&
        speech
          .getRecorder()
          .process(filePath, lineindex)
          .then(function (response) {
            (speech.mediaInstance = void 0), cb(response);
          })
          .catch(function (err) {
            console.error("Error processing audio:", err),
              cb({ status: "error", error: err });
          });
    },
  }); // TODO: Temporary solution: To handle Questionset backward compatibility (online streaming in mobile)
var qspatch = {
  getPluginInstance: function (pluginObj) {
    if (pluginObj) {
      return pluginObj;
    } else {
      return false;
    }
  },
  handleAssetUrl: function () {
    var pluginInst = this.getPluginInstance(
      org.ekstep.contentrenderer.questionUnitPlugin
    );
    this.setPluginUrl(pluginInst, "AssetUrl");

    pluginInst = this.getPluginInstance(
      org.ekstep.questionunitmcq && org.ekstep.questionunitmcq.RendererPlugin
    );
    this.setPluginUrl(pluginInst, "AssetUrl");

    pluginInst = this.getPluginInstance(
      org.ekstep.keyboard && org.ekstep.contentrenderer.keyboardRenderer
    );
    this.setPluginUrl(pluginInst, "AssetUrl");

    pluginInst = this.getPluginInstance(
      org.ekstep.contentrenderer.questionUnitPlugin
    );
    this.setPluginUrl(pluginInst, "AudioUrl");

    pluginInst = this.getPluginInstance(
      org.ekstep.contentrenderer.questionUnitPlugin
    );
    this.setPluginUrl(pluginInst, "iconUrl");
  },
  setPluginUrl: function (pluginObj, urlType) {
    var instance = this;
    if (!pluginObj) {
      return;
    }

    switch (urlType) {
      case "AssetUrl":
        pluginObj.prototype.getAssetUrl = function (url) {
          if (isbrowserpreview) {
            return instance.validateUrl(url);
          } else {
            if (EkstepRendererAPI.isStreamingContent()) {
              // mobile online streaming
              if (url)
                return instance.validateUrl(
                  EkstepRendererAPI.getBaseURL() + url.substring(1, url.length)
                );
            } else {
              // Loading content from mobile storage ( OFFLINE )
              return instance.validateUrl(EkstepRendererAPI.getBaseURL() + url);
            }
          }
        };
        break;

      case "AudioUrl":
        pluginObj.prototype.getIcon = function (path, pluginId, pluginVer) {
          if (isbrowserpreview) {
            return instance.validateUrl(
              this.getAssetUrl(
                org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                  pluginId,
                  pluginVer,
                  path
                )
              )
            );
          } else {
            if (EkstepRendererAPI.isStreamingContent()) {
              // mobile online streaming
              if (path)
                return instance.validateUrl(
                  EkstepRendererAPI.getBaseURL() +
                    "content-plugins/" +
                    pluginId +
                    "-" +
                    pluginVer +
                    "/" +
                    path
                );
              //return org.ekstep.pluginframework.pluginManager.resolvePluginResource(pluginId, pluginVer, path);
            } else {
              // Loading content from mobile storage ( OFFLINE )
              return instance.validateUrl(
                EkstepRendererAPI.getBaseURL() +
                  "content-plugins/" +
                  pluginId +
                  "-" +
                  pluginVer +
                  "/" +
                  path
              );
            }
          }
        };
        break;

      case "iconUrl":
        pluginObj.prototype.getAudioIcon = function (path) {
          if (isbrowserpreview) {
            return instance.validateUrl(
              this.getAssetUrl(
                org.ekstep.pluginframework.pluginManager.resolvePluginResource(
                  this._manifest.id,
                  this._manifest.ver,
                  path
                )
              )
            );
          } else {
            if (EkstepRendererAPI.isStreamingContent()) {
              // mobile online streaming
              if (path)
                return instance.validateUrl(
                  EkstepRendererAPI.getBaseURL() +
                    "content-plugins/" +
                    this._manifest.id +
                    "-" +
                    this._manifest.ver +
                    "/" +
                    path
                );
              //return org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id, this._manifest.ver, path);
            } else {
              // Loading content from mobile storage ( OFFLINE )
              return instance.validateUrl(
                EkstepRendererAPI.getBaseURL() +
                  "content-plugins/" +
                  this._manifest.id +
                  "-" +
                  this._manifest.ver +
                  "/" +
                  path
              );
            }
          }
        };
        break;

      default:
        break;
    }
  },
  validateUrl: function (url) {
    if (!url) {
      return;
    }
    var regex = new RegExp("^(http|https)://", "i");
    if (regex.test(url)) {
      var tempUrl = url.split("://");
      if (tempUrl.length > 1) {
        var validString = tempUrl[1].split("//").join("/");
        return [tempUrl[0], validString].join("://");
      }
    } else {
      var tempUrl = url.split(":///");
      if (tempUrl.length > 1) {
        var validString = tempUrl[1].split("//").join("/");
        return [tempUrl[0], validString].join(":///");
      }
    }
    return url.split("//").join("/");
  },
  telemetryPatch: function () {
    var qsPlugins = [
      {
        id: "org.ekstep.questionunit.ftb",
        versions: ["1.0"],
        patchHandler: qspatch.ftbPatchHandler,
        type: "ftb",
      },
      {
        id: "org.ekstep.questionunit.reorder",
        versions: ["1.0"],
        patchHandler: qspatch.reorderPatchHandler,
        type: "reorder",
      },
      {
        id: "org.ekstep.questionunit.sequence",
        versions: ["1.0"],
        patchHandler: qspatch.sequencePatchHandler,
        type: "sequence",
      },
      {
        id: "org.ekstep.questionunit.mcq",
        versions: ["1.0", "1.1"],
        patchHandler: qspatch.mcqPatchHandler,
        type: "mcq",
      },
      {
        id: "org.ekstep.questionunit.mtf",
        versions: ["1.0", "1.1"],
        patchHandler: qspatch.mtfPatchHandler,
        type: "mtf",
      },
    ];
    var isPatchRequired = false;
    qsPlugins.every(function (plugin) {
      var isPatchPluginExist = Object.keys(
        org.ekstep.pluginframework.pluginManager.plugins
      ).includes(plugin.id);
      if (isPatchPluginExist) {
        var pluginObj =
          org.ekstep.pluginframework.pluginManager.plugins[plugin.id];
        if (plugin.versions.includes(pluginObj.m.ver)) {
          isPatchRequired = true;
          return false; //break
        }
      }
      return true; //continue
    });
    if (isPatchRequired == false || typeof QSTelemetryLogger == undefined)
      return false;
    // Function over-ride
    var super_QSTelemetryLogger_logAssessEnd = QSTelemetryLogger.logAssessEnd; //reference to original, if error thrown from patch code, original function will invoked as a fallback mechanism
    QSTelemetryLogger.logAssessEnd = function (result) {
      try {
        // if any error occurs, default logAssessEnd Event will be invoked
        var pluginToPatch;
        qsPlugins.every(function (plugin) {
          if (plugin.id == this._plugin._manifest.id) {
            pluginToPatch = plugin;
            return false;
          }
          return true;
        }, this);
        var tuple = {
          params: [],
          resvalues: [],
        };
        pluginToPatch.patchHandler.call(this, result, tuple); // tuple object will be updated as a result of calling the patchHandler function
        var data = qspatch.generateTelemetryData.call(this, result, tuple);
        data.type = pluginToPatch.type;
        TelemetryService.assessEnd(this._assessStart, data);
      } catch (err) {
        EkstepRendererAPI.logErrorEvent(err, {
          severity: "error",
          type: "plugin",
          action: "play",
        });
        super_QSTelemetryLogger_logAssessEnd(result);
      }
    };
  },
  ftbPatchHandler: function (result, tuple) {
    this._plugin._question.data.answer.forEach(function (expected, index) {
      var objProperty,
        objToPush = {};
      objProperty = index + 1;
      objToPush[objProperty] = JSON.stringify({
        text: expected,
      });
      tuple.params.push(objToPush);
    });
    if (this._plugin._question.config.evalUnordered) {
      tuple.params.push({
        eval: "unorder",
      });
    } else {
      tuple.params.push({
        eval: "order",
      });
    }
    result.values.forEach(function (actual, index) {
      if (actual.key) {
        var objProperty,
          objToPush = {};
        objProperty = index + 1;
        objToPush[objProperty] = JSON.stringify({
          text: actual.key,
        });
        tuple.resvalues.push(objToPush);
      }
    });
  },
  mcqPatchHandler: function (result, tuple) {
    result.state.options.forEach(function (option, index) {
      var objProperty,
        objToPush = {};
      objProperty = index + 1;
      objToPush[objProperty] = qspatch.generateTelemetryTupleValue(option);
      tuple.params.push(objToPush);
    });
    var correctAnwserIndex = result.state.options.findIndex(function (option) {
      return option.isCorrect == true;
    });
    tuple.params.push({
      answer: JSON.stringify({
        correct: [correctAnwserIndex + 1 + ""],
      }),
    });
    if (result.state.options && result.state.options[result.state.val]) {
      objToPush = {};
      objProperty = Number(result.state.val) + 1;
      objToPush[objProperty] = qspatch.generateTelemetryTupleValue(
        result.state.options[result.state.val]
      );
      tuple.resvalues.push(objToPush);
    }
  },
  mtfPatchHandler: function (result, tuple) {
    var lhsParamsAndResValue = [];
    var rhsParams = [];
    var answer = {
      lhs: [],
      rhs: [],
    };
    this._plugin._question.data.option.optionsRHS.forEach(function (
      rhs,
      index
    ) {
      var objProperty,
        objToPush = {};
      var lhs = this._plugin._question.data.option.optionsLHS[index];
      objProperty = index + 1;
      objToPush[objProperty] = qspatch.generateTelemetryTupleValue(lhs);
      lhsParamsAndResValue.push(objToPush);

      objToPush = {};
      objToPush[objProperty] = qspatch.generateTelemetryTupleValue(rhs);
      rhsParams.push(objToPush);
      answer.lhs.push(index + 1 + "");
      answer.rhs[rhs.mapIndex - 1] = "" + (index + 1);
    },
    this);
    tuple.params.push({
      lhs: JSON.stringify(lhsParamsAndResValue),
    });
    tuple.params.push({
      rhs: JSON.stringify(rhsParams),
    });
    tuple.params.push({
      answer: JSON.stringify(answer),
    });
    var rhsResvalues = [];
    if (result.state && result.state.val && result.state.val.rhs_rearranged) {
      // Handler for MTF-1.1
      result.state.val.rhs_rearranged.forEach(function (rhsIndex, index) {
        var objProperty,
          objToPush = {};
        objProperty = index + 1;
        objToPush[objProperty] = qspatch.generateTelemetryTupleValue(
          result.state.rhs_rendered.find(function (rhs) {
            return rhs.mapIndex == rhsIndex;
          })
        );
        rhsResvalues.push(objToPush);
      });
    } else {
      // Handler for MTF-1.0
      this._plugin._selectedAnswers &&
        Object.keys(this._plugin._selectedAnswers).forEach(function (key) {
          var objProperty,
            objToPush = {};
          objProperty = Number(key) + 1;
          value = this._plugin._question.data.option.optionsRHS.find(function (
            rhs
          ) {
            return rhs.mapIndex == this._plugin._selectedAnswers[key].mapIndex;
          });
          objToPush[objProperty] = qspatch.generateTelemetryTupleValue(value);
          rhsResvalues.push(objToPush);
        }, this);
    }
    tuple.resvalues.push({
      lhs: JSON.stringify(lhsParamsAndResValue),
    });
    tuple.resvalues.push({
      rhs: JSON.stringify(rhsResvalues),
    });
  },
  reorderPatchHandler: function (result, tuple) {
    var answer = {
      seq: [],
    };
    result.state.keys.forEach(function (key, index) {
      var objProperty,
        objToPush = {};
      delete key.$$hashKey; // reorder 1.0 sending with $$hashKey property
      objProperty = index + 1;
      objToPush[objProperty] = qspatch.generateTelemetryTupleValue(key);
      answer.seq.push(Number(key.id) + 1 + "");
      tuple.params.push(objToPush);
    });
    tuple.params.push({
      answer: JSON.stringify(answer),
    });
    result.state.val.forEach(function (selectedWord) {
      var objProperty,
        objToPush = {};
      objProperty = result.state.keys.findIndex(function (key, index) {
        if (key.text == selectedWord.text) {
          // handling cases incase two same words are present in the reorder sequence and if already one added to result
          if (Object.keys(tuple.resvalues).includes(index + 1) == false) {
            return true;
          }
        }
      });
      objToPush[objProperty + 1] =
        qspatch.generateTelemetryTupleValue(selectedWord);
      tuple.resvalues.push(objToPush);
    });
  },
  sequencePatchHandler: function (result, tuple) {
    var answer = {
      seq: [],
    };
    result.state.val.seq_rearranged.forEach(function (seqIndex, index) {
      var objProperty,
        objToPush = {};
      objProperty = index + 1;
      objToPush[objProperty] = qspatch.generateTelemetryTupleValue(
        result.state.seq_rendered[index]
      );
      tuple.params.push(objToPush);
      var answerIndex = result.state.seq_rendered.findIndex(function (seq) {
        if (Number(seq.sequenceOrder) == index + 1) {
          return true;
        }
      });
      answer.seq.push(answerIndex + 1 + "");
      objToPush = {};
      objProperty = result.state.seq_rendered.findIndex(function (seq) {
        if (seq.sequenceOrder == seqIndex) {
          return true;
        }
      });
      objToPush[objProperty + 1] = qspatch.generateTelemetryTupleValue(
        result.state.seq_rendered.find(function (seq) {
          return seq.sequenceOrder == seqIndex;
        })
      );
      tuple.resvalues.push(objToPush);
    });
    tuple.params.push({
      answer: JSON.stringify(answer),
    });
  },
  generateTelemetryData: function (result, tuple) {
    var quesTitle, quesDesc, quesScore;
    if (this._qData.questionnaire) {
      for (var quesIdentifier in this._qData.questionnaire.items) {
        if (this._qData.questionnaire.items.hasOwnProperty(quesIdentifier)) {
          quesTitle = this._qData.questionnaire.items[quesIdentifier][0].title;
          quesDesc =
            this._qData.questionnaire.items[quesIdentifier][0].description;
          quesScore =
            result.pass != 0
              ? this._qData.questionnaire.items[quesIdentifier][0].max_score
              : 0;
        }
      }
    } else {
      quesTitle = this._qConfig.metadata.title;
      quesDesc = this._qConfig.metadata.description
        ? this._qConfig.metadata.description
        : "";
      quesScore = parseFloat(result.score.toFixed(2));
    }
    var data = {
      eventVer: "3.1",
      pass: result.eval,
      score: quesScore,
      res: tuple.resvalues,
      qindex: this._question.index,
      qtitle: quesTitle,
      params: tuple.params,
      qdesc: quesDesc,
      mc: [],
      mmc: [],
    };
    return data;
  },
  generateTelemetryTupleValue: function (data) {
    var extractHTML = function (element) {
      var ele = $.parseHTML(element);
      return $(ele).text();
    };
    //upon stringifying an object, if a property value is undefined the property will be deleted during the process
    return JSON.stringify({
      text: data.text ? extractHTML(data.text) : undefined,
      image: data.image ? data.image : undefined,
      audio: data.audio ? data.audio : undefined,
    });
  },
  //Make default font size for question options
  setDefaultFontSize: function (data) {
    if (data.stage["org.ekstep.questionset"]) {
      try {
        var questionSetData = data.stage["org.ekstep.questionset"];
        _.each(questionSetData["org.ekstep.question"], function (item, key) {
          var questionData = JSON.parse(item.data.__cdata);
          questionData.question.text = qspatch.changeFontSize(
            questionData.question
          );
          item.data.__cdata = JSON.stringify(questionData);
          item = qspatch.checkOptionsFontSize(item);
          questionSetData["org.ekstep.question"][key] = item;
        });
        // Renderer.theme = new ThemePlugin(questionSetData);
      } catch (e) {
        console.log(e);
      }
    }
  },
  checkOptionsFontSize: function (item) {
    var questionItem = item;
    var questionOptionsData = JSON.parse(item.data.__cdata);

    switch (item.pluginId) {
      case "org.ekstep.questionunit.mcq":
      case "org.ekstep.questionunit.sequence":
        questionOptionsData.options = qspatch.changeOptionsFontSize(
          questionOptionsData.options,
          item.type
        );
        questionItem.data.__cdata = JSON.stringify(questionOptionsData);
        break;
      case "org.ekstep.questionunit.mtf":
        questionOptionsData.option.optionsLHS = qspatch.changeOptionsFontSize(
          questionOptionsData.option.optionsLHS,
          item.type
        );
        questionOptionsData.option.optionsRHS = qspatch.changeOptionsFontSize(
          questionOptionsData.option.optionsRHS,
          item.type
        );
        questionItem.data.__cdata = JSON.stringify(questionOptionsData);
        break;
      default:
        break;
    }
    return questionItem;
  },
  changeOptionsFontSize: function (options, type) {
    var optionsData = options;
    if (type == "mcq") {
      _.each(options, function (option, key) {
        optionsData[key].text = qspatch.changeFontSize(option);
      });
    } else if (type == "mtf") {
      _.each(options, function (option, key) {
        optionsData[key].text =
          '<p style="' +
          globalConfig.questionMinFontSize +
          '">' +
          optionsData[key].text +
          "</p>";
      });
    }
    return optionsData;
  },
  changeFontSize: function (data) {
    var index = data.text.indexOf("<p><span");

    if (index == 0) {
      var element = $($.parseHTML(data.text));
      var size = $(element)[0].children[0].style.fontSize;
      if (parseFloat(size) <= parseFloat(globalConfig.questionMinFontSize)) {
        $(element)[0].children[0].style.fontSize =
          globalConfig.questionMinFontSize;
        data.text = $(element).prop("outerHTML");
      }
      return data.text;
    } else if (index == -1) {
      return data.text.replace(
        /<p>/g,
        "<p style='font-size:" + globalConfig.questionMinFontSize + ";'>"
      );
    }
  },
};
org.ekstep.pluginframework.pluginManager.registerPlugin(
  {
    id: "org.ekstep.ecmlrenderer",
    ver: "1.0",
    shortId: "org.eskstep.ecmlrenderer",
    author: "Kartheek Palla",
    description: "",
    publishedDate: "",
    renderer: {
      main: "renderer/plugin.js",
      dependencies: [
        { type: "js", src: "renderer/libs/createjs.min.js" },
        { type: "js", src: "renderer/libs/creatine-1.0.0.min.js" },
        { type: "js", src: "renderer/libs/cordovaaudioplugin-0.6.1.min.js" },
        { type: "js", src: "renderer/libs/renderer.min.js" },
        { type: "js", src: "renderer/qspatch.js" },
      ],
    },
    dependencies: [],
  },
  eval(
    'org.ekstep.contentrenderer.baseLauncher.extend({loader:void 0,theme:void 0,update:!0,gdata:void 0,running:!1,preview:!1,divIds:{gameArea:"gameArea",canvas:"gameCanvas"},stageId:[],qid:[],enableHeartBeatEvent:!1,_constants:{mimeType:["application/vnd.ekstep.ecml-archive"],events:{launchEvent:"renderer:launch:ecml"}},initLauncher:function(){EkstepRendererAPI.addEventListener("renderer:content:load",this.start,this),EkstepRendererAPI.addEventListener("renderer:cleanUp",this.cleanUp,this),EkstepRendererAPI.addEventListener(this._constants.events.launchEvent,this.start,this)},start:function(e,t){this._super();var n,r=EkstepRendererAPI.getGlobalConfig();if(t=content,!_.isUndefined(t)){this.initContentProgress(),isbrowserpreview&&(t.path="");try{this.running=!0,this.preview=t.preview||!1,t.body?(n={body:t.body,canvasId:"gameCanvas",path:t.path||""},this.load(n)):(this.initByJSON(r.basepath,"gameCanvas"),"undefined"!=typeof sensibol&&sensibol.recorder.init(r.basepath+"/lesson.metadata").then(function(e){console.info("Init lesson successful.",e)}).catch(function(e){console.error("Error while init lesson:",e)}))}catch(e){showToaster("error","Lesson fails to play"),EkstepRendererAPI.logErrorEvent(e,{severity:"fatal",type:"content",action:"play"}),console.warn("Canvas Renderer init is failed",e)}}},resizeGame:function(e){var t=document.getElementById(Renderer.divIds.gameArea),n=16/9,r=window.innerWidth>window.innerHeight?window.innerWidth:window.innerHeight,s=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;n<r/s?(r=s*n,t.style.height=s+"px",t.style.width=r+"px"):(s=r/n,t.style.width=r+"px",t.style.height=s+"px"),t.style.left="",t.style.top="",t.style.marginTop=-s/2+"px",t.style.marginLeft=-r/2+"px",EkstepRendererAPI.dispatchEvent("render:overlay:applyStyles");EkstepRendererAPI.dispatchEvent("renderer:navigation:load",{tempName:""}),Renderer.theme.updateCanvas(r,s),e||Renderer.theme.reRender()},initByJSON:function(t,n){var r=this;jQuery.getJSON(t+"/index.json",function(e){r.load({body:e,canvasId:n,path:t})}).fail(function(){r.initByXML(t,n)})},initByXML:function(t,n){var r=this;jQuery.get(t+"/index.ecml",function(e){r.load({body:e,canvasId:n,path:t})},null,"xml").fail(function(e){e.responseText="Invalid ECML please correct the Ecml",EkstepRendererAPI.logErrorEvent(e,{severity:"fatal",type:"content",action:"play"}),EventBus.dispatch("renderer:alert:show",void 0,{title:"Error",text:"Invalid ECML please correct the Ecml",type:"error",data:e})})},load:function(e){var t=EkstepRendererAPI.getGlobalConfig(),n=this,r=e.body,s=(jQuery.isPlainObject(r)||(i=new X2JS({attributePrefix:"none"}),a=r,isbrowserpreview?(r=i.xml_str2json(a))&&!r.parsererror||(r=JSON.parse(a)):r=i.xml2json(a)),(this.gdata=r).theme||r.ecml),i=(s.canvasId=e.canvasId,EkstepRendererAPI.setRenderer(n),Renderer.theme=new ThemePlugin(s),n.resizeGame(!0),Renderer.theme.baseDir=t.basepath||e.path,s.manifest||AssetManager.getManifest(s)),a=isbrowserpreview?t.previewPluginspath:t.devicePluginspath,r=(EkstepRendererAPI.dispatchEvent("renderer:repo:create",void 0,{path:e.path+a,position:0}),n.handleRelativePath(n.getResource(i),e.path+"/widgets/")),t=s["plugin-manifest"];EkstepRendererAPI.isStreamingContent()&&(org.ekstep.pluginframework.pluginManager.asyncQueueConcurrency=1),(_.isUndefined(t)||_.isEmpty(t))&&(t={plugin:[]});try{EkstepRendererAPI.dispatchEvent("renderer:content:progress",{name:window.splashScreen.loadType.contentAssets,files:t.plugin}),org.ekstep.contentrenderer.loadPlugins(t.plugin,r,function(){qspatch.handleAssetUrl(),qspatch.telemetryPatch(),qspatch.setDefaultFontSize(s),Renderer.theme.start(e.path.replace("file:///","")+"/assets/")})}catch(e){console.warn("Framework fails to load plugins",e),EkstepRendererAPI.logErrorEvent(e,{severity:"fatal",type:"system",action:"play"}),showToaster("error","Framework fails to load plugins")}createjs.Ticker.addEventListener("tick",function(){Renderer.update&&void 0!==Renderer.theme?(Renderer.theme.update(),Renderer.update=!1):Renderer.theme&&Renderer.theme.tick()})},handleRelativePath:function(e,t){var n=EkstepRendererAPI.getGlobalConfig();return _.each(e,function(e){"http"!=e.src.substring(0,4)&&(isbrowserpreview?e.src=n.host+e.src:e.src=t+e.src)}),e},getResource:function(e){return _.filter(_.isArray(e.media)?e.media:[e.media],function(e){return"css"===e.type||"js"===e.type||"plugin"===e.type||" library"===e.type})},cleanUp:function(){this.sleepMode||(this.sleepMode=!0,EkstepRendererAPI.dispatchEvent("renderer:navigation:deregister:timeout"),EkstepRendererAPI.removeEventListener("renderer:launcher:clean",this.cleanUp,this),this.running&&(this.running=!1,AnimationManager.cleanUp(),AssetManager.destroy(),TimerManager.destroy(),AudioManager.cleanUp(),Renderer&&Renderer.theme&&(Renderer.theme.cleanUp(),Renderer.theme.clearStage(),Renderer.theme=void 0)))},pause:function(){Renderer.theme&&Renderer.theme.pause()},resume:function(){Renderer.theme&&Renderer.theme.resume()},replay:function(){this.sleepMode||(this.qid=[],this.stageId=[],Renderer&&Renderer.theme&&(Renderer.theme.removeHtmlElements(),this.startTelemetry(),Renderer.theme.reRender()))},getContentAssesmentCount:function(){var t=0,n=void 0;return _.find(Renderer.theme._data.stage,function(e){e["org.ekstep.quiz"]&&(_.isArray(e["org.ekstep.quiz"])?e["org.ekstep.quiz"][0].data&&(n=JSON.parse(e["org.ekstep.quiz"][0].data.__cdata)):n=JSON.parse(e["org.ekstep.quiz"].data),t+=n.questionnaire.total_items-1,console.info("questionCount",t))}),t},initContentProgress:function(){var n=this;EkstepRendererAPI.addEventListener("sceneEnter",function(e){var t;n.sleepMode||((t=Renderer.theme._currentScene).isItemScene()&&_.contains(n.qid,t._stageController.assessStartEvent.event.edata.eks.qid)||n.stageId.push(e.target.id))},this),EkstepRendererAPI.addEventListener("renderer:assesment:eval",function(e){n.qid.push(e.target.event.edata.eks.qid),n.stageId=_.without(n.stageId,Renderer.theme._currentStage)})},contentProgress:function(){var e=_.size(_.uniq(this.stageId))+_.size(_.uniq(this.qid)),t=(console.info("currentStageIndex",e),Renderer.theme._data.stage.length+this.getContentAssesmentCount());return this.progres(e,t)}});'
  )
);