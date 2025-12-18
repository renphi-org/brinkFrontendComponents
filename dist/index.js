import * as za from "vue";
import { h as Ut, defineComponent as O, reactive as Za, inject as aa, computed as W, unref as r, getCurrentInstance as Gt, watchEffect as ca, createBlock as A, openBlock as m, mergeProps as G, withCtx as h, renderSlot as L, watch as Re, getCurrentScope as Cr, hasInjectionContext as Yo, toValue as ye, isRef as Na, onMounted as ua, nextTick as da, readonly as Ko, toRef as Sr, ref as le, customRef as Or, toRefs as Qa, shallowRef as _t, createVNode as w, createElementVNode as Z, createElementBlock as V, normalizeClass as ee, normalizeStyle as Xo, createTextVNode as pe, withDirectives as qo, vModelText as Nr, normalizeProps as zt, guardReactiveProps as fa, Fragment as he, toDisplayString as te, resolveDynamicComponent as Xe, createCommentVNode as oe, renderList as Ve, useTemplateRef as Tr, onUnmounted as Jo, Text as Ar, mergeModels as Oe, useModel as ve, resolveDirective as Pr, createSlots as Zo, triggerRef as Qo, useSlots as Dr, withModifiers as Lr, onBeforeUnmount as $r, withKeys as Ir } from "vue";
import { useForwardPropsEmits as Ne, CollapsibleRoot as Mr, CollapsibleContent as Rr, CollapsibleTrigger as Br, DialogRoot as mn, DialogOverlay as gn, DialogPortal as vn, DialogContent as hn, DialogClose as es, DialogDescription as bn, DialogTitle as _n, createContext as yn, Primitive as pa, TooltipRoot as Vr, TooltipPortal as Fr, TooltipContent as Ur, TooltipArrow as zr, TooltipTrigger as Wr, TooltipProvider as jr, PaginationRoot as Gr, PaginationList as Hr, useForwardProps as qe, PaginationFirst as Yr, PaginationLast as Kr, PaginationNext as Xr, PaginationPrev as qr, SelectRoot as Jr, SelectPortal as Zr, SelectContent as Qr, SelectViewport as el, SelectItem as tl, SelectItemIndicator as al, SelectItemText as nl, SelectScrollDownButton as ol, SelectScrollUpButton as sl, SelectValue as rl, DropdownMenuSeparator as ll, SelectTrigger as il, CheckboxRoot as cl, CheckboxIndicator as ul, DropdownMenuRoot as dl, DropdownMenuCheckboxItem as fl, DropdownMenuItemIndicator as pl, DropdownMenuPortal as ml, DropdownMenuContent as gl, DropdownMenuItem as vl, DropdownMenuLabel as hl, DropdownMenuTrigger as bl, useFilter as _l, ListboxRoot as yl, ListboxFilter as wl, ListboxContent as El, ListboxItem as xl, ListboxItemIndicator as kl, AlertDialogRoot as Cl, AlertDialogAction as Sl, AlertDialogCancel as Ol, AlertDialogPortal as Nl, AlertDialogOverlay as Tl, AlertDialogContent as Al, AlertDialogDescription as Pl, AlertDialogTitle as Dl, PopoverRoot as Ll, PopoverPortal as $l, PopoverContent as Il, PopoverTrigger as Ml } from "reka-ui";
const Fn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), Bl = (e) => {
  const t = Rl(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Vl = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), Un = (e) => e === "";
var Zt = {
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
const Fl = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": n,
  strokeWidth: o,
  "stroke-width": s,
  size: l = Zt.width,
  color: i = Zt.stroke,
  ...c
}, { slots: u }) => Ut(
  "svg",
  {
    ...Zt,
    ...c,
    width: l,
    height: l,
    stroke: i,
    "stroke-width": Un(a) || Un(n) || a === !0 || n === !0 ? Number(o || s || Zt["stroke-width"]) * 24 / Number(l) : o || s || Zt["stroke-width"],
    class: Vl(
      "lucide",
      c.class,
      ...e ? [`lucide-${Fn(Bl(e))}-icon`, `lucide-${Fn(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((v) => Ut(...v)), ...u.default ? [u.default()] : []]
);
const Ae = (e, t) => (a, { slots: n, attrs: o }) => Ut(
  Fl,
  {
    ...o,
    ...a,
    iconNode: t,
    name: e
  },
  n
);
const zn = Ae("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const Ul = Ae("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const Wn = Ae("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const Ma = Ae("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const ma = Ae("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const ts = Ae("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Ht = Ae("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const zl = Ae("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const as = Ae("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const ns = Ae("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const Wl = Ae("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const jl = Ae("eye-off", [
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
const os = Ae("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Gl = Ae("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const wn = Ae("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Hl = Ae("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Yl = Ae("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Kl = Ae("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const Xl = Ae("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const ga = Ae("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const ql = typeof document < "u", Jl = () => {
}, Aa = Array.isArray;
function jn(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function Gn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Zl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const a in e) if (!Ql(e[a], t[a])) return !1;
  return !0;
}
function Ql(e, t) {
  return Aa(e) ? Hn(e, t) : Aa(t) ? Hn(t, e) : e === t;
}
function Hn(e, t) {
  return Aa(t) ? e.length === t.length && e.every((a, n) => a === t[n]) : e.length === 1 && e[0] === t;
}
function Yn(e) {
  return typeof e == "string" || e && typeof e == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const ss = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ei = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Kn(e) {
  const t = aa(ss), a = aa(ei);
  let n = !1, o = null;
  const s = W(() => {
    const v = r(e.to);
    return process.env.NODE_ENV !== "production" && (!n || v !== o) && (Yn(v) || (n ? jn(`Invalid value for prop "to" in useLink()
- to:`, v, `
- previous to:`, o, `
- props:`, e) : jn(`Invalid value for prop "to" in useLink()
- to:`, v, `
- props:`, e)), o = v, n = !0), t.resolve(v);
  }), l = W(() => {
    const { matched: v } = s.value, { length: g } = v, p = v[g - 1], C = a.matched;
    if (!p || !C.length) return -1;
    const $ = C.findIndex(Gn.bind(null, p));
    if ($ > -1) return $;
    const k = Xn(v[g - 2]);
    return g > 1 && Xn(p) === k && C[C.length - 1].path !== k ? C.findIndex(Gn.bind(null, v[g - 2])) : $;
  }), i = W(() => l.value > -1 && oi(a.params, s.value.params)), c = W(() => l.value > -1 && l.value === a.matched.length - 1 && Zl(a.params, s.value.params));
  function u(v = {}) {
    if (ni(v)) {
      const g = t[r(e.replace) ? "replace" : "push"](r(e.to)).catch(Jl);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => g), g;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ql) {
    const v = Gt();
    if (v) {
      const g = {
        route: s.value,
        isActive: i.value,
        isExactActive: c.value,
        error: null
      };
      v.__vrl_devtools = v.__vrl_devtools || [], v.__vrl_devtools.push(g), ca(() => {
        g.route = s.value, g.isActive = i.value, g.isExactActive = c.value, g.error = Yn(r(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: W(() => s.value.href),
    isActive: i,
    isExactActive: c,
    navigate: u
  };
}
function ti(e) {
  return e.length === 1 ? e[0] : e;
}
const ai = /* @__PURE__ */ O({
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
  useLink: Kn,
  setup(e, { slots: t }) {
    const a = Za(Kn(e)), { options: n } = aa(ss), o = W(() => ({
      [qn(e.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
      [qn(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const s = t.default && ti(t.default(a));
      return e.custom ? s : Ut("a", {
        "aria-current": a.isExactActive ? e.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: o.value
      }, s);
    };
  }
}), Wa = ai;
function ni(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function oi(e, t) {
  for (const a in t) {
    const n = t[a], o = e[a];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Aa(o) || o.length !== n.length || n.some((s, l) => s !== o[l])) return !1;
  }
  return !0;
}
function Xn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const qn = (e, t, a) => e ?? t ?? a, si = /* @__PURE__ */ O({
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
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(Mr), G({ "data-slot": "collapsible" }, r(o)), {
      default: h(({ open: i }) => [
        L(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), ri = /* @__PURE__ */ O({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(Rr), G({ "data-slot": "collapsible-content" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), li = /* @__PURE__ */ O({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(Br), G({ "data-slot": "collapsible-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function rs(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = rs(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function ls() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = rs(e)) && (n && (n += " "), n += t);
  return n;
}
const Jn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Zn = ls, Bt = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return Zn(e, a?.class, a?.className);
  const { variants: o, defaultVariants: s } = t, l = Object.keys(o).map((u) => {
    const v = a?.[u], g = s?.[u];
    if (v === null) return null;
    const p = Jn(v) || Jn(g);
    return o[u][p];
  }), i = a && Object.entries(a).reduce((u, v) => {
    let [g, p] = v;
    return p === void 0 || (u[g] = p), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, v) => {
    let { class: g, className: p, ...C } = v;
    return Object.entries(C).every(($) => {
      let [k, D] = $;
      return Array.isArray(D) ? D.includes({
        ...s,
        ...i
      }[k]) : {
        ...s,
        ...i
      }[k] === D;
    }) ? [
      ...u,
      g,
      p
    ] : u;
  }, []);
  return Zn(e, l, c, a?.class, a?.className);
}, ii = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    a[n] = e[n];
  for (let n = 0; n < t.length; n++)
    a[e.length + n] = t[n];
  return a;
}, ci = (e, t) => ({
  classGroupId: e,
  validator: t
}), is = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), Pa = "-", Qn = [], ui = "arbitrary..", di = (e) => {
  const t = pi(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return fi(l);
      const i = l.split(Pa), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return cs(i, c, t);
    },
    getConflictingClassGroupIds: (l, i) => {
      if (i) {
        const c = n[l], u = a[l];
        return c ? u ? ii(u, c) : c : u || Qn;
      }
      return a[l] || Qn;
    }
  };
}, cs = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const o = e[t], s = a.nextPart.get(o);
  if (s) {
    const u = cs(e, t + 1, s);
    if (u) return u;
  }
  const l = a.validators;
  if (l === null)
    return;
  const i = t === 0 ? e.join(Pa) : e.slice(t).join(Pa), c = l.length;
  for (let u = 0; u < c; u++) {
    const v = l[u];
    if (v.validator(i))
      return v.classGroupId;
  }
}, fi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), n = t.slice(0, a);
  return n ? ui + n : void 0;
})(), pi = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return mi(a, t);
}, mi = (e, t) => {
  const a = is();
  for (const n in e) {
    const o = e[n];
    En(o, a, n, t);
  }
  return a;
}, En = (e, t, a, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const l = e[s];
    gi(l, t, a, n);
  }
}, gi = (e, t, a, n) => {
  if (typeof e == "string") {
    vi(e, t, a);
    return;
  }
  if (typeof e == "function") {
    hi(e, t, a, n);
    return;
  }
  bi(e, t, a, n);
}, vi = (e, t, a) => {
  const n = e === "" ? t : us(t, e);
  n.classGroupId = a;
}, hi = (e, t, a, n) => {
  if (_i(e)) {
    En(e(n), t, a, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(ci(a, e));
}, bi = (e, t, a, n) => {
  const o = Object.entries(e), s = o.length;
  for (let l = 0; l < s; l++) {
    const [i, c] = o[l];
    En(c, us(t, i), a, n);
  }
}, us = (e, t) => {
  let a = e;
  const n = t.split(Pa), o = n.length;
  for (let s = 0; s < o; s++) {
    const l = n[s];
    let i = a.nextPart.get(l);
    i || (i = is(), a.nextPart.set(l, i)), a = i;
  }
  return a;
}, _i = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, yi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (s, l) => {
    a[s] = l, t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let l = a[s];
      if (l !== void 0)
        return l;
      if ((l = n[s]) !== void 0)
        return o(s, l), l;
    },
    set(s, l) {
      s in a ? a[s] = l : o(s, l);
    }
  };
}, en = "!", eo = ":", wi = [], to = (e, t, a, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Ei = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (o) => {
    const s = [];
    let l = 0, i = 0, c = 0, u;
    const v = o.length;
    for (let k = 0; k < v; k++) {
      const D = o[k];
      if (l === 0 && i === 0) {
        if (D === eo) {
          s.push(o.slice(c, k)), c = k + 1;
          continue;
        }
        if (D === "/") {
          u = k;
          continue;
        }
      }
      D === "[" ? l++ : D === "]" ? l-- : D === "(" ? i++ : D === ")" && i--;
    }
    const g = s.length === 0 ? o : o.slice(c);
    let p = g, C = !1;
    g.endsWith(en) ? (p = g.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      g.startsWith(en) && (p = g.slice(1), C = !0)
    );
    const $ = u && u > c ? u - c : void 0;
    return to(s, C, p, $);
  };
  if (t) {
    const o = t + eo, s = n;
    n = (l) => l.startsWith(o) ? s(l.slice(o.length)) : to(wi, !1, l, void 0, !0);
  }
  if (a) {
    const o = n;
    n = (s) => a({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, xi = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((a, n) => {
    t.set(a, 1e6 + n);
  }), (a) => {
    const n = [];
    let o = [];
    for (let s = 0; s < a.length; s++) {
      const l = a[s], i = l[0] === "[", c = t.has(l);
      i || c ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(l)) : o.push(l);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, ki = (e) => ({
  cache: yi(e.cacheSize),
  parseClassName: Ei(e),
  sortModifiers: xi(e),
  ...di(e)
}), Ci = /\s+/, Si = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, l = [], i = e.trim().split(Ci);
  let c = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const v = i[u], {
      isExternal: g,
      modifiers: p,
      hasImportantModifier: C,
      baseClassName: $,
      maybePostfixModifierPosition: k
    } = a(v);
    if (g) {
      c = v + (c.length > 0 ? " " + c : c);
      continue;
    }
    let D = !!k, _ = n(D ? $.substring(0, k) : $);
    if (!_) {
      if (!D) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (_ = n($), !_) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      D = !1;
    }
    const b = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), E = C ? b + en : b, y = E + _;
    if (l.indexOf(y) > -1)
      continue;
    l.push(y);
    const N = o(_, D);
    for (let P = 0; P < N.length; ++P) {
      const x = N[P];
      l.push(E + x);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Oi = (...e) => {
  let t = 0, a, n, o = "";
  for (; t < e.length; )
    (a = e[t++]) && (n = ds(a)) && (o && (o += " "), o += n);
  return o;
}, ds = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = ds(e[n])) && (a && (a += " "), a += t);
  return a;
}, Ni = (e, ...t) => {
  let a, n, o, s;
  const l = (c) => {
    const u = t.reduce((v, g) => g(v), e());
    return a = ki(u), n = a.cache.get, o = a.cache.set, s = i, i(c);
  }, i = (c) => {
    const u = n(c);
    if (u)
      return u;
    const v = Si(c, a);
    return o(c, v), v;
  };
  return s = l, (...c) => s(Oi(...c));
}, Ti = [], De = (e) => {
  const t = (a) => a[e] || Ti;
  return t.isThemeGetter = !0, t;
}, fs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ps = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ai = /^\d+\/\d+$/, Pi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Di = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Li = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, $i = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ii = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Vt = (e) => Ai.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), Et = (e) => !!e && Number.isInteger(Number(e)), ja = (e) => e.endsWith("%") && se(e.slice(0, -1)), vt = (e) => Pi.test(e), Mi = () => !0, Ri = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Di.test(e) && !Li.test(e)
), ms = () => !1, Bi = (e) => $i.test(e), Vi = (e) => Ii.test(e), Fi = (e) => !Y(e) && !K(e), Ui = (e) => Yt(e, hs, ms), Y = (e) => fs.test(e), At = (e) => Yt(e, bs, Ri), Ga = (e) => Yt(e, Hi, se), ao = (e) => Yt(e, gs, ms), zi = (e) => Yt(e, vs, Vi), ba = (e) => Yt(e, _s, Bi), K = (e) => ps.test(e), Qt = (e) => Kt(e, bs), Wi = (e) => Kt(e, Yi), no = (e) => Kt(e, gs), ji = (e) => Kt(e, hs), Gi = (e) => Kt(e, vs), _a = (e) => Kt(e, _s, !0), Yt = (e, t, a) => {
  const n = fs.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, Kt = (e, t, a = !1) => {
  const n = ps.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, gs = (e) => e === "position" || e === "percentage", vs = (e) => e === "image" || e === "url", hs = (e) => e === "length" || e === "size" || e === "bg-size", bs = (e) => e === "length", Hi = (e) => e === "number", Yi = (e) => e === "family-name", _s = (e) => e === "shadow", Ki = () => {
  const e = De("color"), t = De("font"), a = De("text"), n = De("font-weight"), o = De("tracking"), s = De("leading"), l = De("breakpoint"), i = De("container"), c = De("spacing"), u = De("radius"), v = De("shadow"), g = De("inset-shadow"), p = De("text-shadow"), C = De("drop-shadow"), $ = De("blur"), k = De("perspective"), D = De("aspect"), _ = De("ease"), b = De("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], N = () => [...y(), K, Y], P = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", "contain", "none"], I = () => [K, Y, c], J = () => [Vt, "full", "auto", ...I()], q = () => [Et, "none", "subgrid", K, Y], re = () => ["auto", {
    span: ["full", Et, K, Y]
  }, Et, K, Y], H = () => [Et, "auto", K, Y], Ee = () => ["auto", "min", "max", "fr", K, Y], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...I()], me = () => [Vt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()], z = () => [e, K, Y], ft = () => [...y(), no, ao, {
    position: [K, Y]
  }], Le = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ge = () => ["auto", "cover", "contain", ji, Ui, {
    size: [K, Y]
  }], pt = () => [ja, Qt, At], ke = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    K,
    Y
  ], Pe = () => ["", se, Qt, At], Je = () => ["solid", "dashed", "dotted", "double"], St = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => [se, ja, no, ao], Ye = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    $,
    K,
    Y
  ], Ze = () => ["none", se, K, Y], Qe = () => ["none", se, K, Y], mt = () => [se, K, Y], et = () => [Vt, "full", ...I()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Mi],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [Fi],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", se],
      text: [vt],
      "text-shadow": [vt],
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
        aspect: ["auto", "square", Vt, Y, K, D]
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
        columns: [se, Y, K, i]
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
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
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
        inset: J()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": J()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": J()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: J()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: J()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: J()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: J()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: J()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: J()
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
        z: [Et, "auto", K, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Vt, "full", "auto", i, ...I()]
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
        flex: [se, Vt, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", se, K, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", se, K, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Et, "first", "last", "none", K, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": q()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: re()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": q()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: re()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": Ee()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Ee()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: I()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": I()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": I()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...X(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...X()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...X(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...X()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: I()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: I()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: I()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: I()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: I()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: I()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: I()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: I()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: I()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": I()
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
        "space-y": I()
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
        size: me()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...me()]
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
          ...me()
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
            screen: [l]
          },
          ...me()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...me()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...me()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...me()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, Qt, At]
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
        font: [n, K, Ga]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ja, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Wi, Y, t]
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
        tracking: [o, K, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [se, "none", K, Ga]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...I()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K, Y]
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
        list: ["disc", "decimal", "none", K, Y]
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
        placeholder: z()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: z()
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
        decoration: [...Je(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [se, "from-font", "auto", K, At]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: z()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [se, "auto", K, Y]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, Y]
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
        content: ["none", K, Y]
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
        bg: ft()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Le()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Ge()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Et, K, Y],
          radial: ["", K, Y],
          conic: [Et, K, Y]
        }, Gi, zi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: z()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: pt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: pt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: pt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: z()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ke()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ke()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ke()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ke()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ke()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ke()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ke()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ke()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ke()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ke()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ke()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ke()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ke()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ke()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ke()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Pe()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Pe()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Pe()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Pe()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Pe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Pe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Pe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Pe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Pe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Pe()
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
        "divide-y": Pe()
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
        border: [...Je(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Je(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: z()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": z()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": z()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": z()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": z()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": z()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": z()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": z()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": z()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: z()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Je(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [se, K, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", se, Qt, At]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: z()
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
          _a,
          ba
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: z()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", g, _a, ba]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": z()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Pe()
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
        ring: z()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, At]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": z()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Pe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": z()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, _a, ba]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": z()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [se, K, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...St(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": St()
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
        "mask-linear": [se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": be()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": be()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": be()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": be()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": be()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": be()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": be()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": be()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": be()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": be()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": be()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": be()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": be()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": be()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": z()
      }],
      "mask-image-radial": [{
        "mask-radial": [K, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": be()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": be()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": z()
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
        "mask-conic": [se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": be()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": be()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": z()
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
        mask: ft()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Le()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Ge()
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
        mask: ["none", K, Y]
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
          K,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ye()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [se, K, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [se, K, Y]
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
          C,
          _a,
          ba
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": z()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", se, K, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [se, K, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", se, K, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [se, K, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", se, K, Y]
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
          K,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ye()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [se, K, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [se, K, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", se, K, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [se, K, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", se, K, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [se, K, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [se, K, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", se, K, Y]
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
        "border-spacing": I()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": I()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": I()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, Y]
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
        duration: [se, "initial", K, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, K, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [se, K, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, K, Y]
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
        perspective: [k, K, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ze()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ze()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ze()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ze()
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
        skew: mt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": mt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": mt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [K, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
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
        translate: et()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": et()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": et()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": et()
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
        accent: z()
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
        caret: z()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, Y]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", K, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...z()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, Qt, At, Ga]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...z()]
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
}, Xi = /* @__PURE__ */ Ni(Ki);
function U(...e) {
  return Xi(ls(e));
}
const qi = /* @__PURE__ */ O({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(mn), G({ "data-slot": "sheet" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ha = /* @__PURE__ */ new WeakMap(), Ji = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], n = (t = Gt()) === null || t === void 0 ? void 0 : t.proxy, o = n ?? Cr();
  if (o == null && !Yo()) throw new Error("injectLocal must be called in setup");
  return o && Ha.has(o) && a in Ha.get(o) ? Ha.get(o)[a] : aa(...e);
}, ys = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zi = (e) => typeof e < "u", Qi = Object.prototype.toString, ec = (e) => Qi.call(e) === "[object Object]", tc = () => {
};
function ac(...e) {
  if (e.length !== 1) return Sr(...e);
  const t = e[0];
  return typeof t == "function" ? Ko(Or(() => ({
    get: t,
    set: tc
  }))) : le(t);
}
function nc(e, t) {
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
const ws = (e) => e();
function oc(e = ws, t = {}) {
  const { initialState: a = "active" } = t, n = ac(a === "active");
  function o() {
    n.value = !1;
  }
  function s() {
    n.value = !0;
  }
  const l = (...i) => {
    n.value && e(...i);
  };
  return {
    isActive: Ko(n),
    pause: o,
    resume: s,
    eventFilter: l
  };
}
function oo(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Ya(e) {
  return Array.isArray(e) ? e : [e];
}
function sc(e) {
  return Gt();
}
function rc(e) {
  return Na(e) ? Za(new Proxy({}, {
    get(t, a, n) {
      return r(Reflect.get(e.value, a, n));
    },
    set(t, a, n) {
      return Na(e.value[a]) && !Na(n) ? e.value[a].value = n : e.value[a] = n, !0;
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
  })) : Za(e);
}
function lc(e) {
  return rc(W(e));
}
function ue(e, ...t) {
  const a = t.flat(), n = a[0];
  return lc(() => Object.fromEntries(typeof n == "function" ? Object.entries(Qa(e)).filter(([o, s]) => !n(ye(s), o)) : Object.entries(Qa(e)).filter((o) => !a.includes(o[0]))));
}
function ic(e, t, a = {}) {
  const { eventFilter: n = ws, ...o } = a;
  return Re(e, nc(n, t), o);
}
function cc(e, t, a = {}) {
  const { eventFilter: n, initialState: o = "active", ...s } = a, { eventFilter: l, pause: i, resume: c, isActive: u } = oc(n, { initialState: o });
  return {
    stop: ic(e, t, {
      ...s,
      eventFilter: l
    }),
    pause: i,
    resume: c,
    isActive: u
  };
}
const uc = cc;
function dc(e, t = !0, a) {
  sc() ? ua(e, a) : t ? e() : da(e);
}
const fc = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, pc = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function mc(e, t, a, n) {
  let o = e < 12 ? "AM" : "PM";
  return n && (o = o.split("").reduce((s, l) => s += `${l}.`, "")), a ? o.toLowerCase() : o;
}
function Pt(e) {
  const t = [
    "th",
    "st",
    "nd",
    "rd"
  ], a = e % 100;
  return e + (t[(a - 20) % 10] || t[a] || t[0]);
}
function gc(e, t, a = {}) {
  var n;
  const o = e.getFullYear(), s = e.getMonth(), l = e.getDate(), i = e.getHours(), c = e.getMinutes(), u = e.getSeconds(), v = e.getMilliseconds(), g = e.getDay(), p = (n = a.customMeridiem) !== null && n !== void 0 ? n : mc, C = (k) => {
    var D;
    return (D = k.split(" ")[1]) !== null && D !== void 0 ? D : "";
  }, $ = {
    Yo: () => Pt(o),
    YY: () => String(o).slice(-2),
    YYYY: () => o,
    M: () => s + 1,
    Mo: () => Pt(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(ye(a.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(ye(a.locales), { month: "long" }),
    D: () => String(l),
    Do: () => Pt(l),
    DD: () => `${l}`.padStart(2, "0"),
    H: () => String(i),
    Ho: () => Pt(i),
    HH: () => `${i}`.padStart(2, "0"),
    h: () => `${i % 12 || 12}`.padStart(1, "0"),
    ho: () => Pt(i % 12 || 12),
    hh: () => `${i % 12 || 12}`.padStart(2, "0"),
    m: () => String(c),
    mo: () => Pt(c),
    mm: () => `${c}`.padStart(2, "0"),
    s: () => String(u),
    so: () => Pt(u),
    ss: () => `${u}`.padStart(2, "0"),
    SSS: () => `${v}`.padStart(3, "0"),
    d: () => g,
    dd: () => e.toLocaleDateString(ye(a.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(ye(a.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(ye(a.locales), { weekday: "long" }),
    A: () => p(i, c),
    AA: () => p(i, c, !1, !0),
    a: () => p(i, c, !0),
    aa: () => p(i, c, !0, !0),
    z: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "shortOffset" })),
    zz: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "shortOffset" })),
    zzz: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(pc, (k, D) => {
    var _, b;
    return (_ = D ?? ((b = $[k]) === null || b === void 0 ? void 0 : b.call($))) !== null && _ !== void 0 ? _ : k;
  });
}
function vc(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(fc);
    if (t) {
      const a = t[2] - 1 || 0, n = (t[7] || "0").substring(0, 3);
      return new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, n);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function hc(e, t = "HH:mm:ss", a = {}) {
  return W(() => gc(vc(ye(e)), ye(t), a));
}
function bc(e, t, a) {
  return Re(e, t, {
    ...a,
    immediate: !0
  });
}
const Dt = ys ? window : void 0, Es = ys ? window.document : void 0;
function _c(e) {
  var t;
  const a = ye(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function It(...e) {
  const t = (n, o, s, l) => (n.addEventListener(o, s, l), () => n.removeEventListener(o, s, l)), a = W(() => {
    const n = Ya(ye(e[0])).filter((o) => o != null);
    return n.every((o) => typeof o != "string") ? n : void 0;
  });
  return bc(() => {
    var n, o;
    return [
      (n = (o = a.value) === null || o === void 0 ? void 0 : o.map((s) => _c(s))) !== null && n !== void 0 ? n : [Dt].filter((s) => s != null),
      Ya(ye(a.value ? e[1] : e[0])),
      Ya(r(a.value ? e[2] : e[1])),
      ye(a.value ? e[3] : e[2])
    ];
  }, ([n, o, s, l], i, c) => {
    if (!n?.length || !o?.length || !s?.length) return;
    const u = ec(l) ? { ...l } : l, v = n.flatMap((g) => o.flatMap((p) => s.map((C) => t(g, p, C, u))));
    c(() => {
      v.forEach((g) => g());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function yc() {
  const e = _t(!1), t = Gt();
  return t && ua(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function wc(e) {
  const t = /* @__PURE__ */ yc();
  return W(() => (t.value, !!e()));
}
const Ec = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function xc() {
  const e = Yo() ? /* @__PURE__ */ Ji(Ec, null) : null;
  return typeof e == "number" ? e : void 0;
}
function kc(e, t = {}) {
  const { window: a = Dt, ssrWidth: n = /* @__PURE__ */ xc() } = t, o = /* @__PURE__ */ wc(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = _t(typeof n == "number"), l = _t(), i = _t(!1), c = (u) => {
    i.value = u.matches;
  };
  return ca(() => {
    if (s.value) {
      s.value = !o.value, i.value = ye(e).split(",").some((u) => {
        const v = u.includes("not all"), g = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), p = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let C = !!(g || p);
        return g && C && (C = n >= oo(g[1])), p && C && (C = n <= oo(p[1])), v ? !C : C;
      });
      return;
    }
    o.value && (l.value = a.matchMedia(ye(e)), i.value = l.value.matches);
  }), It(l, "change", c, { passive: !0 }), W(() => i.value);
}
function Cc(e) {
  return JSON.parse(JSON.stringify(e));
}
const ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wa = "__vueuse_ssr_handlers__", Sc = /* @__PURE__ */ Oc();
function Oc() {
  return wa in ya || (ya[wa] = ya[wa] || {}), ya[wa];
}
function Nc(e, t) {
  return Sc[e] || t;
}
function Tc(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ac = {
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
}, so = "vueuse-storage";
function Pc(e, t, a, n = {}) {
  var o;
  const { flush: s = "pre", deep: l = !0, listenToStorageChanges: i = !0, writeDefaults: c = !0, mergeDefaults: u = !1, shallow: v, window: g = Dt, eventFilter: p, onError: C = (B) => {
    console.error(B);
  }, initOnMounted: $ } = n, k = (v ? _t : le)(typeof t == "function" ? t() : t), D = W(() => ye(e));
  if (!a) try {
    a = Nc("getDefaultStorage", () => Dt?.localStorage)();
  } catch (B) {
    C(B);
  }
  if (!a) return k;
  const _ = ye(t), b = Tc(_), E = (o = n.serializer) !== null && o !== void 0 ? o : Ac[b], { pause: y, resume: N } = uc(k, (B) => q(B), {
    flush: s,
    deep: l,
    eventFilter: p
  });
  Re(D, () => H(), { flush: s });
  let P = !1;
  const x = (B) => {
    $ && !P || H(B);
  }, I = (B) => {
    $ && !P || Ee(B);
  };
  g && i && (a instanceof Storage ? It(g, "storage", x, { passive: !0 }) : It(g, so, I)), $ ? dc(() => {
    P = !0, H();
  }) : H();
  function J(B, X) {
    if (g) {
      const M = {
        key: D.value,
        oldValue: B,
        newValue: X,
        storageArea: a
      };
      g.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", M) : new CustomEvent(so, { detail: M }));
    }
  }
  function q(B) {
    try {
      const X = a.getItem(D.value);
      if (B == null)
        J(X, null), a.removeItem(D.value);
      else {
        const M = E.write(B);
        X !== M && (a.setItem(D.value, M), J(X, M));
      }
    } catch (X) {
      C(X);
    }
  }
  function re(B) {
    const X = B ? B.newValue : a.getItem(D.value);
    if (X == null)
      return c && _ != null && a.setItem(D.value, E.write(_)), _;
    if (!B && u) {
      const M = E.read(X);
      return typeof u == "function" ? u(M, _) : b === "object" && !Array.isArray(M) ? {
        ..._,
        ...M
      } : M;
    } else return typeof X != "string" ? X : E.read(X);
  }
  function H(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        k.value = _;
        return;
      }
      if (!(B && B.key !== D.value)) {
        y();
        try {
          const X = E.write(k.value);
          (B === void 0 || B?.newValue !== X) && (k.value = re(B));
        } catch (X) {
          C(X);
        } finally {
          B ? da(N) : N();
        }
      }
    }
  }
  function Ee(B) {
    H(B.detail);
  }
  return k;
}
const Dc = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Lc(e, t = {}) {
  const { events: a = Dc, document: n = Es, initial: o = null } = t, s = _t(o);
  return n && a.forEach((l) => {
    It(n, l, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function $c(e, t, a = {}) {
  const { window: n = Dt } = a;
  return Pc(e, t, n?.sessionStorage, a);
}
// @__NO_SIDE_EFFECTS__
function xs(e, t, a, n = {}) {
  var o, s;
  const { clone: l = !1, passive: i = !1, eventName: c, deep: u = !1, defaultValue: v, shouldEmit: g } = n, p = Gt(), C = a || p?.emit || (p == null || (o = p.$emit) === null || o === void 0 ? void 0 : o.bind(p)) || (p == null || (s = p.proxy) === null || s === void 0 || (s = s.$emit) === null || s === void 0 ? void 0 : s.bind(p?.proxy));
  let $ = c;
  t || (t = "modelValue"), $ = $ || `update:${t.toString()}`;
  const k = (b) => l ? typeof l == "function" ? l(b) : Cc(b) : b, D = () => Zi(e[t]) ? k(e[t]) : v, _ = (b) => {
    g ? g(b) && C($, b) : C($, b);
  };
  if (i) {
    const b = le(D());
    let E = !1;
    return Re(() => e[t], (y) => {
      E || (E = !0, b.value = k(y), da(() => E = !1));
    }), Re(b, (y) => {
      !E && (y !== e[t] || u) && _(y);
    }, { deep: u }), b;
  } else return W({
    get() {
      return D();
    },
    set(b) {
      _(b);
    }
  });
}
const Ic = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(gn), G({
      "data-slot": "sheet-overlay",
      class: r(U)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, r(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mc = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class", "side"), s = Ne(o, n);
    return (l, i) => (m(), A(r(vn), null, {
      default: h(() => [
        w(Ic),
        w(r(hn), G({
          "data-slot": "sheet-content",
          class: r(U)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...r(s), ...l.$attrs }), {
          default: h(() => [
            L(l.$slots, "default"),
            w(r(es), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: h(() => [
                w(r(ga), { class: "size-4" }),
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
}), Rc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(bn), G({
      "data-slot": "sheet-description",
      class: r(U)("text-muted-foreground text-sm", t.class)
    }, r(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "sheet-header",
      class: ee(r(U)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Vc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(_n), G({
      "data-slot": "sheet-title",
      class: r(U)("text-foreground font-semibold", t.class)
    }, r(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ro = "sidebar_state", Fc = 3600 * 24 * 7, Uc = "16rem", zc = "18rem", Wc = "3rem", jc = "b", [xn, Gc] = yn("Sidebar"), Hc = { class: "flex h-full w-full flex-col" }, Yc = ["data-state", "data-collapsible", "data-variant", "data-side"], Kc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Xc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = xn();
    return (l, i) => e.collapsible === "none" ? (m(), V("div", G({
      key: 0,
      "data-slot": "sidebar",
      class: r(U)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, l.$attrs), [
      L(l.$slots, "default")
    ], 16)) : r(a) ? (m(), A(r(qi), G({
      key: 1,
      open: r(o)
    }, l.$attrs, { "onUpdate:open": r(s) }), {
      default: h(() => [
        w(r(Mc), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Xo({
            "--sidebar-width": r(zc)
          })
        }, {
          default: h(() => [
            w(Bc, { class: "sr-only" }, {
              default: h(() => [
                w(Vc, null, {
                  default: h(() => [...i[0] || (i[0] = [
                    pe("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                w(Rc, null, {
                  default: h(() => [...i[1] || (i[1] = [
                    pe("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Z("div", Hc, [
              L(l.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (m(), V("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": r(n),
      "data-collapsible": r(n) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      Z("div", {
        class: ee(r(U)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      Z("div", G({
        class: r(U)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, l.$attrs), [
        Z("div", Kc, [
          L(l.$slots, "default")
        ])
      ], 16)
    ], 8, Yc));
  }
}), qc = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: ee(r(U)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Jc = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: ee(r(U)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Zc = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: ee(r(U)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Qc = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(pa), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: ee(r(U)(
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
}), eu = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: ee(r(U)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), na = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = /* @__PURE__ */ xs(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (s, l) => qo((m(), V("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Na(o) ? o.value = i : null),
      "data-slot": "input",
      class: ee(r(U)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Nr, r(o)]
    ]);
  }
}), tu = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: ee(r(U)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), au = /* @__PURE__ */ O({
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
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(Vr), G({ "data-slot": "tooltip" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nu = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(Fr), null, {
      default: h(() => [
        w(r(Ur), G({ "data-slot": "tooltip-content" }, { ...r(s), ...l.$attrs }, {
          class: r(U)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", a.class)
        }), {
          default: h(() => [
            L(l.$slots, "default"),
            w(r(zr), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ou = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(Wr), G({ "data-slot": "tooltip-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = /* @__PURE__ */ O({
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
    return (a, n) => (m(), A(r(pa), G({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: r(U)(r(cu)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), io = /* @__PURE__ */ O({
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
    const t = e, { isMobile: a, state: n } = xn(), o = ue(t, "tooltip");
    return (s, l) => e.tooltip ? (m(), A(r(au), { key: 1 }, {
      default: h(() => [
        w(r(ou), { "as-child": "" }, {
          default: h(() => [
            w(lo, zt(fa({ ...r(o), ...s.$attrs })), {
              default: h(() => [
                L(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        w(r(nu), {
          side: "right",
          align: "center",
          hidden: r(n) !== "collapsed" || r(a)
        }, {
          default: h(() => [
            typeof e.tooltip == "string" ? (m(), V(he, { key: 0 }, [
              pe(te(e.tooltip), 1)
            ], 64)) : (m(), A(Xe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (m(), A(lo, zt(G({ key: 0 }, { ...r(o), ...s.$attrs })), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), co = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: ee(r(U)("group/menu-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), su = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: ee(r(U)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), ru = /* @__PURE__ */ O({
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
    return (a, n) => (m(), A(r(pa), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: ee(r(U)(
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
}), lu = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: ee(r(U)("group/menu-sub-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
});
Es?.cookie.includes(`${ro}=false`);
const iu = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = xn();
    return (n, o) => (m(), V("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: ee(r(U)(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t.class
      )),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => r(a) && r(a)(...s))
    }, [
      L(n.$slots, "default")
    ], 2));
  }
}), je = /* @__PURE__ */ O({
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
    return (a, n) => (m(), A(r(pa), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ee(r(U)(r(xt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), xt = Bt(
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
), cu = Bt(
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
), uu = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, du = { key: 1 }, lg = /* @__PURE__ */ O({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(a, n) {
      return !!(a.url === n || a.items?.some((o) => o.url === n));
    }
    return (a, n) => (m(), A(r(Xc), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: h(() => [
        w(r(eu), null, {
          default: h(() => [
            L(a.$slots, "header", {}, () => [
              e.config.title ? (m(), V("div", uu, te(e.config.title), 1)) : oe("", !0)
            ])
          ]),
          _: 3
        }),
        w(r(qc), null, {
          default: h(() => [
            w(r(tu), null, {
              default: h(() => [
                (m(!0), V(he, null, Ve(e.config.menuGroups, (o, s) => (m(), A(r(Zc), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: h(() => [
                    o.title ? (m(), A(r(Qc), { key: 0 }, {
                      default: h(() => [
                        pe(te(o.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : oe("", !0),
                    (m(!0), V(he, null, Ve(o.items, (l) => (m(), V(he, {
                      key: l.title
                    }, [
                      l.items?.length ? (m(), A(r(si), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(l, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: h(() => [
                          w(r(co), null, {
                            default: h(() => [
                              w(r(li), { "as-child": "" }, {
                                default: h(() => [
                                  w(r(io), {
                                    tooltip: l.title,
                                    disabled: l.disabled
                                  }, {
                                    default: h(() => [
                                      l.icon ? (m(), A(Xe(l.icon), { key: 0 })) : oe("", !0),
                                      l.url ? (m(), A(r(Wa), {
                                        key: 2,
                                        to: l.url
                                      }, {
                                        default: h(() => [
                                          Z("span", null, te(l.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (m(), V("span", du, te(l.title), 1)),
                                      w(r(Ht), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              w(r(ri), null, {
                                default: h(() => [
                                  w(r(su), null, {
                                    default: h(() => [
                                      (m(!0), V(he, null, Ve(l.items, (i) => (m(), A(r(lu), {
                                        key: i.title
                                      }, {
                                        default: h(() => [
                                          w(r(ru), {
                                            "as-child": "",
                                            "is-active": e.currentPath === i.url,
                                            disabled: i.disabled
                                          }, {
                                            default: h(() => [
                                              w(r(Wa), {
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
                      }, 1032, ["default-open"])) : (m(), A(r(co), { key: 1 }, {
                        default: h(() => [
                          w(r(io), {
                            "as-child": "",
                            "is-active": e.currentPath === l.url,
                            disabled: l.disabled
                          }, {
                            default: h(() => [
                              w(r(Wa), {
                                to: l.url
                              }, {
                                default: h(() => [
                                  l.icon ? (m(), A(Xe(l.icon), { key: 0 })) : oe("", !0),
                                  Z("span", null, te(l.title), 1)
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
        w(r(Jc), null, {
          default: h(() => [
            L(a.$slots, "footer")
          ]),
          _: 3
        }),
        w(r(iu))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), fu = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, ks = /* @__PURE__ */ O({
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
    return (a, n) => (m(), A(r(pa), {
      as: e.as,
      class: ee(r(U)(r(xt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        Z("span", fu, [
          L(a.$slots, "default")
        ]),
        w(r(ma), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), oa = (e, t, a = (n) => n) => e.reduce((n, o) => (n[t(o)] = a(o), n), {}), pu = (e, t) => {
  const a = e.reduce((n, o) => {
    const s = o;
    return n[s] || (n[s] = o), n;
  }, {});
  return Object.values(a);
}, mu = (e, t, a, n) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const o = (l) => l === t;
  return e.find(o) ? e.filter((l, i) => !o(l)) : [...e, t];
}, uo = (e, t, a = (n) => n) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const n = t.reduce((o, s) => (o[a(s)] = !0, o), {});
  return e.filter((o) => !n[a(o)]);
}, gu = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, vu = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => gu(t.toLowerCase())).join(" ") : "", $t = _t([]), Cs = (e, t) => $t.value.push({ callback: e, id: t });
function Ss(e) {
  return $t.value = typeof e == "string" ? $t.value.filter(({ id: t }) => t !== e) : $t.value.filter(({ callback: t }) => t !== e);
}
const kn = (e) => {
  const t = e !== void 0 ? e : $t.value.length - 1;
  return t >= 0 && !$t.value[t].callback() && kn(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && $t.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? kn() : e.target.blur());
});
const Os = { add: Cs, remove: Ss, invokeLatest: kn };
function Ns(e, t) {
  Re(t, (a) => a ? Cs(e) : Ss(e), { immediate: !0 });
}
function fo(e, t, a, n = !1, o) {
  It(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), a(document.activeElement, s));
  }), It(e, "click", (s) => {
    const l = s.target.closest(
      t
    );
    l && (n && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), a(l, s));
  });
}
function hu(e, t, a, n, o) {
  const s = e.includes(a), l = t.indexOf(a), i = t.indexOf(n), c = l < i ? t.slice(l, i + 1) : t.slice(i, l);
  return s ? pu([...e, ...c]) : e.filter((u) => !c.includes(u));
}
function Ts(e, t, a) {
  let n = null;
  const o = /* @__PURE__ */ Lc("Shift");
  Re(
    () => e.value,
    (s, l) => {
      const i = s.length > l.length ? uo(s, l, a) : uo(l, s, a);
      if (i.length === 1) {
        const c = i[0];
        o.value && n && (e.value = hu(
          e.value,
          t.value,
          n,
          c
        )), n = c;
      }
    }
  );
}
const bu = { class: "[&_[data-state=selected]]:bg-muted/50" }, As = /* @__PURE__ */ O({
  __name: "DataTableBody",
  setup(e) {
    return (t, a) => (m(), V("tbody", bu, [
      L(t.$slots, "default")
    ]));
  }
}), [Xt, Ps] = yn("DataTable"), Ds = /* @__PURE__ */ O({
  __name: "DataTableContainer",
  setup(e) {
    const t = Xt(), a = Tr("container");
    fo(a, "[data-col-id]", (o) => {
      const s = o.getAttribute("data-col-id"), l = o.closest("tr")?.getAttribute("data-row-id");
      s && l && t.onClickColumn(s, l);
    }), fo(a, "[data-row-id]", (o) => {
      const s = o.getAttribute("data-row-id");
      s && t.onClickRow(s);
    });
    const n = W(() => ({
      "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": t.selectMode === "multiselect",
      "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": t.hasActionsColumn
    }));
    return (o, s) => (m(), V("div", {
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
const po = {};
function _u(e) {
  po[e] || (po[e] = !0, ut(e));
}
const yt = typeof window < "u";
let He, Mt;
if (process.env.NODE_ENV !== "production") {
  const e = yt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (He = (t) => {
    e.mark(t);
  }, Mt = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const yu = /\{([0-9a-zA-Z]+)\}/g;
function Ra(e, ...t) {
  return t.length === 1 && fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(yu, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const wt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), wu = (e, t, a) => Eu({ l: e, k: t, s: a }), Eu = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), xu = (e) => Cn(e) === "[object Date]", Da = (e) => Cn(e) === "[object RegExp]", Ba = (e) => de(e) && Object.keys(e).length === 0, Me = Object.assign, ku = Object.create, ge = (e = null) => ku(e);
let mo;
const Lt = () => mo || (mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ge());
function go(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function vo(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Cu(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, o, s) => `${o}="${vo(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, o, s) => `${o}='${vo(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && ut("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((n) => {
    e = e.replace(n, "$1javascript&#58;");
  }), e;
}
const Su = Object.prototype.hasOwnProperty;
function nt(e, t) {
  return Su.call(e, t);
}
const Se = Array.isArray, we = (e) => typeof e == "function", j = (e) => typeof e == "string", Ce = (e) => typeof e == "boolean", fe = (e) => e !== null && typeof e == "object", Ou = (e) => fe(e) && we(e.then) && we(e.catch), Ls = Object.prototype.toString, Cn = (e) => Ls.call(e), de = (e) => Cn(e) === "[object Object]", Nu = (e) => e == null ? "" : Se(e) || de(e) && e.toString === Ls ? JSON.stringify(e, null, 2) : String(e);
function Sn(e, t = "") {
  return e.reduce((a, n, o) => o === 0 ? a + n : a + t + n, "");
}
const ho = 2;
function Tu(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let l = 0; l < n.length; l++)
    if (o += n[l].length + 1, o >= t) {
      for (let i = l - ho; i <= l + ho || a > o; i++) {
        if (i < 0 || i >= n.length)
          continue;
        const c = i + 1;
        s.push(`${c}${" ".repeat(3 - String(c).length)}|  ${n[i]}`);
        const u = n[i].length;
        if (i === l) {
          const v = t - (o - u) + 1, g = Math.max(1, a > o ? u - v : a - t);
          s.push("   |  " + " ".repeat(v) + "^".repeat(g));
        } else if (i > l) {
          if (a > o) {
            const v = Math.max(Math.min(a - o, u), 1);
            s.push("   |  " + "^".repeat(v));
          }
          o += u + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function Au() {
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
const Ea = (e) => !fe(e) || Se(e);
function Ta(e, t) {
  if (Ea(e) || Ea(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: o } = a.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (fe(n[s]) && !fe(o[s]) && (o[s] = Array.isArray(n[s]) ? [] : ge()), Ea(o[s]) || Ea(n[s]) ? o[s] = n[s] : a.push({ src: n[s], des: o[s] }));
    });
  }
}
function Pu(e, t, a) {
  return { line: e, column: t, offset: a };
}
function tn(e, t, a) {
  return { start: e, end: t };
}
const Q = {
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
}, Du = 17, Lu = {
  // tokenizer error messages
  [Q.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [Q.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [Q.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [Q.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [Q.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [Q.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [Q.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [Q.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [Q.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [Q.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [Q.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [Q.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [Q.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [Q.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [Q.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function qt(e, t, a = {}) {
  const { domain: n, messages: o, args: s } = a, l = process.env.NODE_ENV !== "production" ? Ra((o || Lu)[e] || "", ...s || []) : e, i = new SyntaxError(String(l));
  return i.code = e, t && (i.location = t), i.domain = n, i;
}
function $u(e) {
  throw e;
}
const Iu = /<\/?[\w\s="/.':;#-\/]+>/, Mu = (e) => Iu.test(e), lt = " ", Ru = "\r", Fe = `
`, Bu = "\u2028", Vu = "\u2029";
function Fu(e) {
  const t = e;
  let a = 0, n = 1, o = 1, s = 0;
  const l = (x) => t[x] === Ru && t[x + 1] === Fe, i = (x) => t[x] === Fe, c = (x) => t[x] === Vu, u = (x) => t[x] === Bu, v = (x) => l(x) || i(x) || c(x) || u(x), g = () => a, p = () => n, C = () => o, $ = () => s, k = (x) => l(x) || c(x) || u(x) ? Fe : t[x], D = () => k(a), _ = () => k(a + s);
  function b() {
    return s = 0, v(a) && (n++, o = 0), l(a) && a++, a++, o++, t[a];
  }
  function E() {
    return l(a + s) && s++, s++, t[a + s];
  }
  function y() {
    a = 0, n = 1, o = 1, s = 0;
  }
  function N(x = 0) {
    s = x;
  }
  function P() {
    const x = a + s;
    for (; x !== a; )
      b();
    s = 0;
  }
  return {
    index: g,
    line: p,
    column: C,
    peekOffset: $,
    charAt: k,
    currentChar: D,
    currentPeek: _,
    next: b,
    peek: E,
    reset: y,
    resetPeek: N,
    skipToPeek: P
  };
}
const ht = void 0, Uu = ".", bo = "'", zu = "tokenizer";
function Wu(e, t = {}) {
  const a = t.location !== !1, n = Fu(e), o = () => n.index(), s = () => Pu(n.line(), n.column(), n.index()), l = s(), i = o(), c = {
    currentType: 13,
    offset: i,
    startLoc: l,
    endLoc: l,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: l,
    lastEndLoc: l,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => c, { onError: v } = t;
  function g(d, f, T, ...F) {
    const ne = u();
    if (f.column += T, f.offset += T, v) {
      const ie = a ? tn(ne.startLoc, f) : null, ae = qt(d, ie, {
        domain: zu,
        args: F
      });
      v(ae);
    }
  }
  function p(d, f, T) {
    d.endLoc = s(), d.currentType = f;
    const F = { type: f };
    return a && (F.loc = tn(d.startLoc, d.endLoc)), T != null && (F.value = T), F;
  }
  const C = (d) => p(
    d,
    13
    /* TokenTypes.EOF */
  );
  function $(d, f) {
    return d.currentChar() === f ? (d.next(), f) : (g(Q.EXPECTED_TOKEN, s(), 0, f), "");
  }
  function k(d) {
    let f = "";
    for (; d.currentPeek() === lt || d.currentPeek() === Fe; )
      f += d.currentPeek(), d.peek();
    return f;
  }
  function D(d) {
    const f = k(d);
    return d.skipToPeek(), f;
  }
  function _(d) {
    if (d === ht)
      return !1;
    const f = d.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f === 95;
  }
  function b(d) {
    if (d === ht)
      return !1;
    const f = d.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function E(d, f) {
    const { currentType: T } = f;
    if (T !== 2)
      return !1;
    k(d);
    const F = _(d.currentPeek());
    return d.resetPeek(), F;
  }
  function y(d, f) {
    const { currentType: T } = f;
    if (T !== 2)
      return !1;
    k(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), ne = b(F);
    return d.resetPeek(), ne;
  }
  function N(d, f) {
    const { currentType: T } = f;
    if (T !== 2)
      return !1;
    k(d);
    const F = d.currentPeek() === bo;
    return d.resetPeek(), F;
  }
  function P(d, f) {
    const { currentType: T } = f;
    if (T !== 7)
      return !1;
    k(d);
    const F = d.currentPeek() === ".";
    return d.resetPeek(), F;
  }
  function x(d, f) {
    const { currentType: T } = f;
    if (T !== 8)
      return !1;
    k(d);
    const F = _(d.currentPeek());
    return d.resetPeek(), F;
  }
  function I(d, f) {
    const { currentType: T } = f;
    if (!(T === 7 || T === 11))
      return !1;
    k(d);
    const F = d.currentPeek() === ":";
    return d.resetPeek(), F;
  }
  function J(d, f) {
    const { currentType: T } = f;
    if (T !== 9)
      return !1;
    const F = () => {
      const ie = d.currentPeek();
      return ie === "{" ? _(d.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === lt || !ie ? !1 : ie === Fe ? (d.peek(), F()) : re(d, !1);
    }, ne = F();
    return d.resetPeek(), ne;
  }
  function q(d) {
    k(d);
    const f = d.currentPeek() === "|";
    return d.resetPeek(), f;
  }
  function re(d, f = !0) {
    const T = (ne = !1, ie = "") => {
      const ae = d.currentPeek();
      return ae === "{" || ae === "@" || !ae ? ne : ae === "|" ? !(ie === lt || ie === Fe) : ae === lt ? (d.peek(), T(!0, lt)) : ae === Fe ? (d.peek(), T(!0, Fe)) : !0;
    }, F = T();
    return f && d.resetPeek(), F;
  }
  function H(d, f) {
    const T = d.currentChar();
    return T === ht ? ht : f(T) ? (d.next(), T) : null;
  }
  function Ee(d) {
    const f = d.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36;
  }
  function B(d) {
    return H(d, Ee);
  }
  function X(d) {
    const f = d.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36 || // $
    f === 45;
  }
  function M(d) {
    return H(d, X);
  }
  function me(d) {
    const f = d.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function z(d) {
    return H(d, me);
  }
  function ft(d) {
    const f = d.charCodeAt(0);
    return f >= 48 && f <= 57 || // 0-9
    f >= 65 && f <= 70 || // A-F
    f >= 97 && f <= 102;
  }
  function Le(d) {
    return H(d, ft);
  }
  function Ge(d) {
    let f = "", T = "";
    for (; f = z(d); )
      T += f;
    return T;
  }
  function pt(d) {
    let f = "";
    for (; ; ) {
      const T = d.currentChar();
      if (T === "{" || T === "}" || T === "@" || T === "|" || !T)
        break;
      if (T === lt || T === Fe)
        if (re(d))
          f += T, d.next();
        else {
          if (q(d))
            break;
          f += T, d.next();
        }
      else
        f += T, d.next();
    }
    return f;
  }
  function ke(d) {
    D(d);
    let f = "", T = "";
    for (; f = M(d); )
      T += f;
    const F = d.currentChar();
    if (F && F !== "}" && F !== ht && F !== lt && F !== Fe && F !== "　") {
      const ne = Qe(d);
      return g(Q.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, T + ne), T + ne;
    }
    return d.currentChar() === ht && g(Q.UNTERMINATED_CLOSING_BRACE, s(), 0), T;
  }
  function Pe(d) {
    D(d);
    let f = "";
    return d.currentChar() === "-" ? (d.next(), f += `-${Ge(d)}`) : f += Ge(d), d.currentChar() === ht && g(Q.UNTERMINATED_CLOSING_BRACE, s(), 0), f;
  }
  function Je(d) {
    return d !== bo && d !== Fe;
  }
  function St(d) {
    D(d), $(d, "'");
    let f = "", T = "";
    for (; f = H(d, Je); )
      f === "\\" ? T += be(d) : T += f;
    const F = d.currentChar();
    return F === Fe || F === ht ? (g(Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === Fe && (d.next(), $(d, "'")), T) : ($(d, "'"), T);
  }
  function be(d) {
    const f = d.currentChar();
    switch (f) {
      case "\\":
      case "'":
        return d.next(), `\\${f}`;
      case "u":
        return Ye(d, f, 4);
      case "U":
        return Ye(d, f, 6);
      default:
        return g(Q.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, f), "";
    }
  }
  function Ye(d, f, T) {
    $(d, f);
    let F = "";
    for (let ne = 0; ne < T; ne++) {
      const ie = Le(d);
      if (!ie) {
        g(Q.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${f}${F}${d.currentChar()}`);
        break;
      }
      F += ie;
    }
    return `\\${f}${F}`;
  }
  function Ze(d) {
    return d !== "{" && d !== "}" && d !== lt && d !== Fe;
  }
  function Qe(d) {
    D(d);
    let f = "", T = "";
    for (; f = H(d, Ze); )
      T += f;
    return T;
  }
  function mt(d) {
    let f = "", T = "";
    for (; f = B(d); )
      T += f;
    return T;
  }
  function et(d) {
    const f = (T) => {
      const F = d.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === lt ? T : (T += F, d.next(), f(T));
    };
    return f("");
  }
  function tt(d) {
    D(d);
    const f = $(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return D(d), f;
  }
  function Ot(d, f) {
    let T = null;
    switch (d.currentChar()) {
      case "{":
        return f.braceNest >= 1 && g(Q.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), T = p(
          f,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), D(d), f.braceNest++, T;
      case "}":
        return f.braceNest > 0 && f.currentType === 2 && g(Q.EMPTY_PLACEHOLDER, s(), 0), d.next(), T = p(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), f.braceNest--, f.braceNest > 0 && D(d), f.inLinked && f.braceNest === 0 && (f.inLinked = !1), T;
      case "@":
        return f.braceNest > 0 && g(Q.UNTERMINATED_CLOSING_BRACE, s(), 0), T = gt(d, f) || C(f), f.braceNest = 0, T;
      default: {
        let ne = !0, ie = !0, ae = !0;
        if (q(d))
          return f.braceNest > 0 && g(Q.UNTERMINATED_CLOSING_BRACE, s(), 0), T = p(f, 1, tt(d)), f.braceNest = 0, f.inLinked = !1, T;
        if (f.braceNest > 0 && (f.currentType === 4 || f.currentType === 5 || f.currentType === 6))
          return g(Q.UNTERMINATED_CLOSING_BRACE, s(), 0), f.braceNest = 0, Nt(d, f);
        if (ne = E(d, f))
          return T = p(f, 4, ke(d)), D(d), T;
        if (ie = y(d, f))
          return T = p(f, 5, Pe(d)), D(d), T;
        if (ae = N(d, f))
          return T = p(f, 6, St(d)), D(d), T;
        if (!ne && !ie && !ae)
          return T = p(f, 12, Qe(d)), g(Q.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, T.value), D(d), T;
        break;
      }
    }
    return T;
  }
  function gt(d, f) {
    const { currentType: T } = f;
    let F = null;
    const ne = d.currentChar();
    switch ((T === 7 || T === 8 || T === 11 || T === 9) && (ne === Fe || ne === lt) && g(Q.INVALID_LINKED_FORMAT, s(), 0), ne) {
      case "@":
        return d.next(), F = p(
          f,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), f.inLinked = !0, F;
      case ".":
        return D(d), d.next(), p(
          f,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return D(d), d.next(), p(
          f,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return q(d) ? (F = p(f, 1, tt(d)), f.braceNest = 0, f.inLinked = !1, F) : P(d, f) || I(d, f) ? (D(d), gt(d, f)) : x(d, f) ? (D(d), p(f, 11, mt(d))) : J(d, f) ? (D(d), ne === "{" ? Ot(d, f) || F : p(f, 10, et(d))) : (T === 7 && g(Q.INVALID_LINKED_FORMAT, s(), 0), f.braceNest = 0, f.inLinked = !1, Nt(d, f));
    }
  }
  function Nt(d, f) {
    let T = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (f.braceNest > 0)
      return Ot(d, f) || C(f);
    if (f.inLinked)
      return gt(d, f) || C(f);
    switch (d.currentChar()) {
      case "{":
        return Ot(d, f) || C(f);
      case "}":
        return g(Q.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), p(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return gt(d, f) || C(f);
      default: {
        if (q(d))
          return T = p(f, 1, tt(d)), f.braceNest = 0, f.inLinked = !1, T;
        if (re(d))
          return p(f, 0, pt(d));
        break;
      }
    }
    return T;
  }
  function Jt() {
    const { currentType: d, offset: f, startLoc: T, endLoc: F } = c;
    return c.lastType = d, c.lastOffset = f, c.lastStartLoc = T, c.lastEndLoc = F, c.offset = o(), c.startLoc = s(), n.currentChar() === ht ? p(
      c,
      13
      /* TokenTypes.EOF */
    ) : Nt(n, c);
  }
  return {
    nextToken: Jt,
    currentOffset: o,
    currentPosition: s,
    context: u
  };
}
const ju = "parser", Gu = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Hu(e, t, a) {
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
function Yu(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(_, b, E, y, ...N) {
    const P = _.currentPosition();
    if (P.offset += y, P.column += y, a) {
      const x = t ? tn(E, P) : null, I = qt(b, x, {
        domain: ju,
        args: N
      });
      a(I);
    }
  }
  function o(_, b, E) {
    const y = { type: _ };
    return t && (y.start = b, y.end = b, y.loc = { start: E, end: E }), y;
  }
  function s(_, b, E, y) {
    t && (_.end = b, _.loc && (_.loc.end = E));
  }
  function l(_, b) {
    const E = _.context(), y = o(3, E.offset, E.startLoc);
    return y.value = b, s(y, _.currentOffset(), _.currentPosition()), y;
  }
  function i(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: N } = E, P = o(5, y, N);
    return P.index = parseInt(b, 10), _.nextToken(), s(P, _.currentOffset(), _.currentPosition()), P;
  }
  function c(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: N } = E, P = o(4, y, N);
    return P.key = b, _.nextToken(), s(P, _.currentOffset(), _.currentPosition()), P;
  }
  function u(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: N } = E, P = o(9, y, N);
    return P.value = b.replace(Gu, Hu), _.nextToken(), s(P, _.currentOffset(), _.currentPosition()), P;
  }
  function v(_) {
    const b = _.nextToken(), E = _.context(), { lastOffset: y, lastStartLoc: N } = E, P = o(8, y, N);
    return b.type !== 11 ? (n(_, Q.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), P.value = "", s(P, y, N), {
      nextConsumeToken: b,
      node: P
    }) : (b.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, it(b)), P.value = b.value || "", s(P, _.currentOffset(), _.currentPosition()), {
      node: P
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
      const N = v(_);
      E.modifier = N.node, y = N.nextConsumeToken || _.nextToken();
    }
    switch (y.type !== 9 && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), y = _.nextToken(), y.type === 2 && (y = _.nextToken()), y.type) {
      case 10:
        y.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = g(_, y.value || "");
        break;
      case 4:
        y.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = c(_, y.value || "");
        break;
      case 5:
        y.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = i(_, y.value || "");
        break;
      case 6:
        y.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(y)), E.key = u(_, y.value || "");
        break;
      default: {
        n(_, Q.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const N = _.context(), P = o(7, N.offset, N.startLoc);
        return P.value = "", s(P, N.offset, N.startLoc), E.key = P, s(E, N.offset, N.startLoc), {
          nextConsumeToken: y,
          node: E
        };
      }
    }
    return s(E, _.currentOffset(), _.currentPosition()), {
      node: E
    };
  }
  function C(_) {
    const b = _.context(), E = b.currentType === 1 ? _.currentOffset() : b.offset, y = b.currentType === 1 ? b.endLoc : b.startLoc, N = o(2, E, y);
    N.items = [];
    let P = null;
    do {
      const J = P || _.nextToken();
      switch (P = null, J.type) {
        case 0:
          J.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(J)), N.items.push(l(_, J.value || ""));
          break;
        case 5:
          J.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(J)), N.items.push(i(_, J.value || ""));
          break;
        case 4:
          J.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(J)), N.items.push(c(_, J.value || ""));
          break;
        case 6:
          J.value == null && n(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, it(J)), N.items.push(u(_, J.value || ""));
          break;
        case 7: {
          const q = p(_);
          N.items.push(q.node), P = q.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 13 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : _.currentOffset(), I = b.currentType === 1 ? b.lastEndLoc : _.currentPosition();
    return s(N, x, I), N;
  }
  function $(_, b, E, y) {
    const N = _.context();
    let P = y.items.length === 0;
    const x = o(1, b, E);
    x.cases = [], x.cases.push(y);
    do {
      const I = C(_);
      P || (P = I.items.length === 0), x.cases.push(I);
    } while (N.currentType !== 13);
    return P && n(_, Q.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), s(x, _.currentOffset(), _.currentPosition()), x;
  }
  function k(_) {
    const b = _.context(), { offset: E, startLoc: y } = b, N = C(_);
    return b.currentType === 13 ? N : $(_, E, y, N);
  }
  function D(_) {
    const b = Wu(_, Me({}, e)), E = b.context(), y = o(0, E.offset, E.startLoc);
    return t && y.loc && (y.loc.source = _), y.body = k(b), e.onCacheKey && (y.cacheKey = e.onCacheKey(_)), E.currentType !== 13 && n(b, Q.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, _[E.offset] || ""), s(y, b.currentOffset(), b.currentPosition()), y;
  }
  return { parse: D };
}
function it(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ku(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (s) => (a.helpers.add(s), s) };
}
function _o(e, t) {
  for (let a = 0; a < e.length; a++)
    On(e[a], t);
}
function On(e, t) {
  switch (e.type) {
    case 1:
      _o(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      _o(e.items, t);
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
function Xu(e, t = {}) {
  const a = Ku(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && On(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function qu(e) {
  const t = e.body;
  return t.type === 2 ? yo(t) : t.cases.forEach((a) => yo(a)), e;
}
function yo(e) {
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
      e.static = Sn(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const Ju = "minifier";
function Ft(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ft(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, a = t.cases;
      for (let n = 0; n < a.length; n++)
        Ft(a[n]);
      t.c = a, delete t.cases;
      break;
    }
    case 2: {
      const t = e, a = t.items;
      for (let n = 0; n < a.length; n++)
        Ft(a[n]);
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
      Ft(t.key), t.k = t.key, delete t.key, t.modifier && (Ft(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw qt(Q.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: Ju,
          args: [e.type]
        });
  }
  delete e.type;
}
const Zu = "parser";
function Qu(e, t) {
  const { filename: a, breakLineCode: n, needIndent: o } = t, s = t.location !== !1, l = {
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
  s && e.loc && (l.source = e.loc.source);
  const i = () => l;
  function c(k, D) {
    l.code += k;
  }
  function u(k, D = !0) {
    const _ = D ? n : "";
    c(o ? _ + "  ".repeat(k) : _);
  }
  function v(k = !0) {
    const D = ++l.indentLevel;
    k && u(D);
  }
  function g(k = !0) {
    const D = --l.indentLevel;
    k && u(D);
  }
  function p() {
    u(l.indentLevel);
  }
  return {
    context: i,
    push: c,
    indent: v,
    deindent: g,
    newline: p,
    helper: (k) => `_${k}`,
    needIndent: () => l.needIndent
  };
}
function ed(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Wt(e, t.key), t.modifier ? (e.push(", "), Wt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function td(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const o = t.items.length;
  for (let s = 0; s < o && (Wt(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function ad(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const o = t.cases.length;
    for (let s = 0; s < o && (Wt(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function nd(e, t) {
  t.body ? Wt(e, t.body) : e.push("null");
}
function Wt(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      nd(e, t);
      break;
    case 1:
      ad(e, t);
      break;
    case 2:
      td(e, t);
      break;
    case 6:
      ed(e, t);
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
        throw qt(Q.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Zu,
          args: [t.type]
        });
  }
}
const od = (e, t = {}) => {
  const a = j(t.mode) ? t.mode : "normal", n = j(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", l = e.helpers || [], i = Qu(e, {
    filename: n,
    breakLineCode: o,
    needIndent: s
  });
  i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), l.length > 0 && (i.push(`const { ${Sn(l.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), Wt(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: c, map: u } = i.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function sd(e, t = {}) {
  const a = Me({}, t), n = !!a.jit, o = !!a.minify, s = a.optimize == null ? !0 : a.optimize, i = Yu(a).parse(e);
  return n ? (s && qu(i), o && Ft(i), { ast: i, code: "" }) : (Xu(i, a), od(i, a));
}
function rd() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ot(e) {
  return fe(e) && Nn(e) === 0 && (nt(e, "b") || nt(e, "body"));
}
const $s = ["b", "body"];
function ld(e) {
  return kt(e, $s);
}
const Is = ["c", "cases"];
function id(e) {
  return kt(e, Is, []);
}
const Ms = ["s", "static"];
function cd(e) {
  return kt(e, Ms);
}
const Rs = ["i", "items"];
function ud(e) {
  return kt(e, Rs, []);
}
const Bs = ["t", "type"];
function Nn(e) {
  return kt(e, Bs);
}
const Vs = ["v", "value"];
function xa(e, t) {
  const a = kt(e, Vs);
  if (a != null)
    return a;
  throw sa(t);
}
const Fs = ["m", "modifier"];
function dd(e) {
  return kt(e, Fs);
}
const Us = ["k", "key"];
function fd(e) {
  const t = kt(e, Us);
  if (t)
    return t;
  throw sa(
    6
    /* NodeTypes.Linked */
  );
}
function kt(e, t, a) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (nt(e, o) && e[o] != null)
      return e[o];
  }
  return a;
}
const zs = [
  ...$s,
  ...Is,
  ...Ms,
  ...Rs,
  ...Us,
  ...Fs,
  ...Vs,
  ...Bs
];
function sa(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ka(e) {
  return (a) => pd(a, e);
}
function pd(e, t) {
  const a = ld(t);
  if (a == null)
    throw sa(
      0
      /* NodeTypes.Resource */
    );
  if (Nn(a) === 1) {
    const s = id(a);
    return e.plural(s.reduce((l, i) => [
      ...l,
      wo(e, i)
    ], []));
  } else
    return wo(e, a);
}
function wo(e, t) {
  const a = cd(t);
  if (a != null)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = ud(t).reduce((o, s) => [...o, an(e, s)], []);
    return e.normalize(n);
  }
}
function an(e, t) {
  const a = Nn(t);
  switch (a) {
    case 3:
      return xa(t, a);
    case 9:
      return xa(t, a);
    case 4: {
      const n = t;
      if (nt(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (nt(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw sa(a);
    }
    case 5: {
      const n = t;
      if (nt(n, "i") && Ie(n.i))
        return e.interpolate(e.list(n.i));
      if (nt(n, "index") && Ie(n.index))
        return e.interpolate(e.list(n.index));
      throw sa(a);
    }
    case 6: {
      const n = t, o = dd(n), s = fd(n);
      return e.linked(an(e, s), o ? an(e, o) : void 0, e.type);
    }
    case 7:
      return xa(t, a);
    case 8:
      return xa(t, a);
    default:
      throw new Error(`unhandled node on format message part: ${a}`);
  }
}
const md = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function gd(e, t) {
  t && Mu(e) && ut(Ra(md, { source: e }));
}
const vd = (e) => e;
let ka = ge();
function hd(e, t = {}) {
  let a = !1;
  const n = t.onError || $u;
  return t.onError = (o) => {
    a = !0, n(o);
  }, { ...sd(e, t), detectError: a };
}
// @__NO_SIDE_EFFECTS__
function bd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && j(e)) {
    const a = Ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && gd(e, a);
    const o = (t.onCacheKey || vd)(e), s = ka[o];
    if (s)
      return s;
    const { ast: l, detectError: i } = hd(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = Ka(l);
    return i ? c : ka[o] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !ot(e))
      return ut(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const a = e.cacheKey;
    if (a) {
      const n = ka[a];
      return n || (ka[a] = Ka(e));
    } else
      return Ka(e);
  }
}
let ra = null;
function _d(e) {
  ra = e;
}
function yd(e, t, a) {
  ra && ra.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const wd = /* @__PURE__ */ Ed("function:translate");
function Ed(e) {
  return (t) => ra && ra.emit(e, t);
}
const Ue = {
  INVALID_ARGUMENT: Du,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, xd = 24;
function bt(e) {
  return qt(e, null, process.env.NODE_ENV !== "production" ? { messages: kd } : void 0);
}
const kd = {
  [Ue.INVALID_ARGUMENT]: "Invalid arguments",
  [Ue.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ue.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ue.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ue.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Tn(e, t) {
  return t.locale != null ? Eo(t.locale) : Eo(e.locale);
}
let Xa;
function Eo(e) {
  if (j(e))
    return e;
  if (we(e)) {
    if (e.resolvedOnce && Xa != null)
      return Xa;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ou(t))
        throw bt(Ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Xa = t;
    } else
      throw bt(Ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw bt(Ue.NOT_SUPPORT_LOCALE_TYPE);
}
function Cd(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...Se(t) ? t : fe(t) ? Object.keys(t) : j(t) ? [t] : [a]
  ])];
}
function Ws(e, t, a) {
  const n = j(a) ? a : La, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let l = [a];
    for (; Se(l); )
      l = xo(s, l, t);
    const i = Se(t) || !de(t) ? t : t.default ? t.default : null;
    l = j(i) ? [i] : i, Se(l) && xo(s, l, !1), o.__localeChainCache.set(n, s);
  }
  return s;
}
function xo(e, t, a) {
  let n = !0;
  for (let o = 0; o < t.length && Ce(n); o++) {
    const s = t[o];
    j(s) && (n = Sd(e, t[o], a));
  }
  return n;
}
function Sd(e, t, a) {
  let n;
  const o = t.split("-");
  do {
    const s = o.join("-");
    n = Od(e, s, a), o.splice(-1, 1);
  } while (o.length && n === !0);
  return n;
}
function Od(e, t, a) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Se(a) || de(a)) && a[o] && (n = a[o]);
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
const Nd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Td(e) {
  return Nd.test(e);
}
function Ad(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Pd(e) {
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
function Dd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Td(t) ? Ad(t) : "*" + t;
}
function Ld(e) {
  const t = [];
  let a = -1, n = 0, o = 0, s, l, i, c, u, v, g;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    l === void 0 ? l = i : l += i;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    l !== void 0 && (t.push(l), l = void 0);
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
      if (o = 0, l === void 0 || (l = Dd(l), l === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function C() {
    const $ = e[a + 1];
    if (n === 5 && $ === "'" || n === 6 && $ === '"')
      return a++, i = "\\" + $, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, s = e[a], !(s === "\\" && C())) {
      if (c = Pd(s), g = Ct[n], u = g[c] || g.l || 8, u === 8 || (n = u[0], u[1] !== void 0 && (v = p[u[1]], v && (i = s, v() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const ko = /* @__PURE__ */ new Map();
function $d(e, t) {
  return fe(e) ? e[t] : null;
}
function Id(e, t) {
  if (!fe(e))
    return null;
  let a = ko.get(t);
  if (a || (a = Ld(t), a && ko.set(t, a)), !a)
    return null;
  const n = a.length;
  let o = e, s = 0;
  for (; s < n; ) {
    const l = a[s];
    if (zs.includes(l) && ot(o))
      return null;
    const i = o[l];
    if (i === void 0 || we(o))
      return null;
    o = i, s++;
  }
  return o;
}
const We = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Md = 8, Rd = {
  [We.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [We.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [We.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [We.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [We.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [We.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [We.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Rt(e, ...t) {
  return Ra(Rd[e], ...t);
}
const Bd = "11.2.2", Va = -1, La = "en-US", $a = "", Co = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Vd() {
  return {
    upper: (e, t) => t === "text" && j(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && j(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && j(e) ? Co(e) : t === "vnode" && fe(e) && "__v_isVNode" in e ? Co(e.children) : e
  };
}
let js;
function Fd(e) {
  js = e;
}
let Gs;
function Ud(e) {
  Gs = e;
}
let Hs;
function zd(e) {
  Hs = e;
}
let Ys = null;
const Wd = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ys = e;
}, jd = /* @__NO_SIDE_EFFECTS__ */ () => Ys;
let Ks = null;
const So = (e) => {
  Ks = e;
}, Gd = () => Ks;
let Oo = 0;
function Hd(e = {}) {
  const t = we(e.onWarn) ? e.onWarn : ut, a = j(e.version) ? e.version : Bd, n = j(e.locale) || we(e.locale) ? e.locale : La, o = we(n) ? La : n, s = Se(e.fallbackLocale) || de(e.fallbackLocale) || j(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, l = de(e.messages) ? e.messages : qa(o), i = de(e.datetimeFormats) ? e.datetimeFormats : qa(o), c = de(e.numberFormats) ? e.numberFormats : qa(o), u = Me(ge(), e.modifiers, Vd()), v = e.pluralRules || ge(), g = we(e.missing) ? e.missing : null, p = Ce(e.missingWarn) || Da(e.missingWarn) ? e.missingWarn : !0, C = Ce(e.fallbackWarn) || Da(e.fallbackWarn) ? e.fallbackWarn : !0, $ = !!e.fallbackFormat, k = !!e.unresolving, D = we(e.postTranslation) ? e.postTranslation : null, _ = de(e.processor) ? e.processor : null, b = Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, y = we(e.messageCompiler) ? e.messageCompiler : js;
  process.env.NODE_ENV !== "production" && we(e.messageCompiler) && _u(Rt(We.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const N = we(e.messageResolver) ? e.messageResolver : Gs || $d, P = we(e.localeFallbacker) ? e.localeFallbacker : Hs || Cd, x = fe(e.fallbackContext) ? e.fallbackContext : void 0, I = e, J = fe(I.__datetimeFormatters) ? I.__datetimeFormatters : /* @__PURE__ */ new Map(), q = fe(I.__numberFormatters) ? I.__numberFormatters : /* @__PURE__ */ new Map(), re = fe(I.__meta) ? I.__meta : {};
  Oo++;
  const H = {
    version: a,
    cid: Oo,
    locale: n,
    fallbackLocale: s,
    messages: l,
    modifiers: u,
    pluralRules: v,
    missing: g,
    missingWarn: p,
    fallbackWarn: C,
    fallbackFormat: $,
    unresolving: k,
    postTranslation: D,
    processor: _,
    warnHtmlMessage: b,
    escapeParameter: E,
    messageCompiler: y,
    messageResolver: N,
    localeFallbacker: P,
    fallbackContext: x,
    onWarn: t,
    __meta: re
  };
  return H.datetimeFormats = i, H.numberFormats = c, H.__datetimeFormatters = J, H.__numberFormatters = q, process.env.NODE_ENV !== "production" && (H.__v_emitter = I.__v_emitter != null ? I.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && yd(H, a, re), H;
}
const qa = (e) => ({ [e]: ge() });
function Fa(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Xs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function An(e, t, a, n, o) {
  const { missing: s, onWarn: l } = e;
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
    return j(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Xs(n, t) && l(Rt(We.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function ea(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function qs(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Yd(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (qs(e, t[n]))
      return !0;
  return !1;
}
const No = typeof Intl < "u", Js = {
  dateTimeFormat: No && typeof Intl.DateTimeFormat < "u",
  numberFormat: No && typeof Intl.NumberFormat < "u"
};
function To(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: l } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Js.dateTimeFormat)
    return s(Rt(We.CANNOT_FORMAT_DATE)), $a;
  const [c, u, v, g] = nn(...t), p = Ce(v.missingWarn) ? v.missingWarn : e.missingWarn, C = Ce(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, $ = !!v.part, k = Tn(e, v), D = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    k
  );
  if (!j(c) || c === "")
    return new Intl.DateTimeFormat(k, g).format(u);
  let _ = {}, b, E = null, y = k, N = null;
  const P = "datetime format";
  for (let J = 0; J < D.length; J++) {
    if (b = N = D[J], process.env.NODE_ENV !== "production" && k !== b && Fa(C, c) && s(Rt(We.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: b
    })), process.env.NODE_ENV !== "production" && k !== b) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: P,
        key: c,
        from: y,
        to: N,
        groupId: `${P}:${c}`
      });
    }
    if (_ = a[b] || {}, E = _[c], de(E))
      break;
    An(e, c, b, p, P), y = N;
  }
  if (!de(E) || !j(b))
    return n ? Va : c;
  let x = `${b}__${c}`;
  Ba(g) || (x = `${x}__${JSON.stringify(g)}`);
  let I = i.get(x);
  return I || (I = new Intl.DateTimeFormat(b, Me({}, E, g)), i.set(x, I)), $ ? I.formatToParts(u) : I.format(u);
}
const Zs = [
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
  const [t, a, n, o] = e, s = ge();
  let l = ge(), i;
  if (j(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw bt(Ue.INVALID_ISO_DATE_ARGUMENT);
    const u = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw bt(Ue.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (xu(t)) {
    if (isNaN(t.getTime()))
      throw bt(Ue.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ie(t))
    i = t;
  else
    throw bt(Ue.INVALID_ARGUMENT);
  return j(a) ? s.key = a : de(a) && Object.keys(a).forEach((c) => {
    Zs.includes(c) ? l[c] = a[c] : s[c] = a[c];
  }), j(n) ? s.locale = n : de(n) && (l = n), de(o) && (l = o), [s.key || "", i, s, l];
}
function Ao(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function Po(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: l } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Js.numberFormat)
    return s(Rt(We.CANNOT_FORMAT_NUMBER)), $a;
  const [c, u, v, g] = on(...t), p = Ce(v.missingWarn) ? v.missingWarn : e.missingWarn, C = Ce(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, $ = !!v.part, k = Tn(e, v), D = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    k
  );
  if (!j(c) || c === "")
    return new Intl.NumberFormat(k, g).format(u);
  let _ = {}, b, E = null, y = k, N = null;
  const P = "number format";
  for (let J = 0; J < D.length; J++) {
    if (b = N = D[J], process.env.NODE_ENV !== "production" && k !== b && Fa(C, c) && s(Rt(We.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: b
    })), process.env.NODE_ENV !== "production" && k !== b) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: P,
        key: c,
        from: y,
        to: N,
        groupId: `${P}:${c}`
      });
    }
    if (_ = a[b] || {}, E = _[c], de(E))
      break;
    An(e, c, b, p, P), y = N;
  }
  if (!de(E) || !j(b))
    return n ? Va : c;
  let x = `${b}__${c}`;
  Ba(g) || (x = `${x}__${JSON.stringify(g)}`);
  let I = i.get(x);
  return I || (I = new Intl.NumberFormat(b, Me({}, E, g)), i.set(x, I)), $ ? I.formatToParts(u) : I.format(u);
}
const Qs = [
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
  const [t, a, n, o] = e, s = ge();
  let l = ge();
  if (!Ie(t))
    throw bt(Ue.INVALID_ARGUMENT);
  const i = t;
  return j(a) ? s.key = a : de(a) && Object.keys(a).forEach((c) => {
    Qs.includes(c) ? l[c] = a[c] : s[c] = a[c];
  }), j(n) ? s.locale = n : de(n) && (l = n), de(o) && (l = o), [s.key || "", i, s, l];
}
function Do(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const Kd = (e) => e, Xd = (e) => "", qd = "text", Jd = (e) => e.length === 0 ? "" : Sn(e), Zd = Nu;
function Lo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Qd(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function ef(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function tf(e = {}) {
  const t = e.locale, a = Qd(e), n = fe(e.pluralRules) && j(t) && we(e.pluralRules[t]) ? e.pluralRules[t] : Lo, o = fe(e.pluralRules) && j(t) && we(e.pluralRules[t]) ? Lo : void 0, s = (_) => _[n(a, _.length, o)], l = e.list || [], i = (_) => l[_], c = e.named || ge();
  Ie(e.pluralIndex) && ef(a, c);
  const u = (_) => c[_];
  function v(_, b) {
    const E = we(e.messages) ? e.messages(_, !!b) : fe(e.messages) ? e.messages[_] : !1;
    return E || (e.parent ? e.parent.message(_) : Xd);
  }
  const g = (_) => e.modifiers ? e.modifiers[_] : Kd, p = de(e.processor) && we(e.processor.normalize) ? e.processor.normalize : Jd, C = de(e.processor) && we(e.processor.interpolate) ? e.processor.interpolate : Zd, $ = de(e.processor) && j(e.processor.type) ? e.processor.type : qd, D = {
    list: i,
    named: u,
    plural: s,
    linked: (_, ...b) => {
      const [E, y] = b;
      let N = "text", P = "";
      b.length === 1 ? fe(E) ? (P = E.modifier || P, N = E.type || N) : j(E) && (P = E || P) : b.length === 2 && (j(E) && (P = E || P), j(y) && (N = y || N));
      const x = v(_, !0)(D), I = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        N === "vnode" && Se(x) && P ? x[0] : x
      );
      return P ? g(P)(I, N) : I;
    },
    message: v,
    type: $,
    interpolate: C,
    normalize: p,
    values: Me(ge(), l, c)
  };
  return D;
}
const $o = () => "", Ke = (e) => we(e);
function Io(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: o, messageCompiler: s, fallbackLocale: l, messages: i } = e, [c, u] = sn(...t), v = Ce(u.missingWarn) ? u.missingWarn : e.missingWarn, g = Ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = Ce(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, C = !!u.resolvedMessage, $ = j(u.default) || Ce(u.default) ? Ce(u.default) ? s ? c : () => c : u.default : a ? s ? c : () => c : null, k = a || $ != null && (j($) || we($)), D = Tn(e, u);
  p && af(u);
  let [_, b, E] = C ? [
    c,
    D,
    i[D] || ge()
  ] : er(e, c, D, l, g, v), y = _, N = c;
  if (!C && !(j(y) || ot(y) || Ke(y)) && k && (y = $, N = y), !C && (!(j(y) || ot(y) || Ke(y)) || !j(b)))
    return o ? Va : c;
  if (process.env.NODE_ENV !== "production" && j(y) && e.messageCompiler == null)
    return ut(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let P = !1;
  const x = () => {
    P = !0;
  }, I = Ke(y) ? y : tr(e, c, b, y, N, x);
  if (P)
    return y;
  const J = rf(e, b, E, u), q = tf(J), re = nf(e, I, q);
  let H = n ? n(re, c) : re;
  if (p && j(H) && (H = Cu(H)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ee = {
      timestamp: Date.now(),
      key: j(c) ? c : Ke(y) ? y.key : "",
      locale: b || (Ke(y) ? y.locale : ""),
      format: j(y) ? y : Ke(y) ? y.source : "",
      message: H
    };
    Ee.meta = Me({}, e.__meta, /* @__PURE__ */ jd() || {}), wd(Ee);
  }
  return H;
}
function af(e) {
  Se(e.list) ? e.list = e.list.map((t) => j(t) ? go(t) : t) : fe(e.named) && Object.keys(e.named).forEach((t) => {
    j(e.named[t]) && (e.named[t] = go(e.named[t]));
  });
}
function er(e, t, a, n, o, s) {
  const { messages: l, onWarn: i, messageResolver: c, localeFallbacker: u } = e, v = u(e, n, a);
  let g = ge(), p, C = null, $ = a, k = null;
  const D = "translate";
  for (let _ = 0; _ < v.length; _++) {
    if (p = k = v[_], process.env.NODE_ENV !== "production" && a !== p && !qs(a, p) && Fa(o, t) && i(Rt(We.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && a !== p) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: D,
        key: t,
        from: $,
        to: k,
        groupId: `${D}:${t}`
      });
    }
    g = l[p] || ge();
    let b = null, E, y;
    if (process.env.NODE_ENV !== "production" && yt && (b = window.performance.now(), E = "intlify-message-resolve-start", y = "intlify-message-resolve-end", He && He(E)), (C = c(g, t)) === null && (C = g[t]), process.env.NODE_ENV !== "production" && yt) {
      const N = window.performance.now(), P = e.__v_emitter;
      P && b && C && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: C,
        time: N - b,
        groupId: `${D}:${t}`
      }), E && y && He && Mt && (He(y), Mt("intlify message resolve", E, y));
    }
    if (j(C) || ot(C) || Ke(C))
      break;
    if (!Yd(p, v)) {
      const N = An(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        s,
        D
      );
      N !== t && (C = N);
    }
    $ = k;
  }
  return [C, p, g];
}
function tr(e, t, a, n, o, s) {
  const { messageCompiler: l, warnHtmlMessage: i } = e;
  if (Ke(n)) {
    const p = n;
    return p.locale = p.locale || a, p.key = p.key || t, p;
  }
  if (l == null) {
    const p = (() => n);
    return p.locale = a, p.key = t, p;
  }
  let c = null, u, v;
  process.env.NODE_ENV !== "production" && yt && (c = window.performance.now(), u = "intlify-message-compilation-start", v = "intlify-message-compilation-end", He && He(u));
  const g = l(n, of(e, a, o, n, i, s));
  if (process.env.NODE_ENV !== "production" && yt) {
    const p = window.performance.now(), C = e.__v_emitter;
    C && c && C.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: p - c,
      groupId: `translate:${t}`
    }), u && v && He && Mt && (He(v), Mt("intlify message compilation", u, v));
  }
  return g.locale = a, g.key = t, g.source = n, g;
}
function nf(e, t, a) {
  let n = null, o, s;
  process.env.NODE_ENV !== "production" && yt && (n = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", He && He(o));
  const l = t(a);
  if (process.env.NODE_ENV !== "production" && yt) {
    const i = window.performance.now(), c = e.__v_emitter;
    c && n && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: i - n,
      groupId: `translate:${t.key}`
    }), o && s && He && Mt && (He(s), Mt("intlify message evaluation", o, s));
  }
  return l;
}
function sn(...e) {
  const [t, a, n] = e, o = ge();
  if (!j(t) && !Ie(t) && !Ke(t) && !ot(t))
    throw bt(Ue.INVALID_ARGUMENT);
  const s = Ie(t) ? String(t) : (Ke(t), t);
  return Ie(a) ? o.plural = a : j(a) ? o.default = a : de(a) && !Ba(a) ? o.named = a : Se(a) && (o.list = a), Ie(n) ? o.plural = n : j(n) ? o.default = n : de(n) && Me(o, n), [s, o];
}
function of(e, t, a, n, o, s) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: o,
    onError: (l) => {
      if (s && s(l), process.env.NODE_ENV !== "production") {
        const i = sf(n), c = `Message compilation error: ${l.message}`, u = l.location && i && Tu(i, l.location.start.offset, l.location.end.offset), v = e.__v_emitter;
        v && i && v.emit("compile-error", {
          message: i,
          error: l.message,
          start: l.location && l.location.start.offset,
          end: l.location && l.location.end.offset,
          groupId: `translate:${a}`
        }), console.error(u ? `${c}
${u}` : c);
      } else
        throw l;
    },
    onCacheKey: (l) => wu(t, a, l)
  };
}
function sf(e) {
  if (j(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function rf(e, t, a, n) {
  const { modifiers: o, pluralRules: s, messageResolver: l, fallbackLocale: i, fallbackWarn: c, missingWarn: u, fallbackContext: v } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (C, $) => {
      let k = l(a, C);
      if (k == null && (v || $)) {
        const [, , D] = er(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          C,
          t,
          i,
          c,
          u
        );
        k = l(D, C);
      }
      if (j(k) || ot(k)) {
        let D = !1;
        const b = tr(e, C, t, k, C, () => {
          D = !0;
        });
        return D ? $o : b;
      } else return Ke(k) ? k : $o;
    }
  };
  return e.processor && (p.processor = e.processor), n.list && (p.list = n.list), n.named && (p.named = n.named), Ie(n.plural) && (p.pluralIndex = n.plural), p;
}
rd();
const lf = "11.2.2";
function cf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Lt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Lt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Be = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: xd,
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
function la(e, ...t) {
  return qt(e, null, process.env.NODE_ENV !== "production" ? { messages: uf, args: t } : void 0);
}
const uf = {
  [Be.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Be.INVALID_ARGUMENT]: "Invalid argument",
  [Be.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Be.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Be.UNEXPECTED_ERROR]: "Unexpected error",
  [Be.REQUIRED_VALUE]: "Required in value: {0}",
  [Be.INVALID_VALUE]: "Invalid value",
  [Be.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Be.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Be.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Be.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, rn = /* @__PURE__ */ wt("__translateVNode"), ln = /* @__PURE__ */ wt("__datetimeParts"), cn = /* @__PURE__ */ wt("__numberParts"), un = /* @__PURE__ */ wt("__enableEmitter"), dn = /* @__PURE__ */ wt("__disableEmitter"), df = wt("__setPluralRules"), ar = /* @__PURE__ */ wt("__injectWithOption"), fn = /* @__PURE__ */ wt("__dispose"), ct = {
  FALLBACK_TO_ROOT: Md,
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
}, ff = {
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
function Ia(e, ...t) {
  return Ra(ff[e], ...t);
}
function ia(e) {
  if (!fe(e) || ot(e))
    return e;
  for (const t in e)
    if (nt(e, t))
      if (!t.includes("."))
        fe(e[t]) && ia(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let o = e, s = !1;
        for (let l = 0; l < n; l++) {
          if (a[l] === "__proto__")
            throw new Error(`unsafe key: ${a[l]}`);
          if (a[l] in o || (o[a[l]] = ge()), !fe(o[a[l]])) {
            process.env.NODE_ENV !== "production" && ut(Ia(ct.IGNORE_OBJ_FLATTEN, {
              key: a[l]
            })), s = !0;
            break;
          }
          o = o[a[l]];
        }
        if (s || (ot(o) ? zs.includes(a[n]) || delete e[t] : (o[a[n]] = e[t], delete e[t])), !ot(o)) {
          const l = o[a[n]];
          fe(l) && ia(l);
        }
      }
  return e;
}
function nr(e, t) {
  const { messages: a, __i18n: n, messageResolver: o, flatJson: s } = t, l = de(a) ? a : Se(n) ? ge() : { [e]: ge() };
  if (Se(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: c, resource: u } = i;
      c ? (l[c] = l[c] || ge(), Ta(u, l[c])) : Ta(u, l);
    } else
      j(i) && Ta(JSON.parse(i), l);
  }), o == null && s)
    for (const i in l)
      nt(l, i) && ia(l[i]);
  return l;
}
function or(e) {
  return e.type;
}
function pf(e, t, a) {
  let n = fe(t.messages) ? t.messages : ge();
  "__i18nGlobal" in a && (n = nr(e.locale.value, {
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
      s.length && s.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (fe(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function Mo(e) {
  return w(Ar, null, e, 0);
}
function Pn() {
  return "currentInstance" in za ? za["currentInstance"] : za.getCurrentInstance();
}
const Ro = "__INTLIFY_META__", Bo = () => [], mf = () => !1;
let Vo = 0;
function Fo(e) {
  return ((t, a, n, o) => e(a, n, Pn() || void 0, o));
}
const gf = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Pn();
  let t = null;
  return e && (t = or(e)[Ro]) ? { [Ro]: t } : null;
};
function vf(e = {}) {
  const { __root: t, __injectWithOption: a } = e, n = t === void 0, o = e.flatJson, s = yt ? le : _t;
  let l = Ce(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && l ? t.locale.value : j(e.locale) ? e.locale : La
  ), c = s(
    // prettier-ignore
    t && l ? t.fallbackLocale.value : j(e.fallbackLocale) || Se(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = s(nr(i.value, e)), v = s(de(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), g = s(de(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : Ce(e.missingWarn) || Da(e.missingWarn) ? e.missingWarn : !0, C = t ? t.fallbackWarn : Ce(e.fallbackWarn) || Da(e.fallbackWarn) ? e.fallbackWarn : !0, $ = t ? t.fallbackRoot : Ce(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, D = we(e.missing) ? e.missing : null, _ = we(e.missing) ? Fo(e.missing) : null, b = we(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const N = t ? t.modifiers : de(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    n && So(null);
    const S = {
      version: lf,
      locale: i.value,
      fallbackLocale: c.value,
      messages: u.value,
      modifiers: N,
      pluralRules: P,
      missing: _ === null ? void 0 : _,
      missingWarn: p,
      fallbackWarn: C,
      fallbackFormat: k,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: E,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = v.value, S.numberFormats = g.value, S.__datetimeFormatters = de(x) ? x.__datetimeFormatters : void 0, S.__numberFormatters = de(x) ? x.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (S.__v_emitter = de(x) ? x.__v_emitter : void 0);
    const R = Hd(S);
    return n && So(R), R;
  })(), ea(x, i.value, c.value);
  function J() {
    return [
      i.value,
      c.value,
      u.value,
      v.value,
      g.value
    ];
  }
  const q = W({
    get: () => i.value,
    set: (S) => {
      x.locale = S, i.value = S;
    }
  }), re = W({
    get: () => c.value,
    set: (S) => {
      x.fallbackLocale = S, c.value = S, ea(x, i.value, S);
    }
  }), H = W(() => u.value), Ee = /* @__PURE__ */ W(() => v.value), B = /* @__PURE__ */ W(() => g.value);
  function X() {
    return we(b) ? b : null;
  }
  function M(S) {
    b = S, x.postTranslation = S;
  }
  function me() {
    return D;
  }
  function z(S) {
    S !== null && (_ = Fo(S)), D = S, x.missing = _;
  }
  function ft(S, R) {
    return S !== "translate" || !R.resolvedMessage;
  }
  const Le = (S, R, ce, _e, at, Tt) => {
    J();
    let ze;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (x.fallbackContext = t ? Gd() : void 0), ze = S(x);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (x.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ie(ze) && ze === Va || ce === "translate exists" && !ze) {
      const [st, Ua] = R();
      if (process.env.NODE_ENV !== "production" && t && j(st) && ft(ce, Ua) && ($ && (Fa(C, st) || Xs(p, st)) && ut(Ia(ct.FALLBACK_TO_ROOT, {
        key: st,
        type: ce
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: rt } = x;
        rt && $ && rt.emit("fallback", {
          type: ce,
          key: st,
          to: "global",
          groupId: `${ce}:${st}`
        });
      }
      return t && $ ? _e(t) : at(st);
    } else {
      if (Tt(ze))
        return ze;
      throw la(Be.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ge(...S) {
    return Le((R) => Reflect.apply(Io, null, [R, ...S]), () => sn(...S), "translate", (R) => Reflect.apply(R.t, R, [...S]), (R) => R, (R) => j(R));
  }
  function pt(...S) {
    const [R, ce, _e] = S;
    if (_e && !fe(_e))
      throw la(Be.INVALID_ARGUMENT);
    return Ge(R, ce, Me({ resolvedMessage: !0 }, _e || {}));
  }
  function ke(...S) {
    return Le((R) => Reflect.apply(To, null, [R, ...S]), () => nn(...S), "datetime format", (R) => Reflect.apply(R.d, R, [...S]), () => $a, (R) => j(R) || Se(R));
  }
  function Pe(...S) {
    return Le((R) => Reflect.apply(Po, null, [R, ...S]), () => on(...S), "number format", (R) => Reflect.apply(R.n, R, [...S]), () => $a, (R) => j(R) || Se(R));
  }
  function Je(S) {
    return S.map((R) => j(R) || Ie(R) || Ce(R) ? Mo(String(R)) : R);
  }
  const be = {
    normalize: Je,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Ye(...S) {
    return Le((R) => {
      let ce;
      const _e = R;
      try {
        _e.processor = be, ce = Reflect.apply(Io, null, [_e, ...S]);
      } finally {
        _e.processor = null;
      }
      return ce;
    }, () => sn(...S), "translate", (R) => R[rn](...S), (R) => [Mo(R)], (R) => Se(R));
  }
  function Ze(...S) {
    return Le((R) => Reflect.apply(Po, null, [R, ...S]), () => on(...S), "number format", (R) => R[cn](...S), Bo, (R) => j(R) || Se(R));
  }
  function Qe(...S) {
    return Le((R) => Reflect.apply(To, null, [R, ...S]), () => nn(...S), "datetime format", (R) => R[ln](...S), Bo, (R) => j(R) || Se(R));
  }
  function mt(S) {
    P = S, x.pluralRules = P;
  }
  function et(S, R) {
    return Le(() => {
      if (!S)
        return !1;
      const ce = j(R) ? R : i.value, _e = gt(ce), at = x.messageResolver(_e, S);
      return ot(at) || Ke(at) || j(at);
    }, () => [S], "translate exists", (ce) => Reflect.apply(ce.te, ce, [S, R]), mf, (ce) => Ce(ce));
  }
  function tt(S) {
    let R = null;
    const ce = Ws(x, c.value, i.value);
    for (let _e = 0; _e < ce.length; _e++) {
      const at = u.value[ce[_e]] || {}, Tt = x.messageResolver(at, S);
      if (Tt != null) {
        R = Tt;
        break;
      }
    }
    return R;
  }
  function Ot(S) {
    const R = tt(S);
    return R ?? (t ? t.tm(S) || {} : {});
  }
  function gt(S) {
    return u.value[S] || {};
  }
  function Nt(S, R) {
    if (o) {
      const ce = { [S]: R };
      for (const _e in ce)
        nt(ce, _e) && ia(ce[_e]);
      R = ce[S];
    }
    u.value[S] = R, x.messages = u.value;
  }
  function Jt(S, R) {
    u.value[S] = u.value[S] || {};
    const ce = { [S]: R };
    if (o)
      for (const _e in ce)
        nt(ce, _e) && ia(ce[_e]);
    R = ce[S], Ta(R, u.value[S]), x.messages = u.value;
  }
  function d(S) {
    return v.value[S] || {};
  }
  function f(S, R) {
    v.value[S] = R, x.datetimeFormats = v.value, Ao(x, S, R);
  }
  function T(S, R) {
    v.value[S] = Me(v.value[S] || {}, R), x.datetimeFormats = v.value, Ao(x, S, R);
  }
  function F(S) {
    return g.value[S] || {};
  }
  function ne(S, R) {
    g.value[S] = R, x.numberFormats = g.value, Do(x, S, R);
  }
  function ie(S, R) {
    g.value[S] = Me(g.value[S] || {}, R), x.numberFormats = g.value, Do(x, S, R);
  }
  Vo++, t && yt && (Re(t.locale, (S) => {
    l && (i.value = S, x.locale = S, ea(x, i.value, c.value));
  }), Re(t.fallbackLocale, (S) => {
    l && (c.value = S, x.fallbackLocale = S, ea(x, i.value, c.value));
  }));
  const ae = {
    id: Vo,
    locale: q,
    fallbackLocale: re,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(S) {
      l = S, S && t && (i.value = t.locale.value, c.value = t.fallbackLocale.value, ea(x, i.value, c.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: H,
    get modifiers() {
      return N;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(S) {
      p = S, x.missingWarn = p;
    },
    get fallbackWarn() {
      return C;
    },
    set fallbackWarn(S) {
      C = S, x.fallbackWarn = C;
    },
    get fallbackRoot() {
      return $;
    },
    set fallbackRoot(S) {
      $ = S;
    },
    get fallbackFormat() {
      return k;
    },
    set fallbackFormat(S) {
      k = S, x.fallbackFormat = k;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(S) {
      E = S, x.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(S) {
      y = S, x.escapeParameter = S;
    },
    t: Ge,
    getLocaleMessage: gt,
    setLocaleMessage: Nt,
    mergeLocaleMessage: Jt,
    getPostTranslationHandler: X,
    setPostTranslationHandler: M,
    getMissingHandler: me,
    setMissingHandler: z,
    [df]: mt
  };
  return ae.datetimeFormats = Ee, ae.numberFormats = B, ae.rt = pt, ae.te = et, ae.tm = Ot, ae.d = ke, ae.n = Pe, ae.getDateTimeFormat = d, ae.setDateTimeFormat = f, ae.mergeDateTimeFormat = T, ae.getNumberFormat = F, ae.setNumberFormat = ne, ae.mergeNumberFormat = ie, ae[ar] = a, ae[rn] = Ye, ae[ln] = Qe, ae[cn] = Ze, process.env.NODE_ENV !== "production" && (ae[un] = (S) => {
    x.__v_emitter = S;
  }, ae[dn] = () => {
    x.__v_emitter = void 0;
  }), ae;
}
function Uo(e, t) {
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
function hf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.type === he ? o.children : [o]
  ], []) : t.reduce((a, n) => {
    const o = e[n];
    return o && (a[n] = o()), a;
  }, ge());
}
function sr() {
  return he;
}
Me({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ie(e) || !isNaN(e)
  }
}, Dn);
function bf(e) {
  return Se(e) && !j(e[0]);
}
function rr(e, t, a, n) {
  const { slots: o, attrs: s } = t;
  return () => {
    const l = { part: !0 };
    let i = ge();
    e.locale && (l.locale = e.locale), j(e.format) ? l.key = e.format : fe(e.format) && (j(e.format.key) && (l.key = e.format.key), i = Object.keys(e.format).reduce((p, C) => a.includes(C) ? Me(ge(), p, { [C]: e.format[C] }) : p, ge()));
    const c = n(e.value, l, i);
    let u = [l.key];
    Se(c) ? u = c.map((p, C) => {
      const $ = o[p.type], k = $ ? $({ [p.type]: p.value, index: C, parts: c }) : [p.value];
      return bf(k) && (k[0].key = `${p.type}-${C}`), k;
    }) : j(c) && (u = [c]);
    const v = Me(ge(), s), g = j(e.tag) || fe(e.tag) ? e.tag : sr();
    return Ut(g, v, u);
  };
}
Me({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Dn);
const _f = /* @__PURE__ */ wt("global-vue-i18n");
function dt(e = {}) {
  const t = Pn();
  if (t == null)
    throw la(Be.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw la(Be.NOT_INSTALLED);
  const a = yf(t), n = Ef(a), o = or(t), s = wf(e, o);
  if (s === "global")
    return pf(n, e, o), n;
  if (s === "parent") {
    let c = xf(a, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && ut(Ia(ct.NOT_FOUND_PARENT_SCOPE)), c = n), c;
  }
  const l = a;
  let i = l.__getInstance(t);
  if (i == null) {
    const c = Me({}, e);
    "__i18n" in o && (c.__i18n = o.__i18n), n && (c.__root = n), i = vf(c), l.__composerExtend && (i[fn] = l.__composerExtend(i)), Cf(l, t, i), l.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && ut(Ia(ct.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function yf(e) {
  const t = aa(e.isCE ? _f : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw la(e.isCE ? Be.NOT_INSTALLED_WITH_PROVIDE : Be.UNEXPECTED_ERROR);
  return t;
}
function wf(e, t) {
  return Ba(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ef(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function xf(e, t, a = !1) {
  let n = null;
  const o = t.root;
  let s = kf(t, a);
  for (; s != null; ) {
    const l = e;
    if (e.mode === "composition")
      n = l.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = l.__getInstance(s);
      i != null && (n = i.__composer, a && n && !n[ar] && (n = null));
    }
    if (n != null || o === s)
      break;
    s = s.parent;
  }
  return n;
}
function kf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Cf(e, t, a) {
  let n = null;
  ua(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = a, n = Au();
      const o = a;
      o[un] && o[un](n), n.on("*", Uo);
    }
  }, t), Jo(() => {
    const o = a;
    process.env.NODE_ENV !== "production" && (n && n.off("*", Uo), o[dn] && o[dn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const s = o[fn];
    s && (s(), delete o[fn]);
  }, t);
}
Me({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Dn);
cf();
Fd(bd);
Ud(Id);
zd(Ws);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Lt();
  e.__INTLIFY__ = !0, _d(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Sf = /* @__PURE__ */ O({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "empty",
      class: ee(r(U)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Of = /* @__PURE__ */ O({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "empty-content",
      class: ee(r(U)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Nf = /* @__PURE__ */ O({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (m(), V("p", {
      "data-slot": "empty-description",
      class: ee(r(U)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Tf = /* @__PURE__ */ O({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (m(), V("div", {
      "data-slot": "empty-header",
      class: ee(r(U)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Af = ["data-variant"], Pf = /* @__PURE__ */ O({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ee(r(U)(r(lr)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Af));
  }
}), Df = ["data-variant"], Lf = /* @__PURE__ */ O({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ee(r(U)(r(lr)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Df));
  }
}), lr = Bt(
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
), $f = ["colspan"], ir = /* @__PURE__ */ O({
  __name: "DataTableEmpty",
  setup(e) {
    const t = Xt(), { t: a } = dt();
    return (n, o) => (m(), V("tr", null, [
      Z("td", {
        colspan: r(t).colNum.value
      }, [
        w(r(Sf), null, {
          default: h(() => [
            w(r(Tf), null, {
              default: h(() => [
                w(r(Pf), { variant: "icon" }, {
                  default: h(() => [
                    w(r(os))
                  ]),
                  _: 1
                }),
                w(r(Lf), null, {
                  default: h(() => [
                    pe(te(r(a)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }),
                w(r(Nf), null, {
                  default: h(() => [
                    pe(te(r(a)("dataTable.noEntriesFoundDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(r(Of), null, {
              default: h(() => [
                L(n.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 8, $f)
    ]));
  }
}), If = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(Gr), G({ "data-slot": "pagination" }, r(s), {
      class: r(U)("mx-auto flex w-full justify-center", a.class)
    }), {
      default: h((c) => [
        L(l.$slots, "default", zt(fa(c)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mf = /* @__PURE__ */ O({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(Hr), G({ "data-slot": "pagination-content" }, r(a), {
      class: r(U)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((s) => [
        L(n.$slots, "default", zt(fa(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rf = /* @__PURE__ */ O({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = qe(a);
    return (o, s) => (m(), A(r(Yr), G({
      "data-slot": "pagination-first",
      class: r(U)(r(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(r(as), { class: "size-4" }),
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bf = /* @__PURE__ */ O({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = qe(a);
    return (o, s) => (m(), A(r(Kr), G({
      "data-slot": "pagination-last",
      class: r(U)(r(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "Last", -1)),
          w(r(ns), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vf = /* @__PURE__ */ O({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = qe(a);
    return (o, s) => (m(), A(r(Xr), G({
      "data-slot": "pagination-next",
      class: r(U)(r(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "Next", -1)),
          w(r(Ht))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ff = /* @__PURE__ */ O({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = qe(a);
    return (o, s) => (m(), A(r(qr), G({
      "data-slot": "pagination-previous",
      class: r(U)(r(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, r(n)), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(r(ts)),
          s[0] || (s[0] = Z("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uf = /* @__PURE__ */ O({
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
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(Jr), G({ "data-slot": "select" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zf = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(Zr), null, {
      default: h(() => [
        w(r(Qr), G({ "data-slot": "select-content" }, { ...r(s), ...l.$attrs }, {
          class: r(U)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: h(() => [
            w(r(Hf)),
            w(r(el), {
              class: ee(r(U)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: h(() => [
                L(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            w(r(Gf))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Wf = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, jf = /* @__PURE__ */ O({
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
    const t = e, a = ue(t, "class"), n = qe(a);
    return (o, s) => (m(), A(r(tl), G({ "data-slot": "select-item" }, r(n), {
      class: r(U)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: h(() => [
        Z("span", Wf, [
          w(r(al), null, {
            default: h(() => [
              w(r(Ma), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(r(nl), null, {
          default: h(() => [
            L(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gf = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = qe(a);
    return (o, s) => (m(), A(r(ol), G({ "data-slot": "select-scroll-down-button" }, r(n), {
      class: r(U)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(r(ma), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hf = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = qe(a);
    return (o, s) => (m(), A(r(sl), G({ "data-slot": "select-scroll-up-button" }, r(n), {
      class: r(U)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(r(zl), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yf = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(rl), G({ "data-slot": "select-value" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ln = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(ll), G({ "data-slot": "dropdown-menu-separator" }, r(a), {
      class: r(U)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), Kf = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, Xf = { key: 1 }, qf = {
  key: 0,
  class: "-mt-2"
}, $n = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ Oe({
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
    disabled: { type: Boolean },
    class: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e;
    function a(c) {
      return {
        "common.select": "Select",
        "common.reset": "Reset",
        "common.addItem": "Add Item"
      }[c] || c;
    }
    const n = ve(e, "modelValue"), o = W(() => Object.fromEntries(ye(t.options).map((c) => [c.value, c]))), s = W(() => n.value ? t.multiple ? Array.isArray(n.value) ? n.value.map((c) => o.value[c]).filter(Boolean) : [] : o.value[n.value] ? [o.value[n.value]] : [] : []);
    function l() {
      n.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = W(() => t.initialValues === void 0 ? n.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(n.value));
    return (c, u) => (m(), V(he, null, [
      w(r(Uf), {
        modelValue: n.value,
        "onUpdate:modelValue": u[1] || (u[1] = (v) => n.value = v),
        multiple: e.multiple,
        disabled: e.disabled
      }, {
        default: h(() => [
          w(r(il), G({
            class: r(U)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, c.$attrs, {
            disabled: e.disabled,
            "as-child": ""
          }), {
            default: h(() => [
              w(ks, { variant: "outline" }, {
                default: h(() => [
                  L(c.$slots, "default", { selectedOptions: s.value }, () => [
                    w(r(Yf), {
                      placeholder: e.placeholder || a("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: h(() => [
                        e.customValueComponent && s.value.length > 0 ? (m(!0), V(he, { key: 0 }, Ve(s.value, (v) => (m(), A(Xe(e.customValueComponent), G({
                          key: v.value,
                          option: v,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : oe("", !0)
                      ]),
                      _: 1
                    }, 8, ["placeholder"])
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 16, ["class", "disabled"]),
          w(r(zf), null, {
            default: h(() => [
              e.label ? (m(), V("div", Kf, te(e.label), 1)) : oe("", !0),
              (m(!0), V(he, null, Ve(ye(e.options), (v) => (m(), A(r(jf), {
                key: String(v.value),
                value: v.value,
                disabled: e.disabled
              }, {
                default: h(() => [
                  pe(te(v.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)),
              e.showResetButton && i.value ? (m(), V("div", Xf, [
                w(Ln),
                w(je, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  disabled: e.disabled,
                  onClick: u[0] || (u[0] = (v) => l())
                }, {
                  default: h(() => [
                    w(r(Hl)),
                    pe(" " + te(a("common.reset")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])) : oe("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple", "disabled"]),
      e.showAddItemButton ? (m(), V("div", qf, [
        w(je, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          disabled: e.disabled,
          onClick: u[2] || (u[2] = (v) => c.$emit("onAddItem"))
        }, {
          default: h(() => [
            w(r(wn)),
            pe(" " + te(a("common.addItem")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : oe("", !0)
    ], 64));
  }
}), Jf = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, Zf = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, Qf = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, ep = { class: "hidden @2xl:block" }, tp = { class: "@2xl:hidden" }, ap = /* @__PURE__ */ O({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ Oe({
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
  emits: /* @__PURE__ */ Oe(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n), l = ve(e, "itemsPerPage"), { t: i } = dt();
    return (c, u) => (m(), V("div", null, [
      w(r(If), G(r(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: h(({ page: v, pageCount: g }) => [
          e.hideItemsPerPage ? oe("", !0) : (m(), V("div", Jf, [
            Z("span", Zf, te(r(i)("dataTable.rowsPerPage")), 1),
            w($n, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((p) => ({ value: p, label: `${p}` })),
              "model-value": l.value,
              "onUpdate:modelValue": u[0] || (u[0] = (p) => l.value = p)
            }, null, 8, ["options", "model-value"])
          ])),
          w(r(Mf), null, {
            default: h(() => [
              Z("div", Qf, [
                Z("span", ep, te(r(i)("dataTable.pageOf", { page: v, pageCount: g })), 1),
                Z("span", tp, te(v) + " / " + te(g), 1)
              ]),
              w(r(Rf), null, {
                default: h(() => [
                  w(r(as), { class: "size-4" })
                ]),
                _: 1
              }),
              w(r(Ff), null, {
                default: h(() => [
                  w(r(ts))
                ]),
                _: 1
              }),
              w(r(Vf), { variant: "outline" }, {
                default: h(() => [
                  w(r(Ht))
                ]),
                _: 1
              }),
              w(r(Bf), { variant: "outline" }, {
                default: h(() => [
                  w(r(ns), { class: "size-4" })
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
}), np = { key: 0 }, op = { class: "flex gap-2 items-center min-w-0" }, sp = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, rp = { key: 1 }, lp = { class: "text-sm line-clamp-1 text-muted-foreground" }, ip = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, cr = /* @__PURE__ */ O({
  __name: "DataTableFooter",
  props: /* @__PURE__ */ Oe({
    total: {},
    pageSizeOptions: {},
    bordered: { type: Boolean }
  }, {
    page: {},
    pageModifiers: {},
    itemsPerPage: {},
    itemsPerPageModifiers: {}
  }),
  emits: ["update:page", "update:itemsPerPage"],
  setup(e) {
    const t = ve(e, "page"), a = ve(e, "itemsPerPage"), n = Xt(), { t: o } = dt();
    return (s, l) => r(n).hasItems.value ? (m(), V("div", {
      key: 0,
      class: ee(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "!px-6": !e.bordered }])
    }, [
      r(n).selectMode === "multiselect" && r(n).selected.value.length > 0 ? (m(), V("div", np, [
        Z("div", op, [
          Z("span", sp, te(r(o)("dataTable.elementsSelected", { count: r(n).selected.value.length, total: r(n).items.length })), 1),
          r(n).selected.value.length > 0 ? L(s.$slots, "bulk", {
            key: 0,
            selected: r(n).selected.value
          }) : oe("", !0)
        ])
      ])) : r(n).selected.value.length === 0 && e.total !== void 0 ? (m(), V("div", rp, [
        Z("span", lp, te(r(o)("dataTable.totalElements", { total: e.total })), 1)
      ])) : oe("", !0),
      e.total !== void 0 ? (m(), V("div", ip, [
        a.value ? (m(), A(ap, {
          key: 0,
          page: t.value,
          "onUpdate:page": l[0] || (l[0] = (i) => t.value = i),
          "items-per-page": a.value,
          "onUpdate:itemsPerPage": l[1] || (l[1] = (i) => a.value = i),
          "page-size-options": e.pageSizeOptions || [],
          "hide-items-per-page": r(n).selected.value.length > 0 || e.pageSizeOptions && e.pageSizeOptions.length < 2,
          total: e.total,
          disabled: r(n).isPending
        }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])) : oe("", !0)
      ])) : oe("", !0)
    ], 2)) : oe("", !0);
  }
}), In = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(cl), G({ "data-slot": "checkbox" }, r(s), {
      class: r(U)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: h(() => [
        w(r(ul), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: h(() => [
            L(l.$slots, "default", {}, () => [
              w(r(Ma), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ur = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(dl), G({ "data-slot": "dropdown-menu" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, up = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(fl), G({ "data-slot": "dropdown-menu-checkbox-item" }, r(s), {
      class: r(U)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: h(() => [
        Z("span", cp, [
          w(r(pl), null, {
            default: h(() => [
              w(r(Ma), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        L(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dr = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(ml), null, {
      default: h(() => [
        w(r(gl), G({ "data-slot": "dropdown-menu-content" }, r(s), {
          class: r(U)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", a.class)
        }), {
          default: h(() => [
            L(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ca = /* @__PURE__ */ O({
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
    const t = e, a = ue(t, "inset", "variant", "class"), n = qe(a);
    return (o, s) => (m(), A(r(vl), G({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, r(n), {
      class: r(U)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), dp = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = ue(t, "class", "inset"), n = qe(a);
    return (o, s) => (m(), A(r(hl), G({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, r(n), {
      class: r(U)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), fr = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = qe(e);
    return (n, o) => (m(), A(r(bl), G({ "data-slot": "dropdown-menu-trigger" }, r(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ O({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = W(() => a.sortOrder ? a.sortOrder === "asc" ? Wn : zn : Wl);
    function s(i) {
      n("sort", i);
    }
    function l() {
      n("hide");
    }
    return (i, c) => !e.sortable && !e.hideable ? (m(), V("div", {
      key: 0,
      class: ee(r(U)("flex items-center space-x-2"))
    }, [
      Z("span", null, te(e.title), 1)
    ], 2)) : (m(), V("div", {
      key: 1,
      class: ee(r(U)("flex items-center space-x-2"))
    }, [
      w(r(ur), null, {
        default: h(() => [
          w(r(fr), { "as-child": "" }, {
            default: h(() => [
              w(r(je), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: h(() => [
                  Z("span", null, te(e.title), 1),
                  e.sortable ? (m(), A(Xe(o.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : oe("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          w(r(dr), { align: "start" }, {
            default: h(() => [
              e.sortable ? (m(), V(he, { key: 0 }, [
                w(r(Ca), {
                  onClick: c[0] || (c[0] = (u) => s("asc"))
                }, {
                  default: h(() => [
                    w(r(Wn), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    c[3] || (c[3] = pe(" Asc ", -1))
                  ]),
                  _: 1
                }),
                w(r(Ca), {
                  onClick: c[1] || (c[1] = (u) => s("desc"))
                }, {
                  default: h(() => [
                    w(r(zn), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    c[4] || (c[4] = pe(" Desc ", -1))
                  ]),
                  _: 1
                }),
                e.sortOrder ? (m(), A(r(Ca), {
                  key: 0,
                  onClick: c[2] || (c[2] = (u) => s(void 0))
                }, {
                  default: h(() => [
                    w(r(Ul), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    c[5] || (c[5] = pe(" Clear sort ", -1))
                  ]),
                  _: 1
                })) : oe("", !0)
              ], 64)) : oe("", !0),
              e.sortable && e.hideable ? (m(), A(r(Ln), { key: 1 })) : oe("", !0),
              e.hideable ? (m(), A(r(Ca), {
                key: 2,
                onClick: l
              }, {
                default: h(() => [
                  w(r(jl), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  c[6] || (c[6] = pe(" Hide ", -1))
                ]),
                _: 1
              })) : oe("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), pp = { class: "text-left" }, mp = {
  key: 0,
  class: "!w-6 !pr-0"
}, gp = {
  key: 1,
  class: "!w-6"
}, vp = { key: 2 }, pr = /* @__PURE__ */ O({
  __name: "DataTableHeader",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Xt();
    return (o, s) => {
      const l = Pr("tooltip");
      return m(), V("thead", pp, [
        Z("tr", null, [
          r(n).expandable ? (m(), V("th", mp, [
            qo((m(), A(je, {
              type: "button",
              size: "sm",
              variant: "ghost",
              class: "h-6 w-6 p-0 -mr-1 [&:not(:hover)]:opacity-0",
              onClick: s[0] || (s[0] = (i) => r(n).toggleExpandAll())
            }, {
              default: h(() => [
                (m(), A(Xe(r(n).allExpandedState.value ? r(ma) : r(Ht))))
              ]),
              _: 1
            })), [
              [l, "Toggle collapse"]
            ])
          ])) : oe("", !0),
          r(n).selectMode === "multiselect" ? (m(), V("th", gp, [
            w(r(In), {
              "model-value": r(n).allSelectedState.value,
              "onUpdate:modelValue": s[1] || (s[1] = () => r(n).toggleAllSelected())
            }, null, 8, ["model-value"])
          ])) : oe("", !0),
          (m(!0), V(he, null, Ve(r(n).filteredColumns.value, (i) => (m(), V("th", {
            key: i.id
          }, [
            w(fp, {
              title: i.title ?? r(vu)(i.id),
              sortable: r(n).sortable && i.sortable,
              "sort-order": r(n).sortBy?.value?.key === i.id ? r(n).sortBy.value.order : void 0,
              hideable: i.hideable ?? !0,
              onSort: (c) => c ? r(n).updateSort(i.id) : r(n).sortBy.value = void 0,
              onHide: () => a("update:visibleColumns", e.visibleColumns?.filter((c) => c !== i.id) || [])
            }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
          ]))), 128)),
          r(n).hasActionsColumn ? (m(), V("th", vp)) : oe("", !0)
        ])
      ]);
    };
  }
}), hp = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(Gl), {
      role: "status",
      "aria-label": "Loading",
      class: ee(r(U)("size-4 animate-spin", t.class))
    }, null, 8, ["class"]));
  }
}), bp = { class: "absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md" }, _p = { class: "flex flex-col items-center gap-2" }, yp = { class: "text-sm text-muted-foreground" }, mr = /* @__PURE__ */ O({
  __name: "DataTableLoadingOverlay",
  setup(e) {
    const { t } = dt();
    return (a, n) => (m(), V("div", bp, [
      Z("div", _p, [
        w(hp),
        Z("span", yp, te(r(t)("dataTable.loading") || "Loading..."), 1)
      ])
    ]));
  }
}), wp = ["data-state", "data-row-id"], Ep = {
  key: 0,
  class: "!w-6 !pr-0"
}, xp = {
  key: 1,
  class: "!w-6 !pr-0"
}, kp = ["data-col-id", "tabindex"], Cp = { key: 2 }, Sp = { class: "flex items-center gap-0.5" }, gr = /* @__PURE__ */ O({
  __name: "DataTableRow",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, a = Xt(), n = W(() => a.selectedMap.value[t.item.id]), o = W(() => a.highlightedRow === t.item[a.idcol]), s = W(() => a.expandedMap.value[t.item[a.idcol]]), l = W(() => a.isRowExpandableFn(t.item));
    return (i, c) => (m(), V("tr", {
      "data-state": (n.value || o.value) && "selected",
      "data-row-id": e.item.id
    }, [
      r(a).expandable ? (m(), V("td", Ep, [
        l.value ? (m(), A(je, {
          key: 0,
          size: "sm",
          variant: "ghost",
          class: "h-6 w-6 p-0 -mr-1",
          onClick: c[0] || (c[0] = (u) => r(a).toggleExpand(e.item[r(a).idcol]))
        }, {
          default: h(() => [
            (m(), A(Xe(s.value ? r(ma) : r(Ht)), { class: "h-4 w-4" }))
          ]),
          _: 1
        })) : oe("", !0)
      ])) : oe("", !0),
      r(a).selectMode === "multiselect" ? (m(), V("td", xp, [
        w(r(In), {
          "model-value": r(a).selected.value.includes(e.item.id),
          "onUpdate:modelValue": c[1] || (c[1] = (u) => r(a).toggleSelected(e.item.id))
        }, null, 8, ["model-value"])
      ])) : oe("", !0),
      (m(!0), V(he, null, Ve(r(a).filteredColumns.value, (u) => (m(), V("td", {
        key: u.id,
        "data-col-id": u.id,
        tabindex: u.onClick ? 0 : -1,
        class: ee(u.cssClass)
      }, [
        L(i.$slots, `cell:${String(u.id)}`, {
          item: e.item,
          value: e.item[u.id],
          expanded: s.value
        }, () => [
          pe(te(e.item[u.id]), 1)
        ])
      ], 10, kp))), 128)),
      r(a).hasActionsColumn ? (m(), V("td", Cp, [
        Z("div", Sp, [
          L(i.$slots, "cell:actions", { item: e.item })
        ])
      ])) : oe("", !0)
    ], 8, wp));
  }
}), Op = /* @__PURE__ */ O({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = W(
      () => a.columns.filter((c) => c.title && c.hideable !== !1)
    ), s = W(() => !a.visibleColumns || a.visibleColumns.length === 0 ? a.columns.map((c) => c.id) : a.visibleColumns);
    function l(c) {
      return s.value.includes(c);
    }
    function i(c, u) {
      const v = s.value;
      (typeof u == "boolean" ? u : !1) ? v.includes(c) || n("update:visibleColumns", [...v, c]) : n("update:visibleColumns", v.filter((p) => p !== c));
    }
    return (c, u) => (m(), A(r(ur), null, {
      default: h(() => [
        w(r(fr), { "as-child": "" }, {
          default: h(() => [
            w(r(je), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: h(() => [
                w(r(Kl), { class: "mr-2 h-4 w-4" }),
                u[0] || (u[0] = pe(" View ", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(r(dr), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: h(() => [
            w(r(dp), null, {
              default: h(() => [...u[1] || (u[1] = [
                pe("Toggle columns", -1)
              ])]),
              _: 1
            }),
            w(r(Ln)),
            (m(!0), V(he, null, Ve(o.value, (v) => (m(), A(r(up), {
              key: v.id,
              "model-value": l(v.id),
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
}), Np = { class: "flex items-center justify-end py-2" }, vr = /* @__PURE__ */ O({
  __name: "DataTableToolbar",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Xt();
    return (o, s) => (m(), V("div", Np, [
      L(o.$slots, "default"),
      w(Op, {
        columns: r(n).columns,
        "visible-columns": e.visibleColumns,
        "onUpdate:visibleColumns": s[0] || (s[0] = (l) => a("update:visibleColumns", l))
      }, null, 8, ["columns", "visible-columns"])
    ]));
  }
}), Tp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Ap = { class: "hover:!bg-transparent" }, Pp = ["colspan"], ig = /* @__PURE__ */ O({
  __name: "DataTable",
  props: /* @__PURE__ */ Oe({
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
    page: { default: 1 },
    pageModifiers: {},
    sortBy: {},
    sortByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = ve(e, "visibleColumns"), s = ve(e, "itemsPerPage"), l = ve(e, "page"), i = ve(e, "sortBy"), c = ve(e, "selected"), u = W(() => oa(e.columns, (q) => q.id)), v = W(() => oa(e.items, (q) => q.id)), g = W(() => e.items && e.items.length > 0), p = W(() => o.value ? e.columns.filter((q) => o.value?.includes(q.id)) : e.columns), C = W(() => p.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    Re(s, () => {
      l.value && l.value > 1 && (l.value = 1);
    });
    function $(q) {
      !i.value || i.value.key !== q ? i.value = { key: q, order: "asc" } : i.value.key === q && (i.value.order === "asc" ? i.value = { key: q, order: "desc" } : i.value = void 0);
    }
    const k = W(() => e.items), { stateMap: D, toggle: _, toggleAll: b, allToggledState: E, clear: y } = pn(k, "id", e.storagekey, c);
    Ts(
      c,
      W(() => e.items.map((q) => q.id))
    ), Ns(() => (y(), !0), W(() => c.value.length > 0));
    const { stateMap: N, toggle: P, allToggledState: x, toggleAll: I } = pn(k, "id", e.storagekey), J = (q) => e.isRowExpandable ? e.isRowExpandable(q) : !0;
    return Ps({
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
      columnsMap: u,
      itemsMap: v,
      colNum: C,
      hasItems: g,
      selected: c,
      selectedMap: D,
      expandedMap: N,
      sortBy: i,
      toggleSelected: _,
      toggleAllSelected: b,
      allSelectedState: E,
      clearSelected: y,
      toggleExpand: P,
      toggleExpandAll: I,
      allExpandedState: x,
      updateSort: $,
      isRowExpandableFn: J,
      onClickRow: (q) => n("clickRow", q),
      onClickColumn: (q, re) => {
        const H = u.value[q], Ee = v.value[re];
        H && Ee && H.onClick?.(Ee);
      }
    }), t({ selected: c, clearSelected: y }), (q, re) => (m(), V("div", Tp, [
      e.showOptions ? (m(), A(vr, {
        key: 0,
        "visible-columns": o.value,
        "onUpdate:visibleColumns": re[0] || (re[0] = (H) => o.value = H)
      }, {
        default: h(() => [
          L(q.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : oe("", !0),
      w(Ds, null, {
        default: h(() => [
          e.isPending ? (m(), A(mr, { key: 0 })) : oe("", !0),
          Z("div", {
            class: ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            Z("table", {
              class: ee(["[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(pr, {
                "visible-columns": o.value,
                "onUpdate:visibleColumns": re[1] || (re[1] = (H) => o.value = H)
              }, null, 8, ["visible-columns"]),
              w(As, null, {
                default: h(() => [
                  g.value ? (m(!0), V(he, { key: 0 }, Ve(e.items, (H) => (m(), V(he, {
                    key: H.id
                  }, [
                    w(gr, { item: H }, Zo({ _: 2 }, [
                      Ve(q.$slots, (Ee, B) => ({
                        name: B,
                        fn: h((X) => [
                          L(q.$slots, B, G({ ref_for: !0 }, X))
                        ])
                      }))
                    ]), 1032, ["item"]),
                    e.expandable && r(N)[H[e.idcol]] && J(H) ? L(q.$slots, "expanded-row-raw", {
                      key: 0,
                      item: H,
                      colNum: C.value
                    }, () => [
                      Z("tr", Ap, [
                        Z("td", {
                          colspan: C.value,
                          class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7"
                        }, [
                          L(q.$slots, "expanded-row", { item: H })
                        ], 8, Pp)
                      ])
                    ]) : oe("", !0)
                  ], 64))), 128)) : (m(), A(ir, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(cr, {
        page: l.value,
        "onUpdate:page": re[2] || (re[2] = (H) => l.value = H),
        "items-per-page": s.value,
        "onUpdate:itemsPerPage": re[3] || (re[3] = (H) => s.value = H),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((H) => [
          L(q.$slots, "bulk", zt(fa(H)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), Dp = /* @__PURE__ */ O({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = Bt(
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
    ), a = e;
    return (n, o) => (m(), V("div", {
      class: ee(r(U)(r(t)({ variant: a.variant }), a.class))
    }, [
      L(n.$slots, "default")
    ], 2));
  }
}), Lp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, $p = ["data-group-id"], Ip = { class: "!w-6 !pr-0" }, Mp = {
  key: 0,
  class: "!w-6"
}, Rp = ["colspan"], Bp = { class: "flex items-center gap-2" }, Vp = { class: "text-sm" }, cg = /* @__PURE__ */ O({
  __name: "DataTableGrouped",
  props: /* @__PURE__ */ Oe({
    groups: {},
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
  emits: /* @__PURE__ */ Oe(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = W(() => Object.values(e.groups).flat()), s = ve(e, "visibleColumns"), l = ve(e, "itemsPerPage"), i = ve(e, "page"), c = ve(e, "sortBy"), u = ve(e, "selected"), v = W(() => oa(e.columns, (B) => B.id)), g = W(() => oa(o.value, (B) => B.id)), p = W(() => o.value && o.value.length > 0), C = W(() => Object.values(e.groups).length > 0), $ = W(() => s.value ? e.columns.filter((B) => s.value?.includes(B.id)) : e.columns), k = W(() => $.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + 1);
    Re(l, () => {
      i.value && i.value > 1 && (i.value = 1);
    });
    function D(B) {
      !c.value || c.value.key !== B ? c.value = { key: B, order: "asc" } : c.value.key === B && (c.value.order === "asc" ? c.value = { key: B, order: "desc" } : c.value = void 0);
    }
    const _ = W(() => o.value), { stateMap: b, toggle: E, toggleAll: y, allToggledState: N, clear: P } = pn(_, "id", e.storagekey, u);
    Ts(
      u,
      W(() => o.value.map((B) => B.id))
    ), Ns(() => (P(), !0), W(() => u.value.length > 0)), Re(i, () => P());
    const x = le({});
    function I(B) {
      x.value[B] = x.value[B] === void 0 ? !1 : !x.value[B];
    }
    function J() {
      const B = Object.keys(e.groups);
      B.every((M) => x.value[M] !== !1) ? B.forEach((M) => {
        x.value[M] = !1;
      }) : B.forEach((M) => {
        x.value[M] = !0;
      });
    }
    const q = W(() => {
      const B = Object.keys(e.groups), X = B.filter((M) => x.value[M] !== !1).length;
      return X === 0 ? !1 : X === B.length ? !0 : "indeterminate";
    });
    function re(B) {
      return B.every((X) => u.value.includes(X.id));
    }
    function H(B) {
      const X = B.filter((M) => u.value.includes(M.id));
      return X.length > 0 && X.length < B.length;
    }
    function Ee(B) {
      if (re(B))
        u.value = u.value.filter((M) => !B.some((me) => me.id === M));
      else {
        const M = B.map((me) => me.id);
        u.value = [.../* @__PURE__ */ new Set([...u.value, ...M])];
      }
    }
    return Ps({
      items: o.value,
      columns: e.columns,
      selectMode: e.selectMode,
      hasActionsColumn: e.hasActionsColumn,
      idcol: e.idcol,
      expandable: !0,
      // Enable for group expand column
      isRowExpandable: () => !1,
      // But no rows are expandable
      sortable: e.sortable,
      bordered: e.bordered,
      highlightedRow: e.highlightedRow,
      isPending: e.isPending,
      filteredColumns: $,
      columnsMap: v,
      itemsMap: g,
      colNum: k,
      hasItems: p,
      selected: u,
      selectedMap: b,
      expandedMap: W(() => ({})),
      sortBy: c,
      toggleSelected: E,
      toggleAllSelected: y,
      allSelectedState: N,
      clearSelected: P,
      toggleExpand: () => {
      },
      toggleExpandAll: J,
      allExpandedState: q,
      updateSort: D,
      isRowExpandableFn: () => !1,
      onClickRow: (B) => n("clickRow", B),
      onClickColumn: (B, X) => {
        const M = v.value[B], me = g.value[X];
        M && me && M.onClick?.(me);
      }
    }), t({ selected: u, clearSelected: P }), (B, X) => (m(), V("div", Lp, [
      e.showOptions ? (m(), A(vr, {
        key: 0,
        "visible-columns": s.value,
        "onUpdate:visibleColumns": X[0] || (X[0] = (M) => s.value = M)
      }, {
        default: h(() => [
          L(B.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : oe("", !0),
      w(Ds, null, {
        default: h(() => [
          e.isPending ? (m(), A(mr, { key: 0 })) : oe("", !0),
          Z("div", {
            class: ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            Z("table", {
              class: ee(["[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(pr, {
                "visible-columns": s.value,
                "onUpdate:visibleColumns": X[1] || (X[1] = (M) => s.value = M)
              }, null, 8, ["visible-columns"]),
              w(As, null, {
                default: h(() => [
                  C.value ? (m(!0), V(he, { key: 0 }, Ve(e.groups, (M, me) => (m(), V(he, { key: me }, [
                    Z("tr", {
                      class: "bg-muted/50 hover:bg-muted/70",
                      "data-group-id": me
                    }, [
                      Z("td", Ip, [
                        w(je, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0",
                          disabled: M.length === 0,
                          onClick: (z) => I(String(me))
                        }, {
                          default: h(() => [
                            (m(), A(Xe(x.value[String(me)] ? r(ma) : r(Ht)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ]),
                      e.selectMode === "multiselect" ? (m(), V("td", Mp, [
                        w(r(In), {
                          "model-value": M.length === 0 ? !1 : re(M) ? !0 : H(M) ? "indeterminate" : !1,
                          disabled: M.length === 0,
                          "onUpdate:modelValue": (z) => Ee(M)
                        }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                      ])) : oe("", !0),
                      Z("td", {
                        colspan: k.value - 1 - (e.selectMode === "multiselect" ? 1 : 0),
                        class: "font-medium"
                      }, [
                        L(B.$slots, "group-header", {
                          groupKey: String(me),
                          items: M,
                          count: M.length,
                          isExpanded: x.value[String(me)],
                          isSelected: re(M)
                        }, () => [
                          Z("div", Bp, [
                            Z("span", Vp, te(me || "(No value)"), 1),
                            w(r(Dp), {
                              variant: "secondary",
                              class: "ml-2"
                            }, {
                              default: h(() => [
                                pe(te(M.length), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ], 8, Rp)
                    ], 8, $p),
                    x.value[String(me)] !== !1 ? (m(!0), V(he, { key: 0 }, Ve(M, (z) => (m(), A(gr, {
                      key: z.id,
                      item: z
                    }, Zo({ _: 2 }, [
                      Ve(B.$slots, (ft, Le) => ({
                        name: Le,
                        fn: h((Ge) => [
                          Le !== "group-header" ? L(B.$slots, Le, G({
                            key: 0,
                            ref_for: !0
                          }, Ge)) : oe("", !0)
                        ])
                      }))
                    ]), 1032, ["item"]))), 128)) : oe("", !0)
                  ], 64))), 128)) : (m(), A(ir, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(cr, {
        page: i.value,
        "onUpdate:page": X[2] || (X[2] = (M) => i.value = M),
        "items-per-page": l.value,
        "onUpdate:itemsPerPage": X[3] || (X[3] = (M) => l.value = M),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((M) => [
          L(B.$slots, "bulk", zt(fa(M)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
});
function pn(e, t, a, n) {
  const o = n || (a ? $c(a, []) : le([])), s = W(
    () => Object.fromEntries(o.value.map((g) => [g, !0]))
  ), l = (g) => o.value = mu(o.value, g), i = W(
    () => o.value.length > 0 ? o.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function c() {
    o.value = [];
  }
  function u() {
    o.value = e.value.map((g) => g[t]);
  }
  return {
    state: o,
    stateMap: s,
    toggle: l,
    allToggledState: i,
    toggleAll: () => i.value === !1 || i.value === "indeterminate" ? u() : c(),
    clear: c
  };
}
const Fp = ["datetime", "title"], ug = /* @__PURE__ */ O({
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
    function n(c, u) {
      let v = a[c] || c;
      return u && Object.entries(u).forEach(([g, p]) => {
        v = v.replace(`{${g}}`, String(p));
      }), v;
    }
    const o = W(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ hc(o, t.format, {
      locales: t.locale
    }), l = W(() => {
      if (!t.relative)
        return null;
      const u = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), v = Math.floor(u / 1e3), g = Math.floor(v / 60), p = Math.floor(g / 60), C = Math.floor(p / 24);
      return C > 0 ? n("date.daysAgo", { count: C }) : p > 0 ? n("date.hoursAgo", { count: p }) : g > 0 ? n("date.minutesAgo", { count: g }) : n("date.justNow");
    }), i = W(() => t.relative ? l.value : s.value);
    return (c, u) => (m(), V("time", {
      datetime: o.value.toISOString(),
      title: t.relative ? r(s) : void 0,
      class: "whitespace-nowrap"
    }, te(i.value), 9, Fp));
  }
}), Up = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, zp = { class: "text-muted-foreground" }, Wp = { class: "font-semibold" }, jp = {
  key: 1,
  class: "text-muted-foreground"
}, zo = /* @__PURE__ */ O({
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
    return (a, n) => (m(), V("div", Up, [
      e.value?.length ? (m(!0), V(he, { key: 0 }, Ve(e.value, (o, s) => (m(), V("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        Z("span", zp, " ≥" + te(`${o.from}:`), 1),
        n[0] || (n[0] = pe()),
        Z("span", Wp, te(o.value), 1)
      ]))), 128)) : (m(), V("span", jp, te(t("common.novalue")), 1))
    ]));
  }
}), jt = _t([]), Gp = W(() => oa(jt.value, (e) => e.key)), Mn = le({});
function hr(e) {
  const t = jt.value.findIndex((a) => a.key === e);
  t !== -1 && jt.value.splice(t, 1), Os.remove(e);
}
const br = (e) => {
  Mn.value[e] = !1, Gp.value[e]?.onClose?.(), setTimeout(() => hr(e), 600);
}, Hp = (e) => (e.key = e.key ?? `${Math.random()}`, jt.value.push(e), Qo(jt), Mn.value[e.key] = !0, Os.add(() => (br(e.key), !0), e.key), e.key), Yp = { close: br, visible: Mn, open: Hp, instances: jt, removeInstance: hr }, _r = () => Yp, dg = /* @__PURE__ */ O({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: a, instances: n } = _r();
    return (o, s) => (m(!0), V(he, null, Ve(r(n), (l) => (m(), A(Xe(l.component), G({
      key: l.key,
      open: r(a)[l.key]
    }, { ref_for: !0 }, l.componentProps || {}, {
      "onUpdate:open": (i) => !i && r(t)(l.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), Kp = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, Xp = /* @__PURE__ */ O({
  __name: "EmptyMini",
  setup(e) {
    function t(a) {
      return {
        "common.noValues": "No values"
      }[a] || a;
    }
    return (a, n) => (m(), V("div", Kp, [
      w(r(os), { size: 16 }),
      Z("span", null, [
        L(a.$slots, "default", {}, () => [
          pe(te(t("common.noValues")), 1)
        ])
      ])
    ]));
  }
}), qp = { class: "flex-1" }, Jp = { class: "flex gap-1 items-center" }, Zp = {
  key: 0,
  class: "flex-1"
}, Qp = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, em = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ Oe({
    placeholder: { default: "Filter.." },
    addItemButtonLabel: { default: "Add Item" },
    multiple: { type: Boolean },
    options: {},
    showAddItemButton: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = ve(e, "modelValue"), a = le(""), { startsWith: n } = _l({ sensitivity: "base" }), o = W(() => ye(e.options).filter((i) => n(i.label, a.value))), s = W(() => !!ye(e.options).length), { t: l } = dt();
    return (i, c) => (m(), V(he, null, [
      w(r(yl), {
        modelValue: t.value,
        "onUpdate:modelValue": c[1] || (c[1] = (u) => t.value = u),
        multiple: e.multiple,
        disabled: e.disabled
      }, {
        default: h(() => [
          w(r(wl), {
            modelValue: a.value,
            "onUpdate:modelValue": c[0] || (c[0] = (u) => a.value = u),
            autofocus: "",
            disabled: !s.value || e.disabled,
            placeholder: e.placeholder,
            class: ee(r(U)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          o.value.length ? oe("", !0) : (m(), A(Xp, { key: 0 })),
          w(r(El), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: h(() => [
              (m(!0), V(he, null, Ve(o.value, (u) => (m(), A(r(xl), {
                key: String(u.value),
                value: u.value,
                disabled: e.disabled,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: h(() => [
                  Z("div", qp, [
                    L(i.$slots, "option", { option: u }, () => [
                      pe(te(u.label), 1)
                    ])
                  ]),
                  w(r(kl), null, {
                    default: h(() => [
                      w(r(Ma), { size: 12 })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128))
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple", "disabled"]),
      Z("div", Jp, [
        e.showAddItemButton ? (m(), V("div", Zp, [
          w(je, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            disabled: e.disabled,
            onClick: c[2] || (c[2] = (u) => i.$emit("onAddItem"))
          }, {
            default: h(() => [
              w(r(wn)),
              pe(" " + te(e.addItemButtonLabel), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : oe("", !0),
        s.value && e.multiple ? (m(), V("div", Qp, te(r(l)("common.elementCountSelected", { count: t.value.length })), 1)) : oe("", !0)
      ])
    ], 64));
  }
}), tm = /* @__PURE__ */ O({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(Cl), G({ "data-slot": "alert-dialog" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ O({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(Sl), G(r(a), {
      class: r(U)(r(xt)(), t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nm = /* @__PURE__ */ O({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(Ol), G(r(a), {
      class: r(U)(
        r(xt)({ variant: "outline" }),
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
}), om = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(Nl), null, {
      default: h(() => [
        w(r(Tl), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        w(r(Al), G({ "data-slot": "alert-dialog-content" }, r(s), {
          class: r(U)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: h(() => [
            L(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sm = /* @__PURE__ */ O({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(Pl), G({ "data-slot": "alert-dialog-description" }, r(a), {
      class: r(U)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rm = /* @__PURE__ */ O({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "alert-dialog-footer",
      class: ee(
        r(U)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), lm = /* @__PURE__ */ O({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "alert-dialog-header",
      class: ee(r(U)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), im = /* @__PURE__ */ O({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(Dl), G({ "data-slot": "alert-dialog-title" }, r(a), {
      class: r(U)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cm = /* @__PURE__ */ O({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ Oe({
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
    const t = e, a = ve(e, "open"), n = le(!1);
    async function o() {
      n.value = !0, (t.onOk ? await t.onOk() : !0) && close(), n.value = !1;
    }
    const { t: s } = dt();
    return (l, i) => (m(), A(r(tm), {
      open: a.value,
      "onUpdate:open": i[2] || (i[2] = (c) => a.value = c)
    }, {
      default: h(() => [
        w(r(om), null, {
          default: h(() => [
            w(r(lm), null, {
              default: h(() => [
                w(r(im), null, {
                  default: h(() => [
                    pe(te(e.title || r(s)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                w(r(sm), null, {
                  default: h(() => [
                    pe(te(e.description || r(s)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(r(rm), null, {
              default: h(() => [
                w(r(nm), {
                  disabled: n.value,
                  onClick: i[0] || (i[0] = (c) => a.value = !1)
                }, {
                  default: h(() => [
                    pe(te(r(s)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                w(r(am), {
                  loading: n.value,
                  onClick: i[1] || (i[1] = (c) => o())
                }, {
                  default: h(() => [
                    pe(te(r(s)("common.continue")), 1)
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
}), um = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(mn), G({ "data-slot": "dialog" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = qe(a);
    return (o, s) => (m(), A(r(bn), G({ "data-slot": "dialog-description" }, r(n), {
      class: r(U)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fm = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "dialog-header",
      class: ee(r(U)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), pm = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r(vn), null, {
      default: h(() => [
        w(r(gn), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            w(r(hn), G({
              class: r(U)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, r(s), {
              onPointerDownOutside: i[0] || (i[0] = (c) => {
                const u = c.detail.originalEvent, v = u.target;
                (u.offsetX > v.clientWidth || u.offsetY > v.clientHeight) && c.preventDefault();
              })
            }), {
              default: h(() => [
                L(l.$slots, "default"),
                w(r(es), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: h(() => [
                    w(r(ga), { class: "w-4 h-4" }),
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
}), mm = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = qe(a);
    return (o, s) => (m(), A(r(_n), G({ "data-slot": "dialog-title" }, r(n), {
      class: r(U)("text-lg leading-none font-semibold", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gm = ["innerHTML"], yr = /* @__PURE__ */ O({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ Oe({
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
    const t = ve(e, "open");
    return (a, n) => (m(), A(r(um), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (o) => t.value = o)
    }, {
      default: h(() => [
        w(r(pm), { class: "!max-w-max min-w-[435px]" }, {
          default: h(() => [
            w(r(fm), null, {
              default: h(() => [
                w(r(mm), null, {
                  default: h(() => [
                    Z("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, gm)
                  ]),
                  _: 1
                }),
                e.description ? (m(), A(r(dm), { key: 0 }, {
                  default: h(() => [
                    pe(te(e.description), 1)
                  ]),
                  _: 1
                })) : oe("", !0)
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
const vm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const hm = (e) => typeof e < "u";
function bm(e) {
  return JSON.parse(JSON.stringify(e));
}
function Wo(e, t, a, n = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: u,
    deep: v = !1,
    defaultValue: g,
    shouldEmit: p
  } = n, C = Gt(), $ = a || C?.emit || ((o = C?.$emit) == null ? void 0 : o.bind(C)) || ((l = (s = C?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(C?.proxy));
  let k = u;
  t || (t = "modelValue"), k = k || `update:${t.toString()}`;
  const D = (E) => i ? typeof i == "function" ? i(E) : bm(E) : E, _ = () => hm(e[t]) ? D(e[t]) : g, b = (E) => {
    p ? p(E) && $(k, E) : $(k, E);
  };
  if (c) {
    const E = _(), y = le(E);
    let N = !1;
    return Re(
      () => e[t],
      (P) => {
        N || (N = !0, y.value = D(P), da(() => N = !1));
      }
    ), Re(
      y,
      (P) => {
        !N && (P !== e[t] || v) && b(P);
      },
      { deep: v }
    ), y;
  } else
    return W({
      get() {
        return _();
      },
      set(E) {
        b(E);
      }
    });
}
const [Rn, _m] = yn("DrawerRoot"), wr = /* @__PURE__ */ new WeakMap();
function $e(e, t, a = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const n = {};
  Object.entries(t).forEach(([o, s]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, s);
      return;
    }
    n[o] = e.style[o], e.style[o] = s;
  }), !a && wr.set(e, n);
}
function ym(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const a = wr.get(e);
  a && Object.entries(a).forEach(([n, o]) => {
    e.style[n] = o;
  });
}
function Sa(e, t) {
  const a = window.getComputedStyle(e), n = a.transform || a.webkitTransform || a.mozTransform;
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Te(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Te(t) ? 5 : 4]) : null);
}
function wm(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Te(e) {
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
function Ja(e, t) {
  if (!e)
    return () => {
    };
  const a = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = a;
  };
}
function Em(...e) {
  return (...t) => {
    for (const a of e)
      typeof a == "function" && a(...t);
  };
}
const xe = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Er = 0.4, xm = 0.25, km = 100, xr = 8, Oa = 16, kr = 26, jo = "vaul-dragging";
function Cm({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: a,
  overlayRef: n,
  fadeFromIndex: o,
  onSnapPointChange: s,
  direction: l
}) {
  const i = le(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function c() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  ua(() => {
    typeof window < "u" && window.addEventListener("resize", c);
  }), $r(() => {
    typeof window < "u" && window.removeEventListener("resize", c);
  });
  const u = W(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), v = W(
    () => t.value && t.value.length > 0 && (o?.value || o?.value === 0) && !Number.isNaN(o?.value) && t.value[o?.value ?? -1] === e.value || !t.value
  ), g = W(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.findIndex((E) => E === e.value)) ?? null;
    }
  ), p = W(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.map((E) => {
        const y = typeof E == "string";
        let N = 0;
        if (y && (N = Number.parseInt(E, 10)), Te(l.value)) {
          const x = y ? N : i.value ? E * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - x : -i.value.innerHeight + x : x;
        }
        const P = y ? N : i.value ? E * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), C = W(
    () => {
      var b;
      return g.value !== null ? (b = p.value) == null ? void 0 : b[g.value] : null;
    }
  ), $ = (b) => {
    var E, y, N, P;
    const x = ((E = p.value) == null ? void 0 : E.findIndex((I) => I === b)) ?? null;
    da(() => {
      var I;
      s(x, p.value), $e((I = a.value) == null ? void 0 : I.$el, {
        transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
        transform: Te(l.value) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
      });
    }), p.value && x !== p.value.length - 1 && x !== o?.value ? $e((y = n.value) == null ? void 0 : y.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      opacity: "0"
    }) : $e((N = n.value) == null ? void 0 : N.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      opacity: "1"
    }), e.value = x !== null ? ((P = t.value) == null ? void 0 : P[x]) ?? null : null;
  };
  Re(
    [e, p, t],
    () => {
      var b;
      if (e.value) {
        const E = ((b = t.value) == null ? void 0 : b.findIndex((y) => y === e.value)) ?? -1;
        p.value && E !== -1 && typeof p.value[E] == "number" && $(p.value[E]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function k({
    draggedDistance: b,
    closeDrawer: E,
    velocity: y,
    dismissible: N
  }) {
    var P, x, I;
    if (o.value === void 0)
      return;
    const J = l.value === "bottom" || l.value === "right" ? (C.value ?? 0) - b : (C.value ?? 0) + b, q = g.value === o.value - 1, re = g.value === 0, H = b > 0;
    if (q && $e((P = n.value) == null ? void 0 : P.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`
    }), y > 2 && !H) {
      N ? E() : $(p.value[0]);
      return;
    }
    if (y > 2 && H && p && t.value) {
      $(p.value[t.value.length - 1]);
      return;
    }
    const Ee = (x = p.value) == null ? void 0 : x.reduce((X, M) => typeof X != "number" || typeof M != "number" ? X : Math.abs(M - J) < Math.abs(X - J) ? M : X), B = Te(l.value) ? window.innerHeight : window.innerWidth;
    if (y > Er && Math.abs(b) < B * 0.4) {
      const X = H ? 1 : -1;
      if (X > 0 && u) {
        $(p.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (re && X < 0 && N && E(), g.value === null)
        return;
      $(p.value[g.value + X]);
      return;
    }
    $(Ee);
  }
  function D({ draggedDistance: b }) {
    var E;
    if (C.value === null)
      return;
    const y = l.value === "bottom" || l.value === "right" ? C.value - b : C.value + b;
    (l.value === "bottom" || l.value === "right") && y < p.value[p.value.length - 1] || (l.value === "top" || l.value === "left") && y > p.value[p.value.length - 1] || $e((E = a.value) == null ? void 0 : E.$el, {
      transform: Te(l.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
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
    const N = y ? g.value + 1 : g.value - 1, P = y ? p.value[N] - p.value[N - 1] : p.value[N + 1] - p.value[N], x = b / Math.abs(P);
    return y ? 1 - x : x;
  }
  return {
    isLastSnapPoint: u,
    shouldFade: v,
    getPercentageDragged: _,
    activeSnapPointIndex: g,
    onRelease: k,
    onDrag: D,
    snapPointsOffset: p
  };
}
function Go() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let ta = null;
function Sm(e) {
  const { isOpen: t, modal: a, nested: n, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: l } = e, i = le(typeof window < "u" ? window.location.href : ""), c = le(0);
  function u() {
    if (Go() && ta === null && t.value && !l.value) {
      ta = {
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
          const C = p - window.innerHeight;
          C && c.value >= p && (document.body.style.top = `-${c.value + C}px`);
        });
      }, 300);
    }
  }
  function v() {
    if (Go() && ta !== null && !l.value) {
      const g = -Number.parseInt(document.body.style.top, 10), p = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ta), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(p, g);
      }), ta = null;
    }
  }
  return ua(() => {
    function g() {
      c.value = window.scrollY;
    }
    g(), window.addEventListener("scroll", g), Jo(() => {
      window.removeEventListener("scroll", g);
    });
  }), Re([t, o, i], () => {
    n.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || u(), a.value || setTimeout(() => {
      v();
    }, 500)) : v());
  }), { restorePositionSetting: v };
}
function Om(e, t) {
  return e && e.value ? e : t;
}
function Nm(e) {
  const {
    emitDrag: t,
    emitRelease: a,
    emitClose: n,
    emitOpenChange: o,
    open: s,
    dismissible: l,
    nested: i,
    modal: c,
    shouldScaleBackground: u,
    setBackgroundColorOnScale: v,
    scrollLockTimeout: g,
    closeThreshold: p,
    activeSnapPoint: C,
    fadeFromIndex: $,
    direction: k,
    noBodyStyles: D,
    handleOnly: _,
    preventScrollRestoration: b
  } = e, E = le(s.value ?? !1), y = le(!1), N = le(!1), P = le(!1), x = le(null), I = le(null), J = le(null), q = le(null), re = le(null), H = le(!1), Ee = le(null), B = le(0), X = le(!1);
  le(0);
  const M = le(null);
  le(0);
  const me = W(() => {
    var d;
    return ((d = M.value) == null ? void 0 : d.$el.getBoundingClientRect().height) || 0;
  }), z = Om(
    e.snapPoints,
    le(void 0)
  ), ft = W(() => {
    var d;
    return z && (((d = z.value) == null ? void 0 : d.length) ?? 0) > 0;
  }), Le = le(null), {
    activeSnapPointIndex: Ge,
    onRelease: pt,
    snapPointsOffset: ke,
    onDrag: Pe,
    shouldFade: Je,
    getPercentageDragged: St
  } = Cm({
    snapPoints: z,
    activeSnapPoint: C,
    drawerRef: M,
    fadeFromIndex: $,
    overlayRef: x,
    onSnapPointChange: be,
    direction: k
  });
  function be(d, f) {
    z.value && d === f.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  Sm({
    isOpen: E,
    modal: c,
    nested: i,
    hasBeenOpened: y,
    noBodyStyles: D,
    preventScrollRestoration: b
  });
  function Ye() {
    return (window.innerWidth - kr) / window.innerWidth;
  }
  function Ze(d, f) {
    var T;
    if (!d)
      return !1;
    let F = d;
    const ne = (T = window.getSelection()) == null ? void 0 : T.toString(), ie = M.value ? Sa(M.value.$el, k.value) : null, ae = /* @__PURE__ */ new Date();
    if (F.hasAttribute("data-vaul-no-drag") || F.closest("[data-vaul-no-drag]"))
      return !1;
    if (k.value === "right" || k.value === "left")
      return !0;
    if (I.value && ae.getTime() - I.value.getTime() < 500)
      return !1;
    if (ie !== null && (k.value === "bottom" ? ie > 0 : ie < 0))
      return !0;
    if (ne && ne.length > 0)
      return !1;
    if (re.value && ae.getTime() - re.value.getTime() < g.value && ie === 0 || f)
      return re.value = ae, !1;
    for (; F; ) {
      if (F.scrollHeight > F.clientHeight) {
        if (F.scrollTop !== 0)
          return re.value = /* @__PURE__ */ new Date(), !1;
        if (F.getAttribute("role") === "dialog")
          return !0;
      }
      F = F.parentNode;
    }
    return !0;
  }
  function Qe(d) {
    !l.value && !z.value || M.value && !M.value.$el.contains(d.target) || (N.value = !0, J.value = /* @__PURE__ */ new Date(), d.target.setPointerCapture(d.pointerId), B.value = Te(k.value) ? d.clientY : d.clientX);
  }
  function mt(d) {
    var f, T, F, ne, ie, ae;
    if (M.value && N.value) {
      const S = k.value === "bottom" || k.value === "right" ? 1 : -1, R = (B.value - (Te(k.value) ? d.clientY : d.clientX)) * S, ce = R > 0, _e = z.value && !l.value && !ce;
      if (_e && Ge.value === 0)
        return;
      const at = Math.abs(R), Tt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ze = at / me.value;
      const st = St(at, ce);
      if (st !== null && (ze = st), _e && ze >= 1 || !H.value && !Ze(d.target, ce))
        return;
      if ((f = M?.value) == null || f.$el.classList.add(jo), H.value = !0, $e((T = M.value) == null ? void 0 : T.$el, {
        transition: "none"
      }), $e((F = x.value) == null ? void 0 : F.$el, {
        transition: "none"
      }), z.value && Pe({ draggedDistance: R }), ce && !z.value) {
        const rt = wm(R), ha = Math.min(rt * -1, 0) * S;
        $e((ne = M.value) == null ? void 0 : ne.$el, {
          transform: Te(k.value) ? `translate3d(0, ${ha}px, 0)` : `translate3d(${ha}px, 0, 0)`
        });
        return;
      }
      const Ua = 1 - ze;
      if ((Je.value || $.value && Ge.value === $.value - 1) && (t(ze), $e(
        (ie = x.value) == null ? void 0 : ie.$el,
        {
          opacity: `${Ua}`,
          transition: "none"
        },
        !0
      )), Tt && x.value && u.value) {
        const rt = Math.min(Ye() + ze * (1 - Ye()), 1), ha = 8 - ze * 8, Vn = Math.max(0, 14 - ze * 14);
        $e(
          Tt,
          {
            borderRadius: `${ha}px`,
            transform: Te(k.value) ? `scale(${rt}) translate3d(0, ${Vn}px, 0)` : `scale(${rt}) translate3d(${Vn}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!z.value) {
        const rt = at * S;
        $e((ae = M.value) == null ? void 0 : ae.$el, {
          transform: Te(k.value) ? `translate3d(0, ${rt}px, 0)` : `translate3d(${rt}px, 0, 0)`
        });
      }
    }
  }
  function et() {
    var d;
    if (!M.value)
      return;
    const f = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), T = Sa(M.value.$el, k.value);
    $e(M.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`
    }), $e((d = x.value) == null ? void 0 : d.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      opacity: "1"
    }), u.value && T && T > 0 && E.value && $e(
      f,
      {
        borderRadius: `${xr}px`,
        overflow: "hidden",
        ...Te(k.value) ? {
          transform: `scale(${Ye()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Ye()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${xe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${xe.EASE.join(",")})`
      },
      !0
    );
  }
  function tt(d) {
    M.value && (n(), d || (E.value = !1), window.setTimeout(() => {
      z.value && (C.value = z.value[0]);
    }, xe.DURATION * 1e3));
  }
  ca(() => {
    if (!E.value && u.value && vm) {
      const d = setTimeout(() => {
        ym(document.body);
      }, 200);
      return () => clearTimeout(d);
    }
  }), Re(s, () => {
    E.value = s.value, s.value || tt();
  });
  function Ot(d) {
    if (!N.value || !M.value)
      return;
    M.value.$el.classList.remove(jo), H.value = !1, N.value = !1, q.value = /* @__PURE__ */ new Date();
    const f = Sa(M.value.$el, k.value);
    if (!Ze(d.target, !1) || !f || Number.isNaN(f) || J.value === null)
      return;
    const T = q.value.getTime() - J.value.getTime(), F = B.value - (Te(k.value) ? d.clientY : d.clientX), ne = Math.abs(F) / T;
    if (ne > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), z.value) {
      const ae = k.value === "bottom" || k.value === "right" ? 1 : -1;
      pt({
        draggedDistance: F * ae,
        closeDrawer: tt,
        velocity: ne,
        dismissible: l.value
      }), a(!0);
      return;
    }
    if (k.value === "bottom" || k.value === "right" ? F > 0 : F < 0) {
      et(), a(!0);
      return;
    }
    if (ne > Er) {
      tt(), a(!1);
      return;
    }
    const ie = Math.min(
      M.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (f >= ie * p.value) {
      tt(), a(!1);
      return;
    }
    a(!0), et();
  }
  Re(E, (d) => {
    d && (I.value = /* @__PURE__ */ new Date()), o(d);
  }, { immediate: !0 });
  function gt(d) {
    var f, T;
    const F = d ? (window.innerWidth - Oa) / window.innerWidth : 1, ne = d ? -16 : 0;
    Ee.value && window.clearTimeout(Ee.value), $e((f = M.value) == null ? void 0 : f.$el, {
      transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      transform: `scale(${F}) translate3d(0, ${ne}px, 0)`
    }), !d && (T = M.value) != null && T.$el && (Ee.value = window.setTimeout(() => {
      var ie, ae;
      const S = Sa((ie = M.value) == null ? void 0 : ie.$el, k.value);
      $e((ae = M.value) == null ? void 0 : ae.$el, {
        transition: "none",
        transform: Te(k.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
      });
    }, 500));
  }
  function Nt(d) {
    var f;
    if (d < 0)
      return;
    const T = Te(k.value) ? window.innerHeight : window.innerWidth, F = (T - Oa) / T, ne = F + d * (1 - F), ie = -16 + d * Oa;
    $e((f = M.value) == null ? void 0 : f.$el, {
      transform: Te(k.value) ? `scale(${ne}) translate3d(0, ${ie}px, 0)` : `scale(${ne}) translate3d(${ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function Jt(d) {
    var f;
    const T = Te(k.value) ? window.innerHeight : window.innerWidth, F = d ? (T - Oa) / T : 1, ne = d ? -16 : 0;
    d && $e((f = M.value) == null ? void 0 : f.$el, {
      transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      transform: Te(k.value) ? `scale(${F}) translate3d(0, ${ne}px, 0)` : `scale(${F}) translate3d(${ne}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: E,
    modal: c,
    keyboardIsOpen: X,
    hasBeenOpened: y,
    drawerRef: M,
    drawerHeightRef: me,
    overlayRef: x,
    handleRef: Le,
    isDragging: N,
    dragStartTime: J,
    isAllowedToDrag: H,
    snapPoints: z,
    activeSnapPoint: C,
    hasSnapPoints: ft,
    pointerStart: B,
    dismissible: l,
    snapPointsOffset: ke,
    direction: k,
    shouldFade: Je,
    fadeFromIndex: $,
    shouldScaleBackground: u,
    setBackgroundColorOnScale: v,
    onPress: Qe,
    onDrag: mt,
    onRelease: Ot,
    closeDrawer: tt,
    onNestedDrag: Nt,
    onNestedRelease: Jt,
    onNestedOpenChange: gt,
    emitClose: n,
    emitDrag: t,
    emitRelease: a,
    emitOpenChange: o,
    nested: i,
    handleOnly: _,
    noBodyStyles: D
  };
}
const Tm = /* @__PURE__ */ O({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: xm },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: km },
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
    Dr();
    const s = W(() => n.fadeFromIndex ?? (n.snapPoints && n.snapPoints.length - 1)), l = Wo(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = Wo(n, "activeSnapPoint", o, {
      passive: n.activeSnapPoint === void 0
    }), c = {
      emitDrag: ($) => o("drag", $),
      emitRelease: ($) => o("release", $),
      emitClose: () => o("close"),
      emitOpenChange: ($) => {
        o("update:open", $), setTimeout(() => {
          o("animationEnd", $);
        }, xe.DURATION * 1e3);
      }
    }, { closeDrawer: u, hasBeenOpened: v, modal: g, isOpen: p } = _m(
      Nm({
        ...c,
        ...Qa(n),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: l
      })
    );
    function C($) {
      if (l.value !== void 0) {
        c.emitOpenChange($);
        return;
      }
      p.value = $, $ ? v.value = !0 : u();
    }
    return t({
      open: p
    }), ($, k) => (m(), A(r(mn), {
      open: r(p),
      modal: r(g),
      "onUpdate:open": C
    }, {
      default: h(() => [
        L($.$slots, "default", { open: r(p) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Am = /* @__PURE__ */ O({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: a, isOpen: n, shouldFade: o } = Rn();
    return (s, l) => (m(), A(r(gn), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": r(n) && r(a) ? "true" : "false",
      "data-vaul-snap-points-overlay": r(n) && r(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Pm = () => () => {
};
function Dm() {
  const { direction: e, isOpen: t, shouldScaleBackground: a, setBackgroundColorOnScale: n, noBodyStyles: o } = Rn(), s = le(null), l = le(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - kr) / window.innerWidth;
  }
  ca((c) => {
    if (t.value && a.value) {
      s.value && clearTimeout(s.value);
      const u = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!u)
        return;
      Em(
        n.value && !o.value ? Ja(document.body, { background: "black" }) : Pm,
        Ja(u, {
          transformOrigin: Te(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${xe.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${xe.EASE.join(",")})`
        })
      );
      const v = Ja(u, {
        borderRadius: `${xr}px`,
        overflow: "hidden",
        ...Te(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      c(() => {
        v(), s.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, xe.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Lm = /* @__PURE__ */ O({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: a,
      snapPointsOffset: n,
      hasSnapPoints: o,
      drawerRef: s,
      onPress: l,
      onDrag: i,
      onRelease: c,
      modal: u,
      emitOpenChange: v,
      dismissible: g,
      keyboardIsOpen: p,
      closeDrawer: C,
      direction: $,
      handleOnly: k
    } = Rn();
    Dm();
    const D = le(!1), _ = W(() => n.value && n.value.length > 0 ? `${n.value[0]}px` : "0");
    function b(N) {
      if (!u.value || N.defaultPrevented) {
        N.preventDefault();
        return;
      }
      p.value && (p.value = !1), g.value ? v(!1) : N.preventDefault();
    }
    function E(N) {
      k.value || l(N);
    }
    function y(N) {
      k.value || i(N);
    }
    return ca(() => {
      o.value && window.requestAnimationFrame(() => {
        D.value = !0;
      });
    }), (N, P) => (m(), A(r(hn), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": r($),
      "data-vaul-delayed-snap-points": D.value ? "true" : "false",
      "data-vaul-snap-points": r(a) && r(o) ? "true" : "false",
      style: Xo({ "--snap-point-height": _.value }),
      onPointerdown: E,
      onPointermove: y,
      onPointerup: r(c),
      onPointerDownOutside: b,
      onOpenAutoFocus: P[0] || (P[0] = Lr(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (x) => {
        r(g) || x.preventDefault();
      })
    }, {
      default: h(() => [
        L(N.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), $m = /* @__PURE__ */ O({
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
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(Tm), G({ "data-slot": "drawer" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = /* @__PURE__ */ O({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(Am), G({ "data-slot": "drawer-overlay" }, r(a), {
      class: r(U)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), Mm = /* @__PURE__ */ O({
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
    const a = e, o = Ne(a, t);
    return (s, l) => (m(), A(r(vn), null, {
      default: h(() => [
        w(Im),
        w(r(Lm), G({ "data-slot": "drawer-content" }, r(o), {
          class: r(U)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            a.class
          )
        }), {
          default: h(() => [
            l[0] || (l[0] = Z("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            L(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Rm = /* @__PURE__ */ O({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(bn), G({ "data-slot": "drawer-description" }, r(a), {
      class: r(U)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = /* @__PURE__ */ O({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "drawer-header",
      class: ee(r(U)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Vm = /* @__PURE__ */ O({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (m(), A(r(_n), G({ "data-slot": "drawer-title" }, r(a), {
      class: r(U)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fm = ["innerHTML"], Um = { class: "px-4 flex-1 overflow-auto select-text" }, zm = /* @__PURE__ */ O({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ Oe({
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
    const t = ve(e, "open");
    return (a, n) => (m(), A(r($m), {
      open: t.value,
      "onUpdate:open": n[1] || (n[1] = (o) => t.value = o),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: h(() => [
        w(r(Mm), { class: "!max-w-[800px]" }, {
          default: h(() => [
            w(r(Bm), { class: "!pb-0" }, {
              default: h(() => [
                w(r(Vm), { class: "flex items-center gap-2" }, {
                  default: h(() => [
                    Z("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, Fm),
                    w(je, {
                      variant: "ghost",
                      onClick: n[0] || (n[0] = (o) => t.value = !1)
                    }, {
                      default: h(() => [
                        w(r(ga))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (m(), A(r(Rm), { key: 0 }, {
                  default: h(() => [
                    pe(te(e.description), 1)
                  ]),
                  _: 1
                })) : oe("", !0)
              ]),
              _: 1
            }),
            Z("div", Um, [
              L(a.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Wm = /* @__PURE__ */ O({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ Oe({
    dialogConfig: {},
    componentConfig: {},
    type: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ve(e, "open"), a = le(!1);
    async function n() {
      a.value = !0, (await e.dialogConfig.onOk?.() ?? !0) && (t.value = !1), a.value = !1;
    }
    return (o, s) => (m(), A(Xe(e.type === "drawer" ? zm : yr), G(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": s[0] || (s[0] = (l) => t.value = l)
    }), {
      default: h(() => [
        (m(), A(Xe(e.componentConfig.component), G(e.componentConfig.componentProps, { onSubmitSuccess: n }), null, 16))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), jm = { class: "mt-1" }, Bn = /* @__PURE__ */ O({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ Oe({
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
    const t = ve(e, "open"), a = le(e.initialValue), { t: n } = dt(), o = le(!1);
    async function s() {
      o.value = !0, (await e.dialogConfig.onOk?.(a.value) ?? !0) && (t.value = !1), o.value = !1;
    }
    return (l, i) => (m(), A(yr, G(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[1] || (i[1] = (c) => t.value = c)
    }), {
      default: h(() => [
        (m(), A(Xe(e.componentConfig.component), G(e.componentConfig.componentProps, {
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (c) => a.value = c)
        }), null, 16, ["modelValue"])),
        Z("div", jm, [
          w(je, {
            type: "Submit",
            disabled: o.value,
            size: "sm",
            onClick: s
          }, {
            default: h(() => [
              pe(te(e.dialogConfig.okButtonText || r(n)("common.save")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), va = _r();
function fg(e, t, a = "dialog") {
  return va.open({
    component: Wm,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: a
    }
  });
}
function pg(e, t = "Achtung", a = "Sind Sie sicher?") {
  return va.open({
    component: cm,
    componentProps: {
      title: t,
      description: a,
      onOk: e
    }
  });
}
function mg({ dialogConfig: e, initialValue: t, onOk: a, component: n, componentProps: o }) {
  return va.open({
    component: Bn,
    componentProps: {
      componentConfig: { component: n, componentProps: o },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
function gg(e, t, a, n, o) {
  return va.open({
    component: Bn,
    componentProps: {
      componentConfig: { component: $n, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    }
  });
}
function vg(e, t, a, n, o) {
  return va.open({
    component: Bn,
    componentProps: {
      componentConfig: { component: em, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    }
  });
}
const hg = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ Oe({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = ve(e, "modelValue");
    return (n, o) => (m(), A($n, {
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => a.value = s),
      class: ee(t.class),
      options: [{ value: !0, label: "True" }, { value: !1, label: "False" }]
    }, null, 8, ["modelValue", "class"]));
  }
}), Gm = /* @__PURE__ */ O({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, l) => (m(), A(r(Ll), G({ "data-slot": "popover" }, r(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Ne(o, n);
    return (l, i) => (m(), A(r($l), null, {
      default: h(() => [
        w(r(Il), G({ "data-slot": "popover-content" }, { ...r(s), ...l.$attrs }, {
          class: r(U)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            a.class
          )
        }), {
          default: h(() => [
            L(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ym = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(Ml), G({ "data-slot": "popover-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Km = { key: 0 }, Xm = { class: "text-xs" }, qm = { class: "text-xs" }, Jm = { class: "flex gap-2" }, bg = /* @__PURE__ */ O({
  __name: "InputGraduated",
  props: /* @__PURE__ */ Oe({
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
    const n = (c) => typeof c == "string", o = ve(e, "modelValue"), s = () => o.value?.push({ from: 0, value: 0 }), l = (c) => o.value.splice(c, 1), i = () => o.value = [];
    return (c, u) => (m(), A(r(Gm), null, {
      default: h(() => [
        w(r(Ym), { "as-child": "" }, {
          default: h(() => [
            w(ks, {
              class: ee(t.class),
              variant: "outline"
            }, {
              default: h(() => [
                o.value.length ? (m(), A(zo, {
                  key: 0,
                  value: o.value
                }, null, 8, ["value"])) : e.placeholder ? (m(), V(he, { key: 1 }, [
                  n(e.placeholder) ? (m(), V("span", Km)) : (m(), A(zo, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : oe("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        w(r(Hm), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: h(() => [
            (m(!0), V(he, null, Ve(o.value, (v, g) => (m(), V("div", {
              key: g,
              class: "flex gap-2 items-center"
            }, [
              Z("label", Xm, te(a("common.from")) + ":", 1),
              w(na, {
                modelValue: o.value[g].from,
                "onUpdate:modelValue": (p) => o.value[g].from = p,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              Z("label", qm, te(a("common.value")) + ":", 1),
              w(na, {
                modelValue: o.value[g].value,
                "onUpdate:modelValue": (p) => o.value[g].value = p,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              w(je, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (p) => l(g)
              }, {
                default: h(() => [
                  w(r(ga))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            Z("div", Jm, [
              w(je, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: u[0] || (u[0] = (v) => s())
              }, {
                default: h(() => [
                  w(r(wn)),
                  pe(" " + te(a("common.add")), 1)
                ]),
                _: 1
              }),
              o.value.length > 0 ? (m(), A(je, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: u[1] || (u[1] = (v) => i())
              }, {
                default: h(() => [
                  w(r(Xl)),
                  pe(" " + te(a("common.clear")), 1)
                ]),
                _: 1
              })) : oe("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _g = /* @__PURE__ */ O({
  __name: "InputRange",
  props: /* @__PURE__ */ Oe({
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
    const t = e, a = ve(e, "modelValue");
    function n(o, s) {
      a.value || (a.value = [void 0, void 0]), a.value[o] = s, Qo(a);
    }
    return (o, s) => (m(), V("div", {
      class: ee(r(U)("flex items-center gap-0", t.class))
    }, [
      w(r(na), {
        "model-value": a.value?.[0],
        placeholder: e.placeholder?.[0] || "Min",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": s[0] || (s[0] = (l) => n(0, l))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      w(r(na), {
        "model-value": a.value?.[1],
        placeholder: e.placeholder?.[1] || "Max",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": s[1] || (s[1] = (l) => n(1, l))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), Zm = /* @__PURE__ */ O({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("div", {
      "data-slot": "input-group",
      role: "group",
      class: ee(r(U)(
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
}), Qm = ["data-align"], Ho = /* @__PURE__ */ O({
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
    return (n, o) => (m(), V("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: ee(r(U)(r(ag)({ align: t.align }), t.class)),
      onClick: a
    }, [
      L(n.$slots, "default")
    ], 10, Qm));
  }
}), eg = /* @__PURE__ */ O({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(je), {
      "data-size": t.size,
      variant: t.variant,
      class: ee(r(U)(r(ng)({ size: t.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), tg = /* @__PURE__ */ O({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(r(na), {
      "data-slot": "input-group-control",
      class: ee(r(U)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), ag = Bt(
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
), ng = Bt(
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
), yg = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ Oe({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: { default: "Search..." }
  }, {
    modelValue: {},
    modelModifiers: {},
    modelSubmit: { default: "" },
    modelSubmitModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["onSubmit", "onClear"], ["update:modelValue", "update:modelSubmit"]),
  setup(e, { emit: t }) {
    const a = t, n = ve(e, "modelValue"), o = ve(e, "modelSubmit"), s = W(() => !!n.value && n.value.length > 0);
    function l() {
      o.value = n.value || "", a("onSubmit", n.value || "");
    }
    function i() {
      o.value = "", n.value = "", a("onClear", "");
    }
    return (c, u) => (m(), A(r(Zm), null, {
      default: h(() => [
        w(r(Ho), { align: "inline-start" }, {
          default: h(() => [
            w(r(Yl))
          ]),
          _: 1
        }),
        w(r(tg), G({
          modelValue: n.value,
          "onUpdate:modelValue": u[0] || (u[0] = (v) => n.value = v),
          type: "text",
          placeholder: e.placeholder
        }, c.$attrs, {
          onKeydown: Ir(l, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        s.value && e.showClearButton ? (m(), A(r(Ho), {
          key: 0,
          align: "inline-end"
        }, {
          default: h(() => [
            w(r(eg), {
              variant: "ghost",
              size: "icon-xs",
              onClick: i
            }, {
              default: h(() => [
                w(r(ga))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : oe("", !0)
      ]),
      _: 1
    }));
  }
}), wg = /* @__PURE__ */ O({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), V("span", {
      class: ee(r(U)(r(og)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), og = Bt(
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
  lg as AppSidebar,
  je as Button,
  ks as ButtonSelect,
  ig as DataTable,
  fp as DataTableColumnHeader,
  cg as DataTableGrouped,
  Op as DataTableViewOptions,
  ug as DateFormat,
  zo as DisplayGraduated,
  cm as DynamicAlertDialog,
  Wm as DynamicComponentDialog,
  dg as DynamicComponentProvider,
  Bn as DynamicConfirmComponentDialog,
  yr as DynamicDialog,
  zm as DynamicDrawer,
  Xp as EmptyMini,
  hg as InputBoolean,
  bg as InputGraduated,
  _g as InputRange,
  yg as InputSearch,
  em as SelectListOptions,
  $n as SelectOptions,
  wg as Tag,
  pg as alert,
  mg as confirmGeneric,
  gg as confirmSelect,
  vg as confirmSelectList,
  Yp as dynamicComponent,
  fg as openDynamicDialogComponent,
  _r as useDynamicComponent,
  pn as useToggleState
};
