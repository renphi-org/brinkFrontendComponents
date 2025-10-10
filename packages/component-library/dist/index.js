import { defineComponent as G, createElementBlock as S, openBlock as m, normalizeClass as ie, unref as a, renderSlot as L, createBlock as I, withCtx as C, computed as J, onMounted as tt, nextTick as Ct, getCurrentScope as Zt, onScopeDispose as Yt, isRef as Fe, reactive as Te, getCurrentInstance as Pt, ref as ue, readonly as Qt, watch as ce, toRefs as it, shallowRef as zt, h as Xe, mergeProps as X, normalizeProps as _t, guardReactiveProps as At, createVNode as y, createElementVNode as M, mergeModels as Se, useModel as we, toValue as Ze, Fragment as le, createCommentVNode as j, renderList as fe, resolveDynamicComponent as Ge, toDisplayString as F, createTextVNode as pe, watchEffect as eo, useTemplateRef as to, resolveComponent as oo, resolveDirective as so, withDirectives as ro } from "vue";
import { Primitive as Mt, useForwardPropsEmits as Ee, PaginationRoot as no, PaginationList as ao, useForwardProps as ye, PaginationFirst as lo, PaginationLast as io, PaginationNext as co, PaginationPrev as uo, SelectRoot as mo, SelectPortal as fo, SelectContent as po, SelectViewport as go, SelectItem as ho, SelectItemIndicator as bo, SelectItemText as vo, SelectScrollDownButton as yo, SelectScrollUpButton as xo, SelectValue as wo, DropdownMenuSeparator as ko, SelectTrigger as So, CheckboxRoot as Co, CheckboxIndicator as Po } from "reka-ui";
function $t(e) {
  var t, o, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (o = $t(e[t])) && (s && (s += " "), s += o);
  } else for (o in e) e[o] && (s && (s += " "), s += o);
  return s;
}
function Bt() {
  for (var e, t, o = 0, s = "", r = arguments.length; o < r; o++) (e = arguments[o]) && (t = $t(e)) && (s && (s += " "), s += t);
  return s;
}
const ct = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, dt = Bt, ot = (e, t) => (o) => {
  var s;
  if (t?.variants == null) return dt(e, o?.class, o?.className);
  const { variants: r, defaultVariants: n } = t, l = Object.keys(r).map((u) => {
    const c = o?.[u], v = n?.[u];
    if (c === null) return null;
    const k = ct(c) || ct(v);
    return r[u][k];
  }), d = o && Object.entries(o).reduce((u, c) => {
    let [v, k] = c;
    return k === void 0 || (u[v] = k), u;
  }, {}), i = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((u, c) => {
    let { class: v, className: k, ..._ } = c;
    return Object.entries(_).every((B) => {
      let [$, E] = B;
      return Array.isArray(E) ? E.includes({
        ...n,
        ...d
      }[$]) : {
        ...n,
        ...d
      }[$] === E;
    }) ? [
      ...u,
      v,
      k
    ] : u;
  }, []);
  return dt(e, l, i, o?.class, o?.className);
}, st = "-", zo = (e) => {
  const t = Ao(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const d = l.split(st);
      return d[0] === "" && d.length !== 1 && d.shift(), Tt(d, t) || _o(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const i = o[l] || [];
      return d && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, Tt = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], s = t.nextPart.get(o), r = s ? Tt(e.slice(1), s) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const n = e.join(st);
  return t.validators.find(({
    validator: l
  }) => l(n))?.classGroupId;
}, ut = /^\[(.+)\]$/, _o = (e) => {
  if (ut.test(e)) {
    const t = ut.exec(e)[1], o = t?.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Ao = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in o)
    Ye(o[r], s, r, t);
  return s;
}, Ye = (e, t, o, s) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const n = r === "" ? t : mt(t, r);
      n.classGroupId = o;
      return;
    }
    if (typeof r == "function") {
      if (Mo(r)) {
        Ye(r(s), t, o, s);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: o
      });
      return;
    }
    Object.entries(r).forEach(([n, l]) => {
      Ye(l, mt(t, n), o, s);
    });
  });
}, mt = (e, t) => {
  let o = e;
  return t.split(st).forEach((s) => {
    o.nextPart.has(s) || o.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(s);
  }), o;
}, Mo = (e) => e.isThemeGetter, $o = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const r = (n, l) => {
    o.set(n, l), t++, t > e && (t = 0, s = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let l = o.get(n);
      if (l !== void 0)
        return l;
      if ((l = s.get(n)) !== void 0)
        return r(n, l), l;
    },
    set(n, l) {
      o.has(n) ? o.set(n, l) : r(n, l);
    }
  };
}, Qe = "!", et = ":", Bo = et.length, To = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let s = (r) => {
    const n = [];
    let l = 0, d = 0, i = 0, u;
    for (let B = 0; B < r.length; B++) {
      let $ = r[B];
      if (l === 0 && d === 0) {
        if ($ === et) {
          n.push(r.slice(i, B)), i = B + Bo;
          continue;
        }
        if ($ === "/") {
          u = B;
          continue;
        }
      }
      $ === "[" ? l++ : $ === "]" ? l-- : $ === "(" ? d++ : $ === ")" && d--;
    }
    const c = n.length === 0 ? r : r.substring(i), v = Eo(c), k = v !== c, _ = u && u > i ? u - i : void 0;
    return {
      modifiers: n,
      hasImportantModifier: k,
      baseClassName: v,
      maybePostfixModifierPosition: _
    };
  };
  if (t) {
    const r = t + et, n = s;
    s = (l) => l.startsWith(r) ? n(l.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const r = s;
    s = (n) => o({
      className: n,
      parseClassName: r
    });
  }
  return s;
}, Eo = (e) => e.endsWith(Qe) ? e.substring(0, e.length - 1) : e.startsWith(Qe) ? e.substring(1) : e, Vo = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const r = [];
    let n = [];
    return s.forEach((l) => {
      l[0] === "[" || t[l] ? (r.push(...n.sort(), l), n = []) : n.push(l);
    }), r.push(...n.sort()), r;
  };
}, Oo = (e) => ({
  cache: $o(e.cacheSize),
  parseClassName: To(e),
  sortModifiers: Vo(e),
  ...zo(e)
}), Io = /\s+/, Ro = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: s,
    getConflictingClassGroupIds: r,
    sortModifiers: n
  } = t, l = [], d = e.trim().split(Io);
  let i = "";
  for (let u = d.length - 1; u >= 0; u -= 1) {
    const c = d[u], {
      isExternal: v,
      modifiers: k,
      hasImportantModifier: _,
      baseClassName: B,
      maybePostfixModifierPosition: $
    } = o(c);
    if (v) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let E = !!$, A = s(E ? B.substring(0, $) : B);
    if (!A) {
      if (!E) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (A = s(B), !A) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      E = !1;
    }
    const N = n(k).join(":"), oe = _ ? N + Qe : N, Q = oe + A;
    if (l.includes(Q))
      continue;
    l.push(Q);
    const Z = r(A, E);
    for (let ee = 0; ee < Z.length; ++ee) {
      const x = Z[ee];
      l.push(oe + x);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Lo() {
  let e = 0, t, o, s = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Et(t)) && (s && (s += " "), s += o);
  return s;
}
const Et = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (t = Et(e[s])) && (o && (o += " "), o += t);
  return o;
};
function No(e, ...t) {
  let o, s, r, n = l;
  function l(i) {
    const u = t.reduce((c, v) => v(c), e());
    return o = Oo(u), s = o.cache.get, r = o.cache.set, n = d, d(i);
  }
  function d(i) {
    const u = s(i);
    if (u)
      return u;
    const c = Ro(i, o);
    return r(i, c), c;
  }
  return function() {
    return n(Lo.apply(null, arguments));
  };
}
const q = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Vt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ot = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jo = /^\d+\/\d+$/, Do = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Fo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Go = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Uo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xe = (e) => jo.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), me = (e) => !!e && Number.isInteger(Number(e)), He = (e) => e.endsWith("%") && z(e.slice(0, -1)), de = (e) => Do.test(e), qo = () => !0, Ho = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Fo.test(e) && !Go.test(e)
), It = () => !1, Jo = (e) => Uo.test(e), Ko = (e) => Wo.test(e), Xo = (e) => !f(e) && !p(e), Zo = (e) => Pe(e, Nt, It), f = (e) => Vt.test(e), ge = (e) => Pe(e, jt, Ho), Je = (e) => Pe(e, os, z), ft = (e) => Pe(e, Rt, It), Yo = (e) => Pe(e, Lt, Ko), Le = (e) => Pe(e, Dt, Jo), p = (e) => Ot.test(e), Ae = (e) => ze(e, jt), Qo = (e) => ze(e, ss), pt = (e) => ze(e, Rt), es = (e) => ze(e, Nt), ts = (e) => ze(e, Lt), Ne = (e) => ze(e, Dt, !0), Pe = (e, t, o) => {
  const s = Vt.exec(e);
  return s ? s[1] ? t(s[1]) : o(s[2]) : !1;
}, ze = (e, t, o = !1) => {
  const s = Ot.exec(e);
  return s ? s[1] ? t(s[1]) : o : !1;
}, Rt = (e) => e === "position" || e === "percentage", Lt = (e) => e === "image" || e === "url", Nt = (e) => e === "length" || e === "size" || e === "bg-size", jt = (e) => e === "length", os = (e) => e === "number", ss = (e) => e === "family-name", Dt = (e) => e === "shadow", rs = () => {
  const e = q("color"), t = q("font"), o = q("text"), s = q("font-weight"), r = q("tracking"), n = q("leading"), l = q("breakpoint"), d = q("container"), i = q("spacing"), u = q("radius"), c = q("shadow"), v = q("inset-shadow"), k = q("text-shadow"), _ = q("drop-shadow"), B = q("blur"), $ = q("perspective"), E = q("aspect"), A = q("ease"), N = q("animate"), oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Z = () => [...Q(), p, f], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", "contain", "none"], h = () => [p, f, i], R = () => [xe, "full", "auto", ...h()], P = () => [me, "none", "subgrid", p, f], V = () => ["auto", {
    span: ["full", me, p, f]
  }, me, p, f], T = () => [me, "auto", p, f], w = () => ["auto", "min", "max", "fr", p, f], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...h()], b = () => [xe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], g = () => [e, p, f], W = () => [...Q(), pt, ft, {
    position: [p, f]
  }], ae = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], nt = () => ["auto", "cover", "contain", es, Zo, {
    size: [p, f]
  }], We = () => [He, Ae, ge], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    p,
    f
  ], se = () => ["", z, Ae, ge], Ve = () => ["solid", "dashed", "dotted", "double"], at = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [z, He, pt, ft], lt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    B,
    p,
    f
  ], Oe = () => ["none", z, p, f], Ie = () => ["none", z, p, f], qe = () => [z, p, f], Re = () => [xe, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [de],
      breakpoint: [de],
      color: [qo],
      container: [de],
      "drop-shadow": [de],
      ease: ["in", "out", "in-out"],
      font: [Xo],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [de],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [de],
      shadow: [de],
      spacing: ["px", z],
      text: [de],
      "text-shadow": [de],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", xe, f, p, E]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [z, f, p, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Z()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: x()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": x()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": x()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [me, "auto", p, f]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [xe, "full", "auto", d, ...h()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [z, xe, "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", z, p, f]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", z, p, f]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [me, "first", "last", "none", p, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": P()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": P()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": w()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": w()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: h()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": h()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": h()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...O(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": O()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: h()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: h()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: h()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: h()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: h()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: h()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: h()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: h()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: h()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: D()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: D()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: D()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: D()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: D()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: D()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: D()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: D()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: D()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": h()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": h()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: b()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...b()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...b()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...b()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...b()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...b()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...b()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Ae, ge]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, p, Je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", He, f]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qo, f, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, p, f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [z, "none", p, Je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...h()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p, f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", p, f]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: g()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: g()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ve(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [z, "from-font", "auto", p, ge]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: g()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [z, "auto", p, f]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p, f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", p, f]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: W()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ae()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: nt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, me, p, f],
          radial: ["", p, f],
          conic: [me, p, f]
        }, ts, Yo]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: g()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: We()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: We()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: We()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: g()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: g()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: g()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: se()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": se()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": se()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": se()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": se()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": se()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": se()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": se()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": se()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": se()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": se()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ve(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ve(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: g()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": g()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": g()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": g()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": g()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": g()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": g()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": g()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": g()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: g()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ve(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, p, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", z, Ae, ge]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: g()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Ne,
          Le
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: g()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, Ne, Le]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": g()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: se()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: g()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [z, ge]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": g()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": se()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": g()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", k, Ne, Le]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": g()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z, p, f]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...at(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": at()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [z]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": H()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": H()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": g()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": g()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": H()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": H()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": g()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": g()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": H()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": H()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": g()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": g()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": H()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": H()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": g()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": g()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": H()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": H()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": g()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": g()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": H()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": H()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": g()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": g()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": H()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": H()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": g()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": g()
      }],
      "mask-image-radial": [{
        "mask-radial": [p, f]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": H()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": H()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": g()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": g()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": Q()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [z]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": H()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": H()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": g()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": g()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: W()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ae()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: nt()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", p, f]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          p,
          f
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: lt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [z, p, f]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [z, p, f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          _,
          Ne,
          Le
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": g()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", z, p, f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [z, p, f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", z, p, f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z, p, f]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", z, p, f]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          p,
          f
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": lt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [z, p, f]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [z, p, f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", z, p, f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [z, p, f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", z, p, f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z, p, f]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z, p, f]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", z, p, f]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", p, f]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [z, "initial", p, f]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", A, p, f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [z, p, f]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", N, p, f]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [$, p, f]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Oe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: qe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": qe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": qe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [p, f, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Z()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: g()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: g()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p, f]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", p, f]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...g()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, Ae, ge, Je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...g()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, ns = /* @__PURE__ */ No(rs);
function K(...e) {
  return ns(Bt(e));
}
const pn = /* @__PURE__ */ G({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (m(), S("span", {
      class: ie(a(K)(a(as)({ variant: e.variant }), t.class))
    }, [
      L(o.$slots, "default")
    ], 2));
  }
}), as = ot(
  "!text-[10px] inline-flex empty:hidden min-w-6 content-center items-center justify-center gap-1 truncate rounded  px-[5px] py-[3px] text-center text-sm leading-snug font-semibold [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow ",
        destructive: "bg-destructive text-primary-foreground  ",
        "destructive-outline": "border border-destructive text-destructive shadow-sm ",
        outline: "border border-input bg-background shadow-sm ",
        success: "bg-emerald-500 text-background",
        draft: "bg-orange-400 text-background",
        released: "bg-emerald-500 text-background",
        archived: "bg-destructive text-background",
        tag: "border border-input bg-background shadow-sm ",
        attribute: "border border-teal-600/20 text-teal-600 dark:border-teal-400/40 dark:text-teal-400 px-1 py-0.5",
        attributetype: "border border-indigo-600/20 text-indigo-600 dark:border-indigo-400/40  dark:text-indigo-400 px-1 py-0.5",
        attributeset: "border border-violet-600/20 text-violet-600 dark:border-violet-400/40 dark:text-violet-400 px-1 py-0.5",
        attributesetgroup: "border border-cyan-600/20 text-cyan-600 dark:border-cyan-400/40 dark:text-cyan-400 px-1 py-0.5",
        choice: "border border-fuchsia-600/20 text-fuchsia-600 dark:border-fuchsia-400/40 dark:text-fuchsia-400 px-1 py-0.5",
        outputchannel: "border border-sky-600/20 text-sky-600 dark:border-sky-400/40 dark:text-sky-400 px-1 py-0.5",
        unit: "border border-input bg-background  font-mono text-muted-foreground !text-[11px]",
        workprocess: "bg-blue-500/20 text-foreground",
        article: "bg-emerald-500/20 text-foreground",
        partlist: "bg-emerald-500/30 text-foreground",
        assembly: "bg-purple-500/30 text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ke = /* @__PURE__ */ G({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (m(), I(a(Mt), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ie(a(K)(a(_e)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: C(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), _e = ot(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-7 rounded-md gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ft(e) {
  return Zt() ? (Yt(e), !0) : !1;
}
function te(e) {
  return typeof e == "function" ? e() : a(e);
}
function ls(e) {
  if (!Fe(e))
    return Te(e);
  const t = new Proxy({}, {
    get(o, s, r) {
      return a(Reflect.get(e.value, s, r));
    },
    set(o, s, r) {
      return Fe(e.value[s]) && !Fe(r) ? e.value[s].value = r : e.value[s] = r, !0;
    },
    deleteProperty(o, s) {
      return Reflect.deleteProperty(e.value, s);
    },
    has(o, s) {
      return Reflect.has(e.value, s);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Te(t);
}
function is(e) {
  return ls(J(e));
}
function re(e, ...t) {
  const o = t.flat(), s = o[0];
  return is(() => Object.fromEntries(typeof s == "function" ? Object.entries(it(e)).filter(([r, n]) => !s(te(n), r)) : Object.entries(it(e)).filter((r) => !o.includes(r[0]))));
}
const Gt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cs = Object.prototype.toString, ds = (e) => cs.call(e) === "[object Object]", be = () => {
};
function rt(e, t) {
  function o(...s) {
    return new Promise((r, n) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(r).catch(n);
    });
  }
  return o;
}
const Ut = (e) => e();
function us(e, t = {}) {
  let o, s, r = be;
  const n = (d) => {
    clearTimeout(d), r(), r = be;
  };
  return (d) => {
    const i = te(e), u = te(t.maxWait);
    return o && n(o), i <= 0 || u !== void 0 && u <= 0 ? (s && (n(s), s = null), Promise.resolve(d())) : new Promise((c, v) => {
      r = t.rejectOnCancel ? v : c, u && !s && (s = setTimeout(() => {
        o && n(o), s = null, c(d());
      }, u)), o = setTimeout(() => {
        s && n(s), s = null, c(d());
      }, i);
    });
  };
}
function ms(...e) {
  let t = 0, o, s = !0, r = be, n, l, d, i, u;
  !Fe(e[0]) && typeof e[0] == "object" ? { delay: l, trailing: d = !0, leading: i = !0, rejectOnCancel: u = !1 } = e[0] : [l, d = !0, i = !0, u = !1] = e;
  const c = () => {
    o && (clearTimeout(o), o = void 0, r(), r = be);
  };
  return (k) => {
    const _ = te(l), B = Date.now() - t, $ = () => n = k();
    return c(), _ <= 0 ? (t = Date.now(), $()) : (B > _ && (i || !s) ? (t = Date.now(), $()) : d && (n = new Promise((E, A) => {
      r = u ? A : E, o = setTimeout(() => {
        t = Date.now(), s = !0, E($()), c();
      }, Math.max(0, _ - B));
    })), !i && !o && (o = setTimeout(() => s = !0, _)), s = !1, n);
  };
}
function fs(e = Ut) {
  const t = ue(!0);
  function o() {
    t.value = !1;
  }
  function s() {
    t.value = !0;
  }
  const r = (...n) => {
    t.value && e(...n);
  };
  return { isActive: Qt(t), pause: o, resume: s, eventFilter: r };
}
function ps(e) {
  return Pt();
}
function gs(e, t = 200, o = {}) {
  return rt(
    us(t, o),
    e
  );
}
function hs(e, t = 200, o = !1, s = !0, r = !1) {
  return rt(
    ms(t, o, s, r),
    e
  );
}
function bs(e, t, o = {}) {
  const {
    eventFilter: s = Ut,
    ...r
  } = o;
  return ce(
    e,
    rt(
      s,
      t
    ),
    r
  );
}
function vs(e, t, o = {}) {
  const {
    eventFilter: s,
    ...r
  } = o, { eventFilter: n, pause: l, resume: d, isActive: i } = fs(s);
  return { stop: bs(
    e,
    t,
    {
      ...r,
      eventFilter: n
    }
  ), pause: l, resume: d, isActive: i };
}
function Wt(e, t = !0, o) {
  ps() ? tt(e, o) : t ? e() : Ct(e);
}
const Ce = Gt ? window : void 0, ys = Gt ? window.document : void 0;
function Ue(e) {
  var t;
  const o = te(e);
  return (t = o?.$el) != null ? t : o;
}
function ve(...e) {
  let t, o, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, s, r] = e, t = Ce) : [t, o, s, r] = e, !t)
    return be;
  Array.isArray(o) || (o = [o]), Array.isArray(s) || (s = [s]);
  const n = [], l = () => {
    n.forEach((c) => c()), n.length = 0;
  }, d = (c, v, k, _) => (c.addEventListener(v, k, _), () => c.removeEventListener(v, k, _)), i = ce(
    () => [Ue(t), te(r)],
    ([c, v]) => {
      if (l(), !c)
        return;
      const k = ds(v) ? { ...v } : v;
      n.push(
        ...o.flatMap((_) => s.map((B) => d(c, _, B, k)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), l();
  };
  return Ft(u), u;
}
function xs() {
  const e = ue(!1), t = Pt();
  return t && tt(() => {
    e.value = !0;
  }, t), e;
}
function ws(e) {
  const t = xs();
  return J(() => (t.value, !!e()));
}
const je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, De = "__vueuse_ssr_handlers__", ks = /* @__PURE__ */ Ss();
function Ss() {
  return De in je || (je[De] = je[De] || {}), je[De];
}
function Cs(e, t) {
  return ks[e] || t;
}
function Ps(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const zs = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, gt = "vueuse-storage";
function _s(e, t, o, s = {}) {
  var r;
  const {
    flush: n = "pre",
    deep: l = !0,
    listenToStorageChanges: d = !0,
    writeDefaults: i = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: v = Ce,
    eventFilter: k,
    onError: _ = (P) => {
      console.error(P);
    },
    initOnMounted: B
  } = s, $ = (c ? zt : ue)(typeof t == "function" ? t() : t);
  if (!o)
    try {
      o = Cs("getDefaultStorage", () => {
        var P;
        return (P = Ce) == null ? void 0 : P.localStorage;
      })();
    } catch (P) {
      _(P);
    }
  if (!o)
    return $;
  const E = te(t), A = Ps(E), N = (r = s.serializer) != null ? r : zs[A], { pause: oe, resume: Q } = vs(
    $,
    () => ee($.value),
    { flush: n, deep: l, eventFilter: k }
  );
  v && d && Wt(() => {
    o instanceof Storage ? ve(v, "storage", h) : ve(v, gt, R), B && h();
  }), B || h();
  function Z(P, V) {
    if (v) {
      const T = {
        key: e,
        oldValue: P,
        newValue: V,
        storageArea: o
      };
      v.dispatchEvent(o instanceof Storage ? new StorageEvent("storage", T) : new CustomEvent(gt, {
        detail: T
      }));
    }
  }
  function ee(P) {
    try {
      const V = o.getItem(e);
      if (P == null)
        Z(V, null), o.removeItem(e);
      else {
        const T = N.write(P);
        V !== T && (o.setItem(e, T), Z(V, T));
      }
    } catch (V) {
      _(V);
    }
  }
  function x(P) {
    const V = P ? P.newValue : o.getItem(e);
    if (V == null)
      return i && E != null && o.setItem(e, N.write(E)), E;
    if (!P && u) {
      const T = N.read(V);
      return typeof u == "function" ? u(T, E) : A === "object" && !Array.isArray(T) ? { ...E, ...T } : T;
    } else return typeof V != "string" ? V : N.read(V);
  }
  function h(P) {
    if (!(P && P.storageArea !== o)) {
      if (P && P.key == null) {
        $.value = E;
        return;
      }
      if (!(P && P.key !== e)) {
        oe();
        try {
          P?.newValue !== N.write($.value) && ($.value = x(P));
        } catch (V) {
          _(V);
        } finally {
          P ? Ct(Q) : Q();
        }
      }
    }
  }
  function R(P) {
    h(P.detail);
  }
  return $;
}
function As(e, t, o = {}) {
  const { window: s = Ce, ...r } = o;
  let n;
  const l = ws(() => s && "ResizeObserver" in s), d = () => {
    n && (n.disconnect(), n = void 0);
  }, i = J(() => {
    const v = te(e);
    return Array.isArray(v) ? v.map((k) => Ue(k)) : [Ue(v)];
  }), u = ce(
    i,
    (v) => {
      if (d(), l.value && s) {
        n = new ResizeObserver(t);
        for (const k of v)
          k && n.observe(k, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), u();
  };
  return Ft(c), {
    isSupported: l,
    stop: c
  };
}
const ht = 1;
function Ms(e, t = {}) {
  const {
    throttle: o = 0,
    idle: s = 200,
    onStop: r = be,
    onScroll: n = be,
    offset: l = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: d = {
      capture: !1,
      passive: !0
    },
    behavior: i = "auto",
    window: u = Ce,
    onError: c = (x) => {
      console.error(x);
    }
  } = t, v = ue(0), k = ue(0), _ = J({
    get() {
      return v.value;
    },
    set(x) {
      $(x, void 0);
    }
  }), B = J({
    get() {
      return k.value;
    },
    set(x) {
      $(void 0, x);
    }
  });
  function $(x, h) {
    var R, P, V, T;
    if (!u)
      return;
    const w = te(e);
    if (!w)
      return;
    (V = w instanceof Document ? u.document.body : w) == null || V.scrollTo({
      top: (R = te(h)) != null ? R : B.value,
      left: (P = te(x)) != null ? P : _.value,
      behavior: te(i)
    });
    const O = ((T = w?.document) == null ? void 0 : T.documentElement) || w?.documentElement || w;
    _ != null && (v.value = O.scrollLeft), B != null && (k.value = O.scrollTop);
  }
  const E = ue(!1), A = Te({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), N = Te({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), oe = (x) => {
    E.value && (E.value = !1, N.left = !1, N.right = !1, N.top = !1, N.bottom = !1, r(x));
  }, Q = gs(oe, o + s), Z = (x) => {
    var h;
    if (!u)
      return;
    const R = ((h = x?.document) == null ? void 0 : h.documentElement) || x?.documentElement || Ue(x), { display: P, flexDirection: V } = getComputedStyle(R), T = R.scrollLeft;
    N.left = T < v.value, N.right = T > v.value;
    const w = Math.abs(T) <= (l.left || 0), O = Math.abs(T) + R.clientWidth >= R.scrollWidth - (l.right || 0) - ht;
    P === "flex" && V === "row-reverse" ? (A.left = O, A.right = w) : (A.left = w, A.right = O), v.value = T;
    let U = R.scrollTop;
    x === u.document && !U && (U = u.document.body.scrollTop), N.top = U < k.value, N.bottom = U > k.value;
    const D = Math.abs(U) <= (l.top || 0), b = Math.abs(U) + R.clientHeight >= R.scrollHeight - (l.bottom || 0) - ht;
    P === "flex" && V === "column-reverse" ? (A.top = b, A.bottom = D) : (A.top = D, A.bottom = b), k.value = U;
  }, ee = (x) => {
    var h;
    if (!u)
      return;
    const R = (h = x.target.documentElement) != null ? h : x.target;
    Z(R), E.value = !0, Q(x), n(x);
  };
  return ve(
    e,
    "scroll",
    o ? hs(ee, o, !0, !1) : ee,
    d
  ), Wt(() => {
    try {
      const x = te(e);
      if (!x)
        return;
      Z(x);
    } catch (x) {
      c(x);
    }
  }), ve(
    e,
    "scrollend",
    oe,
    d
  ), {
    x: _,
    y: B,
    isScrolling: E,
    arrivedState: A,
    directions: N,
    measure() {
      const x = te(e);
      u && x && Z(x);
    }
  };
}
const $s = ["mousedown", "mouseup", "keydown", "keyup"];
function Bs(e, t = {}) {
  const {
    events: o = $s,
    document: s = ys,
    initial: r = null
  } = t, n = ue(r);
  return s && o.forEach((l) => {
    ve(s, l, (d) => {
      typeof d.getModifierState == "function" && (n.value = d.getModifierState(e));
    });
  }), n;
}
function Ts(e, t, o = {}) {
  const { window: s = Ce } = o;
  return _s(e, t, s?.sessionStorage, o);
}
const bt = (e, t, o = (s) => s) => e.reduce((s, r) => (s[t(r)] = o(r), s), {}), Es = (e, t) => {
  const o = e.reduce((s, r) => {
    const n = r;
    return s[n] || (s[n] = r), s;
  }, {});
  return Object.values(o);
}, Vs = (e, t, o, s) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const r = (l) => l === t;
  return e.find(r) ? e.filter((l, d) => !r(l)) : [...e, t];
}, vt = (e, t, o = (s) => s) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const s = t.reduce((r, n) => (r[o(n)] = !0, r), {});
  return e.filter((r) => !s[o(r)]);
}, Os = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, yt = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => Os(t.toLowerCase())).join(" ") : "";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Is = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, s) => s ? s.toUpperCase() : o.toLowerCase()
), Rs = (e) => {
  const t = Is(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ls = (...e) => e.filter((t, o, s) => !!t && t.trim() !== "" && s.indexOf(t) === o).join(" ").trim(), wt = (e) => e === "";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: o,
  "absolute-stroke-width": s,
  strokeWidth: r,
  "stroke-width": n,
  size: l = Me.width,
  color: d = Me.stroke,
  ...i
}, { slots: u }) => Xe(
  "svg",
  {
    ...Me,
    ...i,
    width: l,
    height: l,
    stroke: d,
    "stroke-width": wt(o) || wt(s) || o === !0 || s === !0 ? Number(r || n || Me["stroke-width"]) * 24 / Number(l) : r || n || Me["stroke-width"],
    class: Ls(
      "lucide",
      i.class,
      ...e ? [`lucide-${xt(Rs(e))}-icon`, `lucide-${xt(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((c) => Xe(...c)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = (e, t) => (o, { slots: s, attrs: r }) => Xe(
  Ns,
  {
    ...r,
    ...o,
    iconNode: t,
    name: e
  },
  s
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = ne("arrow-down-up", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = ne("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = ne("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = ne("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = ne("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = ne("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = ne("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = ne("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = ne("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = ne("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = ne("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = ne("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = ne("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]), Hs = /* @__PURE__ */ G({
  __name: "Pagination",
  props: {
    page: {},
    defaultPage: {},
    itemsPerPage: {},
    total: {},
    siblingCount: {},
    disabled: { type: Boolean },
    showEdges: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:page"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = re(o, "class"), n = Ee(r, s);
    return (l, d) => (m(), I(a(no), X({ "data-slot": "pagination" }, a(n), {
      class: a(K)("mx-auto flex w-full justify-center", o.class)
    }), {
      default: C((i) => [
        L(l.$slots, "default", _t(At(i)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Js = /* @__PURE__ */ G({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class");
    return (s, r) => (m(), I(a(ao), X({ "data-slot": "pagination-content" }, a(o), {
      class: a(K)("flex flex-row items-center gap-1", t.class)
    }), {
      default: C((n) => [
        L(s.$slots, "default", _t(At(n)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ks = /* @__PURE__ */ G({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class", "size"), s = ye(o);
    return (r, n) => (m(), I(a(lo), X({
      "data-slot": "pagination-first",
      class: a(K)(a(_e)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, a(s)), {
      default: C(() => [
        L(r.$slots, "default", {}, () => [
          y(a(Jt), { class: "size-4" }),
          n[0] || (n[0] = M("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xs = /* @__PURE__ */ G({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class", "size"), s = ye(o);
    return (r, n) => (m(), I(a(io), X({
      "data-slot": "pagination-last",
      class: a(K)(a(_e)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, a(s)), {
      default: C(() => [
        L(r.$slots, "default", {}, () => [
          n[0] || (n[0] = M("span", { class: "hidden sm:block" }, "Last", -1)),
          y(a(Kt), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zs = /* @__PURE__ */ G({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class", "size"), s = ye(o);
    return (r, n) => (m(), I(a(co), X({
      "data-slot": "pagination-next",
      class: a(K)(a(_e)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, a(s)), {
      default: C(() => [
        L(r.$slots, "default", {}, () => [
          n[0] || (n[0] = M("span", { class: "hidden sm:block" }, "Next", -1)),
          y(a(Be))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ys = /* @__PURE__ */ G({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class", "size"), s = ye(o);
    return (r, n) => (m(), I(a(uo), X({
      "data-slot": "pagination-previous",
      class: a(K)(a(_e)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, a(s)), {
      default: C(() => [
        L(r.$slots, "default", {}, () => [
          y(a(Ht)),
          n[0] || (n[0] = M("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qs = /* @__PURE__ */ G({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const r = Ee(e, t);
    return (n, l) => (m(), I(a(mo), X({ "data-slot": "select" }, a(r)), {
      default: C(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), er = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = re(o, "class"), n = Ee(r, s);
    return (l, d) => (m(), I(a(fo), null, {
      default: C(() => [
        y(a(po), X({ "data-slot": "select-content" }, { ...a(n), ...l.$attrs }, {
          class: a(K)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            o.class
          )
        }), {
          default: C(() => [
            y(a(rr)),
            y(a(go), {
              class: ie(a(K)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: C(() => [
                L(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            y(a(sr))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), tr = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, or = /* @__PURE__ */ G({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class"), s = ye(o);
    return (r, n) => (m(), I(a(ho), X({ "data-slot": "select-item" }, a(s), {
      class: a(K)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: C(() => [
        M("span", tr, [
          y(a(bo), null, {
            default: C(() => [
              y(a(qt), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        y(a(vo), null, {
          default: C(() => [
            L(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sr = /* @__PURE__ */ G({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class"), s = ye(o);
    return (r, n) => (m(), I(a(yo), X({ "data-slot": "select-scroll-down-button" }, a(s), {
      class: a(K)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: C(() => [
        L(r.$slots, "default", {}, () => [
          y(a($e), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rr = /* @__PURE__ */ G({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class"), s = ye(o);
    return (r, n) => (m(), I(a(xo), X({ "data-slot": "select-scroll-up-button" }, a(s), {
      class: a(K)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: C(() => [
        L(r.$slots, "default", {}, () => [
          y(a(Gs), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nr = /* @__PURE__ */ G({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (m(), I(a(wo), X({ "data-slot": "select-value" }, t), {
      default: C(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ar = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, lr = /* @__PURE__ */ G({
  __name: "ButtonSelect",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (m(), I(a(Mt), {
      as: e.as,
      class: ie(a(K)(a(_e)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: C(() => [
        M("span", ar, [
          L(o.$slots, "default")
        ]),
        y(a($e), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), ir = /* @__PURE__ */ G({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = re(t, "class");
    return (s, r) => (m(), I(a(ko), X({ "data-slot": "dropdown-menu-separator" }, a(o), {
      class: a(K)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), cr = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, dr = { key: 1 }, ur = {
  key: 0,
  class: "-mt-2"
}, mr = /* @__PURE__ */ G({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ Se({
    placeholder: {},
    addItemButtonLabel: {},
    multiple: { type: Boolean },
    options: {},
    showAddItemButton: { type: Boolean },
    showResetButton: { type: Boolean },
    initialValues: {},
    customValueComponent: {},
    label: {},
    customValueProps: {},
    class: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e, o = (i) => ({
      "common.select": "Select...",
      "common.reset": "Reset",
      "common.addItem": "Add Item"
    })[i] || i, s = we(e, "modelValue"), r = J(() => Object.fromEntries(Ze(t.options).map((i) => [i.value, i]))), n = J(() => s.value ? t.multiple ? Array.isArray(s.value) ? s.value.map((i) => r.value[i]).filter(Boolean) : [] : r.value[s.value] ? [r.value[s.value]] : [] : []);
    function l() {
      s.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const d = J(() => t.initialValues === void 0 ? s.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(s.value));
    return (i, u) => (m(), S(le, null, [
      y(a(Qs), {
        modelValue: s.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => s.value = c),
        multiple: e.multiple
      }, {
        default: C(() => [
          y(a(So), X({
            class: a(K)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, i.$attrs, { "as-child": "" }), {
            default: C(() => [
              y(lr, { variant: "outline" }, {
                default: C(() => [
                  L(i.$slots, "default", { selectedOptions: n.value }, () => [
                    y(a(nr), {
                      placeholder: e.placeholder || o("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: C(() => [
                        e.customValueComponent && n.value.length > 0 ? (m(!0), S(le, { key: 0 }, fe(n.value, (c) => (m(), I(Ge(e.customValueComponent), X({
                          key: c.value,
                          option: c,
                          "selected-options": n.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : j("", !0)
                      ]),
                      _: 1
                    }, 8, ["placeholder"])
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 16, ["class"]),
          y(a(er), null, {
            default: C(() => [
              e.label ? (m(), S("div", cr, F(e.label), 1)) : j("", !0),
              (m(!0), S(le, null, fe(Ze(e.options), (c) => (m(), I(a(or), {
                key: String(c.value),
                value: c.value
              }, {
                default: C(() => [
                  pe(F(c.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128)),
              e.showResetButton && d.value ? (m(), S("div", dr, [
                y(ir),
                y(ke, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  onClick: u[0] || (u[0] = (c) => l())
                }, {
                  default: C(() => [
                    y(a(qs)),
                    pe(" " + F(o("common.reset")), 1)
                  ]),
                  _: 1
                })
              ])) : j("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      e.showAddItemButton ? (m(), S("div", ur, [
        y(ke, {
          size: "xs",
          class: "sticky bottom-0",
          variant: "ghost",
          onClick: u[2] || (u[2] = (c) => i.$emit("onAddItem"))
        }, {
          default: C(() => [
            y(a(Ws)),
            pe(" " + F(o("common.addItem")), 1)
          ]),
          _: 1
        })
      ])) : j("", !0)
    ], 64));
  }
}), fr = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, pr = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, gr = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, hr = { class: "hidden @2xl:block" }, br = { class: "@2xl:hidden" }, vr = /* @__PURE__ */ G({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ Se({
    page: {},
    defaultPage: {},
    itemsPerPage: {},
    total: {},
    siblingCount: {},
    disabled: { type: Boolean },
    showEdges: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    hideItemsPerPage: { type: Boolean }
  }, {
    itemsPerPage: { default: 25 },
    itemsPerPageModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const o = e, s = t, r = re(o, "class"), n = Ee(r, s), l = [25, 50, 100, 250, 500], d = we(e, "itemsPerPage"), i = (u, c) => {
      let k = {
        "dataTable.rowsPerPage": "Rows per page",
        "dataTable.pageOf": "Page {page} of {pageCount}"
      }[u] || u;
      return c && Object.entries(c).forEach(([_, B]) => {
        k = k.replace(`{${_}}`, String(B));
      }), k;
    };
    return (u, c) => (m(), S("div", null, [
      y(a(Hs), X(a(n), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: C(({ page: v, pageCount: k }) => [
          e.hideItemsPerPage ? j("", !0) : (m(), S("div", fr, [
            M("span", pr, F(i("dataTable.rowsPerPage")), 1),
            y(mr, {
              class: "!w-auto",
              options: l.map((_) => ({ value: _, label: `${_}` })),
              "model-value": d.value,
              "onUpdate:modelValue": c[0] || (c[0] = (_) => d.value = _)
            }, null, 8, ["options", "model-value"])
          ])),
          y(a(Js), null, {
            default: C(() => [
              M("div", gr, [
                M("span", hr, F(i("dataTable.pageOf", { page: v, pageCount: k })), 1),
                M("span", br, F(v) + " / " + F(k), 1)
              ]),
              y(a(Ks), null, {
                default: C(() => [
                  y(a(Jt), { class: "size-4" })
                ]),
                _: 1
              }),
              y(a(Ys), null, {
                default: C(() => [
                  y(a(Ht))
                ]),
                _: 1
              }),
              y(a(Zs), { variant: "outline" }, {
                default: C(() => [
                  y(a(Be))
                ]),
                _: 1
              }),
              y(a(Xs), { variant: "outline" }, {
                default: C(() => [
                  y(a(Kt), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 16)
    ]));
  }
}), yr = /* @__PURE__ */ G({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = ot(
      "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      {
        variants: {
          variant: {
            default: "border-transparent bg-primary text-primary-foreground",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-background",
            outline: "text-foreground"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      }
    ), o = e;
    return (s, r) => (m(), S("div", {
      class: ie(a(K)(a(t)({ variant: o.variant }), o.class))
    }, [
      L(s.$slots, "default")
    ], 2));
  }
}), Ke = /* @__PURE__ */ G({
  __name: "Checkbox",
  props: {
    defaultValue: { type: [Boolean, String] },
    modelValue: { type: [Boolean, String, null] },
    disabled: { type: Boolean },
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = re(o, "class"), n = Ee(r, s);
    return (l, d) => (m(), I(a(Co), X({ "data-slot": "checkbox" }, a(n), {
      class: a(K)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        o.class
      )
    }), {
      default: C(() => [
        y(a(Po), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: C(() => [
            L(l.$slots, "default", {}, () => [
              y(a(qt), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function xr(e, t) {
  const o = ue(null), s = () => {
    e.value ? o.value = e.value.querySelector(t) : o.value = null;
  };
  return tt(s), eo(() => {
    s();
  }), o;
}
const he = zt([]), wr = (e, t) => he.value.push({ callback: e, id: t });
function kr(e) {
  return he.value = typeof e == "string" ? he.value.filter(({ id: t }) => t !== e) : he.value.filter(({ callback: t }) => t !== e);
}
const Xt = (e) => {
  const t = e !== void 0 ? e : he.value.length - 1;
  return t >= 0 && !he.value[t].callback() && Xt(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && he.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Xt() : e.target.blur());
});
function Sr(e, t) {
  ce(t, (o) => o ? wr(e) : kr(e), { immediate: !0 });
}
function Cr(e) {
  const { arrivedState: t, x: o, y: s } = Ms(e), r = Te({
    top: !1,
    right: !1,
    left: !1,
    bottom: !1
  }), n = () => {
    const l = Ze(e);
    if (!l)
      return;
    const d = l.scrollWidth > l.clientWidth, i = l.scrollHeight > l.clientHeight;
    r.left = !d || t.left, r.right = !d || t.right, r.top = !i || t.top, r.bottom = !i || t.bottom;
  };
  return ce(o, () => n()), ce(s, () => n()), ce(e, () => n()), As(e, () => n()), r;
}
function kt(e, t, o, s = !1, r) {
  ve(e, "keydown", (n) => {
    ["Space", "Enter"].includes(n.code) && document.activeElement?.matches(t) && (n.preventDefault(), o(document.activeElement, n));
  }), ve(e, "click", (n) => {
    const l = n.target.closest(t);
    l && (s && (n.stopPropagation(), n.stopImmediatePropagation()), n.preventDefault(), o(l, n));
  });
}
function Pr(e, t, o, s, r) {
  const n = e.includes(o), l = t.indexOf(o), d = t.indexOf(s), i = l < d ? t.slice(l, d + 1) : t.slice(d, l);
  return n ? Es([...e, ...i]) : e.filter((u) => !i.includes(u));
}
function zr(e, t, o) {
  let s = null;
  const r = Bs("Shift");
  ce(
    () => e.value,
    (n, l) => {
      const d = n.length > l.length ? vt(n, l, o) : vt(l, n, o);
      if (d.length === 1) {
        const i = d[0];
        r.value && s && (e.value = Pr(e.value, t.value, s, i)), s = i;
      }
    }
  );
}
const _r = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Ar = {
  key: 0,
  class: "absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md"
}, Mr = { class: "flex flex-col items-center gap-2" }, $r = { class: "text-sm text-muted-foreground" }, Br = { class: "[&>tbody>tr:hover]:bg-emphasis h-1 !table [&_td,&_th]:border-muted/15 min-h-0 w-full [&_th:last-child,&_td:last-child]:pr-6 [&>tbody>tr>td,&>thead>tr>th]:border-b-1 [&>thead>tr>th:first-child,&tbody>tr>td:first-child]:pl-6" }, Tr = { class: "" }, Er = {
  key: 0,
  class: "!w-6 !pr-0"
}, Vr = {
  key: 1,
  class: "!w-6"
}, Or = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, Ir = { class: "[&>*]:!w-3 [&>*]:!h-3 -ml-1" }, Rr = { key: 2 }, Lr = { class: "bg-muted/50 hover:bg-muted/70" }, Nr = ["colspan"], jr = { class: "flex items-center gap-2" }, Dr = { class: "text-sm" }, Fr = ["data-state", "data-row-id"], Gr = {
  key: 0,
  class: "!w-6 !pr-0"
}, Ur = {
  key: 1,
  class: "!w-6 !pr-0"
}, Wr = ["data-col-id", "tabindex"], qr = { class: "flex items-center gap-0.5" }, Hr = {
  key: 0,
  class: "hover:!bg-transparent"
}, Jr = ["colspan"], Kr = { class: "p-4" }, Xr = ["data-state", "data-row-id"], Zr = {
  key: 0,
  class: "!w-6 !pr-0"
}, Yr = {
  key: 1,
  class: "!w-6 !pr-0"
}, Qr = ["data-col-id", "tabindex"], en = { class: "flex items-center gap-0.5" }, tn = {
  key: 0,
  class: "hover:!bg-transparent"
}, on = ["colspan"], sn = { class: "p-4" }, rn = {
  key: 0,
  class: "@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear"
}, nn = { key: 0 }, an = { class: "flex gap-2 items-center min-w-0" }, ln = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, cn = { key: 1 }, dn = { class: "text-sm line-clamp-1 text-muted-foreground" }, un = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, gn = /* @__PURE__ */ G({
  __name: "DataTable",
  props: /* @__PURE__ */ Se({
    items: {},
    columns: {},
    selectMode: {},
    storagekey: {},
    hasActionsColumn: { type: Boolean, default: !0 },
    idcol: { default: "id" },
    total: {},
    isPending: { type: Boolean },
    sortable: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !0 },
    expandable: { type: Boolean, default: !1 },
    translatableConfig: {},
    isGrouped: { type: Boolean, default: !1 },
    groups: { default: () => ({}) },
    groupByField: {},
    highlightedRow: {}
  }, {
    visibleColumns: {},
    visibleColumnsModifiers: {},
    itemsPerPage: {},
    itemsPerPageModifiers: {},
    page: {},
    pageModifiers: {},
    sortBy: {},
    sortByModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy"]),
  setup(e, { expose: t, emit: o }) {
    const s = o, r = (w, O) => {
      let D = {
        "dataTable.loading": "Loading...",
        "dataTable.noEntriesFound": "No entries found",
        "dataTable.expandedContent": "Expanded content for ID: {id}",
        "dataTable.elementsSelected": "{count} of {total} selected",
        "dataTable.totalElements": "{total} total elements",
        "dataTable.manageTranslations": "Manage translations"
      }[w] || w;
      return O && Object.entries(O).forEach(([b, g]) => {
        D = D.replace(`{${b}}`, String(g));
      }), D;
    }, n = J(() => bt(e.columns, (w) => w.id)), l = J(() => bt(e.items, (w) => w.id)), d = we(e, "visibleColumns"), i = we(e, "itemsPerPage"), u = we(e, "page"), c = we(e, "sortBy"), v = J(() => e.items && e.items.length > 0);
    ce(i, () => {
      u.value && u.value > 1 && (u.value = 1);
    });
    function k(w) {
      !c.value || c.value.key !== w ? c.value = { key: w, order: "asc" } : c.value.key === w && (c.value.order === "asc" ? c.value = { key: w, order: "desc" } : c.value = void 0);
    }
    const _ = to("container"), B = xr(_, '[data-slot="table-container"]'), $ = Cr(B);
    kt(_, "[data-col-id]", (w) => {
      const O = w.getAttribute("data-col-id"), U = w.closest("tr")?.getAttribute("data-row-id");
      if (!O || !U)
        return;
      const D = n.value[O], b = l.value[U];
      D && b && D.onClick?.(b);
    }), kt(_, "[data-row-id]", (w) => {
      const O = w.getAttribute("data-row-id");
      O && s("clickRow", O);
    });
    const E = J(() => e.items), { state: A, clear: N, stateMap: oe, toggle: Q, toggleAll: Z, allToggledState: ee } = St(E, "id");
    zr(
      A,
      J(() => e.items.map((w) => w.id))
    ), Sr(() => (N(), !0), J(() => A.value.length > 0)), ce(u, () => N());
    const { stateMap: x, toggle: h, allToggledState: R, toggleAll: P } = St(E, "id", e.storagekey), V = J(() => d.value ? e.columns.filter((w) => d.value?.includes(w.id)) : e.columns), T = J(() => V.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    return t({ selected: A, clearSelected: N }), (w, O) => {
      const U = oo("TableEmpty"), D = so("tooltip");
      return m(), S("div", _r, [
        M("div", {
          ref: "container",
          class: ie(["min-w-0 min-h-0 relative flex flex-col", { "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": e.selectMode === "multiselect", "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": e.hasActionsColumn }])
        }, [
          e.isPending ? (m(), S("div", Ar, [
            M("div", Mr, [
              y(a(Us), { class: "h-8 w-8 animate-spin text-muted-foreground" }),
              M("span", $r, F(r("dataTable.loading") || "Loading..."), 1)
            ])
          ])) : j("", !0),
          M("div", {
            class: ie(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            M("table", Br, [
              M("thead", Tr, [
                M("tr", null, [
                  e.expandable ? (m(), S("th", Er, [
                    ro((m(), I(ke, {
                      variant: "muted",
                      size: "xs",
                      class: "[&:not(:hover)]:opacity-0",
                      onClick: O[0] || (O[0] = (b) => a(P)())
                    }, {
                      default: C(() => [
                        (m(), I(Ge(a(R) ? a($e) : a(Be))))
                      ]),
                      _: 1
                    })), [
                      [D, "Toggle collapse"]
                    ])
                  ])) : j("", !0),
                  e.selectMode === "multiselect" ? (m(), S("th", Vr, [
                    y(a(Ke), {
                      "model-value": a(ee),
                      "onUpdate:modelValue": O[1] || (O[1] = () => a(Z)())
                    }, null, 8, ["model-value"])
                  ])) : j("", !0),
                  (m(!0), S(le, null, fe(V.value, (b) => (m(), S("th", {
                    key: b.id
                  }, [
                    !e.sortable || !b.sortable ? (m(), S("span", Or, F(b.title || a(yt)(b.id)), 1)) : (m(), I(ke, {
                      key: 1,
                      size: "sm",
                      variant: "ghost",
                      class: ie(["-mx-2 px-2 !whitespace-normal break-word text-left", c.value?.key === b.id ? "text-foreground" : "text-muted-foreground"]),
                      onClick: (g) => k(b.id)
                    }, {
                      default: C(() => [
                        pe(F(b.title || a(yt)(b.id)) + " ", 1),
                        M("div", Ir, [
                          c.value?.key === b.id && c.value.order === "desc" ? (m(), I(a(Fs), { key: 0 })) : c.value?.key === b.id && c.value.order === "asc" ? (m(), I(a(Ds), { key: 1 })) : (m(), I(a(js), { key: 2 }))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]))
                  ]))), 128)),
                  e.hasActionsColumn ? (m(), S("th", Rr)) : j("", !0)
                ])
              ]),
              M("tbody", null, [
                e.isGrouped ? (m(!0), S(le, { key: 0 }, fe(e.groups, (b, g) => (m(), S(le, { key: g }, [
                  M("tr", Lr, [
                    M("td", {
                      colspan: T.value,
                      class: "font-medium"
                    }, [
                      M("div", jr, [
                        M("span", Dr, F(e.groupByField) + ": " + F(g || "(No value)"), 1),
                        y(a(yr), {
                          variant: "secondary",
                          class: "ml-2"
                        }, {
                          default: C(() => [
                            pe(F(b.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 8, Nr)
                  ]),
                  (m(!0), S(le, null, fe(b, (W) => (m(), S(le, {
                    key: W.id
                  }, [
                    M("tr", {
                      "data-state": (a(oe)[W.id] || e.highlightedRow === W.id) && "selected",
                      "data-row-id": W.id
                    }, [
                      e.expandable ? (m(), S("td", Gr, [
                        y(ke, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0 -mr-1",
                          onClick: (ae) => a(h)(W[e.idcol])
                        }, {
                          default: C(() => [
                            (m(), I(Ge(a(x)[W[e.idcol]] ? a($e) : a(Be)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : j("", !0),
                      e.selectMode === "multiselect" ? (m(), S("td", Ur, [
                        y(a(Ke), {
                          "model-value": a(A).includes(W.id),
                          "onUpdate:modelValue": (ae) => a(Q)(W.id)
                        }, null, 8, ["model-value", "onUpdate:modelValue"])
                      ])) : j("", !0),
                      (m(!0), S(le, null, fe(V.value, (ae) => (m(), S("td", {
                        key: ae.id,
                        "data-col-id": ae.id,
                        tabindex: ae.onClick ? 0 : -1,
                        class: ie(ae.cssClass)
                      }, [
                        L(w.$slots, `cell:${String(ae.id)}`, {
                          item: W,
                          value: W[ae.id],
                          expanded: a(x)[W[e.idcol]]
                        }, () => [
                          pe(F(W[ae.id]), 1)
                        ])
                      ], 10, Wr))), 128)),
                      e.hasActionsColumn ? (m(), S("td", {
                        key: 2,
                        class: ie(["sticky right-0", { "bg-background/90  [[data-state=selected]_&]:bg-muted/90 ": !a($).right }])
                      }, [
                        M("div", qr, [
                          L(w.$slots, "cell:actions", { item: W })
                        ])
                      ], 2)) : j("", !0)
                    ], 8, Fr),
                    e.expandable && a(x)[W[e.idcol]] ? (m(), S("tr", Hr, [
                      M("td", {
                        colspan: T.value,
                        class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                      }, [
                        L(w.$slots, "expanded-row", { item: W }, () => [
                          M("div", Kr, F(r("dataTable.expandedContent", { id: W[e.idcol] })), 1)
                        ])
                      ], 8, Jr)
                    ])) : j("", !0)
                  ], 64))), 128))
                ], 64))), 128)) : (m(!0), S(le, { key: 1 }, fe(e.items, (b) => (m(), S(le, {
                  key: b.id
                }, [
                  M("tr", {
                    "data-state": (a(oe)[b.id] || e.highlightedRow === b[e.idcol]) && "selected",
                    "data-row-id": b.id
                  }, [
                    e.expandable ? (m(), S("td", Zr, [
                      y(ke, {
                        size: "sm",
                        variant: "ghost",
                        class: "h-6 w-6 p-0 -mr-1",
                        onClick: (g) => a(h)(b[e.idcol])
                      }, {
                        default: C(() => [
                          (m(), I(Ge(a(x)[b[e.idcol]] ? a($e) : a(Be)), { class: "h-4 w-4" }))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : j("", !0),
                    e.selectMode === "multiselect" ? (m(), S("td", Yr, [
                      y(a(Ke), {
                        "model-value": a(A).includes(b.id),
                        "onUpdate:modelValue": (g) => a(Q)(b.id)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ])) : j("", !0),
                    (m(!0), S(le, null, fe(V.value, (g) => (m(), S("td", {
                      key: g.id,
                      "data-col-id": g.id,
                      tabindex: g.onClick ? 0 : -1,
                      class: ie(g.cssClass)
                    }, [
                      L(w.$slots, `cell:${String(g.id)}`, {
                        item: b,
                        value: b[g.id],
                        expanded: a(x)[b[e.idcol]]
                      }, () => [
                        pe(F(b[g.id]), 1)
                      ])
                    ], 10, Qr))), 128)),
                    e.hasActionsColumn ? (m(), S("td", {
                      key: 2,
                      class: ie(["sticky right-0", { "bg-background/90  [[data-state=selected]_&]:bg-muted/90 ": !a($).right }])
                    }, [
                      M("div", en, [
                        L(w.$slots, "cell:actions", { item: b })
                      ])
                    ], 2)) : j("", !0)
                  ], 8, Xr),
                  e.expandable && a(x)[b[e.idcol]] ? (m(), S("tr", tn, [
                    M("td", {
                      colspan: T.value,
                      class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                    }, [
                      L(w.$slots, "expanded-row", { item: b }, () => [
                        M("div", sn, F(r("dataTable.expandedContent", { id: b[e.idcol] })), 1)
                      ])
                    ], 8, on)
                  ])) : j("", !0)
                ], 64))), 128)),
                v.value ? j("", !0) : (m(), I(U, {
                  key: 2,
                  colspan: T.value
                }, {
                  default: C(() => [
                    pe(F(r("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }, 8, ["colspan"]))
              ])
            ])
          ], 2)
        ], 2),
        e.total && e.total > 0 ? (m(), S("div", rn, [
          e.selectMode === "multiselect" && a(A).length > 0 ? (m(), S("div", nn, [
            M("div", an, [
              M("span", ln, F(r("dataTable.elementsSelected", {
                count: a(A).length,
                total: e.items.length
              })), 1),
              a(A).length > 0 ? L(w.$slots, "bulk", {
                key: 0,
                selected: a(A)
              }) : j("", !0)
            ])
          ])) : a(A).length === 0 && e.total !== void 0 ? (m(), S("div", cn, [
            M("span", dn, F(r("dataTable.totalElements", { total: e.total })), 1)
          ])) : j("", !0),
          e.total !== void 0 ? (m(), S("div", un, [
            y(vr, {
              page: u.value,
              "onUpdate:page": O[2] || (O[2] = (b) => u.value = b),
              "items-per-page": i.value,
              "onUpdate:itemsPerPage": O[3] || (O[3] = (b) => i.value = b),
              "hide-items-per-page": a(A).length > 0,
              total: e.total,
              disabled: e.isPending
            }, null, 8, ["page", "items-per-page", "hide-items-per-page", "total", "disabled"])
          ])) : j("", !0)
        ])) : j("", !0)
      ]);
    };
  }
});
function St(e, t, o) {
  const s = o ? Ts(o, []) : ue([]), r = J(() => Object.fromEntries(s.value.map((c) => [c, !0]))), n = (c) => s.value = Vs(s.value, c), l = J(() => s.value.length > 0 ? s.value?.length === e.value.length ? !0 : "indeterminate" : !1);
  function d() {
    s.value = [];
  }
  function i() {
    s.value = e.value.map((c) => c[t]);
  }
  return {
    state: s,
    stateMap: r,
    toggle: n,
    allToggledState: l,
    toggleAll: () => l.value === !1 || l.value === "indeterminate" ? i() : d(),
    clear: d
  };
}
export {
  ke as Button,
  gn as DataTable,
  pn as Tag,
  St as useToggleState
};
