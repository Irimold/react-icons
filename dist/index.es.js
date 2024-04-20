import E3 from "react";
var K = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M3;
function i2() {
  if (M3)
    return O;
  M3 = 1;
  var r = E3, o = Symbol.for("react.element"), I = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(j, p, E) {
    var w, g = {}, k = null, F = null;
    E !== void 0 && (k = "" + E), p.key !== void 0 && (k = "" + p.key), p.ref !== void 0 && (F = p.ref);
    for (w in p)
      y.call(p, w) && !z.hasOwnProperty(w) && (g[w] = p[w]);
    if (j && j.defaultProps)
      for (w in p = j.defaultProps, p)
        g[w] === void 0 && (g[w] = p[w]);
    return { $$typeof: o, type: j, key: k, ref: F, props: g, _owner: B.current };
  }
  return O.Fragment = I, O.jsx = W, O.jsxs = W, O;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y3;
function a2() {
  return y3 || (y3 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = E3, o = Symbol.for("react.element"), I = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), j = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), X = Symbol.iterator, R3 = "@@iterator";
    function D3(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = X && e[X] || e[R3];
      return typeof l == "function" ? l : null;
    }
    var R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
          n[c - 1] = arguments[c];
        L3("error", e, n);
      }
    }
    function L3(e, l, n) {
      {
        var c = R.ReactDebugCurrentFrame, s = c.getStackAddendum();
        s !== "" && (l += "%s", n = n.concat([s]));
        var h = n.map(function(a) {
          return String(a);
        });
        h.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var W3 = !1, _3 = !1, b3 = !1, O3 = !1, S3 = !1, Q;
    Q = Symbol.for("react.module.reference");
    function B3(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === z || S3 || e === B || e === E || e === w || O3 || e === F || W3 || _3 || b3 || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === g || e.$$typeof === W || e.$$typeof === j || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function z3(e, l, n) {
      var c = e.displayName;
      if (c)
        return c;
      var s = l.displayName || l.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function t3(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case I:
          return "Portal";
        case z:
          return "Profiler";
        case B:
          return "StrictMode";
        case E:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var l = e;
            return t3(l) + ".Consumer";
          case W:
            var n = e;
            return t3(n._context) + ".Provider";
          case p:
            return z3(e, e.render, "ForwardRef");
          case g:
            var c = e.displayName || null;
            return c !== null ? c : C(e.type) || "Memo";
          case k: {
            var s = e, h = s._payload, a = s._init;
            try {
              return C(a(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, _ = 0, e3, r3, o3, l3, n3, c3, i3;
    function a3() {
    }
    a3.__reactDisabledLog = !0;
    function F3() {
      {
        if (_ === 0) {
          e3 = console.log, r3 = console.info, o3 = console.warn, l3 = console.error, n3 = console.group, c3 = console.groupCollapsed, i3 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: a3,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        _++;
      }
    }
    function T3() {
      {
        if (_--, _ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: e3
            }),
            info: M({}, e, {
              value: r3
            }),
            warn: M({}, e, {
              value: o3
            }),
            error: M({}, e, {
              value: l3
            }),
            group: M({}, e, {
              value: n3
            }),
            groupCollapsed: M({}, e, {
              value: c3
            }),
            groupEnd: M({}, e, {
              value: i3
            })
          });
        }
        _ < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = R.ReactCurrentDispatcher, $;
    function T(e, l, n) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (s) {
            var c = s.stack.trim().match(/\n( *(at )?)/);
            $ = c && c[1] || "";
          }
        return `
` + $ + e;
      }
    }
    var Y = !1, P;
    {
      var P3 = typeof WeakMap == "function" ? WeakMap : Map;
      P = new P3();
    }
    function s3(e, l) {
      if (!e || Y)
        return "";
      {
        var n = P.get(e);
        if (n !== void 0)
          return n;
      }
      var c;
      Y = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = Z.current, Z.current = null, F3();
      try {
        if (l) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (m) {
              c = m;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (m) {
              c = m;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            c = m;
          }
          e();
        }
      } catch (m) {
        if (m && c && typeof m.stack == "string") {
          for (var i = m.stack.split(`
`), f = c.stack.split(`
`), d = i.length - 1, u = f.length - 1; d >= 1 && u >= 0 && i[d] !== f[u]; )
            u--;
          for (; d >= 1 && u >= 0; d--, u--)
            if (i[d] !== f[u]) {
              if (d !== 1 || u !== 1)
                do
                  if (d--, u--, u < 0 || i[d] !== f[u]) {
                    var x = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && P.set(e, x), x;
                  }
                while (d >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        Y = !1, Z.current = h, T3(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", k3 = L ? T(L) : "";
      return typeof e == "function" && P.set(e, k3), k3;
    }
    function A3(e, l, n) {
      return s3(e, !1);
    }
    function H3(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function A(e, l, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return s3(e, H3(e));
      if (typeof e == "string")
        return T(e);
      switch (e) {
        case E:
          return T("Suspense");
        case w:
          return T("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return A3(e.render);
          case g:
            return A(e.type, l, n);
          case k: {
            var c = e, s = c._payload, h = c._init;
            try {
              return A(h(s), l, n);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, h3 = {}, d3 = R.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var l = e._owner, n = A(e.type, e._source, l ? l.type : null);
        d3.setExtraStackFrame(n);
      } else
        d3.setExtraStackFrame(null);
    }
    function V3(e, l, n, c, s) {
      {
        var h = Function.call.bind(H);
        for (var a in e)
          if (h(e, a)) {
            var i = void 0;
            try {
              if (typeof e[a] != "function") {
                var f = Error((c || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw f.name = "Invariant Violation", f;
              }
              i = e[a](l, a, c, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (V(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", n, a, typeof i), V(null)), i instanceof Error && !(i.message in h3) && (h3[i.message] = !0, V(s), v("Failed %s type: %s", n, i.message), V(null));
          }
      }
    }
    var I3 = Array.isArray;
    function U(e) {
      return I3(e);
    }
    function Z3(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, n = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function $3(e) {
      try {
        return u3(e), !1;
      } catch {
        return !0;
      }
    }
    function u3(e) {
      return "" + e;
    }
    function p3(e) {
      if ($3(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Z3(e)), u3(e);
    }
    var b = R.ReactCurrentOwner, Y3 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, v3, f3, N;
    N = {};
    function U3(e) {
      if (H.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function N3(e) {
      if (H.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function q3(e, l) {
      if (typeof e.ref == "string" && b.current && l && b.current.stateNode !== l) {
        var n = C(b.current.type);
        N[n] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(b.current.type), e.ref), N[n] = !0);
      }
    }
    function J3(e, l) {
      {
        var n = function() {
          v3 || (v3 = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function G3(e, l) {
      {
        var n = function() {
          f3 || (f3 = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var K3 = function(e, l, n, c, s, h, a) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: n,
        props: a,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function X3(e, l, n, c, s) {
      {
        var h, a = {}, i = null, f = null;
        n !== void 0 && (p3(n), i = "" + n), N3(l) && (p3(l.key), i = "" + l.key), U3(l) && (f = l.ref, q3(l, s));
        for (h in l)
          H.call(l, h) && !Y3.hasOwnProperty(h) && (a[h] = l[h]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (h in d)
            a[h] === void 0 && (a[h] = d[h]);
        }
        if (i || f) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && J3(a, u), f && G3(a, u);
        }
        return K3(e, i, f, s, c, b.current, a);
      }
    }
    var q = R.ReactCurrentOwner, w3 = R.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var l = e._owner, n = A(e.type, e._source, l ? l.type : null);
        w3.setExtraStackFrame(n);
      } else
        w3.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function x3() {
      {
        if (q.current) {
          var e = C(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Q3(e) {
      {
        if (e !== void 0) {
          var l = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + l + ":" + n + ".";
        }
        return "";
      }
    }
    var g3 = {};
    function t2(e) {
      {
        var l = x3();
        if (!l) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (l = `

Check the top-level render call using <` + n + ">.");
        }
        return l;
      }
    }
    function C3(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = t2(l);
        if (g3[n])
          return;
        g3[n] = !0;
        var c = "";
        e && e._owner && e._owner !== q.current && (c = " It was passed a child from " + C(e._owner.type) + "."), D(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, c), D(null);
      }
    }
    function m3(e, l) {
      {
        if (typeof e != "object")
          return;
        if (U(e))
          for (var n = 0; n < e.length; n++) {
            var c = e[n];
            G(c) && C3(c, l);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = D3(e);
          if (typeof s == "function" && s !== e.entries)
            for (var h = s.call(e), a; !(a = h.next()).done; )
              G(a.value) && C3(a.value, l);
        }
      }
    }
    function e2(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var n;
        if (typeof l == "function")
          n = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === g))
          n = l.propTypes;
        else
          return;
        if (n) {
          var c = C(l);
          V3(n, e.props, "prop", c, e);
        } else if (l.PropTypes !== void 0 && !J) {
          J = !0;
          var s = C(l);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function r2(e) {
      {
        for (var l = Object.keys(e.props), n = 0; n < l.length; n++) {
          var c = l[n];
          if (c !== "children" && c !== "key") {
            D(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function j3(e, l, n, c, s, h) {
      {
        var a = B3(e);
        if (!a) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var f = Q3(s);
          f ? i += f : i += x3();
          var d;
          e === null ? d = "null" : U(e) ? d = "array" : e !== void 0 && e.$$typeof === o ? (d = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var u = X3(e, l, n, s, h);
        if (u == null)
          return u;
        if (a) {
          var x = l.children;
          if (x !== void 0)
            if (c)
              if (U(x)) {
                for (var L = 0; L < x.length; L++)
                  m3(x[L], e);
                Object.freeze && Object.freeze(x);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              m3(x, e);
        }
        return e === y ? r2(u) : e2(u), u;
      }
    }
    function o2(e, l, n) {
      return j3(e, l, n, !0);
    }
    function l2(e, l, n) {
      return j3(e, l, n, !1);
    }
    var n2 = l2, c2 = o2;
    S.Fragment = y, S.jsx = n2, S.jsxs = c2;
  }()), S;
}
process.env.NODE_ENV === "production" ? K.exports = i2() : K.exports = a2();
var t = K.exports;
const h2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M26.667 58.667h10.666c10.056 0 15.086 0 18.208-3.126 3.126-3.122 3.126-8.152 3.126-18.208v-1.165c0-2.328 0-4.077-.115-5.501H47.747c-2.926 0-5.512 0-7.595-.28-2.259-.304-4.517-1-6.36-2.843-1.845-1.845-2.541-4.104-2.845-6.363-.28-2.082-.28-4.666-.28-7.594l.026-7.558c0-.221.019-.437.054-.65-1.091-.046-2.384-.046-4-.046-10.11 0-15.166 0-18.288 3.126-3.126 3.122-3.126 8.152-3.126 18.208v10.666c0 10.056 0 15.086 3.126 18.208 3.122 3.126 8.152 3.126 18.208 3.126",
          clipRule: "evenodd",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M28.539 38.037a1.998 1.998 0 0 0-1.154-2.615 2 2 0 0 0-2.59 1.21l-4 10.667a2.001 2.001 0 0 0 3.34 2.085 2 2 0 0 0 .404-.68zm-8.46.71a2 2 0 1 0-2.826-2.827l-2.666 2.667a2 2 0 0 0 0 2.826l2.666 2.667a2 2 0 0 0 2.827-2.827L18.827 40zm12 2.506a2 2 0 1 0-2.826 2.827l1.254 1.253-1.254 1.254a2 2 0 1 0 2.827 2.826l2.667-2.666a2 2 0 0 0 0-2.827zM30.694 6.027l-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.191 14.191 0 0 0-2.555-7.043c-.25-.341-.421-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.021-.341-3.426-.373z"
        }
      )
    ]
  }
), d2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        stroke: "#3D9EC4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 4,
        d: "M53.333 32H10.667m0 0 16-16m-16 16 16 16"
      }
    )
  }
), u2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M18.507 5.333c1.109 0 2.008.864 2.008 1.931v3.893c1.78-.032 3.778-.032 6.026-.032h10.707c2.245 0 4.243 0 6.024.035V7.267c0-1.067.899-1.934 2.008-1.934 1.11 0 2.008.864 2.008 1.931v4.07c3.853.295 6.384 1.023 8.24 2.813 1.861 1.786 2.619 4.218 2.925 7.925L58.667 24H5.333v-1.93c.31-3.707 1.067-6.14 2.926-7.926 1.858-1.787 4.386-2.517 8.24-2.813V7.264c0-1.067.898-1.93 2.008-1.93"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M58.667 37.333V32c0-2.237-.011-6.227-.046-8H5.36c-.035 1.773-.027 5.763-.027 8v5.333c0 10.056 0 15.086 3.126 18.208 3.122 3.126 8.149 3.126 18.208 3.126h10.666c10.054 0 15.083 0 18.208-3.126 3.126-3.12 3.126-8.149 3.126-18.208",
          opacity: 0.5
        }
      )
    ]
  }
), p2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 58.667c-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M42.747 23.92a2 2 0 0 1 0 2.827L29.413 40.08a2 2 0 0 1-2.826 0l-5.334-5.333a2 2 0 1 1 2.827-2.827L28 35.84l11.92-11.92a2 2 0 0 1 2.827 0"
        }
      )
    ]
  }
), v2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M17.6 30.392c0-7.27 0-10.904 2.248-13.163 2.25-2.258 5.87-2.258 13.112-2.258h7.68c7.24 0 10.861 0 13.11 2.258C56 19.488 56 23.123 56 30.392v12.853c0 7.27 0 10.904-2.25 13.163-2.249 2.259-5.87 2.259-13.11 2.259h-7.68c-7.243 0-10.861 0-13.112-2.259C17.6 54.149 17.6 50.515 17.6 43.245z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.125 8.459C8 11.58 8 16.61 8 26.667V32c0 10.056 0 15.085 3.125 18.208 1.646 1.648 3.822 2.427 6.987 2.795-.512-2.24-.512-5.323-.512-9.76V30.392c0-7.27 0-10.904 2.248-13.163 2.25-2.258 5.87-2.258 13.112-2.258h7.68c4.405 0 7.467 0 9.701.506-.368-3.181-1.146-5.365-2.8-7.018-3.122-3.126-8.152-3.126-18.208-3.126s-15.085 0-18.208 3.126",
          opacity: 0.5
        }
      )
    ]
  }
), f2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 26.667c11.781 0 21.333-4.774 21.333-10.667S43.781 5.333 32 5.333C20.22 5.333 10.667 10.107 10.667 16S20.219 26.667 32 26.667"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M10.667 32v16c0 5.893 9.552 10.667 21.333 10.667 11.781 0 21.333-4.774 21.333-10.667V32c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M10.667 16v16c0 5.893 9.552 10.667 21.333 10.667 11.781 0 21.333-4.774 21.333-10.667V16c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667",
          opacity: 0.7
        }
      )
    ]
  }
), w2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m30.693 6.027-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.192 14.192 0 0 0-2.555-7.043c-.25-.341-.42-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.02-.341-3.426-.373z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5.333 36.432V26.067c0-9.774 0-14.662 3.126-17.696 3.122-3.038 8.178-3.038 18.288-3.038 1.576 0 2.848 0 3.92.04l.026.651-.026 7.33v.48c0 2.825.008 5.32.28 7.347.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.02c.02.952.02 2.04.02 3.301v2.95l-.032.016c-.242.122-.48.252-.712.389a8.445 8.445 0 0 1-9.147 0 6.333 6.333 0 0 0-6.859 0 8.446 8.446 0 0 1-9.146 0 6.333 6.333 0 0 0-6.86 0 8.445 8.445 0 0 1-9.146 0 6.333 6.333 0 0 0-6.858 0c-.368.235-.55.355-.683.421-1.03.518-2.712.072-3.89-.773z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M26.667 58.667h10.666c10.056 0 15.086 0 18.21-2.488 2.924-2.331 3.11-5.99 3.124-13.016l-.032.013c-.24.1-.478.207-.712.32-2.771 1.467-6.38 1.467-9.147 0a7.525 7.525 0 0 0-6.859 0c-2.77 1.467-6.378 1.467-9.146 0a7.525 7.525 0 0 0-6.862 0c-2.768 1.467-6.373 1.467-9.146 0a7.526 7.526 0 0 0-6.86 0c-.222.122-.449.237-.68.344-1.028.424-2.711.059-3.89-.635.014 7 .206 10.648 3.123 12.974 3.125 2.488 8.157 2.488 18.21 2.488"
        }
      )
    ]
  }
), x2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M18.667 32A5.333 5.333 0 1 1 8 32a5.333 5.333 0 0 1 10.667 0M56 32a5.333 5.333 0 1 1-10.667 0A5.333 5.333 0 0 1 56 32"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M37.333 32a5.333 5.333 0 1 1-10.666 0 5.333 5.333 0 0 1 10.666 0",
          opacity: 0.5
        }
      )
    ]
  }
), g2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M26.667 58.667h10.666c10.056 0 15.086 0 18.208-3.126 3.126-3.122 3.126-8.152 3.126-18.208v-1.165c0-2.328 0-4.077-.115-5.501H47.747c-2.926 0-5.512 0-7.595-.28-2.259-.304-4.517-1-6.36-2.843-1.845-1.845-2.541-4.104-2.845-6.363-.28-2.082-.28-4.666-.28-7.594l.026-7.558c0-.221.019-.437.054-.65-1.091-.046-2.384-.046-4-.046-10.11 0-15.166 0-18.288 3.126-3.126 3.122-3.126 8.152-3.126 18.208v10.666c0 10.056 0 15.086 3.126 18.208 3.122 3.126 8.152 3.126 18.208 3.126",
          clipRule: "evenodd",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M24.035 50.792a2 2 0 0 1-2.736 0l-5.334-5a2 2 0 0 1 2.736-2.917l1.966 1.84V36a2 2 0 0 1 4 0v8.717l1.965-1.842a2 2 0 0 1 2.736 2.917zm6.658-44.765-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.193 14.193 0 0 0-2.555-7.043c-.25-.341-.421-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.021-.341-3.426-.373z"
        }
      )
    ]
  }
), C2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.333 8h37.334L23.509 35.157a7.214 7.214 0 0 0-2.074-2.896c-.608-.528-1.46-1.005-3.155-1.962l-7.768-4.374c-2.53-1.421-3.795-2.133-4.485-3.28-.694-1.149-.694-2.536-.694-5.304v-1.84c0-3.536 0-5.306 1.174-6.405C7.675 8 9.56 8 13.333 8",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M58.667 17.344v-1.84c0-3.536 0-5.307-1.174-6.405C56.325 8 54.44 8 50.667 8l-27.16 27.157c.133.344.24.702.322 1.075.17.76.17 1.65.17 3.43v7.12c0 2.423 0 3.637.673 4.58.672.947 1.867 1.414 4.25 2.347 5.011 1.958 7.515 2.936 9.297 1.822 1.78-1.112 1.78-3.659 1.78-8.752v-7.12c0-1.776 0-2.667.169-3.427a7.147 7.147 0 0 1 2.4-3.973c.605-.526 1.453-1.003 3.152-1.96l7.768-4.374c2.528-1.421 3.795-2.133 4.485-3.28.694-1.146.694-2.533.694-5.301",
          opacity: 0.5
        }
      )
    ]
  }
), m2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        stroke: "#3D9EC4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 4,
        d: "M52 32 38.667 18.667M52 32 38.667 45.333M52 32H25.333C20.888 32 12 34.667 12 45.333"
      }
    )
  }
), j2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5.333 32.544c0-6.104 0-9.155 1.387-11.683 1.381-2.53 3.912-4.098 8.97-7.24l5.334-3.309C26.37 6.992 29.045 5.333 32 5.333s5.627 1.659 10.976 4.979l5.333 3.31c5.059 3.14 7.59 4.709 8.974 7.24 1.384 2.527 1.384 5.578 1.384 11.68V36.6c0 10.4 0 15.603-3.126 18.835-3.122 3.232-8.152 3.232-18.208 3.232H26.667c-10.056 0-15.086 0-18.208-3.232-3.126-3.232-3.126-8.432-3.126-18.835z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M25.192 41.061a2 2 0 0 0-2.384 3.214A15.376 15.376 0 0 0 32 47.333a15.376 15.376 0 0 0 9.192-3.058 2.002 2.002 0 0 0-2.384-3.216A11.376 11.376 0 0 1 32 43.333a11.375 11.375 0 0 1-6.808-2.272"
        }
      )
    ]
  }
), k2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M48 21.333a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M31.848 3.333h.304c6.157 0 10.981 0 14.747.507 3.85.517 6.89 1.6 9.277 3.984 2.387 2.387 3.467 5.427 3.984 9.28.507 3.763.507 8.587.507 14.744v.235c0 5.09 0 9.256-.278 12.648-.277 3.413-.845 6.258-2.12 8.626a11.953 11.953 0 0 1-2.093 2.819c-2.387 2.387-5.427 3.467-9.28 3.984-3.763.507-8.587.507-14.744.507h-.304c-6.157 0-10.981 0-14.747-.507-3.85-.517-6.89-1.6-9.277-3.984-2.115-2.115-3.208-4.747-3.787-8.016-.573-3.208-.677-7.2-.698-12.155-.006-1.261-.006-2.594-.006-4.002v-.155c0-6.157 0-10.981.507-14.747.517-3.85 1.6-6.89 3.984-9.277 2.387-2.387 5.427-3.467 9.28-3.984 3.763-.507 8.587-.507 14.744-.507m-14.213 4.47c-3.408.458-5.464 1.333-6.982 2.85-1.52 1.52-2.392 3.574-2.85 6.984-.464 3.467-.47 8.022-.47 14.363 0 1.41 0 2.736.006 3.987.02 4.997.133 8.656.634 11.474.49 2.76 1.328 4.534 2.68 5.886 1.52 1.52 3.574 2.392 6.984 2.85 3.467.464 8.022.47 14.363.47 6.341 0 10.896-.006 14.363-.47 3.41-.458 5.466-1.333 6.986-2.85a7.993 7.993 0 0 0 1.398-1.886c.885-1.642 1.394-3.84 1.656-7.053.26-3.213.264-7.219.264-12.408 0-6.341-.006-10.896-.47-14.363-.458-3.41-1.333-5.466-2.85-6.986-1.52-1.518-3.574-2.39-6.984-2.848-3.467-.464-8.022-.47-14.363-.47-6.341 0-10.899.006-14.365.47",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m54.952 51.056-7.547-6.792a8 8 0 0 0-9.952-.6l-.797.56a5.333 5.333 0 0 1-6.837-.592l-11.44-11.44a6.133 6.133 0 0 0-8.374-.277L7.333 34.25l.006 1.733c.02 5 .133 8.659.634 11.477.494 2.76 1.328 4.534 2.68 5.886 1.52 1.52 3.574 2.392 6.984 2.85 3.467.464 8.022.47 14.363.47 6.341 0 10.899-.006 14.365-.47 3.408-.458 5.464-1.333 6.982-2.85a7.986 7.986 0 0 0 1.605-2.291",
          opacity: 0.4
        }
      )
    ]
  }
), M2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M9.237 54.763c3.91 3.904 10.192 3.904 22.763 3.904 12.57 0 18.856 0 22.76-3.907 3.907-3.901 3.907-10.19 3.907-22.76 0-12.57 0-18.856-3.907-22.763C50.859 5.333 44.57 5.333 32 5.333c-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.859 3.904 22.763",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21.333 34.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333m10.667 0a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334m10.667 0a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334"
        }
      )
    ]
  }
), y2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M48 26.07a10.09 10.09 0 0 1-10.112 10.069c-1.019 0-3.339-.235-4.467-1.171l-1.41 1.405c-.83.827-.606 1.07-.238 1.47.155.168.334.362.472.64 0 0 1.176 1.637 0 3.277-.704.936-2.68 2.248-4.936 0l-.472.467s1.414 1.64.235 3.28c-.704.936-2.587 1.872-4.232.234l-1.645 1.638c-1.128 1.125-2.507.469-3.056 0l-1.414-1.406c-1.314-1.309-.546-2.73 0-3.277l12.23-12.176s-1.176-1.875-1.176-4.45A10.09 10.09 0 0 1 37.888 16 10.092 10.092 0 0 1 48 26.07M37.888 29.58a3.522 3.522 0 0 0 3.528-3.512 3.52 3.52 0 0 0-3.528-3.512 3.52 3.52 0 0 0-3.525 3.512 3.52 3.52 0 0 0 3.525 3.512",
          clipRule: "evenodd"
        }
      )
    ]
  }
), E2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M13.277 25.827c-5.296-2.118-7.944-3.176-7.944-4.494 0-1.317 2.648-2.373 7.944-4.493l7.488-2.995c5.296-2.12 7.947-3.178 11.235-3.178 3.29 0 5.939 1.058 11.235 3.178l7.488 2.995c5.296 2.117 7.944 3.176 7.944 4.493 0 1.318-2.648 2.374-7.944 4.494l-7.488 2.997C37.939 30.941 35.288 32 32 32c-3.29 0-5.939-1.059-11.235-3.176z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.333 21.333c0 1.318 2.648 2.374 7.944 4.494l7.488 2.997C26.061 30.941 28.712 32 32 32c3.29 0 5.939-1.059 11.235-3.176l7.488-2.997c5.296-2.118 7.944-3.176 7.944-4.494 0-1.317-2.648-2.373-7.944-4.493l-7.488-2.995c-5.296-2.12-7.947-3.178-11.235-3.178-3.29 0-5.939 1.058-11.235 3.178L13.28 16.84c-5.299 2.117-7.947 3.176-7.947 4.493",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m15.376 26.667-2.099.84C7.981 29.624 5.333 30.685 5.333 32c0 1.315 2.648 2.373 7.944 4.493l7.488 2.998c5.296 2.117 7.947 3.176 11.235 3.176 3.29 0 5.939-1.059 11.235-3.176l7.488-2.998c5.296-2.117 7.944-3.178 7.944-4.493 0-1.315-2.648-2.373-7.944-4.493l-2.1-.84-5.388 2.157C37.939 30.941 35.288 32 32 32c-3.29 0-5.939-1.059-11.235-3.176l-5.386-2.157z",
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m15.376 37.333-2.099.84c-5.296 2.118-7.944 3.179-7.944 4.494 0 1.317 2.648 2.373 7.944 4.493l7.488 2.997c5.296 2.118 7.947 3.176 11.235 3.176 3.29 0 5.939-1.058 11.235-3.178l7.488-2.995c5.296-2.117 7.944-3.176 7.944-4.493 0-1.315-2.648-2.374-7.944-4.494l-2.1-.84-5.388 2.158c-5.296 2.117-7.947 3.176-11.235 3.176-3.29 0-5.939-1.059-11.235-3.176l-5.386-2.158z",
          opacity: 0.4
        }
      )
    ]
  }
), R2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M41.941 10.357c3.824-3.84 9.419-3.92 12.518-.81 3.104 3.114 3.018 8.746-.808 12.586l-6.464 6.488a2 2 0 1 0 2.834 2.824l6.464-6.488c5.094-5.117 5.734-13.285.808-18.234-4.933-4.952-13.085-4.307-18.186.81L26.18 20.512c-5.098 5.117-5.738 13.285-.808 18.232a2 2 0 1 0 2.832-2.821c-3.101-3.115-3.018-8.747.808-12.587z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M38.627 25.253a2.002 2.002 0 1 0-2.835 2.827c3.104 3.115 3.019 8.744-.808 12.587l-12.93 12.976c-3.825 3.84-9.42 3.92-12.518.81-3.101-3.114-3.019-8.746.808-12.586l6.464-6.488a2 2 0 1 0-2.832-2.824l-6.464 6.488C2.416 44.16 1.776 52.328 6.707 57.28c4.933 4.955 13.085 4.307 18.184-.81l12.928-12.98c5.093-5.114 5.733-13.285.808-18.231z",
          opacity: 0.5
        }
      )
    ]
  }
), D2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.44 9.024a2 2 0 0 0 3.248 2.336 15.881 15.881 0 0 1 1.661-1.947 2 2 0 1 0-2.826-2.826 19.654 19.654 0 0 0-2.083 2.437m-.899 14.027a2.002 2.002 0 0 1-2.224-1.75 17.682 17.682 0 0 1 .384-6.429 2.001 2.001 0 1 1 3.88.976 13.684 13.684 0 0 0-.293 4.981 2 2 0 0 1-1.747 2.222m2.686 9.68a2 2 0 0 0 3.146-2.467 21.081 21.081 0 0 1-2.698-4.488 2.002 2.002 0 0 0-3.662 1.613 25.043 25.043 0 0 0 3.214 5.342m11.898 7.048a1.998 1.998 0 0 1-1.712.301c-1.994-.563-3.95-1.603-5.738-2.955a2 2 0 0 1 1.474-3.578 8.04 8.04 0 0 1 .928-5.558 2 2 0 0 1 .555-1.77 9.398 9.398 0 0 1 3.003-2.038 1.995 1.995 0 0 1 1.592.016 8.027 8.027 0 0 1 3.648.024 1.997 1.997 0 0 1 1.712-.301c1.994.563 3.949 1.603 5.74 2.955a2 2 0 0 1-1.476 3.578 8.043 8.043 0 0 1-.928 5.558 2 2 0 0 1-.555 1.77 9.4 9.4 0 0 1-3.003 2.038 1.997 1.997 0 0 1-1.592-.016 8.028 8.028 0 0 1-3.648-.024m12.84-8.851a2 2 0 0 1 2.808.341 25.094 25.094 0 0 1 3.214 5.342 2 2 0 1 1-3.662 1.613 21.033 21.033 0 0 0-2.698-4.488 2 2 0 0 1 .338-2.808m7.718 11.77a2 2 0 1 0-3.974.473c.21 1.664.11 3.352-.29 4.981a2 2 0 1 0 3.88.979c.52-2.103.65-4.283.384-6.432m-3.58 9.486a2 2 0 0 1 .454 2.792 19.734 19.734 0 0 1-2.08 2.437 2 2 0 1 1-2.826-2.826 16.079 16.079 0 0 0 1.66-1.947 2.002 2.002 0 0 1 2.793-.456"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M26.219 38.368a2 2 0 1 0 2.829-2.827 5.399 5.399 0 0 1-1.181-1.728 2.002 2.002 0 0 0-3.293-.666 2 2 0 0 0-.393 2.218 9.4 9.4 0 0 0 2.038 3.003m-2.3-9.952a2 2 0 0 0 3.852 1.085c.4-1.429 1.184-2.944 2.296-4.418a2 2 0 0 0-3.192-2.408c-1.352 1.789-2.392 3.744-2.955 5.741m7.35-10.19a2 2 0 0 0 2.467 3.147 21.08 21.08 0 0 1 4.488-2.698 2 2 0 0 0-1.613-3.662 25.086 25.086 0 0 0-5.342 3.214m11.43-4.909a2 2 0 0 0 .472 3.974c1.664-.21 3.352-.11 4.98.29a2 2 0 1 0 .98-3.88 17.686 17.686 0 0 0-6.432-.384m12.277 3.123a2 2 0 1 0-2.336 3.248 16.088 16.088 0 0 1 1.947 1.661 2 2 0 0 0 2.826-2.826 19.78 19.78 0 0 0-2.437-2.083M37.78 25.632a2 2 0 1 0-2.83 2.827 5.406 5.406 0 0 1 1.182 1.728 1.999 1.999 0 0 0 3.723 0 2.002 2.002 0 0 0-.037-1.552 9.396 9.396 0 0 0-2.038-3.003m2.299 9.955a2 2 0 1 0-3.85-1.088c-.403 1.429-1.185 2.944-2.297 4.418a2 2 0 1 0 3.192 2.411c1.352-1.792 2.392-3.747 2.955-5.741m-7.35 10.186a2 2 0 0 0-2.466-3.146 21.082 21.082 0 0 1-4.488 2.698 2 2 0 0 0 1.613 3.662 25.102 25.102 0 0 0 5.342-3.214m-11.429 4.91a2 2 0 0 0-.472-3.974c-1.664.21-3.352.111-4.981-.29a2 2 0 1 0-.976 3.88c2.15.541 4.32.634 6.43.384M9.024 47.56a2 2 0 1 0 2.336-3.248 15.765 15.765 0 0 1-1.947-1.661 2 2 0 0 0-2.826 2.826c.784.787 1.6 1.48 2.437 2.083",
          opacity: 0.5
        }
      )
    ]
  }
), L2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M24.277 34.09a13.871 13.871 0 0 1-.469-.882c-1.672-3.435-2.165-7.856-1.557-12.155 1.213-8.56 7.072-17.72 18.581-17.72a2 2 0 0 1 0 4c-8.76 0-13.565 6.838-14.621 14.28a20.6 20.6 0 0 0-.107 4.982A7.976 7.976 0 0 1 32 24a7.986 7.986 0 0 1 6.33 3.11c1.113 1.013 2.011 2.28 2.694 3.682 1.67 3.435 2.165 7.856 1.557 12.155-1.213 8.56-7.072 17.72-18.581 17.72a2 2 0 0 1 0-4c8.757 0 13.565-6.838 14.619-14.28.285-1.951.283-3.933-.006-5.883a8.003 8.003 0 0 1-14.336-2.413",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ t.jsxs("g", { fill: "currentColor", opacity: 0.5, children: [
        /* @__PURE__ */ t.jsx("path", { d: "M35.333 32c0 2.365-1.36 4.203-3.874 5.427-2.566 1.245-6.144 1.717-9.846 1.192-7.44-1.054-14.28-5.862-14.28-14.619a2 2 0 0 0-4 0c0 11.51 9.163 17.368 17.72 18.581 4.299.608 8.72.112 12.155-1.557 3.485-1.696 6.125-4.723 6.125-9.024a2 2 0 0 0-4 0" }),
        /* @__PURE__ */ t.jsx("path", { d: "M28.667 32.832c0-2.368 1.36-4.205 3.874-5.427 2.566-1.248 6.144-1.717 9.846-1.194 7.44 1.056 14.28 5.861 14.28 14.621a2 2 0 1 0 4 0c0-11.51-9.163-17.368-17.72-18.581-4.3-.608-8.72-.115-12.155 1.557-3.486 1.693-6.126 4.72-6.126 9.021a2 2 0 0 0 4 0z" })
      ] })
    ]
  }
), W2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M33.96 39.077a2 2 0 0 1-.613-3.84 5.39 5.39 0 0 0 1.72-1.173 2 2 0 0 1 2.656-.155 2.002 2.002 0 0 1 1.88 2.544c-.56 1.99-1.6 3.939-2.947 5.726a2 2 0 0 1-3.192-2.408c.173-.232.339-.462.496-.694m-5.995.11a2 2 0 0 0 2.542-1.886 2 2 0 0 0-.155-2.65 5.38 5.38 0 0 1-1.179-1.723 2 2 0 0 0-3.834.613c-.235-.16-.467-.325-.694-.496a2 2 0 0 0-2.408 3.195c1.787 1.347 3.734 2.384 5.728 2.947m-10.162-7.331a2 2 0 0 0 3.146-2.467 21.016 21.016 0 0 1-2.693-4.472 2.001 2.001 0 1 0-3.659 1.611 24.969 24.969 0 0 0 3.206 5.328m-4.896-11.397a2 2 0 1 0 3.973-.475 13.64 13.64 0 0 1 .288-4.965 2 2 0 0 0-3.877-.976 17.639 17.639 0 0 0-.384 6.416M16.02 8.213a2 2 0 1 0 3.248 2.334 15.774 15.774 0 0 1 1.654-1.939 2 2 0 0 0-2.827-2.83 19.75 19.75 0 0 0-2.075 2.435M31.368 24.23c-.172.227-.338.459-.499.694a2 2 0 0 1 .614 3.837 5.38 5.38 0 0 0-1.72 1.176 2 2 0 0 1-2.654.155 2.007 2.007 0 0 1-1.882-2.544c.562-1.99 1.6-3.939 2.946-5.726a2 2 0 0 1 3.195 2.408m5.499.584a2.002 2.002 0 0 0-2.544 1.886 2 2 0 0 0 .157 2.65 5.357 5.357 0 0 1 1.176 1.72 2 2 0 0 0 3.837-.613c.23.16.462.325.694.499a2 2 0 0 0 2.405-3.195c-1.787-1.347-3.733-2.384-5.725-2.947m10.16 7.331a2 2 0 1 0-3.147 2.467 21.185 21.185 0 0 1 2.693 4.472 2 2 0 0 0 3.66-1.611 25.014 25.014 0 0 0-3.206-5.328m4.898 11.397a2 2 0 1 0-3.973.475c.208 1.659.11 3.342-.29 4.965a2 2 0 0 0 3.88.976 17.63 17.63 0 0 0 .383-6.416m-3.114 12.246a2 2 0 0 0-3.248-2.334 15.742 15.742 0 0 1-1.656 1.939 2 2 0 0 0 2.826 2.827 19.412 19.412 0 0 0 2.078-2.432M32.219 20.195a2 2 0 0 1 .338-2.808 25.027 25.027 0 0 1 5.328-3.206 2 2 0 0 1 1.611 3.662 21.016 21.016 0 0 0-4.472 2.693 2 2 0 0 1-2.805-.341m9.99-5.483a2 2 0 0 1 1.748-2.221 17.64 17.64 0 0 1 6.414.381 2 2 0 0 1-.976 3.88 13.641 13.641 0 0 0-4.966-.29 2 2 0 0 1-2.224-1.75zm11.204 1.35a2 2 0 0 1 2.79-.457c.837.603 1.65 1.294 2.432 2.075a2 2 0 1 1-2.827 2.827 15.702 15.702 0 0 0-1.941-1.654 2 2 0 0 1-.454-2.792M32.275 46.612a2 2 0 0 0-2.47-3.146 21.122 21.122 0 0 1-4.472 2.693 2 2 0 1 0 1.611 3.659 25.02 25.02 0 0 0 5.33-3.206m-11.4 4.896a2 2 0 1 0-.475-3.973 13.649 13.649 0 0 1-4.965-.288 1.999 1.999 0 1 0-.976 3.877c2.097.52 4.272.65 6.416.384M8.629 48.395a2 2 0 1 0 2.334-3.248 15.724 15.724 0 0 1-1.939-1.654 2 2 0 0 0-2.827 2.827 19.417 19.417 0 0 0 2.432 2.075",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M23.808 33.208c1.083 2.23 2.71 4.11 4.867 5.179-2.115.488-4.56.586-7.062.232-7.44-1.054-14.28-5.862-14.28-14.619a2 2 0 1 0-4 0c0 11.51 9.163 17.368 17.72 18.581 4.299.608 8.72.112 12.155-1.557 2.315-1.125 4.256-2.84 5.301-5.123.379 1.976.432 4.208.11 6.486-1.054 7.44-5.862 14.28-14.62 14.28a2 2 0 0 0 0 4c11.51 0 17.369-9.163 18.582-17.72.608-4.299.112-8.72-1.557-12.155-.923-1.899-2.24-3.547-3.947-4.653a20.476 20.476 0 0 1 5.307.072c7.445 1.056 14.283 5.861 14.283 14.621a2 2 0 0 0 4 0c0-11.51-9.163-17.368-17.72-18.581-4.3-.608-8.72-.115-12.155 1.557-1.845.896-3.45 2.165-4.557 3.8a20.174 20.174 0 0 1-.024-5.995c1.056-7.44 5.86-14.28 14.62-14.28a2 2 0 1 0 0-4c-11.508 0-17.367 9.163-18.58 17.72-.608 4.299-.115 8.72 1.557 12.155"
        }
      )
    ]
  }
), _2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 48a5.333 5.333 0 1 0 0-10.666A5.333 5.333 0 0 0 32 48M18 21.333a14 14 0 0 1 28 0v5.344c1.512.014 2.837.048 4 .134v-5.478a18 18 0 1 0-36 0v5.48a62.873 62.873 0 0 1 4-.136z"
        }
      )
    ]
  }
), b2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M40 5.333h-2.667c-7.541 0-11.314 0-13.656 2.344-2.344 2.342-2.344 6.115-2.344 13.656v21.334c0 7.541 0 11.314 2.344 13.656 2.342 2.344 6.115 2.344 13.656 2.344H40c7.541 0 11.315 0 13.656-2.344C56 53.98 56 50.208 56 42.667V21.333c0-7.541 0-11.314-2.344-13.656C51.315 5.333 47.54 5.333 40 5.333",
          opacity: 0.6
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21.333 21.333c0-4.101 0-7.085.376-9.333h-.376c-6.285 0-9.429 0-11.381 1.952S8 19.048 8 25.333v13.334c0 6.285 0 9.426 1.952 11.381C11.904 52 15.048 52 21.333 52h.376c-.376-2.248-.376-5.232-.376-9.333z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M38.747 30.587a2 2 0 0 1 0 2.826l-5.334 5.334a2 2 0 1 1-2.826-2.827l1.92-1.92H13.333a2 2 0 1 1 0-4h19.174l-1.92-1.92a2 2 0 1 1 2.826-2.827z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), O2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M40 5.333h-2.667c-7.541 0-11.314 0-13.656 2.344-2.344 2.342-2.344 6.115-2.344 13.656v21.334c0 7.541 0 11.314 2.344 13.656 2.342 2.344 6.115 2.344 13.656 2.344H40c7.541 0 11.315 0 13.656-2.344C56 53.98 56 50.208 56 42.667V21.333c0-7.541 0-11.314-2.344-13.656C51.315 5.333 47.54 5.333 40 5.333",
          opacity: 0.6
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21.333 21.333c0-4.101 0-7.085.376-9.333h-.376c-6.285 0-9.429 0-11.381 1.952S8 19.048 8 25.333v13.334c0 6.285 0 9.426 1.952 11.381C11.904 52 15.048 52 21.333 52h.376c-.376-2.248-.376-5.232-.376-9.333z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.92 30.587a2 2 0 0 0 0 2.826l5.333 5.334a2 2 0 0 0 2.827-2.827L18.16 34h19.173a2 2 0 1 0 0-4H18.16l1.92-1.92a2 2 0 1 0-2.827-2.827z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), S2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 58.667c-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 22a2 2 0 0 1 2 2v6h6a2 2 0 0 1 0 4h-6v6a2 2 0 0 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 0 1 2-2"
        }
      )
    ]
  }
), B2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M37.333 58.667H26.667c-10.056 0-15.086 0-18.208-3.126-3.126-3.122-3.126-8.152-3.126-18.208V26.667c0-10.056 0-15.086 3.126-18.208 3.122-3.126 8.178-3.126 18.288-3.126 1.616 0 2.909 0 4 .046-.035.213-.054.429-.054.65l-.026 7.558c0 2.925 0 5.512.28 7.594.304 2.259 1 4.518 2.845 6.363 1.84 1.84 4.101 2.539 6.36 2.843 2.083.28 4.67.28 7.595.28h10.805c.115 1.424.115 3.173.115 5.501v1.165c0 10.056 0 15.086-3.126 18.208-3.122 3.126-8.152 3.126-18.208 3.126",
          clipRule: "evenodd",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m23.61 37.395.262.469c.288.517.432.773.659.944.224.17.504.235 1.06.36l.51.117c1.968.446 2.952.667 3.187 1.419.235.755-.437 1.539-1.779 3.107l-.346.405c-.382.445-.574.667-.66.944-.084.277-.055.573 0 1.168l.054.541c.203 2.094.304 3.142-.31 3.606-.612.464-1.532.04-3.375-.808l-.475-.219c-.525-.24-.786-.363-1.064-.363-.277 0-.538.123-1.064.363l-.474.219c-1.843.85-2.766 1.272-3.376.808-.614-.464-.512-1.512-.31-3.606l.054-.541c.056-.595.085-.89 0-1.168-.086-.275-.278-.499-.66-.944l-.346-.405c-1.341-1.568-2.013-2.352-1.778-3.107.234-.752 1.218-.973 3.186-1.419l.507-.117c.56-.125.84-.187 1.067-.36.224-.17.368-.427.656-.944l.26-.47c1.014-1.82 1.52-2.727 2.278-2.727s1.264.906 2.278 2.728m7.083-31.368-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.191 14.191 0 0 0-2.555-7.043c-.25-.341-.421-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.021-.341-3.426-.373z"
        }
      )
    ]
  }
), z2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5.333 53.333a2 2 0 0 1 2-2H30V40h4v11.333h22.667a2 2 0 0 1 0 4H7.333a2 2 0 0 1-2-2",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M50.667 26.133v-3.816c0-4.562 0-6.845-1.438-8.328a5.792 5.792 0 0 0-.418-.389c-1.595-1.333-4.054-1.333-8.966-1.333h-.698c-2.155 0-3.23 0-4.235-.267a7.794 7.794 0 0 1-1.584-.608c-.91-.472-1.672-1.179-3.195-2.592l-1.026-.955c-.332-.32-.677-.627-1.035-.917a7.781 7.781 0 0 0-4.07-1.565c-.349-.03-.706-.03-1.429-.03-1.648 0-2.472 0-3.157.12-3.021.531-5.384 2.723-5.952 5.528-.13.638-.13 1.403-.13 2.934v12.218c0 6.536 0 9.806 2.186 11.835C17.707 40 21.227 40 28.267 40h7.466c7.04 0 10.56 0 12.747-2.03 2.187-2.031 2.187-5.3 2.187-11.837M36 18a2 2 0 0 0 0 4h8a2 2 0 1 0 0-4z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 58.667A5.333 5.333 0 1 0 32 48a5.333 5.333 0 0 0 0 10.667"
        }
      )
    ]
  }
), F2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M49.333 37.333C44.18 37.333 40 41.221 40 46.02c0 4.76 2.979 10.314 7.627 12.301a4.382 4.382 0 0 0 3.413 0c4.648-1.987 7.627-7.541 7.627-12.301 0-4.798-4.18-8.686-9.334-8.686m-34.666-32c-5.155 0-9.334 3.888-9.334 8.686 0 4.76 2.979 10.314 7.627 12.301a4.383 4.383 0 0 0 3.413 0C21.021 24.333 24 18.779 24 14.019c0-4.798-4.179-8.686-9.333-8.686",
          clipRule: "evenodd",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M52 46.667a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0m-34.667-32a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M30 13.333a2 2 0 0 1 2-2H43.02c7.336 0 10.125 9.582 3.936 13.52L19.195 42.52c-2.816 1.792-1.547 6.147 1.786 6.147h6.19l-.587-.587a2 2 0 1 1 2.83-2.827l4 4a2 2 0 0 1 0 2.827l-4 4a2 2 0 1 1-2.827-2.827l.586-.586H20.98c-7.336 0-10.126-9.582-3.936-13.52L44.805 21.48c2.814-1.792 1.547-6.147-1.789-6.147H32a2 2 0 0 1-2-2",
          clipRule: "evenodd"
        }
      )
    ]
  }
), T2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M54.763 54.763c3.904-3.91 3.904-10.192 3.904-22.763 0-.91 0-1.365-.04-1.83a10.779 10.779 0 0 0-2.456-5.93 22.11 22.11 0 0 0-1.288-1.344L41.103 9.117A22.5 22.5 0 0 0 39.76 7.83a10.781 10.781 0 0 0-5.93-2.453c-.465-.043-.918-.043-1.83-.043-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.856 3.904 22.76 1.827 1.827 4.168 2.8 7.43 3.315l4 .408c3.082.184 6.8.184 11.333.184s8.25 0 11.333-.184l4-.408c3.262-.518 5.608-1.488 7.43-3.312",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M18.667 19.333a2 2 0 0 0 0 4h16a2 2 0 1 0 0-4zm16.138 24c2.398 0 4.395 0 5.98.214 1.674.224 3.186.72 4.4 1.936 1.215 1.213 1.711 2.725 1.935 4.4.213 1.584.213 3.581.213 5.978v2.222l-4 .373V56c0-2.57-.005-4.299-.178-5.587-.166-1.229-.45-1.757-.8-2.104-.347-.346-.872-.632-2.102-.8-1.288-.17-3.016-.176-5.586-.176h-5.334c-2.57 0-4.298.006-5.586.179-1.23.165-1.758.45-2.104.8-.347.347-.632.872-.8 2.101-.17 1.288-.176 3.016-.176 5.587v2.47l-4-.398v-2.21c0-2.398 0-4.395.213-5.98.224-1.674.72-3.186 1.933-4.4 1.216-1.215 2.728-1.711 4.4-1.935 1.587-.214 3.587-.214 5.982-.214z"
        }
      )
    ]
  }
), P2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M54.168 29.752a24.417 24.417 0 0 1-33.82 22.79 24.419 24.419 0 1 1 33.82-22.79",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M50.237 50.237a1.928 1.928 0 0 1 2.726 0l5.141 5.139a1.93 1.93 0 0 1-2.728 2.728L50.24 52.96a1.928 1.928 0 0 1 0-2.725z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), A2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 58.667c-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M42.667 28.667a2 2 0 0 1-2-2V13.333a2 2 0 0 1 4 0v13.334a2 2 0 0 1-2 2m-23.334 8.666a2 2 0 0 1 4 0v13.334a2 2 0 0 1-4 0zm23.334 15.334a2 2 0 0 1-2-2V48a2 2 0 1 1 4 0v2.667a2 2 0 0 1-2 2M19.333 13.333a2 2 0 0 1 4 0V16a2 2 0 0 1-4 0z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M42.667 44.667a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667m0-4a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666m-14-14a7.333 7.333 0 1 0-14.667 0 7.333 7.333 0 0 0 14.667 0m-4 0a3.333 3.333 0 1 0-6.667 0 3.333 3.333 0 0 0 6.667 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), H2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M43.32 20.693 57.112 6.904l-.008-.008c-3.165-3.165-9.163-1.168-21.16 2.832l-13.73 4.576c-9.68 3.227-14.52 4.843-15.894 7.208a7.245 7.245 0 0 0 0 7.28c1.373 2.368 6.213 3.981 15.893 7.21 1.2.4 2.552.113 3.451-.775L40.347 20.68a2.107 2.107 0 0 1 2.973.013",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m49.694 41.787 4.578-13.734c3.995-11.986 5.995-17.984 2.837-21.152l-13.791 13.79a2.107 2.107 0 0 1-.014 2.978L28.861 37.981a3.726 3.726 0 0 0-.864 3.803c3.227 9.683 4.84 14.523 7.209 15.899a7.237 7.237 0 0 0 7.28 0c2.367-1.376 3.98-6.214 7.208-15.899z",
          opacity: 0.5
        }
      )
    ]
  }
), V2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M54.763 54.763c3.904-3.91 3.904-10.192 3.904-22.763 0-12.57 0-18.856-3.907-22.763C50.859 5.333 44.57 5.333 32 5.333c-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.856 3.904 22.76 3.91 3.907 10.192 3.907 22.763 3.907 12.57 0 18.856 0 22.76-3.907z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M18.667 28.667a2.001 2.001 0 0 1-1.315-3.507l9.165-8a2 2 0 0 1 2.632 3.013L24 24.667h21.333a2 2 0 1 1 0 4zm16.186 15.16a2 2 0 0 0 2.63 3.013l9.165-8a2 2 0 0 0-1.315-3.507H18.667a2 2 0 0 0 0 4H40z"
        }
      )
    ]
  }
), I2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M7.333 16.445c0-1.226.92-2.224 2.056-2.224h7.107c1.41-.04 2.656-1.008 3.136-2.442l.08-.254.307-.992c.186-.608.349-1.138.578-1.613.902-1.872 2.57-3.17 4.499-3.504.49-.083 1.005-.083 1.6-.083h9.275c.594 0 1.112 0 1.6.083 1.928.333 3.6 1.632 4.498 3.504.23.475.392 1.005.579 1.613l.307.992.08.254c.48 1.434 1.973 2.405 3.386 2.442h6.854c1.138 0 2.058.995 2.058 2.224 0 1.227-.92 2.222-2.056 2.222H9.387c-1.136 0-2.054-.995-2.054-2.222"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M30.952 58.667h2.099c7.218 0 10.826 0 13.176-2.302 2.346-2.304 2.586-6.08 3.066-13.629l.694-10.883c.26-4.098.392-6.146-.787-7.445-1.179-1.299-3.165-1.299-7.144-1.299h-20.11c-3.975 0-5.965 0-7.143 1.299-1.176 1.299-1.046 3.347-.787 7.445l.693 10.88c.48 7.555.72 11.328 3.067 13.632 2.344 2.302 5.957 2.302 13.176 2.302",
          opacity: 0.5
        }
      )
    ]
  }
), Z2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 48a5.333 5.333 0 1 0 0-10.666A5.333 5.333 0 0 0 32 48M18 21.333a14 14 0 0 1 27.56-3.501 2 2 0 0 0 3.872-.997A18 18 0 0 0 14 21.333v5.48a62.947 62.947 0 0 1 4-.136z"
        }
      )
    ]
  }
), $2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M26.667 58.667h10.666c10.056 0 15.086 0 18.208-3.126 3.126-3.122 3.126-8.152 3.126-18.208v-1.165c0-2.328 0-4.077-.115-5.501H47.747c-2.926 0-5.512 0-7.595-.28-2.259-.304-4.517-1-6.36-2.843-1.845-1.845-2.541-4.104-2.845-6.363-.28-2.082-.28-4.666-.28-7.594l.026-7.558c0-.221.019-.437.054-.65-1.091-.046-2.384-.046-4-.046-10.11 0-15.166 0-18.288 3.126-3.126 3.122-3.126 8.152-3.126 18.208v10.666c0 10.056 0 15.086 3.126 18.208 3.122 3.126 8.152 3.126 18.208 3.126",
          clipRule: "evenodd",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21.299 34.541a2 2 0 0 1 2.736 0l5.333 5a2 2 0 0 1-2.736 2.918l-1.965-1.84v8.714a2 2 0 1 1-4 0v-8.717L18.7 42.459a2 2 0 0 1-2.736-2.918zm9.394-28.514-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.193 14.193 0 0 0-2.555-7.043c-.25-.341-.421-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.021-.341-3.426-.373z"
        }
      )
    ]
  }
), Y2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 5.333c-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.856 3.904 22.76 3.91 3.907 10.192 3.907 22.763 3.907 12.57 0 18.856 0 22.76-3.907 3.907-3.901 3.907-10.19 3.907-22.76 0-12.57 0-18.856-3.907-22.763C50.859 5.333 44.57 5.333 32 5.333",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 16.667a2 2 0 0 1 2 2v16a2 2 0 0 1-4 0v-16a2 2 0 0 1 2-2m0 28.666A2.666 2.666 0 1 0 32 40a2.666 2.666 0 0 0 0 5.333"
        }
      )
    ]
  }
), U2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M37.333 56.667H26.667v4h10.666zm-30-19.334V26.667h-4v10.666zm49.334-1.165v1.165h4v-1.165zM39.709 12.296l10.558 9.501 2.674-2.976L42.387 9.32zm20.958 23.872c0-4.504.04-7.357-1.094-9.907l-3.656 1.63c.71 1.594.75 3.421.75 8.277zm-10.4-14.37c3.608 3.247 4.94 4.5 5.65 6.093l3.656-1.63c-1.136-2.552-3.282-4.426-6.632-7.44zM26.747 7.332c4.218 0 5.81.032 7.226.576l1.435-3.733c-2.272-.875-4.747-.843-8.661-.843zm15.64 1.99c-2.896-2.606-4.707-4.278-6.98-5.147l-1.431 3.733c1.419.544 2.613 1.579 5.733 4.387zm-15.72 47.344c-5.086 0-8.696-.006-11.44-.374-2.68-.36-4.227-1.037-5.355-2.165l-2.827 2.827c1.995 2 4.526 2.882 7.65 3.304 3.068.413 7 .408 11.972.408zM3.333 37.333c0 4.971-.005 8.902.408 11.971.422 3.125 1.307 5.656 3.302 7.653l2.826-2.826C8.744 53 8.067 51.453 7.707 48.77c-.368-2.739-.374-6.352-.374-11.438zm34 23.334c4.97 0 8.902.005 11.97-.408 3.126-.422 5.657-1.307 7.654-3.302l-2.826-2.826c-1.131 1.125-2.678 1.802-5.36 2.162-2.74.368-6.352.374-11.438.374zm19.334-23.334c0 5.086-.006 8.699-.374 11.44-.36 2.68-1.037 4.227-2.165 5.355l2.827 2.827c2-1.995 2.882-4.526 3.304-7.651.413-3.067.408-7 .408-11.97zM7.333 26.667c0-5.086.006-8.696.374-11.44.36-2.68 1.037-4.227 2.165-5.355L7.045 7.045c-2 1.995-2.882 4.526-3.304 7.651-.413 3.067-.408 7-.408 11.97zM26.747 3.333c-5 0-8.95-.005-12.03.408-3.138.422-5.677 1.307-7.674 3.302l2.826 2.826c1.13-1.125 2.68-1.802 5.379-2.162 2.755-.368 6.387-.374 11.499-.374z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M34.667 6.667v6.666c0 6.286 0 9.43 1.951 11.382 1.953 1.952 5.096 1.952 11.382 1.952h10.667",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M18.667 37.333 16 40l2.667 2.667m12 0 2.666 2.666L30.667 48m-4-10.667-4 10.667",
          opacity: 0.5
        }
      )
    ]
  }
), N2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        stroke: "#3D9EC4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 4,
        d: "M53.333 32H10.667m0 0 16-16m-16 16 16 16"
      }
    )
  }
), q2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-10.056 0-15.085 3.126-18.208 3.122-3.125 8.152-3.125 18.208-3.125h10.666c10.056 0 15.086 0 18.208 3.125 3.126 3.123 3.126 8.152 3.126 18.208v5.333c0 10.056 0 15.086-3.126 18.208-3.122 3.126-8.152 3.126-18.208 3.126H26.667c-10.056 0-15.086 0-18.208-3.126-3.126-3.122-3.126-8.152-3.126-18.208z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M18.667 10.667v-4m26.666 4v-4M5.333 24h53.334",
          opacity: 0.5
        }
      )
    ]
  }
), J2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M22.667 33.333 28 38.667l13.333-13.334"
        }
      )
    ]
  }
), G2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M16 29.333c0-7.541 0-11.314 2.344-13.656 2.341-2.344 6.115-2.344 13.656-2.344h8c7.541 0 11.315 0 13.656 2.344C56 18.02 56 21.792 56 29.333v13.334c0 7.541 0 11.314-2.344 13.656-2.341 2.344-6.115 2.344-13.656 2.344h-8c-7.541 0-11.315 0-13.656-2.344C16 53.98 16 50.208 16 42.667z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M16 50.667a8 8 0 0 1-8-8v-16C8 16.61 8 11.58 11.125 8.459c3.123-3.126 8.152-3.126 18.208-3.126H40a8 8 0 0 1 8 8",
          opacity: 0.5
        }
      )
    ]
  }
), K2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M10.667 48V16m42.666 0v32"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 26.667c11.781 0 21.333-4.774 21.333-10.667S43.781 5.333 32 5.333C20.22 5.333 10.667 10.107 10.667 16S20.219 26.667 32 26.667Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M53.333 32c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M53.333 48c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667"
        }
      )
    ]
  }
), X2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M34.667 6.667v6.666c0 6.286 0 9.43 1.952 11.382S41.715 26.667 48 26.667h10.667",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m6.077 50.97 1.944-.46-1.946.463zm52.59-18.095 2-.04-2 .037zM37.344 56.664h-10.67v4h10.667zM7.334 31.84v-5.173h-4v5.173zm32.389-19.544 10.56 9.501 2.674-2.976-10.56-9.501zm10.56 9.501c3.61 3.248 4.941 4.499 5.653 6.091l3.653-1.627c-1.138-2.552-3.285-4.426-6.632-7.44zM26.752 7.333c4.221 0 5.813.032 7.232.576l1.432-3.733c-2.272-.875-4.747-.843-8.664-.843zm15.645 1.99c-2.896-2.606-4.709-4.278-6.981-5.147l-1.432 3.733c1.421.544 2.619 1.579 5.739 4.387zM26.675 56.664c-5.088 0-8.702-.003-11.443-.37-2.683-.36-4.23-1.038-5.36-2.166l-2.827 2.827c1.995 2 4.526 2.882 7.654 3.304 3.069.413 7.002.408 11.973.408v-4zm10.666 4c4.976 0 8.907.008 11.976-.405 3.128-.422 5.659-1.307 7.654-3.302l-2.824-2.829c-1.128 1.128-2.678 1.805-5.363 2.165-2.739.368-6.355.371-11.44.371v4.003zM7.333 26.667c0-5.086.006-8.696.374-11.44.36-2.68 1.037-4.227 2.165-5.355L7.045 7.045c-1.997 1.995-2.885 4.52-3.304 7.648-.413 3.067-.408 7.003-.408 11.974zM26.752 3.333c-5 0-8.95-.005-12.032.408-3.139.422-5.68 1.31-7.675 3.304l2.827 2.827c1.128-1.128 2.68-1.805 5.379-2.165 2.754-.368 6.389-.374 11.501-.374zM47.667 35.95a10.247 10.247 0 0 0 11.365 0l-2.219-3.328a6.244 6.244 0 0 1-6.928 0zm-20.646 0a4.187 4.187 0 0 1 4.64 0l2.219-3.328a8.187 8.187 0 0 0-9.077 0zm-11.365 0a10.247 10.247 0 0 0 11.365 0l-2.218-3.328a6.253 6.253 0 0 1-6.931 0zm-4.64 0a4.186 4.186 0 0 1 4.64 0l2.216-3.328a8.179 8.179 0 0 0-9.075 0zm36.65 10.667a10.248 10.248 0 0 0 11.366 0l-2.219-3.328a6.245 6.245 0 0 1-6.928 0zm-4.64 0a4.187 4.187 0 0 1 4.64 0l2.22-3.328a8.187 8.187 0 0 0-9.078 0zm-11.365 0a10.247 10.247 0 0 0 11.366 0l-2.219-3.328a6.245 6.245 0 0 1-6.928 0zm-4.64 0a4.187 4.187 0 0 1 4.64 0l2.219-3.328a8.187 8.187 0 0 0-9.077 0zm16.006-10.667a4.187 4.187 0 0 1 4.64 0l2.218-3.328a8.187 8.187 0 0 0-9.077 0zM15.656 46.616a10.247 10.247 0 0 0 11.365 0l-2.218-3.328a6.254 6.254 0 0 1-6.931 0zm16.005-10.667a10.247 10.247 0 0 0 11.366 0l-2.219-3.328a6.245 6.245 0 0 1-6.928 0zM11.016 46.616a4.187 4.187 0 0 1 4.64 0l2.216-3.328a8.178 8.178 0 0 0-9.075 0zm-1.67 1.115 1.67-1.115-2.219-3.328L7.128 44.4zm-5.215 3.706c.52 2.182 1.402 4.006 2.914 5.518l2.827-2.827c-.867-.867-1.459-1.973-1.85-3.619l-3.894.928zm52.461-6.192c-.205 4.971-.877 7.315-2.445 8.883l2.824 2.83c2.746-2.742 3.41-6.529 3.618-11.55zm4.075-12.41c-.051-2.646-.227-4.659-1.078-6.571l-3.653 1.624c.499 1.123.683 2.435.73 5.021zm-1.635 3.114a3.66 3.66 0 0 0 1.635-3.114l-4 .074a.347.347 0 0 1 .146-.288zM7.128 44.4a18.62 18.62 0 0 0-1.752 1.256 4.526 4.526 0 0 0-1.333 1.805l3.722 1.467a.169.169 0 0 1 .027-.05c.057-.07.12-.132.19-.187.26-.224.65-.486 1.365-.96zm.893 6.11c-.118-.436-.21-.877-.274-1.323-.016-.176 0-.211.018-.259l-3.722-1.467c-.579 1.478-.19 2.814.088 3.976zm51.011-3.894a1.572 1.572 0 0 1-2.44-1.37l3.997.162a2.43 2.43 0 0 0-3.776-2.12zM3.333 31.84c0 .37-.002.739.027 1.027l3.979-.443-.003-.104-.003-.48zm5.464.781-.4.267c-.096.061-.112.067-.09.053l1.84 3.555c.256-.133.56-.341.869-.547zm-5.434.246a4.666 4.666 0 0 0 6.781 3.626l-1.837-3.549a.667.667 0 0 1-.968-.52z"
        }
      )
    ]
  }
), Q2 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M13.333 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M50.667 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        }
      )
    ]
  }
), t1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M37.333 56.667H26.667v4h10.666zm-30-19.334V26.667h-4v10.666zm49.334-1.165v1.165h4v-1.165zM39.709 12.296l10.558 9.501 2.674-2.976L42.387 9.32zm20.958 23.872c0-4.504.04-7.357-1.094-9.907l-3.656 1.63c.71 1.594.75 3.421.75 8.277zm-10.4-14.37c3.608 3.247 4.94 4.5 5.65 6.093l3.656-1.63c-1.136-2.552-3.282-4.426-6.632-7.44zM26.747 7.332c4.218 0 5.81.032 7.226.576l1.435-3.733c-2.272-.875-4.747-.843-8.661-.843zm15.64 1.99c-2.896-2.606-4.707-4.278-6.98-5.147l-1.431 3.733c1.419.544 2.613 1.579 5.733 4.387zm-15.72 47.344c-5.086 0-8.696-.006-11.44-.374-2.68-.36-4.227-1.037-5.355-2.165l-2.827 2.827c1.995 2 4.526 2.882 7.65 3.304 3.068.413 7 .408 11.972.408zM3.333 37.333c0 4.971-.005 8.902.408 11.971.422 3.125 1.307 5.656 3.302 7.653l2.826-2.826C8.744 53 8.067 51.453 7.707 48.77c-.368-2.739-.374-6.352-.374-11.438zm34 23.334c4.97 0 8.902.005 11.97-.408 3.126-.422 5.657-1.307 7.654-3.302l-2.826-2.826c-1.131 1.125-2.678 1.802-5.36 2.162-2.74.368-6.352.374-11.438.374zm19.334-23.334c0 5.086-.006 8.699-.374 11.44-.36 2.68-1.037 4.227-2.165 5.355l2.827 2.827c2-1.995 2.882-4.526 3.304-7.651.413-3.067.408-7 .408-11.97zM7.333 26.667c0-5.086.006-8.696.374-11.44.36-2.68 1.037-4.227 2.165-5.355L7.045 7.045c-2 1.995-2.882 4.526-3.304 7.651-.413 3.067-.408 7-.408 11.97zM26.747 3.333c-5 0-8.95-.005-12.03.408-3.138.422-5.677 1.307-7.674 3.302l2.826 2.826c1.13-1.125 2.68-1.802 5.379-2.162 2.755-.368 6.387-.374 11.499-.374z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M34.667 6.667v6.666c0 6.286 0 9.43 1.951 11.382 1.953 1.952 5.096 1.952 11.382 1.952h10.667",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M22.667 36v13.333m0 0 5.333-5m-5.333 5-5.334-5",
          opacity: 0.5
        }
      )
    ]
  }
), e1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M58.667 15.504v1.84c0 2.768 0 4.152-.694 5.299-.693 1.146-1.954 1.858-4.485 3.282L45.72 30.3c-1.696.954-2.547 1.434-3.152 1.96a7.147 7.147 0 0 0-2.4 3.973c-.168.76-.168 1.65-.168 3.43v7.12c0 5.09 0 7.634-1.781 8.749-1.782 1.114-4.286.133-9.296-1.824-2.387-.934-3.58-1.398-4.251-2.344C24 50.419 24 49.203 24 46.779v-7.12c0-1.776 0-2.667-.17-3.427a7.147 7.147 0 0 0-2.395-3.973c-.608-.526-1.46-1.006-3.155-1.96l-7.768-4.374c-2.53-1.424-3.795-2.133-4.485-3.28-.694-1.152-.694-2.536-.694-5.304v-1.84"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M58.667 15.507c0-3.539 0-5.307-1.174-6.408C56.325 8 54.44 8 50.667 8H13.333c-3.77 0-5.656 0-6.826 1.099-1.174 1.098-1.174 2.869-1.174 6.408",
          opacity: 0.5
        }
      )
    ]
  }
), r1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        stroke: "#3D9EC4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 4,
        d: "M52 32 38.667 18.667M52 32 38.667 45.333M52 32H25.333C20.888 32 12 34.667 12 45.333"
      }
    )
  }
), o1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32.544c0-6.104 0-9.155 1.387-11.683 1.381-2.53 3.912-4.098 8.97-7.24l5.334-3.309C26.37 6.992 29.045 5.333 32 5.333s5.627 1.659 10.976 4.979l5.333 3.31c5.059 3.14 7.59 4.709 8.974 7.24 1.384 2.527 1.384 5.578 1.384 11.68V36.6c0 10.4 0 15.603-3.126 18.835-3.122 3.232-8.152 3.232-18.208 3.232H26.667c-10.056 0-15.086 0-18.208-3.232-3.126-3.232-3.126-8.432-3.126-18.835z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M24 42.667c2.267 1.68 5.027 2.666 8 2.666s5.733-.986 8-2.666"
        }
      )
    ]
  }
), l1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M42.667 26.667a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "m5.333 33.333 4.672-4.088a6.133 6.133 0 0 1 8.374.28l11.44 11.44a5.333 5.333 0 0 0 6.837.592l.797-.56a8 8 0 0 1 9.95.6L56 49.333",
          opacity: 0.5
        }
      )
    ]
  }
), n1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M24 32a2.667 2.667 0 1 1-5.333 0A2.667 2.667 0 0 1 24 32m10.667 0a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0m10.666 0A2.667 2.667 0 1 1 40 32a2.667 2.667 0 0 1 5.333 0"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      )
    ]
  }
), c1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M37.888 36.139A10.092 10.092 0 0 0 48 26.069 10.09 10.09 0 0 0 37.888 16a10.091 10.091 0 0 0-10.11 10.07c0 2.575 1.174 4.45 1.174 4.45L16.731 42.693c-.55.547-1.318 1.968 0 3.28l1.41 1.403c.547.47 1.928 1.125 3.056 0l1.646-1.637c1.645 1.637 3.528.701 4.232-.235 1.176-1.64-.235-3.28-.235-3.28l.472-.467c2.256 2.248 4.232.936 4.936 0 1.176-1.64 0-3.28 0-3.28-.47-.936-1.41-.936-.235-2.106l1.414-1.406c1.125.936 3.442 1.174 4.461 1.174Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      )
    ]
  }
), i1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M13.277 25.827c-5.296-2.118-7.944-3.176-7.944-4.494 0-1.317 2.648-2.373 7.944-4.493l7.488-2.995c5.296-2.12 7.947-3.178 11.235-3.178 3.29 0 5.939 1.058 11.235 3.178l7.488 2.995c5.296 2.117 7.944 3.176 7.944 4.493 0 1.318-2.648 2.374-7.944 4.494l-7.488 2.997C37.939 30.941 35.288 32 32 32c-3.29 0-5.939-1.059-11.235-3.176z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "m15.376 26.667-2.099.84C7.981 29.624 5.333 30.685 5.333 32c0 1.315 2.648 2.373 7.944 4.493l7.488 2.998c5.296 2.117 7.947 3.176 11.235 3.176 3.29 0 5.939-1.059 11.235-3.176l7.488-2.998c5.296-2.117 7.944-3.178 7.944-4.493 0-1.315-2.648-2.373-7.944-4.493l-2.1-.84M15.377 37.333l-2.099.84c-5.296 2.118-7.944 3.179-7.944 4.494 0 1.317 2.648 2.373 7.944 4.493l7.488 2.997c5.296 2.118 7.947 3.176 11.235 3.176 3.29 0 5.939-1.058 11.235-3.178l7.488-2.995c5.296-2.117 7.944-3.176 7.944-4.493 0-1.315-2.648-2.374-7.944-4.494l-2.1-.84",
          opacity: 0.5
        }
      )
    ]
  }
), a1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M41.941 10.357c3.824-3.84 9.419-3.92 12.518-.81 3.104 3.114 3.018 8.746-.808 12.586l-6.464 6.488a2 2 0 1 0 2.834 2.824l6.464-6.488c5.094-5.117 5.734-13.285.808-18.234-4.933-4.952-13.085-4.307-18.186.81L26.18 20.512c-5.098 5.117-5.738 13.285-.808 18.232a2 2 0 1 0 2.832-2.821c-3.101-3.115-3.018-8.747.808-12.587z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M38.627 25.253a2.002 2.002 0 1 0-2.835 2.827c3.104 3.115 3.019 8.744-.808 12.587l-12.93 12.976c-3.825 3.84-9.42 3.92-12.518.81-3.101-3.114-3.019-8.746.808-12.586l6.464-6.488a2 2 0 1 0-2.832-2.824l-6.464 6.488C2.416 44.16 1.776 52.328 6.707 57.28c4.933 4.955 13.085 4.307 18.184-.81l12.928-12.98c5.093-5.114 5.733-13.285.808-18.231z",
          opacity: 0.5
        }
      )
    ]
  }
), s1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M27.045 27.635C36.501 18.179 58.437 41.627 44.065 56",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M36.955 36.365C27.499 45.821 5.563 22.373 19.935 8",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M27.635 36.955C18.179 27.499 41.627 5.563 56 19.936",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M36.365 27.045C45.821 36.501 22.373 58.437 8 44.064",
          opacity: 0.5
        }
      )
    ]
  }
), h1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M32 26.667c13.333 0 12.267 32-8 32",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M32.832 37.333c-13.333 0-12.267-32 8-32",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M26.667 32.832c0-13.333 32-12.267 32 8",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M37.333 32c0 13.333-32 12.267-32-8",
          opacity: 0.5
        }
      )
    ]
  }
), d1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M32 26.667c13.333 0 12.267 32-8 32"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M32.832 37.333c-13.333 0-12.267-32 8-32"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M28.35 28.523c9.429-9.427 31.3 13.954 16.97 28.285",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M36.48 35.477C27.053 44.907 5.179 21.52 19.51 7.192",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M28.939 36.064C19.509 26.64 42.89 4.763 57.22 19.094",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M35.893 27.936c9.427 9.427-13.954 31.301-28.285 16.97",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M26.667 32.832c0-13.333 32-12.267 32 8"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M37.333 32c0 13.333-32 12.267-32-8"
        }
      )
    ]
  }
), u1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 48a5.333 5.333 0 1 0 0-10.667A5.333 5.333 0 0 0 32 48Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M16 26.667v-5.334a16 16 0 1 1 32 0v5.334",
          opacity: 0.5
        }
      )
    ]
  }
), p1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M21.333 42.667c0 7.541 0 11.314 2.344 13.656 2.342 2.344 6.115 2.344 13.656 2.344H40c7.541 0 11.315 0 13.656-2.344C56 53.98 56 50.208 56 42.667V21.333c0-7.541 0-11.314-2.344-13.656C51.315 5.333 47.54 5.333 40 5.333h-2.667c-7.541 0-11.314 0-13.656 2.344-2.344 2.342-2.344 6.115-2.344 13.656"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M21.333 52c-6.285 0-9.429 0-11.381-1.952C8 48.093 8 44.952 8 38.667V25.333c0-6.285 0-9.429 1.952-11.381S15.048 12 21.333 12",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M16 32h24m0 0-6.667 6.667M40 32l-6.667-6.667"
        }
      )
    ]
  }
), v1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M21.339 18.667c.032-5.8.288-8.942 2.338-10.99 2.342-2.344 6.115-2.344 13.656-2.344H40c7.541 0 11.315 0 13.656 2.344C56 10.02 56 13.792 56 21.333v21.334c0 7.541 0 11.314-2.344 13.656-2.341 2.344-6.115 2.344-13.656 2.344h-2.667c-7.541 0-11.314 0-13.656-2.344-2.05-2.048-2.306-5.19-2.338-10.99"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M21.333 52c-6.285 0-9.429 0-11.381-1.952C8 48.093 8 44.952 8 38.667V25.333c0-6.285 0-9.429 1.952-11.381S15.048 12 21.333 12",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M40 32H16m0 0 5.333 5.333M16 32l5.333-5.333"
        }
      )
    ]
  }
), f1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M40 32h-8m0 0h-8m8 0v-8m0 8v8"
        }
      )
    ]
  }
), w1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M37.333 56.667H26.667v4h10.666zm-30-19.334V26.667h-4v10.666zm49.334-1.165v1.165h4v-1.165zM39.709 12.296l10.558 9.501 2.674-2.976L42.387 9.32zm20.958 23.872c0-4.504.04-7.357-1.094-9.907l-3.656 1.63c.71 1.594.75 3.421.75 8.277zm-10.4-14.37c3.608 3.247 4.94 4.5 5.65 6.093l3.656-1.63c-1.136-2.552-3.282-4.426-6.632-7.44zM26.747 7.332c4.218 0 5.81.032 7.226.576l1.435-3.733c-2.272-.875-4.747-.843-8.661-.843zm15.64 1.99c-2.896-2.606-4.707-4.278-6.98-5.147l-1.431 3.733c1.419.544 2.613 1.579 5.733 4.387zm-15.72 47.344c-5.086 0-8.696-.006-11.44-.374-2.68-.36-4.227-1.037-5.355-2.165l-2.827 2.827c1.995 2 4.526 2.882 7.65 3.304 3.068.413 7 .408 11.972.408zM3.333 37.333c0 4.971-.005 8.902.408 11.971.422 3.125 1.307 5.656 3.302 7.653l2.826-2.826C8.744 53 8.067 51.453 7.707 48.77c-.368-2.739-.374-6.352-.374-11.438zm34 23.334c4.97 0 8.902.005 11.97-.408 3.126-.422 5.657-1.307 7.654-3.302l-2.826-2.826c-1.131 1.125-2.678 1.802-5.36 2.162-2.74.368-6.352.374-11.438.374zm19.334-23.334c0 5.086-.006 8.699-.374 11.44-.36 2.68-1.037 4.227-2.165 5.355l2.827 2.827c2-1.995 2.882-4.526 3.304-7.651.413-3.067.408-7 .408-11.97zM7.333 26.667c0-5.086.006-8.696.374-11.44.36-2.68 1.037-4.227 2.165-5.355L7.045 7.045c-2 1.995-2.882 4.526-3.304 7.651-.413 3.067-.408 7-.408 11.97zM26.747 3.333c-5 0-8.95-.005-12.03.408-3.138.422-5.677 1.307-7.674 3.302l2.826 2.826c1.13-1.125 2.68-1.802 5.379-2.162 2.755-.368 6.387-.374 11.499-.374z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M34.667 6.667v6.666c0 6.286 0 9.43 1.952 11.382S41.715 26.667 48 26.667h10.667m-36.944 8.061C22.736 32.907 23.243 32 24 32c.757 0 1.264.907 2.277 2.728l.262.47c.288.517.432.773.656.943.226.171.506.235 1.066.36l.507.118c1.968.445 2.952.666 3.187 1.418.234.755-.438 1.539-1.779 3.107l-.347.405c-.381.446-.573.667-.658.944-.086.278-.056.574 0 1.168l.053.542c.203 2.093.304 3.141-.307 3.605-.613.464-1.536.04-3.378-.808l-.475-.219c-.525-.24-.787-.362-1.064-.362s-.539.122-1.064.362l-.475.219c-1.842.85-2.765 1.272-3.376.808-.613-.464-.512-1.512-.309-3.605l.053-.542c.056-.594.086-.89 0-1.168-.085-.274-.277-.498-.658-.944l-.347-.405c-1.341-1.568-2.013-2.352-1.779-3.107.235-.752 1.219-.973 3.187-1.418l.507-.118c.56-.125.84-.186 1.066-.36.224-.17.368-.426.656-.944z",
          opacity: 0.5
        }
      )
    ]
  }
), x1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M44 20h-8",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M13.333 13.912c0-1.528 0-2.293.13-2.93.569-2.806 2.934-4.998 5.953-5.529.685-.12 1.51-.12 3.157-.12.72 0 1.083 0 1.43.03a7.804 7.804 0 0 1 4.069 1.565c.267.208.523.445 1.035.917l1.026.955c1.523 1.413 2.286 2.12 3.195 2.592a7.746 7.746 0 0 0 1.584.608c1.005.267 2.08.267 4.235.267h.696c4.914 0 7.373 0 8.968 1.333.146.123.288.253.418.39 1.438 1.482 1.438 3.765 1.438 8.327v3.816c0 6.536 0 9.806-2.187 11.835C46.293 40 42.773 40 35.733 40h-7.466c-7.04 0-10.56 0-12.747-2.03-2.187-2.031-2.187-5.303-2.187-11.837z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M58.667 53.333H37.333m-32 0h21.334M32 48v-8",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 58.667A5.333 5.333 0 1 0 32 48a5.333 5.333 0 0 0 0 10.667Z"
        }
      )
    ]
  }
), g1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 14.019c0-4.798 4.179-8.686 9.334-8.686C19.82 5.333 24 9.221 24 14.02c0 4.76-2.979 10.314-7.627 12.301a4.37 4.37 0 0 1-3.413 0c-4.648-1.987-7.627-7.541-7.627-12.301Zm34.667 32c0-4.798 4.179-8.686 9.333-8.686 5.155 0 9.334 3.888 9.334 8.686 0 4.76-2.98 10.314-7.627 12.301a4.368 4.368 0 0 1-3.413 0C42.979 56.333 40 50.779 40 46.019Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 11.333a2 2 0 0 0 0 4zm0 39.334 1.413 1.413a2 2 0 0 0 0-2.827zm-2.587-5.414a2 2 0 0 0-2.826 2.827zm-2.826 8a2 2 0 1 0 2.826 2.827zm16.432-41.92h-11.02v4h11.02zm-11.02 37.334H20.982v4H32zM44.809 21.48 17.045 39.147l2.147 3.373 27.763-17.667zM33.413 49.253l-4-4-2.826 2.827 4 4zm-2.826 0-4 4 2.826 2.827 4-4zm-9.606-.586c-3.333 0-4.602-4.355-1.79-6.147l-2.146-3.373c-6.19 3.938-3.4 13.52 3.936 13.52zM43.02 15.333c3.333 0 4.602 4.355 1.789 6.147l2.147 3.373c6.189-3.938 3.4-13.52-3.936-13.52z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 5.333,
          d: "M49.333 46.667h.024m-34.717-32h.027"
        }
      )
    ]
  }
), C1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M9.237 54.763c3.91 3.904 10.192 3.904 22.763 3.904 12.57 0 18.856 0 22.76-3.907 3.907-3.901 3.907-10.19 3.907-22.76 0-.91 0-1.365-.04-1.83a10.779 10.779 0 0 0-2.456-5.93 22.11 22.11 0 0 0-1.288-1.344L41.103 9.117A22.5 22.5 0 0 0 39.76 7.83a10.781 10.781 0 0 0-5.93-2.453c-.465-.043-.918-.043-1.83-.043-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.859 3.904 22.763Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M45.333 58.667V56c0-5.03 0-7.541-1.562-9.104-1.563-1.563-4.075-1.563-9.105-1.563h-5.333c-5.03 0-7.541 0-9.104 1.563-1.562 1.563-1.562 4.075-1.562 9.104v2.667"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M18.667 21.333h16",
          opacity: 0.5
        }
      )
    ]
  }
), m1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsxs(
        "mask",
        {
          id: "OutlineSearch_svg__a",
          width: 58,
          height: 58,
          x: 3,
          y: 3,
          maskUnits: "userSpaceOnUse",
          style: {
            maskType: "luminance"
          },
          children: [
            /* @__PURE__ */ t.jsx(
              "path",
              {
                stroke: "gray",
                strokeWidth: 4,
                d: "M30.667 56C44.657 56 56 44.658 56 30.667 56 16.675 44.658 5.333 30.667 5.333c-13.992 0-25.334 11.342-25.334 25.334C5.333 44.657 16.675 56 30.667 56Z"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "path",
              {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 4,
                d: "m53.333 53.333 5.334 5.334"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ t.jsx("g", { mask: "url(#OutlineSearch_svg__a)", children: /* @__PURE__ */ t.jsx("path", { fill: "currentColor", d: "M0 0h64v64H0z" }) })
    ]
  }
), j1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M21.333 32a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667ZM42.667 32a5.333 5.333 0 1 1 0 10.667 5.333 5.333 0 0 1 0-10.667Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M21.333 37.333v13.334m21.334-24V13.333m-21.334 0V16m21.334 34.667V48"
        }
      )
    ]
  }
), k1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "m49.696 41.787 4.576-13.734c4-11.994 6-17.992 2.832-21.157-3.165-3.165-9.163-1.168-21.16 2.832l-13.73 4.576c-9.68 3.227-14.52 4.843-15.894 7.208a7.245 7.245 0 0 0 0 7.28c1.373 2.368 6.213 3.981 15.893 7.21 1.558.518 2.334.777 2.984 1.211a5.8 5.8 0 0 1 1.592 1.592c.435.651.694 1.427 1.211 2.982 3.227 9.68 4.843 14.522 7.208 15.898a7.253 7.253 0 0 0 7.283 0c2.365-1.376 3.976-6.216 7.205-15.898Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M43.232 23.595a2 2 0 0 0-2.813-2.843zm-14.8 14.634 14.8-14.634-2.813-2.843-14.8 14.635 2.816 2.842z",
          opacity: 0.5
        }
      )
    ]
  }
), M1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M45.333 26.667H18.667l9.167-8m-9.167 18.666h26.666l-9.165 8"
        }
      )
    ]
  }
), y1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M54.667 16H9.333m40.888 6.667-1.226 18.4c-.472 7.077-.707 10.616-3.014 12.773C43.675 56 40.128 56 33.031 56h-2.063c-7.093 0-10.64 0-12.95-2.16-2.306-2.157-2.54-5.696-3.013-12.773l-1.226-18.4"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M17.333 16h.294a5.333 5.333 0 0 0 4.88-3.52l.09-.275.259-.776c.221-.664.333-.994.48-1.277a4 4 0 0 1 2.917-2.101C26.565 8 26.915 8 27.613 8h8.774c.698 0 1.048 0 1.36.05a4 4 0 0 1 2.917 2.102c.147.283.259.613.48 1.277l.259.776A5.333 5.333 0 0 0 46.667 16",
          opacity: 0.5
        }
      )
    ]
  }
), E1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656Z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M32 48a5.333 5.333 0 1 0 0-10.667A5.333 5.333 0 0 0 32 48Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M16 26.667v-5.334a16 16 0 0 1 31.496-4",
          opacity: 0.5
        }
      )
    ]
  }
), R1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M37.333 56.667H26.667v4h10.666zm-30-19.334V26.667h-4v10.666zm49.334-1.165v1.165h4v-1.165zM39.709 12.296l10.558 9.501 2.674-2.976L42.387 9.32zm20.958 23.872c0-4.504.04-7.357-1.094-9.907l-3.656 1.63c.71 1.594.75 3.421.75 8.277zm-10.4-14.37c3.608 3.247 4.94 4.5 5.65 6.093l3.656-1.63c-1.136-2.552-3.282-4.426-6.632-7.44zM26.747 7.332c4.218 0 5.81.032 7.226.576l1.435-3.733c-2.272-.875-4.747-.843-8.661-.843zm15.64 1.99c-2.896-2.606-4.707-4.278-6.98-5.147l-1.431 3.733c1.419.544 2.613 1.579 5.733 4.387zm-15.72 47.344c-5.086 0-8.696-.006-11.44-.374-2.68-.36-4.227-1.037-5.355-2.165l-2.827 2.827c1.995 2 4.526 2.882 7.65 3.304 3.068.413 7 .408 11.972.408zM3.333 37.333c0 4.971-.005 8.902.408 11.971.422 3.125 1.307 5.656 3.302 7.653l2.826-2.826C8.744 53 8.067 51.453 7.707 48.77c-.368-2.739-.374-6.352-.374-11.438zm34 23.334c4.97 0 8.902.005 11.97-.408 3.126-.422 5.657-1.307 7.654-3.302l-2.826-2.826c-1.131 1.125-2.678 1.802-5.36 2.162-2.74.368-6.352.374-11.438.374zm19.334-23.334c0 5.086-.006 8.699-.374 11.44-.36 2.68-1.037 4.227-2.165 5.355l2.827 2.827c2-1.995 2.882-4.526 3.304-7.651.413-3.067.408-7 .408-11.97zM7.333 26.667c0-5.086.006-8.696.374-11.44.36-2.68 1.037-4.227 2.165-5.355L7.045 7.045c-2 1.995-2.882 4.526-3.304 7.651-.413 3.067-.408 7-.408 11.97zM26.747 3.333c-5 0-8.95-.005-12.03.408-3.138.422-5.677 1.307-7.674 3.302l2.826 2.826c1.13-1.125 2.68-1.802 5.379-2.162 2.755-.368 6.387-.374 11.499-.374z"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M34.667 6.667v6.666c0 6.286 0 9.43 1.951 11.382 1.953 1.952 5.096 1.952 11.382 1.952h10.667",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M22.667 49.333V36m0 0-5.334 5m5.334-5L28 41",
          opacity: 0.5
        }
      )
    ]
  }
), D1 = ({
  size: r = 64,
  ...o
}) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: r,
    viewBox: "0 0 64 64",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeLinecap: "round",
          strokeWidth: 4,
          d: "M32 18.667v16"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M32 45.333A2.667 2.667 0 1 0 32 40a2.667 2.667 0 0 0 0 5.333"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          stroke: "#3D9EC4",
          strokeWidth: 4,
          d: "M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z",
          opacity: 0.5
        }
      )
    ]
  }
);
export {
  h2 as FilledAssets,
  d2 as FilledBack,
  u2 as FilledCalendar,
  p2 as FilledCheck,
  v2 as FilledCopy,
  f2 as FilledDatabase,
  w2 as FilledDestroyed,
  x2 as FilledDots,
  g2 as FilledDownload,
  C2 as FilledFilter,
  m2 as FilledForward,
  j2 as FilledHome,
  k2 as FilledImage,
  M2 as FilledIndeterminate,
  y2 as FilledKey,
  E2 as FilledLayer,
  R2 as FilledLink,
  D2 as FilledLoader0,
  L2 as FilledLoader1,
  W2 as FilledLoader2,
  _2 as FilledLock,
  b2 as FilledLogin,
  O2 as FilledLogout,
  S2 as FilledPlus,
  B2 as FilledPortfolio,
  z2 as FilledRepo,
  F2 as FilledRoute,
  T2 as FilledSave,
  P2 as FilledSearch,
  A2 as FilledSettings,
  H2 as FilledShare,
  V2 as FilledSync,
  I2 as FilledTrash,
  Z2 as FilledUnlock,
  $2 as FilledUpload,
  Y2 as FilledWarning,
  U2 as OutlineAssets,
  N2 as OutlineBack,
  q2 as OutlineCalendar,
  J2 as OutlineCheck,
  G2 as OutlineCopy,
  K2 as OutlineDatabase,
  X2 as OutlineDestroyed,
  Q2 as OutlineDots,
  t1 as OutlineDownload,
  e1 as OutlineFilter,
  r1 as OutlineForward,
  o1 as OutlineHome,
  l1 as OutlineImage,
  n1 as OutlineIndeterminate,
  c1 as OutlineKey,
  i1 as OutlineLayer,
  a1 as OutlineLink,
  s1 as OutlineLoader0,
  h1 as OutlineLoader1,
  d1 as OutlineLoader2,
  u1 as OutlineLock,
  p1 as OutlineLogin,
  v1 as OutlineLogout,
  f1 as OutlinePlus,
  w1 as OutlinePortfolio,
  x1 as OutlineRepo,
  g1 as OutlineRoute,
  C1 as OutlineSave,
  m1 as OutlineSearch,
  j1 as OutlineSettings,
  k1 as OutlineShare,
  M1 as OutlineSync,
  y1 as OutlineTrash,
  E1 as OutlineUnlock,
  R1 as OutlineUpload,
  D1 as OutlineWarning
};
