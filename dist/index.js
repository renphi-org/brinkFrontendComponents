import * as Ua from "vue";
import { h as Ft, defineComponent as N, reactive as Ja, inject as ea, computed as Y, unref as l, getCurrentInstance as Wt, watchEffect as la, createBlock as D, openBlock as m, mergeProps as z, withCtx as h, renderSlot as L, watch as Me, getCurrentScope as pr, hasInjectionContext as Ho, toValue as he, isRef as Ca, onMounted as ia, nextTick as ca, readonly as Yo, toRef as mr, ref as re, customRef as gr, toRefs as Za, shallowRef as bt, createVNode as w, createElementVNode as Z, createElementBlock as B, normalizeClass as ee, normalizeStyle as Ko, createTextVNode as pe, withDirectives as Xo, vModelText as vr, normalizeProps as ta, guardReactiveProps as La, Fragment as ye, toDisplayString as te, resolveDynamicComponent as ot, createCommentVNode as ce, renderList as We, useTemplateRef as hr, onUnmounted as qo, Text as br, mergeModels as Ie, useModel as De, resolveDirective as _r, createSlots as yr, triggerRef as Jo, useSlots as wr, withModifiers as Er, onBeforeUnmount as xr, withKeys as kr } from "vue";
import { useForwardPropsEmits as Ce, CollapsibleRoot as Cr, CollapsibleContent as Or, CollapsibleTrigger as Sr, DialogRoot as pn, DialogOverlay as mn, DialogPortal as gn, DialogContent as vn, DialogClose as Zo, DialogDescription as hn, DialogTitle as bn, createContext as _n, Primitive as ua, TooltipRoot as Nr, TooltipPortal as Tr, TooltipContent as Ar, TooltipArrow as Dr, TooltipTrigger as Pr, TooltipProvider as Lr, PaginationRoot as Ir, PaginationList as $r, useForwardProps as Ke, PaginationFirst as Mr, PaginationLast as Rr, PaginationNext as Br, PaginationPrev as Vr, SelectRoot as Fr, SelectPortal as Ur, SelectContent as zr, SelectViewport as Wr, SelectItem as jr, SelectItemIndicator as Gr, SelectItemText as Hr, SelectScrollDownButton as Yr, SelectScrollUpButton as Kr, SelectValue as Xr, DropdownMenuSeparator as qr, SelectTrigger as Jr, CheckboxRoot as Zr, CheckboxIndicator as Qr, DropdownMenuRoot as el, DropdownMenuCheckboxItem as tl, DropdownMenuItemIndicator as al, DropdownMenuPortal as nl, DropdownMenuContent as ol, DropdownMenuItem as sl, DropdownMenuLabel as rl, DropdownMenuTrigger as ll, useFilter as il, ListboxRoot as cl, ListboxFilter as ul, ListboxContent as dl, ListboxItem as fl, ListboxItemIndicator as pl, AlertDialogRoot as ml, AlertDialogAction as gl, AlertDialogCancel as vl, AlertDialogPortal as hl, AlertDialogOverlay as bl, AlertDialogContent as _l, AlertDialogDescription as yl, AlertDialogTitle as wl, PopoverRoot as El, PopoverPortal as xl, PopoverContent as kl, PopoverTrigger as Cl } from "reka-ui";
const Bn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ol = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), Sl = (e) => {
  const t = Ol(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nl = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), Vn = (e) => e === "";
var qt = {
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
const Tl = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": n,
  strokeWidth: o,
  "stroke-width": s,
  size: r = qt.width,
  color: i = qt.stroke,
  ...c
}, { slots: d }) => Ft(
  "svg",
  {
    ...qt,
    ...c,
    width: r,
    height: r,
    stroke: i,
    "stroke-width": Vn(a) || Vn(n) || a === !0 || n === !0 ? Number(o || s || qt["stroke-width"]) * 24 / Number(r) : o || s || qt["stroke-width"],
    class: Nl(
      "lucide",
      c.class,
      ...e ? [`lucide-${Bn(Sl(e))}-icon`, `lucide-${Bn(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((v) => Ft(...v)), ...d.default ? [d.default()] : []]
);
const Se = (e, t) => (a, { slots: n, attrs: o }) => Ft(
  Tl,
  {
    ...o,
    ...a,
    iconNode: t,
    name: e
  },
  n
);
const Fn = Se("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const Al = Se("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const Un = Se("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const Ia = Se("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const $a = Se("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Qo = Se("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const da = Se("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Dl = Se("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const es = Se("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const ts = Se("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const Pl = Se("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const Ll = Se("eye-off", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const as = Se("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Il = Se("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const yn = Se("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const $l = Se("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Ml = Se("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Rl = Se("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const Bl = Se("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const fa = Se("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Vl = typeof document < "u", Fl = () => {
}, Sa = Array.isArray;
function zn(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function Wn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ul(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const a in e) if (!zl(e[a], t[a])) return !1;
  return !0;
}
function zl(e, t) {
  return Sa(e) ? jn(e, t) : Sa(t) ? jn(t, e) : e === t;
}
function jn(e, t) {
  return Sa(t) ? e.length === t.length && e.every((a, n) => a === t[n]) : e.length === 1 && e[0] === t;
}
function Gn(e) {
  return typeof e == "string" || e && typeof e == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const ns = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Wl = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Hn(e) {
  const t = ea(ns), a = ea(Wl);
  let n = !1, o = null;
  const s = Y(() => {
    const v = l(e.to);
    return process.env.NODE_ENV !== "production" && (!n || v !== o) && (Gn(v) || (n ? zn(`Invalid value for prop "to" in useLink()
- to:`, v, `
- previous to:`, o, `
- props:`, e) : zn(`Invalid value for prop "to" in useLink()
- to:`, v, `
- props:`, e)), o = v, n = !0), t.resolve(v);
  }), r = Y(() => {
    const { matched: v } = s.value, { length: g } = v, p = v[g - 1], O = a.matched;
    if (!p || !O.length) return -1;
    const I = O.findIndex(Wn.bind(null, p));
    if (I > -1) return I;
    const x = Yn(v[g - 2]);
    return g > 1 && Yn(p) === x && O[O.length - 1].path !== x ? O.findIndex(Wn.bind(null, v[g - 2])) : I;
  }), i = Y(() => r.value > -1 && Yl(a.params, s.value.params)), c = Y(() => r.value > -1 && r.value === a.matched.length - 1 && Ul(a.params, s.value.params));
  function d(v = {}) {
    if (Hl(v)) {
      const g = t[l(e.replace) ? "replace" : "push"](l(e.to)).catch(Fl);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => g), g;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Vl) {
    const v = Wt();
    if (v) {
      const g = {
        route: s.value,
        isActive: i.value,
        isExactActive: c.value,
        error: null
      };
      v.__vrl_devtools = v.__vrl_devtools || [], v.__vrl_devtools.push(g), la(() => {
        g.route = s.value, g.isActive = i.value, g.isExactActive = c.value, g.error = Gn(l(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Y(() => s.value.href),
    isActive: i,
    isExactActive: c,
    navigate: d
  };
}
function jl(e) {
  return e.length === 1 ? e[0] : e;
}
const Gl = /* @__PURE__ */ N({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: Hn,
  setup(e, { slots: t }) {
    const a = Ja(Hn(e)), { options: n } = ea(ns), o = Y(() => ({
      [Kn(e.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
      [Kn(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const s = t.default && jl(t.default(a));
      return e.custom ? s : Ft("a", {
        "aria-current": a.isExactActive ? e.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: o.value
      }, s);
    };
  }
}), za = Gl;
function Hl(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Yl(e, t) {
  for (const a in t) {
    const n = t[a], o = e[a];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Sa(o) || o.length !== n.length || n.some((s, r) => s !== o[r])) return !1;
  }
  return !0;
}
function Yn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Kn = (e, t, a) => e ?? t ?? a, Kl = /* @__PURE__ */ N({
  __name: "Collapsible",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(Cr), z({ "data-slot": "collapsible" }, l(o)), {
      default: h(({ open: i }) => [
        L(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Xl = /* @__PURE__ */ N({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Or), z({ "data-slot": "collapsible-content" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ql = /* @__PURE__ */ N({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Sr), z({ "data-slot": "collapsible-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function os(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = os(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function ss() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = os(e)) && (n && (n += " "), n += t);
  return n;
}
const Xn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qn = ss, jt = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return qn(e, a?.class, a?.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((d) => {
    const v = a?.[d], g = s?.[d];
    if (v === null) return null;
    const p = Xn(v) || Xn(g);
    return o[d][p];
  }), i = a && Object.entries(a).reduce((d, v) => {
    let [g, p] = v;
    return p === void 0 || (d[g] = p), d;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, v) => {
    let { class: g, className: p, ...O } = v;
    return Object.entries(O).every((I) => {
      let [x, P] = I;
      return Array.isArray(P) ? P.includes({
        ...s,
        ...i
      }[x]) : {
        ...s,
        ...i
      }[x] === P;
    }) ? [
      ...d,
      g,
      p
    ] : d;
  }, []);
  return qn(e, r, c, a?.class, a?.className);
}, Jl = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    a[n] = e[n];
  for (let n = 0; n < t.length; n++)
    a[e.length + n] = t[n];
  return a;
}, Zl = (e, t) => ({
  classGroupId: e,
  validator: t
}), rs = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), Na = "-", Jn = [], Ql = "arbitrary..", ei = (e) => {
  const t = ai(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      if (r.startsWith("[") && r.endsWith("]"))
        return ti(r);
      const i = r.split(Na), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return ls(i, c, t);
    },
    getConflictingClassGroupIds: (r, i) => {
      if (i) {
        const c = n[r], d = a[r];
        return c ? d ? Jl(d, c) : c : d || Jn;
      }
      return a[r] || Jn;
    }
  };
}, ls = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const o = e[t], s = a.nextPart.get(o);
  if (s) {
    const d = ls(e, t + 1, s);
    if (d) return d;
  }
  const r = a.validators;
  if (r === null)
    return;
  const i = t === 0 ? e.join(Na) : e.slice(t).join(Na), c = r.length;
  for (let d = 0; d < c; d++) {
    const v = r[d];
    if (v.validator(i))
      return v.classGroupId;
  }
}, ti = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), n = t.slice(0, a);
  return n ? Ql + n : void 0;
})(), ai = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return ni(a, t);
}, ni = (e, t) => {
  const a = rs();
  for (const n in e) {
    const o = e[n];
    wn(o, a, n, t);
  }
  return a;
}, wn = (e, t, a, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const r = e[s];
    oi(r, t, a, n);
  }
}, oi = (e, t, a, n) => {
  if (typeof e == "string") {
    si(e, t, a);
    return;
  }
  if (typeof e == "function") {
    ri(e, t, a, n);
    return;
  }
  li(e, t, a, n);
}, si = (e, t, a) => {
  const n = e === "" ? t : is(t, e);
  n.classGroupId = a;
}, ri = (e, t, a, n) => {
  if (ii(e)) {
    wn(e(n), t, a, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Zl(a, e));
}, li = (e, t, a, n) => {
  const o = Object.entries(e), s = o.length;
  for (let r = 0; r < s; r++) {
    const [i, c] = o[r];
    wn(c, is(t, i), a, n);
  }
}, is = (e, t) => {
  let a = e;
  const n = t.split(Na), o = n.length;
  for (let s = 0; s < o; s++) {
    const r = n[s];
    let i = a.nextPart.get(r);
    i || (i = rs(), a.nextPart.set(r, i)), a = i;
  }
  return a;
}, ii = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ci = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (s, r) => {
    a[s] = r, t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let r = a[s];
      if (r !== void 0)
        return r;
      if ((r = n[s]) !== void 0)
        return o(s, r), r;
    },
    set(s, r) {
      s in a ? a[s] = r : o(s, r);
    }
  };
}, Qa = "!", Zn = ":", ui = [], Qn = (e, t, a, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: n,
  isExternal: o
}), di = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (o) => {
    const s = [];
    let r = 0, i = 0, c = 0, d;
    const v = o.length;
    for (let x = 0; x < v; x++) {
      const P = o[x];
      if (r === 0 && i === 0) {
        if (P === Zn) {
          s.push(o.slice(c, x)), c = x + 1;
          continue;
        }
        if (P === "/") {
          d = x;
          continue;
        }
      }
      P === "[" ? r++ : P === "]" ? r-- : P === "(" ? i++ : P === ")" && i--;
    }
    const g = s.length === 0 ? o : o.slice(c);
    let p = g, O = !1;
    g.endsWith(Qa) ? (p = g.slice(0, -1), O = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      g.startsWith(Qa) && (p = g.slice(1), O = !0)
    );
    const I = d && d > c ? d - c : void 0;
    return Qn(s, O, p, I);
  };
  if (t) {
    const o = t + Zn, s = n;
    n = (r) => r.startsWith(o) ? s(r.slice(o.length)) : Qn(ui, !1, r, void 0, !0);
  }
  if (a) {
    const o = n;
    n = (s) => a({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, fi = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((a, n) => {
    t.set(a, 1e6 + n);
  }), (a) => {
    const n = [];
    let o = [];
    for (let s = 0; s < a.length; s++) {
      const r = a[s], i = r[0] === "[", c = t.has(r);
      i || c ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(r)) : o.push(r);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, pi = (e) => ({
  cache: ci(e.cacheSize),
  parseClassName: di(e),
  sortModifiers: fi(e),
  ...ei(e)
}), mi = /\s+/, gi = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, r = [], i = e.trim().split(mi);
  let c = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const v = i[d], {
      isExternal: g,
      modifiers: p,
      hasImportantModifier: O,
      baseClassName: I,
      maybePostfixModifierPosition: x
    } = a(v);
    if (g) {
      c = v + (c.length > 0 ? " " + c : c);
      continue;
    }
    let P = !!x, _ = n(P ? I.substring(0, x) : I);
    if (!_) {
      if (!P) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (_ = n(I), !_) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      P = !1;
    }
    const b = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), E = O ? b + Qa : b, y = E + _;
    if (r.indexOf(y) > -1)
      continue;
    r.push(y);
    const T = o(_, P);
    for (let A = 0; A < T.length; ++A) {
      const k = T[A];
      r.push(E + k);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
}, vi = (...e) => {
  let t = 0, a, n, o = "";
  for (; t < e.length; )
    (a = e[t++]) && (n = cs(a)) && (o && (o += " "), o += n);
  return o;
}, cs = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = cs(e[n])) && (a && (a += " "), a += t);
  return a;
}, hi = (e, ...t) => {
  let a, n, o, s;
  const r = (c) => {
    const d = t.reduce((v, g) => g(v), e());
    return a = pi(d), n = a.cache.get, o = a.cache.set, s = i, i(c);
  }, i = (c) => {
    const d = n(c);
    if (d)
      return d;
    const v = gi(c, a);
    return o(c, v), v;
  };
  return s = r, (...c) => s(vi(...c));
}, bi = [], Te = (e) => {
  const t = (a) => a[e] || bi;
  return t.isThemeGetter = !0, t;
}, us = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ds = /^\((?:(\w[\w-]*):)?(.+)\)$/i, _i = /^\d+\/\d+$/, yi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ei = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, xi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ki = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Bt = (e) => _i.test(e), oe = (e) => !!e && !Number.isNaN(Number(e)), Et = (e) => !!e && Number.isInteger(Number(e)), Wa = (e) => e.endsWith("%") && oe(e.slice(0, -1)), gt = (e) => yi.test(e), Ci = () => !0, Oi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wi.test(e) && !Ei.test(e)
), fs = () => !1, Si = (e) => xi.test(e), Ni = (e) => ki.test(e), Ti = (e) => !W(e) && !j(e), Ai = (e) => Gt(e, gs, fs), W = (e) => us.test(e), At = (e) => Gt(e, vs, Oi), ja = (e) => Gt(e, $i, oe), eo = (e) => Gt(e, ps, fs), Di = (e) => Gt(e, ms, Ni), ga = (e) => Gt(e, hs, Si), j = (e) => ds.test(e), Jt = (e) => Ht(e, vs), Pi = (e) => Ht(e, Mi), to = (e) => Ht(e, ps), Li = (e) => Ht(e, gs), Ii = (e) => Ht(e, ms), va = (e) => Ht(e, hs, !0), Gt = (e, t, a) => {
  const n = us.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, Ht = (e, t, a = !1) => {
  const n = ds.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, ps = (e) => e === "position" || e === "percentage", ms = (e) => e === "image" || e === "url", gs = (e) => e === "length" || e === "size" || e === "bg-size", vs = (e) => e === "length", $i = (e) => e === "number", Mi = (e) => e === "family-name", hs = (e) => e === "shadow", Ri = () => {
  const e = Te("color"), t = Te("font"), a = Te("text"), n = Te("font-weight"), o = Te("tracking"), s = Te("leading"), r = Te("breakpoint"), i = Te("container"), c = Te("spacing"), d = Te("radius"), v = Te("shadow"), g = Te("inset-shadow"), p = Te("text-shadow"), O = Te("drop-shadow"), I = Te("blur"), x = Te("perspective"), P = Te("aspect"), _ = Te("ease"), b = Te("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], T = () => [...y(), j, W], A = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], M = () => [j, W, c], X = () => [Bt, "full", "auto", ...M()], K = () => [Et, "none", "subgrid", j, W], le = () => ["auto", {
    span: ["full", Et, j, W]
  }, Et, j, W], G = () => [Et, "auto", j, W], we = () => ["auto", "min", "max", "fr", j, W], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...M()], Ve = () => [Bt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], U = () => [e, j, W], wt = () => [...y(), to, eo, {
    position: [j, W]
  }], Fe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Xe = () => ["auto", "cover", "contain", Li, Ai, {
    size: [j, W]
  }], ft = () => [Wa, Jt, At], Ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    j,
    W
  ], Ne = () => ["", oe, Jt, At], qe = () => ["solid", "dashed", "dotted", "double"], Ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ge = () => [oe, Wa, to, eo], He = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    I,
    j,
    W
  ], Je = () => ["none", oe, j, W], Ze = () => ["none", oe, j, W], pt = () => [oe, j, W], Qe = () => [Bt, "full", ...M()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [gt],
      breakpoint: [gt],
      color: [Ci],
      container: [gt],
      "drop-shadow": [gt],
      ease: ["in", "out", "in-out"],
      font: [Ti],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [gt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [gt],
      shadow: [gt],
      spacing: ["px", oe],
      text: [gt],
      "text-shadow": [gt],
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
        aspect: ["auto", "square", Bt, W, j, P]
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
        columns: [oe, W, j, i]
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
        object: T()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        inset: X()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": X()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": X()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: X()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: X()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: X()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: X()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: X()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: X()
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
        z: [Et, "auto", j, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Bt, "full", "auto", i, ...M()]
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
        flex: [oe, Bt, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", oe, j, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", oe, j, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Et, "first", "last", "none", j, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": K()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: le()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": K()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: le()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": we()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": we()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: M()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": M()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": M()
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
        "justify-items": [...ne(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ne()]
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
        items: [...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), {
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
        "place-items": [...ne(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ne()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: M()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: M()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: M()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: M()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: M()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: M()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: M()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: M()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: M()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": M()
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
        "space-y": M()
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
        size: Ve()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...Ve()]
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
          ...Ve()
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
            screen: [r]
          },
          ...Ve()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Ve()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Ve()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Ve()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, Jt, At]
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
        font: [n, j, ja]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wa, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Pi, W, t]
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
        tracking: [o, j, W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [oe, "none", j, ja]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...M()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", j, W]
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
        list: ["disc", "decimal", "none", j, W]
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
        placeholder: U()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: U()
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
        decoration: [...qe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [oe, "from-font", "auto", j, At]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: U()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [oe, "auto", j, W]
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
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j, W]
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
        content: ["none", j, W]
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
        bg: wt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Fe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Xe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Et, j, W],
          radial: ["", j, W],
          conic: [Et, j, W]
        }, Ii, Di]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: U()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ft()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ft()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ft()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: U()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: U()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: U()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Ee()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Ee()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Ee()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Ee()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Ee()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Ee()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Ee()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Ee()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Ee()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Ee()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Ee()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Ee()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Ee()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Ee()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Ee()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Ne()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Ne()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Ne()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Ne()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Ne()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Ne()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Ne()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Ne()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Ne()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Ne()
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
        "divide-y": Ne()
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
        border: [...qe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...qe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: U()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": U()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": U()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": U()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": U()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": U()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": U()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": U()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": U()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: U()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...qe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [oe, j, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", oe, Jt, At]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: U()
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
          v,
          va,
          ga
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: U()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", g, va, ga]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": U()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Ne()
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
        ring: U()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [oe, At]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": U()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Ne()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": U()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, va, ga]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": U()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [oe, j, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ot(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ot()
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
        "mask-linear": [oe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ge()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ge()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": U()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ge()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ge()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": U()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ge()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ge()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": U()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ge()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ge()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": U()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ge()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ge()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": U()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ge()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ge()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": U()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ge()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ge()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": U()
      }],
      "mask-image-radial": [{
        "mask-radial": [j, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ge()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ge()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": U()
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
        "mask-radial-at": y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [oe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ge()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ge()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": U()
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
        mask: wt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Fe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Xe()
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
        mask: ["none", j, W]
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
          j,
          W
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: He()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [oe, j, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [oe, j, W]
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
          O,
          va,
          ga
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": U()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", oe, j, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [oe, j, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", oe, j, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [oe, j, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", oe, j, W]
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
          j,
          W
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": He()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [oe, j, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [oe, j, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", oe, j, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [oe, j, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", oe, j, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [oe, j, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [oe, j, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", oe, j, W]
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
        "border-spacing": M()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": M()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": M()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", j, W]
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
        duration: [oe, "initial", j, W]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, j, W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [oe, j, W]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, j, W]
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
        perspective: [x, j, W]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": T()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Je()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Je()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Je()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Je()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Ze()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ze()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ze()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ze()
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
        skew: pt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [j, W, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: T()
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
        translate: Qe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Qe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Qe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Qe()
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
        accent: U()
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
        caret: U()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j, W]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", j, W]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...U()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [oe, Jt, At, ja]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...U()]
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
}, Bi = /* @__PURE__ */ hi(Ri);
function V(...e) {
  return Bi(ss(e));
}
const Vi = /* @__PURE__ */ N({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(pn), z({ "data-slot": "sheet" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ga = /* @__PURE__ */ new WeakMap(), Fi = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], n = (t = Wt()) === null || t === void 0 ? void 0 : t.proxy, o = n ?? pr();
  if (o == null && !Ho()) throw new Error("injectLocal must be called in setup");
  return o && Ga.has(o) && a in Ga.get(o) ? Ga.get(o)[a] : ea(...e);
}, bs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ui = (e) => typeof e < "u", zi = Object.prototype.toString, Wi = (e) => zi.call(e) === "[object Object]", ji = () => {
};
function Gi(...e) {
  if (e.length !== 1) return mr(...e);
  const t = e[0];
  return typeof t == "function" ? Yo(gr(() => ({
    get: t,
    set: ji
  }))) : re(t);
}
function Hi(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), {
        fn: t,
        thisArg: this,
        args: n
      })).then(o).catch(s);
    });
  }
  return a;
}
const _s = (e) => e();
function Yi(e = _s, t = {}) {
  const { initialState: a = "active" } = t, n = Gi(a === "active");
  function o() {
    n.value = !1;
  }
  function s() {
    n.value = !0;
  }
  const r = (...i) => {
    n.value && e(...i);
  };
  return {
    isActive: Yo(n),
    pause: o,
    resume: s,
    eventFilter: r
  };
}
function ao(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Ha(e) {
  return Array.isArray(e) ? e : [e];
}
function Ki(e) {
  return Wt();
}
function Xi(e) {
  return Ca(e) ? Ja(new Proxy({}, {
    get(t, a, n) {
      return l(Reflect.get(e.value, a, n));
    },
    set(t, a, n) {
      return Ca(e.value[a]) && !Ca(n) ? e.value[a].value = n : e.value[a] = n, !0;
    },
    deleteProperty(t, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(t, a) {
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
  })) : Ja(e);
}
function qi(e) {
  return Xi(Y(e));
}
function ue(e, ...t) {
  const a = t.flat(), n = a[0];
  return qi(() => Object.fromEntries(typeof n == "function" ? Object.entries(Za(e)).filter(([o, s]) => !n(he(s), o)) : Object.entries(Za(e)).filter((o) => !a.includes(o[0]))));
}
function Ji(e, t, a = {}) {
  const { eventFilter: n = _s, ...o } = a;
  return Me(e, Hi(n, t), o);
}
function Zi(e, t, a = {}) {
  const { eventFilter: n, initialState: o = "active", ...s } = a, { eventFilter: r, pause: i, resume: c, isActive: d } = Yi(n, { initialState: o });
  return {
    stop: Ji(e, t, {
      ...s,
      eventFilter: r
    }),
    pause: i,
    resume: c,
    isActive: d
  };
}
const Qi = Zi;
function ec(e, t = !0, a) {
  Ki() ? ia(e, a) : t ? e() : ca(e);
}
const tc = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, ac = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function nc(e, t, a, n) {
  let o = e < 12 ? "AM" : "PM";
  return n && (o = o.split("").reduce((s, r) => s += `${r}.`, "")), a ? o.toLowerCase() : o;
}
function Dt(e) {
  const t = [
    "th",
    "st",
    "nd",
    "rd"
  ], a = e % 100;
  return e + (t[(a - 20) % 10] || t[a] || t[0]);
}
function oc(e, t, a = {}) {
  var n;
  const o = e.getFullYear(), s = e.getMonth(), r = e.getDate(), i = e.getHours(), c = e.getMinutes(), d = e.getSeconds(), v = e.getMilliseconds(), g = e.getDay(), p = (n = a.customMeridiem) !== null && n !== void 0 ? n : nc, O = (x) => {
    var P;
    return (P = x.split(" ")[1]) !== null && P !== void 0 ? P : "";
  }, I = {
    Yo: () => Dt(o),
    YY: () => String(o).slice(-2),
    YYYY: () => o,
    M: () => s + 1,
    Mo: () => Dt(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(he(a.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(he(a.locales), { month: "long" }),
    D: () => String(r),
    Do: () => Dt(r),
    DD: () => `${r}`.padStart(2, "0"),
    H: () => String(i),
    Ho: () => Dt(i),
    HH: () => `${i}`.padStart(2, "0"),
    h: () => `${i % 12 || 12}`.padStart(1, "0"),
    ho: () => Dt(i % 12 || 12),
    hh: () => `${i % 12 || 12}`.padStart(2, "0"),
    m: () => String(c),
    mo: () => Dt(c),
    mm: () => `${c}`.padStart(2, "0"),
    s: () => String(d),
    so: () => Dt(d),
    ss: () => `${d}`.padStart(2, "0"),
    SSS: () => `${v}`.padStart(3, "0"),
    d: () => g,
    dd: () => e.toLocaleDateString(he(a.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(he(a.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(he(a.locales), { weekday: "long" }),
    A: () => p(i, c),
    AA: () => p(i, c, !1, !0),
    a: () => p(i, c, !0),
    aa: () => p(i, c, !0, !0),
    z: () => O(e.toLocaleDateString(he(a.locales), { timeZoneName: "shortOffset" })),
    zz: () => O(e.toLocaleDateString(he(a.locales), { timeZoneName: "shortOffset" })),
    zzz: () => O(e.toLocaleDateString(he(a.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => O(e.toLocaleDateString(he(a.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(ac, (x, P) => {
    var _, b;
    return (_ = P ?? ((b = I[x]) === null || b === void 0 ? void 0 : b.call(I))) !== null && _ !== void 0 ? _ : x;
  });
}
function sc(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(tc);
    if (t) {
      const a = t[2] - 1 || 0, n = (t[7] || "0").substring(0, 3);
      return new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, n);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function rc(e, t = "HH:mm:ss", a = {}) {
  return Y(() => oc(sc(he(e)), he(t), a));
}
function lc(e, t, a) {
  return Me(e, t, {
    ...a,
    immediate: !0
  });
}
const Pt = bs ? window : void 0, ys = bs ? window.document : void 0;
function ic(e) {
  var t;
  const a = he(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function $t(...e) {
  const t = (n, o, s, r) => (n.addEventListener(o, s, r), () => n.removeEventListener(o, s, r)), a = Y(() => {
    const n = Ha(he(e[0])).filter((o) => o != null);
    return n.every((o) => typeof o != "string") ? n : void 0;
  });
  return lc(() => {
    var n, o;
    return [
      (n = (o = a.value) === null || o === void 0 ? void 0 : o.map((s) => ic(s))) !== null && n !== void 0 ? n : [Pt].filter((s) => s != null),
      Ha(he(a.value ? e[1] : e[0])),
      Ha(l(a.value ? e[2] : e[1])),
      he(a.value ? e[3] : e[2])
    ];
  }, ([n, o, s, r], i, c) => {
    if (!n?.length || !o?.length || !s?.length) return;
    const d = Wi(r) ? { ...r } : r, v = n.flatMap((g) => o.flatMap((p) => s.map((O) => t(g, p, O, d))));
    c(() => {
      v.forEach((g) => g());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function cc() {
  const e = bt(!1), t = Wt();
  return t && ia(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function uc(e) {
  const t = /* @__PURE__ */ cc();
  return Y(() => (t.value, !!e()));
}
const dc = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function fc() {
  const e = Ho() ? /* @__PURE__ */ Fi(dc, null) : null;
  return typeof e == "number" ? e : void 0;
}
function pc(e, t = {}) {
  const { window: a = Pt, ssrWidth: n = /* @__PURE__ */ fc() } = t, o = /* @__PURE__ */ uc(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = bt(typeof n == "number"), r = bt(), i = bt(!1), c = (d) => {
    i.value = d.matches;
  };
  return la(() => {
    if (s.value) {
      s.value = !o.value, i.value = he(e).split(",").some((d) => {
        const v = d.includes("not all"), g = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), p = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let O = !!(g || p);
        return g && O && (O = n >= ao(g[1])), p && O && (O = n <= ao(p[1])), v ? !O : O;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(he(e)), i.value = r.value.matches);
  }), $t(r, "change", c, { passive: !0 }), Y(() => i.value);
}
function mc(e) {
  return JSON.parse(JSON.stringify(e));
}
const ha = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ba = "__vueuse_ssr_handlers__", gc = /* @__PURE__ */ vc();
function vc() {
  return ba in ha || (ha[ba] = ha[ba] || {}), ha[ba];
}
function hc(e, t) {
  return gc[e] || t;
}
function bc(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const _c = {
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
}, no = "vueuse-storage";
function yc(e, t, a, n = {}) {
  var o;
  const { flush: s = "pre", deep: r = !0, listenToStorageChanges: i = !0, writeDefaults: c = !0, mergeDefaults: d = !1, shallow: v, window: g = Pt, eventFilter: p, onError: O = (q) => {
    console.error(q);
  }, initOnMounted: I } = n, x = (v ? bt : re)(typeof t == "function" ? t() : t), P = Y(() => he(e));
  if (!a) try {
    a = hc("getDefaultStorage", () => Pt?.localStorage)();
  } catch (q) {
    O(q);
  }
  if (!a) return x;
  const _ = he(t), b = bc(_), E = (o = n.serializer) !== null && o !== void 0 ? o : _c[b], { pause: y, resume: T } = Qi(x, (q) => K(q), {
    flush: s,
    deep: r,
    eventFilter: p
  });
  Me(P, () => G(), { flush: s });
  let A = !1;
  const k = (q) => {
    I && !A || G(q);
  }, M = (q) => {
    I && !A || we(q);
  };
  g && i && (a instanceof Storage ? $t(g, "storage", k, { passive: !0 }) : $t(g, no, M)), I ? ec(() => {
    A = !0, G();
  }) : G();
  function X(q, ne) {
    if (g) {
      const H = {
        key: P.value,
        oldValue: q,
        newValue: ne,
        storageArea: a
      };
      g.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", H) : new CustomEvent(no, { detail: H }));
    }
  }
  function K(q) {
    try {
      const ne = a.getItem(P.value);
      if (q == null)
        X(ne, null), a.removeItem(P.value);
      else {
        const H = E.write(q);
        ne !== H && (a.setItem(P.value, H), X(ne, H));
      }
    } catch (ne) {
      O(ne);
    }
  }
  function le(q) {
    const ne = q ? q.newValue : a.getItem(P.value);
    if (ne == null)
      return c && _ != null && a.setItem(P.value, E.write(_)), _;
    if (!q && d) {
      const H = E.read(ne);
      return typeof d == "function" ? d(H, _) : b === "object" && !Array.isArray(H) ? {
        ..._,
        ...H
      } : H;
    } else return typeof ne != "string" ? ne : E.read(ne);
  }
  function G(q) {
    if (!(q && q.storageArea !== a)) {
      if (q && q.key == null) {
        x.value = _;
        return;
      }
      if (!(q && q.key !== P.value)) {
        y();
        try {
          const ne = E.write(x.value);
          (q === void 0 || q?.newValue !== ne) && (x.value = le(q));
        } catch (ne) {
          O(ne);
        } finally {
          q ? ca(T) : T();
        }
      }
    }
  }
  function we(q) {
    G(q.detail);
  }
  return x;
}
const wc = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Ec(e, t = {}) {
  const { events: a = wc, document: n = ys, initial: o = null } = t, s = bt(o);
  return n && a.forEach((r) => {
    $t(n, r, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function xc(e, t, a = {}) {
  const { window: n = Pt } = a;
  return yc(e, t, n?.sessionStorage, a);
}
// @__NO_SIDE_EFFECTS__
function ws(e, t, a, n = {}) {
  var o, s;
  const { clone: r = !1, passive: i = !1, eventName: c, deep: d = !1, defaultValue: v, shouldEmit: g } = n, p = Wt(), O = a || p?.emit || (p == null || (o = p.$emit) === null || o === void 0 ? void 0 : o.bind(p)) || (p == null || (s = p.proxy) === null || s === void 0 || (s = s.$emit) === null || s === void 0 ? void 0 : s.bind(p?.proxy));
  let I = c;
  t || (t = "modelValue"), I = I || `update:${t.toString()}`;
  const x = (b) => r ? typeof r == "function" ? r(b) : mc(b) : b, P = () => Ui(e[t]) ? x(e[t]) : v, _ = (b) => {
    g ? g(b) && O(I, b) : O(I, b);
  };
  if (i) {
    const b = re(P());
    let E = !1;
    return Me(() => e[t], (y) => {
      E || (E = !0, b.value = x(y), ca(() => E = !1));
    }), Me(b, (y) => {
      !E && (y !== e[t] || d) && _(y);
    }, { deep: d }), b;
  } else return Y({
    get() {
      return P();
    },
    set(b) {
      _(b);
    }
  });
}
const kc = /* @__PURE__ */ N({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(mn), z({
      "data-slot": "sheet-overlay",
      class: l(V)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cc = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: {},
    side: { default: "right" },
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class", "side"), s = Ce(o, n);
    return (r, i) => (m(), D(l(gn), null, {
      default: h(() => [
        w(kc),
        w(l(vn), z({
          "data-slot": "sheet-content",
          class: l(V)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...l(s), ...r.$attrs }), {
          default: h(() => [
            L(r.$slots, "default"),
            w(l(Zo), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: h(() => [
                w(l(fa), { class: "size-4" }),
                i[0] || (i[0] = Z("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Oc = /* @__PURE__ */ N({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(hn), z({
      "data-slot": "sheet-description",
      class: l(V)("text-muted-foreground text-sm", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sc = /* @__PURE__ */ N({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "sheet-header",
      class: ee(l(V)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Nc = /* @__PURE__ */ N({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(bn), z({
      "data-slot": "sheet-title",
      class: l(V)("text-foreground font-semibold", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oo = "sidebar_state", Tc = 3600 * 24 * 7, Ac = "16rem", Dc = "18rem", Pc = "3rem", Lc = "b", [En, Ic] = _n("Sidebar"), $c = { class: "flex h-full w-full flex-col" }, Mc = ["data-state", "data-collapsible", "data-variant", "data-side"], Rc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Bc = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = En();
    return (r, i) => e.collapsible === "none" ? (m(), B("div", z({
      key: 0,
      "data-slot": "sidebar",
      class: l(V)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, r.$attrs), [
      L(r.$slots, "default")
    ], 16)) : l(a) ? (m(), D(l(Vi), z({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: h(() => [
        w(l(Cc), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Ko({
            "--sidebar-width": l(Dc)
          })
        }, {
          default: h(() => [
            w(Sc, { class: "sr-only" }, {
              default: h(() => [
                w(Nc, null, {
                  default: h(() => [...i[0] || (i[0] = [
                    pe("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                w(Oc, null, {
                  default: h(() => [...i[1] || (i[1] = [
                    pe("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Z("div", $c, [
              L(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (m(), B("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": l(n),
      "data-collapsible": l(n) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      Z("div", {
        class: ee(l(V)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      Z("div", z({
        class: l(V)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        Z("div", Rc, [
          L(r.$slots, "default")
        ])
      ], 16)
    ], 8, Mc));
  }
}), Vc = /* @__PURE__ */ N({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: ee(l(V)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Fc = /* @__PURE__ */ N({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: ee(l(V)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Uc = /* @__PURE__ */ N({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: ee(l(V)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), zc = /* @__PURE__ */ N({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(ua), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: ee(l(V)(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t.class
      ))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Wc = /* @__PURE__ */ N({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: ee(l(V)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), aa = /* @__PURE__ */ N({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = /* @__PURE__ */ ws(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (s, r) => Xo((m(), B("input", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => Ca(o) ? o.value = i : null),
      "data-slot": "input",
      class: ee(l(V)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [vr, l(o)]
    ]);
  }
}), jc = /* @__PURE__ */ N({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: ee(l(V)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Gc = /* @__PURE__ */ N({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(Nr), z({ "data-slot": "tooltip" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hc = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(Tr), null, {
      default: h(() => [
        w(l(Ar), z({ "data-slot": "tooltip-content" }, { ...l(s), ...r.$attrs }, {
          class: l(V)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", a.class)
        }), {
          default: h(() => [
            L(r.$slots, "default"),
            w(l(Dr), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Yc = /* @__PURE__ */ N({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Pr), z({ "data-slot": "tooltip-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), so = /* @__PURE__ */ N({
  __name: "SidebarMenuButtonChild",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(ua), z({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(V)(l(Zc)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), ro = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n } = En(), o = ue(t, "tooltip");
    return (s, r) => e.tooltip ? (m(), D(l(Gc), { key: 1 }, {
      default: h(() => [
        w(l(Yc), { "as-child": "" }, {
          default: h(() => [
            w(so, ta(La({ ...l(o), ...s.$attrs })), {
              default: h(() => [
                L(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        w(l(Hc), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: h(() => [
            typeof e.tooltip == "string" ? (m(), B(ye, { key: 0 }, [
              pe(te(e.tooltip), 1)
            ], 64)) : (m(), D(ot(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (m(), D(so, ta(z({ key: 0 }, { ...l(o), ...s.$attrs })), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = /* @__PURE__ */ N({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: ee(l(V)("group/menu-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Kc = /* @__PURE__ */ N({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: ee(l(V)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Xc = /* @__PURE__ */ N({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(ua), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: ee(l(V)(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e.size === "sm" && "text-xs",
        e.size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), qc = /* @__PURE__ */ N({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: ee(l(V)("group/menu-sub-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
});
ys?.cookie.includes(`${oo}=false`);
const Jc = /* @__PURE__ */ N({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = En();
    return (n, o) => (m(), B("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: ee(l(V)(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t.class
      )),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => l(a) && l(a)(...s))
    }, [
      L(n.$slots, "default")
    ], 2));
  }
}), Ge = /* @__PURE__ */ N({
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
    return (a, n) => (m(), D(l(ua), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ee(l(V)(l(xt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), xt = jt(
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
), Zc = jt(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Qc = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, eu = { key: 1 }, Qm = /* @__PURE__ */ N({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(a, n) {
      return !!(a.url === n || a.items?.some((o) => o.url === n));
    }
    return (a, n) => (m(), D(l(Bc), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: h(() => [
        w(l(Wc), null, {
          default: h(() => [
            L(a.$slots, "header", {}, () => [
              e.config.title ? (m(), B("div", Qc, te(e.config.title), 1)) : ce("", !0)
            ])
          ]),
          _: 3
        }),
        w(l(Vc), null, {
          default: h(() => [
            w(l(jc), null, {
              default: h(() => [
                (m(!0), B(ye, null, We(e.config.menuGroups, (o, s) => (m(), D(l(Uc), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: h(() => [
                    o.title ? (m(), D(l(zc), { key: 0 }, {
                      default: h(() => [
                        pe(te(o.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : ce("", !0),
                    (m(!0), B(ye, null, We(o.items, (r) => (m(), B(ye, {
                      key: r.title
                    }, [
                      r.items?.length ? (m(), D(l(Kl), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(r, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: h(() => [
                          w(l(lo), null, {
                            default: h(() => [
                              w(l(ql), { "as-child": "" }, {
                                default: h(() => [
                                  w(l(ro), {
                                    tooltip: r.title,
                                    disabled: r.disabled
                                  }, {
                                    default: h(() => [
                                      r.icon ? (m(), D(ot(r.icon), { key: 0 })) : ce("", !0),
                                      r.url ? (m(), D(l(za), {
                                        key: 2,
                                        to: r.url
                                      }, {
                                        default: h(() => [
                                          Z("span", null, te(r.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (m(), B("span", eu, te(r.title), 1)),
                                      w(l(da), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              w(l(Xl), null, {
                                default: h(() => [
                                  w(l(Kc), null, {
                                    default: h(() => [
                                      (m(!0), B(ye, null, We(r.items, (i) => (m(), D(l(qc), {
                                        key: i.title
                                      }, {
                                        default: h(() => [
                                          w(l(Xc), {
                                            "as-child": "",
                                            "is-active": e.currentPath === i.url,
                                            disabled: i.disabled
                                          }, {
                                            default: h(() => [
                                              w(l(za), {
                                                to: i.url
                                              }, {
                                                default: h(() => [
                                                  Z("span", null, te(i.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])
                                            ]),
                                            _: 2
                                          }, 1032, ["is-active", "disabled"])
                                        ]),
                                        _: 2
                                      }, 1024))), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["default-open"])) : (m(), D(l(lo), { key: 1 }, {
                        default: h(() => [
                          w(l(ro), {
                            "as-child": "",
                            "is-active": e.currentPath === r.url,
                            disabled: r.disabled
                          }, {
                            default: h(() => [
                              w(l(za), {
                                to: r.url
                              }, {
                                default: h(() => [
                                  r.icon ? (m(), D(ot(r.icon), { key: 0 })) : ce("", !0),
                                  Z("span", null, te(r.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1032, ["is-active", "disabled"])
                        ]),
                        _: 2
                      }, 1024))
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(l(Fc), null, {
          default: h(() => [
            L(a.$slots, "footer")
          ]),
          _: 3
        }),
        w(l(Jc))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), tu = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, Es = /* @__PURE__ */ N({
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
    return (a, n) => (m(), D(l(ua), {
      as: e.as,
      class: ee(l(V)(l(xt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        Z("span", tu, [
          L(a.$slots, "default")
        ]),
        w(l($a), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), en = (e, t, a = (n) => n) => e.reduce((n, o) => (n[t(o)] = a(o), n), {}), au = (e, t) => {
  const a = e.reduce((n, o) => {
    const s = o;
    return n[s] || (n[s] = o), n;
  }, {});
  return Object.values(a);
}, nu = (e, t, a, n) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const o = (r) => r === t;
  return e.find(o) ? e.filter((r, i) => !o(r)) : [...e, t];
}, io = (e, t, a = (n) => n) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const n = t.reduce((o, s) => (o[a(s)] = !0, o), {});
  return e.filter((o) => !n[a(o)]);
}, ou = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, su = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => ou(t.toLowerCase())).join(" ") : "", It = bt([]), xs = (e, t) => It.value.push({ callback: e, id: t });
function ks(e) {
  return It.value = typeof e == "string" ? It.value.filter(({ id: t }) => t !== e) : It.value.filter(({ callback: t }) => t !== e);
}
const xn = (e) => {
  const t = e !== void 0 ? e : It.value.length - 1;
  return t >= 0 && !It.value[t].callback() && xn(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && It.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? xn() : e.target.blur());
});
const Cs = { add: xs, remove: ks, invokeLatest: xn };
function ru(e, t) {
  Me(t, (a) => a ? xs(e) : ks(e), { immediate: !0 });
}
function co(e, t, a, n = !1, o) {
  $t(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), a(document.activeElement, s));
  }), $t(e, "click", (s) => {
    const r = s.target.closest(
      t
    );
    r && (n && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), a(r, s));
  });
}
function lu(e, t, a, n, o) {
  const s = e.includes(a), r = t.indexOf(a), i = t.indexOf(n), c = r < i ? t.slice(r, i + 1) : t.slice(i, r);
  return s ? au([...e, ...c]) : e.filter((d) => !c.includes(d));
}
function iu(e, t, a) {
  let n = null;
  const o = /* @__PURE__ */ Ec("Shift");
  Me(
    () => e.value,
    (s, r) => {
      const i = s.length > r.length ? io(s, r, a) : io(r, s, a);
      if (i.length === 1) {
        const c = i[0];
        o.value && n && (e.value = lu(
          e.value,
          t.value,
          n,
          c
        )), n = c;
      }
    }
  );
}
const cu = { class: "[&_[data-state=selected]]:bg-muted/50" }, uu = /* @__PURE__ */ N({
  __name: "DataTableBody",
  setup(e) {
    return (t, a) => (m(), B("tbody", cu, [
      L(t.$slots, "default")
    ]));
  }
}), [Yt, du] = _n("DataTable"), fu = /* @__PURE__ */ N({
  __name: "DataTableContainer",
  setup(e) {
    const t = Yt(), a = hr("container");
    co(a, "[data-col-id]", (o) => {
      const s = o.getAttribute("data-col-id"), r = o.closest("tr")?.getAttribute("data-row-id");
      s && r && t.onClickColumn(s, r);
    }), co(a, "[data-row-id]", (o) => {
      const s = o.getAttribute("data-row-id");
      s && t.onClickRow(s);
    });
    const n = Y(() => ({
      "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": t.selectMode === "multiselect",
      "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": t.hasActionsColumn
    }));
    return (o, s) => (m(), B("div", {
      ref: "container",
      class: ee(["min-w-0 min-h-0 relative flex flex-col", n.value])
    }, [
      L(o.$slots, "default")
    ], 2));
  }
});
function ut(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const uo = {};
function pu(e) {
  uo[e] || (uo[e] = !0, ut(e));
}
const _t = typeof window < "u";
let je, Mt;
if (process.env.NODE_ENV !== "production") {
  const e = _t && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (je = (t) => {
    e.mark(t);
  }, Mt = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const mu = /\{([0-9a-zA-Z]+)\}/g;
function Ma(e, ...t) {
  return t.length === 1 && fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(mu, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const yt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), gu = (e, t, a) => vu({ l: e, k: t, s: a }), vu = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Pe = (e) => typeof e == "number" && isFinite(e), hu = (e) => kn(e) === "[object Date]", Ta = (e) => kn(e) === "[object RegExp]", Ra = (e) => de(e) && Object.keys(e).length === 0, Le = Object.assign, bu = Object.create, me = (e = null) => bu(e);
let fo;
const Lt = () => fo || (fo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : me());
function po(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function mo(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _u(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, o, s) => `${o}="${mo(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, o, s) => `${o}='${mo(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && ut("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((n) => {
    e = e.replace(n, "$1javascript&#58;");
  }), e;
}
const yu = Object.prototype.hasOwnProperty;
function at(e, t) {
  return yu.call(e, t);
}
const ke = Array.isArray, be = (e) => typeof e == "function", F = (e) => typeof e == "string", xe = (e) => typeof e == "boolean", fe = (e) => e !== null && typeof e == "object", wu = (e) => fe(e) && be(e.then) && be(e.catch), Os = Object.prototype.toString, kn = (e) => Os.call(e), de = (e) => kn(e) === "[object Object]", Eu = (e) => e == null ? "" : ke(e) || de(e) && e.toString === Os ? JSON.stringify(e, null, 2) : String(e);
function Cn(e, t = "") {
  return e.reduce((a, n, o) => o === 0 ? a + n : a + t + n, "");
}
const go = 2;
function xu(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let r = 0; r < n.length; r++)
    if (o += n[r].length + 1, o >= t) {
      for (let i = r - go; i <= r + go || a > o; i++) {
        if (i < 0 || i >= n.length)
          continue;
        const c = i + 1;
        s.push(`${c}${" ".repeat(3 - String(c).length)}|  ${n[i]}`);
        const d = n[i].length;
        if (i === r) {
          const v = t - (o - d) + 1, g = Math.max(1, a > o ? d - v : a - t);
          s.push("   |  " + " ".repeat(v) + "^".repeat(g));
        } else if (i > r) {
          if (a > o) {
            const v = Math.max(Math.min(a - o, d), 1);
            s.push("   |  " + "^".repeat(v));
          }
          o += d + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function ku() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(a, n) {
      const o = e.get(a);
      o && o.push(n) || e.set(a, [n]);
    },
    off(a, n) {
      const o = e.get(a);
      o && o.splice(o.indexOf(n) >>> 0, 1);
    },
    emit(a, n) {
      (e.get(a) || []).slice().map((o) => o(n)), (e.get("*") || []).slice().map((o) => o(a, n));
    }
  };
}
const _a = (e) => !fe(e) || ke(e);
function Oa(e, t) {
  if (_a(e) || _a(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: o } = a.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (fe(n[s]) && !fe(o[s]) && (o[s] = Array.isArray(n[s]) ? [] : me()), _a(o[s]) || _a(n[s]) ? o[s] = n[s] : a.push({ src: n[s], des: o[s] }));
    });
  }
}
function Cu(e, t, a) {
  return { line: e, column: t, offset: a };
}
function tn(e, t, a) {
  return { start: e, end: t };
}
const J = {
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
}, Ou = 17, Su = {
  // tokenizer error messages
  [J.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [J.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [J.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [J.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [J.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [J.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [J.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [J.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [J.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [J.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [J.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [J.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [J.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [J.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [J.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [J.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Kt(e, t, a = {}) {
  const { domain: n, messages: o, args: s } = a, r = process.env.NODE_ENV !== "production" ? Ma((o || Su)[e] || "", ...s || []) : e, i = new SyntaxError(String(r));
  return i.code = e, t && (i.location = t), i.domain = n, i;
}
function Nu(e) {
  throw e;
}
const Tu = /<\/?[\w\s="/.':;#-\/]+>/, Au = (e) => Tu.test(e), lt = " ", Du = "\r", Re = `
`, Pu = "\u2028", Lu = "\u2029";
function Iu(e) {
  const t = e;
  let a = 0, n = 1, o = 1, s = 0;
  const r = (k) => t[k] === Du && t[k + 1] === Re, i = (k) => t[k] === Re, c = (k) => t[k] === Lu, d = (k) => t[k] === Pu, v = (k) => r(k) || i(k) || c(k) || d(k), g = () => a, p = () => n, O = () => o, I = () => s, x = (k) => r(k) || c(k) || d(k) ? Re : t[k], P = () => x(a), _ = () => x(a + s);
  function b() {
    return s = 0, v(a) && (n++, o = 0), r(a) && a++, a++, o++, t[a];
  }
  function E() {
    return r(a + s) && s++, s++, t[a + s];
  }
  function y() {
    a = 0, n = 1, o = 1, s = 0;
  }
  function T(k = 0) {
    s = k;
  }
  function A() {
    const k = a + s;
    for (; k !== a; )
      b();
    s = 0;
  }
  return {
    index: g,
    line: p,
    column: O,
    peekOffset: I,
    charAt: x,
    currentChar: P,
    currentPeek: _,
    next: b,
    peek: E,
    reset: y,
    resetPeek: T,
    skipToPeek: A
  };
}
const vt = void 0, $u = ".", vo = "'", Mu = "tokenizer";
function Ru(e, t = {}) {
  const a = t.location !== !1, n = Iu(e), o = () => n.index(), s = () => Cu(n.line(), n.column(), n.index()), r = s(), i = o(), c = {
    currentType: 13,
    offset: i,
    startLoc: r,
    endLoc: r,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: r,
    lastEndLoc: r,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, d = () => c, { onError: v } = t;
  function g(u, f, S, ...R) {
    const ae = d();
    if (f.column += S, f.offset += S, v) {
      const se = a ? tn(ae.startLoc, f) : null, Q = Kt(u, se, {
        domain: Mu,
        args: R
      });
      v(Q);
    }
  }
  function p(u, f, S) {
    u.endLoc = s(), u.currentType = f;
    const R = { type: f };
    return a && (R.loc = tn(u.startLoc, u.endLoc)), S != null && (R.value = S), R;
  }
  const O = (u) => p(
    u,
    13
    /* TokenTypes.EOF */
  );
  function I(u, f) {
    return u.currentChar() === f ? (u.next(), f) : (g(J.EXPECTED_TOKEN, s(), 0, f), "");
  }
  function x(u) {
    let f = "";
    for (; u.currentPeek() === lt || u.currentPeek() === Re; )
      f += u.currentPeek(), u.peek();
    return f;
  }
  function P(u) {
    const f = x(u);
    return u.skipToPeek(), f;
  }
  function _(u) {
    if (u === vt)
      return !1;
    const f = u.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f === 95;
  }
  function b(u) {
    if (u === vt)
      return !1;
    const f = u.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function E(u, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    x(u);
    const R = _(u.currentPeek());
    return u.resetPeek(), R;
  }
  function y(u, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    x(u);
    const R = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), ae = b(R);
    return u.resetPeek(), ae;
  }
  function T(u, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    x(u);
    const R = u.currentPeek() === vo;
    return u.resetPeek(), R;
  }
  function A(u, f) {
    const { currentType: S } = f;
    if (S !== 7)
      return !1;
    x(u);
    const R = u.currentPeek() === ".";
    return u.resetPeek(), R;
  }
  function k(u, f) {
    const { currentType: S } = f;
    if (S !== 8)
      return !1;
    x(u);
    const R = _(u.currentPeek());
    return u.resetPeek(), R;
  }
  function M(u, f) {
    const { currentType: S } = f;
    if (!(S === 7 || S === 11))
      return !1;
    x(u);
    const R = u.currentPeek() === ":";
    return u.resetPeek(), R;
  }
  function X(u, f) {
    const { currentType: S } = f;
    if (S !== 9)
      return !1;
    const R = () => {
      const se = u.currentPeek();
      return se === "{" ? _(u.peek()) : se === "@" || se === "|" || se === ":" || se === "." || se === lt || !se ? !1 : se === Re ? (u.peek(), R()) : le(u, !1);
    }, ae = R();
    return u.resetPeek(), ae;
  }
  function K(u) {
    x(u);
    const f = u.currentPeek() === "|";
    return u.resetPeek(), f;
  }
  function le(u, f = !0) {
    const S = (ae = !1, se = "") => {
      const Q = u.currentPeek();
      return Q === "{" || Q === "@" || !Q ? ae : Q === "|" ? !(se === lt || se === Re) : Q === lt ? (u.peek(), S(!0, lt)) : Q === Re ? (u.peek(), S(!0, Re)) : !0;
    }, R = S();
    return f && u.resetPeek(), R;
  }
  function G(u, f) {
    const S = u.currentChar();
    return S === vt ? vt : f(S) ? (u.next(), S) : null;
  }
  function we(u) {
    const f = u.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36;
  }
  function q(u) {
    return G(u, we);
  }
  function ne(u) {
    const f = u.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36 || // $
    f === 45;
  }
  function H(u) {
    return G(u, ne);
  }
  function Ve(u) {
    const f = u.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function U(u) {
    return G(u, Ve);
  }
  function wt(u) {
    const f = u.charCodeAt(0);
    return f >= 48 && f <= 57 || // 0-9
    f >= 65 && f <= 70 || // A-F
    f >= 97 && f <= 102;
  }
  function Fe(u) {
    return G(u, wt);
  }
  function Xe(u) {
    let f = "", S = "";
    for (; f = U(u); )
      S += f;
    return S;
  }
  function ft(u) {
    let f = "";
    for (; ; ) {
      const S = u.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === lt || S === Re)
        if (le(u))
          f += S, u.next();
        else {
          if (K(u))
            break;
          f += S, u.next();
        }
      else
        f += S, u.next();
    }
    return f;
  }
  function Ee(u) {
    P(u);
    let f = "", S = "";
    for (; f = H(u); )
      S += f;
    const R = u.currentChar();
    if (R && R !== "}" && R !== vt && R !== lt && R !== Re && R !== "　") {
      const ae = Ze(u);
      return g(J.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, S + ae), S + ae;
    }
    return u.currentChar() === vt && g(J.UNTERMINATED_CLOSING_BRACE, s(), 0), S;
  }
  function Ne(u) {
    P(u);
    let f = "";
    return u.currentChar() === "-" ? (u.next(), f += `-${Xe(u)}`) : f += Xe(u), u.currentChar() === vt && g(J.UNTERMINATED_CLOSING_BRACE, s(), 0), f;
  }
  function qe(u) {
    return u !== vo && u !== Re;
  }
  function Ot(u) {
    P(u), I(u, "'");
    let f = "", S = "";
    for (; f = G(u, qe); )
      f === "\\" ? S += ge(u) : S += f;
    const R = u.currentChar();
    return R === Re || R === vt ? (g(J.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), R === Re && (u.next(), I(u, "'")), S) : (I(u, "'"), S);
  }
  function ge(u) {
    const f = u.currentChar();
    switch (f) {
      case "\\":
      case "'":
        return u.next(), `\\${f}`;
      case "u":
        return He(u, f, 4);
      case "U":
        return He(u, f, 6);
      default:
        return g(J.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, f), "";
    }
  }
  function He(u, f, S) {
    I(u, f);
    let R = "";
    for (let ae = 0; ae < S; ae++) {
      const se = Fe(u);
      if (!se) {
        g(J.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${f}${R}${u.currentChar()}`);
        break;
      }
      R += se;
    }
    return `\\${f}${R}`;
  }
  function Je(u) {
    return u !== "{" && u !== "}" && u !== lt && u !== Re;
  }
  function Ze(u) {
    P(u);
    let f = "", S = "";
    for (; f = G(u, Je); )
      S += f;
    return S;
  }
  function pt(u) {
    let f = "", S = "";
    for (; f = q(u); )
      S += f;
    return S;
  }
  function Qe(u) {
    const f = (S) => {
      const R = u.currentChar();
      return R === "{" || R === "@" || R === "|" || R === "(" || R === ")" || !R || R === lt ? S : (S += R, u.next(), f(S));
    };
    return f("");
  }
  function et(u) {
    P(u);
    const f = I(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return P(u), f;
  }
  function St(u, f) {
    let S = null;
    switch (u.currentChar()) {
      case "{":
        return f.braceNest >= 1 && g(J.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), u.next(), S = p(
          f,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), P(u), f.braceNest++, S;
      case "}":
        return f.braceNest > 0 && f.currentType === 2 && g(J.EMPTY_PLACEHOLDER, s(), 0), u.next(), S = p(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), f.braceNest--, f.braceNest > 0 && P(u), f.inLinked && f.braceNest === 0 && (f.inLinked = !1), S;
      case "@":
        return f.braceNest > 0 && g(J.UNTERMINATED_CLOSING_BRACE, s(), 0), S = mt(u, f) || O(f), f.braceNest = 0, S;
      default: {
        let ae = !0, se = !0, Q = !0;
        if (K(u))
          return f.braceNest > 0 && g(J.UNTERMINATED_CLOSING_BRACE, s(), 0), S = p(f, 1, et(u)), f.braceNest = 0, f.inLinked = !1, S;
        if (f.braceNest > 0 && (f.currentType === 4 || f.currentType === 5 || f.currentType === 6))
          return g(J.UNTERMINATED_CLOSING_BRACE, s(), 0), f.braceNest = 0, Nt(u, f);
        if (ae = E(u, f))
          return S = p(f, 4, Ee(u)), P(u), S;
        if (se = y(u, f))
          return S = p(f, 5, Ne(u)), P(u), S;
        if (Q = T(u, f))
          return S = p(f, 6, Ot(u)), P(u), S;
        if (!ae && !se && !Q)
          return S = p(f, 12, Ze(u)), g(J.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, S.value), P(u), S;
        break;
      }
    }
    return S;
  }
  function mt(u, f) {
    const { currentType: S } = f;
    let R = null;
    const ae = u.currentChar();
    switch ((S === 7 || S === 8 || S === 11 || S === 9) && (ae === Re || ae === lt) && g(J.INVALID_LINKED_FORMAT, s(), 0), ae) {
      case "@":
        return u.next(), R = p(
          f,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), f.inLinked = !0, R;
      case ".":
        return P(u), u.next(), p(
          f,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return P(u), u.next(), p(
          f,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(u) ? (R = p(f, 1, et(u)), f.braceNest = 0, f.inLinked = !1, R) : A(u, f) || M(u, f) ? (P(u), mt(u, f)) : k(u, f) ? (P(u), p(f, 11, pt(u))) : X(u, f) ? (P(u), ae === "{" ? St(u, f) || R : p(f, 10, Qe(u))) : (S === 7 && g(J.INVALID_LINKED_FORMAT, s(), 0), f.braceNest = 0, f.inLinked = !1, Nt(u, f));
    }
  }
  function Nt(u, f) {
    let S = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (f.braceNest > 0)
      return St(u, f) || O(f);
    if (f.inLinked)
      return mt(u, f) || O(f);
    switch (u.currentChar()) {
      case "{":
        return St(u, f) || O(f);
      case "}":
        return g(J.UNBALANCED_CLOSING_BRACE, s(), 0), u.next(), p(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return mt(u, f) || O(f);
      default: {
        if (K(u))
          return S = p(f, 1, et(u)), f.braceNest = 0, f.inLinked = !1, S;
        if (le(u))
          return p(f, 0, ft(u));
        break;
      }
    }
    return S;
  }
  function Xt() {
    const { currentType: u, offset: f, startLoc: S, endLoc: R } = c;
    return c.lastType = u, c.lastOffset = f, c.lastStartLoc = S, c.lastEndLoc = R, c.offset = o(), c.startLoc = s(), n.currentChar() === vt ? p(
      c,
      13
      /* TokenTypes.EOF */
    ) : Nt(n, c);
  }
  return {
    nextToken: Xt,
    currentOffset: o,
    currentPosition: s,
    context: d
  };
}
const Bu = "parser", Vu = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Fu(e, t, a) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const n = parseInt(t || a, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
    }
  }
}
function Uu(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(_, b, E, y, ...T) {
    const A = _.currentPosition();
    if (A.offset += y, A.column += y, a) {
      const k = t ? tn(E, A) : null, M = Kt(b, k, {
        domain: Bu,
        args: T
      });
      a(M);
    }
  }
  function o(_, b, E) {
    const y = { type: _ };
    return t && (y.start = b, y.end = b, y.loc = { start: E, end: E }), y;
  }
  function s(_, b, E, y) {
    t && (_.end = b, _.loc && (_.loc.end = E));
  }
  function r(_, b) {
    const E = _.context(), y = o(3, E.offset, E.startLoc);
    return y.value = b, s(y, _.currentOffset(), _.currentPosition()), y;
  }
  function i(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: T } = E, A = o(5, y, T);
    return A.index = parseInt(b, 10), _.nextToken(), s(A, _.currentOffset(), _.currentPosition()), A;
  }
  function c(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: T } = E, A = o(4, y, T);
    return A.key = b, _.nextToken(), s(A, _.currentOffset(), _.currentPosition()), A;
  }
  function d(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: T } = E, A = o(9, y, T);
    return A.value = b.replace(Vu, Fu), _.nextToken(), s(A, _.currentOffset(), _.currentPosition()), A;
  }
  function v(_) {
    const b = _.nextToken(), E = _.context(), { lastOffset: y, lastStartLoc: T } = E, A = o(8, y, T);
    return b.type !== 11 ? (n(_, J.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), A.value = "", s(A, y, T), {
      nextConsumeToken: b,
      node: A
    }) : (b.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, it(b)), A.value = b.value || "", s(A, _.currentOffset(), _.currentPosition()), {
      node: A
    });
  }
  function g(_, b) {
    const E = _.context(), y = o(7, E.offset, E.startLoc);
    return y.value = b, s(y, _.currentOffset(), _.currentPosition()), y;
  }
  function p(_) {
    const b = _.context(), E = o(6, b.offset, b.startLoc);
    let y = _.nextToken();
    if (y.type === 8) {
      const T = v(_);
      E.modifier = T.node, y = T.nextConsumeToken || _.nextToken();
    }
    switch (y.type !== 9 && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), y = _.nextToken(), y.type === 2 && (y = _.nextToken()), y.type) {
      case 10:
        y.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = g(_, y.value || "");
        break;
      case 4:
        y.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = c(_, y.value || "");
        break;
      case 5:
        y.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = i(_, y.value || "");
        break;
      case 6:
        y.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = d(_, y.value || "");
        break;
      default: {
        n(_, J.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const T = _.context(), A = o(7, T.offset, T.startLoc);
        return A.value = "", s(A, T.offset, T.startLoc), E.key = A, s(E, T.offset, T.startLoc), {
          nextConsumeToken: y,
          node: E
        };
      }
    }
    return s(E, _.currentOffset(), _.currentPosition()), {
      node: E
    };
  }
  function O(_) {
    const b = _.context(), E = b.currentType === 1 ? _.currentOffset() : b.offset, y = b.currentType === 1 ? b.endLoc : b.startLoc, T = o(2, E, y);
    T.items = [];
    let A = null;
    do {
      const X = A || _.nextToken();
      switch (A = null, X.type) {
        case 0:
          X.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(X)), T.items.push(r(_, X.value || ""));
          break;
        case 5:
          X.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(X)), T.items.push(i(_, X.value || ""));
          break;
        case 4:
          X.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(X)), T.items.push(c(_, X.value || ""));
          break;
        case 6:
          X.value == null && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(X)), T.items.push(d(_, X.value || ""));
          break;
        case 7: {
          const K = p(_);
          T.items.push(K.node), A = K.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 13 && b.currentType !== 1);
    const k = b.currentType === 1 ? b.lastOffset : _.currentOffset(), M = b.currentType === 1 ? b.lastEndLoc : _.currentPosition();
    return s(T, k, M), T;
  }
  function I(_, b, E, y) {
    const T = _.context();
    let A = y.items.length === 0;
    const k = o(1, b, E);
    k.cases = [], k.cases.push(y);
    do {
      const M = O(_);
      A || (A = M.items.length === 0), k.cases.push(M);
    } while (T.currentType !== 13);
    return A && n(_, J.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), s(k, _.currentOffset(), _.currentPosition()), k;
  }
  function x(_) {
    const b = _.context(), { offset: E, startLoc: y } = b, T = O(_);
    return b.currentType === 13 ? T : I(_, E, y, T);
  }
  function P(_) {
    const b = Ru(_, Le({}, e)), E = b.context(), y = o(0, E.offset, E.startLoc);
    return t && y.loc && (y.loc.source = _), y.body = x(b), e.onCacheKey && (y.cacheKey = e.onCacheKey(_)), E.currentType !== 13 && n(b, J.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, _[E.offset] || ""), s(y, b.currentOffset(), b.currentPosition()), y;
  }
  return { parse: P };
}
function it(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function zu(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (s) => (a.helpers.add(s), s) };
}
function ho(e, t) {
  for (let a = 0; a < e.length; a++)
    On(e[a], t);
}
function On(e, t) {
  switch (e.type) {
    case 1:
      ho(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ho(e.items, t);
      break;
    case 6: {
      On(e.key, t), t.helper(
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
function Wu(e, t = {}) {
  const a = zu(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && On(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function ju(e) {
  const t = e.body;
  return t.type === 2 ? bo(t) : t.cases.forEach((a) => bo(a)), e;
}
function bo(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let a = 0; a < e.items.length; a++) {
      const n = e.items[a];
      if (!(n.type === 3 || n.type === 9) || n.value == null)
        break;
      t.push(n.value);
    }
    if (t.length === e.items.length) {
      e.static = Cn(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const Gu = "minifier";
function Vt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Vt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, a = t.cases;
      for (let n = 0; n < a.length; n++)
        Vt(a[n]);
      t.c = a, delete t.cases;
      break;
    }
    case 2: {
      const t = e, a = t.items;
      for (let n = 0; n < a.length; n++)
        Vt(a[n]);
      t.i = a, delete t.items, t.static && (t.s = t.static, delete t.static);
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
      Vt(t.key), t.k = t.key, delete t.key, t.modifier && (Vt(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw Kt(J.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: Gu,
          args: [e.type]
        });
  }
  delete e.type;
}
const Hu = "parser";
function Yu(e, t) {
  const { filename: a, breakLineCode: n, needIndent: o } = t, s = t.location !== !1, r = {
    filename: a,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: n,
    needIndent: o,
    indentLevel: 0
  };
  s && e.loc && (r.source = e.loc.source);
  const i = () => r;
  function c(x, P) {
    r.code += x;
  }
  function d(x, P = !0) {
    const _ = P ? n : "";
    c(o ? _ + "  ".repeat(x) : _);
  }
  function v(x = !0) {
    const P = ++r.indentLevel;
    x && d(P);
  }
  function g(x = !0) {
    const P = --r.indentLevel;
    x && d(P);
  }
  function p() {
    d(r.indentLevel);
  }
  return {
    context: i,
    push: c,
    indent: v,
    deindent: g,
    newline: p,
    helper: (x) => `_${x}`,
    needIndent: () => r.needIndent
  };
}
function Ku(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Ut(e, t.key), t.modifier ? (e.push(", "), Ut(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Xu(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const o = t.items.length;
  for (let s = 0; s < o && (Ut(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function qu(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const o = t.cases.length;
    for (let s = 0; s < o && (Ut(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function Ju(e, t) {
  t.body ? Ut(e, t.body) : e.push("null");
}
function Ut(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      Ju(e, t);
      break;
    case 1:
      qu(e, t);
      break;
    case 2:
      Xu(e, t);
      break;
    case 6:
      Ku(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${a(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${a(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${a(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${a(
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
        throw Kt(J.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Hu,
          args: [t.type]
        });
  }
}
const Zu = (e, t = {}) => {
  const a = F(t.mode) ? t.mode : "normal", n = F(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", r = e.helpers || [], i = Yu(e, {
    filename: n,
    breakLineCode: o,
    needIndent: s
  });
  i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), r.length > 0 && (i.push(`const { ${Cn(r.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), Ut(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: c, map: d } = i.context();
  return {
    ast: e,
    code: c,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Qu(e, t = {}) {
  const a = Le({}, t), n = !!a.jit, o = !!a.minify, s = a.optimize == null ? !0 : a.optimize, i = Uu(a).parse(e);
  return n ? (s && ju(i), o && Vt(i), { ast: i, code: "" }) : (Wu(i, a), Zu(i, a));
}
function ed() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function nt(e) {
  return fe(e) && Sn(e) === 0 && (at(e, "b") || at(e, "body"));
}
const Ss = ["b", "body"];
function td(e) {
  return kt(e, Ss);
}
const Ns = ["c", "cases"];
function ad(e) {
  return kt(e, Ns, []);
}
const Ts = ["s", "static"];
function nd(e) {
  return kt(e, Ts);
}
const As = ["i", "items"];
function od(e) {
  return kt(e, As, []);
}
const Ds = ["t", "type"];
function Sn(e) {
  return kt(e, Ds);
}
const Ps = ["v", "value"];
function ya(e, t) {
  const a = kt(e, Ps);
  if (a != null)
    return a;
  throw na(t);
}
const Ls = ["m", "modifier"];
function sd(e) {
  return kt(e, Ls);
}
const Is = ["k", "key"];
function rd(e) {
  const t = kt(e, Is);
  if (t)
    return t;
  throw na(
    6
    /* NodeTypes.Linked */
  );
}
function kt(e, t, a) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (at(e, o) && e[o] != null)
      return e[o];
  }
  return a;
}
const $s = [
  ...Ss,
  ...Ns,
  ...Ts,
  ...As,
  ...Is,
  ...Ls,
  ...Ps,
  ...Ds
];
function na(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ya(e) {
  return (a) => ld(a, e);
}
function ld(e, t) {
  const a = td(t);
  if (a == null)
    throw na(
      0
      /* NodeTypes.Resource */
    );
  if (Sn(a) === 1) {
    const s = ad(a);
    return e.plural(s.reduce((r, i) => [
      ...r,
      _o(e, i)
    ], []));
  } else
    return _o(e, a);
}
function _o(e, t) {
  const a = nd(t);
  if (a != null)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = od(t).reduce((o, s) => [...o, an(e, s)], []);
    return e.normalize(n);
  }
}
function an(e, t) {
  const a = Sn(t);
  switch (a) {
    case 3:
      return ya(t, a);
    case 9:
      return ya(t, a);
    case 4: {
      const n = t;
      if (at(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (at(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw na(a);
    }
    case 5: {
      const n = t;
      if (at(n, "i") && Pe(n.i))
        return e.interpolate(e.list(n.i));
      if (at(n, "index") && Pe(n.index))
        return e.interpolate(e.list(n.index));
      throw na(a);
    }
    case 6: {
      const n = t, o = sd(n), s = rd(n);
      return e.linked(an(e, s), o ? an(e, o) : void 0, e.type);
    }
    case 7:
      return ya(t, a);
    case 8:
      return ya(t, a);
    default:
      throw new Error(`unhandled node on format message part: ${a}`);
  }
}
const id = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function cd(e, t) {
  t && Au(e) && ut(Ma(id, { source: e }));
}
const ud = (e) => e;
let wa = me();
function dd(e, t = {}) {
  let a = !1;
  const n = t.onError || Nu;
  return t.onError = (o) => {
    a = !0, n(o);
  }, { ...Qu(e, t), detectError: a };
}
// @__NO_SIDE_EFFECTS__
function fd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && F(e)) {
    const a = xe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && cd(e, a);
    const o = (t.onCacheKey || ud)(e), s = wa[o];
    if (s)
      return s;
    const { ast: r, detectError: i } = dd(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = Ya(r);
    return i ? c : wa[o] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !nt(e))
      return ut(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const a = e.cacheKey;
    if (a) {
      const n = wa[a];
      return n || (wa[a] = Ya(e));
    } else
      return Ya(e);
  }
}
let oa = null;
function pd(e) {
  oa = e;
}
function md(e, t, a) {
  oa && oa.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const gd = /* @__PURE__ */ vd("function:translate");
function vd(e) {
  return (t) => oa && oa.emit(e, t);
}
const Be = {
  INVALID_ARGUMENT: Ou,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, hd = 24;
function ht(e) {
  return Kt(e, null, process.env.NODE_ENV !== "production" ? { messages: bd } : void 0);
}
const bd = {
  [Be.INVALID_ARGUMENT]: "Invalid arguments",
  [Be.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Be.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Be.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Be.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Be.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Be.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Nn(e, t) {
  return t.locale != null ? yo(t.locale) : yo(e.locale);
}
let Ka;
function yo(e) {
  if (F(e))
    return e;
  if (be(e)) {
    if (e.resolvedOnce && Ka != null)
      return Ka;
    if (e.constructor.name === "Function") {
      const t = e();
      if (wu(t))
        throw ht(Be.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ka = t;
    } else
      throw ht(Be.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ht(Be.NOT_SUPPORT_LOCALE_TYPE);
}
function _d(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...ke(t) ? t : fe(t) ? Object.keys(t) : F(t) ? [t] : [a]
  ])];
}
function Ms(e, t, a) {
  const n = F(a) ? a : Aa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let r = [a];
    for (; ke(r); )
      r = wo(s, r, t);
    const i = ke(t) || !de(t) ? t : t.default ? t.default : null;
    r = F(i) ? [i] : i, ke(r) && wo(s, r, !1), o.__localeChainCache.set(n, s);
  }
  return s;
}
function wo(e, t, a) {
  let n = !0;
  for (let o = 0; o < t.length && xe(n); o++) {
    const s = t[o];
    F(s) && (n = yd(e, t[o], a));
  }
  return n;
}
function yd(e, t, a) {
  let n;
  const o = t.split("-");
  do {
    const s = o.join("-");
    n = wd(e, s, a), o.splice(-1, 1);
  } while (o.length && n === !0);
  return n;
}
function wd(e, t, a) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ke(a) || de(a)) && a[o] && (n = a[o]);
  }
  return n;
}
const Ct = [];
Ct[
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
Ct[
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
Ct[
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
Ct[
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
Ct[
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
Ct[
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
Ct[
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
const Ed = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function xd(e) {
  return Ed.test(e);
}
function kd(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Cd(e) {
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
function Od(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : xd(t) ? kd(t) : "*" + t;
}
function Sd(e) {
  const t = [];
  let a = -1, n = 0, o = 0, s, r, i, c, d, v, g;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    r === void 0 ? r = i : r += i;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    r !== void 0 && (t.push(r), r = void 0);
  }, p[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* Actions.APPEND */
    ](), o++;
  }, p[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, n = 4, p[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, r === void 0 || (r = Od(r), r === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const I = e[a + 1];
    if (n === 5 && I === "'" || n === 6 && I === '"')
      return a++, i = "\\" + I, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, s = e[a], !(s === "\\" && O())) {
      if (c = Cd(s), g = Ct[n], d = g[c] || g.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (v = p[d[1]], v && (i = s, v() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Eo = /* @__PURE__ */ new Map();
function Nd(e, t) {
  return fe(e) ? e[t] : null;
}
function Td(e, t) {
  if (!fe(e))
    return null;
  let a = Eo.get(t);
  if (a || (a = Sd(t), a && Eo.set(t, a)), !a)
    return null;
  const n = a.length;
  let o = e, s = 0;
  for (; s < n; ) {
    const r = a[s];
    if ($s.includes(r) && nt(o))
      return null;
    const i = o[r];
    if (i === void 0 || be(o))
      return null;
    o = i, s++;
  }
  return o;
}
const ze = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Ad = 8, Dd = {
  [ze.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ze.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ze.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ze.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ze.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ze.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ze.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Rt(e, ...t) {
  return Ma(Dd[e], ...t);
}
const Pd = "11.2.2", Ba = -1, Aa = "en-US", Da = "", xo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ld() {
  return {
    upper: (e, t) => t === "text" && F(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && F(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && F(e) ? xo(e) : t === "vnode" && fe(e) && "__v_isVNode" in e ? xo(e.children) : e
  };
}
let Rs;
function Id(e) {
  Rs = e;
}
let Bs;
function $d(e) {
  Bs = e;
}
let Vs;
function Md(e) {
  Vs = e;
}
let Fs = null;
const Rd = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Fs = e;
}, Bd = /* @__NO_SIDE_EFFECTS__ */ () => Fs;
let Us = null;
const ko = (e) => {
  Us = e;
}, Vd = () => Us;
let Co = 0;
function Fd(e = {}) {
  const t = be(e.onWarn) ? e.onWarn : ut, a = F(e.version) ? e.version : Pd, n = F(e.locale) || be(e.locale) ? e.locale : Aa, o = be(n) ? Aa : n, s = ke(e.fallbackLocale) || de(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, r = de(e.messages) ? e.messages : Xa(o), i = de(e.datetimeFormats) ? e.datetimeFormats : Xa(o), c = de(e.numberFormats) ? e.numberFormats : Xa(o), d = Le(me(), e.modifiers, Ld()), v = e.pluralRules || me(), g = be(e.missing) ? e.missing : null, p = xe(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, O = xe(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, I = !!e.fallbackFormat, x = !!e.unresolving, P = be(e.postTranslation) ? e.postTranslation : null, _ = de(e.processor) ? e.processor : null, b = xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, y = be(e.messageCompiler) ? e.messageCompiler : Rs;
  process.env.NODE_ENV !== "production" && be(e.messageCompiler) && pu(Rt(ze.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = be(e.messageResolver) ? e.messageResolver : Bs || Nd, A = be(e.localeFallbacker) ? e.localeFallbacker : Vs || _d, k = fe(e.fallbackContext) ? e.fallbackContext : void 0, M = e, X = fe(M.__datetimeFormatters) ? M.__datetimeFormatters : /* @__PURE__ */ new Map(), K = fe(M.__numberFormatters) ? M.__numberFormatters : /* @__PURE__ */ new Map(), le = fe(M.__meta) ? M.__meta : {};
  Co++;
  const G = {
    version: a,
    cid: Co,
    locale: n,
    fallbackLocale: s,
    messages: r,
    modifiers: d,
    pluralRules: v,
    missing: g,
    missingWarn: p,
    fallbackWarn: O,
    fallbackFormat: I,
    unresolving: x,
    postTranslation: P,
    processor: _,
    warnHtmlMessage: b,
    escapeParameter: E,
    messageCompiler: y,
    messageResolver: T,
    localeFallbacker: A,
    fallbackContext: k,
    onWarn: t,
    __meta: le
  };
  return G.datetimeFormats = i, G.numberFormats = c, G.__datetimeFormatters = X, G.__numberFormatters = K, process.env.NODE_ENV !== "production" && (G.__v_emitter = M.__v_emitter != null ? M.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && md(G, a, le), G;
}
const Xa = (e) => ({ [e]: me() });
function Va(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function zs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Tn(e, t, a, n, o) {
  const { missing: s, onWarn: r } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: a,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (s !== null) {
    const i = s(e, a, t, o);
    return F(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && zs(n, t) && r(Rt(ze.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function Zt(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function Ws(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ud(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (Ws(e, t[n]))
      return !0;
  return !1;
}
const Oo = typeof Intl < "u", js = {
  dateTimeFormat: Oo && typeof Intl.DateTimeFormat < "u",
  numberFormat: Oo && typeof Intl.NumberFormat < "u"
};
function So(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !js.dateTimeFormat)
    return s(Rt(ze.CANNOT_FORMAT_DATE)), Da;
  const [c, d, v, g] = nn(...t), p = xe(v.missingWarn) ? v.missingWarn : e.missingWarn, O = xe(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, I = !!v.part, x = Nn(e, v), P = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    x
  );
  if (!F(c) || c === "")
    return new Intl.DateTimeFormat(x, g).format(d);
  let _ = {}, b, E = null, y = x, T = null;
  const A = "datetime format";
  for (let X = 0; X < P.length; X++) {
    if (b = T = P[X], process.env.NODE_ENV !== "production" && x !== b && Va(O, c) && s(Rt(ze.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: b
    })), process.env.NODE_ENV !== "production" && x !== b) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: A,
        key: c,
        from: y,
        to: T,
        groupId: `${A}:${c}`
      });
    }
    if (_ = a[b] || {}, E = _[c], de(E))
      break;
    Tn(e, c, b, p, A), y = T;
  }
  if (!de(E) || !F(b))
    return n ? Ba : c;
  let k = `${b}__${c}`;
  Ra(g) || (k = `${k}__${JSON.stringify(g)}`);
  let M = i.get(k);
  return M || (M = new Intl.DateTimeFormat(b, Le({}, E, g)), i.set(k, M)), I ? M.formatToParts(d) : M.format(d);
}
const Gs = [
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
function nn(...e) {
  const [t, a, n, o] = e, s = me();
  let r = me(), i;
  if (F(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw ht(Be.INVALID_ISO_DATE_ARGUMENT);
    const d = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    i = new Date(d);
    try {
      i.toISOString();
    } catch {
      throw ht(Be.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (hu(t)) {
    if (isNaN(t.getTime()))
      throw ht(Be.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Pe(t))
    i = t;
  else
    throw ht(Be.INVALID_ARGUMENT);
  return F(a) ? s.key = a : de(a) && Object.keys(a).forEach((c) => {
    Gs.includes(c) ? r[c] = a[c] : s[c] = a[c];
  }), F(n) ? s.locale = n : de(n) && (r = n), de(o) && (r = o), [s.key || "", i, s, r];
}
function No(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function To(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !js.numberFormat)
    return s(Rt(ze.CANNOT_FORMAT_NUMBER)), Da;
  const [c, d, v, g] = on(...t), p = xe(v.missingWarn) ? v.missingWarn : e.missingWarn, O = xe(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, I = !!v.part, x = Nn(e, v), P = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    x
  );
  if (!F(c) || c === "")
    return new Intl.NumberFormat(x, g).format(d);
  let _ = {}, b, E = null, y = x, T = null;
  const A = "number format";
  for (let X = 0; X < P.length; X++) {
    if (b = T = P[X], process.env.NODE_ENV !== "production" && x !== b && Va(O, c) && s(Rt(ze.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: b
    })), process.env.NODE_ENV !== "production" && x !== b) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: A,
        key: c,
        from: y,
        to: T,
        groupId: `${A}:${c}`
      });
    }
    if (_ = a[b] || {}, E = _[c], de(E))
      break;
    Tn(e, c, b, p, A), y = T;
  }
  if (!de(E) || !F(b))
    return n ? Ba : c;
  let k = `${b}__${c}`;
  Ra(g) || (k = `${k}__${JSON.stringify(g)}`);
  let M = i.get(k);
  return M || (M = new Intl.NumberFormat(b, Le({}, E, g)), i.set(k, M)), I ? M.formatToParts(d) : M.format(d);
}
const Hs = [
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
function on(...e) {
  const [t, a, n, o] = e, s = me();
  let r = me();
  if (!Pe(t))
    throw ht(Be.INVALID_ARGUMENT);
  const i = t;
  return F(a) ? s.key = a : de(a) && Object.keys(a).forEach((c) => {
    Hs.includes(c) ? r[c] = a[c] : s[c] = a[c];
  }), F(n) ? s.locale = n : de(n) && (r = n), de(o) && (r = o), [s.key || "", i, s, r];
}
function Ao(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const zd = (e) => e, Wd = (e) => "", jd = "text", Gd = (e) => e.length === 0 ? "" : Cn(e), Hd = Eu;
function Do(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Yd(e) {
  const t = Pe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Pe(e.named.count) || Pe(e.named.n)) ? Pe(e.named.count) ? e.named.count : Pe(e.named.n) ? e.named.n : t : t;
}
function Kd(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Xd(e = {}) {
  const t = e.locale, a = Yd(e), n = fe(e.pluralRules) && F(t) && be(e.pluralRules[t]) ? e.pluralRules[t] : Do, o = fe(e.pluralRules) && F(t) && be(e.pluralRules[t]) ? Do : void 0, s = (_) => _[n(a, _.length, o)], r = e.list || [], i = (_) => r[_], c = e.named || me();
  Pe(e.pluralIndex) && Kd(a, c);
  const d = (_) => c[_];
  function v(_, b) {
    const E = be(e.messages) ? e.messages(_, !!b) : fe(e.messages) ? e.messages[_] : !1;
    return E || (e.parent ? e.parent.message(_) : Wd);
  }
  const g = (_) => e.modifiers ? e.modifiers[_] : zd, p = de(e.processor) && be(e.processor.normalize) ? e.processor.normalize : Gd, O = de(e.processor) && be(e.processor.interpolate) ? e.processor.interpolate : Hd, I = de(e.processor) && F(e.processor.type) ? e.processor.type : jd, P = {
    list: i,
    named: d,
    plural: s,
    linked: (_, ...b) => {
      const [E, y] = b;
      let T = "text", A = "";
      b.length === 1 ? fe(E) ? (A = E.modifier || A, T = E.type || T) : F(E) && (A = E || A) : b.length === 2 && (F(E) && (A = E || A), F(y) && (T = y || T));
      const k = v(_, !0)(P), M = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && ke(k) && A ? k[0] : k
      );
      return A ? g(A)(M, T) : M;
    },
    message: v,
    type: I,
    interpolate: O,
    normalize: p,
    values: Le(me(), r, c)
  };
  return P;
}
const Po = () => "", Ye = (e) => be(e);
function Lo(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: o, messageCompiler: s, fallbackLocale: r, messages: i } = e, [c, d] = sn(...t), v = xe(d.missingWarn) ? d.missingWarn : e.missingWarn, g = xe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, p = xe(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, O = !!d.resolvedMessage, I = F(d.default) || xe(d.default) ? xe(d.default) ? s ? c : () => c : d.default : a ? s ? c : () => c : null, x = a || I != null && (F(I) || be(I)), P = Nn(e, d);
  p && qd(d);
  let [_, b, E] = O ? [
    c,
    P,
    i[P] || me()
  ] : Ys(e, c, P, r, g, v), y = _, T = c;
  if (!O && !(F(y) || nt(y) || Ye(y)) && x && (y = I, T = y), !O && (!(F(y) || nt(y) || Ye(y)) || !F(b)))
    return o ? Ba : c;
  if (process.env.NODE_ENV !== "production" && F(y) && e.messageCompiler == null)
    return ut(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let A = !1;
  const k = () => {
    A = !0;
  }, M = Ye(y) ? y : Ks(e, c, b, y, T, k);
  if (A)
    return y;
  const X = ef(e, b, E, d), K = Xd(X), le = Jd(e, M, K);
  let G = n ? n(le, c) : le;
  if (p && F(G) && (G = _u(G)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const we = {
      timestamp: Date.now(),
      key: F(c) ? c : Ye(y) ? y.key : "",
      locale: b || (Ye(y) ? y.locale : ""),
      format: F(y) ? y : Ye(y) ? y.source : "",
      message: G
    };
    we.meta = Le({}, e.__meta, /* @__PURE__ */ Bd() || {}), gd(we);
  }
  return G;
}
function qd(e) {
  ke(e.list) ? e.list = e.list.map((t) => F(t) ? po(t) : t) : fe(e.named) && Object.keys(e.named).forEach((t) => {
    F(e.named[t]) && (e.named[t] = po(e.named[t]));
  });
}
function Ys(e, t, a, n, o, s) {
  const { messages: r, onWarn: i, messageResolver: c, localeFallbacker: d } = e, v = d(e, n, a);
  let g = me(), p, O = null, I = a, x = null;
  const P = "translate";
  for (let _ = 0; _ < v.length; _++) {
    if (p = x = v[_], process.env.NODE_ENV !== "production" && a !== p && !Ws(a, p) && Va(o, t) && i(Rt(ze.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && a !== p) {
      const T = e.__v_emitter;
      T && T.emit("fallback", {
        type: P,
        key: t,
        from: I,
        to: x,
        groupId: `${P}:${t}`
      });
    }
    g = r[p] || me();
    let b = null, E, y;
    if (process.env.NODE_ENV !== "production" && _t && (b = window.performance.now(), E = "intlify-message-resolve-start", y = "intlify-message-resolve-end", je && je(E)), (O = c(g, t)) === null && (O = g[t]), process.env.NODE_ENV !== "production" && _t) {
      const T = window.performance.now(), A = e.__v_emitter;
      A && b && O && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: O,
        time: T - b,
        groupId: `${P}:${t}`
      }), E && y && je && Mt && (je(y), Mt("intlify message resolve", E, y));
    }
    if (F(O) || nt(O) || Ye(O))
      break;
    if (!Ud(p, v)) {
      const T = Tn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        s,
        P
      );
      T !== t && (O = T);
    }
    I = x;
  }
  return [O, p, g];
}
function Ks(e, t, a, n, o, s) {
  const { messageCompiler: r, warnHtmlMessage: i } = e;
  if (Ye(n)) {
    const p = n;
    return p.locale = p.locale || a, p.key = p.key || t, p;
  }
  if (r == null) {
    const p = (() => n);
    return p.locale = a, p.key = t, p;
  }
  let c = null, d, v;
  process.env.NODE_ENV !== "production" && _t && (c = window.performance.now(), d = "intlify-message-compilation-start", v = "intlify-message-compilation-end", je && je(d));
  const g = r(n, Zd(e, a, o, n, i, s));
  if (process.env.NODE_ENV !== "production" && _t) {
    const p = window.performance.now(), O = e.__v_emitter;
    O && c && O.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: p - c,
      groupId: `translate:${t}`
    }), d && v && je && Mt && (je(v), Mt("intlify message compilation", d, v));
  }
  return g.locale = a, g.key = t, g.source = n, g;
}
function Jd(e, t, a) {
  let n = null, o, s;
  process.env.NODE_ENV !== "production" && _t && (n = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", je && je(o));
  const r = t(a);
  if (process.env.NODE_ENV !== "production" && _t) {
    const i = window.performance.now(), c = e.__v_emitter;
    c && n && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: i - n,
      groupId: `translate:${t.key}`
    }), o && s && je && Mt && (je(s), Mt("intlify message evaluation", o, s));
  }
  return r;
}
function sn(...e) {
  const [t, a, n] = e, o = me();
  if (!F(t) && !Pe(t) && !Ye(t) && !nt(t))
    throw ht(Be.INVALID_ARGUMENT);
  const s = Pe(t) ? String(t) : (Ye(t), t);
  return Pe(a) ? o.plural = a : F(a) ? o.default = a : de(a) && !Ra(a) ? o.named = a : ke(a) && (o.list = a), Pe(n) ? o.plural = n : F(n) ? o.default = n : de(n) && Le(o, n), [s, o];
}
function Zd(e, t, a, n, o, s) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: o,
    onError: (r) => {
      if (s && s(r), process.env.NODE_ENV !== "production") {
        const i = Qd(n), c = `Message compilation error: ${r.message}`, d = r.location && i && xu(i, r.location.start.offset, r.location.end.offset), v = e.__v_emitter;
        v && i && v.emit("compile-error", {
          message: i,
          error: r.message,
          start: r.location && r.location.start.offset,
          end: r.location && r.location.end.offset,
          groupId: `translate:${a}`
        }), console.error(d ? `${c}
${d}` : c);
      } else
        throw r;
    },
    onCacheKey: (r) => gu(t, a, r)
  };
}
function Qd(e) {
  if (F(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ef(e, t, a, n) {
  const { modifiers: o, pluralRules: s, messageResolver: r, fallbackLocale: i, fallbackWarn: c, missingWarn: d, fallbackContext: v } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (O, I) => {
      let x = r(a, O);
      if (x == null && (v || I)) {
        const [, , P] = Ys(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          O,
          t,
          i,
          c,
          d
        );
        x = r(P, O);
      }
      if (F(x) || nt(x)) {
        let P = !1;
        const b = Ks(e, O, t, x, O, () => {
          P = !0;
        });
        return P ? Po : b;
      } else return Ye(x) ? x : Po;
    }
  };
  return e.processor && (p.processor = e.processor), n.list && (p.list = n.list), n.named && (p.named = n.named), Pe(n.plural) && (p.pluralIndex = n.plural), p;
}
ed();
const tf = "11.2.2";
function af() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Lt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Lt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const $e = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: hd,
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
function sa(e, ...t) {
  return Kt(e, null, process.env.NODE_ENV !== "production" ? { messages: nf, args: t } : void 0);
}
const nf = {
  [$e.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [$e.INVALID_ARGUMENT]: "Invalid argument",
  [$e.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [$e.NOT_INSTALLED]: "Need to install with `app.use` function",
  [$e.UNEXPECTED_ERROR]: "Unexpected error",
  [$e.REQUIRED_VALUE]: "Required in value: {0}",
  [$e.INVALID_VALUE]: "Invalid value",
  [$e.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [$e.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [$e.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [$e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, rn = /* @__PURE__ */ yt("__translateVNode"), ln = /* @__PURE__ */ yt("__datetimeParts"), cn = /* @__PURE__ */ yt("__numberParts"), un = /* @__PURE__ */ yt("__enableEmitter"), dn = /* @__PURE__ */ yt("__disableEmitter"), of = yt("__setPluralRules"), Xs = /* @__PURE__ */ yt("__injectWithOption"), fn = /* @__PURE__ */ yt("__dispose"), ct = {
  FALLBACK_TO_ROOT: Ad,
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
}, sf = {
  [ct.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ct.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ct.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ct.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ct.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [ct.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Pa(e, ...t) {
  return Ma(sf[e], ...t);
}
function ra(e) {
  if (!fe(e) || nt(e))
    return e;
  for (const t in e)
    if (at(e, t))
      if (!t.includes("."))
        fe(e[t]) && ra(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let o = e, s = !1;
        for (let r = 0; r < n; r++) {
          if (a[r] === "__proto__")
            throw new Error(`unsafe key: ${a[r]}`);
          if (a[r] in o || (o[a[r]] = me()), !fe(o[a[r]])) {
            process.env.NODE_ENV !== "production" && ut(Pa(ct.IGNORE_OBJ_FLATTEN, {
              key: a[r]
            })), s = !0;
            break;
          }
          o = o[a[r]];
        }
        if (s || (nt(o) ? $s.includes(a[n]) || delete e[t] : (o[a[n]] = e[t], delete e[t])), !nt(o)) {
          const r = o[a[n]];
          fe(r) && ra(r);
        }
      }
  return e;
}
function qs(e, t) {
  const { messages: a, __i18n: n, messageResolver: o, flatJson: s } = t, r = de(a) ? a : ke(n) ? me() : { [e]: me() };
  if (ke(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: c, resource: d } = i;
      c ? (r[c] = r[c] || me(), Oa(d, r[c])) : Oa(d, r);
    } else
      F(i) && Oa(JSON.parse(i), r);
  }), o == null && s)
    for (const i in r)
      at(r, i) && ra(r[i]);
  return r;
}
function Js(e) {
  return e.type;
}
function rf(e, t, a) {
  let n = fe(t.messages) ? t.messages : me();
  "__i18nGlobal" in a && (n = qs(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const o = Object.keys(n);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, n[s]);
  });
  {
    if (fe(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (fe(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function Io(e) {
  return w(br, null, e, 0);
}
function An() {
  return "currentInstance" in Ua ? Ua["currentInstance"] : Ua.getCurrentInstance();
}
const $o = "__INTLIFY_META__", Mo = () => [], lf = () => !1;
let Ro = 0;
function Bo(e) {
  return ((t, a, n, o) => e(a, n, An() || void 0, o));
}
const cf = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = An();
  let t = null;
  return e && (t = Js(e)[$o]) ? { [$o]: t } : null;
};
function uf(e = {}) {
  const { __root: t, __injectWithOption: a } = e, n = t === void 0, o = e.flatJson, s = _t ? re : bt;
  let r = xe(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && r ? t.locale.value : F(e.locale) ? e.locale : Aa
  ), c = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : F(e.fallbackLocale) || ke(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), d = s(qs(i.value, e)), v = s(de(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), g = s(de(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : xe(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, O = t ? t.fallbackWarn : xe(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, I = t ? t.fallbackRoot : xe(e.fallbackRoot) ? e.fallbackRoot : !0, x = !!e.fallbackFormat, P = be(e.missing) ? e.missing : null, _ = be(e.missing) ? Bo(e.missing) : null, b = be(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const T = t ? t.modifiers : de(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, k;
  k = (() => {
    n && ko(null);
    const C = {
      version: tf,
      locale: i.value,
      fallbackLocale: c.value,
      messages: d.value,
      modifiers: T,
      pluralRules: A,
      missing: _ === null ? void 0 : _,
      missingWarn: p,
      fallbackWarn: O,
      fallbackFormat: x,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: E,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = v.value, C.numberFormats = g.value, C.__datetimeFormatters = de(k) ? k.__datetimeFormatters : void 0, C.__numberFormatters = de(k) ? k.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (C.__v_emitter = de(k) ? k.__v_emitter : void 0);
    const $ = Fd(C);
    return n && ko($), $;
  })(), Zt(k, i.value, c.value);
  function X() {
    return [
      i.value,
      c.value,
      d.value,
      v.value,
      g.value
    ];
  }
  const K = Y({
    get: () => i.value,
    set: (C) => {
      k.locale = C, i.value = C;
    }
  }), le = Y({
    get: () => c.value,
    set: (C) => {
      k.fallbackLocale = C, c.value = C, Zt(k, i.value, C);
    }
  }), G = Y(() => d.value), we = /* @__PURE__ */ Y(() => v.value), q = /* @__PURE__ */ Y(() => g.value);
  function ne() {
    return be(b) ? b : null;
  }
  function H(C) {
    b = C, k.postTranslation = C;
  }
  function Ve() {
    return P;
  }
  function U(C) {
    C !== null && (_ = Bo(C)), P = C, k.missing = _;
  }
  function wt(C, $) {
    return C !== "translate" || !$.resolvedMessage;
  }
  const Fe = (C, $, ie, ve, tt, Tt) => {
    X();
    let Ue;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (k.fallbackContext = t ? Vd() : void 0), Ue = C(k);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (k.fallbackContext = void 0);
    }
    if (ie !== "translate exists" && // for not `te` (e.g `t`)
    Pe(Ue) && Ue === Ba || ie === "translate exists" && !Ue) {
      const [st, Fa] = $();
      if (process.env.NODE_ENV !== "production" && t && F(st) && wt(ie, Fa) && (I && (Va(O, st) || zs(p, st)) && ut(Pa(ct.FALLBACK_TO_ROOT, {
        key: st,
        type: ie
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: rt } = k;
        rt && I && rt.emit("fallback", {
          type: ie,
          key: st,
          to: "global",
          groupId: `${ie}:${st}`
        });
      }
      return t && I ? ve(t) : tt(st);
    } else {
      if (Tt(Ue))
        return Ue;
      throw sa($e.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Xe(...C) {
    return Fe(($) => Reflect.apply(Lo, null, [$, ...C]), () => sn(...C), "translate", ($) => Reflect.apply($.t, $, [...C]), ($) => $, ($) => F($));
  }
  function ft(...C) {
    const [$, ie, ve] = C;
    if (ve && !fe(ve))
      throw sa($e.INVALID_ARGUMENT);
    return Xe($, ie, Le({ resolvedMessage: !0 }, ve || {}));
  }
  function Ee(...C) {
    return Fe(($) => Reflect.apply(So, null, [$, ...C]), () => nn(...C), "datetime format", ($) => Reflect.apply($.d, $, [...C]), () => Da, ($) => F($) || ke($));
  }
  function Ne(...C) {
    return Fe(($) => Reflect.apply(To, null, [$, ...C]), () => on(...C), "number format", ($) => Reflect.apply($.n, $, [...C]), () => Da, ($) => F($) || ke($));
  }
  function qe(C) {
    return C.map(($) => F($) || Pe($) || xe($) ? Io(String($)) : $);
  }
  const ge = {
    normalize: qe,
    interpolate: (C) => C,
    type: "vnode"
  };
  function He(...C) {
    return Fe(($) => {
      let ie;
      const ve = $;
      try {
        ve.processor = ge, ie = Reflect.apply(Lo, null, [ve, ...C]);
      } finally {
        ve.processor = null;
      }
      return ie;
    }, () => sn(...C), "translate", ($) => $[rn](...C), ($) => [Io($)], ($) => ke($));
  }
  function Je(...C) {
    return Fe(($) => Reflect.apply(To, null, [$, ...C]), () => on(...C), "number format", ($) => $[cn](...C), Mo, ($) => F($) || ke($));
  }
  function Ze(...C) {
    return Fe(($) => Reflect.apply(So, null, [$, ...C]), () => nn(...C), "datetime format", ($) => $[ln](...C), Mo, ($) => F($) || ke($));
  }
  function pt(C) {
    A = C, k.pluralRules = A;
  }
  function Qe(C, $) {
    return Fe(() => {
      if (!C)
        return !1;
      const ie = F($) ? $ : i.value, ve = mt(ie), tt = k.messageResolver(ve, C);
      return nt(tt) || Ye(tt) || F(tt);
    }, () => [C], "translate exists", (ie) => Reflect.apply(ie.te, ie, [C, $]), lf, (ie) => xe(ie));
  }
  function et(C) {
    let $ = null;
    const ie = Ms(k, c.value, i.value);
    for (let ve = 0; ve < ie.length; ve++) {
      const tt = d.value[ie[ve]] || {}, Tt = k.messageResolver(tt, C);
      if (Tt != null) {
        $ = Tt;
        break;
      }
    }
    return $;
  }
  function St(C) {
    const $ = et(C);
    return $ ?? (t ? t.tm(C) || {} : {});
  }
  function mt(C) {
    return d.value[C] || {};
  }
  function Nt(C, $) {
    if (o) {
      const ie = { [C]: $ };
      for (const ve in ie)
        at(ie, ve) && ra(ie[ve]);
      $ = ie[C];
    }
    d.value[C] = $, k.messages = d.value;
  }
  function Xt(C, $) {
    d.value[C] = d.value[C] || {};
    const ie = { [C]: $ };
    if (o)
      for (const ve in ie)
        at(ie, ve) && ra(ie[ve]);
    $ = ie[C], Oa($, d.value[C]), k.messages = d.value;
  }
  function u(C) {
    return v.value[C] || {};
  }
  function f(C, $) {
    v.value[C] = $, k.datetimeFormats = v.value, No(k, C, $);
  }
  function S(C, $) {
    v.value[C] = Le(v.value[C] || {}, $), k.datetimeFormats = v.value, No(k, C, $);
  }
  function R(C) {
    return g.value[C] || {};
  }
  function ae(C, $) {
    g.value[C] = $, k.numberFormats = g.value, Ao(k, C, $);
  }
  function se(C, $) {
    g.value[C] = Le(g.value[C] || {}, $), k.numberFormats = g.value, Ao(k, C, $);
  }
  Ro++, t && _t && (Me(t.locale, (C) => {
    r && (i.value = C, k.locale = C, Zt(k, i.value, c.value));
  }), Me(t.fallbackLocale, (C) => {
    r && (c.value = C, k.fallbackLocale = C, Zt(k, i.value, c.value));
  }));
  const Q = {
    id: Ro,
    locale: K,
    fallbackLocale: le,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(C) {
      r = C, C && t && (i.value = t.locale.value, c.value = t.fallbackLocale.value, Zt(k, i.value, c.value));
    },
    get availableLocales() {
      return Object.keys(d.value).sort();
    },
    messages: G,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(C) {
      p = C, k.missingWarn = p;
    },
    get fallbackWarn() {
      return O;
    },
    set fallbackWarn(C) {
      O = C, k.fallbackWarn = O;
    },
    get fallbackRoot() {
      return I;
    },
    set fallbackRoot(C) {
      I = C;
    },
    get fallbackFormat() {
      return x;
    },
    set fallbackFormat(C) {
      x = C, k.fallbackFormat = x;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(C) {
      E = C, k.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(C) {
      y = C, k.escapeParameter = C;
    },
    t: Xe,
    getLocaleMessage: mt,
    setLocaleMessage: Nt,
    mergeLocaleMessage: Xt,
    getPostTranslationHandler: ne,
    setPostTranslationHandler: H,
    getMissingHandler: Ve,
    setMissingHandler: U,
    [of]: pt
  };
  return Q.datetimeFormats = we, Q.numberFormats = q, Q.rt = ft, Q.te = Qe, Q.tm = St, Q.d = Ee, Q.n = Ne, Q.getDateTimeFormat = u, Q.setDateTimeFormat = f, Q.mergeDateTimeFormat = S, Q.getNumberFormat = R, Q.setNumberFormat = ae, Q.mergeNumberFormat = se, Q[Xs] = a, Q[rn] = He, Q[ln] = Ze, Q[cn] = Je, process.env.NODE_ENV !== "production" && (Q[un] = (C) => {
    k.__v_emitter = C;
  }, Q[dn] = () => {
    k.__v_emitter = void 0;
  }), Q;
}
function Vo(e, t) {
}
const Dn = {
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
function df({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.type === ye ? o.children : [o]
  ], []) : t.reduce((a, n) => {
    const o = e[n];
    return o && (a[n] = o()), a;
  }, me());
}
function Zs() {
  return ye;
}
Le({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Pe(e) || !isNaN(e)
  }
}, Dn);
function ff(e) {
  return ke(e) && !F(e[0]);
}
function Qs(e, t, a, n) {
  const { slots: o, attrs: s } = t;
  return () => {
    const r = { part: !0 };
    let i = me();
    e.locale && (r.locale = e.locale), F(e.format) ? r.key = e.format : fe(e.format) && (F(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((p, O) => a.includes(O) ? Le(me(), p, { [O]: e.format[O] }) : p, me()));
    const c = n(e.value, r, i);
    let d = [r.key];
    ke(c) ? d = c.map((p, O) => {
      const I = o[p.type], x = I ? I({ [p.type]: p.value, index: O, parts: c }) : [p.value];
      return ff(x) && (x[0].key = `${p.type}-${O}`), x;
    }) : F(c) && (d = [c]);
    const v = Le(me(), s), g = F(e.tag) || fe(e.tag) ? e.tag : Zs();
    return Ft(g, v, d);
  };
}
Le({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Dn);
const pf = /* @__PURE__ */ yt("global-vue-i18n");
function dt(e = {}) {
  const t = An();
  if (t == null)
    throw sa($e.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw sa($e.NOT_INSTALLED);
  const a = mf(t), n = vf(a), o = Js(t), s = gf(e, o);
  if (s === "global")
    return rf(n, e, o), n;
  if (s === "parent") {
    let c = hf(a, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && ut(Pa(ct.NOT_FOUND_PARENT_SCOPE)), c = n), c;
  }
  const r = a;
  let i = r.__getInstance(t);
  if (i == null) {
    const c = Le({}, e);
    "__i18n" in o && (c.__i18n = o.__i18n), n && (c.__root = n), i = uf(c), r.__composerExtend && (i[fn] = r.__composerExtend(i)), _f(r, t, i), r.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && ut(Pa(ct.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function mf(e) {
  const t = ea(e.isCE ? pf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw sa(e.isCE ? $e.NOT_INSTALLED_WITH_PROVIDE : $e.UNEXPECTED_ERROR);
  return t;
}
function gf(e, t) {
  return Ra(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function vf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function hf(e, t, a = !1) {
  let n = null;
  const o = t.root;
  let s = bf(t, a);
  for (; s != null; ) {
    const r = e;
    if (e.mode === "composition")
      n = r.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = r.__getInstance(s);
      i != null && (n = i.__composer, a && n && !n[Xs] && (n = null));
    }
    if (n != null || o === s)
      break;
    s = s.parent;
  }
  return n;
}
function bf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function _f(e, t, a) {
  let n = null;
  ia(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = a, n = ku();
      const o = a;
      o[un] && o[un](n), n.on("*", Vo);
    }
  }, t), qo(() => {
    const o = a;
    process.env.NODE_ENV !== "production" && (n && n.off("*", Vo), o[dn] && o[dn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const s = o[fn];
    s && (s(), delete o[fn]);
  }, t);
}
Le({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Dn);
af();
Id(fd);
$d(Td);
Md(Ms);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Lt();
  e.__INTLIFY__ = !0, pd(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const yf = /* @__PURE__ */ N({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "empty",
      class: ee(l(V)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), wf = /* @__PURE__ */ N({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "empty-content",
      class: ee(l(V)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Ef = /* @__PURE__ */ N({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (m(), B("p", {
      "data-slot": "empty-description",
      class: ee(l(V)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), xf = /* @__PURE__ */ N({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (m(), B("div", {
      "data-slot": "empty-header",
      class: ee(l(V)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), kf = ["data-variant"], Cf = /* @__PURE__ */ N({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ee(l(V)(l(er)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, kf));
  }
}), Of = ["data-variant"], Sf = /* @__PURE__ */ N({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ee(l(V)(l(er)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Of));
  }
}), er = jt(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Nf = ["colspan"], Tf = /* @__PURE__ */ N({
  __name: "DataTableEmpty",
  setup(e) {
    const t = Yt(), { t: a } = dt();
    return (n, o) => (m(), B("tr", null, [
      Z("td", {
        colspan: l(t).colNum.value
      }, [
        w(l(yf), null, {
          default: h(() => [
            w(l(xf), null, {
              default: h(() => [
                w(l(Cf), { variant: "icon" }, {
                  default: h(() => [
                    w(l(as))
                  ]),
                  _: 1
                }),
                w(l(Sf), null, {
                  default: h(() => [
                    pe(te(l(a)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }),
                w(l(Ef), null, {
                  default: h(() => [
                    pe(te(l(a)("dataTable.noEntriesFoundDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(wf), null, {
              default: h(() => [
                L(n.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 8, Nf)
    ]));
  }
}), Af = /* @__PURE__ */ N({
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
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(Ir), z({ "data-slot": "pagination" }, l(s), {
      class: l(V)("mx-auto flex w-full justify-center", a.class)
    }), {
      default: h((c) => [
        L(r.$slots, "default", ta(La(c)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Df = /* @__PURE__ */ N({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l($r), z({ "data-slot": "pagination-content" }, l(a), {
      class: l(V)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((s) => [
        L(n.$slots, "default", ta(La(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pf = /* @__PURE__ */ N({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Ke(a);
    return (o, s) => (m(), D(l(Mr), z({
      "data-slot": "pagination-first",
      class: l(V)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(es), { class: "size-4" }),
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lf = /* @__PURE__ */ N({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Ke(a);
    return (o, s) => (m(), D(l(Rr), z({
      "data-slot": "pagination-last",
      class: l(V)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "Last", -1)),
          w(l(ts), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), If = /* @__PURE__ */ N({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Ke(a);
    return (o, s) => (m(), D(l(Br), z({
      "data-slot": "pagination-next",
      class: l(V)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "Next", -1)),
          w(l(da))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $f = /* @__PURE__ */ N({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Ke(a);
    return (o, s) => (m(), D(l(Vr), z({
      "data-slot": "pagination-previous",
      class: l(V)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(Qo)),
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mf = /* @__PURE__ */ N({
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
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(Fr), z({ "data-slot": "select" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rf = /* @__PURE__ */ N({
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
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(Ur), null, {
      default: h(() => [
        w(l(zr), z({ "data-slot": "select-content" }, { ...l(s), ...r.$attrs }, {
          class: l(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: h(() => [
            w(l(Uf)),
            w(l(Wr), {
              class: ee(l(V)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: h(() => [
                L(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            w(l(Ff))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Bf = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, Vf = /* @__PURE__ */ N({
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
    const t = e, a = ue(t, "class"), n = Ke(a);
    return (o, s) => (m(), D(l(jr), z({ "data-slot": "select-item" }, l(n), {
      class: l(V)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: h(() => [
        Z("span", Bf, [
          w(l(Gr), null, {
            default: h(() => [
              w(l(Ia), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l(Hr), null, {
          default: h(() => [
            L(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ff = /* @__PURE__ */ N({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Ke(a);
    return (o, s) => (m(), D(l(Yr), z({ "data-slot": "select-scroll-down-button" }, l(n), {
      class: l(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l($a), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uf = /* @__PURE__ */ N({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Ke(a);
    return (o, s) => (m(), D(l(Kr), z({ "data-slot": "select-scroll-up-button" }, l(n), {
      class: l(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(Dl), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zf = /* @__PURE__ */ N({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Xr), z({ "data-slot": "select-value" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pn = /* @__PURE__ */ N({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(qr), z({ "data-slot": "dropdown-menu-separator" }, l(a), {
      class: l(V)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), Wf = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, jf = { key: 1 }, Gf = {
  key: 0,
  class: "-mt-2"
}, Ln = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ Ie({
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
  emits: /* @__PURE__ */ Ie(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e;
    function a(c) {
      return {
        "common.select": "Select",
        "common.reset": "Reset",
        "common.addItem": "Add Item"
      }[c] || c;
    }
    const n = De(e, "modelValue"), o = Y(() => Object.fromEntries(he(t.options).map((c) => [c.value, c]))), s = Y(() => n.value ? t.multiple ? Array.isArray(n.value) ? n.value.map((c) => o.value[c]).filter(Boolean) : [] : o.value[n.value] ? [o.value[n.value]] : [] : []);
    function r() {
      n.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = Y(() => t.initialValues === void 0 ? n.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(n.value));
    return (c, d) => (m(), B(ye, null, [
      w(l(Mf), {
        modelValue: n.value,
        "onUpdate:modelValue": d[1] || (d[1] = (v) => n.value = v),
        multiple: e.multiple
      }, {
        default: h(() => [
          w(l(Jr), z({
            class: l(V)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, c.$attrs, { "as-child": "" }), {
            default: h(() => [
              w(Es, { variant: "outline" }, {
                default: h(() => [
                  L(c.$slots, "default", { selectedOptions: s.value }, () => [
                    w(l(zf), {
                      placeholder: e.placeholder || a("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: h(() => [
                        e.customValueComponent && s.value.length > 0 ? (m(!0), B(ye, { key: 0 }, We(s.value, (v) => (m(), D(ot(e.customValueComponent), z({
                          key: v.value,
                          option: v,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : ce("", !0)
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
          w(l(Rf), null, {
            default: h(() => [
              e.label ? (m(), B("div", Wf, te(e.label), 1)) : ce("", !0),
              (m(!0), B(ye, null, We(he(e.options), (v) => (m(), D(l(Vf), {
                key: String(v.value),
                value: v.value
              }, {
                default: h(() => [
                  pe(te(v.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128)),
              e.showResetButton && i.value ? (m(), B("div", jf, [
                w(Pn),
                w(Ge, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  onClick: d[0] || (d[0] = (v) => r())
                }, {
                  default: h(() => [
                    w(l($l)),
                    pe(" " + te(a("common.reset")), 1)
                  ]),
                  _: 1
                })
              ])) : ce("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      e.showAddItemButton ? (m(), B("div", Gf, [
        w(Ge, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          onClick: d[2] || (d[2] = (v) => c.$emit("onAddItem"))
        }, {
          default: h(() => [
            w(l(yn)),
            pe(" " + te(a("common.addItem")), 1)
          ]),
          _: 1
        })
      ])) : ce("", !0)
    ], 64));
  }
}), Hf = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, Yf = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, Kf = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, Xf = { class: "hidden @2xl:block" }, qf = { class: "@2xl:hidden" }, Jf = /* @__PURE__ */ N({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ Ie({
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
    hideItemsPerPage: { type: Boolean },
    pageSizeOptions: {}
  }, {
    itemsPerPage: { default: 25 },
    itemsPerPageModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n), r = De(e, "itemsPerPage"), { t: i } = dt();
    return (c, d) => (m(), B("div", null, [
      w(l(Af), z(l(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: h(({ page: v, pageCount: g }) => [
          e.hideItemsPerPage ? ce("", !0) : (m(), B("div", Hf, [
            Z("span", Yf, te(l(i)("dataTable.rowsPerPage")), 1),
            w(Ln, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((p) => ({ value: p, label: `${p}` })),
              "model-value": r.value,
              "onUpdate:modelValue": d[0] || (d[0] = (p) => r.value = p)
            }, null, 8, ["options", "model-value"])
          ])),
          w(l(Df), null, {
            default: h(() => [
              Z("div", Kf, [
                Z("span", Xf, te(l(i)("dataTable.pageOf", { page: v, pageCount: g })), 1),
                Z("span", qf, te(v) + " / " + te(g), 1)
              ]),
              w(l(Pf), null, {
                default: h(() => [
                  w(l(es), { class: "size-4" })
                ]),
                _: 1
              }),
              w(l($f), null, {
                default: h(() => [
                  w(l(Qo))
                ]),
                _: 1
              }),
              w(l(If), { variant: "outline" }, {
                default: h(() => [
                  w(l(da))
                ]),
                _: 1
              }),
              w(l(Lf), { variant: "outline" }, {
                default: h(() => [
                  w(l(ts), { class: "size-4" })
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
}), Zf = { key: 0 }, Qf = { class: "flex gap-2 items-center min-w-0" }, ep = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, tp = { key: 1 }, ap = { class: "text-sm line-clamp-1 text-muted-foreground" }, np = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, op = /* @__PURE__ */ N({
  __name: "DataTableFooter",
  props: {
    total: {},
    page: {},
    itemsPerPage: {},
    pageSizeOptions: {},
    bordered: { type: Boolean }
  },
  emits: ["update:page", "update:itemsPerPage"],
  setup(e, { emit: t }) {
    const a = t, n = Yt(), { t: o } = dt();
    return (s, r) => e.total && e.total > 0 ? (m(), B("div", {
      key: 0,
      class: ee(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "!px-6": !e.bordered }])
    }, [
      l(n).selectMode === "multiselect" && l(n).selected.value.length > 0 ? (m(), B("div", Zf, [
        Z("div", Qf, [
          Z("span", ep, te(l(o)("dataTable.elementsSelected", { count: l(n).selected.value.length, total: l(n).items.length })), 1),
          l(n).selected.value.length > 0 ? L(s.$slots, "bulk", {
            key: 0,
            selected: l(n).selected.value
          }) : ce("", !0)
        ])
      ])) : l(n).selected.value.length === 0 && e.total !== void 0 ? (m(), B("div", tp, [
        Z("span", ap, te(l(o)("dataTable.totalElements", { total: e.total })), 1)
      ])) : ce("", !0),
      e.total !== void 0 ? (m(), B("div", np, [
        w(Jf, {
          "model-value": e.page,
          "items-per-page": e.itemsPerPage,
          "page-size-options": e.pageSizeOptions || [],
          "hide-items-per-page": l(n).selected.value.length > 0 || e.pageSizeOptions && e.pageSizeOptions.length < 2,
          total: e.total,
          disabled: l(n).isPending,
          "onUpdate:modelValue": r[0] || (r[0] = (i) => i !== void 0 && a("update:page", i)),
          "onUpdate:itemsPerPage": r[1] || (r[1] = (i) => i !== void 0 && a("update:itemsPerPage", i))
        }, null, 8, ["model-value", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])
      ])) : ce("", !0)
    ], 2)) : ce("", !0);
  }
}), tr = /* @__PURE__ */ N({
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
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(Zr), z({ "data-slot": "checkbox" }, l(s), {
      class: l(V)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: h(() => [
        w(l(Qr), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: h(() => [
            L(r.$slots, "default", {}, () => [
              w(l(Ia), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ar = /* @__PURE__ */ N({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(el), z({ "data-slot": "dropdown-menu" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sp = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, rp = /* @__PURE__ */ N({
  __name: "DropdownMenuCheckboxItem",
  props: {
    modelValue: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(tl), z({ "data-slot": "dropdown-menu-checkbox-item" }, l(s), {
      class: l(V)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: h(() => [
        Z("span", sp, [
          w(l(al), null, {
            default: h(() => [
              w(l(Ia), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        L(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nr = /* @__PURE__ */ N({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
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
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(nl), null, {
      default: h(() => [
        w(l(ol), z({ "data-slot": "dropdown-menu-content" }, l(s), {
          class: l(V)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", a.class)
        }), {
          default: h(() => [
            L(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ea = /* @__PURE__ */ N({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, a = ue(t, "inset", "variant", "class"), n = Ke(a);
    return (o, s) => (m(), D(l(sl), z({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, l(n), {
      class: l(V)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), lp = /* @__PURE__ */ N({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = ue(t, "class", "inset"), n = Ke(a);
    return (o, s) => (m(), D(l(rl), z({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, l(n), {
      class: l(V)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), or = /* @__PURE__ */ N({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Ke(e);
    return (n, o) => (m(), D(l(ll), z({ "data-slot": "dropdown-menu-trigger" }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ N({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Y(() => a.sortOrder ? a.sortOrder === "asc" ? Un : Fn : Pl);
    function s(i) {
      n("sort", i);
    }
    function r() {
      n("hide");
    }
    return (i, c) => !e.sortable && !e.hideable ? (m(), B("div", {
      key: 0,
      class: ee(l(V)("flex items-center space-x-2"))
    }, [
      Z("span", null, te(e.title), 1)
    ], 2)) : (m(), B("div", {
      key: 1,
      class: ee(l(V)("flex items-center space-x-2"))
    }, [
      w(l(ar), null, {
        default: h(() => [
          w(l(or), { "as-child": "" }, {
            default: h(() => [
              w(l(Ge), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: h(() => [
                  Z("span", null, te(e.title), 1),
                  e.sortable ? (m(), D(ot(o.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : ce("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          w(l(nr), { align: "start" }, {
            default: h(() => [
              e.sortable ? (m(), B(ye, { key: 0 }, [
                w(l(Ea), {
                  onClick: c[0] || (c[0] = (d) => s("asc"))
                }, {
                  default: h(() => [
                    w(l(Un), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    c[3] || (c[3] = pe(" Asc ", -1))
                  ]),
                  _: 1
                }),
                w(l(Ea), {
                  onClick: c[1] || (c[1] = (d) => s("desc"))
                }, {
                  default: h(() => [
                    w(l(Fn), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    c[4] || (c[4] = pe(" Desc ", -1))
                  ]),
                  _: 1
                }),
                e.sortOrder ? (m(), D(l(Ea), {
                  key: 0,
                  onClick: c[2] || (c[2] = (d) => s(void 0))
                }, {
                  default: h(() => [
                    w(l(Al), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    c[5] || (c[5] = pe(" Clear sort ", -1))
                  ]),
                  _: 1
                })) : ce("", !0)
              ], 64)) : ce("", !0),
              e.sortable && e.hideable ? (m(), D(l(Pn), { key: 1 })) : ce("", !0),
              e.hideable ? (m(), D(l(Ea), {
                key: 2,
                onClick: r
              }, {
                default: h(() => [
                  w(l(Ll), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  c[6] || (c[6] = pe(" Hide ", -1))
                ]),
                _: 1
              })) : ce("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), cp = { class: "text-left" }, up = {
  key: 0,
  class: "!w-6 !pr-0"
}, dp = {
  key: 1,
  class: "!w-6"
}, fp = { key: 2 }, pp = /* @__PURE__ */ N({
  __name: "DataTableHeader",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Yt();
    return (o, s) => {
      const r = _r("tooltip");
      return m(), B("thead", cp, [
        Z("tr", null, [
          l(n).expandable ? (m(), B("th", up, [
            Xo((m(), D(Ge, {
              type: "button",
              size: "sm",
              variant: "ghost",
              class: "h-6 w-6 p-0 -mr-1 [&:not(:hover)]:opacity-0",
              onClick: s[0] || (s[0] = (i) => l(n).toggleExpandAll())
            }, {
              default: h(() => [
                (m(), D(ot(l(n).allExpandedState.value ? l($a) : l(da))))
              ]),
              _: 1
            })), [
              [r, "Toggle collapse"]
            ])
          ])) : ce("", !0),
          l(n).selectMode === "multiselect" ? (m(), B("th", dp, [
            w(l(tr), {
              "model-value": l(n).allSelectedState.value,
              "onUpdate:modelValue": s[1] || (s[1] = () => l(n).toggleAllSelected())
            }, null, 8, ["model-value"])
          ])) : ce("", !0),
          (m(!0), B(ye, null, We(l(n).filteredColumns.value, (i) => (m(), B("th", {
            key: i.id
          }, [
            w(ip, {
              title: i.title ?? l(su)(i.id),
              sortable: l(n).sortable && i.sortable,
              "sort-order": l(n).sortBy?.value?.key === i.id ? l(n).sortBy.value.order : void 0,
              hideable: i.hideable ?? !0,
              onSort: (c) => c ? l(n).updateSort(i.id) : l(n).sortBy.value = void 0,
              onHide: () => a("update:visibleColumns", e.visibleColumns?.filter((c) => c !== i.id) || [])
            }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
          ]))), 128)),
          l(n).hasActionsColumn ? (m(), B("th", fp)) : ce("", !0)
        ])
      ]);
    };
  }
}), mp = /* @__PURE__ */ N({
  __name: "Spinner",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Il), {
      role: "status",
      "aria-label": "Loading",
      class: ee(l(V)("size-4 animate-spin", t.class))
    }, null, 8, ["class"]));
  }
}), gp = { class: "absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md" }, vp = { class: "flex flex-col items-center gap-2" }, hp = { class: "text-sm text-muted-foreground" }, bp = /* @__PURE__ */ N({
  __name: "DataTableLoadingOverlay",
  setup(e) {
    const { t } = dt();
    return (a, n) => (m(), B("div", gp, [
      Z("div", vp, [
        w(mp),
        Z("span", hp, te(l(t)("dataTable.loading") || "Loading..."), 1)
      ])
    ]));
  }
}), _p = ["data-state", "data-row-id"], yp = {
  key: 0,
  class: "!w-6 !pr-0"
}, wp = {
  key: 1,
  class: "!w-6 !pr-0"
}, Ep = ["data-col-id", "tabindex"], xp = { key: 2 }, kp = { class: "flex items-center gap-0.5" }, Cp = /* @__PURE__ */ N({
  __name: "DataTableRow",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, a = Yt(), n = Y(() => a.selectedMap.value[t.item.id]), o = Y(() => a.highlightedRow === t.item[a.idcol]), s = Y(() => a.expandedMap.value[t.item[a.idcol]]), r = Y(() => a.isRowExpandableFn(t.item));
    return (i, c) => (m(), B("tr", {
      "data-state": (n.value || o.value) && "selected",
      "data-row-id": e.item.id
    }, [
      l(a).expandable ? (m(), B("td", yp, [
        r.value ? (m(), D(Ge, {
          key: 0,
          size: "sm",
          variant: "ghost",
          class: "h-6 w-6 p-0 -mr-1",
          onClick: c[0] || (c[0] = (d) => l(a).toggleExpand(e.item[l(a).idcol]))
        }, {
          default: h(() => [
            (m(), D(ot(s.value ? l($a) : l(da)), { class: "h-4 w-4" }))
          ]),
          _: 1
        })) : ce("", !0)
      ])) : ce("", !0),
      l(a).selectMode === "multiselect" ? (m(), B("td", wp, [
        w(l(tr), {
          "model-value": l(a).selected.value.includes(e.item.id),
          "onUpdate:modelValue": c[1] || (c[1] = (d) => l(a).toggleSelected(e.item.id))
        }, null, 8, ["model-value"])
      ])) : ce("", !0),
      (m(!0), B(ye, null, We(l(a).filteredColumns.value, (d) => (m(), B("td", {
        key: d.id,
        "data-col-id": d.id,
        tabindex: d.onClick ? 0 : -1,
        class: ee(d.cssClass)
      }, [
        L(i.$slots, `cell:${String(d.id)}`, {
          item: e.item,
          value: e.item[d.id],
          expanded: s.value
        }, () => [
          pe(te(e.item[d.id]), 1)
        ])
      ], 10, Ep))), 128)),
      l(a).hasActionsColumn ? (m(), B("td", xp, [
        Z("div", kp, [
          L(i.$slots, "cell:actions", { item: e.item })
        ])
      ])) : ce("", !0)
    ], 8, _p));
  }
}), Op = /* @__PURE__ */ N({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Y(
      () => a.columns.filter((c) => c.title && c.hideable !== !1)
    ), s = Y(() => !a.visibleColumns || a.visibleColumns.length === 0 ? a.columns.map((c) => c.id) : a.visibleColumns);
    function r(c) {
      return s.value.includes(c);
    }
    function i(c, d) {
      const v = s.value;
      (typeof d == "boolean" ? d : !1) ? v.includes(c) || n("update:visibleColumns", [...v, c]) : n("update:visibleColumns", v.filter((p) => p !== c));
    }
    return (c, d) => (m(), D(l(ar), null, {
      default: h(() => [
        w(l(or), { "as-child": "" }, {
          default: h(() => [
            w(l(Ge), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: h(() => [
                w(l(Rl), { class: "mr-2 h-4 w-4" }),
                d[0] || (d[0] = pe(" View ", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(l(nr), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: h(() => [
            w(l(lp), null, {
              default: h(() => [...d[1] || (d[1] = [
                pe("Toggle columns", -1)
              ])]),
              _: 1
            }),
            w(l(Pn)),
            (m(!0), B(ye, null, We(o.value, (v) => (m(), D(l(rp), {
              key: v.id,
              "model-value": r(v.id),
              "onUpdate:modelValue": (g) => i(v.id, g)
            }, {
              default: h(() => [
                pe(te(v.title), 1)
              ]),
              _: 2
            }, 1032, ["model-value", "onUpdate:modelValue"]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Sp = { class: "flex items-center justify-end py-2" }, Np = /* @__PURE__ */ N({
  __name: "DataTableToolbar",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Yt();
    return (o, s) => (m(), B("div", Sp, [
      L(o.$slots, "default"),
      w(Op, {
        columns: l(n).columns,
        "visible-columns": e.visibleColumns,
        "onUpdate:visibleColumns": s[0] || (s[0] = (r) => a("update:visibleColumns", r))
      }, null, 8, ["columns", "visible-columns"])
    ]));
  }
}), Tp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Ap = { class: "hover:!bg-transparent" }, Dp = ["colspan"], eg = /* @__PURE__ */ N({
  __name: "DataTable",
  props: /* @__PURE__ */ Ie({
    items: {},
    columns: {},
    selectMode: {},
    storagekey: {},
    hasActionsColumn: { type: Boolean, default: !0 },
    idcol: { default: "id" },
    total: {},
    isPending: { type: Boolean },
    showOptions: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !0 },
    expandable: { type: Boolean, default: !1 },
    isRowExpandable: { type: Function },
    translatableConfig: {},
    pageSizeOptions: { default: () => [25, 50, 100, 250, 500] },
    highlightedRow: {}
  }, {
    visibleColumns: {},
    visibleColumnsModifiers: {},
    itemsPerPage: {},
    itemsPerPageModifiers: {},
    page: {},
    pageModifiers: {},
    sortBy: {},
    sortByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = De(e, "visibleColumns"), s = De(e, "itemsPerPage"), r = De(e, "page"), i = De(e, "sortBy"), c = De(e, "selected"), d = Y(() => en(e.columns, (K) => K.id)), v = Y(() => en(e.items, (K) => K.id)), g = Y(() => e.items && e.items.length > 0), p = Y(() => o.value ? e.columns.filter((K) => o.value?.includes(K.id)) : e.columns), O = Y(() => p.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    Me(s, () => {
      r.value && r.value > 1 && (r.value = 1);
    });
    function I(K) {
      !i.value || i.value.key !== K ? i.value = { key: K, order: "asc" } : i.value.key === K && (i.value.order === "asc" ? i.value = { key: K, order: "desc" } : i.value = void 0);
    }
    const x = Y(() => e.items), { stateMap: P, toggle: _, toggleAll: b, allToggledState: E, clear: y } = Fo(x, "id", e.storagekey, c);
    iu(
      c,
      Y(() => e.items.map((K) => K.id))
    ), ru(() => (y(), !0), Y(() => c.value.length > 0)), Me(r, () => y());
    const { stateMap: T, toggle: A, allToggledState: k, toggleAll: M } = Fo(x, "id", e.storagekey), X = (K) => e.isRowExpandable ? e.isRowExpandable(K) : !0;
    return du({
      items: e.items,
      columns: e.columns,
      selectMode: e.selectMode,
      hasActionsColumn: e.hasActionsColumn,
      idcol: e.idcol,
      expandable: e.expandable,
      isRowExpandable: e.isRowExpandable,
      sortable: e.sortable,
      bordered: e.bordered,
      highlightedRow: e.highlightedRow,
      isPending: e.isPending,
      filteredColumns: p,
      columnsMap: d,
      itemsMap: v,
      colNum: O,
      hasItems: g,
      selected: c,
      selectedMap: P,
      expandedMap: T,
      sortBy: i,
      toggleSelected: _,
      toggleAllSelected: b,
      allSelectedState: E,
      clearSelected: y,
      toggleExpand: A,
      toggleExpandAll: M,
      allExpandedState: k,
      updateSort: I,
      isRowExpandableFn: X,
      onClickRow: (K) => n("clickRow", K),
      onClickColumn: (K, le) => {
        const G = d.value[K], we = v.value[le];
        G && we && G.onClick?.(we);
      }
    }), t({ selected: c, clearSelected: y }), (K, le) => (m(), B("div", Tp, [
      e.showOptions ? (m(), D(Np, {
        key: 0,
        "visible-columns": o.value,
        "onUpdate:visibleColumns": le[0] || (le[0] = (G) => o.value = G)
      }, {
        default: h(() => [
          L(K.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : ce("", !0),
      w(fu, null, {
        default: h(() => [
          e.isPending ? (m(), D(bp, { key: 0 })) : ce("", !0),
          Z("div", {
            class: ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            Z("table", {
              class: ee(["[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(pp, {
                "visible-columns": o.value,
                "onUpdate:visibleColumns": le[1] || (le[1] = (G) => o.value = G)
              }, null, 8, ["visible-columns"]),
              w(uu, null, {
                default: h(() => [
                  g.value ? (m(!0), B(ye, { key: 0 }, We(e.items, (G) => (m(), B(ye, {
                    key: G.id
                  }, [
                    w(Cp, { item: G }, yr({ _: 2 }, [
                      We(K.$slots, (we, q) => ({
                        name: q,
                        fn: h((ne) => [
                          L(K.$slots, q, z({ ref_for: !0 }, ne))
                        ])
                      }))
                    ]), 1032, ["item"]),
                    e.expandable && l(T)[G[e.idcol]] && X(G) ? L(K.$slots, "expanded-row-raw", {
                      key: 0,
                      item: G,
                      colNum: O.value
                    }, () => [
                      Z("tr", Ap, [
                        Z("td", {
                          colspan: O.value,
                          class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                        }, [
                          L(K.$slots, "expanded-row", { item: G }, () => [
                            le[4] || (le[4] = pe(" .... ", -1))
                          ])
                        ], 8, Dp)
                      ])
                    ]) : ce("", !0)
                  ], 64))), 128)) : (m(), D(Tf, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(op, {
        total: e.total,
        page: r.value,
        "items-per-page": s.value,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered,
        "onUpdate:page": le[2] || (le[2] = (G) => r.value = G),
        "onUpdate:itemsPerPage": le[3] || (le[3] = (G) => s.value = G)
      }, {
        bulk: h((G) => [
          L(K.$slots, "bulk", ta(La(G)))
        ]),
        _: 3
      }, 8, ["total", "page", "items-per-page", "page-size-options", "bordered"])
    ]));
  }
});
function Fo(e, t, a, n) {
  const o = n || (a ? xc(a, []) : re([])), s = Y(
    () => Object.fromEntries(o.value.map((g) => [g, !0]))
  ), r = (g) => o.value = nu(o.value, g), i = Y(
    () => o.value.length > 0 ? o.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function c() {
    o.value = [];
  }
  function d() {
    o.value = e.value.map((g) => g[t]);
  }
  return {
    state: o,
    stateMap: s,
    toggle: r,
    allToggledState: i,
    toggleAll: () => i.value === !1 || i.value === "indeterminate" ? d() : c(),
    clear: c
  };
}
const Pp = ["datetime", "title"], tg = /* @__PURE__ */ N({
  __name: "DateFormat",
  props: {
    date: {},
    format: { default: "DD.MM.YYYY HH:mm" },
    relative: { type: Boolean, default: !1 },
    locale: { default: "de-DE" }
  },
  setup(e) {
    const t = e, a = {
      "date.daysAgo": "{count} days ago",
      "date.hoursAgo": "{count} hours ago",
      "date.minutesAgo": "{count} minutes ago",
      "date.justNow": "Just now"
    };
    function n(c, d) {
      let v = a[c] || c;
      return d && Object.entries(d).forEach(([g, p]) => {
        v = v.replace(`{${g}}`, String(p));
      }), v;
    }
    const o = Y(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ rc(o, t.format, {
      locales: t.locale
    }), r = Y(() => {
      if (!t.relative)
        return null;
      const d = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), v = Math.floor(d / 1e3), g = Math.floor(v / 60), p = Math.floor(g / 60), O = Math.floor(p / 24);
      return O > 0 ? n("date.daysAgo", { count: O }) : p > 0 ? n("date.hoursAgo", { count: p }) : g > 0 ? n("date.minutesAgo", { count: g }) : n("date.justNow");
    }), i = Y(() => t.relative ? r.value : s.value);
    return (c, d) => (m(), B("time", {
      datetime: o.value.toISOString(),
      title: t.relative ? l(s) : void 0,
      class: "whitespace-nowrap"
    }, te(i.value), 9, Pp));
  }
}), Lp = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, Ip = { class: "text-muted-foreground" }, $p = { class: "font-semibold" }, Mp = {
  key: 1,
  class: "text-muted-foreground"
}, Uo = /* @__PURE__ */ N({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    function t(a) {
      return {
        "common.novalue": "No value"
      }[a] || a;
    }
    return (a, n) => (m(), B("div", Lp, [
      e.value?.length ? (m(!0), B(ye, { key: 0 }, We(e.value, (o, s) => (m(), B("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        Z("span", Ip, " ≥" + te(`${o.from}:`), 1),
        n[0] || (n[0] = pe()),
        Z("span", $p, te(o.value), 1)
      ]))), 128)) : (m(), B("span", Mp, te(t("common.novalue")), 1))
    ]));
  }
}), zt = bt([]), Rp = Y(() => en(zt.value, (e) => e.key)), In = re({});
function sr(e) {
  const t = zt.value.findIndex((a) => a.key === e);
  t !== -1 && zt.value.splice(t, 1), Cs.remove(e);
}
const rr = (e) => {
  In.value[e] = !1, Rp.value[e]?.onClose?.(), setTimeout(() => sr(e), 600);
}, Bp = (e) => (e.key = e.key ?? `${Math.random()}`, zt.value.push(e), Jo(zt), In.value[e.key] = !0, Cs.add(() => (rr(e.key), !0), e.key), e.key), Vp = { close: rr, visible: In, open: Bp, instances: zt, removeInstance: sr }, lr = () => Vp, ag = /* @__PURE__ */ N({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: a, instances: n } = lr();
    return (o, s) => (m(!0), B(ye, null, We(l(n), (r) => (m(), D(ot(r.component), z({
      key: r.key,
      open: l(a)[r.key]
    }, { ref_for: !0 }, r.componentProps || {}, {
      "onUpdate:open": (i) => !i && l(t)(r.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), Fp = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, Up = /* @__PURE__ */ N({
  __name: "EmptyMini",
  setup(e) {
    function t(a) {
      return {
        "common.noValues": "No values"
      }[a] || a;
    }
    return (a, n) => (m(), B("div", Fp, [
      w(l(as), { size: 16 }),
      Z("span", null, [
        L(a.$slots, "default", {}, () => [
          pe(te(t("common.noValues")), 1)
        ])
      ])
    ]));
  }
}), zp = { class: "flex-1" }, Wp = { class: "flex gap-1 items-center" }, jp = {
  key: 0,
  class: "flex-1"
}, Gp = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, Hp = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ Ie({
    placeholder: { default: "Filter.." },
    addItemButtonLabel: { default: "Add Item" },
    multiple: { type: Boolean },
    options: {},
    showAddItemButton: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = De(e, "modelValue"), a = re(""), { startsWith: n } = il({ sensitivity: "base" }), o = Y(() => he(e.options).filter((i) => n(i.label, a.value))), s = Y(() => !!he(e.options).length), { t: r } = dt();
    return (i, c) => (m(), B(ye, null, [
      w(l(cl), {
        modelValue: t.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => t.value = d),
        multiple: e.multiple
      }, {
        default: h(() => [
          w(l(ul), {
            modelValue: a.value,
            "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
            autofocus: "",
            disabled: !s.value,
            placeholder: e.placeholder,
            class: ee(l(V)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          o.value.length ? ce("", !0) : (m(), D(Up, { key: 0 })),
          w(l(dl), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: h(() => [
              (m(!0), B(ye, null, We(o.value, (d) => (m(), D(l(fl), {
                key: String(d.value),
                value: d.value,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: h(() => [
                  Z("div", zp, [
                    L(i.$slots, "option", { option: d }, () => [
                      pe(te(d.label), 1)
                    ])
                  ]),
                  w(l(pl), null, {
                    default: h(() => [
                      w(l(Ia), { size: 12 })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      Z("div", Wp, [
        e.showAddItemButton ? (m(), B("div", jp, [
          w(Ge, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            onClick: c[2] || (c[2] = (d) => i.$emit("onAddItem"))
          }, {
            default: h(() => [
              w(l(yn)),
              pe(" " + te(e.addItemButtonLabel), 1)
            ]),
            _: 1
          })
        ])) : ce("", !0),
        s.value && e.multiple ? (m(), B("div", Gp, te(l(r)("common.elementCountSelected", { count: t.value.length })), 1)) : ce("", !0)
      ])
    ], 64));
  }
}), Yp = /* @__PURE__ */ N({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(ml), z({ "data-slot": "alert-dialog" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kp = /* @__PURE__ */ N({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(gl), z(l(a), {
      class: l(V)(l(xt)(), t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xp = /* @__PURE__ */ N({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(vl), z(l(a), {
      class: l(V)(
        l(xt)({ variant: "outline" }),
        "mt-2 sm:mt-0",
        t.class
      )
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qp = /* @__PURE__ */ N({
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
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(hl), null, {
      default: h(() => [
        w(l(bl), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        w(l(_l), z({ "data-slot": "alert-dialog-content" }, l(s), {
          class: l(V)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: h(() => [
            L(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Jp = /* @__PURE__ */ N({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(yl), z({ "data-slot": "alert-dialog-description" }, l(a), {
      class: l(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zp = /* @__PURE__ */ N({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "alert-dialog-footer",
      class: ee(
        l(V)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Qp = /* @__PURE__ */ N({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "alert-dialog-header",
      class: ee(l(V)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), em = /* @__PURE__ */ N({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(wl), z({ "data-slot": "alert-dialog-title" }, l(a), {
      class: l(V)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tm = /* @__PURE__ */ N({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ Ie({
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
    const t = e, a = De(e, "open"), n = re(!1);
    async function o() {
      n.value = !0, (t.onOk ? await t.onOk() : !0) && close(), n.value = !1;
    }
    const { t: s } = dt();
    return (r, i) => (m(), D(l(Yp), {
      open: a.value,
      "onUpdate:open": i[2] || (i[2] = (c) => a.value = c)
    }, {
      default: h(() => [
        w(l(qp), null, {
          default: h(() => [
            w(l(Qp), null, {
              default: h(() => [
                w(l(em), null, {
                  default: h(() => [
                    pe(te(e.title || l(s)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                w(l(Jp), null, {
                  default: h(() => [
                    pe(te(e.description || l(s)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(Zp), null, {
              default: h(() => [
                w(l(Xp), {
                  disabled: n.value,
                  onClick: i[0] || (i[0] = (c) => a.value = !1)
                }, {
                  default: h(() => [
                    pe(te(l(s)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                w(l(Kp), {
                  loading: n.value,
                  onClick: i[1] || (i[1] = (c) => o())
                }, {
                  default: h(() => [
                    pe(te(l(s)("common.continue")), 1)
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
}), am = /* @__PURE__ */ N({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(pn), z({ "data-slot": "dialog" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ N({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Ke(a);
    return (o, s) => (m(), D(l(hn), z({ "data-slot": "dialog-description" }, l(n), {
      class: l(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), om = /* @__PURE__ */ N({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "dialog-header",
      class: ee(l(V)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), sm = /* @__PURE__ */ N({
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
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(gn), null, {
      default: h(() => [
        w(l(mn), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            w(l(vn), z({
              class: l(V)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, l(s), {
              onPointerDownOutside: i[0] || (i[0] = (c) => {
                const d = c.detail.originalEvent, v = d.target;
                (d.offsetX > v.clientWidth || d.offsetY > v.clientHeight) && c.preventDefault();
              })
            }), {
              default: h(() => [
                L(r.$slots, "default"),
                w(l(Zo), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: h(() => [
                    w(l(fa), { class: "w-4 h-4" }),
                    i[1] || (i[1] = Z("span", { class: "sr-only" }, "Close", -1))
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
}), rm = /* @__PURE__ */ N({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Ke(a);
    return (o, s) => (m(), D(l(bn), z({ "data-slot": "dialog-title" }, l(n), {
      class: l(V)("text-lg leading-none font-semibold", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lm = ["innerHTML"], ir = /* @__PURE__ */ N({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ Ie({
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
    const t = De(e, "open");
    return (a, n) => (m(), D(l(am), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (o) => t.value = o)
    }, {
      default: h(() => [
        w(l(sm), { class: "!max-w-max min-w-[435px]" }, {
          default: h(() => [
            w(l(om), null, {
              default: h(() => [
                w(l(rm), null, {
                  default: h(() => [
                    Z("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, lm)
                  ]),
                  _: 1
                }),
                e.description ? (m(), D(l(nm), { key: 0 }, {
                  default: h(() => [
                    pe(te(e.description), 1)
                  ]),
                  _: 1
                })) : ce("", !0)
              ]),
              _: 1
            }),
            L(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, t.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(t);
    }
  } catch (a) {
    console.error("vite-plugin-css-injected-by-js", a);
  }
})();
const im = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cm = (e) => typeof e < "u";
function um(e) {
  return JSON.parse(JSON.stringify(e));
}
function zo(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: d,
    deep: v = !1,
    defaultValue: g,
    shouldEmit: p
  } = n, O = Wt(), I = a || O?.emit || ((o = O?.$emit) == null ? void 0 : o.bind(O)) || ((r = (s = O?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(O?.proxy));
  let x = d;
  t || (t = "modelValue"), x = x || `update:${t.toString()}`;
  const P = (E) => i ? typeof i == "function" ? i(E) : um(E) : E, _ = () => cm(e[t]) ? P(e[t]) : g, b = (E) => {
    p ? p(E) && I(x, E) : I(x, E);
  };
  if (c) {
    const E = _(), y = re(E);
    let T = !1;
    return Me(
      () => e[t],
      (A) => {
        T || (T = !0, y.value = P(A), ca(() => T = !1));
      }
    ), Me(
      y,
      (A) => {
        !T && (A !== e[t] || v) && b(A);
      },
      { deep: v }
    ), y;
  } else
    return Y({
      get() {
        return _();
      },
      set(E) {
        b(E);
      }
    });
}
const [$n, dm] = _n("DrawerRoot"), cr = /* @__PURE__ */ new WeakMap();
function Ae(e, t, a = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const n = {};
  Object.entries(t).forEach(([o, s]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, s);
      return;
    }
    n[o] = e.style[o], e.style[o] = s;
  }), !a && cr.set(e, n);
}
function fm(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const a = cr.get(e);
  a && Object.entries(a).forEach(([n, o]) => {
    e.style[n] = o;
  });
}
function xa(e, t) {
  const a = window.getComputedStyle(e), n = a.transform || a.webkitTransform || a.mozTransform;
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Oe(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Oe(t) ? 5 : 4]) : null);
}
function pm(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Oe(e) {
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
function qa(e, t) {
  if (!e)
    return () => {
    };
  const a = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = a;
  };
}
function mm(...e) {
  return (...t) => {
    for (const a of e)
      typeof a == "function" && a(...t);
  };
}
const _e = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, ur = 0.4, gm = 0.25, vm = 100, dr = 8, ka = 16, fr = 26, Wo = "vaul-dragging";
function hm({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: a,
  overlayRef: n,
  fadeFromIndex: o,
  onSnapPointChange: s,
  direction: r
}) {
  const i = re(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function c() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  ia(() => {
    typeof window < "u" && window.addEventListener("resize", c);
  }), xr(() => {
    typeof window < "u" && window.removeEventListener("resize", c);
  });
  const d = Y(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), v = Y(
    () => t.value && t.value.length > 0 && (o?.value || o?.value === 0) && !Number.isNaN(o?.value) && t.value[o?.value ?? -1] === e.value || !t.value
  ), g = Y(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.findIndex((E) => E === e.value)) ?? null;
    }
  ), p = Y(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.map((E) => {
        const y = typeof E == "string";
        let T = 0;
        if (y && (T = Number.parseInt(E, 10)), Oe(r.value)) {
          const k = y ? T : i.value ? E * i.value.innerHeight : 0;
          return i.value ? r.value === "bottom" ? i.value.innerHeight - k : -i.value.innerHeight + k : k;
        }
        const A = y ? T : i.value ? E * i.value.innerWidth : 0;
        return i.value ? r.value === "right" ? i.value.innerWidth - A : -i.value.innerWidth + A : A;
      })) ?? [];
    }
  ), O = Y(
    () => {
      var b;
      return g.value !== null ? (b = p.value) == null ? void 0 : b[g.value] : null;
    }
  ), I = (b) => {
    var E, y, T, A;
    const k = ((E = p.value) == null ? void 0 : E.findIndex((M) => M === b)) ?? null;
    ca(() => {
      var M;
      s(k, p.value), Ae((M = a.value) == null ? void 0 : M.$el, {
        transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`,
        transform: Oe(r.value) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
      });
    }), p.value && k !== p.value.length - 1 && k !== o?.value ? Ae((y = n.value) == null ? void 0 : y.$el, {
      transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`,
      opacity: "0"
    }) : Ae((T = n.value) == null ? void 0 : T.$el, {
      transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`,
      opacity: "1"
    }), e.value = k !== null ? ((A = t.value) == null ? void 0 : A[k]) ?? null : null;
  };
  Me(
    [e, p, t],
    () => {
      var b;
      if (e.value) {
        const E = ((b = t.value) == null ? void 0 : b.findIndex((y) => y === e.value)) ?? -1;
        p.value && E !== -1 && typeof p.value[E] == "number" && I(p.value[E]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function x({
    draggedDistance: b,
    closeDrawer: E,
    velocity: y,
    dismissible: T
  }) {
    var A, k, M;
    if (o.value === void 0)
      return;
    const X = r.value === "bottom" || r.value === "right" ? (O.value ?? 0) - b : (O.value ?? 0) + b, K = g.value === o.value - 1, le = g.value === 0, G = b > 0;
    if (K && Ae((A = n.value) == null ? void 0 : A.$el, {
      transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`
    }), y > 2 && !G) {
      T ? E() : I(p.value[0]);
      return;
    }
    if (y > 2 && G && p && t.value) {
      I(p.value[t.value.length - 1]);
      return;
    }
    const we = (k = p.value) == null ? void 0 : k.reduce((ne, H) => typeof ne != "number" || typeof H != "number" ? ne : Math.abs(H - X) < Math.abs(ne - X) ? H : ne), q = Oe(r.value) ? window.innerHeight : window.innerWidth;
    if (y > ur && Math.abs(b) < q * 0.4) {
      const ne = G ? 1 : -1;
      if (ne > 0 && d) {
        I(p.value[(((M = t.value) == null ? void 0 : M.length) ?? 0) - 1]);
        return;
      }
      if (le && ne < 0 && T && E(), g.value === null)
        return;
      I(p.value[g.value + ne]);
      return;
    }
    I(we);
  }
  function P({ draggedDistance: b }) {
    var E;
    if (O.value === null)
      return;
    const y = r.value === "bottom" || r.value === "right" ? O.value - b : O.value + b;
    (r.value === "bottom" || r.value === "right") && y < p.value[p.value.length - 1] || (r.value === "top" || r.value === "left") && y > p.value[p.value.length - 1] || Ae((E = a.value) == null ? void 0 : E.$el, {
      transform: Oe(r.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    });
  }
  function _(b, E) {
    if (!t.value || typeof g.value != "number" || !p.value || o.value === void 0)
      return null;
    const y = g.value === o.value - 1;
    if (g.value >= o.value && E)
      return 0;
    if (y && !E)
      return 1;
    if (!v.value && !y)
      return null;
    const T = y ? g.value + 1 : g.value - 1, A = y ? p.value[T] - p.value[T - 1] : p.value[T + 1] - p.value[T], k = b / Math.abs(A);
    return y ? 1 - k : k;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: v,
    getPercentageDragged: _,
    activeSnapPointIndex: g,
    onRelease: x,
    onDrag: P,
    snapPointsOffset: p
  };
}
function jo() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Qt = null;
function bm(e) {
  const { isOpen: t, modal: a, nested: n, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: r } = e, i = re(typeof window < "u" ? window.location.href : ""), c = re(0);
  function d() {
    if (jo() && Qt === null && t.value && !r.value) {
      Qt = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: g, innerHeight: p } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-c.value}px`,
        left: `${-g}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const O = p - window.innerHeight;
          O && c.value >= p && (document.body.style.top = `-${c.value + O}px`);
        });
      }, 300);
    }
  }
  function v() {
    if (jo() && Qt !== null && !r.value) {
      const g = -Number.parseInt(document.body.style.top, 10), p = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Qt), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(p, g);
      }), Qt = null;
    }
  }
  return ia(() => {
    function g() {
      c.value = window.scrollY;
    }
    g(), window.addEventListener("scroll", g), qo(() => {
      window.removeEventListener("scroll", g);
    });
  }), Me([t, o, i], () => {
    n.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), a.value || setTimeout(() => {
      v();
    }, 500)) : v());
  }), { restorePositionSetting: v };
}
function _m(e, t) {
  return e && e.value ? e : t;
}
function ym(e) {
  const {
    emitDrag: t,
    emitRelease: a,
    emitClose: n,
    emitOpenChange: o,
    open: s,
    dismissible: r,
    nested: i,
    modal: c,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: v,
    scrollLockTimeout: g,
    closeThreshold: p,
    activeSnapPoint: O,
    fadeFromIndex: I,
    direction: x,
    noBodyStyles: P,
    handleOnly: _,
    preventScrollRestoration: b
  } = e, E = re(s.value ?? !1), y = re(!1), T = re(!1), A = re(!1), k = re(null), M = re(null), X = re(null), K = re(null), le = re(null), G = re(!1), we = re(null), q = re(0), ne = re(!1);
  re(0);
  const H = re(null);
  re(0);
  const Ve = Y(() => {
    var u;
    return ((u = H.value) == null ? void 0 : u.$el.getBoundingClientRect().height) || 0;
  }), U = _m(
    e.snapPoints,
    re(void 0)
  ), wt = Y(() => {
    var u;
    return U && (((u = U.value) == null ? void 0 : u.length) ?? 0) > 0;
  }), Fe = re(null), {
    activeSnapPointIndex: Xe,
    onRelease: ft,
    snapPointsOffset: Ee,
    onDrag: Ne,
    shouldFade: qe,
    getPercentageDragged: Ot
  } = hm({
    snapPoints: U,
    activeSnapPoint: O,
    drawerRef: H,
    fadeFromIndex: I,
    overlayRef: k,
    onSnapPointChange: ge,
    direction: x
  });
  function ge(u, f) {
    U.value && u === f.length - 1 && (M.value = /* @__PURE__ */ new Date());
  }
  bm({
    isOpen: E,
    modal: c,
    nested: i,
    hasBeenOpened: y,
    noBodyStyles: P,
    preventScrollRestoration: b
  });
  function He() {
    return (window.innerWidth - fr) / window.innerWidth;
  }
  function Je(u, f) {
    var S;
    if (!u)
      return !1;
    let R = u;
    const ae = (S = window.getSelection()) == null ? void 0 : S.toString(), se = H.value ? xa(H.value.$el, x.value) : null, Q = /* @__PURE__ */ new Date();
    if (R.hasAttribute("data-vaul-no-drag") || R.closest("[data-vaul-no-drag]"))
      return !1;
    if (x.value === "right" || x.value === "left")
      return !0;
    if (M.value && Q.getTime() - M.value.getTime() < 500)
      return !1;
    if (se !== null && (x.value === "bottom" ? se > 0 : se < 0))
      return !0;
    if (ae && ae.length > 0)
      return !1;
    if (le.value && Q.getTime() - le.value.getTime() < g.value && se === 0 || f)
      return le.value = Q, !1;
    for (; R; ) {
      if (R.scrollHeight > R.clientHeight) {
        if (R.scrollTop !== 0)
          return le.value = /* @__PURE__ */ new Date(), !1;
        if (R.getAttribute("role") === "dialog")
          return !0;
      }
      R = R.parentNode;
    }
    return !0;
  }
  function Ze(u) {
    !r.value && !U.value || H.value && !H.value.$el.contains(u.target) || (T.value = !0, X.value = /* @__PURE__ */ new Date(), u.target.setPointerCapture(u.pointerId), q.value = Oe(x.value) ? u.clientY : u.clientX);
  }
  function pt(u) {
    var f, S, R, ae, se, Q;
    if (H.value && T.value) {
      const C = x.value === "bottom" || x.value === "right" ? 1 : -1, $ = (q.value - (Oe(x.value) ? u.clientY : u.clientX)) * C, ie = $ > 0, ve = U.value && !r.value && !ie;
      if (ve && Xe.value === 0)
        return;
      const tt = Math.abs($), Tt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let Ue = tt / Ve.value;
      const st = Ot(tt, ie);
      if (st !== null && (Ue = st), ve && Ue >= 1 || !G.value && !Je(u.target, ie))
        return;
      if ((f = H?.value) == null || f.$el.classList.add(Wo), G.value = !0, Ae((S = H.value) == null ? void 0 : S.$el, {
        transition: "none"
      }), Ae((R = k.value) == null ? void 0 : R.$el, {
        transition: "none"
      }), U.value && Ne({ draggedDistance: $ }), ie && !U.value) {
        const rt = pm($), ma = Math.min(rt * -1, 0) * C;
        Ae((ae = H.value) == null ? void 0 : ae.$el, {
          transform: Oe(x.value) ? `translate3d(0, ${ma}px, 0)` : `translate3d(${ma}px, 0, 0)`
        });
        return;
      }
      const Fa = 1 - Ue;
      if ((qe.value || I.value && Xe.value === I.value - 1) && (t(Ue), Ae(
        (se = k.value) == null ? void 0 : se.$el,
        {
          opacity: `${Fa}`,
          transition: "none"
        },
        !0
      )), Tt && k.value && d.value) {
        const rt = Math.min(He() + Ue * (1 - He()), 1), ma = 8 - Ue * 8, Rn = Math.max(0, 14 - Ue * 14);
        Ae(
          Tt,
          {
            borderRadius: `${ma}px`,
            transform: Oe(x.value) ? `scale(${rt}) translate3d(0, ${Rn}px, 0)` : `scale(${rt}) translate3d(${Rn}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!U.value) {
        const rt = tt * C;
        Ae((Q = H.value) == null ? void 0 : Q.$el, {
          transform: Oe(x.value) ? `translate3d(0, ${rt}px, 0)` : `translate3d(${rt}px, 0, 0)`
        });
      }
    }
  }
  function Qe() {
    var u;
    if (!H.value)
      return;
    const f = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), S = xa(H.value.$el, x.value);
    Ae(H.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`
    }), Ae((u = k.value) == null ? void 0 : u.$el, {
      transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`,
      opacity: "1"
    }), d.value && S && S > 0 && E.value && Ae(
      f,
      {
        borderRadius: `${dr}px`,
        overflow: "hidden",
        ...Oe(x.value) ? {
          transform: `scale(${He()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${He()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${_e.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${_e.EASE.join(",")})`
      },
      !0
    );
  }
  function et(u) {
    H.value && (n(), u || (E.value = !1), window.setTimeout(() => {
      U.value && (O.value = U.value[0]);
    }, _e.DURATION * 1e3));
  }
  la(() => {
    if (!E.value && d.value && im) {
      const u = setTimeout(() => {
        fm(document.body);
      }, 200);
      return () => clearTimeout(u);
    }
  }), Me(s, () => {
    E.value = s.value, s.value || et();
  });
  function St(u) {
    if (!T.value || !H.value)
      return;
    H.value.$el.classList.remove(Wo), G.value = !1, T.value = !1, K.value = /* @__PURE__ */ new Date();
    const f = xa(H.value.$el, x.value);
    if (!Je(u.target, !1) || !f || Number.isNaN(f) || X.value === null)
      return;
    const S = K.value.getTime() - X.value.getTime(), R = q.value - (Oe(x.value) ? u.clientY : u.clientX), ae = Math.abs(R) / S;
    if (ae > 0.05 && (A.value = !0, window.setTimeout(() => {
      A.value = !1;
    }, 200)), U.value) {
      const Q = x.value === "bottom" || x.value === "right" ? 1 : -1;
      ft({
        draggedDistance: R * Q,
        closeDrawer: et,
        velocity: ae,
        dismissible: r.value
      }), a(!0);
      return;
    }
    if (x.value === "bottom" || x.value === "right" ? R > 0 : R < 0) {
      Qe(), a(!0);
      return;
    }
    if (ae > ur) {
      et(), a(!1);
      return;
    }
    const se = Math.min(
      H.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (f >= se * p.value) {
      et(), a(!1);
      return;
    }
    a(!0), Qe();
  }
  Me(E, (u) => {
    u && (M.value = /* @__PURE__ */ new Date()), o(u);
  }, { immediate: !0 });
  function mt(u) {
    var f, S;
    const R = u ? (window.innerWidth - ka) / window.innerWidth : 1, ae = u ? -16 : 0;
    we.value && window.clearTimeout(we.value), Ae((f = H.value) == null ? void 0 : f.$el, {
      transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`,
      transform: `scale(${R}) translate3d(0, ${ae}px, 0)`
    }), !u && (S = H.value) != null && S.$el && (we.value = window.setTimeout(() => {
      var se, Q;
      const C = xa((se = H.value) == null ? void 0 : se.$el, x.value);
      Ae((Q = H.value) == null ? void 0 : Q.$el, {
        transition: "none",
        transform: Oe(x.value) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
      });
    }, 500));
  }
  function Nt(u) {
    var f;
    if (u < 0)
      return;
    const S = Oe(x.value) ? window.innerHeight : window.innerWidth, R = (S - ka) / S, ae = R + u * (1 - R), se = -16 + u * ka;
    Ae((f = H.value) == null ? void 0 : f.$el, {
      transform: Oe(x.value) ? `scale(${ae}) translate3d(0, ${se}px, 0)` : `scale(${ae}) translate3d(${se}px, 0, 0)`,
      transition: "none"
    });
  }
  function Xt(u) {
    var f;
    const S = Oe(x.value) ? window.innerHeight : window.innerWidth, R = u ? (S - ka) / S : 1, ae = u ? -16 : 0;
    u && Ae((f = H.value) == null ? void 0 : f.$el, {
      transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`,
      transform: Oe(x.value) ? `scale(${R}) translate3d(0, ${ae}px, 0)` : `scale(${R}) translate3d(${ae}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: E,
    modal: c,
    keyboardIsOpen: ne,
    hasBeenOpened: y,
    drawerRef: H,
    drawerHeightRef: Ve,
    overlayRef: k,
    handleRef: Fe,
    isDragging: T,
    dragStartTime: X,
    isAllowedToDrag: G,
    snapPoints: U,
    activeSnapPoint: O,
    hasSnapPoints: wt,
    pointerStart: q,
    dismissible: r,
    snapPointsOffset: Ee,
    direction: x,
    shouldFade: qe,
    fadeFromIndex: I,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: v,
    onPress: Ze,
    onDrag: pt,
    onRelease: St,
    closeDrawer: et,
    onNestedDrag: Nt,
    onNestedRelease: Xt,
    onNestedOpenChange: mt,
    emitClose: n,
    emitDrag: t,
    emitRelease: a,
    emitOpenChange: o,
    nested: i,
    handleOnly: _,
    noBodyStyles: P
  };
}
const wm = /* @__PURE__ */ N({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: gm },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: vm },
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
  setup(e, { expose: t, emit: a }) {
    const n = e, o = a;
    wr();
    const s = Y(() => n.fadeFromIndex ?? (n.snapPoints && n.snapPoints.length - 1)), r = zo(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = zo(n, "activeSnapPoint", o, {
      passive: n.activeSnapPoint === void 0
    }), c = {
      emitDrag: (I) => o("drag", I),
      emitRelease: (I) => o("release", I),
      emitClose: () => o("close"),
      emitOpenChange: (I) => {
        o("update:open", I), setTimeout(() => {
          o("animationEnd", I);
        }, _e.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: v, modal: g, isOpen: p } = dm(
      ym({
        ...c,
        ...Za(n),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: r
      })
    );
    function O(I) {
      if (r.value !== void 0) {
        c.emitOpenChange(I);
        return;
      }
      p.value = I, I ? v.value = !0 : d();
    }
    return t({
      open: p
    }), (I, x) => (m(), D(l(pn), {
      open: l(p),
      modal: l(g),
      "onUpdate:open": O
    }, {
      default: h(() => [
        L(I.$slots, "default", { open: l(p) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Em = /* @__PURE__ */ N({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: a, isOpen: n, shouldFade: o } = $n();
    return (s, r) => (m(), D(l(mn), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(n) && l(a) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(n) && l(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), xm = () => () => {
};
function km() {
  const { direction: e, isOpen: t, shouldScaleBackground: a, setBackgroundColorOnScale: n, noBodyStyles: o } = $n(), s = re(null), r = re(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - fr) / window.innerWidth;
  }
  la((c) => {
    if (t.value && a.value) {
      s.value && clearTimeout(s.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      mm(
        n.value && !o.value ? qa(document.body, { background: "black" }) : xm,
        qa(d, {
          transformOrigin: Oe(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${_e.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${_e.EASE.join(",")})`
        })
      );
      const v = qa(d, {
        borderRadius: `${dr}px`,
        overflow: "hidden",
        ...Oe(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      c(() => {
        v(), s.value = window.setTimeout(() => {
          r.value ? document.body.style.background = r.value : document.body.style.removeProperty("background");
        }, _e.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Cm = /* @__PURE__ */ N({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: a,
      snapPointsOffset: n,
      hasSnapPoints: o,
      drawerRef: s,
      onPress: r,
      onDrag: i,
      onRelease: c,
      modal: d,
      emitOpenChange: v,
      dismissible: g,
      keyboardIsOpen: p,
      closeDrawer: O,
      direction: I,
      handleOnly: x
    } = $n();
    km();
    const P = re(!1), _ = Y(() => n.value && n.value.length > 0 ? `${n.value[0]}px` : "0");
    function b(T) {
      if (!d.value || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      p.value && (p.value = !1), g.value ? v(!1) : T.preventDefault();
    }
    function E(T) {
      x.value || r(T);
    }
    function y(T) {
      x.value || i(T);
    }
    return la(() => {
      o.value && window.requestAnimationFrame(() => {
        P.value = !0;
      });
    }), (T, A) => (m(), D(l(vn), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l(I),
      "data-vaul-delayed-snap-points": P.value ? "true" : "false",
      "data-vaul-snap-points": l(a) && l(o) ? "true" : "false",
      style: Ko({ "--snap-point-height": _.value }),
      onPointerdown: E,
      onPointermove: y,
      onPointerup: l(c),
      onPointerDownOutside: b,
      onOpenAutoFocus: A[0] || (A[0] = Er(() => {
      }, ["prevent"])),
      onEscapeKeyDown: A[1] || (A[1] = (k) => {
        l(g) || k.preventDefault();
      })
    }, {
      default: h(() => [
        L(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Om = /* @__PURE__ */ N({
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
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(wm), z({ "data-slot": "drawer" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ N({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(Em), z({ "data-slot": "drawer-overlay" }, l(a), {
      class: l(V)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), Nm = /* @__PURE__ */ N({
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
    const a = e, o = Ce(a, t);
    return (s, r) => (m(), D(l(gn), null, {
      default: h(() => [
        w(Sm),
        w(l(Cm), z({ "data-slot": "drawer-content" }, l(o), {
          class: l(V)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            a.class
          )
        }), {
          default: h(() => [
            r[0] || (r[0] = Z("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            L(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Tm = /* @__PURE__ */ N({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(hn), z({ "data-slot": "drawer-description" }, l(a), {
      class: l(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Am = /* @__PURE__ */ N({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "drawer-header",
      class: ee(l(V)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Dm = /* @__PURE__ */ N({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), D(l(bn), z({ "data-slot": "drawer-title" }, l(a), {
      class: l(V)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pm = ["innerHTML"], Lm = { class: "px-4 flex-1 overflow-auto select-text" }, Im = /* @__PURE__ */ N({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ Ie({
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
    const t = De(e, "open");
    return (a, n) => (m(), D(l(Om), {
      open: t.value,
      "onUpdate:open": n[1] || (n[1] = (o) => t.value = o),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: h(() => [
        w(l(Nm), { class: "!max-w-[800px]" }, {
          default: h(() => [
            w(l(Am), { class: "!pb-0" }, {
              default: h(() => [
                w(l(Dm), { class: "flex items-center gap-2" }, {
                  default: h(() => [
                    Z("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, Pm),
                    w(Ge, {
                      variant: "ghost",
                      onClick: n[0] || (n[0] = (o) => t.value = !1)
                    }, {
                      default: h(() => [
                        w(l(fa))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (m(), D(l(Tm), { key: 0 }, {
                  default: h(() => [
                    pe(te(e.description), 1)
                  ]),
                  _: 1
                })) : ce("", !0)
              ]),
              _: 1
            }),
            Z("div", Lm, [
              L(a.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), $m = /* @__PURE__ */ N({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ Ie({
    dialogConfig: {},
    componentConfig: {},
    type: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = De(e, "open"), a = re(!1);
    async function n() {
      a.value = !0, (await e.dialogConfig.onOk?.() ?? !0) && (t.value = !1), a.value = !1;
    }
    return (o, s) => (m(), D(ot(e.type === "drawer" ? Im : ir), z(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": s[0] || (s[0] = (r) => t.value = r)
    }), {
      default: h(() => [
        (m(), D(ot(e.componentConfig.component), z(e.componentConfig.componentProps, { onSubmitSuccess: n }), null, 16))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Mm = { class: "mt-1" }, Mn = /* @__PURE__ */ N({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ Ie({
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
    const t = De(e, "open"), a = re(e.initialValue), { t: n } = dt(), o = re(!1);
    async function s() {
      o.value = !0, (await e.dialogConfig.onOk?.(a.value) ?? !0) && (t.value = !1), o.value = !1;
    }
    return (r, i) => (m(), D(ir, z(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[1] || (i[1] = (c) => t.value = c)
    }), {
      default: h(() => [
        (m(), D(ot(e.componentConfig.component), z(e.componentConfig.componentProps, {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (c) => a.value = c)
        }), null, 16, ["modelValue"])),
        Z("div", Mm, [
          w(Ge, {
            type: "Submit",
            disabled: o.value,
            size: "sm",
            onClick: s
          }, {
            default: h(() => [
              pe(te(e.dialogConfig.okButtonText || l(n)("common.save")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), pa = lr();
function ng(e, t, a = "dialog") {
  return pa.open({
    component: $m,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: a
    }
  });
}
function og(e, t = "Achtung", a = "Sind Sie sicher?") {
  return pa.open({
    component: tm,
    componentProps: {
      title: t,
      description: a,
      onOk: e
    }
  });
}
function sg({ dialogConfig: e, initialValue: t, onOk: a, component: n, componentProps: o }) {
  return pa.open({
    component: Mn,
    componentProps: {
      componentConfig: { component: n, componentProps: o },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
function rg(e, t, a, n, o) {
  return pa.open({
    component: Mn,
    componentProps: {
      componentConfig: { component: Ln, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    }
  });
}
function lg(e, t, a, n, o) {
  return pa.open({
    component: Mn,
    componentProps: {
      componentConfig: { component: Hp, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    }
  });
}
const ig = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ Ie({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = De(e, "modelValue");
    return (n, o) => (m(), D(Ln, {
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => a.value = s),
      class: ee(t.class),
      options: [{ value: !0, label: "True" }, { value: !1, label: "False" }]
    }, null, 8, ["modelValue", "class"]));
  }
}), Rm = /* @__PURE__ */ N({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ce(e, t);
    return (s, r) => (m(), D(l(El), z({ "data-slot": "popover" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ N({
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
    const a = e, n = t, o = ue(a, "class"), s = Ce(o, n);
    return (r, i) => (m(), D(l(xl), null, {
      default: h(() => [
        w(l(kl), z({ "data-slot": "popover-content" }, { ...l(s), ...r.$attrs }, {
          class: l(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            a.class
          )
        }), {
          default: h(() => [
            L(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Vm = /* @__PURE__ */ N({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Cl), z({ "data-slot": "popover-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = { key: 0 }, Um = { class: "text-xs" }, zm = { class: "text-xs" }, Wm = { class: "flex gap-2" }, cg = /* @__PURE__ */ N({
  __name: "InputGraduated",
  props: /* @__PURE__ */ Ie({
    class: {},
    placeholder: {}
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    function a(c) {
      return {
        "common.from": "From",
        "common.value": "Value",
        "common.add": "Add",
        "common.clear": "Clear All"
      }[c] || c;
    }
    const n = (c) => typeof c == "string", o = De(e, "modelValue"), s = () => o.value?.push({ from: 0, value: 0 }), r = (c) => o.value.splice(c, 1), i = () => o.value = [];
    return (c, d) => (m(), D(l(Rm), null, {
      default: h(() => [
        w(l(Vm), { "as-child": "" }, {
          default: h(() => [
            w(Es, {
              class: ee(t.class),
              variant: "outline"
            }, {
              default: h(() => [
                o.value.length ? (m(), D(Uo, {
                  key: 0,
                  value: o.value
                }, null, 8, ["value"])) : e.placeholder ? (m(), B(ye, { key: 1 }, [
                  n(e.placeholder) ? (m(), B("span", Fm)) : (m(), D(Uo, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : ce("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        w(l(Bm), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: h(() => [
            (m(!0), B(ye, null, We(o.value, (v, g) => (m(), B("div", {
              key: g,
              class: "flex gap-2 items-center"
            }, [
              Z("label", Um, te(a("common.from")) + ":", 1),
              w(aa, {
                modelValue: o.value[g].from,
                "onUpdate:modelValue": (p) => o.value[g].from = p,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              Z("label", zm, te(a("common.value")) + ":", 1),
              w(aa, {
                modelValue: o.value[g].value,
                "onUpdate:modelValue": (p) => o.value[g].value = p,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              w(Ge, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (p) => r(g)
              }, {
                default: h(() => [
                  w(l(fa))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            Z("div", Wm, [
              w(Ge, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: d[0] || (d[0] = (v) => s())
              }, {
                default: h(() => [
                  w(l(yn)),
                  pe(" " + te(a("common.add")), 1)
                ]),
                _: 1
              }),
              o.value.length > 0 ? (m(), D(Ge, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: d[1] || (d[1] = (v) => i())
              }, {
                default: h(() => [
                  w(l(Bl)),
                  pe(" " + te(a("common.clear")), 1)
                ]),
                _: 1
              })) : ce("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ug = /* @__PURE__ */ N({
  __name: "InputRange",
  props: /* @__PURE__ */ Ie({
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
    const t = e, a = De(e, "modelValue");
    function n(o, s) {
      a.value || (a.value = [void 0, void 0]), a.value[o] = s, Jo(a);
    }
    return (o, s) => (m(), B("div", {
      class: ee(l(V)("flex items-center gap-0", t.class))
    }, [
      w(l(aa), {
        "model-value": a.value?.[0],
        placeholder: e.placeholder?.[0] || "Min",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": s[0] || (s[0] = (r) => n(0, r))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      w(l(aa), {
        "model-value": a.value?.[1],
        placeholder: e.placeholder?.[1] || "Max",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": s[1] || (s[1] = (r) => n(1, r))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), jm = /* @__PURE__ */ N({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("div", {
      "data-slot": "input-group",
      role: "group",
      class: ee(l(V)(
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
      L(a.$slots, "default")
    ], 2));
  }
}), Gm = ["data-align"], Go = /* @__PURE__ */ N({
  __name: "InputGroupAddon",
  props: {
    align: { default: "inline-start" },
    class: {}
  },
  setup(e) {
    const t = e;
    function a(n) {
      const o = n.currentTarget, s = n.target;
      s && s.closest("button") || o && o?.parentElement && o.parentElement?.querySelector("input")?.focus();
    }
    return (n, o) => (m(), B("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: ee(l(V)(l(Km)({ align: t.align }), t.class)),
      onClick: a
    }, [
      L(n.$slots, "default")
    ], 10, Gm));
  }
}), Hm = /* @__PURE__ */ N({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(Ge), {
      "data-size": t.size,
      variant: t.variant,
      class: ee(l(V)(l(Xm)({ size: t.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), Ym = /* @__PURE__ */ N({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), D(l(aa), {
      "data-slot": "input-group-control",
      class: ee(l(V)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), Km = jt(
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
), Xm = jt(
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
), dg = /* @__PURE__ */ N({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ Ie({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: { default: "Search..." }
  }, {
    modelValue: {},
    modelModifiers: {},
    modelSubmit: { default: "" },
    modelSubmitModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["onSubmit", "onClear"], ["update:modelValue", "update:modelSubmit"]),
  setup(e, { emit: t }) {
    const a = t, n = De(e, "modelValue"), o = De(e, "modelSubmit"), s = Y(() => !!n.value && n.value.length > 0);
    function r() {
      o.value = n.value || "", a("onSubmit", n.value || "");
    }
    function i() {
      o.value = "", n.value = "", a("onClear", "");
    }
    return (c, d) => (m(), D(l(jm), null, {
      default: h(() => [
        w(l(Go), { align: "inline-start" }, {
          default: h(() => [
            w(l(Ml))
          ]),
          _: 1
        }),
        w(l(Ym), z({
          modelValue: n.value,
          "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
          type: "text",
          placeholder: e.placeholder
        }, c.$attrs, {
          onKeydown: kr(r, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        s.value && e.showClearButton ? (m(), D(l(Go), {
          key: 0,
          align: "inline-end"
        }, {
          default: h(() => [
            w(l(Hm), {
              variant: "ghost",
              size: "icon-xs",
              onClick: i
            }, {
              default: h(() => [
                w(l(fa))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ce("", !0)
      ]),
      _: 1
    }));
  }
}), fg = /* @__PURE__ */ N({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), B("span", {
      class: ee(l(V)(l(qm)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), qm = jt(
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
);
export {
  Qm as AppSidebar,
  Ge as Button,
  Es as ButtonSelect,
  eg as DataTable,
  ip as DataTableColumnHeader,
  Op as DataTableViewOptions,
  tg as DateFormat,
  Uo as DisplayGraduated,
  tm as DynamicAlertDialog,
  $m as DynamicComponentDialog,
  ag as DynamicComponentProvider,
  Mn as DynamicConfirmComponentDialog,
  ir as DynamicDialog,
  Im as DynamicDrawer,
  Up as EmptyMini,
  ig as InputBoolean,
  cg as InputGraduated,
  ug as InputRange,
  dg as InputSearch,
  Hp as SelectListOptions,
  Ln as SelectOptions,
  fg as Tag,
  og as alert,
  sg as confirmGeneric,
  rg as confirmSelect,
  lg as confirmSelectList,
  Vp as dynamicComponent,
  ng as openDynamicDialogComponent,
  lr as useDynamicComponent,
  Fo as useToggleState
};
