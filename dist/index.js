import * as Wa from "vue";
import { h as Gt, defineComponent as O, reactive as en, inject as Ht, computed as U, unref as l, getCurrentInstance as Xt, watchEffect as pa, createBlock as A, openBlock as g, mergeProps as G, withCtx as h, renderSlot as L, watch as Re, getCurrentScope as Nr, hasInjectionContext as Zo, toValue as ye, isRef as Aa, onMounted as qt, nextTick as ma, readonly as Qo, toRef as Ar, ref as se, customRef as Pr, toRefs as tn, shallowRef as _t, createVNode as w, createElementVNode as J, createElementBlock as V, normalizeClass as te, normalizeStyle as es, createTextVNode as pe, withDirectives as ts, vModelText as Dr, normalizeProps as Mt, guardReactiveProps as Jt, Fragment as he, toDisplayString as Z, resolveDynamicComponent as qe, createCommentVNode as ne, renderList as Ve, onUnmounted as vn, useTemplateRef as Lr, Text as $r, mergeModels as Oe, useModel as ve, resolveDirective as Ir, createSlots as as, triggerRef as ns, useSlots as Mr, withModifiers as os, onBeforeUnmount as Rr, withKeys as Br } from "vue";
import { useForwardPropsEmits as Te, CollapsibleRoot as Vr, CollapsibleContent as Fr, CollapsibleTrigger as Ur, DialogRoot as hn, DialogOverlay as bn, DialogPortal as _n, DialogContent as yn, DialogClose as ss, DialogDescription as wn, DialogTitle as En, createContext as xn, Primitive as ga, TooltipRoot as zr, TooltipPortal as jr, TooltipContent as Wr, TooltipArrow as Gr, TooltipTrigger as Hr, TooltipProvider as Yr, PaginationRoot as Kr, PaginationList as Xr, useForwardProps as Je, PaginationFirst as qr, PaginationLast as Jr, PaginationNext as Zr, PaginationPrev as Qr, SelectRoot as el, SelectPortal as tl, SelectContent as al, SelectViewport as nl, SelectItem as ol, SelectItemIndicator as sl, SelectItemText as rl, SelectScrollDownButton as ll, SelectScrollUpButton as il, SelectValue as cl, DropdownMenuSeparator as ul, SelectTrigger as dl, CheckboxRoot as fl, CheckboxIndicator as pl, DropdownMenuRoot as ml, DropdownMenuCheckboxItem as gl, DropdownMenuItemIndicator as vl, DropdownMenuPortal as hl, DropdownMenuContent as bl, DropdownMenuItem as _l, DropdownMenuLabel as yl, DropdownMenuTrigger as wl, useFilter as El, ListboxRoot as xl, ListboxFilter as kl, ListboxContent as Cl, ListboxItem as Sl, ListboxItemIndicator as Ol, AlertDialogRoot as Tl, AlertDialogAction as Nl, AlertDialogCancel as Al, AlertDialogPortal as Pl, AlertDialogOverlay as Dl, AlertDialogContent as Ll, AlertDialogDescription as $l, AlertDialogTitle as Il, PopoverRoot as Ml, PopoverPortal as Rl, PopoverContent as Bl, PopoverTrigger as Vl } from "reka-ui";
const Gn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), Ul = (e) => {
  const t = Fl(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, zl = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), Hn = (e) => e === "";
var oa = {
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
const jl = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": n,
  strokeWidth: o,
  "stroke-width": s,
  size: r = oa.width,
  color: i = oa.stroke,
  ...c
}, { slots: u }) => Gt(
  "svg",
  {
    ...oa,
    ...c,
    width: r,
    height: r,
    stroke: i,
    "stroke-width": Hn(a) || Hn(n) || a === !0 || n === !0 ? Number(o || s || oa["stroke-width"]) * 24 / Number(r) : o || s || oa["stroke-width"],
    class: zl(
      "lucide",
      c.class,
      ...e ? [`lucide-${Gn(Ul(e))}-icon`, `lucide-${Gn(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((v) => Gt(...v)), ...u.default ? [u.default()] : []]
);
const Ae = (e, t) => (a, { slots: n, attrs: o }) => Gt(
  jl,
  {
    ...o,
    ...a,
    iconNode: t,
    name: e
  },
  n
);
const Yn = Ae("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const Wl = Ae("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const Kn = Ae("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const Ba = Ae("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const va = Ae("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const rs = Ae("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Zt = Ae("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Gl = Ae("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const ls = Ae("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const is = Ae("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const Hl = Ae("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const Yl = Ae("eye-off", [
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
const cs = Ae("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Kl = Ae("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const kn = Ae("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Xl = Ae("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const ql = Ae("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Jl = Ae("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const Zl = Ae("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const ha = Ae("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Ql = typeof document < "u", ei = () => {
}, Da = Array.isArray;
function Xn(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function qn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ti(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var a in e) if (!ai(e[a], t[a])) return !1;
  return !0;
}
function ai(e, t) {
  return Da(e) ? Jn(e, t) : Da(t) ? Jn(t, e) : e?.valueOf() === t?.valueOf();
}
function Jn(e, t) {
  return Da(t) ? e.length === t.length && e.every((a, n) => a === t[n]) : e.length === 1 && e[0] === t;
}
function Zn(e) {
  return typeof e == "string" || e && typeof e == "object";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const us = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ni = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
process.env.NODE_ENV;
function Qn(e) {
  const t = Ht(us), a = Ht(ni);
  let n = !1, o = null;
  const s = U(() => {
    const v = l(e.to);
    return process.env.NODE_ENV !== "production" && (!n || v !== o) && (Zn(v) || (n ? Xn(`Invalid value for prop "to" in useLink()
- to:`, v, `
- previous to:`, o, `
- props:`, e) : Xn(`Invalid value for prop "to" in useLink()
- to:`, v, `
- props:`, e)), o = v, n = !0), t.resolve(v);
  }), r = U(() => {
    const { matched: v } = s.value, { length: p } = v, f = v[p - 1], C = a.matched;
    if (!f || !C.length) return -1;
    const $ = C.findIndex(qn.bind(null, f));
    if ($ > -1) return $;
    const k = eo(v[p - 2]);
    return p > 1 && eo(f) === k && C[C.length - 1].path !== k ? C.findIndex(qn.bind(null, v[p - 2])) : $;
  }), i = U(() => r.value > -1 && li(a.params, s.value.params)), c = U(() => r.value > -1 && r.value === a.matched.length - 1 && ti(a.params, s.value.params));
  function u(v = {}) {
    if (ri(v)) {
      const p = t[l(e.replace) ? "replace" : "push"](l(e.to)).catch(ei);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => p), p;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Ql) {
    const v = Xt();
    if (v) {
      const p = {
        route: s.value,
        isActive: i.value,
        isExactActive: c.value,
        error: null
      };
      v.__vrl_devtools = v.__vrl_devtools || [], v.__vrl_devtools.push(p), pa(() => {
        p.route = s.value, p.isActive = i.value, p.isExactActive = c.value, p.error = Zn(l(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: U(() => s.value.href),
    isActive: i,
    isExactActive: c,
    navigate: u
  };
}
function oi(e) {
  return e.length === 1 ? e[0] : e;
}
const si = /* @__PURE__ */ O({
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
  useLink: Qn,
  setup(e, { slots: t }) {
    const a = en(Qn(e)), { options: n } = Ht(us), o = U(() => ({
      [to(e.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
      [to(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const s = t.default && oi(t.default(a));
      return e.custom ? s : Gt("a", {
        "aria-current": a.isExactActive ? e.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: o.value
      }, s);
    };
  }
}), Ga = si;
function ri(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function li(e, t) {
  for (const a in t) {
    const n = t[a], o = e[a];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Da(o) || o.length !== n.length || n.some((s, r) => s.valueOf() !== o[r].valueOf())) return !1;
  }
  return !0;
}
function eo(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const to = (e, t, a) => e ?? t ?? a, ii = /* @__PURE__ */ O({
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
    const o = Te(e, t);
    return (s, r) => (g(), A(l(Vr), G({ "data-slot": "collapsible" }, l(o)), {
      default: h(({ open: i }) => [
        L(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), ci = /* @__PURE__ */ O({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(Fr), G({ "data-slot": "collapsible-content" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ui = /* @__PURE__ */ O({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(Ur), G({ "data-slot": "collapsible-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ds(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = ds(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function fs() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = ds(e)) && (n && (n += " "), n += t);
  return n;
}
const ao = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, no = fs, Ut = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return no(e, a?.class, a?.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((u) => {
    const v = a?.[u], p = s?.[u];
    if (v === null) return null;
    const f = ao(v) || ao(p);
    return o[u][f];
  }), i = a && Object.entries(a).reduce((u, v) => {
    let [p, f] = v;
    return f === void 0 || (u[p] = f), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, v) => {
    let { class: p, className: f, ...C } = v;
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
      p,
      f
    ] : u;
  }, []);
  return no(e, r, c, a?.class, a?.className);
}, di = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    a[n] = e[n];
  for (let n = 0; n < t.length; n++)
    a[e.length + n] = t[n];
  return a;
}, fi = (e, t) => ({
  classGroupId: e,
  validator: t
}), ps = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), La = "-", oo = [], pi = "arbitrary..", mi = (e) => {
  const t = vi(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      if (r.startsWith("[") && r.endsWith("]"))
        return gi(r);
      const i = r.split(La), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return ms(i, c, t);
    },
    getConflictingClassGroupIds: (r, i) => {
      if (i) {
        const c = n[r], u = a[r];
        return c ? u ? di(u, c) : c : u || oo;
      }
      return a[r] || oo;
    }
  };
}, ms = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const o = e[t], s = a.nextPart.get(o);
  if (s) {
    const u = ms(e, t + 1, s);
    if (u) return u;
  }
  const r = a.validators;
  if (r === null)
    return;
  const i = t === 0 ? e.join(La) : e.slice(t).join(La), c = r.length;
  for (let u = 0; u < c; u++) {
    const v = r[u];
    if (v.validator(i))
      return v.classGroupId;
  }
}, gi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), n = t.slice(0, a);
  return n ? pi + n : void 0;
})(), vi = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return hi(a, t);
}, hi = (e, t) => {
  const a = ps();
  for (const n in e) {
    const o = e[n];
    Cn(o, a, n, t);
  }
  return a;
}, Cn = (e, t, a, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const r = e[s];
    bi(r, t, a, n);
  }
}, bi = (e, t, a, n) => {
  if (typeof e == "string") {
    _i(e, t, a);
    return;
  }
  if (typeof e == "function") {
    yi(e, t, a, n);
    return;
  }
  wi(e, t, a, n);
}, _i = (e, t, a) => {
  const n = e === "" ? t : gs(t, e);
  n.classGroupId = a;
}, yi = (e, t, a, n) => {
  if (Ei(e)) {
    Cn(e(n), t, a, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(fi(a, e));
}, wi = (e, t, a, n) => {
  const o = Object.entries(e), s = o.length;
  for (let r = 0; r < s; r++) {
    const [i, c] = o[r];
    Cn(c, gs(t, i), a, n);
  }
}, gs = (e, t) => {
  let a = e;
  const n = t.split(La), o = n.length;
  for (let s = 0; s < o; s++) {
    const r = n[s];
    let i = a.nextPart.get(r);
    i || (i = ps(), a.nextPart.set(r, i)), a = i;
  }
  return a;
}, Ei = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, xi = (e) => {
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
}, an = "!", so = ":", ki = [], ro = (e, t, a, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Ci = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (o) => {
    const s = [];
    let r = 0, i = 0, c = 0, u;
    const v = o.length;
    for (let k = 0; k < v; k++) {
      const D = o[k];
      if (r === 0 && i === 0) {
        if (D === so) {
          s.push(o.slice(c, k)), c = k + 1;
          continue;
        }
        if (D === "/") {
          u = k;
          continue;
        }
      }
      D === "[" ? r++ : D === "]" ? r-- : D === "(" ? i++ : D === ")" && i--;
    }
    const p = s.length === 0 ? o : o.slice(c);
    let f = p, C = !1;
    p.endsWith(an) ? (f = p.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(an) && (f = p.slice(1), C = !0)
    );
    const $ = u && u > c ? u - c : void 0;
    return ro(s, C, f, $);
  };
  if (t) {
    const o = t + so, s = n;
    n = (r) => r.startsWith(o) ? s(r.slice(o.length)) : ro(ki, !1, r, void 0, !0);
  }
  if (a) {
    const o = n;
    n = (s) => a({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, Si = (e) => {
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
}, Oi = (e) => ({
  cache: xi(e.cacheSize),
  parseClassName: Ci(e),
  sortModifiers: Si(e),
  ...mi(e)
}), Ti = /\s+/, Ni = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, r = [], i = e.trim().split(Ti);
  let c = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const v = i[u], {
      isExternal: p,
      modifiers: f,
      hasImportantModifier: C,
      baseClassName: $,
      maybePostfixModifierPosition: k
    } = a(v);
    if (p) {
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
    const b = f.length === 0 ? "" : f.length === 1 ? f[0] : s(f).join(":"), E = C ? b + an : b, y = E + _;
    if (r.indexOf(y) > -1)
      continue;
    r.push(y);
    const T = o(_, D);
    for (let P = 0; P < T.length; ++P) {
      const x = T[P];
      r.push(E + x);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Ai = (...e) => {
  let t = 0, a, n, o = "";
  for (; t < e.length; )
    (a = e[t++]) && (n = vs(a)) && (o && (o += " "), o += n);
  return o;
}, vs = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = vs(e[n])) && (a && (a += " "), a += t);
  return a;
}, Pi = (e, ...t) => {
  let a, n, o, s;
  const r = (c) => {
    const u = t.reduce((v, p) => p(v), e());
    return a = Oi(u), n = a.cache.get, o = a.cache.set, s = i, i(c);
  }, i = (c) => {
    const u = n(c);
    if (u)
      return u;
    const v = Ni(c, a);
    return o(c, v), v;
  };
  return s = r, (...c) => s(Ai(...c));
}, Di = [], De = (e) => {
  const t = (a) => a[e] || Di;
  return t.isThemeGetter = !0, t;
}, hs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Li = /^\d+\/\d+$/, $i = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ii = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ri = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e) => Li.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), Et = (e) => !!e && Number.isInteger(Number(e)), Ha = (e) => e.endsWith("%") && re(e.slice(0, -1)), vt = (e) => $i.test(e), Vi = () => !0, Fi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ii.test(e) && !Mi.test(e)
), _s = () => !1, Ui = (e) => Ri.test(e), zi = (e) => Bi.test(e), ji = (e) => !Y(e) && !K(e), Wi = (e) => Qt(e, Es, _s), Y = (e) => hs.test(e), Pt = (e) => Qt(e, xs, Fi), Ya = (e) => Qt(e, Xi, re), lo = (e) => Qt(e, ys, _s), Gi = (e) => Qt(e, ws, zi), ya = (e) => Qt(e, ks, Ui), K = (e) => bs.test(e), sa = (e) => ea(e, xs), Hi = (e) => ea(e, qi), io = (e) => ea(e, ys), Yi = (e) => ea(e, Es), Ki = (e) => ea(e, ws), wa = (e) => ea(e, ks, !0), Qt = (e, t, a) => {
  const n = hs.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, ea = (e, t, a = !1) => {
  const n = bs.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, ys = (e) => e === "position" || e === "percentage", ws = (e) => e === "image" || e === "url", Es = (e) => e === "length" || e === "size" || e === "bg-size", xs = (e) => e === "length", Xi = (e) => e === "number", qi = (e) => e === "family-name", ks = (e) => e === "shadow", Ji = () => {
  const e = De("color"), t = De("font"), a = De("text"), n = De("font-weight"), o = De("tracking"), s = De("leading"), r = De("breakpoint"), i = De("container"), c = De("spacing"), u = De("radius"), v = De("shadow"), p = De("inset-shadow"), f = De("text-shadow"), C = De("drop-shadow"), $ = De("blur"), k = De("perspective"), D = De("aspect"), _ = De("ease"), b = De("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], T = () => [...y(), K, Y], P = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", "contain", "none"], I = () => [K, Y, c], Q = () => [jt, "full", "auto", ...I()], q = () => [Et, "none", "subgrid", K, Y], le = () => ["auto", {
    span: ["full", Et, K, Y]
  }, Et, K, Y], H = () => [Et, "auto", K, Y], Ee = () => ["auto", "min", "max", "fr", K, Y], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...I()], me = () => [jt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()], j = () => [e, K, Y], ft = () => [...y(), io, lo, {
    position: [K, Y]
  }], Le = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], He = () => ["auto", "cover", "contain", Yi, Wi, {
    size: [K, Y]
  }], pt = () => [Ha, sa, Pt], ke = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    K,
    Y
  ], Pe = () => ["", re, sa, Pt], Ze = () => ["solid", "dashed", "dotted", "double"], Ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => [re, Ha, io, lo], Ke = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    $,
    K,
    Y
  ], Qe = () => ["none", re, K, Y], et = () => ["none", re, K, Y], mt = () => [re, K, Y], tt = () => [jt, "full", ...I()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Vi],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [ji],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", re],
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
        aspect: ["auto", "square", jt, Y, K, D]
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
        columns: [re, Y, K, i]
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
        inset: Q()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Q()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Q()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Q()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Q()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Q()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Q()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Q()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Q()
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
        basis: [jt, "full", "auto", i, ...I()]
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
        flex: [re, jt, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, K, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, K, Y]
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
        col: le()
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
        row: le()
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
            screen: [r]
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
        text: ["base", a, sa, Pt]
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
        font: [n, K, Ya]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ha, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Hi, Y, t]
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
        "line-clamp": [re, "none", K, Ya]
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
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
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
        decoration: [...Ze(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", K, Pt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [re, "auto", K, Y]
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
        bg: He()
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
        }, Ki, Gi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
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
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
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
        border: [...Ze(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ze(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ze(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, K, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, sa, Pt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: j()
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
          wa,
          ya
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, wa, ya]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
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
        ring: j()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [re, Pt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": j()
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
        "inset-ring": j()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, wa, ya]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": j()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [re, K, Y]
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
        "mask-linear": [re]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": be()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": be()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": be()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": be()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": be()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": be()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": be()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": be()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": be()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": be()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": be()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": be()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": be()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": be()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": j()
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
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": j()
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
        "mask-conic": [re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": be()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": be()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": j()
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
        mask: He()
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
        blur: Ke()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, K, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, K, Y]
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
          wa,
          ya
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": j()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", re, K, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, K, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, K, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, K, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, K, Y]
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
        "backdrop-blur": Ke()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, K, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, K, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, K, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, K, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, K, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, K, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, K, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, K, Y]
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
        duration: [re, "initial", K, Y]
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
        delay: [re, K, Y]
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
        "perspective-origin": T()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Qe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Qe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Qe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Qe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: et()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": et()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": et()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": et()
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
        translate: tt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": tt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": tt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": tt()
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
        accent: j()
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
        caret: j()
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
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, sa, Pt, Ya]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
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
}, Zi = /* @__PURE__ */ Pi(Ji);
function z(...e) {
  return Zi(fs(e));
}
const Qi = /* @__PURE__ */ O({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Te(e, t);
    return (s, r) => (g(), A(l(hn), G({ "data-slot": "sheet" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ka = /* @__PURE__ */ new WeakMap(), ec = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], n = (t = Xt()) === null || t === void 0 ? void 0 : t.proxy, o = n ?? Nr();
  if (o == null && !Zo()) throw new Error("injectLocal must be called in setup");
  return o && Ka.has(o) && a in Ka.get(o) ? Ka.get(o)[a] : Ht(...e);
}, Cs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const tc = (e) => typeof e < "u", ac = Object.prototype.toString, nc = (e) => ac.call(e) === "[object Object]", oc = () => {
};
function sc(...e) {
  if (e.length !== 1) return Ar(...e);
  const t = e[0];
  return typeof t == "function" ? Qo(Pr(() => ({
    get: t,
    set: oc
  }))) : se(t);
}
function rc(e, t) {
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
const Ss = (e) => e();
function lc(e = Ss, t = {}) {
  const { initialState: a = "active" } = t, n = sc(a === "active");
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
    isActive: Qo(n),
    pause: o,
    resume: s,
    eventFilter: r
  };
}
function co(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Xa(e) {
  return Array.isArray(e) ? e : [e];
}
function ic(e) {
  return Xt();
}
function cc(e) {
  return Aa(e) ? en(new Proxy({}, {
    get(t, a, n) {
      return l(Reflect.get(e.value, a, n));
    },
    set(t, a, n) {
      return Aa(e.value[a]) && !Aa(n) ? e.value[a].value = n : e.value[a] = n, !0;
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
  })) : en(e);
}
function uc(e) {
  return cc(U(e));
}
function ue(e, ...t) {
  const a = t.flat(), n = a[0];
  return uc(() => Object.fromEntries(typeof n == "function" ? Object.entries(tn(e)).filter(([o, s]) => !n(ye(s), o)) : Object.entries(tn(e)).filter((o) => !a.includes(o[0]))));
}
function dc(e, t, a = {}) {
  const { eventFilter: n = Ss, ...o } = a;
  return Re(e, rc(n, t), o);
}
function fc(e, t, a = {}) {
  const { eventFilter: n, initialState: o = "active", ...s } = a, { eventFilter: r, pause: i, resume: c, isActive: u } = lc(n, { initialState: o });
  return {
    stop: dc(e, t, {
      ...s,
      eventFilter: r
    }),
    pause: i,
    resume: c,
    isActive: u
  };
}
const pc = fc;
function mc(e, t = !0, a) {
  ic() ? qt(e, a) : t ? e() : ma(e);
}
const gc = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, vc = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function hc(e, t, a, n) {
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
function bc(e, t, a = {}) {
  var n;
  const o = e.getFullYear(), s = e.getMonth(), r = e.getDate(), i = e.getHours(), c = e.getMinutes(), u = e.getSeconds(), v = e.getMilliseconds(), p = e.getDay(), f = (n = a.customMeridiem) !== null && n !== void 0 ? n : hc, C = (k) => {
    var D;
    return (D = k.split(" ")[1]) !== null && D !== void 0 ? D : "";
  }, $ = {
    Yo: () => Dt(o),
    YY: () => String(o).slice(-2),
    YYYY: () => o,
    M: () => s + 1,
    Mo: () => Dt(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(ye(a.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(ye(a.locales), { month: "long" }),
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
    s: () => String(u),
    so: () => Dt(u),
    ss: () => `${u}`.padStart(2, "0"),
    SSS: () => `${v}`.padStart(3, "0"),
    d: () => p,
    dd: () => e.toLocaleDateString(ye(a.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(ye(a.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(ye(a.locales), { weekday: "long" }),
    A: () => f(i, c),
    AA: () => f(i, c, !1, !0),
    a: () => f(i, c, !0),
    aa: () => f(i, c, !0, !0),
    z: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "shortOffset" })),
    zz: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "shortOffset" })),
    zzz: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => C(e.toLocaleDateString(ye(a.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(vc, (k, D) => {
    var _, b;
    return (_ = D ?? ((b = $[k]) === null || b === void 0 ? void 0 : b.call($))) !== null && _ !== void 0 ? _ : k;
  });
}
function _c(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(gc);
    if (t) {
      const a = t[2] - 1 || 0, n = (t[7] || "0").substring(0, 3);
      return new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, n);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function yc(e, t = "HH:mm:ss", a = {}) {
  return U(() => bc(_c(ye(e)), ye(t), a));
}
function wc(e, t, a) {
  return Re(e, t, {
    ...a,
    immediate: !0
  });
}
const Lt = Cs ? window : void 0, Os = Cs ? window.document : void 0;
function Ec(e) {
  var t;
  const a = ye(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function Rt(...e) {
  const t = (n, o, s, r) => (n.addEventListener(o, s, r), () => n.removeEventListener(o, s, r)), a = U(() => {
    const n = Xa(ye(e[0])).filter((o) => o != null);
    return n.every((o) => typeof o != "string") ? n : void 0;
  });
  return wc(() => {
    var n, o;
    return [
      (n = (o = a.value) === null || o === void 0 ? void 0 : o.map((s) => Ec(s))) !== null && n !== void 0 ? n : [Lt].filter((s) => s != null),
      Xa(ye(a.value ? e[1] : e[0])),
      Xa(l(a.value ? e[2] : e[1])),
      ye(a.value ? e[3] : e[2])
    ];
  }, ([n, o, s, r], i, c) => {
    if (!n?.length || !o?.length || !s?.length) return;
    const u = nc(r) ? { ...r } : r, v = n.flatMap((p) => o.flatMap((f) => s.map((C) => t(p, f, C, u))));
    c(() => {
      v.forEach((p) => p());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function xc() {
  const e = _t(!1), t = Xt();
  return t && qt(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function kc(e) {
  const t = /* @__PURE__ */ xc();
  return U(() => (t.value, !!e()));
}
const Cc = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Sc() {
  const e = Zo() ? /* @__PURE__ */ ec(Cc, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Oc(e, t = {}) {
  const { window: a = Lt, ssrWidth: n = /* @__PURE__ */ Sc() } = t, o = /* @__PURE__ */ kc(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = _t(typeof n == "number"), r = _t(), i = _t(!1), c = (u) => {
    i.value = u.matches;
  };
  return pa(() => {
    if (s.value) {
      s.value = !o.value, i.value = ye(e).split(",").some((u) => {
        const v = u.includes("not all"), p = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let C = !!(p || f);
        return p && C && (C = n >= co(p[1])), f && C && (C = n <= co(f[1])), v ? !C : C;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(ye(e)), i.value = r.value.matches);
  }), Rt(r, "change", c, { passive: !0 }), U(() => i.value);
}
function Tc(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xa = "__vueuse_ssr_handlers__", Nc = /* @__PURE__ */ Ac();
function Ac() {
  return xa in Ea || (Ea[xa] = Ea[xa] || {}), Ea[xa];
}
function Pc(e, t) {
  return Nc[e] || t;
}
function Dc(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Lc = {
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
}, uo = "vueuse-storage";
function $c(e, t, a, n = {}) {
  var o;
  const { flush: s = "pre", deep: r = !0, listenToStorageChanges: i = !0, writeDefaults: c = !0, mergeDefaults: u = !1, shallow: v, window: p = Lt, eventFilter: f, onError: C = (B) => {
    console.error(B);
  }, initOnMounted: $ } = n, k = (v ? _t : se)(typeof t == "function" ? t() : t), D = U(() => ye(e));
  if (!a) try {
    a = Pc("getDefaultStorage", () => Lt?.localStorage)();
  } catch (B) {
    C(B);
  }
  if (!a) return k;
  const _ = ye(t), b = Dc(_), E = (o = n.serializer) !== null && o !== void 0 ? o : Lc[b], { pause: y, resume: T } = pc(k, (B) => q(B), {
    flush: s,
    deep: r,
    eventFilter: f
  });
  Re(D, () => H(), { flush: s });
  let P = !1;
  const x = (B) => {
    $ && !P || H(B);
  }, I = (B) => {
    $ && !P || Ee(B);
  };
  p && i && (a instanceof Storage ? Rt(p, "storage", x, { passive: !0 }) : Rt(p, uo, I)), $ ? mc(() => {
    P = !0, H();
  }) : H();
  function Q(B, X) {
    if (p) {
      const M = {
        key: D.value,
        oldValue: B,
        newValue: X,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", M) : new CustomEvent(uo, { detail: M }));
    }
  }
  function q(B) {
    try {
      const X = a.getItem(D.value);
      if (B == null)
        Q(X, null), a.removeItem(D.value);
      else {
        const M = E.write(B);
        X !== M && (a.setItem(D.value, M), Q(X, M));
      }
    } catch (X) {
      C(X);
    }
  }
  function le(B) {
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
          (B === void 0 || B?.newValue !== X) && (k.value = le(B));
        } catch (X) {
          C(X);
        } finally {
          B ? ma(T) : T();
        }
      }
    }
  }
  function Ee(B) {
    H(B.detail);
  }
  return k;
}
const Ic = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Mc(e, t = {}) {
  const { events: a = Ic, document: n = Os, initial: o = null } = t, s = _t(o);
  return n && a.forEach((r) => {
    Rt(n, r, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function Rc(e, t, a = {}) {
  const { window: n = Lt } = a;
  return $c(e, t, n?.sessionStorage, a);
}
// @__NO_SIDE_EFFECTS__
function Ts(e, t, a, n = {}) {
  var o, s;
  const { clone: r = !1, passive: i = !1, eventName: c, deep: u = !1, defaultValue: v, shouldEmit: p } = n, f = Xt(), C = a || f?.emit || (f == null || (o = f.$emit) === null || o === void 0 ? void 0 : o.bind(f)) || (f == null || (s = f.proxy) === null || s === void 0 || (s = s.$emit) === null || s === void 0 ? void 0 : s.bind(f?.proxy));
  let $ = c;
  t || (t = "modelValue"), $ = $ || `update:${t.toString()}`;
  const k = (b) => r ? typeof r == "function" ? r(b) : Tc(b) : b, D = () => tc(e[t]) ? k(e[t]) : v, _ = (b) => {
    p ? p(b) && C($, b) : C($, b);
  };
  if (i) {
    const b = se(D());
    let E = !1;
    return Re(() => e[t], (y) => {
      E || (E = !0, b.value = k(y), ma(() => E = !1));
    }), Re(b, (y) => {
      !E && (y !== e[t] || u) && _(y);
    }, { deep: u }), b;
  } else return U({
    get() {
      return D();
    },
    set(b) {
      _(b);
    }
  });
}
const Bc = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(bn), G({
      "data-slot": "sheet-overlay",
      class: l(z)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vc = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class", "side"), s = Te(o, n);
    return (r, i) => (g(), A(l(_n), null, {
      default: h(() => [
        w(Bc),
        w(l(yn), G({
          "data-slot": "sheet-content",
          class: l(z)(
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
            w(l(ss), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: h(() => [
                w(l(ha), { class: "size-4" }),
                i[0] || (i[0] = J("span", { class: "sr-only" }, "Close", -1))
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
}), Fc = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(wn), G({
      "data-slot": "sheet-description",
      class: l(z)("text-muted-foreground text-sm", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uc = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "sheet-header",
      class: te(l(z)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), zc = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(En), G({
      "data-slot": "sheet-title",
      class: l(z)("text-foreground font-semibold", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fo = "sidebar_state", jc = 3600 * 24 * 7, Wc = "16rem", Gc = "18rem", Hc = "3rem", Yc = "b", [Sn, Kc] = xn("Sidebar"), Xc = { class: "flex h-full w-full flex-col" }, qc = ["data-state", "data-collapsible", "data-variant", "data-side"], Jc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Zc = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = Sn();
    return (r, i) => e.collapsible === "none" ? (g(), V("div", G({
      key: 0,
      "data-slot": "sidebar",
      class: l(z)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, r.$attrs), [
      L(r.$slots, "default")
    ], 16)) : l(a) ? (g(), A(l(Qi), G({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: h(() => [
        w(l(Vc), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: es({
            "--sidebar-width": l(Gc)
          })
        }, {
          default: h(() => [
            w(Uc, { class: "sr-only" }, {
              default: h(() => [
                w(zc, null, {
                  default: h(() => [...i[0] || (i[0] = [
                    pe("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                w(Fc, null, {
                  default: h(() => [...i[1] || (i[1] = [
                    pe("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            J("div", Xc, [
              L(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), V("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": l(n),
      "data-collapsible": l(n) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      J("div", {
        class: te(l(z)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      J("div", G({
        class: l(z)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        J("div", Jc, [
          L(r.$slots, "default")
        ])
      ], 16)
    ], 8, qc));
  }
}), Qc = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: te(l(z)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), eu = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: te(l(z)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), tu = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: te(l(z)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), au = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(ga), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: te(l(z)(
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
}), nu = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: te(l(z)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Bt = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = /* @__PURE__ */ Ts(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (s, r) => ts((g(), V("input", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => Aa(o) ? o.value = i : null),
      "data-slot": "input",
      class: te(l(z)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Dr, l(o)]
    ]);
  }
}), ou = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: te(l(z)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), su = /* @__PURE__ */ O({
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
    const o = Te(e, t);
    return (s, r) => (g(), A(l(zr), G({ "data-slot": "tooltip" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(jr), null, {
      default: h(() => [
        w(l(Wr), G({ "data-slot": "tooltip-content" }, { ...l(s), ...r.$attrs }, {
          class: l(z)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", a.class)
        }), {
          default: h(() => [
            L(r.$slots, "default"),
            w(l(Gr), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), lu = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(Hr), G({ "data-slot": "tooltip-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), po = /* @__PURE__ */ O({
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
    return (a, n) => (g(), A(l(ga), G({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(z)(l(fu)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), mo = /* @__PURE__ */ O({
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
    const t = e, { isMobile: a, state: n } = Sn(), o = ue(t, "tooltip");
    return (s, r) => e.tooltip ? (g(), A(l(su), { key: 1 }, {
      default: h(() => [
        w(l(lu), { "as-child": "" }, {
          default: h(() => [
            w(po, Mt(Jt({ ...l(o), ...s.$attrs })), {
              default: h(() => [
                L(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        w(l(ru), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: h(() => [
            typeof e.tooltip == "string" ? (g(), V(he, { key: 0 }, [
              pe(Z(e.tooltip), 1)
            ], 64)) : (g(), A(qe(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), A(po, Mt(G({ key: 0 }, { ...l(o), ...s.$attrs })), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), go = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: te(l(z)("group/menu-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), iu = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: te(l(z)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), cu = /* @__PURE__ */ O({
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
    return (a, n) => (g(), A(l(ga), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: te(l(z)(
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
}), uu = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: te(l(z)("group/menu-sub-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
});
Os?.cookie.includes(`${fo}=false`);
const du = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = Sn();
    return (n, o) => (g(), V("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: te(l(z)(
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
}), ze = /* @__PURE__ */ O({
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
    return (a, n) => (g(), A(l(ga), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: te(l(z)(l(xt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), xt = Ut(
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
), fu = Ut(
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
), pu = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, mu = { key: 1 }, vg = /* @__PURE__ */ O({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(a, n) {
      return !!(a.url === n || a.items?.some((o) => o.url === n));
    }
    return (a, n) => (g(), A(l(Zc), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: h(() => [
        w(l(nu), null, {
          default: h(() => [
            L(a.$slots, "header", {}, () => [
              e.config.title ? (g(), V("div", pu, Z(e.config.title), 1)) : ne("", !0)
            ])
          ]),
          _: 3
        }),
        w(l(Qc), null, {
          default: h(() => [
            w(l(ou), null, {
              default: h(() => [
                (g(!0), V(he, null, Ve(e.config.menuGroups, (o, s) => (g(), A(l(tu), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: h(() => [
                    o.title ? (g(), A(l(au), { key: 0 }, {
                      default: h(() => [
                        pe(Z(o.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : ne("", !0),
                    (g(!0), V(he, null, Ve(o.items, (r) => (g(), V(he, {
                      key: r.title
                    }, [
                      r.items?.length ? (g(), A(l(ii), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(r, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: h(() => [
                          w(l(go), null, {
                            default: h(() => [
                              w(l(ui), { "as-child": "" }, {
                                default: h(() => [
                                  w(l(mo), {
                                    tooltip: r.title,
                                    disabled: r.disabled
                                  }, {
                                    default: h(() => [
                                      r.icon ? (g(), A(qe(r.icon), { key: 0 })) : ne("", !0),
                                      r.url ? (g(), A(l(Ga), {
                                        key: 2,
                                        to: r.url
                                      }, {
                                        default: h(() => [
                                          J("span", null, Z(r.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (g(), V("span", mu, Z(r.title), 1)),
                                      w(l(Zt), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              w(l(ci), null, {
                                default: h(() => [
                                  w(l(iu), null, {
                                    default: h(() => [
                                      (g(!0), V(he, null, Ve(r.items, (i) => (g(), A(l(uu), {
                                        key: i.title
                                      }, {
                                        default: h(() => [
                                          w(l(cu), {
                                            "as-child": "",
                                            "is-active": e.currentPath === i.url,
                                            disabled: i.disabled
                                          }, {
                                            default: h(() => [
                                              w(l(Ga), {
                                                to: i.url
                                              }, {
                                                default: h(() => [
                                                  J("span", null, Z(i.title), 1)
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
                      }, 1032, ["default-open"])) : (g(), A(l(go), { key: 1 }, {
                        default: h(() => [
                          w(l(mo), {
                            "as-child": "",
                            "is-active": e.currentPath === r.url,
                            disabled: r.disabled
                          }, {
                            default: h(() => [
                              w(l(Ga), {
                                to: r.url
                              }, {
                                default: h(() => [
                                  r.icon ? (g(), A(qe(r.icon), { key: 0 })) : ne("", !0),
                                  J("span", null, Z(r.title), 1)
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
        w(l(eu), null, {
          default: h(() => [
            L(a.$slots, "footer")
          ]),
          _: 3
        }),
        w(l(du))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), gu = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, Ns = /* @__PURE__ */ O({
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
    return (a, n) => (g(), A(l(ga), {
      as: e.as,
      class: te(l(z)(l(xt)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        J("span", gu, [
          L(a.$slots, "default")
        ]),
        w(l(va), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), ia = (e, t, a = (n) => n) => e.reduce((n, o) => (n[t(o)] = a(o), n), {}), vu = (e, t) => {
  const a = e.reduce((n, o) => {
    const s = o;
    return n[s] || (n[s] = o), n;
  }, {});
  return Object.values(a);
}, hu = (e, t, a, n) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const o = (r) => r === t;
  return e.find(o) ? e.filter((r, i) => !o(r)) : [...e, t];
}, vo = (e, t, a = (n) => n) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const n = t.reduce((o, s) => (o[a(s)] = !0, o), {});
  return e.filter((o) => !n[a(o)]);
}, bu = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, _u = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => bu(t.toLowerCase())).join(" ") : "", It = _t([]), On = (e, t) => It.value.push({ callback: e, id: t });
function Tn(e) {
  return It.value = typeof e == "string" ? It.value.filter(({ id: t }) => t !== e) : It.value.filter(({ callback: t }) => t !== e);
}
const Nn = (e) => {
  const t = e !== void 0 ? e : It.value.length - 1;
  return t >= 0 && !It.value[t].callback() && Nn(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && It.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Nn() : e.target.blur());
});
const As = { add: On, remove: Tn, invokeLatest: Nn };
function hg(e) {
  qt(() => On(e)), vn(() => Tn(e));
}
function Ps(e, t) {
  Re(t, (a) => a ? On(e) : Tn(e), { immediate: !0 });
}
function ho(e, t, a, n = !1, o) {
  Rt(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), a(document.activeElement, s));
  }), Rt(e, "click", (s) => {
    const r = s.target.closest(
      t
    );
    r && (n && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), a(r, s));
  });
}
function yu(e, t, a, n, o) {
  const s = e.includes(a), r = t.indexOf(a), i = t.indexOf(n), c = r < i ? t.slice(r, i + 1) : t.slice(i, r);
  return s ? vu([...e, ...c]) : e.filter((u) => !c.includes(u));
}
function Ds(e, t, a) {
  let n = null;
  const o = /* @__PURE__ */ Mc("Shift");
  Re(
    () => e.value,
    (s, r) => {
      const i = s.length > r.length ? vo(s, r, a) : vo(r, s, a);
      if (i.length === 1) {
        const c = i[0];
        o.value && n && (e.value = yu(
          e.value,
          t.value,
          n,
          c
        )), n = c;
      }
    }
  );
}
const wu = { class: "[&_[data-state=selected]]:bg-muted/50" }, Ls = /* @__PURE__ */ O({
  __name: "DataTableBody",
  setup(e) {
    return (t, a) => (g(), V("tbody", wu, [
      L(t.$slots, "default")
    ]));
  }
}), [ta, $s] = xn("DataTable"), Is = /* @__PURE__ */ O({
  __name: "DataTableContainer",
  setup(e) {
    const t = ta(), a = Lr("container");
    ho(a, "[data-col-id]", (o) => {
      const s = o.getAttribute("data-col-id"), r = o.closest("tr")?.getAttribute("data-row-id");
      s && r && t.onClickColumn(s, r);
    }), ho(a, "[data-row-id]", (o) => {
      const s = o.getAttribute("data-row-id");
      s && t.onClickRow(s);
    });
    const n = U(() => ({
      "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": t.selectMode === "multiselect",
      "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": t.hasActionsColumn
    }));
    return (o, s) => (g(), V("div", {
      ref: "container",
      class: te(["min-w-0 min-h-0 relative flex flex-col", n.value])
    }, [
      L(o.$slots, "default")
    ], 2));
  }
});
function dt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const bo = {};
function Eu(e) {
  bo[e] || (bo[e] = !0, dt(e));
}
const yt = typeof window < "u";
let Ye, Vt;
if (process.env.NODE_ENV !== "production") {
  const e = yt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ye = (t) => {
    e.mark(t);
  }, Vt = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const xu = /\{([0-9a-zA-Z]+)\}/g;
function Va(e, ...t) {
  return t.length === 1 && fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(xu, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const wt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ku = (e, t, a) => Cu({ l: e, k: t, s: a }), Cu = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), Su = (e) => An(e) === "[object Date]", $a = (e) => An(e) === "[object RegExp]", Fa = (e) => de(e) && Object.keys(e).length === 0, Me = Object.assign, Ou = Object.create, ge = (e = null) => Ou(e);
let _o;
const $t = () => _o || (_o = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ge());
function yo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function wo(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Tu(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, o, s) => `${o}="${wo(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, o, s) => `${o}='${wo(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && dt("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((n) => {
    e = e.replace(n, "$1javascript&#58;");
  }), e;
}
const Nu = Object.prototype.hasOwnProperty;
function ot(e, t) {
  return Nu.call(e, t);
}
const Se = Array.isArray, we = (e) => typeof e == "function", W = (e) => typeof e == "string", Ce = (e) => typeof e == "boolean", fe = (e) => e !== null && typeof e == "object", Au = (e) => fe(e) && we(e.then) && we(e.catch), Ms = Object.prototype.toString, An = (e) => Ms.call(e), de = (e) => An(e) === "[object Object]", Pu = (e) => e == null ? "" : Se(e) || de(e) && e.toString === Ms ? JSON.stringify(e, null, 2) : String(e);
function Pn(e, t = "") {
  return e.reduce((a, n, o) => o === 0 ? a + n : a + t + n, "");
}
const Eo = 2;
function Du(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let r = 0; r < n.length; r++)
    if (o += n[r].length + 1, o >= t) {
      for (let i = r - Eo; i <= r + Eo || a > o; i++) {
        if (i < 0 || i >= n.length)
          continue;
        const c = i + 1;
        s.push(`${c}${" ".repeat(3 - String(c).length)}|  ${n[i]}`);
        const u = n[i].length;
        if (i === r) {
          const v = t - (o - u) + 1, p = Math.max(1, a > o ? u - v : a - t);
          s.push("   |  " + " ".repeat(v) + "^".repeat(p));
        } else if (i > r) {
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
function Lu() {
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
const ka = (e) => !fe(e) || Se(e);
function Pa(e, t) {
  if (ka(e) || ka(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: o } = a.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (fe(n[s]) && !fe(o[s]) && (o[s] = Array.isArray(n[s]) ? [] : ge()), ka(o[s]) || ka(n[s]) ? o[s] = n[s] : a.push({ src: n[s], des: o[s] }));
    });
  }
}
function $u(e, t, a) {
  return { line: e, column: t, offset: a };
}
function nn(e, t, a) {
  return { start: e, end: t };
}
const ee = {
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
}, Iu = 17, Mu = {
  // tokenizer error messages
  [ee.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ee.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ee.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ee.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ee.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ee.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ee.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ee.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ee.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ee.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ee.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ee.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ee.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ee.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ee.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function aa(e, t, a = {}) {
  const { domain: n, messages: o, args: s } = a, r = process.env.NODE_ENV !== "production" ? Va((o || Mu)[e] || "", ...s || []) : e, i = new SyntaxError(String(r));
  return i.code = e, t && (i.location = t), i.domain = n, i;
}
function Ru(e) {
  throw e;
}
const Bu = /<\/?[\w\s="/.':;#-\/]+>/, Vu = (e) => Bu.test(e), it = " ", Fu = "\r", Fe = `
`, Uu = "\u2028", zu = "\u2029";
function ju(e) {
  const t = e;
  let a = 0, n = 1, o = 1, s = 0;
  const r = (x) => t[x] === Fu && t[x + 1] === Fe, i = (x) => t[x] === Fe, c = (x) => t[x] === zu, u = (x) => t[x] === Uu, v = (x) => r(x) || i(x) || c(x) || u(x), p = () => a, f = () => n, C = () => o, $ = () => s, k = (x) => r(x) || c(x) || u(x) ? Fe : t[x], D = () => k(a), _ = () => k(a + s);
  function b() {
    return s = 0, v(a) && (n++, o = 0), r(a) && a++, a++, o++, t[a];
  }
  function E() {
    return r(a + s) && s++, s++, t[a + s];
  }
  function y() {
    a = 0, n = 1, o = 1, s = 0;
  }
  function T(x = 0) {
    s = x;
  }
  function P() {
    const x = a + s;
    for (; x !== a; )
      b();
    s = 0;
  }
  return {
    index: p,
    line: f,
    column: C,
    peekOffset: $,
    charAt: k,
    currentChar: D,
    currentPeek: _,
    next: b,
    peek: E,
    reset: y,
    resetPeek: T,
    skipToPeek: P
  };
}
const ht = void 0, Wu = ".", xo = "'", Gu = "tokenizer";
function Hu(e, t = {}) {
  const a = t.location !== !1, n = ju(e), o = () => n.index(), s = () => $u(n.line(), n.column(), n.index()), r = s(), i = o(), c = {
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
  }, u = () => c, { onError: v } = t;
  function p(d, m, N, ...F) {
    const oe = u();
    if (m.column += N, m.offset += N, v) {
      const ie = a ? nn(oe.startLoc, m) : null, ae = aa(d, ie, {
        domain: Gu,
        args: F
      });
      v(ae);
    }
  }
  function f(d, m, N) {
    d.endLoc = s(), d.currentType = m;
    const F = { type: m };
    return a && (F.loc = nn(d.startLoc, d.endLoc)), N != null && (F.value = N), F;
  }
  const C = (d) => f(
    d,
    13
    /* TokenTypes.EOF */
  );
  function $(d, m) {
    return d.currentChar() === m ? (d.next(), m) : (p(ee.EXPECTED_TOKEN, s(), 0, m), "");
  }
  function k(d) {
    let m = "";
    for (; d.currentPeek() === it || d.currentPeek() === Fe; )
      m += d.currentPeek(), d.peek();
    return m;
  }
  function D(d) {
    const m = k(d);
    return d.skipToPeek(), m;
  }
  function _(d) {
    if (d === ht)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function b(d) {
    if (d === ht)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function E(d, m) {
    const { currentType: N } = m;
    if (N !== 2)
      return !1;
    k(d);
    const F = _(d.currentPeek());
    return d.resetPeek(), F;
  }
  function y(d, m) {
    const { currentType: N } = m;
    if (N !== 2)
      return !1;
    k(d);
    const F = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), oe = b(F);
    return d.resetPeek(), oe;
  }
  function T(d, m) {
    const { currentType: N } = m;
    if (N !== 2)
      return !1;
    k(d);
    const F = d.currentPeek() === xo;
    return d.resetPeek(), F;
  }
  function P(d, m) {
    const { currentType: N } = m;
    if (N !== 7)
      return !1;
    k(d);
    const F = d.currentPeek() === ".";
    return d.resetPeek(), F;
  }
  function x(d, m) {
    const { currentType: N } = m;
    if (N !== 8)
      return !1;
    k(d);
    const F = _(d.currentPeek());
    return d.resetPeek(), F;
  }
  function I(d, m) {
    const { currentType: N } = m;
    if (!(N === 7 || N === 11))
      return !1;
    k(d);
    const F = d.currentPeek() === ":";
    return d.resetPeek(), F;
  }
  function Q(d, m) {
    const { currentType: N } = m;
    if (N !== 9)
      return !1;
    const F = () => {
      const ie = d.currentPeek();
      return ie === "{" ? _(d.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === it || !ie ? !1 : ie === Fe ? (d.peek(), F()) : le(d, !1);
    }, oe = F();
    return d.resetPeek(), oe;
  }
  function q(d) {
    k(d);
    const m = d.currentPeek() === "|";
    return d.resetPeek(), m;
  }
  function le(d, m = !0) {
    const N = (oe = !1, ie = "") => {
      const ae = d.currentPeek();
      return ae === "{" || ae === "@" || !ae ? oe : ae === "|" ? !(ie === it || ie === Fe) : ae === it ? (d.peek(), N(!0, it)) : ae === Fe ? (d.peek(), N(!0, Fe)) : !0;
    }, F = N();
    return m && d.resetPeek(), F;
  }
  function H(d, m) {
    const N = d.currentChar();
    return N === ht ? ht : m(N) ? (d.next(), N) : null;
  }
  function Ee(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function B(d) {
    return H(d, Ee);
  }
  function X(d) {
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function M(d) {
    return H(d, X);
  }
  function me(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function j(d) {
    return H(d, me);
  }
  function ft(d) {
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function Le(d) {
    return H(d, ft);
  }
  function He(d) {
    let m = "", N = "";
    for (; m = j(d); )
      N += m;
    return N;
  }
  function pt(d) {
    let m = "";
    for (; ; ) {
      const N = d.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N)
        break;
      if (N === it || N === Fe)
        if (le(d))
          m += N, d.next();
        else {
          if (q(d))
            break;
          m += N, d.next();
        }
      else
        m += N, d.next();
    }
    return m;
  }
  function ke(d) {
    D(d);
    let m = "", N = "";
    for (; m = M(d); )
      N += m;
    const F = d.currentChar();
    if (F && F !== "}" && F !== ht && F !== it && F !== Fe && F !== "　") {
      const oe = et(d);
      return p(ee.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, N + oe), N + oe;
    }
    return d.currentChar() === ht && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), N;
  }
  function Pe(d) {
    D(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${He(d)}`) : m += He(d), d.currentChar() === ht && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function Ze(d) {
    return d !== xo && d !== Fe;
  }
  function Ot(d) {
    D(d), $(d, "'");
    let m = "", N = "";
    for (; m = H(d, Ze); )
      m === "\\" ? N += be(d) : N += m;
    const F = d.currentChar();
    return F === Fe || F === ht ? (p(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === Fe && (d.next(), $(d, "'")), N) : ($(d, "'"), N);
  }
  function be(d) {
    const m = d.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return d.next(), `\\${m}`;
      case "u":
        return Ke(d, m, 4);
      case "U":
        return Ke(d, m, 6);
      default:
        return p(ee.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Ke(d, m, N) {
    $(d, m);
    let F = "";
    for (let oe = 0; oe < N; oe++) {
      const ie = Le(d);
      if (!ie) {
        p(ee.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${F}${d.currentChar()}`);
        break;
      }
      F += ie;
    }
    return `\\${m}${F}`;
  }
  function Qe(d) {
    return d !== "{" && d !== "}" && d !== it && d !== Fe;
  }
  function et(d) {
    D(d);
    let m = "", N = "";
    for (; m = H(d, Qe); )
      N += m;
    return N;
  }
  function mt(d) {
    let m = "", N = "";
    for (; m = B(d); )
      N += m;
    return N;
  }
  function tt(d) {
    const m = (N) => {
      const F = d.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === it ? N : (N += F, d.next(), m(N));
    };
    return m("");
  }
  function at(d) {
    D(d);
    const m = $(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return D(d), m;
  }
  function Tt(d, m) {
    let N = null;
    switch (d.currentChar()) {
      case "{":
        return m.braceNest >= 1 && p(ee.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), N = f(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), D(d), m.braceNest++, N;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && p(ee.EMPTY_PLACEHOLDER, s(), 0), d.next(), N = f(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && D(d), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), N;
      case "@":
        return m.braceNest > 0 && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), N = gt(d, m) || C(m), m.braceNest = 0, N;
      default: {
        let oe = !0, ie = !0, ae = !0;
        if (q(d))
          return m.braceNest > 0 && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), N = f(m, 1, at(d)), m.braceNest = 0, m.inLinked = !1, N;
        if (m.braceNest > 0 && (m.currentType === 4 || m.currentType === 5 || m.currentType === 6))
          return p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, Nt(d, m);
        if (oe = E(d, m))
          return N = f(m, 4, ke(d)), D(d), N;
        if (ie = y(d, m))
          return N = f(m, 5, Pe(d)), D(d), N;
        if (ae = T(d, m))
          return N = f(m, 6, Ot(d)), D(d), N;
        if (!oe && !ie && !ae)
          return N = f(m, 12, et(d)), p(ee.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, N.value), D(d), N;
        break;
      }
    }
    return N;
  }
  function gt(d, m) {
    const { currentType: N } = m;
    let F = null;
    const oe = d.currentChar();
    switch ((N === 7 || N === 8 || N === 11 || N === 9) && (oe === Fe || oe === it) && p(ee.INVALID_LINKED_FORMAT, s(), 0), oe) {
      case "@":
        return d.next(), F = f(
          m,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, F;
      case ".":
        return D(d), d.next(), f(
          m,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return D(d), d.next(), f(
          m,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return q(d) ? (F = f(m, 1, at(d)), m.braceNest = 0, m.inLinked = !1, F) : P(d, m) || I(d, m) ? (D(d), gt(d, m)) : x(d, m) ? (D(d), f(m, 11, mt(d))) : Q(d, m) ? (D(d), oe === "{" ? Tt(d, m) || F : f(m, 10, tt(d))) : (N === 7 && p(ee.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, Nt(d, m));
    }
  }
  function Nt(d, m) {
    let N = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return Tt(d, m) || C(m);
    if (m.inLinked)
      return gt(d, m) || C(m);
    switch (d.currentChar()) {
      case "{":
        return Tt(d, m) || C(m);
      case "}":
        return p(ee.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), f(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return gt(d, m) || C(m);
      default: {
        if (q(d))
          return N = f(m, 1, at(d)), m.braceNest = 0, m.inLinked = !1, N;
        if (le(d))
          return f(m, 0, pt(d));
        break;
      }
    }
    return N;
  }
  function na() {
    const { currentType: d, offset: m, startLoc: N, endLoc: F } = c;
    return c.lastType = d, c.lastOffset = m, c.lastStartLoc = N, c.lastEndLoc = F, c.offset = o(), c.startLoc = s(), n.currentChar() === ht ? f(
      c,
      13
      /* TokenTypes.EOF */
    ) : Nt(n, c);
  }
  return {
    nextToken: na,
    currentOffset: o,
    currentPosition: s,
    context: u
  };
}
const Yu = "parser", Ku = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Xu(e, t, a) {
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
function qu(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(_, b, E, y, ...T) {
    const P = _.currentPosition();
    if (P.offset += y, P.column += y, a) {
      const x = t ? nn(E, P) : null, I = aa(b, x, {
        domain: Yu,
        args: T
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
  function r(_, b) {
    const E = _.context(), y = o(3, E.offset, E.startLoc);
    return y.value = b, s(y, _.currentOffset(), _.currentPosition()), y;
  }
  function i(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: T } = E, P = o(5, y, T);
    return P.index = parseInt(b, 10), _.nextToken(), s(P, _.currentOffset(), _.currentPosition()), P;
  }
  function c(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: T } = E, P = o(4, y, T);
    return P.key = b, _.nextToken(), s(P, _.currentOffset(), _.currentPosition()), P;
  }
  function u(_, b) {
    const E = _.context(), { lastOffset: y, lastStartLoc: T } = E, P = o(9, y, T);
    return P.value = b.replace(Ku, Xu), _.nextToken(), s(P, _.currentOffset(), _.currentPosition()), P;
  }
  function v(_) {
    const b = _.nextToken(), E = _.context(), { lastOffset: y, lastStartLoc: T } = E, P = o(8, y, T);
    return b.type !== 11 ? (n(_, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), P.value = "", s(P, y, T), {
      nextConsumeToken: b,
      node: P
    }) : (b.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, ct(b)), P.value = b.value || "", s(P, _.currentOffset(), _.currentPosition()), {
      node: P
    });
  }
  function p(_, b) {
    const E = _.context(), y = o(7, E.offset, E.startLoc);
    return y.value = b, s(y, _.currentOffset(), _.currentPosition()), y;
  }
  function f(_) {
    const b = _.context(), E = o(6, b.offset, b.startLoc);
    let y = _.nextToken();
    if (y.type === 8) {
      const T = v(_);
      E.modifier = T.node, y = T.nextConsumeToken || _.nextToken();
    }
    switch (y.type !== 9 && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(y)), y = _.nextToken(), y.type === 2 && (y = _.nextToken()), y.type) {
      case 10:
        y.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(y)), E.key = p(_, y.value || "");
        break;
      case 4:
        y.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(y)), E.key = c(_, y.value || "");
        break;
      case 5:
        y.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(y)), E.key = i(_, y.value || "");
        break;
      case 6:
        y.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(y)), E.key = u(_, y.value || "");
        break;
      default: {
        n(_, ee.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const T = _.context(), P = o(7, T.offset, T.startLoc);
        return P.value = "", s(P, T.offset, T.startLoc), E.key = P, s(E, T.offset, T.startLoc), {
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
    const b = _.context(), E = b.currentType === 1 ? _.currentOffset() : b.offset, y = b.currentType === 1 ? b.endLoc : b.startLoc, T = o(2, E, y);
    T.items = [];
    let P = null;
    do {
      const Q = P || _.nextToken();
      switch (P = null, Q.type) {
        case 0:
          Q.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), T.items.push(r(_, Q.value || ""));
          break;
        case 5:
          Q.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), T.items.push(i(_, Q.value || ""));
          break;
        case 4:
          Q.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), T.items.push(c(_, Q.value || ""));
          break;
        case 6:
          Q.value == null && n(_, ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), T.items.push(u(_, Q.value || ""));
          break;
        case 7: {
          const q = f(_);
          T.items.push(q.node), P = q.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 13 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : _.currentOffset(), I = b.currentType === 1 ? b.lastEndLoc : _.currentPosition();
    return s(T, x, I), T;
  }
  function $(_, b, E, y) {
    const T = _.context();
    let P = y.items.length === 0;
    const x = o(1, b, E);
    x.cases = [], x.cases.push(y);
    do {
      const I = C(_);
      P || (P = I.items.length === 0), x.cases.push(I);
    } while (T.currentType !== 13);
    return P && n(_, ee.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), s(x, _.currentOffset(), _.currentPosition()), x;
  }
  function k(_) {
    const b = _.context(), { offset: E, startLoc: y } = b, T = C(_);
    return b.currentType === 13 ? T : $(_, E, y, T);
  }
  function D(_) {
    const b = Hu(_, Me({}, e)), E = b.context(), y = o(0, E.offset, E.startLoc);
    return t && y.loc && (y.loc.source = _), y.body = k(b), e.onCacheKey && (y.cacheKey = e.onCacheKey(_)), E.currentType !== 13 && n(b, ee.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, _[E.offset] || ""), s(y, b.currentOffset(), b.currentPosition()), y;
  }
  return { parse: D };
}
function ct(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ju(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (s) => (a.helpers.add(s), s) };
}
function ko(e, t) {
  for (let a = 0; a < e.length; a++)
    Dn(e[a], t);
}
function Dn(e, t) {
  switch (e.type) {
    case 1:
      ko(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ko(e.items, t);
      break;
    case 6: {
      Dn(e.key, t), t.helper(
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
function Zu(e, t = {}) {
  const a = Ju(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Dn(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function Qu(e) {
  const t = e.body;
  return t.type === 2 ? Co(t) : t.cases.forEach((a) => Co(a)), e;
}
function Co(e) {
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
      e.static = Pn(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const ed = "minifier";
function Wt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Wt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, a = t.cases;
      for (let n = 0; n < a.length; n++)
        Wt(a[n]);
      t.c = a, delete t.cases;
      break;
    }
    case 2: {
      const t = e, a = t.items;
      for (let n = 0; n < a.length; n++)
        Wt(a[n]);
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
      Wt(t.key), t.k = t.key, delete t.key, t.modifier && (Wt(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw aa(ee.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ed,
          args: [e.type]
        });
  }
  delete e.type;
}
const td = "parser";
function ad(e, t) {
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
  function c(k, D) {
    r.code += k;
  }
  function u(k, D = !0) {
    const _ = D ? n : "";
    c(o ? _ + "  ".repeat(k) : _);
  }
  function v(k = !0) {
    const D = ++r.indentLevel;
    k && u(D);
  }
  function p(k = !0) {
    const D = --r.indentLevel;
    k && u(D);
  }
  function f() {
    u(r.indentLevel);
  }
  return {
    context: i,
    push: c,
    indent: v,
    deindent: p,
    newline: f,
    helper: (k) => `_${k}`,
    needIndent: () => r.needIndent
  };
}
function nd(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Yt(e, t.key), t.modifier ? (e.push(", "), Yt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function od(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const o = t.items.length;
  for (let s = 0; s < o && (Yt(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function sd(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const o = t.cases.length;
    for (let s = 0; s < o && (Yt(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function rd(e, t) {
  t.body ? Yt(e, t.body) : e.push("null");
}
function Yt(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      rd(e, t);
      break;
    case 1:
      sd(e, t);
      break;
    case 2:
      od(e, t);
      break;
    case 6:
      nd(e, t);
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
        throw aa(ee.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: td,
          args: [t.type]
        });
  }
}
const ld = (e, t = {}) => {
  const a = W(t.mode) ? t.mode : "normal", n = W(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", r = e.helpers || [], i = ad(e, {
    filename: n,
    breakLineCode: o,
    needIndent: s
  });
  i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), r.length > 0 && (i.push(`const { ${Pn(r.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), Yt(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: c, map: u } = i.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function id(e, t = {}) {
  const a = Me({}, t), n = !!a.jit, o = !!a.minify, s = a.optimize == null ? !0 : a.optimize, i = qu(a).parse(e);
  return n ? (s && Qu(i), o && Wt(i), { ast: i, code: "" }) : (Zu(i, a), ld(i, a));
}
function cd() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($t().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && ($t().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function st(e) {
  return fe(e) && Ln(e) === 0 && (ot(e, "b") || ot(e, "body"));
}
const Rs = ["b", "body"];
function ud(e) {
  return kt(e, Rs);
}
const Bs = ["c", "cases"];
function dd(e) {
  return kt(e, Bs, []);
}
const Vs = ["s", "static"];
function fd(e) {
  return kt(e, Vs);
}
const Fs = ["i", "items"];
function pd(e) {
  return kt(e, Fs, []);
}
const Us = ["t", "type"];
function Ln(e) {
  return kt(e, Us);
}
const zs = ["v", "value"];
function Ca(e, t) {
  const a = kt(e, zs);
  if (a != null)
    return a;
  throw ca(t);
}
const js = ["m", "modifier"];
function md(e) {
  return kt(e, js);
}
const Ws = ["k", "key"];
function gd(e) {
  const t = kt(e, Ws);
  if (t)
    return t;
  throw ca(
    6
    /* NodeTypes.Linked */
  );
}
function kt(e, t, a) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (ot(e, o) && e[o] != null)
      return e[o];
  }
  return a;
}
const Gs = [
  ...Rs,
  ...Bs,
  ...Vs,
  ...Fs,
  ...Ws,
  ...js,
  ...zs,
  ...Us
];
function ca(e) {
  return new Error(`unhandled node type: ${e}`);
}
function qa(e) {
  return (a) => vd(a, e);
}
function vd(e, t) {
  const a = ud(t);
  if (a == null)
    throw ca(
      0
      /* NodeTypes.Resource */
    );
  if (Ln(a) === 1) {
    const s = dd(a);
    return e.plural(s.reduce((r, i) => [
      ...r,
      So(e, i)
    ], []));
  } else
    return So(e, a);
}
function So(e, t) {
  const a = fd(t);
  if (a != null)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = pd(t).reduce((o, s) => [...o, on(e, s)], []);
    return e.normalize(n);
  }
}
function on(e, t) {
  const a = Ln(t);
  switch (a) {
    case 3:
      return Ca(t, a);
    case 9:
      return Ca(t, a);
    case 4: {
      const n = t;
      if (ot(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (ot(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw ca(a);
    }
    case 5: {
      const n = t;
      if (ot(n, "i") && Ie(n.i))
        return e.interpolate(e.list(n.i));
      if (ot(n, "index") && Ie(n.index))
        return e.interpolate(e.list(n.index));
      throw ca(a);
    }
    case 6: {
      const n = t, o = md(n), s = gd(n);
      return e.linked(on(e, s), o ? on(e, o) : void 0, e.type);
    }
    case 7:
      return Ca(t, a);
    case 8:
      return Ca(t, a);
    default:
      throw new Error(`unhandled node on format message part: ${a}`);
  }
}
const hd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function bd(e, t) {
  t && Vu(e) && dt(Va(hd, { source: e }));
}
const _d = (e) => e;
let Sa = ge();
function yd(e, t = {}) {
  let a = !1;
  const n = t.onError || Ru;
  return t.onError = (o) => {
    a = !0, n(o);
  }, { ...id(e, t), detectError: a };
}
// @__NO_SIDE_EFFECTS__
function wd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && W(e)) {
    const a = Ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && bd(e, a);
    const o = (t.onCacheKey || _d)(e), s = Sa[o];
    if (s)
      return s;
    const { ast: r, detectError: i } = yd(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = qa(r);
    return i ? c : Sa[o] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !st(e))
      return dt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const a = e.cacheKey;
    if (a) {
      const n = Sa[a];
      return n || (Sa[a] = qa(e));
    } else
      return qa(e);
  }
}
let ua = null;
function Ed(e) {
  ua = e;
}
function xd(e, t, a) {
  ua && ua.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const kd = /* @__PURE__ */ Cd("function:translate");
function Cd(e) {
  return (t) => ua && ua.emit(e, t);
}
const Ue = {
  INVALID_ARGUMENT: Iu,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Sd = 24;
function bt(e) {
  return aa(e, null, process.env.NODE_ENV !== "production" ? { messages: Od } : void 0);
}
const Od = {
  [Ue.INVALID_ARGUMENT]: "Invalid arguments",
  [Ue.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ue.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ue.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ue.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function $n(e, t) {
  return t.locale != null ? Oo(t.locale) : Oo(e.locale);
}
let Ja;
function Oo(e) {
  if (W(e))
    return e;
  if (we(e)) {
    if (e.resolvedOnce && Ja != null)
      return Ja;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Au(t))
        throw bt(Ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ja = t;
    } else
      throw bt(Ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw bt(Ue.NOT_SUPPORT_LOCALE_TYPE);
}
function Td(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...Se(t) ? t : fe(t) ? Object.keys(t) : W(t) ? [t] : [a]
  ])];
}
function Hs(e, t, a) {
  const n = W(a) ? a : Ia, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let r = [a];
    for (; Se(r); )
      r = To(s, r, t);
    const i = Se(t) || !de(t) ? t : t.default ? t.default : null;
    r = W(i) ? [i] : i, Se(r) && To(s, r, !1), o.__localeChainCache.set(n, s);
  }
  return s;
}
function To(e, t, a) {
  let n = !0;
  for (let o = 0; o < t.length && Ce(n); o++) {
    const s = t[o];
    W(s) && (n = Nd(e, t[o], a));
  }
  return n;
}
function Nd(e, t, a) {
  let n;
  const o = t.split("-");
  do {
    const s = o.join("-");
    n = Ad(e, s, a), o.splice(-1, 1);
  } while (o.length && n === !0);
  return n;
}
function Ad(e, t, a) {
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
const Pd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Dd(e) {
  return Pd.test(e);
}
function Ld(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function $d(e) {
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
function Id(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Dd(t) ? Ld(t) : "*" + t;
}
function Md(e) {
  const t = [];
  let a = -1, n = 0, o = 0, s, r, i, c, u, v, p;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    r === void 0 ? r = i : r += i;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    r !== void 0 && (t.push(r), r = void 0);
  }, f[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    f[
      0
      /* Actions.APPEND */
    ](), o++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, n = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, r === void 0 || (r = Id(r), r === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function C() {
    const $ = e[a + 1];
    if (n === 5 && $ === "'" || n === 6 && $ === '"')
      return a++, i = "\\" + $, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, s = e[a], !(s === "\\" && C())) {
      if (c = $d(s), p = Ct[n], u = p[c] || p.l || 8, u === 8 || (n = u[0], u[1] !== void 0 && (v = f[u[1]], v && (i = s, v() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const No = /* @__PURE__ */ new Map();
function Rd(e, t) {
  return fe(e) ? e[t] : null;
}
function Bd(e, t) {
  if (!fe(e))
    return null;
  let a = No.get(t);
  if (a || (a = Md(t), a && No.set(t, a)), !a)
    return null;
  const n = a.length;
  let o = e, s = 0;
  for (; s < n; ) {
    const r = a[s];
    if (Gs.includes(r) && st(o))
      return null;
    const i = o[r];
    if (i === void 0 || we(o))
      return null;
    o = i, s++;
  }
  return o;
}
const Ge = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Vd = 8, Fd = {
  [Ge.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ge.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ge.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ge.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ge.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ge.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ge.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ft(e, ...t) {
  return Va(Fd[e], ...t);
}
const Ud = "11.2.8", Ua = -1, Ia = "en-US", Ma = "", Ao = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function zd() {
  return {
    upper: (e, t) => t === "text" && W(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && W(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && W(e) ? Ao(e) : t === "vnode" && fe(e) && "__v_isVNode" in e ? Ao(e.children) : e
  };
}
let Ys;
function jd(e) {
  Ys = e;
}
let Ks;
function Wd(e) {
  Ks = e;
}
let Xs;
function Gd(e) {
  Xs = e;
}
let qs = null;
const Hd = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  qs = e;
}, Yd = /* @__NO_SIDE_EFFECTS__ */ () => qs;
let Js = null;
const Po = (e) => {
  Js = e;
}, Kd = () => Js;
let Do = 0;
function Xd(e = {}) {
  const t = we(e.onWarn) ? e.onWarn : dt, a = W(e.version) ? e.version : Ud, n = W(e.locale) || we(e.locale) ? e.locale : Ia, o = we(n) ? Ia : n, s = Se(e.fallbackLocale) || de(e.fallbackLocale) || W(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, r = de(e.messages) ? e.messages : Za(o), i = de(e.datetimeFormats) ? e.datetimeFormats : Za(o), c = de(e.numberFormats) ? e.numberFormats : Za(o), u = Me(ge(), e.modifiers, zd()), v = e.pluralRules || ge(), p = we(e.missing) ? e.missing : null, f = Ce(e.missingWarn) || $a(e.missingWarn) ? e.missingWarn : !0, C = Ce(e.fallbackWarn) || $a(e.fallbackWarn) ? e.fallbackWarn : !0, $ = !!e.fallbackFormat, k = !!e.unresolving, D = we(e.postTranslation) ? e.postTranslation : null, _ = de(e.processor) ? e.processor : null, b = Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, y = we(e.messageCompiler) ? e.messageCompiler : Ys;
  process.env.NODE_ENV !== "production" && we(e.messageCompiler) && Eu(Ft(Ge.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = we(e.messageResolver) ? e.messageResolver : Ks || Rd, P = we(e.localeFallbacker) ? e.localeFallbacker : Xs || Td, x = fe(e.fallbackContext) ? e.fallbackContext : void 0, I = e, Q = fe(I.__datetimeFormatters) ? I.__datetimeFormatters : /* @__PURE__ */ new Map(), q = fe(I.__numberFormatters) ? I.__numberFormatters : /* @__PURE__ */ new Map(), le = fe(I.__meta) ? I.__meta : {};
  Do++;
  const H = {
    version: a,
    cid: Do,
    locale: n,
    fallbackLocale: s,
    messages: r,
    modifiers: u,
    pluralRules: v,
    missing: p,
    missingWarn: f,
    fallbackWarn: C,
    fallbackFormat: $,
    unresolving: k,
    postTranslation: D,
    processor: _,
    warnHtmlMessage: b,
    escapeParameter: E,
    messageCompiler: y,
    messageResolver: T,
    localeFallbacker: P,
    fallbackContext: x,
    onWarn: t,
    __meta: le
  };
  return H.datetimeFormats = i, H.numberFormats = c, H.__datetimeFormatters = Q, H.__numberFormatters = q, process.env.NODE_ENV !== "production" && (H.__v_emitter = I.__v_emitter != null ? I.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && xd(H, a, le), H;
}
const Za = (e) => ({ [e]: ge() });
function za(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Zs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function In(e, t, a, n, o) {
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
    return W(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Zs(n, t) && r(Ft(Ge.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function ra(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function Qs(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function qd(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (Qs(e, t[n]))
      return !0;
  return !1;
}
const Lo = typeof Intl < "u", er = {
  dateTimeFormat: Lo && typeof Intl.DateTimeFormat < "u",
  numberFormat: Lo && typeof Intl.NumberFormat < "u"
};
function $o(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !er.dateTimeFormat)
    return s(Ft(Ge.CANNOT_FORMAT_DATE)), Ma;
  const [c, u, v, p] = sn(...t), f = Ce(v.missingWarn) ? v.missingWarn : e.missingWarn, C = Ce(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, $ = !!v.part, k = $n(e, v), D = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    k
  );
  if (!W(c) || c === "")
    return new Intl.DateTimeFormat(k, p).format(u);
  let _ = {}, b, E = null, y = k, T = null;
  const P = "datetime format";
  for (let Q = 0; Q < D.length; Q++) {
    if (b = T = D[Q], process.env.NODE_ENV !== "production" && k !== b && za(C, c) && s(Ft(Ge.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: b
    })), process.env.NODE_ENV !== "production" && k !== b) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: P,
        key: c,
        from: y,
        to: T,
        groupId: `${P}:${c}`
      });
    }
    if (_ = a[b] || {}, E = _[c], de(E))
      break;
    In(e, c, b, f, P), y = T;
  }
  if (!de(E) || !W(b))
    return n ? Ua : c;
  let x = `${b}__${c}`;
  Fa(p) || (x = `${x}__${JSON.stringify(p)}`);
  let I = i.get(x);
  return I || (I = new Intl.DateTimeFormat(b, Me({}, E, p)), i.set(x, I)), $ ? I.formatToParts(u) : I.format(u);
}
const tr = [
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
function sn(...e) {
  const [t, a, n, o] = e, s = ge();
  let r = ge(), i;
  if (W(t)) {
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
  } else if (Su(t)) {
    if (isNaN(t.getTime()))
      throw bt(Ue.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ie(t))
    i = t;
  else
    throw bt(Ue.INVALID_ARGUMENT);
  return W(a) ? s.key = a : de(a) && Object.keys(a).forEach((c) => {
    tr.includes(c) ? r[c] = a[c] : s[c] = a[c];
  }), W(n) ? s.locale = n : de(n) && (r = n), de(o) && (r = o), [s.key || "", i, s, r];
}
function Io(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function Mo(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !er.numberFormat)
    return s(Ft(Ge.CANNOT_FORMAT_NUMBER)), Ma;
  const [c, u, v, p] = rn(...t), f = Ce(v.missingWarn) ? v.missingWarn : e.missingWarn, C = Ce(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, $ = !!v.part, k = $n(e, v), D = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    k
  );
  if (!W(c) || c === "")
    return new Intl.NumberFormat(k, p).format(u);
  let _ = {}, b, E = null, y = k, T = null;
  const P = "number format";
  for (let Q = 0; Q < D.length; Q++) {
    if (b = T = D[Q], process.env.NODE_ENV !== "production" && k !== b && za(C, c) && s(Ft(Ge.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: b
    })), process.env.NODE_ENV !== "production" && k !== b) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: P,
        key: c,
        from: y,
        to: T,
        groupId: `${P}:${c}`
      });
    }
    if (_ = a[b] || {}, E = _[c], de(E))
      break;
    In(e, c, b, f, P), y = T;
  }
  if (!de(E) || !W(b))
    return n ? Ua : c;
  let x = `${b}__${c}`;
  Fa(p) || (x = `${x}__${JSON.stringify(p)}`);
  let I = i.get(x);
  return I || (I = new Intl.NumberFormat(b, Me({}, E, p)), i.set(x, I)), $ ? I.formatToParts(u) : I.format(u);
}
const ar = [
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
function rn(...e) {
  const [t, a, n, o] = e, s = ge();
  let r = ge();
  if (!Ie(t))
    throw bt(Ue.INVALID_ARGUMENT);
  const i = t;
  return W(a) ? s.key = a : de(a) && Object.keys(a).forEach((c) => {
    ar.includes(c) ? r[c] = a[c] : s[c] = a[c];
  }), W(n) ? s.locale = n : de(n) && (r = n), de(o) && (r = o), [s.key || "", i, s, r];
}
function Ro(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const Jd = (e) => e, Zd = (e) => "", Qd = "text", ef = (e) => e.length === 0 ? "" : Pn(e), tf = Pu;
function Bo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function af(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function nf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function of(e = {}) {
  const t = e.locale, a = af(e), n = fe(e.pluralRules) && W(t) && we(e.pluralRules[t]) ? e.pluralRules[t] : Bo, o = fe(e.pluralRules) && W(t) && we(e.pluralRules[t]) ? Bo : void 0, s = (_) => _[n(a, _.length, o)], r = e.list || [], i = (_) => r[_], c = e.named || ge();
  Ie(e.pluralIndex) && nf(a, c);
  const u = (_) => c[_];
  function v(_, b) {
    const E = we(e.messages) ? e.messages(_, !!b) : fe(e.messages) ? e.messages[_] : !1;
    return E || (e.parent ? e.parent.message(_) : Zd);
  }
  const p = (_) => e.modifiers ? e.modifiers[_] : Jd, f = de(e.processor) && we(e.processor.normalize) ? e.processor.normalize : ef, C = de(e.processor) && we(e.processor.interpolate) ? e.processor.interpolate : tf, $ = de(e.processor) && W(e.processor.type) ? e.processor.type : Qd, D = {
    list: i,
    named: u,
    plural: s,
    linked: (_, ...b) => {
      const [E, y] = b;
      let T = "text", P = "";
      b.length === 1 ? fe(E) ? (P = E.modifier || P, T = E.type || T) : W(E) && (P = E || P) : b.length === 2 && (W(E) && (P = E || P), W(y) && (T = y || T));
      const x = v(_, !0)(D), I = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && Se(x) && P ? x[0] : x
      );
      return P ? p(P)(I, T) : I;
    },
    message: v,
    type: $,
    interpolate: C,
    normalize: f,
    values: Me(ge(), r, c)
  };
  return D;
}
const Vo = () => "", Xe = (e) => we(e);
function Fo(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: o, messageCompiler: s, fallbackLocale: r, messages: i } = e, [c, u] = ln(...t), v = Ce(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, f = Ce(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, C = !!u.resolvedMessage, $ = W(u.default) || Ce(u.default) ? Ce(u.default) ? s ? c : () => c : u.default : a ? s ? c : () => c : null, k = a || $ != null && (W($) || we($)), D = $n(e, u);
  f && sf(u);
  let [_, b, E] = C ? [
    c,
    D,
    i[D] || ge()
  ] : nr(e, c, D, r, p, v), y = _, T = c;
  if (!C && !(W(y) || st(y) || Xe(y)) && k && (y = $, T = y), !C && (!(W(y) || st(y) || Xe(y)) || !W(b)))
    return o ? Ua : c;
  if (process.env.NODE_ENV !== "production" && W(y) && e.messageCompiler == null)
    return dt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let P = !1;
  const x = () => {
    P = !0;
  }, I = Xe(y) ? y : or(e, c, b, y, T, x);
  if (P)
    return y;
  const Q = uf(e, b, E, u), q = of(Q), le = rf(e, I, q);
  let H = n ? n(le, c) : le;
  if (f && W(H) && (H = Tu(H)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ee = {
      timestamp: Date.now(),
      key: W(c) ? c : Xe(y) ? y.key : "",
      locale: b || (Xe(y) ? y.locale : ""),
      format: W(y) ? y : Xe(y) ? y.source : "",
      message: H
    };
    Ee.meta = Me({}, e.__meta, /* @__PURE__ */ Yd() || {}), kd(Ee);
  }
  return H;
}
function sf(e) {
  Se(e.list) ? e.list = e.list.map((t) => W(t) ? yo(t) : t) : fe(e.named) && Object.keys(e.named).forEach((t) => {
    W(e.named[t]) && (e.named[t] = yo(e.named[t]));
  });
}
function nr(e, t, a, n, o, s) {
  const { messages: r, onWarn: i, messageResolver: c, localeFallbacker: u } = e, v = u(e, n, a);
  let p = ge(), f, C = null, $ = a, k = null;
  const D = "translate";
  for (let _ = 0; _ < v.length; _++) {
    if (f = k = v[_], process.env.NODE_ENV !== "production" && a !== f && !Qs(a, f) && za(o, t) && i(Ft(Ge.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && a !== f) {
      const T = e.__v_emitter;
      T && T.emit("fallback", {
        type: D,
        key: t,
        from: $,
        to: k,
        groupId: `${D}:${t}`
      });
    }
    p = r[f] || ge();
    let b = null, E, y;
    if (process.env.NODE_ENV !== "production" && yt && (b = window.performance.now(), E = "intlify-message-resolve-start", y = "intlify-message-resolve-end", Ye && Ye(E)), (C = c(p, t)) === null && (C = p[t]), process.env.NODE_ENV !== "production" && yt) {
      const T = window.performance.now(), P = e.__v_emitter;
      P && b && C && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: C,
        time: T - b,
        groupId: `${D}:${t}`
      }), E && y && Ye && Vt && (Ye(y), Vt("intlify message resolve", E, y));
    }
    if (W(C) || st(C) || Xe(C))
      break;
    if (!qd(f, v)) {
      const T = In(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        s,
        D
      );
      T !== t && (C = T);
    }
    $ = k;
  }
  return [C, f, p];
}
function or(e, t, a, n, o, s) {
  const { messageCompiler: r, warnHtmlMessage: i } = e;
  if (Xe(n)) {
    const f = n;
    return f.locale = f.locale || a, f.key = f.key || t, f;
  }
  if (r == null) {
    const f = (() => n);
    return f.locale = a, f.key = t, f;
  }
  let c = null, u, v;
  process.env.NODE_ENV !== "production" && yt && (c = window.performance.now(), u = "intlify-message-compilation-start", v = "intlify-message-compilation-end", Ye && Ye(u));
  const p = r(n, lf(e, a, o, n, i, s));
  if (process.env.NODE_ENV !== "production" && yt) {
    const f = window.performance.now(), C = e.__v_emitter;
    C && c && C.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: f - c,
      groupId: `translate:${t}`
    }), u && v && Ye && Vt && (Ye(v), Vt("intlify message compilation", u, v));
  }
  return p.locale = a, p.key = t, p.source = n, p;
}
function rf(e, t, a) {
  let n = null, o, s;
  process.env.NODE_ENV !== "production" && yt && (n = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Ye && Ye(o));
  const r = t(a);
  if (process.env.NODE_ENV !== "production" && yt) {
    const i = window.performance.now(), c = e.__v_emitter;
    c && n && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: i - n,
      groupId: `translate:${t.key}`
    }), o && s && Ye && Vt && (Ye(s), Vt("intlify message evaluation", o, s));
  }
  return r;
}
function ln(...e) {
  const [t, a, n] = e, o = ge();
  if (!W(t) && !Ie(t) && !Xe(t) && !st(t))
    throw bt(Ue.INVALID_ARGUMENT);
  const s = Ie(t) ? String(t) : (Xe(t), t);
  return Ie(a) ? o.plural = a : W(a) ? o.default = a : de(a) && !Fa(a) ? o.named = a : Se(a) && (o.list = a), Ie(n) ? o.plural = n : W(n) ? o.default = n : de(n) && Me(o, n), [s, o];
}
function lf(e, t, a, n, o, s) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: o,
    onError: (r) => {
      if (s && s(r), process.env.NODE_ENV !== "production") {
        const i = cf(n), c = `Message compilation error: ${r.message}`, u = r.location && i && Du(i, r.location.start.offset, r.location.end.offset), v = e.__v_emitter;
        v && i && v.emit("compile-error", {
          message: i,
          error: r.message,
          start: r.location && r.location.start.offset,
          end: r.location && r.location.end.offset,
          groupId: `translate:${a}`
        }), console.error(u ? `${c}
${u}` : c);
      } else
        throw r;
    },
    onCacheKey: (r) => ku(t, a, r)
  };
}
function cf(e) {
  if (W(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function uf(e, t, a, n) {
  const { modifiers: o, pluralRules: s, messageResolver: r, fallbackLocale: i, fallbackWarn: c, missingWarn: u, fallbackContext: v } = e, f = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (C, $) => {
      let k = r(a, C);
      if (k == null && (v || $)) {
        const [, , D] = nr(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          C,
          t,
          i,
          c,
          u
        );
        k = r(D, C);
      }
      if (W(k) || st(k)) {
        let D = !1;
        const b = or(e, C, t, k, C, () => {
          D = !0;
        });
        return D ? Vo : b;
      } else return Xe(k) ? k : Vo;
    }
  };
  return e.processor && (f.processor = e.processor), n.list && (f.list = n.list), n.named && (f.named = n.named), Ie(n.plural) && (f.pluralIndex = n.plural), f;
}
cd();
const df = "11.2.8";
function ff() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && ($t().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && ($t().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && ($t().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($t().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Be = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Sd,
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
function da(e, ...t) {
  return aa(e, null, process.env.NODE_ENV !== "production" ? { messages: pf, args: t } : void 0);
}
const pf = {
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
}, cn = /* @__PURE__ */ wt("__translateVNode"), un = /* @__PURE__ */ wt("__datetimeParts"), dn = /* @__PURE__ */ wt("__numberParts"), fn = /* @__PURE__ */ wt("__enableEmitter"), pn = /* @__PURE__ */ wt("__disableEmitter"), mf = wt("__setPluralRules"), sr = /* @__PURE__ */ wt("__injectWithOption"), mn = /* @__PURE__ */ wt("__dispose"), ut = {
  FALLBACK_TO_ROOT: Vd,
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
}, gf = {
  [ut.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ut.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ut.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ut.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ut.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [ut.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Ra(e, ...t) {
  return Va(gf[e], ...t);
}
function fa(e) {
  if (!fe(e) || st(e))
    return e;
  for (const t in e)
    if (ot(e, t))
      if (!t.includes("."))
        fe(e[t]) && fa(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let o = e, s = !1;
        for (let r = 0; r < n; r++) {
          if (a[r] === "__proto__")
            throw new Error(`unsafe key: ${a[r]}`);
          if (a[r] in o || (o[a[r]] = ge()), !fe(o[a[r]])) {
            process.env.NODE_ENV !== "production" && dt(Ra(ut.IGNORE_OBJ_FLATTEN, {
              key: a[r]
            })), s = !0;
            break;
          }
          o = o[a[r]];
        }
        if (s || (st(o) ? Gs.includes(a[n]) || delete e[t] : (o[a[n]] = e[t], delete e[t])), !st(o)) {
          const r = o[a[n]];
          fe(r) && fa(r);
        }
      }
  return e;
}
function rr(e, t) {
  const { messages: a, __i18n: n, messageResolver: o, flatJson: s } = t, r = de(a) ? a : Se(n) ? ge() : { [e]: ge() };
  if (Se(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: c, resource: u } = i;
      c ? (r[c] = r[c] || ge(), Pa(u, r[c])) : Pa(u, r);
    } else
      W(i) && Pa(JSON.parse(i), r);
  }), o == null && s)
    for (const i in r)
      ot(r, i) && fa(r[i]);
  return r;
}
function lr(e) {
  return e.type;
}
function vf(e, t, a) {
  let n = fe(t.messages) ? t.messages : ge();
  "__i18nGlobal" in a && (n = rr(e.locale.value, {
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
function Uo(e) {
  return w($r, null, e, 0);
}
function Mn() {
  const e = "currentInstance";
  return e in Wa ? Wa[e] : Wa.getCurrentInstance();
}
const zo = "__INTLIFY_META__", jo = () => [], hf = () => !1;
let Wo = 0;
function Go(e) {
  return ((t, a, n, o) => e(a, n, Mn() || void 0, o));
}
const bf = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Mn();
  let t = null;
  return e && (t = lr(e)[zo]) ? { [zo]: t } : null;
};
function _f(e = {}) {
  const { __root: t, __injectWithOption: a } = e, n = t === void 0, o = e.flatJson, s = yt ? se : _t;
  let r = Ce(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && r ? t.locale.value : W(e.locale) ? e.locale : Ia
  ), c = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : W(e.fallbackLocale) || Se(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = s(rr(i.value, e)), v = s(de(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = s(de(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let f = t ? t.missingWarn : Ce(e.missingWarn) || $a(e.missingWarn) ? e.missingWarn : !0, C = t ? t.fallbackWarn : Ce(e.fallbackWarn) || $a(e.fallbackWarn) ? e.fallbackWarn : !0, $ = t ? t.fallbackRoot : Ce(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, D = we(e.missing) ? e.missing : null, _ = we(e.missing) ? Go(e.missing) : null, b = we(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const T = t ? t.modifiers : de(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    n && Po(null);
    const S = {
      version: df,
      locale: i.value,
      fallbackLocale: c.value,
      messages: u.value,
      modifiers: T,
      pluralRules: P,
      missing: _ === null ? void 0 : _,
      missingWarn: f,
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
    S.datetimeFormats = v.value, S.numberFormats = p.value, S.__datetimeFormatters = de(x) ? x.__datetimeFormatters : void 0, S.__numberFormatters = de(x) ? x.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (S.__v_emitter = de(x) ? x.__v_emitter : void 0);
    const R = Xd(S);
    return n && Po(R), R;
  })(), ra(x, i.value, c.value);
  function Q() {
    return [
      i.value,
      c.value,
      u.value,
      v.value,
      p.value
    ];
  }
  const q = U({
    get: () => i.value,
    set: (S) => {
      x.locale = S, i.value = S;
    }
  }), le = U({
    get: () => c.value,
    set: (S) => {
      x.fallbackLocale = S, c.value = S, ra(x, i.value, S);
    }
  }), H = U(() => u.value), Ee = /* @__PURE__ */ U(() => v.value), B = /* @__PURE__ */ U(() => p.value);
  function X() {
    return we(b) ? b : null;
  }
  function M(S) {
    b = S, x.postTranslation = S;
  }
  function me() {
    return D;
  }
  function j(S) {
    S !== null && (_ = Go(S)), D = S, x.missing = _;
  }
  function ft(S, R) {
    return S !== "translate" || !R.resolvedMessage;
  }
  const Le = (S, R, ce, _e, nt, At) => {
    Q();
    let We;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (x.fallbackContext = t ? Kd() : void 0), We = S(x);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (x.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ie(We) && We === Ua || ce === "translate exists" && !We) {
      const [rt, ja] = R();
      if (process.env.NODE_ENV !== "production" && t && W(rt) && ft(ce, ja) && ($ && (za(C, rt) || Zs(f, rt)) && dt(Ra(ut.FALLBACK_TO_ROOT, {
        key: rt,
        type: ce
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: lt } = x;
        lt && $ && lt.emit("fallback", {
          type: ce,
          key: rt,
          to: "global",
          groupId: `${ce}:${rt}`
        });
      }
      return t && $ ? _e(t) : nt(rt);
    } else {
      if (At(We))
        return We;
      throw da(Be.UNEXPECTED_RETURN_TYPE);
    }
  };
  function He(...S) {
    return Le((R) => Reflect.apply(Fo, null, [R, ...S]), () => ln(...S), "translate", (R) => Reflect.apply(R.t, R, [...S]), (R) => R, (R) => W(R));
  }
  function pt(...S) {
    const [R, ce, _e] = S;
    if (_e && !fe(_e))
      throw da(Be.INVALID_ARGUMENT);
    return He(R, ce, Me({ resolvedMessage: !0 }, _e || {}));
  }
  function ke(...S) {
    return Le((R) => Reflect.apply($o, null, [R, ...S]), () => sn(...S), "datetime format", (R) => Reflect.apply(R.d, R, [...S]), () => Ma, (R) => W(R) || Se(R));
  }
  function Pe(...S) {
    return Le((R) => Reflect.apply(Mo, null, [R, ...S]), () => rn(...S), "number format", (R) => Reflect.apply(R.n, R, [...S]), () => Ma, (R) => W(R) || Se(R));
  }
  function Ze(S) {
    return S.map((R) => W(R) || Ie(R) || Ce(R) ? Uo(String(R)) : R);
  }
  const be = {
    normalize: Ze,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Ke(...S) {
    return Le((R) => {
      let ce;
      const _e = R;
      try {
        _e.processor = be, ce = Reflect.apply(Fo, null, [_e, ...S]);
      } finally {
        _e.processor = null;
      }
      return ce;
    }, () => ln(...S), "translate", (R) => R[cn](...S), (R) => [Uo(R)], (R) => Se(R));
  }
  function Qe(...S) {
    return Le((R) => Reflect.apply(Mo, null, [R, ...S]), () => rn(...S), "number format", (R) => R[dn](...S), jo, (R) => W(R) || Se(R));
  }
  function et(...S) {
    return Le((R) => Reflect.apply($o, null, [R, ...S]), () => sn(...S), "datetime format", (R) => R[un](...S), jo, (R) => W(R) || Se(R));
  }
  function mt(S) {
    P = S, x.pluralRules = P;
  }
  function tt(S, R) {
    return Le(() => {
      if (!S)
        return !1;
      const ce = W(R) ? R : i.value, _e = gt(ce), nt = x.messageResolver(_e, S);
      return st(nt) || Xe(nt) || W(nt);
    }, () => [S], "translate exists", (ce) => Reflect.apply(ce.te, ce, [S, R]), hf, (ce) => Ce(ce));
  }
  function at(S) {
    let R = null;
    const ce = Hs(x, c.value, i.value);
    for (let _e = 0; _e < ce.length; _e++) {
      const nt = u.value[ce[_e]] || {}, At = x.messageResolver(nt, S);
      if (At != null) {
        R = At;
        break;
      }
    }
    return R;
  }
  function Tt(S) {
    const R = at(S);
    return R ?? (t ? t.tm(S) || {} : {});
  }
  function gt(S) {
    return u.value[S] || {};
  }
  function Nt(S, R) {
    if (o) {
      const ce = { [S]: R };
      for (const _e in ce)
        ot(ce, _e) && fa(ce[_e]);
      R = ce[S];
    }
    u.value[S] = R, x.messages = u.value;
  }
  function na(S, R) {
    u.value[S] = u.value[S] || {};
    const ce = { [S]: R };
    if (o)
      for (const _e in ce)
        ot(ce, _e) && fa(ce[_e]);
    R = ce[S], Pa(R, u.value[S]), x.messages = u.value;
  }
  function d(S) {
    return v.value[S] || {};
  }
  function m(S, R) {
    v.value[S] = R, x.datetimeFormats = v.value, Io(x, S, R);
  }
  function N(S, R) {
    v.value[S] = Me(v.value[S] || {}, R), x.datetimeFormats = v.value, Io(x, S, R);
  }
  function F(S) {
    return p.value[S] || {};
  }
  function oe(S, R) {
    p.value[S] = R, x.numberFormats = p.value, Ro(x, S, R);
  }
  function ie(S, R) {
    p.value[S] = Me(p.value[S] || {}, R), x.numberFormats = p.value, Ro(x, S, R);
  }
  Wo++, t && yt && (Re(t.locale, (S) => {
    r && (i.value = S, x.locale = S, ra(x, i.value, c.value));
  }), Re(t.fallbackLocale, (S) => {
    r && (c.value = S, x.fallbackLocale = S, ra(x, i.value, c.value));
  }));
  const ae = {
    id: Wo,
    locale: q,
    fallbackLocale: le,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(S) {
      r = S, S && t && (i.value = t.locale.value, c.value = t.fallbackLocale.value, ra(x, i.value, c.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: H,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(S) {
      f = S, x.missingWarn = f;
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
    t: He,
    getLocaleMessage: gt,
    setLocaleMessage: Nt,
    mergeLocaleMessage: na,
    getPostTranslationHandler: X,
    setPostTranslationHandler: M,
    getMissingHandler: me,
    setMissingHandler: j,
    [mf]: mt
  };
  return ae.datetimeFormats = Ee, ae.numberFormats = B, ae.rt = pt, ae.te = tt, ae.tm = Tt, ae.d = ke, ae.n = Pe, ae.getDateTimeFormat = d, ae.setDateTimeFormat = m, ae.mergeDateTimeFormat = N, ae.getNumberFormat = F, ae.setNumberFormat = oe, ae.mergeNumberFormat = ie, ae[sr] = a, ae[cn] = Ke, ae[un] = et, ae[dn] = Qe, process.env.NODE_ENV !== "production" && (ae[fn] = (S) => {
    x.__v_emitter = S;
  }, ae[pn] = () => {
    x.__v_emitter = void 0;
  }), ae;
}
function Ho(e, t) {
}
const Rn = {
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
function yf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.type === he ? o.children : [o]
  ], []) : t.reduce((a, n) => {
    const o = e[n];
    return o && (a[n] = o()), a;
  }, ge());
}
function ir() {
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
}, Rn);
function wf(e) {
  return Se(e) && !W(e[0]);
}
function cr(e, t, a, n) {
  const { slots: o, attrs: s } = t;
  return () => {
    const r = { part: !0 };
    let i = ge();
    e.locale && (r.locale = e.locale), W(e.format) ? r.key = e.format : fe(e.format) && (W(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((f, C) => a.includes(C) ? Me(ge(), f, { [C]: e.format[C] }) : f, ge()));
    const c = n(e.value, r, i);
    let u = [r.key];
    Se(c) ? u = c.map((f, C) => {
      const $ = o[f.type], k = $ ? $({ [f.type]: f.value, index: C, parts: c }) : [f.value];
      return wf(k) && (k[0].key = `${f.type}-${C}`), k;
    }) : W(c) && (u = [c]);
    const v = Me(ge(), s), p = W(e.tag) || fe(e.tag) ? e.tag : ir();
    return Gt(p, v, u);
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
}, Rn);
const Ef = /* @__PURE__ */ wt("global-vue-i18n");
function St(e = {}) {
  const t = Mn();
  if (t == null)
    throw da(Be.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw da(Be.NOT_INSTALLED);
  const a = xf(t), n = Cf(a), o = lr(t), s = kf(e, o);
  if (s === "global")
    return vf(n, e, o), n;
  if (s === "parent") {
    let c = Sf(a, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && dt(Ra(ut.NOT_FOUND_PARENT_SCOPE)), c = n), c;
  }
  const r = a;
  let i = r.__getInstance(t);
  if (i == null) {
    const c = Me({}, e);
    "__i18n" in o && (c.__i18n = o.__i18n), n && (c.__root = n), i = _f(c), r.__composerExtend && (i[mn] = r.__composerExtend(i)), Tf(r, t, i), r.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && dt(Ra(ut.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function xf(e) {
  const t = Ht(e.isCE ? Ef : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw da(e.isCE ? Be.NOT_INSTALLED_WITH_PROVIDE : Be.UNEXPECTED_ERROR);
  return t;
}
function kf(e, t) {
  return Fa(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Cf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Sf(e, t, a = !1) {
  let n = null;
  const o = t.root;
  let s = Of(t, a);
  for (; s != null; ) {
    const r = e;
    if (e.mode === "composition")
      n = r.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = r.__getInstance(s);
      i != null && (n = i.__composer, a && n && !n[sr] && (n = null));
    }
    if (n != null || o === s)
      break;
    s = s.parent;
  }
  return n;
}
function Of(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Tf(e, t, a) {
  let n = null;
  qt(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = a, n = Lu();
      const o = a;
      o[fn] && o[fn](n), n.on("*", Ho);
    }
  }, t), vn(() => {
    const o = a;
    process.env.NODE_ENV !== "production" && (n && n.off("*", Ho), o[pn] && o[pn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const s = o[mn];
    s && (s(), delete o[mn]);
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
}, Rn);
ff();
jd(wd);
Wd(Bd);
Gd(Hs);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = $t();
  e.__INTLIFY__ = !0, Ed(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Nf = /* @__PURE__ */ O({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "empty",
      class: te(l(z)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Af = /* @__PURE__ */ O({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "empty-content",
      class: te(l(z)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Pf = /* @__PURE__ */ O({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (g(), V("p", {
      "data-slot": "empty-description",
      class: te(l(z)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Df = /* @__PURE__ */ O({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (g(), V("div", {
      "data-slot": "empty-header",
      class: te(l(z)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Lf = ["data-variant"], $f = /* @__PURE__ */ O({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: te(l(z)(l(ur)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Lf));
  }
}), If = ["data-variant"], Mf = /* @__PURE__ */ O({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: te(l(z)(l(ur)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, If));
  }
}), ur = Ut(
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
), Rf = ["colspan"], dr = /* @__PURE__ */ O({
  __name: "DataTableEmpty",
  setup(e) {
    const t = ta(), { t: a } = St();
    return (n, o) => (g(), V("tr", null, [
      J("td", {
        colspan: l(t).colNum.value
      }, [
        w(l(Nf), null, {
          default: h(() => [
            w(l(Df), null, {
              default: h(() => [
                w(l($f), { variant: "icon" }, {
                  default: h(() => [
                    w(l(cs))
                  ]),
                  _: 1
                }),
                w(l(Mf), null, {
                  default: h(() => [
                    pe(Z(l(a)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }),
                w(l(Pf), null, {
                  default: h(() => [
                    pe(Z(l(a)("dataTable.noEntriesFoundDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(Af), null, {
              default: h(() => [
                L(n.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 8, Rf)
    ]));
  }
}), Bf = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(Kr), G({ "data-slot": "pagination" }, l(s), {
      class: l(z)("mx-auto flex w-full justify-center", a.class)
    }), {
      default: h((c) => [
        L(r.$slots, "default", Mt(Jt(c)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vf = /* @__PURE__ */ O({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(Xr), G({ "data-slot": "pagination-content" }, l(a), {
      class: l(z)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((s) => [
        L(n.$slots, "default", Mt(Jt(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ff = (e, t) => t, Uf = /* @__PURE__ */ Symbol("brink-component-translation");
function je() {
  return Ht(Uf, null) ?? Ff;
}
const zf = { class: "hidden sm:block" }, jf = /* @__PURE__ */ O({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Je(a), o = je();
    return (s, r) => (g(), A(l(qr), G({
      "data-slot": "pagination-first",
      class: l(z)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          w(l(ls), { class: "size-4" }),
          J("span", zf, Z(l(o)("pagination.first", "First")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wf = { class: "hidden sm:block" }, Gf = /* @__PURE__ */ O({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Je(a), o = je();
    return (s, r) => (g(), A(l(Jr), G({
      "data-slot": "pagination-last",
      class: l(z)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          J("span", Wf, Z(l(o)("pagination.last", "Last")), 1),
          w(l(is), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hf = { class: "hidden sm:block" }, Yf = /* @__PURE__ */ O({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Je(a), o = je();
    return (s, r) => (g(), A(l(Zr), G({
      "data-slot": "pagination-next",
      class: l(z)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          J("span", Hf, Z(l(o)("pagination.next", "Next")), 1),
          w(l(Zt))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kf = { class: "hidden sm:block" }, Xf = /* @__PURE__ */ O({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class", "size"), n = Je(a), o = je();
    return (s, r) => (g(), A(l(Qr), G({
      "data-slot": "pagination-previous",
      class: l(z)(l(xt)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          w(l(rs)),
          J("span", Kf, Z(l(o)("pagination.previous", "Previous")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = /* @__PURE__ */ O({
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
    const o = Te(e, t);
    return (s, r) => (g(), A(l(el), G({ "data-slot": "select" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ O({
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
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(tl), null, {
      default: h(() => [
        w(l(al), G({ "data-slot": "select-content" }, { ...l(s), ...r.$attrs }, {
          class: l(z)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: h(() => [
            w(l(tp)),
            w(l(nl), {
              class: te(l(z)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: h(() => [
                L(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            w(l(ep))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Zf = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, Qf = /* @__PURE__ */ O({
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
    const t = e, a = ue(t, "class"), n = Je(a);
    return (o, s) => (g(), A(l(ol), G({ "data-slot": "select-item" }, l(n), {
      class: l(z)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: h(() => [
        J("span", Zf, [
          w(l(sl), null, {
            default: h(() => [
              w(l(Ba), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l(rl), null, {
          default: h(() => [
            L(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ep = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Je(a);
    return (o, s) => (g(), A(l(ll), G({ "data-slot": "select-scroll-down-button" }, l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(va), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tp = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Je(a);
    return (o, s) => (g(), A(l(il), G({ "data-slot": "select-scroll-up-button" }, l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(Gl), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ap = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(cl), G({ "data-slot": "select-value" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bn = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(ul), G({ "data-slot": "dropdown-menu-separator" }, l(a), {
      class: l(z)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), np = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, op = { key: 1 }, sp = {
  key: 0,
  class: "-mt-2"
}, Vn = /* @__PURE__ */ O({
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
    const t = e, a = je(), n = ve(e, "modelValue"), o = U(() => Object.fromEntries(ye(t.options).map((c) => [c.value, c]))), s = U(() => n.value ? t.multiple ? Array.isArray(n.value) ? n.value.map((c) => o.value[c]).filter(Boolean) : [] : o.value[n.value] ? [o.value[n.value]] : [] : []);
    function r() {
      n.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = U(() => t.initialValues === void 0 ? n.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(n.value));
    return (c, u) => (g(), V(he, null, [
      w(l(qf), {
        modelValue: n.value,
        "onUpdate:modelValue": u[1] || (u[1] = (v) => n.value = v),
        multiple: e.multiple,
        disabled: e.disabled
      }, {
        default: h(() => [
          w(l(dl), G({
            class: l(z)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, c.$attrs, {
            disabled: e.disabled,
            "as-child": ""
          }), {
            default: h(() => [
              w(Ns, { variant: "outline" }, {
                default: h(() => [
                  L(c.$slots, "default", { selectedOptions: s.value }, () => [
                    w(l(ap), {
                      placeholder: e.placeholder || l(a)("common.select", "Select"),
                      class: "flex-wrap"
                    }, {
                      default: h(() => [
                        e.customValueComponent && s.value.length > 0 ? (g(!0), V(he, { key: 0 }, Ve(s.value, (v) => (g(), A(qe(e.customValueComponent), G({
                          key: v.value,
                          option: v,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : ne("", !0)
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
          w(l(Jf), null, {
            default: h(() => [
              e.label ? (g(), V("div", np, Z(e.label), 1)) : ne("", !0),
              (g(!0), V(he, null, Ve(ye(e.options), (v) => (g(), A(l(Qf), {
                key: String(v.value),
                value: v.value,
                disabled: e.disabled
              }, {
                default: h(() => [
                  pe(Z(v.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)),
              e.showResetButton && i.value ? (g(), V("div", op, [
                w(Bn),
                w(ze, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  disabled: e.disabled,
                  onClick: u[0] || (u[0] = (v) => r())
                }, {
                  default: h(() => [
                    w(l(Xl)),
                    pe(" " + Z(l(a)("common.reset", "Reset")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])) : ne("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple", "disabled"]),
      e.showAddItemButton ? (g(), V("div", sp, [
        w(ze, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          disabled: e.disabled,
          onClick: u[2] || (u[2] = (v) => c.$emit("onAddItem"))
        }, {
          default: h(() => [
            w(l(kn)),
            pe(" " + Z(l(a)("common.addItem", "Add Item")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : ne("", !0)
    ], 64));
  }
}), rp = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, lp = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, ip = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, cp = { class: "hidden @2xl:block" }, up = { class: "@2xl:hidden" }, dp = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n), r = ve(e, "itemsPerPage"), { t: i } = St();
    return (c, u) => (g(), V("div", null, [
      w(l(Bf), G(l(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: h(({ page: v, pageCount: p }) => [
          e.hideItemsPerPage ? ne("", !0) : (g(), V("div", rp, [
            J("span", lp, Z(l(i)("dataTable.rowsPerPage")), 1),
            w(Vn, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((f) => ({ value: f, label: `${f}` })),
              "model-value": r.value,
              "onUpdate:modelValue": u[0] || (u[0] = (f) => r.value = f)
            }, null, 8, ["options", "model-value"])
          ])),
          w(l(Vf), null, {
            default: h(() => [
              J("div", ip, [
                J("span", cp, Z(l(i)("dataTable.pageOf", { page: v, pageCount: p })), 1),
                J("span", up, Z(v) + " / " + Z(p), 1)
              ]),
              w(l(jf), null, {
                default: h(() => [
                  w(l(ls), { class: "size-4" })
                ]),
                _: 1
              }),
              w(l(Xf), null, {
                default: h(() => [
                  w(l(rs))
                ]),
                _: 1
              }),
              w(l(Yf), { variant: "outline" }, {
                default: h(() => [
                  w(l(Zt))
                ]),
                _: 1
              }),
              w(l(Gf), { variant: "outline" }, {
                default: h(() => [
                  w(l(is), { class: "size-4" })
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
}), fp = { key: 0 }, pp = { class: "flex gap-2 items-center min-w-0" }, mp = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, gp = { key: 1 }, vp = { class: "text-sm line-clamp-1 text-muted-foreground" }, hp = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, fr = /* @__PURE__ */ O({
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
    const t = ve(e, "page"), a = ve(e, "itemsPerPage"), n = ta(), { t: o } = St();
    return (s, r) => l(n).hasItems.value ? (g(), V("div", {
      key: 0,
      class: te(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "!px-6": !e.bordered }])
    }, [
      l(n).selectMode === "multiselect" && l(n).selected.value.length > 0 ? (g(), V("div", fp, [
        J("div", pp, [
          J("span", mp, Z(l(o)("dataTable.elementsSelected", { count: l(n).selected.value.length, total: l(n).items.length })), 1),
          l(n).selected.value.length > 0 ? L(s.$slots, "bulk", {
            key: 0,
            selected: l(n).selected.value
          }) : ne("", !0)
        ])
      ])) : l(n).selected.value.length === 0 && e.total !== void 0 ? (g(), V("div", gp, [
        J("span", vp, Z(l(o)("dataTable.totalElements", { total: e.total })), 1)
      ])) : ne("", !0),
      e.total !== void 0 ? (g(), V("div", hp, [
        a.value ? (g(), A(dp, {
          key: 0,
          page: t.value,
          "onUpdate:page": r[0] || (r[0] = (i) => t.value = i),
          "items-per-page": a.value,
          "onUpdate:itemsPerPage": r[1] || (r[1] = (i) => a.value = i),
          "page-size-options": e.pageSizeOptions || [],
          "hide-items-per-page": l(n).selected.value.length > 0 || e.pageSizeOptions && e.pageSizeOptions.length < 2,
          total: e.total,
          disabled: l(n).isPending
        }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])) : ne("", !0)
      ])) : ne("", !0)
    ], 2)) : ne("", !0);
  }
}), Fn = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(fl), G(l(s), {
      class: l(z)(
        "grid place-content-center peer h-4.5 w-4.5 shrink-0 rounded-sm border-input border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        a.class
      )
    }), {
      default: h(() => [
        w(l(pl), { class: "grid place-content-center text-current" }, {
          default: h(() => [
            L(r.$slots, "default", {}, () => [
              w(l(Ba), {
                class: "h-3.5 w-3.5",
                "stroke-width": 3
              })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pr = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Te(e, t);
    return (s, r) => (g(), A(l(ml), G({ "data-slot": "dropdown-menu" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bp = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, _p = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(gl), G({ "data-slot": "dropdown-menu-checkbox-item" }, l(s), {
      class: l(z)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: h(() => [
        J("span", bp, [
          w(l(vl), null, {
            default: h(() => [
              w(l(Ba), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        L(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mr = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(hl), null, {
      default: h(() => [
        w(l(bl), G({ "data-slot": "dropdown-menu-content" }, l(s), {
          class: l(z)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", a.class)
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
}), Oa = /* @__PURE__ */ O({
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
    const t = e, a = ue(t, "inset", "variant", "class"), n = Je(a);
    return (o, s) => (g(), A(l(_l), G({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, l(n), {
      class: l(z)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), yp = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = ue(t, "class", "inset"), n = Je(a);
    return (o, s) => (g(), A(l(yl), G({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, l(n), {
      class: l(z)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), gr = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Je(e);
    return (n, o) => (g(), A(l(wl), G({ "data-slot": "dropdown-menu-trigger" }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wp = /* @__PURE__ */ O({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = je(), s = U(() => a.sortOrder ? a.sortOrder === "asc" ? Kn : Yn : Hl);
    function r(c) {
      n("sort", c);
    }
    function i() {
      n("hide");
    }
    return (c, u) => !e.sortable && !e.hideable ? (g(), V("div", {
      key: 0,
      class: te(l(z)("flex items-center font-normal text-xs space-x-2"))
    }, [
      J("span", null, Z(e.title), 1)
    ], 2)) : (g(), V("div", {
      key: 1,
      class: te(l(z)("flex items-center space-x-2"))
    }, [
      w(l(pr), null, {
        default: h(() => [
          w(l(gr), { "as-child": "" }, {
            default: h(() => [
              w(l(ze), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: h(() => [
                  J("span", null, Z(e.title), 1),
                  e.sortable ? (g(), A(qe(s.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : ne("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          w(l(mr), { align: "start" }, {
            default: h(() => [
              e.sortable ? (g(), V(he, { key: 0 }, [
                w(l(Oa), {
                  onClick: u[0] || (u[0] = (v) => r("asc"))
                }, {
                  default: h(() => [
                    w(l(Kn), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    pe(" " + Z(l(o)("datatable.sort.asc", "Asc")), 1)
                  ]),
                  _: 1
                }),
                w(l(Oa), {
                  onClick: u[1] || (u[1] = (v) => r("desc"))
                }, {
                  default: h(() => [
                    w(l(Yn), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    pe(" " + Z(l(o)("datatable.sort.desc", "Desc")), 1)
                  ]),
                  _: 1
                }),
                e.sortOrder ? (g(), A(l(Oa), {
                  key: 0,
                  onClick: u[2] || (u[2] = (v) => r(void 0))
                }, {
                  default: h(() => [
                    w(l(Wl), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    pe(" " + Z(l(o)("datatable.sort.clear", "Clear sort")), 1)
                  ]),
                  _: 1
                })) : ne("", !0)
              ], 64)) : ne("", !0),
              e.sortable && e.hideable ? (g(), A(l(Bn), { key: 1 })) : ne("", !0),
              e.hideable ? (g(), A(l(Oa), {
                key: 2,
                onClick: i
              }, {
                default: h(() => [
                  w(l(Yl), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  pe(" " + Z(l(o)("datatable.hide", "Hide")), 1)
                ]),
                _: 1
              })) : ne("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), Ep = { class: "text-left" }, xp = {
  key: 0,
  class: "!w-6 !pr-0"
}, kp = {
  key: 1,
  class: "!w-6"
}, Cp = { key: 2 }, vr = /* @__PURE__ */ O({
  __name: "DataTableHeader",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = ta();
    return (o, s) => {
      const r = Ir("tooltip");
      return g(), V("thead", Ep, [
        J("tr", null, [
          l(n).expandable ? (g(), V("th", xp, [
            ts((g(), A(ze, {
              type: "button",
              size: "sm",
              variant: "ghost",
              class: "h-6 w-6 p-0 -mr-1 [&:not(:hover)]:opacity-0",
              onClick: s[0] || (s[0] = (i) => l(n).toggleExpandAll())
            }, {
              default: h(() => [
                (g(), A(qe(l(n).allExpandedState.value ? l(va) : l(Zt))))
              ]),
              _: 1
            })), [
              [r, "Toggle collapse"]
            ])
          ])) : ne("", !0),
          l(n).selectMode === "multiselect" ? (g(), V("th", kp, [
            w(l(Fn), {
              "model-value": l(n).allSelectedState.value,
              "onUpdate:modelValue": s[1] || (s[1] = () => l(n).toggleAllSelected())
            }, null, 8, ["model-value"])
          ])) : ne("", !0),
          (g(!0), V(he, null, Ve(l(n).filteredColumns.value, (i) => (g(), V("th", {
            key: i.id
          }, [
            w(wp, {
              title: i.title ?? l(_u)(i.id),
              sortable: l(n).sortable && i.sortable,
              "sort-order": l(n).sortBy?.value?.key === i.id ? l(n).sortBy.value.order : void 0,
              hideable: i.hideable ?? !0,
              onSort: (c) => c ? l(n).updateSort(i.id) : l(n).sortBy.value = void 0,
              onHide: () => a("update:visibleColumns", e.visibleColumns?.filter((c) => c !== i.id) || [])
            }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
          ]))), 128)),
          l(n).hasActionsColumn ? (g(), V("th", Cp)) : ne("", !0)
        ])
      ]);
    };
  }
}), hr = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(Kl), {
      role: "status",
      "aria-label": "Loading",
      class: te(l(z)("size-4 animate-spin", t.class))
    }, null, 8, ["class"]));
  }
}), Sp = { class: "absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md" }, Op = { class: "flex flex-col items-center gap-2" }, Tp = { class: "text-sm text-muted-foreground" }, br = /* @__PURE__ */ O({
  __name: "DataTableLoadingOverlay",
  setup(e) {
    const { t } = St();
    return (a, n) => (g(), V("div", Sp, [
      J("div", Op, [
        w(hr, {
          size: 30,
          class: "size-8"
        }),
        J("span", Tp, Z(l(t)("dataTable.loading") || "Loading..."), 1)
      ])
    ]));
  }
}), Np = ["data-state", "data-row-id"], Ap = {
  key: 0,
  class: "!w-6 !pr-0"
}, Pp = {
  key: 1,
  class: "!w-6 !pr-0"
}, Dp = ["data-col-id", "tabindex"], Lp = { key: 2 }, $p = { class: "flex items-center gap-0.5" }, _r = /* @__PURE__ */ O({
  __name: "DataTableRow",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, a = ta(), n = U(() => a.selectedMap.value[t.item.id]), o = U(() => a.highlightedRow === t.item[a.idcol]), s = U(() => a.expandedMap.value[t.item[a.idcol]]), r = U(() => a.isRowExpandableFn(t.item));
    return (i, c) => (g(), V("tr", {
      "data-state": (n.value || o.value) && "selected",
      "data-row-id": e.item.id
    }, [
      l(a).expandable ? (g(), V("td", Ap, [
        r.value ? (g(), A(ze, {
          key: 0,
          size: "sm",
          variant: "ghost",
          class: "h-6 w-6 p-0 -mr-1",
          onClick: c[0] || (c[0] = (u) => l(a).toggleExpand(e.item[l(a).idcol]))
        }, {
          default: h(() => [
            (g(), A(qe(s.value ? l(va) : l(Zt)), { class: "h-4 w-4" }))
          ]),
          _: 1
        })) : ne("", !0)
      ])) : ne("", !0),
      l(a).selectMode === "multiselect" ? (g(), V("td", Pp, [
        w(l(Fn), {
          "model-value": l(a).selected.value.includes(e.item.id),
          "onUpdate:modelValue": c[1] || (c[1] = (u) => l(a).toggleSelected(e.item.id))
        }, null, 8, ["model-value"])
      ])) : ne("", !0),
      (g(!0), V(he, null, Ve(l(a).filteredColumns.value, (u) => (g(), V("td", {
        key: u.id,
        "data-col-id": u.id,
        tabindex: u.onClick ? 0 : -1,
        class: te(u.cssClass)
      }, [
        L(i.$slots, `cell:${String(u.id)}`, {
          item: e.item,
          value: e.item[u.id],
          expanded: s.value
        }, () => [
          pe(Z(e.item[u.id]), 1)
        ])
      ], 10, Dp))), 128)),
      l(a).hasActionsColumn ? (g(), V("td", Lp, [
        J("div", $p, [
          L(i.$slots, "cell:actions", { item: e.item })
        ])
      ])) : ne("", !0)
    ], 8, Np));
  }
}), Ip = /* @__PURE__ */ O({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = je(), s = U(
      () => a.columns.filter((u) => u.title && u.hideable !== !1)
    ), r = U(() => !a.visibleColumns || a.visibleColumns.length === 0 ? a.columns.map((u) => u.id) : a.visibleColumns);
    function i(u) {
      return r.value.includes(u);
    }
    function c(u, v) {
      const p = r.value;
      (typeof v == "boolean" ? v : !1) ? p.includes(u) || n("update:visibleColumns", [...p, u]) : n("update:visibleColumns", p.filter((C) => C !== u));
    }
    return (u, v) => (g(), A(l(pr), null, {
      default: h(() => [
        w(l(gr), { "as-child": "" }, {
          default: h(() => [
            w(l(ze), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: h(() => [
                w(l(Jl), { class: "mr-2 h-4 w-4" }),
                pe(" " + Z(l(o)("datatable.view", "View")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(l(mr), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: h(() => [
            w(l(yp), null, {
              default: h(() => [
                pe(Z(l(o)("datatable.toggleColumns", "Toggle columns")), 1)
              ]),
              _: 1
            }),
            w(l(Bn)),
            (g(!0), V(he, null, Ve(s.value, (p) => (g(), A(l(_p), {
              key: p.id,
              "model-value": i(p.id),
              "onUpdate:modelValue": (f) => c(p.id, f)
            }, {
              default: h(() => [
                pe(Z(p.title), 1)
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
}), Mp = { class: "flex items-center justify-end py-2" }, yr = /* @__PURE__ */ O({
  __name: "DataTableToolbar",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = ta();
    return (o, s) => (g(), V("div", Mp, [
      L(o.$slots, "default"),
      w(Ip, {
        columns: l(n).columns,
        "visible-columns": e.visibleColumns,
        "onUpdate:visibleColumns": s[0] || (s[0] = (r) => a("update:visibleColumns", r))
      }, null, 8, ["columns", "visible-columns"])
    ]));
  }
}), Rp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Bp = { class: "hover:!bg-transparent" }, Vp = ["colspan"], bg = /* @__PURE__ */ O({
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
    const n = a, o = ve(e, "visibleColumns"), s = ve(e, "itemsPerPage"), r = ve(e, "page"), i = ve(e, "sortBy"), c = ve(e, "selected"), u = U(() => ia(e.columns, (q) => q.id)), v = U(() => ia(e.items, (q) => q.id)), p = U(() => e.items && e.items.length > 0), f = U(() => o.value ? e.columns.filter((q) => o.value?.includes(q.id)) : e.columns), C = U(() => f.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    Re(s, () => {
      r.value && r.value > 1 && (r.value = 1);
    });
    function $(q) {
      !i.value || i.value.key !== q ? i.value = { key: q, order: "asc" } : i.value.key === q && (i.value.order === "asc" ? i.value = { key: q, order: "desc" } : i.value = void 0);
    }
    const k = U(() => e.items), { stateMap: D, toggle: _, toggleAll: b, allToggledState: E, clear: y } = gn(k, "id", e.storagekey, c);
    Ds(
      c,
      U(() => e.items.map((q) => q.id))
    ), Ps(() => (y(), !0), U(() => c.value.length > 0));
    const { stateMap: T, toggle: P, allToggledState: x, toggleAll: I } = gn(k, "id", e.storagekey), Q = (q) => e.isRowExpandable ? e.isRowExpandable(q) : !0;
    return $s({
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
      filteredColumns: f,
      columnsMap: u,
      itemsMap: v,
      colNum: C,
      hasItems: p,
      selected: c,
      selectedMap: D,
      expandedMap: T,
      sortBy: i,
      toggleSelected: _,
      toggleAllSelected: b,
      allSelectedState: E,
      clearSelected: y,
      toggleExpand: P,
      toggleExpandAll: I,
      allExpandedState: x,
      updateSort: $,
      isRowExpandableFn: Q,
      onClickRow: (q) => n("clickRow", q),
      onClickColumn: (q, le) => {
        const H = u.value[q], Ee = v.value[le];
        H && Ee && H.onClick?.(Ee);
      }
    }), t({ selected: c, clearSelected: y }), (q, le) => (g(), V("div", Rp, [
      e.showOptions ? (g(), A(yr, {
        key: 0,
        "visible-columns": o.value,
        "onUpdate:visibleColumns": le[0] || (le[0] = (H) => o.value = H)
      }, {
        default: h(() => [
          L(q.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : ne("", !0),
      w(Is, null, {
        default: h(() => [
          e.isPending ? (g(), A(br, { key: 0 })) : ne("", !0),
          J("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            J("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(vr, {
                "visible-columns": o.value,
                "onUpdate:visibleColumns": le[1] || (le[1] = (H) => o.value = H)
              }, null, 8, ["visible-columns"]),
              w(Ls, null, {
                default: h(() => [
                  p.value ? (g(!0), V(he, { key: 0 }, Ve(e.items, (H) => (g(), V(he, {
                    key: H.id
                  }, [
                    w(_r, { item: H }, as({ _: 2 }, [
                      Ve(q.$slots, (Ee, B) => ({
                        name: B,
                        fn: h((X) => [
                          L(q.$slots, B, G({ ref_for: !0 }, X))
                        ])
                      }))
                    ]), 1032, ["item"]),
                    e.expandable && l(T)[H[e.idcol]] && Q(H) ? L(q.$slots, "expanded-row-raw", {
                      key: 0,
                      item: H,
                      colNum: C.value
                    }, () => [
                      J("tr", Bp, [
                        J("td", {
                          colspan: C.value,
                          class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7"
                        }, [
                          L(q.$slots, "expanded-row", { item: H })
                        ], 8, Vp)
                      ])
                    ]) : ne("", !0)
                  ], 64))), 128)) : (g(), A(dr, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(fr, {
        page: r.value,
        "onUpdate:page": le[2] || (le[2] = (H) => r.value = H),
        "items-per-page": s.value,
        "onUpdate:itemsPerPage": le[3] || (le[3] = (H) => s.value = H),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((H) => [
          L(q.$slots, "bulk", Mt(Jt(H)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), Fp = /* @__PURE__ */ O({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = Ut(
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
    return (n, o) => (g(), V("div", {
      class: te(l(z)(l(t)({ variant: a.variant }), a.class))
    }, [
      L(n.$slots, "default")
    ], 2));
  }
}), Up = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, zp = ["data-group-id"], jp = { class: "!w-6 !pr-0" }, Wp = {
  key: 0,
  class: "!w-6"
}, Gp = ["colspan"], Hp = { class: "flex items-center gap-2" }, Yp = { class: "text-sm" }, _g = /* @__PURE__ */ O({
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
    const n = a, o = U(() => Object.values(e.groups).flat()), s = ve(e, "visibleColumns"), r = ve(e, "itemsPerPage"), i = ve(e, "page"), c = ve(e, "sortBy"), u = ve(e, "selected"), v = U(() => ia(e.columns, (B) => B.id)), p = U(() => ia(o.value, (B) => B.id)), f = U(() => o.value && o.value.length > 0), C = U(() => Object.values(e.groups).length > 0), $ = U(() => s.value ? e.columns.filter((B) => s.value?.includes(B.id)) : e.columns), k = U(() => $.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + 1);
    Re(r, () => {
      i.value && i.value > 1 && (i.value = 1);
    });
    function D(B) {
      !c.value || c.value.key !== B ? c.value = { key: B, order: "asc" } : c.value.key === B && (c.value.order === "asc" ? c.value = { key: B, order: "desc" } : c.value = void 0);
    }
    const _ = U(() => o.value), { stateMap: b, toggle: E, toggleAll: y, allToggledState: T, clear: P } = gn(_, "id", e.storagekey, u);
    Ds(
      u,
      U(() => o.value.map((B) => B.id))
    ), Ps(() => (P(), !0), U(() => u.value.length > 0)), Re(i, () => P());
    const x = se({});
    function I(B) {
      x.value[B] = x.value[B] === void 0 ? !1 : !x.value[B];
    }
    function Q() {
      const B = Object.keys(e.groups);
      B.every((M) => x.value[M] !== !1) ? B.forEach((M) => {
        x.value[M] = !1;
      }) : B.forEach((M) => {
        x.value[M] = !0;
      });
    }
    const q = U(() => {
      const B = Object.keys(e.groups), X = B.filter((M) => x.value[M] !== !1).length;
      return X === 0 ? !1 : X === B.length ? !0 : "indeterminate";
    });
    function le(B) {
      return B.every((X) => u.value.includes(X.id));
    }
    function H(B) {
      const X = B.filter((M) => u.value.includes(M.id));
      return X.length > 0 && X.length < B.length;
    }
    function Ee(B) {
      if (le(B))
        u.value = u.value.filter((M) => !B.some((me) => me.id === M));
      else {
        const M = B.map((me) => me.id);
        u.value = [.../* @__PURE__ */ new Set([...u.value, ...M])];
      }
    }
    return $s({
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
      itemsMap: p,
      colNum: k,
      hasItems: f,
      selected: u,
      selectedMap: b,
      expandedMap: U(() => ({})),
      sortBy: c,
      toggleSelected: E,
      toggleAllSelected: y,
      allSelectedState: T,
      clearSelected: P,
      toggleExpand: () => {
      },
      toggleExpandAll: Q,
      allExpandedState: q,
      updateSort: D,
      isRowExpandableFn: () => !1,
      onClickRow: (B) => n("clickRow", B),
      onClickColumn: (B, X) => {
        const M = v.value[B], me = p.value[X];
        M && me && M.onClick?.(me);
      }
    }), t({ selected: u, clearSelected: P }), (B, X) => (g(), V("div", Up, [
      e.showOptions ? (g(), A(yr, {
        key: 0,
        "visible-columns": s.value,
        "onUpdate:visibleColumns": X[0] || (X[0] = (M) => s.value = M)
      }, {
        default: h(() => [
          L(B.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : ne("", !0),
      w(Is, null, {
        default: h(() => [
          e.isPending ? (g(), A(br, { key: 0 })) : ne("", !0),
          J("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            J("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(vr, {
                "visible-columns": s.value,
                "onUpdate:visibleColumns": X[1] || (X[1] = (M) => s.value = M)
              }, null, 8, ["visible-columns"]),
              w(Ls, null, {
                default: h(() => [
                  C.value ? (g(!0), V(he, { key: 0 }, Ve(e.groups, (M, me) => (g(), V(he, { key: me }, [
                    J("tr", {
                      class: "",
                      "data-group-id": me
                    }, [
                      J("td", jp, [
                        w(ze, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0",
                          disabled: M.length === 0,
                          onClick: (j) => I(String(me))
                        }, {
                          default: h(() => [
                            (g(), A(qe(x.value[String(me)] ? l(va) : l(Zt)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ]),
                      e.selectMode === "multiselect" ? (g(), V("td", Wp, [
                        w(l(Fn), {
                          "model-value": M.length === 0 ? !1 : le(M) ? !0 : H(M) ? "indeterminate" : !1,
                          disabled: M.length === 0,
                          "onUpdate:modelValue": (j) => Ee(M)
                        }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                      ])) : ne("", !0),
                      J("td", {
                        colspan: k.value - 1 - (e.selectMode === "multiselect" ? 1 : 0),
                        class: "font-medium"
                      }, [
                        L(B.$slots, "group-header", {
                          groupKey: String(me),
                          items: M,
                          count: M.length,
                          isExpanded: x.value[String(me)],
                          isSelected: le(M)
                        }, () => [
                          J("div", Hp, [
                            J("span", Yp, Z(me || "(No value)"), 1),
                            w(l(Fp), {
                              variant: "secondary",
                              class: "ml-2"
                            }, {
                              default: h(() => [
                                pe(Z(M.length), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ], 8, Gp)
                    ], 8, zp),
                    x.value[String(me)] !== !1 ? (g(!0), V(he, { key: 0 }, Ve(M, (j) => (g(), A(_r, {
                      key: j.id,
                      item: j
                    }, as({ _: 2 }, [
                      Ve(B.$slots, (ft, Le) => ({
                        name: Le,
                        fn: h((He) => [
                          Le !== "group-header" ? L(B.$slots, Le, G({
                            key: 0,
                            ref_for: !0
                          }, He)) : ne("", !0)
                        ])
                      }))
                    ]), 1032, ["item"]))), 128)) : ne("", !0)
                  ], 64))), 128)) : (g(), A(dr, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(fr, {
        page: i.value,
        "onUpdate:page": X[2] || (X[2] = (M) => i.value = M),
        "items-per-page": r.value,
        "onUpdate:itemsPerPage": X[3] || (X[3] = (M) => r.value = M),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((M) => [
          L(B.$slots, "bulk", Mt(Jt(M)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
});
function gn(e, t, a, n) {
  const o = n || (a ? Rc(a, []) : se([])), s = U(
    () => Object.fromEntries(o.value.map((p) => [p, !0]))
  ), r = (p) => o.value = hu(o.value, p), i = U(
    () => o.value.length > 0 ? o.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function c() {
    o.value = [];
  }
  function u() {
    o.value = e.value.map((p) => p[t]);
  }
  return {
    state: o,
    stateMap: s,
    toggle: r,
    allToggledState: i,
    toggleAll: () => i.value === !1 || i.value === "indeterminate" ? u() : c(),
    clear: c
  };
}
const Kp = ["datetime", "title"], yg = /* @__PURE__ */ O({
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
      return u && Object.entries(u).forEach(([p, f]) => {
        v = v.replace(`{${p}}`, String(f));
      }), v;
    }
    const o = U(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ yc(o, t.format, {
      locales: t.locale
    }), r = U(() => {
      if (!t.relative)
        return null;
      const u = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), v = Math.floor(u / 1e3), p = Math.floor(v / 60), f = Math.floor(p / 60), C = Math.floor(f / 24);
      return C > 0 ? n("date.daysAgo", { count: C }) : f > 0 ? n("date.hoursAgo", { count: f }) : p > 0 ? n("date.minutesAgo", { count: p }) : n("date.justNow");
    }), i = U(() => t.relative ? r.value : s.value);
    return (c, u) => (g(), V("time", {
      datetime: o.value.toISOString(),
      title: t.relative ? l(s) : void 0,
      class: "whitespace-nowrap"
    }, Z(i.value), 9, Kp));
  }
}), Xp = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, qp = { class: "text-muted-foreground" }, Jp = { class: "font-semibold" }, Zp = {
  key: 1,
  class: "text-muted-foreground"
}, Yo = /* @__PURE__ */ O({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    const t = je();
    return (a, n) => (g(), V("div", Xp, [
      e.value?.length ? (g(!0), V(he, { key: 0 }, Ve(e.value, (o, s) => (g(), V("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        J("span", qp, " ≥" + Z(`${o.from}:`), 1),
        n[0] || (n[0] = pe()),
        J("span", Jp, Z(o.value), 1)
      ]))), 128)) : (g(), V("span", Zp, Z(l(t)("common.novalue", "No value")), 1))
    ]));
  }
}), Kt = _t([]), Qp = U(() => ia(Kt.value, (e) => e.key)), Un = se({});
function wr(e) {
  const t = Kt.value.findIndex((a) => a.key === e);
  t !== -1 && Kt.value.splice(t, 1), As.remove(e);
}
const Er = (e) => {
  Un.value[e] = !1, Qp.value[e]?.onClose?.(), setTimeout(() => wr(e), 600);
}, em = (e) => (e.key = e.key ?? `${Math.random()}`, Kt.value.push(e), ns(Kt), Un.value[e.key] = !0, As.add(() => (Er(e.key), !0), e.key), e.key), tm = { close: Er, visible: Un, open: em, instances: Kt, removeInstance: wr }, xr = () => tm, wg = /* @__PURE__ */ O({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: a, instances: n } = xr();
    return (o, s) => (g(!0), V(he, null, Ve(l(n), (r) => (g(), A(qe(r.component), G({
      key: r.key,
      open: l(a)[r.key]
    }, { ref_for: !0 }, r.componentProps || {}, {
      "onUpdate:open": (i) => !i && l(t)(r.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), am = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, nm = /* @__PURE__ */ O({
  __name: "EmptyMini",
  setup(e) {
    const t = je();
    return (a, n) => (g(), V("div", am, [
      w(l(cs), { size: 16 }),
      J("span", null, [
        L(a.$slots, "default", {}, () => [
          pe(Z(l(t)("common.noValues", "No values")), 1)
        ])
      ])
    ]));
  }
}), om = { class: "flex-1" }, sm = { class: "flex gap-1 items-center" }, rm = {
  key: 0,
  class: "flex-1"
}, lm = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, im = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ Oe({
    placeholder: {},
    addItemButtonLabel: {},
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
    const t = e, a = ve(e, "modelValue"), n = je(), o = se(""), { startsWith: s } = El({ sensitivity: "base" }), r = U(() => ye(t.options).filter((v) => s(v.label, o.value))), i = U(() => !!ye(t.options).length), c = U(() => t.placeholder ?? n("input.filter.placeholder", "Filter..")), u = U(() => t.addItemButtonLabel ?? n("common.addItem", "Add Item"));
    return (v, p) => (g(), V(he, null, [
      w(l(xl), {
        modelValue: a.value,
        "onUpdate:modelValue": p[1] || (p[1] = (f) => a.value = f),
        multiple: e.multiple,
        disabled: t.disabled
      }, {
        default: h(() => [
          w(l(kl), {
            modelValue: o.value,
            "onUpdate:modelValue": p[0] || (p[0] = (f) => o.value = f),
            autofocus: "",
            disabled: !i.value || t.disabled,
            placeholder: c.value,
            class: te(l(z)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          r.value.length ? ne("", !0) : (g(), A(nm, { key: 0 })),
          w(l(Cl), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: h(() => [
              (g(!0), V(he, null, Ve(r.value, (f) => (g(), A(l(Sl), {
                key: String(f.value),
                value: f.value,
                disabled: t.disabled,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: h(() => [
                  J("div", om, [
                    L(v.$slots, "option", { option: f }, () => [
                      pe(Z(f.label), 1)
                    ])
                  ]),
                  w(l(Ol), null, {
                    default: h(() => [
                      w(l(Ba), { size: 12 })
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
      J("div", sm, [
        t.showAddItemButton ? (g(), V("div", rm, [
          w(ze, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            disabled: t.disabled,
            onClick: p[2] || (p[2] = (f) => v.$emit("onAddItem"))
          }, {
            default: h(() => [
              w(l(kn)),
              pe(" " + Z(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : ne("", !0),
        i.value && t.multiple ? (g(), V("div", lm, Z(l(n)("common.elementCountSelected", "{count} selected").replace("{count}", String(a.value.length))), 1)) : ne("", !0)
      ])
    ], 64));
  }
}), cm = /* @__PURE__ */ O({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Te(e, t);
    return (s, r) => (g(), A(l(Tl), G({ "data-slot": "alert-dialog" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), um = /* @__PURE__ */ O({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(Nl), G(l(a), {
      class: l(z)(l(xt)(), t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dm = /* @__PURE__ */ O({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(Al), G(l(a), {
      class: l(z)(
        l(xt)({ variant: "outline" }),
        "sm:mt-0",
        t.class
      )
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fm = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(Pl), null, {
      default: h(() => [
        w(l(Dl), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        w(l(Ll), G({ "data-slot": "alert-dialog-content" }, l(s), {
          class: l(z)(
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
}), pm = /* @__PURE__ */ O({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l($l), G({ "data-slot": "alert-dialog-description" }, l(a), {
      class: l(z)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mm = /* @__PURE__ */ O({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "alert-dialog-footer",
      class: te(
        l(z)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), gm = /* @__PURE__ */ O({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "alert-dialog-header",
      class: te(l(z)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), vm = /* @__PURE__ */ O({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(Il), G({ "data-slot": "alert-dialog-title" }, l(a), {
      class: l(z)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hm = /* @__PURE__ */ O({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ Oe({
    description: {},
    title: {},
    okButtonText: {},
    cancelButtonText: {},
    onOk: { type: Function }
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = e, a = ve(e, "open"), n = se(!1), o = se();
    async function s() {
      n.value = !0;
      const c = t.onOk ? await t.onOk().catch((u) => u) : void 0;
      c === !0 || c === void 0 ? close() : jn(c) && (o.value = c), n.value = !1;
    }
    function r() {
      a.value = !1;
    }
    const { t: i } = St();
    return (c, u) => (g(), A(l(cm), {
      open: a.value,
      "onUpdate:open": u[2] || (u[2] = (v) => a.value = v)
    }, {
      default: h(() => [
        w(l(fm), null, {
          default: h(() => [
            w(l(gm), null, {
              default: h(() => [
                w(l(vm), null, {
                  default: h(() => [
                    pe(Z(e.title || l(i)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                w(l(pm), null, {
                  default: h(() => [
                    pe(Z(e.description || l(i)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(mm), null, {
              default: h(() => [
                w(l(dm), {
                  disabled: n.value,
                  onClick: u[0] || (u[0] = (v) => r())
                }, {
                  default: h(() => [
                    pe(Z(l(i)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                w(l(um), {
                  loading: n.value,
                  onClick: u[1] || (u[1] = (v) => s())
                }, {
                  default: h(() => [
                    pe(Z(l(i)("common.continue")), 1)
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
}), bm = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Te(e, t);
    return (s, r) => (g(), A(l(hn), G({ "data-slot": "dialog" }, l(o)), {
      default: h((i) => [
        L(s.$slots, "default", Mt(Jt(i)))
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Je(a);
    return (o, s) => (g(), A(l(wn), G({ "data-slot": "dialog-description" }, l(n), {
      class: l(z)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ym = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "dialog-header",
      class: te(l(z)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), wm = /* @__PURE__ */ O({
  inheritAttrs: !1,
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(_n), null, {
      default: h(() => [
        w(l(bn), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            w(l(yn), G({
              class: l(z)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...r.$attrs, ...l(s) }, {
              onPointerDownOutside: i[0] || (i[0] = (c) => {
                const u = c.detail.originalEvent, v = u.target;
                (u.offsetX > v.clientWidth || u.offsetY > v.clientHeight) && c.preventDefault();
              })
            }), {
              default: h(() => [
                L(r.$slots, "default"),
                w(l(ss), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: h(() => [
                    w(l(ha), { class: "w-4 h-4" }),
                    i[1] || (i[1] = J("span", { class: "sr-only" }, "Close", -1))
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
}), Em = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class"), n = Je(a);
    return (o, s) => (g(), A(l(En), G({ "data-slot": "dialog-title" }, l(n), {
      class: l(z)("text-lg leading-none font-semibold", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xm = ["innerHTML"], kr = /* @__PURE__ */ O({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ Oe({
    description: {},
    title: { default: "Are you absolutely sure?" },
    okButtonText: {},
    cancelButtonText: {},
    onOk: { type: Function, default: async () => !0 }
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ve(e, "open");
    return (a, n) => (g(), A(l(bm), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (o) => t.value = o)
    }, {
      default: h(() => [
        w(l(wm), { class: "!max-w-max min-w-[435px]" }, {
          default: h(() => [
            w(l(ym), null, {
              default: h(() => [
                w(l(Em), null, {
                  default: h(() => [
                    J("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, xm)
                  ]),
                  _: 1
                }),
                e.description ? (g(), A(l(_m), { key: 0 }, {
                  default: h(() => [
                    pe(Z(e.description), 1)
                  ]),
                  _: 1
                })) : ne("", !0)
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
const km = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Cm = (e) => typeof e < "u";
function Sm(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ko(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: u,
    deep: v = !1,
    defaultValue: p,
    shouldEmit: f
  } = n, C = Xt(), $ = a || C?.emit || ((o = C?.$emit) == null ? void 0 : o.bind(C)) || ((r = (s = C?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(C?.proxy));
  let k = u;
  t || (t = "modelValue"), k = k || `update:${t.toString()}`;
  const D = (E) => i ? typeof i == "function" ? i(E) : Sm(E) : E, _ = () => Cm(e[t]) ? D(e[t]) : p, b = (E) => {
    f ? f(E) && $(k, E) : $(k, E);
  };
  if (c) {
    const E = _(), y = se(E);
    let T = !1;
    return Re(
      () => e[t],
      (P) => {
        T || (T = !0, y.value = D(P), ma(() => T = !1));
      }
    ), Re(
      y,
      (P) => {
        !T && (P !== e[t] || v) && b(P);
      },
      { deep: v }
    ), y;
  } else
    return U({
      get() {
        return _();
      },
      set(E) {
        b(E);
      }
    });
}
const [zn, Om] = xn("DrawerRoot"), Cr = /* @__PURE__ */ new WeakMap();
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
  }), !a && Cr.set(e, n);
}
function Tm(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const a = Cr.get(e);
  a && Object.entries(a).forEach(([n, o]) => {
    e.style[n] = o;
  });
}
function Ta(e, t) {
  const a = window.getComputedStyle(e), n = a.transform || a.webkitTransform || a.mozTransform;
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Ne(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Ne(t) ? 5 : 4]) : null);
}
function Nm(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ne(e) {
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
function Qa(e, t) {
  if (!e)
    return () => {
    };
  const a = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = a;
  };
}
function Am(...e) {
  return (...t) => {
    for (const a of e)
      typeof a == "function" && a(...t);
  };
}
const xe = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Sr = 0.4, Pm = 0.25, Dm = 100, Or = 8, Na = 16, Tr = 26, Xo = "vaul-dragging";
function Lm({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: a,
  overlayRef: n,
  fadeFromIndex: o,
  onSnapPointChange: s,
  direction: r
}) {
  const i = se(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function c() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  qt(() => {
    typeof window < "u" && window.addEventListener("resize", c);
  }), Rr(() => {
    typeof window < "u" && window.removeEventListener("resize", c);
  });
  const u = U(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), v = U(
    () => t.value && t.value.length > 0 && (o?.value || o?.value === 0) && !Number.isNaN(o?.value) && t.value[o?.value ?? -1] === e.value || !t.value
  ), p = U(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.findIndex((E) => E === e.value)) ?? null;
    }
  ), f = U(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.map((E) => {
        const y = typeof E == "string";
        let T = 0;
        if (y && (T = Number.parseInt(E, 10)), Ne(r.value)) {
          const x = y ? T : i.value ? E * i.value.innerHeight : 0;
          return i.value ? r.value === "bottom" ? i.value.innerHeight - x : -i.value.innerHeight + x : x;
        }
        const P = y ? T : i.value ? E * i.value.innerWidth : 0;
        return i.value ? r.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), C = U(
    () => {
      var b;
      return p.value !== null ? (b = f.value) == null ? void 0 : b[p.value] : null;
    }
  ), $ = (b) => {
    var E, y, T, P;
    const x = ((E = f.value) == null ? void 0 : E.findIndex((I) => I === b)) ?? null;
    ma(() => {
      var I;
      s(x, f.value), $e((I = a.value) == null ? void 0 : I.$el, {
        transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
        transform: Ne(r.value) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
      });
    }), f.value && x !== f.value.length - 1 && x !== o?.value ? $e((y = n.value) == null ? void 0 : y.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      opacity: "0"
    }) : $e((T = n.value) == null ? void 0 : T.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      opacity: "1"
    }), e.value = x !== null ? ((P = t.value) == null ? void 0 : P[x]) ?? null : null;
  };
  Re(
    [e, f, t],
    () => {
      var b;
      if (e.value) {
        const E = ((b = t.value) == null ? void 0 : b.findIndex((y) => y === e.value)) ?? -1;
        f.value && E !== -1 && typeof f.value[E] == "number" && $(f.value[E]);
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
    dismissible: T
  }) {
    var P, x, I;
    if (o.value === void 0)
      return;
    const Q = r.value === "bottom" || r.value === "right" ? (C.value ?? 0) - b : (C.value ?? 0) + b, q = p.value === o.value - 1, le = p.value === 0, H = b > 0;
    if (q && $e((P = n.value) == null ? void 0 : P.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`
    }), y > 2 && !H) {
      T ? E() : $(f.value[0]);
      return;
    }
    if (y > 2 && H && f && t.value) {
      $(f.value[t.value.length - 1]);
      return;
    }
    const Ee = (x = f.value) == null ? void 0 : x.reduce((X, M) => typeof X != "number" || typeof M != "number" ? X : Math.abs(M - Q) < Math.abs(X - Q) ? M : X), B = Ne(r.value) ? window.innerHeight : window.innerWidth;
    if (y > Sr && Math.abs(b) < B * 0.4) {
      const X = H ? 1 : -1;
      if (X > 0 && u) {
        $(f.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (le && X < 0 && T && E(), p.value === null)
        return;
      $(f.value[p.value + X]);
      return;
    }
    $(Ee);
  }
  function D({ draggedDistance: b }) {
    var E;
    if (C.value === null)
      return;
    const y = r.value === "bottom" || r.value === "right" ? C.value - b : C.value + b;
    (r.value === "bottom" || r.value === "right") && y < f.value[f.value.length - 1] || (r.value === "top" || r.value === "left") && y > f.value[f.value.length - 1] || $e((E = a.value) == null ? void 0 : E.$el, {
      transform: Ne(r.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    });
  }
  function _(b, E) {
    if (!t.value || typeof p.value != "number" || !f.value || o.value === void 0)
      return null;
    const y = p.value === o.value - 1;
    if (p.value >= o.value && E)
      return 0;
    if (y && !E)
      return 1;
    if (!v.value && !y)
      return null;
    const T = y ? p.value + 1 : p.value - 1, P = y ? f.value[T] - f.value[T - 1] : f.value[T + 1] - f.value[T], x = b / Math.abs(P);
    return y ? 1 - x : x;
  }
  return {
    isLastSnapPoint: u,
    shouldFade: v,
    getPercentageDragged: _,
    activeSnapPointIndex: p,
    onRelease: k,
    onDrag: D,
    snapPointsOffset: f
  };
}
function qo() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let la = null;
function $m(e) {
  const { isOpen: t, modal: a, nested: n, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: r } = e, i = se(typeof window < "u" ? window.location.href : ""), c = se(0);
  function u() {
    if (qo() && la === null && t.value && !r.value) {
      la = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-c.value}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const C = f - window.innerHeight;
          C && c.value >= f && (document.body.style.top = `-${c.value + C}px`);
        });
      }, 300);
    }
  }
  function v() {
    if (qo() && la !== null && !r.value) {
      const p = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, la), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, p);
      }), la = null;
    }
  }
  return qt(() => {
    function p() {
      c.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), vn(() => {
      window.removeEventListener("scroll", p);
    });
  }), Re([t, o, i], () => {
    n.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || u(), a.value || setTimeout(() => {
      v();
    }, 500)) : v());
  }), { restorePositionSetting: v };
}
function Im(e, t) {
  return e && e.value ? e : t;
}
function Mm(e) {
  const {
    emitDrag: t,
    emitRelease: a,
    emitClose: n,
    emitOpenChange: o,
    open: s,
    dismissible: r,
    nested: i,
    modal: c,
    shouldScaleBackground: u,
    setBackgroundColorOnScale: v,
    scrollLockTimeout: p,
    closeThreshold: f,
    activeSnapPoint: C,
    fadeFromIndex: $,
    direction: k,
    noBodyStyles: D,
    handleOnly: _,
    preventScrollRestoration: b
  } = e, E = se(s.value ?? !1), y = se(!1), T = se(!1), P = se(!1), x = se(null), I = se(null), Q = se(null), q = se(null), le = se(null), H = se(!1), Ee = se(null), B = se(0), X = se(!1);
  se(0);
  const M = se(null);
  se(0);
  const me = U(() => {
    var d;
    return ((d = M.value) == null ? void 0 : d.$el.getBoundingClientRect().height) || 0;
  }), j = Im(
    e.snapPoints,
    se(void 0)
  ), ft = U(() => {
    var d;
    return j && (((d = j.value) == null ? void 0 : d.length) ?? 0) > 0;
  }), Le = se(null), {
    activeSnapPointIndex: He,
    onRelease: pt,
    snapPointsOffset: ke,
    onDrag: Pe,
    shouldFade: Ze,
    getPercentageDragged: Ot
  } = Lm({
    snapPoints: j,
    activeSnapPoint: C,
    drawerRef: M,
    fadeFromIndex: $,
    overlayRef: x,
    onSnapPointChange: be,
    direction: k
  });
  function be(d, m) {
    j.value && d === m.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  $m({
    isOpen: E,
    modal: c,
    nested: i,
    hasBeenOpened: y,
    noBodyStyles: D,
    preventScrollRestoration: b
  });
  function Ke() {
    return (window.innerWidth - Tr) / window.innerWidth;
  }
  function Qe(d, m) {
    var N;
    if (!d)
      return !1;
    let F = d;
    const oe = (N = window.getSelection()) == null ? void 0 : N.toString(), ie = M.value ? Ta(M.value.$el, k.value) : null, ae = /* @__PURE__ */ new Date();
    if (F.hasAttribute("data-vaul-no-drag") || F.closest("[data-vaul-no-drag]"))
      return !1;
    if (k.value === "right" || k.value === "left")
      return !0;
    if (I.value && ae.getTime() - I.value.getTime() < 500)
      return !1;
    if (ie !== null && (k.value === "bottom" ? ie > 0 : ie < 0))
      return !0;
    if (oe && oe.length > 0)
      return !1;
    if (le.value && ae.getTime() - le.value.getTime() < p.value && ie === 0 || m)
      return le.value = ae, !1;
    for (; F; ) {
      if (F.scrollHeight > F.clientHeight) {
        if (F.scrollTop !== 0)
          return le.value = /* @__PURE__ */ new Date(), !1;
        if (F.getAttribute("role") === "dialog")
          return !0;
      }
      F = F.parentNode;
    }
    return !0;
  }
  function et(d) {
    !r.value && !j.value || M.value && !M.value.$el.contains(d.target) || (T.value = !0, Q.value = /* @__PURE__ */ new Date(), d.target.setPointerCapture(d.pointerId), B.value = Ne(k.value) ? d.clientY : d.clientX);
  }
  function mt(d) {
    var m, N, F, oe, ie, ae;
    if (M.value && T.value) {
      const S = k.value === "bottom" || k.value === "right" ? 1 : -1, R = (B.value - (Ne(k.value) ? d.clientY : d.clientX)) * S, ce = R > 0, _e = j.value && !r.value && !ce;
      if (_e && He.value === 0)
        return;
      const nt = Math.abs(R), At = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let We = nt / me.value;
      const rt = Ot(nt, ce);
      if (rt !== null && (We = rt), _e && We >= 1 || !H.value && !Qe(d.target, ce))
        return;
      if ((m = M?.value) == null || m.$el.classList.add(Xo), H.value = !0, $e((N = M.value) == null ? void 0 : N.$el, {
        transition: "none"
      }), $e((F = x.value) == null ? void 0 : F.$el, {
        transition: "none"
      }), j.value && Pe({ draggedDistance: R }), ce && !j.value) {
        const lt = Nm(R), _a = Math.min(lt * -1, 0) * S;
        $e((oe = M.value) == null ? void 0 : oe.$el, {
          transform: Ne(k.value) ? `translate3d(0, ${_a}px, 0)` : `translate3d(${_a}px, 0, 0)`
        });
        return;
      }
      const ja = 1 - We;
      if ((Ze.value || $.value && He.value === $.value - 1) && (t(We), $e(
        (ie = x.value) == null ? void 0 : ie.$el,
        {
          opacity: `${ja}`,
          transition: "none"
        },
        !0
      )), At && x.value && u.value) {
        const lt = Math.min(Ke() + We * (1 - Ke()), 1), _a = 8 - We * 8, Wn = Math.max(0, 14 - We * 14);
        $e(
          At,
          {
            borderRadius: `${_a}px`,
            transform: Ne(k.value) ? `scale(${lt}) translate3d(0, ${Wn}px, 0)` : `scale(${lt}) translate3d(${Wn}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!j.value) {
        const lt = nt * S;
        $e((ae = M.value) == null ? void 0 : ae.$el, {
          transform: Ne(k.value) ? `translate3d(0, ${lt}px, 0)` : `translate3d(${lt}px, 0, 0)`
        });
      }
    }
  }
  function tt() {
    var d;
    if (!M.value)
      return;
    const m = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), N = Ta(M.value.$el, k.value);
    $e(M.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`
    }), $e((d = x.value) == null ? void 0 : d.$el, {
      transition: `opacity ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      opacity: "1"
    }), u.value && N && N > 0 && E.value && $e(
      m,
      {
        borderRadius: `${Or}px`,
        overflow: "hidden",
        ...Ne(k.value) ? {
          transform: `scale(${Ke()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Ke()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${xe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${xe.EASE.join(",")})`
      },
      !0
    );
  }
  function at(d) {
    M.value && (n(), d || (E.value = !1), window.setTimeout(() => {
      j.value && (C.value = j.value[0]);
    }, xe.DURATION * 1e3));
  }
  pa(() => {
    if (!E.value && u.value && km) {
      const d = setTimeout(() => {
        Tm(document.body);
      }, 200);
      return () => clearTimeout(d);
    }
  }), Re(s, () => {
    E.value = s.value, s.value || at();
  });
  function Tt(d) {
    if (!T.value || !M.value)
      return;
    M.value.$el.classList.remove(Xo), H.value = !1, T.value = !1, q.value = /* @__PURE__ */ new Date();
    const m = Ta(M.value.$el, k.value);
    if (!Qe(d.target, !1) || !m || Number.isNaN(m) || Q.value === null)
      return;
    const N = q.value.getTime() - Q.value.getTime(), F = B.value - (Ne(k.value) ? d.clientY : d.clientX), oe = Math.abs(F) / N;
    if (oe > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), j.value) {
      const ae = k.value === "bottom" || k.value === "right" ? 1 : -1;
      pt({
        draggedDistance: F * ae,
        closeDrawer: at,
        velocity: oe,
        dismissible: r.value
      }), a(!0);
      return;
    }
    if (k.value === "bottom" || k.value === "right" ? F > 0 : F < 0) {
      tt(), a(!0);
      return;
    }
    if (oe > Sr) {
      at(), a(!1);
      return;
    }
    const ie = Math.min(
      M.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (m >= ie * f.value) {
      at(), a(!1);
      return;
    }
    a(!0), tt();
  }
  Re(E, (d) => {
    d && (I.value = /* @__PURE__ */ new Date()), o(d);
  }, { immediate: !0 });
  function gt(d) {
    var m, N;
    const F = d ? (window.innerWidth - Na) / window.innerWidth : 1, oe = d ? -16 : 0;
    Ee.value && window.clearTimeout(Ee.value), $e((m = M.value) == null ? void 0 : m.$el, {
      transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      transform: `scale(${F}) translate3d(0, ${oe}px, 0)`
    }), !d && (N = M.value) != null && N.$el && (Ee.value = window.setTimeout(() => {
      var ie, ae;
      const S = Ta((ie = M.value) == null ? void 0 : ie.$el, k.value);
      $e((ae = M.value) == null ? void 0 : ae.$el, {
        transition: "none",
        transform: Ne(k.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
      });
    }, 500));
  }
  function Nt(d) {
    var m;
    if (d < 0)
      return;
    const N = Ne(k.value) ? window.innerHeight : window.innerWidth, F = (N - Na) / N, oe = F + d * (1 - F), ie = -16 + d * Na;
    $e((m = M.value) == null ? void 0 : m.$el, {
      transform: Ne(k.value) ? `scale(${oe}) translate3d(0, ${ie}px, 0)` : `scale(${oe}) translate3d(${ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function na(d) {
    var m;
    const N = Ne(k.value) ? window.innerHeight : window.innerWidth, F = d ? (N - Na) / N : 1, oe = d ? -16 : 0;
    d && $e((m = M.value) == null ? void 0 : m.$el, {
      transition: `transform ${xe.DURATION}s cubic-bezier(${xe.EASE.join(",")})`,
      transform: Ne(k.value) ? `scale(${F}) translate3d(0, ${oe}px, 0)` : `scale(${F}) translate3d(${oe}px, 0, 0)`
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
    isDragging: T,
    dragStartTime: Q,
    isAllowedToDrag: H,
    snapPoints: j,
    activeSnapPoint: C,
    hasSnapPoints: ft,
    pointerStart: B,
    dismissible: r,
    snapPointsOffset: ke,
    direction: k,
    shouldFade: Ze,
    fadeFromIndex: $,
    shouldScaleBackground: u,
    setBackgroundColorOnScale: v,
    onPress: et,
    onDrag: mt,
    onRelease: Tt,
    closeDrawer: at,
    onNestedDrag: Nt,
    onNestedRelease: na,
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
const Rm = /* @__PURE__ */ O({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: Pm },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: Dm },
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
    Mr();
    const s = U(() => n.fadeFromIndex ?? (n.snapPoints && n.snapPoints.length - 1)), r = Ko(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = Ko(n, "activeSnapPoint", o, {
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
    }, { closeDrawer: u, hasBeenOpened: v, modal: p, isOpen: f } = Om(
      Mm({
        ...c,
        ...tn(n),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: r
      })
    );
    function C($) {
      if (r.value !== void 0) {
        c.emitOpenChange($);
        return;
      }
      f.value = $, $ ? v.value = !0 : u();
    }
    return t({
      open: f
    }), ($, k) => (g(), A(l(hn), {
      open: l(f),
      modal: l(p),
      "onUpdate:open": C
    }, {
      default: h(() => [
        L($.$slots, "default", { open: l(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Bm = /* @__PURE__ */ O({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: a, isOpen: n, shouldFade: o } = zn();
    return (s, r) => (g(), A(l(bn), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(n) && l(a) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(n) && l(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Vm = () => () => {
};
function Fm() {
  const { direction: e, isOpen: t, shouldScaleBackground: a, setBackgroundColorOnScale: n, noBodyStyles: o } = zn(), s = se(null), r = se(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Tr) / window.innerWidth;
  }
  pa((c) => {
    if (t.value && a.value) {
      s.value && clearTimeout(s.value);
      const u = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!u)
        return;
      Am(
        n.value && !o.value ? Qa(document.body, { background: "black" }) : Vm,
        Qa(u, {
          transformOrigin: Ne(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${xe.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${xe.EASE.join(",")})`
        })
      );
      const v = Qa(u, {
        borderRadius: `${Or}px`,
        overflow: "hidden",
        ...Ne(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      c(() => {
        v(), s.value = window.setTimeout(() => {
          r.value ? document.body.style.background = r.value : document.body.style.removeProperty("background");
        }, xe.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Um = /* @__PURE__ */ O({
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
      modal: u,
      emitOpenChange: v,
      dismissible: p,
      keyboardIsOpen: f,
      closeDrawer: C,
      direction: $,
      handleOnly: k
    } = zn();
    Fm();
    const D = se(!1), _ = U(() => n.value && n.value.length > 0 ? `${n.value[0]}px` : "0");
    function b(T) {
      if (!u.value || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      f.value && (f.value = !1), p.value ? v(!1) : T.preventDefault();
    }
    function E(T) {
      k.value || r(T);
    }
    function y(T) {
      k.value || i(T);
    }
    return pa(() => {
      o.value && window.requestAnimationFrame(() => {
        D.value = !0;
      });
    }), (T, P) => (g(), A(l(yn), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l($),
      "data-vaul-delayed-snap-points": D.value ? "true" : "false",
      "data-vaul-snap-points": l(a) && l(o) ? "true" : "false",
      style: es({ "--snap-point-height": _.value }),
      onPointerdown: E,
      onPointermove: y,
      onPointerup: l(c),
      onPointerDownOutside: b,
      onOpenAutoFocus: P[0] || (P[0] = os(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (x) => {
        l(p) || x.preventDefault();
      })
    }, {
      default: h(() => [
        L(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), zm = /* @__PURE__ */ O({
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
    const o = Te(e, t);
    return (s, r) => (g(), A(l(Rm), G({ "data-slot": "drawer" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ O({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(Bm), G({ "data-slot": "drawer-overlay" }, l(a), {
      class: l(z)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), Wm = /* @__PURE__ */ O({
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
    const a = e, o = Te(a, t);
    return (s, r) => (g(), A(l(_n), null, {
      default: h(() => [
        w(jm),
        w(l(Um), G({ "data-slot": "drawer-content" }, l(o), {
          class: l(z)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            a.class
          )
        }), {
          default: h(() => [
            r[0] || (r[0] = J("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            L(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Gm = /* @__PURE__ */ O({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(wn), G({ "data-slot": "drawer-description" }, l(a), {
      class: l(z)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hm = /* @__PURE__ */ O({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "drawer-header",
      class: te(l(z)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Ym = /* @__PURE__ */ O({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ue(t, "class");
    return (n, o) => (g(), A(l(En), G({ "data-slot": "drawer-title" }, l(a), {
      class: l(z)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Km = ["innerHTML"], Xm = { class: "px-4 flex-1 overflow-auto select-text" }, qm = /* @__PURE__ */ O({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ Oe({
    description: {},
    title: {},
    okButtonText: {},
    cancelButtonText: {},
    onOk: { type: Function }
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ve(e, "open");
    return (a, n) => (g(), A(l(zm), {
      open: t.value,
      "onUpdate:open": n[1] || (n[1] = (o) => t.value = o),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: h(() => [
        w(l(Wm), { class: "!max-w-[800px]" }, {
          default: h(() => [
            w(l(Hm), { class: "!pb-0" }, {
              default: h(() => [
                w(l(Ym), { class: "flex items-center gap-2" }, {
                  default: h(() => [
                    J("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, Km),
                    w(ze, {
                      variant: "ghost",
                      onClick: n[0] || (n[0] = (o) => t.value = !1)
                    }, {
                      default: h(() => [
                        w(l(ha))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (g(), A(l(Gm), { key: 0 }, {
                  default: h(() => [
                    pe(Z(e.description), 1)
                  ]),
                  _: 1
                })) : ne("", !0)
              ]),
              _: 1
            }),
            J("div", Xm, [
              L(a.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Jm = /* @__PURE__ */ O({
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
    const t = ve(e, "open"), a = se(!1), n = se();
    async function o(s) {
      a.value = !0;
      const r = e.dialogConfig.onOk ? await e.dialogConfig.onOk(s).catch((i) => i) : void 0;
      r === !0 || r === void 0 ? t.value = !1 : jn(r) && (n.value = r), a.value = !1;
    }
    return (s, r) => (g(), A(qe(e.type === "drawer" ? qm : kr), G(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (i) => t.value = i)
    }), {
      default: h(() => [
        (g(), A(qe(e.componentConfig.component), G(e.componentConfig.componentProps, {
          errors: n.value,
          onSubmitSuccess: o
        }), null, 16, ["errors"]))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Zm = { class: "pt-3 flex gap-2 justify-end" }, ba = /* @__PURE__ */ O({
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
    const t = e, a = ve(e, "open"), n = je(), o = se(t.initialValue), s = se(!1), r = U(() => t.dialogConfig.cancelButtonText ?? n("common.cancel", "Cancel")), i = U(() => t.dialogConfig.okButtonText ?? n("common.ok", "Ok"));
    function c() {
      a.value = !1;
    }
    const u = se();
    async function v() {
      s.value = !0;
      const p = t.dialogConfig.onOk ? await t.dialogConfig.onOk(o.value).catch((f) => f) : void 0;
      p === !0 || p === void 0 ? a.value = !1 : jn(p) && (u.value = p), s.value = !1;
    }
    return (p, f) => (g(), A(kr, G(t.dialogConfig, {
      open: a.value,
      "onUpdate:open": f[3] || (f[3] = (C) => a.value = C)
    }), {
      default: h(() => [
        J("form", {
          onSubmit: f[2] || (f[2] = os((C) => v(), ["prevent"]))
        }, [
          (g(), A(qe(t.componentConfig.component), G(t.componentConfig.componentProps, {
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (C) => o.value = C),
            errors: u.value
          }), null, 16, ["modelValue", "errors"])),
          J("div", Zm, [
            w(ze, {
              type: "button",
              variant: "secondary",
              onClick: f[1] || (f[1] = (C) => c())
            }, {
              default: h(() => [
                pe(Z(r.value), 1)
              ]),
              _: 1
            }),
            w(ze, {
              type: "submit",
              disabled: s.value
            }, {
              default: h(() => [
                J("span", null, Z(i.value), 1),
                s.value ? (g(), A(hr, { key: 0 })) : ne("", !0)
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ], 32)
      ]),
      _: 1
    }, 16, ["open"]));
  }
});
function jn(e) {
  return typeof e != "object" || e === null || Array.isArray(e) ? !1 : Object.values(e).every(
    (t) => Array.isArray(t) && t.every((a) => typeof a == "string")
  );
}
const zt = xr();
function Eg(e, t, a = "dialog") {
  return zt.open({
    component: Jm,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: a
    }
  });
}
function xg(e, t = "Achtung", a = "Sind Sie sicher?", n) {
  return zt.open({
    component: hm,
    componentProps: {
      title: t,
      description: a,
      onOk: e
    },
    onClose: n
  });
}
function kg({ dialogConfig: e, initialValue: t, onOk: a, component: n, componentProps: o, onClose: s }) {
  return zt.open({
    component: ba,
    componentProps: {
      componentConfig: { component: n, componentProps: o },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: s
  });
}
function Qm(e, t, a, n, o, s) {
  return zt.open({
    component: ba,
    componentProps: {
      componentConfig: { component: Vn, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Cg(e, t, a, n, o, s) {
  return zt.open({
    component: ba,
    componentProps: {
      componentConfig: { component: im, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Sg(e, t, a, n, o) {
  return zt.open({
    component: ba,
    componentProps: {
      componentConfig: { component: Bt, componentProps: { type: "text", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function Og(e, t, a, n, o) {
  return zt.open({
    component: ba,
    componentProps: {
      componentConfig: { component: Bt, componentProps: { type: "number", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function Tg(e, t, a, n, o, s) {
  const r = [
    { value: !0, label: n?.trueLabel || "Yes" },
    { value: !1, label: n?.falseLabel || "No" }
  ];
  return Qm(
    e,
    r,
    t,
    a,
    { ...o, multiple: !1 },
    s
  );
}
const Ng = /* @__PURE__ */ O({
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
    const t = e, a = ve(e, "modelValue"), n = je(), o = U(() => [
      { value: !0, label: n("common.true", "True") },
      { value: !1, label: n("common.false", "False") }
    ]);
    return (s, r) => (g(), A(Vn, {
      modelValue: a.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => a.value = i),
      class: te(t.class),
      options: o.value
    }, null, 8, ["modelValue", "class", "options"]));
  }
}), eg = /* @__PURE__ */ O({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Te(e, t);
    return (s, r) => (g(), A(l(Ml), G({ "data-slot": "popover" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tg = /* @__PURE__ */ O({
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
    const a = e, n = t, o = ue(a, "class"), s = Te(o, n);
    return (r, i) => (g(), A(l(Rl), null, {
      default: h(() => [
        w(l(Bl), G({ "data-slot": "popover-content" }, { ...l(s), ...r.$attrs }, {
          class: l(z)(
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
}), ag = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(Vl), G({ "data-slot": "popover-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ng = { key: 0 }, og = { class: "text-xs" }, sg = { class: "text-xs" }, rg = { class: "flex gap-2" }, Ag = /* @__PURE__ */ O({
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
    const t = e, a = je(), n = (c) => typeof c == "string", o = ve(e, "modelValue"), s = () => o.value?.push({ from: 0, value: 0 }), r = (c) => o.value.splice(c, 1), i = () => o.value = [];
    return (c, u) => (g(), A(l(eg), null, {
      default: h(() => [
        w(l(ag), { "as-child": "" }, {
          default: h(() => [
            w(Ns, {
              class: te(t.class),
              variant: "outline"
            }, {
              default: h(() => [
                o.value.length ? (g(), A(Yo, {
                  key: 0,
                  value: o.value
                }, null, 8, ["value"])) : e.placeholder ? (g(), V(he, { key: 1 }, [
                  n(e.placeholder) ? (g(), V("span", ng)) : (g(), A(Yo, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : ne("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        w(l(tg), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: h(() => [
            (g(!0), V(he, null, Ve(o.value, (v, p) => (g(), V("div", {
              key: p,
              class: "flex gap-2 items-center"
            }, [
              J("label", og, Z(l(a)("common.from", "From")) + ":", 1),
              w(Bt, {
                modelValue: o.value[p].from,
                "onUpdate:modelValue": (f) => o.value[p].from = f,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              J("label", sg, Z(l(a)("common.value", "Value")) + ":", 1),
              w(Bt, {
                modelValue: o.value[p].value,
                "onUpdate:modelValue": (f) => o.value[p].value = f,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              w(ze, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (f) => r(p)
              }, {
                default: h(() => [
                  w(l(ha))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            J("div", rg, [
              w(ze, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: u[0] || (u[0] = (v) => s())
              }, {
                default: h(() => [
                  w(l(kn)),
                  pe(" " + Z(l(a)("common.add", "Add")), 1)
                ]),
                _: 1
              }),
              o.value.length > 0 ? (g(), A(ze, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: u[1] || (u[1] = (v) => i())
              }, {
                default: h(() => [
                  w(l(Zl)),
                  pe(" " + Z(l(a)("common.clear", "Clear All")), 1)
                ]),
                _: 1
              })) : ne("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Pg = /* @__PURE__ */ O({
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
    const t = e, a = ve(e, "modelValue"), n = je(), o = U(() => t.placeholder?.[0] ?? n("input.range.min", "Min")), s = U(() => t.placeholder?.[1] ?? n("input.range.max", "Max"));
    function r(i, c) {
      a.value || (a.value = [void 0, void 0]), a.value[i] = c, ns(a);
    }
    return (i, c) => (g(), V("div", {
      class: te(l(z)("flex items-center gap-0", t.class))
    }, [
      w(l(Bt), {
        "model-value": a.value?.[0],
        placeholder: o.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": c[0] || (c[0] = (u) => r(0, u))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      w(l(Bt), {
        "model-value": a.value?.[1],
        placeholder: s.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": c[1] || (c[1] = (u) => r(1, u))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), lg = /* @__PURE__ */ O({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("div", {
      "data-slot": "input-group",
      role: "group",
      class: te(l(z)(
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
}), ig = ["data-align"], Jo = /* @__PURE__ */ O({
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
    return (n, o) => (g(), V("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: te(l(z)(l(dg)({ align: t.align }), t.class)),
      onClick: a
    }, [
      L(n.$slots, "default")
    ], 10, ig));
  }
}), cg = /* @__PURE__ */ O({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(ze), {
      "data-size": t.size,
      variant: t.variant,
      class: te(l(z)(l(fg)({ size: t.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), ug = /* @__PURE__ */ O({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), A(l(Bt), {
      "data-slot": "input-group-control",
      class: te(l(z)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), dg = Ut(
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
), fg = Ut(
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
), Dg = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ Oe({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: {}
  }, {
    modelValue: {},
    modelModifiers: {},
    modelSubmit: { default: "" },
    modelSubmitModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["onSubmit", "onClear"], ["update:modelValue", "update:modelSubmit"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = je(), s = U(() => a.placeholder ?? o("input.search.placeholder", "Search...")), r = ve(e, "modelValue"), i = ve(e, "modelSubmit"), c = U(() => !!r.value && r.value.length > 0);
    function u() {
      i.value = r.value || "", n("onSubmit", r.value || "");
    }
    function v() {
      i.value = "", r.value = "", n("onClear", "");
    }
    return (p, f) => (g(), A(l(lg), null, {
      default: h(() => [
        w(l(Jo), { align: "inline-start" }, {
          default: h(() => [
            w(l(ql))
          ]),
          _: 1
        }),
        w(l(ug), G({
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (C) => r.value = C),
          type: "text",
          placeholder: s.value
        }, p.$attrs, {
          onKeydown: Br(u, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        c.value && e.showClearButton ? (g(), A(l(Jo), {
          key: 0,
          align: "inline-end"
        }, {
          default: h(() => [
            w(l(cg), {
              variant: "ghost",
              size: "icon-xs",
              onClick: v
            }, {
              default: h(() => [
                w(l(ha))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ne("", !0)
      ]),
      _: 1
    }));
  }
}), Lg = /* @__PURE__ */ O({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (g(), V("span", {
      class: te(l(z)(l(pg)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), pg = Ut(
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
  vg as AppSidebar,
  ze as Button,
  Ns as ButtonSelect,
  Fn as Checkbox,
  bg as DataTable,
  wp as DataTableColumnHeader,
  _g as DataTableGrouped,
  Ip as DataTableViewOptions,
  yg as DateFormat,
  Yo as DisplayGraduated,
  hm as DynamicAlertDialog,
  Jm as DynamicComponentDialog,
  wg as DynamicComponentProvider,
  ba as DynamicConfirmComponentDialog,
  kr as DynamicDialog,
  qm as DynamicDrawer,
  nm as EmptyMini,
  Ng as InputBoolean,
  Ag as InputGraduated,
  Pg as InputRange,
  Dg as InputSearch,
  dp as PaginationCustom,
  im as SelectListOptions,
  Vn as SelectOptions,
  Lg as Tag,
  Uf as TranslationKey,
  xg as alert,
  Tg as confirmBoolean,
  kg as confirmGeneric,
  Og as confirmNumber,
  Qm as confirmSelect,
  Cg as confirmSelectList,
  Sg as confirmText,
  tm as dynamicComponent,
  As as escapeKey,
  Eg as openDynamicDialogComponent,
  je as useComponentTranslation,
  xr as useDynamicComponent,
  hg as useEscapeKey,
  Ps as useEscapeKeyWhile,
  gn as useToggleState
};
