import { defineComponent as V, createElementBlock as K, openBlock as g, normalizeClass as Fe, unref as l, renderSlot as H, createBlock as L, withCtx as b, computed as Z, toValue as M, onMounted as Dn, nextTick as Ot, getCurrentScope as Mu, onScopeDispose as Fu, watch as Ve, isRef as rn, reactive as _n, getCurrentInstance as Rt, readonly as Ls, toRef as Sn, ref as pe, customRef as Bu, toRefs as kr, shallowRef as sn, h as bn, mergeProps as ne, normalizeProps as jt, guardReactiveProps as Ut, createVNode as N, createElementVNode as me, mergeModels as dt, useModel as vt, Fragment as Ue, createCommentVNode as ke, renderList as tt, resolveDynamicComponent as Nt, toDisplayString as de, createTextVNode as Te, watchEffect as Qa, useTemplateRef as ju, resolveComponent as Uu, resolveDirective as zu, withDirectives as Rs, vModelText as Ai, withKeys as Wu, triggerRef as Ii, inject as ua, onUnmounted as Mr, Text as Zu, provide as ca, warn as Pi, onBeforeUnmount as Vs, toRaw as Hu, useSlots as Gu, withModifiers as qu, normalizeStyle as Yu } from "vue";
import { Primitive as Di, useForwardPropsEmits as wt, PaginationRoot as Ku, PaginationList as Xu, useForwardProps as at, PaginationFirst as Ju, PaginationLast as Qu, PaginationNext as ec, PaginationPrev as tc, SelectRoot as nc, SelectPortal as ac, SelectContent as rc, SelectViewport as sc, SelectItem as oc, SelectItemIndicator as ic, SelectItemText as lc, SelectScrollDownButton as uc, SelectScrollUpButton as cc, SelectTrigger as $i, SelectIcon as dc, SelectValue as fc, DropdownMenuSeparator as mc, CheckboxRoot as pc, CheckboxIndicator as vc, useFilter as hc, ListboxRoot as gc, ListboxFilter as yc, ListboxContent as _c, ListboxItem as bc, ListboxItemIndicator as wc, PopoverRoot as kc, PopoverPortal as xc, PopoverContent as Ec, PopoverTrigger as Oc, DialogRoot as Li, DialogDescription as Ri, DialogPortal as Vi, DialogOverlay as Mi, DialogContent as Fi, DialogClose as Sc, DialogTitle as Bi, AlertDialogRoot as Cc, AlertDialogAction as Tc, AlertDialogCancel as Nc, AlertDialogPortal as Ac, AlertDialogOverlay as Ic, AlertDialogContent as Pc, AlertDialogDescription as Dc, AlertDialogTitle as $c, Slot as Lc, useId as Rc, Label as Vc, AccordionRoot as Mc, AccordionContent as Fc, AccordionItem as Bc, AccordionHeader as jc, AccordionTrigger as Uc, Separator as zc, SwitchRoot as Wc, SwitchThumb as Zc, CalendarRoot as Hc, CalendarCell as Gc, CalendarCellTrigger as qc, CalendarGrid as Yc, CalendarGridBody as Kc, CalendarGridHead as Xc, CalendarGridRow as Jc, CalendarHeadCell as Qc, CalendarHeader as ed, CalendarHeading as td, CalendarNext as nd, CalendarPrev as ad, RadioGroupRoot as rd, RadioGroupItem as sd, RadioGroupIndicator as od, createContext as ji } from "reka-ui";
function Ui(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Ui(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function zi() {
  for (var e, t, n = 0, a = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Ui(e)) && (a && (a += " "), a += t);
  return a;
}
const uo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, co = zi, er = (e, t) => (n) => {
  var a;
  if (t?.variants == null) return co(e, n?.class, n?.className);
  const { variants: r, defaultVariants: s } = t, o = Object.keys(r).map((c) => {
    const d = n?.[c], p = s?.[c];
    if (d === null) return null;
    const m = uo(d) || uo(p);
    return r[c][m];
  }), i = n && Object.entries(n).reduce((c, d) => {
    let [p, m] = d;
    return m === void 0 || (c[p] = m), c;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, d) => {
    let { class: p, className: m, ...h } = d;
    return Object.entries(h).every((I) => {
      let [O, A] = I;
      return Array.isArray(A) ? A.includes({
        ...s,
        ...i
      }[O]) : {
        ...s,
        ...i
      }[O] === A;
    }) ? [
      ...c,
      p,
      m
    ] : c;
  }, []);
  return co(e, o, u, n?.class, n?.className);
}, Ms = "-", id = (e) => {
  const t = ud(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (o) => {
      const i = o.split(Ms);
      return i[0] === "" && i.length !== 1 && i.shift(), Wi(i, t) || ld(o);
    },
    getConflictingClassGroupIds: (o, i) => {
      const u = n[o] || [];
      return i && a[o] ? [...u, ...a[o]] : u;
    }
  };
}, Wi = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), r = a ? Wi(e.slice(1), a) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ms);
  return t.validators.find(({
    validator: o
  }) => o(s))?.classGroupId;
}, fo = /^\[(.+)\]$/, ld = (e) => {
  if (fo.test(e)) {
    const t = fo.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ud = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in n)
    fs(n[r], a, r, t);
  return a;
}, fs = (e, t, n, a) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : mo(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (cd(r)) {
        fs(r(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, o]) => {
      fs(o, mo(t, s), n, a);
    });
  });
}, mo = (e, t) => {
  let n = e;
  return t.split(Ms).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, cd = (e) => e.isThemeGetter, dd = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const r = (s, o) => {
    n.set(s, o), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = n.get(s);
      if (o !== void 0)
        return o;
      if ((o = a.get(s)) !== void 0)
        return r(s, o), o;
    },
    set(s, o) {
      n.has(s) ? n.set(s, o) : r(s, o);
    }
  };
}, ms = "!", ps = ":", fd = ps.length, md = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let a = (r) => {
    const s = [];
    let o = 0, i = 0, u = 0, c;
    for (let I = 0; I < r.length; I++) {
      let O = r[I];
      if (o === 0 && i === 0) {
        if (O === ps) {
          s.push(r.slice(u, I)), u = I + fd;
          continue;
        }
        if (O === "/") {
          c = I;
          continue;
        }
      }
      O === "[" ? o++ : O === "]" ? o-- : O === "(" ? i++ : O === ")" && i--;
    }
    const d = s.length === 0 ? r : r.substring(u), p = pd(d), m = p !== d, h = c && c > u ? c - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const r = t + ps, s = a;
    a = (o) => o.startsWith(r) ? s(o.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const r = a;
    a = (s) => n({
      className: s,
      parseClassName: r
    });
  }
  return a;
}, pd = (e) => e.endsWith(ms) ? e.substring(0, e.length - 1) : e.startsWith(ms) ? e.substring(1) : e, vd = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((a) => [a, !0]));
  return (a) => {
    if (a.length <= 1)
      return a;
    const r = [];
    let s = [];
    return a.forEach((o) => {
      o[0] === "[" || t[o] ? (r.push(...s.sort(), o), s = []) : s.push(o);
    }), r.push(...s.sort()), r;
  };
}, hd = (e) => ({
  cache: dd(e.cacheSize),
  parseClassName: md(e),
  sortModifiers: vd(e),
  ...id(e)
}), gd = /\s+/, yd = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: r,
    sortModifiers: s
  } = t, o = [], i = e.trim().split(gd);
  let u = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const d = i[c], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: h,
      baseClassName: I,
      maybePostfixModifierPosition: O
    } = n(d);
    if (p) {
      u = d + (u.length > 0 ? " " + u : u);
      continue;
    }
    let A = !!O, y = a(A ? I.substring(0, O) : I);
    if (!y) {
      if (!A) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (y = a(I), !y) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      A = !1;
    }
    const w = s(m).join(":"), E = h ? w + ms : w, x = E + y;
    if (o.includes(x))
      continue;
    o.push(x);
    const k = r(y, A);
    for (let S = 0; S < k.length; ++S) {
      const _ = k[S];
      o.push(E + _);
    }
    u = d + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function _d() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Zi(t)) && (a && (a += " "), a += n);
  return a;
}
const Zi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Zi(e[a])) && (n && (n += " "), n += t);
  return n;
};
function bd(e, ...t) {
  let n, a, r, s = o;
  function o(u) {
    const c = t.reduce((d, p) => p(d), e());
    return n = hd(c), a = n.cache.get, r = n.cache.set, s = i, i(u);
  }
  function i(u) {
    const c = a(u);
    if (c)
      return c;
    const d = yd(u, n);
    return r(u, d), d;
  }
  return function() {
    return s(_d.apply(null, arguments));
  };
}
const ct = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Hi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, wd = /^\d+\/\d+$/, kd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ed = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Od = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, na = (e) => wd.test(e), Pe = (e) => !!e && !Number.isNaN(Number(e)), On = (e) => !!e && Number.isInteger(Number(e)), Qr = (e) => e.endsWith("%") && Pe(e.slice(0, -1)), mn = (e) => kd.test(e), Cd = () => !0, Td = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xd.test(e) && !Ed.test(e)
), qi = () => !1, Nd = (e) => Od.test(e), Ad = (e) => Sd.test(e), Id = (e) => !le(e) && !ue(e), Pd = (e) => ba(e, Xi, qi), le = (e) => Hi.test(e), Mn = (e) => ba(e, Ji, Td), es = (e) => ba(e, Vd, Pe), po = (e) => ba(e, Yi, qi), Dd = (e) => ba(e, Ki, Ad), ir = (e) => ba(e, Qi, Nd), ue = (e) => Gi.test(e), Ta = (e) => wa(e, Ji), $d = (e) => wa(e, Md), vo = (e) => wa(e, Yi), Ld = (e) => wa(e, Xi), Rd = (e) => wa(e, Ki), lr = (e) => wa(e, Qi, !0), ba = (e, t, n) => {
  const a = Hi.exec(e);
  return a ? a[1] ? t(a[1]) : n(a[2]) : !1;
}, wa = (e, t, n = !1) => {
  const a = Gi.exec(e);
  return a ? a[1] ? t(a[1]) : n : !1;
}, Yi = (e) => e === "position" || e === "percentage", Ki = (e) => e === "image" || e === "url", Xi = (e) => e === "length" || e === "size" || e === "bg-size", Ji = (e) => e === "length", Vd = (e) => e === "number", Md = (e) => e === "family-name", Qi = (e) => e === "shadow", Fd = () => {
  const e = ct("color"), t = ct("font"), n = ct("text"), a = ct("font-weight"), r = ct("tracking"), s = ct("leading"), o = ct("breakpoint"), i = ct("container"), u = ct("spacing"), c = ct("radius"), d = ct("shadow"), p = ct("inset-shadow"), m = ct("text-shadow"), h = ct("drop-shadow"), I = ct("blur"), O = ct("perspective"), A = ct("aspect"), y = ct("ease"), w = ct("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], k = () => [...x(), ue, le], S = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], P = () => [ue, le, u], D = () => [na, "full", "auto", ...P()], Y = () => [On, "none", "subgrid", ue, le], Q = () => ["auto", {
    span: ["full", On, ue, le]
  }, On, ue, le], ee = () => [On, "auto", ue, le], ce = () => ["auto", "min", "max", "fr", ue, le], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], te = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...P()], j = () => [na, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], W = () => [e, ue, le], Oe = () => [...x(), vo, po, {
    position: [ue, le]
  }], Re = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], rt = () => ["auto", "cover", "contain", Ld, Pd, {
    size: [ue, le]
  }], It = () => [Qr, Ta, Mn], Ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    ue,
    le
  ], $e = () => ["", Pe, Ta, Mn], Tt = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => [Pe, Qr, vo, po], Ae = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    I,
    ue,
    le
  ], Ie = () => ["none", Pe, ue, le], Qe = () => ["none", Pe, ue, le], st = () => [Pe, ue, le], qe = () => [na, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [mn],
      breakpoint: [mn],
      color: [Cd],
      container: [mn],
      "drop-shadow": [mn],
      ease: ["in", "out", "in-out"],
      font: [Id],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [mn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [mn],
      shadow: [mn],
      spacing: ["px", Pe],
      text: [mn],
      "text-shadow": [mn],
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
        aspect: ["auto", "square", na, le, ue, A]
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
        columns: [Pe, le, ue, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: D()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: D()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        z: [On, "auto", ue, le]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [na, "full", "auto", i, ...P()]
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
        flex: [Pe, na, "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Pe, ue, le]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Pe, ue, le]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [On, "first", "last", "none", ue, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Q()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Q()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": ce()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ce()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...q(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...te(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...te()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": q()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...te(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...te()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": P()
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
        "space-y": P()
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
        size: j()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...j()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...j()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Ta, Mn]
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
        font: [a, ue, es]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qr, le]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [$d, le, t]
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
        tracking: [r, ue, le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Pe, "none", ue, es]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue, le]
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
        list: ["disc", "decimal", "none", ue, le]
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
        placeholder: W()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: W()
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
        decoration: [...Tt(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Pe, "from-font", "auto", ue, Mn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: W()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Pe, "auto", ue, le]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, le]
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
        content: ["none", ue, le]
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
        bg: Oe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Re()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: rt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, On, ue, le],
          radial: ["", ue, le],
          conic: [On, ue, le]
        }, Rd, Dd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: W()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: It()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: It()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: It()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: W()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Ge()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Ge()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Ge()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Ge()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Ge()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Ge()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Ge()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Ge()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Ge()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Ge()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Ge()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Ge()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Ge()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Ge()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Ge()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $e()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $e()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $e()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $e()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $e()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $e()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $e()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $e()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $e()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $e()
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
        "divide-y": $e()
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
        border: [...Tt(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Tt(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: W()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": W()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": W()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": W()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": W()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": W()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": W()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": W()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": W()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: W()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Tt(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Pe, ue, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Pe, Ta, Mn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: W()
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
          d,
          lr,
          ir
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: W()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, lr, ir]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": W()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $e()
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
        ring: W()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Pe, Mn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": W()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $e()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": W()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, lr, ir]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": W()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Pe, ue, le]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
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
        "mask-linear": [Pe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ie()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ie()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": W()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ie()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ie()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": W()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ie()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ie()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": W()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ie()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ie()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": W()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ie()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ie()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": W()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ie()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ie()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": W()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ie()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ie()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": W()
      }],
      "mask-image-radial": [{
        "mask-radial": [ue, le]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ie()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ie()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": W()
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
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Pe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ie()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ie()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": W()
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
        mask: Oe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Re()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: rt()
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
        mask: ["none", ue, le]
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
          ue,
          le
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ae()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Pe, ue, le]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Pe, ue, le]
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
          h,
          lr,
          ir
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": W()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Pe, ue, le]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Pe, ue, le]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Pe, ue, le]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Pe, ue, le]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Pe, ue, le]
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
          ue,
          le
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ae()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Pe, ue, le]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Pe, ue, le]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Pe, ue, le]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Pe, ue, le]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Pe, ue, le]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Pe, ue, le]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Pe, ue, le]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Pe, ue, le]
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
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, le]
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
        duration: [Pe, "initial", ue, le]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, ue, le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Pe, ue, le]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, ue, le]
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
        perspective: [O, ue, le]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ie()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ie()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ie()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ie()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Qe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Qe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Qe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Qe()
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
        skew: st()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": st()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": st()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ue, le, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: qe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": qe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": qe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": qe()
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
        accent: W()
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
        caret: W()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, le]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", ue, le]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...W()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Pe, Ta, Mn, es]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...W()]
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
}, Bd = /* @__PURE__ */ bd(Fd);
function re(...e) {
  return Bd(zi(e));
}
const Rb = /* @__PURE__ */ V({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), K("span", {
      class: Fe(l(re)(l(jd)({ variant: e.variant }), t.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), jd = er(
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
), ht = /* @__PURE__ */ V({
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
    return (n, a) => (g(), L(l(Di), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: Fe(l(re)(l(Qt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: b(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Qt = er(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
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
function Fs(e) {
  return Mu() ? (Fu(e), !0) : !1;
}
function Ud(e) {
  if (!rn(e))
    return _n(e);
  const t = new Proxy({}, {
    get(n, a, r) {
      return l(Reflect.get(e.value, a, r));
    },
    set(n, a, r) {
      return rn(e.value[a]) && !rn(r) ? e.value[a].value = r : e.value[a] = r, !0;
    },
    deleteProperty(n, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(n, a) {
      return Reflect.has(e.value, a);
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
  return _n(t);
}
function zd(e) {
  return Ud(Z(e));
}
function Ee(e, ...t) {
  const n = t.flat(), a = n[0];
  return zd(() => Object.fromEntries(typeof a == "function" ? Object.entries(kr(e)).filter(([r, s]) => !a(M(s), r)) : Object.entries(kr(e)).filter((r) => !n.includes(r[0]))));
}
const el = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Wd = (e) => typeof e < "u", Zd = (e) => e != null, Hd = Object.prototype.toString, Gd = (e) => Hd.call(e) === "[object Object]", Zn = () => {
};
function qd(...e) {
  if (e.length !== 1)
    return Sn(...e);
  const t = e[0];
  return typeof t == "function" ? Ls(Bu(() => ({ get: t, set: Zn }))) : pe(t);
}
function Bs(e, t) {
  function n(...a) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(r).catch(s);
    });
  }
  return n;
}
const tl = (e) => e();
function Yd(e, t = {}) {
  let n, a, r = Zn;
  const s = (u) => {
    clearTimeout(u), r(), r = Zn;
  };
  let o;
  return (u) => {
    const c = M(e), d = M(t.maxWait);
    return n && s(n), c <= 0 || d !== void 0 && d <= 0 ? (a && (s(a), a = void 0), Promise.resolve(u())) : new Promise((p, m) => {
      r = t.rejectOnCancel ? m : p, o = u, d && !a && (a = setTimeout(() => {
        n && s(n), a = void 0, p(o());
      }, d)), n = setTimeout(() => {
        a && s(a), a = void 0, p(u());
      }, c);
    });
  };
}
function Kd(...e) {
  let t = 0, n, a = !0, r = Zn, s, o, i, u, c;
  !rn(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: i = !0, leading: u = !0, rejectOnCancel: c = !1 } = e[0] : [o, i = !0, u = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, r(), r = Zn);
  };
  return (m) => {
    const h = M(o), I = Date.now() - t, O = () => s = m();
    return d(), h <= 0 ? (t = Date.now(), O()) : (I > h && (u || !a) ? (t = Date.now(), O()) : i && (s = new Promise((A, y) => {
      r = c ? y : A, n = setTimeout(() => {
        t = Date.now(), a = !0, A(O()), d();
      }, Math.max(0, h - I));
    })), !u && !n && (n = setTimeout(() => a = !0, h)), a = !1, s);
  };
}
function Xd(e = tl, t = {}) {
  const {
    initialState: n = "active"
  } = t, a = qd(n === "active");
  function r() {
    a.value = !1;
  }
  function s() {
    a.value = !0;
  }
  const o = (...i) => {
    a.value && e(...i);
  };
  return { isActive: Ls(a), pause: r, resume: s, eventFilter: o };
}
function yr(e) {
  return Array.isArray(e) ? e : [e];
}
function Jd(e) {
  return Rt();
}
// @__NO_SIDE_EFFECTS__
function Qd(e, t = 200, n = {}) {
  return Bs(
    Yd(t, n),
    e
  );
}
// @__NO_SIDE_EFFECTS__
function ef(e, t = 200, n = !1, a = !0, r = !1) {
  return Bs(
    Kd(t, n, a, r),
    e
  );
}
function tf(e, t, n = {}) {
  const {
    eventFilter: a = tl,
    ...r
  } = n;
  return Ve(
    e,
    Bs(
      a,
      t
    ),
    r
  );
}
function nf(e, t, n = {}) {
  const {
    eventFilter: a,
    initialState: r = "active",
    ...s
  } = n, { eventFilter: o, pause: i, resume: u, isActive: c } = Xd(a, { initialState: r });
  return { stop: tf(
    e,
    t,
    {
      ...s,
      eventFilter: o
    }
  ), pause: i, resume: u, isActive: c };
}
function nl(e, t = !0, n) {
  Jd() ? Dn(e, n) : t ? e() : Ot(e);
}
const af = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, rf = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function sf(e, t, n, a) {
  let r = e < 12 ? "AM" : "PM";
  return a && (r = r.split("").reduce((s, o) => s += `${o}.`, "")), n ? r.toLowerCase() : r;
}
function Fn(e) {
  const t = ["th", "st", "nd", "rd"], n = e % 100;
  return e + (t[(n - 20) % 10] || t[n] || t[0]);
}
function of(e, t, n = {}) {
  var a;
  const r = e.getFullYear(), s = e.getMonth(), o = e.getDate(), i = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), d = e.getMilliseconds(), p = e.getDay(), m = (a = n.customMeridiem) != null ? a : sf, h = (O) => {
    var A;
    return (A = O.split(" ")[1]) != null ? A : "";
  }, I = {
    Yo: () => Fn(r),
    YY: () => String(r).slice(-2),
    YYYY: () => r,
    M: () => s + 1,
    Mo: () => Fn(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(M(n.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(M(n.locales), { month: "long" }),
    D: () => String(o),
    Do: () => Fn(o),
    DD: () => `${o}`.padStart(2, "0"),
    H: () => String(i),
    Ho: () => Fn(i),
    HH: () => `${i}`.padStart(2, "0"),
    h: () => `${i % 12 || 12}`.padStart(1, "0"),
    ho: () => Fn(i % 12 || 12),
    hh: () => `${i % 12 || 12}`.padStart(2, "0"),
    m: () => String(u),
    mo: () => Fn(u),
    mm: () => `${u}`.padStart(2, "0"),
    s: () => String(c),
    so: () => Fn(c),
    ss: () => `${c}`.padStart(2, "0"),
    SSS: () => `${d}`.padStart(3, "0"),
    d: () => p,
    dd: () => e.toLocaleDateString(M(n.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(M(n.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(M(n.locales), { weekday: "long" }),
    A: () => m(i, u),
    AA: () => m(i, u, !1, !0),
    a: () => m(i, u, !0),
    aa: () => m(i, u, !0, !0),
    z: () => h(e.toLocaleDateString(M(n.locales), { timeZoneName: "shortOffset" })),
    zz: () => h(e.toLocaleDateString(M(n.locales), { timeZoneName: "shortOffset" })),
    zzz: () => h(e.toLocaleDateString(M(n.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => h(e.toLocaleDateString(M(n.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(rf, (O, A) => {
    var y, w;
    return (w = A ?? ((y = I[O]) == null ? void 0 : y.call(I))) != null ? w : O;
  });
}
function lf(e) {
  if (e === null)
    return new Date(Number.NaN);
  if (e === void 0)
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(af);
    if (t) {
      const n = t[2] - 1 || 0, a = (t[7] || "0").substring(0, 3);
      return new Date(t[1], n, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function uf(e, t = "HH:mm:ss", n = {}) {
  return Z(() => of(lf(M(e)), M(t), n));
}
function cf(e, t, n) {
  return Ve(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Hn = el ? window : void 0, df = el ? window.document : void 0;
function Va(e) {
  var t;
  const n = M(e);
  return (t = n?.$el) != null ? t : n;
}
function Gn(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), r = Z(() => {
    const i = yr(M(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = cf(
    () => {
      var i, u;
      return [
        (u = (i = r.value) == null ? void 0 : i.map((c) => Va(c))) != null ? u : [Hn].filter((c) => c != null),
        yr(M(r.value ? e[1] : e[0])),
        yr(l(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        M(r.value ? e[3] : e[2])
      ];
    },
    ([i, u, c, d]) => {
      if (n(), !i?.length || !u?.length || !c?.length)
        return;
      const p = Gd(d) ? { ...d } : d;
      t.push(
        ...i.flatMap(
          (m) => u.flatMap(
            (h) => c.map((I) => a(m, h, I, p))
          )
        )
      );
    },
    { flush: "post" }
  ), o = () => {
    s(), n();
  };
  return Fs(n), o;
}
// @__NO_SIDE_EFFECTS__
function ff() {
  const e = sn(!1), t = Rt();
  return t && Dn(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = /* @__PURE__ */ ff();
  return Z(() => (t.value, !!e()));
}
function mf(e, t, n = {}) {
  const { window: a = Hn, ...r } = n;
  let s;
  const o = /* @__PURE__ */ al(() => a && "MutationObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Z(() => {
    const m = M(e), h = yr(m).map(Va).filter(Zd);
    return new Set(h);
  }), c = Ve(
    u,
    (m) => {
      i(), o.value && m.size && (s = new MutationObserver(t), m.forEach((h) => s.observe(h, r)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => s?.takeRecords(), p = () => {
    c(), i();
  };
  return Fs(p), {
    isSupported: o,
    stop: p,
    takeRecords: d
  };
}
function pf(e) {
  return JSON.parse(JSON.stringify(e));
}
const ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cr = "__vueuse_ssr_handlers__", vf = /* @__PURE__ */ hf();
function hf() {
  return cr in ur || (ur[cr] = ur[cr] || {}), ur[cr];
}
function gf(e, t) {
  return vf[e] || t;
}
function yf(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const _f = {
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
}, ho = "vueuse-storage";
function bf(e, t, n, a = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: o = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: p = Hn,
    eventFilter: m,
    onError: h = (q) => {
      console.error(q);
    },
    initOnMounted: I
  } = a, O = (d ? sn : pe)(typeof t == "function" ? t() : t), A = Z(() => M(e));
  if (!n)
    try {
      n = gf("getDefaultStorage", () => {
        var q;
        return (q = Hn) == null ? void 0 : q.localStorage;
      })();
    } catch (q) {
      h(q);
    }
  if (!n)
    return O;
  const y = M(t), w = yf(y), E = (r = a.serializer) != null ? r : _f[w], { pause: x, resume: k } = nf(
    O,
    (q) => Y(q),
    { flush: s, deep: o, eventFilter: m }
  );
  Ve(A, () => ee(), { flush: s });
  let S = !1;
  const _ = (q) => {
    I && !S || ee(q);
  }, P = (q) => {
    I && !S || ce(q);
  };
  p && i && (n instanceof Storage ? Gn(p, "storage", _, { passive: !0 }) : Gn(p, ho, P)), I ? nl(() => {
    S = !0, ee();
  }) : ee();
  function D(q, te) {
    if (p) {
      const U = {
        key: A.value,
        oldValue: q,
        newValue: te,
        storageArea: n
      };
      p.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", U) : new CustomEvent(ho, {
        detail: U
      }));
    }
  }
  function Y(q) {
    try {
      const te = n.getItem(A.value);
      if (q == null)
        D(te, null), n.removeItem(A.value);
      else {
        const U = E.write(q);
        te !== U && (n.setItem(A.value, U), D(te, U));
      }
    } catch (te) {
      h(te);
    }
  }
  function Q(q) {
    const te = q ? q.newValue : n.getItem(A.value);
    if (te == null)
      return u && y != null && n.setItem(A.value, E.write(y)), y;
    if (!q && c) {
      const U = E.read(te);
      return typeof c == "function" ? c(U, y) : w === "object" && !Array.isArray(U) ? { ...y, ...U } : U;
    } else return typeof te != "string" ? te : E.read(te);
  }
  function ee(q) {
    if (!(q && q.storageArea !== n)) {
      if (q && q.key == null) {
        O.value = y;
        return;
      }
      if (!(q && q.key !== A.value)) {
        x();
        try {
          const te = E.write(O.value);
          (q === void 0 || q?.newValue !== te) && (O.value = Q(q));
        } catch (te) {
          h(te);
        } finally {
          q ? Ot(k) : k();
        }
      }
    }
  }
  function ce(q) {
    ee(q.detail);
  }
  return O;
}
function wf(e, t, n = {}) {
  const { window: a = Hn, ...r } = n;
  let s;
  const o = /* @__PURE__ */ al(() => a && "ResizeObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Z(() => {
    const p = M(e);
    return Array.isArray(p) ? p.map((m) => Va(m)) : [Va(p)];
  }), c = Ve(
    u,
    (p) => {
      if (i(), o.value && a) {
        s = new ResizeObserver(t);
        for (const m of p)
          m && s.observe(m, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    i(), c();
  };
  return Fs(d), {
    isSupported: o,
    stop: d
  };
}
const go = 1;
function kf(e, t = {}) {
  const {
    throttle: n = 0,
    idle: a = 200,
    onStop: r = Zn,
    onScroll: s = Zn,
    offset: o = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    observe: i = {
      mutation: !1
    },
    eventListenerOptions: u = {
      capture: !1,
      passive: !0
    },
    behavior: c = "auto",
    window: d = Hn,
    onError: p = (D) => {
      console.error(D);
    }
  } = t, m = typeof i == "boolean" ? {
    mutation: i
  } : i, h = sn(0), I = sn(0), O = Z({
    get() {
      return h.value;
    },
    set(D) {
      y(D, void 0);
    }
  }), A = Z({
    get() {
      return I.value;
    },
    set(D) {
      y(void 0, D);
    }
  });
  function y(D, Y) {
    var Q, ee, ce, q;
    if (!d)
      return;
    const te = M(e);
    if (!te)
      return;
    (ce = te instanceof Document ? d.document.body : te) == null || ce.scrollTo({
      top: (Q = M(Y)) != null ? Q : A.value,
      left: (ee = M(D)) != null ? ee : O.value,
      behavior: M(c)
    });
    const U = ((q = te?.document) == null ? void 0 : q.documentElement) || te?.documentElement || te;
    O != null && (h.value = U.scrollLeft), A != null && (I.value = U.scrollTop);
  }
  const w = sn(!1), E = _n({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), x = _n({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), k = (D) => {
    w.value && (w.value = !1, x.left = !1, x.right = !1, x.top = !1, x.bottom = !1, r(D));
  }, S = /* @__PURE__ */ Qd(k, n + a), _ = (D) => {
    var Y;
    if (!d)
      return;
    const Q = ((Y = D?.document) == null ? void 0 : Y.documentElement) || D?.documentElement || Va(D), { display: ee, flexDirection: ce, direction: q } = getComputedStyle(Q), te = q === "rtl" ? -1 : 1, U = Q.scrollLeft;
    x.left = U < h.value, x.right = U > h.value;
    const j = Math.abs(U * te) <= (o.left || 0), W = Math.abs(U * te) + Q.clientWidth >= Q.scrollWidth - (o.right || 0) - go;
    ee === "flex" && ce === "row-reverse" ? (E.left = W, E.right = j) : (E.left = j, E.right = W), h.value = U;
    let Oe = Q.scrollTop;
    D === d.document && !Oe && (Oe = d.document.body.scrollTop), x.top = Oe < I.value, x.bottom = Oe > I.value;
    const Re = Math.abs(Oe) <= (o.top || 0), rt = Math.abs(Oe) + Q.clientHeight >= Q.scrollHeight - (o.bottom || 0) - go;
    ee === "flex" && ce === "column-reverse" ? (E.top = rt, E.bottom = Re) : (E.top = Re, E.bottom = rt), I.value = Oe;
  }, P = (D) => {
    var Y;
    if (!d)
      return;
    const Q = (Y = D.target.documentElement) != null ? Y : D.target;
    _(Q), w.value = !0, S(D), s(D);
  };
  return Gn(
    e,
    "scroll",
    n ? /* @__PURE__ */ ef(P, n, !0, !1) : P,
    u
  ), nl(() => {
    try {
      const D = M(e);
      if (!D)
        return;
      _(D);
    } catch (D) {
      p(D);
    }
  }), m?.mutation && e != null && e !== d && e !== document && mf(
    e,
    () => {
      const D = M(e);
      D && _(D);
    },
    {
      attributes: !0,
      childList: !0,
      subtree: !0
    }
  ), Gn(
    e,
    "scrollend",
    k,
    u
  ), {
    x: O,
    y: A,
    isScrolling: w,
    arrivedState: E,
    directions: x,
    measure() {
      const D = M(e);
      d && D && _(D);
    }
  };
}
const xf = ["mousedown", "mouseup", "keydown", "keyup"];
// @__NO_SIDE_EFFECTS__
function Ef(e, t = {}) {
  const {
    events: n = xf,
    document: a = df,
    initial: r = null
  } = t, s = sn(r);
  return a && n.forEach((o) => {
    Gn(a, o, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function Of(e, t, n = {}) {
  const { window: a = Hn } = n;
  return bf(e, t, a?.sessionStorage, n);
}
// @__NO_SIDE_EFFECTS__
function rl(e, t, n, a = {}) {
  var r, s, o;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: m
  } = a, h = Rt(), I = n || h?.emit || ((r = h?.$emit) == null ? void 0 : r.bind(h)) || ((o = (s = h?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : o.bind(h?.proxy));
  let O = c;
  O = O || `update:${t.toString()}`;
  const A = (E) => i ? typeof i == "function" ? i(E) : pf(E) : E, y = () => Wd(e[t]) ? A(e[t]) : p, w = (E) => {
    m ? m(E) && I(O, E) : I(O, E);
  };
  if (u) {
    const E = y(), x = pe(E);
    let k = !1;
    return Ve(
      () => e[t],
      (S) => {
        k || (k = !0, x.value = A(S), Ot(() => k = !1));
      }
    ), Ve(
      x,
      (S) => {
        !k && (S !== e[t] || d) && w(S);
      },
      { deep: d }
    ), x;
  } else
    return Z({
      get() {
        return y();
      },
      set(E) {
        w(E);
      }
    });
}
const vs = (e, t, n = (a) => a) => e.reduce((a, r) => (a[t(r)] = n(r), a), {}), Sf = (e, t) => {
  const n = e.reduce((a, r) => {
    const s = r;
    return a[s] || (a[s] = r), a;
  }, {});
  return Object.values(n);
}, Cf = (e, t, n, a) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const r = (o) => o === t;
  return e.find(r) ? e.filter((o, i) => !r(o)) : [...e, t];
}, yo = (e, t, n = (a) => a) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const a = t.reduce((r, s) => (r[n(s)] = !0, r), {});
  return e.filter((r) => !a[n(r)]);
}, Tf = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, _o = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => Tf(t.toLowerCase())).join(" ") : "";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, a) => a ? a.toUpperCase() : n.toLowerCase()
), Af = (e) => {
  const t = Nf(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, If = (...e) => e.filter((t, n, a) => !!t && t.trim() !== "" && a.indexOf(t) === n).join(" ").trim(), wo = (e) => e === "";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Na = {
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
const Pf = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": a,
  strokeWidth: r,
  "stroke-width": s,
  size: o = Na.width,
  color: i = Na.stroke,
  ...u
}, { slots: c }) => bn(
  "svg",
  {
    ...Na,
    ...u,
    width: o,
    height: o,
    stroke: i,
    "stroke-width": wo(n) || wo(a) || n === !0 || a === !0 ? Number(r || s || Na["stroke-width"]) * 24 / Number(o) : r || s || Na["stroke-width"],
    class: If(
      "lucide",
      u.class,
      ...e ? [`lucide-${bo(Af(e))}-icon`, `lucide-${bo(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((d) => bn(...d)), ...c.default ? [c.default()] : []]
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = (e, t) => (n, { slots: a, attrs: r }) => bn(
  Pf,
  {
    ...r,
    ...n,
    iconNode: t,
    name: e
  },
  a
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = ut("arrow-down-up", [
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
const $f = ut("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lf = ut("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = ut("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = ut("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = ut("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = ut("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = ut("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = ut("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = ut("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = ut("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mf = ut("circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ut("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = ut("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = ut("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = ut("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = ut("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zf = ut("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = ut("trash", [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = ut("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Wf = /* @__PURE__ */ V({
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
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(Ku), ne({ "data-slot": "pagination" }, l(s), {
      class: l(re)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: b((u) => [
        H(o.$slots, "default", jt(Ut(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zf = /* @__PURE__ */ V({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Xu), ne({ "data-slot": "pagination-content" }, l(n), {
      class: l(re)("flex flex-row items-center gap-1", t.class)
    }), {
      default: b((s) => [
        H(a.$slots, "default", jt(Ut(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hf = /* @__PURE__ */ V({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class", "size"), a = at(n);
    return (r, s) => (g(), L(l(Ju), ne({
      "data-slot": "pagination-first",
      class: l(re)(l(Qt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          N(l(sl), { class: "size-4" }),
          s[0] || (s[0] = me("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gf = /* @__PURE__ */ V({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class", "size"), a = at(n);
    return (r, s) => (g(), L(l(Qu), ne({
      "data-slot": "pagination-last",
      class: l(re)(l(Qt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          s[0] || (s[0] = me("span", { class: "hidden sm:block" }, "Last", -1)),
          N(l(ol), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = /* @__PURE__ */ V({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class", "size"), a = at(n);
    return (r, s) => (g(), L(l(ec), ne({
      "data-slot": "pagination-next",
      class: l(re)(l(Qt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          s[0] || (s[0] = me("span", { class: "hidden sm:block" }, "Next", -1)),
          N(l(ia))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yf = /* @__PURE__ */ V({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class", "size"), a = at(n);
    return (r, s) => (g(), L(l(tc), ne({
      "data-slot": "pagination-previous",
      class: l(re)(l(Qt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          N(l(Us)),
          s[0] || (s[0] = me("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ll = /* @__PURE__ */ V({
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
    const r = wt(e, t);
    return (s, o) => (g(), L(l(nc), ne({ "data-slot": "select" }, l(r)), {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ul = /* @__PURE__ */ V({
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
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(ac), null, {
      default: b(() => [
        N(l(rc), ne({ "data-slot": "select-content" }, { ...l(s), ...o.$attrs }, {
          class: l(re)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: b(() => [
            N(l(Jf)),
            N(l(sc), {
              class: Fe(l(re)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: b(() => [
                H(o.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            N(l(Xf))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Kf = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, cl = /* @__PURE__ */ V({
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
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(oc), ne({ "data-slot": "select-item" }, l(a), {
      class: l(re)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: b(() => [
        me("span", Kf, [
          N(l(ic), null, {
            default: b(() => [
              N(l(js), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        N(l(lc), null, {
          default: b(() => [
            H(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xf = /* @__PURE__ */ V({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(uc), ne({ "data-slot": "select-scroll-down-button" }, l(a), {
      class: l(re)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          N(l(Un), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jf = /* @__PURE__ */ V({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(cc), ne({ "data-slot": "select-scroll-up-button" }, l(a), {
      class: l(re)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          N(l(Vf), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qf = /* @__PURE__ */ V({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    size: { default: "default" }
  },
  setup(e) {
    const t = e, n = Ee(t, "class", "size"), a = at(n);
    return (r, s) => (g(), L(l($i), ne({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, l(a), {
      class: l(re)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: b(() => [
        H(r.$slots, "default"),
        N(l(dc), { "as-child": "" }, {
          default: b(() => [
            N(l(Un), { class: "size-3" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), dl = /* @__PURE__ */ V({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L(l(fc), ne({ "data-slot": "select-value" }, t), {
      default: b(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), em = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, fl = /* @__PURE__ */ V({
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
    return (n, a) => (g(), L(l(Di), {
      as: e.as,
      class: Fe(l(re)(l(Qt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: b(() => [
        me("span", em, [
          H(n.$slots, "default")
        ]),
        N(l(Un), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), tm = /* @__PURE__ */ V({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(mc), ne({ "data-slot": "dropdown-menu-separator" }, l(n), {
      class: l(re)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), nm = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, am = { key: 1 }, rm = {
  key: 0,
  class: "-mt-2"
}, zs = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ dt({
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
  emits: /* @__PURE__ */ dt(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e, n = (u) => ({
      "common.select": "Select",
      "common.reset": "Reset",
      "common.addItem": "Add Item"
    })[u] || u, a = vt(e, "modelValue"), r = Z(() => Object.fromEntries(M(t.options).map((u) => [u.value, u]))), s = Z(() => a.value ? t.multiple ? Array.isArray(a.value) ? a.value.map((u) => r.value[u]).filter(Boolean) : [] : r.value[a.value] ? [r.value[a.value]] : [] : []);
    function o() {
      a.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = Z(() => t.initialValues === void 0 ? a.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(a.value));
    return (u, c) => (g(), K(Ue, null, [
      N(l(ll), {
        modelValue: a.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => a.value = d),
        multiple: e.multiple
      }, {
        default: b(() => [
          N(l($i), ne({
            class: l(re)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, { "as-child": "" }), {
            default: b(() => [
              N(fl, { variant: "outline" }, {
                default: b(() => [
                  H(u.$slots, "default", { selectedOptions: s.value }, () => [
                    N(l(dl), {
                      placeholder: e.placeholder || n("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: b(() => [
                        e.customValueComponent && s.value.length > 0 ? (g(!0), K(Ue, { key: 0 }, tt(s.value, (d) => (g(), L(Nt(e.customValueComponent), ne({
                          key: d.value,
                          option: d,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : ke("", !0)
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
          N(l(ul), null, {
            default: b(() => [
              e.label ? (g(), K("div", nm, de(e.label), 1)) : ke("", !0),
              (g(!0), K(Ue, null, tt(M(e.options), (d) => (g(), L(l(cl), {
                key: String(d.value),
                value: d.value
              }, {
                default: b(() => [
                  Te(de(d.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128)),
              e.showResetButton && i.value ? (g(), K("div", am, [
                N(tm),
                N(ht, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  onClick: c[0] || (c[0] = (d) => o())
                }, {
                  default: b(() => [
                    N(l(jf)),
                    Te(" " + de(n("common.reset")), 1)
                  ]),
                  _: 1
                })
              ])) : ke("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      e.showAddItemButton ? (g(), K("div", rm, [
        N(ht, {
          size: "xs",
          class: "sticky bottom-0",
          variant: "ghost",
          onClick: c[2] || (c[2] = (d) => u.$emit("onAddItem"))
        }, {
          default: b(() => [
            N(l(Fr)),
            Te(" " + de(n("common.addItem")), 1)
          ]),
          _: 1
        })
      ])) : ke("", !0)
    ], 64));
  }
}), sm = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, om = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, im = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, lm = { class: "hidden @2xl:block" }, um = { class: "@2xl:hidden" }, cm = /* @__PURE__ */ V({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ dt({
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
  emits: /* @__PURE__ */ dt(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a), o = [25, 50, 100, 250, 500], i = vt(e, "itemsPerPage"), u = (c, d) => {
      let m = {
        "dataTable.rowsPerPage": "Rows per page",
        "dataTable.pageOf": "Page {page} of {pageCount}"
      }[c] || c;
      return d && Object.entries(d).forEach(([h, I]) => {
        m = m.replace(`{${h}}`, String(I));
      }), m;
    };
    return (c, d) => (g(), K("div", null, [
      N(l(Wf), ne(l(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: b(({ page: p, pageCount: m }) => [
          e.hideItemsPerPage ? ke("", !0) : (g(), K("div", sm, [
            me("span", om, de(u("dataTable.rowsPerPage")), 1),
            N(zs, {
              class: "!w-auto",
              options: o.map((h) => ({ value: h, label: `${h}` })),
              "model-value": i.value,
              "onUpdate:modelValue": d[0] || (d[0] = (h) => i.value = h)
            }, null, 8, ["options", "model-value"])
          ])),
          N(l(Zf), null, {
            default: b(() => [
              me("div", im, [
                me("span", lm, de(u("dataTable.pageOf", { page: p, pageCount: m })), 1),
                me("span", um, de(p) + " / " + de(m), 1)
              ]),
              N(l(Hf), null, {
                default: b(() => [
                  N(l(sl), { class: "size-4" })
                ]),
                _: 1
              }),
              N(l(Yf), null, {
                default: b(() => [
                  N(l(Us))
                ]),
                _: 1
              }),
              N(l(qf), { variant: "outline" }, {
                default: b(() => [
                  N(l(ia))
                ]),
                _: 1
              }),
              N(l(Gf), { variant: "outline" }, {
                default: b(() => [
                  N(l(ol), { class: "size-4" })
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
}), dm = /* @__PURE__ */ V({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = er(
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
    ), n = e;
    return (a, r) => (g(), K("div", {
      class: Fe(l(re)(l(t)({ variant: n.variant }), n.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), _r = /* @__PURE__ */ V({
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
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(pc), ne({ "data-slot": "checkbox" }, l(s), {
      class: l(re)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: b(() => [
        N(l(vc), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: b(() => [
            H(o.$slots, "default", {}, () => [
              N(l(js), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function fm(e, t) {
  const n = pe(null), a = () => {
    e.value ? n.value = e.value.querySelector(t) : n.value = null;
  };
  return Dn(a), Qa(() => {
    a();
  }), n;
}
const zn = sn([]), ml = (e, t) => zn.value.push({ callback: e, id: t });
function pl(e) {
  return zn.value = typeof e == "string" ? zn.value.filter(({ id: t }) => t !== e) : zn.value.filter(({ callback: t }) => t !== e);
}
const Ws = (e) => {
  const t = e !== void 0 ? e : zn.value.length - 1;
  return t >= 0 && !zn.value[t].callback() && Ws(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && zn.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Ws() : e.target.blur());
});
const vl = { add: ml, remove: pl, invokeLatest: Ws };
function mm(e, t) {
  Ve(t, (n) => n ? ml(e) : pl(e), { immediate: !0 });
}
function pm(e) {
  const { arrivedState: t, x: n, y: a } = kf(e), r = _n({
    top: !1,
    right: !1,
    left: !1,
    bottom: !1
  }), s = () => {
    const o = M(e);
    if (!o)
      return;
    const i = o.scrollWidth > o.clientWidth, u = o.scrollHeight > o.clientHeight;
    r.left = !i || t.left, r.right = !i || t.right, r.top = !u || t.top, r.bottom = !u || t.bottom;
  };
  return Ve(n, () => s()), Ve(a, () => s()), Ve(e, () => s()), wf(e, () => s()), r;
}
var Me;
(function(e) {
  e.assertEqual = (r) => {
  };
  function t(r) {
  }
  e.assertIs = t;
  function n(r) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (r) => {
    const s = {};
    for (const o of r)
      s[o] = o;
    return s;
  }, e.getValidEnumValues = (r) => {
    const s = e.objectKeys(r).filter((i) => typeof r[r[i]] != "number"), o = {};
    for (const i of s)
      o[i] = r[i];
    return e.objectValues(o);
  }, e.objectValues = (r) => e.objectKeys(r).map(function(s) {
    return r[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const s = [];
    for (const o in r)
      Object.prototype.hasOwnProperty.call(r, o) && s.push(o);
    return s;
  }, e.find = (r, s) => {
    for (const o of r)
      if (s(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function a(r, s = " | ") {
    return r.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  e.joinValues = a, e.jsonStringifyReplacer = (r, s) => typeof s == "bigint" ? s.toString() : s;
})(Me || (Me = {}));
var hs;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(hs || (hs = {}));
const ae = Me.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), hn = (e) => {
  switch (typeof e) {
    case "undefined":
      return ae.undefined;
    case "string":
      return ae.string;
    case "number":
      return Number.isNaN(e) ? ae.nan : ae.number;
    case "boolean":
      return ae.boolean;
    case "function":
      return ae.function;
    case "bigint":
      return ae.bigint;
    case "symbol":
      return ae.symbol;
    case "object":
      return Array.isArray(e) ? ae.array : e === null ? ae.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? ae.promise : typeof Map < "u" && e instanceof Map ? ae.map : typeof Set < "u" && e instanceof Set ? ae.set : typeof Date < "u" && e instanceof Date ? ae.date : ae.object;
    default:
      return ae.unknown;
  }
}, z = Me.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), vm = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Bt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (a) => {
      this.issues = [...this.issues, a];
    }, this.addIssues = (a = []) => {
      this.issues = [...this.issues, ...a];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(s) {
      return s.message;
    }, a = { _errors: [] }, r = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(r);
        else if (o.code === "invalid_return_type")
          r(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          r(o.argumentsError);
        else if (o.path.length === 0)
          a._errors.push(n(o));
        else {
          let i = a, u = 0;
          for (; u < o.path.length; ) {
            const c = o.path[u];
            u === o.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(n(o))) : i[c] = i[c] || { _errors: [] }, i = i[c], u++;
          }
        }
    };
    return r(this), a;
  }
  static assert(t) {
    if (!(t instanceof Bt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Me.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, a = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const s = r.path[0];
        n[s] = n[s] || [], n[s].push(t(r));
      } else
        a.push(t(r));
    return { formErrors: a, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Bt.create = (e) => new Bt(e);
const da = (e, t) => {
  let n;
  switch (e.code) {
    case z.invalid_type:
      e.received === ae.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case z.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Me.jsonStringifyReplacer)}`;
      break;
    case z.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Me.joinValues(e.keys, ", ")}`;
      break;
    case z.invalid_union:
      n = "Invalid input";
      break;
    case z.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Me.joinValues(e.options)}`;
      break;
    case z.invalid_enum_value:
      n = `Invalid enum value. Expected ${Me.joinValues(e.options)}, received '${e.received}'`;
      break;
    case z.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case z.invalid_return_type:
      n = "Invalid function return type";
      break;
    case z.invalid_date:
      n = "Invalid date";
      break;
    case z.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Me.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case z.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case z.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case z.custom:
      n = "Invalid input";
      break;
    case z.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case z.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case z.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Me.assertNever(e);
  }
  return { message: n };
};
let hl = da;
function hm(e) {
  hl = e;
}
function xr() {
  return hl;
}
const Er = (e) => {
  const { data: t, path: n, errorMaps: a, issueData: r } = e, s = [...n, ...r.path || []], o = {
    ...r,
    path: s
  };
  if (r.message !== void 0)
    return {
      ...r,
      path: s,
      message: r.message
    };
  let i = "";
  const u = a.filter((c) => !!c).slice().reverse();
  for (const c of u)
    i = c(o, { data: t, defaultError: i }).message;
  return {
    ...r,
    path: s,
    message: i
  };
}, gm = [];
function J(e, t) {
  const n = xr(), a = Er({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === da ? void 0 : da
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(a);
}
class Ct {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const a = [];
    for (const r of n) {
      if (r.status === "aborted")
        return ye;
      r.status === "dirty" && t.dirty(), a.push(r.value);
    }
    return { status: t.value, value: a };
  }
  static async mergeObjectAsync(t, n) {
    const a = [];
    for (const r of n) {
      const s = await r.key, o = await r.value;
      a.push({
        key: s,
        value: o
      });
    }
    return Ct.mergeObjectSync(t, a);
  }
  static mergeObjectSync(t, n) {
    const a = {};
    for (const r of n) {
      const { key: s, value: o } = r;
      if (s.status === "aborted" || o.status === "aborted")
        return ye;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || r.alwaysSet) && (a[s.value] = o.value);
    }
    return { status: t.value, value: a };
  }
}
const ye = Object.freeze({
  status: "aborted"
}), sa = (e) => ({ status: "dirty", value: e }), At = (e) => ({ status: "valid", value: e }), gs = (e) => e.status === "aborted", ys = (e) => e.status === "dirty", qn = (e) => e.status === "valid", Ma = (e) => typeof Promise < "u" && e instanceof Promise;
var fe;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
})(fe || (fe = {}));
class un {
  constructor(t, n, a, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = a, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ko = (e, t) => {
  if (qn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Bt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Se(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: a, description: r } = e;
  if (t && (n || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: r } : { errorMap: (o, i) => {
    const { message: u } = e;
    return o.code === "invalid_enum_value" ? { message: u ?? i.defaultError } : typeof i.data > "u" ? { message: u ?? a ?? i.defaultError } : o.code !== "invalid_type" ? { message: i.defaultError } : { message: u ?? n ?? i.defaultError };
  }, description: r };
}
class Ne {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return hn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: hn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ct(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: hn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ma(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const a = this.safeParse(t, n);
    if (a.success)
      return a.data;
    throw a.error;
  }
  safeParse(t, n) {
    const a = {
      common: {
        issues: [],
        async: n?.async ?? !1,
        contextualErrorMap: n?.errorMap
      },
      path: n?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: hn(t)
    }, r = this._parseSync({ data: t, path: a.path, parent: a });
    return ko(a, r);
  }
  "~validate"(t) {
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: hn(t)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: t, path: [], parent: n });
        return qn(a) ? {
          value: a.value
        } : {
          issues: n.common.issues
        };
      } catch (a) {
        a?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), n.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((a) => qn(a) ? {
      value: a.value
    } : {
      issues: n.common.issues
    });
  }
  async parseAsync(t, n) {
    const a = await this.safeParseAsync(t, n);
    if (a.success)
      return a.data;
    throw a.error;
  }
  async safeParseAsync(t, n) {
    const a = {
      common: {
        issues: [],
        contextualErrorMap: n?.errorMap,
        async: !0
      },
      path: n?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: hn(t)
    }, r = this._parse({ data: t, path: a.path, parent: a }), s = await (Ma(r) ? r : Promise.resolve(r));
    return ko(a, s);
  }
  refine(t, n) {
    const a = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const o = t(r), i = () => s.addIssue({
        code: z.custom,
        ...a(r)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (i(), !1)) : o ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((a, r) => t(a) ? !0 : (r.addIssue(typeof n == "function" ? n(a, r) : n), !1));
  }
  _refinement(t) {
    return new Jt({
      schema: this,
      typeName: he.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return on.create(this, this._def);
  }
  nullable() {
    return An.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ht.create(this);
  }
  promise() {
    return va.create(this, this._def);
  }
  or(t) {
    return pa.create([this, t], this._def);
  }
  and(t) {
    return ja.create(this, t, this._def);
  }
  transform(t) {
    return new Jt({
      ...Se(this._def),
      schema: this,
      typeName: he.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Xn({
      ...Se(this._def),
      innerType: this,
      defaultValue: n,
      typeName: he.ZodDefault
    });
  }
  brand() {
    return new Zs({
      typeName: he.ZodBranded,
      type: this,
      ...Se(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ha({
      ...Se(this._def),
      innerType: this,
      catchValue: n,
      typeName: he.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return tr.create(this, t);
  }
  readonly() {
    return Ga.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ym = /^c[^\s-]{8,}$/i, _m = /^[0-9a-z]+$/, bm = /^[0-9A-HJKMNP-TV-Z]{26}$/i, wm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, km = /^[a-z0-9_-]{21}$/i, xm = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Em = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Om = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Sm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ts;
const Cm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Tm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Nm = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Am = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Im = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Pm = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, gl = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Dm = new RegExp(`^${gl}$`);
function yl(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function $m(e) {
  return new RegExp(`^${yl(e)}$`);
}
function _l(e) {
  let t = `${gl}T${yl(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Lm(e, t) {
  return !!((t === "v4" || !t) && Cm.test(e) || (t === "v6" || !t) && Nm.test(e));
}
function Rm(e, t) {
  if (!xm.test(e))
    return !1;
  try {
    const [n] = e.split(".");
    if (!n)
      return !1;
    const a = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), r = JSON.parse(atob(a));
    return !(typeof r != "object" || r === null || "typ" in r && r?.typ !== "JWT" || !r.alg || t && r.alg !== t);
  } catch {
    return !1;
  }
}
function Vm(e, t) {
  return !!((t === "v4" || !t) && Tm.test(e) || (t === "v6" || !t) && Am.test(e));
}
class Zt extends Ne {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== ae.string) {
      const s = this._getOrReturnCtx(t);
      return J(s, {
        code: z.invalid_type,
        expected: ae.string,
        received: s.parsedType
      }), ye;
    }
    const a = new Ct();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), J(r, {
          code: z.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), J(r, {
          code: z.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, i = t.data.length < s.value;
        (o || i) && (r = this._getOrReturnCtx(t, r), o ? J(r, {
          code: z.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : i && J(r, {
          code: z.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), a.dirty());
      } else if (s.kind === "email")
        Om.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "email",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        ts || (ts = new RegExp(Sm, "u")), ts.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "emoji",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        wm.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "uuid",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "nanoid")
        km.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "nanoid",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        ym.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "cuid",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        _m.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "cuid2",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        bm.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
          validation: "ulid",
          code: z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), J(r, {
            validation: "url",
            code: z.invalid_string,
            message: s.message
          }), a.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "regex",
        code: z.invalid_string,
        message: s.message
      }), a.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), a.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), a.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), a.dirty()) : s.kind === "datetime" ? _l(s).test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.invalid_string,
        validation: "datetime",
        message: s.message
      }), a.dirty()) : s.kind === "date" ? Dm.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.invalid_string,
        validation: "date",
        message: s.message
      }), a.dirty()) : s.kind === "time" ? $m(s).test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.invalid_string,
        validation: "time",
        message: s.message
      }), a.dirty()) : s.kind === "duration" ? Em.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "duration",
        code: z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "ip" ? Lm(t.data, s.version) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "ip",
        code: z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "jwt" ? Rm(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "jwt",
        code: z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "cidr" ? Vm(t.data, s.version) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "cidr",
        code: z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "base64" ? Im.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "base64",
        code: z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "base64url" ? Pm.test(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        validation: "base64url",
        code: z.invalid_string,
        message: s.message
      }), a.dirty()) : Me.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _regex(t, n, a) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: z.invalid_string,
      ...fe.errToObj(a)
    });
  }
  _addCheck(t) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...fe.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...fe.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...fe.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...fe.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...fe.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...fe.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...fe.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...fe.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...fe.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...fe.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...fe.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...fe.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...fe.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof t?.precision > "u" ? null : t?.precision,
      offset: t?.offset ?? !1,
      local: t?.local ?? !1,
      ...fe.errToObj(t?.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof t?.precision > "u" ? null : t?.precision,
      ...fe.errToObj(t?.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...fe.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...fe.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n?.position,
      ...fe.errToObj(n?.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...fe.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...fe.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...fe.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...fe.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...fe.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, fe.errToObj(t));
  }
  trim() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Zt.create = (e) => new Zt({
  checks: [],
  typeName: he.ZodString,
  coerce: e?.coerce ?? !1,
  ...Se(e)
});
function Mm(e, t) {
  const n = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, r = n > a ? n : a, s = Number.parseInt(e.toFixed(r).replace(".", "")), o = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % o / 10 ** r;
}
class Cn extends Ne {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== ae.number) {
      const s = this._getOrReturnCtx(t);
      return J(s, {
        code: z.invalid_type,
        expected: ae.number,
        received: s.parsedType
      }), ye;
    }
    let a;
    const r = new Ct();
    for (const s of this._def.checks)
      s.kind === "int" ? Me.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? Mm(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.not_finite,
        message: s.message
      }), r.dirty()) : Me.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, fe.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, fe.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, fe.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, fe.toString(n));
  }
  setLimit(t, n, a, r) {
    return new Cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: a,
          message: fe.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Cn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: fe.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: fe.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: fe.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: fe.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: fe.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: fe.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: fe.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: fe.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: fe.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Me.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min" ? (n === null || a.value > n) && (n = a.value) : a.kind === "max" && (t === null || a.value < t) && (t = a.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Cn.create = (e) => new Cn({
  checks: [],
  typeName: he.ZodNumber,
  coerce: e?.coerce || !1,
  ...Se(e)
});
class Tn extends Ne {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== ae.bigint)
      return this._getInvalidInput(t);
    let a;
    const r = new Ct();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), J(a, {
        code: z.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : Me.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return J(n, {
      code: z.invalid_type,
      expected: ae.bigint,
      received: n.parsedType
    }), ye;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, fe.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, fe.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, fe.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, fe.toString(n));
  }
  setLimit(t, n, a, r) {
    return new Tn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: a,
          message: fe.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Tn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: fe.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: fe.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: fe.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Tn.create = (e) => new Tn({
  checks: [],
  typeName: he.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...Se(e)
});
class Fa extends Ne {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== ae.boolean) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: z.invalid_type,
        expected: ae.boolean,
        received: a.parsedType
      }), ye;
    }
    return At(t.data);
  }
}
Fa.create = (e) => new Fa({
  typeName: he.ZodBoolean,
  coerce: e?.coerce || !1,
  ...Se(e)
});
class Yn extends Ne {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== ae.date) {
      const s = this._getOrReturnCtx(t);
      return J(s, {
        code: z.invalid_type,
        expected: ae.date,
        received: s.parsedType
      }), ye;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return J(s, {
        code: z.invalid_date
      }), ye;
    }
    const a = new Ct();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), a.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), J(r, {
        code: z.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), a.dirty()) : Me.assertNever(s);
    return {
      status: a.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Yn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: fe.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: fe.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Yn.create = (e) => new Yn({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: he.ZodDate,
  ...Se(e)
});
class Or extends Ne {
  _parse(t) {
    if (this._getType(t) !== ae.symbol) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: z.invalid_type,
        expected: ae.symbol,
        received: a.parsedType
      }), ye;
    }
    return At(t.data);
  }
}
Or.create = (e) => new Or({
  typeName: he.ZodSymbol,
  ...Se(e)
});
class Ba extends Ne {
  _parse(t) {
    if (this._getType(t) !== ae.undefined) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: z.invalid_type,
        expected: ae.undefined,
        received: a.parsedType
      }), ye;
    }
    return At(t.data);
  }
}
Ba.create = (e) => new Ba({
  typeName: he.ZodUndefined,
  ...Se(e)
});
class fa extends Ne {
  _parse(t) {
    if (this._getType(t) !== ae.null) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: z.invalid_type,
        expected: ae.null,
        received: a.parsedType
      }), ye;
    }
    return At(t.data);
  }
}
fa.create = (e) => new fa({
  typeName: he.ZodNull,
  ...Se(e)
});
class ma extends Ne {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
ma.create = (e) => new ma({
  typeName: he.ZodAny,
  ...Se(e)
});
class Wn extends Ne {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
Wn.create = (e) => new Wn({
  typeName: he.ZodUnknown,
  ...Se(e)
});
class wn extends Ne {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return J(n, {
      code: z.invalid_type,
      expected: ae.never,
      received: n.parsedType
    }), ye;
  }
}
wn.create = (e) => new wn({
  typeName: he.ZodNever,
  ...Se(e)
});
class Sr extends Ne {
  _parse(t) {
    if (this._getType(t) !== ae.undefined) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: z.invalid_type,
        expected: ae.void,
        received: a.parsedType
      }), ye;
    }
    return At(t.data);
  }
}
Sr.create = (e) => new Sr({
  typeName: he.ZodVoid,
  ...Se(e)
});
class Ht extends Ne {
  _parse(t) {
    const { ctx: n, status: a } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== ae.array)
      return J(n, {
        code: z.invalid_type,
        expected: ae.array,
        received: n.parsedType
      }), ye;
    if (r.exactLength !== null) {
      const o = n.data.length > r.exactLength.value, i = n.data.length < r.exactLength.value;
      (o || i) && (J(n, {
        code: o ? z.too_big : z.too_small,
        minimum: i ? r.exactLength.value : void 0,
        maximum: o ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), a.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (J(n, {
      code: z.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), a.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (J(n, {
      code: z.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), a.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, i) => r.type._parseAsync(new un(n, o, n.path, i)))).then((o) => Ct.mergeArray(a, o));
    const s = [...n.data].map((o, i) => r.type._parseSync(new un(n, o, n.path, i)));
    return Ct.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Ht({
      ...this._def,
      minLength: { value: t, message: fe.toString(n) }
    });
  }
  max(t, n) {
    return new Ht({
      ...this._def,
      maxLength: { value: t, message: fe.toString(n) }
    });
  }
  length(t, n) {
    return new Ht({
      ...this._def,
      exactLength: { value: t, message: fe.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ht.create = (e, t) => new Ht({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: he.ZodArray,
  ...Se(t)
});
function aa(e) {
  if (e instanceof He) {
    const t = {};
    for (const n in e.shape) {
      const a = e.shape[n];
      t[n] = on.create(aa(a));
    }
    return new He({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Ht ? new Ht({
    ...e._def,
    type: aa(e.element)
  }) : e instanceof on ? on.create(aa(e.unwrap())) : e instanceof An ? An.create(aa(e.unwrap())) : e instanceof cn ? cn.create(e.items.map((t) => aa(t))) : e;
}
class He extends Ne {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Me.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== ae.object) {
      const c = this._getOrReturnCtx(t);
      return J(c, {
        code: z.invalid_type,
        expected: ae.object,
        received: c.parsedType
      }), ye;
    }
    const { status: a, ctx: r } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof wn && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], p = r.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new un(r, p, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof wn) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of i)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: r.data[d] }
          });
      else if (c === "strict")
        i.length > 0 && (J(r, {
          code: z.unrecognized_keys,
          keys: i
        }), a.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of i) {
        const p = r.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new un(r, p, r.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const p = await d.key, m = await d.value;
        c.push({
          key: p,
          value: m,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => Ct.mergeObjectSync(a, c)) : Ct.mergeObjectSync(a, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return fe.errToObj, new He({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, a) => {
          const r = this._def.errorMap?.(n, a).message ?? a.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: fe.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new He({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new He({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new He({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new He({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: he.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new He({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const a of Me.objectKeys(t))
      t[a] && this.shape[a] && (n[a] = this.shape[a]);
    return new He({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const a of Me.objectKeys(this.shape))
      t[a] || (n[a] = this.shape[a]);
    return new He({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return aa(this);
  }
  partial(t) {
    const n = {};
    for (const a of Me.objectKeys(this.shape)) {
      const r = this.shape[a];
      t && !t[a] ? n[a] = r : n[a] = r.optional();
    }
    return new He({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const a of Me.objectKeys(this.shape))
      if (t && !t[a])
        n[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof on; )
          s = s._def.innerType;
        n[a] = s;
      }
    return new He({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return bl(Me.objectKeys(this.shape));
  }
}
He.create = (e, t) => new He({
  shape: () => e,
  unknownKeys: "strip",
  catchall: wn.create(),
  typeName: he.ZodObject,
  ...Se(t)
});
He.strictCreate = (e, t) => new He({
  shape: () => e,
  unknownKeys: "strict",
  catchall: wn.create(),
  typeName: he.ZodObject,
  ...Se(t)
});
He.lazycreate = (e, t) => new He({
  shape: e,
  unknownKeys: "strip",
  catchall: wn.create(),
  typeName: he.ZodObject,
  ...Se(t)
});
class pa extends Ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), a = this._def.options;
    function r(s) {
      for (const i of s)
        if (i.result.status === "valid")
          return i.result;
      for (const i of s)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((i) => new Bt(i.ctx.common.issues));
      return J(n, {
        code: z.invalid_union,
        unionErrors: o
      }), ye;
    }
    if (n.common.async)
      return Promise.all(a.map(async (s) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(r);
    {
      let s;
      const o = [];
      for (const u of a) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, d = u._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const i = o.map((u) => new Bt(u));
      return J(n, {
        code: z.invalid_union,
        unionErrors: i
      }), ye;
    }
  }
  get options() {
    return this._def.options;
  }
}
pa.create = (e, t) => new pa({
  options: e,
  typeName: he.ZodUnion,
  ...Se(t)
});
const vn = (e) => e instanceof za ? vn(e.schema) : e instanceof Jt ? vn(e.innerType()) : e instanceof Wa ? [e.value] : e instanceof Nn ? e.options : e instanceof Za ? Me.objectValues(e.enum) : e instanceof Xn ? vn(e._def.innerType) : e instanceof Ba ? [void 0] : e instanceof fa ? [null] : e instanceof on ? [void 0, ...vn(e.unwrap())] : e instanceof An ? [null, ...vn(e.unwrap())] : e instanceof Zs || e instanceof Ga ? vn(e.unwrap()) : e instanceof Ha ? vn(e._def.innerType) : [];
class jr extends Ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ae.object)
      return J(n, {
        code: z.invalid_type,
        expected: ae.object,
        received: n.parsedType
      }), ye;
    const a = this.discriminator, r = n.data[a], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (J(n, {
      code: z.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), ye);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, a) {
    const r = /* @__PURE__ */ new Map();
    for (const s of n) {
      const o = vn(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of o) {
        if (r.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        r.set(i, s);
      }
    }
    return new jr({
      typeName: he.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...Se(a)
    });
  }
}
function _s(e, t) {
  const n = hn(e), a = hn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === ae.object && a === ae.object) {
    const r = Me.objectKeys(t), s = Me.objectKeys(e).filter((i) => r.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of s) {
      const u = _s(e[i], t[i]);
      if (!u.valid)
        return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (n === ae.array && a === ae.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], i = t[s], u = _s(o, i);
      if (!u.valid)
        return { valid: !1 };
      r.push(u.data);
    }
    return { valid: !0, data: r };
  } else return n === ae.date && a === ae.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ja extends Ne {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t), r = (s, o) => {
      if (gs(s) || gs(o))
        return ye;
      const i = _s(s.value, o.value);
      return i.valid ? ((ys(s) || ys(o)) && n.dirty(), { status: n.value, value: i.data }) : (J(a, {
        code: z.invalid_intersection_types
      }), ye);
    };
    return a.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      }),
      this._def.right._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      })
    ]).then(([s, o]) => r(s, o)) : r(this._def.left._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }), this._def.right._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }));
  }
}
ja.create = (e, t, n) => new ja({
  left: e,
  right: t,
  typeName: he.ZodIntersection,
  ...Se(n)
});
class cn extends Ne {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ae.array)
      return J(a, {
        code: z.invalid_type,
        expected: ae.array,
        received: a.parsedType
      }), ye;
    if (a.data.length < this._def.items.length)
      return J(a, {
        code: z.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ye;
    !this._def.rest && a.data.length > this._def.items.length && (J(a, {
      code: z.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...a.data].map((o, i) => {
      const u = this._def.items[i] || this._def.rest;
      return u ? u._parse(new un(a, o, a.path, i)) : null;
    }).filter((o) => !!o);
    return a.common.async ? Promise.all(s).then((o) => Ct.mergeArray(n, o)) : Ct.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new cn({
      ...this._def,
      rest: t
    });
  }
}
cn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new cn({
    items: e,
    typeName: he.ZodTuple,
    rest: null,
    ...Se(t)
  });
};
class Ua extends Ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ae.object)
      return J(a, {
        code: z.invalid_type,
        expected: ae.object,
        received: a.parsedType
      }), ye;
    const r = [], s = this._def.keyType, o = this._def.valueType;
    for (const i in a.data)
      r.push({
        key: s._parse(new un(a, i, a.path, i)),
        value: o._parse(new un(a, a.data[i], a.path, i)),
        alwaysSet: i in a.data
      });
    return a.common.async ? Ct.mergeObjectAsync(n, r) : Ct.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, a) {
    return n instanceof Ne ? new Ua({
      keyType: t,
      valueType: n,
      typeName: he.ZodRecord,
      ...Se(a)
    }) : new Ua({
      keyType: Zt.create(),
      valueType: t,
      typeName: he.ZodRecord,
      ...Se(n)
    });
  }
}
class Cr extends Ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ae.map)
      return J(a, {
        code: z.invalid_type,
        expected: ae.map,
        received: a.parsedType
      }), ye;
    const r = this._def.keyType, s = this._def.valueType, o = [...a.data.entries()].map(([i, u], c) => ({
      key: r._parse(new un(a, i, a.path, [c, "key"])),
      value: s._parse(new un(a, u, a.path, [c, "value"]))
    }));
    if (a.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, d = await u.value;
          if (c.status === "aborted" || d.status === "aborted")
            return ye;
          (c.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(c.value, d.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, d = u.value;
        if (c.status === "aborted" || d.status === "aborted")
          return ye;
        (c.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(c.value, d.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Cr.create = (e, t, n) => new Cr({
  valueType: t,
  keyType: e,
  typeName: he.ZodMap,
  ...Se(n)
});
class Kn extends Ne {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ae.set)
      return J(a, {
        code: z.invalid_type,
        expected: ae.set,
        received: a.parsedType
      }), ye;
    const r = this._def;
    r.minSize !== null && a.data.size < r.minSize.value && (J(a, {
      code: z.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && a.data.size > r.maxSize.value && (J(a, {
      code: z.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function o(u) {
      const c = /* @__PURE__ */ new Set();
      for (const d of u) {
        if (d.status === "aborted")
          return ye;
        d.status === "dirty" && n.dirty(), c.add(d.value);
      }
      return { status: n.value, value: c };
    }
    const i = [...a.data.values()].map((u, c) => s._parse(new un(a, u, a.path, c)));
    return a.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(t, n) {
    return new Kn({
      ...this._def,
      minSize: { value: t, message: fe.toString(n) }
    });
  }
  max(t, n) {
    return new Kn({
      ...this._def,
      maxSize: { value: t, message: fe.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Kn.create = (e, t) => new Kn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: he.ZodSet,
  ...Se(t)
});
class la extends Ne {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ae.function)
      return J(n, {
        code: z.invalid_type,
        expected: ae.function,
        received: n.parsedType
      }), ye;
    function a(i, u) {
      return Er({
        data: i,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, xr(), da].filter((c) => !!c),
        issueData: {
          code: z.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function r(i, u) {
      return Er({
        data: i,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, xr(), da].filter((c) => !!c),
        issueData: {
          code: z.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof va) {
      const i = this;
      return At(async function(...u) {
        const c = new Bt([]), d = await i._def.args.parseAsync(u, s).catch((h) => {
          throw c.addIssue(a(u, h)), c;
        }), p = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(p, s).catch((h) => {
          throw c.addIssue(r(p, h)), c;
        });
      });
    } else {
      const i = this;
      return At(function(...u) {
        const c = i._def.args.safeParse(u, s);
        if (!c.success)
          throw new Bt([a(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), p = i._def.returns.safeParse(d, s);
        if (!p.success)
          throw new Bt([r(d, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new la({
      ...this._def,
      args: cn.create(t).rest(Wn.create())
    });
  }
  returns(t) {
    return new la({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, a) {
    return new la({
      args: t || cn.create([]).rest(Wn.create()),
      returns: n || Wn.create(),
      typeName: he.ZodFunction,
      ...Se(a)
    });
  }
}
class za extends Ne {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
za.create = (e, t) => new za({
  getter: e,
  typeName: he.ZodLazy,
  ...Se(t)
});
class Wa extends Ne {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return J(n, {
        received: n.data,
        code: z.invalid_literal,
        expected: this._def.value
      }), ye;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Wa.create = (e, t) => new Wa({
  value: e,
  typeName: he.ZodLiteral,
  ...Se(t)
});
function bl(e, t) {
  return new Nn({
    values: e,
    typeName: he.ZodEnum,
    ...Se(t)
  });
}
class Nn extends Ne {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), a = this._def.values;
      return J(n, {
        expected: Me.joinValues(a),
        received: n.parsedType,
        code: z.invalid_type
      }), ye;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), a = this._def.values;
      return J(n, {
        received: n.data,
        code: z.invalid_enum_value,
        options: a
      }), ye;
    }
    return At(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Nn.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Nn.create(this.options.filter((a) => !t.includes(a)), {
      ...this._def,
      ...n
    });
  }
}
Nn.create = bl;
class Za extends Ne {
  _parse(t) {
    const n = Me.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== ae.string && a.parsedType !== ae.number) {
      const r = Me.objectValues(n);
      return J(a, {
        expected: Me.joinValues(r),
        received: a.parsedType,
        code: z.invalid_type
      }), ye;
    }
    if (this._cache || (this._cache = new Set(Me.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = Me.objectValues(n);
      return J(a, {
        received: a.data,
        code: z.invalid_enum_value,
        options: r
      }), ye;
    }
    return At(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Za.create = (e, t) => new Za({
  values: e,
  typeName: he.ZodNativeEnum,
  ...Se(t)
});
class va extends Ne {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ae.promise && n.common.async === !1)
      return J(n, {
        code: z.invalid_type,
        expected: ae.promise,
        received: n.parsedType
      }), ye;
    const a = n.parsedType === ae.promise ? n.data : Promise.resolve(n.data);
    return At(a.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
va.create = (e, t) => new va({
  type: e,
  typeName: he.ZodPromise,
  ...Se(t)
});
class Jt extends Ne {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === he.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (o) => {
        J(a, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), r.type === "preprocess") {
      const o = r.transform(a.data, s);
      if (a.common.async)
        return Promise.resolve(o).then(async (i) => {
          if (n.value === "aborted")
            return ye;
          const u = await this._def.schema._parseAsync({
            data: i,
            path: a.path,
            parent: a
          });
          return u.status === "aborted" ? ye : u.status === "dirty" || n.value === "dirty" ? sa(u.value) : u;
        });
      {
        if (n.value === "aborted")
          return ye;
        const i = this._def.schema._parseSync({
          data: o,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? ye : i.status === "dirty" || n.value === "dirty" ? sa(i.value) : i;
      }
    }
    if (r.type === "refinement") {
      const o = (i) => {
        const u = r.refinement(i, s);
        if (a.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (a.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? ye : (i.status === "dirty" && n.dirty(), o(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((i) => i.status === "aborted" ? ye : (i.status === "dirty" && n.dirty(), o(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!qn(o))
          return ye;
        const i = r.transform(o.value, s);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => qn(o) ? Promise.resolve(r.transform(o.value, s)).then((i) => ({
          status: n.value,
          value: i
        })) : ye);
    Me.assertNever(r);
  }
}
Jt.create = (e, t, n) => new Jt({
  schema: e,
  typeName: he.ZodEffects,
  effect: t,
  ...Se(n)
});
Jt.createWithPreprocess = (e, t, n) => new Jt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: he.ZodEffects,
  ...Se(n)
});
class on extends Ne {
  _parse(t) {
    return this._getType(t) === ae.undefined ? At(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
on.create = (e, t) => new on({
  innerType: e,
  typeName: he.ZodOptional,
  ...Se(t)
});
class An extends Ne {
  _parse(t) {
    return this._getType(t) === ae.null ? At(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
An.create = (e, t) => new An({
  innerType: e,
  typeName: he.ZodNullable,
  ...Se(t)
});
class Xn extends Ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let a = n.data;
    return n.parsedType === ae.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Xn.create = (e, t) => new Xn({
  innerType: e,
  typeName: he.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Se(t)
});
class Ha extends Ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), a = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a
      }
    });
    return Ma(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Bt(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Bt(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ha.create = (e, t) => new Ha({
  innerType: e,
  typeName: he.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Se(t)
});
class Tr extends Ne {
  _parse(t) {
    if (this._getType(t) !== ae.nan) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: z.invalid_type,
        expected: ae.nan,
        received: a.parsedType
      }), ye;
    }
    return { status: "valid", value: t.data };
  }
}
Tr.create = (e) => new Tr({
  typeName: he.ZodNaN,
  ...Se(e)
});
const Fm = Symbol("zod_brand");
class Zs extends Ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), a = n.data;
    return this._def.type._parse({
      data: a,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class tr extends Ne {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? ye : s.status === "dirty" ? (n.dirty(), sa(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: a.path,
          parent: a
        });
      })();
    {
      const r = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a
      });
      return r.status === "aborted" ? ye : r.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: r.value
      }) : this._def.out._parseSync({
        data: r.value,
        path: a.path,
        parent: a
      });
    }
  }
  static create(t, n) {
    return new tr({
      in: t,
      out: n,
      typeName: he.ZodPipeline
    });
  }
}
class Ga extends Ne {
  _parse(t) {
    const n = this._def.innerType._parse(t), a = (r) => (qn(r) && (r.value = Object.freeze(r.value)), r);
    return Ma(n) ? n.then((r) => a(r)) : a(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ga.create = (e, t) => new Ga({
  innerType: e,
  typeName: he.ZodReadonly,
  ...Se(t)
});
function xo(e, t) {
  const n = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof n == "string" ? { message: n } : n;
}
function wl(e, t = {}, n) {
  return e ? ma.create().superRefine((a, r) => {
    const s = e(a);
    if (s instanceof Promise)
      return s.then((o) => {
        if (!o) {
          const i = xo(t, a), u = i.fatal ?? n ?? !0;
          r.addIssue({ code: "custom", ...i, fatal: u });
        }
      });
    if (!s) {
      const o = xo(t, a), i = o.fatal ?? n ?? !0;
      r.addIssue({ code: "custom", ...o, fatal: i });
    }
  }) : ma.create();
}
const Bm = {
  object: He.lazycreate
};
var he;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(he || (he = {}));
const jm = (e, t = {
  message: `Input not instance of ${e.name}`
}) => wl((n) => n instanceof e, t), kl = Zt.create, xl = Cn.create, Um = Tr.create, zm = Tn.create, El = Fa.create, Wm = Yn.create, Zm = Or.create, Hm = Ba.create, Gm = fa.create, qm = ma.create, Ym = Wn.create, Km = wn.create, Xm = Sr.create, Jm = Ht.create, Qm = He.create, ep = He.strictCreate, tp = pa.create, np = jr.create, ap = ja.create, rp = cn.create, sp = Ua.create, op = Cr.create, ip = Kn.create, lp = la.create, up = za.create, cp = Wa.create, dp = Nn.create, fp = Za.create, mp = va.create, Eo = Jt.create, pp = on.create, vp = An.create, hp = Jt.createWithPreprocess, gp = tr.create, yp = () => kl().optional(), _p = () => xl().optional(), bp = () => El().optional(), wp = {
  string: ((e) => Zt.create({ ...e, coerce: !0 })),
  number: ((e) => Cn.create({ ...e, coerce: !0 })),
  boolean: ((e) => Fa.create({
    ...e,
    coerce: !0
  })),
  bigint: ((e) => Tn.create({ ...e, coerce: !0 })),
  date: ((e) => Yn.create({ ...e, coerce: !0 }))
}, kp = ye, Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BRAND: Fm,
  DIRTY: sa,
  EMPTY_PATH: gm,
  INVALID: ye,
  NEVER: kp,
  OK: At,
  ParseStatus: Ct,
  Schema: Ne,
  ZodAny: ma,
  ZodArray: Ht,
  ZodBigInt: Tn,
  ZodBoolean: Fa,
  ZodBranded: Zs,
  ZodCatch: Ha,
  ZodDate: Yn,
  ZodDefault: Xn,
  ZodDiscriminatedUnion: jr,
  ZodEffects: Jt,
  ZodEnum: Nn,
  ZodError: Bt,
  get ZodFirstPartyTypeKind() {
    return he;
  },
  ZodFunction: la,
  ZodIntersection: ja,
  ZodIssueCode: z,
  ZodLazy: za,
  ZodLiteral: Wa,
  ZodMap: Cr,
  ZodNaN: Tr,
  ZodNativeEnum: Za,
  ZodNever: wn,
  ZodNull: fa,
  ZodNullable: An,
  ZodNumber: Cn,
  ZodObject: He,
  ZodOptional: on,
  ZodParsedType: ae,
  ZodPipeline: tr,
  ZodPromise: va,
  ZodReadonly: Ga,
  ZodRecord: Ua,
  ZodSchema: Ne,
  ZodSet: Kn,
  ZodString: Zt,
  ZodSymbol: Or,
  ZodTransformer: Jt,
  ZodTuple: cn,
  ZodType: Ne,
  ZodUndefined: Ba,
  ZodUnion: pa,
  ZodUnknown: Wn,
  ZodVoid: Sr,
  addIssueToContext: J,
  any: qm,
  array: Jm,
  bigint: zm,
  boolean: El,
  coerce: wp,
  custom: wl,
  date: Wm,
  datetimeRegex: _l,
  defaultErrorMap: da,
  discriminatedUnion: np,
  effect: Eo,
  enum: dp,
  function: lp,
  getErrorMap: xr,
  getParsedType: hn,
  instanceof: jm,
  intersection: ap,
  isAborted: gs,
  isAsync: Ma,
  isDirty: ys,
  isValid: qn,
  late: Bm,
  lazy: up,
  literal: cp,
  makeIssue: Er,
  map: op,
  nan: Um,
  nativeEnum: fp,
  never: Km,
  null: Gm,
  nullable: vp,
  number: xl,
  object: Qm,
  get objectUtil() {
    return hs;
  },
  oboolean: bp,
  onumber: _p,
  optional: pp,
  ostring: yp,
  pipeline: gp,
  preprocess: hp,
  promise: mp,
  quotelessJson: vm,
  record: sp,
  set: ip,
  setErrorMap: hm,
  strictObject: ep,
  string: kl,
  symbol: Zm,
  transformer: Eo,
  tuple: rp,
  undefined: Hm,
  union: tp,
  unknown: Ym,
  get util() {
    return Me;
  },
  void: Xm
}, Symbol.toStringTag, { value: "Module" }));
function So(e, t, n, a = !1, r) {
  Gn(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), n(document.activeElement, s));
  }), Gn(e, "click", (s) => {
    const o = s.target.closest(
      t
    );
    o && (a && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), n(o, s));
  });
}
function xp(e, t, n, a, r) {
  const s = e.includes(n), o = t.indexOf(n), i = t.indexOf(a), u = o < i ? t.slice(o, i + 1) : t.slice(i, o);
  return s ? Sf([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function Ep(e, t, n) {
  let a = null;
  const r = /* @__PURE__ */ Ef("Shift");
  Ve(
    () => e.value,
    (s, o) => {
      const i = s.length > o.length ? yo(s, o, n) : yo(o, s, n);
      if (i.length === 1) {
        const u = i[0];
        r.value && a && (e.value = xp(
          e.value,
          t.value,
          a,
          u
        )), a = u;
      }
    }
  );
}
function Co(e) {
  const t = e.shape, n = {};
  for (const a in t) {
    const r = t[a], s = r._def.typeName === "ZodOptional", o = r._def.innerType || r;
    let i = r;
    if (o instanceof pa) {
      const c = o._def.options.filter(
        (d) => !(d instanceof fa)
      );
      c.length === 1 && (i = c[0].optional());
    }
    i instanceof Zt && i._def?.checks?.[0]?.kind === "datetime" && (i = Oo.date()), s && (i = i.optional()), n[a] = i;
  }
  return Oo.object(n);
}
const Op = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Sp = {
  key: 0,
  class: "absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md"
}, Cp = { class: "flex flex-col items-center gap-2" }, Tp = { class: "text-sm text-muted-foreground" }, Np = { class: "[&>tbody>tr:hover]:bg-emphasis h-1 !table [&_td,&_th]:border-muted/15 min-h-0 w-full [&_th:last-child,&_td:last-child]:pr-6 [&>tbody>tr>td,&>thead>tr>th]:border-b-1 [&>thead>tr>th:first-child,&tbody>tr>td:first-child]:pl-6" }, Ap = { class: "" }, Ip = {
  key: 0,
  class: "!w-6 !pr-0"
}, Pp = {
  key: 1,
  class: "!w-6"
}, Dp = {
  key: 0,
  class: "text-xs text-muted-foreground"
}, $p = { class: "[&>*]:!w-3 [&>*]:!h-3 -ml-1" }, Lp = { key: 2 }, Rp = { class: "bg-muted/50 hover:bg-muted/70" }, Vp = ["colspan"], Mp = { class: "flex items-center gap-2" }, Fp = { class: "text-sm" }, Bp = ["data-state", "data-row-id"], jp = {
  key: 0,
  class: "!w-6 !pr-0"
}, Up = {
  key: 1,
  class: "!w-6 !pr-0"
}, zp = ["data-col-id", "tabindex"], Wp = { class: "flex items-center gap-0.5" }, Zp = {
  key: 0,
  class: "hover:!bg-transparent"
}, Hp = ["colspan"], Gp = { class: "p-4" }, qp = ["data-state", "data-row-id"], Yp = {
  key: 0,
  class: "!w-6 !pr-0"
}, Kp = {
  key: 1,
  class: "!w-6 !pr-0"
}, Xp = ["data-col-id", "tabindex"], Jp = { class: "flex items-center gap-0.5" }, Qp = {
  key: 0,
  class: "hover:!bg-transparent"
}, ev = ["colspan"], tv = { class: "p-4" }, nv = {
  key: 0,
  class: "@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear"
}, av = { key: 0 }, rv = { class: "flex gap-2 items-center min-w-0" }, sv = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, ov = { key: 1 }, iv = { class: "text-sm line-clamp-1 text-muted-foreground" }, lv = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, Vb = /* @__PURE__ */ V({
  __name: "DataTable",
  props: /* @__PURE__ */ dt({
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
  emits: /* @__PURE__ */ dt(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy"]),
  setup(e, { expose: t, emit: n }) {
    const a = n, r = (ce, q) => {
      let U = {
        "dataTable.loading": "Loading...",
        "dataTable.noEntriesFound": "No entries found",
        "dataTable.expandedContent": "Expanded content for ID: {id}",
        "dataTable.elementsSelected": "{count} of {total} selected",
        "dataTable.totalElements": "{total} total elements",
        "dataTable.manageTranslations": "Manage translations"
      }[ce] || ce;
      return q && Object.entries(q).forEach(([j, W]) => {
        U = U.replace(`{${j}}`, String(W));
      }), U;
    }, s = Z(() => vs(e.columns, (ce) => ce.id)), o = Z(() => vs(e.items, (ce) => ce.id)), i = vt(e, "visibleColumns"), u = vt(e, "itemsPerPage"), c = vt(e, "page"), d = vt(e, "sortBy"), p = Z(() => e.items && e.items.length > 0);
    Ve(u, () => {
      c.value && c.value > 1 && (c.value = 1);
    });
    function m(ce) {
      !d.value || d.value.key !== ce ? d.value = { key: ce, order: "asc" } : d.value.key === ce && (d.value.order === "asc" ? d.value = { key: ce, order: "desc" } : d.value = void 0);
    }
    const h = ju("container"), I = fm(h, '[data-slot="table-container"]'), O = pm(I);
    So(h, "[data-col-id]", (ce) => {
      const q = ce.getAttribute("data-col-id"), te = ce.closest("tr")?.getAttribute("data-row-id");
      if (!q || !te)
        return;
      const U = s.value[q], j = o.value[te];
      U && j && U.onClick?.(j);
    }), So(h, "[data-row-id]", (ce) => {
      const q = ce.getAttribute("data-row-id");
      q && a("clickRow", q);
    });
    const A = Z(() => e.items), { state: y, clear: w, stateMap: E, toggle: x, toggleAll: k, allToggledState: S } = To(A, "id");
    Ep(
      y,
      Z(() => e.items.map((ce) => ce.id))
    ), mm(() => (w(), !0), Z(() => y.value.length > 0)), Ve(c, () => w());
    const { stateMap: _, toggle: P, allToggledState: D, toggleAll: Y } = To(A, "id", e.storagekey), Q = Z(() => i.value ? e.columns.filter((ce) => i.value?.includes(ce.id)) : e.columns), ee = Z(() => Q.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    return t({ selected: y, clearSelected: w }), (ce, q) => {
      const te = Uu("TableEmpty"), U = zu("tooltip");
      return g(), K("div", Op, [
        me("div", {
          ref: "container",
          class: Fe(["min-w-0 min-h-0 relative flex flex-col", { "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": e.selectMode === "multiselect", "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": e.hasActionsColumn }])
        }, [
          e.isPending ? (g(), K("div", Sp, [
            me("div", Cp, [
              N(l(Bf), { class: "h-8 w-8 animate-spin text-muted-foreground" }),
              me("span", Tp, de(r("dataTable.loading") || "Loading..."), 1)
            ])
          ])) : ke("", !0),
          me("div", {
            class: Fe(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            me("table", Np, [
              me("thead", Ap, [
                me("tr", null, [
                  e.expandable ? (g(), K("th", Ip, [
                    Rs((g(), L(ht, {
                      variant: "muted",
                      size: "xs",
                      class: "[&:not(:hover)]:opacity-0",
                      onClick: q[0] || (q[0] = (j) => l(Y)())
                    }, {
                      default: b(() => [
                        (g(), L(Nt(l(D) ? l(Un) : l(ia))))
                      ]),
                      _: 1
                    })), [
                      [U, "Toggle collapse"]
                    ])
                  ])) : ke("", !0),
                  e.selectMode === "multiselect" ? (g(), K("th", Pp, [
                    N(l(_r), {
                      "model-value": l(S),
                      "onUpdate:modelValue": q[1] || (q[1] = () => l(k)())
                    }, null, 8, ["model-value"])
                  ])) : ke("", !0),
                  (g(!0), K(Ue, null, tt(Q.value, (j) => (g(), K("th", {
                    key: j.id
                  }, [
                    !e.sortable || !j.sortable ? (g(), K("span", Dp, de(j.title || l(_o)(j.id)), 1)) : (g(), L(ht, {
                      key: 1,
                      size: "sm",
                      variant: "ghost",
                      class: Fe(["-mx-2 px-2 !whitespace-normal break-word text-left", d.value?.key === j.id ? "text-foreground" : "text-muted-foreground"]),
                      onClick: (W) => m(j.id)
                    }, {
                      default: b(() => [
                        Te(de(j.title || l(_o)(j.id)) + " ", 1),
                        me("div", $p, [
                          d.value?.key === j.id && d.value.order === "desc" ? (g(), L(l(Lf), { key: 0 })) : d.value?.key === j.id && d.value.order === "asc" ? (g(), L(l($f), { key: 1 })) : (g(), L(l(Df), { key: 2 }))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]))
                  ]))), 128)),
                  e.hasActionsColumn ? (g(), K("th", Lp)) : ke("", !0)
                ])
              ]),
              me("tbody", null, [
                e.isGrouped ? (g(!0), K(Ue, { key: 0 }, tt(e.groups, (j, W) => (g(), K(Ue, { key: W }, [
                  me("tr", Rp, [
                    me("td", {
                      colspan: ee.value,
                      class: "font-medium"
                    }, [
                      me("div", Mp, [
                        me("span", Fp, de(e.groupByField) + ": " + de(W || "(No value)"), 1),
                        N(l(dm), {
                          variant: "secondary",
                          class: "ml-2"
                        }, {
                          default: b(() => [
                            Te(de(j.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 8, Vp)
                  ]),
                  (g(!0), K(Ue, null, tt(j, (Oe) => (g(), K(Ue, {
                    key: Oe.id
                  }, [
                    me("tr", {
                      "data-state": (l(E)[Oe.id] || e.highlightedRow === Oe.id) && "selected",
                      "data-row-id": Oe.id
                    }, [
                      e.expandable ? (g(), K("td", jp, [
                        N(ht, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0 -mr-1",
                          onClick: (Re) => l(P)(Oe[e.idcol])
                        }, {
                          default: b(() => [
                            (g(), L(Nt(l(_)[Oe[e.idcol]] ? l(Un) : l(ia)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : ke("", !0),
                      e.selectMode === "multiselect" ? (g(), K("td", Up, [
                        N(l(_r), {
                          "model-value": l(y).includes(Oe.id),
                          "onUpdate:modelValue": (Re) => l(x)(Oe.id)
                        }, null, 8, ["model-value", "onUpdate:modelValue"])
                      ])) : ke("", !0),
                      (g(!0), K(Ue, null, tt(Q.value, (Re) => (g(), K("td", {
                        key: Re.id,
                        "data-col-id": Re.id,
                        tabindex: Re.onClick ? 0 : -1,
                        class: Fe(Re.cssClass)
                      }, [
                        H(ce.$slots, `cell:${String(Re.id)}`, {
                          item: Oe,
                          value: Oe[Re.id],
                          expanded: l(_)[Oe[e.idcol]]
                        }, () => [
                          Te(de(Oe[Re.id]), 1)
                        ])
                      ], 10, zp))), 128)),
                      e.hasActionsColumn ? (g(), K("td", {
                        key: 2,
                        class: Fe(["sticky right-0", { "bg-background/90  [[data-state=selected]_&]:bg-muted/90 ": !l(O).right }])
                      }, [
                        me("div", Wp, [
                          H(ce.$slots, "cell:actions", { item: Oe })
                        ])
                      ], 2)) : ke("", !0)
                    ], 8, Bp),
                    e.expandable && l(_)[Oe[e.idcol]] ? (g(), K("tr", Zp, [
                      me("td", {
                        colspan: ee.value,
                        class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                      }, [
                        H(ce.$slots, "expanded-row", { item: Oe }, () => [
                          me("div", Gp, de(r("dataTable.expandedContent", { id: Oe[e.idcol] })), 1)
                        ])
                      ], 8, Hp)
                    ])) : ke("", !0)
                  ], 64))), 128))
                ], 64))), 128)) : (g(!0), K(Ue, { key: 1 }, tt(e.items, (j) => (g(), K(Ue, {
                  key: j.id
                }, [
                  me("tr", {
                    "data-state": (l(E)[j.id] || e.highlightedRow === j[e.idcol]) && "selected",
                    "data-row-id": j.id
                  }, [
                    e.expandable ? (g(), K("td", Yp, [
                      N(ht, {
                        size: "sm",
                        variant: "ghost",
                        class: "h-6 w-6 p-0 -mr-1",
                        onClick: (W) => l(P)(j[e.idcol])
                      }, {
                        default: b(() => [
                          (g(), L(Nt(l(_)[j[e.idcol]] ? l(Un) : l(ia)), { class: "h-4 w-4" }))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : ke("", !0),
                    e.selectMode === "multiselect" ? (g(), K("td", Kp, [
                      N(l(_r), {
                        "model-value": l(y).includes(j.id),
                        "onUpdate:modelValue": (W) => l(x)(j.id)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ])) : ke("", !0),
                    (g(!0), K(Ue, null, tt(Q.value, (W) => (g(), K("td", {
                      key: W.id,
                      "data-col-id": W.id,
                      tabindex: W.onClick ? 0 : -1,
                      class: Fe(W.cssClass)
                    }, [
                      H(ce.$slots, `cell:${String(W.id)}`, {
                        item: j,
                        value: j[W.id],
                        expanded: l(_)[j[e.idcol]]
                      }, () => [
                        Te(de(j[W.id]), 1)
                      ])
                    ], 10, Xp))), 128)),
                    e.hasActionsColumn ? (g(), K("td", {
                      key: 2,
                      class: Fe(["sticky right-0", { "bg-background/90  [[data-state=selected]_&]:bg-muted/90 ": !l(O).right }])
                    }, [
                      me("div", Jp, [
                        H(ce.$slots, "cell:actions", { item: j })
                      ])
                    ], 2)) : ke("", !0)
                  ], 8, qp),
                  e.expandable && l(_)[j[e.idcol]] ? (g(), K("tr", Qp, [
                    me("td", {
                      colspan: ee.value,
                      class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                    }, [
                      H(ce.$slots, "expanded-row", { item: j }, () => [
                        me("div", tv, de(r("dataTable.expandedContent", { id: j[e.idcol] })), 1)
                      ])
                    ], 8, ev)
                  ])) : ke("", !0)
                ], 64))), 128)),
                p.value ? ke("", !0) : (g(), L(te, {
                  key: 2,
                  colspan: ee.value
                }, {
                  default: b(() => [
                    Te(de(r("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }, 8, ["colspan"]))
              ])
            ])
          ], 2)
        ], 2),
        e.total && e.total > 0 ? (g(), K("div", nv, [
          e.selectMode === "multiselect" && l(y).length > 0 ? (g(), K("div", av, [
            me("div", rv, [
              me("span", sv, de(r("dataTable.elementsSelected", {
                count: l(y).length,
                total: e.items.length
              })), 1),
              l(y).length > 0 ? H(ce.$slots, "bulk", {
                key: 0,
                selected: l(y)
              }) : ke("", !0)
            ])
          ])) : l(y).length === 0 && e.total !== void 0 ? (g(), K("div", ov, [
            me("span", iv, de(r("dataTable.totalElements", { total: e.total })), 1)
          ])) : ke("", !0),
          e.total !== void 0 ? (g(), K("div", lv, [
            N(cm, {
              page: c.value,
              "onUpdate:page": q[2] || (q[2] = (j) => c.value = j),
              "items-per-page": u.value,
              "onUpdate:itemsPerPage": q[3] || (q[3] = (j) => u.value = j),
              "hide-items-per-page": l(y).length > 0,
              total: e.total,
              disabled: e.isPending
            }, null, 8, ["page", "items-per-page", "hide-items-per-page", "total", "disabled"])
          ])) : ke("", !0)
        ])) : ke("", !0)
      ]);
    };
  }
});
function To(e, t, n) {
  const a = n ? Of(n, []) : pe([]), r = Z(() => Object.fromEntries(a.value.map((d) => [d, !0]))), s = (d) => a.value = Cf(a.value, d), o = Z(() => a.value.length > 0 ? a.value?.length === e.value.length ? !0 : "indeterminate" : !1);
  function i() {
    a.value = [];
  }
  function u() {
    a.value = e.value.map((d) => d[t]);
  }
  return {
    state: a,
    stateMap: r,
    toggle: s,
    allToggledState: o,
    toggleAll: () => o.value === !1 || o.value === "indeterminate" ? u() : i(),
    clear: i
  };
}
const uv = ["datetime", "title"], Mb = /* @__PURE__ */ V({
  __name: "DateFormat",
  props: {
    date: {},
    format: { default: "DD.MM.YYYY HH:mm" },
    relative: { type: Boolean, default: !1 },
    locale: { default: "de-DE" }
  },
  setup(e) {
    const t = e, n = {
      "date.daysAgo": "{count} days ago",
      "date.hoursAgo": "{count} hours ago",
      "date.minutesAgo": "{count} minutes ago",
      "date.justNow": "Just now"
    }, a = (u, c) => {
      let d = n[u] || u;
      return c && Object.entries(c).forEach(([p, m]) => {
        d = d.replace(`{${p}}`, String(m));
      }), d;
    }, r = Z(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ uf(r, t.format, {
      locales: t.locale
    }), o = Z(() => {
      if (!t.relative)
        return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - r.value.getTime(), d = Math.floor(c / 1e3), p = Math.floor(d / 60), m = Math.floor(p / 60), h = Math.floor(m / 24);
      return h > 0 ? a("date.daysAgo", { count: h }) : m > 0 ? a("date.hoursAgo", { count: m }) : p > 0 ? a("date.minutesAgo", { count: p }) : a("date.justNow");
    }), i = Z(() => t.relative ? o.value : s.value);
    return (u, c) => (g(), K("time", {
      datetime: r.value.toISOString(),
      title: t.relative ? l(s) : void 0,
      class: "whitespace-nowrap"
    }, de(i.value), 9, uv));
  }
}), cv = /* @__PURE__ */ V({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), K("div", {
      "data-slot": "input-group",
      role: "group",
      class: Fe(l(re)(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        t.class
      ))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), dv = ["data-align"], No = /* @__PURE__ */ V({
  __name: "InputGroupAddon",
  props: {
    align: { default: "inline-start" },
    class: {}
  },
  setup(e) {
    const t = e;
    function n(a) {
      const r = a.currentTarget, s = a.target;
      s && s.closest("button") || r && r?.parentElement && r.parentElement?.querySelector("input")?.focus();
    }
    return (a, r) => (g(), K("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: Fe(l(re)(l(vv)({ align: t.align }), t.class)),
      onClick: n
    }, [
      H(a.$slots, "default")
    ], 10, dv));
  }
}), fv = /* @__PURE__ */ V({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L(l(ht), {
      "data-size": t.size,
      variant: t.variant,
      class: Fe(l(re)(l(hv)({ size: t.size }), t.class))
    }, {
      default: b(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), In = /* @__PURE__ */ V({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = /* @__PURE__ */ rl(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (s, o) => Rs((g(), K("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => rn(r) ? r.value = i : null),
      "data-slot": "input",
      class: Fe(l(re)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n.class
      ))
    }, null, 2)), [
      [Ai, l(r)]
    ]);
  }
}), mv = /* @__PURE__ */ V({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L(l(In), {
      "data-slot": "input-group-control",
      class: Fe(l(re)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), pv = /* @__PURE__ */ V({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = /* @__PURE__ */ rl(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (s, o) => Rs((g(), K("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => rn(r) ? r.value = i : null),
      "data-slot": "textarea",
      class: Fe(l(re)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", n.class))
    }, null, 2)), [
      [Ai, l(r)]
    ]);
  }
}), vv = er(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
), hv = er(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
), Fb = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ dt({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: { default: "Search..." }
  }, {
    modelValue: {},
    modelModifiers: {},
    modelSubmit: { default: "" },
    modelSubmitModifiers: {}
  }),
  emits: /* @__PURE__ */ dt(["onSubmit", "onClear"], ["update:modelValue", "update:modelSubmit"]),
  setup(e, { emit: t }) {
    const n = t, a = vt(e, "modelValue"), r = vt(e, "modelSubmit"), s = Z(() => !!a.value && a.value.length > 0);
    function o() {
      r.value = a.value || "", n("onSubmit", a.value || "");
    }
    function i() {
      r.value = "", a.value = "", n("onClear", "");
    }
    return (u, c) => (g(), L(l(cv), null, {
      default: b(() => [
        N(l(No), { align: "inline-start" }, {
          default: b(() => [
            N(l(Uf))
          ]),
          _: 1
        }),
        N(l(mv), ne({
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          type: "text",
          placeholder: e.placeholder
        }, u.$attrs, {
          onKeydown: Wu(o, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        s.value && e.showClearButton ? (g(), L(l(No), {
          key: 0,
          align: "inline-end"
        }, {
          default: b(() => [
            N(l(fv), {
              variant: "ghost",
              size: "icon-xs",
              onClick: i
            }, {
              default: b(() => [
                N(l(Br))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ke("", !0)
      ]),
      _: 1
    }));
  }
}), gv = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, yv = /* @__PURE__ */ V({
  __name: "Empty",
  setup(e) {
    const t = (n) => ({
      "common.noValues": "No values"
    })[n] || n;
    return (n, a) => (g(), K("div", gv, [
      N(l(Ff), { size: 16 }),
      me("span", null, [
        H(n.$slots, "default", {}, () => [
          Te(de(t("common.noValues")), 1)
        ])
      ])
    ]));
  }
}), _v = { class: "flex-1" }, bv = { class: "flex gap-1 items-center" }, wv = {
  key: 0,
  class: "flex-1"
}, kv = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, xv = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ dt({
    addItemButtonLabel: { default: "Add Item" },
    multiple: { type: Boolean },
    options: {},
    showAddItemButton: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ dt(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = vt(e, "modelValue"), n = pe(""), { startsWith: a } = hc({ sensitivity: "base" }), r = Z(() => M(e.options).filter((i) => a(i.label, n.value))), s = Z(() => !!M(e.options).length), o = (i, u) => {
      let d = {
        "common.elementCountSelected": "{count} selected"
      }[i] || i;
      return u && Object.entries(u).forEach(([p, m]) => {
        d = d.replace(`{${p}}`, String(m));
      }), d;
    };
    return (i, u) => (g(), K(Ue, null, [
      N(l(gc), {
        modelValue: t.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => t.value = c),
        multiple: e.multiple
      }, {
        default: b(() => [
          N(l(yc), {
            modelValue: n.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
            disabled: !s.value,
            class: Fe(l(re)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "class"]),
          r.value.length ? ke("", !0) : (g(), L(yv, { key: 0 })),
          N(l(_c), { class: "max-h-[400px] overflow-auto" }, {
            default: b(() => [
              (g(!0), K(Ue, null, tt(r.value, (c) => (g(), L(l(bc), {
                key: String(c.value),
                value: c.value,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: b(() => [
                  me("div", _v, de(c.label), 1),
                  N(l(wc), null, {
                    default: b(() => [
                      N(l(js), { size: 12 })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "multiple"]),
      me("div", bv, [
        e.showAddItemButton ? (g(), K("div", wv, [
          N(ht, {
            size: "xs",
            class: "sticky bottom-0",
            variant: "ghost",
            onClick: u[2] || (u[2] = (c) => i.$emit("onAddItem"))
          }, {
            default: b(() => [
              N(l(Fr)),
              Te(" " + de(e.addItemButtonLabel), 1)
            ]),
            _: 1
          })
        ])) : ke("", !0),
        s.value && e.multiple ? (g(), K("div", kv, de(o("common.elementCountSelected", { count: t.value.length })), 1)) : ke("", !0)
      ])
    ], 64));
  }
}), Bb = /* @__PURE__ */ V({
  __name: "InputRange",
  props: /* @__PURE__ */ dt({
    modelValue: {},
    class: {},
    placeholder: {},
    disabled: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = vt(e, "modelValue");
    function a(r, s) {
      n.value || (n.value = [void 0, void 0]), n.value[r] = s, Ii(n);
    }
    return (r, s) => (g(), K("div", {
      class: Fe(l(re)("flex items-center gap-0", t.class))
    }, [
      N(l(In), {
        "model-value": n.value?.[0],
        placeholder: e.placeholder?.[0] || "Min",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": s[0] || (s[0] = (o) => a(0, o))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      N(l(In), {
        "model-value": n.value?.[1],
        placeholder: e.placeholder?.[1] || "Max",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": s[1] || (s[1] = (o) => a(1, o))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), Ol = /* @__PURE__ */ V({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = wt(e, t);
    return (s, o) => (g(), L(l(kc), ne({ "data-slot": "popover" }, l(r)), {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sl = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
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
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(xc), null, {
      default: b(() => [
        N(l(Ec), ne({ "data-slot": "popover-content" }, { ...l(s), ...o.$attrs }, {
          class: l(re)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            n.class
          )
        }), {
          default: b(() => [
            H(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Cl = /* @__PURE__ */ V({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L(l(Oc), ne({ "data-slot": "popover-trigger" }, t), {
      default: b(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, Ov = { class: "text-muted-foreground" }, Sv = { class: "font-semibold" }, Cv = {
  key: 1,
  class: "text-muted-foreground"
}, Ao = /* @__PURE__ */ V({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    const t = (n) => ({
      "common.novalue": "No value"
    })[n] || n;
    return (n, a) => (g(), K("div", Ev, [
      e.value?.length ? (g(!0), K(Ue, { key: 0 }, tt(e.value, (r, s) => (g(), K("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        me("span", Ov, " ≥" + de(`${r.from}:`), 1),
        a[0] || (a[0] = Te()),
        me("span", Sv, de(r.value), 1)
      ]))), 128)) : (g(), K("span", Cv, de(t("common.novalue")), 1))
    ]));
  }
}), Tv = { key: 0 }, Nv = { class: "text-xs" }, Av = { class: "text-xs" }, Iv = { class: "flex gap-2" }, jb = /* @__PURE__ */ V({
  __name: "InputGraduated",
  props: /* @__PURE__ */ dt({
    class: {},
    placeholder: {}
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = (u) => ({
      "common.from": "From",
      "common.value": "Value",
      "common.add": "Add",
      "common.clear": "Clear All"
    })[u] || u, a = (u) => typeof u == "string", r = vt(e, "modelValue"), s = () => r.value?.push({ from: 0, value: 0 }), o = (u) => r.value.splice(u, 1), i = () => r.value = [];
    return (u, c) => (g(), L(l(Ol), null, {
      default: b(() => [
        N(l(Cl), { "as-child": "" }, {
          default: b(() => [
            N(fl, {
              class: Fe(t.class),
              variant: "outline"
            }, {
              default: b(() => [
                r.value.length ? (g(), L(Ao, {
                  key: 0,
                  value: r.value
                }, null, 8, ["value"])) : e.placeholder ? (g(), K(Ue, { key: 1 }, [
                  a(e.placeholder) ? (g(), K("span", Tv)) : (g(), L(Ao, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : ke("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        N(l(Sl), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: b(() => [
            (g(!0), K(Ue, null, tt(r.value, (d, p) => (g(), K("div", {
              key: p,
              class: "flex gap-2 items-center"
            }, [
              me("label", Nv, de(n("common.from")) + ":", 1),
              N(In, {
                modelValue: r.value[p].from,
                "onUpdate:modelValue": (m) => r.value[p].from = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              me("label", Av, de(n("common.value")) + ":", 1),
              N(In, {
                modelValue: r.value[p].value,
                "onUpdate:modelValue": (m) => r.value[p].value = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              N(ht, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (m) => o(p)
              }, {
                default: b(() => [
                  N(l(Br))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            me("div", Iv, [
              N(ht, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (d) => s())
              }, {
                default: b(() => [
                  N(l(Fr)),
                  Te(" " + de(n("common.add")), 1)
                ]),
                _: 1
              }),
              r.value.length > 0 ? (g(), L(ht, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (d) => i())
              }, {
                default: b(() => [
                  N(l(zf)),
                  Te(" " + de(n("common.clear")), 1)
                ]),
                _: 1
              })) : ke("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ub = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ dt({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = vt(e, "modelValue");
    return (a, r) => (g(), L(zs, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (s) => n.value = s),
      class: Fe(t.class),
      options: [{ value: !0, label: "True" }, { value: !1, label: "False" }]
    }, null, 8, ["modelValue", "class"]));
  }
}), ha = sn([]), Pv = Z(() => vs(ha.value, (e) => e.key)), Hs = pe({});
function Tl(e) {
  const t = ha.value.findIndex((n) => n.key === e);
  t !== -1 && ha.value.splice(t, 1), vl.remove(e);
}
const Nl = (e) => {
  Hs.value[e] = !1, Pv.value[e]?.onClose?.(), setTimeout(() => Tl(e), 600);
}, Dv = (e) => (e.key = e.key ?? `${Math.random()}`, ha.value.push(e), Ii(ha), Hs.value[e.key] = !0, vl.add(() => (Nl(e.key), !0), e.key), e.key), $v = { close: Nl, visible: Hs, open: Dv, instances: ha, removeInstance: Tl }, Al = () => $v, zb = /* @__PURE__ */ V({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: n, instances: a } = Al();
    return (r, s) => (g(!0), K(Ue, null, tt(l(a), (o) => (g(), L(Nt(o.component), ne({
      key: o.key,
      open: l(n)[o.key]
    }, { ref_for: !0 }, o.componentProps || {}, {
      "onUpdate:open": (i) => !i && l(t)(o.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
});
/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function dn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Io = {};
function Lv(e) {
  Io[e] || (Io[e] = !0, dn(e));
}
const kn = typeof window < "u";
let Ft, Jn;
if (process.env.NODE_ENV !== "production") {
  const e = kn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ft = (t) => {
    e.mark(t);
  }, Jn = (t, n, a) => {
    e.measure(t, n, a), e.clearMarks(n), e.clearMarks(a);
  });
}
const Rv = /\{([0-9a-zA-Z]+)\}/g;
function Ur(e, ...t) {
  return t.length === 1 && je(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Rv, (n, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const xn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Vv = (e, t, n) => Mv({ l: e, k: t, s: n }), Mv = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), pt = (e) => typeof e == "number" && isFinite(e), Fv = (e) => Gs(e) === "[object Date]", Nr = (e) => Gs(e) === "[object RegExp]", zr = (e) => Be(e) && Object.keys(e).length === 0, gt = Object.assign, Bv = Object.create, ze = (e = null) => Bv(e);
let Po;
const Bn = () => Po || (Po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ze());
function Do(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function $o(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jv(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, r, s) => `${r}="${$o(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, r, s) => `${r}='${$o(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && dn("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const Uv = Object.prototype.hasOwnProperty;
function Yt(e, t) {
  return Uv.call(e, t);
}
const nt = Array.isArray, Ke = (e) => typeof e == "function", se = (e) => typeof e == "string", et = (e) => typeof e == "boolean", je = (e) => e !== null && typeof e == "object", zv = (e) => je(e) && Ke(e.then) && Ke(e.catch), Il = Object.prototype.toString, Gs = (e) => Il.call(e), Be = (e) => Gs(e) === "[object Object]", Wv = (e) => e == null ? "" : nt(e) || Be(e) && e.toString === Il ? JSON.stringify(e, null, 2) : String(e);
function qs(e, t = "") {
  return e.reduce((n, a, r) => r === 0 ? n + a : n + t + a, "");
}
const Lo = 2;
function Zv(e, t = 0, n = e.length) {
  const a = e.split(/\r?\n/);
  let r = 0;
  const s = [];
  for (let o = 0; o < a.length; o++)
    if (r += a[o].length + 1, r >= t) {
      for (let i = o - Lo; i <= o + Lo || n > r; i++) {
        if (i < 0 || i >= a.length)
          continue;
        const u = i + 1;
        s.push(`${u}${" ".repeat(3 - String(u).length)}|  ${a[i]}`);
        const c = a[i].length;
        if (i === o) {
          const d = t - (r - c) + 1, p = Math.max(1, n > r ? c - d : n - t);
          s.push("   |  " + " ".repeat(d) + "^".repeat(p));
        } else if (i > o) {
          if (n > r) {
            const d = Math.max(Math.min(n - r, c), 1);
            s.push("   |  " + "^".repeat(d));
          }
          r += c + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function Hv() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, a) {
      const r = e.get(n);
      r && r.push(a) || e.set(n, [a]);
    },
    off(n, a) {
      const r = e.get(n);
      r && r.splice(r.indexOf(a) >>> 0, 1);
    },
    emit(n, a) {
      (e.get(n) || []).slice().map((r) => r(a)), (e.get("*") || []).slice().map((r) => r(n, a));
    }
  };
}
const dr = (e) => !je(e) || nt(e);
function br(e, t) {
  if (dr(e) || dr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: r } = n.pop();
    Object.keys(a).forEach((s) => {
      s !== "__proto__" && (je(a[s]) && !je(r[s]) && (r[s] = Array.isArray(a[s]) ? [] : ze()), dr(r[s]) || dr(a[s]) ? r[s] = a[s] : n.push({ src: a[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Gv(e, t, n) {
  return { line: e, column: t, offset: n };
}
function bs(e, t, n) {
  return { start: e, end: t };
}
const _e = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, qv = 17, Yv = {
  // tokenizer error messages
  [_e.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [_e.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [_e.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [_e.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [_e.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [_e.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [_e.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [_e.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [_e.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [_e.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [_e.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [_e.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [_e.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [_e.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [_e.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ka(e, t, n = {}) {
  const { domain: a, messages: r, args: s } = n, o = process.env.NODE_ENV !== "production" ? Ur((r || Yv)[e] || "", ...s || []) : e, i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = a, i;
}
function Kv(e) {
  throw e;
}
const Xv = /<\/?[\w\s="/.':;#-\/]+>/, Jv = (e) => Xv.test(e), tn = " ", Qv = "\r", Et = `
`, eh = "\u2028", th = "\u2029";
function nh(e) {
  const t = e;
  let n = 0, a = 1, r = 1, s = 0;
  const o = (_) => t[_] === Qv && t[_ + 1] === Et, i = (_) => t[_] === Et, u = (_) => t[_] === th, c = (_) => t[_] === eh, d = (_) => o(_) || i(_) || u(_) || c(_), p = () => n, m = () => a, h = () => r, I = () => s, O = (_) => o(_) || u(_) || c(_) ? Et : t[_], A = () => O(n), y = () => O(n + s);
  function w() {
    return s = 0, d(n) && (a++, r = 0), o(n) && n++, n++, r++, t[n];
  }
  function E() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function x() {
    n = 0, a = 1, r = 1, s = 0;
  }
  function k(_ = 0) {
    s = _;
  }
  function S() {
    const _ = n + s;
    for (; _ !== n; )
      w();
    s = 0;
  }
  return {
    index: p,
    line: m,
    column: h,
    peekOffset: I,
    charAt: O,
    currentChar: A,
    currentPeek: y,
    next: w,
    peek: E,
    reset: x,
    resetPeek: k,
    skipToPeek: S
  };
}
const pn = void 0, ah = ".", Ro = "'", rh = "tokenizer";
function sh(e, t = {}) {
  const n = t.location !== !1, a = nh(e), r = () => a.index(), s = () => Gv(a.line(), a.column(), a.index()), o = s(), i = r(), u = {
    currentType: 13,
    offset: i,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => u, { onError: d } = t;
  function p(f, v, R, ...G) {
    const xe = c();
    if (v.column += R, v.offset += R, d) {
      const Ce = n ? bs(xe.startLoc, v) : null, be = ka(f, Ce, {
        domain: rh,
        args: G
      });
      d(be);
    }
  }
  function m(f, v, R) {
    f.endLoc = s(), f.currentType = v;
    const G = { type: v };
    return n && (G.loc = bs(f.startLoc, f.endLoc)), R != null && (G.value = R), G;
  }
  const h = (f) => m(
    f,
    13
    /* TokenTypes.EOF */
  );
  function I(f, v) {
    return f.currentChar() === v ? (f.next(), v) : (p(_e.EXPECTED_TOKEN, s(), 0, v), "");
  }
  function O(f) {
    let v = "";
    for (; f.currentPeek() === tn || f.currentPeek() === Et; )
      v += f.currentPeek(), f.peek();
    return v;
  }
  function A(f) {
    const v = O(f);
    return f.skipToPeek(), v;
  }
  function y(f) {
    if (f === pn)
      return !1;
    const v = f.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v === 95;
  }
  function w(f) {
    if (f === pn)
      return !1;
    const v = f.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function E(f, v) {
    const { currentType: R } = v;
    if (R !== 2)
      return !1;
    O(f);
    const G = y(f.currentPeek());
    return f.resetPeek(), G;
  }
  function x(f, v) {
    const { currentType: R } = v;
    if (R !== 2)
      return !1;
    O(f);
    const G = f.currentPeek() === "-" ? f.peek() : f.currentPeek(), xe = w(G);
    return f.resetPeek(), xe;
  }
  function k(f, v) {
    const { currentType: R } = v;
    if (R !== 2)
      return !1;
    O(f);
    const G = f.currentPeek() === Ro;
    return f.resetPeek(), G;
  }
  function S(f, v) {
    const { currentType: R } = v;
    if (R !== 7)
      return !1;
    O(f);
    const G = f.currentPeek() === ".";
    return f.resetPeek(), G;
  }
  function _(f, v) {
    const { currentType: R } = v;
    if (R !== 8)
      return !1;
    O(f);
    const G = y(f.currentPeek());
    return f.resetPeek(), G;
  }
  function P(f, v) {
    const { currentType: R } = v;
    if (!(R === 7 || R === 11))
      return !1;
    O(f);
    const G = f.currentPeek() === ":";
    return f.resetPeek(), G;
  }
  function D(f, v) {
    const { currentType: R } = v;
    if (R !== 9)
      return !1;
    const G = () => {
      const Ce = f.currentPeek();
      return Ce === "{" ? y(f.peek()) : Ce === "@" || Ce === "|" || Ce === ":" || Ce === "." || Ce === tn || !Ce ? !1 : Ce === Et ? (f.peek(), G()) : Q(f, !1);
    }, xe = G();
    return f.resetPeek(), xe;
  }
  function Y(f) {
    O(f);
    const v = f.currentPeek() === "|";
    return f.resetPeek(), v;
  }
  function Q(f, v = !0) {
    const R = (xe = !1, Ce = "") => {
      const be = f.currentPeek();
      return be === "{" || be === "@" || !be ? xe : be === "|" ? !(Ce === tn || Ce === Et) : be === tn ? (f.peek(), R(!0, tn)) : be === Et ? (f.peek(), R(!0, Et)) : !0;
    }, G = R();
    return v && f.resetPeek(), G;
  }
  function ee(f, v) {
    const R = f.currentChar();
    return R === pn ? pn : v(R) ? (f.next(), R) : null;
  }
  function ce(f) {
    const v = f.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36;
  }
  function q(f) {
    return ee(f, ce);
  }
  function te(f) {
    const v = f.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36 || // $
    v === 45;
  }
  function U(f) {
    return ee(f, te);
  }
  function j(f) {
    const v = f.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function W(f) {
    return ee(f, j);
  }
  function Oe(f) {
    const v = f.charCodeAt(0);
    return v >= 48 && v <= 57 || // 0-9
    v >= 65 && v <= 70 || // A-F
    v >= 97 && v <= 102;
  }
  function Re(f) {
    return ee(f, Oe);
  }
  function rt(f) {
    let v = "", R = "";
    for (; v = W(f); )
      R += v;
    return R;
  }
  function It(f) {
    let v = "";
    for (; ; ) {
      const R = f.currentChar();
      if (R === "{" || R === "}" || R === "@" || R === "|" || !R)
        break;
      if (R === tn || R === Et)
        if (Q(f))
          v += R, f.next();
        else {
          if (Y(f))
            break;
          v += R, f.next();
        }
      else
        v += R, f.next();
    }
    return v;
  }
  function Ge(f) {
    A(f);
    let v = "", R = "";
    for (; v = U(f); )
      R += v;
    const G = f.currentChar();
    if (G && G !== "}" && G !== pn && G !== tn && G !== Et && G !== "　") {
      const xe = Qe(f);
      return p(_e.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, R + xe), R + xe;
    }
    return f.currentChar() === pn && p(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), R;
  }
  function $e(f) {
    A(f);
    let v = "";
    return f.currentChar() === "-" ? (f.next(), v += `-${rt(f)}`) : v += rt(f), f.currentChar() === pn && p(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), v;
  }
  function Tt(f) {
    return f !== Ro && f !== Et;
  }
  function oe(f) {
    A(f), I(f, "'");
    let v = "", R = "";
    for (; v = ee(f, Tt); )
      v === "\\" ? R += ie(f) : R += v;
    const G = f.currentChar();
    return G === Et || G === pn ? (p(_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), G === Et && (f.next(), I(f, "'")), R) : (I(f, "'"), R);
  }
  function ie(f) {
    const v = f.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return f.next(), `\\${v}`;
      case "u":
        return Ae(f, v, 4);
      case "U":
        return Ae(f, v, 6);
      default:
        return p(_e.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, v), "";
    }
  }
  function Ae(f, v, R) {
    I(f, v);
    let G = "";
    for (let xe = 0; xe < R; xe++) {
      const Ce = Re(f);
      if (!Ce) {
        p(_e.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${v}${G}${f.currentChar()}`);
        break;
      }
      G += Ce;
    }
    return `\\${v}${G}`;
  }
  function Ie(f) {
    return f !== "{" && f !== "}" && f !== tn && f !== Et;
  }
  function Qe(f) {
    A(f);
    let v = "", R = "";
    for (; v = ee(f, Ie); )
      R += v;
    return R;
  }
  function st(f) {
    let v = "", R = "";
    for (; v = q(f); )
      R += v;
    return R;
  }
  function qe(f) {
    const v = (R) => {
      const G = f.currentChar();
      return G === "{" || G === "@" || G === "|" || G === "(" || G === ")" || !G || G === tn ? R : (R += G, f.next(), v(R));
    };
    return v("");
  }
  function Vt(f) {
    A(f);
    const v = I(
      f,
      "|"
      /* TokenChars.Pipe */
    );
    return A(f), v;
  }
  function fn(f, v) {
    let R = null;
    switch (f.currentChar()) {
      case "{":
        return v.braceNest >= 1 && p(_e.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), f.next(), R = m(
          v,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(f), v.braceNest++, R;
      case "}":
        return v.braceNest > 0 && v.currentType === 2 && p(_e.EMPTY_PLACEHOLDER, s(), 0), f.next(), R = m(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), v.braceNest--, v.braceNest > 0 && A(f), v.inLinked && v.braceNest === 0 && (v.inLinked = !1), R;
      case "@":
        return v.braceNest > 0 && p(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), R = Gt(f, v) || h(v), v.braceNest = 0, R;
      default: {
        let xe = !0, Ce = !0, be = !0;
        if (Y(f))
          return v.braceNest > 0 && p(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), R = m(v, 1, Vt(f)), v.braceNest = 0, v.inLinked = !1, R;
        if (v.braceNest > 0 && (v.currentType === 4 || v.currentType === 5 || v.currentType === 6))
          return p(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), v.braceNest = 0, qt(f, v);
        if (xe = E(f, v))
          return R = m(v, 4, Ge(f)), A(f), R;
        if (Ce = x(f, v))
          return R = m(v, 5, $e(f)), A(f), R;
        if (be = k(f, v))
          return R = m(v, 6, oe(f)), A(f), R;
        if (!xe && !Ce && !be)
          return R = m(v, 12, Qe(f)), p(_e.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, R.value), A(f), R;
        break;
      }
    }
    return R;
  }
  function Gt(f, v) {
    const { currentType: R } = v;
    let G = null;
    const xe = f.currentChar();
    switch ((R === 7 || R === 8 || R === 11 || R === 9) && (xe === Et || xe === tn) && p(_e.INVALID_LINKED_FORMAT, s(), 0), xe) {
      case "@":
        return f.next(), G = m(
          v,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), v.inLinked = !0, G;
      case ".":
        return A(f), f.next(), m(
          v,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(f), f.next(), m(
          v,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Y(f) ? (G = m(v, 1, Vt(f)), v.braceNest = 0, v.inLinked = !1, G) : S(f, v) || P(f, v) ? (A(f), Gt(f, v)) : _(f, v) ? (A(f), m(v, 11, st(f))) : D(f, v) ? (A(f), xe === "{" ? fn(f, v) || G : m(v, 10, qe(f))) : (R === 7 && p(_e.INVALID_LINKED_FORMAT, s(), 0), v.braceNest = 0, v.inLinked = !1, qt(f, v));
    }
  }
  function qt(f, v) {
    let R = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (v.braceNest > 0)
      return fn(f, v) || h(v);
    if (v.inLinked)
      return Gt(f, v) || h(v);
    switch (f.currentChar()) {
      case "{":
        return fn(f, v) || h(v);
      case "}":
        return p(_e.UNBALANCED_CLOSING_BRACE, s(), 0), f.next(), m(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Gt(f, v) || h(v);
      default: {
        if (Y(f))
          return R = m(v, 1, Vt(f)), v.braceNest = 0, v.inLinked = !1, R;
        if (Q(f))
          return m(v, 0, It(f));
        break;
      }
    }
    return R;
  }
  function En() {
    const { currentType: f, offset: v, startLoc: R, endLoc: G } = u;
    return u.lastType = f, u.lastOffset = v, u.lastStartLoc = R, u.lastEndLoc = G, u.offset = r(), u.startLoc = s(), a.currentChar() === pn ? m(
      u,
      13
      /* TokenTypes.EOF */
    ) : qt(a, u);
  }
  return {
    nextToken: En,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const oh = "parser", ih = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function lh(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || n, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function uh(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function a(y, w, E, x, ...k) {
    const S = y.currentPosition();
    if (S.offset += x, S.column += x, n) {
      const _ = t ? bs(E, S) : null, P = ka(w, _, {
        domain: oh,
        args: k
      });
      n(P);
    }
  }
  function r(y, w, E) {
    const x = { type: y };
    return t && (x.start = w, x.end = w, x.loc = { start: E, end: E }), x;
  }
  function s(y, w, E, x) {
    t && (y.end = w, y.loc && (y.loc.end = E));
  }
  function o(y, w) {
    const E = y.context(), x = r(3, E.offset, E.startLoc);
    return x.value = w, s(x, y.currentOffset(), y.currentPosition()), x;
  }
  function i(y, w) {
    const E = y.context(), { lastOffset: x, lastStartLoc: k } = E, S = r(5, x, k);
    return S.index = parseInt(w, 10), y.nextToken(), s(S, y.currentOffset(), y.currentPosition()), S;
  }
  function u(y, w) {
    const E = y.context(), { lastOffset: x, lastStartLoc: k } = E, S = r(4, x, k);
    return S.key = w, y.nextToken(), s(S, y.currentOffset(), y.currentPosition()), S;
  }
  function c(y, w) {
    const E = y.context(), { lastOffset: x, lastStartLoc: k } = E, S = r(9, x, k);
    return S.value = w.replace(ih, lh), y.nextToken(), s(S, y.currentOffset(), y.currentPosition()), S;
  }
  function d(y) {
    const w = y.nextToken(), E = y.context(), { lastOffset: x, lastStartLoc: k } = E, S = r(8, x, k);
    return w.type !== 11 ? (a(y, _e.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), S.value = "", s(S, x, k), {
      nextConsumeToken: w,
      node: S
    }) : (w.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, nn(w)), S.value = w.value || "", s(S, y.currentOffset(), y.currentPosition()), {
      node: S
    });
  }
  function p(y, w) {
    const E = y.context(), x = r(7, E.offset, E.startLoc);
    return x.value = w, s(x, y.currentOffset(), y.currentPosition()), x;
  }
  function m(y) {
    const w = y.context(), E = r(6, w.offset, w.startLoc);
    let x = y.nextToken();
    if (x.type === 8) {
      const k = d(y);
      E.modifier = k.node, x = k.nextConsumeToken || y.nextToken();
    }
    switch (x.type !== 9 && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(x)), x = y.nextToken(), x.type === 2 && (x = y.nextToken()), x.type) {
      case 10:
        x.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(x)), E.key = p(y, x.value || "");
        break;
      case 4:
        x.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(x)), E.key = u(y, x.value || "");
        break;
      case 5:
        x.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(x)), E.key = i(y, x.value || "");
        break;
      case 6:
        x.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(x)), E.key = c(y, x.value || "");
        break;
      default: {
        a(y, _e.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
        const k = y.context(), S = r(7, k.offset, k.startLoc);
        return S.value = "", s(S, k.offset, k.startLoc), E.key = S, s(E, k.offset, k.startLoc), {
          nextConsumeToken: x,
          node: E
        };
      }
    }
    return s(E, y.currentOffset(), y.currentPosition()), {
      node: E
    };
  }
  function h(y) {
    const w = y.context(), E = w.currentType === 1 ? y.currentOffset() : w.offset, x = w.currentType === 1 ? w.endLoc : w.startLoc, k = r(2, E, x);
    k.items = [];
    let S = null;
    do {
      const D = S || y.nextToken();
      switch (S = null, D.type) {
        case 0:
          D.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(D)), k.items.push(o(y, D.value || ""));
          break;
        case 5:
          D.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(D)), k.items.push(i(y, D.value || ""));
          break;
        case 4:
          D.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(D)), k.items.push(u(y, D.value || ""));
          break;
        case 6:
          D.value == null && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, nn(D)), k.items.push(c(y, D.value || ""));
          break;
        case 7: {
          const Y = m(y);
          k.items.push(Y.node), S = Y.nextConsumeToken || null;
          break;
        }
      }
    } while (w.currentType !== 13 && w.currentType !== 1);
    const _ = w.currentType === 1 ? w.lastOffset : y.currentOffset(), P = w.currentType === 1 ? w.lastEndLoc : y.currentPosition();
    return s(k, _, P), k;
  }
  function I(y, w, E, x) {
    const k = y.context();
    let S = x.items.length === 0;
    const _ = r(1, w, E);
    _.cases = [], _.cases.push(x);
    do {
      const P = h(y);
      S || (S = P.items.length === 0), _.cases.push(P);
    } while (k.currentType !== 13);
    return S && a(y, _e.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), s(_, y.currentOffset(), y.currentPosition()), _;
  }
  function O(y) {
    const w = y.context(), { offset: E, startLoc: x } = w, k = h(y);
    return w.currentType === 13 ? k : I(y, E, x, k);
  }
  function A(y) {
    const w = sh(y, gt({}, e)), E = w.context(), x = r(0, E.offset, E.startLoc);
    return t && x.loc && (x.loc.source = y), x.body = O(w), e.onCacheKey && (x.cacheKey = e.onCacheKey(y)), E.currentType !== 13 && a(w, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, y[E.offset] || ""), s(x, w.currentOffset(), w.currentPosition()), x;
  }
  return { parse: A };
}
function nn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ch(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Vo(e, t) {
  for (let n = 0; n < e.length; n++)
    Ys(e[n], t);
}
function Ys(e, t) {
  switch (e.type) {
    case 1:
      Vo(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Vo(e.items, t);
      break;
    case 6: {
      Ys(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function dh(e, t = {}) {
  const n = ch(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ys(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function fh(e) {
  const t = e.body;
  return t.type === 2 ? Mo(t) : t.cases.forEach((n) => Mo(n)), e;
}
function Mo(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const a = e.items[n];
      if (!(a.type === 3 || a.type === 9) || a.value == null)
        break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = qs(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
const mh = "minifier";
function ra(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ra(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++)
        ra(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++)
        ra(n[a]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      ra(t.key), t.k = t.key, delete t.key, t.modifier && (ra(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw ka(_e.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: mh,
          args: [e.type]
        });
  }
  delete e.type;
}
const ph = "parser";
function vh(e, t) {
  const { filename: n, breakLineCode: a, needIndent: r } = t, s = t.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: r,
    indentLevel: 0
  };
  s && e.loc && (o.source = e.loc.source);
  const i = () => o;
  function u(O, A) {
    o.code += O;
  }
  function c(O, A = !0) {
    const y = A ? a : "";
    u(r ? y + "  ".repeat(O) : y);
  }
  function d(O = !0) {
    const A = ++o.indentLevel;
    O && c(A);
  }
  function p(O = !0) {
    const A = --o.indentLevel;
    O && c(A);
  }
  function m() {
    c(o.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: d,
    deindent: p,
    newline: m,
    helper: (O) => `_${O}`,
    needIndent: () => o.needIndent
  };
}
function hh(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ga(e, t.key), t.modifier ? (e.push(", "), ga(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function gh(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const r = t.items.length;
  for (let s = 0; s < r && (ga(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function yh(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const r = t.cases.length;
    for (let s = 0; s < r && (ga(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function _h(e, t) {
  t.body ? ga(e, t.body) : e.push("null");
}
function ga(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      _h(e, t);
      break;
    case 1:
      yh(e, t);
      break;
    case 2:
      gh(e, t);
      break;
    case 6:
      hh(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw ka(_e.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ph,
          args: [t.type]
        });
  }
}
const bh = (e, t = {}) => {
  const n = se(t.mode) ? t.mode : "normal", a = se(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], i = vh(e, {
    filename: a,
    breakLineCode: r,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), o.length > 0 && (i.push(`const { ${qs(o.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), ga(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: u, map: c } = i.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function wh(e, t = {}) {
  const n = gt({}, t), a = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = uh(n).parse(e);
  return a ? (s && fh(i), r && ra(i), { ast: i, code: "" }) : (dh(i, n), bh(i, n));
}
/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function kh() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Bn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Bn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Xt(e) {
  return je(e) && Ks(e) === 0 && (Yt(e, "b") || Yt(e, "body"));
}
const Pl = ["b", "body"];
function xh(e) {
  return $n(e, Pl);
}
const Dl = ["c", "cases"];
function Eh(e) {
  return $n(e, Dl, []);
}
const $l = ["s", "static"];
function Oh(e) {
  return $n(e, $l);
}
const Ll = ["i", "items"];
function Sh(e) {
  return $n(e, Ll, []);
}
const Rl = ["t", "type"];
function Ks(e) {
  return $n(e, Rl);
}
const Vl = ["v", "value"];
function fr(e, t) {
  const n = $n(e, Vl);
  if (n != null)
    return n;
  throw qa(t);
}
const Ml = ["m", "modifier"];
function Ch(e) {
  return $n(e, Ml);
}
const Fl = ["k", "key"];
function Th(e) {
  const t = $n(e, Fl);
  if (t)
    return t;
  throw qa(
    6
    /* NodeTypes.Linked */
  );
}
function $n(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (Yt(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const Bl = [
  ...Pl,
  ...Dl,
  ...$l,
  ...Ll,
  ...Fl,
  ...Ml,
  ...Vl,
  ...Rl
];
function qa(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ns(e) {
  return (n) => Nh(n, e);
}
function Nh(e, t) {
  const n = xh(t);
  if (n == null)
    throw qa(
      0
      /* NodeTypes.Resource */
    );
  if (Ks(n) === 1) {
    const s = Eh(n);
    return e.plural(s.reduce((o, i) => [
      ...o,
      Fo(e, i)
    ], []));
  } else
    return Fo(e, n);
}
function Fo(e, t) {
  const n = Oh(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const a = Sh(t).reduce((r, s) => [...r, ws(e, s)], []);
    return e.normalize(a);
  }
}
function ws(e, t) {
  const n = Ks(t);
  switch (n) {
    case 3:
      return fr(t, n);
    case 9:
      return fr(t, n);
    case 4: {
      const a = t;
      if (Yt(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (Yt(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw qa(n);
    }
    case 5: {
      const a = t;
      if (Yt(a, "i") && pt(a.i))
        return e.interpolate(e.list(a.i));
      if (Yt(a, "index") && pt(a.index))
        return e.interpolate(e.list(a.index));
      throw qa(n);
    }
    case 6: {
      const a = t, r = Ch(a), s = Th(a);
      return e.linked(ws(e, s), r ? ws(e, r) : void 0, e.type);
    }
    case 7:
      return fr(t, n);
    case 8:
      return fr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Ah = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ih(e, t) {
  t && Jv(e) && dn(Ur(Ah, { source: e }));
}
const Ph = (e) => e;
let mr = ze();
function Dh(e, t = {}) {
  let n = !1;
  const a = t.onError || Kv;
  return t.onError = (r) => {
    n = !0, a(r);
  }, { ...wh(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function $h(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
    const n = et(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ih(e, n);
    const r = (t.onCacheKey || Ph)(e), s = mr[r];
    if (s)
      return s;
    const { ast: o, detectError: i } = Dh(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = ns(o);
    return i ? u : mr[r] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !Xt(e))
      return dn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const n = e.cacheKey;
    if (n) {
      const a = mr[n];
      return a || (mr[n] = ns(e));
    } else
      return ns(e);
  }
}
let Ya = null;
function Lh(e) {
  Ya = e;
}
function Rh(e, t, n) {
  Ya && Ya.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Vh = /* @__PURE__ */ Mh("function:translate");
function Mh(e) {
  return (t) => Ya && Ya.emit(e, t);
}
const St = {
  INVALID_ARGUMENT: qv,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Fh = 24;
function yn(e) {
  return ka(e, null, process.env.NODE_ENV !== "production" ? { messages: Bh } : void 0);
}
const Bh = {
  [St.INVALID_ARGUMENT]: "Invalid arguments",
  [St.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [St.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [St.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [St.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [St.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [St.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Xs(e, t) {
  return t.locale != null ? Bo(t.locale) : Bo(e.locale);
}
let as;
function Bo(e) {
  if (se(e))
    return e;
  if (Ke(e)) {
    if (e.resolvedOnce && as != null)
      return as;
    if (e.constructor.name === "Function") {
      const t = e();
      if (zv(t))
        throw yn(St.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return as = t;
    } else
      throw yn(St.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw yn(St.NOT_SUPPORT_LOCALE_TYPE);
}
function jh(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...nt(t) ? t : je(t) ? Object.keys(t) : se(t) ? [t] : [n]
  ])];
}
function jl(e, t, n) {
  const a = se(n) ? n : Ar, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(a);
  if (!s) {
    s = [];
    let o = [n];
    for (; nt(o); )
      o = jo(s, o, t);
    const i = nt(t) || !Be(t) ? t : t.default ? t.default : null;
    o = se(i) ? [i] : i, nt(o) && jo(s, o, !1), r.__localeChainCache.set(a, s);
  }
  return s;
}
function jo(e, t, n) {
  let a = !0;
  for (let r = 0; r < t.length && et(a); r++) {
    const s = t[r];
    se(s) && (a = Uh(e, t[r], n));
  }
  return a;
}
function Uh(e, t, n) {
  let a;
  const r = t.split("-");
  do {
    const s = r.join("-");
    a = zh(e, s, n), r.splice(-1, 1);
  } while (r.length && a === !0);
  return a;
}
function zh(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (nt(n) || Be(n)) && n[r] && (a = n[r]);
  }
  return a;
}
const Ln = [];
Ln[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ln[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ln[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Ln[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Ln[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Ln[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Ln[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Wh = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Zh(e) {
  return Wh.test(e);
}
function Hh(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Gh(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function qh(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Zh(t) ? Hh(t) : "*" + t;
}
function Yh(e) {
  const t = [];
  let n = -1, a = 0, r = 0, s, o, i, u, c, d, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = i : o += i;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), r++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, a = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, o === void 0 || (o = qh(o), o === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const I = e[n + 1];
    if (a === 5 && I === "'" || a === 6 && I === '"')
      return n++, i = "\\" + I, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, s = e[n], !(s === "\\" && h())) {
      if (u = Gh(s), p = Ln[a], c = p[u] || p.l || 8, c === 8 || (a = c[0], c[1] !== void 0 && (d = m[c[1]], d && (i = s, d() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const Uo = /* @__PURE__ */ new Map();
function Kh(e, t) {
  return je(e) ? e[t] : null;
}
function Xh(e, t) {
  if (!je(e))
    return null;
  let n = Uo.get(t);
  if (n || (n = Yh(t), n && Uo.set(t, n)), !n)
    return null;
  const a = n.length;
  let r = e, s = 0;
  for (; s < a; ) {
    const o = n[s];
    if (Bl.includes(o) && Xt(r))
      return null;
    const i = r[o];
    if (i === void 0 || Ke(r))
      return null;
    r = i, s++;
  }
  return r;
}
const Lt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Jh = 8, Qh = {
  [Lt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Lt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Lt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Lt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Lt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Lt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Lt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Qn(e, ...t) {
  return Ur(Qh[e], ...t);
}
const eg = "11.1.12", Wr = -1, Ar = "en-US", Ir = "", zo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tg() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && je(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && je(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? zo(e) : t === "vnode" && je(e) && "__v_isVNode" in e ? zo(e.children) : e
  };
}
let Ul;
function ng(e) {
  Ul = e;
}
let zl;
function ag(e) {
  zl = e;
}
let Wl;
function rg(e) {
  Wl = e;
}
let Zl = null;
const sg = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Zl = e;
}, og = /* @__NO_SIDE_EFFECTS__ */ () => Zl;
let Hl = null;
const Wo = (e) => {
  Hl = e;
}, ig = () => Hl;
let Zo = 0;
function lg(e = {}) {
  const t = Ke(e.onWarn) ? e.onWarn : dn, n = se(e.version) ? e.version : eg, a = se(e.locale) || Ke(e.locale) ? e.locale : Ar, r = Ke(a) ? Ar : a, s = nt(e.fallbackLocale) || Be(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, o = Be(e.messages) ? e.messages : rs(r), i = Be(e.datetimeFormats) ? e.datetimeFormats : rs(r), u = Be(e.numberFormats) ? e.numberFormats : rs(r), c = gt(ze(), e.modifiers, tg()), d = e.pluralRules || ze(), p = Ke(e.missing) ? e.missing : null, m = et(e.missingWarn) || Nr(e.missingWarn) ? e.missingWarn : !0, h = et(e.fallbackWarn) || Nr(e.fallbackWarn) ? e.fallbackWarn : !0, I = !!e.fallbackFormat, O = !!e.unresolving, A = Ke(e.postTranslation) ? e.postTranslation : null, y = Be(e.processor) ? e.processor : null, w = et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, x = Ke(e.messageCompiler) ? e.messageCompiler : Ul;
  process.env.NODE_ENV !== "production" && Ke(e.messageCompiler) && Lv(Qn(Lt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const k = Ke(e.messageResolver) ? e.messageResolver : zl || Kh, S = Ke(e.localeFallbacker) ? e.localeFallbacker : Wl || jh, _ = je(e.fallbackContext) ? e.fallbackContext : void 0, P = e, D = je(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), Y = je(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), Q = je(P.__meta) ? P.__meta : {};
  Zo++;
  const ee = {
    version: n,
    cid: Zo,
    locale: a,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: d,
    missing: p,
    missingWarn: m,
    fallbackWarn: h,
    fallbackFormat: I,
    unresolving: O,
    postTranslation: A,
    processor: y,
    warnHtmlMessage: w,
    escapeParameter: E,
    messageCompiler: x,
    messageResolver: k,
    localeFallbacker: S,
    fallbackContext: _,
    onWarn: t,
    __meta: Q
  };
  return ee.datetimeFormats = i, ee.numberFormats = u, ee.__datetimeFormatters = D, ee.__numberFormatters = Y, process.env.NODE_ENV !== "production" && (ee.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Rh(ee, n, Q), ee;
}
const rs = (e) => ({ [e]: ze() });
function Zr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Gl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Js(e, t, n, a, r) {
  const { missing: s, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (s !== null) {
    const i = s(e, n, t, r);
    return se(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Gl(a, t) && o(Qn(Lt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Aa(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ql(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ug(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (ql(e, t[a]))
      return !0;
  return !1;
}
const Ho = typeof Intl < "u", Yl = {
  dateTimeFormat: Ho && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ho && typeof Intl.NumberFormat < "u"
};
function Go(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Yl.dateTimeFormat)
    return s(Qn(Lt.CANNOT_FORMAT_DATE)), Ir;
  const [u, c, d, p] = ks(...t), m = et(d.missingWarn) ? d.missingWarn : e.missingWarn, h = et(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, I = !!d.part, O = Xs(e, d), A = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    O
  );
  if (!se(u) || u === "")
    return new Intl.DateTimeFormat(O, p).format(c);
  let y = {}, w, E = null, x = O, k = null;
  const S = "datetime format";
  for (let D = 0; D < A.length; D++) {
    if (w = k = A[D], process.env.NODE_ENV !== "production" && O !== w && Zr(h, u) && s(Qn(Lt.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: w
    })), process.env.NODE_ENV !== "production" && O !== w) {
      const Y = e.__v_emitter;
      Y && Y.emit("fallback", {
        type: S,
        key: u,
        from: x,
        to: k,
        groupId: `${S}:${u}`
      });
    }
    if (y = n[w] || {}, E = y[u], Be(E))
      break;
    Js(e, u, w, m, S), x = k;
  }
  if (!Be(E) || !se(w))
    return a ? Wr : u;
  let _ = `${w}__${u}`;
  zr(p) || (_ = `${_}__${JSON.stringify(p)}`);
  let P = i.get(_);
  return P || (P = new Intl.DateTimeFormat(w, gt({}, E, p)), i.set(_, P)), I ? P.formatToParts(c) : P.format(c);
}
const Kl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function ks(...e) {
  const [t, n, a, r] = e, s = ze();
  let o = ze(), i;
  if (se(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw yn(St.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw yn(St.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Fv(t)) {
    if (isNaN(t.getTime()))
      throw yn(St.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (pt(t))
    i = t;
  else
    throw yn(St.INVALID_ARGUMENT);
  return se(n) ? s.key = n : Be(n) && Object.keys(n).forEach((u) => {
    Kl.includes(u) ? o[u] = n[u] : s[u] = n[u];
  }), se(a) ? s.locale = a : Be(a) && (o = a), Be(r) && (o = r), [s.key || "", i, s, o];
}
function qo(e, t, n) {
  const a = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    a.__datetimeFormatters.has(s) && a.__datetimeFormatters.delete(s);
  }
}
function Yo(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Yl.numberFormat)
    return s(Qn(Lt.CANNOT_FORMAT_NUMBER)), Ir;
  const [u, c, d, p] = xs(...t), m = et(d.missingWarn) ? d.missingWarn : e.missingWarn, h = et(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, I = !!d.part, O = Xs(e, d), A = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    O
  );
  if (!se(u) || u === "")
    return new Intl.NumberFormat(O, p).format(c);
  let y = {}, w, E = null, x = O, k = null;
  const S = "number format";
  for (let D = 0; D < A.length; D++) {
    if (w = k = A[D], process.env.NODE_ENV !== "production" && O !== w && Zr(h, u) && s(Qn(Lt.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: w
    })), process.env.NODE_ENV !== "production" && O !== w) {
      const Y = e.__v_emitter;
      Y && Y.emit("fallback", {
        type: S,
        key: u,
        from: x,
        to: k,
        groupId: `${S}:${u}`
      });
    }
    if (y = n[w] || {}, E = y[u], Be(E))
      break;
    Js(e, u, w, m, S), x = k;
  }
  if (!Be(E) || !se(w))
    return a ? Wr : u;
  let _ = `${w}__${u}`;
  zr(p) || (_ = `${_}__${JSON.stringify(p)}`);
  let P = i.get(_);
  return P || (P = new Intl.NumberFormat(w, gt({}, E, p)), i.set(_, P)), I ? P.formatToParts(c) : P.format(c);
}
const Xl = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function xs(...e) {
  const [t, n, a, r] = e, s = ze();
  let o = ze();
  if (!pt(t))
    throw yn(St.INVALID_ARGUMENT);
  const i = t;
  return se(n) ? s.key = n : Be(n) && Object.keys(n).forEach((u) => {
    Xl.includes(u) ? o[u] = n[u] : s[u] = n[u];
  }), se(a) ? s.locale = a : Be(a) && (o = a), Be(r) && (o = r), [s.key || "", i, s, o];
}
function Ko(e, t, n) {
  const a = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    a.__numberFormatters.has(s) && a.__numberFormatters.delete(s);
  }
}
const cg = (e) => e, dg = (e) => "", fg = "text", mg = (e) => e.length === 0 ? "" : qs(e), pg = Wv;
function Xo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function vg(e) {
  const t = pt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (pt(e.named.count) || pt(e.named.n)) ? pt(e.named.count) ? e.named.count : pt(e.named.n) ? e.named.n : t : t;
}
function hg(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function gg(e = {}) {
  const t = e.locale, n = vg(e), a = je(e.pluralRules) && se(t) && Ke(e.pluralRules[t]) ? e.pluralRules[t] : Xo, r = je(e.pluralRules) && se(t) && Ke(e.pluralRules[t]) ? Xo : void 0, s = (y) => y[a(n, y.length, r)], o = e.list || [], i = (y) => o[y], u = e.named || ze();
  pt(e.pluralIndex) && hg(n, u);
  const c = (y) => u[y];
  function d(y, w) {
    const E = Ke(e.messages) ? e.messages(y, !!w) : je(e.messages) ? e.messages[y] : !1;
    return E || (e.parent ? e.parent.message(y) : dg);
  }
  const p = (y) => e.modifiers ? e.modifiers[y] : cg, m = Be(e.processor) && Ke(e.processor.normalize) ? e.processor.normalize : mg, h = Be(e.processor) && Ke(e.processor.interpolate) ? e.processor.interpolate : pg, I = Be(e.processor) && se(e.processor.type) ? e.processor.type : fg, A = {
    list: i,
    named: c,
    plural: s,
    linked: (y, ...w) => {
      const [E, x] = w;
      let k = "text", S = "";
      w.length === 1 ? je(E) ? (S = E.modifier || S, k = E.type || k) : se(E) && (S = E || S) : w.length === 2 && (se(E) && (S = E || S), se(x) && (k = x || k));
      const _ = d(y, !0)(A), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        k === "vnode" && nt(_) && S ? _[0] : _
      );
      return S ? p(S)(P, k) : P;
    },
    message: d,
    type: I,
    interpolate: h,
    normalize: m,
    values: gt(ze(), o, u)
  };
  return A;
}
const Jo = () => "", Wt = (e) => Ke(e);
function Qo(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: i } = e, [u, c] = Es(...t), d = et(c.missingWarn) ? c.missingWarn : e.missingWarn, p = et(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = et(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, I = se(c.default) || et(c.default) ? et(c.default) ? s ? u : () => u : c.default : n ? s ? u : () => u : null, O = n || I != null && (se(I) || Ke(I)), A = Xs(e, c);
  m && yg(c);
  let [y, w, E] = h ? [
    u,
    A,
    i[A] || ze()
  ] : Jl(e, u, A, o, p, d), x = y, k = u;
  if (!h && !(se(x) || Xt(x) || Wt(x)) && O && (x = I, k = x), !h && (!(se(x) || Xt(x) || Wt(x)) || !se(w)))
    return r ? Wr : u;
  if (process.env.NODE_ENV !== "production" && se(x) && e.messageCompiler == null)
    return dn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let S = !1;
  const _ = () => {
    S = !0;
  }, P = Wt(x) ? x : Ql(e, u, w, x, k, _);
  if (S)
    return x;
  const D = kg(e, w, E, c), Y = gg(D), Q = _g(e, P, Y);
  let ee = a ? a(Q, u) : Q;
  if (m && se(ee) && (ee = jv(ee)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ce = {
      timestamp: Date.now(),
      key: se(u) ? u : Wt(x) ? x.key : "",
      locale: w || (Wt(x) ? x.locale : ""),
      format: se(x) ? x : Wt(x) ? x.source : "",
      message: ee
    };
    ce.meta = gt({}, e.__meta, /* @__PURE__ */ og() || {}), Vh(ce);
  }
  return ee;
}
function yg(e) {
  nt(e.list) ? e.list = e.list.map((t) => se(t) ? Do(t) : t) : je(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = Do(e.named[t]));
  });
}
function Jl(e, t, n, a, r, s) {
  const { messages: o, onWarn: i, messageResolver: u, localeFallbacker: c } = e, d = c(e, a, n);
  let p = ze(), m, h = null, I = n, O = null;
  const A = "translate";
  for (let y = 0; y < d.length; y++) {
    if (m = O = d[y], process.env.NODE_ENV !== "production" && n !== m && !ql(n, m) && Zr(r, t) && i(Qn(Lt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const k = e.__v_emitter;
      k && k.emit("fallback", {
        type: A,
        key: t,
        from: I,
        to: O,
        groupId: `${A}:${t}`
      });
    }
    p = o[m] || ze();
    let w = null, E, x;
    if (process.env.NODE_ENV !== "production" && kn && (w = window.performance.now(), E = "intlify-message-resolve-start", x = "intlify-message-resolve-end", Ft && Ft(E)), (h = u(p, t)) === null && (h = p[t]), process.env.NODE_ENV !== "production" && kn) {
      const k = window.performance.now(), S = e.__v_emitter;
      S && w && h && S.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: h,
        time: k - w,
        groupId: `${A}:${t}`
      }), E && x && Ft && Jn && (Ft(x), Jn("intlify message resolve", E, x));
    }
    if (se(h) || Xt(h) || Wt(h))
      break;
    if (!ug(m, d)) {
      const k = Js(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        s,
        A
      );
      k !== t && (h = k);
    }
    I = O;
  }
  return [h, m, p];
}
function Ql(e, t, n, a, r, s) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (Wt(a)) {
    const m = a;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (o == null) {
    const m = (() => a);
    return m.locale = n, m.key = t, m;
  }
  let u = null, c, d;
  process.env.NODE_ENV !== "production" && kn && (u = window.performance.now(), c = "intlify-message-compilation-start", d = "intlify-message-compilation-end", Ft && Ft(c));
  const p = o(a, bg(e, n, r, a, i, s));
  if (process.env.NODE_ENV !== "production" && kn) {
    const m = window.performance.now(), h = e.__v_emitter;
    h && u && h.emit("message-compilation", {
      type: "message-compilation",
      message: a,
      time: m - u,
      groupId: `translate:${t}`
    }), c && d && Ft && Jn && (Ft(d), Jn("intlify message compilation", c, d));
  }
  return p.locale = n, p.key = t, p.source = a, p;
}
function _g(e, t, n) {
  let a = null, r, s;
  process.env.NODE_ENV !== "production" && kn && (a = window.performance.now(), r = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Ft && Ft(r));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && kn) {
    const i = window.performance.now(), u = e.__v_emitter;
    u && a && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - a,
      groupId: `translate:${t.key}`
    }), r && s && Ft && Jn && (Ft(s), Jn("intlify message evaluation", r, s));
  }
  return o;
}
function Es(...e) {
  const [t, n, a] = e, r = ze();
  if (!se(t) && !pt(t) && !Wt(t) && !Xt(t))
    throw yn(St.INVALID_ARGUMENT);
  const s = pt(t) ? String(t) : (Wt(t), t);
  return pt(n) ? r.plural = n : se(n) ? r.default = n : Be(n) && !zr(n) ? r.named = n : nt(n) && (r.list = n), pt(a) ? r.plural = a : se(a) ? r.default = a : Be(a) && gt(r, a), [s, r];
}
function bg(e, t, n, a, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const i = wg(a), u = `Message compilation error: ${o.message}`, c = o.location && i && Zv(i, o.location.start.offset, o.location.end.offset), d = e.__v_emitter;
        d && i && d.emit("compile-error", {
          message: i,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${u}
${c}` : u);
      } else
        throw o;
    },
    onCacheKey: (o) => Vv(t, n, o)
  };
}
function wg(e) {
  if (se(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function kg(e, t, n, a) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: i, fallbackWarn: u, missingWarn: c, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (h, I) => {
      let O = o(n, h);
      if (O == null && (d || I)) {
        const [, , A] = Jl(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          i,
          u,
          c
        );
        O = o(A, h);
      }
      if (se(O) || Xt(O)) {
        let A = !1;
        const w = Ql(e, h, t, O, h, () => {
          A = !0;
        });
        return A ? Jo : w;
      } else return Wt(O) ? O : Jo;
    }
  };
  return e.processor && (m.processor = e.processor), a.list && (m.list = a.list), a.named && (m.named = a.named), pt(a.plural) && (m.pluralIndex = a.plural), m;
}
kh();
/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const xg = "11.1.12";
function Eg() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Bn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Bn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Bn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Bn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const _t = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Fh,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Ka(e, ...t) {
  return ka(e, null, process.env.NODE_ENV !== "production" ? { messages: Og, args: t } : void 0);
}
const Og = {
  [_t.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [_t.INVALID_ARGUMENT]: "Invalid argument",
  [_t.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [_t.NOT_INSTALLED]: "Need to install with `app.use` function",
  [_t.UNEXPECTED_ERROR]: "Unexpected error",
  [_t.REQUIRED_VALUE]: "Required in value: {0}",
  [_t.INVALID_VALUE]: "Invalid value",
  [_t.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [_t.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [_t.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [_t.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Os = /* @__PURE__ */ xn("__translateVNode"), Ss = /* @__PURE__ */ xn("__datetimeParts"), Cs = /* @__PURE__ */ xn("__numberParts"), Ts = /* @__PURE__ */ xn("__enableEmitter"), Ns = /* @__PURE__ */ xn("__disableEmitter"), Sg = xn("__setPluralRules"), eu = /* @__PURE__ */ xn("__injectWithOption"), As = /* @__PURE__ */ xn("__dispose"), an = {
  FALLBACK_TO_ROOT: Jh,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_LEGACY_MODE: 11,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12,
  // duplicate `useI18n` calling
  DUPLICATE_USE_I18N_CALLING: 13
}, Cg = {
  [an.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [an.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [an.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [an.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [an.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [an.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Pr(e, ...t) {
  return Ur(Cg[e], ...t);
}
function Xa(e) {
  if (!je(e) || Xt(e))
    return e;
  for (const t in e)
    if (Yt(e, t))
      if (!t.includes("."))
        je(e[t]) && Xa(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let r = e, s = !1;
        for (let o = 0; o < a; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in r || (r[n[o]] = ze()), !je(r[n[o]])) {
            process.env.NODE_ENV !== "production" && dn(Pr(an.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), s = !0;
            break;
          }
          r = r[n[o]];
        }
        if (s || (Xt(r) ? Bl.includes(n[a]) || delete e[t] : (r[n[a]] = e[t], delete e[t])), !Xt(r)) {
          const o = r[n[a]];
          je(o) && Xa(o);
        }
      }
  return e;
}
function tu(e, t) {
  const { messages: n, __i18n: a, messageResolver: r, flatJson: s } = t, o = Be(n) ? n : nt(a) ? ze() : { [e]: ze() };
  if (nt(a) && a.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: c } = i;
      u ? (o[u] = o[u] || ze(), br(c, o[u])) : br(c, o);
    } else
      se(i) && br(JSON.parse(i), o);
  }), r == null && s)
    for (const i in o)
      Yt(o, i) && Xa(o[i]);
  return o;
}
function nu(e) {
  return e.type;
}
function Tg(e, t, n) {
  let a = je(t.messages) ? t.messages : ze();
  "__i18nGlobal" in n && (a = tu(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(a);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, a[s]);
  });
  {
    if (je(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (je(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function ei(e) {
  return N(Zu, null, e, 0);
}
const ti = "__INTLIFY_META__", ni = () => [], Ng = () => !1;
let ai = 0;
function ri(e) {
  return ((t, n, a, r) => e(n, a, Rt() || void 0, r));
}
const Ag = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Rt();
  let t = null;
  return e && (t = nu(e)[ti]) ? { [ti]: t } : null;
};
function Ig(e = {}) {
  const { __root: t, __injectWithOption: n } = e, a = t === void 0, r = e.flatJson, s = kn ? pe : sn;
  let o = et(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && o ? t.locale.value : se(e.locale) ? e.locale : Ar
  ), u = s(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : se(e.fallbackLocale) || nt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = s(tu(i.value, e)), d = s(Be(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = s(Be(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : et(e.missingWarn) || Nr(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : et(e.fallbackWarn) || Nr(e.fallbackWarn) ? e.fallbackWarn : !0, I = t ? t.fallbackRoot : et(e.fallbackRoot) ? e.fallbackRoot : !0, O = !!e.fallbackFormat, A = Ke(e.missing) ? e.missing : null, y = Ke(e.missing) ? ri(e.missing) : null, w = Ke(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter;
  const k = t ? t.modifiers : Be(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, _;
  _ = (() => {
    a && Wo(null);
    const $ = {
      version: xg,
      locale: i.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: k,
      pluralRules: S,
      missing: y === null ? void 0 : y,
      missingWarn: m,
      fallbackWarn: h,
      fallbackFormat: O,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: E,
      escapeParameter: x,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    $.datetimeFormats = d.value, $.numberFormats = p.value, $.__datetimeFormatters = Be(_) ? _.__datetimeFormatters : void 0, $.__numberFormatters = Be(_) ? _.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && ($.__v_emitter = Be(_) ? _.__v_emitter : void 0);
    const B = lg($);
    return a && Wo(B), B;
  })(), Aa(_, i.value, u.value);
  function D() {
    return [
      i.value,
      u.value,
      c.value,
      d.value,
      p.value
    ];
  }
  const Y = Z({
    get: () => i.value,
    set: ($) => {
      _.locale = $, i.value = $;
    }
  }), Q = Z({
    get: () => u.value,
    set: ($) => {
      _.fallbackLocale = $, u.value = $, Aa(_, i.value, $);
    }
  }), ee = Z(() => c.value), ce = /* @__PURE__ */ Z(() => d.value), q = /* @__PURE__ */ Z(() => p.value);
  function te() {
    return Ke(w) ? w : null;
  }
  function U($) {
    w = $, _.postTranslation = $;
  }
  function j() {
    return A;
  }
  function W($) {
    $ !== null && (y = ri($)), A = $, _.missing = y;
  }
  function Oe($, B) {
    return $ !== "translate" || !B.resolvedMessage;
  }
  const Re = ($, B, De, We, Mt, en) => {
    D();
    let C;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (_.fallbackContext = t ? ig() : void 0), C = $(_);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (_.fallbackContext = void 0);
    }
    if (De !== "translate exists" && // for not `te` (e.g `t`)
    pt(C) && C === Wr || De === "translate exists" && !C) {
      const [T, F] = B();
      if (process.env.NODE_ENV !== "production" && t && se(T) && Oe(De, F) && (I && (Zr(h, T) || Gl(m, T)) && dn(Pr(an.FALLBACK_TO_ROOT, {
        key: T,
        type: De
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: X } = _;
        X && I && X.emit("fallback", {
          type: De,
          key: T,
          to: "global",
          groupId: `${De}:${T}`
        });
      }
      return t && I ? We(t) : Mt(T);
    } else {
      if (en(C))
        return C;
      throw Ka(_t.UNEXPECTED_RETURN_TYPE);
    }
  };
  function rt(...$) {
    return Re((B) => Reflect.apply(Qo, null, [B, ...$]), () => Es(...$), "translate", (B) => Reflect.apply(B.t, B, [...$]), (B) => B, (B) => se(B));
  }
  function It(...$) {
    const [B, De, We] = $;
    if (We && !je(We))
      throw Ka(_t.INVALID_ARGUMENT);
    return rt(B, De, gt({ resolvedMessage: !0 }, We || {}));
  }
  function Ge(...$) {
    return Re((B) => Reflect.apply(Go, null, [B, ...$]), () => ks(...$), "datetime format", (B) => Reflect.apply(B.d, B, [...$]), () => Ir, (B) => se(B) || nt(B));
  }
  function $e(...$) {
    return Re((B) => Reflect.apply(Yo, null, [B, ...$]), () => xs(...$), "number format", (B) => Reflect.apply(B.n, B, [...$]), () => Ir, (B) => se(B) || nt(B));
  }
  function Tt($) {
    return $.map((B) => se(B) || pt(B) || et(B) ? ei(String(B)) : B);
  }
  const ie = {
    normalize: Tt,
    interpolate: ($) => $,
    type: "vnode"
  };
  function Ae(...$) {
    return Re((B) => {
      let De;
      const We = B;
      try {
        We.processor = ie, De = Reflect.apply(Qo, null, [We, ...$]);
      } finally {
        We.processor = null;
      }
      return De;
    }, () => Es(...$), "translate", (B) => B[Os](...$), (B) => [ei(B)], (B) => nt(B));
  }
  function Ie(...$) {
    return Re((B) => Reflect.apply(Yo, null, [B, ...$]), () => xs(...$), "number format", (B) => B[Cs](...$), ni, (B) => se(B) || nt(B));
  }
  function Qe(...$) {
    return Re((B) => Reflect.apply(Go, null, [B, ...$]), () => ks(...$), "datetime format", (B) => B[Ss](...$), ni, (B) => se(B) || nt(B));
  }
  function st($) {
    S = $, _.pluralRules = S;
  }
  function qe($, B) {
    return Re(() => {
      if (!$)
        return !1;
      const De = se(B) ? B : i.value, We = Gt(De), Mt = _.messageResolver(We, $);
      return Xt(Mt) || Wt(Mt) || se(Mt);
    }, () => [$], "translate exists", (De) => Reflect.apply(De.te, De, [$, B]), Ng, (De) => et(De));
  }
  function Vt($) {
    let B = null;
    const De = jl(_, u.value, i.value);
    for (let We = 0; We < De.length; We++) {
      const Mt = c.value[De[We]] || {}, en = _.messageResolver(Mt, $);
      if (en != null) {
        B = en;
        break;
      }
    }
    return B;
  }
  function fn($) {
    const B = Vt($);
    return B ?? (t ? t.tm($) || {} : {});
  }
  function Gt($) {
    return c.value[$] || {};
  }
  function qt($, B) {
    if (r) {
      const De = { [$]: B };
      for (const We in De)
        Yt(De, We) && Xa(De[We]);
      B = De[$];
    }
    c.value[$] = B, _.messages = c.value;
  }
  function En($, B) {
    c.value[$] = c.value[$] || {};
    const De = { [$]: B };
    if (r)
      for (const We in De)
        Yt(De, We) && Xa(De[We]);
    B = De[$], br(B, c.value[$]), _.messages = c.value;
  }
  function f($) {
    return d.value[$] || {};
  }
  function v($, B) {
    d.value[$] = B, _.datetimeFormats = d.value, qo(_, $, B);
  }
  function R($, B) {
    d.value[$] = gt(d.value[$] || {}, B), _.datetimeFormats = d.value, qo(_, $, B);
  }
  function G($) {
    return p.value[$] || {};
  }
  function xe($, B) {
    p.value[$] = B, _.numberFormats = p.value, Ko(_, $, B);
  }
  function Ce($, B) {
    p.value[$] = gt(p.value[$] || {}, B), _.numberFormats = p.value, Ko(_, $, B);
  }
  ai++, t && kn && (Ve(t.locale, ($) => {
    o && (i.value = $, _.locale = $, Aa(_, i.value, u.value));
  }), Ve(t.fallbackLocale, ($) => {
    o && (u.value = $, _.fallbackLocale = $, Aa(_, i.value, u.value));
  }));
  const be = {
    id: ai,
    locale: Y,
    fallbackLocale: Q,
    get inheritLocale() {
      return o;
    },
    set inheritLocale($) {
      o = $, $ && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, Aa(_, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: ee,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn($) {
      m = $, _.missingWarn = m;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn($) {
      h = $, _.fallbackWarn = h;
    },
    get fallbackRoot() {
      return I;
    },
    set fallbackRoot($) {
      I = $;
    },
    get fallbackFormat() {
      return O;
    },
    set fallbackFormat($) {
      O = $, _.fallbackFormat = O;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage($) {
      E = $, _.warnHtmlMessage = $;
    },
    get escapeParameter() {
      return x;
    },
    set escapeParameter($) {
      x = $, _.escapeParameter = $;
    },
    t: rt,
    getLocaleMessage: Gt,
    setLocaleMessage: qt,
    mergeLocaleMessage: En,
    getPostTranslationHandler: te,
    setPostTranslationHandler: U,
    getMissingHandler: j,
    setMissingHandler: W,
    [Sg]: st
  };
  return be.datetimeFormats = ce, be.numberFormats = q, be.rt = It, be.te = qe, be.tm = fn, be.d = Ge, be.n = $e, be.getDateTimeFormat = f, be.setDateTimeFormat = v, be.mergeDateTimeFormat = R, be.getNumberFormat = G, be.setNumberFormat = xe, be.mergeNumberFormat = Ce, be[eu] = n, be[Os] = Ae, be[Ss] = Qe, be[Cs] = Ie, process.env.NODE_ENV !== "production" && (be[Ts] = ($) => {
    _.__v_emitter = $;
  }, be[Ns] = () => {
    _.__v_emitter = void 0;
  }), be;
}
function si(e, t) {
}
const Qs = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Pg({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, r) => [
    ...a,
    // prettier-ignore
    ...r.type === Ue ? r.children : [r]
  ], []) : t.reduce((n, a) => {
    const r = e[a];
    return r && (n[a] = r()), n;
  }, ze());
}
function au() {
  return Ue;
}
gt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => pt(e) || !isNaN(e)
  }
}, Qs);
function Dg(e) {
  return nt(e) && !se(e[0]);
}
function ru(e, t, n, a) {
  const { slots: r, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let i = ze();
    e.locale && (o.locale = e.locale), se(e.format) ? o.key = e.format : je(e.format) && (se(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((m, h) => n.includes(h) ? gt(ze(), m, { [h]: e.format[h] }) : m, ze()));
    const u = a(e.value, o, i);
    let c = [o.key];
    nt(u) ? c = u.map((m, h) => {
      const I = r[m.type], O = I ? I({ [m.type]: m.value, index: h, parts: u }) : [m.value];
      return Dg(O) && (O[0].key = `${m.type}-${h}`), O;
    }) : se(u) && (c = [u]);
    const d = gt(ze(), s), p = se(e.tag) || je(e.tag) ? e.tag : au();
    return bn(p, d, c);
  };
}
gt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Qs);
const $g = /* @__PURE__ */ xn("global-vue-i18n");
function nr(e = {}) {
  const t = Rt();
  if (t == null)
    throw Ka(_t.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ka(_t.NOT_INSTALLED);
  const n = Lg(t), a = Vg(n), r = nu(t), s = Rg(e, r);
  if (s === "global")
    return Tg(a, e, r), a;
  if (s === "parent") {
    let u = Mg(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && dn(Pr(an.NOT_FOUND_PARENT_SCOPE)), u = a), u;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const u = gt({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), a && (u.__root = a), i = Ig(u), o.__composerExtend && (i[As] = o.__composerExtend(i)), Bg(o, t, i), o.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && dn(Pr(an.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function Lg(e) {
  const t = ua(e.isCE ? $g : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ka(e.isCE ? _t.NOT_INSTALLED_WITH_PROVIDE : _t.UNEXPECTED_ERROR);
  return t;
}
function Rg(e, t) {
  return zr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Vg(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Mg(e, t, n = !1) {
  let a = null;
  const r = t.root;
  let s = Fg(t, n);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      a = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(s);
      i != null && (a = i.__composer, n && a && !a[eu] && (a = null));
    }
    if (a != null || r === s)
      break;
    s = s.parent;
  }
  return a;
}
function Fg(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Bg(e, t, n) {
  let a = null;
  Dn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, a = Hv();
      const r = n;
      r[Ts] && r[Ts](a), a.on("*", si);
    }
  }, t), Mr(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (a && a.off("*", si), r[Ns] && r[Ns](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const s = r[As];
    s && (s(), delete r[As]);
  }, t);
}
gt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Qs);
Eg();
ng($h);
ag(Xh);
rg(jl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Bn();
  e.__INTLIFY__ = !0, Lh(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const jg = /* @__PURE__ */ V({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = wt(e, t);
    return (s, o) => (g(), L(l(Li), ne({ "data-slot": "dialog" }, l(r)), {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ug = /* @__PURE__ */ V({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Ri), ne({ "data-slot": "dialog-description" }, l(a), {
      class: l(re)("text-muted-foreground text-sm", t.class)
    }), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zg = /* @__PURE__ */ V({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), K("div", {
      "data-slot": "dialog-header",
      class: Fe(l(re)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Wg = /* @__PURE__ */ V({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(Vi), null, {
      default: b(() => [
        N(l(Mi), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: b(() => [
            N(l(Fi), ne({
              class: l(re)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, l(s), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: b(() => [
                H(o.$slots, "default"),
                N(l(Sc), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: b(() => [
                    N(l(Br), { class: "w-4 h-4" }),
                    i[1] || (i[1] = me("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 3
            }, 16, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Zg = /* @__PURE__ */ V({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Bi), ne({ "data-slot": "dialog-title" }, l(a), {
      class: l(re)("text-lg leading-none font-semibold", t.class)
    }), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hg = ["innerHTML"], eo = /* @__PURE__ */ V({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ dt({
    description: {},
    title: { default: "Are you absolutely sure?" },
    okButtonText: {},
    onOk: { type: Function, default: () => !0 }
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = vt(e, "open");
    return (n, a) => (g(), L(l(jg), {
      open: t.value,
      "onUpdate:open": a[0] || (a[0] = (r) => t.value = r)
    }, {
      default: b(() => [
        N(l(Wg), { class: "!max-w-max min-w-[435px]" }, {
          default: b(() => [
            N(l(zg), null, {
              default: b(() => [
                N(l(Zg), null, {
                  default: b(() => [
                    me("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, Hg)
                  ]),
                  _: 1
                }),
                e.description ? (g(), L(l(Ug), { key: 0 }, {
                  default: b(() => [
                    Te(de(e.description), 1)
                  ]),
                  _: 1
                })) : ke("", !0)
              ]),
              _: 1
            }),
            H(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Gg = { class: "mt-1" }, to = /* @__PURE__ */ V({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ dt({
    dialogConfig: {},
    componentConfig: {},
    type: {},
    initialValue: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = vt(e, "open"), n = pe(e.initialValue), { t: a } = nr(), r = pe(!1);
    async function s() {
      r.value = !0, (await e.dialogConfig.onOk?.(n.value) ?? !0) && (t.value = !1), r.value = !1;
    }
    return (o, i) => (g(), L(eo, ne(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[1] || (i[1] = (u) => t.value = u)
    }), {
      default: b(() => [
        (g(), L(Nt(e.componentConfig.component), ne(e.componentConfig.componentProps, {
          modelValue: n.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => n.value = u)
        }), null, 16, ["modelValue"])),
        me("div", Gg, [
          N(ht, {
            type: "Submit",
            disabled: r.value,
            size: "sm",
            onClick: s
          }, {
            default: b(() => [
              Te(de(e.dialogConfig.okButtonText || l(a)("common.save")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), qg = /* @__PURE__ */ V({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = wt(e, t);
    return (s, o) => (g(), L(l(Cc), ne({ "data-slot": "alert-dialog" }, l(r)), {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yg = /* @__PURE__ */ V({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Tc), ne(l(n), {
      class: l(re)(l(Qt)(), t.class)
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kg = /* @__PURE__ */ V({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Nc), ne(l(n), {
      class: l(re)(
        l(Qt)({ variant: "outline" }),
        "mt-2 sm:mt-0",
        t.class
      )
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xg = /* @__PURE__ */ V({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(Ac), null, {
      default: b(() => [
        N(l(Ic), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        N(l(Pc), ne({ "data-slot": "alert-dialog-content" }, l(s), {
          class: l(re)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: b(() => [
            H(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Jg = /* @__PURE__ */ V({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Dc), ne({ "data-slot": "alert-dialog-description" }, l(n), {
      class: l(re)("text-muted-foreground text-sm", t.class)
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qg = /* @__PURE__ */ V({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), K("div", {
      "data-slot": "alert-dialog-footer",
      class: Fe(
        l(re)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), ey = /* @__PURE__ */ V({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), K("div", {
      "data-slot": "alert-dialog-header",
      class: Fe(l(re)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), ty = /* @__PURE__ */ V({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l($c), ne({ "data-slot": "alert-dialog-title" }, l(n), {
      class: l(re)("text-lg font-semibold", t.class)
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ny = /* @__PURE__ */ V({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ dt({
    description: {},
    title: {},
    okButtonText: {},
    onOk: { type: Function }
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = e, n = vt(e, "open"), a = pe(!1);
    async function r() {
      a.value = !0, (t.onOk ? await t.onOk() : !0) && close(), a.value = !1;
    }
    const { t: s } = nr();
    return (o, i) => (g(), L(l(qg), {
      open: n.value,
      "onUpdate:open": i[2] || (i[2] = (u) => n.value = u)
    }, {
      default: b(() => [
        N(l(Xg), null, {
          default: b(() => [
            N(l(ey), null, {
              default: b(() => [
                N(l(ty), null, {
                  default: b(() => [
                    Te(de(e.title || l(s)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                N(l(Jg), null, {
                  default: b(() => [
                    Te(de(e.description || l(s)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            N(l(Qg), null, {
              default: b(() => [
                N(l(Kg), {
                  disabled: a.value,
                  onClick: i[0] || (i[0] = (u) => n.value = !1)
                }, {
                  default: b(() => [
                    Te(de(l(s)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                N(l(Yg), {
                  loading: a.value,
                  onClick: i[1] || (i[1] = (u) => r())
                }, {
                  default: b(() => [
                    Te(de(l(s)("common.continue")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["open"]));
  }
});
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
function bt(e) {
  return typeof e == "function";
}
function oa(e) {
  return e == null;
}
const Pn = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function no(e) {
  return Number(e) >= 0;
}
function ay(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function ry(e) {
  return typeof e == "object" && e !== null;
}
function sy(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function oi(e) {
  if (!ry(e) || sy(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ja(e, t) {
  return Object.keys(t).forEach((n) => {
    if (oi(t[n]) && oi(e[n])) {
      e[n] || (e[n] = {}), Ja(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function Pa(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (no(t[a])) {
      n += `[${t[a]}]`;
      continue;
    }
    n += `.${t[a]}`;
  }
  return n;
}
const oy = {};
function iy(e) {
  return oy[e];
}
function ii(e, t, n) {
  typeof n.value == "object" && (n.value = Le(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value;
}
function Le(e) {
  if (typeof e != "object") return e;
  var t = 0, n, a, r, s = Object.prototype.toString.call(e);
  if (s === "[object Object]" ? r = Object.create(e.__proto__ || null) : s === "[object Array]" ? r = Array(e.length) : s === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(o) {
    r.add(Le(o));
  })) : s === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(o, i) {
    r.set(Le(i), Le(o));
  })) : s === "[object Date]" ? r = /* @__PURE__ */ new Date(+e) : s === "[object RegExp]" ? r = new RegExp(e.source, e.flags) : s === "[object DataView]" ? r = new e.constructor(Le(e.buffer)) : s === "[object ArrayBuffer]" ? r = e.slice(0) : s.slice(-6) === "Array]" && (r = new e.constructor(e)), r) {
    for (a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      ii(r, a[t], Object.getOwnPropertyDescriptor(e, a[t]));
    for (t = 0, a = Object.getOwnPropertyNames(e); t < a.length; t++)
      Object.hasOwnProperty.call(r, n = a[t]) && r[n] === e[n] || ii(r, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return r || e;
}
const ea = Symbol("vee-validate-form"), ly = Symbol("vee-validate-form-context"), ar = Symbol("vee-validate-field-instance"), Dr = Symbol("Default empty value"), su = typeof window < "u";
function Is(e) {
  return bt(e) && !!e.__locatorRef;
}
function Kt(e) {
  return !!e && bt(e.parse) && e.__type === "VVTypedSchema";
}
function $r(e) {
  return !!e && bt(e.validate);
}
function rr(e) {
  return e === "checkbox" || e === "radio";
}
function uy(e) {
  return Pn(e) || Array.isArray(e);
}
function cy(e) {
  return Array.isArray(e) ? e.length === 0 : Pn(e) && Object.keys(e).length === 0;
}
function sr(e) {
  return /^\[.+\]$/i.test(e);
}
function dy(e) {
  return ou(e) && e.multiple;
}
function ou(e) {
  return e.tagName === "SELECT";
}
function fy(e, t) {
  const n = ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple);
  return e === "select" && "multiple" in t && n;
}
function my(e, t) {
  return !fy(e, t) && t.type !== "file" && !rr(t.type);
}
function iu(e) {
  return ao(e) && e.target && "submit" in e.target;
}
function ao(e) {
  return e ? !!(typeof Event < "u" && bt(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function li(e, t) {
  return t in e && e[t] !== Dr;
}
function yt(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, a, r;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!yt(e[a], t[a]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a of e.entries())
        if (!t.has(a[0]))
          return !1;
      for (a of e.entries())
        if (!yt(a[1], t.get(a[0])))
          return !1;
      return !0;
    }
    if (ci(e) && ci(t))
      return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a of e.entries())
        if (!t.has(a[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (e[a] !== t[a])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (e = ui(e), t = ui(t), r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, r[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      var s = r[a];
      if (!yt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ui(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function ci(e) {
  return su ? e instanceof File : !1;
}
function Hr(e) {
  return sr(e) ? e.replace(/\[|\]/gi, "") : e;
}
function Xe(e, t, n) {
  return e ? sr(t) ? e[Hr(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r, s) => uy(r) && s in r ? r[s] : n, e) : n;
}
function mt(e, t, n) {
  if (sr(t)) {
    e[Hr(t)] = n;
    return;
  }
  const a = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let r = e;
  for (let s = 0; s < a.length; s++) {
    if (s === a.length - 1) {
      r[a[s]] = n;
      return;
    }
    (!(a[s] in r) || oa(r[a[s]])) && (r[a[s]] = no(a[s + 1]) ? [] : {}), r = r[a[s]];
  }
}
function ss(e, t) {
  if (Array.isArray(e) && no(t)) {
    e.splice(Number(t), 1);
    return;
  }
  Pn(e) && delete e[t];
}
function di(e, t) {
  if (sr(t)) {
    delete e[Hr(t)];
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = e;
  for (let s = 0; s < n.length; s++) {
    if (s === n.length - 1) {
      ss(a, n[s]);
      break;
    }
    if (!(n[s] in a) || oa(a[n[s]]))
      break;
    a = a[n[s]];
  }
  const r = n.map((s, o) => Xe(e, n.slice(0, o).join(".")));
  for (let s = r.length - 1; s >= 0; s--)
    if (cy(r[s])) {
      if (s === 0) {
        ss(e, n[0]);
        continue;
      }
      ss(r[s - 1], n[s - 1]);
    }
}
function Dt(e) {
  return Object.keys(e);
}
function or(e, t = void 0) {
  const n = Rt();
  return n?.provides[e] || ua(e, t);
}
function wr(e) {
  Pi(`[vee-validate]: ${e}`);
}
function fi(e, t, n) {
  if (Array.isArray(e)) {
    const a = [...e], r = a.findIndex((s) => yt(s, t));
    return r >= 0 ? a.splice(r, 1) : a.push(t), a;
  }
  return yt(e, t) ? n : t;
}
function py(e, t) {
  let n, a;
  return function(...r) {
    const s = this;
    return n || (n = !0, setTimeout(() => n = !1, t), a = e.apply(s, r)), a;
  };
}
function mi(e, t = 0) {
  let n = null, a = [];
  return function(...r) {
    return n && clearTimeout(n), n = setTimeout(() => {
      const s = e(...r);
      a.forEach((o) => o(s)), a = [];
    }, t), new Promise((s) => a.push(s));
  };
}
function vy(e, t) {
  return Pn(t) && t.number ? ay(e) : e;
}
function Ps(e, t) {
  let n;
  return async function(...r) {
    const s = e(...r);
    n = s;
    const o = await s;
    return s !== n ? o : (n = void 0, t(o, r));
  };
}
function hy({ get: e, set: t }) {
  const n = pe(Le(e()));
  return Ve(e, (a) => {
    yt(a, n.value) || (n.value = Le(a));
  }, {
    deep: !0
  }), Ve(n, (a) => {
    yt(a, e()) || t(Le(a));
  }, {
    deep: !0
  }), n;
}
function Ds(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function pr(e, t) {
  const n = {};
  for (const a in e)
    t.includes(a) || (n[a] = e[a]);
  return n;
}
function gy(e) {
  let t = null, n = [];
  return function(...a) {
    const r = Ot(() => {
      if (t !== r)
        return;
      const s = e(...a);
      n.forEach((o) => o(s)), n = [], t = null;
    });
    return t = r, new Promise((s) => n.push(s));
  };
}
function Gr(e, t, n) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(n()) : {
    default: () => {
      var a, r;
      return (r = (a = t.slots).default) === null || r === void 0 ? void 0 : r.call(a, n());
    }
  } : t.slots.default;
}
function os(e) {
  if (lu(e))
    return e._value;
}
function lu(e) {
  return "_value" in e;
}
function yy(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function Lr(e) {
  if (!ao(e))
    return e;
  const t = e.target;
  if (rr(t.type) && lu(t))
    return os(t);
  if (t.type === "file" && t.files) {
    const n = Array.from(t.files);
    return t.multiple ? n : n[0];
  }
  if (dy(t))
    return Array.from(t.options).filter((n) => n.selected && !n.disabled).map(os);
  if (ou(t)) {
    const n = Array.from(t.options).find((a) => a.selected);
    return n ? os(n) : t.value;
  }
  return yy(t);
}
function uu(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? Pn(e) && e._$$isNormalized ? e : Pn(e) ? Object.keys(e).reduce((n, a) => {
    const r = _y(e[a]);
    return e[a] !== !1 && (n[a] = pi(r)), n;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((n, a) => {
    const r = by(a);
    return r.name && (n[r.name] = pi(r.params)), n;
  }, t) : t;
}
function _y(e) {
  return e === !0 ? [] : Array.isArray(e) || Pn(e) ? e : [e];
}
function pi(e) {
  const t = (n) => typeof n == "string" && n[0] === "@" ? wy(n.slice(1)) : n;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((n, a) => (n[a] = t(e[a]), n), {});
}
const by = (e) => {
  let t = [];
  const n = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: n, params: t };
};
function wy(e) {
  const t = (n) => {
    var a;
    return (a = Xe(n, e)) !== null && a !== void 0 ? a : n[e];
  };
  return t.__locatorRef = e, t;
}
function ky(e) {
  return Array.isArray(e) ? e.filter(Is) : Dt(e).filter((t) => Is(e[t])).map((t) => e[t]);
}
const xy = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Ey = Object.assign({}, xy);
const jn = () => Ey;
async function cu(e, t, n = {}) {
  const a = n?.bails, r = {
    name: n?.name || "{field}",
    rules: t,
    label: n?.label,
    bails: a ?? !0,
    formData: n?.values || {}
  }, s = await Oy(r, e);
  return Object.assign(Object.assign({}, s), { valid: !s.errors.length });
}
async function Oy(e, t) {
  const n = e.rules;
  if (Kt(n) || $r(n))
    return Cy(t, Object.assign(Object.assign({}, e), { rules: n }));
  if (bt(n) || Array.isArray(n)) {
    const i = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, u = Array.isArray(n) ? n : [n], c = u.length, d = [];
    for (let p = 0; p < c; p++) {
      const m = u[p], h = await m(t, i);
      if (!(typeof h != "string" && !Array.isArray(h) && h)) {
        if (Array.isArray(h))
          d.push(...h);
        else {
          const O = typeof h == "string" ? h : fu(i);
          d.push(O);
        }
        if (e.bails)
          return {
            errors: d
          };
      }
    }
    return {
      errors: d
    };
  }
  const a = Object.assign(Object.assign({}, e), { rules: uu(n) }), r = [], s = Object.keys(a.rules), o = s.length;
  for (let i = 0; i < o; i++) {
    const u = s[i], c = await Ty(a, t, {
      name: u,
      params: a.rules[u]
    });
    if (c.error && (r.push(c.error), e.bails))
      return {
        errors: r
      };
  }
  return {
    errors: r
  };
}
function Sy(e) {
  return !!e && e.name === "ValidationError";
}
function du(e) {
  return {
    __type: "VVTypedSchema",
    async parse(n, a) {
      var r;
      try {
        return {
          output: await e.validate(n, { abortEarly: !1, context: a?.formData || {} }),
          errors: []
        };
      } catch (s) {
        if (!Sy(s))
          throw s;
        if (!(!((r = s.inner) === null || r === void 0) && r.length) && s.errors.length)
          return { errors: [{ path: s.path, errors: s.errors }] };
        const o = s.inner.reduce((i, u) => {
          const c = u.path || "";
          return i[c] || (i[c] = { errors: [], path: c }), i[c].errors.push(...u.errors), i;
        }, {});
        return { errors: Object.values(o) };
      }
    }
  };
}
async function Cy(e, t) {
  const a = await (Kt(t.rules) ? t.rules : du(t.rules)).parse(e, { formData: t.formData }), r = [];
  for (const s of a.errors)
    s.errors.length && r.push(...s.errors);
  return {
    value: a.value,
    errors: r
  };
}
async function Ty(e, t, n) {
  const a = iy(n.name);
  if (!a)
    throw new Error(`No such validator '${n.name}' exists.`);
  const r = Ny(n.params, e.formData), s = {
    field: e.label || e.name,
    name: e.name,
    label: e.label,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, n), { params: r })
  }, o = await a(t, r, s);
  return typeof o == "string" ? {
    error: o
  } : {
    error: o ? void 0 : fu(s)
  };
}
function fu(e) {
  const t = jn().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Ny(e, t) {
  const n = (a) => Is(a) ? a(t) : a;
  return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce((a, r) => (a[r] = n(e[r]), a), {});
}
async function Ay(e, t) {
  const a = await (Kt(e) ? e : du(e)).parse(Le(t), { formData: Le(t) }), r = {}, s = {};
  for (const o of a.errors) {
    const i = o.errors, u = (o.path || "").replace(/\["(\d+)"\]/g, (c, d) => `[${d}]`);
    r[u] = { valid: !i.length, errors: i }, i.length && (s[u] = i[0]);
  }
  return {
    valid: !a.errors.length,
    results: r,
    errors: s,
    values: a.value,
    source: "schema"
  };
}
async function Iy(e, t, n) {
  const r = Dt(e).map(async (c) => {
    var d, p, m;
    const h = (d = n?.names) === null || d === void 0 ? void 0 : d[c], I = await cu(Xe(t, c), e[c], {
      name: h?.name || c,
      label: h?.label,
      values: t,
      bails: (m = (p = n?.bailsMap) === null || p === void 0 ? void 0 : p[c]) !== null && m !== void 0 ? m : !0
    });
    return Object.assign(Object.assign({}, I), { path: c });
  });
  let s = !0;
  const o = await Promise.all(r), i = {}, u = {};
  for (const c of o)
    i[c.path] = {
      valid: c.valid,
      errors: c.errors
    }, c.valid || (s = !1, u[c.path] = c.errors[0]);
  return {
    valid: s,
    results: i,
    errors: u,
    source: "schema"
  };
}
let vi = 0;
function Py(e, t) {
  const { value: n, initialValue: a, setInitialValue: r } = Dy(e, t.modelValue, t.form);
  if (!t.form) {
    let m = function(h) {
      var I;
      "value" in h && (n.value = h.value), "errors" in h && c(h.errors), "touched" in h && (p.touched = (I = h.touched) !== null && I !== void 0 ? I : p.touched), "initialValue" in h && r(h.initialValue);
    };
    const { errors: u, setErrors: c } = Ry(), d = vi >= Number.MAX_SAFE_INTEGER ? 0 : ++vi, p = Ly(n, a, u, t.schema);
    return {
      id: d,
      path: e,
      value: n,
      initialValue: a,
      meta: p,
      flags: { pendingUnmount: { [d]: !1 }, pendingReset: !1 },
      errors: u,
      setState: m
    };
  }
  const s = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), o = Z(() => s.errors);
  function i(u) {
    var c, d, p;
    "value" in u && (n.value = u.value), "errors" in u && ((c = t.form) === null || c === void 0 || c.setFieldError(l(e), u.errors)), "touched" in u && ((d = t.form) === null || d === void 0 || d.setFieldTouched(l(e), (p = u.touched) !== null && p !== void 0 ? p : !1)), "initialValue" in u && r(u.initialValue);
  }
  return {
    id: Array.isArray(s.id) ? s.id[s.id.length - 1] : s.id,
    path: e,
    value: n,
    errors: o,
    meta: s,
    initialValue: a,
    flags: s.__flags,
    setState: i
  };
}
function Dy(e, t, n) {
  const a = pe(l(t));
  function r() {
    return n ? Xe(n.initialValues.value, l(e), l(a)) : l(a);
  }
  function s(c) {
    if (!n) {
      a.value = c;
      return;
    }
    n.setFieldInitialValue(l(e), c, !0);
  }
  const o = Z(r);
  if (!n)
    return {
      value: pe(r()),
      initialValue: o,
      setInitialValue: s
    };
  const i = $y(t, n, o, e);
  return n.stageInitialValue(l(e), i, !0), {
    value: Z({
      get() {
        return Xe(n.values, l(e));
      },
      set(c) {
        n.setFieldValue(l(e), c, !1);
      }
    }),
    initialValue: o,
    setInitialValue: s
  };
}
function $y(e, t, n, a) {
  return rn(e) ? l(e) : e !== void 0 ? e : Xe(t.values, l(a), l(n));
}
function Ly(e, t, n, a) {
  const r = Z(() => {
    var o, i, u;
    return (u = (i = (o = M(a)) === null || o === void 0 ? void 0 : o.describe) === null || i === void 0 ? void 0 : i.call(o).required) !== null && u !== void 0 ? u : !1;
  }), s = _n({
    touched: !1,
    pending: !1,
    valid: !0,
    required: r,
    validated: !!l(n).length,
    initialValue: Z(() => l(t)),
    dirty: Z(() => !yt(l(e), l(t)))
  });
  return Ve(n, (o) => {
    s.valid = !o.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), s;
}
function Ry() {
  const e = pe([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = Ds(t);
    }
  };
}
const $a = {}, La = {}, Ra = "vee-validate-inspector", $t = {
  error: 12405579,
  success: 448379,
  unknown: 5522283,
  white: 16777215,
  black: 0,
  blue: 218007,
  purple: 12157168,
  orange: 16099682,
  gray: 12304330
};
let it = null, gn;
async function mu(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!su)
      return;
    (await import("./index-Cj4LybIA.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (n) => {
      gn = n, n.addInspector({
        id: Ra,
        icon: "rule",
        label: "vee-validate",
        noSelectionText: "Select a vee-validate node to inspect",
        actions: [
          {
            icon: "done_outline",
            tooltip: "Validate selected item",
            action: async () => {
              if (!it) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (it.type === "field") {
                await it.field.validate();
                return;
              }
              if (it.type === "form") {
                await it.form.validate();
                return;
              }
              it.type === "pathState" && await it.form.validateField(it.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!it) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (it.type === "field") {
                it.field.resetField();
                return;
              }
              it.type === "form" && it.form.resetForm(), it.type === "pathState" && it.form.resetField(it.state.path);
            }
          }
        ]
      }), n.on.getInspectorTree((a) => {
        if (a.inspectorId !== Ra)
          return;
        const r = Object.values($a), s = Object.values(La);
        a.rootNodes = [
          ...r.map(Fy),
          ...s.map((o) => jy(o))
        ];
      }), n.on.getInspectorState((a) => {
        if (a.inspectorId !== Ra)
          return;
        const { form: r, field: s, state: o, type: i } = Uy(a.nodeId);
        if (n.unhighlightElement(), r && i === "form") {
          a.state = zy(r), it = { type: "form", form: r }, n.highlightElement(r._vm);
          return;
        }
        if (o && i === "pathState" && r) {
          a.state = hi(o), it = { type: "pathState", state: o, form: r };
          return;
        }
        if (s && i === "field") {
          a.state = hi({
            errors: s.errors.value,
            dirty: s.meta.dirty,
            valid: s.meta.valid,
            touched: s.meta.touched,
            value: s.value.value,
            initialValue: s.meta.initialValue
          }), it = { field: s, type: "field" }, n.highlightElement(s._vm);
          return;
        }
        it = null, n.unhighlightElement();
      });
    });
  }
}
const ya = py(() => {
  setTimeout(async () => {
    await Ot(), gn?.sendInspectorState(Ra), gn?.sendInspectorTree(Ra);
  }, 100);
}, 100);
function Vy(e) {
  const t = Rt();
  if (!gn) {
    const n = t?.appContext.app;
    if (!n)
      return;
    mu(n);
  }
  $a[e.formId] = Object.assign({}, e), $a[e.formId]._vm = t, Mr(() => {
    delete $a[e.formId], ya();
  }), ya();
}
function My(e) {
  const t = Rt();
  if (!gn) {
    const n = t?.appContext.app;
    if (!n)
      return;
    mu(n);
  }
  La[e.id] = Object.assign({}, e), La[e.id]._vm = t, Mr(() => {
    delete La[e.id], ya();
  }), ya();
}
function Fy(e) {
  const { textColor: t, bgColor: n } = vu(e.meta.value.valid), a = {};
  Object.values(e.getAllPathStates()).forEach((o) => {
    mt(a, M(o.path), By(o, e));
  });
  function r(o, i = []) {
    const u = [...i].pop();
    return "id" in o ? Object.assign(Object.assign({}, o), { label: u || o.label }) : Pn(o) ? {
      id: `${i.join(".")}`,
      label: u || "",
      children: Object.keys(o).map((c) => r(o[c], [...i, c]))
    } : Array.isArray(o) ? {
      id: `${i.join(".")}`,
      label: `${u}[]`,
      children: o.map((c, d) => r(c, [...i, String(d)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: s } = r(a);
  return {
    id: ro(e),
    label: e.name,
    children: s,
    tags: [
      {
        label: "Form",
        textColor: t,
        backgroundColor: n
      },
      {
        label: `${e.getAllPathStates().length} fields`,
        textColor: $t.white,
        backgroundColor: $t.unknown
      }
    ]
  };
}
function By(e, t) {
  return {
    id: ro(t, e),
    label: M(e.path),
    tags: pu(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function jy(e, t) {
  return {
    id: ro(t, e),
    label: l(e.name),
    tags: pu(!1, 1, e.type, e.meta.valid, t)
  };
}
function pu(e, t, n, a, r) {
  const { textColor: s, bgColor: o } = vu(a);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: s,
      backgroundColor: o
    },
    r ? void 0 : {
      label: "Standalone",
      textColor: $t.black,
      backgroundColor: $t.gray
    },
    n === "checkbox" ? {
      label: "Checkbox",
      textColor: $t.white,
      backgroundColor: $t.blue
    } : void 0,
    n === "radio" ? {
      label: "Radio",
      textColor: $t.white,
      backgroundColor: $t.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: $t.black,
      backgroundColor: $t.orange
    } : void 0
  ].filter(Boolean);
}
function ro(e, t) {
  const n = t ? "path" in t ? "pathState" : "field" : "form", a = t ? "path" in t ? t?.path : M(t?.name) : "", r = { f: e?.formId, ff: t?.id || a, type: n };
  return btoa(encodeURIComponent(JSON.stringify(r)));
}
function Uy(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), n = $a[t.f];
    if (!n && t.ff) {
      const r = La[t.ff];
      return r ? {
        type: t.type,
        field: r
      } : {};
    }
    if (!n)
      return {};
    const a = n.getPathState(t.ff);
    return {
      type: t.type,
      form: n,
      state: a
    };
  } catch {
  }
  return {};
}
function hi(e) {
  return {
    "Field state": [
      { key: "errors", value: e.errors },
      {
        key: "initialValue",
        value: e.initialValue
      },
      {
        key: "currentValue",
        value: e.value
      },
      {
        key: "touched",
        value: e.touched
      },
      {
        key: "dirty",
        value: e.dirty
      },
      {
        key: "valid",
        value: e.valid
      }
    ]
  };
}
function zy(e) {
  const { errorBag: t, meta: n, values: a, isSubmitting: r, isValidating: s, submitCount: o } = e;
  return {
    "Form state": [
      {
        key: "submitCount",
        value: o.value
      },
      {
        key: "isSubmitting",
        value: r.value
      },
      {
        key: "isValidating",
        value: s.value
      },
      {
        key: "touched",
        value: n.value.touched
      },
      {
        key: "dirty",
        value: n.value.dirty
      },
      {
        key: "valid",
        value: n.value.valid
      },
      {
        key: "initialValues",
        value: n.value.initialValues
      },
      {
        key: "currentValues",
        value: a
      },
      {
        key: "errors",
        value: Dt(t.value).reduce((i, u) => {
          var c;
          const d = (c = t.value[u]) === null || c === void 0 ? void 0 : c[0];
          return d && (i[u] = d), i;
        }, {})
      }
    ]
  };
}
function vu(e) {
  return {
    bgColor: e ? $t.success : $t.error,
    textColor: e ? $t.black : $t.white
  };
}
function so(e, t, n) {
  return rr(n?.type) ? Zy(e, t, n) : hu(e, t, n);
}
function hu(e, t, n) {
  const { initialValue: a, validateOnMount: r, bails: s, type: o, checkedValue: i, label: u, validateOnValueUpdate: c, uncheckedValue: d, controlled: p, keepValueOnUnmount: m, syncVModel: h, form: I } = Wy(n), O = p ? or(ea) : void 0, A = I || O, y = Z(() => Pa(M(e))), w = Z(() => {
    if (M(A?.schema))
      return;
    const ie = l(t);
    return $r(ie) || Kt(ie) || bt(ie) || Array.isArray(ie) ? ie : uu(ie);
  }), E = !bt(w.value) && Kt(M(t)), { id: x, value: k, initialValue: S, meta: _, setState: P, errors: D, flags: Y } = Py(y, {
    modelValue: a,
    form: A,
    bails: s,
    label: u,
    type: o,
    validate: w.value ? U : void 0,
    schema: E ? t : void 0
  }), Q = Z(() => D.value[0]);
  h && Hy({
    value: k,
    prop: h,
    handleChange: j,
    shouldValidate: () => c && !Y.pendingReset
  });
  const ee = (oe, ie = !1) => {
    _.touched = !0, ie && q();
  };
  async function ce(oe) {
    var ie, Ae;
    if (A?.validateSchema) {
      const { results: Ie } = await A.validateSchema(oe);
      return (ie = Ie[M(y)]) !== null && ie !== void 0 ? ie : { valid: !0, errors: [] };
    }
    return w.value ? cu(k.value, w.value, {
      name: M(y),
      label: M(u),
      values: (Ae = A?.values) !== null && Ae !== void 0 ? Ae : {},
      bails: s
    }) : { valid: !0, errors: [] };
  }
  const q = Ps(async () => (_.pending = !0, _.validated = !0, ce("validated-only")), (oe) => (Y.pendingUnmount[$e.id] || (P({ errors: oe.errors }), _.pending = !1, _.valid = oe.valid), oe)), te = Ps(async () => ce("silent"), (oe) => (_.valid = oe.valid, oe));
  function U(oe) {
    return oe?.mode === "silent" ? te() : q();
  }
  function j(oe, ie = !0) {
    const Ae = Lr(oe);
    rt(Ae, ie);
  }
  Dn(() => {
    if (r)
      return q();
    (!A || !A.validateSchema) && te();
  });
  function W(oe) {
    _.touched = oe;
  }
  function Oe(oe) {
    var ie;
    const Ae = oe && "value" in oe ? oe.value : S.value;
    P({
      value: Le(Ae),
      initialValue: Le(Ae),
      touched: (ie = oe?.touched) !== null && ie !== void 0 ? ie : !1,
      errors: oe?.errors || []
    }), _.pending = !1, _.validated = !1, te();
  }
  const Re = Rt();
  function rt(oe, ie = !0) {
    k.value = Re && h ? vy(oe, Re.props.modelModifiers) : oe, (ie ? q : te)();
  }
  function It(oe) {
    P({ errors: Array.isArray(oe) ? oe : [oe] });
  }
  const Ge = Z({
    get() {
      return k.value;
    },
    set(oe) {
      rt(oe, c);
    }
  }), $e = {
    id: x,
    name: y,
    label: u,
    value: Ge,
    meta: _,
    errors: D,
    errorMessage: Q,
    type: o,
    checkedValue: i,
    uncheckedValue: d,
    bails: s,
    keepValueOnUnmount: m,
    resetField: Oe,
    handleReset: () => Oe(),
    validate: U,
    handleChange: j,
    handleBlur: ee,
    setState: P,
    setTouched: W,
    setErrors: It,
    setValue: rt
  };
  if (ca(ar, $e), rn(t) && typeof l(t) != "function" && Ve(t, (oe, ie) => {
    yt(oe, ie) || (_.validated ? q() : te());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && ($e._vm = Rt(), Ve(() => Object.assign(Object.assign({ errors: D.value }, _), { value: k.value }), ya, {
    deep: !0
  }), A || My($e)), !A)
    return $e;
  const Tt = Z(() => {
    const oe = w.value;
    return !oe || bt(oe) || $r(oe) || Kt(oe) || Array.isArray(oe) ? {} : Object.keys(oe).reduce((ie, Ae) => {
      const Ie = ky(oe[Ae]).map((Qe) => Qe.__locatorRef).reduce((Qe, st) => {
        const qe = Xe(A.values, st) || A.values[st];
        return qe !== void 0 && (Qe[st] = qe), Qe;
      }, {});
      return Object.assign(ie, Ie), ie;
    }, {});
  });
  return Ve(Tt, (oe, ie) => {
    if (!Object.keys(oe).length)
      return;
    !yt(oe, ie) && (_.validated ? q() : te());
  }), Vs(() => {
    var oe;
    const ie = (oe = M($e.keepValueOnUnmount)) !== null && oe !== void 0 ? oe : M(A.keepValuesOnUnmount), Ae = M(y);
    if (ie || !A || Y.pendingUnmount[$e.id]) {
      A?.removePathState(Ae, x);
      return;
    }
    Y.pendingUnmount[$e.id] = !0;
    const Ie = A.getPathState(Ae);
    if (Array.isArray(Ie?.id) && Ie?.multiple ? Ie?.id.includes($e.id) : Ie?.id === $e.id) {
      if (Ie?.multiple && Array.isArray(Ie.value)) {
        const st = Ie.value.findIndex((qe) => yt(qe, M($e.checkedValue)));
        if (st > -1) {
          const qe = [...Ie.value];
          qe.splice(st, 1), A.setFieldValue(Ae, qe);
        }
        Array.isArray(Ie.id) && Ie.id.splice(Ie.id.indexOf($e.id), 1);
      } else
        A.unsetPathValue(M(y));
      A.removePathState(Ae, x);
    }
  }), $e;
}
function Wy(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), n = !!e?.syncVModel, a = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue", r = n && !("initialValue" in (e || {})) ? $s(Rt(), a) : e?.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: r });
  const s = "valueProp" in e ? e.valueProp : e.checkedValue, o = "standalone" in e ? !e.standalone : e.controlled, i = e?.modelPropName || e?.syncVModel || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: r,
    controlled: o ?? !0,
    checkedValue: s,
    syncVModel: i
  });
}
function Zy(e, t, n) {
  const a = n?.standalone ? void 0 : or(ea), r = n?.checkedValue, s = n?.uncheckedValue;
  function o(i) {
    const u = i.handleChange, c = Z(() => {
      const p = M(i.value), m = M(r);
      return Array.isArray(p) ? p.findIndex((h) => yt(h, m)) >= 0 : yt(m, p);
    });
    function d(p, m = !0) {
      var h, I;
      if (c.value === ((h = p?.target) === null || h === void 0 ? void 0 : h.checked)) {
        m && i.validate();
        return;
      }
      const O = M(e), A = a?.getPathState(O), y = Lr(p);
      let w = (I = M(r)) !== null && I !== void 0 ? I : y;
      a && A?.multiple && A.type === "checkbox" ? w = fi(Xe(a.values, O) || [], w, void 0) : n?.type === "checkbox" && (w = fi(M(i.value), w, M(s))), u(w, m);
    }
    return Object.assign(Object.assign({}, i), {
      checked: c,
      checkedValue: r,
      uncheckedValue: s,
      handleChange: d
    });
  }
  return o(hu(e, t, n));
}
function Hy({ prop: e, value: t, handleChange: n, shouldValidate: a }) {
  const r = Rt();
  if (!r || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const s = typeof e == "string" ? e : "modelValue", o = `update:${s}`;
  s in r.props && (Ve(t, (i) => {
    yt(i, $s(r, s)) || r.emit(o, i);
  }), Ve(() => $s(r, s), (i) => {
    if (i === Dr && t.value === void 0)
      return;
    const u = i === Dr ? void 0 : i;
    yt(u, t.value) || n(u, a());
  }));
}
function $s(e, t) {
  if (e)
    return e.props[t];
}
const Gy = /* @__PURE__ */ V({
  name: "Field",
  inheritAttrs: !1,
  props: {
    as: {
      type: [String, Object],
      default: void 0
    },
    name: {
      type: String,
      required: !0
    },
    rules: {
      type: [Object, String, Function],
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    validateOnBlur: {
      type: Boolean,
      default: void 0
    },
    validateOnChange: {
      type: Boolean,
      default: void 0
    },
    validateOnInput: {
      type: Boolean,
      default: void 0
    },
    validateOnModelUpdate: {
      type: Boolean,
      default: void 0
    },
    bails: {
      type: Boolean,
      default: () => jn().bails
    },
    label: {
      type: String,
      default: void 0
    },
    uncheckedValue: {
      type: null,
      default: void 0
    },
    modelValue: {
      type: null,
      default: Dr
    },
    modelModifiers: {
      type: null,
      default: () => ({})
    },
    "onUpdate:modelValue": {
      type: null,
      default: void 0
    },
    standalone: {
      type: Boolean,
      default: !1
    },
    keepValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    const n = Sn(e, "rules"), a = Sn(e, "name"), r = Sn(e, "label"), s = Sn(e, "uncheckedValue"), o = Sn(e, "keepValue"), { errors: i, value: u, errorMessage: c, validate: d, handleChange: p, handleBlur: m, setTouched: h, resetField: I, handleReset: O, meta: A, checked: y, setErrors: w, setValue: E } = so(a, n, {
      validateOnMount: e.validateOnMount,
      bails: e.bails,
      standalone: e.standalone,
      type: t.attrs.type,
      initialValue: Yy(e, t),
      // Only for checkboxes and radio buttons
      checkedValue: t.attrs.value,
      uncheckedValue: s,
      label: r,
      validateOnValueUpdate: e.validateOnModelUpdate,
      keepValueOnUnmount: o,
      syncVModel: !0
    }), x = function(Y, Q = !0) {
      p(Y, Q);
    }, k = Z(() => {
      const { validateOnInput: D, validateOnChange: Y, validateOnBlur: Q, validateOnModelUpdate: ee } = qy(e);
      function ce(j) {
        m(j, Q), bt(t.attrs.onBlur) && t.attrs.onBlur(j);
      }
      function q(j) {
        x(j, D), bt(t.attrs.onInput) && t.attrs.onInput(j);
      }
      function te(j) {
        x(j, Y), bt(t.attrs.onChange) && t.attrs.onChange(j);
      }
      const U = {
        name: e.name,
        onBlur: ce,
        onInput: q,
        onChange: te
      };
      return U["onUpdate:modelValue"] = (j) => x(j, ee), U;
    }), S = Z(() => {
      const D = Object.assign({}, k.value);
      rr(t.attrs.type) && y && (D.checked = y.value);
      const Y = gi(e, t);
      return my(Y, t.attrs) && (D.value = u.value), D;
    }), _ = Z(() => Object.assign(Object.assign({}, k.value), { modelValue: u.value }));
    function P() {
      return {
        field: S.value,
        componentField: _.value,
        value: u.value,
        meta: A,
        errors: i.value,
        errorMessage: c.value,
        validate: d,
        resetField: I,
        handleChange: x,
        handleInput: (D) => x(D, !1),
        handleReset: O,
        handleBlur: k.value.onBlur,
        setTouched: h,
        setErrors: w,
        setValue: E
      };
    }
    return t.expose({
      value: u,
      meta: A,
      errors: i,
      errorMessage: c,
      setErrors: w,
      setTouched: h,
      setValue: E,
      reset: I,
      validate: d,
      handleChange: p
    }), () => {
      const D = Nt(gi(e, t)), Y = Gr(D, t, P);
      return D ? bn(D, Object.assign(Object.assign({}, t.attrs), S.value), Y) : Y;
    };
  }
});
function gi(e, t) {
  let n = e.as || "";
  return !e.as && !t.slots.default && (n = "input"), n;
}
function qy(e) {
  var t, n, a, r;
  const { validateOnInput: s, validateOnChange: o, validateOnBlur: i, validateOnModelUpdate: u } = jn();
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : s,
    validateOnChange: (n = e.validateOnChange) !== null && n !== void 0 ? n : o,
    validateOnBlur: (a = e.validateOnBlur) !== null && a !== void 0 ? a : i,
    validateOnModelUpdate: (r = e.validateOnModelUpdate) !== null && r !== void 0 ? r : u
  };
}
function Yy(e, t) {
  return rr(t.attrs.type) ? li(e, "modelValue") ? e.modelValue : void 0 : li(e, "modelValue") ? e.modelValue : t.attrs.value;
}
const xa = Gy;
let Ky = 0;
const vr = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function gu(e) {
  const t = e?.initialValues || {}, n = Object.assign({}, M(t)), a = l(e?.validationSchema);
  return a && Kt(a) && bt(a.cast) ? Le(a.cast(n) || {}) : Le(n);
}
function yu(e) {
  var t;
  const n = Ky++, a = e?.name || "Form";
  let r = 0;
  const s = pe(!1), o = pe(!1), i = pe(0), u = [], c = _n(gu(e)), d = pe([]), p = pe({}), m = pe({}), h = gy(() => {
    m.value = d.value.reduce((C, T) => (C[Pa(M(T.path))] = T, C), {});
  });
  function I(C, T) {
    const F = j(C);
    if (!F) {
      typeof C == "string" && (p.value[Pa(C)] = Ds(T));
      return;
    }
    if (typeof C == "string") {
      const X = Pa(C);
      p.value[X] && delete p.value[X];
    }
    F.errors = Ds(T), F.valid = !F.errors.length;
  }
  function O(C) {
    Dt(C).forEach((T) => {
      I(T, C[T]);
    });
  }
  e?.initialErrors && O(e.initialErrors);
  const A = Z(() => {
    const C = d.value.reduce((T, F) => (F.errors.length && (T[M(F.path)] = F.errors), T), {});
    return Object.assign(Object.assign({}, p.value), C);
  }), y = Z(() => Dt(A.value).reduce((C, T) => {
    const F = A.value[T];
    return F?.length && (C[T] = F[0]), C;
  }, {})), w = Z(() => d.value.reduce((C, T) => (C[M(T.path)] = { name: M(T.path) || "", label: T.label || "" }, C), {})), E = Z(() => d.value.reduce((C, T) => {
    var F;
    return C[M(T.path)] = (F = T.bails) !== null && F !== void 0 ? F : !0, C;
  }, {})), x = Object.assign({}, e?.initialErrors || {}), k = (t = e?.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: S, originalInitialValues: _, setInitialValues: P } = Jy(d, c, e), D = Xy(d, c, _, y), Y = Z(() => d.value.reduce((C, T) => {
    const F = Xe(c, M(T.path));
    return mt(C, M(T.path), F), C;
  }, {})), Q = e?.validationSchema;
  function ee(C, T) {
    var F, X;
    const ve = Z(() => Xe(S.value, M(C))), we = m.value[M(C)], ge = T?.type === "checkbox" || T?.type === "radio";
    if (we && ge) {
      we.multiple = !0;
      const zt = r++;
      return Array.isArray(we.id) ? we.id.push(zt) : we.id = [we.id, zt], we.fieldsCount++, we.__flags.pendingUnmount[zt] = !1, we;
    }
    const Ye = Z(() => Xe(c, M(C))), ot = M(C), kt = Oe.findIndex((zt) => zt === ot);
    kt !== -1 && Oe.splice(kt, 1);
    const Ze = Z(() => {
      var zt, Ca, Yr, Kr;
      const Xr = M(Q);
      if (Kt(Xr))
        return (Ca = (zt = Xr.describe) === null || zt === void 0 ? void 0 : zt.call(Xr, M(C)).required) !== null && Ca !== void 0 ? Ca : !1;
      const Jr = M(T?.schema);
      return Kt(Jr) && (Kr = (Yr = Jr.describe) === null || Yr === void 0 ? void 0 : Yr.call(Jr).required) !== null && Kr !== void 0 ? Kr : !1;
    }), xt = r++, Pt = _n({
      id: xt,
      path: C,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!((F = x[ot]) === null || F === void 0) && F.length),
      required: Ze,
      initialValue: ve,
      errors: sn([]),
      bails: (X = T?.bails) !== null && X !== void 0 ? X : !1,
      label: T?.label,
      type: T?.type || "default",
      value: Ye,
      multiple: !1,
      __flags: {
        pendingUnmount: { [xt]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: T?.validate,
      dirty: Z(() => !yt(l(Ye), l(ve)))
    });
    return d.value.push(Pt), m.value[ot] = Pt, h(), y.value[ot] && !x[ot] && Ot(() => {
      R(ot, { mode: "silent" });
    }), rn(C) && Ve(C, (zt) => {
      h();
      const Ca = Le(Ye.value);
      m.value[zt] = Pt, Ot(() => {
        mt(c, zt, Ca);
      });
    }), Pt;
  }
  const ce = mi(be, 5), q = mi(be, 5), te = Ps(async (C) => await (C === "silent" ? ce() : q()), (C, [T]) => {
    const F = Dt(ie.errorBag.value), ve = [
      .../* @__PURE__ */ new Set([...Dt(C.results), ...d.value.map((we) => we.path), ...F])
    ].sort().reduce((we, ge) => {
      var Ye;
      const ot = ge, kt = j(ot) || W(ot), Ze = ((Ye = C.results[ot]) === null || Ye === void 0 ? void 0 : Ye.errors) || [], xt = M(kt?.path) || ot, Pt = Qy({ errors: Ze, valid: !Ze.length }, we.results[xt]);
      return we.results[xt] = Pt, Pt.valid || (we.errors[xt] = Pt.errors[0]), kt && p.value[xt] && delete p.value[xt], kt ? (kt.valid = Pt.valid, T === "silent" || T === "validated-only" && !kt.validated || I(kt, Pt.errors), we) : (I(xt, Ze), we);
    }, {
      valid: C.valid,
      results: {},
      errors: {},
      source: C.source
    });
    return C.values && (ve.values = C.values, ve.source = C.source), Dt(ve.results).forEach((we) => {
      var ge;
      const Ye = j(we);
      Ye && T !== "silent" && (T === "validated-only" && !Ye.validated || I(Ye, (ge = ve.results[we]) === null || ge === void 0 ? void 0 : ge.errors));
    }), ve;
  });
  function U(C) {
    d.value.forEach(C);
  }
  function j(C) {
    const T = typeof C == "string" ? Pa(C) : C;
    return typeof T == "string" ? m.value[T] : T;
  }
  function W(C) {
    return d.value.filter((F) => C.startsWith(M(F.path))).reduce((F, X) => F ? X.path.length > F.path.length ? X : F : X, void 0);
  }
  let Oe = [], Re;
  function rt(C) {
    return Oe.push(C), Re || (Re = Ot(() => {
      [...Oe].sort().reverse().forEach((F) => {
        di(c, F);
      }), Oe = [], Re = null;
    })), Re;
  }
  function It(C) {
    return function(F, X) {
      return function(we) {
        return we instanceof Event && (we.preventDefault(), we.stopPropagation()), U((ge) => ge.touched = !0), s.value = !0, i.value++, v().then((ge) => {
          const Ye = Le(c);
          if (ge.valid && typeof F == "function") {
            const ot = Le(Y.value);
            let kt = C ? ot : Ye;
            return ge.values && (kt = ge.source === "schema" ? ge.values : Object.assign({}, kt, ge.values)), F(kt, {
              evt: we,
              controlledValues: ot,
              setErrors: O,
              setFieldError: I,
              setTouched: qt,
              setFieldTouched: qe,
              setValues: Qe,
              setFieldValue: Ae,
              resetForm: f,
              resetField: En
            });
          }
          !ge.valid && typeof X == "function" && X({
            values: Ye,
            evt: we,
            errors: ge.errors,
            results: ge.results
          });
        }).then((ge) => (s.value = !1, ge), (ge) => {
          throw s.value = !1, ge;
        });
      };
    };
  }
  const $e = It(!1);
  $e.withControlled = It(!0);
  function Tt(C, T) {
    const F = d.value.findIndex((ve) => ve.path === C && (Array.isArray(ve.id) ? ve.id.includes(T) : ve.id === T)), X = d.value[F];
    if (!(F === -1 || !X)) {
      if (Ot(() => {
        R(C, { mode: "silent", warn: !1 });
      }), X.multiple && X.fieldsCount && X.fieldsCount--, Array.isArray(X.id)) {
        const ve = X.id.indexOf(T);
        ve >= 0 && X.id.splice(ve, 1), delete X.__flags.pendingUnmount[T];
      }
      (!X.multiple || X.fieldsCount <= 0) && (d.value.splice(F, 1), G(C), h(), delete m.value[C]);
    }
  }
  function oe(C) {
    Dt(m.value).forEach((T) => {
      T.startsWith(C) && delete m.value[T];
    }), d.value = d.value.filter((T) => !T.path.startsWith(C)), Ot(() => {
      h();
    });
  }
  const ie = {
    name: a,
    formId: n,
    values: c,
    controlledValues: Y,
    errorBag: A,
    errors: y,
    schema: Q,
    submitCount: i,
    meta: D,
    isSubmitting: s,
    isValidating: o,
    fieldArrays: u,
    keepValuesOnUnmount: k,
    validateSchema: l(Q) ? te : void 0,
    validate: v,
    setFieldError: I,
    validateField: R,
    setFieldValue: Ae,
    setValues: Qe,
    setErrors: O,
    setFieldTouched: qe,
    setTouched: qt,
    resetForm: f,
    resetField: En,
    handleSubmit: $e,
    useFieldModel: De,
    defineInputBinds: We,
    defineComponentBinds: Mt,
    defineField: B,
    stageInitialValue: xe,
    unsetInitialValue: G,
    setFieldInitialValue: Ce,
    createPathState: ee,
    getPathState: j,
    unsetPathValue: rt,
    removePathState: Tt,
    initialValues: S,
    getAllPathStates: () => d.value,
    destroyPath: oe,
    isFieldTouched: Vt,
    isFieldDirty: fn,
    isFieldValid: Gt
  };
  function Ae(C, T, F = !0) {
    const X = Le(T), ve = typeof C == "string" ? C : C.path;
    j(ve) || ee(ve), mt(c, ve, X), F && R(ve);
  }
  function Ie(C, T = !0) {
    Dt(c).forEach((F) => {
      delete c[F];
    }), Dt(C).forEach((F) => {
      Ae(F, C[F], !1);
    }), T && v();
  }
  function Qe(C, T = !0) {
    Ja(c, C), u.forEach((F) => F && F.reset()), T && v();
  }
  function st(C, T) {
    const F = j(M(C)) || ee(C);
    return Z({
      get() {
        return F.value;
      },
      set(X) {
        var ve;
        const we = M(C);
        Ae(we, X, (ve = M(T)) !== null && ve !== void 0 ? ve : !1);
      }
    });
  }
  function qe(C, T) {
    const F = j(C);
    F && (F.touched = T);
  }
  function Vt(C) {
    const T = j(C);
    return T ? T.touched : d.value.filter((F) => F.path.startsWith(C)).some((F) => F.touched);
  }
  function fn(C) {
    const T = j(C);
    return T ? T.dirty : d.value.filter((F) => F.path.startsWith(C)).some((F) => F.dirty);
  }
  function Gt(C) {
    const T = j(C);
    return T ? T.valid : d.value.filter((F) => F.path.startsWith(C)).every((F) => F.valid);
  }
  function qt(C) {
    if (typeof C == "boolean") {
      U((T) => {
        T.touched = C;
      });
      return;
    }
    Dt(C).forEach((T) => {
      qe(T, !!C[T]);
    });
  }
  function En(C, T) {
    var F;
    const X = T && "value" in T ? T.value : Xe(S.value, C), ve = j(C);
    ve && (ve.__flags.pendingReset = !0), Ce(C, Le(X), !0), Ae(C, X, !1), qe(C, (F = T?.touched) !== null && F !== void 0 ? F : !1), I(C, T?.errors || []), Ot(() => {
      ve && (ve.__flags.pendingReset = !1);
    });
  }
  function f(C, T) {
    let F = Le(C?.values ? C.values : _.value);
    F = T?.force ? F : Ja(_.value, F), F = Kt(Q) && bt(Q.cast) ? Q.cast(F) : F, P(F, { force: T?.force }), U((X) => {
      var ve;
      X.__flags.pendingReset = !0, X.validated = !1, X.touched = ((ve = C?.touched) === null || ve === void 0 ? void 0 : ve[M(X.path)]) || !1, Ae(M(X.path), Xe(F, M(X.path)), !1), I(M(X.path), void 0);
    }), T?.force ? Ie(F, !1) : Qe(F, !1), O(C?.errors || {}), i.value = C?.submitCount || 0, Ot(() => {
      v({ mode: "silent" }), U((X) => {
        X.__flags.pendingReset = !1;
      });
    });
  }
  async function v(C) {
    const T = C?.mode || "force";
    if (T === "force" && U((ge) => ge.validated = !0), ie.validateSchema)
      return ie.validateSchema(T);
    o.value = !0;
    const F = await Promise.all(d.value.map((ge) => ge.validate ? ge.validate(C).then((Ye) => ({
      key: M(ge.path),
      valid: Ye.valid,
      errors: Ye.errors,
      value: Ye.value
    })) : Promise.resolve({
      key: M(ge.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    o.value = !1;
    const X = {}, ve = {}, we = {};
    for (const ge of F)
      X[ge.key] = {
        valid: ge.valid,
        errors: ge.errors
      }, ge.value && mt(we, ge.key, ge.value), ge.errors.length && (ve[ge.key] = ge.errors[0]);
    return {
      valid: F.every((ge) => ge.valid),
      results: X,
      errors: ve,
      values: we,
      source: "fields"
    };
  }
  async function R(C, T) {
    var F;
    const X = j(C);
    if (X && T?.mode !== "silent" && (X.validated = !0), Q) {
      const { results: we } = await te(T?.mode || "validated-only");
      return we[C] || { errors: [], valid: !0 };
    }
    return X?.validate ? X.validate(T) : (!X && ((F = T?.warn) !== null && F !== void 0 ? F : !0) && process.env.NODE_ENV !== "production" && Pi(`field with path ${C} was not found`), Promise.resolve({ errors: [], valid: !0 }));
  }
  function G(C) {
    di(S.value, C);
  }
  function xe(C, T, F = !1) {
    Ce(C, T), mt(c, C, T), F && !e?.initialValues && mt(_.value, C, Le(T));
  }
  function Ce(C, T, F = !1) {
    mt(S.value, C, Le(T)), F && mt(_.value, C, Le(T));
  }
  async function be() {
    const C = l(Q);
    if (!C)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    o.value = !0;
    const T = $r(C) || Kt(C) ? await Ay(C, c) : await Iy(C, c, {
      names: w.value,
      bailsMap: E.value
    });
    return o.value = !1, T;
  }
  const $ = $e((C, { evt: T }) => {
    iu(T) && T.target.submit();
  });
  Dn(() => {
    if (e?.initialErrors && O(e.initialErrors), e?.initialTouched && qt(e.initialTouched), e?.validateOnMount) {
      v();
      return;
    }
    ie.validateSchema && ie.validateSchema("silent");
  }), rn(Q) && Ve(Q, () => {
    var C;
    (C = ie.validateSchema) === null || C === void 0 || C.call(ie, "validated-only");
  }), ca(ea, ie), process.env.NODE_ENV !== "production" && (Vy(ie), Ve(() => Object.assign(Object.assign({ errors: A.value }, D.value), { values: c, isSubmitting: s.value, isValidating: o.value, submitCount: i.value }), ya, {
    deep: !0
  }));
  function B(C, T) {
    const F = bt(T) ? void 0 : T?.label, X = j(M(C)) || ee(C, { label: F }), ve = () => bt(T) ? T(pr(X, vr)) : T || {};
    function we() {
      var Ze;
      X.touched = !0, ((Ze = ve().validateOnBlur) !== null && Ze !== void 0 ? Ze : jn().validateOnBlur) && R(M(X.path));
    }
    function ge() {
      var Ze;
      ((Ze = ve().validateOnInput) !== null && Ze !== void 0 ? Ze : jn().validateOnInput) && Ot(() => {
        R(M(X.path));
      });
    }
    function Ye() {
      var Ze;
      ((Ze = ve().validateOnChange) !== null && Ze !== void 0 ? Ze : jn().validateOnChange) && Ot(() => {
        R(M(X.path));
      });
    }
    const ot = Z(() => {
      const Ze = {
        onChange: Ye,
        onInput: ge,
        onBlur: we
      };
      return bt(T) ? Object.assign(Object.assign({}, Ze), T(pr(X, vr)).props || {}) : T?.props ? Object.assign(Object.assign({}, Ze), T.props(pr(X, vr))) : Ze;
    });
    return [st(C, () => {
      var Ze, xt, Pt;
      return (Pt = (Ze = ve().validateOnModelUpdate) !== null && Ze !== void 0 ? Ze : (xt = jn()) === null || xt === void 0 ? void 0 : xt.validateOnModelUpdate) !== null && Pt !== void 0 ? Pt : !0;
    }), ot];
  }
  function De(C) {
    return Array.isArray(C) ? C.map((T) => st(T, !0)) : st(C);
  }
  function We(C, T) {
    const [F, X] = B(C, T);
    function ve() {
      X.value.onBlur();
    }
    function we(Ye) {
      const ot = Lr(Ye);
      Ae(M(C), ot, !1), X.value.onInput();
    }
    function ge(Ye) {
      const ot = Lr(Ye);
      Ae(M(C), ot, !1), X.value.onChange();
    }
    return Z(() => Object.assign(Object.assign({}, X.value), {
      onBlur: ve,
      onInput: we,
      onChange: ge,
      value: F.value
    }));
  }
  function Mt(C, T) {
    const [F, X] = B(C, T), ve = j(M(C));
    function we(ge) {
      F.value = ge;
    }
    return Z(() => {
      const ge = bt(T) ? T(pr(ve, vr)) : T || {};
      return Object.assign({ [ge.model || "modelValue"]: F.value, [`onUpdate:${ge.model || "modelValue"}`]: we }, X.value);
    });
  }
  const en = Object.assign(Object.assign({}, ie), { values: Ls(c), handleReset: () => f(), submitForm: $ });
  return ca(ly, en), en;
}
function Xy(e, t, n, a) {
  const r = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, s = Z(() => !yt(t, l(n)));
  function o() {
    const u = e.value;
    return Dt(r).reduce((c, d) => {
      const p = r[d];
      return c[d] = u[p]((m) => m[d]), c;
    }, {});
  }
  const i = _n(o());
  return Qa(() => {
    const u = o();
    i.touched = u.touched, i.valid = u.valid, i.pending = u.pending;
  }), Z(() => Object.assign(Object.assign({ initialValues: l(n) }, i), { valid: i.valid && !Dt(a.value).length, dirty: s.value }));
}
function Jy(e, t, n) {
  const a = gu(n), r = pe(a), s = pe(Le(a));
  function o(i, u) {
    u?.force ? (r.value = Le(i), s.value = Le(i)) : (r.value = Ja(Le(r.value) || {}, Le(i)), s.value = Ja(Le(s.value) || {}, Le(i))), u?.updateFields && e.value.forEach((c) => {
      if (c.touched)
        return;
      const p = Xe(r.value, M(c.path));
      mt(t, M(c.path), Le(p));
    });
  }
  return {
    initialValues: r,
    originalInitialValues: s,
    setInitialValues: o
  };
}
function Qy(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
const e_ = /* @__PURE__ */ V({
  name: "Form",
  inheritAttrs: !1,
  props: {
    as: {
      type: null,
      default: "form"
    },
    validationSchema: {
      type: Object,
      default: void 0
    },
    initialValues: {
      type: Object,
      default: void 0
    },
    initialErrors: {
      type: Object,
      default: void 0
    },
    initialTouched: {
      type: Object,
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    onInvalidSubmit: {
      type: Function,
      default: void 0
    },
    keepValues: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      default: "Form"
    }
  },
  setup(e, t) {
    const n = Sn(e, "validationSchema"), a = Sn(e, "keepValues"), { errors: r, errorBag: s, values: o, meta: i, isSubmitting: u, isValidating: c, submitCount: d, controlledValues: p, validate: m, validateField: h, handleReset: I, resetForm: O, handleSubmit: A, setErrors: y, setFieldError: w, setFieldValue: E, setValues: x, setFieldTouched: k, setTouched: S, resetField: _ } = yu({
      validationSchema: n.value ? n : void 0,
      initialValues: e.initialValues,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: a,
      name: e.name
    }), P = A((U, { evt: j }) => {
      iu(j) && j.target.submit();
    }, e.onInvalidSubmit), D = e.onSubmit ? A(e.onSubmit, e.onInvalidSubmit) : P;
    function Y(U) {
      ao(U) && U.preventDefault(), I(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function Q(U, j) {
      return A(typeof U == "function" && !j ? U : j, e.onInvalidSubmit)(U);
    }
    function ee() {
      return Le(o);
    }
    function ce() {
      return Le(i.value);
    }
    function q() {
      return Le(r.value);
    }
    function te() {
      return {
        meta: i.value,
        errors: r.value,
        errorBag: s.value,
        values: o,
        isSubmitting: u.value,
        isValidating: c.value,
        submitCount: d.value,
        controlledValues: p.value,
        validate: m,
        validateField: h,
        handleSubmit: Q,
        handleReset: I,
        submitForm: P,
        setErrors: y,
        setFieldError: w,
        setFieldValue: E,
        setValues: x,
        setFieldTouched: k,
        setTouched: S,
        resetForm: O,
        resetField: _,
        getValues: ee,
        getMeta: ce,
        getErrors: q
      };
    }
    return t.expose({
      setFieldError: w,
      setErrors: y,
      setFieldValue: E,
      setValues: x,
      setFieldTouched: k,
      setTouched: S,
      resetForm: O,
      validate: m,
      validateField: h,
      resetField: _,
      getValues: ee,
      getMeta: ce,
      getErrors: q,
      values: o,
      meta: i,
      errors: r
    }), function() {
      const j = e.as === "form" ? e.as : e.as ? Nt(e.as) : null, W = Gr(j, t, te);
      return j ? bn(j, Object.assign(Object.assign(Object.assign({}, j === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: !0
      } : {}), t.attrs), { onSubmit: D, onReset: Y }), W) : W;
    };
  }
}), t_ = e_;
function n_(e) {
  const t = or(ea, void 0), n = pe([]), a = () => {
  }, r = {
    fields: n,
    remove: a,
    push: a,
    swap: a,
    insert: a,
    update: a,
    replace: a,
    prepend: a,
    move: a
  };
  if (!t)
    return process.env.NODE_ENV !== "production" && wr("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"), r;
  if (!l(e))
    return process.env.NODE_ENV !== "production" && wr("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"), r;
  const s = t.fieldArrays.find((k) => l(k.path) === l(e));
  if (s)
    return s;
  let o = 0;
  function i() {
    return Xe(t?.values, M(e), []) || [];
  }
  function u() {
    const k = i();
    Array.isArray(k) && (n.value = k.map((S, _) => d(S, _, n.value)), c());
  }
  u();
  function c() {
    const k = n.value.length;
    for (let S = 0; S < k; S++) {
      const _ = n.value[S];
      _.isFirst = S === 0, _.isLast = S === k - 1;
    }
  }
  function d(k, S, _) {
    if (_ && !oa(S) && _[S])
      return _[S];
    const P = o++;
    return {
      key: P,
      value: hy({
        get() {
          const Y = Xe(t?.values, M(e), []) || [], Q = n.value.findIndex((ee) => ee.key === P);
          return Q === -1 ? k : Y[Q];
        },
        set(Y) {
          const Q = n.value.findIndex((ee) => ee.key === P);
          if (Q === -1) {
            process.env.NODE_ENV !== "production" && wr("Attempting to update a non-existent array item");
            return;
          }
          y(Q, Y);
        }
      }),
      // will be auto unwrapped
      isFirst: !1,
      isLast: !1
    };
  }
  function p() {
    c(), t?.validate({ mode: "silent" });
  }
  function m(k) {
    const S = M(e), _ = Xe(t?.values, S);
    if (!_ || !Array.isArray(_))
      return;
    const P = [..._];
    P.splice(k, 1);
    const D = S + `[${k}]`;
    t.destroyPath(D), t.unsetInitialValue(D), mt(t.values, S, P), n.value.splice(k, 1), p();
  }
  function h(k) {
    const S = Le(k), _ = M(e), P = Xe(t?.values, _), D = oa(P) ? [] : P;
    if (!Array.isArray(D))
      return;
    const Y = [...D];
    Y.push(S), t.stageInitialValue(_ + `[${Y.length - 1}]`, S), mt(t.values, _, Y), n.value.push(d(S)), p();
  }
  function I(k, S) {
    const _ = M(e), P = Xe(t?.values, _);
    if (!Array.isArray(P) || !(k in P) || !(S in P))
      return;
    const D = [...P], Y = [...n.value], Q = D[k];
    D[k] = D[S], D[S] = Q;
    const ee = Y[k];
    Y[k] = Y[S], Y[S] = ee, mt(t.values, _, D), n.value = Y, c();
  }
  function O(k, S) {
    const _ = Le(S), P = M(e), D = Xe(t?.values, P);
    if (!Array.isArray(D) || D.length < k)
      return;
    const Y = [...D], Q = [...n.value];
    Y.splice(k, 0, _), Q.splice(k, 0, d(_)), mt(t.values, P, Y), n.value = Q, p();
  }
  function A(k) {
    const S = M(e);
    t.stageInitialValue(S, k), mt(t.values, S, k), u(), p();
  }
  function y(k, S) {
    const _ = M(e), P = Xe(t?.values, _);
    !Array.isArray(P) || P.length - 1 < k || (mt(t.values, `${_}[${k}]`, S), t?.validate({ mode: "validated-only" }));
  }
  function w(k) {
    const S = Le(k), _ = M(e), P = Xe(t?.values, _), D = oa(P) ? [] : P;
    if (!Array.isArray(D))
      return;
    const Y = [S, ...D];
    mt(t.values, _, Y), t.stageInitialValue(_ + "[0]", S), n.value.unshift(d(S)), p();
  }
  function E(k, S) {
    const _ = M(e), P = Xe(t?.values, _), D = oa(P) ? [] : [...P];
    if (!Array.isArray(P) || !(k in P) || !(S in P))
      return;
    const Y = [...n.value], Q = Y[k];
    Y.splice(k, 1), Y.splice(S, 0, Q);
    const ee = D[k];
    D.splice(k, 1), D.splice(S, 0, ee), mt(t.values, _, D), n.value = Y, p();
  }
  const x = {
    fields: n,
    remove: m,
    push: h,
    swap: I,
    insert: O,
    update: y,
    replace: A,
    prepend: w,
    move: E
  };
  return t.fieldArrays.push(Object.assign({ path: e, reset: u }, x)), Vs(() => {
    const k = t.fieldArrays.findIndex((S) => M(S.path) === M(e));
    k >= 0 && t.fieldArrays.splice(k, 1);
  }), Ve(i, (k) => {
    const S = n.value.map((_) => _.value);
    yt(k, S) || u();
  }), x;
}
const a_ = /* @__PURE__ */ V({
  name: "FieldArray",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const { push: n, remove: a, swap: r, insert: s, replace: o, update: i, prepend: u, move: c, fields: d } = n_(() => e.name);
    function p() {
      return {
        fields: d.value,
        push: n,
        remove: a,
        swap: r,
        insert: s,
        update: i,
        replace: o,
        prepend: u,
        move: c
      };
    }
    return t.expose({
      push: n,
      remove: a,
      swap: r,
      insert: s,
      update: i,
      replace: o,
      prepend: u,
      move: c
    }), () => Gr(void 0, t, p);
  }
}), r_ = a_, s_ = /* @__PURE__ */ V({
  name: "ErrorMessage",
  props: {
    as: {
      type: String,
      default: void 0
    },
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = ua(ea, void 0), a = Z(() => n?.errors.value[e.name]);
    function r() {
      return {
        message: a.value
      };
    }
    return () => {
      if (!a.value)
        return;
      const s = e.as ? Nt(e.as) : e.as, o = Gr(s, t, r), i = Object.assign({ role: "alert" }, t.attrs);
      return !s && (Array.isArray(o) || !o) && o?.length ? o : (Array.isArray(o) || !o) && !o?.length ? bn(s || "span", i, a.value) : bn(s, i, o);
    };
  }
}), o_ = s_;
function i_(e) {
  const t = or(ea), n = e ? void 0 : ua(ar);
  return Z(() => e ? Xe(t?.values, M(e)) : M(n?.value));
}
function l_() {
  const e = or(ea);
  return e || process.env.NODE_ENV !== "production" && wr("No vee-validate <Form /> or `useForm` was detected in the component tree"), Z(() => e?.values || {});
}
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
const yi = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function _u(e) {
  return Number(e) >= 0;
}
function u_(e) {
  return typeof e == "object" && e !== null;
}
function c_(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function _i(e) {
  if (!u_(e) || c_(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function bu(e, t) {
  return Object.keys(t).forEach((n) => {
    if (_i(t[n]) && _i(e[n])) {
      e[n] || (e[n] = {}), bu(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function d_(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (_u(t[a])) {
      n += `[${t[a]}]`;
      continue;
    }
    n += `.${t[a]}`;
  }
  return n;
}
function wu(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(a) {
      const r = await e.safeParseAsync(a, t);
      if (r.success)
        return {
          value: r.data,
          errors: []
        };
      const s = {};
      return ku(r.error.issues, s), {
        errors: Object.values(s)
      };
    },
    cast(a) {
      try {
        return e.parse(a);
      } catch {
        const s = xu(e);
        return yi(s) && yi(a) ? bu(s, a) : a;
      }
    },
    describe(a) {
      try {
        if (!a)
          return {
            required: !e.isOptional(),
            exists: !0
          };
        const r = f_(a, e);
        return r ? {
          required: !r.isOptional(),
          exists: !0
        } : {
          required: !1,
          exists: !1
        };
      } catch {
        return process.env.NODE_ENV !== "production" && console.warn(`Failed to describe path ${a} on the schema, returning a default description.`), {
          required: !1,
          exists: !1
        };
      }
    }
  };
}
function ku(e, t) {
  e.forEach((n) => {
    const a = d_(n.path.join("."));
    n.code === "invalid_union" && (ku(n.unionErrors.flatMap((r) => r.issues), t), !a) || (t[a] || (t[a] = { errors: [], path: a }), t[a].errors.push(n.message));
  });
}
function xu(e) {
  if (e instanceof He)
    return Object.fromEntries(Object.entries(e.shape).map(([t, n]) => n instanceof Xn ? [t, n._def.defaultValue()] : n instanceof He ? [t, xu(n)] : [t, void 0]));
}
function f_(e, t) {
  if (!bi(t))
    return null;
  if (sr(e))
    return t.shape[Hr(e)];
  const n = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = t;
  for (let r = 0; r <= n.length; r++) {
    const s = n[r];
    if (!s || !a)
      return a;
    if (bi(a)) {
      a = a.shape[s] || null;
      continue;
    }
    _u(s) && m_(a) && (a = a._def.type);
  }
  return null;
}
function Eu(e) {
  return e._def.typeName;
}
function m_(e) {
  return Eu(e) === he.ZodArray;
}
function bi(e) {
  return Eu(e) === he.ZodObject;
}
const Ou = Symbol();
function qr() {
  const e = ua(ar), t = ua(Ou);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: n, errorMessage: a, meta: r } = e, s = t, o = {
    valid: Z(() => r.valid),
    isDirty: Z(() => r.dirty),
    isTouched: Z(() => r.touched),
    error: a
  };
  return {
    id: s,
    name: n,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...o
  };
}
const Ea = /* @__PURE__ */ V({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: n, formDescriptionId: a, formMessageId: r } = qr();
    return (s, o) => (g(), L(l(Lc), {
      id: l(n),
      "data-slot": "form-control",
      "aria-describedby": l(t) ? `${l(a)} ${l(r)}` : `${l(a)}`,
      "aria-invalid": !!l(t)
    }, {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), p_ = ["id"], Oa = /* @__PURE__ */ V({
  __name: "FormDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { formDescriptionId: n } = qr();
    return (a, r) => (g(), K("p", {
      id: l(n),
      "data-slot": "form-description",
      class: Fe(l(re)("text-muted-foreground text-sm", t.class))
    }, [
      H(a.$slots, "default")
    ], 10, p_));
  }
}), Rn = /* @__PURE__ */ V({
  __name: "FormItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, n = Rc();
    return ca(Ou, n), (a, r) => (g(), K("div", {
      "data-slot": "form-item",
      class: Fe(l(re)("grid gap-2", t.class))
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), Su = /* @__PURE__ */ V({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Vc), ne({ "data-slot": "label" }, l(n), {
      class: l(re)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v_ = /* @__PURE__ */ V({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, { error: n, formItemId: a } = qr();
    return (r, s) => (g(), L(l(Su), {
      "data-slot": "form-label",
      "data-error": !!l(n),
      class: Fe(l(re)(
        "data-[error=true]:text-destructive",
        t.class
      )),
      for: l(a)
    }, {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), ta = /* @__PURE__ */ V({
  __name: "FormMessage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { name: n, formMessageId: a } = qr();
    return (r, s) => (g(), L(l(o_), {
      id: l(a),
      "data-slot": "form-message",
      as: "p",
      name: M(l(n)),
      class: Fe(l(re)("text-destructive text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), Cu = /* @__PURE__ */ V({
  __name: "Accordion",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = wt(e, t);
    return (s, o) => (g(), L(l(Mc), ne({ "data-slot": "accordion" }, l(r)), {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tu = /* @__PURE__ */ V({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Fc), ne({ "data-slot": "accordion-content" }, l(n), { class: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" }), {
      default: b(() => [
        me("div", {
          class: Fe(l(re)("pt-0 pb-4", t.class))
        }, [
          H(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Nu = /* @__PURE__ */ V({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Bc), ne({ "data-slot": "accordion-item" }, l(a), {
      class: l(re)("border-b last:border-b-0", t.class)
    }), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Au = /* @__PURE__ */ V({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(jc), { class: "flex" }, {
      default: b(() => [
        N(l(Uc), ne({ "data-slot": "accordion-trigger" }, l(n), {
          class: l(re)(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: b(() => [
            H(a.$slots, "default"),
            H(a.$slots, "icon", {}, () => [
              N(l(Un), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), h_ = /* @__PURE__ */ V({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(zc), ne({ "data-slot": "separator-root" }, l(n), {
      class: l(re)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), g_ = {
  key: 0,
  class: "text-destructive"
}, Vn = /* @__PURE__ */ V({
  __name: "AutoFormLabel",
  props: {
    required: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), L(l(v_), null, {
      default: b(() => [
        H(t.$slots, "default"),
        e.required ? (g(), K("span", g_, " *")) : ke("", !0)
      ]),
      _: 3
    }));
  }
});
function ln(e) {
  let t = e.replace(/\[\d+\]/g, "").replace(/([A-Z])/g, " $1");
  return t = t.charAt(0).toUpperCase() + t.slice(1), t;
}
function y_(e) {
  const t = /\[(\d+)\]/, n = e.match(t);
  return n ? Number.parseInt(n[1]) : void 0;
}
function _a(e) {
  return e ? "innerType" in e._def ? _a(e._def.innerType) : "schema" in e._def ? _a(e._def.schema) : e : null;
}
function oo(e) {
  const t = _a(e);
  return t ? t._def.typeName : "";
}
function Rr(e) {
  const t = e;
  if (t._def.typeName === "ZodDefault")
    return t._def.defaultValue();
  if ("innerType" in t._def)
    return Rr(
      t._def.innerType
    );
  if ("schema" in t._def)
    return Rr(
      t._def.schema
    );
}
function Iu(e) {
  return e?._def.typeName === "ZodEffects" ? Iu(e._def.schema) : e;
}
function Pu(e) {
  return /^\[.+\]$/.test(e);
}
function __(e) {
  return e !== null && !!e && typeof e == "object" && !Array.isArray(e);
}
function b_(e) {
  return __(e) || Array.isArray(e);
}
function w_(e) {
  return Pu(e) ? e.replace(/\[|\]/g, "") : e;
}
function wi(e, t, n) {
  return e ? Pu(t) ? e[w_(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r, s) => b_(r) && s in r ? r[s] : n, e) : n;
}
function k_(e) {
  switch (e) {
    case "true":
    case !0:
      return !0;
    case "false":
    case !1:
      return !1;
  }
}
function Vr(e) {
  return e ? k_(e) : void 0;
}
const x_ = { class: "!my-4 flex justify-end" }, E_ = /* @__PURE__ */ V({
  __name: "AutoFormFieldArray",
  props: {
    fieldName: {},
    required: { type: Boolean },
    config: {},
    schema: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    function n(o) {
      return o instanceof Ht;
    }
    function a(o) {
      return o instanceof Xn;
    }
    const r = Z(() => {
      if (!t.schema)
        return;
      const o = n(t.schema) ? t.schema._def.type : a(t.schema) ? t.schema._def.innerType._def.type : null;
      return {
        type: oo(o),
        schema: o
      };
    }), s = so(t.fieldName);
    return ca(ar, s), (o, i) => (g(), L(l(r_), {
      as: "section",
      name: e.fieldName
    }, {
      default: b(({ fields: u, remove: c, push: d }) => [
        H(o.$slots, "default", jt(Ut(t)), () => [
          N(l(Cu), {
            type: "multiple",
            class: "w-full",
            collapsible: "",
            disabled: e.disabled,
            "as-child": ""
          }, {
            default: b(() => [
              N(l(Rn), null, {
                default: b(() => [
                  N(l(Nu), {
                    value: e.fieldName,
                    class: "border-none"
                  }, {
                    default: b(() => [
                      N(l(Au), null, {
                        default: b(() => [
                          N(Vn, {
                            class: "text-base",
                            required: e.required
                          }, {
                            default: b(() => [
                              Te(de(e.schema?.description || l(ln)(e.fieldName)), 1)
                            ]),
                            _: 1
                          }, 8, ["required"])
                        ]),
                        _: 1
                      }),
                      N(l(Tu), null, {
                        default: b(() => [
                          (g(!0), K(Ue, null, tt(u, (p, m) => (g(), K("div", {
                            key: p.key,
                            class: "mb-4 p-1"
                          }, [
                            N(io, {
                              "field-name": `${e.fieldName}[${m}]`,
                              label: e.fieldName,
                              shape: r.value,
                              config: e.config
                            }, null, 8, ["field-name", "label", "shape", "config"]),
                            me("div", x_, [
                              N(l(ht), {
                                type: "button",
                                size: "icon",
                                variant: "secondary",
                                onClick: (h) => c(m)
                              }, {
                                default: b(() => [
                                  N(l(il), { size: 16 })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            p.isLast ? ke("", !0) : (g(), L(l(h_), { key: 0 }))
                          ]))), 128)),
                          N(l(ht), {
                            type: "button",
                            variant: "secondary",
                            class: "mt-4 flex items-center",
                            onClick: (p) => d(null)
                          }, {
                            default: b(() => [
                              N(l(Fr), {
                                class: "mr-2",
                                size: 16
                              }),
                              i[0] || (i[0] = Te(" Add ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      N(l(ta))
                    ]),
                    _: 2
                  }, 1032, ["value"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["disabled"])
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), O_ = /* @__PURE__ */ V({
  __name: "Switch",
  props: {
    defaultValue: { type: Boolean },
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(Wc), ne({ "data-slot": "switch" }, l(s), {
      class: l(re)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: b(() => [
        N(l(Zc), {
          "data-slot": "switch-thumb",
          class: Fe(l(re)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"))
        }, {
          default: b(() => [
            H(o.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S_ = { class: "space-y-0 mb-3 flex items-center gap-3" }, ki = /* @__PURE__ */ V({
  __name: "AutoFormFieldBoolean",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Z(() => t.config?.component === "switch" ? O_ : _r);
    return (a, r) => (g(), L(l(xa), { name: e.fieldName }, {
      default: b((s) => [
        N(l(Rn), null, {
          default: b(() => [
            me("div", S_, [
              N(l(Ea), null, {
                default: b(() => [
                  H(a.$slots, "default", jt(Ut(s)), () => [
                    (g(), L(Nt(n.value), {
                      disabled: l(Vr)(e.config?.inputProps?.disabled) ?? e.disabled,
                      name: s.componentField.name,
                      "model-value": s.componentField.modelValue,
                      "onUpdate:modelValue": s.componentField["onUpdate:modelValue"]
                    }, null, 8, ["disabled", "name", "model-value", "onUpdate:modelValue"]))
                  ])
                ]),
                _: 2
              }, 1024),
              e.config?.hideLabel ? ke("", !0) : (g(), L(Vn, {
                key: 0,
                required: e.required
              }, {
                default: b(() => [
                  Te(de(e.config?.label || l(ln)(e.label ?? e.fieldName)), 1)
                ]),
                _: 1
              }, 8, ["required"]))
            ]),
            e.config?.description ? (g(), L(l(Oa), { key: 0 }, {
              default: b(() => [
                Te(de(e.config.description), 1)
              ]),
              _: 1
            })) : ke("", !0),
            N(l(ta))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), C_ = { class: "flex items-center gap-1" }, T_ = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, N_ = /* @__PURE__ */ V({
  __name: "Calendar",
  props: {
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: {},
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    modelValue: {},
    multiple: { type: Boolean },
    disableDaysOutsideCurrentView: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(Hc), ne({
      "data-slot": "calendar",
      class: l(re)("p-3", n.class)
    }, l(s)), {
      default: b(({ grid: u, weekDays: c }) => [
        N(l(R_), null, {
          default: b(() => [
            N(l(V_)),
            me("div", C_, [
              N(l(F_)),
              N(l(M_))
            ])
          ]),
          _: 1
        }),
        me("div", T_, [
          (g(!0), K(Ue, null, tt(u, (d) => (g(), L(l(P_), {
            key: d.value.toString()
          }, {
            default: b(() => [
              N(l($_), null, {
                default: b(() => [
                  N(l(xi), null, {
                    default: b(() => [
                      (g(!0), K(Ue, null, tt(c, (p) => (g(), L(l(L_), { key: p }, {
                        default: b(() => [
                          Te(de(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              N(l(D_), null, {
                default: b(() => [
                  (g(!0), K(Ue, null, tt(d.rows, (p, m) => (g(), L(l(xi), {
                    key: `weekDate-${m}`,
                    class: "mt-2 w-full"
                  }, {
                    default: b(() => [
                      (g(!0), K(Ue, null, tt(p, (h) => (g(), L(l(A_), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: b(() => [
                          N(l(I_), {
                            day: h,
                            month: d.value
                          }, null, 8, ["day", "month"])
                        ]),
                        _: 2
                      }, 1032, ["date"]))), 128))
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), A_ = /* @__PURE__ */ V({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Gc), ne({
      "data-slot": "calendar-cell",
      class: l(re)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I_ = /* @__PURE__ */ V({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(qc), ne({
      "data-slot": "calendar-cell-trigger",
      class: l(re)(
        l(Qt)({ variant: "ghost" }),
        "size-8 p-0 font-normal aria-selected:opacity-100 cursor-default",
        "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
        // Selected
        "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground",
        // Disabled
        "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
        // Unavailable
        "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
        // Outside months
        "data-[outside-view]:text-muted-foreground",
        t.class
      )
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P_ = /* @__PURE__ */ V({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Yc), ne({
      "data-slot": "calendar-grid",
      class: l(re)("w-full border-collapse space-x-1", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D_ = /* @__PURE__ */ V({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L(l(Kc), ne({ "data-slot": "calendar-grid-body" }, t), {
      default: b(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $_ = /* @__PURE__ */ V({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L(l(Xc), ne({ "data-slot": "calendar-grid-head" }, t), {
      default: b(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xi = /* @__PURE__ */ V({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Jc), ne({
      "data-slot": "calendar-grid-row",
      class: l(re)("flex", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L_ = /* @__PURE__ */ V({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(Qc), ne({
      "data-slot": "calendar-head-cell",
      class: l(re)("text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R_ = /* @__PURE__ */ V({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(ed), ne({
      "data-slot": "calendar-header",
      class: l(re)("flex justify-center pt-1 relative items-center w-full", t.class)
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V_ = /* @__PURE__ */ V({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(td), ne({
      "data-slot": "calendar-heading",
      class: l(re)("text-sm font-medium", t.class)
    }, l(a)), {
      default: b(({ headingValue: o }) => [
        H(r.$slots, "default", { headingValue: o }, () => [
          Te(de(o), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M_ = /* @__PURE__ */ V({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(nd), ne({
      "data-slot": "calendar-next-button",
      class: l(re)(
        l(Qt)({ variant: "outline" }),
        "absolute right-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          N(l(ia), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F_ = /* @__PURE__ */ V({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(ad), ne({
      "data-slot": "calendar-prev-button",
      class: l(re)(
        l(Qt)({ variant: "outline" }),
        "absolute left-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: b(() => [
        H(r.$slots, "default", {}, () => [
          N(l(Us), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
let is = null;
function B_() {
  return is == null && (is = new Intl.DateTimeFormat().resolvedOptions().timeZone), is;
}
let ls = /* @__PURE__ */ new Map();
class j_ {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, n) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(n)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    let a = this.formatter.formatToParts(t), r = this.formatter.formatToParts(n);
    return [
      ...a.map((s) => ({
        ...s,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...r.map((s) => ({
        ...s,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return W_() && (this.resolvedHourCycle || (this.resolvedHourCycle = Z_(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Du(t, n), this.options = n;
  }
}
const U_ = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Du(e, t = {}) {
  if (typeof t.hour12 == "boolean" && z_()) {
    t = {
      ...t
    };
    let r = U_[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = r ?? s, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((r, s) => r[0] < s[0] ? -1 : 1).join() : "");
  if (ls.has(n)) return ls.get(n);
  let a = new Intl.DateTimeFormat(e, t);
  return ls.set(n, a), a;
}
let us = null;
function z_() {
  return us == null && (us = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), us;
}
let cs = null;
function W_() {
  return cs == null && (cs = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), cs;
}
function Z_(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Du(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), a = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((s) => s.type === "hour").value, 10), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((s) => s.type === "hour").value, 10);
  if (a === 0 && r === 23) return "h23";
  if (a === 24 && r === 23) return "h24";
  if (a === 0 && r === 11) return "h11";
  if (a === 12 && r === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
const H_ = /* @__PURE__ */ V({
  __name: "AutoFormFieldDate",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = new j_("en-US", {
      dateStyle: "long"
    });
    return (n, a) => (g(), L(l(xa), { name: e.fieldName }, {
      default: b((r) => [
        N(l(Rn), null, {
          default: b(() => [
            e.config?.hideLabel ? ke("", !0) : (g(), L(Vn, {
              key: 0,
              required: e.required
            }, {
              default: b(() => [
                Te(de(e.config?.label || l(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            N(l(Ea), null, {
              default: b(() => [
                H(n.$slots, "default", jt(Ut(r)), () => [
                  me("div", null, [
                    N(l(Ol), null, {
                      default: b(() => [
                        N(l(Cl), {
                          "as-child": "",
                          disabled: l(Vr)(e.config?.inputProps?.disabled) ?? e.disabled
                        }, {
                          default: b(() => [
                            N(l(ht), {
                              variant: "outline",
                              class: Fe(l(re)(
                                "w-full justify-start text-left font-normal",
                                !r.componentField.modelValue && "text-muted-foreground"
                              ))
                            }, {
                              default: b(() => [
                                N(l(Rf), { class: "mr-2 h-4 w-4" }),
                                Te(" " + de(r.componentField.modelValue ? l(t).format(r.componentField.modelValue.toDate(l(B_)())) : "Pick a date"), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["disabled"]),
                        N(l(Sl), { class: "w-auto p-0" }, {
                          default: b(() => [
                            N(l(N_), ne({ "initial-focus": "" }, r.componentField), null, 16)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), L(l(Oa), { key: 1 }, {
              default: b(() => [
                Te(de(e.config.description), 1)
              ]),
              _: 1
            })) : ke("", !0),
            N(l(ta))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), G_ = /* @__PURE__ */ V({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ee(n, "class"), s = wt(r, a);
    return (o, i) => (g(), L(l(rd), ne({
      "data-slot": "radio-group",
      class: l(re)("grid gap-3", n.class)
    }, l(s)), {
      default: b(() => [
        H(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q_ = /* @__PURE__ */ V({
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class"), a = at(n);
    return (r, s) => (g(), L(l(sd), ne({ "data-slot": "radio-group-item" }, l(a), {
      class: l(re)(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t.class
      )
    }), {
      default: b(() => [
        N(l(od), {
          "data-slot": "radio-group-indicator",
          class: "relative flex items-center justify-center"
        }, {
          default: b(() => [
            N(l(Mf), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ei = /* @__PURE__ */ V({
  __name: "AutoFormFieldEnum",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean },
    options: {}
  },
  setup(e) {
    return (t, n) => (g(), L(l(xa), { name: e.fieldName }, {
      default: b((a) => [
        N(l(Rn), null, {
          default: b(() => [
            e.config?.hideLabel ? ke("", !0) : (g(), L(Vn, {
              key: 0,
              required: e.required
            }, {
              default: b(() => [
                Te(de(e.config?.label || l(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            N(l(Ea), null, {
              default: b(() => [
                H(t.$slots, "default", jt(Ut(a)), () => [
                  e.config?.component === "radio" ? (g(), L(l(G_), ne({
                    key: 0,
                    disabled: l(Vr)(e.config?.inputProps?.disabled) ?? e.disabled,
                    orientation: "vertical"
                  }, { ...a.componentField }), {
                    default: b(() => [
                      (g(!0), K(Ue, null, tt(e.options, (r, s) => (g(), K("div", {
                        key: r,
                        class: "mb-2 flex items-center gap-3 space-y-0"
                      }, [
                        N(l(q_), {
                          id: `${r}-${s}`,
                          value: r
                        }, null, 8, ["id", "value"]),
                        N(l(Su), {
                          for: `${r}-${s}`
                        }, {
                          default: b(() => [
                            Te(de(l(ln)(r)), 1)
                          ]),
                          _: 2
                        }, 1032, ["for"])
                      ]))), 128))
                    ]),
                    _: 1
                  }, 16, ["disabled"])) : (g(), L(l(ll), ne({
                    key: 1,
                    disabled: l(Vr)(e.config?.inputProps?.disabled) ?? e.disabled
                  }, { ...a.componentField }), {
                    default: b(() => [
                      N(l(Qf), { class: "w-full" }, {
                        default: b(() => [
                          N(l(dl), {
                            placeholder: e.config?.inputProps?.placeholder
                          }, null, 8, ["placeholder"])
                        ]),
                        _: 1
                      }),
                      N(l(ul), null, {
                        default: b(() => [
                          (g(!0), K(Ue, null, tt(e.options, (r) => (g(), L(l(cl), {
                            key: r,
                            value: r
                          }, {
                            default: b(() => [
                              Te(de(l(ln)(r)), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 16, ["disabled"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), L(l(Oa), { key: 1 }, {
              default: b(() => [
                Te(de(e.config.description), 1)
              ]),
              _: 1
            })) : ke("", !0),
            N(l(ta))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Y_ = {
  key: 1,
  class: "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent pl-3 pr-1 py-1 text-sm shadow-sm transition-colors"
}, K_ = /* @__PURE__ */ V({
  __name: "AutoFormFieldFile",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = pe();
    async function n(a) {
      return new Promise((r, s) => {
        if (a) {
          const o = new FileReader();
          o.onloadend = () => {
            r(o.result);
          }, o.onerror = (i) => {
            s(i);
          }, o.readAsDataURL(a);
        }
      });
    }
    return (a, r) => (g(), L(l(xa), { name: e.fieldName }, {
      default: b((s) => [
        N(l(Rn), jt(Ut(a.$attrs)), {
          default: b(() => [
            e.config?.hideLabel ? ke("", !0) : (g(), L(Vn, {
              key: 0,
              required: e.required
            }, {
              default: b(() => [
                Te(de(e.config?.label || l(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            N(l(Ea), null, {
              default: b(() => [
                H(a.$slots, "default", jt(Ut(s)), () => [
                  t.value ? (g(), K("div", Y_, [
                    me("p", null, de(t.value?.name), 1),
                    N(l(ht), {
                      size: "icon",
                      variant: "ghost",
                      class: "h-[26px] w-[26px]",
                      "aria-label": "Remove file",
                      type: "button",
                      onClick: () => {
                        t.value = void 0, s.componentField.onInput(void 0);
                      }
                    }, {
                      default: b(() => [
                        N(l(il))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (g(), L(l(In), ne({
                    key: 0,
                    type: "file"
                  }, { ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled,
                    onChange: async (o) => {
                      const i = o.target.files?.[0];
                      t.value = i;
                      const u = await n(i);
                      s.componentField.onInput(u);
                    }
                  }), null, 16, ["disabled", "onChange"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), L(l(Oa), { key: 1 }, {
              default: b(() => [
                Te(de(e.config.description), 1)
              ]),
              _: 1
            })) : ke("", !0),
            N(l(ta))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Oi = /* @__PURE__ */ V({
  __name: "AutoFormFieldInput",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Z(() => t.config?.component === "textarea" ? pv : In);
    return (a, r) => (g(), L(l(xa), { name: e.fieldName }, {
      default: b((s) => [
        N(l(Rn), jt(Ut(a.$attrs)), {
          default: b(() => [
            e.config?.hideLabel ? ke("", !0) : (g(), L(Vn, {
              key: 0,
              required: e.required
            }, {
              default: b(() => [
                Te(de(e.config?.label || l(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            N(l(Ea), null, {
              default: b(() => [
                H(a.$slots, "default", jt(Ut(s)), () => [
                  (g(), L(Nt(n.value), ne({ type: "text" }, { ...s.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), L(l(Oa), { key: 1 }, {
              default: b(() => [
                Te(de(e.config.description), 1)
              ]),
              _: 1
            })) : ke("", !0),
            N(l(ta))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), X_ = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "AutoFormFieldNumber",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), L(l(xa), { name: e.fieldName }, {
      default: b((a) => [
        N(l(Rn), null, {
          default: b(() => [
            e.config?.hideLabel ? ke("", !0) : (g(), L(Vn, {
              key: 0,
              required: e.required
            }, {
              default: b(() => [
                Te(de(e.config?.label || l(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            N(l(Ea), null, {
              default: b(() => [
                H(t.$slots, "default", jt(Ut(a)), () => [
                  N(l(In), ne({ type: "number" }, { ...a.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"])
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), L(l(Oa), { key: 1 }, {
              default: b(() => [
                Te(de(e.config.description), 1)
              ]),
              _: 1
            })) : ke("", !0),
            N(l(ta))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), J_ = /* @__PURE__ */ V({
  __name: "AutoFormFieldObject",
  props: {
    fieldName: {},
    required: { type: Boolean },
    config: {},
    schema: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Z(() => {
      const r = {};
      if (!t.schema)
        return;
      const s = _a(t.schema)?.shape;
      if (s)
        return Object.keys(s).forEach((o) => {
          const i = s[o], u = _a(i);
          let c = u && "values" in u._def ? u._def.values : void 0;
          !Array.isArray(c) && typeof c == "object" && (c = Object.values(c)), r[o] = {
            type: oo(i),
            default: Rr(i),
            options: c,
            required: !["ZodOptional", "ZodNullable"].includes(i._def.typeName),
            schema: i
          };
        }), r;
    }), a = so(t.fieldName);
    return ca(ar, a), (r, s) => (g(), K("section", null, [
      H(r.$slots, "default", jt(Ut(t)), () => [
        N(l(Cu), {
          type: "single",
          "as-child": "",
          class: "w-full",
          collapsible: "",
          disabled: e.disabled
        }, {
          default: b(() => [
            N(l(Rn), null, {
              default: b(() => [
                N(l(Nu), {
                  value: e.fieldName,
                  class: "border-none"
                }, {
                  default: b(() => [
                    N(l(Au), null, {
                      default: b(() => [
                        N(Vn, {
                          class: "text-base",
                          required: e.required
                        }, {
                          default: b(() => [
                            Te(de(e.schema?.description || l(ln)(e.fieldName)), 1)
                          ]),
                          _: 1
                        }, 8, ["required"])
                      ]),
                      _: 1
                    }),
                    N(l(Tu), { class: "p-1 space-y-5" }, {
                      default: b(() => [
                        (g(!0), K(Ue, null, tt(n.value, (o, i) => (g(), L(io, {
                          key: i,
                          config: e.config?.[i],
                          "field-name": `${e.fieldName}.${i.toString()}`,
                          label: i.toString(),
                          shape: o
                        }, null, 8, ["config", "field-name", "label", "shape"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Si = {
  date: H_,
  select: Ei,
  radio: Ei,
  checkbox: ki,
  switch: ki,
  textarea: Oi,
  number: X_,
  string: Oi,
  file: K_,
  array: E_,
  object: J_
}, Q_ = {
  ZodString: "string",
  ZodBoolean: "checkbox",
  ZodDate: "date",
  ZodEnum: "select",
  ZodNativeEnum: "select",
  ZodNumber: "number",
  ZodArray: "array",
  ZodObject: "object"
};
var Da = /* @__PURE__ */ ((e) => (e[e.DISABLES = 0] = "DISABLES", e[e.REQUIRES = 1] = "REQUIRES", e[e.HIDES = 2] = "HIDES", e[e.SETS_OPTIONS = 3] = "SETS_OPTIONS", e))(Da || {});
const [eb, tb] = ji("AutoFormDependencies");
function nb(e) {
  const t = l_(), n = e.replace(/\[\d+\]/g, ""), a = i_(e);
  if (!t)
    throw new Error("useDependencies should be used within <AutoForm>");
  const r = eb(), s = pe(!1), o = pe(!1), i = pe(!1), u = pe(), c = Z(() => r.value?.filter(
    (h) => h.targetField === n
  ));
  function d(h) {
    const I = h.sourceField, O = y_(e) ?? -1, [A, ...y] = I.split(".").toReversed(), [w, ...E] = h.targetField.split(".").toReversed();
    if (O >= 0 && y.join(",") === E.join(",")) {
      const [x, ...k] = e.split(".").toReversed();
      return wi(t.value, k.join(".") + A);
    }
    return wi(t.value, I);
  }
  const p = Z(() => c.value?.map((h) => d(h))), m = () => {
    s.value = !1, o.value = !1, i.value = !1, u.value = void 0;
  };
  return Ve([p, r], () => {
    m(), c.value?.forEach((h) => {
      const I = d(h), O = h.when(I, a.value);
      switch (h.type) {
        case Da.DISABLES:
          O && (s.value = !0);
          break;
        case Da.REQUIRES:
          O && (i.value = !0);
          break;
        case Da.HIDES:
          O && (o.value = !0);
          break;
        case Da.SETS_OPTIONS:
          O && (u.value = h.options);
          break;
      }
    });
  }, { immediate: !0, deep: !0 }), {
    isDisabled: s,
    isHidden: o,
    isRequired: i,
    overrideOptions: u
  };
}
const io = /* @__PURE__ */ V({
  __name: "AutoFormField",
  props: {
    fieldName: {},
    shape: {},
    config: {}
  },
  setup(e) {
    const t = e;
    function n(u) {
      return !!u?.component;
    }
    const a = Z(() => {
      if (["ZodObject", "ZodArray"].includes(t.shape?.type))
        return { schema: t.shape?.schema };
    }), { isDisabled: r, isHidden: s, isRequired: o, overrideOptions: i } = nb(t.fieldName);
    return (u, c) => l(s) ? ke("", !0) : (g(), L(Nt(n(e.config) ? typeof e.config.component == "string" ? l(Si)[e.config.component] : e.config.component : l(Si)[l(Q_)[e.shape.type]]), ne({
      key: 0,
      "field-name": e.fieldName,
      label: e.shape.schema?.description,
      required: l(o) || e.shape.required,
      options: l(i) || e.shape.options,
      disabled: l(r),
      config: e.config
    }, a.value), {
      default: b(() => [
        H(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["field-name", "label", "required", "options", "disabled", "config"]));
  }
}), ab = /* @__PURE__ */ V({
  __name: "AutoForm",
  props: {
    schema: {},
    form: {},
    fieldConfig: {},
    dependencies: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, a = t, { dependencies: r } = kr(n);
    tb(r);
    const s = Z(() => {
      const c = {}, p = Iu(n.schema).shape;
      return Object.keys(p).forEach((m) => {
        const h = p[m], I = _a(h);
        let O = I && "values" in I._def ? I._def.values : void 0;
        !Array.isArray(O) && typeof O == "object" && (O = Object.values(O)), c[m] = {
          type: oo(h),
          default: Rr(h),
          options: O,
          required: !["ZodOptional", "ZodNullable"].includes(h._def.typeName),
          schema: I
        };
      }), c;
    }), o = Z(() => {
      const c = {};
      for (const d in s.value) {
        const p = s.value[d];
        c[d] = {
          shape: p,
          config: n.fieldConfig?.[d],
          fieldName: d
        };
      }
      return c;
    }), i = Z(() => n.form ? "form" : t_), u = Z(() => n.form ? {
      onSubmit: n.form.handleSubmit((c) => a("submit", c))
    } : {
      keepValues: !0,
      validationSchema: wu(n.schema),
      onSubmit: (d) => a("submit", d)
    });
    return (c, d) => (g(), L(Nt(i.value), jt(Ut(u.value)), {
      default: b(() => [
        H(c.$slots, "customAutoForm", { fields: o.value }, () => [
          (g(!0), K(Ue, null, tt(s.value, (p, m) => H(c.$slots, m.toString(), {
            key: m,
            shape: p,
            fieldName: m.toString(),
            config: e.fieldConfig?.[m]
          }, () => [
            N(io, {
              config: e.fieldConfig?.[m],
              "field-name": m.toString(),
              shape: p
            }, null, 8, ["config", "field-name", "shape"])
          ])), 128))
        ]),
        H(c.$slots, "default", { shapes: s.value })
      ]),
      _: 3
    }, 16));
  }
}), rb = { class: "mt-1" }, sb = /* @__PURE__ */ V({
  __name: "DynamicAutoFormDialog",
  props: /* @__PURE__ */ dt({
    dialogConfig: {},
    formConfig: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = vt(e, "open"), n = pe(!1);
    async function a(s) {
      n.value = !0;
      try {
        await e.formConfig.onSubmit?.(s) && (t.value = !1);
      } catch {
      }
      n.value = !1;
    }
    const r = yu({
      validationSchema: wu(Co(e.formConfig.schema))
    });
    return e.formConfig.initialValues && r.setValues(Hu(e.formConfig.initialValues)), (s, o) => (g(), L(eo, ne(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": o[1] || (o[1] = (i) => t.value = i)
    }), {
      default: b(() => [
        N(ab, {
          schema: l(Co)(e.formConfig.schema),
          form: l(r),
          "field-config": e.formConfig.fieldConfig,
          class: "flex flex-col gap-3",
          onSubmit: o[0] || (o[0] = (i) => a(i))
        }, {
          default: b(() => [
            me("div", rb, [
              N(ht, {
                type: "submit",
                disabled: n.value
              }, {
                default: b(() => [
                  Te(de(e.dialogConfig.okButtonText || "Submit"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 1
        }, 8, ["schema", "form", "field-config"])
      ]),
      _: 1
    }, 16, ["open"]));
  }
});
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, t.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
const ob = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ib = (e) => typeof e < "u";
function lb(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ci(e, t, n, a = {}) {
  var r, s, o;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: m
  } = a, h = Rt(), I = n || h?.emit || ((r = h?.$emit) == null ? void 0 : r.bind(h)) || ((o = (s = h?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : o.bind(h?.proxy));
  let O = c;
  t || (t = "modelValue"), O = O || `update:${t.toString()}`;
  const A = (E) => i ? typeof i == "function" ? i(E) : lb(E) : E, y = () => ib(e[t]) ? A(e[t]) : p, w = (E) => {
    m ? m(E) && I(O, E) : I(O, E);
  };
  if (u) {
    const E = y(), x = pe(E);
    let k = !1;
    return Ve(
      () => e[t],
      (S) => {
        k || (k = !0, x.value = A(S), Ot(() => k = !1));
      }
    ), Ve(
      x,
      (S) => {
        !k && (S !== e[t] || d) && w(S);
      },
      { deep: d }
    ), x;
  } else
    return Z({
      get() {
        return y();
      },
      set(E) {
        w(E);
      }
    });
}
const [lo, ub] = ji("DrawerRoot"), $u = /* @__PURE__ */ new WeakMap();
function ft(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const a = {};
  Object.entries(t).forEach(([r, s]) => {
    if (r.startsWith("--")) {
      e.style.setProperty(r, s);
      return;
    }
    a[r] = e.style[r], e.style[r] = s;
  }), !n && $u.set(e, a);
}
function cb(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = $u.get(e);
  n && Object.entries(n).forEach(([a, r]) => {
    e.style[a] = r;
  });
}
function hr(e, t) {
  const n = window.getComputedStyle(e), a = n.transform || n.webkitTransform || n.mozTransform;
  let r = a.match(/^matrix3d\((.+)\)$/);
  return r ? Number.parseFloat(r[1].split(", ")[lt(t) ? 13 : 12]) : (r = a.match(/^matrix\((.+)\)$/), r ? Number.parseFloat(r[1].split(", ")[lt(t) ? 5 : 4]) : null);
}
function db(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function lt(e) {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
}
function ds(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function fb(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Je = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Lu = 0.4, mb = 0.25, pb = 100, Ru = 8, gr = 16, Vu = 26, Ti = "vaul-dragging";
function vb({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: n,
  overlayRef: a,
  fadeFromIndex: r,
  onSnapPointChange: s,
  direction: o
}) {
  const i = pe(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  Dn(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Vs(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = Z(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), d = Z(
    () => t.value && t.value.length > 0 && (r?.value || r?.value === 0) && !Number.isNaN(r?.value) && t.value[r?.value ?? -1] === e.value || !t.value
  ), p = Z(
    () => {
      var w;
      return ((w = t.value) == null ? void 0 : w.findIndex((E) => E === e.value)) ?? null;
    }
  ), m = Z(
    () => {
      var w;
      return ((w = t.value) == null ? void 0 : w.map((E) => {
        const x = typeof E == "string";
        let k = 0;
        if (x && (k = Number.parseInt(E, 10)), lt(o.value)) {
          const _ = x ? k : i.value ? E * i.value.innerHeight : 0;
          return i.value ? o.value === "bottom" ? i.value.innerHeight - _ : -i.value.innerHeight + _ : _;
        }
        const S = x ? k : i.value ? E * i.value.innerWidth : 0;
        return i.value ? o.value === "right" ? i.value.innerWidth - S : -i.value.innerWidth + S : S;
      })) ?? [];
    }
  ), h = Z(
    () => {
      var w;
      return p.value !== null ? (w = m.value) == null ? void 0 : w[p.value] : null;
    }
  ), I = (w) => {
    var E, x, k, S;
    const _ = ((E = m.value) == null ? void 0 : E.findIndex((P) => P === w)) ?? null;
    Ot(() => {
      var P;
      s(_, m.value), ft((P = n.value) == null ? void 0 : P.$el, {
        transition: `transform ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`,
        transform: lt(o.value) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
      });
    }), m.value && _ !== m.value.length - 1 && _ !== r?.value ? ft((x = a.value) == null ? void 0 : x.$el, {
      transition: `opacity ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`,
      opacity: "0"
    }) : ft((k = a.value) == null ? void 0 : k.$el, {
      transition: `opacity ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`,
      opacity: "1"
    }), e.value = _ !== null ? ((S = t.value) == null ? void 0 : S[_]) ?? null : null;
  };
  Ve(
    [e, m, t],
    () => {
      var w;
      if (e.value) {
        const E = ((w = t.value) == null ? void 0 : w.findIndex((x) => x === e.value)) ?? -1;
        m.value && E !== -1 && typeof m.value[E] == "number" && I(m.value[E]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function O({
    draggedDistance: w,
    closeDrawer: E,
    velocity: x,
    dismissible: k
  }) {
    var S, _, P;
    if (r.value === void 0)
      return;
    const D = o.value === "bottom" || o.value === "right" ? (h.value ?? 0) - w : (h.value ?? 0) + w, Y = p.value === r.value - 1, Q = p.value === 0, ee = w > 0;
    if (Y && ft((S = a.value) == null ? void 0 : S.$el, {
      transition: `opacity ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`
    }), x > 2 && !ee) {
      k ? E() : I(m.value[0]);
      return;
    }
    if (x > 2 && ee && m && t.value) {
      I(m.value[t.value.length - 1]);
      return;
    }
    const ce = (_ = m.value) == null ? void 0 : _.reduce((te, U) => typeof te != "number" || typeof U != "number" ? te : Math.abs(U - D) < Math.abs(te - D) ? U : te), q = lt(o.value) ? window.innerHeight : window.innerWidth;
    if (x > Lu && Math.abs(w) < q * 0.4) {
      const te = ee ? 1 : -1;
      if (te > 0 && c) {
        I(m.value[(((P = t.value) == null ? void 0 : P.length) ?? 0) - 1]);
        return;
      }
      if (Q && te < 0 && k && E(), p.value === null)
        return;
      I(m.value[p.value + te]);
      return;
    }
    I(ce);
  }
  function A({ draggedDistance: w }) {
    var E;
    if (h.value === null)
      return;
    const x = o.value === "bottom" || o.value === "right" ? h.value - w : h.value + w;
    (o.value === "bottom" || o.value === "right") && x < m.value[m.value.length - 1] || (o.value === "top" || o.value === "left") && x > m.value[m.value.length - 1] || ft((E = n.value) == null ? void 0 : E.$el, {
      transform: lt(o.value) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)`
    });
  }
  function y(w, E) {
    if (!t.value || typeof p.value != "number" || !m.value || r.value === void 0)
      return null;
    const x = p.value === r.value - 1;
    if (p.value >= r.value && E)
      return 0;
    if (x && !E)
      return 1;
    if (!d.value && !x)
      return null;
    const k = x ? p.value + 1 : p.value - 1, S = x ? m.value[k] - m.value[k - 1] : m.value[k + 1] - m.value[k], _ = w / Math.abs(S);
    return x ? 1 - _ : _;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: d,
    getPercentageDragged: y,
    activeSnapPointIndex: p,
    onRelease: O,
    onDrag: A,
    snapPointsOffset: m
  };
}
function Ni() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Ia = null;
function hb(e) {
  const { isOpen: t, modal: n, nested: a, hasBeenOpened: r, preventScrollRestoration: s, noBodyStyles: o } = e, i = pe(typeof window < "u" ? window.location.href : ""), u = pe(0);
  function c() {
    if (Ni() && Ia === null && t.value && !o.value) {
      Ia = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const h = m - window.innerHeight;
          h && u.value >= m && (document.body.style.top = `-${u.value + h}px`);
        });
      }, 300);
    }
  }
  function d() {
    if (Ni() && Ia !== null && !o.value) {
      const p = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ia), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(m, p);
      }), Ia = null;
    }
  }
  return Dn(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Mr(() => {
      window.removeEventListener("scroll", p);
    });
  }), Ve([t, r, i], () => {
    a.value || !r.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), n.value || setTimeout(() => {
      d();
    }, 500)) : d());
  }), { restorePositionSetting: d };
}
function gb(e, t) {
  return e && e.value ? e : t;
}
function yb(e) {
  const {
    emitDrag: t,
    emitRelease: n,
    emitClose: a,
    emitOpenChange: r,
    open: s,
    dismissible: o,
    nested: i,
    modal: u,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    scrollLockTimeout: p,
    closeThreshold: m,
    activeSnapPoint: h,
    fadeFromIndex: I,
    direction: O,
    noBodyStyles: A,
    handleOnly: y,
    preventScrollRestoration: w
  } = e, E = pe(s.value ?? !1), x = pe(!1), k = pe(!1), S = pe(!1), _ = pe(null), P = pe(null), D = pe(null), Y = pe(null), Q = pe(null), ee = pe(!1), ce = pe(null), q = pe(0), te = pe(!1);
  pe(0);
  const U = pe(null);
  pe(0);
  const j = Z(() => {
    var f;
    return ((f = U.value) == null ? void 0 : f.$el.getBoundingClientRect().height) || 0;
  }), W = gb(
    e.snapPoints,
    pe(void 0)
  ), Oe = Z(() => {
    var f;
    return W && (((f = W.value) == null ? void 0 : f.length) ?? 0) > 0;
  }), Re = pe(null), {
    activeSnapPointIndex: rt,
    onRelease: It,
    snapPointsOffset: Ge,
    onDrag: $e,
    shouldFade: Tt,
    getPercentageDragged: oe
  } = vb({
    snapPoints: W,
    activeSnapPoint: h,
    drawerRef: U,
    fadeFromIndex: I,
    overlayRef: _,
    onSnapPointChange: ie,
    direction: O
  });
  function ie(f, v) {
    W.value && f === v.length - 1 && (P.value = /* @__PURE__ */ new Date());
  }
  hb({
    isOpen: E,
    modal: u,
    nested: i,
    hasBeenOpened: x,
    noBodyStyles: A,
    preventScrollRestoration: w
  });
  function Ae() {
    return (window.innerWidth - Vu) / window.innerWidth;
  }
  function Ie(f, v) {
    var R;
    if (!f)
      return !1;
    let G = f;
    const xe = (R = window.getSelection()) == null ? void 0 : R.toString(), Ce = U.value ? hr(U.value.$el, O.value) : null, be = /* @__PURE__ */ new Date();
    if (G.hasAttribute("data-vaul-no-drag") || G.closest("[data-vaul-no-drag]"))
      return !1;
    if (O.value === "right" || O.value === "left")
      return !0;
    if (P.value && be.getTime() - P.value.getTime() < 500)
      return !1;
    if (Ce !== null && (O.value === "bottom" ? Ce > 0 : Ce < 0))
      return !0;
    if (xe && xe.length > 0)
      return !1;
    if (Q.value && be.getTime() - Q.value.getTime() < p.value && Ce === 0 || v)
      return Q.value = be, !1;
    for (; G; ) {
      if (G.scrollHeight > G.clientHeight) {
        if (G.scrollTop !== 0)
          return Q.value = /* @__PURE__ */ new Date(), !1;
        if (G.getAttribute("role") === "dialog")
          return !0;
      }
      G = G.parentNode;
    }
    return !0;
  }
  function Qe(f) {
    !o.value && !W.value || U.value && !U.value.$el.contains(f.target) || (k.value = !0, D.value = /* @__PURE__ */ new Date(), f.target.setPointerCapture(f.pointerId), q.value = lt(O.value) ? f.clientY : f.clientX);
  }
  function st(f) {
    var v, R, G, xe, Ce, be;
    if (U.value && k.value) {
      const $ = O.value === "bottom" || O.value === "right" ? 1 : -1, B = (q.value - (lt(O.value) ? f.clientY : f.clientX)) * $, De = B > 0, We = W.value && !o.value && !De;
      if (We && rt.value === 0)
        return;
      const Mt = Math.abs(B), en = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let C = Mt / j.value;
      const T = oe(Mt, De);
      if (T !== null && (C = T), We && C >= 1 || !ee.value && !Ie(f.target, De))
        return;
      if ((v = U?.value) == null || v.$el.classList.add(Ti), ee.value = !0, ft((R = U.value) == null ? void 0 : R.$el, {
        transition: "none"
      }), ft((G = _.value) == null ? void 0 : G.$el, {
        transition: "none"
      }), W.value && $e({ draggedDistance: B }), De && !W.value) {
        const X = db(B), ve = Math.min(X * -1, 0) * $;
        ft((xe = U.value) == null ? void 0 : xe.$el, {
          transform: lt(O.value) ? `translate3d(0, ${ve}px, 0)` : `translate3d(${ve}px, 0, 0)`
        });
        return;
      }
      const F = 1 - C;
      if ((Tt.value || I.value && rt.value === I.value - 1) && (t(C), ft(
        (Ce = _.value) == null ? void 0 : Ce.$el,
        {
          opacity: `${F}`,
          transition: "none"
        },
        !0
      )), en && _.value && c.value) {
        const X = Math.min(Ae() + C * (1 - Ae()), 1), ve = 8 - C * 8, we = Math.max(0, 14 - C * 14);
        ft(
          en,
          {
            borderRadius: `${ve}px`,
            transform: lt(O.value) ? `scale(${X}) translate3d(0, ${we}px, 0)` : `scale(${X}) translate3d(${we}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!W.value) {
        const X = Mt * $;
        ft((be = U.value) == null ? void 0 : be.$el, {
          transform: lt(O.value) ? `translate3d(0, ${X}px, 0)` : `translate3d(${X}px, 0, 0)`
        });
      }
    }
  }
  function qe() {
    var f;
    if (!U.value)
      return;
    const v = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), R = hr(U.value.$el, O.value);
    ft(U.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`
    }), ft((f = _.value) == null ? void 0 : f.$el, {
      transition: `opacity ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`,
      opacity: "1"
    }), c.value && R && R > 0 && E.value && ft(
      v,
      {
        borderRadius: `${Ru}px`,
        overflow: "hidden",
        ...lt(O.value) ? {
          transform: `scale(${Ae()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Ae()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Je.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Je.EASE.join(",")})`
      },
      !0
    );
  }
  function Vt(f) {
    U.value && (a(), f || (E.value = !1), window.setTimeout(() => {
      W.value && (h.value = W.value[0]);
    }, Je.DURATION * 1e3));
  }
  Qa(() => {
    if (!E.value && c.value && ob) {
      const f = setTimeout(() => {
        cb(document.body);
      }, 200);
      return () => clearTimeout(f);
    }
  }), Ve(s, () => {
    E.value = s.value, s.value || Vt();
  });
  function fn(f) {
    if (!k.value || !U.value)
      return;
    U.value.$el.classList.remove(Ti), ee.value = !1, k.value = !1, Y.value = /* @__PURE__ */ new Date();
    const v = hr(U.value.$el, O.value);
    if (!Ie(f.target, !1) || !v || Number.isNaN(v) || D.value === null)
      return;
    const R = Y.value.getTime() - D.value.getTime(), G = q.value - (lt(O.value) ? f.clientY : f.clientX), xe = Math.abs(G) / R;
    if (xe > 0.05 && (S.value = !0, window.setTimeout(() => {
      S.value = !1;
    }, 200)), W.value) {
      const be = O.value === "bottom" || O.value === "right" ? 1 : -1;
      It({
        draggedDistance: G * be,
        closeDrawer: Vt,
        velocity: xe,
        dismissible: o.value
      }), n(!0);
      return;
    }
    if (O.value === "bottom" || O.value === "right" ? G > 0 : G < 0) {
      qe(), n(!0);
      return;
    }
    if (xe > Lu) {
      Vt(), n(!1);
      return;
    }
    const Ce = Math.min(
      U.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (v >= Ce * m.value) {
      Vt(), n(!1);
      return;
    }
    n(!0), qe();
  }
  Ve(E, (f) => {
    f && (P.value = /* @__PURE__ */ new Date()), r(f);
  }, { immediate: !0 });
  function Gt(f) {
    var v, R;
    const G = f ? (window.innerWidth - gr) / window.innerWidth : 1, xe = f ? -16 : 0;
    ce.value && window.clearTimeout(ce.value), ft((v = U.value) == null ? void 0 : v.$el, {
      transition: `transform ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`,
      transform: `scale(${G}) translate3d(0, ${xe}px, 0)`
    }), !f && (R = U.value) != null && R.$el && (ce.value = window.setTimeout(() => {
      var Ce, be;
      const $ = hr((Ce = U.value) == null ? void 0 : Ce.$el, O.value);
      ft((be = U.value) == null ? void 0 : be.$el, {
        transition: "none",
        transform: lt(O.value) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
      });
    }, 500));
  }
  function qt(f) {
    var v;
    if (f < 0)
      return;
    const R = lt(O.value) ? window.innerHeight : window.innerWidth, G = (R - gr) / R, xe = G + f * (1 - G), Ce = -16 + f * gr;
    ft((v = U.value) == null ? void 0 : v.$el, {
      transform: lt(O.value) ? `scale(${xe}) translate3d(0, ${Ce}px, 0)` : `scale(${xe}) translate3d(${Ce}px, 0, 0)`,
      transition: "none"
    });
  }
  function En(f) {
    var v;
    const R = lt(O.value) ? window.innerHeight : window.innerWidth, G = f ? (R - gr) / R : 1, xe = f ? -16 : 0;
    f && ft((v = U.value) == null ? void 0 : v.$el, {
      transition: `transform ${Je.DURATION}s cubic-bezier(${Je.EASE.join(",")})`,
      transform: lt(O.value) ? `scale(${G}) translate3d(0, ${xe}px, 0)` : `scale(${G}) translate3d(${xe}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: E,
    modal: u,
    keyboardIsOpen: te,
    hasBeenOpened: x,
    drawerRef: U,
    drawerHeightRef: j,
    overlayRef: _,
    handleRef: Re,
    isDragging: k,
    dragStartTime: D,
    isAllowedToDrag: ee,
    snapPoints: W,
    activeSnapPoint: h,
    hasSnapPoints: Oe,
    pointerStart: q,
    dismissible: o,
    snapPointsOffset: Ge,
    direction: O,
    shouldFade: Tt,
    fadeFromIndex: I,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    onPress: Qe,
    onDrag: st,
    onRelease: fn,
    closeDrawer: Vt,
    onNestedDrag: qt,
    onNestedRelease: En,
    onNestedOpenChange: Gt,
    emitClose: a,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: r,
    nested: i,
    handleOnly: y,
    noBodyStyles: A
  };
}
const _b = /* @__PURE__ */ V({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: mb },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: pb },
    fixed: { type: Boolean, default: void 0 },
    dismissible: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: void 0 },
    nested: { type: Boolean, default: !1 },
    direction: { default: "bottom" },
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean, default: !1 },
    preventScrollRestoration: { type: Boolean },
    snapPoints: { default: void 0 },
    fadeFromIndex: { default: void 0 }
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = n;
    Gu();
    const s = Z(() => a.fadeFromIndex ?? (a.snapPoints && a.snapPoints.length - 1)), o = Ci(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = Ci(a, "activeSnapPoint", r, {
      passive: a.activeSnapPoint === void 0
    }), u = {
      emitDrag: (I) => r("drag", I),
      emitRelease: (I) => r("release", I),
      emitClose: () => r("close"),
      emitOpenChange: (I) => {
        r("update:open", I), setTimeout(() => {
          r("animationEnd", I);
        }, Je.DURATION * 1e3);
      }
    }, { closeDrawer: c, hasBeenOpened: d, modal: p, isOpen: m } = ub(
      yb({
        ...u,
        ...kr(a),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: o
      })
    );
    function h(I) {
      if (o.value !== void 0) {
        u.emitOpenChange(I);
        return;
      }
      m.value = I, I ? d.value = !0 : c();
    }
    return t({
      open: m
    }), (I, O) => (g(), L(l(Li), {
      open: l(m),
      modal: l(p),
      "onUpdate:open": h
    }, {
      default: b(() => [
        H(I.$slots, "default", { open: l(m) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), bb = /* @__PURE__ */ V({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: a, shouldFade: r } = lo();
    return (s, o) => (g(), L(l(Mi), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(a) && l(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(a) && l(r) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), wb = () => () => {
};
function kb() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: a, noBodyStyles: r } = lo(), s = pe(null), o = pe(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Vu) / window.innerWidth;
  }
  Qa((u) => {
    if (t.value && n.value) {
      s.value && clearTimeout(s.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      fb(
        a.value && !r.value ? ds(document.body, { background: "black" }) : wb,
        ds(c, {
          transformOrigin: lt(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Je.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Je.EASE.join(",")})`
        })
      );
      const d = ds(c, {
        borderRadius: `${Ru}px`,
        overflow: "hidden",
        ...lt(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        d(), s.value = window.setTimeout(() => {
          o.value ? document.body.style.background = o.value : document.body.style.removeProperty("background");
        }, Je.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const xb = /* @__PURE__ */ V({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: n,
      snapPointsOffset: a,
      hasSnapPoints: r,
      drawerRef: s,
      onPress: o,
      onDrag: i,
      onRelease: u,
      modal: c,
      emitOpenChange: d,
      dismissible: p,
      keyboardIsOpen: m,
      closeDrawer: h,
      direction: I,
      handleOnly: O
    } = lo();
    kb();
    const A = pe(!1), y = Z(() => a.value && a.value.length > 0 ? `${a.value[0]}px` : "0");
    function w(k) {
      if (!c.value || k.defaultPrevented) {
        k.preventDefault();
        return;
      }
      m.value && (m.value = !1), p.value ? d(!1) : k.preventDefault();
    }
    function E(k) {
      O.value || o(k);
    }
    function x(k) {
      O.value || i(k);
    }
    return Qa(() => {
      r.value && window.requestAnimationFrame(() => {
        A.value = !0;
      });
    }), (k, S) => (g(), L(l(Fi), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l(I),
      "data-vaul-delayed-snap-points": A.value ? "true" : "false",
      "data-vaul-snap-points": l(n) && l(r) ? "true" : "false",
      style: Yu({ "--snap-point-height": y.value }),
      onPointerdown: E,
      onPointermove: x,
      onPointerup: l(u),
      onPointerDownOutside: w,
      onOpenAutoFocus: S[0] || (S[0] = qu(() => {
      }, ["prevent"])),
      onEscapeKeyDown: S[1] || (S[1] = (_) => {
        l(p) || _.preventDefault();
      })
    }, {
      default: b(() => [
        H(k.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Eb = /* @__PURE__ */ V({
  __name: "Drawer",
  props: {
    activeSnapPoint: {},
    closeThreshold: {},
    shouldScaleBackground: { type: Boolean, default: !0 },
    setBackgroundColorOnScale: { type: Boolean },
    scrollLockTimeout: {},
    fixed: { type: Boolean },
    dismissible: { type: Boolean },
    modal: { type: Boolean },
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    nested: { type: Boolean },
    direction: {},
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean },
    preventScrollRestoration: { type: Boolean },
    snapPoints: {},
    fadeFromIndex: {}
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(e, { emit: t }) {
    const r = wt(e, t);
    return (s, o) => (g(), L(l(_b), ne({ "data-slot": "drawer" }, l(r)), {
      default: b(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ob = /* @__PURE__ */ V({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(bb), ne({ "data-slot": "drawer-overlay" }, l(n), {
      class: l(re)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), Sb = /* @__PURE__ */ V({
  __name: "DrawerContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = wt(n, t);
    return (s, o) => (g(), L(l(Vi), null, {
      default: b(() => [
        N(Ob),
        N(l(xb), ne({ "data-slot": "drawer-content" }, l(r), {
          class: l(re)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: b(() => [
            o[0] || (o[0] = me("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            H(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Cb = /* @__PURE__ */ V({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Ri), ne({ "data-slot": "drawer-description" }, l(n), {
      class: l(re)("text-muted-foreground text-sm", t.class)
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tb = /* @__PURE__ */ V({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), K("div", {
      "data-slot": "drawer-header",
      class: Fe(l(re)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      H(n.$slots, "default")
    ], 2));
  }
}), Nb = /* @__PURE__ */ V({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ee(t, "class");
    return (a, r) => (g(), L(l(Bi), ne({ "data-slot": "drawer-title" }, l(n), {
      class: l(re)("text-foreground font-semibold", t.class)
    }), {
      default: b(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ab = ["innerHTML"], Ib = { class: "px-4 flex-1 overflow-auto select-text" }, Pb = /* @__PURE__ */ V({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ dt({
    description: {},
    title: {},
    okButtonText: {},
    onOk: { type: Function }
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = vt(e, "open");
    return (n, a) => (g(), L(l(Eb), {
      open: t.value,
      "onUpdate:open": a[1] || (a[1] = (r) => t.value = r),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: b(() => [
        N(l(Sb), { class: "!max-w-[800px]" }, {
          default: b(() => [
            N(l(Tb), { class: "!pb-0" }, {
              default: b(() => [
                N(l(Nb), { class: "flex items-center gap-2" }, {
                  default: b(() => [
                    me("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, Ab),
                    N(ht, {
                      variant: "ghost",
                      onClick: a[0] || (a[0] = (r) => t.value = !1)
                    }, {
                      default: b(() => [
                        N(l(Br))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (g(), L(l(Cb), { key: 0 }, {
                  default: b(() => [
                    Te(de(e.description), 1)
                  ]),
                  _: 1
                })) : ke("", !0)
              ]),
              _: 1
            }),
            me("div", Ib, [
              H(n.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Db = /* @__PURE__ */ V({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ dt({
    dialogConfig: {},
    componentConfig: {},
    type: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = vt(e, "open"), n = pe(!1);
    async function a() {
      n.value = !0, (await e.dialogConfig.onOk?.() ?? !0) && (t.value = !1), n.value = !1;
    }
    return (r, s) => (g(), L(Nt(e.type === "drawer" ? Pb : eo), ne(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": s[0] || (s[0] = (o) => t.value = o)
    }), {
      default: b(() => [
        (g(), L(Nt(e.componentConfig.component), ne(e.componentConfig.componentProps, { onSubmitSuccess: a }), null, 16))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Sa = Al();
function Wb(e, t, n = "dialog") {
  return Sa.open({
    component: Db,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: n
    }
  });
}
function Zb(e, t) {
  return Sa.open({
    component: sb,
    componentProps: {
      formConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e
    }
  });
}
function Hb(e, t = "Achtung", n = "Sind Sie sicher?") {
  return Sa.open({
    component: ny,
    componentProps: {
      title: t,
      description: n,
      onOk: e
    }
  });
}
function Gb({ dialogConfig: e, initialValue: t, onOk: n, component: a, componentProps: r }) {
  return Sa.open({
    component: to,
    componentProps: {
      componentConfig: { component: a, componentProps: r },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    }
  });
}
function qb(e, t, n, a, r) {
  return Sa.open({
    component: to,
    componentProps: {
      componentConfig: { component: zs, componentProps: { multiple: !0, options: t, ...r } },
      initialValue: n,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
function Yb(e, t, n, a, r) {
  return Sa.open({
    component: to,
    componentProps: {
      componentConfig: { component: xv, componentProps: { multiple: !0, options: t, ...r } },
      initialValue: n,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
export {
  ht as Button,
  fl as ButtonSelect,
  Vb as DataTable,
  Mb as DateFormat,
  Ao as DisplayGraduated,
  ny as DynamicAlertDialog,
  sb as DynamicAutoFormDialog,
  Db as DynamicComponentDialog,
  zb as DynamicComponentProvider,
  to as DynamicConfirmComponentDialog,
  eo as DynamicDialog,
  Pb as DynamicDrawer,
  yv as Empty,
  Ub as InputBoolean,
  jb as InputGraduated,
  Bb as InputRange,
  Fb as InputSearch,
  xv as SelectListOptions,
  zs as SelectOptions,
  Rb as Tag,
  Hb as alert,
  Gb as confirmGeneric,
  qb as confirmSelect,
  Yb as confirmSelectList,
  $v as dynamicComponent,
  Zb as openAutoFormDialog,
  Wb as openDynamicDialogComponent,
  Al as useDynamicComponent,
  To as useToggleState
};
