!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                  if (!e.document) throw new Error("jQuery requires a window with a document");
                  return t(e);
              })
      : t(e);
})("undefined" != typeof window ? window : this, function (h, t) {
  function m(e) {
      var t = e.length,
          n = ie.type(e);
      return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
  }
  function u(e, n, r) {
      if (ie.isFunction(n))
          return ie.grep(e, function (e, t) {
              return !!n.call(e, t, e) !== r;
          });
      if (n.nodeType)
          return ie.grep(e, function (e) {
              return (e === n) !== r;
          });
      if ("string" == typeof n) {
          if (fe.test(n)) return ie.filter(n, e, r);
          n = ie.filter(n, e);
      }
      return ie.grep(e, function (e) {
          return 0 <= ie.inArray(e, n) !== r;
      });
  }
  function n(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
  }
  function e(e) {
      var n = (xe[e] = {});
      return (
          ie.each(e.match(be) || [], function (e, t) {
              n[t] = !0;
          }),
          n
      );
  }
  function r() {
      he.addEventListener ? (he.removeEventListener("DOMContentLoaded", i, !1), h.removeEventListener("load", i, !1)) : (he.detachEvent("onreadystatechange", i), h.detachEvent("onload", i));
  }
  function i() {
      (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (r(), ie.ready());
  }
  function s(e, t, n) {
      if (void 0 === n && 1 === e.nodeType) {
          var r = "data-" + t.replace(Ne, "-$1").toLowerCase();
          if ("string" == typeof (n = e.getAttribute(r))) {
              try {
                  n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? ie.parseJSON(n) : n));
              } catch (G) {}
              ie.data(e, t, n);
          } else n = void 0;
      }
      return n;
  }
  function l(e) {
      var t;
      for (t in e) if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0;
  }
  function o(e, t, n, r) {
      if (ie.acceptData(e)) {
          var i,
              o,
              a = ie.expando,
              s = e.nodeType,
              l = s ? ie.cache : e,
              u = s ? e[a] : e[a] && a;
          if ((u && l[u] && (r || l[u].data)) || void 0 !== n || "string" != typeof t)
              return (
                  u || (u = s ? (e[a] = J.pop() || ie.guid++) : a),
                  l[u] || (l[u] = s ? {} : { toJSON: ie.noop }),
                  ("object" == typeof t || "function" == typeof t) && (r ? (l[u] = ie.extend(l[u], t)) : (l[u].data = ie.extend(l[u].data, t))),
                  (o = l[u]),
                  r || (o.data || (o.data = {}), (o = o.data)),
                  void 0 !== n && (o[ie.camelCase(t)] = n),
                  "string" == typeof t ? null == (i = o[t]) && (i = o[ie.camelCase(t)]) : (i = o),
                  i
              );
      }
  }
  function a(e, t, n) {
      if (ie.acceptData(e)) {
          var r,
              i,
              o = e.nodeType,
              a = o ? ie.cache : e,
              s = o ? e[ie.expando] : ie.expando;
          if (a[s]) {
              if (t && (r = n ? a[s] : a[s].data)) {
                  ie.isArray(t) ? (t = t.concat(ie.map(t, ie.camelCase))) : t in r ? (t = [t]) : (t = (t = ie.camelCase(t)) in r ? [t] : t.split(" ")), (i = t.length);
                  for (; i--; ) delete r[t[i]];
                  if (n ? !l(r) : !ie.isEmptyObject(r)) return;
              }
              (n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : (a[s] = null));
          }
      }
  }
  function c() {
      return !0;
  }
  function d() {
      return !1;
  }
  function f() {
      try {
          return he.activeElement;
      } catch (h) {}
  }
  function g(e) {
      var t = Me.split("|"),
          n = e.createDocumentFragment();
      if (n.createElement) for (; t.length; ) n.createElement(t.pop());
      return n;
  }
  function v(e, t) {
      var n,
          r,
          i = 0,
          o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
      if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, v(r, t));
      return void 0 === t || (t && ie.nodeName(e, t)) ? ie.merge([e], o) : o;
  }
  function y(e) {
      De.test(e.type) && (e.defaultChecked = e.checked);
  }
  function p(e, t) {
      return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function b(e) {
      return (e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type), e;
  }
  function x(e) {
      var t = Ue.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function w(e, t) {
      for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"));
  }
  function T(e, t) {
      if (1 === t.nodeType && ie.hasData(e)) {
          var n,
              r,
              i,
              o = ie._data(e),
              a = ie._data(t, o),
              s = o.events;
          if (s) for (n in (delete a.handle, (a.events = {}), s)) for (r = 0, i = s[n].length; r < i; r++) ie.event.add(t, n, s[n][r]);
          a.data && (a.data = ie.extend({}, a.data));
      }
  }
  function C(e, t) {
      var n, r, i;
      if (1 === t.nodeType) {
          if (((n = t.nodeName.toLowerCase()), !ne.noCloneEvent && t[ie.expando])) {
              for (r in (i = ie._data(t)).events) ie.removeEvent(t, r, i.handle);
              t.removeAttribute(ie.expando);
          }
          "script" === n && t.text !== e.text
              ? ((b(t).text = e.text), x(t))
              : "object" === n
              ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
              : "input" === n && De.test(e.type)
              ? ((t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value))
              : "option" === n
              ? (t.defaultSelected = t.selected = e.defaultSelected)
              : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
      }
  }
  function N(e, t) {
      var n,
          r = ie(t.createElement(e)).appendTo(t.body),
          i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display : ie.css(r[0], "display");
      return r.detach(), i;
  }
  function E(e) {
      var t = he,
          n = Ke[e];
      return (
          n ||
              (("none" !== (n = N(e, t)) && n) ||
                  ((t = ((Ge = (Ge || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ge[0].contentDocument).document).write(), t.close(), (n = N(e, t)), Ge.detach()),
              (Ke[e] = n)),
          n
      );
  }
  function k(t, n) {
      return {
          get: function () {
              var e = t();
              if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments);
          },
      };
  }
  function S(e, t) {
      if (t in e) return t;
      for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = dt.length; i--; ) if ((t = dt[i] + n) in e) return t;
      return r;
  }
  function A(e, t) {
      for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
          (r = e[a]).style &&
              ((o[a] = ie._data(r, "olddisplay")),
              (n = r.style.display),
              t
                  ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Se(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName))))
                  : ((i = Se(r)), ((n && "none" !== n) || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
      for (a = 0; a < s; a++) (r = e[a]).style && ((t && "none" !== r.style.display && "" !== r.style.display) || (r.style.display = t ? o[a] || "" : "none"));
      return e;
  }
  function D(e, t, n) {
      var r = st.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function j(e, t, n, r, i) {
      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
          "margin" === n && (a += ie.css(e, n + ke[o], !0, i)),
              r
                  ? ("content" === n && (a -= ie.css(e, "padding" + ke[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + ke[o] + "Width", !0, i)))
                  : ((a += ie.css(e, "padding" + ke[o], !0, i)), "padding" !== n && (a += ie.css(e, "border" + ke[o] + "Width", !0, i)));
      return a;
  }
  function L(e, t, n) {
      var r = !0,
          i = "width" === t ? e.offsetWidth : e.offsetHeight,
          o = Ze(e),
          a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
      if (i <= 0 || null == i) {
          if ((((i = et(e, t, o)) < 0 || null == i) && (i = e.style[t]), nt.test(i))) return i;
          (r = a && (ne.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0);
      }
      return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function H(e, t, n, r, i) {
      return new H.prototype.init(e, t, n, r, i);
  }
  function q() {
      return (
          setTimeout(function () {
              ft = void 0;
          }),
          (ft = ie.now())
      );
  }
  function _(e, t) {
      var n,
          r = { height: e },
          i = 0;
      for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ke[i])] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r;
  }
  function M(e, t, n) {
      for (var r, i = (Ct[t] || []).concat(Ct["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function F(t, e, n) {
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c = this,
          d = {},
          f = t.style,
          p = t.nodeType && Se(t),
          h = ie._data(t, "fxshow");
      for (r in (n.queue ||
          (null == (s = ie._queueHooks(t, "fx")).unqueued &&
              ((s.unqueued = 0),
              (l = s.empty.fire),
              (s.empty.fire = function () {
                  s.unqueued || l();
              })),
          s.unqueued++,
          c.always(function () {
              c.always(function () {
                  s.unqueued--, ie.queue(t, "fx").length || s.empty.fire();
              });
          })),
      1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          "inline" === ("none" === (u = ie.css(t, "display")) ? ie._data(t, "olddisplay") || E(t.nodeName) : u) &&
              "none" === ie.css(t, "float") &&
              (ne.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? (f.zoom = 1) : (f.display = "inline-block"))),
      n.overflow &&
          ((f.overflow = "hidden"),
          ne.shrinkWrapBlocks() ||
              c.always(function () {
                  (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
              })),
      e))
          if (((i = e[r]), bt.exec(i))) {
              if ((delete e[r], (o = o || "toggle" === i), i === (p ? "hide" : "show"))) {
                  if ("show" !== i || !h || void 0 === h[r]) continue;
                  p = !0;
              }
              d[r] = (h && h[r]) || ie.style(t, r);
          } else u = void 0;
      if (ie.isEmptyObject(d)) "inline" === ("none" === u ? E(t.nodeName) : u) && (f.display = u);
      else
          for (r in (h ? "hidden" in h && (p = h.hidden) : (h = ie._data(t, "fxshow", {})),
          o && (h.hidden = !p),
          p
              ? ie(t).show()
              : c.done(function () {
                    ie(t).hide();
                }),
          c.done(function () {
              var e;
              for (e in (ie._removeData(t, "fxshow"), d)) ie.style(t, e, d[e]);
          }),
          d))
              (a = M(p ? h[r] : 0, r, c)), r in h || ((h[r] = a.start), p && ((a.end = a.start), (a.start = "width" === r || "height" === r ? 1 : 0)));
  }
  function O(e, t) {
      var n, r, i, o, a;
      for (n in e)
          if (((i = t[(r = ie.camelCase(n))]), (o = e[n]), ie.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = ie.cssHooks[r]) && "expand" in a))
              for (n in ((o = a.expand(o)), delete e[r], o)) n in e || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
  }
  function B(o, e, t) {
      var n,
          a,
          r = 0,
          i = Tt.length,
          s = ie.Deferred().always(function () {
              delete l.elem;
          }),
          l = function () {
              if (a) return !1;
              for (var e = ft || q(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
              return s.notifyWith(o, [u, n, t]), n < 1 && i ? t : (s.resolveWith(o, [u]), !1);
          },
          u = s.promise({
              elem: o,
              props: ie.extend({}, e),
              opts: ie.extend(!0, { specialEasing: {} }, t),
              originalProperties: e,
              originalOptions: t,
              startTime: ft || q(),
              duration: t.duration,
              tweens: [],
              createTween: function (e, t) {
                  var n = ie.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                  return u.tweens.push(n), n;
              },
              stop: function (e) {
                  var t = 0,
                      n = e ? u.tweens.length : 0;
                  if (a) return this;
                  for (a = !0; t < n; t++) u.tweens[t].run(1);
                  return e ? s.resolveWith(o, [u, e]) : s.rejectWith(o, [u, e]), this;
              },
          }),
          c = u.props;
      for (O(c, u.opts.specialEasing); r < i; r++) if ((n = Tt[r].call(u, o, c, u.opts))) return n;
      return (
          ie.map(c, M, u),
          ie.isFunction(u.opts.start) && u.opts.start.call(o, u),
          ie.fx.timer(ie.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
          u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
      );
  }
  function P(o) {
      return function (e, t) {
          "string" != typeof e && ((t = e), (e = "*"));
          var n,
              r = 0,
              i = e.toLowerCase().match(be) || [];
          if (ie.isFunction(t)) for (; (n = i[r++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      };
  }
  function R(t, i, o, a) {
      function s(e) {
          var r;
          return (
              (l[e] = !0),
              ie.each(t[e] || [], function (e, t) {
                  var n = t(i, o, a);
                  return "string" != typeof n || u || l[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), s(n), !1);
              }),
              r
          );
      }
      var l = {},
          u = t === Vt;
      return s(i.dataTypes[0]) || (!l["*"] && s("*"));
  }
  function W(e, t) {
      var n,
          r,
          i = ie.ajaxSettings.flatOptions || {};
      for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
      return n && ie.extend(!0, e, n), e;
  }
  function $(e, t, n) {
      for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
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
  }
  function z(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u = {},
          c = e.dataTypes.slice();
      if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
      for (o = c.shift(); o; )
          if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = c.shift())))
              if ("*" === o) o = l;
              else if ("*" !== l && l !== o) {
                  if (!(a = u[l + " " + o] || u["* " + o]))
                      for (i in u)
                          if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                              !0 === a ? (a = u[i]) : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                          }
                  if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                          try {
                              t = a(t);
                          } catch (re) {
                              return { state: "parsererror", error: a ? re : "No conversion from " + l + " to " + o };
                          }
              }
      return { state: "success", data: t };
  }
  function I(n, e, r, i) {
      var t;
      if (ie.isArray(e))
          ie.each(e, function (e, t) {
              r || Gt.test(n) ? i(n, t) : I(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i);
          });
      else if (r || "object" !== ie.type(e)) i(n, e);
      else for (t in e) I(n + "[" + t + "]", e[t], r, i);
  }
  function X() {
      try {
          return new h.XMLHttpRequest();
      } catch (t) {}
  }
  function U() {
      try {
          return new h.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
  }
  function V(e) {
      return ie.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var J = [],
      Y = J.slice,
      G = J.concat,
      Q = J.push,
      K = J.indexOf,
      Z = {},
      ee = Z.toString,
      te = Z.hasOwnProperty,
      ne = {},
      re = "1.11.2",
      ie = function (e, t) {
          return new ie.fn.init(e, t);
      },
      oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ae = /^-ms-/,
      se = /-([\da-z])/gi,
      le = function (e, t) {
          return t.toUpperCase();
      };
  (ie.fn = ie.prototype = {
      jquery: re,
      constructor: ie,
      selector: "",
      length: 0,
      toArray: function () {
          return Y.call(this);
      },
      get: function (e) {
          return null != e ? (e < 0 ? this[e + this.length] : this[e]) : Y.call(this);
      },
      pushStack: function (e) {
          var t = ie.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
          return ie.each(this, e, t);
      },
      map: function (n) {
          return this.pushStack(
              ie.map(this, function (e, t) {
                  return n.call(e, t, e);
              })
          );
      },
      slice: function () {
          return this.pushStack(Y.apply(this, arguments));
      },
      first: function () {
          return this.eq(0);
      },
      last: function () {
          return this.eq(-1);
      },
      eq: function (e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
          return this.prevObject || this.constructor(null);
      },
      push: Q,
      sort: J.sort,
      splice: J.splice,
  }),
      (ie.extend = ie.fn.extend = function (e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s = e || {},
              l = 1,
              u = arguments.length,
              c = !1;
          for ("boolean" == typeof s && ((c = s), (s = arguments[l] || {}), l++), "object" == typeof s || ie.isFunction(s) || (s = {}), l === u && ((s = this), l--); l < u; l++)
              if (null != (o = arguments[l]))
                  for (i in o)
                      (t = s[i]),
                          s !== (r = o[i]) &&
                              (c && r && (ie.isPlainObject(r) || (n = ie.isArray(r)))
                                  ? (n ? ((n = !1), (a = t && ie.isArray(t) ? t : [])) : (a = t && ie.isPlainObject(t) ? t : {}), (s[i] = ie.extend(c, a, r)))
                                  : void 0 !== r && (s[i] = r));
          return s;
      }),
      ie.extend({
          expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
              throw new Error(e);
          },
          noop: function () {},
          isFunction: function (e) {
              return "function" === ie.type(e);
          },
          isArray:
              Array.isArray ||
              function (e) {
                  return "array" === ie.type(e);
              },
          isWindow: function (e) {
              return null != e && e == e.window;
          },
          isNumeric: function (e) {
              return !ie.isArray(e) && 0 <= e - parseFloat(e) + 1;
          },
          isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
          },
          isPlainObject: function (e) {
              var t;
              if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
              try {
                  if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1;
              } catch (J) {
                  return !1;
              }
              if (ne.ownLast) for (t in e) return te.call(e, t);
              for (t in e);
              return void 0 === t || te.call(e, t);
          },
          type: function (e) {
              return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e;
          },
          globalEval: function (e) {
              e &&
                  ie.trim(e) &&
                  (
                      h.execScript ||
                      function (e) {
                          h.eval.call(h, e);
                      }
                  )(e);
          },
          camelCase: function (e) {
              return e.replace(ae, "ms-").replace(se, le);
          },
          nodeName: function (e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          each: function (e, t, n) {
              var r = 0,
                  i = e.length,
                  o = m(e);
              if (n) {
                  if (o) for (; r < i && !1 !== t.apply(e[r], n); r++);
                  else for (r in e) if (!1 === t.apply(e[r], n)) break;
              } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
          },
          trim: function (e) {
              return null == e ? "" : (e + "").replace(oe, "");
          },
          makeArray: function (e, t) {
              var n = t || [];
              return null != e && (m(Object(e)) ? ie.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n;
          },
          inArray: function (e, t, n) {
              var r;
              if (t) {
                  if (K) return K.call(t, e, n);
                  for (r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0; n < r; n++) if (n in t && t[n] === e) return n;
              }
              return -1;
          },
          merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
              if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
              return (e.length = i), e;
          },
          grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
              return r;
          },
          map: function (e, t, n) {
              var r,
                  i = 0,
                  o = e.length,
                  a = [];
              if (m(e)) for (; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
              else for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
              return G.apply([], a);
          },
          guid: 1,
          proxy: function (e, t) {
              var n, r, i;
              return (
                  "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
                  ie.isFunction(e)
                      ? ((n = Y.call(arguments, 2)),
                        ((r = function () {
                            return e.apply(t || this, n.concat(Y.call(arguments)));
                        }).guid = e.guid = e.guid || ie.guid++),
                        r)
                      : void 0
              );
          },
          now: function () {
              return +new Date();
          },
          support: ne,
      }),
      ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
          Z["[object " + t + "]"] = t.toLowerCase();
      });
  var ue = (function (n) {
      function x(e, t, n, r) {
          var i, o, a, s, l, u, c, d, f, p;
          if (((t ? t.ownerDocument || t : R) !== H && L(t), (n = n || []), (s = (t = t || H).nodeType), "string" != typeof e || !e || (1 !== s && 9 !== s && 11 !== s))) return n;
          if (!r && _) {
              if (11 !== s && (i = ye.exec(e)))
                  if ((a = i[1])) {
                      if (9 === s) {
                          if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                          if (o.id === a) return n.push(o), n;
                      } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n;
                  } else {
                      if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                      if ((a = i[3]) && v.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n;
                  }
              if (v.qsa && (!M || !M.test(e))) {
                  if (((d = c = P), (f = t), (p = 1 !== s && e), 1 === s && "object" !== t.nodeName.toLowerCase())) {
                      for (u = E(e), (c = t.getAttribute("id")) ? (d = c.replace(xe, "\\$&")) : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--; ) u[l] = d + m(u[l]);
                      (f = (be.test(e) && h(t.parentNode)) || t), (p = u.join(","));
                  }
                  if (p)
                      try {
                          return K.apply(n, f.querySelectorAll(p)), n;
                      } catch (z) {
                      } finally {
                          c || t.removeAttribute("id");
                      }
              }
          }
          return S(e.replace(le, "$1"), t, n, r);
      }
      function e() {
          function n(e, t) {
              return r.push(e + " ") > T.cacheLength && delete n[r.shift()], (n[e + " "] = t);
          }
          var r = [];
          return n;
      }
      function l(e) {
          return (e[P] = !0), e;
      }
      function r(e) {
          var t = H.createElement("div");
          try {
              return !!e(t);
          } catch (v) {
              return !1;
          } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
      }
      function t(e, t) {
          for (var n = e.split("|"), r = e.length; r--; ) T.attrHandle[n[r]] = t;
      }
      function u(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
      }
      function i(t) {
          return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
      }
      function o(n) {
          return function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n;
          };
      }
      function a(a) {
          return l(function (o) {
              return (
                  (o = +o),
                  l(function (e, t) {
                      for (var n, r = a([], e.length, o), i = r.length; i--; ) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                  })
              );
          });
      }
      function h(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function s() {}
      function m(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
      }
      function d(a, e, t) {
          var s = e.dir,
              l = t && "parentNode" === s,
              u = $++;
          return e.first
              ? function (e, t, n) {
                    for (; (e = e[s]); ) if (1 === e.nodeType || l) return a(e, t, n);
                }
              : function (e, t, n) {
                    var r,
                        i,
                        o = [W, u];
                    if (n) {
                        for (; (e = e[s]); ) if ((1 === e.nodeType || l) && a(e, t, n)) return !0;
                    } else
                        for (; (e = e[s]); )
                            if (1 === e.nodeType || l) {
                                if ((r = (i = e[P] || (e[P] = {}))[s]) && r[0] === W && r[1] === u) return (o[2] = r[2]);
                                if (((i[s] = o)[2] = a(e, t, n))) return !0;
                            }
                };
      }
      function f(i) {
          return 1 < i.length
              ? function (e, t, n) {
                    for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                    return !0;
                }
              : i[0];
      }
      function y(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) x(e, t[r], n);
          return n;
      }
      function w(e, t, n, r, i) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
          return a;
      }
      function b(p, h, m, g, v, e) {
          return (
              g && !g[P] && (g = b(g)),
              v && !v[P] && (v = b(v, e)),
              l(function (e, t, n, r) {
                  var i,
                      o,
                      a,
                      s = [],
                      l = [],
                      u = t.length,
                      c = e || y(h || "*", n.nodeType ? [n] : n, []),
                      d = !p || (!e && h) ? c : w(c, s, p, n, r),
                      f = m ? (v || (e ? p : u || g) ? [] : t) : d;
                  if ((m && m(d, f, n, r), g)) for (i = w(f, l), g(i, [], n, r), o = i.length; o--; ) (a = i[o]) && (f[l[o]] = !(d[l[o]] = a));
                  if (e) {
                      if (v || p) {
                          if (v) {
                              for (i = [], o = f.length; o--; ) (a = f[o]) && i.push((d[o] = a));
                              v(null, (f = []), i, r);
                          }
                          for (o = f.length; o--; ) (a = f[o]) && -1 < (i = v ? ee(e, a) : s[o]) && (e[i] = !(t[i] = a));
                      }
                  } else (f = w(f === t ? f.splice(u, f.length) : f)), v ? v(null, t, f, r) : K.apply(t, f);
              })
          );
      }
      function p(e) {
          for (
              var i,
                  t,
                  n,
                  r = e.length,
                  o = T.relative[e[0].type],
                  a = o || T.relative[" "],
                  s = o ? 1 : 0,
                  l = d(
                      function (e) {
                          return e === i;
                      },
                      a,
                      !0
                  ),
                  u = d(
                      function (e) {
                          return -1 < ee(i, e);
                      },
                      a,
                      !0
                  ),
                  c = [
                      function (e, t, n) {
                          var r = (!o && (n || t !== A)) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                          return (i = null), r;
                      },
                  ];
              s < r;
              s++
          )
              if ((t = T.relative[e[s].type])) c = [d(f(c), t)];
              else {
                  if ((t = T.filter[e[s].type].apply(null, e[s].matches))[P]) {
                      for (n = ++s; n < r && !T.relative[e[n].type]; n++);
                      return b(1 < s && f(c), 1 < s && m(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(le, "$1"), t, s < n && p(e.slice(s, n)), n < r && p((e = e.slice(n))), n < r && m(e));
                  }
                  c.push(t);
              }
          return f(c);
      }
      function c(g, v) {
          var y = 0 < v.length,
              b = 0 < g.length,
              e = function (e, t, n, r, i) {
                  var o,
                      a,
                      s,
                      l = 0,
                      u = "0",
                      c = e && [],
                      d = [],
                      f = A,
                      p = e || (b && T.find.TAG("*", i)),
                      h = (W += null == f ? 1 : Math.random() || 0.1),
                      m = p.length;
                  for (i && (A = t !== H && t); u !== m && null != (o = p[u]); u++) {
                      if (b && o) {
                          for (a = 0; (s = g[a++]); )
                              if (s(o, t, n)) {
                                  r.push(o);
                                  break;
                              }
                          i && (W = h);
                      }
                      y && ((o = !s && o) && l--, e && c.push(o));
                  }
                  if (((l += u), y && u !== l)) {
                      for (a = 0; (s = v[a++]); ) s(c, d, t, n);
                      if (e) {
                          if (0 < l) for (; u--; ) c[u] || d[u] || (d[u] = G.call(r));
                          d = w(d);
                      }
                      K.apply(r, d), i && !e && 0 < d.length && 1 < l + v.length && x.uniqueSort(r);
                  }
                  return i && ((W = h), (A = f)), c;
              };
          return y ? l(e) : e;
      }
      var g,
          v,
          T,
          C,
          N,
          E,
          k,
          S,
          A,
          D,
          j,
          L,
          H,
          q,
          _,
          M,
          F,
          O,
          B,
          P = "sizzle" + 1 * new Date(),
          R = n.document,
          W = 0,
          $ = 0,
          z = e(),
          I = e(),
          X = e(),
          U = function (e, t) {
              return e === t && (j = !0), 0;
          },
          V = 1 << 31,
          J = {}.hasOwnProperty,
          Y = [],
          G = Y.pop,
          Q = Y.push,
          K = Y.push,
          Z = Y.slice,
          ee = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
          },
          te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ne = "[\\x20\\t\\r\\n\\f]",
          re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          ie = re.replace("w", "w#"),
          oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
          ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
          se = new RegExp(ne + "+", "g"),
          le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
          ue = new RegExp("^" + ne + "*," + ne + "*"),
          ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
          de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
          fe = new RegExp(ae),
          pe = new RegExp("^" + ie + "$"),
          he = {
              ID: new RegExp("^#(" + re + ")"),
              CLASS: new RegExp("^\\.(" + re + ")"),
              TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + oe),
              PSEUDO: new RegExp("^" + ae),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + te + ")$", "i"),
              needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i"),
          },
          me = /^(?:input|select|textarea|button)$/i,
          ge = /^h\d$/i,
          ve = /^[^{]+\{\s*\[native \w/,
          ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          be = /[+~]/,
          xe = /'|\\/g,
          we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
          Te = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          },
          Ce = function () {
              L();
          };
      try {
          K.apply((Y = Z.call(R.childNodes)), R.childNodes), Y[R.childNodes.length].nodeType;
      } catch (Fe) {
          K = {
              apply: Y.length
                  ? function (e, t) {
                        Q.apply(e, Z.call(t));
                    }
                  : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                    },
          };
      }
      for (g in ((v = x.support = {}),
      (N = x.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
      }),
      (L = x.setDocument = function (e) {
          var t,
              n,
              l = e ? e.ownerDocument || e : R;
          return l !== H && 9 === l.nodeType && l.documentElement
              ? ((q = (H = l).documentElement),
                (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                (_ = !N(l)),
                (v.attributes = r(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                })),
                (v.getElementsByTagName = r(function (e) {
                    return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length;
                })),
                (v.getElementsByClassName = ve.test(l.getElementsByClassName)),
                (v.getById = r(function (e) {
                    return (q.appendChild(e).id = P), !l.getElementsByName || !l.getElementsByName(P).length;
                })),
                v.getById
                    ? ((T.find.ID = function (e, t) {
                          if ("undefined" != typeof t.getElementById && _) {
                              var n = t.getElementById(e);
                              return n && n.parentNode ? [n] : [];
                          }
                      }),
                      (T.filter.ID = function (e) {
                          var t = e.replace(we, Te);
                          return function (e) {
                              return e.getAttribute("id") === t;
                          };
                      }))
                    : (delete T.find.ID,
                      (T.filter.ID = function (e) {
                          var n = e.replace(we, Te);
                          return function (e) {
                              var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                              return t && t.value === n;
                          };
                      })),
                (T.find.TAG = v.getElementsByTagName
                    ? function (e, t) {
                          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0;
                      }
                    : function (e, t) {
                          var n,
                              r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                          if ("*" !== e) return o;
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                      }),
                (T.find.CLASS =
                    v.getElementsByClassName &&
                    function (e, t) {
                        return _ ? t.getElementsByClassName(e) : void 0;
                    }),
                (F = []),
                (M = []),
                (v.qsa = ve.test(l.querySelectorAll)) &&
                    (r(function (e) {
                        (q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"),
                            e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="),
                            e.querySelectorAll(":checked").length || M.push(":checked"),
                            e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]");
                    }),
                    r(function (e) {
                        var t = l.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            M.push(",.*:");
                    })),
                (v.matchesSelector = ve.test((O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector))) &&
                    r(function (e) {
                        (v.disconnectedMatch = O.call(e, "div")), O.call(e, "[s!='']:x"), F.push("!=", ae);
                    }),
                (M = M.length && new RegExp(M.join("|"))),
                (F = F.length && new RegExp(F.join("|"))),
                (t = ve.test(q.compareDocumentPosition)),
                (B =
                    t || ve.test(q.contains)
                        ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                  r = t && t.parentNode;
                              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                          }
                        : function (e, t) {
                              if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                              return !1;
                          }),
                (U = t
                    ? function (e, t) {
                          if (e === t) return (j = !0), 0;
                          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                          return (
                              n ||
                              (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!v.sortDetached && t.compareDocumentPosition(e) === n)
                                  ? e === l || (e.ownerDocument === R && B(R, e))
                                      ? -1
                                      : t === l || (t.ownerDocument === R && B(R, t))
                                      ? 1
                                      : D
                                      ? ee(D, e) - ee(D, t)
                                      : 0
                                  : 4 & n
                                  ? -1
                                  : 1)
                          );
                      }
                    : function (e, t) {
                          if (e === t) return (j = !0), 0;
                          var n,
                              r = 0,
                              i = e.parentNode,
                              o = t.parentNode,
                              a = [e],
                              s = [t];
                          if (!i || !o) return e === l ? -1 : t === l ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                          if (i === o) return u(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r ? u(a[r], s[r]) : a[r] === R ? -1 : s[r] === R ? 1 : 0;
                      }),
                l)
              : H;
      }),
      (x.matches = function (e, t) {
          return x(e, null, null, t);
      }),
      (x.matchesSelector = function (e, t) {
          if (((e.ownerDocument || e) !== H && L(e), (t = t.replace(de, "='$1']")), !(!v.matchesSelector || !_ || (F && F.test(t)) || (M && M.test(t)))))
              try {
                  var n = O.call(e, t);
                  if (n || v.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
              } catch (C) {}
          return 0 < x(t, H, null, [e]).length;
      }),
      (x.contains = function (e, t) {
          return (e.ownerDocument || e) !== H && L(e), B(e, t);
      }),
      (x.attr = function (e, t) {
          (e.ownerDocument || e) !== H && L(e);
          var n = T.attrHandle[t.toLowerCase()],
              r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
          return void 0 !== r ? r : v.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }),
      (x.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (x.uniqueSort = function (e) {
          var t,
              n = [],
              r = 0,
              i = 0;
          if (((j = !v.detectDuplicates), (D = !v.sortStable && e.slice(0)), e.sort(U), j)) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) e.splice(n[r], 1);
          }
          return (D = null), e;
      }),
      (C = x.getText = function (e) {
          var t,
              n = "",
              r = 0,
              i = e.nodeType;
          if (i) {
              if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += C(t);
          return n;
      }),
      ((T = x.selectors = {
          cacheLength: 50,
          createPseudo: l,
          match: he,
          attrHandle: {},
          find: {},
          relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
          preFilter: {
              ATTR: function (e) {
                  return (e[1] = e[1].replace(we, Te)), (e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
              },
              CHILD: function (e) {
                  return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && x.error(e[0]),
                      e
                  );
              },
              PSEUDO: function (e) {
                  var t,
                      n = !e[6] && e[2];
                  return he.CHILD.test(e[0])
                      ? null
                      : (e[3] ? (e[2] = e[4] || e[5] || "") : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
              },
          },
          filter: {
              TAG: function (e) {
                  var t = e.replace(we, Te).toLowerCase();
                  return "*" === e
                      ? function () {
                            return !0;
                        }
                      : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
              },
              CLASS: function (e) {
                  var t = z[e + " "];
                  return (
                      t ||
                      ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                          z(e, function (e) {
                              return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                          }))
                  );
              },
              ATTR: function (n, r, i) {
                  return function (e) {
                      var t = x.attr(e, n);
                      return null == t
                          ? "!=" === r
                          : !r ||
                                ((t += ""),
                                "=" === r
                                    ? t === i
                                    : "!=" === r
                                    ? t !== i
                                    : "^=" === r
                                    ? i && 0 === t.indexOf(i)
                                    : "*=" === r
                                    ? i && -1 < t.indexOf(i)
                                    : "$=" === r
                                    ? i && t.slice(-i.length) === i
                                    : "~=" === r
                                    ? -1 < (" " + t.replace(se, " ") + " ").indexOf(i)
                                    : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                  };
              },
              CHILD: function (p, e, t, h, m) {
                  var g = "nth" !== p.slice(0, 3),
                      v = "last" !== p.slice(-4),
                      y = "of-type" === e;
                  return 1 === h && 0 === m
                      ? function (e) {
                            return !!e.parentNode;
                        }
                      : function (e, t, n) {
                            var r,
                                i,
                                o,
                                a,
                                s,
                                l,
                                u = g !== v ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = y && e.nodeName.toLowerCase(),
                                f = !n && !y;
                            if (c) {
                                if (g) {
                                    for (; u; ) {
                                        for (o = e; (o = o[u]); ) if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (((l = [v ? c.firstChild : c.lastChild]), v && f)) {
                                    for (s = (r = (i = c[P] || (c[P] = {}))[p] || [])[0] === W && r[1], a = r[0] === W && r[2], o = s && c.childNodes[s]; (o = (++s && o && o[u]) || (a = s = 0) || l.pop()); )
                                        if (1 === o.nodeType && ++a && o === e) {
                                            i[p] = [W, s, a];
                                            break;
                                        }
                                } else if (f && (r = (e[P] || (e[P] = {}))[p]) && r[0] === W) a = r[1];
                                else for (; (o = (++s && o && o[u]) || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++a || (f && ((o[P] || (o[P] = {}))[p] = [W, a]), o !== e)); );
                                return (a -= m) === h || (a % h == 0 && 0 <= a / h);
                            }
                        };
              },
              PSEUDO: function (e, o) {
                  var t,
                      a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                  return a[P]
                      ? a(o)
                      : 1 < a.length
                      ? ((t = [e, e, "", o]),
                        T.setFilters.hasOwnProperty(e.toLowerCase())
                            ? l(function (e, t) {
                                  for (var n, r = a(e, o), i = r.length; i--; ) e[(n = ee(e, r[i]))] = !(t[n] = r[i]);
                              })
                            : function (e) {
                                  return a(e, 0, t);
                              })
                      : a;
              },
          },
          pseudos: {
              not: l(function (e) {
                  var r = [],
                      i = [],
                      s = k(e.replace(le, "$1"));
                  return s[P]
                      ? l(function (e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i));
                        })
                      : function (e, t, n) {
                            return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                        };
              }),
              has: l(function (t) {
                  return function (e) {
                      return 0 < x(t, e).length;
                  };
              }),
              contains: l(function (t) {
                  return (
                      (t = t.replace(we, Te)),
                      function (e) {
                          return -1 < (e.textContent || e.innerText || C(e)).indexOf(t);
                      }
                  );
              }),
              lang: l(function (n) {
                  return (
                      pe.test(n || "") || x.error("unsupported lang: " + n),
                      (n = n.replace(we, Te).toLowerCase()),
                      function (e) {
                          var t;
                          do {
                              if ((t = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                          } while ((e = e.parentNode) && 1 === e.nodeType);
                          return !1;
                      }
                  );
              }),
              target: function (e) {
                  var t = n.location && n.location.hash;
                  return t && t.slice(1) === e.id;
              },
              root: function (e) {
                  return e === q;
              },
              focus: function (e) {
                  return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
              },
              enabled: function (e) {
                  return !1 === e.disabled;
              },
              disabled: function (e) {
                  return !0 === e.disabled;
              },
              checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
              },
              selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
              },
              parent: function (e) {
                  return !T.pseudos.empty(e);
              },
              header: function (e) {
                  return ge.test(e.nodeName);
              },
              input: function (e) {
                  return me.test(e.nodeName);
              },
              button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
              },
              first: a(function () {
                  return [0];
              }),
              last: a(function (e, t) {
                  return [t - 1];
              }),
              eq: a(function (e, t, n) {
                  return [n < 0 ? n + t : n];
              }),
              even: a(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
              }),
              odd: a(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
              }),
              lt: a(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
                  return e;
              }),
              gt: a(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
              }),
          },
      }).pseudos.nth = T.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          T.pseudos[g] = i(g);
      for (g in { submit: !0, reset: !0 }) T.pseudos[g] = o(g);
      return (
          (s.prototype = T.filters = T.pseudos),
          (T.setFilters = new s()),
          (E = x.tokenize = function (e, t) {
              var n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  l,
                  u = I[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (a = e, s = [], l = T.preFilter; a; ) {
                  for (o in ((!n || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                  (n = !1),
                  (r = ce.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(le, " ") }), (a = a.slice(n.length))),
                  T.filter))
                      !(r = he[o].exec(a)) || (l[o] && !(r = l[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                  if (!n) break;
              }
              return t ? a.length : a ? x.error(e) : I(e, s).slice(0);
          }),
          (k = x.compile = function (e, t) {
              var n,
                  r = [],
                  i = [],
                  o = X[e + " "];
              if (!o) {
                  for (t || (t = E(e)), n = t.length; n--; ) (o = p(t[n]))[P] ? r.push(o) : i.push(o);
                  (o = X(e, c(i, r))).selector = e;
              }
              return o;
          }),
          (S = x.select = function (e, t, n, r) {
              var i,
                  o,
                  a,
                  s,
                  l,
                  u = "function" == typeof e && e,
                  c = !r && E((e = u.selector || e));
              if (((n = n || []), 1 === c.length)) {
                  if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && v.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                      if (!(t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0])) return n;
                      u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                  }
                  for (i = he.needsContext.test(e) ? 0 : o.length; i-- && ((a = o[i]), !T.relative[(s = a.type)]); )
                      if ((l = T.find[s]) && (r = l(a.matches[0].replace(we, Te), (be.test(o[0].type) && h(t.parentNode)) || t))) {
                          if ((o.splice(i, 1), !(e = r.length && m(o)))) return K.apply(n, r), n;
                          break;
                      }
              }
              return (u || k(e, c))(r, t, !_, n, (be.test(e) && h(t.parentNode)) || t), n;
          }),
          (v.sortStable = P.split("").sort(U).join("") === P),
          (v.detectDuplicates = !!j),
          L(),
          (v.sortDetached = r(function (e) {
              return 1 & e.compareDocumentPosition(H.createElement("div"));
          })),
          r(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
          }) ||
              t("type|href|height|width", function (e, t, n) {
                  return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
          (v.attributes &&
              r(function (e) {
                  return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
              t("value", function (e, t, n) {
                  return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
              }),
          r(function (e) {
              return null == e.getAttribute("disabled");
          }) ||
              t(te, function (e, t, n) {
                  var r;
                  return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
              }),
          x
      );
  })(h);
  (ie.find = ue), (ie.expr = ue.selectors), (ie.expr[":"] = ie.expr.pseudos), (ie.unique = ue.uniqueSort), (ie.text = ue.getText), (ie.isXMLDoc = ue.isXML), (ie.contains = ue.contains);
  var ce = ie.expr.match.needsContext,
      de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      fe = /^.[^:#\[\.,]*$/;
  (ie.filter = function (e, t, n) {
      var r = t[0];
      return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
              ? ie.find.matchesSelector(r, e)
                  ? [r]
                  : []
              : ie.find.matches(
                    e,
                    ie.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                )
      );
  }),
      ie.fn.extend({
          find: function (e) {
              var t,
                  n = [],
                  r = this,
                  i = r.length;
              if ("string" != typeof e)
                  return this.pushStack(
                      ie(e).filter(function () {
                          for (t = 0; t < i; t++) if (ie.contains(r[t], this)) return !0;
                      })
                  );
              for (t = 0; t < i; t++) ie.find(e, r[t], n);
              return ((n = this.pushStack(1 < i ? ie.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e), n;
          },
          filter: function (e) {
              return this.pushStack(u(this, e || [], !1));
          },
          not: function (e) {
              return this.pushStack(u(this, e || [], !0));
          },
          is: function (e) {
              return !!u(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length;
          },
      });
  var pe,
      he = h.document,
      me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((ie.fn.init = function (e, t) {
      var n, r;
      if (!e) return this;
      if ("string" != typeof e)
          return e.nodeType
              ? ((this.context = this[0] = e), (this.length = 1), this)
              : ie.isFunction(e)
              ? "undefined" != typeof pe.ready
                  ? pe.ready(e)
                  : e(ie)
              : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), ie.makeArray(e, this));
      if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : me.exec(e)) || (!n[1] && t)) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
      if (n[1]) {
          if (((t = t instanceof ie ? t[0] : t), ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t)))
              for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
      }
      if ((r = he.getElementById(n[2])) && r.parentNode) {
          if (r.id !== n[2]) return pe.find(e);
          (this.length = 1), (this[0] = r);
      }
      return (this.context = he), (this.selector = e), this;
  }).prototype = ie.fn),
      (pe = ie(he));
  var ge = /^(?:parents|prev(?:Until|All))/,
      ve = { children: !0, contents: !0, next: !0, prev: !0 };
  ie.extend({
      dir: function (e, t, n) {
          for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n)); ) 1 === i.nodeType && r.push(i), (i = i[t]);
          return r;
      },
      sibling: function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
      },
  }),
      ie.fn.extend({
          has: function (e) {
              var t,
                  n = ie(e, this),
                  r = n.length;
              return this.filter(function () {
                  for (t = 0; t < r; t++) if (ie.contains(this, n[t])) return !0;
              });
          },
          closest: function (e, t) {
              for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                          o.push(n);
                          break;
                      }
              return this.pushStack(1 < o.length ? ie.unique(o) : o);
          },
          index: function (e) {
              return e ? ("string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function (e, t) {
              return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))));
          },
          addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          },
      }),
      ie.each(
          {
              parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                  return ie.dir(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                  return ie.dir(e, "parentNode", n);
              },
              next: function (e) {
                  return n(e, "nextSibling");
              },
              prev: function (e) {
                  return n(e, "previousSibling");
              },
              nextAll: function (e) {
                  return ie.dir(e, "nextSibling");
              },
              prevAll: function (e) {
                  return ie.dir(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                  return ie.dir(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                  return ie.dir(e, "previousSibling", n);
              },
              siblings: function (e) {
                  return ie.sibling((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                  return ie.sibling(e.firstChild);
              },
              contents: function (e) {
                  return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes);
              },
          },
          function (r, i) {
              ie.fn[r] = function (e, t) {
                  var n = ie.map(this, i, e);
                  return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ie.filter(t, n)), 1 < this.length && (ve[r] || (n = ie.unique(n)), ge.test(r) && (n = n.reverse())), this.pushStack(n);
              };
          }
      );
  var ye,
      be = /\S+/g,
      xe = {};
  (ie.Callbacks = function (i) {
      i = "string" == typeof i ? xe[i] || e(i) : ie.extend({}, i);
      var o,
          t,
          n,
          a,
          r,
          s,
          l = [],
          u = !i.once && [],
          c = function (e) {
              for (t = i.memory && e, n = !0, r = s || 0, s = 0, a = l.length, o = !0; l && r < a; r++)
                  if (!1 === l[r].apply(e[0], e[1]) && i.stopOnFalse) {
                      t = !1;
                      break;
                  }
              (o = !1), l && (u ? u.length && c(u.shift()) : t ? (l = []) : d.disable());
          },
          d = {
              add: function () {
                  if (l) {
                      var e = l.length;
                      !(function r(e) {
                          ie.each(e, function (e, t) {
                              var n = ie.type(t);
                              "function" === n ? (i.unique && d.has(t)) || l.push(t) : t && t.length && "string" !== n && r(t);
                          });
                      })(arguments),
                          o ? (a = l.length) : t && ((s = e), c(t));
                  }
                  return this;
              },
              remove: function () {
                  return (
                      l &&
                          ie.each(arguments, function (e, t) {
                              for (var n; -1 < (n = ie.inArray(t, l, n)); ) l.splice(n, 1), o && (n <= a && a--, n <= r && r--);
                          }),
                      this
                  );
              },
              has: function (e) {
                  return e ? -1 < ie.inArray(e, l) : !(!l || !l.length);
              },
              empty: function () {
                  return (l = []), (a = 0), this;
              },
              disable: function () {
                  return (l = u = t = void 0), this;
              },
              disabled: function () {
                  return !l;
              },
              lock: function () {
                  return (u = void 0), t || d.disable(), this;
              },
              locked: function () {
                  return !u;
              },
              fireWith: function (e, t) {
                  return !l || (n && !u) || ((t = [e, (t = t || []).slice ? t.slice() : t]), o ? u.push(t) : c(t)), this;
              },
              fire: function () {
                  return d.fireWith(this, arguments), this;
              },
              fired: function () {
                  return !!n;
              },
          };
      return d;
  }),
      ie.extend({
          Deferred: function (e) {
              var o = [
                      ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                      ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                      ["notify", "progress", ie.Callbacks("memory")],
                  ],
                  i = "pending",
                  a = {
                      state: function () {
                          return i;
                      },
                      always: function () {
                          return s.done(arguments).fail(arguments), this;
                      },
                      then: function () {
                          var i = arguments;
                          return ie
                              .Deferred(function (r) {
                                  ie.each(o, function (e, t) {
                                      var n = ie.isFunction(i[e]) && i[e];
                                      s[t[1]](function () {
                                          var e = n && n.apply(this, arguments);
                                          e && ie.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments);
                                      });
                                  }),
                                      (i = null);
                              })
                              .promise();
                      },
                      promise: function (e) {
                          return null != e ? ie.extend(e, a) : a;
                      },
                  },
                  s = {};
              return (
                  (a.pipe = a.then),
                  ie.each(o, function (e, t) {
                      var n = t[2],
                          r = t[3];
                      (a[t[1]] = n.add),
                          r &&
                              n.add(
                                  function () {
                                      i = r;
                                  },
                                  o[1 ^ e][2].disable,
                                  o[2][2].lock
                              ),
                          (s[t[0]] = function () {
                              return s[t[0] + "With"](this === s ? a : this, arguments), this;
                          }),
                          (s[t[0] + "With"] = n.fireWith);
                  }),
                  a.promise(s),
                  e && e.call(s, s),
                  s
              );
          },
          when: function (e) {
              var i,
                  t,
                  n,
                  r = 0,
                  o = Y.call(arguments),
                  a = o.length,
                  s = 1 !== a || (e && ie.isFunction(e.promise)) ? a : 0,
                  l = 1 === s ? e : ie.Deferred(),
                  u = function (t, n, r) {
                      return function (e) {
                          (n[t] = this), (r[t] = 1 < arguments.length ? Y.call(arguments) : e), r === i ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
                      };
                  };
              if (1 < a) for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && ie.isFunction(o[r].promise) ? o[r].promise().done(u(r, n, o)).fail(l.reject).progress(u(r, t, i)) : --s;
              return s || l.resolveWith(n, o), l.promise();
          },
      }),
      (ie.fn.ready = function (e) {
          return ie.ready.promise().done(e), this;
      }),
      ie.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function (e) {
              e ? ie.readyWait++ : ie.ready(!0);
          },
          ready: function (e) {
              if (!0 === e ? !--ie.readyWait : !ie.isReady) {
                  if (!he.body) return setTimeout(ie.ready);
                  ((ie.isReady = !0) !== e && 0 < --ie.readyWait) || (ye.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")));
              }
          },
      }),
      (ie.ready.promise = function (e) {
          if (!ye)
              if (((ye = ie.Deferred()), "complete" === he.readyState)) setTimeout(ie.ready);
              else if (he.addEventListener) he.addEventListener("DOMContentLoaded", i, !1), h.addEventListener("load", i, !1);
              else {
                  he.attachEvent("onreadystatechange", i), h.attachEvent("onload", i);
                  var t = !1;
                  try {
                      t = null == h.frameElement && he.documentElement;
                  } catch (Y) {}
                  t &&
                      t.doScroll &&
                      (function G() {
                          if (!ie.isReady) {
                              try {
                                  t.doScroll("left");
                              } catch (h) {
                                  return setTimeout(G, 50);
                              }
                              r(), ie.ready();
                          }
                      })();
              }
          return ye.promise(e);
      });
  var we,
      Te = "undefined";
  for (we in ie(ne)) break;
  (ne.ownLast = "0" !== we),
      (ne.inlineBlockNeedsLayout = !1),
      ie(function () {
          var e, t, n, r;
          (n = he.getElementsByTagName("body")[0]) &&
              n.style &&
              ((t = he.createElement("div")),
              ((r = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              n.appendChild(r).appendChild(t),
              typeof t.style.zoom !== Te && ((t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth), e && (n.style.zoom = 1)),
              n.removeChild(r));
      }),
      (function () {
          var e = he.createElement("div");
          if (null == ne.deleteExpando) {
              ne.deleteExpando = !0;
              try {
                  delete e.test;
              } catch (t) {
                  ne.deleteExpando = !1;
              }
          }
          e = null;
      })(),
      (ie.acceptData = function (e) {
          var t = ie.noData[(e.nodeName + " ").toLowerCase()],
              n = +e.nodeType || 1;
          return (1 === n || 9 === n) && (!t || (!0 !== t && e.getAttribute("classid") === t));
      });
  var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ne = /([A-Z])/g;
  ie.extend({
      cache: {},
      noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
      hasData: function (e) {
          return !!(e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando]) && !l(e);
      },
      data: function (e, t, n) {
          return o(e, t, n);
      },
      removeData: function (e, t) {
          return a(e, t);
      },
      _data: function (e, t, n) {
          return o(e, t, n, !0);
      },
      _removeData: function (e, t) {
          return a(e, t, !0);
      },
  }),
      ie.fn.extend({
          data: function (e, t) {
              var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
              if (void 0 !== e)
                  return "object" == typeof e
                      ? this.each(function () {
                            ie.data(this, e);
                        })
                      : 1 < arguments.length
                      ? this.each(function () {
                            ie.data(this, e, t);
                        })
                      : o
                      ? s(o, e, ie.data(o, e))
                      : void 0;
              if (this.length && ((i = ie.data(o)), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                  for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && s(o, (r = ie.camelCase(r.slice(5))), i[r]);
                  ie._data(o, "parsedAttrs", !0);
              }
              return i;
          },
          removeData: function (e) {
              return this.each(function () {
                  ie.removeData(this, e);
              });
          },
      }),
      ie.extend({
          queue: function (e, t, n) {
              var r;
              return e ? ((t = (t || "fx") + "queue"), (r = ie._data(e, t)), n && (!r || ie.isArray(n) ? (r = ie._data(e, t, ie.makeArray(n))) : r.push(n)), r || []) : void 0;
          },
          dequeue: function (e, t) {
              t = t || "fx";
              var n = ie.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = ie._queueHooks(e, t),
                  a = function () {
                      ie.dequeue(e, t);
                  };
              "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                  ie._data(e, n) ||
                  ie._data(e, n, {
                      empty: ie.Callbacks("once memory").add(function () {
                          ie._removeData(e, t + "queue"), ie._removeData(e, n);
                      }),
                  })
              );
          },
      }),
      ie.fn.extend({
          queue: function (t, n) {
              var e = 2;
              return (
                  "string" != typeof t && ((n = t), (t = "fx"), e--),
                  arguments.length < e
                      ? ie.queue(this[0], t)
                      : void 0 === n
                      ? this
                      : this.each(function () {
                            var e = ie.queue(this, t, n);
                            ie._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ie.dequeue(this, t);
                        })
              );
          },
          dequeue: function (e) {
              return this.each(function () {
                  ie.dequeue(this, e);
              });
          },
          clearQueue: function (e) {
              return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
              var n,
                  r = 1,
                  i = ie.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                      --r || i.resolveWith(o, [o]);
                  };
              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = ie._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
              return s(), i.promise(t);
          },
      });
  var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ke = ["Top", "Right", "Bottom", "Left"],
      Se = function (e, t) {
          return (e = t || e), "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e);
      },
      Ae = (ie.access = function (e, t, n, r, i, o, a) {
          var s = 0,
              l = e.length,
              u = null == n;
          if ("object" === ie.type(n)) for (s in ((i = !0), n)) ie.access(e, t, s, n[s], !0, o, a);
          else if (
              void 0 !== r &&
              ((i = !0),
              ie.isFunction(r) || (a = !0),
              u &&
                  (a
                      ? (t.call(e, r), (t = null))
                      : ((u = t),
                        (t = function (e, t, n) {
                            return u.call(ie(e), n);
                        }))),
              t)
          )
              for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
      }),
      De = /^(?:checkbox|radio)$/i;
  !(function () {
      var e = he.createElement("input"),
          t = he.createElement("div"),
          n = he.createDocumentFragment();
      if (
          ((t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (ne.leadingWhitespace = 3 === t.firstChild.nodeType),
          (ne.tbody = !t.getElementsByTagName("tbody").length),
          (ne.htmlSerialize = !!t.getElementsByTagName("link").length),
          (ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML),
          (e.type = "checkbox"),
          (e.checked = !0),
          n.appendChild(e),
          (ne.appendChecked = e.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
          n.appendChild(t),
          (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
          (ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ne.noCloneEvent = !0),
          t.attachEvent &&
              (t.attachEvent("onclick", function () {
                  ne.noCloneEvent = !1;
              }),
              t.cloneNode(!0).click()),
          null == ne.deleteExpando)
      ) {
          ne.deleteExpando = !0;
          try {
              delete t.test;
          } catch (Y) {
              ne.deleteExpando = !1;
          }
      }
  })(),
      (function () {
          var e,
              t,
              n = he.createElement("div");
          for (e in { submit: !0, change: !0, focusin: !0 }) (t = "on" + e), (ne[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), (ne[e + "Bubbles"] = !1 === n.attributes[t].expando));
          n = null;
      })();
  var je = /^(?:input|select|textarea)$/i,
      Le = /^key/,
      He = /^(?:mouse|pointer|contextmenu)|click/,
      qe = /^(?:focusinfocus|focusoutblur)$/,
      _e = /^([^.]*)(?:\.(.+)|)$/;
  (ie.event = {
      global: {},
      add: function (e, t, n, r, i) {
          var o,
              a,
              s,
              l,
              u,
              c,
              d,
              f,
              p,
              h,
              m,
              g = ie._data(e);
          if (g) {
              for (
                  n.handler && ((n = (l = n).handler), (i = l.selector)),
                      n.guid || (n.guid = ie.guid++),
                      (a = g.events) || (a = g.events = {}),
                      (c = g.handle) ||
                          ((c = g.handle = function (e) {
                              return typeof ie === Te || (e && ie.event.triggered === e.type) ? void 0 : ie.event.dispatch.apply(c.elem, arguments);
                          }).elem = e),
                      s = (t = (t || "").match(be) || [""]).length;
                  s--;

              )
                  (p = m = (o = _e.exec(t[s]) || [])[1]),
                      (h = (o[2] || "").split(".").sort()),
                      p &&
                          ((u = ie.event.special[p] || {}),
                          (p = (i ? u.delegateType : u.bindType) || p),
                          (u = ie.event.special[p] || {}),
                          (d = ie.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ie.expr.match.needsContext.test(i), namespace: h.join(".") }, l)),
                          (f = a[p]) || (((f = a[p] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, r, h, c)) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                          u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                          i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                          (ie.event.global[p] = !0));
              e = null;
          }
      },
      remove: function (e, t, n, r, i) {
          var o,
              a,
              s,
              l,
              u,
              c,
              d,
              f,
              p,
              h,
              m,
              g = ie.hasData(e) && ie._data(e);
          if (g && (c = g.events)) {
              for (u = (t = (t || "").match(be) || [""]).length; u--; )
                  if (((p = m = (s = _e.exec(t[u]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                      for (d = ie.event.special[p] || {}, f = c[(p = (r ? d.delegateType : d.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--; )
                          (a = f[o]),
                              (!i && m !== a.origType) ||
                                  (n && n.guid !== a.guid) ||
                                  (s && !s.test(a.namespace)) ||
                                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                                  (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                      l && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) || ie.removeEvent(e, p, g.handle), delete c[p]);
                  } else for (p in c) ie.event.remove(e, p + t[u], n, r, !0);
              ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"));
          }
      },
      trigger: function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              l,
              u,
              c,
              d = [n || he],
              f = te.call(e, "type") ? e.type : e,
              p = te.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
              ((a = u = n = n || he),
              3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !qe.test(f + ie.event.triggered) &&
                  (0 <= f.indexOf(".") && ((f = (p = f.split(".")).shift()), p.sort()),
                  (o = f.indexOf(":") < 0 && "on" + f),
                  ((e = e[ie.expando] ? e : new ie.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                  (e.namespace = p.join(".")),
                  (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : ie.makeArray(t, [e])),
                  (l = ie.event.special[f] || {}),
                  r || !l.trigger || !1 !== l.trigger.apply(n, t)))
          ) {
              if (!r && !l.noBubble && !ie.isWindow(n)) {
                  for (s = l.delegateType || f, qe.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), (u = a);
                  u === (n.ownerDocument || he) && d.push(u.defaultView || u.parentWindow || h);
              }
              for (c = 0; (a = d[c++]) && !e.isPropagationStopped(); )
                  (e.type = 1 < c ? s : l.bindType || f),
                      (i = (ie._data(a, "events") || {})[e.type] && ie._data(a, "handle")) && i.apply(a, t),
                      (i = o && a[o]) && i.apply && ie.acceptData(a) && ((e.result = i.apply(a, t)), !1 === e.result && e.preventDefault());
              if (((e.type = f), !r && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && ie.acceptData(n) && o && n[f] && !ie.isWindow(n))) {
                  (u = n[o]) && (n[o] = null), (ie.event.triggered = f);
                  try {
                      n[f]();
                  } catch (m) {}
                  (ie.event.triggered = void 0), u && (n[o] = u);
              }
              return e.result;
          }
      },
      dispatch: function (e) {
          e = ie.event.fix(e);
          var t,
              n,
              r,
              i,
              o,
              a = [],
              s = Y.call(arguments),
              l = (ie._data(this, "events") || {})[e.type] || [],
              u = ie.event.special[e.type] || {};
          if ((((s[0] = e).delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, e))) {
              for (a = ie.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                  for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                      (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
                          ((e.handleObj = r), (e.data = r.data), void 0 !== (n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
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
                  if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                      for (i = [], o = 0; o < s; o++) void 0 === i[(n = (r = t[o]).selector + " ")] && (i[n] = r.needsContext ? 0 <= ie(n, this).index(l) : ie.find(n, this, null, [l]).length), i[n] && i.push(r);
                      i.length && a.push({ elem: l, handlers: i });
                  }
          return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
      },
      fix: function (e) {
          if (e[ie.expando]) return e;
          var t,
              n,
              r,
              i = e.type,
              o = e,
              a = this.fixHooks[i];
          for (a || (this.fixHooks[i] = a = He.test(i) ? this.mouseHooks : Le.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--; ) e[(n = r[t])] = o[n];
          return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), a.filter ? a.filter(e, o) : e;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function (e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
          },
      },
      mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function (e, t) {
              var n,
                  r,
                  i,
                  o = t.button,
                  a = t.fromElement;
              return (
                  null == e.pageX &&
                      null != t.clientX &&
                      ((i = (r = e.target.ownerDocument || he).documentElement),
                      (n = r.body),
                      (e.pageX = t.clientX + ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) - ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
                      (e.pageY = t.clientY + ((i && i.scrollTop) || (n && n.scrollTop) || 0) - ((i && i.clientTop) || (n && n.clientTop) || 0))),
                  !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                  e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                  e
              );
          },
      },
      special: {
          load: { noBubble: !0 },
          focus: {
              trigger: function () {
                  if (this !== f() && this.focus)
                      try {
                          return this.focus(), !1;
                      } catch (h) {}
              },
              delegateType: "focusin",
          },
          blur: {
              trigger: function () {
                  return this === f() && this.blur ? (this.blur(), !1) : void 0;
              },
              delegateType: "focusout",
          },
          click: {
              trigger: function () {
                  return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
              },
              _default: function (e) {
                  return ie.nodeName(e.target, "a");
              },
          },
          beforeunload: {
              postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
          },
      },
      simulate: function (e, t, n, r) {
          var i = ie.extend(new ie.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
          r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
      },
  }),
      (ie.removeEvent = he.removeEventListener
          ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
            }
          : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === Te && (e[r] = null), e.detachEvent(r, n));
            }),
      (ie.Event = function (e, t) {
          return this instanceof ie.Event
              ? (e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? c : d)) : (this.type = e),
                t && ie.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || ie.now()),
                void (this[ie.expando] = !0))
              : new ie.Event(e, t);
      }),
      (ie.Event.prototype = {
          isDefaultPrevented: d,
          isPropagationStopped: d,
          isImmediatePropagationStopped: d,
          preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = c), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
          },
          stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = c), e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
          },
          stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = c), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
          },
      }),
      ie.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, o) {
          ie.event.special[e] = {
              delegateType: o,
              bindType: o,
              handle: function (e) {
                  var t,
                      n = this,
                      r = e.relatedTarget,
                      i = e.handleObj;
                  return (!r || (r !== n && !ie.contains(n, r))) && ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = o)), t;
              },
          };
      }),
      ne.submitBubbles ||
          (ie.event.special.submit = {
              setup: function () {
                  return (
                      !ie.nodeName(this, "form") &&
                      void ie.event.add(this, "click._submit keypress._submit", function (e) {
                          var t = e.target,
                              n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                          n &&
                              !ie._data(n, "submitBubbles") &&
                              (ie.event.add(n, "submit._submit", function (e) {
                                  e._submit_bubble = !0;
                              }),
                              ie._data(n, "submitBubbles", !0));
                      })
                  );
              },
              postDispatch: function (e) {
                  e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0));
              },
              teardown: function () {
                  return !ie.nodeName(this, "form") && void ie.event.remove(this, "._submit");
              },
          }),
      ne.changeBubbles ||
          (ie.event.special.change = {
              setup: function () {
                  return je.test(this.nodeName)
                      ? (("checkbox" === this.type || "radio" === this.type) &&
                            (ie.event.add(this, "propertychange._change", function (e) {
                                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
                            }),
                            ie.event.add(this, "click._change", function (e) {
                                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0);
                            })),
                        !1)
                      : void ie.event.add(this, "beforeactivate._change", function (e) {
                            var t = e.target;
                            je.test(t.nodeName) &&
                                !ie._data(t, "changeBubbles") &&
                                (ie.event.add(t, "change._change", function (e) {
                                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0);
                                }),
                                ie._data(t, "changeBubbles", !0));
                        });
              },
              handle: function (e) {
                  var t = e.target;
                  return this !== t || e.isSimulated || e.isTrigger || ("radio" !== t.type && "checkbox" !== t.type) ? e.handleObj.handler.apply(this, arguments) : void 0;
              },
              teardown: function () {
                  return ie.event.remove(this, "._change"), !je.test(this.nodeName);
              },
          }),
      ne.focusinBubbles ||
          ie.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
              var i = function (e) {
                  ie.event.simulate(r, e.target, ie.event.fix(e), !0);
              };
              ie.event.special[r] = {
                  setup: function () {
                      var e = this.ownerDocument || this,
                          t = ie._data(e, r);
                      t || e.addEventListener(n, i, !0), ie._data(e, r, (t || 0) + 1);
                  },
                  teardown: function () {
                      var e = this.ownerDocument || this,
                          t = ie._data(e, r) - 1;
                      t ? ie._data(e, r, t) : (e.removeEventListener(n, i, !0), ie._removeData(e, r));
                  },
              };
          }),
      ie.fn.extend({
          on: function (e, t, n, r, i) {
              var o, a;
              if ("object" == typeof e) {
                  for (o in ("string" != typeof t && ((n = n || t), (t = void 0)), e)) this.on(o, t, n, e[o], i);
                  return this;
              }
              if ((null == n && null == r ? ((r = t), (n = t = void 0)) : null == r && ("string" == typeof t ? ((r = n), (n = void 0)) : ((r = n), (n = t), (t = void 0))), !1 === r)) r = d;
              else if (!r) return this;
              return (
                  1 === i &&
                      ((a = r),
                      ((r = function (e) {
                          return ie().off(e), a.apply(this, arguments);
                      }).guid = a.guid || (a.guid = ie.guid++))),
                  this.each(function () {
                      ie.event.add(this, e, r, n, t);
                  })
              );
          },
          one: function (e, t, n, r) {
              return this.on(e, t, n, r, 1);
          },
          off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
              if ("object" != typeof e)
                  return (
                      (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
                      !1 === n && (n = d),
                      this.each(function () {
                          ie.event.remove(this, e, n, t);
                      })
                  );
              for (i in e) this.off(i, t, e[i]);
              return this;
          },
          trigger: function (e, t) {
              return this.each(function () {
                  ie.event.trigger(e, t, this);
              });
          },
          triggerHandler: function (e, t) {
              var n = this[0];
              return n ? ie.event.trigger(e, t, n, !0) : void 0;
          },
      });
  var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Fe = / jQuery\d+="(?:null|\d+)"/g,
      Oe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
      Be = /^\s+/,
      Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Re = /<([\w:]+)/,
      We = /<tbody/i,
      $e = /<|&#?\w+;/,
      ze = /<(?:script|style|link)/i,
      Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Xe = /^$|\/(?:java|ecma)script/i,
      Ue = /^true\/(.*)/,
      Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Je = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      },
      Ye = g(he).appendChild(he.createElement("div"));
  (Je.optgroup = Je.option),
      (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead),
      (Je.th = Je.td),
      ie.extend({
          clone: function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s,
                  l = ie.contains(e.ownerDocument, e);
              if (
                  (ne.html5Clone || ie.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? (o = e.cloneNode(!0)) : ((Ye.innerHTML = e.outerHTML), Ye.removeChild((o = Ye.firstChild))),
                  !((ne.noCloneEvent && ne.noCloneChecked) || (1 !== e.nodeType && 11 !== e.nodeType) || ie.isXMLDoc(e)))
              )
                  for (r = v(o), s = v(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
              if (t)
                  if (n) for (s = s || v(e), r = r || v(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                  else T(e, o);
              return 0 < (r = v(o, "script")).length && w(r, !l && v(e, "script")), (r = s = i = null), o;
          },
          buildFragment: function (e, t, n, r) {
              for (var i, o, a, s, l, u, c, d = e.length, f = g(t), p = [], h = 0; h < d; h++)
                  if ((o = e[h]) || 0 === o)
                      if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                      else if ($e.test(o)) {
                          for (s = s || f.appendChild(t.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), c = Je[l] || Je._default, s.innerHTML = c[1] + o.replace(Pe, "<$1></$2>") + c[2], i = c[0]; i--; )
                              s = s.lastChild;
                          if ((!ne.leadingWhitespace && Be.test(o) && p.push(t.createTextNode(Be.exec(o)[0])), !ne.tbody))
                              for (i = (o = "table" !== l || We.test(o) ? ("<table>" !== c[1] || We.test(o) ? 0 : s) : s.firstChild) && o.childNodes.length; i--; )
                                  ie.nodeName((u = o.childNodes[i]), "tbody") && !u.childNodes.length && o.removeChild(u);
                          for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                          s = f.lastChild;
                      } else p.push(t.createTextNode(o));
              for (s && f.removeChild(s), ne.appendChecked || ie.grep(v(p, "input"), y), h = 0; (o = p[h++]); )
                  if ((!r || -1 === ie.inArray(o, r)) && ((a = ie.contains(o.ownerDocument, o)), (s = v(f.appendChild(o), "script")), a && w(s), n)) for (i = 0; (o = s[i++]); ) Xe.test(o.type || "") && n.push(o);
              return (s = null), f;
          },
          cleanData: function (e, t) {
              for (var n, r, i, o, a = 0, s = ie.expando, l = ie.cache, u = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                  if ((t || ie.acceptData(n)) && (o = (i = n[s]) && l[i])) {
                      if (o.events) for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                      l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : (n[s] = null), J.push(i));
                  }
          },
      }),
      ie.fn.extend({
          text: function (e) {
              return Ae(
                  this,
                  function (e) {
                      return void 0 === e ? ie.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || he).createTextNode(e));
                  },
                  null,
                  e,
                  arguments.length
              );
          },
          append: function () {
              return this.domManip(arguments, function (e) {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || p(this, e).appendChild(e);
              });
          },
          prepend: function () {
              return this.domManip(arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var t = p(this, e);
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
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
          },
          remove: function (e, t) {
              for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                  t || 1 !== n.nodeType || ie.cleanData(v(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(v(n, "script")), n.parentNode.removeChild(n));
              return this;
          },
          empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) {
                  for (1 === e.nodeType && ie.cleanData(v(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                  e.options && ie.nodeName(e, "select") && (e.options.length = 0);
              }
              return this;
          },
          clone: function (e, t) {
              return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                      return ie.clone(this, e, t);
                  })
              );
          },
          html: function (e) {
              return Ae(
                  this,
                  function (e) {
                      var t = this[0] || {},
                          n = 0,
                          r = this.length;
                      if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Fe, "") : void 0;
                      if (!("string" != typeof e || ze.test(e) || (!ne.htmlSerialize && Oe.test(e)) || (!ne.leadingWhitespace && Be.test(e)) || Je[(Re.exec(e) || ["", ""])[1].toLowerCase()])) {
                          e = e.replace(Pe, "<$1></$2>");
                          try {
                              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ie.cleanData(v(t, !1)), (t.innerHTML = e));
                              t = 0;
                          } catch (G) {}
                      }
                      t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
              );
          },
          replaceWith: function (e) {
              var t = e;
              return (
                  this.domManip(arguments, function (e) {
                      (t = this.parentNode), ie.cleanData(v(this)), t && t.replaceChild(e, this);
                  }),
                  t && (t.length || t.nodeType) ? this : this.remove()
              );
          },
          detach: function (e) {
              return this.remove(e, !0);
          },
          domManip: function (n, r) {
              n = G.apply([], n);
              var e,
                  t,
                  i,
                  o,
                  a,
                  s,
                  l = 0,
                  u = this.length,
                  c = this,
                  d = u - 1,
                  f = n[0],
                  p = ie.isFunction(f);
              if (p || (1 < u && "string" == typeof f && !ne.checkClone && Ie.test(f)))
                  return this.each(function (e) {
                      var t = c.eq(e);
                      p && (n[0] = f.call(this, e, t.html())), t.domManip(n, r);
                  });
              if (u && ((e = (s = ie.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild), 1 === s.childNodes.length && (s = e), e)) {
                  for (i = (o = ie.map(v(s, "script"), b)).length; l < u; l++) (t = s), l !== d && ((t = ie.clone(t, !0, !0)), i && ie.merge(o, v(t, "script"))), r.call(this[l], t, l);
                  if (i)
                      for (a = o[o.length - 1].ownerDocument, ie.map(o, x), l = 0; l < i; l++)
                          (t = o[l]), Xe.test(t.type || "") && !ie._data(t, "globalEval") && ie.contains(a, t) && (t.src ? ie._evalUrl && ie._evalUrl(t.src) : ie.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ve, "")));
                  s = e = null;
              }
              return this;
          },
      }),
      ie.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
          ie.fn[e] = function (e) {
              for (var t, n = 0, r = [], i = ie(e), o = i.length - 1; n <= o; n++) (t = n === o ? this : this.clone(!0)), ie(i[n])[a](t), Q.apply(r, t.get());
              return this.pushStack(r);
          };
      });
  var Ge,
      Qe,
      Ke = {};
  ne.shrinkWrapBlocks = function () {
      return null != Qe
          ? Qe
          : ((Qe = !1),
            (t = he.getElementsByTagName("body")[0]) && t.style
                ? ((e = he.createElement("div")),
                  ((n = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                  t.appendChild(n).appendChild(e),
                  typeof e.style.zoom !== Te &&
                      ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                      (e.appendChild(he.createElement("div")).style.width = "5px"),
                      (Qe = 3 !== e.offsetWidth)),
                  t.removeChild(n),
                  Qe)
                : void 0);
      var e, t, n;
  };
  var Ze,
      et,
      tt = /^margin/,
      nt = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
      rt = /^(top|right|bottom|left)$/;
  h.getComputedStyle
      ? ((Ze = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null);
        }),
        (et = function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.style;
            return (
                (a = (n = n || Ze(e)) ? n.getPropertyValue(t) || n[t] : void 0),
                n &&
                    ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)),
                    nt.test(a) && tt.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
                void 0 === a ? a : a + ""
            );
        }))
      : he.documentElement.currentStyle &&
        ((Ze = function (e) {
            return e.currentStyle;
        }),
        (et = function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.style;
            return (
                null == (a = (n = n || Ze(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]),
                nt.test(a) && !rt.test(t) && ((r = s.left), (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), (s.left = "fontSize" === t ? "1em" : a), (a = s.pixelLeft + "px"), (s.left = r), o && (i.left = o)),
                void 0 === a ? a : a + "" || "auto"
            );
        })),
      (function () {
          function e() {
              var e, t, n, r;
              (t = he.getElementsByTagName("body")[0]) &&
                  t.style &&
                  ((e = he.createElement("div")),
                  ((n = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                  t.appendChild(n).appendChild(e),
                  (e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                  (i = o = !1),
                  (s = !0),
                  h.getComputedStyle &&
                      ((i = "1%" !== (h.getComputedStyle(e, null) || {}).top),
                      (o = "4px" === (h.getComputedStyle(e, null) || { width: "4px" }).width),
                      ((r = e.appendChild(he.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                      (r.style.marginRight = r.style.width = "0"),
                      (e.style.width = "1px"),
                      (s = !parseFloat((h.getComputedStyle(r, null) || {}).marginRight)),
                      e.removeChild(r)),
                  (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                  ((r = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                  (a = 0 === r[0].offsetHeight) && ((r[0].style.display = ""), (r[1].style.display = "none"), (a = 0 === r[0].offsetHeight)),
                  t.removeChild(n));
          }
          var t, n, r, i, o, a, s;
          ((t = he.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
              (n = (r = t.getElementsByTagName("a")[0]) && r.style) &&
                  ((n.cssText = "float:left;opacity:.5"),
                  (ne.opacity = "0.5" === n.opacity),
                  (ne.cssFloat = !!n.cssFloat),
                  (t.style.backgroundClip = "content-box"),
                  (t.cloneNode(!0).style.backgroundClip = ""),
                  (ne.clearCloneStyle = "content-box" === t.style.backgroundClip),
                  (ne.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing),
                  ie.extend(ne, {
                      reliableHiddenOffsets: function () {
                          return null == a && e(), a;
                      },
                      boxSizingReliable: function () {
                          return null == o && e(), o;
                      },
                      pixelPosition: function () {
                          return null == i && e(), i;
                      },
                      reliableMarginRight: function () {
                          return null == s && e(), s;
                      },
                  }));
      })(),
      (ie.swap = function (e, t, n, r) {
          var i,
              o,
              a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
          return i;
      });
  var it = /alpha\([^)]*\)/i,
      ot = /opacity\s*=\s*([^)]*)/,
      at = /^(none|table(?!-c[ea]).+)/,
      st = new RegExp("^(" + Ee + ")(.*)$", "i"),
      lt = new RegExp("^([+-])=(" + Ee + ")", "i"),
      ut = { position: "absolute", visibility: "hidden", display: "block" },
      ct = { letterSpacing: "0", fontWeight: "400" },
      dt = ["Webkit", "O", "Moz", "ms"];
  ie.extend({
      cssHooks: {
          opacity: {
              get: function (e, t) {
                  if (t) {
                      var n = et(e, "opacity");
                      return "" === n ? "1" : n;
                  }
              },
          },
      },
      cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: { float: ne.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                  o,
                  a,
                  s = ie.camelCase(t),
                  l = e.style;
              if (((t = ie.cssProps[s] || (ie.cssProps[s] = S(l, s))), (a = ie.cssHooks[t] || ie.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              if (
                  ("string" === (o = typeof n) && (i = lt.exec(n)) && ((n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t))), (o = "number")),
                  null != n && n == n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
              )
                  try {
                      l[t] = n;
                  } catch (te) {}
          }
      },
      css: function (e, t, n, r) {
          var i,
              o,
              a,
              s = ie.camelCase(t);
          return (
              (t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s))),
              (a = ie.cssHooks[t] || ie.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
              void 0 === o && (o = et(e, t, r)),
              "normal" === o && t in ct && (o = ct[t]),
              "" === n || n ? ((i = parseFloat(o)), !0 === n || ie.isNumeric(i) ? i || 0 : o) : o
          );
      },
  }),
      ie.each(["height", "width"], function (e, i) {
          ie.cssHooks[i] = {
              get: function (e, t, n) {
                  return t
                      ? at.test(ie.css(e, "display")) && 0 === e.offsetWidth
                          ? ie.swap(e, ut, function () {
                                return L(e, i, n);
                            })
                          : L(e, i, n)
                      : void 0;
              },
              set: function (e, t, n) {
                  var r = n && Ze(e);
                  return D(e, t, n ? j(e, i, n, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, r), r) : 0);
              },
          };
      }),
      ne.opacity ||
          (ie.cssHooks.opacity = {
              get: function (e, t) {
                  return ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
              },
              set: function (e, t) {
                  var n = e.style,
                      r = e.currentStyle,
                      i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                      o = (r && r.filter) || n.filter || "";
                  (((n.zoom = 1) <= t || "" === t) && "" === ie.trim(o.replace(it, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || (r && !r.filter))) || (n.filter = it.test(o) ? o.replace(it, i) : o + " " + i);
              },
          }),
      (ie.cssHooks.marginRight = k(ne.reliableMarginRight, function (e, t) {
          return t ? ie.swap(e, { display: "inline-block" }, et, [e, "marginRight"]) : void 0;
      })),
      ie.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
          (ie.cssHooks[i + o] = {
              expand: function (e) {
                  for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ke[t] + o] = r[t] || r[t - 2] || r[0];
                  return n;
              },
          }),
              tt.test(i) || (ie.cssHooks[i + o].set = D);
      }),
      ie.fn.extend({
          css: function (e, t) {
              return Ae(
                  this,
                  function (e, t, n) {
                      var r,
                          i,
                          o = {},
                          a = 0;
                      if (ie.isArray(t)) {
                          for (r = Ze(e), i = t.length; a < i; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                          return o;
                      }
                      return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t);
                  },
                  e,
                  t,
                  1 < arguments.length
              );
          },
          show: function () {
              return A(this, !0);
          },
          hide: function () {
              return A(this);
          },
          toggle: function (e) {
              return "boolean" == typeof e
                  ? e
                      ? this.show()
                      : this.hide()
                  : this.each(function () {
                        Se(this) ? ie(this).show() : ie(this).hide();
                    });
          },
      }),
      ((ie.Tween = H).prototype = {
          constructor: H,
          init: function (e, t, n, r, i, o) {
              (this.elem = e), (this.prop = n), (this.easing = i || "swing"), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (ie.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
              var e = H.propHooks[this.prop];
              return e && e.get ? e.get(this) : H.propHooks._default.get(this);
          },
          run: function (e) {
              var t,
                  n = H.propHooks[this.prop];
              return (
                  (this.pos = t = this.options.duration ? ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : H.propHooks._default.set(this),
                  this
              );
          },
      }),
      (H.prototype.init.prototype = H.prototype),
      (H.propHooks = {
          _default: {
              get: function (e) {
                  var t;
                  return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop]) ? ((t = ie.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0) : e.elem[e.prop];
              },
              set: function (e) {
                  ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : (e.elem[e.prop] = e.now);
              },
          },
      }),
      (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
          set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
      }),
      (ie.easing = {
          linear: function (e) {
              return e;
          },
          swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
          },
      }),
      (ie.fx = H.prototype.init),
      (ie.fx.step = {});
  var ft,
      pt,
      ht,
      mt,
      gt,
      vt,
      yt,
      bt = /^(?:toggle|show|hide)$/,
      xt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
      wt = /queueHooks$/,
      Tt = [F],
      Ct = {
          "*": [
              function (e, t) {
                  var n = this.createTween(e, t),
                      r = n.cur(),
                      i = xt.exec(t),
                      o = (i && i[3]) || (ie.cssNumber[e] ? "" : "px"),
                      a = (ie.cssNumber[e] || ("px" !== o && +r)) && xt.exec(ie.css(n.elem, e)),
                      s = 1,
                      l = 20;
                  if (a && a[3] !== o) for (o = o || a[3], i = i || [], a = +r || 1; (a /= s = s || ".5"), ie.style(n.elem, e, a + o), s !== (s = n.cur() / r) && 1 !== s && --l; );
                  return i && ((a = n.start = +a || +r || 0), (n.unit = o), (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])), n;
              },
          ],
      };
  (ie.Animation = ie.extend(B, {
      tweener: function (e, t) {
          ie.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
          for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (Ct[n] = Ct[n] || []), Ct[n].unshift(t);
      },
      prefilter: function (e, t) {
          t ? Tt.unshift(e) : Tt.push(e);
      },
  })),
      (ie.speed = function (e, t, n) {
          var r = e && "object" == typeof e ? ie.extend({}, e) : { complete: n || (!n && t) || (ie.isFunction(e) && e), duration: e, easing: (n && t) || (t && !ie.isFunction(t) && t) };
          return (
              (r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default),
              (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                  ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue);
              }),
              r
          );
      }),
      ie.fn.extend({
          fadeTo: function (e, t, n, r) {
              return this.filter(Se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (t, e, n, r) {
              var i = ie.isEmptyObject(t),
                  o = ie.speed(e, n, r),
                  a = function () {
                      var e = B(this, ie.extend({}, t), o);
                      (i || ie._data(this, "finish")) && e.stop(!0);
                  };
              return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
          },
          stop: function (i, e, o) {
              var a = function (e) {
                  var t = e.stop;
                  delete e.stop, t(o);
              };
              return (
                  "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                  e && !1 !== i && this.queue(i || "fx", []),
                  this.each(function () {
                      var e = !0,
                          t = null != i && i + "queueHooks",
                          n = ie.timers,
                          r = ie._data(this);
                      if (t) r[t] && r[t].stop && a(r[t]);
                      else for (t in r) r[t] && r[t].stop && wt.test(t) && a(r[t]);
                      for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                      (e || !o) && ie.dequeue(this, i);
                  })
              );
          },
          finish: function (a) {
              return (
                  !1 !== a && (a = a || "fx"),
                  this.each(function () {
                      var e,
                          t = ie._data(this),
                          n = t[a + "queue"],
                          r = t[a + "queueHooks"],
                          i = ie.timers,
                          o = n ? n.length : 0;
                      for (t.finish = !0, ie.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                      for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                      delete t.finish;
                  })
              );
          },
      }),
      ie.each(["toggle", "show", "hide"], function (e, r) {
          var i = ie.fn[r];
          ie.fn[r] = function (e, t, n) {
              return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(_(r, !0), e, t, n);
          };
      }),
      ie.each({ slideDown: _("show"), slideUp: _("hide"), slideToggle: _("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
          ie.fn[e] = function (e, t, n) {
              return this.animate(r, e, t, n);
          };
      }),
      (ie.timers = []),
      (ie.fx.tick = function () {
          var e,
              t = ie.timers,
              n = 0;
          for (ft = ie.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
          t.length || ie.fx.stop(), (ft = void 0);
      }),
      (ie.fx.timer = function (e) {
          ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop();
      }),
      (ie.fx.interval = 13),
      (ie.fx.start = function () {
          pt || (pt = setInterval(ie.fx.tick, ie.fx.interval));
      }),
      (ie.fx.stop = function () {
          clearInterval(pt), (pt = null);
      }),
      (ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (ie.fn.delay = function (r, e) {
          return (
              (r = (ie.fx && ie.fx.speeds[r]) || r),
              (e = e || "fx"),
              this.queue(e, function (e, t) {
                  var n = setTimeout(e, r);
                  t.stop = function () {
                      clearTimeout(n);
                  };
              })
          );
      }),
      (mt = he.createElement("div")).setAttribute("className", "t"),
      (mt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (vt = mt.getElementsByTagName("a")[0]),
      (yt = (gt = he.createElement("select")).appendChild(he.createElement("option"))),
      (ht = mt.getElementsByTagName("input")[0]),
      (vt.style.cssText = "top:1px"),
      (ne.getSetAttribute = "t" !== mt.className),
      (ne.style = /top/.test(vt.getAttribute("style"))),
      (ne.hrefNormalized = "/a" === vt.getAttribute("href")),
      (ne.checkOn = !!ht.value),
      (ne.optSelected = yt.selected),
      (ne.enctype = !!he.createElement("form").enctype),
      (gt.disabled = !0),
      (ne.optDisabled = !yt.disabled),
      (ht = he.createElement("input")).setAttribute("value", ""),
      (ne.input = "" === ht.getAttribute("value")),
      (ht.value = "t"),
      ht.setAttribute("type", "radio"),
      (ne.radioValue = "t" === ht.value);
  var Nt = /\r/g;
  ie.fn.extend({
      val: function (n) {
          var r,
              e,
              i,
              t = this[0];
          return arguments.length
              ? ((i = ie.isFunction(n)),
                this.each(function (e) {
                    var t;
                    1 === this.nodeType &&
                        (null == (t = i ? n.call(this, e, ie(this).val()) : n)
                            ? (t = "")
                            : "number" == typeof t
                            ? (t += "")
                            : ie.isArray(t) &&
                              (t = ie.map(t, function (e) {
                                  return null == e ? "" : e + "";
                              })),
                        ((r = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                }))
              : t
              ? (r = ie.valHooks[t.type] || ie.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
                  ? e
                  : "string" == typeof (e = t.value)
                  ? e.replace(Nt, "")
                  : null == e
                  ? ""
                  : e
              : void 0;
      },
  }),
      ie.extend({
          valHooks: {
              option: {
                  get: function (e) {
                      var t = ie.find.attr(e, "value");
                      return null != t ? t : ie.trim(ie.text(e));
                  },
              },
              select: {
                  get: function (e) {
                      for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)
                          if (!((!(n = r[l]).selected && l !== i) || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || (n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup")))) {
                              if (((t = ie(n).val()), o)) return t;
                              a.push(t);
                          }
                      return a;
                  },
                  set: function (e, t) {
                      for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--; )
                          if (((r = i[a]), 0 <= ie.inArray(ie.valHooks.option.get(r), o)))
                              try {
                                  r.selected = n = !0;
                              } catch (Z) {
                                  r.scrollHeight;
                              }
                          else r.selected = !1;
                      return n || (e.selectedIndex = -1), i;
                  },
              },
          },
      }),
      ie.each(["radio", "checkbox"], function () {
          (ie.valHooks[this] = {
              set: function (e, t) {
                  return ie.isArray(t) ? (e.checked = 0 <= ie.inArray(ie(e).val(), t)) : void 0;
              },
          }),
              ne.checkOn ||
                  (ie.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                  });
      });
  var Et,
      kt,
      St = ie.expr.attrHandle,
      At = /^(?:checked|selected)$/i,
      Dt = ne.getSetAttribute,
      jt = ne.input;
  ie.fn.extend({
      attr: function (e, t) {
          return Ae(this, ie.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
          return this.each(function () {
              ie.removeAttr(this, e);
          });
      },
  }),
      ie.extend({
          attr: function (e, t, n) {
              var r,
                  i,
                  o = e.nodeType;
              if (e && 3 !== o && 8 !== o && 2 !== o)
                  return typeof e.getAttribute === Te
                      ? ie.prop(e, t, n)
                      : ((1 === o && ie.isXMLDoc(e)) || ((t = t.toLowerCase()), (r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? kt : Et))),
                        void 0 === n
                            ? r && "get" in r && null !== (i = r.get(e, t))
                                ? i
                                : null == (i = ie.find.attr(e, t))
                                ? void 0
                                : i
                            : null !== n
                            ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                ? i
                                : (e.setAttribute(t, n + ""), n)
                            : void ie.removeAttr(e, t));
          },
          removeAttr: function (e, t) {
              var n,
                  r,
                  i = 0,
                  o = t && t.match(be);
              if (o && 1 === e.nodeType)
                  for (; (n = o[i++]); ) (r = ie.propFix[n] || n), ie.expr.match.bool.test(n) ? ((jt && Dt) || !At.test(n) ? (e[r] = !1) : (e[ie.camelCase("default-" + n)] = e[r] = !1)) : ie.attr(e, n, ""), e.removeAttribute(Dt ? n : r);
          },
          attrHooks: {
              type: {
                  set: function (e, t) {
                      if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                          var n = e.value;
                          return e.setAttribute("type", t), n && (e.value = n), t;
                      }
                  },
              },
          },
      }),
      (kt = {
          set: function (e, t, n) {
              return !1 === t ? ie.removeAttr(e, n) : (jt && Dt) || !At.test(n) ? e.setAttribute((!Dt && ie.propFix[n]) || n, n) : (e[ie.camelCase("default-" + n)] = e[n] = !0), n;
          },
      }),
      ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var o = St[t] || ie.find.attr;
          St[t] =
              (jt && Dt) || !At.test(t)
                  ? function (e, t, n) {
                        var r, i;
                        return n || ((i = St[t]), (St[t] = r), (r = null != o(e, t, n) ? t.toLowerCase() : null), (St[t] = i)), r;
                    }
                  : function (e, t, n) {
                        return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null;
                    };
      }),
      (jt && Dt) ||
          (ie.attrHooks.value = {
              set: function (e, t, n) {
                  return ie.nodeName(e, "input") ? void (e.defaultValue = t) : Et && Et.set(e, t, n);
              },
          }),
      Dt ||
          ((Et = {
              set: function (e, t, n) {
                  var r = e.getAttributeNode(n);
                  return r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))), (r.value = t += ""), "value" === n || t === e.getAttribute(n) ? t : void 0;
              },
          }),
          (St.id = St.name = St.coords = function (e, t, n) {
              var r;
              return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
          }),
          (ie.valHooks.button = {
              get: function (e, t) {
                  var n = e.getAttributeNode(t);
                  return n && n.specified ? n.value : void 0;
              },
              set: Et.set,
          }),
          (ie.attrHooks.contenteditable = {
              set: function (e, t, n) {
                  Et.set(e, "" !== t && t, n);
              },
          }),
          ie.each(["width", "height"], function (e, n) {
              ie.attrHooks[n] = {
                  set: function (e, t) {
                      return "" === t ? (e.setAttribute(n, "auto"), t) : void 0;
                  },
              };
          })),
      ne.style ||
          (ie.attrHooks.style = {
              get: function (e) {
                  return e.style.cssText || void 0;
              },
              set: function (e, t) {
                  return (e.style.cssText = t + "");
              },
          });
  var Lt = /^(?:input|select|textarea|button|object)$/i,
      Ht = /^(?:a|area)$/i;
  ie.fn.extend({
      prop: function (e, t) {
          return Ae(this, ie.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
          return (
              (e = ie.propFix[e] || e),
              this.each(function () {
                  try {
                      (this[e] = void 0), delete this[e];
                  } catch (t) {}
              })
          );
      },
  }),
      ie.extend({
          propFix: { for: "htmlFor", class: "className" },
          prop: function (e, t, n) {
              var r,
                  i,
                  o = e.nodeType;
              if (e && 3 !== o && 8 !== o && 2 !== o)
                  return (
                      (1 !== o || !ie.isXMLDoc(e)) && ((t = ie.propFix[t] || t), (i = ie.propHooks[t])),
                      void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                  );
          },
          propHooks: {
              tabIndex: {
                  get: function (e) {
                      var t = ie.find.attr(e, "tabindex");
                      return t ? parseInt(t, 10) : Lt.test(e.nodeName) || (Ht.test(e.nodeName) && e.href) ? 0 : -1;
                  },
              },
          },
      }),
      ne.hrefNormalized ||
          ie.each(["href", "src"], function (e, t) {
              ie.propHooks[t] = {
                  get: function (e) {
                      return e.getAttribute(t, 4);
                  },
              };
          }),
      ne.optSelected ||
          (ie.propHooks.selected = {
              get: function (e) {
                  var t = e.parentNode;
                  return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
              },
          }),
      ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          ie.propFix[this.toLowerCase()] = this;
      }),
      ne.enctype || (ie.propFix.enctype = "encoding");
  var qt = /[\t\r\n\f]/g;
  ie.fn.extend({
      addClass: function (t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              s = 0,
              l = this.length,
              u = "string" == typeof t && t;
          if (ie.isFunction(t))
              return this.each(function (e) {
                  ie(this).addClass(t.call(this, e, this.className));
              });
          if (u)
              for (e = (t || "").match(be) || []; s < l; s++)
                  if ((r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(qt, " ") : " "))) {
                      for (o = 0; (i = e[o++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      (a = ie.trim(r)), n.className !== a && (n.className = a);
                  }
          return this;
      },
      removeClass: function (t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              s = 0,
              l = this.length,
              u = 0 === arguments.length || ("string" == typeof t && t);
          if (ie.isFunction(t))
              return this.each(function (e) {
                  ie(this).removeClass(t.call(this, e, this.className));
              });
          if (u)
              for (e = (t || "").match(be) || []; s < l; s++)
                  if ((r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(qt, " ") : ""))) {
                      for (o = 0; (i = e[o++]); ) for (; 0 <= r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
                      (a = t ? ie.trim(r) : ""), n.className !== a && (n.className = a);
                  }
          return this;
      },
      toggleClass: function (i, t) {
          var o = typeof i;
          return "boolean" == typeof t && "string" === o
              ? t
                  ? this.addClass(i)
                  : this.removeClass(i)
              : this.each(
                    ie.isFunction(i)
                        ? function (e) {
                              ie(this).toggleClass(i.call(this, e, this.className, t), t);
                          }
                        : function () {
                              if ("string" === o) for (var e, t = 0, n = ie(this), r = i.match(be) || []; (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                              else (o === Te || "boolean" === o) && (this.className && ie._data(this, "__className__", this.className), (this.className = this.className || !1 === i ? "" : ie._data(this, "__className__") || ""));
                          }
                );
      },
      hasClass: function (e) {
          for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(qt, " ").indexOf(t)) return !0;
          return !1;
      },
  }),
      ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
          e,
          n
      ) {
          ie.fn[n] = function (e, t) {
              return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
          };
      }),
      ie.fn.extend({
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
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
      });
  var _t = ie.now(),
      Mt = /\?/,
      Ft = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (ie.parseJSON = function (e) {
      if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
      var i,
          o = null,
          t = ie.trim(e + "");
      return t &&
          !ie.trim(
              t.replace(Ft, function (e, t, n, r) {
                  return i && t && (o = 0), 0 === o ? e : ((i = n || t), (o += !r - !n), "");
              })
          )
          ? Function("return " + t)()
          : ie.error("Invalid JSON: " + e);
  }),
      (ie.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
              h.DOMParser ? (t = new DOMParser().parseFromString(e, "text/xml")) : (((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), t.loadXML(e));
          } catch (G) {
              t = void 0;
          }
          return (t && t.documentElement && !t.getElementsByTagName("parsererror").length) || ie.error("Invalid XML: " + e), t;
      });
  var Ot,
      Bt,
      Pt = /#.*$/,
      Rt = /([?&])_=[^&]*/,
      Wt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      $t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      zt = /^(?:GET|HEAD)$/,
      It = /^\/\//,
      Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ut = {},
      Vt = {},
      Jt = "*/".concat("*");
  try {
      Bt = location.href;
  } catch (cn) {
      ((Bt = he.createElement("a")).href = ""), (Bt = Bt.href);
  }
  (Ot = Xt.exec(Bt.toLowerCase()) || []),
      ie.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
              url: Bt,
              type: "GET",
              isLocal: $t.test(Ot[1]),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: { "*": Jt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
              contents: { xml: /xml/, html: /html/, json: /json/ },
              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
              converters: { "* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML },
              flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
              return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e);
          },
          ajaxPrefilter: P(Ut),
          ajaxTransport: P(Vt),
          ajax: function (e, t) {
              function n(e, t, n, r) {
                  var i,
                      o,
                      a,
                      s,
                      l,
                      u = t;
                  2 !== w &&
                      ((w = 2),
                      f && clearTimeout(f),
                      (h = void 0),
                      (d = r || ""),
                      (T.readyState = 0 < e ? 4 : 0),
                      (i = (200 <= e && e < 300) || 304 === e),
                      n && (s = $(m, T, n)),
                      (s = z(m, s, T, i)),
                      i
                          ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (ie.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (ie.etag[c] = l)),
                            204 === e || "HEAD" === m.type ? (u = "nocontent") : 304 === e ? (u = "notmodified") : ((u = s.state), (o = s.data), (i = !(a = s.error))))
                          : ((a = u), (e || !u) && ((u = "error"), e < 0 && (e = 0))),
                      (T.status = e),
                      (T.statusText = (t || u) + ""),
                      i ? y.resolveWith(g, [o, u, T]) : y.rejectWith(g, [T, u, a]),
                      T.statusCode(x),
                      (x = void 0),
                      p && v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]),
                      b.fireWith(g, [T, u]),
                      p && (v.trigger("ajaxComplete", [T, m]), --ie.active || ie.event.trigger("ajaxStop")));
              }
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                  i,
                  c,
                  d,
                  f,
                  p,
                  h,
                  o,
                  m = ie.ajaxSetup({}, t),
                  g = m.context || m,
                  v = m.context && (g.nodeType || g.jquery) ? ie(g) : ie.event,
                  y = ie.Deferred(),
                  b = ie.Callbacks("once memory"),
                  x = m.statusCode || {},
                  a = {},
                  s = {},
                  w = 0,
                  l = "canceled",
                  T = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                          var t;
                          if (2 === w) {
                              if (!o) for (o = {}; (t = Wt.exec(d)); ) o[t[1].toLowerCase()] = t[2];
                              t = o[e.toLowerCase()];
                          }
                          return null == t ? null : t;
                      },
                      getAllResponseHeaders: function () {
                          return 2 === w ? d : null;
                      },
                      setRequestHeader: function (e, t) {
                          var n = e.toLowerCase();
                          return w || ((e = s[n] = s[n] || e), (a[e] = t)), this;
                      },
                      overrideMimeType: function (e) {
                          return w || (m.mimeType = e), this;
                      },
                      statusCode: function (e) {
                          var t;
                          if (e)
                              if (w < 2) for (t in e) x[t] = [x[t], e[t]];
                              else T.always(e[T.status]);
                          return this;
                      },
                      abort: function (e) {
                          var t = e || l;
                          return h && h.abort(t), n(0, t), this;
                      },
                  };
              if (
                  ((y.promise(T).complete = b.add),
                  (T.success = T.done),
                  (T.error = T.fail),
                  (m.url = ((e || m.url || Bt) + "").replace(Pt, "").replace(It, Ot[1] + "//")),
                  (m.type = t.method || t.type || m.method || m.type),
                  (m.dataTypes = ie
                      .trim(m.dataType || "*")
                      .toLowerCase()
                      .match(be) || [""]),
                  null == m.crossDomain &&
                      ((r = Xt.exec(m.url.toLowerCase())), (m.crossDomain = !(!r || (r[1] === Ot[1] && r[2] === Ot[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ot[3] || ("http:" === Ot[1] ? "80" : "443")))))),
                  m.data && m.processData && "string" != typeof m.data && (m.data = ie.param(m.data, m.traditional)),
                  R(Ut, m, t, T),
                  2 === w)
              )
                  return T;
              for (i in ((p = ie.event && m.global) && 0 == ie.active++ && ie.event.trigger("ajaxStart"),
              (m.type = m.type.toUpperCase()),
              (m.hasContent = !zt.test(m.type)),
              (c = m.url),
              m.hasContent || (m.data && ((c = m.url += (Mt.test(c) ? "&" : "?") + m.data), delete m.data), !1 === m.cache && (m.url = Rt.test(c) ? c.replace(Rt, "$1_=" + _t++) : c + (Mt.test(c) ? "&" : "?") + "_=" + _t++)),
              m.ifModified && (ie.lastModified[c] && T.setRequestHeader("If-Modified-Since", ie.lastModified[c]), ie.etag[c] && T.setRequestHeader("If-None-Match", ie.etag[c])),
              ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) && T.setRequestHeader("Content-Type", m.contentType),
              T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : m.accepts["*"]),
              m.headers))
                  T.setRequestHeader(i, m.headers[i]);
              if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === w)) return T.abort();
              for (i in ((l = "abort"), { success: 1, error: 1, complete: 1 })) T[i](m[i]);
              if ((h = R(Vt, m, t, T))) {
                  (T.readyState = 1),
                      p && v.trigger("ajaxSend", [T, m]),
                      m.async &&
                          0 < m.timeout &&
                          (f = setTimeout(function () {
                              T.abort("timeout");
                          }, m.timeout));
                  try {
                      (w = 1), h.send(a, n);
                  } catch (u) {
                      if (!(w < 2)) throw u;
                      n(-1, u);
                  }
              } else n(-1, "No Transport");
              return T;
          },
          getJSON: function (e, t, n) {
              return ie.get(e, t, n, "json");
          },
          getScript: function (e, t) {
              return ie.get(e, void 0, t, "script");
          },
      }),
      ie.each(["get", "post"], function (e, i) {
          ie[i] = function (e, t, n, r) {
              return ie.isFunction(t) && ((r = r || n), (n = t), (t = void 0)), ie.ajax({ url: e, type: i, dataType: r, data: t, success: n });
          };
      }),
      (ie._evalUrl = function (e) {
          return ie.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
      }),
      ie.fn.extend({
          wrapAll: function (t) {
              if (ie.isFunction(t))
                  return this.each(function (e) {
                      ie(this).wrapAll(t.call(this, e));
                  });
              if (this[0]) {
                  var e = ie(t, this[0].ownerDocument).eq(0).clone(!0);
                  this[0].parentNode && e.insertBefore(this[0]),
                      e
                          .map(function () {
                              for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                              return e;
                          })
                          .append(this);
              }
              return this;
          },
          wrapInner: function (n) {
              return this.each(
                  ie.isFunction(n)
                      ? function (e) {
                            ie(this).wrapInner(n.call(this, e));
                        }
                      : function () {
                            var e = ie(this),
                                t = e.contents();
                            t.length ? t.wrapAll(n) : e.append(n);
                        }
              );
          },
          wrap: function (t) {
              var n = ie.isFunction(t);
              return this.each(function (e) {
                  ie(this).wrapAll(n ? t.call(this, e) : t);
              });
          },
          unwrap: function () {
              return this.parent()
                  .each(function () {
                      ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes);
                  })
                  .end();
          },
      }),
      (ie.expr.filters.hidden = function (e) {
          return (e.offsetWidth <= 0 && e.offsetHeight <= 0) || (!ne.reliableHiddenOffsets() && "none" === ((e.style && e.style.display) || ie.css(e, "display")));
      }),
      (ie.expr.filters.visible = function (e) {
          return !ie.expr.filters.hidden(e);
      });
  var Yt = /%20/g,
      Gt = /\[\]$/,
      Qt = /\r?\n/g,
      Kt = /^(?:submit|button|image|reset|file)$/i,
      Zt = /^(?:input|select|textarea|keygen)/i;
  (ie.param = function (e, t) {
      var n,
          r = [],
          i = function (e, t) {
              (t = ie.isFunction(t) ? t() : null == t ? "" : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
      if ((void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || (e.jquery && !ie.isPlainObject(e))))
          ie.each(e, function () {
              i(this.name, this.value);
          });
      else for (n in e) I(n, e[n], t, i);
      return r.join("&").replace(Yt, "+");
  }),
      ie.fn.extend({
          serialize: function () {
              return ie.param(this.serializeArray());
          },
          serializeArray: function () {
              return this.map(function () {
                  var e = ie.prop(this, "elements");
                  return e ? ie.makeArray(e) : this;
              })
                  .filter(function () {
                      var e = this.type;
                      return this.name && !ie(this).is(":disabled") && Zt.test(this.nodeName) && !Kt.test(e) && (this.checked || !De.test(e));
                  })
                  .map(function (e, t) {
                      var n = ie(this).val();
                      return null == n
                          ? null
                          : ie.isArray(n)
                          ? ie.map(n, function (e) {
                                return { name: t.name, value: e.replace(Qt, "\r\n") };
                            })
                          : { name: t.name, value: n.replace(Qt, "\r\n") };
                  })
                  .get();
          },
      }),
      (ie.ajaxSettings.xhr =
          void 0 !== h.ActiveXObject
              ? function () {
                    return (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X()) || U();
                }
              : X);
  var en = 0,
      tn = {},
      nn = ie.ajaxSettings.xhr();
  h.attachEvent &&
      h.attachEvent("onunload", function () {
          for (var e in tn) tn[e](void 0, !0);
      }),
      (ne.cors = !!nn && "withCredentials" in nn),
      (nn = ne.ajax = !!nn) &&
          ie.ajaxTransport(function (l) {
              var u;
              if (!l.crossDomain || ne.cors)
                  return {
                      send: function (e, o) {
                          var t,
                              a = l.xhr(),
                              s = ++en;
                          if ((a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)) for (t in l.xhrFields) a[t] = l.xhrFields[t];
                          for (t in (l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e))
                              void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                          a.send((l.hasContent && l.data) || null),
                              (u = function (e, t) {
                                  var n, r, i;
                                  if (u && (t || 4 === a.readyState))
                                      if ((delete tn[s], (u = void 0), (a.onreadystatechange = ie.noop), t)) 4 !== a.readyState && a.abort();
                                      else {
                                          (i = {}), (n = a.status), "string" == typeof a.responseText && (i.text = a.responseText);
                                          try {
                                              r = a.statusText;
                                          } catch (ne) {
                                              r = "";
                                          }
                                          n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : (n = i.text ? 200 : 404);
                                      }
                                  i && o(n, r, i, a.getAllResponseHeaders());
                              }),
                              l.async ? (4 === a.readyState ? setTimeout(u) : (a.onreadystatechange = tn[s] = u)) : u();
                      },
                      abort: function () {
                          u && u(void 0, !0);
                      },
                  };
          }),
      ie.ajaxSetup({
          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
          contents: { script: /(?:java|ecma)script/ },
          converters: {
              "text script": function (e) {
                  return ie.globalEval(e), e;
              },
          },
      }),
      ie.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && ((e.type = "GET"), (e.global = !1));
      }),
      ie.ajaxTransport("script", function (t) {
          if (t.crossDomain) {
              var r,
                  i = he.head || ie("head")[0] || he.documentElement;
              return {
                  send: function (e, n) {
                      ((r = he.createElement("script")).async = !0),
                          t.scriptCharset && (r.charset = t.scriptCharset),
                          (r.src = t.url),
                          (r.onload = r.onreadystatechange = function (e, t) {
                              (t || !r.readyState || /loaded|complete/.test(r.readyState)) && ((r.onload = r.onreadystatechange = null), r.parentNode && r.parentNode.removeChild(r), (r = null), t || n(200, "success"));
                          }),
                          i.insertBefore(r, i.firstChild);
                  },
                  abort: function () {
                      r && r.onload(void 0, !0);
                  },
              };
          }
      });
  var rn = [],
      on = /(=)\?(?=&|$)|\?\?/;
  ie.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
          var e = rn.pop() || ie.expando + "_" + _t++;
          return (this[e] = !0), e;
      },
  }),
      ie.ajaxPrefilter("json jsonp", function (e, t, n) {
          var r,
              i,
              o,
              a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
          return a || "jsonp" === e.dataTypes[0]
              ? ((r = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a ? (e[a] = e[a].replace(on, "$1" + r)) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function () {
                    return o || ie.error(r + " was not called"), o[0];
                }),
                (e.dataTypes[0] = "json"),
                (i = h[r]),
                (h[r] = function () {
                    o = arguments;
                }),
                n.always(function () {
                    (h[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), rn.push(r)), o && ie.isFunction(i) && i(o[0]), (o = i = void 0);
                }),
                "script")
              : void 0;
      }),
      (ie.parseHTML = function (e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && ((n = t), (t = !1)), (t = t || he);
          var r = de.exec(e),
              i = !n && [];
          return r ? [t.createElement(r[1])] : ((r = ie.buildFragment([e], t, i)), i && i.length && ie(i).remove(), ie.merge([], r.childNodes));
      });
  var an = ie.fn.load;
  (ie.fn.load = function (e, t, n) {
      if ("string" != typeof e && an) return an.apply(this, arguments);
      var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
      return (
          0 <= s && ((r = ie.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
          ie.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
          0 < a.length &&
              ie
                  .ajax({ url: e, type: o, dataType: "html", data: t })
                  .done(function (e) {
                      (i = arguments), a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e);
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
      ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          ie.fn[t] = function (e) {
              return this.on(t, e);
          };
      }),
      (ie.expr.filters.animated = function (t) {
          return ie.grep(ie.timers, function (e) {
              return t === e.elem;
          }).length;
      });
  var sn = h.document.documentElement;
  (ie.offset = {
      setOffset: function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              l,
              u = ie.css(e, "position"),
              c = ie(e),
              d = {};
          "static" === u && (e.style.position = "relative"),
              (s = c.offset()),
              (o = ie.css(e, "top")),
              (l = ie.css(e, "left")),
              ("absolute" === u || "fixed" === u) && -1 < ie.inArray("auto", [o, l]) ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              ie.isFunction(t) && (t = t.call(e, n, s)),
              null != t.top && (d.top = t.top - s.top + a),
              null != t.left && (d.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, d) : c.css(d);
      },
  }),
      ie.fn.extend({
          offset: function (t) {
              if (arguments.length)
                  return void 0 === t
                      ? this
                      : this.each(function (e) {
                            ie.offset.setOffset(this, t, e);
                        });
              var e,
                  n,
                  r = { top: 0, left: 0 },
                  i = this[0],
                  o = i && i.ownerDocument;
              return o
                  ? ((e = o.documentElement),
                    ie.contains(e, i)
                        ? (typeof i.getBoundingClientRect !== Te && (r = i.getBoundingClientRect()),
                          (n = V(o)),
                          { top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
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
                      "fixed" === ie.css(r, "position")
                          ? (t = r.getBoundingClientRect())
                          : ((e = this.offsetParent()), (t = this.offset()), ie.nodeName(e[0], "html") || (n = e.offset()), (n.top += ie.css(e[0], "borderTopWidth", !0)), (n.left += ie.css(e[0], "borderLeftWidth", !0))),
                      { top: t.top - n.top - ie.css(r, "marginTop", !0), left: t.left - n.left - ie.css(r, "marginLeft", !0) }
                  );
              }
          },
          offsetParent: function () {
              return this.map(function () {
                  for (var e = this.offsetParent || sn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position"); ) e = e.offsetParent;
                  return e || sn;
              });
          },
      }),
      ie.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
          var o = /Y/.test(i);
          ie.fn[t] = function (e) {
              return Ae(
                  this,
                  function (e, t, n) {
                      var r = V(e);
                      return void 0 === n ? (r ? (i in r ? r[i] : r.document.documentElement[t]) : e[t]) : void (r ? r.scrollTo(o ? ie(r).scrollLeft() : n, o ? n : ie(r).scrollTop()) : (e[t] = n));
                  },
                  t,
                  e,
                  arguments.length,
                  null
              );
          };
      }),
      ie.each(["top", "left"], function (e, n) {
          ie.cssHooks[n] = k(ne.pixelPosition, function (e, t) {
              return t ? ((t = et(e, n)), nt.test(t) ? ie(e).position()[n] + "px" : t) : void 0;
          });
      }),
      ie.each({ Height: "height", Width: "width" }, function (o, a) {
          ie.each({ padding: "inner" + o, content: a, "": "outer" + o }, function (r, e) {
              ie.fn[e] = function (e, t) {
                  var n = arguments.length && (r || "boolean" != typeof e),
                      i = r || (!0 === e || !0 === t ? "margin" : "border");
                  return Ae(
                      this,
                      function (e, t, n) {
                          var r;
                          return ie.isWindow(e)
                              ? e.document.documentElement["client" + o]
                              : 9 === e.nodeType
                              ? ((r = e.documentElement), Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o]))
                              : void 0 === n
                              ? ie.css(e, t, i)
                              : ie.style(e, t, n, i);
                      },
                      a,
                      n ? e : void 0,
                      n,
                      null
                  );
              };
          });
      }),
      (ie.fn.size = function () {
          return this.length;
      }),
      (ie.fn.andSelf = ie.fn.addBack),
      "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
              return ie;
          });
  var ln = h.jQuery,
      un = h.$;
  return (
      (ie.noConflict = function (e) {
          return h.$ === ie && (h.$ = un), e && h.jQuery === ie && (h.jQuery = ln), ie;
      }),
      typeof t === Te && (h.jQuery = h.$ = ie),
      ie
  );
});
