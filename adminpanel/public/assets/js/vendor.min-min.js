!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    a = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    h = u.toString,
    p = h.call(Object),
    f = {},
    d = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    g = e.document,
    m = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function v(e, t, n) {
    var i,
      r,
      o = (n = n || g).createElement("script");
    if (((o.text = e), t))
      for (i in m)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.6.0",
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function _(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !d(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: b,
      constructor: w,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || d(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (c && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = s[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || w.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (s[t] = w.extend(c, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    w.extend({
      expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              h.call(n) !== p))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        v(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (_(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (_(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (_(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return o(a);
      },
      guid: 1,
      support: f,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var E = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      l,
      c,
      u,
      h,
      p,
      f,
      d,
      y,
      g,
      m,
      v,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      _ = 0,
      E = 0,
      A = le(),
      T = le(),
      k = le(),
      O = le(),
      S = function (e, t) {
        return e === t && (h = !0), 0;
      },
      C = {}.hasOwnProperty,
      M = [],
      L = M.pop,
      j = M.push,
      N = M.push,
      D = M.slice,
      z = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      P = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        P +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      R =
        "\\[" +
        P +
        "*(" +
        I +
        ")(?:" +
        P +
        "*([*^$|!~]?=)" +
        P +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        P +
        "*\\]",
      W =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        R +
        ")*)|.*)\\)|)",
      q = new RegExp(P + "+", "g"),
      V = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
      B = new RegExp("^" + P + "*," + P + "*"),
      F = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
      $ = new RegExp(P + "|>"),
      U = new RegExp(W),
      X = new RegExp("^" + I + "$"),
      Y = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            P +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            P +
            "*(?:([+-]|)" +
            P +
            "*(\\d+)|))" +
            P +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            P +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            P +
            "*((?:-\\d)?\\d*)" +
            P +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Q = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        p();
      },
      se = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      N.apply((M = D.call(w.childNodes)), w.childNodes),
        M[w.childNodes.length].nodeType;
    } catch (t) {
      N = {
        apply: M.length
          ? function (e, t) {
              j.apply(e, D.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, r) {
      var o,
        a,
        c,
        u,
        h,
        d,
        m,
        v = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (!r && (p(t), (t = t || f), y)) {
        if (11 !== w && (h = Z.exec(e)))
          if ((o = h[1])) {
            if (9 === w) {
              if (!(c = t.getElementById(o))) return i;
              if (c.id === o) return i.push(c), i;
            } else if (v && (c = v.getElementById(o)) && x(t, c) && c.id === o)
              return i.push(c), i;
          } else {
            if (h[2]) return N.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = h[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return N.apply(i, t.getElementsByClassName(o)), i;
          }
        if (
          n.qsa &&
          !O[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== w || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((m = e), (v = t), 1 === w && ($.test(e) || F.test(e)))) {
            for (
              ((v = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = u.replace(ie, re))
                  : t.setAttribute("id", (u = b))),
                a = (d = s(e)).length;
              a--;

            )
              d[a] = (u ? "#" + u : ":scope") + " " + xe(d[a]);
            m = d.join(",");
          }
          try {
            return N.apply(i, v.querySelectorAll(m)), i;
          } catch (t) {
            O(e, !0);
          } finally {
            u === b && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(V, "$1"), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ce(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function he(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ye(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; )
              n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (o = ae.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Q.test(t || (n && n.nodeName) || "HTML");
      }),
    (p = ae.setDocument =
      function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : w;
        return (
          s != f &&
            9 === s.nodeType &&
            s.documentElement &&
            ((d = (f = s).documentElement),
            (y = !o(f)),
            w != f &&
              (r = f.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", oe, !1)
                : r.attachEvent && r.attachEvent("onunload", oe)),
            (n.scope = ue(function (e) {
              return (
                d.appendChild(e).appendChild(f.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = J.test(f.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (d.appendChild(e).id = b),
                !f.getElementsByName || !f.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && y) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && y) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && y)
                  return t.getElementsByClassName(e);
              }),
            (m = []),
            (g = []),
            (n.qsa = J.test(f.querySelectorAll)) &&
              (ue(function (e) {
                var t;
                (d.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + P + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + P + "*(?:value|" + H + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                  (t = f.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    g.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                    g.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  g.push("[\\r\\n\\f]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + P + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (d.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (n.matchesSelector = J.test(
              (v =
                d.matches ||
                d.webkitMatchesSelector ||
                d.mozMatchesSelector ||
                d.oMatchesSelector ||
                d.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = v.call(e, "*")),
                  v.call(e, "[s!='']:x"),
                  m.push("!=", W);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (m = m.length && new RegExp(m.join("|"))),
            (t = J.test(d.compareDocumentPosition)),
            (x =
              t || J.test(d.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (S = t
              ? function (e, t) {
                  if (e === t) return (h = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e == f || (e.ownerDocument == w && x(w, e))
                        ? -1
                        : t == f || (t.ownerDocument == w && x(w, t))
                        ? 1
                        : u
                        ? z(u, e) - z(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (h = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e == f
                      ? -1
                      : t == f
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : u
                      ? z(u, e) - z(u, t)
                      : 0;
                  if (r === o) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? pe(s[i], a[i])
                    : s[i] == w
                    ? -1
                    : a[i] == w
                    ? 1
                    : 0;
                })),
          f
        );
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        (p(e),
        n.matchesSelector &&
          y &&
          !O[t + " "] &&
          (!m || !m.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var i = v.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          O(t, !0);
        }
      return 0 < ae(t, f, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) != f && p(e), x(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) != f && p(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && C.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !y) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !y
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, re);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((h = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(S),
        h)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (u = null), e;
    }),
    (r = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
    ((i = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
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
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    U.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = A[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                A(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = ae.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && -1 < r.indexOf(n)
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + r.replace(q, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    h,
                    p,
                    f,
                    d,
                    y = o !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    m = a && t.nodeName.toLowerCase(),
                    v = !l && !a,
                    x = !1;
                  if (g) {
                    if (o) {
                      for (; y; ) {
                        for (p = t; (p = p[y]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === m
                              : 1 === p.nodeType
                          )
                            return !1;
                        d = y = "only" === e && !d && "nextSibling";
                      }
                      return !0;
                    }
                    if (((d = [s ? g.firstChild : g.lastChild]), s && v)) {
                      for (
                        x =
                          (f =
                            (c =
                              (u =
                                (h = (p = g)[b] || (p[b] = {}))[p.uniqueID] ||
                                (h[p.uniqueID] = {}))[e] || [])[0] === _ &&
                            c[1]) && c[2],
                          p = f && g.childNodes[f];
                        (p = (++f && p && p[y]) || (x = f = 0) || d.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          u[e] = [_, f, x];
                          break;
                        }
                    } else if (
                      (v &&
                        (x = f =
                          (c =
                            (u =
                              (h = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                              (h[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++f && p && p[y]) || (x = f = 0) || d.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== m
                          : 1 !== p.nodeType) ||
                          !++x ||
                          (v &&
                            ((u =
                              (h = p[b] || (p[b] = {}))[p.uniqueID] ||
                              (h[p.uniqueID] = {}))[e] = [_, x]),
                          p !== t));

                      );
                    return (x -= r) === i || (x % i == 0 && 0 <= x / i);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return r[b]
              ? r(t)
              : 1 < r.length
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, n) {
                      for (var i, o = r(e, t), s = o.length; s--; )
                        e[(i = z(e, o[s]))] = !(n[i] = o[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(V, "$1"));
            return i[b]
              ? ce(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return 0 < ae(e, t).length;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || r(t)).indexOf(e);
              }
            );
          }),
          lang: ce(function (e) {
            return (
              X.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = y
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
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
            return e === d;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ye(!1),
          disabled: ye(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
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
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ge(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ge(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = de(t);
    function ve() {}
    function xe(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function be(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = E++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              h,
              p = [_, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u =
                      (h = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (h[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[o]) && c[0] === _ && c[1] === a)
                      return (p[2] = c[2]);
                    if (((u[o] = p)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function _e(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
      return s;
    }
    function Ee(e, t, n, i, r, o) {
      return (
        i && !i[b] && (i = Ee(i)),
        r && !r[b] && (r = Ee(r, o)),
        ce(function (o, s, a, l) {
          var c,
            u,
            h,
            p = [],
            f = [],
            d = s.length,
            y =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            g = !e || (!o && t) ? y : _e(y, p, e, a, l),
            m = n ? (r || (o ? e : d || i) ? [] : s) : g;
          if ((n && n(g, m, a, l), i))
            for (c = _e(m, f), i(c, [], a, l), u = c.length; u--; )
              (h = c[u]) && (m[f[u]] = !(g[f[u]] = h));
          if (o) {
            if (r || e) {
              if (r) {
                for (c = [], u = m.length; u--; )
                  (h = m[u]) && c.push((g[u] = h));
                r(null, (m = []), c, l);
              }
              for (u = m.length; u--; )
                (h = m[u]) &&
                  -1 < (c = r ? z(o, h) : p[u]) &&
                  (o[c] = !(s[c] = h));
            }
          } else (m = _e(m === s ? m.splice(d, m.length) : m)), r ? r(null, s, m, l) : N.apply(s, m);
        })
      );
    }
    function Ae(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          l = s ? 1 : 0,
          u = be(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          h = be(
            function (e) {
              return -1 < z(t, e);
            },
            a,
            !0
          ),
          p = [
            function (e, n, i) {
              var r =
                (!s && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [be(we(p), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return Ee(
              1 < l && we(p),
              1 < l &&
                xe(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(V, "$1"),
              n,
              l < r && Ae(e.slice(l, r)),
              r < o && Ae((e = e.slice(r))),
              r < o && xe(e)
            );
          }
          p.push(n);
        }
      return we(p);
    }
    return (
      (ve.prototype = i.filters = i.pseudos),
      (i.setFilters = new ve()),
      (s = ae.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            s,
            a,
            l,
            c,
            u = T[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((n && !(r = B.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (n = !1),
            (r = F.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(V, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(r = Y[s].exec(a)) ||
                (c[s] && !(r = c[s](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: s, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : T(e, l).slice(0);
        }),
      (a = ae.compile =
        function (e, t) {
          var n,
            r,
            o,
            a,
            l,
            u,
            h = [],
            d = [],
            g = k[e + " "];
          if (!g) {
            for (t || (t = s(e)), n = t.length; n--; )
              (g = Ae(t[n]))[b] ? h.push(g) : d.push(g);
            (g = k(
              e,
              ((r = d),
              (a = 0 < (o = h).length),
              (l = 0 < r.length),
              (u = function (e, t, n, s, u) {
                var h,
                  d,
                  g,
                  m = 0,
                  v = "0",
                  x = e && [],
                  b = [],
                  w = c,
                  E = e || (l && i.find.TAG("*", u)),
                  A = (_ += null == w ? 1 : Math.random() || 0.1),
                  T = E.length;
                for (
                  u && (c = t == f || t || u);
                  v !== T && null != (h = E[v]);
                  v++
                ) {
                  if (l && h) {
                    for (
                      d = 0, t || h.ownerDocument == f || (p(h), (n = !y));
                      (g = r[d++]);

                    )
                      if (g(h, t || f, n)) {
                        s.push(h);
                        break;
                      }
                    u && (_ = A);
                  }
                  a && ((h = !g && h) && m--, e && x.push(h));
                }
                if (((m += v), a && v !== m)) {
                  for (d = 0; (g = o[d++]); ) g(x, b, t, n);
                  if (e) {
                    if (0 < m) for (; v--; ) x[v] || b[v] || (b[v] = L.call(s));
                    b = _e(b);
                  }
                  N.apply(s, b),
                    u &&
                      !e &&
                      0 < b.length &&
                      1 < m + o.length &&
                      ae.uniqueSort(s);
                }
                return u && ((_ = A), (c = w)), x;
              }),
              a ? ce(u) : u)
            )).selector = e;
          }
          return g;
        }),
      (l = ae.select =
        function (e, t, n, r) {
          var o,
            l,
            c,
            u,
            h,
            p = "function" == typeof e && e,
            f = !r && s((e = p.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              2 < (l = f[0] = f[0].slice(0)).length &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              y &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              o = Y.needsContext.test(e) ? 0 : l.length;
              o-- && ((c = l[o]), !i.relative[(u = c.type)]);

            )
              if (
                (h = i.find[u]) &&
                (r = h(
                  c.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && me(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(o, 1), !(e = r.length && xe(l))))
                  return N.apply(n, r), n;
                break;
              }
          }
          return (
            (p || a(e, f))(
              r,
              t,
              !y,
              n,
              !t || (ee.test(e) && me(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(S).join("") === b),
      (n.detectDuplicates = !!h),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        he("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        he("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        he(H, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var A = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = w.expr.match.needsContext;
  function O(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function C(e, t, n) {
    return d(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return -1 < a.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(C(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(C(this, e || [], !0));
      },
      is: function (e) {
        return !!C(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var M,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || M), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)
          ),
          S.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) d(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : d(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (M = w(g));
  var j = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && w(e);
      if (!k.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(w(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return A(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return A(e, "parentNode", n);
        },
        next: function (e) {
          return D(e, "nextSibling");
        },
        prev: function (e) {
          return D(e, "previousSibling");
        },
        nextAll: function (e) {
          return A(e, "nextSibling");
        },
        prevAll: function (e) {
          return A(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return A(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return A(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (O(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var r = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = w.filter(i, r)),
            1 < this.length &&
              (N[e] || w.uniqueSort(r), j.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var z = /[^\x20\t\r\n\f]+/g;
  function H(e) {
    return e;
  }
  function P(e) {
    throw e;
  }
  function I(e, t, n, i) {
    var r;
    try {
      e && d((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && d((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          w.each(t.match(z) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : w.extend({}, e);
    var i,
      r,
      o,
      s,
      a = [],
      l = [],
      c = -1,
      u = function () {
        for (s = s || e.once, o = i = !0; l.length; c = -1)
          for (r = l.shift(); ++c < a.length; )
            !1 === a[c].apply(r[0], r[1]) &&
              e.stopOnFalse &&
              ((c = a.length), (r = !1));
        e.memory || (r = !1), (i = !1), s && (a = r ? [] : "");
      },
      h = {
        add: function () {
          return (
            a &&
              (r && !i && ((c = a.length - 1), l.push(r)),
              (function t(n) {
                w.each(n, function (n, i) {
                  d(i)
                    ? (e.unique && h.has(i)) || a.push(i)
                    : i && i.length && "string" !== x(i) && t(i);
                });
              })(arguments),
              r && !i && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, a, n)); )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = l = []), (a = r = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = l = []), r || i || (a = r = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || u()),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return h;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var r = d(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && d(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function s(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < o)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          d(c)
                            ? r
                              ? c.call(e, s(o, n, H, r), s(o, n, P, r))
                              : (o++,
                                c.call(
                                  e,
                                  s(o, n, H, r),
                                  s(o, n, P, r),
                                  s(o, n, H, n.notifyWith)
                                ))
                            : (i !== H && ((a = void 0), (l = [e])),
                              (r || n.resolveWith)(a, l));
                      }
                    },
                    u = r
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, u.stackTrace),
                              o <= t + 1 &&
                                (i !== P && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? u()
                    : (w.Deferred.getStackHook &&
                        (u.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, d(r) ? r : H, e.notifyWith)),
                    n[1][3].add(s(0, e, d(t) ? t : H)),
                    n[2][3].add(s(0, e, d(i) ? i : P));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, r) : r;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (r[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = s.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = w.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = 1 < arguments.length ? r.call(arguments) : n),
                --t || s.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (I(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || d(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) I(o[n], a(n), s.reject);
        return s.promise();
      },
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      R.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var W = w.Deferred();
  function q() {
    g.removeEventListener("DOMContentLoaded", q),
      e.removeEventListener("load", q),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          W.resolveWith(g, [w]);
      },
    }),
    (w.ready.then = W.then),
    "complete" === g.readyState ||
    ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (g.addEventListener("DOMContentLoaded", q),
        e.addEventListener("load", q));
  var V = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === x(n))
        for (a in ((r = !0), n)) V(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        d(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(w(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    },
    B = /^-ms-/,
    F = /-([a-z])/g;
  function $(e, t) {
    return t.toUpperCase();
  }
  function U(e) {
    return e.replace(B, "ms-").replace(F, $);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[U(t)] = n;
        else for (i in t) r[U(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][U(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(U)
              : (t = U(t)) in i
              ? [t]
              : t.match(z) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    G = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : K.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return G.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = G.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = U(i.slice(5))), Z(o, i, r[i]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              G.set(this, e);
            })
          : V(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = G.get(o, e))
                    ? n
                    : void 0 !== (n = Z(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  G.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = Q.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Q.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = Q.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = g.documentElement,
    re = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  ie.getRootNode &&
    (re = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var se = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && re(e) && "none" === w.css(e, "display"))
    );
  };
  function ae(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== c && +l)) &&
        te.exec(w.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--; )
        w.style(e, t, u + c),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
          (u /= o);
      (u *= 2), w.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  var le = {};
  function ce(e, t) {
    for (var n, i, r, o, s, a, l, c = [], u = 0, h = e.length; u < h; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((c[u] = Q.get(i, "display") || null),
              c[u] || (i.style.display = "")),
            "" === i.style.display &&
              se(i) &&
              (c[u] =
                ((l = s = o = void 0),
                (s = (r = i).ownerDocument),
                (a = r.nodeName),
                (l = le[a]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (l = w.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === l && (l = "block"),
                  (le[a] = l)))))
          : "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
    for (u = 0; u < h; u++) null != c[u] && (e[u].style.display = c[u]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var ue,
    he,
    pe = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    de = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (he = g.createElement("input")).setAttribute("type", "radio"),
    he.setAttribute("checked", "checked"),
    he.setAttribute("name", "t"),
    ue.appendChild(he),
    (f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (f.option = !!ue.lastChild);
  var ye = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && O(e, t)) ? w.merge([e], n) : n
    );
  }
  function me(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
    (ye.th = ye.td),
    f.option ||
      (ye.optgroup = ye.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ve = /<|&#?\w+;/;
  function xe(e, t, n, i, r) {
    for (
      var o,
        s,
        a,
        l,
        c,
        u,
        h = t.createDocumentFragment(),
        p = [],
        f = 0,
        d = e.length;
      f < d;
      f++
    )
      if ((o = e[f]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (ve.test(o)) {
          for (
            s = s || h.appendChild(t.createElement("div")),
              a = (fe.exec(o) || ["", ""])[1].toLowerCase(),
              l = ye[a] || ye._default,
              s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          w.merge(p, s.childNodes), ((s = h.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (h.textContent = "", f = 0; (o = p[f++]); )
      if (i && -1 < w.inArray(o, i)) r && r.push(o);
      else if (
        ((c = re(o)), (s = ge(h.appendChild(o), "script")), c && me(s), n)
      )
        for (u = 0; (o = s[u++]); ) de.test(o.type || "") && n.push(o);
    return h;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function _e() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return g.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Ae(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = _e;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return w().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, r, i, n);
      })
    );
  }
  function Te(e, t, n) {
    n
      ? (Q.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              o,
              s = Q.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = r.call(arguments)),
                Q.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (o = Q.get(this, t)) || i ? Q.set(this, t, !1) : (o = {}),
                s !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                );
            } else
              s.length &&
                (Q.set(this, t, {
                  value: w.event.trigger(
                    w.extend(s[0], w.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, t) && w.event.add(e, t, we);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        u,
        h,
        p,
        f,
        d,
        y,
        g = Q.get(e);
      if (X(e))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && w.find.matchesSelector(ie, r),
            n.guid || (n.guid = w.guid++),
            (l = g.events) || (l = g.events = Object.create(null)),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(z) || [""]).length;
          c--;

        )
          (f = y = (a = be.exec(t[c]) || [])[1]),
            (d = (a[2] || "").split(".").sort()),
            f &&
              ((h = w.event.special[f] || {}),
              (f = (r ? h.delegateType : h.bindType) || f),
              (h = w.event.special[f] || {}),
              (u = w.extend(
                {
                  type: f,
                  origType: y,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && w.expr.match.needsContext.test(r),
                  namespace: d.join("."),
                },
                o
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (h.setup && !1 !== h.setup.call(e, i, d, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              h.add &&
                (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (w.event.global[f] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        u,
        h,
        p,
        f,
        d,
        y,
        g = Q.hasData(e) && Q.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(z) || [""]).length; c--; )
          if (
            ((f = y = (a = be.exec(t[c]) || [])[1]),
            (d = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              h = w.event.special[f] || {},
                p = l[(f = (i ? h.delegateType : h.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (u = p[o]),
                (!r && y !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(o, 1),
                  u.selector && p.delegateCount--,
                  h.remove && h.remove.call(e, u));
            s &&
              !p.length &&
              ((h.teardown && !1 !== h.teardown.call(e, d, g.handle)) ||
                w.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) w.event.remove(e, f + t[c], n, i, !0);
        w.isEmptyObject(l) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = new Array(arguments.length),
        l = w.event.fix(e),
        c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
        u = w.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          s = w.event.handlers.call(this, l, c), t = 0;
          (r = s[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (i = (
                  (w.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, a)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? -1 < w(r, this).index(c)
                  : w.find(r, this, null, [c]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: d(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && O(t, "input") && Te(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && O(t, "input") && Te(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              O(t, "input") &&
              Q.get(t, "click")) ||
            O(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : _e),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: _e,
      isPropagationStopped: _e,
      isImmediatePropagationStopped: _e,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Te(this, e, Ee), !1;
        },
        trigger: function () {
          return Te(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Ae(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ae(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = _e),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ce(e, t) {
    return (
      (O(e, "table") &&
        O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function Me(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function je(e, t) {
    var n, i, r, o, s, a;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (a = Q.get(e).events))
        for (r in (Q.remove(t, "handle events"), a))
          for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
      G.hasData(e) && ((o = G.access(e)), (s = w.extend({}, o)), G.set(t, s));
    }
  }
  function Ne(e, t, n, i) {
    t = o(t);
    var r,
      s,
      a,
      l,
      c,
      u,
      h = 0,
      p = e.length,
      y = p - 1,
      g = t[0],
      m = d(g);
    if (m || (1 < p && "string" == typeof g && !f.checkClone && Oe.test(g)))
      return e.each(function (r) {
        var o = e.eq(r);
        m && (t[0] = g.call(this, r, o.html())), Ne(o, t, n, i);
      });
    if (
      p &&
      ((s = (r = xe(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = s),
      s || i)
    ) {
      for (l = (a = w.map(ge(r, "script"), Me)).length; h < p; h++)
        (c = r),
          h !== y &&
            ((c = w.clone(c, !0, !0)), l && w.merge(a, ge(c, "script"))),
          n.call(e[h], c, h);
      if (l)
        for (u = a[a.length - 1].ownerDocument, w.map(a, Le), h = 0; h < l; h++)
          (c = a[h]),
            de.test(c.type || "") &&
              !Q.access(c, "globalEval") &&
              w.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    u
                  )
                : v(c.textContent.replace(Se, ""), c, u));
    }
    return e;
  }
  function De(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || w.cleanData(ge(i)),
        i.parentNode &&
          (n && re(i) && me(ge(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        h = re(e);
      if (
        !(
          f.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (s = ge(u), i = 0, r = (o = ge(e)).length; i < r; i++)
          (a = o[i]),
            "input" === (c = (l = s[i]).nodeName.toLowerCase()) &&
            pe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (o = o || ge(e), s = s || ge(u), i = 0, r = o.length; i < r; i++)
            je(o[i], s[i]);
        else je(e, u);
      return (
        0 < (s = ge(u, "script")).length && me(s, !h && ge(e, "script")), u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[Q.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return De(this, e, !0);
      },
      remove: function (e) {
        return De(this, e);
      },
      text: function (e) {
        return V(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ne(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ce(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ne(this, arguments, function (e) {
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
        return Ne(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ne(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return V(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ye[(fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ge(t, !1)), (t.innerHTML = e));
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
        var e = [];
        return Ne(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(r[a])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var ze = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Pe = function (e, t, n) {
      var i,
        r,
        o = {};
      for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
      return i;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function Re(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || He(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          re(e) ||
          (s = w.style(e, t)),
        !f.pixelBoxStyles() &&
          ze.test(s) &&
          Ie.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function We(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (s = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (o = 12 === n(u.offsetWidth / 3)),
          ie.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      s,
      a,
      l,
      c = g.createElement("div"),
      u = g.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
      w.extend(f, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == a &&
              ((t = g.createElement("table")),
              (n = g.createElement("tr")),
              (i = g.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                n.offsetHeight),
              ie.removeChild(t)),
            a
          );
        },
      }));
  })();
  var qe = ["Webkit", "Moz", "ms"],
    Ve = g.createElement("div").style,
    Be = {};
  function Fe(e) {
    return (
      w.cssProps[e] ||
      Be[e] ||
      (e in Ve
        ? e
        : (Be[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = qe.length;
                n--;

              )
                if ((e = qe[n] + t) in Ve) return e;
            })(e) || e))
    );
  }
  var $e = /^(none|table(?!-c[ea]).+)/,
    Ue = /^--/,
    Xe = { position: "absolute", visibility: "hidden", display: "block" },
    Ye = { letterSpacing: "0", fontWeight: "400" };
  function Qe(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Ge(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += w.css(e, n + ne[s], !0, r)),
        i
          ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)),
            "margin" !== n &&
              (l -= w.css(e, "border" + ne[s] + "Width", !0, r)))
          : ((l += w.css(e, "padding" + ne[s], !0, r)),
            "padding" !== n
              ? (l += w.css(e, "border" + ne[s] + "Width", !0, r))
              : (a += w.css(e, "border" + ne[s] + "Width", !0, r)));
    return (
      !i &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ke(e, t, n) {
    var i = He(e),
      r =
        (!f.boxSizingReliable() || n) &&
        "border-box" === w.css(e, "boxSizing", !1, i),
      o = r,
      s = Re(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (ze.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!f.boxSizingReliable() && r) ||
        (!f.reliableTrDimensions() && O(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === w.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === w.css(e, "boxSizing", !1, i)),
        (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        Ge(e, t, n || (r ? "border" : "content"), o, i, s) +
        "px"
    );
  }
  function Je(e, t, n, i, r) {
    return new Je.prototype.init(e, t, n, i, r);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Re(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = U(t),
          l = Ue.test(t),
          c = e.style;
        if (
          (l || (t = Fe(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
        "string" == (o = typeof n) &&
          (r = te.exec(n)) &&
          r[1] &&
          ((n = ae(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              l ||
              (n += (r && r[3]) || (w.cssNumber[a] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = U(t);
      return (
        Ue.test(t) || (t = Fe(a)),
        (s = w.cssHooks[t] || w.cssHooks[a]) &&
          "get" in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = Re(e, t, i)),
        "normal" === r && t in Ye && (r = Ye[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !$e.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ke(e, t, i)
              : Pe(e, Xe, function () {
                  return Ke(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = He(e),
            s = !f.scrollboxSize() && "absolute" === o.position,
            a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
            l = i ? Ge(e, t, i, a, o) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ge(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (r = te.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Qe(0, n, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = We(f.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Re(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Pe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Qe);
    }),
    w.fn.extend({
      css: function (e, t) {
        return V(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = He(e), r = t.length; s < r; s++)
                o[t[s]] = w.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((w.Tween = Je).prototype = {
      constructor: Je,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Je.propHooks[this.prop];
        return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Je.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Je.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Je.prototype),
    ((Je.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Fe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Je.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = Je.prototype.init),
    (w.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;
  function ot() {
    et &&
      (!1 === g.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(ot)
        : e.setTimeout(ot, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function at(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function lt(e, t, n) {
    for (
      var i,
        r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function ct(e, t, n) {
    var i,
      r,
      o = 0,
      s = ct.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = Ze || st(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            o = 0,
            s = c.tweens.length;
          o < s;
          o++
        )
          c.tweens[o].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = U(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = w.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(u, c.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = ct.prefilters[o].call(c, e, u, c.opts)))
        return (
          d(i.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(u, lt, c),
      d(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(ct, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      d(e) ? ((t = e), (e = ["*"])) : (e = e.match(z));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (ct.tweeners[n] = ct.tweeners[n] || []),
          ct.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          h = "width" in t || "height" in t,
          p = this,
          f = {},
          d = e.style,
          y = e.nodeType && se(e),
          g = Q.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = w._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), it.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (y ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              y = !0;
            }
            f[i] = (g && g[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
          for (i in (h &&
            1 === e.nodeType &&
            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
            null == (c = g && g.display) && (c = Q.get(e, "display")),
            "none" === (u = w.css(e, "display")) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = w.css(e, "display")),
                  ce([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === w.css(e, "float") &&
              (l ||
                (p.done(function () {
                  d.display = c;
                }),
                null == c && ((u = d.display), (c = "none" === u ? "" : u))),
              (d.display = "inline-block"))),
          n.overflow &&
            ((d.overflow = "hidden"),
            p.always(function () {
              (d.overflow = n.overflow[0]),
                (d.overflowX = n.overflow[1]),
                (d.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (g
                ? "hidden" in g && (y = g.hidden)
                : (g = Q.access(e, "fxshow", { display: c })),
              o && (g.hidden = !y),
              y && ce([e], !0),
              p.done(function () {
                for (i in (y || ce([e]), Q.remove(e, "fxshow"), f))
                  w.style(e, i, f[i]);
              })),
              (l = lt(y ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), y && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (d(e) && e),
              duration: e,
              easing: (n && t) || (t && !d(t) && t),
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in w.fx.speeds
              ? (i.duration = w.fx.speeds[i.duration])
              : (i.duration = w.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          d(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          s = function () {
            var t = ct(this, w.extend({}, e), o);
            (r || Q.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = w.timers,
              s = Q.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Q.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = w.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(at(t, !0), e, i, r);
      };
    }),
    w.each(
      {
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (Ze = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (w.fx.stop = function () {
      et = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (tt = g.createElement("input")),
    (nt = g.createElement("select").appendChild(g.createElement("option"))),
    (tt.type = "checkbox"),
    (f.checkOn = "" !== tt.value),
    (f.optSelected = nt.selected),
    ((tt = g.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (f.radioValue = "t" === tt.value);
  var ut,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return V(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (r =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? ut : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && "radio" === t && O(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(z);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (ut = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, i) {
        var r,
          o,
          s = t.toLowerCase();
        return (
          i ||
            ((o = ht[s]),
            (ht[s] = r),
            (r = null != n(e, t, i) ? s : null),
            (ht[s] = o)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  function dt(e) {
    return (e.match(z) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function gt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(z)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return V(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (r = w.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (ft.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
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
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (d(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, yt(this)));
          });
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((r = yt(n)), (i = 1 === n.nodeType && " " + dt(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = dt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (d(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((r = yt(n)), (i = 1 === n.nodeType && " " + dt(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = dt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : d(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, yt(this), t), t);
            })
          : this.each(function () {
              var t, r, o, s;
              if (i)
                for (r = 0, o = w(this), s = gt(e); (t = s[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = yt(this)) && Q.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Q.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + dt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var mt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = d(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, w(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = w.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(mt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : dt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = w.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        f.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (f.focusin = "onfocusin" in e);
  var vt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        h,
        p,
        f,
        m = [i || g],
        v = u.call(t, "type") ? t.type : t,
        x = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = f = a = i = i || g),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !vt.test(v + w.event.triggered) &&
          (-1 < v.indexOf(".") && ((v = (x = v.split(".")).shift()), x.sort()),
          (c = v.indexOf(":") < 0 && "on" + v),
          ((t = t[w.expando]
            ? t
            : new w.Event(v, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (p = w.event.special[v] || {}),
          r || !p.trigger || !1 !== p.trigger.apply(i, n)))
      ) {
        if (!r && !p.noBubble && !y(i)) {
          for (
            l = p.delegateType || v, vt.test(l + v) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            m.push(s), (a = s);
          a === (i.ownerDocument || g) &&
            m.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = m[o++]) && !t.isPropagationStopped(); )
          (f = s),
            (t.type = 1 < o ? l : p.bindType || v),
            (h =
              (Q.get(s, "events") || Object.create(null))[t.type] &&
              Q.get(s, "handle")) && h.apply(s, n),
            (h = c && s[c]) &&
              h.apply &&
              X(s) &&
              ((t.result = h.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = v),
          r ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(m.pop(), n)) ||
            !X(i) ||
            (c &&
              d(i[v]) &&
              !y(i) &&
              ((a = i[c]) && (i[c] = null),
              (w.event.triggered = v),
              t.isPropagationStopped() && f.addEventListener(v, xt),
              i[v](),
              t.isPropagationStopped() && f.removeEventListener(v, xt),
              (w.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    f.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t);
            r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t) - 1;
            r
              ? Q.access(i, t, r)
              : (i.removeEventListener(e, n, !0), Q.remove(i, t));
          },
        };
      });
  var bt = e.location,
    wt = { guid: Date.now() },
    _t = /\?/;
  w.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (i = n && n.getElementsByTagName("parsererror")[0]),
      (n && !i) ||
        w.error(
          "Invalid XML: " +
            (i
              ? w
                  .map(i.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var Et = /\[\]$/,
    At = /\r?\n/g,
    Tt = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function Ot(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      w.each(t, function (t, r) {
        n || Et.test(e)
          ? i(e, r)
          : Ot(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== x(t)) i(e, t);
    else for (r in t) Ot(e + "[" + r + "]", t[r], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = d(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Ot(n, e[n], t, r);
    return i.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !Tt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var St = /%20/g,
    Ct = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    jt = /^(?:GET|HEAD)$/,
    Nt = /^\/\//,
    Dt = {},
    zt = {},
    Ht = "*/".concat("*"),
    Pt = g.createElement("a");
  function It(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(z) || [];
      if (d(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Rt(e, t, n, i) {
    var r = {},
      o = e === zt;
    function s(a) {
      var l;
      return (
        (r[a] = !0),
        w.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || o || r[c]
            ? o
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function Wt(e, t) {
    var n,
      i,
      r = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (Pt.href = bt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e);
      },
      ajaxPrefilter: It(Dt),
      ajaxTransport: It(zt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          h,
          p,
          f = w.ajaxSetup({}, n),
          d = f.context || f,
          y = f.context && (d.nodeType || d.jquery) ? w(d) : w.event,
          m = w.Deferred(),
          v = w.Callbacks("once memory"),
          x = f.statusCode || {},
          b = {},
          _ = {},
          E = "canceled",
          A = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Lt.exec(o)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) A.always(e[A.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || E;
              return i && i.abort(t), T(0, t), this;
            },
          };
        if (
          (m.promise(A),
          (f.url = ((t || f.url || bt.href) + "").replace(
            Nt,
            bt.protocol + "//"
          )),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""]),
          null == f.crossDomain)
        ) {
          l = g.createElement("a");
          try {
            (l.href = f.url),
              (l.href = l.href),
              (f.crossDomain =
                Pt.protocol + "//" + Pt.host != l.protocol + "//" + l.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = w.param(f.data, f.traditional)),
          Rt(Dt, f, n, A),
          c)
        )
          return A;
        for (h in ((u = w.event && f.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !jt.test(f.type)),
        (r = f.url.replace(Ct, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (f.data = f.data.replace(St, "+"))
          : ((p = f.url.slice(r.length)),
            f.data &&
              (f.processData || "string" == typeof f.data) &&
              ((r += (_t.test(r) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((r = r.replace(Mt, "$1")),
              (p = (_t.test(r) ? "&" : "?") + "_=" + wt.guid++ + p)),
            (f.url = r + p)),
        f.ifModified &&
          (w.lastModified[r] &&
            A.setRequestHeader("If-Modified-Since", w.lastModified[r]),
          w.etag[r] && A.setRequestHeader("If-None-Match", w.etag[r])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          A.setRequestHeader("Content-Type", f.contentType),
        A.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          A.setRequestHeader(h, f.headers[h]);
        if (f.beforeSend && (!1 === f.beforeSend.call(d, A, f) || c))
          return A.abort();
        if (
          ((E = "abort"),
          v.add(f.complete),
          A.done(f.success),
          A.fail(f.error),
          (i = Rt(zt, f, n, A)))
        ) {
          if (((A.readyState = 1), u && y.trigger("ajaxSend", [A, f]), c))
            return A;
          f.async &&
            0 < f.timeout &&
            (a = e.setTimeout(function () {
              A.abort("timeout");
            }, f.timeout));
          try {
            (c = !1), i.send(b, T);
          } catch (t) {
            if (c) throw t;
            T(-1, t);
          }
        } else T(-1, "No Transport");
        function T(t, n, s, l) {
          var h,
            p,
            g,
            b,
            _,
            E = n;
          c ||
            ((c = !0),
            a && e.clearTimeout(a),
            (i = void 0),
            (o = l || ""),
            (A.readyState = 0 < t ? 4 : 0),
            (h = (200 <= t && t < 300) || 304 === t),
            s &&
              (b = (function (e, t, n) {
                for (
                  var i, r, o, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(f, A, s)),
            !h &&
              -1 < w.inArray("script", f.dataTypes) &&
              w.inArray("json", f.dataTypes) < 0 &&
              (f.converters["text script"] = function () {}),
            (b = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (o = u.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                      for (r in c)
                        if (
                          (a = r.split(" "))[1] === o &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[r])
                            : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, b, A, h)),
            h
              ? (f.ifModified &&
                  ((_ = A.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[r] = _),
                  (_ = A.getResponseHeader("etag")) && (w.etag[r] = _)),
                204 === t || "HEAD" === f.type
                  ? (E = "nocontent")
                  : 304 === t
                  ? (E = "notmodified")
                  : ((E = b.state), (p = b.data), (h = !(g = b.error))))
              : ((g = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
            (A.status = t),
            (A.statusText = (n || E) + ""),
            h ? m.resolveWith(d, [p, E, A]) : m.rejectWith(d, [A, E, g]),
            A.statusCode(x),
            (x = void 0),
            u && y.trigger(h ? "ajaxSuccess" : "ajaxError", [A, f, h ? p : g]),
            v.fireWith(d, [A, E]),
            u &&
              (y.trigger("ajaxComplete", [A, f]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return A;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, i, r) {
        return (
          d(n) && ((r = r || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (d(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return d(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = d(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var qt = { 0: 200, 1223: 204 },
    Vt = w.ajaxSettings.xhr();
  (f.cors = !!Vt && "withCredentials" in Vt),
    (f.ajax = Vt = !!Vt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (f.cors || (Vt && !t.crossDomain))
        return {
          send: function (r, o) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              a.setRequestHeader(s, r[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        qt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Bt,
    Ft = [],
    $t = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ft.pop() || w.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          ($t.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              $t.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            d(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace($t, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || w.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === o ? w(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Ft.push(r)),
              s && d(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument =
      (((Bt = g.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Bt.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (f.createHTMLDocument
              ? (((i = (t =
                  g.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = g.location.href),
                t.head.appendChild(i))
              : (t = g)),
          (o = !n && []),
          (r = S.exec(e))
            ? [t.createElement(r[1])]
            : ((r = xe([e], t, o)),
              o && o.length && w(o).remove(),
              w.merge([], r.childNodes)));
      var i, r, o;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = dt(e.slice(a))), (e = e.slice(0, a))),
        d(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        0 < s.length &&
          w
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          h = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (o = w.css(e, "top")),
          (l = w.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto")
            ? ((s = (i = u.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          d(t) && (t = t.call(e, n, w.extend({}, a))),
          null != t.top && (h.top = t.top - a.top + s),
          null != t.left && (h.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, h) : u.css(h);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (r.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - w.css(i, "marginTop", !0),
            left: t.left - r.left - w.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
          return V(
            this,
            function (e, i, r) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = We(f.pixelPosition, function (e, n) {
        if (n)
          return (n = Re(e, t)), ze.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          w.fn[i] = function (r, o) {
            var s = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === o ? "margin" : "border");
            return V(
              this,
              function (t, n, r) {
                var o;
                return y(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === r
                  ? w.css(t, n, a)
                  : w.style(t, n, r, a);
              },
              t,
              s ? r : void 0,
              s
            );
          };
        }
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, i, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), d(e)))
      return (
        (i = r.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }).guid = e.guid =
          e.guid || w.guid++),
        o
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = O),
    (w.isFunction = d),
    (w.isWindow = y),
    (w.camelCase = U),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? "" : (e + "").replace(Ut, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Xt = e.jQuery,
    Yt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Xt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
          t());
  })(this, function () {
    "use strict";
    const e = (e) => {
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
          let n = e.getAttribute("href");
          if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
          n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]),
            (t = n && "#" !== n ? n.trim() : null);
        }
        return t;
      },
      t = (t) => {
        const n = e(t);
        return n && document.querySelector(n) ? n : null;
      },
      n = (t) => {
        const n = e(t);
        return n ? document.querySelector(n) : null;
      },
      i = (e) => {
        e.dispatchEvent(new Event("transitionend"));
      },
      r = (e) =>
        !(!e || "object" != typeof e) &&
        (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
      o = (e) =>
        r(e)
          ? e.jquery
            ? e[0]
            : e
          : "string" == typeof e && e.length > 0
          ? document.querySelector(e)
          : null,
      s = (e, t, n) => {
        Object.keys(n).forEach((i) => {
          const o = n[i],
            s = t[i],
            a =
              s && r(s)
                ? "element"
                : null == (l = s)
                ? "" + l
                : {}.toString
                    .call(l)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          var l;
          if (!new RegExp(o).test(a))
            throw new TypeError(
              `${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${o}".`
            );
        });
      },
      a = (e) =>
        !(!r(e) || 0 === e.getClientRects().length) &&
        "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      l = (e) =>
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        !!e.classList.contains("disabled") ||
        (void 0 !== e.disabled
          ? e.disabled
          : e.hasAttribute("disabled") &&
            "false" !== e.getAttribute("disabled")),
      c = (e) => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          const t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? c(e.parentNode)
          : null;
      },
      u = () => {},
      h = (e) => {
        e.offsetHeight;
      },
      p = () => {
        const { jQuery: e } = window;
        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
      },
      f = [],
      d = () => "rtl" === document.documentElement.dir,
      y = (e) => {
        var t;
        (t = () => {
          const t = p();
          if (t) {
            const n = e.NAME,
              i = t.fn[n];
            (t.fn[n] = e.jQueryInterface),
              (t.fn[n].Constructor = e),
              (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
          }
        }),
          "loading" === document.readyState
            ? (f.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  f.forEach((e) => e());
                }),
              f.push(t))
            : t();
      },
      g = (e) => {
        "function" == typeof e && e();
      },
      m = (e, t, n = !0) => {
        if (!n) return void g(e);
        const r =
          ((e) => {
            if (!e) return 0;
            let { transitionDuration: t, transitionDelay: n } =
              window.getComputedStyle(e);
            const i = Number.parseFloat(t),
              r = Number.parseFloat(n);
            return i || r
              ? ((t = t.split(",")[0]),
                (n = n.split(",")[0]),
                1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
              : 0;
          })(t) + 5;
        let o = !1;
        const s = ({ target: n }) => {
          n === t &&
            ((o = !0), t.removeEventListener("transitionend", s), g(e));
        };
        t.addEventListener("transitionend", s),
          setTimeout(() => {
            o || i(t);
          }, r);
      },
      v = (e, t, n, i) => {
        let r = e.indexOf(t);
        if (-1 === r) return e[!n && i ? e.length - 1 : 0];
        const o = e.length;
        return (
          (r += n ? 1 : -1),
          i && (r = (r + o) % o),
          e[Math.max(0, Math.min(r, o - 1))]
        );
      },
      x = /[^.]*(?=\..*)\.|.*/,
      b = /\..*/,
      w = /::\d+$/,
      _ = {};
    let E = 1;
    const A = { mouseenter: "mouseover", mouseleave: "mouseout" },
      T = /^(mouseenter|mouseleave)/i,
      k = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function O(e, t) {
      return (t && `${t}::${E++}`) || e.uidEvent || E++;
    }
    function S(e) {
      const t = O(e);
      return (e.uidEvent = t), (_[t] = _[t] || {}), _[t];
    }
    function C(e, t, n = null) {
      const i = Object.keys(e);
      for (let r = 0, o = i.length; r < o; r++) {
        const o = e[i[r]];
        if (o.originalHandler === t && o.delegationSelector === n) return o;
      }
      return null;
    }
    function M(e, t, n) {
      const i = "string" == typeof t,
        r = i ? n : t;
      let o = N(e);
      return k.has(o) || (o = e), [i, r, o];
    }
    function L(e, t, n, i, r) {
      if ("string" != typeof t || !e) return;
      if ((n || ((n = i), (i = null)), T.test(t))) {
        const e = (e) =>
          function (t) {
            if (
              !t.relatedTarget ||
              (t.relatedTarget !== t.delegateTarget &&
                !t.delegateTarget.contains(t.relatedTarget))
            )
              return e.call(this, t);
          };
        i ? (i = e(i)) : (n = e(n));
      }
      const [o, s, a] = M(t, n, i),
        l = S(e),
        c = l[a] || (l[a] = {}),
        u = C(c, s, o ? n : null);
      if (u) return void (u.oneOff = u.oneOff && r);
      const h = O(s, t.replace(x, "")),
        p = o
          ? (function (e, t, n) {
              return function i(r) {
                const o = e.querySelectorAll(t);
                for (let { target: s } = r; s && s !== this; s = s.parentNode)
                  for (let a = o.length; a--; )
                    if (o[a] === s)
                      return (
                        (r.delegateTarget = s),
                        i.oneOff && D.off(e, r.type, t, n),
                        n.apply(s, [r])
                      );
                return null;
              };
            })(e, n, i)
          : (function (e, t) {
              return function n(i) {
                return (
                  (i.delegateTarget = e),
                  n.oneOff && D.off(e, i.type, t),
                  t.apply(e, [i])
                );
              };
            })(e, n);
      (p.delegationSelector = o ? n : null),
        (p.originalHandler = s),
        (p.oneOff = r),
        (p.uidEvent = h),
        (c[h] = p),
        e.addEventListener(a, p, o);
    }
    function j(e, t, n, i, r) {
      const o = C(t[n], i, r);
      o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent]);
    }
    function N(e) {
      return (e = e.replace(b, "")), A[e] || e;
    }
    const D = {
        on(e, t, n, i) {
          L(e, t, n, i, !1);
        },
        one(e, t, n, i) {
          L(e, t, n, i, !0);
        },
        off(e, t, n, i) {
          if ("string" != typeof t || !e) return;
          const [r, o, s] = M(t, n, i),
            a = s !== t,
            l = S(e),
            c = t.startsWith(".");
          if (void 0 !== o) {
            if (!l || !l[s]) return;
            return void j(e, l, s, o, r ? n : null);
          }
          c &&
            Object.keys(l).forEach((n) => {
              !(function (e, t, n, i) {
                const r = t[n] || {};
                Object.keys(r).forEach((o) => {
                  if (o.includes(i)) {
                    const i = r[o];
                    j(e, t, n, i.originalHandler, i.delegationSelector);
                  }
                });
              })(e, l, n, t.slice(1));
            });
          const u = l[s] || {};
          Object.keys(u).forEach((n) => {
            const i = n.replace(w, "");
            if (!a || t.includes(i)) {
              const t = u[n];
              j(e, l, s, t.originalHandler, t.delegationSelector);
            }
          });
        },
        trigger(e, t, n) {
          if ("string" != typeof t || !e) return null;
          const i = p(),
            r = N(t),
            o = t !== r,
            s = k.has(r);
          let a,
            l = !0,
            c = !0,
            u = !1,
            h = null;
          return (
            o &&
              i &&
              ((a = i.Event(t, n)),
              i(e).trigger(a),
              (l = !a.isPropagationStopped()),
              (c = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
            s
              ? (h = document.createEvent("HTMLEvents")).initEvent(r, l, !0)
              : (h = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
            void 0 !== n &&
              Object.keys(n).forEach((e) => {
                Object.defineProperty(h, e, { get: () => n[e] });
              }),
            u && h.preventDefault(),
            c && e.dispatchEvent(h),
            h.defaultPrevented && void 0 !== a && a.preventDefault(),
            h
          );
        },
      },
      z = new Map();
    var H = {
      set(e, t, n) {
        z.has(e) || z.set(e, new Map());
        const i = z.get(e);
        i.has(t) || 0 === i.size
          ? i.set(t, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (e, t) => (z.has(e) && z.get(e).get(t)) || null,
      remove(e, t) {
        if (!z.has(e)) return;
        const n = z.get(e);
        n.delete(t), 0 === n.size && z.delete(e);
      },
    };
    class P {
      constructor(e) {
        (e = o(e)) &&
          ((this._element = e),
          H.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        H.remove(this._element, this.constructor.DATA_KEY),
          D.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this).forEach((e) => {
            this[e] = null;
          });
      }
      _queueCallback(e, t, n = !0) {
        m(e, t, n);
      }
      static getInstance(e) {
        return H.get(o(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        );
      }
      static get VERSION() {
        return "5.1.0";
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      static get DATA_KEY() {
        return "bs." + this.NAME;
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }
    }
    const I = (e, t = "hide") => {
      const i = "click.dismiss" + e.EVENT_KEY,
        r = e.NAME;
      D.on(document, i, `[data-bs-dismiss="${r}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this))
        )
          return;
        const o = n(this) || this.closest("." + r);
        e.getOrCreateInstance(o)[t]();
      });
    };
    class R extends P {
      static get NAME() {
        return "alert";
      }
      close() {
        if (D.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(),
          D.trigger(this._element, "closed.bs.alert"),
          this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = R.getOrCreateInstance(this);
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    I(R, "close"), y(R);
    class W extends P {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = W.getOrCreateInstance(this);
          "toggle" === e && t[e]();
        });
      }
    }
    function q(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          (e === Number(e).toString()
            ? Number(e)
            : "" === e || "null" === e
            ? null
            : e))
      );
    }
    function V(e) {
      return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
    }
    D.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      (e) => {
        e.preventDefault();
        const t = e.target.closest('[data-bs-toggle="button"]');
        W.getOrCreateInstance(t).toggle();
      }
    ),
      y(W);
    const B = {
        setDataAttribute(e, t, n) {
          e.setAttribute("data-bs-" + V(t), n);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute("data-bs-" + V(t));
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {};
          return (
            Object.keys(e.dataset)
              .filter((e) => e.startsWith("bs"))
              .forEach((n) => {
                let i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (t[i] = q(e.dataset[n]));
              }),
            t
          );
        },
        getDataAttribute: (e, t) => q(e.getAttribute("data-bs-" + V(t))),
        offset(e) {
          const t = e.getBoundingClientRect();
          return {
            top: t.top + window.pageYOffset,
            left: t.left + window.pageXOffset,
          };
        },
        position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
      },
      F = {
        find: (e, t = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e, t = document.documentElement) =>
          Element.prototype.querySelector.call(t, e),
        children: (e, t) =>
          [].concat(...e.children).filter((e) => e.matches(t)),
        parents(e, t) {
          const n = [];
          let i = e.parentNode;
          for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
            i.matches(t) && n.push(i), (i = i.parentNode);
          return n;
        },
        prev(e, t) {
          let n = e.previousElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.previousElementSibling;
          }
          return [];
        },
        next(e, t) {
          let n = e.nextElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.nextElementSibling;
          }
          return [];
        },
        focusableChildren(e) {
          const t = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((e) => e + ':not([tabindex^="-"])')
            .join(", ");
          return this.find(t, e).filter((e) => !l(e) && a(e));
        },
      },
      $ = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      X = "next",
      Y = "prev",
      Q = "left",
      G = "right",
      K = { ArrowLeft: G, ArrowRight: Q };
    class J extends P {
      constructor(e, t) {
        super(e),
          (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._indicatorsElement = F.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners();
      }
      static get Default() {
        return $;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(X);
      }
      nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
      prev() {
        this._slide(Y);
      }
      pause(e) {
        e || (this._isPaused = !0),
          F.findOne(
            ".carousel-item-next, .carousel-item-prev",
            this._element
          ) && (i(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }
      cycle(e) {
        e || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config &&
            this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            )));
      }
      to(e) {
        this._activeElement = F.findOne(".active.carousel-item", this._element);
        const t = this._getItemIndex(this._activeElement);
        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding)
          return void D.one(this._element, "slid.bs.carousel", () =>
            this.to(e)
          );
        if (t === e) return this.pause(), void this.cycle();
        const n = e > t ? X : Y;
        this._slide(n, this._items[e]);
      }
      _getConfig(e) {
        return (
          (e = {
            ...$,
            ...B.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          s("carousel", e, U),
          e
        );
      }
      _handleSwipe() {
        const e = Math.abs(this.touchDeltaX);
        if (e <= 40) return;
        const t = e / this.touchDeltaX;
        (this.touchDeltaX = 0), t && this._slide(t > 0 ? G : Q);
      }
      _addEventListeners() {
        this._config.keyboard &&
          D.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
          "hover" === this._config.pause &&
            (D.on(this._element, "mouseenter.bs.carousel", (e) =>
              this.pause(e)
            ),
            D.on(this._element, "mouseleave.bs.carousel", (e) =>
              this.cycle(e)
            )),
          this._config.touch &&
            this._touchSupported &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        const e = (e) => {
            !this._pointerEvent ||
            ("pen" !== e.pointerType && "touch" !== e.pointerType)
              ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
              : (this.touchStartX = e.clientX);
          },
          t = (e) => {
            this.touchDeltaX =
              e.touches && e.touches.length > 1
                ? 0
                : e.touches[0].clientX - this.touchStartX;
          },
          n = (e) => {
            !this._pointerEvent ||
              ("pen" !== e.pointerType && "touch" !== e.pointerType) ||
              (this.touchDeltaX = e.clientX - this.touchStartX),
              this._handleSwipe(),
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (e) => this.cycle(e),
                  500 + this._config.interval
                )));
          };
        F.find(".carousel-item img", this._element).forEach((e) => {
          D.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
        }),
          this._pointerEvent
            ? (D.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
              D.on(this._element, "pointerup.bs.carousel", (e) => n(e)),
              this._element.classList.add("pointer-event"))
            : (D.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
              D.on(this._element, "touchmove.bs.carousel", (e) => t(e)),
              D.on(this._element, "touchend.bs.carousel", (e) => n(e)));
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = K[e.key];
        t && (e.preventDefault(), this._slide(t));
      }
      _getItemIndex(e) {
        return (
          (this._items =
            e && e.parentNode ? F.find(".carousel-item", e.parentNode) : []),
          this._items.indexOf(e)
        );
      }
      _getItemByOrder(e, t) {
        const n = e === X;
        return v(this._items, t, n, this._config.wrap);
      }
      _triggerSlideEvent(e, t) {
        const n = this._getItemIndex(e),
          i = this._getItemIndex(
            F.findOne(".active.carousel-item", this._element)
          );
        return D.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: t,
          from: i,
          to: n,
        });
      }
      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const t = F.findOne(".active", this._indicatorsElement);
          t.classList.remove("active"), t.removeAttribute("aria-current");
          const n = F.find("[data-bs-target]", this._indicatorsElement);
          for (let t = 0; t < n.length; t++)
            if (
              Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) ===
              this._getItemIndex(e)
            ) {
              n[t].classList.add("active"),
                n[t].setAttribute("aria-current", "true");
              break;
            }
        }
      }
      _updateInterval() {
        const e =
          this._activeElement ||
          F.findOne(".active.carousel-item", this._element);
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        t
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = t))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval);
      }
      _slide(e, t) {
        const n = this._directionToOrder(e),
          i = F.findOne(".active.carousel-item", this._element),
          r = this._getItemIndex(i),
          o = t || this._getItemByOrder(n, i),
          s = this._getItemIndex(o),
          a = Boolean(this._interval),
          l = n === X,
          c = l ? "carousel-item-start" : "carousel-item-end",
          u = l ? "carousel-item-next" : "carousel-item-prev",
          p = this._orderToDirection(n);
        if (o && o.classList.contains("active"))
          return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, p).defaultPrevented) return;
        if (!i || !o) return;
        (this._isSliding = !0),
          a && this.pause(),
          this._setActiveIndicatorElement(o),
          (this._activeElement = o);
        const f = () => {
          D.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: o,
            direction: p,
            from: r,
            to: s,
          });
        };
        if (this._element.classList.contains("slide")) {
          o.classList.add(u), h(o), i.classList.add(c), o.classList.add(c);
          const e = () => {
            o.classList.remove(c, u),
              o.classList.add("active"),
              i.classList.remove("active", u, c),
              (this._isSliding = !1),
              setTimeout(f, 0);
          };
          this._queueCallback(e, i, !0);
        } else i.classList.remove("active"), o.classList.add("active"), (this._isSliding = !1), f();
        a && this.cycle();
      }
      _directionToOrder(e) {
        return [G, Q].includes(e)
          ? d()
            ? e === Q
              ? Y
              : X
            : e === Q
            ? X
            : Y
          : e;
      }
      _orderToDirection(e) {
        return [X, Y].includes(e)
          ? d()
            ? e === Y
              ? Q
              : G
            : e === Y
            ? G
            : Q
          : e;
      }
      static carouselInterface(e, t) {
        const n = J.getOrCreateInstance(e, t);
        let { _config: i } = n;
        "object" == typeof t && (i = { ...i, ...t });
        const r = "string" == typeof t ? t : i.slide;
        if ("number" == typeof t) n.to(t);
        else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
          n[r]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      }
      static jQueryInterface(e) {
        return this.each(function () {
          J.carouselInterface(this, e);
        });
      }
      static dataApiClickHandler(e) {
        const t = n(this);
        if (!t || !t.classList.contains("carousel")) return;
        const i = { ...B.getDataAttributes(t), ...B.getDataAttributes(this) },
          r = this.getAttribute("data-bs-slide-to");
        r && (i.interval = !1),
          J.carouselInterface(t, i),
          r && J.getInstance(t).to(r),
          e.preventDefault();
      }
    }
    D.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      J.dataApiClickHandler
    ),
      D.on(window, "load.bs.carousel.data-api", () => {
        const e = F.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++)
          J.carouselInterface(e[t], J.getInstance(e[t]));
      }),
      y(J);
    const Z = { toggle: !0, parent: null },
      ee = { toggle: "boolean", parent: "(null|element)" };
    class te extends P {
      constructor(e, n) {
        super(e),
          (this._isTransitioning = !1),
          (this._config = this._getConfig(n)),
          (this._triggerArray = []);
        const i = F.find('[data-bs-toggle="collapse"]');
        for (let e = 0, n = i.length; e < n; e++) {
          const n = i[e],
            r = t(n),
            o = F.find(r).filter((e) => e === this._element);
          null !== r &&
            o.length &&
            ((this._selector = r), this._triggerArray.push(n));
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Z;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e,
          t = [];
        if (this._config.parent) {
          const e = F.find(".collapse .collapse", this._config.parent);
          t = F.find(".show, .collapsing", this._config.parent).filter(
            (t) => !e.includes(t)
          );
        }
        const n = F.findOne(this._selector);
        if (t.length) {
          const i = t.find((e) => n !== e);
          if ((e = i ? te.getInstance(i) : null) && e._isTransitioning) return;
        }
        if (D.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        t.forEach((t) => {
          n !== t && te.getOrCreateInstance(t, { toggle: !1 }).hide(),
            e || H.set(t, "bs.collapse", null);
        });
        const i = this._getDimension();
        this._element.classList.remove("collapse"),
          this._element.classList.add("collapsing"),
          (this._element.style[i] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const r = "scroll" + (i[0].toUpperCase() + i.slice(1));
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse", "show"),
              (this._element.style[i] = ""),
              D.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[i] = this._element[r] + "px");
      }
      hide() {
        if (this._isTransitioning || !this._isShown()) return;
        if (D.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const e = this._getDimension();
        (this._element.style[e] =
          this._element.getBoundingClientRect()[e] + "px"),
          h(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const t = this._triggerArray.length;
        for (let e = 0; e < t; e++) {
          const t = this._triggerArray[e],
            i = n(t);
          i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                D.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      _isShown(e = this._element) {
        return e.classList.contains("show");
      }
      _getConfig(e) {
        return (
          ((e = { ...Z, ...B.getDataAttributes(this._element), ...e }).toggle =
            Boolean(e.toggle)),
          (e.parent = o(e.parent)),
          s("collapse", e, ee),
          e
        );
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const e = F.find(".collapse .collapse", this._config.parent);
        F.find('[data-bs-toggle="collapse"]', this._config.parent)
          .filter((t) => !e.includes(t))
          .forEach((e) => {
            const t = n(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          });
      }
      _addAriaAndCollapsedClass(e, t) {
        e.length &&
          e.forEach((e) => {
            t ? e.classList.remove("collapsed") : e.classList.add("collapsed"),
              e.setAttribute("aria-expanded", t);
          });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = {};
          "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
          const n = te.getOrCreateInstance(this, t);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e]();
          }
        });
      }
    }
    D.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        const n = t(this);
        F.find(n).forEach((e) => {
          te.getOrCreateInstance(e, { toggle: !1 }).toggle();
        });
      }
    ),
      y(te);
    var ne = "top",
      ie = "bottom",
      re = "right",
      oe = "left",
      se = [ne, ie, re, oe],
      ae = se.reduce(function (e, t) {
        return e.concat([t + "-start", t + "-end"]);
      }, []),
      le = [].concat(se, ["auto"]).reduce(function (e, t) {
        return e.concat([t, t + "-start", t + "-end"]);
      }, []),
      ce = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function ue(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function he(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function pe(e) {
      return e instanceof he(e).Element || e instanceof Element;
    }
    function fe(e) {
      return e instanceof he(e).HTMLElement || e instanceof HTMLElement;
    }
    function de(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof he(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    var ye = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            i = t.attributes[e] || {},
            r = t.elements[e];
          fe(r) &&
            ue(r) &&
            (Object.assign(r.style, n),
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var i = t.elements[e],
                r = t.attributes[e] || {},
                o = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              fe(i) &&
                ue(i) &&
                (Object.assign(i.style, o),
                Object.keys(r).forEach(function (e) {
                  i.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function ge(e) {
      return e.split("-")[0];
    }
    var me = Math.round;
    function ve(e, t) {
      void 0 === t && (t = !1);
      var n = e.getBoundingClientRect(),
        i = 1,
        r = 1;
      return (
        fe(e) &&
          t &&
          ((i = n.width / e.offsetWidth || 1),
          (r = n.height / e.offsetHeight || 1)),
        {
          width: me(n.width / i),
          height: me(n.height / r),
          top: me(n.top / r),
          right: me(n.right / i),
          bottom: me(n.bottom / r),
          left: me(n.left / i),
          x: me(n.left / i),
          y: me(n.top / r),
        }
      );
    }
    function xe(e) {
      var t = ve(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
      return (
        Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
      );
    }
    function be(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && de(n)) {
        var i = t;
        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function we(e) {
      return he(e).getComputedStyle(e);
    }
    function _e(e) {
      return ["table", "td", "th"].indexOf(ue(e)) >= 0;
    }
    function Ee(e) {
      return (
        (pe(e) ? e.ownerDocument : e.document) || window.document
      ).documentElement;
    }
    function Ae(e) {
      return "html" === ue(e)
        ? e
        : e.assignedSlot || e.parentNode || (de(e) ? e.host : null) || Ee(e);
    }
    function Te(e) {
      return fe(e) && "fixed" !== we(e).position ? e.offsetParent : null;
    }
    function ke(e) {
      for (
        var t = he(e), n = Te(e);
        n && _e(n) && "static" === we(n).position;

      )
        n = Te(n);
      return n &&
        ("html" === ue(n) || ("body" === ue(n) && "static" === we(n).position))
        ? t
        : n ||
            (function (e) {
              var t =
                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
              if (
                -1 !== navigator.userAgent.indexOf("Trident") &&
                fe(e) &&
                "fixed" === we(e).position
              )
                return null;
              for (
                var n = Ae(e);
                fe(n) && ["html", "body"].indexOf(ue(n)) < 0;

              ) {
                var i = we(n);
                if (
                  "none" !== i.transform ||
                  "none" !== i.perspective ||
                  "paint" === i.contain ||
                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                  (t && "filter" === i.willChange) ||
                  (t && i.filter && "none" !== i.filter)
                )
                  return n;
                n = n.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    function Oe(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    var Se = Math.max,
      Ce = Math.min,
      Me = Math.round;
    function Le(e, t, n) {
      return Se(e, Ce(t, n));
    }
    function je(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function Ne(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e), t;
      }, {});
    }
    var De = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            i = e.name,
            r = e.options,
            o = n.elements.arrow,
            s = n.modifiersData.popperOffsets,
            a = ge(n.placement),
            l = Oe(a),
            c = [oe, re].indexOf(a) >= 0 ? "height" : "width";
          if (o && s) {
            var u = (function (e, t) {
                return je(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : Ne(e, se)
                );
              })(r.padding, n),
              h = xe(o),
              p = "y" === l ? ne : oe,
              f = "y" === l ? ie : re,
              d =
                n.rects.reference[c] +
                n.rects.reference[l] -
                s[l] -
                n.rects.popper[c],
              y = s[l] - n.rects.reference[l],
              g = ke(o),
              m = g
                ? "y" === l
                  ? g.clientHeight || 0
                  : g.clientWidth || 0
                : 0,
              v = d / 2 - y / 2,
              x = u[p],
              b = m - h[c] - u[f],
              w = m / 2 - h[c] / 2 + v,
              _ = Le(x, w, b),
              E = l;
            n.modifiersData[i] =
              (((t = {})[E] = _), (t.centerOffset = _ - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            i = void 0 === n ? "[data-popper-arrow]" : n;
          null != i &&
            ("string" != typeof i ||
              (i = t.elements.popper.querySelector(i))) &&
            be(t.elements.popper, i) &&
            (t.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      ze = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function He(e) {
      var t,
        n = e.popper,
        i = e.popperRect,
        r = e.placement,
        o = e.offsets,
        s = e.position,
        a = e.gpuAcceleration,
        l = e.adaptive,
        c = e.roundOffsets,
        u =
          !0 === c
            ? (function (e) {
                var t = e.x,
                  n = e.y,
                  i = window.devicePixelRatio || 1;
                return { x: Me(Me(t * i) / i) || 0, y: Me(Me(n * i) / i) || 0 };
              })(o)
            : "function" == typeof c
            ? c(o)
            : o,
        h = u.x,
        p = void 0 === h ? 0 : h,
        f = u.y,
        d = void 0 === f ? 0 : f,
        y = o.hasOwnProperty("x"),
        g = o.hasOwnProperty("y"),
        m = oe,
        v = ne,
        x = window;
      if (l) {
        var b = ke(n),
          w = "clientHeight",
          _ = "clientWidth";
        b === he(n) &&
          "static" !== we((b = Ee(n))).position &&
          ((w = "scrollHeight"), (_ = "scrollWidth")),
          (b = b),
          r === ne && ((v = ie), (d -= b[w] - i.height), (d *= a ? 1 : -1)),
          r === oe && ((m = re), (p -= b[_] - i.width), (p *= a ? 1 : -1));
      }
      var E,
        A = Object.assign({ position: s }, l && ze);
      return a
        ? Object.assign(
            {},
            A,
            (((E = {})[v] = g ? "0" : ""),
            (E[m] = y ? "0" : ""),
            (E.transform =
              (x.devicePixelRatio || 1) < 2
                ? "translate(" + p + "px, " + d + "px)"
                : "translate3d(" + p + "px, " + d + "px, 0)"),
            E)
          )
        : Object.assign(
            {},
            A,
            (((t = {})[v] = g ? d + "px" : ""),
            (t[m] = y ? p + "px" : ""),
            (t.transform = ""),
            t)
          );
    }
    var Pe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = n.gpuAcceleration,
            r = void 0 === i || i,
            o = n.adaptive,
            s = void 0 === o || o,
            a = n.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: ge(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: r,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              He(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: l,
                })
              )
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                He(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      },
      Ie = { passive: !0 },
      Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            i = e.options,
            r = i.scroll,
            o = void 0 === r || r,
            s = i.resize,
            a = void 0 === s || s,
            l = he(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Ie);
              }),
            a && l.addEventListener("resize", n.update, Ie),
            function () {
              o &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Ie);
                }),
                a && l.removeEventListener("resize", n.update, Ie);
            }
          );
        },
        data: {},
      },
      We = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function qe(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return We[e];
      });
    }
    var Ve = { start: "end", end: "start" };
    function Be(e) {
      return e.replace(/start|end/g, function (e) {
        return Ve[e];
      });
    }
    function Fe(e) {
      var t = he(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function $e(e) {
      return ve(Ee(e)).left + Fe(e).scrollLeft;
    }
    function Ue(e) {
      var t = we(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + r + i);
    }
    function Xe(e, t) {
      var n;
      void 0 === t && (t = []);
      var i = (function e(t) {
          return ["html", "body", "#document"].indexOf(ue(t)) >= 0
            ? t.ownerDocument.body
            : fe(t) && Ue(t)
            ? t
            : e(Ae(t));
        })(e),
        r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
        o = he(i),
        s = r ? [o].concat(o.visualViewport || [], Ue(i) ? i : []) : i,
        a = t.concat(s);
      return r ? a : a.concat(Xe(Ae(s)));
    }
    function Ye(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function Qe(e, t) {
      return "viewport" === t
        ? Ye(
            (function (e) {
              var t = he(e),
                n = Ee(e),
                i = t.visualViewport,
                r = n.clientWidth,
                o = n.clientHeight,
                s = 0,
                a = 0;
              return (
                i &&
                  ((r = i.width),
                  (o = i.height),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((s = i.offsetLeft), (a = i.offsetTop))),
                { width: r, height: o, x: s + $e(e), y: a }
              );
            })(e)
          )
        : fe(t)
        ? (function (e) {
            var t = ve(e);
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(t)
        : Ye(
            (function (e) {
              var t,
                n = Ee(e),
                i = Fe(e),
                r = null == (t = e.ownerDocument) ? void 0 : t.body,
                o = Se(
                  n.scrollWidth,
                  n.clientWidth,
                  r ? r.scrollWidth : 0,
                  r ? r.clientWidth : 0
                ),
                s = Se(
                  n.scrollHeight,
                  n.clientHeight,
                  r ? r.scrollHeight : 0,
                  r ? r.clientHeight : 0
                ),
                a = -i.scrollLeft + $e(e),
                l = -i.scrollTop;
              return (
                "rtl" === we(r || n).direction &&
                  (a += Se(n.clientWidth, r ? r.clientWidth : 0) - o),
                { width: o, height: s, x: a, y: l }
              );
            })(Ee(e))
          );
    }
    function Ge(e) {
      return e.split("-")[1];
    }
    function Ke(e) {
      var t,
        n = e.reference,
        i = e.element,
        r = e.placement,
        o = r ? ge(r) : null,
        s = r ? Ge(r) : null,
        a = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;
      switch (o) {
        case ne:
          t = { x: a, y: n.y - i.height };
          break;
        case ie:
          t = { x: a, y: n.y + n.height };
          break;
        case re:
          t = { x: n.x + n.width, y: l };
          break;
        case oe:
          t = { x: n.x - i.width, y: l };
          break;
        default:
          t = { x: n.x, y: n.y };
      }
      var c = o ? Oe(o) : null;
      if (null != c) {
        var u = "y" === c ? "height" : "width";
        switch (s) {
          case "start":
            t[c] = t[c] - (n[u] / 2 - i[u] / 2);
            break;
          case "end":
            t[c] = t[c] + (n[u] / 2 - i[u] / 2);
        }
      }
      return t;
    }
    function Je(e, t) {
      void 0 === t && (t = {});
      var n = t,
        i = n.placement,
        r = void 0 === i ? e.placement : i,
        o = n.boundary,
        s = void 0 === o ? "clippingParents" : o,
        a = n.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = n.elementContext,
        u = void 0 === c ? "popper" : c,
        h = n.altBoundary,
        p = void 0 !== h && h,
        f = n.padding,
        d = void 0 === f ? 0 : f,
        y = je("number" != typeof d ? d : Ne(d, se)),
        g = "popper" === u ? "reference" : "popper",
        m = e.elements.reference,
        v = e.rects.popper,
        x = e.elements[p ? g : u],
        b = (function (e, t, n) {
          var i =
              "clippingParents" === t
                ? (function (e) {
                    var t = Xe(Ae(e)),
                      n =
                        ["absolute", "fixed"].indexOf(we(e).position) >= 0 &&
                        fe(e)
                          ? ke(e)
                          : e;
                    return pe(n)
                      ? t.filter(function (e) {
                          return pe(e) && be(e, n) && "body" !== ue(e);
                        })
                      : [];
                  })(e)
                : [].concat(t),
            r = [].concat(i, [n]),
            o = r[0],
            s = r.reduce(function (t, n) {
              var i = Qe(e, n);
              return (
                (t.top = Se(i.top, t.top)),
                (t.right = Ce(i.right, t.right)),
                (t.bottom = Ce(i.bottom, t.bottom)),
                (t.left = Se(i.left, t.left)),
                t
              );
            }, Qe(e, o));
          return (
            (s.width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s
          );
        })(pe(x) ? x : x.contextElement || Ee(e.elements.popper), s, l),
        w = ve(m),
        _ = Ke({
          reference: w,
          element: v,
          strategy: "absolute",
          placement: r,
        }),
        E = Ye(Object.assign({}, v, _)),
        A = "popper" === u ? E : w,
        T = {
          top: b.top - A.top + y.top,
          bottom: A.bottom - b.bottom + y.bottom,
          left: b.left - A.left + y.left,
          right: A.right - b.right + y.right,
        },
        k = e.modifiersData.offset;
      if ("popper" === u && k) {
        var O = k[r];
        Object.keys(T).forEach(function (e) {
          var t = [re, ie].indexOf(e) >= 0 ? 1 : -1,
            n = [ne, ie].indexOf(e) >= 0 ? "y" : "x";
          T[e] += O[n] * t;
        });
      }
      return T;
    }
    var Ze = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options,
          i = e.name;
        if (!t.modifiersData[i]._skip) {
          for (
            var r = n.mainAxis,
              o = void 0 === r || r,
              s = n.altAxis,
              a = void 0 === s || s,
              l = n.fallbackPlacements,
              c = n.padding,
              u = n.boundary,
              h = n.rootBoundary,
              p = n.altBoundary,
              f = n.flipVariations,
              d = void 0 === f || f,
              y = n.allowedAutoPlacements,
              g = t.options.placement,
              m = ge(g),
              v =
                l ||
                (m !== g && d
                  ? (function (e) {
                      if ("auto" === ge(e)) return [];
                      var t = qe(e);
                      return [Be(e), t, Be(t)];
                    })(g)
                  : [qe(g)]),
              x = [g].concat(v).reduce(function (e, n) {
                return e.concat(
                  "auto" === ge(n)
                    ? (function (e, t) {
                        void 0 === t && (t = {});
                        var n = t,
                          i = n.placement,
                          r = n.boundary,
                          o = n.rootBoundary,
                          s = n.padding,
                          a = n.flipVariations,
                          l = n.allowedAutoPlacements,
                          c = void 0 === l ? le : l,
                          u = Ge(i),
                          h = u
                            ? a
                              ? ae
                              : ae.filter(function (e) {
                                  return Ge(e) === u;
                                })
                            : se,
                          p = h.filter(function (e) {
                            return c.indexOf(e) >= 0;
                          });
                        0 === p.length && (p = h);
                        var f = p.reduce(function (t, n) {
                          return (
                            (t[n] = Je(e, {
                              placement: n,
                              boundary: r,
                              rootBoundary: o,
                              padding: s,
                            })[ge(n)]),
                            t
                          );
                        }, {});
                        return Object.keys(f).sort(function (e, t) {
                          return f[e] - f[t];
                        });
                      })(t, {
                        placement: n,
                        boundary: u,
                        rootBoundary: h,
                        padding: c,
                        flipVariations: d,
                        allowedAutoPlacements: y,
                      })
                    : n
                );
              }, []),
              b = t.rects.reference,
              w = t.rects.popper,
              _ = new Map(),
              E = !0,
              A = x[0],
              T = 0;
            T < x.length;
            T++
          ) {
            var k = x[T],
              O = ge(k),
              S = "start" === Ge(k),
              C = [ne, ie].indexOf(O) >= 0,
              M = C ? "width" : "height",
              L = Je(t, {
                placement: k,
                boundary: u,
                rootBoundary: h,
                altBoundary: p,
                padding: c,
              }),
              j = C ? (S ? re : oe) : S ? ie : ne;
            b[M] > w[M] && (j = qe(j));
            var N = qe(j),
              D = [];
            if (
              (o && D.push(L[O] <= 0),
              a && D.push(L[j] <= 0, L[N] <= 0),
              D.every(function (e) {
                return e;
              }))
            ) {
              (A = k), (E = !1);
              break;
            }
            _.set(k, D);
          }
          if (E)
            for (
              var z = function (e) {
                  var t = x.find(function (t) {
                    var n = _.get(t);
                    if (n)
                      return n.slice(0, e).every(function (e) {
                        return e;
                      });
                  });
                  if (t) return (A = t), "break";
                },
                H = d ? 3 : 1;
              H > 0 && "break" !== z(H);
              H--
            );
          t.placement !== A &&
            ((t.modifiersData[i]._skip = !0),
            (t.placement = A),
            (t.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function et(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function tt(e) {
      return [ne, re, ie, oe].some(function (t) {
        return e[t] >= 0;
      });
    }
    var nt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            i = t.rects.reference,
            r = t.rects.popper,
            o = t.modifiersData.preventOverflow,
            s = Je(t, { elementContext: "reference" }),
            a = Je(t, { altBoundary: !0 }),
            l = et(s, i),
            c = et(a, r, o),
            u = tt(l),
            h = tt(c);
          (t.modifiersData[n] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: h,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": h,
            }));
        },
      },
      it = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = e.name,
            r = n.offset,
            o = void 0 === r ? [0, 0] : r,
            s = le.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var i = ge(e),
                    r = [oe, ne].indexOf(i) >= 0 ? -1 : 1,
                    o =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    s = o[0],
                    a = o[1];
                  return (
                    (s = s || 0),
                    (a = (a || 0) * r),
                    [oe, re].indexOf(i) >= 0 ? { x: a, y: s } : { x: s, y: a }
                  );
                })(n, t.rects, o)),
                e
              );
            }, {}),
            a = s[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[i] = s);
        },
      },
      rt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = Ke({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      },
      ot = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = e.name,
            r = n.mainAxis,
            o = void 0 === r || r,
            s = n.altAxis,
            a = void 0 !== s && s,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            h = n.padding,
            p = n.tether,
            f = void 0 === p || p,
            d = n.tetherOffset,
            y = void 0 === d ? 0 : d,
            g = Je(t, {
              boundary: l,
              rootBoundary: c,
              padding: h,
              altBoundary: u,
            }),
            m = ge(t.placement),
            v = Ge(t.placement),
            x = !v,
            b = Oe(m),
            w = "x" === b ? "y" : "x",
            _ = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            A = t.rects.popper,
            T =
              "function" == typeof y
                ? y(Object.assign({}, t.rects, { placement: t.placement }))
                : y,
            k = { x: 0, y: 0 };
          if (_) {
            if (o || a) {
              var O = "y" === b ? ne : oe,
                S = "y" === b ? ie : re,
                C = "y" === b ? "height" : "width",
                M = _[b],
                L = _[b] + g[O],
                j = _[b] - g[S],
                N = f ? -A[C] / 2 : 0,
                D = "start" === v ? E[C] : A[C],
                z = "start" === v ? -A[C] : -E[C],
                H = t.elements.arrow,
                P = f && H ? xe(H) : { width: 0, height: 0 },
                I = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                R = I[O],
                W = I[S],
                q = Le(0, E[C], P[C]),
                V = x ? E[C] / 2 - N - q - R - T : D - q - R - T,
                B = x ? -E[C] / 2 + N + q + W + T : z + q + W + T,
                F = t.elements.arrow && ke(t.elements.arrow),
                $ = F ? ("y" === b ? F.clientTop || 0 : F.clientLeft || 0) : 0,
                U = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][b]
                  : 0,
                X = _[b] + V - U - $,
                Y = _[b] + B - U;
              if (o) {
                var Q = Le(f ? Ce(L, X) : L, M, f ? Se(j, Y) : j);
                (_[b] = Q), (k[b] = Q - M);
              }
              if (a) {
                var G = "x" === b ? ne : oe,
                  K = "x" === b ? ie : re,
                  J = _[w],
                  Z = J + g[G],
                  ee = J - g[K],
                  te = Le(f ? Ce(Z, X) : Z, J, f ? Se(ee, Y) : ee);
                (_[w] = te), (k[w] = te - J);
              }
            }
            t.modifiersData[i] = k;
          }
        },
        requiresIfExists: ["offset"],
      };
    function st(e, t, n) {
      void 0 === n && (n = !1);
      var i,
        r,
        o = fe(t),
        s =
          fe(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              n = t.width / e.offsetWidth || 1,
              i = t.height / e.offsetHeight || 1;
            return 1 !== n || 1 !== i;
          })(t),
        a = Ee(t),
        l = ve(e, s),
        c = { scrollLeft: 0, scrollTop: 0 },
        u = { x: 0, y: 0 };
      return (
        (o || (!o && !n)) &&
          (("body" !== ue(t) || Ue(a)) &&
            (c =
              (i = t) !== he(i) && fe(i)
                ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                : Fe(i)),
          fe(t)
            ? (((u = ve(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
            : a && (u.x = $e(a))),
        {
          x: l.left + c.scrollLeft - u.x,
          y: l.top + c.scrollTop - u.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    var at = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function lt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function ct(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.defaultModifiers,
        i = void 0 === n ? [] : n,
        r = t.defaultOptions,
        o = void 0 === r ? at : r;
      return function (e, t, n) {
        void 0 === n && (n = o);
        var r,
          s,
          a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, at, o),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          u = {
            state: a,
            setOptions: function (n) {
              h(),
                (a.options = Object.assign({}, o, a.options, n)),
                (a.scrollParents = {
                  reference: pe(e)
                    ? Xe(e)
                    : e.contextElement
                    ? Xe(e.contextElement)
                    : [],
                  popper: Xe(t),
                });
              var r,
                s,
                c = (function (e) {
                  var t = (function (e) {
                    var t = new Map(),
                      n = new Set(),
                      i = [];
                    return (
                      e.forEach(function (e) {
                        t.set(e.name, e);
                      }),
                      e.forEach(function (e) {
                        n.has(e.name) ||
                          (function e(r) {
                            n.add(r.name),
                              []
                                .concat(
                                  r.requires || [],
                                  r.requiresIfExists || []
                                )
                                .forEach(function (i) {
                                  if (!n.has(i)) {
                                    var r = t.get(i);
                                    r && e(r);
                                  }
                                }),
                              i.push(r);
                          })(e);
                      }),
                      i
                    );
                  })(e);
                  return ce.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  ((r = [].concat(i, a.options.modifiers)),
                  (s = r.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {})),
                  Object.keys(s).map(function (e) {
                    return s[e];
                  }))
                );
              return (
                (a.orderedModifiers = c.filter(function (e) {
                  return e.enabled;
                })),
                a.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    n = e.options,
                    i = void 0 === n ? {} : n,
                    r = e.effect;
                  if ("function" == typeof r) {
                    var o = r({ state: a, name: t, instance: u, options: i });
                    l.push(o || function () {});
                  }
                }),
                u.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = a.elements,
                  t = e.reference,
                  n = e.popper;
                if (lt(t, n)) {
                  (a.rects = {
                    reference: st(t, ke(n), "fixed" === a.options.strategy),
                    popper: xe(n),
                  }),
                    (a.reset = !1),
                    (a.placement = a.options.placement),
                    a.orderedModifiers.forEach(function (e) {
                      return (a.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                      var r = a.orderedModifiers[i],
                        o = r.fn,
                        s = r.options,
                        l = void 0 === s ? {} : s,
                        h = r.name;
                      "function" == typeof o &&
                        (a =
                          o({ state: a, options: l, name: h, instance: u }) ||
                          a);
                    } else (a.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((r = function () {
                return new Promise(function (e) {
                  u.forceUpdate(), e(a);
                });
              }),
              function () {
                return (
                  s ||
                    (s = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (s = void 0), e(r());
                      });
                    })),
                  s
                );
              }),
            destroy: function () {
              h(), (c = !0);
            },
          };
        if (!lt(e, t)) return u;
        function h() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          u.setOptions(n).then(function (e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e);
          }),
          u
        );
      };
    }
    var ut = ct(),
      ht = ct({ defaultModifiers: [Re, rt, Pe, ye] }),
      pt = ct({ defaultModifiers: [Re, rt, Pe, ye, it, Ze, ot, De, nt] }),
      ft = Object.freeze({
        __proto__: null,
        popperGenerator: ct,
        detectOverflow: Je,
        createPopperBase: ut,
        createPopper: pt,
        createPopperLite: ht,
        top: ne,
        bottom: ie,
        right: re,
        left: oe,
        auto: "auto",
        basePlacements: se,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: ae,
        placements: le,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: ce,
        applyStyles: ye,
        arrow: De,
        computeStyles: Pe,
        eventListeners: Re,
        flip: Ze,
        hide: nt,
        offset: it,
        popperOffsets: rt,
        preventOverflow: ot,
      });
    const dt = new RegExp("ArrowUp|ArrowDown|Escape"),
      yt = d() ? "top-end" : "top-start",
      gt = d() ? "top-start" : "top-end",
      mt = d() ? "bottom-end" : "bottom-start",
      vt = d() ? "bottom-start" : "bottom-end",
      xt = d() ? "left-start" : "right-start",
      bt = d() ? "right-start" : "left-start",
      wt = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0,
      },
      _t = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
      };
    class Et extends P {
      constructor(e, t) {
        super(e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return wt;
      }
      static get DefaultType() {
        return _t;
      }
      static get NAME() {
        return "dropdown";
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (l(this._element) || this._isShown(this._menu)) return;
        const e = { relatedTarget: this._element };
        if (D.trigger(this._element, "show.bs.dropdown", e).defaultPrevented)
          return;
        const t = Et.getParentFromElement(this._element);
        this._inNavbar
          ? B.setDataAttribute(this._menu, "popper", "none")
          : this._createPopper(t),
          "ontouchstart" in document.documentElement &&
            !t.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((e) => D.on(e, "mouseover", u)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add("show"),
          this._element.classList.add("show"),
          D.trigger(this._element, "shown.bs.dropdown", e);
      }
      hide() {
        if (l(this._element) || !this._isShown(this._menu)) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(e) {
        D.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
          ("ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => D.off(e, "mouseover", u)),
          this._popper && this._popper.destroy(),
          this._menu.classList.remove("show"),
          this._element.classList.remove("show"),
          this._element.setAttribute("aria-expanded", "false"),
          B.removeDataAttribute(this._menu, "popper"),
          D.trigger(this._element, "hidden.bs.dropdown", e));
      }
      _getConfig(e) {
        if (
          ((e = {
            ...this.constructor.Default,
            ...B.getDataAttributes(this._element),
            ...e,
          }),
          s("dropdown", e, this.constructor.DefaultType),
          "object" == typeof e.reference &&
            !r(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect)
        )
          throw new TypeError(
            "dropdown".toUpperCase() +
              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
          );
        return e;
      }
      _createPopper(e) {
        if (void 0 === ft)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let t = this._element;
        "parent" === this._config.reference
          ? (t = e)
          : r(this._config.reference)
          ? (t = o(this._config.reference))
          : "object" == typeof this._config.reference &&
            (t = this._config.reference);
        const n = this._getPopperConfig(),
          i = n.modifiers.find(
            (e) => "applyStyles" === e.name && !1 === e.enabled
          );
        (this._popper = pt(t, this._menu, n)),
          i && B.setDataAttribute(this._menu, "popper", "static");
      }
      _isShown(e = this._element) {
        return e.classList.contains("show");
      }
      _getMenuElement() {
        return F.next(this._element, ".dropdown-menu")[0];
      }
      _getPlacement() {
        const e = this._element.parentNode;
        if (e.classList.contains("dropend")) return xt;
        if (e.classList.contains("dropstart")) return bt;
        const t =
          "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return e.classList.contains("dropup") ? (t ? gt : yt) : t ? vt : mt;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          "static" === this._config.display &&
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
          {
            ...e,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const n = F.find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        ).filter(a);
        n.length && v(n, t, "ArrowDown" === e, !n.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Et.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
      static clearMenus(e) {
        if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
          return;
        const t = F.find('[data-bs-toggle="dropdown"]');
        for (let n = 0, i = t.length; n < i; n++) {
          const i = Et.getInstance(t[n]);
          if (!i || !1 === i._config.autoClose) continue;
          if (!i._isShown()) continue;
          const r = { relatedTarget: i._element };
          if (e) {
            const t = e.composedPath(),
              n = t.includes(i._menu);
            if (
              t.includes(i._element) ||
              ("inside" === i._config.autoClose && !n) ||
              ("outside" === i._config.autoClose && n)
            )
              continue;
            if (
              i._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            "click" === e.type && (r.clickEvent = e);
          }
          i._completeHide(r);
        }
      }
      static getParentFromElement(e) {
        return n(e) || e.parentNode;
      }
      static dataApiKeydownHandler(e) {
        if (
          /input|textarea/i.test(e.target.tagName)
            ? "Space" === e.key ||
              ("Escape" !== e.key &&
                (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                  e.target.closest(".dropdown-menu")))
            : !dt.test(e.key)
        )
          return;
        const t = this.classList.contains("show");
        if (!t && "Escape" === e.key) return;
        if ((e.preventDefault(), e.stopPropagation(), l(this))) return;
        const n = this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : F.prev(this, '[data-bs-toggle="dropdown"]')[0],
          i = Et.getOrCreateInstance(n);
        if ("Escape" !== e.key)
          return "ArrowUp" === e.key || "ArrowDown" === e.key
            ? (t || i.show(), void i._selectMenuItem(e))
            : void ((t && "Space" !== e.key) || Et.clearMenus());
        i.hide();
      }
    }
    D.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      Et.dataApiKeydownHandler
    ),
      D.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        Et.dataApiKeydownHandler
      ),
      D.on(document, "click.bs.dropdown.data-api", Et.clearMenus),
      D.on(document, "keyup.bs.dropdown.data-api", Et.clearMenus),
      D.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (e) {
          e.preventDefault(), Et.getOrCreateInstance(this).toggle();
        }
      ),
      y(Et);
    class At {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(
            this._element,
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".sticky-top",
            "marginRight",
            (t) => t - e
          );
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, n) {
        const i = this.getWidth();
        this._applyManipulationCallback(e, (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + i)
            return;
          this._saveInitialAttribute(e, t);
          const r = window.getComputedStyle(e)[t];
          e.style[t] = n(Number.parseFloat(r)) + "px";
        });
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, "paddingRight"),
          this._resetElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight"
          ),
          this._resetElementAttributes(".sticky-top", "marginRight");
      }
      _saveInitialAttribute(e, t) {
        const n = e.style[t];
        n && B.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (e) => {
          const n = B.getDataAttribute(e, t);
          void 0 === n
            ? e.style.removeProperty(t)
            : (B.removeDataAttribute(e, t), (e.style[t] = n));
        });
      }
      _applyManipulationCallback(e, t) {
        r(e) ? t(e) : F.find(e, this._element).forEach(t);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const Tt = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null,
      },
      kt = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
      };
    class Ot {
      constructor(e) {
        (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null);
      }
      show(e) {
        this._config.isVisible
          ? (this._append(),
            this._config.isAnimated && h(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(() => {
              g(e);
            }))
          : g(e);
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(() => {
              this.dispose(), g(e);
            }))
          : g(e);
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = this._config.className),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _getConfig(e) {
        return (
          ((e = { ...Tt, ...("object" == typeof e ? e : {}) }).rootElement = o(
            e.rootElement
          )),
          s("backdrop", e, kt),
          e
        );
      }
      _append() {
        this._isAppended ||
          (this._config.rootElement.append(this._getElement()),
          D.on(this._getElement(), "mousedown.bs.backdrop", () => {
            g(this._config.clickCallback);
          }),
          (this._isAppended = !0));
      }
      dispose() {
        this._isAppended &&
          (D.off(this._element, "mousedown.bs.backdrop"),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _emulateAnimation(e) {
        m(e, this._getElement(), this._config.isAnimated);
      }
    }
    const St = { trapElement: null, autofocus: !0 },
      Ct = { trapElement: "element", autofocus: "boolean" };
    class Mt {
      constructor(e) {
        (this._config = this._getConfig(e)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      activate() {
        const { trapElement: e, autofocus: t } = this._config;
        this._isActive ||
          (t && e.focus(),
          D.off(document, ".bs.focustrap"),
          D.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
          D.on(document, "keydown.tab.bs.focustrap", (e) =>
            this._handleKeydown(e)
          ),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive &&
          ((this._isActive = !1), D.off(document, ".bs.focustrap"));
      }
      _handleFocusin(e) {
        const { target: t } = e,
          { trapElement: n } = this._config;
        if (t === document || t === n || n.contains(t)) return;
        const i = F.focusableChildren(n);
        0 === i.length
          ? n.focus()
          : "backward" === this._lastTabNavDirection
          ? i[i.length - 1].focus()
          : i[0].focus();
      }
      _handleKeydown(e) {
        "Tab" === e.key &&
          (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward");
      }
      _getConfig(e) {
        return (
          (e = { ...St, ...("object" == typeof e ? e : {}) }),
          s("focustrap", e, Ct),
          e
        );
      }
    }
    const Lt = { backdrop: !0, keyboard: !0, focus: !0 },
      jt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      };
    class Nt extends P {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._dialog = F.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new At());
      }
      static get Default() {
        return Lt;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          D.trigger(this._element, "show.bs.modal", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add("modal-open"),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          D.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
            D.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
              e.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(e)));
      }
      hide() {
        if (!this._isShown || this._isTransitioning) return;
        if (D.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const e = this._isAnimated();
        e && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          this._focustrap.deactivate(),
          this._element.classList.remove("show"),
          D.off(this._element, "click.dismiss.bs.modal"),
          D.off(this._dialog, "mousedown.dismiss.bs.modal"),
          this._queueCallback(() => this._hideModal(), this._element, e);
      }
      dispose() {
        [window, this._dialog].forEach((e) => D.off(e, ".bs.modal")),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Ot({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new Mt({ trapElement: this._element });
      }
      _getConfig(e) {
        return (
          (e = {
            ...Lt,
            ...B.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          s("modal", e, jt),
          e
        );
      }
      _showElement(e) {
        const t = this._isAnimated(),
          n = F.findOne(".modal-body", this._dialog);
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0),
          n && (n.scrollTop = 0),
          t && h(this._element),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                D.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e,
                });
            },
            this._dialog,
            t
          );
      }
      _setEscapeEvent() {
        this._isShown
          ? D.on(this._element, "keydown.dismiss.bs.modal", (e) => {
              this._config.keyboard && "Escape" === e.key
                ? (e.preventDefault(), this.hide())
                : this._config.keyboard ||
                  "Escape" !== e.key ||
                  this._triggerBackdropTransition();
            })
          : D.off(this._element, "keydown.dismiss.bs.modal");
      }
      _setResizeEvent() {
        this._isShown
          ? D.on(window, "resize.bs.modal", () => this._adjustDialog())
          : D.off(window, "resize.bs.modal");
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove("modal-open"),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              D.trigger(this._element, "hidden.bs.modal");
          });
      }
      _showBackdrop(e) {
        D.on(this._element, "click.dismiss.bs.modal", (e) => {
          this._ignoreBackdropClick
            ? (this._ignoreBackdropClick = !1)
            : e.target === e.currentTarget &&
              (!0 === this._config.backdrop
                ? this.hide()
                : "static" === this._config.backdrop &&
                  this._triggerBackdropTransition());
        }),
          this._backdrop.show(e);
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (D.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const { classList: e, scrollHeight: t, style: n } = this._element,
          i = t > document.documentElement.clientHeight;
        (!i && "hidden" === n.overflowY) ||
          e.contains("modal-static") ||
          (i || (n.overflowY = "hidden"),
          e.add("modal-static"),
          this._queueCallback(() => {
            e.remove("modal-static"),
              i ||
                this._queueCallback(() => {
                  n.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          n = t > 0;
        ((!n && e && !d()) || (n && !e && d())) &&
          (this._element.style.paddingLeft = t + "px"),
          ((n && !e && !d()) || (!n && e && d())) &&
            (this._element.style.paddingRight = t + "px");
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = Nt.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    D.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (e) {
        const t = n(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          D.one(t, "show.bs.modal", (e) => {
            e.defaultPrevented ||
              D.one(t, "hidden.bs.modal", () => {
                a(this) && this.focus();
              });
          }),
          Nt.getOrCreateInstance(t).toggle(this);
      }
    ),
      I(Nt),
      y(Nt);
    const Dt = { backdrop: !0, keyboard: !0, scroll: !1 },
      zt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Ht extends P {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get NAME() {
        return "offcanvas";
      }
      static get Default() {
        return Dt;
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          D.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._backdrop.show(),
          this._config.scroll || new At().hide(),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              this._config.scroll || this._focustrap.activate(),
                D.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: e,
                });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (D.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._element.style.visibility = "hidden"),
                  this._config.scroll || new At().reset(),
                  D.trigger(this._element, "hidden.bs.offcanvas");
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _getConfig(e) {
        return (
          (e = {
            ...Dt,
            ...B.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          s("offcanvas", e, zt),
          e
        );
      }
      _initializeBackDrop() {
        return new Ot({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide(),
        });
      }
      _initializeFocusTrap() {
        return new Mt({ trapElement: this._element });
      }
      _addEventListeners() {
        D.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
          this._config.keyboard && "Escape" === e.key && this.hide();
        });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ht.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    D.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (e) {
        const t = n(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this))
        )
          return;
        D.one(t, "hidden.bs.offcanvas", () => {
          a(this) && this.focus();
        });
        const i = F.findOne(".offcanvas.show");
        i && i !== t && Ht.getInstance(i).hide(),
          Ht.getOrCreateInstance(t).toggle(this);
      }
    ),
      D.on(window, "load.bs.offcanvas.data-api", () =>
        F.find(".offcanvas.show").forEach((e) =>
          Ht.getOrCreateInstance(e).show()
        )
      ),
      I(Ht),
      y(Ht);
    const Pt = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      It = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Rt =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Wt = (e, t) => {
        const n = e.nodeName.toLowerCase();
        if (t.includes(n))
          return (
            !Pt.has(n) || Boolean(It.test(e.nodeValue) || Rt.test(e.nodeValue))
          );
        const i = t.filter((e) => e instanceof RegExp);
        for (let e = 0, t = i.length; e < t; e++) if (i[e].test(n)) return !0;
        return !1;
      };
    function qt(e, t, n) {
      if (!e.length) return e;
      if (n && "function" == typeof n) return n(e);
      const i = new window.DOMParser().parseFromString(e, "text/html"),
        r = Object.keys(t),
        o = [].concat(...i.body.querySelectorAll("*"));
      for (let e = 0, n = o.length; e < n; e++) {
        const n = o[e],
          i = n.nodeName.toLowerCase();
        if (!r.includes(i)) {
          n.remove();
          continue;
        }
        const s = [].concat(...n.attributes),
          a = [].concat(t["*"] || [], t[i] || []);
        s.forEach((e) => {
          Wt(e, a) || n.removeAttribute(e.nodeName);
        });
      }
      return i.body.innerHTML;
    }
    const Vt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Bt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      Ft = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: d() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: d() ? "right" : "left",
      },
      $t = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      Ut = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      };
    class Xt extends P {
      constructor(e, t) {
        if (void 0 === ft)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(e),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this.tip = null),
          this._setListeners();
      }
      static get Default() {
        return $t;
      }
      static get NAME() {
        return "tooltip";
      }
      static get Event() {
        return Ut;
      }
      static get DefaultType() {
        return Bt;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle(e) {
        if (this._isEnabled)
          if (e) {
            const t = this._initializeOnDelegatedTarget(e);
            (t._activeTrigger.click = !t._activeTrigger.click),
              t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
          } else {
            if (this.getTipElement().classList.contains("show"))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }
      dispose() {
        clearTimeout(this._timeout),
          D.off(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.tip && this.tip.remove(),
          this._popper && this._popper.destroy(),
          super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const e = D.trigger(this._element, this.constructor.Event.SHOW),
          t = c(this._element),
          n =
            null === t
              ? this._element.ownerDocument.documentElement.contains(
                  this._element
                )
              : t.contains(this._element);
        if (e.defaultPrevented || !n) return;
        const i = this.getTipElement(),
          r = ((e) => {
            do {
              e += Math.floor(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          })(this.constructor.NAME);
        i.setAttribute("id", r),
          this._element.setAttribute("aria-describedby", r),
          this._config.animation && i.classList.add("fade");
        const o =
            "function" == typeof this._config.placement
              ? this._config.placement.call(this, i, this._element)
              : this._config.placement,
          s = this._getAttachment(o);
        this._addAttachmentClass(s);
        const { container: a } = this._config;
        H.set(i, this.constructor.DATA_KEY, this),
          this._element.ownerDocument.documentElement.contains(this.tip) ||
            (a.append(i),
            D.trigger(this._element, this.constructor.Event.INSERTED)),
          this._popper
            ? this._popper.update()
            : (this._popper = pt(this._element, i, this._getPopperConfig(s))),
          i.classList.add("show");
        const l = this._resolvePossibleFunction(this._config.customClass);
        l && i.classList.add(...l.split(" ")),
          "ontouchstart" in document.documentElement &&
            [].concat(...document.body.children).forEach((e) => {
              D.on(e, "mouseover", u);
            });
        const h = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            const e = this._hoverState;
            (this._hoverState = null),
              D.trigger(this._element, this.constructor.Event.SHOWN),
              "out" === e && this._leave(null, this);
          },
          this.tip,
          h
        );
      }
      hide() {
        if (!this._popper) return;
        const e = this.getTipElement();
        if (
          D.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
        )
          return;
        e.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => D.off(e, "mouseover", u)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1);
        const t = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              ("show" !== this._hoverState && e.remove(),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              D.trigger(this._element, this.constructor.Event.HIDDEN),
              this._popper && (this._popper.destroy(), (this._popper = null)));
          },
          this.tip,
          t
        ),
          (this._hoverState = "");
      }
      update() {
        null !== this._popper && this._popper.update();
      }
      isWithContent() {
        return Boolean(this.getTitle());
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const e = document.createElement("div");
        e.innerHTML = this._config.template;
        const t = e.children[0];
        return (
          this.setContent(t),
          t.classList.remove("fade", "show"),
          (this.tip = t),
          this.tip
        );
      }
      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner");
      }
      _sanitizeAndSetContent(e, t, n) {
        const i = F.findOne(n, e);
        t || !i ? this.setElementContent(i, t) : i.remove();
      }
      setElementContent(e, t) {
        if (null !== e)
          return r(t)
            ? ((t = o(t)),
              void (this._config.html
                ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t))
                : (e.textContent = t.textContent)))
            : void (this._config.html
                ? (this._config.sanitize &&
                    (t = qt(
                      t,
                      this._config.allowList,
                      this._config.sanitizeFn
                    )),
                  (e.innerHTML = t))
                : (e.textContent = t));
      }
      getTitle() {
        const e =
          this._element.getAttribute("data-bs-original-title") ||
          this._config.title;
        return this._resolvePossibleFunction(e);
      }
      updateAttachment(e) {
        return "right" === e ? "end" : "left" === e ? "start" : e;
      }
      _initializeOnDelegatedTarget(e, t) {
        return (
          t ||
          this.constructor.getOrCreateInstance(
            e.delegateTarget,
            this._getDelegateConfig()
          )
        );
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _resolvePossibleFunction(e) {
        return "function" == typeof e ? e.call(this._element) : e;
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (e) => this._handlePopperPlacementChange(e),
            },
          ],
          onFirstUpdate: (e) => {
            e.options.placement !== e.placement &&
              this._handlePopperPlacementChange(e);
          },
        };
        return {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        };
      }
      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
        );
      }
      _getAttachment(e) {
        return Ft[e.toUpperCase()];
      }
      _setListeners() {
        this._config.trigger.split(" ").forEach((e) => {
          if ("click" === e)
            D.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (e) => this.toggle(e)
            );
          else if ("manual" !== e) {
            const t =
                "hover" === e
                  ? this.constructor.Event.MOUSEENTER
                  : this.constructor.Event.FOCUSIN,
              n =
                "hover" === e
                  ? this.constructor.Event.MOUSELEAVE
                  : this.constructor.Event.FOCUSOUT;
            D.on(this._element, t, this._config.selector, (e) =>
              this._enter(e)
            ),
              D.on(this._element, n, this._config.selector, (e) =>
                this._leave(e)
              );
          }
        }),
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
          D.on(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this._config.selector
            ? (this._config = {
                ...this._config,
                trigger: "manual",
                selector: "",
              })
            : this._fixTitle();
      }
      _fixTitle() {
        const e = this._element.getAttribute("title"),
          t = typeof this._element.getAttribute("data-bs-original-title");
        (e || "string" !== t) &&
          (this._element.setAttribute("data-bs-original-title", e || ""),
          !e ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("title", ""));
      }
      _enter(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
          t.getTipElement().classList.contains("show") ||
          "show" === t._hoverState
            ? (t._hoverState = "show")
            : (clearTimeout(t._timeout),
              (t._hoverState = "show"),
              t._config.delay && t._config.delay.show
                ? (t._timeout = setTimeout(() => {
                    "show" === t._hoverState && t.show();
                  }, t._config.delay.show))
                : t.show());
      }
      _leave(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
              t._element.contains(e.relatedTarget)),
          t._isWithActiveTrigger() ||
            (clearTimeout(t._timeout),
            (t._hoverState = "out"),
            t._config.delay && t._config.delay.hide
              ? (t._timeout = setTimeout(() => {
                  "out" === t._hoverState && t.hide();
                }, t._config.delay.hide))
              : t.hide());
      }
      _isWithActiveTrigger() {
        for (const e in this._activeTrigger)
          if (this._activeTrigger[e]) return !0;
        return !1;
      }
      _getConfig(e) {
        const t = B.getDataAttributes(this._element);
        return (
          Object.keys(t).forEach((e) => {
            Vt.has(e) && delete t[e];
          }),
          ((e = {
            ...this.constructor.Default,
            ...t,
            ...("object" == typeof e && e ? e : {}),
          }).container = !1 === e.container ? document.body : o(e.container)),
          "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          "number" == typeof e.title && (e.title = e.title.toString()),
          "number" == typeof e.content && (e.content = e.content.toString()),
          s("tooltip", e, this.constructor.DefaultType),
          e.sanitize &&
            (e.template = qt(e.template, e.allowList, e.sanitizeFn)),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        for (const t in this._config)
          this.constructor.Default[t] !== this._config[t] &&
            (e[t] = this._config[t]);
        return e;
      }
      _cleanTipClass() {
        const e = this.getTipElement(),
          t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
          n = e.getAttribute("class").match(t);
        null !== n &&
          n.length > 0 &&
          n.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }
      _getBasicClassPrefix() {
        return "bs-tooltip";
      }
      _handlePopperPlacementChange(e) {
        const { state: t } = e;
        t &&
          ((this.tip = t.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(t.placement)));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Xt.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    y(Xt);
    const Yt = {
        ...Xt.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      },
      Qt = { ...Xt.DefaultType, content: "(string|element|function)" },
      Gt = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      };
    class Kt extends Xt {
      static get Default() {
        return Yt;
      }
      static get NAME() {
        return "popover";
      }
      static get Event() {
        return Gt;
      }
      static get DefaultType() {
        return Qt;
      }
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
          this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      _getBasicClassPrefix() {
        return "bs-popover";
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Kt.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    y(Kt);
    const Jt = { offset: 10, method: "auto", target: "" },
      Zt = { offset: "number", method: "string", target: "(string|element)" },
      en = ".nav-link, .list-group-item, .dropdown-item";
    class tn extends P {
      constructor(e, t) {
        super(e),
          (this._scrollElement =
            "BODY" === this._element.tagName ? window : this._element),
          (this._config = this._getConfig(t)),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          D.on(this._scrollElement, "scroll.bs.scrollspy", () =>
            this._process()
          ),
          this.refresh(),
          this._process();
      }
      static get Default() {
        return Jt;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        const e =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          n = "auto" === this._config.method ? e : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          F.find(en, this._config.target)
            .map((e) => {
              const r = t(e),
                o = r ? F.findOne(r) : null;
              if (o) {
                const e = o.getBoundingClientRect();
                if (e.width || e.height) return [B[n](o).top + i, r];
              }
              return null;
            })
            .filter((e) => e)
            .sort((e, t) => e[0] - t[0])
            .forEach((e) => {
              this._offsets.push(e[0]), this._targets.push(e[1]);
            });
      }
      dispose() {
        D.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
      }
      _getConfig(e) {
        return (
          ((e = {
            ...Jt,
            ...B.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }).target = o(e.target) || document.documentElement),
          s("scrollspy", e, Zt),
          e
        );
      }
      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }
      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }
      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }
      _process() {
        const e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();
        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
          const e = this._targets[this._targets.length - 1];
          this._activeTarget !== e && this._activate(e);
        } else {
          if (
            this._activeTarget &&
            e < this._offsets[0] &&
            this._offsets[0] > 0
          )
            return (this._activeTarget = null), void this._clear();
          for (let t = this._offsets.length; t--; )
            this._activeTarget !== this._targets[t] &&
              e >= this._offsets[t] &&
              (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
              this._activate(this._targets[t]);
        }
      }
      _activate(e) {
        (this._activeTarget = e), this._clear();
        const t = en
            .split(",")
            .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
          n = F.findOne(t.join(","), this._config.target);
        n.classList.add("active"),
          n.classList.contains("dropdown-item")
            ? F.findOne(
                ".dropdown-toggle",
                n.closest(".dropdown")
              ).classList.add("active")
            : F.parents(n, ".nav, .list-group").forEach((e) => {
                F.prev(e, ".nav-link, .list-group-item").forEach((e) =>
                  e.classList.add("active")
                ),
                  F.prev(e, ".nav-item").forEach((e) => {
                    F.children(e, ".nav-link").forEach((e) =>
                      e.classList.add("active")
                    );
                  });
              }),
          D.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: e,
          });
      }
      _clear() {
        F.find(en, this._config.target)
          .filter((e) => e.classList.contains("active"))
          .forEach((e) => e.classList.remove("active"));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = tn.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    D.on(window, "load.bs.scrollspy.data-api", () => {
      F.find('[data-bs-spy="scroll"]').forEach((e) => new tn(e));
    }),
      y(tn);
    class nn extends P {
      static get NAME() {
        return "tab";
      }
      show() {
        if (
          this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains("active")
        )
          return;
        let e;
        const t = n(this._element),
          i = this._element.closest(".nav, .list-group");
        if (i) {
          const t =
            "UL" === i.nodeName || "OL" === i.nodeName
              ? ":scope > li > .active"
              : ".active";
          e = (e = F.find(t, i))[e.length - 1];
        }
        const r = e
          ? D.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        if (
          D.trigger(this._element, "show.bs.tab", { relatedTarget: e })
            .defaultPrevented ||
          (null !== r && r.defaultPrevented)
        )
          return;
        this._activate(this._element, i);
        const o = () => {
          D.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
            D.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
        };
        t ? this._activate(t, t.parentNode, o) : o();
      }
      _activate(e, t, n) {
        const i = (
            !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
              ? F.children(t, ".active")
              : F.find(":scope > li > .active", t)
          )[0],
          r = n && i && i.classList.contains("fade"),
          o = () => this._transitionComplete(e, i, n);
        i && r
          ? (i.classList.remove("show"), this._queueCallback(o, e, !0))
          : o();
      }
      _transitionComplete(e, t, n) {
        if (t) {
          t.classList.remove("active");
          const e = F.findOne(":scope > .dropdown-menu .active", t.parentNode);
          e && e.classList.remove("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !1);
        }
        e.classList.add("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !0),
          h(e),
          e.classList.contains("fade") && e.classList.add("show");
        let i = e.parentNode;
        if (
          (i && "LI" === i.nodeName && (i = i.parentNode),
          i && i.classList.contains("dropdown-menu"))
        ) {
          const t = e.closest(".dropdown");
          t &&
            F.find(".dropdown-toggle", t).forEach((e) =>
              e.classList.add("active")
            ),
            e.setAttribute("aria-expanded", !0);
        }
        n && n();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = nn.getOrCreateInstance(this);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    D.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          l(this) || nn.getOrCreateInstance(this).show();
      }
    ),
      y(nn);
    const rn = { animation: "boolean", autohide: "boolean", delay: "number" },
      on = { animation: !0, autohide: !0, delay: 5e3 };
    class sn extends P {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get DefaultType() {
        return rn;
      }
      static get Default() {
        return on;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        D.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove("hide"),
          h(this._element),
          this._element.classList.add("show"),
          this._element.classList.add("showing"),
          this._queueCallback(
            () => {
              this._element.classList.remove("showing"),
                D.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this._element.classList.contains("show") &&
          (D.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.add("showing"),
            this._queueCallback(
              () => {
                this._element.classList.add("hide"),
                  this._element.classList.remove("showing"),
                  this._element.classList.remove("show"),
                  D.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
          super.dispose();
      }
      _getConfig(e) {
        return (
          (e = {
            ...on,
            ...B.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          s("toast", e, this.constructor.DefaultType),
          e
        );
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n ||
          this._element.contains(n) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        D.on(this._element, "mouseover.bs.toast", (e) =>
          this._onInteraction(e, !0)
        ),
          D.on(this._element, "mouseout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          ),
          D.on(this._element, "focusin.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          D.on(this._element, "focusout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = sn.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      I(sn),
      y(sn),
      {
        Alert: R,
        Button: W,
        Carousel: J,
        Collapse: te,
        Dropdown: Et,
        Modal: Nt,
        Offcanvas: Ht,
        Popover: Kt,
        ScrollSpy: tn,
        Tab: nn,
        Toast: sn,
        Tooltip: Xt,
      }
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).SimpleBar = t());
  })(this, function () {
    "use strict";
    var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    function t(e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    }
    var n,
      i,
      r,
      o = "object",
      s = function (e) {
        return e && e.Math == Math && e;
      },
      a =
        s(typeof globalThis == o && globalThis) ||
        s(typeof window == o && window) ||
        s(typeof self == o && self) ||
        s(typeof e == o && e) ||
        Function("return this")(),
      l = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      },
      c = !l(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
      u = {}.propertyIsEnumerable,
      h = Object.getOwnPropertyDescriptor,
      p = {
        f:
          h && !u.call({ 1: 2 }, 1)
            ? function (e) {
                var t = h(this, e);
                return !!t && t.enumerable;
              }
            : u,
      },
      f = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      },
      d = {}.toString,
      y = function (e) {
        return d.call(e).slice(8, -1);
      },
      g = "".split,
      m = l(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == y(e) ? g.call(e, "") : Object(e);
          }
        : Object,
      v = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
      },
      x = function (e) {
        return m(v(e));
      },
      b = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      },
      w = function (e, t) {
        if (!b(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !b((i = n.call(e))))
          return i;
        if ("function" == typeof (n = e.valueOf) && !b((i = n.call(e))))
          return i;
        if (!t && "function" == typeof (n = e.toString) && !b((i = n.call(e))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      },
      _ = {}.hasOwnProperty,
      E = function (e, t) {
        return _.call(e, t);
      },
      A = a.document,
      T = b(A) && b(A.createElement),
      k = function (e) {
        return T ? A.createElement(e) : {};
      },
      O =
        !c &&
        !l(function () {
          return (
            7 !=
            Object.defineProperty(k("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      S = Object.getOwnPropertyDescriptor,
      C = {
        f: c
          ? S
          : function (e, t) {
              if (((e = x(e)), (t = w(t, !0)), O))
                try {
                  return S(e, t);
                } catch (e) {}
              if (E(e, t)) return f(!p.f.call(e, t), e[t]);
            },
      },
      M = function (e) {
        if (!b(e)) throw TypeError(String(e) + " is not an object");
        return e;
      },
      L = Object.defineProperty,
      j = {
        f: c
          ? L
          : function (e, t, n) {
              if ((M(e), (t = w(t, !0)), M(n), O))
                try {
                  return L(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            },
      },
      N = c
        ? function (e, t, n) {
            return j.f(e, t, f(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      D = function (e, t) {
        try {
          N(a, e, t);
        } catch (n) {
          a[e] = t;
        }
        return t;
      },
      z = t(function (e) {
        var t = a["__core-js_shared__"] || D("__core-js_shared__", {});
        (e.exports = function (e, n) {
          return t[e] || (t[e] = void 0 !== n ? n : {});
        })("versions", []).push({
          version: "3.2.1",
          mode: "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
      }),
      H = z("native-function-to-string", Function.toString),
      P = a.WeakMap,
      I = "function" == typeof P && /native code/.test(H.call(P)),
      R = 0,
      W = Math.random(),
      q = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++R + W).toString(36)
        );
      },
      V = z("keys"),
      B = function (e) {
        return V[e] || (V[e] = q(e));
      },
      F = {},
      $ = a.WeakMap;
    if (I) {
      var U = new $(),
        X = U.get,
        Y = U.has,
        Q = U.set;
      (n = function (e, t) {
        return Q.call(U, e, t), t;
      }),
        (i = function (e) {
          return X.call(U, e) || {};
        }),
        (r = function (e) {
          return Y.call(U, e);
        });
    } else {
      var G = B("state");
      (F[G] = !0),
        (n = function (e, t) {
          return N(e, G, t), t;
        }),
        (i = function (e) {
          return E(e, G) ? e[G] : {};
        }),
        (r = function (e) {
          return E(e, G);
        });
    }
    var K = {
        set: n,
        get: i,
        has: r,
        enforce: function (e) {
          return r(e) ? i(e) : n(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!b(t) || (n = i(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      },
      J = t(function (e) {
        var t = K.get,
          n = K.enforce,
          i = String(H).split("toString");
        z("inspectSource", function (e) {
          return H.call(e);
        }),
          (e.exports = function (e, t, r, o) {
            var s = !!o && !!o.unsafe,
              l = !!o && !!o.enumerable,
              c = !!o && !!o.noTargetGet;
            "function" == typeof r &&
              ("string" != typeof t || E(r, "name") || N(r, "name", t),
              (n(r).source = i.join("string" == typeof t ? t : ""))),
              e !== a
                ? (s ? !c && e[t] && (l = !0) : delete e[t],
                  l ? (e[t] = r) : N(e, t, r))
                : l
                ? (e[t] = r)
                : D(t, r);
          })(Function.prototype, "toString", function () {
            return (
              ("function" == typeof this && t(this).source) || H.call(this)
            );
          });
      }),
      Z = a,
      ee = function (e) {
        return "function" == typeof e ? e : void 0;
      },
      te = function (e, t) {
        return arguments.length < 2
          ? ee(Z[e]) || ee(a[e])
          : (Z[e] && Z[e][t]) || (a[e] && a[e][t]);
      },
      ne = Math.ceil,
      ie = Math.floor,
      re = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? ie : ne)(e);
      },
      oe = Math.min,
      se = function (e) {
        return e > 0 ? oe(re(e), 9007199254740991) : 0;
      },
      ae = Math.max,
      le = Math.min,
      ce = function (e) {
        return function (t, n, i) {
          var r,
            o = x(t),
            s = se(o.length),
            a = (function (e, t) {
              var n = re(i);
              return n < 0 ? ae(n + t, 0) : le(n, t);
            })(0, s);
          if (e && n != n) {
            for (; s > a; ) if ((r = o[a++]) != r) return !0;
          } else
            for (; s > a; a++)
              if ((e || a in o) && o[a] === n) return e || a || 0;
          return !e && -1;
        };
      },
      ue = (ce(!0), ce(!1)),
      he = function (e, t) {
        var n,
          i = x(e),
          r = 0,
          o = [];
        for (n in i) !E(F, n) && E(i, n) && o.push(n);
        for (; t.length > r; ) E(i, (n = t[r++])) && (~ue(o, n) || o.push(n));
        return o;
      },
      pe = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      fe = pe.concat("length", "prototype"),
      de = {
        f:
          Object.getOwnPropertyNames ||
          function (e) {
            return he(e, fe);
          },
      },
      ye = { f: Object.getOwnPropertySymbols },
      ge =
        te("Reflect", "ownKeys") ||
        function (e) {
          var t = de.f(M(e)),
            n = ye.f;
          return n ? t.concat(n(e)) : t;
        },
      me = function (e, t) {
        for (var n = ge(t), i = j.f, r = C.f, o = 0; o < n.length; o++) {
          var s = n[o];
          E(e, s) || i(e, s, r(t, s));
        }
      },
      ve = /#|\.prototype\./,
      xe = function (e, t) {
        var n = we[be(e)];
        return n == Ee || (n != _e && ("function" == typeof t ? l(t) : !!t));
      },
      be = (xe.normalize = function (e) {
        return String(e).replace(ve, ".").toLowerCase();
      }),
      we = (xe.data = {}),
      _e = (xe.NATIVE = "N"),
      Ee = (xe.POLYFILL = "P"),
      Ae = xe,
      Te = C.f,
      ke = function (e, t) {
        var n,
          i,
          r,
          o,
          s,
          l = e.target,
          c = e.global,
          u = e.stat;
        if ((n = c ? a : u ? a[l] || D(l, {}) : (a[l] || {}).prototype))
          for (i in t) {
            if (
              ((o = t[i]),
              (r = e.noTargetGet ? (s = Te(n, i)) && s.value : n[i]),
              !Ae(c ? i : l + (u ? "." : "#") + i, e.forced) && void 0 !== r)
            ) {
              if (typeof o == typeof r) continue;
              me(o, r);
            }
            (e.sham || (r && r.sham)) && N(o, "sham", !0), J(n, i, o, e);
          }
      },
      Oe = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      },
      Se = function (e, t, n) {
        if ((Oe(e), void 0 === t)) return e;
        switch (n) {
          case 0:
            return function () {
              return e.call(t);
            };
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, i) {
              return e.call(t, n, i);
            };
          case 3:
            return function (n, i, r) {
              return e.call(t, n, i, r);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      },
      Ce = function (e) {
        return Object(v(e));
      },
      Me =
        Array.isArray ||
        function (e) {
          return "Array" == y(e);
        },
      Le =
        !!Object.getOwnPropertySymbols &&
        !l(function () {
          return !String(Symbol());
        }),
      je = a.Symbol,
      Ne = z("wks"),
      De = function (e) {
        return Ne[e] || (Ne[e] = (Le && je[e]) || (Le ? je : q)("Symbol." + e));
      },
      ze = De("species"),
      He = function (e, t) {
        var n;
        return (
          Me(e) &&
            ("function" != typeof (n = e.constructor) ||
            (n !== Array && !Me(n.prototype))
              ? b(n) && null === (n = n[ze]) && (n = void 0)
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        );
      },
      Pe = [].push,
      Ie = function (e) {
        var t = 1 == e,
          n = 2 == e,
          i = 3 == e,
          r = 4 == e,
          o = 6 == e,
          s = 5 == e || o;
        return function (a, l, c, u) {
          for (
            var h,
              p,
              f = Ce(a),
              d = m(f),
              y = Se(l, c, 3),
              g = se(d.length),
              v = 0,
              x = u || He,
              b = t ? x(a, g) : n ? x(a, 0) : void 0;
            g > v;
            v++
          )
            if ((s || v in d) && ((p = y((h = d[v]), v, f)), e))
              if (t) b[v] = p;
              else if (p)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return h;
                  case 6:
                    return v;
                  case 2:
                    Pe.call(b, h);
                }
              else if (r) return !1;
          return o ? -1 : i || r ? r : b;
        };
      },
      Re = {
        forEach: Ie(0),
        map: Ie(1),
        filter: Ie(2),
        some: Ie(3),
        every: Ie(4),
        find: Ie(5),
        findIndex: Ie(6),
      },
      We = function (e, t) {
        var n = [][e];
        return (
          !n ||
          !l(function () {
            n.call(
              null,
              t ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      },
      qe = Re.forEach,
      Ve = We("forEach")
        ? function (e) {
            return qe(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        : [].forEach;
    ke(
      { target: "Array", proto: !0, forced: [].forEach != Ve },
      { forEach: Ve }
    );
    var Be = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
    for (var Fe in Be) {
      var $e = a[Fe],
        Ue = $e && $e.prototype;
      if (Ue && Ue.forEach !== Ve)
        try {
          N(Ue, "forEach", Ve);
        } catch (e) {
          Ue.forEach = Ve;
        }
    }
    var Xe = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      Ye = De("species"),
      Qe = Re.filter;
    ke(
      {
        target: "Array",
        proto: !0,
        forced: !!l(function () {
          var e = [];
          return (
            ((e.constructor = {})[Ye] = function () {
              return { foo: 1 };
            }),
            1 !== e.filter(Boolean).foo
          );
        }),
      },
      {
        filter: function (e) {
          return Qe(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    var Ge =
        Object.keys ||
        function (e) {
          return he(e, pe);
        },
      Ke = c
        ? Object.defineProperties
        : function (e, t) {
            M(e);
            for (var n, i = Ge(t), r = i.length, o = 0; r > o; )
              j.f(e, (n = i[o++]), t[n]);
            return e;
          },
      Je = te("document", "documentElement"),
      Ze = B("IE_PROTO"),
      et = function () {},
      tt = function () {
        var e,
          t = k("iframe"),
          n = pe.length;
        for (
          t.style.display = "none",
            Je.appendChild(t),
            t.src = String("javascript:"),
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            tt = e.F;
          n--;

        )
          delete tt.prototype[pe[n]];
        return tt();
      },
      nt =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((et.prototype = M(e)),
                (n = new et()),
                (et.prototype = null),
                (n[Ze] = e))
              : (n = tt()),
            void 0 === t ? n : Ke(n, t)
          );
        };
    F[Ze] = !0;
    var it = De("unscopables"),
      rt = Array.prototype;
    null == rt[it] && N(rt, it, nt(null));
    var ot,
      st,
      at,
      lt = function (e) {
        rt[it][e] = !0;
      },
      ct = {},
      ut = !l(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      ht = B("IE_PROTO"),
      pt = Object.prototype,
      ft = ut
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = Ce(e)),
              E(e, ht)
                ? e[ht]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? pt
                : null
            );
          },
      dt = De("iterator"),
      yt = !1;
    [].keys &&
      ("next" in (at = [].keys())
        ? (st = ft(ft(at))) !== Object.prototype && (ot = st)
        : (yt = !0)),
      null == ot && (ot = {}),
      E(ot, dt) ||
        N(ot, dt, function () {
          return this;
        });
    var gt = { IteratorPrototype: ot, BUGGY_SAFARI_ITERATORS: yt },
      mt = j.f,
      vt = De("toStringTag"),
      xt = function (e, t, n) {
        e &&
          !E((e = n ? e : e.prototype), vt) &&
          mt(e, vt, { configurable: !0, value: t });
      },
      bt = gt.IteratorPrototype,
      wt = function () {
        return this;
      },
      _t =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function (n, i) {
                return (
                  M(n),
                  (function (e) {
                    if (!b(e) && null !== e)
                      throw TypeError(
                        "Can't set " + String(e) + " as a prototype"
                      );
                  })(i),
                  t ? e.call(n, i) : (n.__proto__ = i),
                  n
                );
              };
            })()
          : void 0),
      Et = gt.IteratorPrototype,
      At = gt.BUGGY_SAFARI_ITERATORS,
      Tt = De("iterator"),
      kt = function () {
        return this;
      },
      Ot = function (e, t, n, i, r, o, s) {
        !(function (e, t, n) {
          var i = t + " Iterator";
          (e.prototype = nt(bt, { next: f(1, n) })), xt(e, i, !1), (ct[i] = wt);
        })(n, t, i);
        var a,
          l,
          c,
          u = function (e) {
            if (e === r && g) return g;
            if (!At && e in d) return d[e];
            switch (e) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this);
            };
          },
          h = t + " Iterator",
          p = !1,
          d = e.prototype,
          y = d[Tt] || d["@@iterator"] || (r && d[r]),
          g = (!At && y) || u(r),
          m = ("Array" == t && d.entries) || y;
        if (
          (m &&
            ((a = ft(m.call(new e()))),
            Et !== Object.prototype &&
              a.next &&
              (ft(a) !== Et &&
                (_t ? _t(a, Et) : "function" != typeof a[Tt] && N(a, Tt, kt)),
              xt(a, h, !0))),
          "values" == r &&
            y &&
            "values" !== y.name &&
            ((p = !0),
            (g = function () {
              return y.call(this);
            })),
          d[Tt] !== g && N(d, Tt, g),
          (ct[t] = g),
          r)
        )
          if (
            ((l = {
              values: u("values"),
              keys: o ? g : u("keys"),
              entries: u("entries"),
            }),
            s)
          )
            for (c in l) (!At && !p && c in d) || J(d, c, l[c]);
          else ke({ target: t, proto: !0, forced: At || p }, l);
        return l;
      },
      St = K.set,
      Ct = K.getterFor("Array Iterator"),
      Mt = Ot(
        Array,
        "Array",
        function (e, t) {
          St(this, { type: "Array Iterator", target: x(e), index: 0, kind: t });
        },
        function () {
          var e = Ct(this),
            t = e.target,
            n = e.kind,
            i = e.index++;
          return !t || i >= t.length
            ? ((e.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: i, done: !1 }
            : "values" == n
            ? { value: t[i], done: !1 }
            : { value: [i, t[i]], done: !1 };
        },
        "values"
      );
    (ct.Arguments = ct.Array), lt("keys"), lt("values"), lt("entries");
    var Lt = Object.assign,
      jt =
        !Lt ||
        l(function () {
          var e = {},
            t = {},
            n = Symbol();
          return (
            (e[n] = 7),
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != Lt({}, e)[n] ||
              "abcdefghijklmnopqrst" != Ge(Lt({}, t)).join("")
          );
        })
          ? function (e, t) {
              for (
                var n = Ce(e), i = arguments.length, r = 1, o = ye.f, s = p.f;
                i > r;

              )
                for (
                  var a,
                    l = m(arguments[r++]),
                    u = o ? Ge(l).concat(o(l)) : Ge(l),
                    h = u.length,
                    f = 0;
                  h > f;

                )
                  (a = u[f++]), (c && !s.call(l, a)) || (n[a] = l[a]);
              return n;
            }
          : Lt;
    ke(
      { target: "Object", stat: !0, forced: Object.assign !== jt },
      { assign: jt }
    );
    var Nt = De("toStringTag"),
      Dt =
        "Arguments" ==
        y(
          (function () {
            return arguments;
          })()
        ),
      zt = function (e) {
        var t, n, i;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), Nt))
          ? n
          : Dt
          ? y(t)
          : "Object" == (i = y(t)) && "function" == typeof t.callee
          ? "Arguments"
          : i;
      },
      Ht = {};
    Ht[De("toStringTag")] = "z";
    var Pt =
        "[object z]" !== String(Ht)
          ? function () {
              return "[object " + zt(this) + "]";
            }
          : Ht.toString,
      It = Object.prototype;
    Pt !== It.toString && J(It, "toString", Pt, { unsafe: !0 });
    var Rt = "\t\n\v\f\r                　\u2028\u2029\ufeff",
      Wt = "[" + Rt + "]",
      qt = RegExp("^" + Wt + Wt + "*"),
      Vt = RegExp(Wt + Wt + "*$"),
      Bt = function (e) {
        return function (t) {
          var n = String(v(t));
          return (
            1 & e && (n = n.replace(qt, "")),
            2 & e && (n = n.replace(Vt, "")),
            n
          );
        };
      },
      Ft = (Bt(1), Bt(2), Bt(3)),
      $t = a.parseInt,
      Ut = /^[+-]?0[Xx]/,
      Xt =
        8 !== $t(Rt + "08") || 22 !== $t(Rt + "0x16")
          ? function (e, t) {
              var n = Ft(String(e));
              return $t(n, t >>> 0 || (Ut.test(n) ? 16 : 10));
            }
          : $t;
    ke({ global: !0, forced: parseInt != Xt }, { parseInt: Xt });
    var Yt = function (e) {
        return function (t, n) {
          var i,
            r,
            o = String(v(t)),
            s = re(n),
            a = o.length;
          return s < 0 || s >= a
            ? e
              ? ""
              : void 0
            : (i = o.charCodeAt(s)) < 55296 ||
              i > 56319 ||
              s + 1 === a ||
              (r = o.charCodeAt(s + 1)) < 56320 ||
              r > 57343
            ? e
              ? o.charAt(s)
              : i
            : e
            ? o.slice(s, s + 2)
            : r - 56320 + ((i - 55296) << 10) + 65536;
        };
      },
      Qt = { codeAt: Yt(!1), charAt: Yt(!0) },
      Gt = Qt.charAt,
      Kt = K.set,
      Jt = K.getterFor("String Iterator");
    Ot(
      String,
      "String",
      function (e) {
        Kt(this, { type: "String Iterator", string: String(e), index: 0 });
      },
      function () {
        var e,
          t = Jt(this),
          n = t.string,
          i = t.index;
        return i >= n.length
          ? { value: void 0, done: !0 }
          : ((e = Gt(n, i)), (t.index += e.length), { value: e, done: !1 });
      }
    );
    var Zt = function (e, t, n) {
        for (var i in t) J(e, i, t[i], n);
        return e;
      },
      en = !l(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      }),
      tn = t(function (e) {
        var t = j.f,
          n = q("meta"),
          i = 0,
          r =
            Object.isExtensible ||
            function () {
              return !0;
            },
          o = function (e) {
            t(e, n, { value: { objectID: "O" + ++i, weakData: {} } });
          },
          s = (e.exports = {
            REQUIRED: !1,
            fastKey: function (e, t) {
              if (!b(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!E(e, n)) {
                if (!r(e)) return "F";
                if (!t) return "E";
                o(e);
              }
              return e[n].objectID;
            },
            getWeakData: function (e, t) {
              if (!E(e, n)) {
                if (!r(e)) return !0;
                if (!t) return !1;
                o(e);
              }
              return e[n].weakData;
            },
            onFreeze: function (e) {
              return en && s.REQUIRED && r(e) && !E(e, n) && o(e), e;
            },
          });
        F[n] = !0;
      }),
      nn =
        (tn.REQUIRED, tn.fastKey, tn.getWeakData, tn.onFreeze, De("iterator")),
      rn = Array.prototype,
      on = De("iterator"),
      sn = function (e, t, n, i) {
        try {
          return i ? t(M(n)[0], n[1]) : t(n);
        } catch (t) {
          var r = e.return;
          throw (void 0 !== r && M(r.call(e)), t);
        }
      },
      an = t(function (e) {
        var t = function (e, t) {
          (this.stopped = e), (this.result = t);
        };
        (e.exports = function (e, n, i, r, o) {
          var s,
            a,
            l,
            c,
            u,
            h,
            p,
            f = Se(n, i, r ? 2 : 1);
          if (o) s = e;
          else {
            if (
              "function" !=
              typeof (a = (function (e) {
                if (null != e) return e[on] || e["@@iterator"] || ct[zt(e)];
              })(e))
            )
              throw TypeError("Target is not iterable");
            if (void 0 !== (p = a) && (ct.Array === p || rn[nn] === p)) {
              for (l = 0, c = se(e.length); c > l; l++)
                if (
                  (u = r ? f(M((h = e[l]))[0], h[1]) : f(e[l])) &&
                  u instanceof t
                )
                  return u;
              return new t(!1);
            }
            s = a.call(e);
          }
          for (; !(h = s.next()).done; )
            if ((u = sn(s, f, h.value, r)) && u instanceof t) return u;
          return new t(!1);
        }).stop = function (e) {
          return new t(!0, e);
        };
      }),
      ln = function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
      },
      cn = De("iterator"),
      un = !1;
    try {
      var hn = 0,
        pn = {
          next: function () {
            return { done: !!hn++ };
          },
          return: function () {
            un = !0;
          },
        };
      (pn[cn] = function () {
        return this;
      }),
        Array.from(pn, function () {
          throw 2;
        });
    } catch (e) {}
    var fn = function (e, t, n, i, r) {
        var o = a[e],
          s = o && o.prototype,
          c = o,
          u = i ? "set" : "add",
          h = {},
          p = function (e) {
            var t = s[e];
            J(
              s,
              e,
              "add" == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : "delete" == e
                ? function (e) {
                    return !(r && !b(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function (e) {
                    return r && !b(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function (e) {
                    return !(r && !b(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          Ae(
            e,
            "function" != typeof o ||
              !(
                r ||
                (s.forEach &&
                  !l(function () {
                    new o().entries().next();
                  }))
              )
          )
        )
          (c = n.getConstructor(t, e, i, u)), (tn.REQUIRED = !0);
        else if (Ae(e, !0)) {
          var f = new c(),
            d = f[u](r ? {} : -0, 1) != f,
            y = l(function () {
              f.has(1);
            }),
            g = (function (e, t) {
              if (!un) return !1;
              var n = !1;
              try {
                var i = {};
                (i[cn] = function () {
                  return {
                    next: function () {
                      return { done: (n = !0) };
                    },
                  };
                }),
                  (function (e) {
                    new o(e);
                  })(i);
              } catch (e) {}
              return n;
            })(),
            m =
              !r &&
              l(function () {
                for (var e = new o(), t = 5; t--; ) e[u](t, t);
                return !e.has(-0);
              });
          g ||
            (((c = t(function (t, n) {
              ln(t, c, e);
              var r = (function (e, t, n) {
                var i, r;
                return (
                  _t &&
                    "function" == typeof (i = t.constructor) &&
                    i !== n &&
                    b((r = i.prototype)) &&
                    r !== n.prototype &&
                    _t(e, r),
                  e
                );
              })(new o(), t, c);
              return null != n && an(n, r[u], r, i), r;
            })).prototype = s),
            (s.constructor = c)),
            (y || m) && (p("delete"), p("has"), i && p("get")),
            (m || d) && p(u),
            r && s.clear && delete s.clear;
        }
        return (
          (h[e] = c),
          ke({ global: !0, forced: c != o }, h),
          xt(c, e),
          r || n.setStrong(c, e, i),
          c
        );
      },
      dn = tn.getWeakData,
      yn = K.set,
      gn = K.getterFor,
      mn = Re.find,
      vn = Re.findIndex,
      xn = 0,
      bn = function (e) {
        return e.frozen || (e.frozen = new wn());
      },
      wn = function () {
        this.entries = [];
      },
      _n = function (e, t) {
        return mn(e.entries, function (e) {
          return e[0] === t;
        });
      };
    wn.prototype = {
      get: function (e) {
        var t = _n(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!_n(this, e);
      },
      set: function (e, t) {
        var n = _n(this, e);
        n ? (n[1] = t) : this.entries.push([e, t]);
      },
      delete: function (e) {
        var t = vn(this.entries, function (t) {
          return t[0] === e;
        });
        return ~t && this.entries.splice(t, 1), !!~t;
      },
    };
    var En = {
        getConstructor: function (e, t, n, i) {
          var r = e(function (e, o) {
              ln(e, r, t),
                yn(e, { type: t, id: xn++, frozen: void 0 }),
                null != o && an(o, e[i], e, n);
            }),
            o = gn(t),
            s = function (e, t, n) {
              var i = o(e),
                r = dn(M(t), !0);
              return !0 === r ? bn(i).set(t, n) : (r[i.id] = n), e;
            };
          return (
            Zt(r.prototype, {
              delete: function (e) {
                var t = o(this);
                if (!b(e)) return !1;
                var n = dn(e);
                return !0 === n
                  ? bn(t).delete(e)
                  : n && E(n, t.id) && delete n[t.id];
              },
              has: function (e) {
                var t = o(this);
                if (!b(e)) return !1;
                var n = dn(e);
                return !0 === n ? bn(t).has(e) : n && E(n, t.id);
              },
            }),
            Zt(
              r.prototype,
              n
                ? {
                    get: function (e) {
                      var t = o(this);
                      if (b(e)) {
                        var n = dn(e);
                        return !0 === n ? bn(t).get(e) : n ? n[t.id] : void 0;
                      }
                    },
                    set: function (e, t) {
                      return s(this, e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return s(this, e, !0);
                    },
                  }
            ),
            r
          );
        },
      },
      An =
        (t(function (e) {
          var t,
            n = K.enforce,
            i = !a.ActiveXObject && "ActiveXObject" in a,
            r = Object.isExtensible,
            o = function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0);
              };
            },
            s = (e.exports = fn("WeakMap", o, En, !0, !0));
          if (I && i) {
            (t = En.getConstructor(o, "WeakMap", !0)), (tn.REQUIRED = !0);
            var l = s.prototype,
              c = l.delete,
              u = l.has,
              h = l.get,
              p = l.set;
            Zt(l, {
              delete: function (e) {
                if (b(e) && !r(e)) {
                  var i = n(this);
                  return (
                    i.frozen || (i.frozen = new t()),
                    c.call(this, e) || i.frozen.delete(e)
                  );
                }
                return c.call(this, e);
              },
              has: function (e) {
                if (b(e) && !r(e)) {
                  var i = n(this);
                  return (
                    i.frozen || (i.frozen = new t()),
                    u.call(this, e) || i.frozen.has(e)
                  );
                }
                return u.call(this, e);
              },
              get: function (e) {
                if (b(e) && !r(e)) {
                  var i = n(this);
                  return (
                    i.frozen || (i.frozen = new t()),
                    u.call(this, e) ? h.call(this, e) : i.frozen.get(e)
                  );
                }
                return h.call(this, e);
              },
              set: function (e, i) {
                if (b(e) && !r(e)) {
                  var o = n(this);
                  o.frozen || (o.frozen = new t()),
                    u.call(this, e) ? p.call(this, e, i) : o.frozen.set(e, i);
                } else p.call(this, e, i);
                return this;
              },
            });
          }
        }),
        De("iterator")),
      Tn = De("toStringTag"),
      kn = Mt.values;
    for (var On in Be) {
      var Sn = a[On],
        Cn = Sn && Sn.prototype;
      if (Cn) {
        if (Cn[An] !== kn)
          try {
            N(Cn, An, kn);
          } catch (e) {
            Cn[An] = kn;
          }
        if ((Cn[Tn] || N(Cn, Tn, On), Be[On]))
          for (var Mn in Mt)
            if (Cn[Mn] !== Mt[Mn])
              try {
                N(Cn, Mn, Mt[Mn]);
              } catch (e) {
                Cn[Mn] = Mt[Mn];
              }
      }
    }
    var Ln = "Expected a function",
      jn = NaN,
      Nn = "[object Symbol]",
      Dn = /^\s+|\s+$/g,
      zn = /^[-+]0x[0-9a-f]+$/i,
      Hn = /^0b[01]+$/i,
      Pn = /^0o[0-7]+$/i,
      In = parseInt,
      Rn = "object" == typeof e && e && e.Object === Object && e,
      Wn = "object" == typeof self && self && self.Object === Object && self,
      qn = Rn || Wn || Function("return this")(),
      Vn = Object.prototype.toString,
      Bn = Math.max,
      Fn = Math.min,
      $n = function () {
        return qn.Date.now();
      };
    function Un(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function Xn(e) {
      if ("number" == typeof e) return e;
      if (
        (function (e) {
          return (
            "symbol" == typeof e ||
            ((function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
              Vn.call(e) == Nn)
          );
        })(e)
      )
        return jn;
      if (Un(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = Un(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(Dn, "");
      var n = Hn.test(e);
      return n || Pn.test(e) ? In(e.slice(2), n ? 2 : 8) : zn.test(e) ? jn : +e;
    }
    var Yn = function (e, t, n) {
        var i = !0,
          r = !0;
        if ("function" != typeof e) throw new TypeError(Ln);
        return (
          Un(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (r = "trailing" in n ? !!n.trailing : r)),
          (function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c = 0,
              u = !1,
              h = !1,
              p = !0;
            if ("function" != typeof e) throw new TypeError(Ln);
            function f(t) {
              var n = i,
                o = r;
              return (i = r = void 0), (c = t), (s = e.apply(o, n));
            }
            function d(e) {
              var n = e - l;
              return void 0 === l || n >= t || n < 0 || (h && e - c >= o);
            }
            function y() {
              var e = $n();
              if (d(e)) return g(e);
              a = setTimeout(
                y,
                (function (e) {
                  var n = t - (e - l);
                  return h ? Fn(n, o - (e - c)) : n;
                })(e)
              );
            }
            function g(e) {
              return (a = void 0), p && i ? f(e) : ((i = r = void 0), s);
            }
            function m() {
              var e = $n(),
                n = d(e);
              if (((i = arguments), (r = this), (l = e), n)) {
                if (void 0 === a)
                  return (function (e) {
                    return (c = e), (a = setTimeout(y, t)), u ? f(e) : s;
                  })(l);
                if (h) return (a = setTimeout(y, t)), f(l);
              }
              return void 0 === a && (a = setTimeout(y, t)), s;
            }
            return (
              (t = Xn(t) || 0),
              Un(n) &&
                ((u = !!n.leading),
                (o = (h = "maxWait" in n) ? Bn(Xn(n.maxWait) || 0, t) : o),
                (p = "trailing" in n ? !!n.trailing : p)),
              (m.cancel = function () {
                void 0 !== a && clearTimeout(a),
                  (c = 0),
                  (i = l = r = a = void 0);
              }),
              (m.flush = function () {
                return void 0 === a ? s : g($n());
              }),
              m
            );
          })(e, t, { leading: i, maxWait: t, trailing: r })
        );
      },
      Qn = NaN,
      Gn = "[object Symbol]",
      Kn = /^\s+|\s+$/g,
      Jn = /^[-+]0x[0-9a-f]+$/i,
      Zn = /^0b[01]+$/i,
      ei = /^0o[0-7]+$/i,
      ti = parseInt,
      ni = "object" == typeof e && e && e.Object === Object && e,
      ii = "object" == typeof self && self && self.Object === Object && self,
      ri = ni || ii || Function("return this")(),
      oi = Object.prototype.toString,
      si = Math.max,
      ai = Math.min,
      li = function () {
        return ri.Date.now();
      };
    function ci(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function ui(e) {
      if ("number" == typeof e) return e;
      if (
        (function (e) {
          return (
            "symbol" == typeof e ||
            ((function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
              oi.call(e) == Gn)
          );
        })(e)
      )
        return Qn;
      if (ci(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = ci(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(Kn, "");
      var n = Zn.test(e);
      return n || ei.test(e) ? ti(e.slice(2), n ? 2 : 8) : Jn.test(e) ? Qn : +e;
    }
    var hi = function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c = 0,
          u = !1,
          h = !1,
          p = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function f(t) {
          var n = i,
            o = r;
          return (i = r = void 0), (c = t), (s = e.apply(o, n));
        }
        function d(e) {
          var n = e - l;
          return void 0 === l || n >= t || n < 0 || (h && e - c >= o);
        }
        function y() {
          var e = li();
          if (d(e)) return g(e);
          a = setTimeout(
            y,
            (function (e) {
              var n = t - (e - l);
              return h ? ai(n, o - (e - c)) : n;
            })(e)
          );
        }
        function g(e) {
          return (a = void 0), p && i ? f(e) : ((i = r = void 0), s);
        }
        function m() {
          var e = li(),
            n = d(e);
          if (((i = arguments), (r = this), (l = e), n)) {
            if (void 0 === a)
              return (function (e) {
                return (c = e), (a = setTimeout(y, t)), u ? f(e) : s;
              })(l);
            if (h) return (a = setTimeout(y, t)), f(l);
          }
          return void 0 === a && (a = setTimeout(y, t)), s;
        }
        return (
          (t = ui(t) || 0),
          ci(n) &&
            ((u = !!n.leading),
            (o = (h = "maxWait" in n) ? si(ui(n.maxWait) || 0, t) : o),
            (p = "trailing" in n ? !!n.trailing : p)),
          (m.cancel = function () {
            void 0 !== a && clearTimeout(a), (c = 0), (i = l = r = a = void 0);
          }),
          (m.flush = function () {
            return void 0 === a ? s : g(li());
          }),
          m
        );
      },
      pi = "Expected a function",
      fi = "__lodash_hash_undefined__",
      di = "[object Function]",
      yi = "[object GeneratorFunction]",
      gi = /^\[object .+?Constructor\]$/,
      mi = "object" == typeof e && e && e.Object === Object && e,
      vi = "object" == typeof self && self && self.Object === Object && self,
      xi = mi || vi || Function("return this")(),
      bi = Array.prototype,
      wi = Function.prototype,
      _i = Object.prototype,
      Ei = xi["__core-js_shared__"],
      Ai = (function () {
        var e = /[^.]+$/.exec((Ei && Ei.keys && Ei.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })(),
      Ti = wi.toString,
      ki = _i.hasOwnProperty,
      Oi = _i.toString,
      Si = RegExp(
        "^" +
          Ti.call(ki)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      Ci = bi.splice,
      Mi = Pi(xi, "Map"),
      Li = Pi(Object, "create");
    function ji(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    function Ni(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    function Di(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    function zi(e, t) {
      for (var n, i, r = e.length; r--; )
        if ((n = e[r][0]) === (i = t) || (n != n && i != i)) return r;
      return -1;
    }
    function Hi(e, t) {
      var n,
        i,
        r = e.__data__;
      return (
        "string" == (i = typeof (n = t)) ||
        "number" == i ||
        "symbol" == i ||
        "boolean" == i
          ? "__proto__" !== n
          : null === n
      )
        ? r["string" == typeof t ? "string" : "hash"]
        : r.map;
    }
    function Pi(e, t) {
      var n = (function (e, t) {
        return null == e ? void 0 : e[t];
      })(e, t);
      return (function (e) {
        return (
          !(!Ri(e) || ((t = e), Ai && Ai in t)) &&
          ((function (e) {
            var t = Ri(e) ? Oi.call(e) : "";
            return t == di || t == yi;
          })(e) ||
          (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                t = !!(e + "");
              } catch (e) {}
            return t;
          })(e)
            ? Si
            : gi
          ).test(
            (function (e) {
              if (null != e) {
                try {
                  return Ti.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          )
        );
        var t;
      })(n)
        ? n
        : void 0;
    }
    function Ii(e, t) {
      if ("function" != typeof e || (t && "function" != typeof t))
        throw new TypeError(pi);
      var n = function () {
        var i = arguments,
          r = t ? t.apply(this, i) : i[0],
          o = n.cache;
        if (o.has(r)) return o.get(r);
        var s = e.apply(this, i);
        return (n.cache = o.set(r, s)), s;
      };
      return (n.cache = new (Ii.Cache || Di)()), n;
    }
    function Ri(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    (ji.prototype.clear = function () {
      this.__data__ = Li ? Li(null) : {};
    }),
      (ji.prototype.delete = function (e) {
        return this.has(e) && delete this.__data__[e];
      }),
      (ji.prototype.get = function (e) {
        var t = this.__data__;
        if (Li) {
          var n = t[e];
          return n === fi ? void 0 : n;
        }
        return ki.call(t, e) ? t[e] : void 0;
      }),
      (ji.prototype.has = function (e) {
        var t = this.__data__;
        return Li ? void 0 !== t[e] : ki.call(t, e);
      }),
      (ji.prototype.set = function (e, t) {
        return (this.__data__[e] = Li && void 0 === t ? fi : t), this;
      }),
      (Ni.prototype.clear = function () {
        this.__data__ = [];
      }),
      (Ni.prototype.delete = function (e) {
        var t = this.__data__,
          n = zi(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : Ci.call(t, n, 1), 0));
      }),
      (Ni.prototype.get = function (e) {
        var t = this.__data__,
          n = zi(t, e);
        return n < 0 ? void 0 : t[n][1];
      }),
      (Ni.prototype.has = function (e) {
        return zi(this.__data__, e) > -1;
      }),
      (Ni.prototype.set = function (e, t) {
        var n = this.__data__,
          i = zi(n, e);
        return i < 0 ? n.push([e, t]) : (n[i][1] = t), this;
      }),
      (Di.prototype.clear = function () {
        this.__data__ = {
          hash: new ji(),
          map: new (Mi || Ni)(),
          string: new ji(),
        };
      }),
      (Di.prototype.delete = function (e) {
        return Hi(this, e).delete(e);
      }),
      (Di.prototype.get = function (e) {
        return Hi(this, e).get(e);
      }),
      (Di.prototype.has = function (e) {
        return Hi(this, e).has(e);
      }),
      (Di.prototype.set = function (e, t) {
        return Hi(this, e).set(e, t), this;
      }),
      (Ii.Cache = Di);
    var Wi = Ii,
      qi = (function () {
        if ("undefined" != typeof Map) return Map;
        function e(e, t) {
          var n = -1;
          return (
            e.some(function (e, i) {
              return e[0] === t && ((n = i), !0);
            }),
            n
          );
        }
        return (function () {
          function t() {
            this.__entries__ = [];
          }
          return (
            Object.defineProperty(t.prototype, "size", {
              get: function () {
                return this.__entries__.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.get = function (t) {
              var n = e(this.__entries__, t),
                i = this.__entries__[n];
              return i && i[1];
            }),
            (t.prototype.set = function (t, n) {
              var i = e(this.__entries__, t);
              ~i ? (this.__entries__[i][1] = n) : this.__entries__.push([t, n]);
            }),
            (t.prototype.delete = function (t) {
              var n = this.__entries__,
                i = e(n, t);
              ~i && n.splice(i, 1);
            }),
            (t.prototype.has = function (t) {
              return !!~e(this.__entries__, t);
            }),
            (t.prototype.clear = function () {
              this.__entries__.splice(0);
            }),
            (t.prototype.forEach = function (e, t) {
              void 0 === t && (t = null);
              for (var n = 0, i = this.__entries__; n < i.length; n++) {
                var r = i[n];
                e.call(t, r[1], r[0]);
              }
            }),
            t
          );
        })();
      })(),
      Vi =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        window.document === document,
      Bi =
        "undefined" != typeof global && global.Math === Math
          ? global
          : "undefined" != typeof self && self.Math === Math
          ? self
          : "undefined" != typeof window && window.Math === Math
          ? window
          : Function("return this")(),
      Fi =
        "function" == typeof requestAnimationFrame
          ? requestAnimationFrame.bind(Bi)
          : function (e) {
              return setTimeout(function () {
                return e(Date.now());
              }, 1e3 / 60);
            },
      $i = 2,
      Ui = 20,
      Xi = [
        "top",
        "right",
        "bottom",
        "left",
        "width",
        "height",
        "size",
        "weight",
      ],
      Yi = "undefined" != typeof MutationObserver,
      Qi = (function () {
        function e() {
          (this.connected_ = !1),
            (this.mutationEventsAdded_ = !1),
            (this.mutationsObserver_ = null),
            (this.observers_ = []),
            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
            (this.refresh = (function (e, t) {
              var n = !1,
                i = !1,
                r = 0;
              function o() {
                n && ((n = !1), e()), i && a();
              }
              function s() {
                Fi(o);
              }
              function a() {
                var e = Date.now();
                if (n) {
                  if (e - r < $i) return;
                  i = !0;
                } else (n = !0), (i = !1), setTimeout(s, t);
                r = e;
              }
              return a;
            })(this.refresh.bind(this), Ui));
        }
        return (
          (e.prototype.addObserver = function (e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e),
              this.connected_ || this.connect_();
          }),
          (e.prototype.removeObserver = function (e) {
            var t = this.observers_,
              n = t.indexOf(e);
            ~n && t.splice(n, 1),
              !t.length && this.connected_ && this.disconnect_();
          }),
          (e.prototype.refresh = function () {
            this.updateObservers_() && this.refresh();
          }),
          (e.prototype.updateObservers_ = function () {
            var e = this.observers_.filter(function (e) {
              return e.gatherActive(), e.hasActive();
            });
            return (
              e.forEach(function (e) {
                return e.broadcastActive();
              }),
              e.length > 0
            );
          }),
          (e.prototype.connect_ = function () {
            Vi &&
              !this.connected_ &&
              (document.addEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.addEventListener("resize", this.refresh),
              Yi
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))
                : (document.addEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0)),
              (this.connected_ = !0));
          }),
          (e.prototype.disconnect_ = function () {
            Vi &&
              this.connected_ &&
              (document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.removeEventListener("resize", this.refresh),
              this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                ),
              (this.mutationsObserver_ = null),
              (this.mutationEventsAdded_ = !1),
              (this.connected_ = !1));
          }),
          (e.prototype.onTransitionEnd_ = function (e) {
            var t = e.propertyName,
              n = void 0 === t ? "" : t;
            Xi.some(function (e) {
              return !!~n.indexOf(e);
            }) && this.refresh();
          }),
          (e.getInstance = function () {
            return this.instance_ || (this.instance_ = new e()), this.instance_;
          }),
          (e.instance_ = null),
          e
        );
      })(),
      Gi = function (e, t) {
        for (var n = 0, i = Object.keys(t); n < i.length; n++) {
          var r = i[n];
          Object.defineProperty(e, r, {
            value: t[r],
            enumerable: !1,
            writable: !1,
            configurable: !0,
          });
        }
        return e;
      },
      Ki = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || Bi;
      },
      Ji = ir(0, 0, 0, 0);
    function Zi(e) {
      return parseFloat(e) || 0;
    }
    function er(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      return t.reduce(function (t, n) {
        return t + Zi(e["border-" + n + "-width"]);
      }, 0);
    }
    var tr =
      "undefined" != typeof SVGGraphicsElement
        ? function (e) {
            return e instanceof Ki(e).SVGGraphicsElement;
          }
        : function (e) {
            return (
              e instanceof Ki(e).SVGElement && "function" == typeof e.getBBox
            );
          };
    function nr(e) {
      return Vi
        ? tr(e)
          ? (function (e) {
              var t = e.getBBox();
              return ir(0, 0, t.width, t.height);
            })(e)
          : (function (e) {
              var t = e.clientWidth,
                n = e.clientHeight;
              if (!t && !n) return Ji;
              var i = Ki(e).getComputedStyle(e),
                r = (function (e) {
                  for (
                    var t = {}, n = 0, i = ["top", "right", "bottom", "left"];
                    n < i.length;
                    n++
                  ) {
                    var r = i[n],
                      o = e["padding-" + r];
                    t[r] = Zi(o);
                  }
                  return t;
                })(i),
                o = r.left + r.right,
                s = r.top + r.bottom,
                a = Zi(i.width),
                l = Zi(i.height);
              if (
                ("border-box" === i.boxSizing &&
                  (Math.round(a + o) !== t && (a -= er(i, "left", "right") + o),
                  Math.round(l + s) !== n && (l -= er(i, "top", "bottom") + s)),
                !(function (e) {
                  return e === Ki(e).document.documentElement;
                })(e))
              ) {
                var c = Math.round(a + o) - t,
                  u = Math.round(l + s) - n;
                1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(u) && (l -= u);
              }
              return ir(r.left, r.top, a, l);
            })(e)
        : Ji;
    }
    function ir(e, t, n, i) {
      return { x: e, y: t, width: n, height: i };
    }
    var rr = (function () {
        function e(e) {
          (this.broadcastWidth = 0),
            (this.broadcastHeight = 0),
            (this.contentRect_ = ir(0, 0, 0, 0)),
            (this.target = e);
        }
        return (
          (e.prototype.isActive = function () {
            var e = nr(this.target);
            return (
              (this.contentRect_ = e),
              e.width !== this.broadcastWidth ||
                e.height !== this.broadcastHeight
            );
          }),
          (e.prototype.broadcastRect = function () {
            var e = this.contentRect_;
            return (
              (this.broadcastWidth = e.width),
              (this.broadcastHeight = e.height),
              e
            );
          }),
          e
        );
      })(),
      or = function (e, t) {
        var n,
          i,
          r,
          o,
          s,
          a,
          l,
          c =
            ((i = (n = t).x),
            (r = n.y),
            (o = n.width),
            (s = n.height),
            (a =
              "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
            (l = Object.create(a.prototype)),
            Gi(l, {
              x: i,
              y: r,
              width: o,
              height: s,
              top: r,
              right: i + o,
              bottom: s + r,
              left: i,
            }),
            l);
        Gi(this, { target: e, contentRect: c });
      },
      sr = (function () {
        function e(e, t, n) {
          if (
            ((this.activeObservations_ = []),
            (this.observations_ = new qi()),
            "function" != typeof e)
          )
            throw new TypeError(
              "The callback provided as parameter 1 is not a function."
            );
          (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
        }
        return (
          (e.prototype.observe = function (e) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e instanceof Ki(e).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t = this.observations_;
              t.has(e) ||
                (t.set(e, new rr(e)),
                this.controller_.addObserver(this),
                this.controller_.refresh());
            }
          }),
          (e.prototype.unobserve = function (e) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e instanceof Ki(e).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t = this.observations_;
              t.has(e) &&
                (t.delete(e), t.size || this.controller_.removeObserver(this));
            }
          }),
          (e.prototype.disconnect = function () {
            this.clearActive(),
              this.observations_.clear(),
              this.controller_.removeObserver(this);
          }),
          (e.prototype.gatherActive = function () {
            var e = this;
            this.clearActive(),
              this.observations_.forEach(function (t) {
                t.isActive() && e.activeObservations_.push(t);
              });
          }),
          (e.prototype.broadcastActive = function () {
            if (this.hasActive()) {
              var e = this.callbackCtx_,
                t = this.activeObservations_.map(function (e) {
                  return new or(e.target, e.broadcastRect());
                });
              this.callback_.call(e, t, e), this.clearActive();
            }
          }),
          (e.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
          }),
          (e.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
          }),
          e
        );
      })(),
      ar = "undefined" != typeof WeakMap ? new WeakMap() : new qi(),
      lr = function e(t) {
        if (!(this instanceof e))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var n = Qi.getInstance(),
          i = new sr(t, n, this);
        ar.set(this, i);
      };
    ["observe", "unobserve", "disconnect"].forEach(function (e) {
      lr.prototype[e] = function () {
        var t;
        return (t = ar.get(this))[e].apply(t, arguments);
      };
    });
    var cr = void 0 !== Bi.ResizeObserver ? Bi.ResizeObserver : lr,
      ur = null,
      hr = null;
    function pr() {
      if (null === ur) {
        if ("undefined" == typeof document) return (ur = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var n = t.getBoundingClientRect().right;
        e.removeChild(t), (ur = n);
      }
      return ur;
    }
    Xe &&
      window.addEventListener("resize", function () {
        hr !== window.devicePixelRatio &&
          ((hr = window.devicePixelRatio), (ur = null));
      });
    var fr = function (e) {
        return function (t, n, i, r) {
          Oe(n);
          var o = Ce(t),
            s = m(o),
            a = se(o.length),
            l = e ? a - 1 : 0,
            c = e ? -1 : 1;
          if (i < 2)
            for (;;) {
              if (l in s) {
                (r = s[l]), (l += c);
                break;
              }
              if (((l += c), e ? l < 0 : a <= l))
                throw TypeError("Reduce of empty array with no initial value");
            }
          for (; e ? l >= 0 : a > l; l += c) l in s && (r = n(r, s[l], l, o));
          return r;
        };
      },
      dr = [fr(!1), fr(!0)][0];
    ke(
      { target: "Array", proto: !0, forced: We("reduce") },
      {
        reduce: function (e) {
          return dr(
            this,
            e,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
    var yr = j.f,
      gr = Function.prototype,
      mr = gr.toString,
      vr = /^\s*function ([^ (]*)/;
    !c ||
      "name" in gr ||
      yr(gr, "name", {
        configurable: !0,
        get: function () {
          try {
            return mr.call(this).match(vr)[1];
          } catch (e) {
            return "";
          }
        },
      });
    var xr,
      br,
      wr = RegExp.prototype.exec,
      _r = String.prototype.replace,
      Er = wr,
      Ar =
        ((xr = /a/),
        (br = /b*/g),
        wr.call(xr, "a"),
        wr.call(br, "a"),
        0 !== xr.lastIndex || 0 !== br.lastIndex),
      Tr = void 0 !== /()??/.exec("")[1];
    (Ar || Tr) &&
      (Er = function (e) {
        var t,
          n,
          i,
          r,
          o = this;
        return (
          Tr &&
            (n = new RegExp(
              "^" + o.source + "$(?!\\s)",
              function () {
                var e = M(this),
                  t = "";
                return (
                  e.global && (t += "g"),
                  e.ignoreCase && (t += "i"),
                  e.multiline && (t += "m"),
                  e.dotAll && (t += "s"),
                  e.unicode && (t += "u"),
                  e.sticky && (t += "y"),
                  t
                );
              }.call(o)
            )),
          Ar && (t = o.lastIndex),
          (i = wr.call(o, e)),
          Ar && i && (o.lastIndex = o.global ? i.index + i[0].length : t),
          Tr &&
            i &&
            i.length > 1 &&
            _r.call(i[0], n, function () {
              for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (i[r] = void 0);
            }),
          i
        );
      });
    var kr = Er;
    ke({ target: "RegExp", proto: !0, forced: /./.exec !== kr }, { exec: kr });
    var Or = De("species"),
      Sr = !l(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      Cr = !l(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      }),
      Mr = function (e, t, n, i) {
        var r = De(e),
          o = !l(function () {
            var t = {};
            return (
              (t[r] = function () {
                return 7;
              }),
              7 != ""[e](t)
            );
          }),
          s =
            o &&
            !l(function () {
              var t = !1,
                n = /a/;
              return (
                (n.exec = function () {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((n.constructor = {}),
                  (n.constructor[Or] = function () {
                    return n;
                  })),
                n[r](""),
                !t
              );
            });
        if (!o || !s || ("replace" === e && !Sr) || ("split" === e && !Cr)) {
          var a = /./[r],
            c = n(r, ""[e], function (e, t, n, i, r) {
              return t.exec === kr
                ? o && !r
                  ? { done: !0, value: a.call(t, n, i) }
                  : { done: !0, value: e.call(n, t, i) }
                : { done: !1 };
            }),
            u = c[0],
            h = c[1];
          J(String.prototype, e, u),
            J(
              RegExp.prototype,
              r,
              2 == t
                ? function (e, t) {
                    return h.call(e, this, t);
                  }
                : function (e) {
                    return h.call(e, this);
                  }
            ),
            i && N(RegExp.prototype[r], "sham", !0);
        }
      },
      Lr = Qt.charAt,
      jr = function (e, t, n) {
        return t + (n ? Lr(e, t).length : 1);
      },
      Nr = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
          var i = n.call(e, t);
          if ("object" != typeof i)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return i;
        }
        if ("RegExp" !== y(e))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return kr.call(e, t);
      };
    Mr("match", 1, function (e, t, n) {
      return [
        function (t) {
          var n = v(this),
            i = null == t ? void 0 : t[e];
          return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
        },
        function (e) {
          var i = n(t, e, this);
          if (i.done) return i.value;
          var r = M(e),
            o = String(this);
          if (!r.global) return Nr(r, o);
          var s = r.unicode;
          r.lastIndex = 0;
          for (var a, l = [], c = 0; null !== (a = Nr(r, o)); ) {
            var u = String(a[0]);
            (l[c] = u),
              "" === u && (r.lastIndex = jr(o, se(r.lastIndex), s)),
              c++;
          }
          return 0 === c ? null : l;
        },
      ];
    });
    var Dr = Math.max,
      zr = Math.min,
      Hr = Math.floor,
      Pr = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      Ir = /\$([$&'`]|\d\d?)/g;
    Mr("replace", 2, function (e, t, n) {
      return [
        function (n, i) {
          var r = v(this),
            o = null == n ? void 0 : n[e];
          return void 0 !== o ? o.call(n, r, i) : t.call(String(r), n, i);
        },
        function (e, r) {
          var o = n(t, e, this, r);
          if (o.done) return o.value;
          var s = M(e),
            a = String(this),
            l = "function" == typeof r;
          l || (r = String(r));
          var c = s.global;
          if (c) {
            var u = s.unicode;
            s.lastIndex = 0;
          }
          for (var h = []; ; ) {
            var p = Nr(s, a);
            if (null === p) break;
            if ((h.push(p), !c)) break;
            "" === String(p[0]) && (s.lastIndex = jr(a, se(s.lastIndex), u));
          }
          for (var f, d = "", y = 0, g = 0; g < h.length; g++) {
            p = h[g];
            for (
              var m = String(p[0]),
                v = Dr(zr(re(p.index), a.length), 0),
                x = [],
                b = 1;
              b < p.length;
              b++
            )
              x.push(void 0 === (f = p[b]) ? f : String(f));
            var w = p.groups;
            if (l) {
              var _ = [m].concat(x, v, a);
              void 0 !== w && _.push(w);
              var E = String(r.apply(void 0, _));
            } else E = i(m, a, v, x, w, r);
            v >= y && ((d += a.slice(y, v) + E), (y = v + m.length));
          }
          return d + a.slice(y);
        },
      ];
      function i(e, n, i, r, o, s) {
        var a = i + e.length,
          l = r.length,
          c = Ir;
        return (
          void 0 !== o && ((o = Ce(o)), (c = Pr)),
          t.call(s, c, function (t, s) {
            var c;
            switch (s.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return n.slice(0, i);
              case "'":
                return n.slice(a);
              case "<":
                c = o[s.slice(1, -1)];
                break;
              default:
                var u = +s;
                if (0 === u) return t;
                if (u > l) {
                  var h = Hr(u / 10);
                  return 0 === h
                    ? t
                    : h <= l
                    ? void 0 === r[h - 1]
                      ? s.charAt(1)
                      : r[h - 1] + s.charAt(1)
                    : t;
                }
                c = r[u - 1];
            }
            return void 0 === c ? "" : c;
          })
        );
      }
    });
    var Rr = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var n = t.name.match(/data-simplebar-(.+)/);
          if (n) {
            var i = n[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[i] = !0;
                break;
              case "false":
                e[i] = !1;
                break;
              case void 0:
                e[i] = !0;
                break;
              default:
                e[i] = t.value;
            }
          }
          return e;
        },
        {}
      );
    };
    function Wr(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function qr(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    var Vr = (function () {
      function e(t, n) {
        var i = this;
        (this.onScroll = function () {
          var e = Wr(i.el);
          i.scrollXTicking ||
            (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
            i.scrollYTicking ||
              (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
        }),
          (this.scrollX = function () {
            i.axis.x.isOverflowing &&
              (i.showScrollbar("x"), i.positionScrollbar("x")),
              (i.scrollXTicking = !1);
          }),
          (this.scrollY = function () {
            i.axis.y.isOverflowing &&
              (i.showScrollbar("y"), i.positionScrollbar("y")),
              (i.scrollYTicking = !1);
          }),
          (this.onMouseEnter = function () {
            i.showScrollbar("x"), i.showScrollbar("y");
          }),
          (this.onMouseMove = function (e) {
            (i.mouseX = e.clientX),
              (i.mouseY = e.clientY),
              (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                i.onMouseMoveForAxis("x"),
              (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                i.onMouseMoveForAxis("y");
          }),
          (this.onMouseLeave = function () {
            i.onMouseMove.cancel(),
              (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                i.onMouseLeaveForAxis("x"),
              (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                i.onMouseLeaveForAxis("y"),
              (i.mouseX = -1),
              (i.mouseY = -1);
          }),
          (this.onWindowResize = function () {
            (i.scrollbarWidth = i.getScrollbarWidth()), i.hideNativeScrollbar();
          }),
          (this.hideScrollbars = function () {
            (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
              (i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect()),
              i.isWithinBounds(i.axis.y.track.rect) ||
                (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
                (i.axis.y.isVisible = !1)),
              i.isWithinBounds(i.axis.x.track.rect) ||
                (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
                (i.axis.x.isVisible = !1));
          }),
          (this.onPointerEvent = function (e) {
            var t, n;
            (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
              (i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect()),
              (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                (t = i.isWithinBounds(i.axis.x.track.rect)),
              (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                (n = i.isWithinBounds(i.axis.y.track.rect)),
              (t || n) &&
                (e.preventDefault(),
                e.stopPropagation(),
                "mousedown" === e.type &&
                  (t &&
                    ((i.axis.x.scrollbar.rect =
                      i.axis.x.scrollbar.el.getBoundingClientRect()),
                    i.isWithinBounds(i.axis.x.scrollbar.rect)
                      ? i.onDragStart(e, "x")
                      : i.onTrackClick(e, "x")),
                  n &&
                    ((i.axis.y.scrollbar.rect =
                      i.axis.y.scrollbar.el.getBoundingClientRect()),
                    i.isWithinBounds(i.axis.y.scrollbar.rect)
                      ? i.onDragStart(e, "y")
                      : i.onTrackClick(e, "y"))));
          }),
          (this.drag = function (t) {
            var n = i.axis[i.draggedAxis].track,
              r = n.rect[i.axis[i.draggedAxis].sizeAttr],
              o = i.axis[i.draggedAxis].scrollbar,
              s = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
              a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
            t.preventDefault(), t.stopPropagation();
            var l =
              ((("y" === i.draggedAxis ? t.pageY : t.pageX) -
                n.rect[i.axis[i.draggedAxis].offsetAttr] -
                i.axis[i.draggedAxis].dragOffset) /
                (r - o.size)) *
              (s - a);
            "x" === i.draggedAxis &&
              ((l =
                i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                  ? l - (r + o.size)
                  : l),
              (l =
                i.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -l : l)),
              (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = l);
          }),
          (this.onEndDrag = function (e) {
            var t = qr(i.el),
              n = Wr(i.el);
            e.preventDefault(),
              e.stopPropagation(),
              i.el.classList.remove(i.classNames.dragging),
              t.removeEventListener("mousemove", i.drag, !0),
              t.removeEventListener("mouseup", i.onEndDrag, !0),
              (i.removePreventClickId = n.setTimeout(function () {
                t.removeEventListener("click", i.preventClick, !0),
                  t.removeEventListener("dblclick", i.preventClick, !0),
                  (i.removePreventClickId = null);
              }));
          }),
          (this.preventClick = function (e) {
            e.preventDefault(), e.stopPropagation();
          }),
          (this.el = t),
          (this.minScrollbarWidth = 20),
          (this.options = Object.assign({}, e.defaultOptions, {}, n)),
          (this.classNames = Object.assign(
            {},
            e.defaultOptions.classNames,
            {},
            this.options.classNames
          )),
          (this.axis = {
            x: {
              scrollOffsetAttr: "scrollLeft",
              sizeAttr: "width",
              scrollSizeAttr: "scrollWidth",
              offsetSizeAttr: "offsetWidth",
              offsetAttr: "left",
              overflowAttr: "overflowX",
              dragOffset: 0,
              isOverflowing: !0,
              isVisible: !1,
              forceVisible: !1,
              track: {},
              scrollbar: {},
            },
            y: {
              scrollOffsetAttr: "scrollTop",
              sizeAttr: "height",
              scrollSizeAttr: "scrollHeight",
              offsetSizeAttr: "offsetHeight",
              offsetAttr: "top",
              overflowAttr: "overflowY",
              dragOffset: 0,
              isOverflowing: !0,
              isVisible: !1,
              forceVisible: !1,
              track: {},
              scrollbar: {},
            },
          }),
          (this.removePreventClickId = null),
          e.instances.has(this.el) ||
            ((this.recalculate = Yn(this.recalculate.bind(this), 64)),
            (this.onMouseMove = Yn(this.onMouseMove.bind(this), 64)),
            (this.hideScrollbars = hi(
              this.hideScrollbars.bind(this),
              this.options.timeout
            )),
            (this.onWindowResize = hi(this.onWindowResize.bind(this), 64, {
              leading: !0,
            })),
            (e.getRtlHelpers = Wi(e.getRtlHelpers)),
            this.init());
      }
      (e.getRtlHelpers = function () {
        var t = document.createElement("div");
        t.innerHTML =
          '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
        var n = t.firstElementChild;
        document.body.appendChild(n);
        var i = n.firstElementChild;
        n.scrollLeft = 0;
        var r = e.getOffset(n),
          o = e.getOffset(i);
        n.scrollLeft = 999;
        var s = e.getOffset(i);
        return {
          isRtlScrollingInverted: r.left !== o.left && o.left - s.left != 0,
          isRtlScrollbarInverted: r.left !== o.left,
        };
      }),
        (e.getOffset = function (e) {
          var t = e.getBoundingClientRect(),
            n = qr(e),
            i = Wr(e);
          return {
            top: t.top + (i.pageYOffset || n.documentElement.scrollTop),
            left: t.left + (i.pageXOffset || n.documentElement.scrollLeft),
          };
        });
      var t = e.prototype;
      return (
        (t.init = function () {
          e.instances.set(this.el, this),
            Xe &&
              (this.initDOM(),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
        }),
        (t.initDOM = function () {
          var e = this;
          if (
            Array.prototype.filter.call(this.el.children, function (t) {
              return t.classList.contains(e.classNames.wrapper);
            }).length
          )
            (this.wrapperEl = this.el.querySelector(
              "." + this.classNames.wrapper
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector("." + this.classNames.contentWrapper)),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector("." + this.classNames.contentEl)),
              (this.offsetEl = this.el.querySelector(
                "." + this.classNames.offset
              )),
              (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                "." + this.classNames.placeholder
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                "." + this.classNames.heightAutoObserverWrapperEl
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                "." + this.classNames.heightAutoObserverEl
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                "." + this.classNames.track + "." + this.classNames.horizontal
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                "." + this.classNames.track + "." + this.classNames.vertical
              ));
          else {
            for (
              this.wrapperEl = document.createElement("div"),
                this.contentWrapperEl = document.createElement("div"),
                this.offsetEl = document.createElement("div"),
                this.maskEl = document.createElement("div"),
                this.contentEl = document.createElement("div"),
                this.placeholderEl = document.createElement("div"),
                this.heightAutoObserverWrapperEl =
                  document.createElement("div"),
                this.heightAutoObserverEl = document.createElement("div"),
                this.wrapperEl.classList.add(this.classNames.wrapper),
                this.contentWrapperEl.classList.add(
                  this.classNames.contentWrapper
                ),
                this.offsetEl.classList.add(this.classNames.offset),
                this.maskEl.classList.add(this.classNames.mask),
                this.contentEl.classList.add(this.classNames.contentEl),
                this.placeholderEl.classList.add(this.classNames.placeholder),
                this.heightAutoObserverWrapperEl.classList.add(
                  this.classNames.heightAutoObserverWrapperEl
                ),
                this.heightAutoObserverEl.classList.add(
                  this.classNames.heightAutoObserverEl
                );
              this.el.firstChild;

            )
              this.contentEl.appendChild(this.el.firstChild);
            this.contentWrapperEl.appendChild(this.contentEl),
              this.offsetEl.appendChild(this.contentWrapperEl),
              this.maskEl.appendChild(this.offsetEl),
              this.heightAutoObserverWrapperEl.appendChild(
                this.heightAutoObserverEl
              ),
              this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
              this.wrapperEl.appendChild(this.maskEl),
              this.wrapperEl.appendChild(this.placeholderEl),
              this.el.appendChild(this.wrapperEl);
          }
          if (!this.axis.x.track.el || !this.axis.y.track.el) {
            var t = document.createElement("div"),
              n = document.createElement("div");
            t.classList.add(this.classNames.track),
              n.classList.add(this.classNames.scrollbar),
              t.appendChild(n),
              (this.axis.x.track.el = t.cloneNode(!0)),
              this.axis.x.track.el.classList.add(this.classNames.horizontal),
              (this.axis.y.track.el = t.cloneNode(!0)),
              this.axis.y.track.el.classList.add(this.classNames.vertical),
              this.el.appendChild(this.axis.x.track.el),
              this.el.appendChild(this.axis.y.track.el);
          }
          (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
            "." + this.classNames.scrollbar
          )),
            (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
            this.options.autoHide ||
              (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
              this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
            this.el.setAttribute("data-simplebar", "init");
        }),
        (t.initListeners = function () {
          var e = this,
            t = Wr(this.el);
          this.options.autoHide &&
            this.el.addEventListener("mouseenter", this.onMouseEnter),
            ["mousedown", "click", "dblclick"].forEach(function (t) {
              e.el.addEventListener(t, e.onPointerEvent, !0);
            }),
            ["touchstart", "touchend", "touchmove"].forEach(function (t) {
              e.el.addEventListener(t, e.onPointerEvent, {
                capture: !0,
                passive: !0,
              });
            }),
            this.el.addEventListener("mousemove", this.onMouseMove),
            this.el.addEventListener("mouseleave", this.onMouseLeave),
            this.contentWrapperEl.addEventListener("scroll", this.onScroll),
            t.addEventListener("resize", this.onWindowResize);
          var n = !1,
            i = t.ResizeObserver || cr;
          (this.resizeObserver = new i(function () {
            n && e.recalculate();
          })),
            this.resizeObserver.observe(this.el),
            this.resizeObserver.observe(this.contentEl),
            t.requestAnimationFrame(function () {
              n = !0;
            }),
            (this.mutationObserver = new t.MutationObserver(this.recalculate)),
            this.mutationObserver.observe(this.contentEl, {
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }),
        (t.recalculate = function () {
          var e = Wr(this.el);
          (this.elStyles = e.getComputedStyle(this.el)),
            (this.isRtl = "rtl" === this.elStyles.direction);
          var t = this.heightAutoObserverEl.offsetHeight <= 1,
            n = this.heightAutoObserverEl.offsetWidth <= 1,
            i = this.contentEl.offsetWidth,
            r = this.contentWrapperEl.offsetWidth,
            o = this.elStyles.overflowX,
            s = this.elStyles.overflowY;
          (this.contentEl.style.padding =
            this.elStyles.paddingTop +
            " " +
            this.elStyles.paddingRight +
            " " +
            this.elStyles.paddingBottom +
            " " +
            this.elStyles.paddingLeft),
            (this.wrapperEl.style.margin =
              "-" +
              this.elStyles.paddingTop +
              " -" +
              this.elStyles.paddingRight +
              " -" +
              this.elStyles.paddingBottom +
              " -" +
              this.elStyles.paddingLeft);
          var a = this.contentEl.scrollHeight,
            l = this.contentEl.scrollWidth;
          (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
            (this.placeholderEl.style.width = n ? i + "px" : "auto"),
            (this.placeholderEl.style.height = a + "px");
          var c = this.contentWrapperEl.offsetHeight;
          (this.axis.x.isOverflowing = l > i),
            (this.axis.y.isOverflowing = a > c),
            (this.axis.x.isOverflowing =
              "hidden" !== o && this.axis.x.isOverflowing),
            (this.axis.y.isOverflowing =
              "hidden" !== s && this.axis.y.isOverflowing),
            (this.axis.x.forceVisible =
              "x" === this.options.forceVisible ||
              !0 === this.options.forceVisible),
            (this.axis.y.forceVisible =
              "y" === this.options.forceVisible ||
              !0 === this.options.forceVisible),
            this.hideNativeScrollbar();
          var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
            h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
          (this.axis.x.isOverflowing = this.axis.x.isOverflowing && l > r - h),
            (this.axis.y.isOverflowing =
              this.axis.y.isOverflowing && a > c - u),
            (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
            (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
            (this.axis.x.scrollbar.el.style.width =
              this.axis.x.scrollbar.size + "px"),
            (this.axis.y.scrollbar.el.style.height =
              this.axis.y.scrollbar.size + "px"),
            this.positionScrollbar("x"),
            this.positionScrollbar("y"),
            this.toggleTrackVisibility("x"),
            this.toggleTrackVisibility("y");
        }),
        (t.getScrollbarSize = function (e) {
          if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
            return 0;
          var t,
            n = this.contentEl[this.axis[e].scrollSizeAttr],
            i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
            r = i / n;
          return (
            (t = Math.max(~~(r * i), this.options.scrollbarMinSize)),
            this.options.scrollbarMaxSize &&
              (t = Math.min(t, this.options.scrollbarMaxSize)),
            t
          );
        }),
        (t.positionScrollbar = function (t) {
          if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
            var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
              i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
              r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
              o = this.axis[t].scrollbar,
              s = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
              a =
                (s =
                  "x" === t &&
                  this.isRtl &&
                  e.getRtlHelpers().isRtlScrollingInverted
                    ? -s
                    : s) /
                (n - r),
              l = ~~((i - o.size) * a);
            (l =
              "x" === t &&
              this.isRtl &&
              e.getRtlHelpers().isRtlScrollbarInverted
                ? l + (i - o.size)
                : l),
              (o.el.style.transform =
                "x" === t
                  ? "translate3d(" + l + "px, 0, 0)"
                  : "translate3d(0, " + l + "px, 0)");
          }
        }),
        (t.toggleTrackVisibility = function (e) {
          void 0 === e && (e = "y");
          var t = this.axis[e].track.el,
            n = this.axis[e].scrollbar.el;
          this.axis[e].isOverflowing || this.axis[e].forceVisible
            ? ((t.style.visibility = "visible"),
              (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                "scroll"))
            : ((t.style.visibility = "hidden"),
              (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                "hidden")),
            this.axis[e].isOverflowing
              ? (n.style.display = "block")
              : (n.style.display = "none");
        }),
        (t.hideNativeScrollbar = function () {
          (this.offsetEl.style[this.isRtl ? "left" : "right"] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
              ? "-" + this.scrollbarWidth + "px"
              : 0),
            (this.offsetEl.style.bottom =
              this.axis.x.isOverflowing || this.axis.x.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0);
        }),
        (t.onMouseMoveForAxis = function (e) {
          void 0 === e && (e = "y"),
            (this.axis[e].track.rect =
              this.axis[e].track.el.getBoundingClientRect()),
            (this.axis[e].scrollbar.rect =
              this.axis[e].scrollbar.el.getBoundingClientRect()),
            this.isWithinBounds(this.axis[e].scrollbar.rect)
              ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
              : this.axis[e].scrollbar.el.classList.remove(
                  this.classNames.hover
                ),
            this.isWithinBounds(this.axis[e].track.rect)
              ? (this.showScrollbar(e),
                this.axis[e].track.el.classList.add(this.classNames.hover))
              : this.axis[e].track.el.classList.remove(this.classNames.hover);
        }),
        (t.onMouseLeaveForAxis = function (e) {
          void 0 === e && (e = "y"),
            this.axis[e].track.el.classList.remove(this.classNames.hover),
            this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
        }),
        (t.showScrollbar = function (e) {
          void 0 === e && (e = "y");
          var t = this.axis[e].scrollbar.el;
          this.axis[e].isVisible ||
            (t.classList.add(this.classNames.visible),
            (this.axis[e].isVisible = !0)),
            this.options.autoHide && this.hideScrollbars();
        }),
        (t.onDragStart = function (e, t) {
          void 0 === t && (t = "y");
          var n = qr(this.el),
            i = Wr(this.el),
            r = this.axis[t].scrollbar,
            o = "y" === t ? e.pageY : e.pageX;
          (this.axis[t].dragOffset = o - r.rect[this.axis[t].offsetAttr]),
            (this.draggedAxis = t),
            this.el.classList.add(this.classNames.dragging),
            n.addEventListener("mousemove", this.drag, !0),
            n.addEventListener("mouseup", this.onEndDrag, !0),
            null === this.removePreventClickId
              ? (n.addEventListener("click", this.preventClick, !0),
                n.addEventListener("dblclick", this.preventClick, !0))
              : (i.clearTimeout(this.removePreventClickId),
                (this.removePreventClickId = null));
        }),
        (t.onTrackClick = function (e, t) {
          var n = this;
          if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
            var i = Wr(this.el);
            this.axis[t].scrollbar.rect =
              this.axis[t].scrollbar.el.getBoundingClientRect();
            var r = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
              o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
              s = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
              a = ("y" === t ? this.mouseY - r : this.mouseX - r) < 0 ? -1 : 1,
              l = -1 === a ? s - o : s + o;
            !(function e() {
              var r, o;
              -1 === a
                ? s > l &&
                  ((s -= n.options.clickOnTrackSpeed),
                  n.contentWrapperEl.scrollTo(
                    (((r = {})[n.axis[t].offsetAttr] = s), r)
                  ),
                  i.requestAnimationFrame(e))
                : s < l &&
                  ((s += n.options.clickOnTrackSpeed),
                  n.contentWrapperEl.scrollTo(
                    (((o = {})[n.axis[t].offsetAttr] = s), o)
                  ),
                  i.requestAnimationFrame(e));
            })();
          }
        }),
        (t.getContentElement = function () {
          return this.contentEl;
        }),
        (t.getScrollElement = function () {
          return this.contentWrapperEl;
        }),
        (t.getScrollbarWidth = function () {
          try {
            return "none" ===
              getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                .display ||
              "scrollbarWidth" in document.documentElement.style ||
              "-ms-overflow-style" in document.documentElement.style
              ? 0
              : pr();
          } catch (e) {
            return pr();
          }
        }),
        (t.removeListeners = function () {
          var e = this,
            t = Wr(this.el);
          this.options.autoHide &&
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
            ["mousedown", "click", "dblclick"].forEach(function (t) {
              e.el.removeEventListener(t, e.onPointerEvent, !0);
            }),
            ["touchstart", "touchend", "touchmove"].forEach(function (t) {
              e.el.removeEventListener(t, e.onPointerEvent, {
                capture: !0,
                passive: !0,
              });
            }),
            this.el.removeEventListener("mousemove", this.onMouseMove),
            this.el.removeEventListener("mouseleave", this.onMouseLeave),
            this.contentWrapperEl &&
              this.contentWrapperEl.removeEventListener(
                "scroll",
                this.onScroll
              ),
            t.removeEventListener("resize", this.onWindowResize),
            this.mutationObserver && this.mutationObserver.disconnect(),
            this.resizeObserver && this.resizeObserver.disconnect(),
            this.recalculate.cancel(),
            this.onMouseMove.cancel(),
            this.hideScrollbars.cancel(),
            this.onWindowResize.cancel();
        }),
        (t.unMount = function () {
          this.removeListeners(), e.instances.delete(this.el);
        }),
        (t.isWithinBounds = function (e) {
          return (
            this.mouseX >= e.left &&
            this.mouseX <= e.left + e.width &&
            this.mouseY >= e.top &&
            this.mouseY <= e.top + e.height
          );
        }),
        (t.findChild = function (e, t) {
          var n =
            e.matches ||
            e.webkitMatchesSelector ||
            e.mozMatchesSelector ||
            e.msMatchesSelector;
          return Array.prototype.filter.call(e.children, function (e) {
            return n.call(e, t);
          })[0];
        }),
        e
      );
    })();
    return (
      (Vr.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
      (Vr.instances = new WeakMap()),
      (Vr.initDOMLoadedElements = function () {
        document.removeEventListener(
          "DOMContentLoaded",
          this.initDOMLoadedElements
        ),
          window.removeEventListener("load", this.initDOMLoadedElements),
          Array.prototype.forEach.call(
            document.querySelectorAll("[data-simplebar]"),
            function (e) {
              "init" === e.getAttribute("data-simplebar") ||
                Vr.instances.has(e) ||
                new Vr(e, Rr(e.attributes));
            }
          );
      }),
      (Vr.removeObserver = function () {
        this.globalObserver.disconnect();
      }),
      (Vr.initHtmlApi = function () {
        (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
          "undefined" != typeof MutationObserver &&
            ((this.globalObserver = new MutationObserver(Vr.handleMutations)),
            this.globalObserver.observe(document, {
              childList: !0,
              subtree: !0,
            })),
          "complete" === document.readyState ||
          ("loading" !== document.readyState &&
            !document.documentElement.doScroll)
            ? window.setTimeout(this.initDOMLoadedElements)
            : (document.addEventListener(
                "DOMContentLoaded",
                this.initDOMLoadedElements
              ),
              window.addEventListener("load", this.initDOMLoadedElements));
      }),
      (Vr.handleMutations = function (e) {
        e.forEach(function (e) {
          Array.prototype.forEach.call(e.addedNodes, function (e) {
            1 === e.nodeType &&
              (e.hasAttribute("data-simplebar")
                ? !Vr.instances.has(e) && new Vr(e, Rr(e.attributes))
                : Array.prototype.forEach.call(
                    e.querySelectorAll("[data-simplebar]"),
                    function (e) {
                      "init" === e.getAttribute("data-simplebar") ||
                        Vr.instances.has(e) ||
                        new Vr(e, Rr(e.attributes));
                    }
                  ));
          }),
            Array.prototype.forEach.call(e.removedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute('[data-simplebar="init"]')
                  ? Vr.instances.has(e) && Vr.instances.get(e).unMount()
                  : Array.prototype.forEach.call(
                      e.querySelectorAll('[data-simplebar="init"]'),
                      function (e) {
                        Vr.instances.has(e) && Vr.instances.get(e).unMount();
                      }
                    ));
            });
        });
      }),
      (Vr.getOptions = Rr),
      Xe && Vr.initHtmlApi(),
      Vr
    );
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define([], function () {
          return (e.Waves = t.call(e)), e.Waves;
        })
      : "object" == typeof exports
      ? (module.exports = t.call(e))
      : (e.Waves = t.call(e));
  })("object" == typeof global ? global : this, function () {
    "use strict";
    function e(e) {
      var t = typeof e;
      return "function" === t || ("object" === t && !!e);
    }
    function t(t) {
      var n = l.call(t);
      return "[object String]" === n
        ? a(t)
        : e(t) &&
          /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) &&
          t.hasOwnProperty("length")
        ? t
        : (function (t) {
            return e(t) && t.nodeType > 0;
          })(t)
        ? [t]
        : [];
    }
    function n(e) {
      var t,
        n,
        i = { top: 0, left: 0 },
        r = e && e.ownerDocument;
      return (
        (t = r.documentElement),
        void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()),
        (n = (function (e) {
          return (function (e) {
            return null !== e && e === e.window;
          })(e)
            ? e
            : 9 === e.nodeType && e.defaultView;
        })(r)),
        {
          top: i.top + n.pageYOffset - t.clientTop,
          left: i.left + n.pageXOffset - t.clientLeft,
        }
      );
    }
    function i(e) {
      var t = "";
      for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
      return t;
    }
    function r(e, t, n) {
      if (n) {
        n.classList.remove("waves-rippling");
        var r = n.getAttribute("data-x"),
          o = n.getAttribute("data-y"),
          s = n.getAttribute("data-scale"),
          a = n.getAttribute("data-translate"),
          l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
        l < 0 && (l = 0), "mousemove" === e.type && (l = 150);
        var c = "mousemove" === e.type ? 2500 : u.duration;
        setTimeout(function () {
          var e = {
            top: o + "px",
            left: r + "px",
            opacity: "0",
            "-webkit-transition-duration": c + "ms",
            "-moz-transition-duration": c + "ms",
            "-o-transition-duration": c + "ms",
            "transition-duration": c + "ms",
            "-webkit-transform": s + " " + a,
            "-moz-transform": s + " " + a,
            "-ms-transform": s + " " + a,
            "-o-transform": s + " " + a,
            transform: s + " " + a,
          };
          n.setAttribute("style", i(e)),
            setTimeout(function () {
              try {
                t.removeChild(n);
              } catch (e) {
                return !1;
              }
            }, c);
        }, l);
      }
    }
    function o(e) {
      var t = (function (e) {
        if (!1 === p.allowEvent(e)) return null;
        for (var t = null, n = e.target || e.srcElement; n.parentElement; ) {
          if (
            !(n instanceof SVGElement) &&
            n.classList.contains("waves-effect")
          ) {
            t = n;
            break;
          }
          n = n.parentElement;
        }
        return t;
      })(e);
      if (null !== t) {
        if (
          t.disabled ||
          t.getAttribute("disabled") ||
          t.classList.contains("disabled")
        )
          return;
        if ((p.registerEvent(e), "touchstart" === e.type && u.delay)) {
          var n = !1,
            i = setTimeout(function () {
              (i = null), u.show(e, t);
            }, u.delay),
            r = function (r) {
              i && (clearTimeout(i), (i = null), u.show(e, t)),
                n || ((n = !0), u.hide(r, t)),
                s();
            },
            o = function (e) {
              i && (clearTimeout(i), (i = null)), r(e), s();
            };
          t.addEventListener("touchmove", o, !1),
            t.addEventListener("touchend", r, !1),
            t.addEventListener("touchcancel", r, !1);
          var s = function () {
            t.removeEventListener("touchmove", o),
              t.removeEventListener("touchend", r),
              t.removeEventListener("touchcancel", r);
          };
        } else
          u.show(e, t),
            c &&
              (t.addEventListener("touchend", u.hide, !1),
              t.addEventListener("touchcancel", u.hide, !1)),
            t.addEventListener("mouseup", u.hide, !1),
            t.addEventListener("mouseleave", u.hide, !1);
      }
    }
    var s = s || {},
      a = document.querySelectorAll.bind(document),
      l = Object.prototype.toString,
      c = "ontouchstart" in window,
      u = {
        duration: 750,
        delay: 200,
        show: function (e, t, r) {
          if (2 === e.button) return !1;
          t = t || this;
          var o = document.createElement("div");
          (o.className = "waves-ripple waves-rippling"), t.appendChild(o);
          var s = n(t),
            a = 0,
            l = 0;
          "touches" in e && e.touches.length
            ? ((a = e.touches[0].pageY - s.top),
              (l = e.touches[0].pageX - s.left))
            : ((a = e.pageY - s.top), (l = e.pageX - s.left)),
            (l = l >= 0 ? l : 0),
            (a = a >= 0 ? a : 0);
          var c = "scale(" + (t.clientWidth / 100) * 3 + ")",
            h = "translate(0,0)";
          r && (h = "translate(" + r.x + "px, " + r.y + "px)"),
            o.setAttribute("data-hold", Date.now()),
            o.setAttribute("data-x", l),
            o.setAttribute("data-y", a),
            o.setAttribute("data-scale", c),
            o.setAttribute("data-translate", h);
          var p = { top: a + "px", left: l + "px" };
          o.classList.add("waves-notransition"),
            o.setAttribute("style", i(p)),
            o.classList.remove("waves-notransition"),
            (p["-webkit-transform"] = c + " " + h),
            (p["-moz-transform"] = c + " " + h),
            (p["-ms-transform"] = c + " " + h),
            (p["-o-transform"] = c + " " + h),
            (p.transform = c + " " + h),
            (p.opacity = "1");
          var f = "mousemove" === e.type ? 2500 : u.duration;
          (p["-webkit-transition-duration"] = f + "ms"),
            (p["-moz-transition-duration"] = f + "ms"),
            (p["-o-transition-duration"] = f + "ms"),
            (p["transition-duration"] = f + "ms"),
            o.setAttribute("style", i(p));
        },
        hide: function (e, t) {
          for (
            var n = (t = t || this).getElementsByClassName("waves-rippling"),
              i = 0,
              o = n.length;
            i < o;
            i++
          )
            r(e, t, n[i]);
          c &&
            (t.removeEventListener("touchend", u.hide),
            t.removeEventListener("touchcancel", u.hide)),
            t.removeEventListener("mouseup", u.hide),
            t.removeEventListener("mouseleave", u.hide);
        },
      },
      h = {
        input: function (e) {
          var t = e.parentNode;
          if (
            "i" !== t.tagName.toLowerCase() ||
            !t.classList.contains("waves-effect")
          ) {
            var n = document.createElement("i");
            (n.className = e.className + " waves-input-wrapper"),
              (e.className = "waves-button-input"),
              t.replaceChild(n, e),
              n.appendChild(e);
            var i = window.getComputedStyle(e, null),
              r = i.color,
              o = i.backgroundColor;
            n.setAttribute("style", "color:" + r + ";background:" + o),
              e.setAttribute("style", "background-color:rgba(0,0,0,0);");
          }
        },
        img: function (e) {
          var t = e.parentNode;
          if (
            "i" !== t.tagName.toLowerCase() ||
            !t.classList.contains("waves-effect")
          ) {
            var n = document.createElement("i");
            t.replaceChild(n, e), n.appendChild(e);
          }
        },
      },
      p = {
        touches: 0,
        allowEvent: function (e) {
          var t = !0;
          return (
            /^(mousedown|mousemove)$/.test(e.type) && p.touches && (t = !1), t
          );
        },
        registerEvent: function (e) {
          var t = e.type;
          "touchstart" === t
            ? (p.touches += 1)
            : /^(touchend|touchcancel)$/.test(t) &&
              setTimeout(function () {
                p.touches && (p.touches -= 1);
              }, 500);
        },
      };
    return (
      (s.init = function (e) {
        var t = document.body;
        "duration" in (e = e || {}) && (u.duration = e.duration),
          "delay" in e && (u.delay = e.delay),
          c &&
            (t.addEventListener("touchstart", o, !1),
            t.addEventListener("touchcancel", p.registerEvent, !1),
            t.addEventListener("touchend", p.registerEvent, !1)),
          t.addEventListener("mousedown", o, !1);
      }),
      (s.attach = function (e, n) {
        (e = t(e)),
          "[object Array]" === l.call(n) && (n = n.join(" ")),
          (n = n ? " " + n : "");
        for (var i, r, o = 0, s = e.length; o < s; o++)
          (r = (i = e[o]).tagName.toLowerCase()),
            -1 !== ["input", "img"].indexOf(r) &&
              (h[r](i), (i = i.parentElement)),
            -1 === i.className.indexOf("waves-effect") &&
              (i.className += " waves-effect" + n);
      }),
      (s.ripple = function (e, i) {
        var r = (e = t(e)).length;
        if (
          (((i = i || {}).wait = i.wait || 0),
          (i.position = i.position || null),
          r)
        )
          for (
            var o, s, a, l = {}, c = 0, h = { type: "mousedown", button: 1 };
            c < r;
            c++
          )
            if (
              ((o = e[c]),
              (s = i.position || {
                x: o.clientWidth / 2,
                y: o.clientHeight / 2,
              }),
              (a = n(o)),
              (l.x = a.left + s.x),
              (l.y = a.top + s.y),
              (h.pageX = l.x),
              (h.pageY = l.y),
              u.show(h, o),
              i.wait >= 0 && null !== i.wait)
            ) {
              setTimeout(
                (function (e, t) {
                  return function () {
                    u.hide(e, t);
                  };
                })({ type: "mouseup", button: 1 }, o),
                i.wait
              );
            }
      }),
      (s.calm = function (e) {
        for (
          var n = { type: "mouseup", button: 1 }, i = 0, r = (e = t(e)).length;
          i < r;
          i++
        )
          u.hide(n, e[i]);
      }),
      (s.displayEffect = function (e) {
        s.init(e);
      }),
      s
    );
  }),
  (function () {
    "use strict";
    function e(i) {
      if (!i) throw new Error("No options passed to Waypoint constructor");
      if (!i.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!i.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + t),
        (this.options = e.Adapter.extend({}, e.defaults, i)),
        (this.element = this.options.element),
        (this.adapter = new e.Adapter(this.element)),
        (this.callback = i.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = e.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = e.Context.findOrCreateByElement(this.options.context)),
        e.offsetAliases[this.options.offset] &&
          (this.options.offset = e.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (n[this.key] = this),
        (t += 1);
    }
    var t = 0,
      n = {};
    (e.prototype.queueTrigger = function (e) {
      this.group.queueTrigger(this, e);
    }),
      (e.prototype.trigger = function (e) {
        this.enabled && this.callback && this.callback.apply(this, e);
      }),
      (e.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete n[this.key];
      }),
      (e.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (e.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (e.prototype.next = function () {
        return this.group.next(this);
      }),
      (e.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (e.invokeAll = function (e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var r = 0, o = t.length; o > r; r++) t[r][e]();
      }),
      (e.destroyAll = function () {
        e.invokeAll("destroy");
      }),
      (e.disableAll = function () {
        e.invokeAll("disable");
      }),
      (e.enableAll = function () {
        for (var t in (e.Context.refreshAll(), n)) n[t].enabled = !0;
        return this;
      }),
      (e.refreshAll = function () {
        e.Context.refreshAll();
      }),
      (e.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (e.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (e.adapters = []),
      (e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (e.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = e);
  })(),
  (function () {
    "use strict";
    function e(e) {
      window.setTimeout(e, 1e3 / 60);
    }
    function t(e) {
      (this.element = e),
        (this.Adapter = r.Adapter),
        (this.adapter = new this.Adapter(e)),
        (this.key = "waypoint-context-" + n),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (e.waypointContextKey = this.key),
        (i[e.waypointContextKey] = this),
        (n += 1),
        r.windowContext ||
          ((r.windowContext = !0), (r.windowContext = new t(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var n = 0,
      i = {},
      r = window.Waypoint,
      o = window.onload;
    (t.prototype.add = function (e) {
      var t = e.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[t][e.key] = e), this.refresh();
    }),
      (t.prototype.checkEmpty = function () {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          t = this.Adapter.isEmptyObject(this.waypoints.vertical),
          n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key]);
      }),
      (t.prototype.createThrottledResizeHandler = function () {
        function e() {
          t.handleResize(), (t.didResize = !1);
        }
        var t = this;
        this.adapter.on("resize.waypoints", function () {
          t.didResize || ((t.didResize = !0), r.requestAnimationFrame(e));
        });
      }),
      (t.prototype.createThrottledScrollHandler = function () {
        function e() {
          t.handleScroll(), (t.didScroll = !1);
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function () {
          (!t.didScroll || r.isTouch) &&
            ((t.didScroll = !0), r.requestAnimationFrame(e));
        });
      }),
      (t.prototype.handleResize = function () {
        r.Context.refreshAll();
      }),
      (t.prototype.handleScroll = function () {
        var e = {},
          t = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var n in t) {
          var i = t[n],
            r = i.newScroll > i.oldScroll ? i.forward : i.backward;
          for (var o in this.waypoints[n]) {
            var s = this.waypoints[n][o];
            if (null !== s.triggerPoint) {
              var a = i.oldScroll < s.triggerPoint,
                l = i.newScroll >= s.triggerPoint;
              ((a && l) || (!a && !l)) &&
                (s.queueTrigger(r), (e[s.group.id] = s.group));
            }
          }
        }
        for (var c in e) e[c].flushTriggers();
        this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
      }),
      (t.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? r.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (t.prototype.remove = function (e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty();
      }),
      (t.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? r.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (t.prototype.destroy = function () {
        var e = [];
        for (var t in this.waypoints)
          for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, r = e.length; r > i; i++) e[i].destroy();
      }),
      (t.prototype.refresh = function () {
        var e,
          t = this.element == this.element.window,
          n = t ? void 0 : this.adapter.offset(),
          i = {};
        for (var o in (this.handleScroll(),
        (e = {
          horizontal: {
            contextOffset: t ? 0 : n.left,
            contextScroll: t ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: t ? 0 : n.top,
            contextScroll: t ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var s = e[o];
          for (var a in this.waypoints[o]) {
            var l,
              c,
              u,
              h,
              p = this.waypoints[o][a],
              f = p.options.offset,
              d = p.triggerPoint,
              y = 0,
              g = null == d;
            p.element !== p.element.window &&
              (y = p.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(p))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  p.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (p.triggerPoint = Math.floor(y + l - f)),
              (c = d < s.oldScroll),
              (u = p.triggerPoint >= s.oldScroll),
              (h = !c && !u),
              !g && c && u
                ? (p.queueTrigger(s.backward), (i[p.group.id] = p.group))
                : !g && h
                ? (p.queueTrigger(s.forward), (i[p.group.id] = p.group))
                : g &&
                  s.oldScroll >= p.triggerPoint &&
                  (p.queueTrigger(s.forward), (i[p.group.id] = p.group));
          }
        }
        return (
          r.requestAnimationFrame(function () {
            for (var e in i) i[e].flushTriggers();
          }),
          this
        );
      }),
      (t.findOrCreateByElement = function (e) {
        return t.findByElement(e) || new t(e);
      }),
      (t.refreshAll = function () {
        for (var e in i) i[e].refresh();
      }),
      (t.findByElement = function (e) {
        return i[e.waypointContextKey];
      }),
      (window.onload = function () {
        o && o(), t.refreshAll();
      }),
      (r.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (r.Context = t);
  })(),
  (function () {
    "use strict";
    function e(e, t) {
      return e.triggerPoint - t.triggerPoint;
    }
    function t(e, t) {
      return t.triggerPoint - e.triggerPoint;
    }
    function n(e) {
      (this.name = e.name),
        (this.axis = e.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (i[this.axis][this.name] = this);
    }
    var i = { vertical: {}, horizontal: {} },
      r = window.Waypoint;
    (n.prototype.add = function (e) {
      this.waypoints.push(e);
    }),
      (n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (n.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
          var i = this.triggerQueues[n],
            r = "up" === n || "left" === n;
          i.sort(r ? t : e);
          for (var o = 0, s = i.length; s > o; o += 1) {
            var a = i[o];
            (a.options.continuous || o === i.length - 1) && a.trigger([n]);
          }
        }
        this.clearTriggerQueues();
      }),
      (n.prototype.next = function (t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
      }),
      (n.prototype.previous = function (t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null;
      }),
      (n.prototype.queueTrigger = function (e, t) {
        this.triggerQueues[t].push(e);
      }),
      (n.prototype.remove = function (e) {
        var t = r.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1);
      }),
      (n.prototype.first = function () {
        return this.waypoints[0];
      }),
      (n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (n.findOrCreate = function (e) {
        return i[e.axis][e.name] || new n(e);
      }),
      (r.Group = n);
  })(),
  (function () {
    "use strict";
    function e(e) {
      this.$element = t(e);
    }
    var t = window.jQuery,
      n = window.Waypoint;
    t.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (t, n) {
        e.prototype[n] = function () {
          var e = Array.prototype.slice.call(arguments);
          return this.$element[n].apply(this.$element, e);
        };
      }
    ),
      t.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
        e[i] = t[i];
      }),
      n.adapters.push({ name: "jquery", Adapter: e }),
      (n.Adapter = e);
  })(),
  (function () {
    "use strict";
    function e(e) {
      return function () {
        var n = [],
          i = arguments[0];
        return (
          e.isFunction(arguments[0]) &&
            ((i = e.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var r = e.extend({}, i, { element: this });
            "string" == typeof r.context &&
              (r.context = e(this).closest(r.context)[0]),
              n.push(new t(r));
          }),
          n
        );
      };
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
  })(),
  (function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
      var n,
        i = e.extend(
          {
            time: 400,
            delay: 10,
            offset: 100,
            beginAt: 0,
            formatter: !1,
            context: "window",
            callback: function () {},
          },
          t
        );
      return this.each(function () {
        var t = e(this),
          r = {
            time: e(this).data("counterup-time") || i.time,
            delay: e(this).data("counterup-delay") || i.delay,
            offset: e(this).data("counterup-offset") || i.offset,
            beginAt: e(this).data("counterup-beginat") || i.beginAt,
            context: e(this).data("counterup-context") || i.context,
          };
        t.waypoint(
          function (o) {
            !(function () {
              var o = [],
                s = r.time / r.delay,
                a = e(this).attr("data-num")
                  ? e(this).attr("data-num")
                  : t.text(),
                l = /[0-9]+,[0-9]+/.test(a),
                c = ((a = a.replace(/,/g, "")).split(".")[1] || []).length;
              r.beginAt > a && (r.beginAt = a);
              var u = /[0-9]+:[0-9]+:[0-9]+/.test(a);
              if (u) {
                var h = a.split(":"),
                  p = 1;
                for (n = 0; h.length > 0; )
                  (n += p * parseInt(h.pop(), 10)), (p *= 60);
              }
              for (var f = s; f >= (r.beginAt / a) * s; f--) {
                var d = parseFloat((a / s) * f).toFixed(c);
                if (u) {
                  d = parseInt((n / s) * f);
                  var y = parseInt(d / 3600) % 24,
                    g = parseInt(d / 60) % 60,
                    m = parseInt(d % 60, 10);
                  d =
                    (y < 10 ? "0" + y : y) +
                    ":" +
                    (g < 10 ? "0" + g : g) +
                    ":" +
                    (m < 10 ? "0" + m : m);
                }
                if (l)
                  for (; /(\d+)(\d{3})/.test(d.toString()); )
                    d = d.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                i.formatter && (d = i.formatter.call(this, d)), o.unshift(d);
              }
              t.data("counterup-nums", o), t.text(r.beginAt);
              t.data("counterup-func", function () {
                t.data("counterup-nums")
                  ? (t.html(t.data("counterup-nums").shift()),
                    t.data("counterup-nums").length
                      ? setTimeout(t.data("counterup-func"), r.delay)
                      : (t.data("counterup-nums", null),
                        t.data("counterup-func", null),
                        i.callback.call(this)))
                  : i.callback.call(this);
              }),
                setTimeout(t.data("counterup-func"), r.delay);
            })(),
              this.destroy();
          },
          { offset: r.offset + "%", context: r.context }
        );
      });
    };
  })(jQuery),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.feather = t())
      : (e.feather = t());
  })("undefined" != typeof self ? self : this, function () {
    return (function (e) {
      var t = {};
      function n(i) {
        if (t[i]) return t[i].exports;
        var r = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
          n.o(e, t) ||
            Object.defineProperty(e, t, {
              configurable: !1,
              enumerable: !0,
              get: i,
            });
        }),
        (n.r = function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
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
        n((n.s = 80))
      );
    })([
      function (e, t, n) {
        (function (t) {
          var n = "object",
            i = function (e) {
              return e && e.Math == Math && e;
            };
          e.exports =
            i(typeof globalThis == n && globalThis) ||
            i(typeof window == n && window) ||
            i(typeof self == n && self) ||
            i(typeof t == n && t) ||
            Function("return this")();
        }.call(this, n(75)));
      },
      function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
          return n.call(e, t);
        };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(11),
          o = n(33),
          s = n(62),
          a = i.Symbol,
          l = r("wks");
        e.exports = function (e) {
          return l[e] || (l[e] = (s && a[e]) || (s ? a : o)("Symbol." + e));
        };
      },
      function (e, t, n) {
        var i = n(6);
        e.exports = function (e) {
          if (!i(e)) throw TypeError(String(e) + " is not an object");
          return e;
        };
      },
      function (e, t) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      function (e, t, n) {
        var i = n(8),
          r = n(7),
          o = n(10);
        e.exports = i
          ? function (e, t, n) {
              return r.f(e, t, o(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      function (e, t) {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      function (e, t, n) {
        var i = n(8),
          r = n(35),
          o = n(3),
          s = n(18),
          a = Object.defineProperty;
        t.f = i
          ? a
          : function (e, t, n) {
              if ((o(e), (t = s(t, !0)), o(n), r))
                try {
                  return a(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      function (e, t, n) {
        var i = n(4);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      function (e, t) {
        e.exports = {};
      },
      function (e, t) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(19),
          o = n(17),
          s = i["__core-js_shared__"] || r("__core-js_shared__", {});
        (e.exports = function (e, t) {
          return s[e] || (s[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.1.3",
          mode: o ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = s(n(43)),
          r = s(n(41)),
          o = s(n(40));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = Object.keys(r.default)
          .map(function (e) {
            return new i.default(e, r.default[e], o.default[e]);
          })
          .reduce(function (e, t) {
            return (e[t.name] = t), e;
          }, {});
      },
      function (e, t) {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      function (e, t, n) {
        var i = n(72),
          r = n(20);
        e.exports = function (e) {
          return i(r(e));
        };
      },
      function (e, t) {
        e.exports = {};
      },
      function (e, t, n) {
        var i = n(11),
          r = n(33),
          o = i("keys");
        e.exports = function (e) {
          return o[e] || (o[e] = r(e));
        };
      },
      function (e, t) {
        e.exports = !1;
      },
      function (e, t, n) {
        var i = n(6);
        e.exports = function (e, t) {
          if (!i(e)) return e;
          var n, r;
          if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
            return r;
          if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e))))
            return r;
          if (
            !t &&
            "function" == typeof (n = e.toString) &&
            !i((r = n.call(e)))
          )
            return r;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(5);
        e.exports = function (e, t) {
          try {
            r(i, e, t);
          } catch (n) {
            i[e] = t;
          }
          return t;
        };
      },
      function (e, t) {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e);
          return e;
        };
      },
      function (e, t) {
        var n = Math.ceil,
          i = Math.floor;
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
        };
      },
      function (e, t, n) {
        var i;
        !(function () {
          "use strict";
          var n = (function () {
            function e() {}
            function t(e, t) {
              for (var n = t.length, i = 0; i < n; ++i) r(e, t[i]);
            }
            e.prototype = Object.create(null);
            var n = {}.hasOwnProperty,
              i = /\s+/;
            function r(e, r) {
              if (r) {
                var o = typeof r;
                "string" === o
                  ? (function (e, t) {
                      for (var n = t.split(i), r = n.length, o = 0; o < r; ++o)
                        e[n[o]] = !0;
                    })(e, r)
                  : Array.isArray(r)
                  ? t(e, r)
                  : "object" === o
                  ? (function (e, t) {
                      for (var i in t) n.call(t, i) && (e[i] = !!t[i]);
                    })(e, r)
                  : "number" === o &&
                    (function (e, t) {
                      e[r] = !0;
                    })(e);
              }
            }
            return function () {
              for (var n = arguments.length, i = Array(n), r = 0; r < n; r++)
                i[r] = arguments[r];
              var o = new e();
              t(o, i);
              var s = [];
              for (var a in o) o[a] && s.push(a);
              return s.join(" ");
            };
          })();
          void 0 !== e && e.exports
            ? (e.exports = n)
            : void 0 ===
                (i = function () {
                  return n;
                }.apply(t, [])) || (e.exports = i);
        })();
      },
      function (e, t, n) {
        var i = n(7).f,
          r = n(1),
          o = n(2)("toStringTag");
        e.exports = function (e, t, n) {
          e &&
            !r((e = n ? e : e.prototype), o) &&
            i(e, o, { configurable: !0, value: t });
        };
      },
      function (e, t, n) {
        var i = n(20);
        e.exports = function (e) {
          return Object(i(e));
        };
      },
      function (e, t, n) {
        var i = n(1),
          r = n(24),
          o = n(16),
          s = n(63),
          a = o("IE_PROTO"),
          l = Object.prototype;
        e.exports = s
          ? Object.getPrototypeOf
          : function (e) {
              return (
                (e = r(e)),
                i(e, a)
                  ? e[a]
                  : "function" == typeof e.constructor &&
                    e instanceof e.constructor
                  ? e.constructor.prototype
                  : e instanceof Object
                  ? l
                  : null
              );
            };
      },
      function (e, t, n) {
        "use strict";
        var i,
          r,
          o,
          s = n(25),
          a = n(5),
          l = n(1),
          c = n(2),
          u = n(17),
          h = c("iterator"),
          p = !1;
        [].keys &&
          ("next" in (o = [].keys())
            ? (r = s(s(o))) !== Object.prototype && (i = r)
            : (p = !0)),
          null == i && (i = {}),
          u ||
            l(i, h) ||
            a(i, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: p });
      },
      function (e, t, n) {
        var i = n(21),
          r = Math.min;
        e.exports = function (e) {
          return e > 0 ? r(i(e), 9007199254740991) : 0;
        };
      },
      function (e, t, n) {
        var i = n(1),
          r = n(14),
          o = n(68),
          s = n(15),
          a = o(!1);
        e.exports = function (e, t) {
          var n,
            o = r(e),
            l = 0,
            c = [];
          for (n in o) !i(s, n) && i(o, n) && c.push(n);
          for (; t.length > l; ) i(o, (n = t[l++])) && (~a(c, n) || c.push(n));
          return c;
        };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(11),
          o = n(5),
          s = n(1),
          a = n(19),
          l = n(36),
          c = n(37),
          u = c.get,
          h = c.enforce,
          p = String(l).split("toString");
        r("inspectSource", function (e) {
          return l.call(e);
        }),
          (e.exports = function (e, t, n, r) {
            var l = !!r && !!r.unsafe,
              c = !!r && !!r.enumerable,
              u = !!r && !!r.noTargetGet;
            "function" == typeof n &&
              ("string" != typeof t || s(n, "name") || o(n, "name", t),
              (h(n).source = p.join("string" == typeof t ? t : ""))),
              e !== i
                ? (l ? !u && e[t] && (c = !0) : delete e[t],
                  c ? (e[t] = n) : o(e, t, n))
                : c
                ? (e[t] = n)
                : a(t, n);
          })(Function.prototype, "toString", function () {
            return (
              ("function" == typeof this && u(this).source) || l.call(this)
            );
          });
      },
      function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
          return n.call(e).slice(8, -1);
        };
      },
      function (e, t, n) {
        var i = n(8),
          r = n(73),
          o = n(10),
          s = n(14),
          a = n(18),
          l = n(1),
          c = n(35),
          u = Object.getOwnPropertyDescriptor;
        t.f = i
          ? u
          : function (e, t) {
              if (((e = s(e)), (t = a(t, !0)), c))
                try {
                  return u(e, t);
                } catch (e) {}
              if (l(e, t)) return o(!r.f.call(e, t), e[t]);
            };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(31).f,
          o = n(5),
          s = n(29),
          a = n(19),
          l = n(71),
          c = n(65);
        e.exports = function (e, t) {
          var n,
            u,
            h,
            p,
            f,
            d = e.target,
            y = e.global,
            g = e.stat;
          if ((n = y ? i : g ? i[d] || a(d, {}) : (i[d] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                (h = e.noTargetGet ? (f = r(n, u)) && f.value : n[u]),
                !c(y ? u : d + (g ? "." : "#") + u, e.forced) && void 0 !== h)
              ) {
                if (typeof p == typeof h) continue;
                l(p, h);
              }
              (e.sham || (h && h.sham)) && o(p, "sham", !0), s(n, u, p, e);
            }
        };
      },
      function (e, t) {
        var n = 0,
          i = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(
            void 0 === e ? "" : e,
            ")_",
            (++n + i).toString(36)
          );
        };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(6),
          o = i.document,
          s = r(o) && r(o.createElement);
        e.exports = function (e) {
          return s ? o.createElement(e) : {};
        };
      },
      function (e, t, n) {
        var i = n(8),
          r = n(4),
          o = n(34);
        e.exports =
          !i &&
          !r(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      function (e, t, n) {
        var i = n(11);
        e.exports = i("native-function-to-string", Function.toString);
      },
      function (e, t, n) {
        var i,
          r,
          o,
          s = n(76),
          a = n(0),
          l = n(6),
          c = n(5),
          u = n(1),
          h = n(16),
          p = n(15),
          f = a.WeakMap;
        if (s) {
          var d = new f(),
            y = d.get,
            g = d.has,
            m = d.set;
          (i = function (e, t) {
            return m.call(d, e, t), t;
          }),
            (r = function (e) {
              return y.call(d, e) || {};
            }),
            (o = function (e) {
              return g.call(d, e);
            });
        } else {
          var v = h("state");
          (p[v] = !0),
            (i = function (e, t) {
              return c(e, v, t), t;
            }),
            (r = function (e) {
              return u(e, v) ? e[v] : {};
            }),
            (o = function (e) {
              return u(e, v);
            });
        }
        e.exports = {
          set: i,
          get: r,
          has: o,
          enforce: function (e) {
            return o(e) ? r(e) : i(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!l(t) || (n = r(t)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          r = s(n(22)),
          o = s(n(12));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("undefined" == typeof document)
            throw new Error(
              "`feather.replace()` only works in a browser environment."
            );
          var t = document.querySelectorAll("[data-feather]");
          Array.from(t).forEach(function (t) {
            return (function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = (function (e) {
                  return Array.from(e.attributes).reduce(function (e, t) {
                    return (e[t.name] = t.value), e;
                  }, {});
                })(e),
                s = n["data-feather"];
              delete n["data-feather"];
              var a = o.default[s].toSvg(
                  i({}, t, n, { class: (0, r.default)(t.class, n.class) })
                ),
                l = new DOMParser()
                  .parseFromString(a, "image/svg+xml")
                  .querySelector("svg");
              e.parentNode.replaceChild(l, e);
            })(t, e);
          });
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i,
          r = (i = n(12)) && i.__esModule ? i : { default: i };
        t.default = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            (console.warn(
              "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
            ),
            !e)
          )
            throw new Error(
              "The required `key` (icon name) parameter is missing."
            );
          if (!r.default[e])
            throw new Error(
              "No icon matching '" +
                e +
                "'. See the complete list of icons at https://feathericons.com"
            );
          return r.default[e].toSvg(t);
        };
      },
      function (e) {
        e.exports = {
          activity: ["pulse", "health", "action", "motion"],
          airplay: ["stream", "cast", "mirroring"],
          "alert-circle": ["warning", "alert", "danger"],
          "alert-octagon": ["warning", "alert", "danger"],
          "alert-triangle": ["warning", "alert", "danger"],
          "align-center": ["text alignment", "center"],
          "align-justify": ["text alignment", "justified"],
          "align-left": ["text alignment", "left"],
          "align-right": ["text alignment", "right"],
          anchor: [],
          archive: ["index", "box"],
          "at-sign": ["mention", "at", "email", "message"],
          award: ["achievement", "badge"],
          aperture: ["camera", "photo"],
          "bar-chart": ["statistics", "diagram", "graph"],
          "bar-chart-2": ["statistics", "diagram", "graph"],
          battery: ["power", "electricity"],
          "battery-charging": ["power", "electricity"],
          bell: ["alarm", "notification", "sound"],
          "bell-off": ["alarm", "notification", "silent"],
          bluetooth: ["wireless"],
          "book-open": ["read", "library"],
          book: ["read", "dictionary", "booklet", "magazine", "library"],
          bookmark: ["read", "clip", "marker", "tag"],
          box: ["cube"],
          briefcase: ["work", "bag", "baggage", "folder"],
          calendar: ["date"],
          camera: ["photo"],
          cast: ["chromecast", "airplay"],
          circle: ["off", "zero", "record"],
          clipboard: ["copy"],
          clock: ["time", "watch", "alarm"],
          "cloud-drizzle": ["weather", "shower"],
          "cloud-lightning": ["weather", "bolt"],
          "cloud-rain": ["weather"],
          "cloud-snow": ["weather", "blizzard"],
          cloud: ["weather"],
          codepen: ["logo"],
          codesandbox: ["logo"],
          code: ["source", "programming"],
          coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
          columns: ["layout"],
          command: ["keyboard", "cmd", "terminal", "prompt"],
          compass: ["navigation", "safari", "travel", "direction"],
          copy: ["clone", "duplicate"],
          "corner-down-left": ["arrow", "return"],
          "corner-down-right": ["arrow"],
          "corner-left-down": ["arrow"],
          "corner-left-up": ["arrow"],
          "corner-right-down": ["arrow"],
          "corner-right-up": ["arrow"],
          "corner-up-left": ["arrow"],
          "corner-up-right": ["arrow"],
          cpu: ["processor", "technology"],
          "credit-card": ["purchase", "payment", "cc"],
          crop: ["photo", "image"],
          crosshair: ["aim", "target"],
          database: ["storage", "memory"],
          delete: ["remove"],
          disc: ["album", "cd", "dvd", "music"],
          "dollar-sign": ["currency", "money", "payment"],
          droplet: ["water"],
          edit: ["pencil", "change"],
          "edit-2": ["pencil", "change"],
          "edit-3": ["pencil", "change"],
          eye: ["view", "watch"],
          "eye-off": ["view", "watch", "hide", "hidden"],
          "external-link": ["outbound"],
          facebook: ["logo", "social"],
          "fast-forward": ["music"],
          figma: ["logo", "design", "tool"],
          "file-minus": ["delete", "remove", "erase"],
          "file-plus": ["add", "create", "new"],
          "file-text": ["data", "txt", "pdf"],
          film: ["movie", "video"],
          filter: ["funnel", "hopper"],
          flag: ["report"],
          "folder-minus": ["directory"],
          "folder-plus": ["directory"],
          folder: ["directory"],
          framer: ["logo", "design", "tool"],
          frown: ["emoji", "face", "bad", "sad", "emotion"],
          gift: ["present", "box", "birthday", "party"],
          "git-branch": ["code", "version control"],
          "git-commit": ["code", "version control"],
          "git-merge": ["code", "version control"],
          "git-pull-request": ["code", "version control"],
          github: ["logo", "version control"],
          gitlab: ["logo", "version control"],
          globe: ["world", "browser", "language", "translate"],
          "hard-drive": ["computer", "server", "memory", "data"],
          hash: ["hashtag", "number", "pound"],
          headphones: ["music", "audio", "sound"],
          heart: ["like", "love", "emotion"],
          "help-circle": ["question mark"],
          hexagon: ["shape", "node.js", "logo"],
          home: ["house", "living"],
          image: ["picture"],
          inbox: ["email"],
          instagram: ["logo", "camera"],
          key: ["password", "login", "authentication", "secure"],
          layers: ["stack"],
          layout: ["window", "webpage"],
          "life-bouy": ["help", "life ring", "support"],
          link: ["chain", "url"],
          "link-2": ["chain", "url"],
          linkedin: ["logo", "social media"],
          list: ["options"],
          lock: ["security", "password", "secure"],
          "log-in": ["sign in", "arrow", "enter"],
          "log-out": ["sign out", "arrow", "exit"],
          mail: ["email", "message"],
          "map-pin": ["location", "navigation", "travel", "marker"],
          map: ["location", "navigation", "travel"],
          maximize: ["fullscreen"],
          "maximize-2": ["fullscreen", "arrows", "expand"],
          meh: ["emoji", "face", "neutral", "emotion"],
          menu: ["bars", "navigation", "hamburger"],
          "message-circle": ["comment", "chat"],
          "message-square": ["comment", "chat"],
          "mic-off": ["record", "sound", "mute"],
          mic: ["record", "sound", "listen"],
          minimize: ["exit fullscreen", "close"],
          "minimize-2": ["exit fullscreen", "arrows", "close"],
          minus: ["subtract"],
          monitor: ["tv", "screen", "display"],
          moon: ["dark", "night"],
          "more-horizontal": ["ellipsis"],
          "more-vertical": ["ellipsis"],
          "mouse-pointer": ["arrow", "cursor"],
          move: ["arrows"],
          music: ["note"],
          navigation: ["location", "travel"],
          "navigation-2": ["location", "travel"],
          octagon: ["stop"],
          package: ["box", "container"],
          paperclip: ["attachment"],
          pause: ["music", "stop"],
          "pause-circle": ["music", "audio", "stop"],
          "pen-tool": ["vector", "drawing"],
          percent: ["discount"],
          "phone-call": ["ring"],
          "phone-forwarded": ["call"],
          "phone-incoming": ["call"],
          "phone-missed": ["call"],
          "phone-off": ["call", "mute"],
          "phone-outgoing": ["call"],
          phone: ["call"],
          play: ["music", "start"],
          "pie-chart": ["statistics", "diagram"],
          "play-circle": ["music", "start"],
          plus: ["add", "new"],
          "plus-circle": ["add", "new"],
          "plus-square": ["add", "new"],
          pocket: ["logo", "save"],
          power: ["on", "off"],
          printer: ["fax", "office", "device"],
          radio: ["signal"],
          "refresh-cw": ["synchronise", "arrows"],
          "refresh-ccw": ["arrows"],
          repeat: ["loop", "arrows"],
          rewind: ["music"],
          "rotate-ccw": ["arrow"],
          "rotate-cw": ["arrow"],
          rss: ["feed", "subscribe"],
          save: ["floppy disk"],
          scissors: ["cut"],
          search: ["find", "magnifier", "magnifying glass"],
          send: [
            "message",
            "mail",
            "email",
            "paper airplane",
            "paper aeroplane",
          ],
          settings: ["cog", "edit", "gear", "preferences"],
          "share-2": ["network", "connections"],
          shield: ["security", "secure"],
          "shield-off": ["security", "insecure"],
          "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
          "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
          shuffle: ["music"],
          "skip-back": ["music"],
          "skip-forward": ["music"],
          slack: ["logo"],
          slash: ["ban", "no"],
          sliders: ["settings", "controls"],
          smartphone: ["cellphone", "device"],
          smile: ["emoji", "face", "happy", "good", "emotion"],
          speaker: ["audio", "music"],
          star: ["bookmark", "favorite", "like"],
          "stop-circle": ["media", "music"],
          sun: ["brightness", "weather", "light"],
          sunrise: ["weather", "time", "morning", "day"],
          sunset: ["weather", "time", "evening", "night"],
          tablet: ["device"],
          tag: ["label"],
          target: ["logo", "bullseye"],
          terminal: ["code", "command line", "prompt"],
          thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
          "thumbs-down": ["dislike", "bad", "emotion"],
          "thumbs-up": ["like", "good", "emotion"],
          "toggle-left": ["on", "off", "switch"],
          "toggle-right": ["on", "off", "switch"],
          tool: ["settings", "spanner"],
          trash: ["garbage", "delete", "remove", "bin"],
          "trash-2": ["garbage", "delete", "remove", "bin"],
          triangle: ["delta"],
          truck: ["delivery", "van", "shipping", "transport", "lorry"],
          tv: ["television", "stream"],
          twitch: ["logo"],
          twitter: ["logo", "social"],
          type: ["text"],
          umbrella: ["rain", "weather"],
          unlock: ["security"],
          "user-check": ["followed", "subscribed"],
          "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
          "user-plus": ["new", "add", "create", "follow", "subscribe"],
          "user-x": [
            "delete",
            "remove",
            "unfollow",
            "unsubscribe",
            "unavailable",
          ],
          user: ["person", "account"],
          users: ["group"],
          "video-off": ["camera", "movie", "film"],
          video: ["camera", "movie", "film"],
          voicemail: ["phone"],
          volume: ["music", "sound", "mute"],
          "volume-1": ["music", "sound"],
          "volume-2": ["music", "sound"],
          "volume-x": ["music", "sound", "mute"],
          watch: ["clock", "time"],
          "wifi-off": ["disabled"],
          wifi: ["connection", "signal", "wireless"],
          wind: ["weather", "air"],
          "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
          "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
          "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
          x: ["cancel", "close", "delete", "remove", "times", "clear"],
          youtube: ["logo", "video", "play"],
          "zap-off": ["flash", "camera", "lightning"],
          zap: ["flash", "camera", "lightning"],
          "zoom-in": ["magnifying glass"],
          "zoom-out": ["magnifying glass"],
        };
      },
      function (e) {
        e.exports = {
          activity:
            '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
          airplay:
            '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
          "alert-circle":
            '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
          "alert-octagon":
            '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
          "alert-triangle":
            '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
          "align-center":
            '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
          "align-justify":
            '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
          "align-left":
            '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
          "align-right":
            '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
          anchor:
            '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
          aperture:
            '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
          archive:
            '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
          "arrow-down-circle":
            '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
          "arrow-down-left":
            '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
          "arrow-down-right":
            '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
          "arrow-down":
            '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
          "arrow-left-circle":
            '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
          "arrow-left":
            '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
          "arrow-right-circle":
            '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
          "arrow-right":
            '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
          "arrow-up-circle":
            '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
          "arrow-up-left":
            '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
          "arrow-up-right":
            '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
          "arrow-up":
            '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
          "at-sign":
            '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
          award:
            '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
          "bar-chart-2":
            '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
          "bar-chart":
            '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
          "battery-charging":
            '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
          battery:
            '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
          "bell-off":
            '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
          bluetooth:
            '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
          bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
          "book-open":
            '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
          book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
          bookmark:
            '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
          box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
          briefcase:
            '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
          calendar:
            '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
          "camera-off":
            '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
          camera:
            '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
          cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
          "check-circle":
            '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
          "check-square":
            '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
          check: '<polyline points="20 6 9 17 4 12"></polyline>',
          "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
          "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
          "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
          "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
          "chevrons-down":
            '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
          "chevrons-left":
            '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
          "chevrons-right":
            '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
          "chevrons-up":
            '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
          chrome:
            '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
          circle: '<circle cx="12" cy="12" r="10"></circle>',
          clipboard:
            '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
          clock:
            '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
          "cloud-drizzle":
            '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
          "cloud-lightning":
            '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
          "cloud-off":
            '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          "cloud-rain":
            '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
          "cloud-snow":
            '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
          cloud:
            '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
          code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
          codepen:
            '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
          codesandbox:
            '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
          coffee:
            '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
          columns:
            '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
          command:
            '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
          compass:
            '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
          copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
          "corner-down-left":
            '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
          "corner-down-right":
            '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
          "corner-left-down":
            '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
          "corner-left-up":
            '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
          "corner-right-down":
            '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
          "corner-right-up":
            '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
          "corner-up-left":
            '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
          "corner-up-right":
            '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
          cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
          "credit-card":
            '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
          crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
          crosshair:
            '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
          database:
            '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
          delete:
            '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
          disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
          "divide-circle":
            '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
          "divide-square":
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
          divide:
            '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
          "dollar-sign":
            '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
          "download-cloud":
            '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
          download:
            '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
          dribbble:
            '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
          droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
          "edit-2":
            '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
          "edit-3":
            '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
          edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
          "external-link":
            '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
          "eye-off":
            '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
          facebook:
            '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
          "fast-forward":
            '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
          feather:
            '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
          figma:
            '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
          "file-minus":
            '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
          "file-plus":
            '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
          "file-text":
            '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
          file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
          film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
          filter:
            '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
          flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
          "folder-minus":
            '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
          "folder-plus":
            '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
          folder:
            '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
          framer:
            '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
          frown:
            '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
          gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
          "git-branch":
            '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
          "git-commit":
            '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
          "git-merge":
            '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
          "git-pull-request":
            '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
          github:
            '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
          gitlab:
            '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
          globe:
            '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
          grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
          "hard-drive":
            '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
          hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
          headphones:
            '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
          heart:
            '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
          "help-circle":
            '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
          hexagon:
            '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
          home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
          image:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
          inbox:
            '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
          info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
          instagram:
            '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
          italic:
            '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
          key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
          layers:
            '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
          layout:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
          "life-buoy":
            '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
          "link-2":
            '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
          link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
          linkedin:
            '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
          list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
          loader:
            '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
          lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
          "log-in":
            '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
          "log-out":
            '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
          mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
          "map-pin":
            '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
          map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
          "maximize-2":
            '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
          maximize:
            '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
          meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
          menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
          "message-circle":
            '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
          "message-square":
            '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
          "mic-off":
            '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
          mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
          "minimize-2":
            '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
          minimize:
            '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
          "minus-circle":
            '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
          "minus-square":
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
          minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
          monitor:
            '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
          moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
          "more-horizontal":
            '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
          "more-vertical":
            '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
          "mouse-pointer":
            '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
          move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
          music:
            '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
          "navigation-2":
            '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
          navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
          octagon:
            '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
          package:
            '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
          paperclip:
            '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
          "pause-circle":
            '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
          pause:
            '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
          "pen-tool":
            '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
          percent:
            '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
          "phone-call":
            '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-forwarded":
            '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-incoming":
            '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-missed":
            '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "phone-off":
            '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
          "phone-outgoing":
            '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          phone:
            '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
          "pie-chart":
            '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
          "play-circle":
            '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
          play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
          "plus-circle":
            '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
          "plus-square":
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
          plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
          pocket:
            '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
          power:
            '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
          printer:
            '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
          radio:
            '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
          "refresh-ccw":
            '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
          "refresh-cw":
            '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
          repeat:
            '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
          rewind:
            '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
          "rotate-ccw":
            '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
          "rotate-cw":
            '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
          rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
          save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
          scissors:
            '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
          search:
            '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
          send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
          server:
            '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
          settings:
            '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
          "share-2":
            '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
          share:
            '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
          "shield-off":
            '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          shield:
            '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
          "shopping-bag":
            '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
          "shopping-cart":
            '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
          shuffle:
            '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
          sidebar:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
          "skip-back":
            '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
          "skip-forward":
            '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
          slack:
            '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
          slash:
            '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
          sliders:
            '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
          smartphone:
            '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
          smile:
            '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
          speaker:
            '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
          square:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
          star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
          "stop-circle":
            '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
          sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
          sunrise:
            '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
          sunset:
            '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
          tablet:
            '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
          tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
          target:
            '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
          terminal:
            '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
          thermometer:
            '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
          "thumbs-down":
            '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
          "thumbs-up":
            '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
          "toggle-left":
            '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
          "toggle-right":
            '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
          tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
          "trash-2":
            '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
          trash:
            '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
          trello:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
          "trending-down":
            '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
          "trending-up":
            '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
          triangle:
            '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
          truck:
            '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
          tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
          twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
          twitter:
            '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
          type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
          umbrella:
            '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
          underline:
            '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
          unlock:
            '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
          "upload-cloud":
            '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
          upload:
            '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
          "user-check":
            '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
          "user-minus":
            '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
          "user-plus":
            '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
          "user-x":
            '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
          user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
          users:
            '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
          "video-off":
            '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
          video:
            '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
          voicemail:
            '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
          "volume-1":
            '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
          "volume-2":
            '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
          "volume-x":
            '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
          volume:
            '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
          watch:
            '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
          "wifi-off":
            '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
          wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
          wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
          "x-circle":
            '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
          "x-octagon":
            '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
          "x-square":
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
          x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
          youtube:
            '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
          "zap-off":
            '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
          zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
          "zoom-in":
            '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
          "zoom-out":
            '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
        };
      },
      function (e) {
        e.exports = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": 2,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = a(n(22)),
          s = a(n(42));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l = (function () {
          function e(t, n) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.name = t),
              (this.contents = n),
              (this.tags = r),
              (this.attrs = i({}, s.default, {
                class: "feather feather-" + t,
              }));
          }
          return (
            r(e, [
              {
                key: "toSvg",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    "<svg " +
                    (function (e) {
                      return Object.keys(e)
                        .map(function (t) {
                          return t + '="' + e[t] + '"';
                        })
                        .join(" ");
                    })(
                      i({}, this.attrs, e, {
                        class: (0, o.default)(this.attrs.class, e.class),
                      })
                    ) +
                    ">" +
                    this.contents +
                    "</svg>"
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.contents;
                },
              },
            ]),
            e
          );
        })();
        t.default = l;
      },
      function (e, t, n) {
        "use strict";
        var i = s(n(12)),
          r = s(n(39)),
          o = s(n(38));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e.exports = { icons: i.default, toSvg: r.default, replace: o.default };
      },
      function (e, t, n) {
        e.exports = n(0);
      },
      function (e, t, n) {
        var i = n(2)("iterator"),
          r = !1;
        try {
          var o = 0,
            s = {
              next: function () {
                return { done: !!o++ };
              },
              return: function () {
                r = !0;
              },
            };
          (s[i] = function () {
            return this;
          }),
            Array.from(s, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !r) return !1;
          var n = !1;
          try {
            var o = {};
            (o[i] = function () {
              return {
                next: function () {
                  return { done: (n = !0) };
                },
              };
            }),
              e(o);
          } catch (e) {}
          return n;
        };
      },
      function (e, t, n) {
        var i = n(30),
          r = n(2)("toStringTag"),
          o =
            "Arguments" ==
            i(
              (function () {
                return arguments;
              })()
            );
        e.exports = function (e) {
          var t, n, s;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), r))
            ? n
            : o
            ? i(t)
            : "Object" == (s = i(t)) && "function" == typeof t.callee
            ? "Arguments"
            : s;
        };
      },
      function (e, t, n) {
        var i = n(47),
          r = n(9),
          o = n(2)("iterator");
        e.exports = function (e) {
          if (null != e) return e[o] || e["@@iterator"] || r[i(e)];
        };
      },
      function (e, t, n) {
        "use strict";
        var i = n(18),
          r = n(7),
          o = n(10);
        e.exports = function (e, t, n) {
          var s = i(t);
          s in e ? r.f(e, s, o(0, n)) : (e[s] = n);
        };
      },
      function (e, t, n) {
        var i = n(2),
          r = n(9),
          o = i("iterator"),
          s = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || s[o] === e);
        };
      },
      function (e, t, n) {
        var i = n(3);
        e.exports = function (e, t, n, r) {
          try {
            return r ? t(i(n)[0], n[1]) : t(n);
          } catch (t) {
            var o = e.return;
            throw (void 0 !== o && i(o.call(e)), t);
          }
        };
      },
      function (e, t) {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
          return e;
        };
      },
      function (e, t, n) {
        var i = n(52);
        e.exports = function (e, t, n) {
          if ((i(e), void 0 === t)) return e;
          switch (n) {
            case 0:
              return function () {
                return e.call(t);
              };
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, i) {
                return e.call(t, n, i);
              };
            case 3:
              return function (n, i, r) {
                return e.call(t, n, i, r);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      function (e, t, n) {
        "use strict";
        var i = n(53),
          r = n(24),
          o = n(51),
          s = n(50),
          a = n(27),
          l = n(49),
          c = n(48);
        e.exports = function (e) {
          var t,
            n,
            u,
            h,
            p = r(e),
            f = "function" == typeof this ? this : Array,
            d = arguments.length,
            y = d > 1 ? arguments[1] : void 0,
            g = void 0 !== y,
            m = 0,
            v = c(p);
          if (
            (g && (y = i(y, d > 2 ? arguments[2] : void 0, 2)),
            null == v || (f == Array && s(v)))
          )
            for (n = new f((t = a(p.length))); t > m; m++)
              l(n, m, g ? y(p[m], m) : p[m]);
          else
            for (h = v.call(p), n = new f(); !(u = h.next()).done; m++)
              l(n, m, g ? o(h, y, [u.value, m], !0) : u.value);
          return (n.length = m), n;
        };
      },
      function (e, t, n) {
        var i = n(32),
          r = n(54);
        i(
          {
            target: "Array",
            stat: !0,
            forced: !n(46)(function (e) {
              Array.from(e);
            }),
          },
          { from: r }
        );
      },
      function (e, t, n) {
        var i = n(6),
          r = n(3);
        e.exports = function (e, t) {
          if ((r(e), !i(t) && null !== t))
            throw TypeError("Can't set " + String(t) + " as a prototype");
        };
      },
      function (e, t, n) {
        var i = n(56);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    "__proto__"
                  ).set).call(n, []),
                    (t = n instanceof Array);
                } catch (e) {}
                return function (n, r) {
                  return i(n, r), t ? e.call(n, r) : (n.__proto__ = r), n;
                };
              })()
            : void 0);
      },
      function (e, t, n) {
        var i = n(0).document;
        e.exports = i && i.documentElement;
      },
      function (e, t, n) {
        var i = n(28),
          r = n(13);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, r);
          };
      },
      function (e, t, n) {
        var i = n(8),
          r = n(7),
          o = n(3),
          s = n(59);
        e.exports = i
          ? Object.defineProperties
          : function (e, t) {
              o(e);
              for (var n, i = s(t), a = i.length, l = 0; a > l; )
                r.f(e, (n = i[l++]), t[n]);
              return e;
            };
      },
      function (e, t, n) {
        var i = n(3),
          r = n(60),
          o = n(13),
          s = n(15),
          a = n(58),
          l = n(34),
          c = n(16)("IE_PROTO"),
          u = function () {},
          h = function () {
            var e,
              t = l("iframe"),
              n = o.length;
            for (
              t.style.display = "none",
                a.appendChild(t),
                t.src = String("javascript:"),
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                h = e.F;
              n--;

            )
              delete h.prototype[o[n]];
            return h();
          };
        (e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((u.prototype = i(e)),
                  (n = new u()),
                  (u.prototype = null),
                  (n[c] = e))
                : (n = h()),
              void 0 === t ? n : r(n, t)
            );
          }),
          (s[c] = !0);
      },
      function (e, t, n) {
        var i = n(4);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            return !String(Symbol());
          });
      },
      function (e, t, n) {
        var i = n(4);
        e.exports = !i(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      function (e, t, n) {
        "use strict";
        var i = n(26).IteratorPrototype,
          r = n(61),
          o = n(10),
          s = n(23),
          a = n(9),
          l = function () {
            return this;
          };
        e.exports = function (e, t, n) {
          var c = t + " Iterator";
          return (
            (e.prototype = r(i, { next: o(1, n) })),
            s(e, c, !1, !0),
            (a[c] = l),
            e
          );
        };
      },
      function (e, t, n) {
        var i = n(4),
          r = /#|\.prototype\./,
          o = function (e, t) {
            var n = a[s(e)];
            return n == c || (n != l && ("function" == typeof t ? i(t) : !!t));
          },
          s = (o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase();
          }),
          a = (o.data = {}),
          l = (o.NATIVE = "N"),
          c = (o.POLYFILL = "P");
        e.exports = o;
      },
      function (e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      function (e, t, n) {
        var i = n(21),
          r = Math.max,
          o = Math.min;
        e.exports = function (e, t) {
          var n = i(e);
          return n < 0 ? r(n + t, 0) : o(n, t);
        };
      },
      function (e, t, n) {
        var i = n(14),
          r = n(27),
          o = n(67);
        e.exports = function (e) {
          return function (t, n, s) {
            var a,
              l = i(t),
              c = r(l.length),
              u = o(s, c);
            if (e && n != n) {
              for (; c > u; ) if ((a = l[u++]) != a) return !0;
            } else
              for (; c > u; u++)
                if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
          };
        };
      },
      function (e, t, n) {
        var i = n(28),
          r = n(13).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, r);
          };
      },
      function (e, t, n) {
        var i = n(0),
          r = n(69),
          o = n(66),
          s = n(3),
          a = i.Reflect;
        e.exports =
          (a && a.ownKeys) ||
          function (e) {
            var t = r.f(s(e)),
              n = o.f;
            return n ? t.concat(n(e)) : t;
          };
      },
      function (e, t, n) {
        var i = n(1),
          r = n(70),
          o = n(31),
          s = n(7);
        e.exports = function (e, t) {
          for (var n = r(t), a = s.f, l = o.f, c = 0; c < n.length; c++) {
            var u = n[c];
            i(e, u) || a(e, u, l(t, u));
          }
        };
      },
      function (e, t, n) {
        var i = n(4),
          r = n(30),
          o = "".split;
        e.exports = i(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == r(e) ? o.call(e, "") : Object(e);
            }
          : Object;
      },
      function (e, t, n) {
        "use strict";
        var i = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !i.call({ 1: 2 }, 1);
        t.f = o
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : i;
      },
      function (e, t, n) {
        "use strict";
        var i = n(32),
          r = n(64),
          o = n(25),
          s = n(57),
          a = n(23),
          l = n(5),
          c = n(29),
          u = n(2),
          h = n(17),
          p = n(9),
          f = n(26),
          d = f.IteratorPrototype,
          y = f.BUGGY_SAFARI_ITERATORS,
          g = u("iterator"),
          m = function () {
            return this;
          };
        e.exports = function (e, t, n, u, f, v, x) {
          r(n, t, u);
          var b,
            w,
            _,
            E = function (e) {
              if (e === f && S) return S;
              if (!y && e in k) return k[e];
              switch (e) {
                case "keys":
                case "values":
                case "entries":
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this);
              };
            },
            A = t + " Iterator",
            T = !1,
            k = e.prototype,
            O = k[g] || k["@@iterator"] || (f && k[f]),
            S = (!y && O) || E(f),
            C = ("Array" == t && k.entries) || O;
          if (
            (C &&
              ((b = o(C.call(new e()))),
              d !== Object.prototype &&
                b.next &&
                (h ||
                  o(b) === d ||
                  (s ? s(b, d) : "function" != typeof b[g] && l(b, g, m)),
                a(b, A, !0, !0),
                h && (p[A] = m))),
            "values" == f &&
              O &&
              "values" !== O.name &&
              ((T = !0),
              (S = function () {
                return O.call(this);
              })),
            (h && !x) || k[g] === S || l(k, g, S),
            (p[t] = S),
            f)
          )
            if (
              ((w = {
                values: E("values"),
                keys: v ? S : E("keys"),
                entries: E("entries"),
              }),
              x)
            )
              for (_ in w) (!y && !T && _ in k) || c(k, _, w[_]);
            else i({ target: t, proto: !0, forced: y || T }, w);
          return w;
        };
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
        var i = n(0),
          r = n(36),
          o = i.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(r.call(o));
      },
      function (e, t, n) {
        var i = n(21),
          r = n(20);
        e.exports = function (e, t, n) {
          var o,
            s,
            a = String(r(e)),
            l = i(t),
            c = a.length;
          return l < 0 || l >= c
            ? n
              ? ""
              : void 0
            : (o = a.charCodeAt(l)) < 55296 ||
              o > 56319 ||
              l + 1 === c ||
              (s = a.charCodeAt(l + 1)) < 56320 ||
              s > 57343
            ? n
              ? a.charAt(l)
              : o
            : n
            ? a.slice(l, l + 2)
            : s - 56320 + ((o - 55296) << 10) + 65536;
        };
      },
      function (e, t, n) {
        "use strict";
        var i = n(77),
          r = n(37),
          o = n(74),
          s = r.set,
          a = r.getterFor("String Iterator");
        o(
          String,
          "String",
          function (e) {
            s(this, { type: "String Iterator", string: String(e), index: 0 });
          },
          function () {
            var e,
              t = a(this),
              n = t.string,
              r = t.index;
            return r >= n.length
              ? { value: void 0, done: !0 }
              : ((e = i(n, r, !0)),
                (t.index += e.length),
                { value: e, done: !1 });
          }
        );
      },
      function (e, t, n) {
        n(78), n(55);
        var i = n(45);
        e.exports = i.Array.from;
      },
      function (e, t, n) {
        n(79), (e.exports = n(44));
      },
    ]);
  });
//# sourceMappingURL=vendor.min-min.js.map
